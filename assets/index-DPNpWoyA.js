var zx=Object.defineProperty;var Bx=(o,t,i)=>t in o?zx(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var ar=(o,t,i)=>Bx(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Lf={exports:{}},Mo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function Fx(){if(Fg)return Mo;Fg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var Ig;function Ix(){return Ig||(Ig=1,Lf.exports=Fx()),Lf.exports}var _h=Ix(),Nf={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function Hx(){if(Hg)return oe;Hg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(N,at,Et){this.props=N,this.context=at,this.refs=w,this.updater=Et||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,at){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,at,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(N,at,Et){this.props=N,this.context=at,this.refs=w,this.updater=Et||M}var U=P.prototype=new v;U.constructor=P,E(U,y.prototype),U.isPureReactComponent=!0;var D=Array.isArray,I={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function z(N,at,Et,At,q,pt){return Et=pt.ref,{$$typeof:o,type:N,key:at,ref:Et!==void 0?Et:null,props:pt}}function Z(N,at){return z(N.type,at,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function A(N){var at={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Et){return at[Et]})}var H=/\/+/g;function ot(N,at){return typeof N=="object"&&N!==null&&N.key!=null?A(""+N.key):at.toString(36)}function nt(){}function ft(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(nt,nt):(N.status="pending",N.then(function(at){N.status==="pending"&&(N.status="fulfilled",N.value=at)},function(at){N.status==="pending"&&(N.status="rejected",N.reason=at)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ut(N,at,Et,At,q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var xt=!1;if(N===null)xt=!0;else switch(pt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(N.$$typeof){case o:case t:xt=!0;break;case g:return xt=N._init,ut(xt(N._payload),at,Et,At,q)}}if(xt)return q=q(N),xt=At===""?"."+ot(N,0):At,D(q)?(Et="",xt!=null&&(Et=xt.replace(H,"$&/")+"/"),ut(q,at,Et,"",function(jt){return jt})):q!=null&&(C(q)&&(q=Z(q,Et+(q.key==null||N&&N.key===q.key?"":(""+q.key).replace(H,"$&/")+"/")+xt)),at.push(q)),1;xt=0;var Tt=At===""?".":At+":";if(D(N))for(var Rt=0;Rt<N.length;Rt++)At=N[Rt],pt=Tt+ot(At,Rt),xt+=ut(At,at,Et,pt,q);else if(Rt=x(N),typeof Rt=="function")for(N=Rt.call(N),Rt=0;!(At=N.next()).done;)At=At.value,pt=Tt+ot(At,Rt++),xt+=ut(At,at,Et,pt,q);else if(pt==="object"){if(typeof N.then=="function")return ut(ft(N),at,Et,At,q);throw at=String(N),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return xt}function W(N,at,Et){if(N==null)return N;var At=[],q=0;return ut(N,At,"","",function(pt){return at.call(Et,pt,q++)}),At}function rt(N){if(N._status===-1){var at=N._result;at=at(),at.then(function(Et){(N._status===0||N._status===-1)&&(N._status=1,N._result=Et)},function(Et){(N._status===0||N._status===-1)&&(N._status=2,N._result=Et)}),N._status===-1&&(N._status=0,N._result=at)}if(N._status===1)return N._result.default;throw N._result}var K=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function St(){}return oe.Children={map:W,forEach:function(N,at,Et){W(N,function(){at.apply(this,arguments)},Et)},count:function(N){var at=0;return W(N,function(){at++}),at},toArray:function(N){return W(N,function(at){return at})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=p,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(N){return function(){return N.apply(null,arguments)}},oe.cloneElement=function(N,at,Et){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=E({},N.props),q=N.key,pt=void 0;if(at!=null)for(xt in at.ref!==void 0&&(pt=void 0),at.key!==void 0&&(q=""+at.key),at)!B.call(at,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&at.ref===void 0||(At[xt]=at[xt]);var xt=arguments.length-2;if(xt===1)At.children=Et;else if(1<xt){for(var Tt=Array(xt),Rt=0;Rt<xt;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return z(N.type,q,void 0,void 0,pt,At)},oe.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},oe.createElement=function(N,at,Et){var At,q={},pt=null;if(at!=null)for(At in at.key!==void 0&&(pt=""+at.key),at)B.call(at,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=at[At]);var xt=arguments.length-2;if(xt===1)q.children=Et;else if(1<xt){for(var Tt=Array(xt),Rt=0;Rt<xt;Rt++)Tt[Rt]=arguments[Rt+2];q.children=Tt}if(N&&N.defaultProps)for(At in xt=N.defaultProps,xt)q[At]===void 0&&(q[At]=xt[At]);return z(N,pt,void 0,void 0,null,q)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(N){return{$$typeof:d,render:N}},oe.isValidElement=C,oe.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:rt}},oe.memo=function(N,at){return{$$typeof:m,type:N,compare:at===void 0?null:at}},oe.startTransition=function(N){var at=I.T,Et={};I.T=Et;try{var At=N(),q=I.S;q!==null&&q(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(St,K)}catch(pt){K(pt)}finally{I.T=at}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(N){return I.H.use(N)},oe.useActionState=function(N,at,Et){return I.H.useActionState(N,at,Et)},oe.useCallback=function(N,at){return I.H.useCallback(N,at)},oe.useContext=function(N){return I.H.useContext(N)},oe.useDebugValue=function(){},oe.useDeferredValue=function(N,at){return I.H.useDeferredValue(N,at)},oe.useEffect=function(N,at){return I.H.useEffect(N,at)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(N,at,Et){return I.H.useImperativeHandle(N,at,Et)},oe.useInsertionEffect=function(N,at){return I.H.useInsertionEffect(N,at)},oe.useLayoutEffect=function(N,at){return I.H.useLayoutEffect(N,at)},oe.useMemo=function(N,at){return I.H.useMemo(N,at)},oe.useOptimistic=function(N,at){return I.H.useOptimistic(N,at)},oe.useReducer=function(N,at,Et){return I.H.useReducer(N,at,Et)},oe.useRef=function(N){return I.H.useRef(N)},oe.useState=function(N){return I.H.useState(N)},oe.useSyncExternalStore=function(N,at,Et){return I.H.useSyncExternalStore(N,at,Et)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.0.0",oe}var Gg;function od(){return Gg||(Gg=1,Nf.exports=Hx()),Nf.exports}var vh=od(),Of={exports:{}},Eo={},Pf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function Gx(){return Vg||(Vg=1,function(o){function t(W,rt){var K=W.length;W.push(rt);t:for(;0<K;){var St=K-1>>>1,N=W[St];if(0<l(N,rt))W[St]=rt,W[K]=N,K=St;else break t}}function i(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var rt=W[0],K=W.pop();if(K!==rt){W[0]=K;t:for(var St=0,N=W.length,at=N>>>1;St<at;){var Et=2*(St+1)-1,At=W[Et],q=Et+1,pt=W[q];if(0>l(At,K))q<N&&0>l(pt,At)?(W[St]=pt,W[q]=K,St=q):(W[St]=At,W[Et]=K,St=Et);else if(q<N&&0>l(pt,K))W[St]=pt,W[q]=K,St=q;else break t}}return rt}function l(W,rt){var K=W.sortIndex-rt.sortIndex;return K!==0?K:W.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,x=3,M=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function U(W){for(var rt=i(m);rt!==null;){if(rt.callback===null)r(m);else if(rt.startTime<=W)r(m),rt.sortIndex=rt.expirationTime,t(p,rt);else break;rt=i(m)}}function D(W){if(w=!1,U(W),!E)if(i(p)!==null)E=!0,ft();else{var rt=i(m);rt!==null&&ut(D,rt.startTime-W)}}var I=!1,B=-1,z=5,Z=-1;function C(){return!(o.unstable_now()-Z<z)}function A(){if(I){var W=o.unstable_now();Z=W;var rt=!0;try{t:{E=!1,w&&(w=!1,v(B),B=-1),M=!0;var K=x;try{e:{for(U(W),_=i(p);_!==null&&!(_.expirationTime>W&&C());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var N=St(_.expirationTime<=W);if(W=o.unstable_now(),typeof N=="function"){_.callback=N,U(W),rt=!0;break e}_===i(p)&&r(p),U(W)}else r(p);_=i(p)}if(_!==null)rt=!0;else{var at=i(m);at!==null&&ut(D,at.startTime-W),rt=!1}}break t}finally{_=null,x=K,M=!1}rt=void 0}}finally{rt?H():I=!1}}}var H;if(typeof P=="function")H=function(){P(A)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,nt=ot.port2;ot.port1.onmessage=A,H=function(){nt.postMessage(null)}}else H=function(){y(A,0)};function ft(){I||(I=!0,H())}function ut(W,rt){B=y(function(){W(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){E||M||(E=!0,ft())},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(p)},o.unstable_next=function(W){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var K=x;x=rt;try{return W()}finally{x=K}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,rt){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var K=x;x=W;try{return rt()}finally{x=K}},o.unstable_scheduleCallback=function(W,rt,K){var St=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?St+K:St):K=St,W){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=K+N,W={id:g++,callback:rt,priorityLevel:W,startTime:K,expirationTime:N,sortIndex:-1},K>St?(W.sortIndex=K,t(m,W),i(p)===null&&W===i(m)&&(w?(v(B),B=-1):w=!0,ut(D,K-St))):(W.sortIndex=N,t(p,W),E||M||(E=!0,ft())),W},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(W){var rt=x;return function(){var K=x;x=rt;try{return W.apply(this,arguments)}finally{x=K}}}}(zf)),zf}var kg;function Vx(){return kg||(kg=1,Pf.exports=Gx()),Pf.exports}var Bf={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function kx(){if(Xg)return Sn;Xg=1;var o=od();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Sn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Sn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Sn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Sn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Sn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Sn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Sn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Sn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Sn.requestFormReset=function(p){r.d.r(p)},Sn.unstable_batchedUpdates=function(p,m){return p(m)},Sn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Sn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Sn.version="19.0.0",Sn}var Wg;function Xx(){if(Wg)return Bf.exports;Wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bf.exports=kx(),Bf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Wx(){if(qg)return Eo;qg=1;var o=Vx(),t=od(),i=Xx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var z=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case d:return"Portal";case g:return"Profiler";case m:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,ot;function nt(e){if(H===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+ot}var ft=!1;function ut(e,n){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var it=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){it=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){it=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),S=h[0],b=h[1];if(S&&b){var O=S.split(`
`),V=b.split(`
`);for(u=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(s===O.length||u===V.length)for(s=O.length-1,u=V.length-1;1<=s&&0<=u&&O[s]!==V[u];)u--;for(;1<=s&&0<=u;s--,u--)if(O[s]!==V[u]){if(s!==1||u!==1)do if(s--,u--,0>u||O[s]!==V[u]){var ct=`
`+O[s].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=s&&0<=u);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function W(e){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return e=ut(e.type,!1),e;case 11:return e=ut(e.type.render,!1),e;case 1:return e=ut(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=W(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function K(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function St(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function N(e){if(K(e)!==e)throw Error(r(188))}function at(e){var n=e.alternate;if(!n){if(n=K(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return N(u),e;if(h===s)return N(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=h;else{for(var S=!1,b=u.child;b;){if(b===a){S=!0,a=u,s=h;break}if(b===s){S=!0,s=u,a=h;break}b=b.sibling}if(!S){for(b=h.child;b;){if(b===a){S=!0,a=h,s=u;break}if(b===s){S=!0,s=h,a=u;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pt={pending:!1,data:null,method:null,action:null},xt=[],Tt=-1;function Rt(e){return{current:e}}function jt(e){0>Tt||(e.current=xt[Tt],xt[Tt]=null,Tt--)}function Pt(e,n){Tt++,xt[Tt]=e.current,e.current=n}var Me=Rt(null),Ce=Rt(null),ae=Rt(null),F=Rt(null);function dn(e,n){switch(Pt(ae,n),Pt(Ce,e),Pt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?dg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=dg(e),n=pg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}jt(Me),Pt(Me,n)}function se(){jt(Me),jt(Ce),jt(ae)}function fe(e){e.memoizedState!==null&&Pt(F,e);var n=Me.current,a=pg(n,e.type);n!==a&&(Pt(Ce,e),Pt(Me,a))}function kt(e){Ce.current===e&&(jt(Me),jt(Ce)),F.current===e&&(jt(F),_o._currentValue=pt)}var we=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ht=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,ge=o.unstable_IdlePriority,Mt=o.log,Bt=o.unstable_setDisableYieldValue,Kt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Kt,e,void 0,(e.current.flags&128)===128)}catch{}}function re(e){if(typeof Mt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Kt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Lt,De=Math.log,k=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(De(e)/k|0)|0}var st=128,gt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,u=e.suspendedLanes,h=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~u,a!==0?s=Ct(a):(h&=b,h!==0?s=Ct(h):e||(S=b&~S,S!==0&&(s=Ct(S))))):(b=a&~u,b!==0?s=Ct(b):h!==0?s=Ct(h):e||(S=a&~S,S!==0&&(s=Ct(S)))),s===0?0:n!==0&&n!==s&&(n&u)===0&&(u=s&-s,S=n&-n,u>=S||u===32&&(S&4194176)!==0)?n:s}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ie(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=st;return st<<=1,(st&4194176)===0&&(st=128),e}function Ee(){var e=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),e}function En(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Tn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ho(e,n,a,s,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,O=e.expirationTimes,V=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Zt(a),_t=1<<ct;b[ct]=0,O[ct]=-1;var it=V[ct];if(it!==null)for(V[ct]=null,ct=0;ct<it.length;ct++){var lt=it[ct];lt!==null&&(lt.lane&=-536870913)}a&=~_t}s!==0&&Rs(e,s,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Rs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function xr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Cs(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Lg(e.type))}function Go(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Hn=Math.random().toString(36).slice(2),tn="__reactFiber$"+Hn,en="__reactProps$"+Hn,Ui="__reactContainer$"+Hn,Sr="__reactEvents$"+Hn,wc="__reactListeners$"+Hn,Dc="__reactHandles$"+Hn,Vo="__reactResources$"+Hn,Fa="__reactMarker$"+Hn;function ws(e){delete e[tn],delete e[en],delete e[Sr],delete e[wc],delete e[Dc]}function Li(e){var n=e[tn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[tn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_g(e);e!==null;){if(a=e[tn])return a;e=_g(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[tn]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function tt(e){var n=e[Vo];return n||(n=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[Fa]=!0}var Q=new Set,yt={};function bt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(yt[e]=n,e=0;e<n.length;e++)Q.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function _e(e){return we.call(Yt,e)?!0:we.call(ee,e)?!1:te.test(e)?Yt[e]=!0:(ee[e]=!0,!1)}function ve(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function nn(e){var n=Qt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){s=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=nn(e))}function Ln(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Qt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var bn=/[\n"\\]/g;function ln(e){return e.replace(bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,s,u,h,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?vn(e,S,ne(n)):a!=null?vn(e,S,ne(a)):s!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ne(b):e.removeAttribute("name")}function An(e,n,a,s,u,h,S,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=b?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function vn(e,n,a){n==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ve(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function yr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Nv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Nv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Md(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&yd(e,u,s)}else for(var h in n)n.hasOwnProperty(h)&&yd(e,h,n[h])}function Uc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Lc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Er=null;function Ed(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[en]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ln(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[en]||null;if(!u)throw Error(r(90));Ue(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ln(s)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ve(e,!!a.multiple,n,!1)}}}var Oc=!1;function Td(e,n,a){if(Oc)return e(n,a);Oc=!0;try{var s=e(n);return s}finally{if(Oc=!1,(Mr!==null||Er!==null)&&(Al(),Mr&&(n=Mr,e=Er,Er=Mr=null,Ed(n),e)))for(n=0;n<e.length;n++)Ed(e[n])}}function Ds(e,n){var a=e.stateNode;if(a===null)return null;var s=a[en]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pc=!1;if(Nt)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Pc=!1}var la=null,zc=null,Xo=null;function bd(){if(Xo)return Xo;var e,n=zc,a=n.length,s,u="value"in la?la.value:la.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[h-s];s++);return Xo=u.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Ad(){return!1}function On(e){function n(a,s,u,h,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?qo:Ad,this.isPropagationStopped=Ad,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=On(Ia),Ls=A({},Ia,{view:0,detail:0}),zv=On(Ls),Bc,Fc,Ns,Zo=A({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ns&&(Ns&&e.type==="mousemove"?(Bc=e.screenX-Ns.screenX,Fc=e.screenY-Ns.screenY):Fc=Bc=0,Ns=e),Bc)},movementY:function(e){return"movementY"in e?e.movementY:Fc}}),Rd=On(Zo),Bv=A({},Zo,{dataTransfer:0}),Fv=On(Bv),Iv=A({},Ls,{relatedTarget:0}),Ic=On(Iv),Hv=A({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=On(Hv),Vv=A({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=On(Vv),Xv=A({},Ia,{data:0}),Cd=On(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function Hc(){return Zv}var Qv=A({},Ls,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=On(Qv),jv=A({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=On(jv),Jv=A({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),$v=On(Jv),t0=A({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=On(t0),n0=A({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=On(n0),a0=A({},Ia,{newState:0,oldState:0}),r0=On(a0),s0=[9,13,27,32],Gc=Nt&&"CompositionEvent"in window,Os=null;Nt&&"documentMode"in document&&(Os=document.documentMode);var o0=Nt&&"TextEvent"in window&&!Os,Dd=Nt&&(!Gc||Os&&8<Os&&11>=Os),Ud=" ",Ld=!1;function Nd(e,n){switch(e){case"keyup":return s0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function l0(e,n){switch(e){case"compositionend":return Od(n);case"keypress":return n.which!==32?null:(Ld=!0,Ud);case"textInput":return e=n.data,e===Ud&&Ld?null:e;default:return null}}function c0(e,n){if(Tr)return e==="compositionend"||!Gc&&Nd(e,n)?(e=bd(),Xo=zc=la=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dd&&n.locale!=="ko"?null:n.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!u0[e.type]:n==="textarea"}function zd(e,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Ul(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ps=null,zs=null;function f0(e){lg(e,0)}function Qo(e){var n=X(e);if(Ln(n))return e}function Bd(e,n){if(e==="change")return n}var Fd=!1;if(Nt){var Vc;if(Nt){var kc="oninput"in document;if(!kc){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),kc=typeof Id.oninput=="function"}Vc=kc}else Vc=!1;Fd=Vc&&(!document.documentMode||9<document.documentMode)}function Hd(){Ps&&(Ps.detachEvent("onpropertychange",Gd),zs=Ps=null)}function Gd(e){if(e.propertyName==="value"&&Qo(zs)){var n=[];zd(n,zs,e,Nc(e)),Td(f0,n)}}function h0(e,n,a){e==="focusin"?(Hd(),Ps=n,zs=a,Ps.attachEvent("onpropertychange",Gd)):e==="focusout"&&Hd()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(zs)}function p0(e,n){if(e==="click")return Qo(n)}function m0(e,n){if(e==="input"||e==="change")return Qo(n)}function g0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:g0;function Bs(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!we.call(n,u)||!Gn(e[u],n[u]))return!1}return!0}function Vd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kd(e,n){var a=Vd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vd(a)}}function Xd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Xd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Wd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=li(e.document)}return n}function Xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _0(e,n){var a=Wd(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Xd(n.ownerDocument.documentElement,n)){if(s!==null&&Xc(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,h=Math.min(s.start,u);s=s.end===void 0?h:Math.min(s.end,u),!a.extend&&h>s&&(u=s,s=h,h=u),u=kd(n,h);var S=kd(n,s);u&&S&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),h>s?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var v0=Nt&&"documentMode"in document&&11>=document.documentMode,br=null,Wc=null,Fs=null,qc=!1;function qd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||br==null||br!==li(s)||(s=br,"selectionStart"in s&&Xc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Fs&&Bs(Fs,s)||(Fs=s,s=Ul(Wc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=br)))}function Ha(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},Yc={},Yd={};Nt&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ga(e){if(Yc[e])return Yc[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Yd)return Yc[e]=n[a];return e}var Zd=Ga("animationend"),Qd=Ga("animationiteration"),Kd=Ga("animationstart"),x0=Ga("transitionrun"),S0=Ga("transitionstart"),y0=Ga("transitioncancel"),jd=Ga("transitionend"),Jd=new Map,$d="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(e,n){Jd.set(e,n),bt(n,[e])}var Qn=[],Rr=0,Zc=0;function Ko(){for(var e=Rr,n=Zc=Rr=0;n<e;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var u=Qn[n];Qn[n++]=null;var h=Qn[n];if(Qn[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}h!==0&&tp(a,u,h)}}function jo(e,n,a,s){Qn[Rr++]=e,Qn[Rr++]=n,Qn[Rr++]=a,Qn[Rr++]=s,Zc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Qc(e,n,a,s){return jo(e,n,a,s),Jo(e)}function ca(e,n){return jo(e,null,null,n),Jo(e)}function tp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,s=h.alternate,s!==null&&(s.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;u&&n!==null&&e.tag===3&&(h=e.stateNode,u=31-Zt(a),h=h.hiddenUpdates,e=h[u],e===null?h[u]=[n]:e.push(n),n.lane=a|536870912)}function Jo(e){if(50<co)throw co=0,ef=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={},ep=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=ep.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},ep.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var wr=[],Dr=0,$o=null,tl=0,jn=[],Jn=0,Va=null,Ni=1,Oi="";function ka(e,n){wr[Dr++]=tl,wr[Dr++]=$o,$o=e,tl=n}function np(e,n,a){jn[Jn++]=Ni,jn[Jn++]=Oi,jn[Jn++]=Va,Va=e;var s=Ni;e=Oi;var u=32-Zt(s)-1;s&=~(1<<u),a+=1;var h=32-Zt(n)+u;if(30<h){var S=u-u%5;h=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Ni=1<<32-Zt(n)+u|a<<u|s,Oi=h+e}else Ni=1<<h|a<<u|s,Oi=e}function Kc(e){e.return!==null&&(ka(e,1),np(e,1,0))}function jc(e){for(;e===$o;)$o=wr[--Dr],wr[Dr]=null,tl=wr[--Dr],wr[Dr]=null;for(;e===Va;)Va=jn[--Jn],jn[Jn]=null,Oi=jn[--Jn],jn[Jn]=null,Ni=jn[--Jn],jn[Jn]=null}var Rn=null,mn=null,be=!1,ui=null,Mi=!1,Jc=Error(r(519));function Xa(e){var n=Error(r(418,""));throw Gs(Kn(n,e)),Jc}function ip(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[tn]=e,n[en]=s,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<fo.length;a++)Se(fo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),An(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),yr(n,s.value,s.defaultValue,s.children),xe(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||hg(n.textContent,a)?(s.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),s.onScroll!=null&&Se("scroll",n),s.onScrollEnd!=null&&Se("scrollend",n),s.onClick!=null&&(n.onclick=Ll),n=!0):n=!1,n||Xa(e)}function ap(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:Rn=Rn.return}}function Is(e){if(e!==Rn)return!1;if(!be)return ap(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||xf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&mn&&Xa(e),ap(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){mn=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}mn=null}}else mn=Rn?hi(e.stateNode.nextSibling):null;return!0}function Hs(){mn=Rn=null,be=!1}function Gs(e){ui===null?ui=[e]:ui.push(e)}var Vs=Error(r(460)),rp=Error(r(474)),$c={then:function(){}};function sp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function el(){}function op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(el,el),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Vs?Error(r(483)):e;default:if(typeof n.status=="string")n.then(el,el);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Vs?Error(r(483)):e}throw ks=n,Vs}}var ks=null;function lp(){if(ks===null)throw Error(r(459));var e=ks;return ks=null,e}var Ur=null,Xs=0;function nl(e){var n=Xs;return Xs+=1,Ur===null&&(Ur=[]),op(Ur,e,n)}function Ws(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function il(e,n){throw n.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cp(e){var n=e._init;return n(e._payload)}function up(e){function n(j,G){if(e){var $=j.deletions;$===null?(j.deletions=[G],j.flags|=16):$.push(G)}}function a(j,G){if(!e)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function s(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function u(j,G){return j=ya(j,G),j.index=0,j.sibling=null,j}function h(j,G,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<G?(j.flags|=33554434,G):$):(j.flags|=33554434,G)):(j.flags|=1048576,G)}function S(j){return e&&j.alternate===null&&(j.flags|=33554434),j}function b(j,G,$,mt){return G===null||G.tag!==6?(G=Yu($,j.mode,mt),G.return=j,G):(G=u(G,$),G.return=j,G)}function O(j,G,$,mt){var It=$.type;return It===p?ct(j,G,$.props.children,mt,$.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&cp(It)===G.type)?(G=u(G,$.props),Ws(G,$),G.return=j,G):(G=yl($.type,$.key,$.props,null,j.mode,mt),Ws(G,$),G.return=j,G)}function V(j,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Zu($,j.mode,mt),G.return=j,G):(G=u(G,$.children||[]),G.return=j,G)}function ct(j,G,$,mt,It){return G===null||G.tag!==7?(G=tr($,j.mode,mt,It),G.return=j,G):(G=u(G,$),G.return=j,G)}function _t(j,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Yu(""+G,j.mode,$),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return $=yl(G.type,G.key,G.props,null,j.mode,$),Ws($,G),$.return=j,$;case d:return G=Zu(G,j.mode,$),G.return=j,G;case P:var mt=G._init;return G=mt(G._payload),_t(j,G,$)}if(At(G)||B(G))return G=tr(G,j.mode,$,null),G.return=j,G;if(typeof G.then=="function")return _t(j,nl(G),$);if(G.$$typeof===M)return _t(j,vl(j,G),$);il(j,G)}return null}function it(j,G,$,mt){var It=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return It!==null?null:b(j,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return $.key===It?O(j,G,$,mt):null;case d:return $.key===It?V(j,G,$,mt):null;case P:return It=$._init,$=It($._payload),it(j,G,$,mt)}if(At($)||B($))return It!==null?null:ct(j,G,$,mt,null);if(typeof $.then=="function")return it(j,G,nl($),mt);if($.$$typeof===M)return it(j,G,vl(j,$),mt);il(j,$)}return null}function lt(j,G,$,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get($)||null,b(G,j,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case f:return j=j.get(mt.key===null?$:mt.key)||null,O(G,j,mt,It);case d:return j=j.get(mt.key===null?$:mt.key)||null,V(G,j,mt,It);case P:var he=mt._init;return mt=he(mt._payload),lt(j,G,$,mt,It)}if(At(mt)||B(mt))return j=j.get($)||null,ct(G,j,mt,It,null);if(typeof mt.then=="function")return lt(j,G,$,nl(mt),It);if(mt.$$typeof===M)return lt(j,G,$,vl(G,mt),It);il(G,mt)}return null}function Vt(j,G,$,mt){for(var It=null,he=null,qt=G,Jt=G=0,fn=null;qt!==null&&Jt<$.length;Jt++){qt.index>Jt?(fn=qt,qt=null):fn=qt.sibling;var Ae=it(j,qt,$[Jt],mt);if(Ae===null){qt===null&&(qt=fn);break}e&&qt&&Ae.alternate===null&&n(j,qt),G=h(Ae,G,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae,qt=fn}if(Jt===$.length)return a(j,qt),be&&ka(j,Jt),It;if(qt===null){for(;Jt<$.length;Jt++)qt=_t(j,$[Jt],mt),qt!==null&&(G=h(qt,G,Jt),he===null?It=qt:he.sibling=qt,he=qt);return be&&ka(j,Jt),It}for(qt=s(qt);Jt<$.length;Jt++)fn=lt(qt,j,Jt,$[Jt],mt),fn!==null&&(e&&fn.alternate!==null&&qt.delete(fn.key===null?Jt:fn.key),G=h(fn,G,Jt),he===null?It=fn:he.sibling=fn,he=fn);return e&&qt.forEach(function(Ca){return n(j,Ca)}),be&&ka(j,Jt),It}function ie(j,G,$,mt){if($==null)throw Error(r(151));for(var It=null,he=null,qt=G,Jt=G=0,fn=null,Ae=$.next();qt!==null&&!Ae.done;Jt++,Ae=$.next()){qt.index>Jt?(fn=qt,qt=null):fn=qt.sibling;var Ca=it(j,qt,Ae.value,mt);if(Ca===null){qt===null&&(qt=fn);break}e&&qt&&Ca.alternate===null&&n(j,qt),G=h(Ca,G,Jt),he===null?It=Ca:he.sibling=Ca,he=Ca,qt=fn}if(Ae.done)return a(j,qt),be&&ka(j,Jt),It;if(qt===null){for(;!Ae.done;Jt++,Ae=$.next())Ae=_t(j,Ae.value,mt),Ae!==null&&(G=h(Ae,G,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae);return be&&ka(j,Jt),It}for(qt=s(qt);!Ae.done;Jt++,Ae=$.next())Ae=lt(qt,j,Jt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&qt.delete(Ae.key===null?Jt:Ae.key),G=h(Ae,G,Jt),he===null?It=Ae:he.sibling=Ae,he=Ae);return e&&qt.forEach(function(Px){return n(j,Px)}),be&&ka(j,Jt),It}function We(j,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===p&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case f:t:{for(var It=$.key;G!==null;){if(G.key===It){if(It=$.type,It===p){if(G.tag===7){a(j,G.sibling),mt=u(G,$.props.children),mt.return=j,j=mt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&cp(It)===G.type){a(j,G.sibling),mt=u(G,$.props),Ws(mt,$),mt.return=j,j=mt;break t}a(j,G);break}else n(j,G);G=G.sibling}$.type===p?(mt=tr($.props.children,j.mode,mt,$.key),mt.return=j,j=mt):(mt=yl($.type,$.key,$.props,null,j.mode,mt),Ws(mt,$),mt.return=j,j=mt)}return S(j);case d:t:{for(It=$.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(j,G.sibling),mt=u(G,$.children||[]),mt.return=j,j=mt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}mt=Zu($,j.mode,mt),mt.return=j,j=mt}return S(j);case P:return It=$._init,$=It($._payload),We(j,G,$,mt)}if(At($))return Vt(j,G,$,mt);if(B($)){if(It=B($),typeof It!="function")throw Error(r(150));return $=It.call($),ie(j,G,$,mt)}if(typeof $.then=="function")return We(j,G,nl($),mt);if($.$$typeof===M)return We(j,G,vl(j,$),mt);il(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(j,G.sibling),mt=u(G,$),mt.return=j,j=mt):(a(j,G),mt=Yu($,j.mode,mt),mt.return=j,j=mt),S(j)):a(j,G)}return function(j,G,$,mt){try{Xs=0;var It=We(j,G,$,mt);return Ur=null,It}catch(qt){if(qt===Vs)throw qt;var he=ni(29,qt,null,j.mode);return he.lanes=mt,he.return=j,he}finally{}}}var Wa=up(!0),fp=up(!1),Lr=Rt(null),al=Rt(0);function hp(e,n){e=Wi,Pt(al,e),Pt(Lr,n),Wi=e|n.baseLanes}function tu(){Pt(al,Wi),Pt(Lr,Lr.current)}function eu(){Wi=al.current,jt(Lr),jt(al)}var $n=Rt(null),Ei=null;function ua(e){var n=e.alternate;Pt(an,an.current&1),Pt($n,e),Ei===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Ei=e)}function dp(e){if(e.tag===22){if(Pt(an,an.current),Pt($n,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else fa()}function fa(){Pt(an,an.current),Pt($n,$n.current)}function Pi(e){jt($n),Ei===e&&(Ei=null),jt(an)}var an=Rt(0);function rl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var M0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},E0=o.unstable_scheduleCallback,T0=o.unstable_NormalPriority,rn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nu(){return{controller:new M0,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&E0(T0,function(){e.controller.abort()})}var Ys=null,iu=0,Nr=0,Or=null;function b0(e,n){if(Ys===null){var a=Ys=[];iu=0,Nr=uf(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return iu++,n.then(pp,pp),n}function pp(){if(--iu===0&&Ys!==null){Or!==null&&(Or.status="fulfilled");var e=Ys;Ys=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function A0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var mp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&b0(e,n),mp!==null&&mp(e,n)};var qa=Rt(null);function au(){var e=qa.current;return e!==null?e:ze.pooledCache}function sl(e,n){n===null?Pt(qa,qa.current):Pt(qa,n.pool)}function gp(){var e=au();return e===null?null:{parent:rn._currentValue,pool:e}}var ha=0,ue=null,Le=null,Qe=null,ol=!1,Pr=!1,Ya=!1,ll=0,Zs=0,zr=null,R0=0;function Ye(){throw Error(r(321))}function ru(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gn(e[a],n[a]))return!1;return!0}function su(e,n,a,s,u,h){return ha=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Za:da,Ya=!1,h=a(s,u),Ya=!1,Pr&&(h=vp(n,a,s,u)),_p(e),h}function _p(e){C.H=Ti;var n=Le!==null&&Le.next!==null;if(ha=0,Qe=Le=ue=null,ol=!1,Zs=0,zr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&_l(e)&&(cn=!0))}function vp(e,n,a,s){ue=e;var u=0;do{if(Pr&&(zr=null),Zs=0,Pr=!1,25<=u)throw Error(r(301));if(u+=1,Qe=Le=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}C.H=Qa,h=n(a,s)}while(Pr);return h}function C0(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?Qs(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),n}function ou(){var e=ll!==0;return ll=0,e}function lu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function cu(e){if(ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ol=!1}ha=0,Qe=Le=ue=null,Pr=!1,Zs=ll=0,zr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ke(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Qe===null?ue.memoizedState:Qe.next;if(n!==null)Qe=n,Le=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Qe===null?ue.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}var cl;cl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Qs(e){var n=Zs;return Zs+=1,zr===null&&(zr=[]),e=op(zr,e,n),n=ue,(Qe===null?n.memoizedState:Qe.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Za:da),e}function ul(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qs(e);if(e.$$typeof===M)return xn(e)}throw Error(r(438,String(e)))}function uu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=cl(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function zi(e,n){return typeof n=="function"?n(e):n}function fl(e){var n=Ke();return fu(n,Le,e)}function fu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,h=s.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,s.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var b=S=null,O=null,V=n,ct=!1;do{var _t=V.lane&-536870913;if(_t!==V.lane?(ye&_t)===_t:(ha&_t)===_t){var it=V.revertLane;if(it===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),_t===Nr&&(ct=!0);else if((ha&it)===it){V=V.next,it===Nr&&(ct=!0);continue}else _t={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},O===null?(b=O=_t,S=h):O=O.next=_t,ue.lanes|=it,Ma|=it;_t=V.action,Ya&&a(h,_t),h=V.hasEagerState?V.eagerState:a(h,_t)}else it={lane:_t,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},O===null?(b=O=it,S=h):O=O.next=it,ue.lanes|=_t,Ma|=_t;V=V.next}while(V!==null&&V!==n);if(O===null?S=h:O.next=b,!Gn(h,e.memoizedState)&&(cn=!0,ct&&(a=Or,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=O,s.lastRenderedState=h}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function hu(e){var n=Ke(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Gn(h,n.memoizedState)||(cn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,s]}function xp(e,n,a){var s=ue,u=Ke(),h=be;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Le||u).memoizedState,a);if(S&&(u.memoizedState=a,cn=!0),u=u.queue,mu(Mp.bind(null,s,u,e),[e]),u.getSnapshot!==n||S||Qe!==null&&Qe.memoizedState.tag&1){if(s.flags|=2048,Br(9,yp.bind(null,s,u,a,n),{destroy:void 0},null),ze===null)throw Error(r(349));h||(ha&60)!==0||Sp(s,n,a)}return a}function Sp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=cl(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function yp(e,n,a,s){n.value=a,n.getSnapshot=s,Ep(n)&&Tp(e)}function Mp(e,n,a){return a(function(){Ep(n)&&Tp(e)})}function Ep(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gn(e,a)}catch{return!0}}function Tp(e){var n=ca(e,2);n!==null&&Cn(n,e,2)}function du(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),Ya){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},n}function bp(e,n,a,s){return e.baseState=a,fu(e,Le,typeof s=="function"?s:zi)}function w0(e,n,a,s,u){if(pl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};C.T!==null?a(!0):h.isTransition=!1,s(h),a=n.pending,a===null?(h.next=n.pending=h,Ap(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Ap(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var h=C.T,S={};C.T=S;try{var b=a(u,s),O=C.S;O!==null&&O(S,b),Rp(e,n,b)}catch(V){pu(e,n,V)}finally{C.T=h}}else try{h=a(u,s),Rp(e,n,h)}catch(V){pu(e,n,V)}}function Rp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Cp(e,n,s)},function(s){return pu(e,n,s)}):Cp(e,n,a)}function Cp(e,n,a){n.status="fulfilled",n.value=a,wp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ap(e,a)))}function pu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,wp(n),n=n.next;while(n!==s)}e.action=null}function wp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Dp(e,n){return n}function Up(e,n){if(be){var a=ze.formState;if(a!==null){t:{var s=ue;if(be){if(mn){e:{for(var u=mn,h=Mi;u.nodeType!==8;){if(!h){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){mn=hi(u.nextSibling),s=u.data==="F!";break t}}Xa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:n},a.queue=s,a=Qp.bind(null,ue,s),s.dispatch=a,s=du(!1),h=Su.bind(null,ue,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=w0.bind(null,ue,u,h,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function Lp(e){var n=Ke();return Np(n,Le,e)}function Np(e,n,a){n=fu(e,n,Dp)[0],e=fl(zi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Qs(n):n;var s=Ke(),u=s.queue,h=u.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Br(9,D0.bind(null,u,a),{destroy:void 0},null)),[n,h,e]}function D0(e,n){e.action=n}function Op(e){var n=Ke(),a=Le;if(a!==null)return Np(n,a,e);Ke(),n=n.memoizedState,a=Ke();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=cl(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Pp(){return Ke().memoizedState}function hl(e,n,a,s){var u=Pn();ue.flags|=e,u.memoizedState=Br(1|n,a,{destroy:void 0},s===void 0?null:s)}function dl(e,n,a,s){var u=Ke();s=s===void 0?null:s;var h=u.memoizedState.inst;Le!==null&&s!==null&&ru(s,Le.memoizedState.deps)?u.memoizedState=Br(n,a,h,s):(ue.flags|=e,u.memoizedState=Br(1|n,a,h,s))}function zp(e,n){hl(8390656,8,e,n)}function mu(e,n){dl(2048,8,e,n)}function Bp(e,n){return dl(4,2,e,n)}function Fp(e,n){return dl(4,4,e,n)}function Ip(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hp(e,n,a){a=a!=null?a.concat([e]):null,dl(4,4,Ip.bind(null,n,e),a)}function gu(){}function Gp(e,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ru(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Vp(e,n){var a=Ke();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ru(n,s[1]))return s[0];if(s=e(),Ya){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[s,n],s}function _u(e,n,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Xm(),ue.lanes|=e,Ma|=e,a)}function kp(e,n,a,s){return Gn(a,n)?a:Lr.current!==null?(e=_u(e,a,s),Gn(e,n)||(cn=!0),e):(ha&42)===0?(cn=!0,e.memoizedState=a):(e=Xm(),ue.lanes|=e,Ma|=e,n)}function Xp(e,n,a,s,u){var h=q.p;q.p=h!==0&&8>h?h:8;var S=C.T,b={};C.T=b,Su(e,!1,n,a);try{var O=u(),V=C.S;if(V!==null&&V(b,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ct=A0(O,s);Ks(e,n,ct,Wn(e))}else Ks(e,n,s,Wn(e))}catch(_t){Ks(e,n,{then:function(){},status:"rejected",reason:_t},Wn())}finally{q.p=h,C.T=S}}function U0(){}function vu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=Wp(e).queue;Xp(e,u,n,pt,a===null?U0:function(){return qp(e),a(s)})}function Wp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:pt,baseState:pt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:pt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function qp(e){var n=Wp(e).next.queue;Ks(e,n,{},Wn())}function xu(){return xn(_o)}function Yp(){return Ke().memoizedState}function Zp(){return Ke().memoizedState}function L0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();e=ga(a);var s=_a(n,e,a);s!==null&&(Cn(s,n,a),$s(s,n,a)),n={cache:nu()},e.payload=n;return}n=n.return}}function N0(e,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},pl(e)?Kp(n,a):(a=Qc(e,n,a,s),a!==null&&(Cn(a,e,s),jp(a,n,s)))}function Qp(e,n,a){var s=Wn();Ks(e,n,a,s)}function Ks(e,n,a,s){var u={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(pl(e))Kp(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,b=h(S,a);if(u.hasEagerState=!0,u.eagerState=b,Gn(b,S))return jo(e,n,u,0),ze===null&&Ko(),!1}catch{}finally{}if(a=Qc(e,n,u,s),a!==null)return Cn(a,e,s),jp(a,n,s),!0}return!1}function Su(e,n,a,s){if(s={lane:2,revertLane:uf(),action:s,hasEagerState:!1,eagerState:null,next:null},pl(e)){if(n)throw Error(r(479))}else n=Qc(e,a,s,2),n!==null&&Cn(n,e,2)}function pl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Kp(e,n){Pr=ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jp(e,n,a){if((a&4194176)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,yi(e,a)}}var Ti={readContext:xn,use:ul,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};Ti.useCacheRefresh=Ye,Ti.useMemoCache=Ye,Ti.useHostTransitionStatus=Ye,Ti.useFormState=Ye,Ti.useActionState=Ye,Ti.useOptimistic=Ye;var Za={readContext:xn,use:ul,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:zp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,hl(4194308,4,Ip.bind(null,n,e),a)},useLayoutEffect:function(e,n){return hl(4194308,4,e,n)},useInsertionEffect:function(e,n){hl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(Ya){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(Ya){re(!0);try{a(n)}finally{re(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=N0.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=du(e);var n=e.queue,a=Qp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gu,useDeferredValue:function(e,n){var a=Pn();return _u(a,e,n)},useTransition:function(){var e=du(!1);return e=Xp.bind(null,ue,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,u=Pn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(ye&60)!==0||Sp(s,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,zp(Mp.bind(null,s,h,e),[e]),s.flags|=2048,Br(9,yp.bind(null,s,h,a,n),{destroy:void 0},null),a},useId:function(){var e=Pn(),n=ze.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-Zt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=ll++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=R0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Pn().memoizedState=L0.bind(null,ue)}};Za.useMemoCache=uu,Za.useHostTransitionStatus=xu,Za.useFormState=Up,Za.useActionState=Up,Za.useOptimistic=function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Su.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var da={readContext:xn,use:ul,useCallback:Gp,useContext:xn,useEffect:mu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Fp,useMemo:Vp,useReducer:fl,useRef:Pp,useState:function(){return fl(zi)},useDebugValue:gu,useDeferredValue:function(e,n){var a=Ke();return kp(a,Le.memoizedState,e,n)},useTransition:function(){var e=fl(zi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:Qs(e),n]},useSyncExternalStore:xp,useId:Yp};da.useCacheRefresh=Zp,da.useMemoCache=uu,da.useHostTransitionStatus=xu,da.useFormState=Lp,da.useActionState=Lp,da.useOptimistic=function(e,n){var a=Ke();return bp(a,Le,e,n)};var Qa={readContext:xn,use:ul,useCallback:Gp,useContext:xn,useEffect:mu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:Fp,useMemo:Vp,useReducer:hu,useRef:Pp,useState:function(){return hu(zi)},useDebugValue:gu,useDeferredValue:function(e,n){var a=Ke();return Le===null?_u(a,e,n):kp(a,Le.memoizedState,e,n)},useTransition:function(){var e=hu(zi)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:Qs(e),n]},useSyncExternalStore:xp,useId:Yp};Qa.useCacheRefresh=Zp,Qa.useMemoCache=uu,Qa.useHostTransitionStatus=xu,Qa.useFormState=Op,Qa.useActionState=Op,Qa.useOptimistic=function(e,n){var a=Ke();return Le!==null?bp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function yu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mu={isMounted:function(e){return(e=e._reactInternals)?K(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Wn(),u=ga(s);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,s),n!==null&&(Cn(n,e,s),$s(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Wn(),u=ga(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,s),n!==null&&(Cn(n,e,s),$s(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Wn(),s=ga(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(Cn(n,e,a),$s(n,e,a))}};function Jp(e,n,a,s,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,S):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,s)||!Bs(u,h):!0}function $p(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Mu.enqueueReplaceState(n,n.state,null)}function Ka(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function tm(e){ml(e)}function em(e){console.error(e)}function nm(e){ml(e)}function gl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function im(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Eu(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(e,n)},a}function am(e){return e=ga(e),e.tag=3,e}function rm(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;e.payload=function(){return u(h)},e.callback=function(){im(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){im(n,a,s),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function O0(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Ei===null?rf():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===$c?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(e,s,u)),!1;case 22:return a.flags|=65536,s===$c?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(e,s,u)),!1}throw Error(r(435,a.tag))}return of(e,s,u),rf(),!1}if(be)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Jc&&(e=Error(r(422),{cause:s}),Gs(Kn(e,a)))):(s!==Jc&&(n=Error(r(423),{cause:s}),Gs(Kn(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=Kn(s,a),u=Eu(e.stateNode,s,u),Fu(e,u),Xe!==4&&(Xe=2)),!1;var h=Error(r(520),{cause:s});if(h=Kn(h,a),oo===null?oo=[h]:oo.push(h),Xe!==4&&(Xe=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Eu(a.stateNode,s,e),Fu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ea===null||!Ea.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=am(u),rm(u,e,a,s),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var sm=Error(r(461)),cn=!1;function gn(e,n,a,s){n.child=e===null?fp(n,null,a,s):Wa(n,e.child,a,s)}function om(e,n,a,s,u){a=a.render;var h=n.ref;if("ref"in s){var S={};for(var b in s)b!=="ref"&&(S[b]=s[b])}else S=s;return Ja(n),s=su(e,n,a,S,h,u),b=ou(),e!==null&&!cn?(lu(e,n,u),Bi(e,n,u)):(be&&b&&Kc(n),n.flags|=1,gn(e,n,s,u),n.child)}function lm(e,n,a,s,u){if(e===null){var h=a.type;return typeof h=="function"&&!qu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,cm(e,n,h,s,u)):(e=yl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Lu(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(S,s)&&e.ref===n.ref)return Bi(e,n,u)}return n.flags|=1,e=ya(h,s),e.ref=n.ref,e.return=n,n.child=e}function cm(e,n,a,s,u){if(e!==null){var h=e.memoizedProps;if(Bs(h,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=h,Lu(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Bi(e,n,u)}return Tu(e,n,a,s,u)}function um(e,n,a){var s=n.pendingProps,u=s.children,h=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(js(e,n),s.mode==="hidden"||h){if((n.flags&128)!==0){if(s=S!==null?S.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~s}else n.childLanes=0,n.child=null;return fm(e,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,S!==null?S.cachePool:null),S!==null?hp(n,S):tu(),dp(n);else return n.lanes=n.childLanes=536870912,fm(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(sl(n,S.cachePool),hp(n,S),fa(),n.memoizedState=null):(e!==null&&sl(n,null),tu(),fa());return gn(e,n,u,a),n.child}function fm(e,n,a,s){var u=au();return u=u===null?null:{parent:rn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&sl(n,null),tu(),dp(n),e!==null&&Js(e,n,s,!0),null}function js(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Tu(e,n,a,s,u){return Ja(n),a=su(e,n,a,s,void 0,u),s=ou(),e!==null&&!cn?(lu(e,n,u),Bi(e,n,u)):(be&&s&&Kc(n),n.flags|=1,gn(e,n,a,u),n.child)}function hm(e,n,a,s,u,h){return Ja(n),n.updateQueue=null,a=vp(n,s,a,u),_p(e),s=ou(),e!==null&&!cn?(lu(e,n,h),Bi(e,n,h)):(be&&s&&Kc(n),n.flags|=1,gn(e,n,a,h),n.child)}function dm(e,n,a,s,u){if(Ja(n),n.stateNode===null){var h=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(h=xn(S)),h=new a(s,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Mu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=s,h.state=n.memoizedState,h.refs={},zu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?xn(S):Cr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(yu(n,a,S,s),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Mu.enqueueReplaceState(h,h.state,null),eo(n,s,h,u),to(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,O=Ka(a,b);h.props=O;var V=h.context,ct=a.contextType;S=Cr,typeof ct=="object"&&ct!==null&&(S=xn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||V!==S)&&$p(n,h,s,S),ma=!1;var it=n.memoizedState;h.state=it,eo(n,s,h,u),to(),V=n.memoizedState,b||it!==V||ma?(typeof _t=="function"&&(yu(n,a,_t,s),V=n.memoizedState),(O=ma||Jp(n,a,O,s,it,V,S))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=V),h.props=s,h.state=V,h.context=S,s=O):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{h=n.stateNode,Bu(e,n),S=n.memoizedProps,ct=Ka(a,S),h.props=ct,_t=n.pendingProps,it=h.context,V=a.contextType,O=Cr,typeof V=="object"&&V!==null&&(O=xn(V)),b=a.getDerivedStateFromProps,(V=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_t||it!==O)&&$p(n,h,s,O),ma=!1,it=n.memoizedState,h.state=it,eo(n,s,h,u),to();var lt=n.memoizedState;S!==_t||it!==lt||ma||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof b=="function"&&(yu(n,a,b,s),lt=n.memoizedState),(ct=ma||Jp(n,a,ct,s,it,lt,O)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,lt,O),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,lt,O)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),h.props=s,h.state=lt,h.context=O,s=ct):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return h=s,js(e,n),s=(n.flags&128)!==0,h||s?(h=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&s?(n.child=Wa(n,e.child,null,u),n.child=Wa(n,null,a,u)):gn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Bi(e,n,u),e}function pm(e,n,a,s){return Hs(),n.flags|=256,gn(e,n,a,s),n.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Au(e){return{baseLanes:e,cachePool:gp()}}function Ru(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function mm(e,n,a){var s=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?ua(n):fa(),be){var b=mn,O;if(O=b){t:{for(O=b,b=Mi;O.nodeType!==8;){if(!b){b=null;break t}if(O=hi(O.nextSibling),O===null){b=null;break t}}b=O}b!==null?(n.memoizedState={dehydrated:b,treeContext:Va!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},O=ni(18,null,null,0),O.stateNode=b,O.return=n,n.child=O,Rn=n,mn=null,O=!0):O=!1}O||Xa(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return b=s.children,s=s.fallback,u?(fa(),u=n.mode,b=wu({mode:"hidden",children:b},u),s=tr(s,u,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,u=n.child,u.memoizedState=Au(a),u.childLanes=Ru(e,S,a),n.memoizedState=bu,s):(ua(n),Cu(n,b))}if(O=e.memoizedState,O!==null&&(b=O.dehydrated,b!==null)){if(h)n.flags&256?(ua(n),n.flags&=-257,n=Du(e,n,a)):n.memoizedState!==null?(fa(),n.child=e.child,n.flags|=128,n=null):(fa(),u=s.fallback,b=n.mode,s=wu({mode:"visible",children:s.children},b),u=tr(u,b,a,null),u.flags|=2,s.return=n,u.return=n,s.sibling=u,n.child=s,Wa(n,e.child,null,a),s=n.child,s.memoizedState=Au(a),s.childLanes=Ru(e,S,a),n.memoizedState=bu,n=u);else if(ua(n),b.data==="$!"){if(S=b.nextSibling&&b.nextSibling.dataset,S)var V=S.dgst;S=V,s=Error(r(419)),s.stack="",s.digest=S,Gs({value:s,source:null,stack:null}),n=Du(e,n,a)}else if(cn||Js(e,n,a,!1),S=(a&e.childLanes)!==0,cn||S){if(S=ze,S!==null){if(s=a&-a,(s&42)!==0)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=(s&(S.suspendedLanes|a))!==0?0:s,s!==0&&s!==O.retryLane)throw O.retryLane=s,ca(e,s),Cn(S,e,s),sm}b.data==="$?"||rf(),n=Du(e,n,a)}else b.data==="$?"?(n.flags|=128,n.child=e.child,n=Q0.bind(null,e),b._reactRetry=n,n=null):(e=O.treeContext,mn=hi(b.nextSibling),Rn=n,be=!0,ui=null,Mi=!1,e!==null&&(jn[Jn++]=Ni,jn[Jn++]=Oi,jn[Jn++]=Va,Ni=e.id,Oi=e.overflow,Va=n),n=Cu(n,s.children),n.flags|=4096);return n}return u?(fa(),u=s.fallback,b=n.mode,O=e.child,V=O.sibling,s=ya(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&31457280,V!==null?u=ya(V,u):(u=tr(u,b,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,s=u,u=n.child,b=e.child.memoizedState,b===null?b=Au(a):(O=b.cachePool,O!==null?(V=rn._currentValue,O=O.parent!==V?{parent:V,pool:V}:O):O=gp(),b={baseLanes:b.baseLanes|a,cachePool:O}),u.memoizedState=b,u.childLanes=Ru(e,S,a),n.memoizedState=bu,s):(ua(n),a=e.child,e=a.sibling,a=ya(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Cu(e,n){return n=wu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wu(e,n){return Gm(e,n,0,null)}function Du(e,n,a){return Wa(n,e.child,null,a),e=Cu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function gm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ou(e.return,n,a)}function Uu(e,n,a,s,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=s,h.tail=a,h.tailMode=u)}function _m(e,n,a){var s=n.pendingProps,u=s.revealOrder,h=s.tail;if(gn(e,n,s.children,a),s=an.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gm(e,a,n);else if(e.tag===19)gm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Pt(an,s),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&rl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Uu(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&rl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Uu(n,!0,a,null,h);break;case"together":Uu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ya(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ya(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Lu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function P0(e,n,a){switch(n.tag){case 3:dn(n,n.stateNode.containerInfo),pa(n,rn,e.memoizedState.cache),Hs();break;case 27:case 5:fe(n);break;case 4:dn(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?mm(e,n,a):(ua(n),e=Bi(e,n,a),e!==null?e.sibling:null);ua(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Js(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return _m(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(an,an.current),s)break;return null;case 22:case 23:return n.lanes=0,um(e,n,a);case 24:pa(n,rn,e.memoizedState.cache)}return Bi(e,n,a)}function vm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Lu(e,a)&&(n.flags&128)===0)return cn=!1,P0(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,be&&(n.flags&1048576)!==0&&np(n,tl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,u=s._init;if(s=u(s._payload),n.type=s,typeof s=="function")qu(s)?(e=Ka(s,e),n.tag=1,n=dm(null,n,s,e,a)):(n.tag=0,n=Tu(null,n,s,e,a));else{if(s!=null){if(u=s.$$typeof,u===E){n.tag=11,n=om(null,n,s,e,a);break t}else if(u===v){n.tag=14,n=lm(null,n,s,e,a);break t}}throw n=Z(s)||s,Error(r(306,n,""))}}return n;case 0:return Tu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Ka(s,n.pendingProps),dm(e,n,s,u,a);case 3:t:{if(dn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var h=n.pendingProps;u=n.memoizedState,s=u.element,Bu(e,n),eo(n,h,null,a);var S=n.memoizedState;if(h=S.cache,pa(n,rn,h),h!==u.cache&&Pu(n,[rn],a,!0),to(),h=S.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=pm(e,n,h,a);break t}else if(h!==s){s=Kn(Error(r(424)),n),Gs(s),n=pm(e,n,h,a);break t}else for(mn=hi(n.stateNode.containerInfo.firstChild),Rn=n,be=!0,ui=null,Mi=!0,a=fp(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),h===s){n=Bi(e,n,a);break t}gn(e,n,h,a)}n=n.child}return n;case 26:return js(e,n),e===null?(a=yg(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,s=Nl(ae.current).createElement(a),s[tn]=n,s[en]=e,_n(s,a,e),J(s),n.stateNode=s):n.memoizedState=yg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return fe(n),e===null&&be&&(s=n.stateNode=vg(n.type,n.pendingProps,ae.current),Rn=n,Mi=!0,mn=hi(s.firstChild)),s=n.pendingProps.children,e!==null||be?gn(e,n,s,a):n.child=Wa(n,null,s,a),js(e,n),n.child;case 5:return e===null&&be&&((u=s=mn)&&(s=fx(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,Rn=n,mn=hi(s.firstChild),Mi=!1,u=!0):u=!1),u||Xa(n)),fe(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,s=h.children,xf(u,h)?s=null:S!==null&&xf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=su(e,n,C0,null,null,a),_o._currentValue=u),js(e,n),gn(e,n,s,a),n.child;case 6:return e===null&&be&&((e=a=mn)&&(a=hx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,Rn=n,mn=null,e=!0):e=!1),e||Xa(n)),null;case 13:return mm(e,n,a);case 4:return dn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Wa(n,null,s,a):gn(e,n,s,a),n.child;case 11:return om(e,n,n.type,n.pendingProps,a);case 7:return gn(e,n,n.pendingProps,a),n.child;case 8:return gn(e,n,n.pendingProps.children,a),n.child;case 12:return gn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,pa(n,n.type,s.value),gn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Ja(n),u=xn(u),s=s(u),n.flags|=1,gn(e,n,s,a),n.child;case 14:return lm(e,n,n.type,n.pendingProps,a);case 15:return cm(e,n,n.type,n.pendingProps,a);case 19:return _m(e,n,a);case 22:return um(e,n,a);case 24:return Ja(n),s=xn(rn),e===null?(u=au(),u===null&&(u=ze,h=nu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:s,cache:u},zu(n),pa(n,rn,u)):((e.lanes&a)!==0&&(Bu(e,n),eo(n,null,null,a),to()),u=e.memoizedState,h=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,rn,s)):(s=h.cache,pa(n,rn,s),s!==u.cache&&Pu(n,[rn],a,!0))),gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Nu=Rt(null),ja=null,Fi=null;function pa(e,n,a){Pt(Nu,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=Nu.current,jt(Nu)}function Ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=u;for(var O=0;O<n.length;O++)if(b.context===n[O]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),Ou(h.return,a,e),s||(S=null);break t}h=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Ou(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Js(e,n,a,s){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=u.type;Gn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===F.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(_o):e=[_o])}u=u.return}e!==null&&Pu(n,e,a,s),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ja(e){ja=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xn(e){return xm(ja,e)}function vl(e,n){return ja===null&&Ja(e),xm(e,n)}function xm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var ma=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Ge&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Jo(e),tp(e,null,a),n}return jo(e,s,n,a),Jo(e)}function $s(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,yi(e,a)}}function Fu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Iu=!1;function to(){if(Iu){var e=Or;if(e!==null)throw e}}function eo(e,n,a,s){Iu=!1;var u=e.updateQueue;ma=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var O=b,V=O.next;O.next=null,S===null?h=V:S.next=V,S=O;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==S&&(b===null?ct.firstBaseUpdate=V:b.next=V,ct.lastBaseUpdate=O))}if(h!==null){var _t=u.baseState;S=0,ct=V=O=null,b=h;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(ye&it)===it:(s&it)===it){it!==0&&it===Nr&&(Iu=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Vt=e,ie=b;it=n;var We=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){_t=Vt.call(We,_t,it);break t}_t=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,it=typeof Vt=="function"?Vt.call(We,_t,it):Vt,it==null)break t;_t=A({},_t,it);break t;case 2:ma=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(V=ct=lt,O=_t):ct=ct.next=lt,S|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ct===null&&(O=_t),u.baseState=O,u.firstBaseUpdate=V,u.lastBaseUpdate=ct,h===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=_t}}function Sm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ym(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sm(a[e],n)}function no(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var h=a.create,S=a.inst;s=h(),S.destroy=s}a=a.next}while(a!==u)}}catch(b){Pe(n,n.return,b)}}function va(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){var S=s.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=n;var O=a;try{b()}catch(V){Pe(u,O,V)}}}s=s.next}while(s!==h)}}catch(V){Pe(n,n.return,V)}}function Mm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ym(n,a)}catch(s){Pe(e,e.return,s)}}}function Em(e,n,a){a.props=Ka(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(e,n,s)}}function $a(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=s;break;default:u=s}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){Pe(e,n,h)}}function Vn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function Tm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function bm(e,n,a){try{var s=e.stateNode;sx(s,e.type,a,n),s[en]=n}catch(u){Pe(e,e.return,u)}}function Am(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Hu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Am(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gu(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ll));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(Gu(e,n,a),e=e.sibling;e!==null;)Gu(e,n,a),e=e.sibling}function xl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(xl(e,n,a),e=e.sibling;e!==null;)xl(e,n,a),e=e.sibling}var Hi=!1,ke=!1,Vu=!1,Rm=typeof WeakSet=="function"?WeakSet:Set,un=null,Cm=!1;function z0(e,n){if(e=e.containerInfo,_f=Il,e=Wd(e),Xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,b=-1,O=-1,V=0,ct=0,_t=e,it=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(b=S+u),_t!==h||s!==0&&_t.nodeType!==3||(O=S+s),_t.nodeType===3&&(S+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)it=_t,_t=lt;for(;;){if(_t===e)break e;if(it===a&&++V===u&&(b=S),it===h&&++ct===s&&(O=S),(lt=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=lt}a=b===-1||O===-1?null:{start:b,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:e,selectionRange:a},Il=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,s=a.stateNode;try{var Vt=Ka(a.type,u,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(Vt,h),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Pe(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Mf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}return Vt=Cm,Cm=!1,Vt}function wm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),s&4&&no(5,a);break;case 1:if(Vi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Pe(a,a.return,b)}else{var u=Ka(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(a,a.return,b)}}s&64&&Mm(a),s&512&&$a(a,a.return);break;case 3:if(Vi(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{ym(s,e)}catch(b){Pe(a,a.return,b)}}break;case 26:Vi(e,a),s&512&&$a(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&s&4&&Tm(a),s&512&&$a(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),s&4&&Lm(e,a);break;case 22:if(u=a.memoizedState!==null||Hi,!u){n=n!==null&&n.memoizedState!==null||ke;var h=Hi,S=ke;Hi=u,(ke=n)&&!S?xa(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=h,ke=S}s&512&&(a.memoizedProps.mode==="manual"?$a(a,a.return):Vn(a,a.return));break;default:Vi(e,a)}}function Dm(e){var n=e.alternate;n!==null&&(e.alternate=null,Dm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ws(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,kn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)Um(e,n,a),a=a.sibling}function Um(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Kt,a)}catch{}switch(a.tag){case 26:ke||Vn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Vn(a,n);var s=je,u=kn;for(je=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);ws(a),je=s,kn=u;break;case 5:ke||Vn(a,n);case 6:u=je;var h=kn;if(je=null,Gi(e,n,a),je=u,kn=h,je!==null)if(kn)try{e=je,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(S){Pe(a,n,S)}else try{je.removeChild(a.stateNode)}catch(S){Pe(a,n,S)}break;case 18:je!==null&&(kn?(n=je,a=a.stateNode,n.nodeType===8?yf(n.parentNode,a):n.nodeType===1&&yf(n,a),yo(n)):yf(je,a.stateNode));break;case 4:s=je,u=kn,je=a.stateNode.containerInfo,kn=!0,Gi(e,n,a),je=s,kn=u;break;case 0:case 11:case 14:case 15:ke||va(2,a,n),ke||va(4,a,n),Gi(e,n,a);break;case 1:ke||(Vn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Em(a,n,s)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:ke||Vn(a,n),ke=(s=ke)||a.memoizedState!==null,Gi(e,n,a),ke=s;break;default:Gi(e,n,a)}}function Lm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yo(e)}catch(a){Pe(n,n.return,a)}}function B0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rm),n;default:throw Error(r(435,e.tag))}}function ku(e,n){var a=B0(e);n.forEach(function(s){var u=K0.bind(null,e,s);a.has(s)||(a.add(s),s.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],h=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:case 5:je=b.stateNode,kn=!1;break t;case 3:je=b.stateNode.containerInfo,kn=!0;break t;case 4:je=b.stateNode.containerInfo,kn=!0;break t}b=b.return}if(je===null)throw Error(r(160));Um(h,S,u),je=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Nm(n,e),n=n.sibling}var fi=null;function Nm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),s&4&&(va(3,e,e.return),no(3,e),va(5,e,e.return));break;case 1:ti(n,e),ei(e),s&512&&(ke||a===null||Vn(a,a.return)),s&64&&Hi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if(ti(n,e),ei(e),s&512&&(ke||a===null||Vn(a,a.return)),s&4){var h=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Fa]||h[tn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(s),u.head.insertBefore(h,u.querySelector("head > title"))),_n(h,s,a),h[tn]=e,J(h),s=h;break t;case"link":var S=Tg("link","href",u).get(s+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(h=S[b],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}h=u.createElement(s),_n(h,s,a),u.head.appendChild(h);break;case"meta":if(S=Tg("meta","content",u).get(s+(a.content||""))){for(b=0;b<S.length;b++)if(h=S[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}h=u.createElement(s),_n(h,s,a),u.head.appendChild(h);break;default:throw Error(r(468,s))}h[tn]=e,J(h),s=h}e.stateNode=s}else bg(u,e.type,e.stateNode);else e.stateNode=Eg(u,s,e.memoizedProps);else h!==s?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,s===null?bg(u,e.type,e.stateNode):Eg(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&bm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){u=e.stateNode,h=e.memoizedProps;try{for(var O=u.firstChild;O;){var V=O.nextSibling,ct=O.nodeName;O[Fa]||ct==="HEAD"||ct==="BODY"||ct==="SCRIPT"||ct==="STYLE"||ct==="LINK"&&O.rel.toLowerCase()==="stylesheet"||u.removeChild(O),O=V}for(var _t=e.type,it=u.attributes;it.length;)u.removeAttributeNode(it[0]);_n(u,_t,h),u[tn]=e,u[en]=h}catch(Vt){Pe(e,e.return,Vt)}}case 5:if(ti(n,e),ei(e),s&512&&(ke||a===null||Vn(a,a.return)),e.flags&32){u=e.stateNode;try{Nn(u,"")}catch(Vt){Pe(e,e.return,Vt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,bm(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Vu=!0);break;case 6:if(ti(n,e),ei(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Vt){Pe(e,e.return,Vt)}}break;case 3:if(zl=null,u=fi,fi=Ol(n.containerInfo),ti(n,e),fi=u,ei(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{yo(n.containerInfo)}catch(Vt){Pe(e,e.return,Vt)}Vu&&(Vu=!1,Om(e));break;case 4:s=fi,fi=Ol(e.stateNode.containerInfo),ti(n,e),ei(e),fi=s;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ju=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ku(e,s)));break;case 22:if(s&512&&(ke||a===null||Vn(a,a.return)),O=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,ct=Hi,_t=ke,Hi=ct||O,ke=_t||V,ti(n,e),ke=_t,Hi=ct,ei(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=O?n._visibility&-2:n._visibility|1,O&&(n=Hi||ke,a===null||V||n||Fr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(u=V.stateNode,O)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{S=V.stateNode,b=V.memoizedProps.style;var lt=b!=null&&b.hasOwnProperty("display")?b.display:null;S.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Vt){Pe(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=O?"":V.memoizedProps}catch(Vt){Pe(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ku(e,a))));break;case 19:ti(n,e),ei(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,ku(e,s)));break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Am(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var u=s.stateNode,h=Hu(e);xl(e,h,u);break;case 5:var S=s.stateNode;s.flags&32&&(Nn(S,""),s.flags&=-33);var b=Hu(e);xl(e,b,S);break;case 3:case 4:var O=s.stateNode.containerInfo,V=Hu(e);Gu(e,V,O);break;default:throw Error(r(161))}}}catch(ct){Pe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wm(e,n.alternate,n),n=n.sibling}function Fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),Fr(n);break;case 1:Vn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Em(n,n.return,a),Fr(n);break;case 26:case 27:case 5:Vn(n,n.return),Fr(n);break;case 22:Vn(n,n.return),n.memoizedState===null&&Fr(n);break;default:Fr(n)}e=e.sibling}}function xa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:xa(u,h,a),no(4,h);break;case 1:if(xa(u,h,a),s=h,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Pe(s,s.return,V)}if(s=h,u=s.updateQueue,u!==null){var b=s.stateNode;try{var O=u.shared.hiddenCallbacks;if(O!==null)for(u.shared.hiddenCallbacks=null,u=0;u<O.length;u++)Sm(O[u],b)}catch(V){Pe(s,s.return,V)}}a&&S&64&&Mm(h),$a(h,h.return);break;case 26:case 27:case 5:xa(u,h,a),a&&s===null&&S&4&&Tm(h),$a(h,h.return);break;case 12:xa(u,h,a);break;case 13:xa(u,h,a),a&&S&4&&Lm(u,h);break;case 22:h.memoizedState===null&&xa(u,h,a),$a(h,h.return);break;default:xa(u,h,a)}n=n.sibling}}function Xu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function Wu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function Sa(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pm(e,n,a,s),n=n.sibling}function Pm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Sa(e,n,a,s),u&2048&&no(9,n);break;case 3:Sa(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(u&2048){Sa(e,n,a,s),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,b=h.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Pe(n,n.return,O)}}else Sa(e,n,a,s);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?Sa(e,n,a,s):io(e,n):h._visibility&4?Sa(e,n,a,s):(h._visibility|=4,Ir(e,n,a,s,(n.subtreeFlags&10256)!==0)),u&2048&&Xu(n.alternate,n);break;case 24:Sa(e,n,a,s),u&2048&&Wu(n.alternate,n);break;default:Sa(e,n,a,s)}}function Ir(e,n,a,s,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,S=n,b=a,O=s,V=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(h,S,b,O,u),no(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&4?Ir(h,S,b,O,u):io(h,S):(ct._visibility|=4,Ir(h,S,b,O,u)),u&&V&2048&&Xu(S.alternate,S);break;case 24:Ir(h,S,b,O,u),u&&V&2048&&Wu(S.alternate,S);break;default:Ir(h,S,b,O,u)}n=n.sibling}}function io(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:io(a,s),u&2048&&Xu(s.alternate,s);break;case 24:io(a,s),u&2048&&Wu(s.alternate,s);break;default:io(a,s)}n=n.sibling}}var ao=8192;function Hr(e){if(e.subtreeFlags&ao)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 26:Hr(e),e.flags&ao&&e.memoizedState!==null&&bx(fi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var n=fi;fi=Ol(e.stateNode.containerInfo),Hr(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ao,ao=16777216,Hr(e),ao=n):Hr(e));break;default:Hr(e)}}function Bm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,Im(s,e)}Bm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fm(e),e=e.sibling}function Fm(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&va(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Sl(e)):ro(e);break;default:ro(e)}}function Sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];un=s,Im(s,e)}Bm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:va(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Sl(n));break;default:Sl(n)}e=e.sibling}}function Im(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,un=s;else t:for(a=e;un!==null;){s=un;var u=s.sibling,h=s.return;if(Dm(s),s===a){un=null;break t}if(u!==null){u.return=h,un=u;break t}un=h}}}function F0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,s){return new F0(e,n,a,s)}function qu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ya(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hm(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,s,u,h){var S=0;if(s=e,typeof e=="function")qu(e)&&(S=1);else if(typeof e=="string")S=Ex(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return tr(a.children,u,h,n);case m:S=8,u|=24;break;case g:return e=ni(12,a,n,u|2),e.elementType=g,e.lanes=h,e;case w:return e=ni(13,a,n,u),e.elementType=w,e.lanes=h,e;case y:return e=ni(19,a,n,u),e.elementType=y,e.lanes=h,e;case U:return Gm(a,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case M:S=10;break t;case x:S=9;break t;case E:S=11;break t;case v:S=14;break t;case P:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ni(S,a,n,u),n.elementType=e,n.type=s,n.lanes=h,n}function tr(e,n,a,s){return e=ni(7,e,s,n),e.lanes=a,e}function Gm(e,n,a,s){e=ni(22,e,s,n),e.elementType=U,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var S=ca(h,2);S!==null&&(u._pendingVisibility|=2,Cn(S,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var S=ca(h,2);S!==null&&(u._pendingVisibility&=-3,Cn(S,h,2))}}};return e.stateNode=u,e}function Yu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Zu(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function Vm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ag(n)){if(n=$n.current,n!==null&&((ye&4194176)===ye?Ei!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Ei))throw ks=$c,rp;e.flags|=8192}}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,Vr|=n)}function so(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&31457280,s|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function I0(e,n,a){var s=n.pendingProps;switch(jc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(rn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Is(n)?ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ui!==null&&(nf(ui),ui=null))),He(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(He(n),Vm(n,a)):(He(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),He(n),Vm(n,a)):(He(n),n.flags&=-16777217):(e.memoizedProps!==s&&ki(n),He(n),n.flags&=-16777217),null;case 27:kt(n),a=ae.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}e=Me.current,Is(n)?ip(n):(e=vg(u,s,a),n.stateNode=e,ki(n))}return He(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return He(n),null}if(e=Me.current,Is(n))ip(n);else{switch(u=Nl(ae.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?u.createElement("select",{is:s.is}):u.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?u.createElement(a,{is:s.is}):u.createElement(a)}}e[tn]=n,e[en]=s;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(_n(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return He(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ae.current,Is(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[tn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||hg(e.nodeValue,a)),e||Xa(n)}else e=Nl(e).createTextNode(s),e[tn]=n,n.stateNode=e}return He(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Is(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[tn]=n}else Hs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),u=!1}else ui!==null&&(nf(ui),ui=null),u=!0;if(!u)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool);var h=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==u&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),He(n),null;case 4:return se(),e===null&&pf(n.stateNode.containerInfo),He(n),null;case 10:return Ii(n.type),He(n),null;case 19:if(jt(an),u=n.memoizedState,u===null)return He(n),null;if(s=(n.flags&128)!==0,h=u.rendering,h===null)if(s)so(u,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=rl(e),h!==null){for(n.flags|=128,so(u,!1),e=h.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hm(a,e),a=a.sibling;return Pt(an,an.current&1|2),n.child}e=e.sibling}u.tail!==null&&ht()>El&&(n.flags|=128,s=!0,so(u,!1),n.lanes=4194304)}else{if(!s)if(e=rl(h),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),so(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!be)return He(n),null}else 2*ht()-u.renderingStartTime>El&&a!==536870912&&(n.flags|=128,s=!0,so(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ht(),n.sibling=null,e=an.current,Pt(an,s?e&1|2:e&1),n):(He(n),null);case 22:case 23:return Pi(n),eu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&jt(qa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(rn),He(n),null;case 25:return null}throw Error(r(156,n.tag))}function H0(e,n){switch(jc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(rn),se(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Hs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return jt(an),null;case 4:return se(),null;case 10:return Ii(n.type),null;case 22:case 23:return Pi(n),eu(),e!==null&&jt(qa),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(rn),null;case 25:return null;default:return null}}function km(e,n){switch(jc(n),n.tag){case 3:Ii(rn),se();break;case 26:case 27:case 5:kt(n);break;case 4:se();break;case 13:Pi(n);break;case 19:jt(an);break;case 10:Ii(n.type);break;case 22:case 23:Pi(n),eu(),e!==null&&jt(qa);break;case 24:Ii(rn)}}var G0={getCacheForType:function(e){var n=xn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},V0=typeof WeakMap=="function"?WeakMap:Map,Ge=0,ze=null,de=null,ye=0,Be=0,Xn=null,Xi=!1,Gr=!1,Qu=!1,Wi=0,Xe=0,Ma=0,er=0,Ku=0,ii=0,Vr=0,oo=null,bi=null,ju=!1,Ju=0,El=1/0,Tl=null,Ea=null,bl=!1,nr=null,lo=0,$u=0,tf=null,co=0,ef=null;function Wn(){if((Ge&2)!==0&&ye!==0)return ye&-ye;if(C.T!==null){var e=Nr;return e!==0?e:uf()}return Cs()}function Xm(){ii===0&&(ii=(ye&536870912)===0||be?$e():536870912);var e=$n.current;return e!==null&&(e.flags|=32),ii}function Cn(e,n,a){(e===ze&&Be===2||e.cancelPendingCommit!==null)&&(kr(e,0),qi(e,ye,ii,!1)),Tn(e,a),((Ge&2)===0||e!==ze)&&(e===ze&&((Ge&2)===0&&(er|=a),Xe===4&&qi(e,ye,ii,!1)),Ai(e))}function Wm(e,n,a){if((Ge&6)!==0)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),u=s?W0(e,n):sf(e,n,!0),h=s;do{if(u===0){Gr&&!s&&qi(e,n,0,!1);break}else if(u===6)qi(e,n,0,!Xi);else{if(a=e.current.alternate,h&&!k0(a)){u=sf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;u=oo;var O=b.current.memoizedState.isDehydrated;if(O&&(kr(b,S).flags|=256),S=sf(b,S,!1),S!==2){if(Qu&&!O){b.errorRecoveryDisabledLanes|=h,er|=h,u=4;break t}h=bi,bi=u,h!==null&&nf(h)}u=S}if(h=!1,u!==2)continue}}if(u===1){kr(e,0),qi(e,n,0,!0);break}t:{switch(s=e,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){qi(s,n,ii,!Xi);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(h=Ju+300-ht(),10<h)){if(qi(s,n,ii,!Xi),Dt(s,0)!==0)break t;s.timeoutHandle=mg(qm.bind(null,s,a,bi,Tl,ju,n,ii,er,Vr,Xi,2,-0,0),h);break t}qm(s,a,bi,Tl,ju,n,ii,er,Vr,Xi,0,-0,0)}}break}while(!0);Ai(e)}function nf(e){bi===null?bi=e:bi.push.apply(bi,e)}function qm(e,n,a,s,u,h,S,b,O,V,ct,_t,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:Tx},zm(n),n=Ax(),n!==null)){e.cancelPendingCommit=n($m.bind(null,e,a,s,u,S,b,O,1,_t,it)),qi(e,h,S,!V);return}$m(e,a,s,u,S,b,O,ct,_t,it)}function k0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],h=u.getSnapshot;u=u.value;try{if(!Gn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,s){n&=~Ku,n&=~er,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var h=31-Zt(u),S=1<<h;s[h]=-1,u&=~S}a!==0&&Rs(e,a,n)}function Al(){return(Ge&6)===0?(uo(0),!1):!0}function af(){if(de!==null){if(Be===0)var e=de.return;else e=de,Fi=ja=null,cu(e),Ur=null,Xs=0,e=de;for(;e!==null;)km(e.alternate,e),e=e.return;de=null}}function kr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),af(),ze=e,de=a=ya(e.current,null),ye=n,Be=0,Xn=null,Xi=!1,Gr=$t(e,n),Qu=!1,Vr=ii=Ku=er=Ma=Xe=0,bi=oo=null,ju=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Zt(s),h=1<<u;n|=e[u],s&=~h}return Wi=n,Ko(),a}function Ym(e,n){ue=null,C.H=Ti,n===Vs?(n=lp(),Be=3):n===rp?(n=lp(),Be=4):Be=n===sm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,de===null&&(Xe=1,gl(e,Kn(n,e.current)))}function Zm(){var e=C.H;return C.H=Ti,e===null?Ti:e}function Qm(){var e=C.A;return C.A=G0,e}function rf(){Xe=4,Xi||(ye&4194176)!==ye&&$n.current!==null||(Gr=!0),(Ma&134217727)===0&&(er&134217727)===0||ze===null||qi(ze,ye,ii,!1)}function sf(e,n,a){var s=Ge;Ge|=2;var u=Zm(),h=Qm();(ze!==e||ye!==n)&&(Tl=null,kr(e,n)),n=!1;var S=Xe;t:do try{if(Be!==0&&de!==null){var b=de,O=Xn;switch(Be){case 8:af(),S=6;break t;case 3:case 2:case 6:$n.current===null&&(n=!0);var V=Be;if(Be=0,Xn=null,Xr(e,b,O,V),a&&Gr){S=0;break t}break;default:V=Be,Be=0,Xn=null,Xr(e,b,O,V)}}X0(),S=Xe;break}catch(ct){Ym(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Fi=ja=null,Ge=s,C.H=u,C.A=h,de===null&&(ze=null,ye=0,Ko()),S}function X0(){for(;de!==null;)Km(de)}function W0(e,n){var a=Ge;Ge|=2;var s=Zm(),u=Qm();ze!==e||ye!==n?(Tl=null,El=ht()+500,kr(e,n)):Gr=$t(e,n);t:do try{if(Be!==0&&de!==null){n=de;var h=Xn;e:switch(Be){case 1:Be=0,Xn=null,Xr(e,n,h,1);break;case 2:if(sp(h)){Be=0,Xn=null,jm(n);break}n=function(){Be===2&&ze===e&&(Be=7),Ai(e)},h.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:sp(h)?(Be=0,Xn=null,jm(n)):(Be=0,Xn=null,Xr(e,n,h,7));break;case 5:var S=null;switch(de.tag){case 26:S=de.memoizedState;case 5:case 27:var b=de;if(!S||Ag(S)){Be=0,Xn=null;var O=b.sibling;if(O!==null)de=O;else{var V=b.return;V!==null?(de=V,Rl(V)):de=null}break e}}Be=0,Xn=null,Xr(e,n,h,5);break;case 6:Be=0,Xn=null,Xr(e,n,h,6);break;case 8:af(),Xe=6;break t;default:throw Error(r(462))}}q0();break}catch(ct){Ym(e,ct)}while(!0);return Fi=ja=null,C.H=s,C.A=u,Ge=a,de!==null?0:(ze=null,ye=0,Ko(),Xe)}function q0(){for(;de!==null&&!T();)Km(de)}function Km(e){var n=vm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function jm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=hm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:cu(n);default:km(a,n),n=de=Hm(n,Wi),n=vm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Rl(e):de=n}function Xr(e,n,a,s){Fi=ja=null,cu(n),Ur=null,Xs=0;var u=n.return;try{if(O0(e,u,n,a,ye)){Xe=1,gl(e,Kn(a,e.current)),de=null;return}}catch(h){if(u!==null)throw de=u,h;Xe=1,gl(e,Kn(a,e.current)),de=null;return}n.flags&32768?(be||s===1?e=!0:Gr||(ye&536870912)!==0?e=!1:(Xi=e=!0,(s===2||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Jm(n,e)):Rl(n)}function Rl(e){var n=e;do{if((n.flags&32768)!==0){Jm(n,Xi);return}e=n.return;var a=I0(n.alternate,n,Wi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Xe===0&&(Xe=5)}function Jm(e,n){do{var a=H0(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Xe=6,de=null}function $m(e,n,a,s,u,h,S,b,O,V){var ct=C.T,_t=q.p;try{q.p=2,C.T=null,Y0(e,n,a,s,_t,u,h,S,b,O,V)}finally{C.T=ct,q.p=_t}}function Y0(e,n,a,s,u,h,S,b){do Wr();while(nr!==null);if((Ge&6)!==0)throw Error(r(327));var O=e.finishedWork;if(s=e.finishedLanes,O===null)return null;if(e.finishedWork=null,e.finishedLanes=0,O===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=O.lanes|O.childLanes;if(V|=Zc,Ho(e,s,V,h,S,b),e===ze&&(de=ze=null,ye=0),(O.subtreeFlags&10256)===0&&(O.flags&10256)===0||bl||(bl=!0,$u=V,tf=a,j0(wt,function(){return Wr(),null})),a=(O.flags&15990)!==0,(O.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,h=q.p,q.p=2,S=Ge,Ge|=4,z0(e,O),Nm(O,e),_0(vf,e.containerInfo),Il=!!_f,vf=_f=null,e.current=O,wm(e,O.alternate,O),et(),Ge=S,q.p=h,C.T=a):e.current=O,bl?(bl=!1,nr=e,lo=s):tg(e,V),V=e.pendingLanes,V===0&&(Ea=null),Ft(O.stateNode),Ai(e),n!==null)for(u=e.onRecoverableError,O=0;O<n.length;O++)V=n[O],u(V.value,{componentStack:V.stack});return(lo&3)!==0&&Wr(),V=e.pendingLanes,(s&4194218)!==0&&(V&42)!==0?e===ef?co++:(co=0,ef=e):co=0,uo(0),null}function tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Wr(){if(nr!==null){var e=nr,n=$u;$u=0;var a=xr(lo),s=C.T,u=q.p;try{if(q.p=32>a?32:a,C.T=null,nr===null)var h=!1;else{a=tf,tf=null;var S=nr,b=lo;if(nr=null,lo=0,(Ge&6)!==0)throw Error(r(331));var O=Ge;if(Ge|=4,Fm(S.current),Pm(S,S.current,b,a),Ge=O,uo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Kt,S)}catch{}h=!0}return h}finally{q.p=u,C.T=s,tg(e,n)}}return!1}function eg(e,n,a){n=Kn(a,n),n=Eu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Tn(e,2),Ai(e))}function Pe(e,n,a){if(e.tag===3)eg(e,e,a);else for(;n!==null;){if(n.tag===3){eg(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ea===null||!Ea.has(s))){e=Kn(a,e),a=am(2),s=_a(n,a,2),s!==null&&(rm(a,s,n,e),Tn(s,2),Ai(s));break}}n=n.return}}function of(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new V0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Qu=!0,u.add(a),e=Z0.bind(null,e,n,a),n.then(e,e))}function Z0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ye&a)===a&&(Xe===4||Xe===3&&(ye&62914560)===ye&&300>ht()-Ju?(Ge&2)===0&&kr(e,0):Ku|=a,Vr===ye&&(Vr=0)),Ai(e)}function ng(e,n){n===0&&(n=Ee()),e=ca(e,n),e!==null&&(Tn(e,n),Ai(e))}function Q0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ng(e,a)}function K0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),ng(e,a)}function j0(e,n){return Xt(e,n)}var Cl=null,qr=null,lf=!1,wl=!1,cf=!1,ir=0;function Ai(e){e!==qr&&e.next===null&&(qr===null?Cl=qr=e:qr=qr.next=e),wl=!0,lf||(lf=!0,$0(J0))}function uo(e,n){if(!cf&&wl){cf=!0;do for(var a=!1,s=Cl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var h=0;else{var S=s.suspendedLanes,b=s.pingedLanes;h=(1<<31-Zt(42|e)+1)-1,h&=u&~(S&~b),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,rg(s,h))}else h=ye,h=Dt(s,s===ze?h:0),(h&3)===0||$t(s,h)||(a=!0,rg(s,h));s=s.next}while(a);cf=!1}}function J0(){wl=lf=!1;var e=0;ir!==0&&(ox()&&(e=ir),ir=0);for(var n=ht(),a=null,s=Cl;s!==null;){var u=s.next,h=ig(s,n);h===0?(s.next=null,a===null?Cl=u:a.next=u,u===null&&(qr=a)):(a=s,(e!==0||(h&3)!==0)&&(wl=!0)),s=u}uo(e)}function ig(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Zt(h),b=1<<S,O=u[S];O===-1?((b&a)===0||(b&s)!==0)&&(u[S]=Ie(b,n)):O<=n&&(e.expiredLanes|=b),h&=~b}if(n=ze,a=ye,a=Dt(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&Be===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&L(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&L(s),xr(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=ge;break;default:a=wt}return s=ag.bind(null,e),a=Xt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&L(s),e.callbackPriority=2,e.callbackNode=null,2}function ag(e,n){var a=e.callbackNode;if(Wr()&&e.callbackNode!==a)return null;var s=ye;return s=Dt(e,e===ze?s:0),s===0?null:(Wm(e,s,n),ig(e,ht()),e.callbackNode!=null&&e.callbackNode===a?ag.bind(null,e):null)}function rg(e,n){if(Wr())return null;Wm(e,n,!0)}function $0(e){cx(function(){(Ge&6)!==0?Xt(dt,e):e()})}function uf(){return ir===0&&(ir=$e()),ir}function sg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function og(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function tx(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var h=sg((u[en]||null).action),S=s.submitter;S&&(n=(n=S[en]||null)?sg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var b=new Yo("action","action",null,s,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ir!==0){var O=S?og(u,S):new FormData(u);vu(a,{pending:!0,data:O,method:u.method,action:h},null,O)}}else typeof h=="function"&&(b.preventDefault(),O=S?og(u,S):new FormData(u),vu(a,{pending:!0,data:O,method:u.method,action:h},h,O))},currentTarget:u}]})}}for(var ff=0;ff<$d.length;ff++){var hf=$d[ff],ex=hf.toLowerCase(),nx=hf[0].toUpperCase()+hf.slice(1);ci(ex,"on"+nx)}ci(Zd,"onAnimationEnd"),ci(Qd,"onAnimationIteration"),ci(Kd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(x0,"onTransitionRun"),ci(S0,"onTransitionStart"),ci(y0,"onTransitionCancel"),ci(jd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fo));function lg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var h=void 0;if(n)for(var S=s.length-1;0<=S;S--){var b=s[S],O=b.instance,V=b.currentTarget;if(b=b.listener,O!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=V;try{h(u)}catch(ct){ml(ct)}u.currentTarget=null,h=O}else for(S=0;S<s.length;S++){if(b=s[S],O=b.instance,V=b.currentTarget,b=b.listener,O!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=V;try{h(u)}catch(ct){ml(ct)}u.currentTarget=null,h=O}}}}function Se(e,n){var a=n[Sr];a===void 0&&(a=n[Sr]=new Set);var s=e+"__bubble";a.has(s)||(cg(n,e,2,!1),a.add(s))}function df(e,n,a){var s=0;n&&(s|=4),cg(a,e,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function pf(e){if(!e[Dl]){e[Dl]=!0,Q.forEach(function(a){a!=="selectionchange"&&(ix.has(a)||df(a,!1,e),df(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,df("selectionchange",!1,n))}}function cg(e,n,a,s){switch(Lg(n)){case 2:var u=wx;break;case 8:u=Dx;break;default:u=Rf}a=u.bind(null,n,a,e),u=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function mf(e,n,a,s,u){var h=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var b=s.stateNode.containerInfo;if(b===u||b.nodeType===8&&b.parentNode===u)break;if(S===4)for(S=s.return;S!==null;){var O=S.tag;if((O===3||O===4)&&(O=S.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;S=S.return}for(;b!==null;){if(S=Li(b),S===null)return;if(O=S.tag,O===5||O===6||O===26||O===27){s=h=S;continue t}b=b.parentNode}}s=s.return}Td(function(){var V=h,ct=Nc(a),_t=[];t:{var it=Jd.get(e);if(it!==void 0){var lt=Yo,Vt=e;switch(e){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":lt=Kv;break;case"focusin":Vt="focus",lt=Ic;break;case"focusout":Vt="blur",lt=Ic;break;case"beforeblur":case"afterblur":lt=Ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=$v;break;case Zd:case Qd:case Kd:lt=Gv;break;case jd:lt=e0;break;case"scroll":case"scrollend":lt=zv;break;case"wheel":lt=i0;break;case"copy":case"cut":case"paste":lt=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=wd;break;case"toggle":case"beforetoggle":lt=r0}var ie=(n&4)!==0,We=!ie&&(e==="scroll"||e==="scrollend"),j=ie?it!==null?it+"Capture":null:it;ie=[];for(var G=V,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||j===null||(mt=Ds(G,j),mt!=null&&ie.push(ho(G,mt,$))),We)break;G=G.return}0<ie.length&&(it=new lt(it,Vt,null,a,ct),_t.push({event:it,listeners:ie}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==Lc&&(Vt=a.relatedTarget||a.fromElement)&&(Li(Vt)||Vt[Ui]))break t;if((lt||it)&&(it=ct.window===ct?ct:(it=ct.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Vt=a.relatedTarget||a.toElement,lt=V,Vt=Vt?Li(Vt):null,Vt!==null&&(We=K(Vt),ie=Vt.tag,Vt!==We||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(lt=null,Vt=V),lt!==Vt)){if(ie=Rd,mt="onMouseLeave",j="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ie=wd,mt="onPointerLeave",j="onPointerEnter",G="pointer"),We=lt==null?it:X(lt),$=Vt==null?it:X(Vt),it=new ie(mt,G+"leave",lt,a,ct),it.target=We,it.relatedTarget=$,mt=null,Li(ct)===V&&(ie=new ie(j,G+"enter",Vt,a,ct),ie.target=$,ie.relatedTarget=We,mt=ie),We=mt,lt&&Vt)e:{for(ie=lt,j=Vt,G=0,$=ie;$;$=Yr($))G++;for($=0,mt=j;mt;mt=Yr(mt))$++;for(;0<G-$;)ie=Yr(ie),G--;for(;0<$-G;)j=Yr(j),$--;for(;G--;){if(ie===j||j!==null&&ie===j.alternate)break e;ie=Yr(ie),j=Yr(j)}ie=null}else ie=null;lt!==null&&ug(_t,it,lt,ie,!1),Vt!==null&&We!==null&&ug(_t,We,Vt,ie,!0)}}t:{if(it=V?X(V):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var It=Bd;else if(Pd(it))if(Fd)It=m0;else{It=d0;var he=h0}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?V&&Uc(V.elementType)&&(It=Bd):It=p0;if(It&&(It=It(e,V))){zd(_t,It,a,ct);break t}he&&he(e,it,V),e==="focusout"&&V&&it.type==="number"&&V.memoizedProps.value!=null&&vn(it,"number",it.value)}switch(he=V?X(V):window,e){case"focusin":(Pd(he)||he.contentEditable==="true")&&(br=he,Wc=V,Fs=null);break;case"focusout":Fs=Wc=br=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,qd(_t,a,ct);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":qd(_t,a,ct)}var qt;if(Gc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Tr?Nd(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Dd&&a.locale!=="ko"&&(Tr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Tr&&(qt=bd()):(la=ct,zc="value"in la?la.value:la.textContent,Tr=!0)),he=Ul(V,Jt),0<he.length&&(Jt=new Cd(Jt,e,null,a,ct),_t.push({event:Jt,listeners:he}),qt?Jt.data=qt:(qt=Od(a),qt!==null&&(Jt.data=qt)))),(qt=o0?l0(e,a):c0(e,a))&&(Jt=Ul(V,"onBeforeInput"),0<Jt.length&&(he=new Cd("onBeforeInput","beforeinput",null,a,ct),_t.push({event:he,listeners:Jt}),he.data=qt)),tx(_t,e,V,a,ct)}lg(_t,n)})}function ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Ul(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ds(e,a),u!=null&&s.unshift(ho(e,u,h)),u=Ds(e,n),u!=null&&s.push(ho(e,u,h))),e=e.return}return s}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ug(e,n,a,s,u){for(var h=n._reactName,S=[];a!==null&&a!==s;){var b=a,O=b.alternate,V=b.stateNode;if(b=b.tag,O!==null&&O===s)break;b!==5&&b!==26&&b!==27||V===null||(O=V,u?(V=Ds(a,h),V!=null&&S.unshift(ho(a,V,O))):u||(V=Ds(a,h),V!=null&&S.push(ho(a,V,O)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var ax=/\r\n?/g,rx=/\u0000|\uFFFD/g;function fg(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(rx,"")}function hg(e,n){return n=fg(n),fg(e)===n}function Ll(){}function Ne(e,n,a,s,u,h){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Nn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Nn(e,""+s);break;case"className":Fe(e,"class",s);break;case"tabIndex":Fe(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fe(e,a,s);break;case"style":Md(e,s,h);break;case"data":if(n!=="object"){Fe(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",u.name,u,null),Ne(e,n,"formEncType",u.formEncType,u,null),Ne(e,n,"formMethod",u.formMethod,u,null),Ne(e,n,"formTarget",u.formTarget,u,null)):(Ne(e,n,"encType",u.encType,u,null),Ne(e,n,"method",u.method,u,null),Ne(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ve(e,"popover",s);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ov.get(a)||a,ve(e,a,s))}}function gf(e,n,a,s,u,h){switch(a){case"style":Md(e,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Nn(e,s):(typeof s=="number"||typeof s=="bigint")&&Nn(e,""+s);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[en]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof s=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ve(e,a,s)}}}function _n(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var s=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,h,S,a,null)}}u&&Ne(e,n,"srcSet",a.srcSet,a,null),s&&Ne(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var b=h=S=u=null,O=null,V=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":S=ct;break;case"checked":O=ct;break;case"defaultChecked":V=ct;break;case"value":h=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Ne(e,n,s,ct,a,null)}}An(e,h,b,O,V,S,u,!1),xe(e);return;case"select":Se("invalid",e),s=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":h=b;break;case"defaultValue":S=b;break;case"multiple":s=b;default:Ne(e,n,u,b,a,null)}n=h,a=S,e.multiple=!!s,n!=null?Ve(e,!!s,n,!1):a!=null&&Ve(e,!!s,a,!0);return;case"textarea":Se("invalid",e),h=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":s=b;break;case"defaultValue":u=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ne(e,n,S,b,a,null)}yr(e,s,u,h),xe(e);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(e,n,O,s,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(s=0;s<fo.length;s++)Se(fo[s],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(s=a[V],s!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,V,s,a,null)}return;default:if(Uc(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&gf(e,n,ct,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ne(e,n,b,s,a,null))}function sx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,b=null,O=null,V=null,ct=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":O=_t;default:s.hasOwnProperty(lt)||Ne(e,n,lt,null,s,_t)}}for(var it in s){var lt=s[it];if(_t=a[it],s.hasOwnProperty(it)&&(lt!=null||_t!=null))switch(it){case"type":h=lt;break;case"name":u=lt;break;case"checked":V=lt;break;case"defaultChecked":ct=lt;break;case"value":S=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==_t&&Ne(e,n,it,lt,s,_t)}}Ue(e,S,b,O,V,ct,h,u);return;case"select":lt=S=b=it=null;for(h in a)if(O=a[h],a.hasOwnProperty(h)&&O!=null)switch(h){case"value":break;case"multiple":lt=O;default:s.hasOwnProperty(h)||Ne(e,n,h,null,s,O)}for(u in s)if(h=s[u],O=a[u],s.hasOwnProperty(u)&&(h!=null||O!=null))switch(u){case"value":it=h;break;case"defaultValue":b=h;break;case"multiple":S=h;default:h!==O&&Ne(e,n,u,h,s,O)}n=b,a=S,s=lt,it!=null?Ve(e,!!a,it,!1):!!s!=!!a&&(n!=null?Ve(e,!!a,n,!0):Ve(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ne(e,n,b,null,s,u)}for(S in s)if(u=s[S],h=a[S],s.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Ne(e,n,S,u,s,h)}pn(e,it,lt);return;case"option":for(var Vt in a)if(it=a[Vt],a.hasOwnProperty(Vt)&&it!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ne(e,n,Vt,null,s,it)}for(O in s)if(it=s[O],lt=a[O],s.hasOwnProperty(O)&&it!==lt&&(it!=null||lt!=null))switch(O){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ne(e,n,O,it,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)it=a[ie],a.hasOwnProperty(ie)&&it!=null&&!s.hasOwnProperty(ie)&&Ne(e,n,ie,null,s,it);for(V in s)if(it=s[V],lt=a[V],s.hasOwnProperty(V)&&it!==lt&&(it!=null||lt!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ne(e,n,V,it,s,lt)}return;default:if(Uc(n)){for(var We in a)it=a[We],a.hasOwnProperty(We)&&it!==void 0&&!s.hasOwnProperty(We)&&gf(e,n,We,void 0,s,it);for(ct in s)it=s[ct],lt=a[ct],!s.hasOwnProperty(ct)||it===lt||it===void 0&&lt===void 0||gf(e,n,ct,it,s,lt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!s.hasOwnProperty(j)&&Ne(e,n,j,null,s,it);for(_t in s)it=s[_t],lt=a[_t],!s.hasOwnProperty(_t)||it===lt||it==null&&lt==null||Ne(e,n,_t,it,s,lt)}var _f=null,vf=null;function Nl(e){return e.nodeType===9?e:e.ownerDocument}function dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function ox(){var e=window.event;return e&&e.type==="popstate"?e===Sf?!1:(Sf=e,!0):(Sf=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(e){return gg.resolve(null).then(e).catch(ux)}:mg;function ux(e){setTimeout(function(){throw e})}function yf(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(s===0){e.removeChild(u),yo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=u}while(a);yo(n)}function Mf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fx(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function hx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function _g(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function vg(e,n,a){switch(n=Nl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ai=new Map,xg=new Set;function Ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=q.d;q.d={f:dx,r:px,D:mx,C:gx,L:_x,m:vx,X:Sx,S:xx,M:yx};function dx(){var e=Yi.f(),n=Al();return e||n}function px(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?qp(n):Yi.r(e)}var Zr=typeof document>"u"?null:document;function Sg(e,n,a){var s=Zr;if(s&&typeof n=="string"&&n){var u=ln(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xg.has(u)||(xg.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),_n(n,"link",e),J(n),s.head.appendChild(n)))}}function mx(e){Yi.D(e),Sg("dns-prefetch",e,null)}function gx(e,n){Yi.C(e,n),Sg("preconnect",e,n)}function _x(e,n,a){Yi.L(e,n,a);var s=Zr;if(s&&e&&n){var u='link[rel="preload"][as="'+ln(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ln(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ln(a.imageSizes)+'"]')):u+='[href="'+ln(e)+'"]';var h=u;switch(n){case"style":h=Qr(e);break;case"script":h=Kr(e)}ai.has(h)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(h,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(po(h))||n==="script"&&s.querySelector(mo(h))||(n=s.createElement("link"),_n(n,"link",e),J(n),s.head.appendChild(n)))}}function vx(e,n){Yi.m(e,n);var a=Zr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ln(s)+'"][href="'+ln(e)+'"]',h=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Kr(e)}if(!ai.has(h)&&(e=A({rel:"modulepreload",href:e},n),ai.set(h,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mo(h)))return}s=a.createElement("link"),_n(s,"link",e),J(s),a.head.appendChild(s)}}}function xx(e,n,a){Yi.S(e,n,a);var s=Zr;if(s&&e){var u=tt(s).hoistableStyles,h=Qr(e);n=n||"default";var S=u.get(h);if(!S){var b={loading:0,preload:null};if(S=s.querySelector(po(h)))b.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(h))&&Ef(e,a);var O=S=s.createElement("link");J(O),_n(O,"link",e),O._p=new Promise(function(V,ct){O.onload=V,O.onerror=ct}),O.addEventListener("load",function(){b.loading|=1}),O.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Pl(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(h,S)}}}function Sx(e,n){Yi.X(e,n);var a=Zr;if(a&&e){var s=tt(a).hoistableScripts,u=Kr(e),h=s.get(u);h||(h=a.querySelector(mo(u)),h||(e=A({src:e,async:!0},n),(n=ai.get(u))&&Tf(e,n),h=a.createElement("script"),J(h),_n(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function yx(e,n){Yi.M(e,n);var a=Zr;if(a&&e){var s=tt(a).hoistableScripts,u=Kr(e),h=s.get(u);h||(h=a.querySelector(mo(u)),h||(e=A({src:e,async:!0,type:"module"},n),(n=ai.get(u))&&Tf(e,n),h=a.createElement("script"),J(h),_n(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(u,h))}}function yg(e,n,a,s){var u=(u=ae.current)?Ol(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qr(a.href),a=tt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qr(a.href);var h=tt(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(po(e)))&&!h._p&&(S.instance=h,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),h||Mx(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=tt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Qr(e){return'href="'+ln(e)+'"'}function po(e){return'link[rel="stylesheet"]['+e+"]"}function Mg(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Mx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),J(n),e.head.appendChild(n))}function Kr(e){return'[src="'+ln(e)+'"]'}function mo(e){return"script[async]"+e}function Eg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+ln(a.href)+'"]');if(s)return n.instance=s,J(s),s;var u=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),J(s),_n(s,"style",u),Pl(s,a.precedence,e),n.instance=s;case"stylesheet":u=Qr(a.href);var h=e.querySelector(po(u));if(h)return n.state.loading|=4,n.instance=h,J(h),h;s=Mg(a),(u=ai.get(u))&&Ef(s,u),h=(e.ownerDocument||e).createElement("link"),J(h);var S=h;return S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),_n(h,"link",s),n.state.loading|=4,Pl(h,a.precedence,e),n.instance=h;case"script":return h=Kr(a.src),(u=e.querySelector(mo(h)))?(n.instance=u,J(u),u):(s=a,(u=ai.get(h))&&(s=A({},a),Tf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),J(u),_n(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Pl(s,a.precedence,e));return n.instance}function Pl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,h=u,S=0;S<s.length;S++){var b=s[S];if(b.dataset.precedence===n)h=b;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ef(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Tf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var zl=null;function Tg(e,n,a){if(zl===null){var s=new Map,u=zl=new Map;u.set(a,s)}else u=zl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Fa]||h[tn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var b=s.get(S);b?b.push(h):s.set(S,[h])}}return s}function bg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ex(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var go=null;function Tx(){}function bx(e,n,a){if(go===null)throw Error(r(475));var s=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Qr(a.href),h=e.querySelector(po(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=Bl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=h,J(h);return}h=e.ownerDocument||e,a=Mg(a),(u=ai.get(u))&&Ef(a,u),h=h.createElement("link"),J(h);var S=h;S._p=new Promise(function(b,O){S.onload=b,S.onerror=O}),_n(h,"link",a),n.instance=h}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Bl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ax(){if(go===null)throw Error(r(475));var e=go;return e.stylesheets&&e.count===0&&bf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&bf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Bl(){if(this.count--,this.count===0){if(this.stylesheets)bf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fl=null;function bf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fl=new Map,n.forEach(Rx,e),Fl=null,Bl.call(e))}function Rx(e,n){if(!(n.state.loading&4)){var a=Fl.get(e);if(a)var s=a.get(null);else{a=new Map,Fl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||s,h===s&&a.set(null,u),a.set(S,u),this.count++,s=Bl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var _o={$$typeof:M,Provider:null,Consumer:null,_currentValue:pt,_currentValue2:pt,_threadCount:0};function Cx(e,n,a,s,u,h,S,b){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=En(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.hiddenUpdates=En(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Rg(e,n,a,s,u,h,S,b,O,V,ct,_t){return e=new Cx(e,n,a,S,b,O,V,_t),n=1,h===!0&&(n|=24),h=ni(3,null,null,n),e.current=h,h.stateNode=e,n=nu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:s,isDehydrated:a,cache:n},zu(h),e}function Cg(e){return e?(e=Cr,e):Cr}function wg(e,n,a,s,u,h){u=Cg(u),s.context===null?s.context=u:s.pendingContext=u,s=ga(n),s.payload={element:a},h=h===void 0?null:h,h!==null&&(s.callback=h),a=_a(e,s,n),a!==null&&(Cn(a,e,n),$s(a,e,n))}function Dg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Af(e,n){Dg(e,n),(e=e.alternate)&&Dg(e,n)}function Ug(e){if(e.tag===13){var n=ca(e,67108864);n!==null&&Cn(n,e,67108864),Af(e,67108864)}}var Il=!0;function wx(e,n,a,s){var u=C.T;C.T=null;var h=q.p;try{q.p=2,Rf(e,n,a,s)}finally{q.p=h,C.T=u}}function Dx(e,n,a,s){var u=C.T;C.T=null;var h=q.p;try{q.p=8,Rf(e,n,a,s)}finally{q.p=h,C.T=u}}function Rf(e,n,a,s){if(Il){var u=Cf(s);if(u===null)mf(e,n,s,Hl,a),Ng(e,s);else if(Lx(u,e,n,a,s))s.stopPropagation();else if(Ng(e,s),n&4&&-1<Ux.indexOf(e)){for(;u!==null;){var h=R(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ct(h.pendingLanes);if(S!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var O=1<<31-Zt(S);b.entanglements[1]|=O,S&=~O}Ai(h),(Ge&6)===0&&(El=ht()+500,uo(0))}}break;case 13:b=ca(h,2),b!==null&&Cn(b,h,2),Al(),Af(h,2)}if(h=Cf(s),h===null&&mf(e,n,s,Hl,a),h===u)break;u=h}u!==null&&s.stopPropagation()}else mf(e,n,s,null,a)}}function Cf(e){return e=Nc(e),wf(e)}var Hl=null;function wf(e){if(Hl=null,e=Li(e),e!==null){var n=K(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=St(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Hl=e,null}function Lg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case dt:return 2;case Ht:return 8;case wt:case zt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Df=!1,Ta=null,ba=null,Aa=null,vo=new Map,xo=new Map,Ra=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ng(e,n){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function So(e,n,a,s,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:h,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Ug(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Lx(e,n,a,s,u){switch(n){case"focusin":return Ta=So(Ta,e,n,a,s,u),!0;case"dragenter":return ba=So(ba,e,n,a,s,u),!0;case"mouseover":return Aa=So(Aa,e,n,a,s,u),!0;case"pointerover":var h=u.pointerId;return vo.set(h,So(vo.get(h)||null,e,n,a,s,u)),!0;case"gotpointercapture":return h=u.pointerId,xo.set(h,So(xo.get(h)||null,e,n,a,s,u)),!0}return!1}function Og(e){var n=Li(e.target);if(n!==null){var a=K(n);if(a!==null){if(n=a.tag,n===13){if(n=St(a),n!==null){e.blockedOn=n,Go(e.priority,function(){if(a.tag===13){var s=Wn(),u=ca(a,s);u!==null&&Cn(u,a,s),Af(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=R(a),n!==null&&Ug(n),e.blockedOn=a,!1;n.shift()}return!0}function Pg(e,n,a){Gl(e)&&a.delete(n)}function Nx(){Df=!1,Ta!==null&&Gl(Ta)&&(Ta=null),ba!==null&&Gl(ba)&&(ba=null),Aa!==null&&Gl(Aa)&&(Aa=null),vo.forEach(Pg),xo.forEach(Pg)}function Vl(e,n){e.blockedOn===n&&(e.blockedOn=null,Df||(Df=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nx)))}var kl=null;function zg(e){kl!==e&&(kl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(wf(s||a)===null)continue;break}var h=R(a);h!==null&&(e.splice(n,3),n-=3,vu(h,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function yo(e){function n(O){return Vl(O,e)}Ta!==null&&Vl(Ta,e),ba!==null&&Vl(ba,e),Aa!==null&&Vl(Aa,e),vo.forEach(n),xo.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Og(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],h=a[s+1],S=u[en]||null;if(typeof h=="function")S||zg(a);else if(S){var b=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[en]||null)b=S.formAction;else if(wf(u)!==null)continue}else b=S.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),zg(a)}}}function Uf(e){this._internalRoot=e}Xl.prototype.render=Uf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();wg(a,s,e,n,null,null)},Xl.prototype.unmount=Uf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Wr(),wg(e.current,2,null,e,null,null),Al(),n[Ui]=null}};function Xl(e){this._internalRoot=e}Xl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Og(e)}};var Bg=t.version;if(Bg!=="19.0.0")throw Error(r(527,Bg,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=at(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var Ox={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Li,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{Kt=Wl.inject(Ox),Gt=Wl}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=tm,h=em,S=nm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Rg(e,1,!1,null,null,a,s,u,h,S,b,null),e[Ui]=n.current,pf(e.nodeType===8?e.parentNode:e),new Uf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",h=tm,S=em,b=nm,O=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(O=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=Rg(e,1,!0,n,a??null,s,u,h,S,b,O,V),n.context=Cg(null),a=n.current,s=Wn(),u=ga(s),u.callback=null,_a(a,u,s),n.current.lanes=s,Tn(n,s),Ai(n),e[Ui]=n.current,pf(e),new Xl(n)},Eo.version="19.0.0",Eo}var Yg;function qx(){if(Yg)return Of.exports;Yg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Of.exports=Wx(),Of.exports}var Yx=qx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ld="174",Zx=0,Zg=1,Qx=2,K_=1,Kx=2,$i=3,Ba=0,Fn=1,gi=2,na=0,hs=1,gs=2,Qg=3,Kg=4,jx=5,pr=100,Jx=101,$x=102,tS=103,eS=104,nS=200,iS=201,aS=202,rS=203,xh=204,Sh=205,sS=206,oS=207,lS=208,cS=209,uS=210,fS=211,hS=212,dS=213,pS=214,yh=0,Mh=1,Eh=2,_s=3,Th=4,bh=5,Ah=6,Rh=7,j_=0,mS=1,gS=2,za=0,_S=1,vS=2,xS=3,SS=4,yS=5,MS=6,ES=7,J_=300,vs=301,xs=302,Ch=303,wh=304,Ac=306,Dh=1e3,gr=1001,Uh=1002,xi=1003,TS=1004,ql=1005,Ci=1006,Ff=1007,_r=1008,ra=1009,$_=1010,tv=1011,No=1012,cd=1013,vr=1014,ta=1015,ia=1016,ud=1017,fd=1018,Ss=1020,ev=35902,nv=1021,iv=1022,vi=1023,av=1024,rv=1025,ds=1026,ys=1027,sv=1028,hd=1029,ov=1030,dd=1031,pd=1033,mc=33776,gc=33777,_c=33778,vc=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Fh=37496,Ih=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,Zh=37817,Qh=37818,Kh=37819,jh=37820,Jh=37821,xc=36492,$h=36494,td=36495,lv=36283,ed=36284,nd=36285,id=36286,bS=3200,AS=3201,RS=0,CS=1,Pa="",si="srgb",Ms="srgb-linear",yc="linear",Oe="srgb",jr=7680,jg=519,wS=512,DS=513,US=514,cv=515,LS=516,NS=517,OS=518,PS=519,Jg=35044,$g="300 es",ea=2e3,Mc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],If=Math.PI/180,ad=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function zS(o,t){return(o%t+t)%t}function Hf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,i=0){Wt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,r,l,c,f,d,p,m){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],x=r[2],M=r[5],E=r[8],w=l[0],y=l[3],v=l[6],P=l[1],U=l[4],D=l[7],I=l[2],B=l[5],z=l[8];return c[0]=f*w+d*P+p*I,c[3]=f*y+d*U+p*B,c[6]=f*v+d*D+p*z,c[1]=m*w+g*P+_*I,c[4]=m*y+g*U+_*B,c[7]=m*v+g*D+_*z,c[2]=x*w+M*P+E*I,c[5]=x*y+M*U+E*B,c[8]=x*v+M*D+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*c*g+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,x=d*p-g*c,M=m*c-f*p,E=i*_+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=_*w,t[1]=(l*m-g*r)*w,t[2]=(d*r-l*f)*w,t[3]=x*w,t[4]=(g*i-l*p)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(r*p-m*i)*w,t[8]=(f*i-r*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Gf.makeScale(t,i)),this}rotate(t){return this.premultiply(Gf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Gf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new le;function uv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ec(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function BS(){const o=Ec("canvas");return o.style.display="block",o}const t_={};function fr(o){o in t_||(t_[o]=!0,console.warn(o))}function FS(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function IS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function HS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const e_=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function GS(){const o={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Oe&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Oe&&(l.r=ps(l.r),l.g=ps(l.g),l.b=ps(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?yc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ms]:{primaries:t,whitePoint:r,transfer:yc,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Oe,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Re=GS();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class VS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=Ec("canvas")),Jr.width=t.width,Jr.height=t.height;const r=Jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ec("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=aa(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kS=0;class md{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Vf(l[f].image)):c.push(Vf(l[f]))}else c=Vf(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Vf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?VS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XS=0;class In extends bs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=gr,l=gr,c=Ci,f=_r,d=vi,p=ra,m=In.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=Oo(),this.name="",this.source=new md(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==J_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case gr:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case gr:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=J_;In.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],x=p[1],M=p[5],E=p[9],w=p[2],y=p[6],v=p[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(M+1)/2,I=(v+1)/2,B=(g+x)/4,z=(_+w)/4,Z=(E+y)/4;return U>D&&U>I?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=z/r):D>I?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=B/l,c=Z/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=z/c,l=Z/c),this.set(r,l,c,i),this}let P=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(_-w)/P,this.z=(x-g)/P,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends bs{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ze(0,0,t,i),this.scissorTest=!1,this.viewport=new Ze(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new md(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends WS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class fv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qS extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const x=c[f+0],M=c[f+1],E=c[f+2],w=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(_!==w||p!==x||m!==M||g!==E){let y=1-d;const v=p*x+m*M+g*E+_*w,P=v>=0?1:-1,U=1-v*v;if(U>Number.EPSILON){const I=Math.sqrt(U),B=Math.atan2(I,v*P);y=Math.sin(y*B)/I,d=Math.sin(d*B)/I}const D=d*P;if(p=p*y+x*D,m=m*y+M*D,g=g*y+E*D,_=_*y+w*D,y===1-d){const I=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=I,m*=I,g*=I,_*=I}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[f],x=c[f+1],M=c[f+2],E=c[f+3];return t[i]=d*E+g*_+p*M-m*x,t[i+1]=p*E+g*x+m*_-d*M,t[i+2]=m*E+g*M+d*x-p*_,t[i+3]=g*E-d*_-p*x-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),x=p(r/2),M=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"YXZ":this._x=x*g*_+m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"ZXY":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_-x*M*E;break;case"ZYX":this._x=x*g*_-m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_+x*M*E;break;case"YZX":this._x=x*g*_+m*M*E,this._y=m*M*_+x*g*E,this._z=m*g*E-x*M*_,this._w=m*g*_-x*M*E;break;case"XZY":this._x=x*g*_-m*M*E,this._y=m*M*_-x*g*E,this._z=m*g*E+x*M*_,this._w=m*g*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(i_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(i_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(pe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(pe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kf=new Y,i_=new Po;class zo{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,di):di.fromBufferAttribute(c,f),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bo),Zl.subVectors(this.max,bo),$r.subVectors(t.a,bo),ts.subVectors(t.b,bo),es.subVectors(t.c,bo),wa.subVectors(ts,$r),Da.subVectors(es,ts),rr.subVectors($r,es);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-rr.z,rr.y,wa.z,0,-wa.x,Da.z,0,-Da.x,rr.z,0,-rr.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-rr.y,rr.x,0];return!Xf(i,$r,ts,es,Zl)||(i=[1,0,0,0,1,0,0,0,1],!Xf(i,$r,ts,es,Zl))?!1:(Ql.crossVectors(wa,Da),i=[Ql.x,Ql.y,Ql.z],Xf(i,$r,ts,es,Zl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],di=new Y,Yl=new zo,$r=new Y,ts=new Y,es=new Y,wa=new Y,Da=new Y,rr=new Y,bo=new Y,Zl=new Y,Ql=new Y,sr=new Y;function Xf(o,t,i,r,l){for(let c=0,f=o.length-3;c<=f;c+=3){sr.fromArray(o,c);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),p=t.dot(sr),m=i.dot(sr),g=r.dot(sr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const YS=new zo,Ao=new Y,Wf=new Y;class gd{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):YS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ao.subVectors(t,this.center);const i=Ao.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ao,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ao.copy(t.center).add(Wf)),this.expandByPoint(Ao.copy(t.center).sub(Wf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new Y,qf=new Y,Kl=new Y,Ua=new Y,Yf=new Y,jl=new Y,Zf=new Y;class hv{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Qi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){qf.copy(t).add(i).multiplyScalar(.5),Kl.copy(i).sub(t).normalize(),Ua.copy(this.origin).sub(qf);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Kl),d=Ua.dot(this.direction),p=-Ua.dot(Kl),m=Ua.lengthSq(),g=Math.abs(1-f*f);let _,x,M,E;if(g>0)if(_=f*p-d,x=f*d-p,E=c*g,_>=0)if(x>=-E)if(x<=E){const w=1/g;_*=w,x*=w,M=_*(_+f*x+2*d)+x*(f*_+x+2*p)+m}else x=c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*p)+m;else x<=-E?(_=Math.max(0,-(-f*c+d)),x=_>0?-c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m):x<=E?(_=0,x=Math.min(Math.max(-c,-p),c),M=x*(x+2*p)+m):(_=Math.max(0,-(f*c+d)),x=_>0?c:Math.min(Math.max(-c,-p),c),M=-_*_+x*(x+2*p)+m);else x=f>0?-c:c,_=Math.max(0,-(f*x+d)),M=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(qf).addScaledVector(Kl,x),M}intersectSphere(t,i){Qi.subVectors(t.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(c=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(c=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-x.z)*_,p=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,p=(t.min.z-x.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,i,r,l,c){Yf.subVectors(i,t),jl.subVectors(r,t),Zf.crossVectors(Yf,jl);let f=this.direction.dot(Zf),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ua.subVectors(this.origin,t);const p=d*this.direction.dot(jl.crossVectors(Ua,jl));if(p<0)return null;const m=d*this.direction.dot(Yf.cross(Ua));if(m<0||p+m>f)return null;const g=-d*Ua.dot(Zf);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,f,d,p,m,g,_,x,M,E,w,y){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,g,_,x,M,E,w,y)}set(t,i,r,l,c,f,d,p,m,g,_,x,M,E,w,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=g,v[10]=_,v[14]=x,v[3]=M,v[7]=E,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ns.setFromMatrixColumn(t,0).length(),c=1/ns.setFromMatrixColumn(t,1).length(),f=1/ns.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=f*g,M=f*_,E=d*g,w=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=M+E*m,i[5]=x-w*m,i[9]=-d*p,i[2]=w-x*m,i[6]=E+M*m,i[10]=f*p}else if(t.order==="YXZ"){const x=p*g,M=p*_,E=m*g,w=m*_;i[0]=x+w*d,i[4]=E*d-M,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=M*d-E,i[6]=w+x*d,i[10]=f*p}else if(t.order==="ZXY"){const x=p*g,M=p*_,E=m*g,w=m*_;i[0]=x-w*d,i[4]=-f*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=f*g,i[9]=w-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const x=f*g,M=f*_,E=d*g,w=d*_;i[0]=p*g,i[4]=E*m-M,i[8]=x*m+w,i[1]=p*_,i[5]=w*m+x,i[9]=M*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const x=f*p,M=f*m,E=d*p,w=d*m;i[0]=p*g,i[4]=w-x*_,i[8]=E*_+M,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*_+E,i[10]=x-w*_}else if(t.order==="XZY"){const x=f*p,M=f*m,E=d*p,w=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=x*_+w,i[5]=f*g,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*g,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ZS,t,QS)}lookAt(t,i,r){const l=this.elements;return qn.subVectors(t,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),La.crossVectors(r,qn),La.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),La.crossVectors(r,qn)),La.normalize(),Jl.crossVectors(qn,La),l[0]=La.x,l[4]=Jl.x,l[8]=qn.x,l[1]=La.y,l[5]=Jl.y,l[9]=qn.y,l[2]=La.z,l[6]=Jl.z,l[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],x=r[9],M=r[13],E=r[2],w=r[6],y=r[10],v=r[14],P=r[3],U=r[7],D=r[11],I=r[15],B=l[0],z=l[4],Z=l[8],C=l[12],A=l[1],H=l[5],ot=l[9],nt=l[13],ft=l[2],ut=l[6],W=l[10],rt=l[14],K=l[3],St=l[7],N=l[11],at=l[15];return c[0]=f*B+d*A+p*ft+m*K,c[4]=f*z+d*H+p*ut+m*St,c[8]=f*Z+d*ot+p*W+m*N,c[12]=f*C+d*nt+p*rt+m*at,c[1]=g*B+_*A+x*ft+M*K,c[5]=g*z+_*H+x*ut+M*St,c[9]=g*Z+_*ot+x*W+M*N,c[13]=g*C+_*nt+x*rt+M*at,c[2]=E*B+w*A+y*ft+v*K,c[6]=E*z+w*H+y*ut+v*St,c[10]=E*Z+w*ot+y*W+v*N,c[14]=E*C+w*nt+y*rt+v*at,c[3]=P*B+U*A+D*ft+I*K,c[7]=P*z+U*H+D*ut+I*St,c[11]=P*Z+U*ot+D*W+I*N,c[15]=P*C+U*nt+D*rt+I*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],x=t[10],M=t[14],E=t[3],w=t[7],y=t[11],v=t[15];return E*(+c*p*_-l*m*_-c*d*x+r*m*x+l*d*M-r*p*M)+w*(+i*p*M-i*m*x+c*f*x-l*f*M+l*m*g-c*p*g)+y*(+i*m*_-i*d*M-c*f*_+r*f*M+c*d*g-r*m*g)+v*(-l*d*g-i*p*_+i*d*x+l*f*_-r*f*x+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],x=t[10],M=t[11],E=t[12],w=t[13],y=t[14],v=t[15],P=_*y*m-w*x*m+w*p*M-d*y*M-_*p*v+d*x*v,U=E*x*m-g*y*m-E*p*M+f*y*M+g*p*v-f*x*v,D=g*w*m-E*_*m+E*d*M-f*w*M-g*d*v+f*_*v,I=E*_*p-g*w*p-E*d*x+f*w*x+g*d*y-f*_*y,B=i*P+r*U+l*D+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return t[0]=P*z,t[1]=(w*x*c-_*y*c-w*l*M+r*y*M+_*l*v-r*x*v)*z,t[2]=(d*y*c-w*p*c+w*l*m-r*y*m-d*l*v+r*p*v)*z,t[3]=(_*p*c-d*x*c-_*l*m+r*x*m+d*l*M-r*p*M)*z,t[4]=U*z,t[5]=(g*y*c-E*x*c+E*l*M-i*y*M-g*l*v+i*x*v)*z,t[6]=(E*p*c-f*y*c-E*l*m+i*y*m+f*l*v-i*p*v)*z,t[7]=(f*x*c-g*p*c+g*l*m-i*x*m-f*l*M+i*p*M)*z,t[8]=D*z,t[9]=(E*_*c-g*w*c-E*r*M+i*w*M+g*r*v-i*_*v)*z,t[10]=(f*w*c-E*d*c+E*r*m-i*w*m-f*r*v+i*d*v)*z,t[11]=(g*d*c-f*_*c-g*r*m+i*_*m+f*r*M-i*d*M)*z,t[12]=I*z,t[13]=(g*w*l-E*_*l+E*r*x-i*w*x-g*r*y+i*_*y)*z,t[14]=(E*d*l-f*w*l-E*r*p+i*w*p+f*r*y-i*d*y)*z,t[15]=(f*_*l-g*d*l+g*r*p-i*_*p-f*r*x+i*d*x)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,x=c*m,M=c*g,E=c*_,w=f*g,y=f*_,v=d*_,P=p*m,U=p*g,D=p*_,I=r.x,B=r.y,z=r.z;return l[0]=(1-(w+v))*I,l[1]=(M+D)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(x+v))*B,l[6]=(y+P)*B,l[7]=0,l[8]=(E+U)*z,l[9]=(y-P)*z,l[10]=(1-(x+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ns.set(l[0],l[1],l[2]).length();const f=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const m=1/c,g=1/f,_=1/d;return pi.elements[0]*=m,pi.elements[1]*=m,pi.elements[2]*=m,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,i.setFromRotationMatrix(pi),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=ea){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),x=(r+l)/(r-l);let M,E;if(d===ea)M=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Mc)M=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=ea){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(f-c),x=(i+t)*m,M=(r+l)*g;let E,w;if(d===ea)E=(f+c)*_,w=-2*_;else if(d===Mc)E=c*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ns=new Y,pi=new qe,ZS=new Y(0,0,0),QS=new Y(1,1,1),La=new Y,Jl=new Y,qn=new Y,a_=new qe,r_=new Po;class sa{constructor(t=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-pe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(pe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return a_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(a_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return r_.setFromEuler(this),this.setFromQuaternion(r_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class _d{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let KS=0;const s_=new Y,is=new Po,Ki=new qe,$l=new Y,Ro=new Y,jS=new Y,JS=new Po,o_=new Y(1,0,0),l_=new Y(0,1,0),c_=new Y(0,0,1),u_={type:"added"},$S={type:"removed"},as={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Zn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new Y,i=new sa,r=new Po,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new le}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(o_,t)}rotateY(t){return this.rotateOnAxis(l_,t)}rotateZ(t){return this.rotateOnAxis(c_,t)}translateOnAxis(t,i){return s_.copy(t).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(o_,t)}translateY(t){return this.translateOnAxis(l_,t)}translateZ(t){return this.translateOnAxis(c_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?$l.copy(t):$l.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ro,$l,this.up):Ki.lookAt($l,Ro,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Ki),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(u_),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent($S),Qf.child=t,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(u_),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,t,jS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,JS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),x=f(t.skeletons),M=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new Y(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new Y,ji=new Y,Kf=new Y,Ji=new Y,rs=new Y,ss=new Y,f_=new Y,jf=new Y,Jf=new Y,$f=new Y,th=new Ze,eh=new Ze,nh=new Ze;class _i{constructor(t=new Y,i=new Y,r=new Y){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),mi.subVectors(t,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){mi.subVectors(l,i),ji.subVectors(r,i),Kf.subVectors(t,i);const f=mi.dot(mi),d=mi.dot(ji),p=mi.dot(Kf),m=ji.dot(ji),g=ji.dot(Kf),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(m*p-d*g)*x,E=(f*g-d*p)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ji.x),p.addScaledVector(f,Ji.y),p.addScaledVector(d,Ji.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return th.setScalar(0),eh.setScalar(0),nh.setScalar(0),th.fromBufferAttribute(t,i),eh.fromBufferAttribute(t,r),nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(th,c.x),f.addScaledVector(eh,c.y),f.addScaledVector(nh,c.z),f}static isFrontFacing(t,i,r,l){return mi.subVectors(r,i),ji.subVectors(t,i),mi.cross(ji).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),mi.cross(ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;rs.subVectors(l,r),ss.subVectors(c,r),jf.subVectors(t,r);const p=rs.dot(jf),m=ss.dot(jf);if(p<=0&&m<=0)return i.copy(r);Jf.subVectors(t,l);const g=rs.dot(Jf),_=ss.dot(Jf);if(g>=0&&_<=g)return i.copy(l);const x=p*_-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(rs,f);$f.subVectors(t,c);const M=rs.dot($f),E=ss.dot($f);if(E>=0&&M<=E)return i.copy(c);const w=M*m-p*E;if(w<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ss,d);const y=g*E-M*_;if(y<=0&&_-g>=0&&M-E>=0)return f_.subVectors(c,l),d=(_-g)/(_-g+(M-E)),i.copy(l).addScaledVector(f_,d);const v=1/(y+w+x);return f=w*v,d=x*v,i.copy(r).addScaledVector(rs,f).addScaledVector(ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},tc={h:0,s:0,l:0};function ih(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class me{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=zS(t,1),i=pe(i,0,1),r=pe(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=ih(f,c,t+1/3),this.g=ih(f,c,t),this.b=ih(f,c,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=dv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Re.fromWorkingColorSpace(Mn.copy(this),t),Math.round(pe(Mn.r*255,0,255))*65536+Math.round(pe(Mn.g*255,0,255))*256+Math.round(pe(Mn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,c=Mn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Mn.copy(this),i),t.r=Mn.r,t.g=Mn.g,t.b=Mn.b,t}getStyle(t=si){Re.fromWorkingColorSpace(Mn.copy(this),t);const i=Mn.r,r=Mn.g,l=Mn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+i,Na.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Na),t.getHSL(tc);const r=Hf(Na.h,tc.h,i),l=Hf(Na.s,tc.s,i),c=Hf(Na.l,tc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new me;me.NAMES=dv;let ty=0;class Rc extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=hs,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==pr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ms extends Rc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Je=new Y,ec=new Wt;let ey=0;class wi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ey++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Jg,this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(t),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(t),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jg&&(t.usage=this.usage),t}}class pv extends wi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class mv extends wi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Un extends wi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let ny=0;const ri=new qe,ah=new Zn,os=new Y,Yn=new zo,Co=new zo,hn=new Y;class Di extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?mv:pv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return ah.lookAt(t),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Co.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Yn.min,Co.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,Co.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(Co.min),Yn.expandByPoint(Co.max))}Yn.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)hn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(hn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)hn.fromBufferAttribute(d,m),p&&(os.fromBufferAttribute(t,m),hn.add(os)),l=Math.max(l,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<r.count;Z++)d[Z]=new Y,p[Z]=new Y;const m=new Y,g=new Y,_=new Y,x=new Wt,M=new Wt,E=new Wt,w=new Y,y=new Y;function v(Z,C,A){m.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,A),x.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,C),E.fromBufferAttribute(c,A),g.sub(m),_.sub(m),M.sub(x),E.sub(x);const H=1/(M.x*E.y-E.x*M.y);isFinite(H)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(H),y.copy(_).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(H),d[Z].add(w),d[C].add(w),d[A].add(w),p[Z].add(y),p[C].add(y),p[A].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Z=0,C=P.length;Z<C;++Z){const A=P[Z],H=A.start,ot=A.count;for(let nt=H,ft=H+ot;nt<ft;nt+=3)v(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const U=new Y,D=new Y,I=new Y,B=new Y;function z(Z){I.fromBufferAttribute(l,Z),B.copy(I);const C=d[Z];U.copy(C),U.sub(I.multiplyScalar(I.dot(C))).normalize(),D.crossVectors(B,C);const H=D.dot(p[Z])<0?-1:1;f.setXYZW(Z,U.x,U.y,U.z,H)}for(let Z=0,C=P.length;Z<C;++Z){const A=P[Z],H=A.start,ot=A.count;for(let nt=H,ft=H+ot;nt<ft;nt+=3)z(t.getX(nt+0)),z(t.getX(nt+1)),z(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new Y,c=new Y,f=new Y,d=new Y,p=new Y,m=new Y,g=new Y,_=new Y;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,y),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)hn.fromBufferAttribute(t,i),hn.normalize(),t.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,x=new m.constructor(p.length*g);let M=0,E=0;for(let w=0,y=p.length;w<y;w++){d.isInterleavedBufferAttribute?M=p[w]*d.data.stride+d.offset:M=p[w]*g;for(let v=0;v<g;v++)x[E++]=m[M++]}return new wi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const x=m[g],M=t(x,r);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,x=m.length;_<x;_++){const M=m[_];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const h_=new qe,or=new hv,nc=new gd,d_=new Y,ic=new Y,ac=new Y,rc=new Y,rh=new Y,sc=new Y,p_=new Y,oc=new Y;class Bn extends Zn{constructor(t=new Di,i=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){sc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(rh.fromBufferAttribute(_,t),f?sc.addScaledVector(rh,g):sc.addScaledVector(rh.sub(i),g))}i.add(sc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(c),or.copy(t.ray).recast(t.near),!(nc.containsPoint(or.origin)===!1&&(or.intersectSphere(nc,d_)===null||or.origin.distanceToSquared(d_)>(t.far-t.near)**2))&&(h_.copy(c).invert(),or.copy(t.ray).applyMatrix4(h_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,w=x.length;E<w;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=U;D<I;D+=3){const B=d.getX(D),z=d.getX(D+1),Z=d.getX(D+2);l=lc(this,v,t,r,m,g,_,B,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,v=w;y<v;y+=3){const P=d.getX(y),U=d.getX(y+1),D=d.getX(y+2);l=lc(this,f,t,r,m,g,_,P,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,w=x.length;E<w;E++){const y=x[E],v=f[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,I=U;D<I;D+=3){const B=D,z=D+1,Z=D+2;l=lc(this,v,t,r,m,g,_,B,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=E,v=w;y<v;y+=3){const P=y,U=y+1,D=y+2;l=lc(this,f,t,r,m,g,_,P,U,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function iy(o,t,i,r,l,c,f,d){let p;if(t.side===Fn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===Ba,d),p===null)return null;oc.copy(d),oc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(oc);return m<i.near||m>i.far?null:{distance:m,point:oc.clone(),object:o}}function lc(o,t,i,r,l,c,f,d,p,m){o.getVertexPosition(d,ic),o.getVertexPosition(p,ac),o.getVertexPosition(m,rc);const g=iy(o,t,i,r,ic,ac,rc,p_);if(g){const _=new Y;_i.getBarycoord(p_,ic,ac,rc,_),l&&(g.uv=_i.getInterpolatedAttribute(l,d,p,m,_,new Wt)),c&&(g.uv1=_i.getInterpolatedAttribute(c,d,p,m,_,new Wt)),f&&(g.normal=_i.getInterpolatedAttribute(f,d,p,m,_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Y,materialIndex:0};_i.getNormal(ic,ac,rc,x.normal),g.face=x,g.barycoord=_}return g}class Bo extends Di{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(g,3)),this.setAttribute("uv",new Un(_,2));function E(w,y,v,P,U,D,I,B,z,Z,C){const A=D/z,H=I/Z,ot=D/2,nt=I/2,ft=B/2,ut=z+1,W=Z+1;let rt=0,K=0;const St=new Y;for(let N=0;N<W;N++){const at=N*H-nt;for(let Et=0;Et<ut;Et++){const At=Et*A-ot;St[w]=At*P,St[y]=at*U,St[v]=ft,m.push(St.x,St.y,St.z),St[w]=0,St[y]=0,St[v]=B>0?1:-1,g.push(St.x,St.y,St.z),_.push(Et/z),_.push(1-N/Z),rt+=1}}for(let N=0;N<Z;N++)for(let at=0;at<z;at++){const Et=x+at+ut*N,At=x+at+ut*(N+1),q=x+(at+1)+ut*(N+1),pt=x+(at+1)+ut*N;p.push(Et,At,pt),p.push(At,q,pt),K+=6}d.addGroup(M,K,C),M+=K,x+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function wn(o){const t={};for(let i=0;i<o.length;i++){const r=Es(o[i]);for(const l in r)t[l]=r[l]}return t}function ay(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function gv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const Tc={clone:Es,merge:wn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Rc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _v extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new Y,m_=new Wt,g_=new Wt;class oi extends _v{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(If*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(If*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,i){return this.getViewBounds(t,m_,g_),i.subVectors(g_,m_)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(If*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,cs=1;class oy extends Zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ls,cs,t,i);l.layers=this.layers,this.add(l);const c=new oi(ls,cs,t,i);c.layers=this.layers,this.add(c);const f=new oi(ls,cs,t,i);f.layers=this.layers,this.add(f);const d=new oi(ls,cs,t,i);d.layers=this.layers,this.add(d);const p=new oi(ls,cs,t,i);p.layers=this.layers,this.add(p);const m=new oi(ls,cs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===ea)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vv extends In{constructor(t,i,r,l,c,f,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:vs,super(t,i,r,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ly extends Si{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new vv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bo(5,5,5),c=new Dn({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:na});c.uniforms.tEquirect.value=i;const f=new Bn(l,c),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ci),new oy(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class cc extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cy={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,r),v=this._getHandJoint(m,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&x>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cy)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class uy extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const oh=new Y,fy=new Y,hy=new le;class hr{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=oh.subVectors(r,i).cross(fy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(oh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||hy.getNormalMatrix(t),l=this.coplanarPoint(oh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new gd,uc=new Y;class xv{constructor(t=new hr,i=new hr,r=new hr,l=new hr,c=new hr,f=new hr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ea){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],x=l[7],M=l[8],E=l[9],w=l[10],y=l[11],v=l[12],P=l[13],U=l[14],D=l[15];if(r[0].setComponents(p-c,x-m,y-M,D-v).normalize(),r[1].setComponents(p+c,x+m,y+M,D+v).normalize(),r[2].setComponents(p+f,x+g,y+E,D+P).normalize(),r[3].setComponents(p-f,x-g,y-E,D-P).normalize(),r[4].setComponents(p-d,x-_,y-w,D-U).normalize(),i===ea)r[5].setComponents(p+d,x+_,y+w,D+U).normalize();else if(i===Mc)r[5].setComponents(d,_,w,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?t.max.x:t.min.x,uc.y=l.normal.y>0?t.max.y:t.min.y,uc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends In{constructor(t,i,r,l,c,f,d,p,m,g=ds){if(g!==ds&&g!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===ds&&(r=vr),r===void 0&&g===ys&&(r=Ss),super(null,l,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:xi,this.minFilter=p!==void 0?p:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new md(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],x=r[l+1]-g,M=(f-g)/x;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new Wt:new Y);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new Y,l=[],c=[],f=[],d=new Y,p=new qe;for(let M=0;M<=t;M++){const E=M/t;l[M]=this.getTangentAt(E,new Y)}c[0]=new Y,f[0]=new Y;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),x=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),x<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(pe(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(d,E))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(pe(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],M*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class yv extends oa{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Wt){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=p-this.aX,M=m-this.aY;p=x*g-M*_+this.aX,m=x*_+M*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dy extends yv{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function vd(){let o=0,t=0,i=0,r=0;function l(c,f,d,p){o=c,t=d,i=-3*c+3*f-2*d-p,r=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,_){let x=(f-c)/m-(d-c)/(m+g)+(d-f)/g,M=(d-f)/g-(p-f)/(g+_)+(p-d)/_;x*=g,M*=g,l(f,d,x,M)},calc:function(c){const f=c*c,d=f*c;return o+t*c+i*f+r*d}}}const fc=new Y,lh=new vd,ch=new vd,uh=new vd;class Mv extends oa{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new Y){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(fc.subVectors(l[0],l[1]).add(l[0]),m=fc);const _=l[d%c],x=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(fc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),M),w=Math.pow(_.distanceToSquared(x),M),y=Math.pow(x.distanceToSquared(g),M);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),lh.initNonuniformCatmullRom(m.x,_.x,x.x,g.x,E,w,y),ch.initNonuniformCatmullRom(m.y,_.y,x.y,g.y,E,w,y),uh.initNonuniformCatmullRom(m.z,_.z,x.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(lh.initCatmullRom(m.x,_.x,x.x,g.x,this.tension),ch.initCatmullRom(m.y,_.y,x.y,g.y,this.tension),uh.initCatmullRom(m.z,_.z,x.z,g.z,this.tension));return r.set(lh.calc(p),ch.calc(p),uh.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Y().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function __(o,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*r+c+f)*p+(-3*i+3*r-2*c-f)*d+c*o+i}function py(o,t){const i=1-o;return i*i*t}function my(o,t){return 2*(1-o)*o*t}function gy(o,t){return o*o*t}function Uo(o,t,i,r){return py(o,t)+my(o,i)+gy(o,r)}function _y(o,t){const i=1-o;return i*i*i*t}function vy(o,t){const i=1-o;return 3*i*i*o*t}function xy(o,t){return 3*(1-o)*o*o*t}function Sy(o,t){return o*o*o*t}function Lo(o,t,i,r,l){return _y(o,t)+vy(o,i)+xy(o,r)+Sy(o,l)}class yy extends oa{constructor(t=new Wt,i=new Wt,r=new Wt,l=new Wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Wt){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Lo(t,l.x,c.x,f.x,d.x),Lo(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class My extends oa{constructor(t=new Y,i=new Y,r=new Y,l=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Y){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Lo(t,l.x,c.x,f.x,d.x),Lo(t,l.y,c.y,f.y,d.y),Lo(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ey extends oa{constructor(t=new Wt,i=new Wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Wt){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Wt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ty extends oa{constructor(t=new Y,i=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Y){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Y){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class by extends oa{constructor(t=new Wt,i=new Wt,r=new Wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Wt){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Uo(t,l.x,c.x,f.x),Uo(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ev extends oa{constructor(t=new Y,i=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Y){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(Uo(t,l.x,c.x,f.x),Uo(t,l.y,c.y,f.y),Uo(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ay extends oa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Wt){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(__(d,p.x,m.x,g.x,_.x),__(d,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Wt().fromArray(l))}return this}}var Ry=Object.freeze({__proto__:null,ArcCurve:dy,CatmullRomCurve3:Mv,CubicBezierCurve:yy,CubicBezierCurve3:My,EllipseCurve:yv,LineCurve:Ey,LineCurve3:Ty,QuadraticBezierCurve:by,QuadraticBezierCurve3:Ev,SplineCurve:Ay});class Fo extends Di{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,x=i/p,M=[],E=[],w=[],y=[];for(let v=0;v<g;v++){const P=v*x-f;for(let U=0;U<m;U++){const D=U*_-c;E.push(D,-P,0),w.push(0,0,1),y.push(U/d),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let P=0;P<d;P++){const U=P+m*v,D=P+m*(v+1),I=P+1+m*(v+1),B=P+1+m*v;M.push(U,D,B),M.push(D,I,B)}this.setIndex(M),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.widthSegments,t.heightSegments)}}class bc extends Di{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const g=[],_=new Y,x=new Y,M=[],E=[],w=[],y=[];for(let v=0;v<=r;v++){const P=[],U=v/r;let D=0;v===0&&f===0?D=.5/i:v===r&&p===Math.PI&&(D=-.5/i);for(let I=0;I<=i;I++){const B=I/i;_.x=-t*Math.cos(l+B*c)*Math.sin(f+U*d),_.y=t*Math.cos(f+U*d),_.z=t*Math.sin(l+B*c)*Math.sin(f+U*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),w.push(x.x,x.y,x.z),y.push(B+D,1-U),P.push(m++)}g.push(P)}for(let v=0;v<r;v++)for(let P=0;P<i;P++){const U=g[v][P+1],D=g[v][P],I=g[v+1][P],B=g[v+1][P+1];(v!==0||f>0)&&M.push(U,D,B),(v!==r-1||p<Math.PI)&&M.push(D,I,B)}this.setIndex(M),this.setAttribute("position",new Un(E,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xd extends Di{constructor(t=new Ev(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new Y,p=new Y,m=new Wt;let g=new Y;const _=[],x=[],M=[],E=[];w(),this.setIndex(E),this.setAttribute("position",new Un(_,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(M,2));function w(){for(let U=0;U<i;U++)y(U);y(c===!1?i:0),P(),v()}function y(U){g=t.getPointAt(U/i,g);const D=f.normals[U],I=f.binormals[U];for(let B=0;B<=l;B++){const z=B/l*Math.PI*2,Z=Math.sin(z),C=-Math.cos(z);p.x=C*D.x+Z*I.x,p.y=C*D.y+Z*I.y,p.z=C*D.z+Z*I.z,p.normalize(),x.push(p.x,p.y,p.z),d.x=g.x+r*p.x,d.y=g.y+r*p.y,d.z=g.z+r*p.z,_.push(d.x,d.y,d.z)}}function v(){for(let U=1;U<=i;U++)for(let D=1;D<=l;D++){const I=(l+1)*(U-1)+(D-1),B=(l+1)*U+(D-1),z=(l+1)*U+D,Z=(l+1)*(U-1)+D;E.push(I,B,Z),E.push(B,z,Z)}}function P(){for(let U=0;U<=i;U++)for(let D=0;D<=l;D++)m.x=U/i,m.y=D/l,M.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new xd(new Ry[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Cy extends Rc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wy extends Rc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tv extends _v{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Dy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Uy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=v_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=v_();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function v_(){return performance.now()}const x_=new qe;class Ly{constructor(t,i,r=0,l=1/0){this.ray=new hv(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new _d,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return x_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(x_),this}intersectObject(t,i=!0,r=[]){return rd(t,this,r,i),r.sort(S_),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)rd(t[l],this,r,i);return r.sort(S_),r}}function S_(o,t){return o.distance-t.distance}function rd(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let f=0,d=c.length;f<d;f++)rd(c[f],t,i,!0)}}function y_(o,t,i,r){const l=Ny(r);switch(i){case nv:return o*t;case av:return o*t;case rv:return o*t*2;case sv:return o*t/l.components*l.byteLength;case hd:return o*t/l.components*l.byteLength;case ov:return o*t*2/l.components*l.byteLength;case dd:return o*t*2/l.components*l.byteLength;case iv:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case pd:return o*t*4/l.components*l.byteLength;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case _c:case vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(t,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case xc:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lv:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ny(o){switch(o){case ra:case $_:return{byteLength:1,components:1};case No:case tv:case ia:return{byteLength:2,components:1};case ud:case fd:return{byteLength:2,components:4};case vr:case cd:case ta:return{byteLength:4,components:1};case ev:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bv(){let o=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Oy(o){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(o.bindBuffer(m,d),_.length===0)o.bufferSubData(m,0,g);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],w=_[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,_[x]=w)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const w=_[M];o.bufferSubData(m,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,By=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ME=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$E=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:Py,alphahash_pars_fragment:zy,alphamap_fragment:By,alphamap_pars_fragment:Fy,alphatest_fragment:Iy,alphatest_pars_fragment:Hy,aomap_fragment:Gy,aomap_pars_fragment:Vy,batching_pars_vertex:ky,batching_vertex:Xy,begin_vertex:Wy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:Zy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:$y,color_fragment:tM,color_pars_fragment:eM,color_pars_vertex:nM,color_vertex:iM,common:aM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,colorspace_fragment:fM,colorspace_pars_fragment:hM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:RM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:xM,fog_fragment:SM,fog_pars_fragment:yM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:bM,lights_pars_begin:AM,lights_toon_fragment:CM,lights_toon_pars_fragment:wM,lights_phong_fragment:DM,lights_phong_pars_fragment:UM,lights_physical_fragment:LM,lights_physical_pars_fragment:NM,lights_fragment_begin:OM,lights_fragment_maps:PM,lights_fragment_end:zM,logdepthbuf_fragment:BM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:kM,map_particle_pars_fragment:XM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:qM,morphinstance_vertex:YM,morphcolor_vertex:ZM,morphnormal_vertex:QM,morphtarget_pars_vertex:KM,morphtarget_vertex:jM,normal_fragment_begin:JM,normal_fragment_maps:$M,normal_pars_fragment:tE,normal_pars_vertex:eE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:fE,dithering_fragment:hE,dithering_pars_fragment:dE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:vE,shadowmask_pars_fragment:xE,skinbase_vertex:SE,skinning_pars_vertex:yE,skinning_vertex:ME,skinnormal_vertex:EE,specularmap_fragment:TE,specularmap_pars_fragment:bE,tonemapping_fragment:AE,tonemapping_pars_fragment:RE,transmission_fragment:CE,transmission_pars_fragment:wE,uv_pars_fragment:DE,uv_pars_vertex:UE,uv_vertex:LE,worldpos_vertex:NE,background_vert:OE,background_frag:PE,backgroundCube_vert:zE,backgroundCube_frag:BE,cube_vert:FE,cube_frag:IE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:kE,equirect_vert:XE,equirect_frag:WE,linedashed_vert:qE,linedashed_frag:YE,meshbasic_vert:ZE,meshbasic_frag:QE,meshlambert_vert:KE,meshlambert_frag:jE,meshmatcap_vert:JE,meshmatcap_frag:$E,meshnormal_vert:tT,meshnormal_frag:eT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:rT,meshtoon_vert:sT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:hT,sprite_frag:dT},Ut={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ri={basic:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new me(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:wn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:wn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:wn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new me(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:wn([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:wn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:wn([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:wn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:wn([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:wn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:wn([Ut.lights,Ut.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ri.physical={uniforms:wn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const hc={r:0,b:0,g:0},cr=new sa,pT=new qe;function mT(o,t,i,r,l,c,f){const d=new me(0);let p=c===!0?0:1,m,g,_=null,x=0,M=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function w(U){let D=!1;const I=E(U);I===null?v(d,p):I&&I.isColor&&(v(I,1),D=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,D){const I=E(D);I&&(I.isCubeTexture||I.mapping===Ac)?(g===void 0&&(g=new Bn(new Bo(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Es(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),cr.copy(D.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(cr)),g.material.toneMapped=Re.getTransfer(I.colorSpace)!==Oe,(_!==I||x!==I.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,_=I,x=I.version,M=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Bn(new Fo(2,2),new Dn({name:"BackgroundMaterial",uniforms:Es(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Re.getTransfer(I.colorSpace)!==Oe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,_=I,x=I.version,M=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function v(U,D){U.getRGB(hc,gv(o)),r.buffers.color.setClear(hc.r,hc.g,hc.b,D,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,D=1){d.set(U),p=D,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,v(d,p)},render:w,addToRenderList:y,dispose:P}}function gT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,f=!1;function d(A,H,ot,nt,ft){let ut=!1;const W=_(nt,ot,H);c!==W&&(c=W,m(c.object)),ut=M(A,nt,ot,ft),ut&&E(A,nt,ot,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(ut||f)&&(f=!1,D(A,H,ot,nt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function _(A,H,ot){const nt=ot.wireframe===!0;let ft=r[A.id];ft===void 0&&(ft={},r[A.id]=ft);let ut=ft[H.id];ut===void 0&&(ut={},ft[H.id]=ut);let W=ut[nt];return W===void 0&&(W=x(p()),ut[nt]=W),W}function x(A){const H=[],ot=[],nt=[];for(let ft=0;ft<i;ft++)H[ft]=0,ot[ft]=0,nt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:nt,object:A,attributes:{},index:null}}function M(A,H,ot,nt){const ft=c.attributes,ut=H.attributes;let W=0;const rt=ot.getAttributes();for(const K in rt)if(rt[K].location>=0){const N=ft[K];let at=ut[K];if(at===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(at=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(at=A.instanceColor)),N===void 0||N.attribute!==at||at&&N.data!==at.data)return!0;W++}return c.attributesNum!==W||c.index!==nt}function E(A,H,ot,nt){const ft={},ut=H.attributes;let W=0;const rt=ot.getAttributes();for(const K in rt)if(rt[K].location>=0){let N=ut[K];N===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(N=A.instanceColor));const at={};at.attribute=N,N&&N.data&&(at.data=N.data),ft[K]=at,W++}c.attributes=ft,c.attributesNum=W,c.index=nt}function w(){const A=c.newAttributes;for(let H=0,ot=A.length;H<ot;H++)A[H]=0}function y(A){v(A,0)}function v(A,H){const ot=c.newAttributes,nt=c.enabledAttributes,ft=c.attributeDivisors;ot[A]=1,nt[A]===0&&(o.enableVertexAttribArray(A),nt[A]=1),ft[A]!==H&&(o.vertexAttribDivisor(A,H),ft[A]=H)}function P(){const A=c.newAttributes,H=c.enabledAttributes;for(let ot=0,nt=H.length;ot<nt;ot++)H[ot]!==A[ot]&&(o.disableVertexAttribArray(ot),H[ot]=0)}function U(A,H,ot,nt,ft,ut,W){W===!0?o.vertexAttribIPointer(A,H,ot,ft,ut):o.vertexAttribPointer(A,H,ot,nt,ft,ut)}function D(A,H,ot,nt){w();const ft=nt.attributes,ut=ot.getAttributes(),W=H.defaultAttributeValues;for(const rt in ut){const K=ut[rt];if(K.location>=0){let St=ft[rt];if(St===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(St=A.instanceColor)),St!==void 0){const N=St.normalized,at=St.itemSize,Et=t.get(St);if(Et===void 0)continue;const At=Et.buffer,q=Et.type,pt=Et.bytesPerElement,xt=q===o.INT||q===o.UNSIGNED_INT||St.gpuType===cd;if(St.isInterleavedBufferAttribute){const Tt=St.data,Rt=Tt.stride,jt=St.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<K.locationSize;Pt++)v(K.location+Pt,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<K.locationSize;Pt++)y(K.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<K.locationSize;Pt++)U(K.location+Pt,at/K.locationSize,q,N,Rt*pt,(jt+at/K.locationSize*Pt)*pt,xt)}else{if(St.isInstancedBufferAttribute){for(let Tt=0;Tt<K.locationSize;Tt++)v(K.location+Tt,St.meshPerAttribute);A.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Tt=0;Tt<K.locationSize;Tt++)y(K.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<K.locationSize;Tt++)U(K.location+Tt,at/K.locationSize,q,N,at*pt,at/K.locationSize*Tt*pt,xt)}}else if(W!==void 0){const N=W[rt];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(K.location,N);break;case 3:o.vertexAttrib3fv(K.location,N);break;case 4:o.vertexAttrib4fv(K.location,N);break;default:o.vertexAttrib1fv(K.location,N)}}}}P()}function I(){Z();for(const A in r){const H=r[A];for(const ot in H){const nt=H[ot];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete H[ot]}delete r[A]}}function B(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const ot in H){const nt=H[ot];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete H[ot]}delete r[A.id]}function z(A){for(const H in r){const ot=r[H];if(ot[A.id]===void 0)continue;const nt=ot[A.id];for(const ft in nt)g(nt[ft].object),delete nt[ft];delete ot[A.id]}}function Z(){C(),f=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function _T(o,t,i){let r;function l(m){r=m}function c(m,g){o.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(o.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E];i.update(M,r,1)}function p(m,g,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*x[w];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function vT(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==vi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===ia&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ra&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ta&&!Z)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:I,maxSamples:B}}function xT(o){const t=this;let i=null,r=0,l=!1,c=!1;const f=new hr,d=new le,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||l;return l=x,r=_.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const P=c?0:r,U=P*4;let D=v.clippingState||null;p.value=D,D=g(E,x,U,M);for(let I=0;I!==U;++I)D[I]=i[I];v.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,x,M,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=p.value,E!==!0||y===null){const v=M+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,D=M;U!==w;++U,D+=4)f.copy(_[U]).applyMatrix4(P,d),f.normal.toArray(y,D),y[D+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function ST(o){let t=new WeakMap;function i(f,d){return d===Ch?f.mapping=vs:d===wh&&(f.mapping=xs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Ch||d===wh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ly(p.height);return m.fromEquirectangularTexture(o,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const fs=4,M_=[.125,.215,.35,.446,.526,.582],mr=20,fh=new Tv,E_=new me;let hh=null,dh=0,ph=0,mh=!1;const dr=(1+Math.sqrt(5))/2,us=1/dr,T_=[new Y(-dr,us,0),new Y(dr,us,0),new Y(-us,0,dr),new Y(us,0,dr),new Y(0,dr,-us),new Y(0,dr,us),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],yT=new Y;class b_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=yT}=c;hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===vs||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:ia,format:vi,colorSpace:Ms,depthBuffer:!1},l=A_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A_(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(c)),this._blurMaterial=ET(c,t,i)}return l}_compileMaterial(t){const i=new Bn(this._lodPlanes[0],t);this._renderer.compile(i,fh)}_sceneToCubeUV(t,i,r,l,c){const p=new oi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(E_),_.toneMapping=za,_.autoClear=!1;const E=new ms({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),w=new Bn(new Bo,E);let y=!1;const v=t.background;v?v.isColor&&(E.color.copy(v),t.background=null,y=!0):(E.color.copy(E_),y=!0);for(let P=0;P<6;P++){const U=P%3;U===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):U===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const D=this._cubeSize;dc(l,U*D,P>2?D:0,D,D),_.setRenderTarget(l),y&&_.render(w,p),_.render(t,p)}w.geometry.dispose(),w.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=v}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===vs||t.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=C_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Bn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;dc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,fh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=T_[(l-c-1)%T_.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Bn(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*mr-1),w=c/E,y=isFinite(c)?1+Math.floor(g*w):mr;y>mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${mr}`);const v=[];let P=0;for(let z=0;z<mr;++z){const Z=z/w,C=Math.exp(-Z*Z/2);v.push(C),z===0?P+=C:z<y&&(P+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=E,x.mipInt.value=U-r;const D=this._sizeLods[l],I=3*D*(l>U-fs?l-U+fs:0),B=4*(this._cubeSize-D);dc(i,I,B,3*D,2*D),p.setRenderTarget(i),p.render(_,fh)}}function MT(o){const t=[],i=[],r=[];let l=o;const c=o-fs+1+M_.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>o-fs?p=M_[f-o+fs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,E=6,w=3,y=2,v=1,P=new Float32Array(w*E*M),U=new Float32Array(y*E*M),D=new Float32Array(v*E*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,Z=B>2?0:-1,C=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];P.set(C,w*E*B),U.set(x,y*E*B);const A=[B,B,B,B,B,B];D.set(A,v*E*B)}const I=new Di;I.setAttribute("position",new wi(P,w)),I.setAttribute("uv",new wi(U,y)),I.setAttribute("faceIndex",new wi(D,v)),t.push(I),l>fs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function A_(o,t,i){const r=new Si(o,t,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function dc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function ET(o,t,i){const r=new Float32Array(mr),l=new Y(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function R_(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function C_(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:na,depthTest:!1,depthWrite:!1})}function Sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ch||p===wh,g=p===vs||p===xs;if(m||g){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new b_(o)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new b_(o)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function bT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function AT(o,t,i,r){const l={},c=new WeakMap;function f(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(_){const x=_.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function m(_){const x=[],M=_.index,E=_.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let U=0,D=P.length;U<D;U+=3){const I=P[U+0],B=P[U+1],z=P[U+2];x.push(I,B,B,z,z,I)}}else if(E!==void 0){const P=E.array;w=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const I=U+0,B=U+1,z=U+2;x.push(I,B,B,z,z,I)}}else return;const y=new(uv(x)?mv:pv)(x,1);y.version=w;const v=c.get(_);v&&t.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function RT(o,t,i){let r;function l(x){r=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,M){o.drawElements(r,M,c,x*f),i.update(M,r,1)}function m(x,M,E){E!==0&&(o.drawElementsInstanced(r,M,c,x*f,E),i.update(M,r,E))}function g(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,x,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];i.update(y,r,1)}function _(x,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)m(x[v]/f,M[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,w,0,E);let v=0;for(let P=0;P<E;P++)v+=M[P]*w[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function CT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function wT(o,t,i){const r=new WeakMap,l=new Ze;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let A=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let I=d.attributes.position.count*D,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*B*4*_),Z=new fv(z,I,B,_);Z.type=ta,Z.needsUpdate=!0;const C=D*4;for(let H=0;H<_;H++){const ot=v[H],nt=P[H],ft=U[H],ut=I*B*4*H;for(let W=0;W<ot.count;W++){const rt=W*C;E===!0&&(l.fromBufferAttribute(ot,W),z[ut+rt+0]=l.x,z[ut+rt+1]=l.y,z[ut+rt+2]=l.z,z[ut+rt+3]=0),w===!0&&(l.fromBufferAttribute(nt,W),z[ut+rt+4]=l.x,z[ut+rt+5]=l.y,z[ut+rt+6]=l.z,z[ut+rt+7]=0),y===!0&&(l.fromBufferAttribute(ft,W),z[ut+rt+8]=l.x,z[ut+rt+9]=l.y,z[ut+rt+10]=l.z,z[ut+rt+11]=ft.itemSize===4?l.w:1)}}x={count:_,texture:Z,size:new Wt(I,B)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const w=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",w),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function DT(o,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Av=new In,w_=new Sv(1,1),Rv=new fv,Cv=new qS,wv=new vv,D_=[],U_=[],L_=new Float32Array(16),N_=new Float32Array(9),O_=new Float32Array(4);function As(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=D_[l];if(c===void 0&&(c=new Float32Array(l),D_[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(c,d)}return c}function sn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function on(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Cc(o,t){let i=U_[t];i===void 0&&(i=new Int32Array(t),U_[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function UT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(sn(i,t))return;o.uniform2fv(this.addr,t),on(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(sn(i,t))return;o.uniform3fv(this.addr,t),on(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(sn(i,t))return;o.uniform4fv(this.addr,t),on(i,t)}}function PT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(sn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),on(i,t)}else{if(sn(i,r))return;O_.set(r),o.uniformMatrix2fv(this.addr,!1,O_),on(i,r)}}function zT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(sn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),on(i,t)}else{if(sn(i,r))return;N_.set(r),o.uniformMatrix3fv(this.addr,!1,N_),on(i,r)}}function BT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(sn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),on(i,t)}else{if(sn(i,r))return;L_.set(r),o.uniformMatrix4fv(this.addr,!1,L_),on(i,r)}}function FT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function IT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(sn(i,t))return;o.uniform2iv(this.addr,t),on(i,t)}}function HT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(sn(i,t))return;o.uniform3iv(this.addr,t),on(i,t)}}function GT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(sn(i,t))return;o.uniform4iv(this.addr,t),on(i,t)}}function VT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function kT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(sn(i,t))return;o.uniform2uiv(this.addr,t),on(i,t)}}function XT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(sn(i,t))return;o.uniform3uiv(this.addr,t),on(i,t)}}function WT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(sn(i,t))return;o.uniform4uiv(this.addr,t),on(i,t)}}function qT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(w_.compareFunction=cv,c=w_):c=Av,i.setTexture2D(t||c,l)}function YT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Cv,l)}function ZT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||wv,l)}function QT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Rv,l)}function KT(o){switch(o){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return FT;case 35667:case 35671:return IT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return kT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return QT}}function jT(o,t){o.uniform1fv(this.addr,t)}function JT(o,t){const i=As(t,this.size,2);o.uniform2fv(this.addr,i)}function $T(o,t){const i=As(t,this.size,3);o.uniform3fv(this.addr,i)}function tb(o,t){const i=As(t,this.size,4);o.uniform4fv(this.addr,i)}function eb(o,t){const i=As(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function nb(o,t){const i=As(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ib(o,t){const i=As(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ab(o,t){o.uniform1iv(this.addr,t)}function rb(o,t){o.uniform2iv(this.addr,t)}function sb(o,t){o.uniform3iv(this.addr,t)}function ob(o,t){o.uniform4iv(this.addr,t)}function lb(o,t){o.uniform1uiv(this.addr,t)}function cb(o,t){o.uniform2uiv(this.addr,t)}function ub(o,t){o.uniform3uiv(this.addr,t)}function fb(o,t){o.uniform4uiv(this.addr,t)}function hb(o,t,i){const r=this.cache,l=t.length,c=Cc(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Av,c[f])}function db(o,t,i){const r=this.cache,l=t.length,c=Cc(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Cv,c[f])}function pb(o,t,i){const r=this.cache,l=t.length,c=Cc(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||wv,c[f])}function mb(o,t,i){const r=this.cache,l=t.length,c=Cc(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Rv,c[f])}function gb(o){switch(o){case 5126:return jT;case 35664:return JT;case 35665:return $T;case 35666:return tb;case 35674:return eb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return ab;case 35667:case 35671:return rb;case 35668:case 35672:return sb;case 35669:case 35673:return ob;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}class _b{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=KT(i.type)}}class vb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gb(i.type)}}class xb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function P_(o,t){o.seq.push(t),o.map[t.id]=t}function Sb(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const c=gh.exec(r),f=gh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){P_(i,m===void 0?new _b(d,o,t):new vb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new xb(d),P_(i,_)),i=_}}}class Sc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);Sb(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function z_(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const yb=37297;let Mb=0;function Eb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const B_=new le;function Tb(o){Re._getMatrix(B_,Re.workingColorSpace,o);const t=`mat3( ${B_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case yc:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function F_(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+Eb(o.getShaderSource(t),f)}else return l}function bb(o,t){const i=Tb(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function Ab(o,t){let i;switch(t){case _S:i="Linear";break;case vS:i="Reinhard";break;case xS:i="Cineon";break;case SS:i="ACESFilmic";break;case MS:i="AgX";break;case ES:i="Neutral";break;case yS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new Y;function Rb(){Re.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),t=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function wb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function Db(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),f=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function Do(o){return o!==""}function I_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ub=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(o){return o.replace(Ub,Nb)}const Lb=new Map;function Nb(o,t){let i=ce[t];if(i===void 0){const r=Lb.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return sd(i)}const Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G_(o){return o.replace(Ob,Pb)}function Pb(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===K_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Kx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function Bb(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case xs:t="ENVMAP_TYPE_CUBE";break;case Ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function Ib(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case j_:t="ENVMAP_BLENDING_MULTIPLY";break;case mS:t="ENVMAP_BLENDING_MIX";break;case gS:t="ENVMAP_BLENDING_ADD";break}return t}function Hb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Gb(o,t,i,r){const l=o.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=zb(i),m=Bb(i),g=Fb(i),_=Ib(i),x=Hb(i),M=Cb(i),E=wb(c),w=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(y=[V_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[V_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?ce.tonemapping_pars_fragment:"",i.toneMapping!==za?Ab("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,bb("linearToOutputTexel",i.outputColorSpace),Rb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),f=sd(f),f=I_(f,i),f=H_(f,i),d=sd(d),d=I_(d,i),d=H_(d,i),f=G_(f),d=G_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===$g?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===$g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+y+f,D=P+v+d,I=z_(l,l.VERTEX_SHADER,U),B=z_(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(H){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(w).trim(),nt=l.getShaderInfoLog(I).trim(),ft=l.getShaderInfoLog(B).trim();let ut=!0,W=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ut=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,B);else{const rt=F_(l,I,"vertex"),K=F_(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+rt+`
`+K)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(nt===""||ft==="")&&(W=!1);W&&(H.diagnostics={runnable:ut,programLog:ot,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ft,prefix:v}})}l.deleteShader(I),l.deleteShader(B),Z=new Sc(l,w),C=Db(l,w)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,yb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Mb++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=B,this}let Vb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Xb(t),i.set(t,r)),r}}class Xb{constructor(t){this.id=Vb++,this.code=t,this.usedTimes=0}}function Wb(o,t,i,r,l,c,f){const d=new _d,p=new kb,m=new Set,g=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,A,H,ot,nt){const ft=ot.fog,ut=nt.geometry,W=C.isMeshStandardMaterial?ot.environment:null,rt=(C.isMeshStandardMaterial?i:t).get(C.envMap||W),K=rt&&rt.mapping===Ac?rt.image.height:null,St=E[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const N=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,at=N!==void 0?N.length:0;let Et=0;ut.morphAttributes.position!==void 0&&(Et=1),ut.morphAttributes.normal!==void 0&&(Et=2),ut.morphAttributes.color!==void 0&&(Et=3);let At,q,pt,xt;if(St){const Ee=Ri[St];At=Ee.vertexShader,q=Ee.fragmentShader}else At=C.vertexShader,q=C.fragmentShader,p.update(C),pt=p.getVertexShaderID(C),xt=p.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),jt=nt.isInstancedMesh===!0,Pt=nt.isBatchedMesh===!0,Me=!!C.map,Ce=!!C.matcap,ae=!!rt,F=!!C.aoMap,dn=!!C.lightMap,se=!!C.bumpMap,fe=!!C.normalMap,kt=!!C.displacementMap,we=!!C.emissiveMap,Xt=!!C.metalnessMap,L=!!C.roughnessMap,T=C.anisotropy>0,et=C.clearcoat>0,ht=C.dispersion>0,vt=C.iridescence>0,dt=C.sheen>0,Ht=C.transmission>0,wt=T&&!!C.anisotropyMap,zt=et&&!!C.clearcoatMap,ge=et&&!!C.clearcoatNormalMap,Mt=et&&!!C.clearcoatRoughnessMap,Bt=vt&&!!C.iridescenceMap,Kt=vt&&!!C.iridescenceThicknessMap,Gt=dt&&!!C.sheenColorMap,Ft=dt&&!!C.sheenRoughnessMap,re=!!C.specularMap,Zt=!!C.specularColorMap,De=!!C.specularIntensityMap,k=Ht&&!!C.transmissionMap,Lt=Ht&&!!C.thicknessMap,st=!!C.gradientMap,gt=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,$t=!!C.extensions;let Ie=za;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ie=o.toneMapping);const $e={shaderID:St,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:q,defines:C.defines,customVertexShaderID:pt,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&nt._colorsTexture!==null,instancing:jt,instancingColor:jt&&nt.instanceColor!==null,instancingMorph:jt&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ms,alphaToCoverage:!!C.alphaToCoverage,map:Me,matcap:Ce,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:K,aoMap:F,lightMap:dn,bumpMap:se,normalMap:fe,displacementMap:x&&kt,emissiveMap:we,normalMapObjectSpace:fe&&C.normalMapType===CS,normalMapTangentSpace:fe&&C.normalMapType===RS,metalnessMap:Xt,roughnessMap:L,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:zt,clearcoatNormalMap:ge,clearcoatRoughnessMap:Mt,dispersion:ht,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:Kt,sheen:dt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:Zt,specularIntensityMap:De,transmission:Ht,transmissionMap:k,thicknessMap:Lt,gradientMap:st,opaque:C.transparent===!1&&C.blending===hs&&C.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:Me&&w(C.map.channel),aoMapUv:F&&w(C.aoMap.channel),lightMapUv:dn&&w(C.lightMap.channel),bumpMapUv:se&&w(C.bumpMap.channel),normalMapUv:fe&&w(C.normalMap.channel),displacementMapUv:kt&&w(C.displacementMap.channel),emissiveMapUv:we&&w(C.emissiveMap.channel),metalnessMapUv:Xt&&w(C.metalnessMap.channel),roughnessMapUv:L&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:ge&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:re&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:De&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:gt&&w(C.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(fe||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ut.attributes.uv&&(Me||gt),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Rt,skinning:nt.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Me&&C.map.isVideoTexture===!0&&Re.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&C.emissiveMap.isVideoTexture===!0&&Re.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===gi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:$t&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&C.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return $e.vertexUv1s=m.has(1),$e.vertexUv2s=m.has(2),$e.vertexUv3s=m.has(3),m.clear(),$e}function v(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)A.push(H),A.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(P(A,C),U(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function U(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const A=E[C.type];let H;if(A){const ot=Ri[A];H=Tc.clone(ot.uniforms)}else H=C.uniforms;return H}function I(C,A){let H;for(let ot=0,nt=g.length;ot<nt;ot++){const ft=g[ot];if(ft.cacheKey===A){H=ft,++H.usedTimes;break}}return H===void 0&&(H=new Gb(o,A,C,c),g.push(H)),H}function B(C){if(--C.usedTimes===0){const A=g.indexOf(C);g[A]=g[g.length-1],g.pop(),C.destroy()}}function z(C){p.remove(C)}function Z(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:I,releaseProgram:B,releaseShaderCache:z,programs:g,dispose:Z}}function qb(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function Yb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function k_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function X_(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,x,M,E,w,y){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},o[t]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=w,v.group=y),t++,v}function d(_,x,M,E,w,y){const v=f(_,x,M,E,w,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function p(_,x,M,E,w,y){const v=f(_,x,M,E,w,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function m(_,x){i.length>1&&i.sort(_||Yb),r.length>1&&r.sort(x||k_),l.length>1&&l.sort(x||k_)}function g(){for(let _=t,x=o.length;_<x;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function Zb(){let o=new WeakMap;function t(r,l){const c=o.get(r);let f;return c===void 0?(f=new X_,o.set(r,[f])):l>=c.length?(f=new X_,c.push(f)):f=c[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function Qb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new me};break;case"SpotLight":i={position:new Y,direction:new Y,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new me,groundColor:new me};break;case"RectAreaLight":i={color:new me,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function Kb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let jb=0;function Jb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function $b(o){const t=new Qb,i=Kb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const l=new Y,c=new qe,f=new qe;function d(m){let g=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let M=0,E=0,w=0,y=0,v=0,P=0,U=0,D=0,I=0,B=0,z=0;m.sort(Jb);for(let C=0,A=m.length;C<A;C++){const H=m[C],ot=H.color,nt=H.intensity,ft=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ot.r*nt,_+=ot.g*nt,x+=ot.b*nt;else if(H.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],nt);z++}else if(H.isDirectionalLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,K=i.get(H);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=H.shadow.matrix,P++}r.directional[M]=W,M++}else if(H.isSpotLight){const W=t.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(ot).multiplyScalar(nt),W.distance=ft,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[w]=W;const rt=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,rt.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[w]=rt.matrix,H.castShadow){const K=i.get(H);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,r.spotShadow[w]=K,r.spotShadowMap[w]=ut,D++}w++}else if(H.isRectAreaLight){const W=t.get(H);W.color.copy(ot).multiplyScalar(nt),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=W,y++}else if(H.isPointLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const rt=H.shadow,K=i.get(H);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,r.pointShadow[E]=K,r.pointShadowMap[E]=ut,r.pointShadowMatrix[E]=H.shadow.matrix,U++}r.point[E]=W,E++}else if(H.isHemisphereLight){const W=t.get(H);W.skyColor.copy(H.color).multiplyScalar(nt),W.groundColor.copy(H.groundColor).multiplyScalar(nt),r.hemi[v]=W,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==E||Z.spotLength!==w||Z.rectAreaLength!==y||Z.hemiLength!==v||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==D||Z.numSpotMaps!==I||Z.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+I-B,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=z,Z.directionalLength=M,Z.pointLength=E,Z.spotLength=w,Z.rectAreaLength=y,Z.hemiLength=v,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=D,Z.numSpotMaps=I,Z.numLightProbes=z,r.version=jb++)}function p(m,g){let _=0,x=0,M=0,E=0,w=0;const y=g.matrixWorldInverse;for(let v=0,P=m.length;v<P;v++){const U=m[v];if(U.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(U.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(U.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const D=r.hemi[w];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:p,state:r}}function W_(o){const t=new $b(o),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function t1(o){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new W_(o),t.set(l,[d])):c>=f.length?(d=new W_(o),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function i1(o,t,i){let r=new xv;const l=new Wt,c=new Wt,f=new Ze,d=new Cy({depthPacking:AS}),p=new wy,m={},g=i.maxTextureSize,_={[Ba]:Fn,[Fn]:Ba,[gi]:gi},x=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:e1,fragmentShader:n1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Bn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=K_;let v=this.type;this.render=function(B,z,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(na),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const nt=v!==$i&&this.type===$i,ft=v===$i&&this.type!==$i;for(let ut=0,W=B.length;ut<W;ut++){const rt=B[ut],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;l.copy(K.mapSize);const St=K.getFrameExtents();if(l.multiply(St),c.copy(K.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/St.x),l.x=c.x*St.x,K.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/St.y),l.y=c.y*St.y,K.mapSize.y=c.y)),K.map===null||nt===!0||ft===!0){const at=this.type!==$i?{minFilter:xi,magFilter:xi}:{};K.map!==null&&K.map.dispose(),K.map=new Si(l.x,l.y,at),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const N=K.getViewportCount();for(let at=0;at<N;at++){const Et=K.getViewport(at);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),ot.viewport(f),K.updateMatrices(rt,at),r=K.getFrustum(),D(z,Z,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===$i&&P(K,Z),K.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(C,A,H)};function P(B,z){const Z=t.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Si(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,Z,x,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,Z,M,w,null)}function U(B,z,Z,C){let A=null;const H=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)A=H;else if(A=Z.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ot=A.uuid,nt=z.uuid;let ft=m[ot];ft===void 0&&(ft={},m[ot]=ft);let ut=ft[nt];ut===void 0&&(ut=A.clone(),ft[nt]=ut,z.addEventListener("dispose",I)),A=ut}if(A.visible=z.visible,A.wireframe=z.wireframe,C===$i?A.side=z.shadowSide!==null?z.shadowSide:z.side:A.side=z.shadowSide!==null?z.shadowSide:_[z.side],A.alphaMap=z.alphaMap,A.alphaTest=z.alphaTest,A.map=z.map,A.clipShadows=z.clipShadows,A.clippingPlanes=z.clippingPlanes,A.clipIntersection=z.clipIntersection,A.displacementMap=z.displacementMap,A.displacementScale=z.displacementScale,A.displacementBias=z.displacementBias,A.wireframeLinewidth=z.wireframeLinewidth,A.linewidth=z.linewidth,Z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ot=o.properties.get(A);ot.light=Z}return A}function D(B,z,Z,C,A){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&A===$i)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const nt=t.update(B),ft=B.material;if(Array.isArray(ft)){const ut=nt.groups;for(let W=0,rt=ut.length;W<rt;W++){const K=ut[W],St=ft[K.materialIndex];if(St&&St.visible){const N=U(B,St,C,A);B.onBeforeShadow(o,B,z,Z,nt,N,K),o.renderBufferDirect(Z,null,nt,N,B,K),B.onAfterShadow(o,B,z,Z,nt,N,K)}}}else if(ft.visible){const ut=U(B,ft,C,A);B.onBeforeShadow(o,B,z,Z,nt,ut,null),o.renderBufferDirect(Z,null,nt,ut,B,null),B.onAfterShadow(o,B,z,Z,nt,ut,null)}}const ot=B.children;for(let nt=0,ft=ot.length;nt<ft;nt++)D(ot[nt],z,Z,C,A)}function I(B){B.target.removeEventListener("dispose",I);for(const Z in m){const C=m[Z],A=B.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const a1={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[_s]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:_s};function r1(o,t){function i(){let k=!1;const Lt=new Ze;let st=null;const gt=new Ze(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,$t,Ie,$e){$e===!0&&(Ct*=Ie,Dt*=Ie,$t*=Ie),Lt.set(Ct,Dt,$t,Ie),gt.equals(Lt)===!1&&(o.clearColor(Ct,Dt,$t,Ie),gt.copy(Lt))},reset:function(){k=!1,st=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,st=null,gt=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=t.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Ie=Ct;Ct=null,this.setClear(Ie)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){st!==Dt&&!k&&(o.depthMask(Dt),st=Dt)},setFunc:function(Dt){if(Lt&&(Dt=a1[Dt]),gt!==Dt){switch(Dt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}gt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,st=null,gt=null,Ct=null,Lt=!1}}}function l(){let k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,$t=null,Ie=null,$e=null;return{setTest:function(Ee){k||(Ee?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!k&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,En,Tn){(st!==Ee||gt!==En||Ct!==Tn)&&(o.stencilFunc(Ee,En,Tn),st=Ee,gt=En,Ct=Tn)},setOp:function(Ee,En,Tn){(Dt!==Ee||$t!==En||Ie!==Tn)&&(o.stencilOp(Ee,En,Tn),Dt=Ee,$t=En,Ie=Tn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){$e!==Ee&&(o.clearStencil(Ee),$e=Ee)},reset:function(){k=!1,Lt=null,st=null,gt=null,Ct=null,Dt=null,$t=null,Ie=null,$e=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,v=null,P=null,U=null,D=null,I=null,B=null,z=new me(0,0,0),Z=0,C=!1,A=null,H=null,ot=null,nt=null,ft=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,rt=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),W=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),W=rt>=2);let St=null,N={};const at=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ze().fromArray(at),q=new Ze().fromArray(Et);function pt(k,Lt,st,gt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<st;$t++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const xt={};xt[o.TEXTURE_2D]=pt(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),f.setFunc(_s),se(!1),fe(Zg),Tt(o.CULL_FACE),F(na);function Tt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Rt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function jt(k,Lt){return _[k]!==Lt?(o.bindFramebuffer(k,Lt),_[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(k,Lt){let st=M,gt=!1;if(k){st=x.get(Lt),st===void 0&&(st=[],x.set(Lt,st));const Ct=k.textures;if(st.length!==Ct.length||st[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)st[Dt]=o.COLOR_ATTACHMENT0+Dt;st.length=Ct.length,gt=!0}}else st[0]!==o.BACK&&(st[0]=o.BACK,gt=!0);gt&&o.drawBuffers(st)}function Me(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const Ce={[pr]:o.FUNC_ADD,[Jx]:o.FUNC_SUBTRACT,[$x]:o.FUNC_REVERSE_SUBTRACT};Ce[tS]=o.MIN,Ce[eS]=o.MAX;const ae={[nS]:o.ZERO,[iS]:o.ONE,[aS]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[uS]:o.SRC_ALPHA_SATURATE,[lS]:o.DST_COLOR,[sS]:o.DST_ALPHA,[rS]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[cS]:o.ONE_MINUS_DST_COLOR,[oS]:o.ONE_MINUS_DST_ALPHA,[fS]:o.CONSTANT_COLOR,[hS]:o.ONE_MINUS_CONSTANT_COLOR,[dS]:o.CONSTANT_ALPHA,[pS]:o.ONE_MINUS_CONSTANT_ALPHA};function F(k,Lt,st,gt,Ct,Dt,$t,Ie,$e,Ee){if(k===na){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),k!==jx){if(k!==y||Ee!==C){if((v!==pr||D!==pr)&&(o.blendEquation(o.FUNC_ADD),v=pr,D=pr),Ee)switch(k){case hs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gs:o.blendFunc(o.ONE,o.ONE);break;case Qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gs:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Qg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Kg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,U=null,I=null,B=null,z.set(0,0,0),Z=0,y=k,C=Ee}return}Ct=Ct||Lt,Dt=Dt||st,$t=$t||gt,(Lt!==v||Ct!==D)&&(o.blendEquationSeparate(Ce[Lt],Ce[Ct]),v=Lt,D=Ct),(st!==P||gt!==U||Dt!==I||$t!==B)&&(o.blendFuncSeparate(ae[st],ae[gt],ae[Dt],ae[$t]),P=st,U=gt,I=Dt,B=$t),(Ie.equals(z)===!1||$e!==Z)&&(o.blendColor(Ie.r,Ie.g,Ie.b,$e),z.copy(Ie),Z=$e),y=k,C=!1}function dn(k,Lt){k.side===gi?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let st=k.side===Fn;Lt&&(st=!st),se(st),k.blending===hs&&k.transparent===!1?F(na):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function fe(k){k!==Zx?(Tt(o.CULL_FACE),k!==H&&(k===Zg?o.cullFace(o.BACK):k===Qx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),H=k}function kt(k){k!==ot&&(W&&o.lineWidth(k),ot=k)}function we(k,Lt,st){k?(Tt(o.POLYGON_OFFSET_FILL),(nt!==Lt||ft!==st)&&(o.polygonOffset(Lt,st),nt=Lt,ft=st)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function L(k){k===void 0&&(k=o.TEXTURE0+ut-1),St!==k&&(o.activeTexture(k),St=k)}function T(k,Lt,st){st===void 0&&(St===null?st=o.TEXTURE0+ut-1:st=St);let gt=N[st];gt===void 0&&(gt={type:void 0,texture:void 0},N[st]=gt),(gt.type!==k||gt.texture!==Lt)&&(St!==st&&(o.activeTexture(st),St=st),o.bindTexture(k,Lt||xt[k]),gt.type=k,gt.texture=Lt)}function et(){const k=N[St];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ht(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function re(k,Lt){let st=m.get(Lt);st===void 0&&(st=new WeakMap,m.set(Lt,st));let gt=st.get(k);gt===void 0&&(gt=o.getUniformBlockIndex(Lt,k.name),st.set(k,gt))}function Zt(k,Lt){const gt=m.get(Lt).get(k);p.get(Lt)!==gt&&(o.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),p.set(Lt,gt))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},St=null,N={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,v=null,P=null,U=null,D=null,I=null,B=null,z=new me(0,0,0),Z=0,C=!1,A=null,H=null,ot=null,nt=null,ft=null,At.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:jt,drawBuffers:Pt,useProgram:Me,setBlending:F,setMaterial:dn,setFlipSided:se,setCullFace:fe,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Xt,activeTexture:L,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:Kt,updateUBOMapping:re,uniformBlockBinding:Zt,texStorage2D:ge,texStorage3D:Mt,texSubImage2D:dt,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function s1(o,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Wt,g=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):Ec("canvas")}function w(L,T,et){let ht=1;const vt=Xt(L);if((vt.width>et||vt.height>et)&&(ht=et/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const dt=Math.floor(ht*vt.width),Ht=Math.floor(ht*vt.height);_===void 0&&(_=E(dt,Ht));const wt=T?E(dt,Ht):_;return wt.width=dt,wt.height=Ht,wt.getContext("2d").drawImage(L,0,0,dt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+dt+"x"+Ht+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,T,et,ht,vt=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=T;if(T===o.RED&&(et===o.FLOAT&&(dt=o.R32F),et===o.HALF_FLOAT&&(dt=o.R16F),et===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.R8UI),et===o.UNSIGNED_SHORT&&(dt=o.R16UI),et===o.UNSIGNED_INT&&(dt=o.R32UI),et===o.BYTE&&(dt=o.R8I),et===o.SHORT&&(dt=o.R16I),et===o.INT&&(dt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(dt=o.RG32F),et===o.HALF_FLOAT&&(dt=o.RG16F),et===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RG8UI),et===o.UNSIGNED_SHORT&&(dt=o.RG16UI),et===o.UNSIGNED_INT&&(dt=o.RG32UI),et===o.BYTE&&(dt=o.RG8I),et===o.SHORT&&(dt=o.RG16I),et===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),et===o.UNSIGNED_INT&&(dt=o.RGB32UI),et===o.BYTE&&(dt=o.RGB8I),et===o.SHORT&&(dt=o.RGB16I),et===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),et===o.UNSIGNED_INT&&(dt=o.RGBA32UI),et===o.BYTE&&(dt=o.RGBA8I),et===o.SHORT&&(dt=o.RGBA16I),et===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),T===o.RGBA){const Ht=vt?yc:Re.getTransfer(ht);et===o.FLOAT&&(dt=o.RGBA32F),et===o.HALF_FLOAT&&(dt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(dt=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(L,T){let et;return L?T===null||T===vr||T===Ss?et=o.DEPTH24_STENCIL8:T===ta?et=o.DEPTH32F_STENCIL8:T===No&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vr||T===Ss?et=o.DEPTH_COMPONENT24:T===ta?et=o.DEPTH_COMPONENT32F:T===No&&(et=o.DEPTH_COMPONENT16),et}function I(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==xi&&L.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),Z(T),T.isVideoTexture&&g.delete(T)}function z(L){const T=L.target;T.removeEventListener("dispose",z),A(T)}function Z(L){const T=r.get(L);if(T.__webglInit===void 0)return;const et=L.source,ht=x.get(et);if(ht){const vt=ht[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(L),Object.keys(ht).length===0&&x.delete(et)}r.remove(L)}function C(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const et=L.source,ht=x.get(et);delete ht[T.__cacheKey],f.memory.textures--}function A(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let vt=0;vt<T.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(T.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let ht=0,vt=et.length;ht<vt;ht++){const dt=r.get(et[ht]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),f.memory.textures--),r.remove(et[ht])}r.remove(L)}let H=0;function ot(){H=0}function nt(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ut(L,T){const et=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(et,L,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function W(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){q(et,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function rt(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){q(et,L,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function K(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){pt(et,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const St={[Dh]:o.REPEAT,[gr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},N={[xi]:o.NEAREST,[TS]:o.NEAREST_MIPMAP_NEAREST,[ql]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},at={[wS]:o.NEVER,[PS]:o.ALWAYS,[DS]:o.LESS,[cv]:o.LEQUAL,[US]:o.EQUAL,[OS]:o.GEQUAL,[LS]:o.GREATER,[NS]:o.NOTEQUAL};function Et(L,T){if(T.type===ta&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Ff||T.magFilter===ql||T.magFilter===_r||T.minFilter===Ci||T.minFilter===Ff||T.minFilter===ql||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,N[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==ql&&T.minFilter!==_r||T.type===ta&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function At(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const ht=T.source;let vt=x.get(ht);vt===void 0&&(vt={},x.set(ht,vt));const dt=ft(T);if(dt!==L.__cacheKey){vt[dt]===void 0&&(vt[dt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,et=!0),vt[dt].usedTimes++;const Ht=vt[L.__cacheKey];Ht!==void 0&&(vt[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(T)),L.__cacheKey=dt,L.__webglTexture=vt[dt].texture}return et}function q(L,T,et){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=At(L,T),dt=T.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+et);const Ht=r.get(dt);if(dt.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+et);const wt=Re.getPrimaries(Re.workingColorSpace),zt=T.colorSpace===Pa?null:Re.getPrimaries(T.colorSpace),ge=T.colorSpace===Pa||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Mt=w(T.image,!1,l.maxTextureSize);Mt=we(T,Mt);const Bt=c.convert(T.format,T.colorSpace),Kt=c.convert(T.type);let Gt=U(T.internalFormat,Bt,Kt,T.colorSpace,T.isVideoTexture);Et(ht,T);let Ft;const re=T.mipmaps,Zt=T.isVideoTexture!==!0,De=Ht.__version===void 0||vt===!0,k=dt.dataReady,Lt=I(T,Mt);if(T.isDepthTexture)Gt=D(T.format===ys,T.type),De&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,Kt,null));else if(T.isDataTexture)if(re.length>0){Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],Zt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Kt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,Kt,Ft.data);T.generateMipmaps=!1}else Zt?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Bt,Kt,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,Kt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,re[0].width,re[0].height,Mt.depth);for(let st=0,gt=re.length;st<gt;st++)if(Ft=re[st],T.format!==vi)if(Bt!==null)if(Zt){if(k)if(T.layerUpdates.size>0){const Ct=y_(Ft.width,Ft.height,T.format,T.type);for(const Dt of T.layerUpdates){const $t=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,Mt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,Mt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,st,0,0,0,Ft.width,Ft.height,Mt.depth,Bt,Kt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,st,Gt,Ft.width,Ft.height,Mt.depth,0,Bt,Kt,Ft.data)}else{Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],T.format!==vi?Bt!==null?Zt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Ft.width,Ft.height,Bt,Kt,Ft.data):i.texImage2D(o.TEXTURE_2D,st,Gt,Ft.width,Ft.height,0,Bt,Kt,Ft.data)}else if(T.isDataArrayTexture)if(Zt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Mt.width,Mt.height,Mt.depth),k)if(T.layerUpdates.size>0){const st=y_(Mt.width,Mt.height,T.format,T.type);for(const gt of T.layerUpdates){const Ct=Mt.data.subarray(gt*st/Mt.data.BYTES_PER_ELEMENT,(gt+1)*st/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Mt.width,Mt.height,1,Bt,Kt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Kt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,Kt,Mt.data);else if(T.isData3DTexture)Zt?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,Kt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,Kt,Mt.data);else if(T.isFramebufferTexture){if(De)if(Zt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height);else{let st=Mt.width,gt=Mt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,st,gt,0,Bt,Kt,null),st>>=1,gt>>=1}}else if(re.length>0){if(Zt&&De){const st=Xt(re[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}for(let st=0,gt=re.length;st<gt;st++)Ft=re[st],Zt?k&&i.texSubImage2D(o.TEXTURE_2D,st,0,0,Bt,Kt,Ft):i.texImage2D(o.TEXTURE_2D,st,Gt,Bt,Kt,Ft);T.generateMipmaps=!1}else if(Zt){if(De){const st=Xt(Mt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,st.width,st.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Kt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,Kt,Mt);y(T)&&v(ht),Ht.__version=dt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pt(L,T,et){if(T.image.length!==6)return;const ht=At(L,T),vt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+et);const dt=r.get(vt);if(vt.version!==dt.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Ht=Re.getPrimaries(Re.workingColorSpace),wt=T.colorSpace===Pa?null:Re.getPrimaries(T.colorSpace),zt=T.colorSpace===Pa||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let gt=0;gt<6;gt++)!ge&&!Mt?Bt[gt]=w(T.image[gt],!0,l.maxCubemapSize):Bt[gt]=Mt?T.image[gt].image:T.image[gt],Bt[gt]=we(T,Bt[gt]);const Kt=Bt[0],Gt=c.convert(T.format,T.colorSpace),Ft=c.convert(T.type),re=U(T.internalFormat,Gt,Ft,T.colorSpace),Zt=T.isVideoTexture!==!0,De=dt.__version===void 0||ht===!0,k=vt.dataReady;let Lt=I(T,Kt);Et(o.TEXTURE_CUBE_MAP,T);let st;if(ge){Zt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){st=Bt[gt].mipmaps;for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];T.format!==vi?Gt!==null?Zt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,re,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct,re,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(st=T.mipmaps,Zt&&De){st.length>0&&Lt++;const gt=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Mt){Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt[gt].width,Bt[gt].height,Gt,Ft,Bt[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Bt[gt].width,Bt[gt].height,0,Gt,Ft,Bt[gt].data);for(let Ct=0;Ct<st.length;Ct++){const $t=st[Ct].image[gt].image;Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,re,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Gt,Ft,Bt[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Gt,Ft,Bt[gt]);for(let Ct=0;Ct<st.length;Ct++){const Dt=st[Ct];Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,0,0,Gt,Ft,Dt.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ct+1,re,Gt,Ft,Dt.image[gt])}}}y(T)&&v(o.TEXTURE_CUBE_MAP),dt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function xt(L,T,et,ht,vt,dt){const Ht=c.convert(et.format,et.colorSpace),wt=c.convert(et.type),zt=U(et.internalFormat,Ht,wt,et.colorSpace),ge=r.get(T),Mt=r.get(et);if(Mt.__renderTarget=T,!ge.__hasExternalTextures){const Bt=Math.max(1,T.width>>dt),Kt=Math.max(1,T.height>>dt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,dt,zt,Bt,Kt,T.depth,0,Ht,wt,null):i.texImage2D(vt,dt,zt,Bt,Kt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,0,se(T)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,Mt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(L,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const ht=T.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,dt=D(T.stencilBuffer,vt),Ht=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=se(T);fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,dt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const ht=T.textures;for(let vt=0;vt<ht.length;vt++){const dt=ht[vt],Ht=c.convert(dt.format,dt.colorSpace),wt=c.convert(dt.type),zt=U(dt.internalFormat,Ht,wt,dt.colorSpace),ge=se(T);et&&fe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,zt,T.width,T.height):fe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const vt=ht.__webglTexture,dt=se(T);if(T.depthTexture.format===ds)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(T.depthTexture.format===ys)fe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function jt(L){const T=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=ht}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Rt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),Tt(T.__webglDepthbuffer[ht],L,!1);else{const vt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,dt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Tt(T.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(L,T,et){const ht=r.get(L);T!==void 0&&xt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&jt(L)}function Me(L){const T=L.texture,et=r.get(L),ht=r.get(T);L.addEventListener("dispose",z);const vt=L.textures,dt=L.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,f.memory.textures++),dt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let zt=0;zt<T.mipmaps.length;zt++)et.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const ge=r.get(vt[wt]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),f.memory.textures++)}if(L.samples>0&&fe(L)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const ge=c.convert(zt.format,zt.colorSpace),Mt=c.convert(zt.type),Bt=U(zt.internalFormat,ge,Mt,zt.colorSpace,L.isXRRenderTarget===!0),Kt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Bt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(et.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),Et(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)xt(et.__webglFramebuffer[wt][zt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else xt(et.__webglFramebuffer[wt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const ge=vt[wt],Mt=r.get(ge);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),Et(o.TEXTURE_2D,ge),xt(et.__webglFramebuffer,L,ge,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(ge)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),Et(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)xt(et.__webglFramebuffer[zt],L,T,o.COLOR_ATTACHMENT0,wt,zt);else xt(et.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&v(wt),i.unbindTexture()}L.depthBuffer&&jt(L)}function Ce(L){const T=L.textures;for(let et=0,ht=T.length;et<ht;et++){const vt=T[et];if(y(vt)){const dt=P(L),Ht=r.get(vt).__webglTexture;i.bindTexture(dt,Ht),v(dt),i.unbindTexture()}}}const ae=[],F=[];function dn(L){if(L.samples>0){if(fe(L)===!1){const T=L.textures,et=L.width,ht=L.height;let vt=o.COLOR_BUFFER_BIT;const dt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(L),wt=T.length>1;if(wt)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const ge=r.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,vt,o.NEAREST),p===!0&&(ae.length=0,F.length=0,ae.push(o.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(dt),F.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const ge=r.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,ge,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function fe(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function we(L,T){const et=L.colorSpace,ht=L.format,vt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ms&&et!==Pa&&(Re.getTransfer(et)===Oe?(ht!==vi||vt!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=ot,this.setTexture2D=ut,this.setTexture2DArray=W,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=fe}function o1(o,t){function i(r,l=Pa){let c;const f=Re.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===ud)return o.UNSIGNED_SHORT_4_4_4_4;if(r===fd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ev)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===$_)return o.BYTE;if(r===tv)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===cd)return o.INT;if(r===vr)return o.UNSIGNED_INT;if(r===ta)return o.FLOAT;if(r===ia)return o.HALF_FLOAT;if(r===nv)return o.ALPHA;if(r===iv)return o.RGB;if(r===vi)return o.RGBA;if(r===av)return o.LUMINANCE;if(r===rv)return o.LUMINANCE_ALPHA;if(r===ds)return o.DEPTH_COMPONENT;if(r===ys)return o.DEPTH_STENCIL;if(r===sv)return o.RED;if(r===hd)return o.RED_INTEGER;if(r===ov)return o.RG;if(r===dd)return o.RG_INTEGER;if(r===pd)return o.RGBA_INTEGER;if(r===mc||r===gc||r===_c||r===vc)if(f===Oe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Fh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===zh||r===Bh)return f===Oe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Fh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===Qh||r===Kh||r===jh||r===Jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ih)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return f===Oe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xc||r===$h||r===td)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===xc)return f===Oe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lv||r===ed||r===nd||r===id)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===xc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class u1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new In,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Dn({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bn(new Fo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f1 extends bs{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,x=null,M=null,E=null;const w=new u1,y=i.getContextAttributes();let v=null,P=null;const U=[],D=[],I=new Wt;let B=null;const z=new oi;z.viewport=new Ze;const Z=new oi;Z.viewport=new Ze;const C=[z,Z],A=new Dy;let H=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pt=U[q];return pt===void 0&&(pt=new sh,U[q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(q){let pt=U[q];return pt===void 0&&(pt=new sh,U[q]=pt),pt.getGripSpace()},this.getHand=function(q){let pt=U[q];return pt===void 0&&(pt=new sh,U[q]=pt),pt.getHandSpace()};function nt(q){const pt=D.indexOf(q.inputSource);if(pt===-1)return;const xt=U[pt];xt!==void 0&&(xt.update(q.inputSource,q.frame,m||f),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function ft(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",ut);for(let q=0;q<U.length;q++){const pt=D[q];pt!==null&&(D[q]=null,U[q].disconnect(pt))}H=null,ot=null,w.reset(),t.setRenderTarget(v),M=null,x=null,_=null,l=null,P=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(q){m=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",ut),y.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Tt=null,Rt=null;y.depth&&(Rt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?ys:ds,Tt=y.stencil?Ss:vr);const jt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(jt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new Si(x.textureWidth,x.textureHeight,{format:vi,type:ra,depthTexture:new Sv(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Si(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ut(q){for(let pt=0;pt<q.removed.length;pt++){const xt=q.removed[pt],Tt=D.indexOf(xt);Tt>=0&&(D[Tt]=null,U[Tt].disconnect(xt))}for(let pt=0;pt<q.added.length;pt++){const xt=q.added[pt];let Tt=D.indexOf(xt);if(Tt===-1){for(let jt=0;jt<U.length;jt++)if(jt>=D.length){D.push(xt),Tt=jt;break}else if(D[jt]===null){D[jt]=xt,Tt=jt;break}if(Tt===-1)break}const Rt=U[Tt];Rt&&Rt.connect(xt)}}const W=new Y,rt=new Y;function K(q,pt,xt){W.setFromMatrixPosition(pt.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);const Tt=W.distanceTo(rt),Rt=pt.projectionMatrix.elements,jt=xt.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),Me=Rt[14]/(Rt[10]+1),Ce=(Rt[9]+1)/Rt[5],ae=(Rt[9]-1)/Rt[5],F=(Rt[8]-1)/Rt[0],dn=(jt[8]+1)/jt[0],se=Pt*F,fe=Pt*dn,kt=Tt/(-F+dn),we=kt*-F;if(pt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Xt=Pt+kt,L=Me+kt,T=se-we,et=fe+(Tt-we),ht=Ce*Me/L*Xt,vt=ae*Me/L*Xt;q.projectionMatrix.makePerspective(T,et,ht,vt,Xt,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,pt){pt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let pt=q.near,xt=q.far;w.texture!==null&&(w.depthNear>0&&(pt=w.depthNear),w.depthFar>0&&(xt=w.depthFar)),A.near=Z.near=z.near=pt,A.far=Z.far=z.far=xt,(H!==A.near||ot!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,ot=A.far),z.layers.mask=q.layers.mask|2,Z.layers.mask=q.layers.mask|4,A.layers.mask=z.layers.mask|Z.layers.mask;const Tt=q.parent,Rt=A.cameras;St(A,Tt);for(let jt=0;jt<Rt.length;jt++)St(Rt[jt],Tt);Rt.length===2?K(A,z,Z):A.projectionMatrix.copy(z.projectionMatrix),N(q,A,Tt)};function N(q,pt,xt){xt===null?q.matrix.copy(pt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(pt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pt.projectionMatrix),q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ad*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(q){p=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let at=null;function Et(q,pt){if(g=pt.getViewerPose(m||f),E=pt,g!==null){const xt=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Tt=!1;xt.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Pt=0;Pt<xt.length;Pt++){const Me=xt[Pt];let Ce=null;if(M!==null)Ce=M.getViewport(Me);else{const F=_.getViewSubImage(x,Me);Ce=F.viewport,Pt===0&&(t.setRenderTargetTextures(P,F.colorTexture,x.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(P))}let ae=C[Pt];ae===void 0&&(ae=new oi,ae.layers.enable(Pt),ae.viewport=new Ze,C[Pt]=ae),ae.matrix.fromArray(Me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Pt===0&&(A.matrix.copy(ae.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(ae)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Pt=_.getDepthInformation(xt[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(t,Pt,l.renderState)}}for(let xt=0;xt<U.length;xt++){const Tt=D[xt],Rt=U[xt];Tt!==null&&Rt!==void 0&&Rt.update(Tt,pt,m||f)}at&&at(q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const At=new bv;At.setAnimationLoop(Et),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}}const ur=new sa,h1=new qe;function d1(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,gv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,U,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(c(y,v),E(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),w(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?p(y,v,P,U):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Fn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Fn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,D=P.envMapRotation;U&&(y.envMap.value=U,ur.copy(D),ur.x*=-1,ur.y*=-1,ur.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),y.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(ur)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,P,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function p1(o,t,i,r){let l={},c={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,U){const D=U.program;r.uniformBlockBinding(P,D)}function m(P,U){let D=l[P.id];D===void 0&&(E(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",y));const I=U.program;r.updateUBOMapping(P,I);const B=t.render.frame;c[P.id]!==B&&(x(P),c[P.id]=B)}function g(P){const U=_();P.__bindingPointIndex=U;const D=o.createBuffer(),I=P.__size,B=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function _(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const U=l[P.id],D=P.uniforms,I=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,z=D.length;B<z;B++){const Z=Array.isArray(D[B])?D[B]:[D[B]];for(let C=0,A=Z.length;C<A;C++){const H=Z[C];if(M(H,B,C,I)===!0){const ot=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let ut=0;ut<nt.length;ut++){const W=nt[ut],rt=w(W);typeof W=="number"||typeof W=="boolean"?(H.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,ot+ft,H.__data)):W.isMatrix3?(H.__data[0]=W.elements[0],H.__data[1]=W.elements[1],H.__data[2]=W.elements[2],H.__data[3]=0,H.__data[4]=W.elements[3],H.__data[5]=W.elements[4],H.__data[6]=W.elements[5],H.__data[7]=0,H.__data[8]=W.elements[6],H.__data[9]=W.elements[7],H.__data[10]=W.elements[8],H.__data[11]=0):(W.toArray(H.__data,ft),ft+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,U,D,I){const B=P.value,z=U+"_"+D;if(I[z]===void 0)return typeof B=="number"||typeof B=="boolean"?I[z]=B:I[z]=B.clone(),!0;{const Z=I[z];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return I[z]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function E(P){const U=P.uniforms;let D=0;const I=16;for(let z=0,Z=U.length;z<Z;z++){const C=Array.isArray(U[z])?U[z]:[U[z]];for(let A=0,H=C.length;A<H;A++){const ot=C[A],nt=Array.isArray(ot.value)?ot.value:[ot.value];for(let ft=0,ut=nt.length;ft<ut;ft++){const W=nt[ft],rt=w(W),K=D%I,St=K%rt.boundary,N=K+St;D+=St,N!==0&&I-N<rt.storage&&(D+=I-N),ot.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=D,D+=rt.storage}}}const B=D%I;return B>0&&(D+=I-B),P.__size=D,P.__cache={},this}function w(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:v}}class m1{constructor(t={}){const{canvas:i=BS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const P=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=za,this.toneMappingExposure=1;const D=this;let I=!1,B=0,z=0,Z=null,C=-1,A=null;const H=new Ze,ot=new Ze;let nt=null;const ft=new me(0);let ut=0,W=i.width,rt=i.height,K=1,St=null,N=null;const at=new Ze(0,0,W,rt),Et=new Ze(0,0,W,rt);let At=!1;const q=new xv;let pt=!1,xt=!1;this.transmissionResolutionScale=1;const Tt=new qe,Rt=new qe,jt=new Y,Pt=new Ze,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ae(){return Z===null?K:1}let F=r;function dn(R,X){return i.getContext(R,X)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ld}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),F===null){const X="webgl2";if(F=dn(X,R),F===null)throw dn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,fe,kt,we,Xt,L,T,et,ht,vt,dt,Ht,wt,zt,ge,Mt,Bt,Kt,Gt,Ft,re,Zt,De,k;function Lt(){se=new bT(F),se.init(),Zt=new o1(F,se),fe=new vT(F,se,t,Zt),kt=new r1(F,se),fe.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),we=new CT(F),Xt=new qb,L=new s1(F,se,kt,Xt,fe,Zt,we),T=new ST(D),et=new TT(D),ht=new Oy(F),De=new gT(F,ht),vt=new AT(F,ht,we,De),dt=new DT(F,vt,ht,we),Gt=new wT(F,fe,L),Mt=new xT(Xt),Ht=new Wb(D,T,et,se,fe,De,Mt),wt=new d1(D,Xt),zt=new Zb,ge=new t1(se),Kt=new mT(D,T,et,kt,dt,M,p),Bt=new i1(D,dt,fe),k=new p1(F,we,fe,kt),Ft=new _T(F,se,we),re=new RT(F,se,we),we.programs=Ht.programs,D.capabilities=fe,D.extensions=se,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=we}Lt();const st=new f1(D,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(W,rt,!1))},this.getSize=function(R){return R.set(W,rt)},this.setSize=function(R,X,tt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,rt=X,i.width=Math.floor(R*K),i.height=Math.floor(X*K),tt===!0&&(i.style.width=R+"px",i.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(W*K,rt*K).floor()},this.setDrawingBufferSize=function(R,X,tt){W=R,rt=X,K=tt,i.width=Math.floor(R*tt),i.height=Math.floor(X*tt),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,X,tt,J){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,X,tt,J),kt.viewport(H.copy(at).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,X,tt,J){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,X,tt,J),kt.scissor(ot.copy(Et).multiplyScalar(K).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(R){kt.setScissorTest(At=R)},this.setOpaqueSort=function(R){St=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,tt=!0){let J=0;if(R){let Q=!1;if(Z!==null){const yt=Z.texture.format;Q=yt===pd||yt===dd||yt===hd}if(Q){const yt=Z.texture.type,bt=yt===ra||yt===vr||yt===No||yt===Ss||yt===ud||yt===fd,Ot=Kt.getClearColor(),Nt=Kt.getClearAlpha(),te=Ot.r,ee=Ot.g,Yt=Ot.b;bt?(E[0]=te,E[1]=ee,E[2]=Yt,E[3]=Nt,F.clearBufferuiv(F.COLOR,0,E)):(w[0]=te,w[1]=ee,w[2]=Yt,w[3]=Nt,F.clearBufferiv(F.COLOR,0,w))}else J|=F.COLOR_BUFFER_BIT}X&&(J|=F.DEPTH_BUFFER_BIT),tt&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Kt.dispose(),zt.dispose(),ge.dispose(),Xt.dispose(),T.dispose(),et.dispose(),dt.dispose(),De.dispose(),k.dispose(),Ht.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ho),st.removeEventListener("sessionend",Rs),yi.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=we.autoReset,X=Bt.enabled,tt=Bt.autoUpdate,J=Bt.needsUpdate,Q=Bt.type;Lt(),we.autoReset=R,Bt.enabled=X,Bt.autoUpdate=tt,Bt.needsUpdate=J,Bt.type=Q}function Dt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){const X=R.target;X.removeEventListener("dispose",$t),Ie(X)}function Ie(R){$e(R),Xt.remove(R)}function $e(R){const X=Xt.get(R).programs;X!==void 0&&(X.forEach(function(tt){Ht.releaseProgram(tt)}),R.isShaderMaterial&&Ht.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,tt,J,Q,yt){X===null&&(X=Me);const bt=Q.isMesh&&Q.matrixWorld.determinant()<0,Ot=wc(R,X,tt,J,Q);kt.setMaterial(J,bt);let Nt=tt.index,te=1;if(J.wireframe===!0){if(Nt=vt.getWireframeAttribute(tt),Nt===void 0)return;te=2}const ee=tt.drawRange,Yt=tt.attributes.position;let _e=ee.start*te,ve=(ee.start+ee.count)*te;yt!==null&&(_e=Math.max(_e,yt.start*te),ve=Math.min(ve,(yt.start+yt.count)*te)),Nt!==null?(_e=Math.max(_e,0),ve=Math.min(ve,Nt.count)):Yt!=null&&(_e=Math.max(_e,0),ve=Math.min(ve,Yt.count));const Fe=ve-_e;if(Fe<0||Fe===1/0)return;De.setup(Q,J,Ot,tt,Nt);let Te,ne=Ft;if(Nt!==null&&(Te=ht.get(Nt),ne=re,ne.setIndex(Te)),Q.isMesh)J.wireframe===!0?(kt.setLineWidth(J.wireframeLinewidth*ae()),ne.setMode(F.LINES)):ne.setMode(F.TRIANGLES);else if(Q.isLine){let Qt=J.linewidth;Qt===void 0&&(Qt=1),kt.setLineWidth(Qt*ae()),Q.isLineSegments?ne.setMode(F.LINES):Q.isLineLoop?ne.setMode(F.LINE_LOOP):ne.setMode(F.LINE_STRIP)}else Q.isPoints?ne.setMode(F.POINTS):Q.isSprite&&ne.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ne.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qt=Q._multiDrawStarts,nn=Q._multiDrawCounts,xe=Q._multiDrawCount,Ln=Nt?ht.get(Nt).bytesPerElement:1,li=Xt.get(J).currentProgram.getUniforms();for(let bn=0;bn<xe;bn++)li.setValue(F,"_gl_DrawID",bn),ne.render(Qt[bn]/Ln,nn[bn])}else if(Q.isInstancedMesh)ne.renderInstances(_e,Fe,Q.count);else if(tt.isInstancedBufferGeometry){const Qt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,nn=Math.min(tt.instanceCount,Qt);ne.renderInstances(_e,Fe,nn)}else ne.render(_e,Fe)};function Ee(R,X,tt){R.transparent===!0&&R.side===gi&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,en(R,X,tt),R.side=Ba,R.needsUpdate=!0,en(R,X,tt),R.side=gi):en(R,X,tt)}this.compile=function(R,X,tt=null){tt===null&&(tt=R),v=ge.get(tt),v.init(X),U.push(v),tt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),R!==tt&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const J=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const yt=Q.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){const Ot=yt[bt];Ee(Ot,tt,Q),J.add(Ot)}else Ee(yt,tt,Q),J.add(yt)}),v=U.pop(),J},this.compileAsync=function(R,X,tt=null){const J=this.compile(R,X,tt);return new Promise(Q=>{function yt(){if(J.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&J.delete(bt)}),J.size===0){Q(R);return}setTimeout(yt,10)}se.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let En=null;function Tn(R){En&&En(R)}function Ho(){yi.stop()}function Rs(){yi.start()}const yi=new bv;yi.setAnimationLoop(Tn),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(R){En=R,st.setAnimationLoop(R),R===null?yi.stop():yi.start()},st.addEventListener("sessionstart",Ho),st.addEventListener("sessionend",Rs),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(X),X=st.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,X,Z),v=ge.get(R,U.length),v.init(X),U.push(v),Rt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,pt=Mt.init(this.clippingPlanes,xt),y=zt.get(R,P.length),y.init(),P.push(y),st.enabled===!0&&st.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&xr(yt,X,-1/0,D.sortObjects)}xr(R,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,N),Ce=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(y,R),this.info.render.frame++,pt===!0&&Mt.beginShadows();const tt=v.state.shadowsArray;Bt.render(tt,R,X),pt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=y.opaque,Q=y.transmissive;if(v.setupLights(),X.isArrayCamera){const yt=X.cameras;if(Q.length>0)for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];Go(J,Q,R,Nt)}Ce&&Kt.render(R);for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];Cs(y,R,Nt,Nt.viewport)}}else Q.length>0&&Go(J,Q,R,X),Ce&&Kt.render(R),Cs(y,R,X);Z!==null&&z===0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),R.isScene===!0&&R.onAfterRender(D,R,X),De.resetDefaultState(),C=-1,A=null,U.pop(),U.length>0?(v=U[U.length-1],pt===!0&&Mt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function xr(R,X,tt,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){J&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Rt);const bt=dt.update(R),Ot=R.material;Ot.visible&&y.push(R,bt,Ot,tt,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const bt=dt.update(R),Ot=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let te=0,ee=Nt.length;te<ee;te++){const Yt=Nt[te],_e=Ot[Yt.materialIndex];_e&&_e.visible&&y.push(R,bt,_e,tt,Pt.z,Yt)}}else Ot.visible&&y.push(R,bt,Ot,tt,Pt.z,null)}}const yt=R.children;for(let bt=0,Ot=yt.length;bt<Ot;bt++)xr(yt[bt],X,tt,J)}function Cs(R,X,tt,J){const Q=R.opaque,yt=R.transmissive,bt=R.transparent;v.setupLightsView(tt),pt===!0&&Mt.setGlobalState(D.clippingPlanes,tt),J&&kt.viewport(H.copy(J)),Q.length>0&&Hn(Q,X,tt),yt.length>0&&Hn(yt,X,tt),bt.length>0&&Hn(bt,X,tt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Go(R,X,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[J.id]===void 0&&(v.state.transmissionRenderTarget[J.id]=new Si(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?ia:ra,minFilter:_r,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const yt=v.state.transmissionRenderTarget[J.id],bt=J.viewport||H;yt.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(ft),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&Kt.render(tt);const Nt=D.toneMapping;D.toneMapping=za;const te=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),pt===!0&&Mt.setGlobalState(D.clippingPlanes,J),Hn(R,tt,J),L.updateMultisampleRenderTarget(yt),L.updateRenderTargetMipmap(yt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,_e=X.length;Yt<_e;Yt++){const ve=X[Yt],Fe=ve.object,Te=ve.geometry,ne=ve.material,Qt=ve.group;if(ne.side===gi&&Fe.layers.test(J.layers)){const nn=ne.side;ne.side=Fn,ne.needsUpdate=!0,tn(Fe,tt,J,Te,ne,Qt),ne.side=nn,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(yt),L.updateRenderTargetMipmap(yt))}D.setRenderTarget(Ot),D.setClearColor(ft,ut),te!==void 0&&(J.viewport=te),D.toneMapping=Nt}function Hn(R,X,tt){const J=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,yt=R.length;Q<yt;Q++){const bt=R[Q],Ot=bt.object,Nt=bt.geometry,te=J===null?bt.material:J,ee=bt.group;Ot.layers.test(tt.layers)&&tn(Ot,X,tt,Nt,te,ee)}}function tn(R,X,tt,J,Q,yt){R.onBeforeRender(D,X,tt,J,Q,yt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(D,X,tt,J,R,yt),Q.transparent===!0&&Q.side===gi&&Q.forceSinglePass===!1?(Q.side=Fn,Q.needsUpdate=!0,D.renderBufferDirect(tt,X,J,Q,R,yt),Q.side=Ba,Q.needsUpdate=!0,D.renderBufferDirect(tt,X,J,Q,R,yt),Q.side=gi):D.renderBufferDirect(tt,X,J,Q,R,yt),R.onAfterRender(D,X,tt,J,Q,yt)}function en(R,X,tt){X.isScene!==!0&&(X=Me);const J=Xt.get(R),Q=v.state.lights,yt=v.state.shadowsArray,bt=Q.state.version,Ot=Ht.getParameters(R,Q.state,yt,X,tt),Nt=Ht.getProgramCacheKey(Ot);let te=J.programs;J.environment=R.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(R.isMeshStandardMaterial?et:T).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",$t),te=new Map,J.programs=te);let ee=te.get(Nt);if(ee!==void 0){if(J.currentProgram===ee&&J.lightsStateVersion===bt)return Sr(R,Ot),ee}else Ot.uniforms=Ht.getUniforms(R),R.onBeforeCompile(Ot,D),ee=Ht.acquireProgram(Ot,Nt),te.set(Nt,ee),J.uniforms=Ot.uniforms;const Yt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=Mt.uniform),Sr(R,Ot),J.needsLights=Vo(R),J.lightsStateVersion=bt,J.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.currentProgram=ee,J.uniformsList=null,ee}function Ui(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Sc.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Sr(R,X){const tt=Xt.get(R);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function wc(R,X,tt,J,Q){X.isScene!==!0&&(X=Me),L.resetTextureUnits();const yt=X.fog,bt=J.isMeshStandardMaterial?X.environment:null,Ot=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ms,Nt=(J.isMeshStandardMaterial?et:T).get(J.envMap||bt),te=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Yt=!!tt.morphAttributes.position,_e=!!tt.morphAttributes.normal,ve=!!tt.morphAttributes.color;let Fe=za;J.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Fe=D.toneMapping);const Te=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ne=Te!==void 0?Te.length:0,Qt=Xt.get(J),nn=v.state.lights;if(pt===!0&&(xt===!0||R!==A)){const Ve=R===A&&J.id===C;Mt.setState(J,R,Ve)}let xe=!1;J.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==nn.state.version||Qt.outputColorSpace!==Ot||Q.isBatchedMesh&&Qt.batching===!1||!Q.isBatchedMesh&&Qt.batching===!0||Q.isBatchedMesh&&Qt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qt.instancing===!1||!Q.isInstancedMesh&&Qt.instancing===!0||Q.isSkinnedMesh&&Qt.skinning===!1||!Q.isSkinnedMesh&&Qt.skinning===!0||Q.isInstancedMesh&&Qt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qt.instancingMorph===!1&&Q.morphTexture!==null||Qt.envMap!==Nt||J.fog===!0&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Mt.numPlanes||Qt.numIntersection!==Mt.numIntersection)||Qt.vertexAlphas!==te||Qt.vertexTangents!==ee||Qt.morphTargets!==Yt||Qt.morphNormals!==_e||Qt.morphColors!==ve||Qt.toneMapping!==Fe||Qt.morphTargetsCount!==ne)&&(xe=!0):(xe=!0,Qt.__version=J.version);let Ln=Qt.currentProgram;xe===!0&&(Ln=en(J,X,Q));let li=!1,bn=!1,ln=!1;const Ue=Ln.getUniforms(),An=Qt.uniforms;if(kt.useProgram(Ln.program)&&(li=!0,bn=!0,ln=!0),J.id!==C&&(C=J.id,bn=!0),li||A!==R){kt.buffers.depth.getReversed()?(Tt.copy(R.projectionMatrix),IS(Tt),HS(Tt),Ue.setValue(F,"projectionMatrix",Tt)):Ue.setValue(F,"projectionMatrix",R.projectionMatrix),Ue.setValue(F,"viewMatrix",R.matrixWorldInverse);const pn=Ue.map.cameraPosition;pn!==void 0&&pn.setValue(F,jt.setFromMatrixPosition(R.matrixWorld)),fe.logarithmicDepthBuffer&&Ue.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ue.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),A!==R&&(A=R,bn=!0,ln=!0)}if(Q.isSkinnedMesh){Ue.setOptional(F,Q,"bindMatrix"),Ue.setOptional(F,Q,"bindMatrixInverse");const Ve=Q.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),Ue.setValue(F,"boneTexture",Ve.boneTexture,L))}Q.isBatchedMesh&&(Ue.setOptional(F,Q,"batchingTexture"),Ue.setValue(F,"batchingTexture",Q._matricesTexture,L),Ue.setOptional(F,Q,"batchingIdTexture"),Ue.setValue(F,"batchingIdTexture",Q._indirectTexture,L),Ue.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ue.setValue(F,"batchingColorTexture",Q._colorsTexture,L));const vn=tt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Gt.update(Q,tt,Ln),(bn||Qt.receiveShadow!==Q.receiveShadow)&&(Qt.receiveShadow=Q.receiveShadow,Ue.setValue(F,"receiveShadow",Q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(An.envMap.value=Nt,An.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(An.envMapIntensity.value=X.environmentIntensity),bn&&(Ue.setValue(F,"toneMappingExposure",D.toneMappingExposure),Qt.needsLights&&Dc(An,ln),yt&&J.fog===!0&&wt.refreshFogUniforms(An,yt),wt.refreshMaterialUniforms(An,J,K,rt,v.state.transmissionRenderTarget[R.id]),Sc.upload(F,Ui(Qt),An,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sc.upload(F,Ui(Qt),An,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ue.setValue(F,"center",Q.center),Ue.setValue(F,"modelViewMatrix",Q.modelViewMatrix),Ue.setValue(F,"normalMatrix",Q.normalMatrix),Ue.setValue(F,"modelMatrix",Q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ve=J.uniformsGroups;for(let pn=0,yr=Ve.length;pn<yr;pn++){const Nn=Ve[pn];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function Dc(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Vo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,X,tt){Xt.get(R.texture).__webglTexture=X,Xt.get(R.depthTexture).__webglTexture=tt;const J=Xt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=tt===void 0,J.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const tt=Xt.get(R);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0};const Fa=F.createFramebuffer();this.setRenderTarget=function(R,X=0,tt=0){Z=R,B=X,z=tt;let J=!0,Q=null,yt=!1,bt=!1;if(R){const Nt=Xt.get(R);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Nt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Nt.__hasExternalTextures)L.rebindTextures(R,Xt.get(R.texture).__webglTexture,Xt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Yt=R.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(bt=!0);const ee=Xt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Q=ee[X][tt]:Q=ee[X],yt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?Q=Xt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[tt]:Q=ee,H.copy(R.viewport),ot.copy(R.scissor),nt=R.scissorTest}else H.copy(at).multiplyScalar(K).floor(),ot.copy(Et).multiplyScalar(K).floor(),nt=At;if(tt!==0&&(Q=Fa),kt.bindFramebuffer(F.FRAMEBUFFER,Q)&&J&&kt.drawBuffers(R,Q),kt.viewport(H),kt.scissor(ot),kt.setScissorTest(nt),yt){const Nt=Xt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,tt)}else if(bt){const Nt=Xt.get(R.texture),te=X;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.__webglTexture,tt,te)}else if(R!==null&&tt!==0){const Nt=Xt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(R,X,tt,J,Q,yt,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(F.FRAMEBUFFER,Ot);try{const Nt=R.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&tt>=0&&tt<=R.height-Q&&F.readPixels(X,tt,J,Q,Zt.convert(te),Zt.convert(ee),yt)}finally{const Nt=Z!==null?Xt.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(R,X,tt,J,Q,yt,bt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=R.texture,te=Nt.format,ee=Nt.type;if(!fe.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-J&&tt>=0&&tt<=R.height-Q){kt.bindFramebuffer(F.FRAMEBUFFER,Ot);const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(X,tt,J,Q,Zt.convert(te),Zt.convert(ee),0);const _e=Z!==null?Xt.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(F.FRAMEBUFFER,_e);const ve=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await FS(F,ve,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.deleteBuffer(Yt),F.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,tt=0){R.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-tt),Q=Math.floor(R.image.width*J),yt=Math.floor(R.image.height*J),bt=X!==null?X.x:0,Ot=X!==null?X.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,bt,Ot,Q,yt),kt.unbindTexture()};const ws=F.createFramebuffer(),Li=F.createFramebuffer();this.copyTextureToTexture=function(R,X,tt=null,J=null,Q=0,yt=null){R.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],X=arguments[2],yt=arguments[3]||0,tt=null),yt===null&&(Q!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Q,Q=0):yt=0);let bt,Ot,Nt,te,ee,Yt,_e,ve,Fe;const Te=R.isCompressedTexture?R.mipmaps[yt]:R.image;if(tt!==null)bt=tt.max.x-tt.min.x,Ot=tt.max.y-tt.min.y,Nt=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,ee=tt.min.y,Yt=tt.isBox3?tt.min.z:0;else{const vn=Math.pow(2,-Q);bt=Math.floor(Te.width*vn),Ot=Math.floor(Te.height*vn),R.isDataArrayTexture?Nt=Te.depth:R.isData3DTexture?Nt=Math.floor(Te.depth*vn):Nt=1,te=0,ee=0,Yt=0}J!==null?(_e=J.x,ve=J.y,Fe=J.z):(_e=0,ve=0,Fe=0);const ne=Zt.convert(X.format),Qt=Zt.convert(X.type);let nn;X.isData3DTexture?(L.setTexture3D(X,0),nn=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),nn=F.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),nn=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Ln=F.getParameter(F.UNPACK_IMAGE_HEIGHT),li=F.getParameter(F.UNPACK_SKIP_PIXELS),bn=F.getParameter(F.UNPACK_SKIP_ROWS),ln=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Yt);const Ue=R.isDataArrayTexture||R.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const vn=Xt.get(R),Ve=Xt.get(X),pn=Xt.get(vn.__renderTarget),yr=Xt.get(Ve.__renderTarget);kt.bindFramebuffer(F.READ_FRAMEBUFFER,pn.__webglFramebuffer),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Nn=0;Nn<Nt;Nn++)Ue&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(R).__webglTexture,Q,Yt+Nn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.get(X).__webglTexture,yt,Fe+Nn)),F.blitFramebuffer(te,ee,bt,Ot,_e,ve,bt,Ot,F.DEPTH_BUFFER_BIT,F.NEAREST);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Xt.has(R)){const vn=Xt.get(R),Ve=Xt.get(X);kt.bindFramebuffer(F.READ_FRAMEBUFFER,ws),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Li);for(let pn=0;pn<Nt;pn++)Ue?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vn.__webglTexture,Q,Yt+pn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vn.__webglTexture,Q),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,yt,Fe+pn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ve.__webglTexture,yt),Q!==0?F.blitFramebuffer(te,ee,bt,Ot,_e,ve,bt,Ot,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(nn,yt,_e,ve,Fe+pn,te,ee,bt,Ot):F.copyTexSubImage2D(nn,yt,_e,ve,te,ee,bt,Ot);kt.bindFramebuffer(F.READ_FRAMEBUFFER,null),kt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(nn,yt,_e,ve,Fe,bt,Ot,Nt,ne,Qt,Te.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(nn,yt,_e,ve,Fe,bt,Ot,Nt,ne,Te.data):F.texSubImage3D(nn,yt,_e,ve,Fe,bt,Ot,Nt,ne,Qt,Te):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,_e,ve,bt,Ot,ne,Qt,Te.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,_e,ve,Te.width,Te.height,ne,Te.data):F.texSubImage2D(F.TEXTURE_2D,yt,_e,ve,bt,Ot,ne,Qt,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ln),F.pixelStorei(F.UNPACK_SKIP_PIXELS,li),F.pixelStorei(F.UNPACK_SKIP_ROWS,bn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ln),yt===0&&X.generateMipmaps&&F.generateMipmap(nn),kt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,tt=null,J=null,Q=0){return R.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,J=arguments[1]||null,R=arguments[2],X=arguments[3],Q=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,tt,J,Q)},this.initRenderTarget=function(R){Xt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),kt.unbindTexture()},this.resetState=function(){B=0,z=0,Z=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const Dv={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Io{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const g1=new Tv(-1,1,1,-1,0,1);class _1 extends Di{constructor(){super(),this.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Un([0,2,0,0,2,0],2))}}const v1=new _1;class Uv{constructor(t){this._mesh=new Bn(v1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,g1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class x1 extends Io{constructor(t,i){super(),this.textureID=i!==void 0?i:"tDiffuse",t instanceof Dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Tc.clone(t.uniforms),this.material=new Dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Uv(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class q_ extends Io{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class S1 extends Io{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class y1{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const r=t.getSize(new Wt);this._width=r.width,this._height=r.height,i=new Si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ia}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x1(Dv),this.copyPass.material.blending=na,this.clock=new Uy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),f.needsSwap){if(r){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}q_!==void 0&&(f instanceof q_?r=!0:f instanceof S1&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class M1 extends Io{constructor(t,i,r=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new me}render(t,i,r){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const E1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ts extends Io{constructor(t,i,r,l){super(),this.strength=i!==void 0?i:1,this.radius=r,this.threshold=l,this.resolution=t!==void 0?new Wt(t.x,t.y):new Wt(256,256),this.clearColor=new me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Si(c,f,{type:ia}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const x=new Si(c,f,{type:ia});x.texture.name="UnrealBloomPass.h"+_,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const M=new Si(c,f,{type:ia});M.texture.name="UnrealBloomPass.v"+_,M.texture.generateMipmaps=!1,this.renderTargetsVertical.push(M),c=Math.round(c/2),f=Math.round(f/2)}const d=E1;this.highPassUniforms=Tc.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new Wt(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=Dv;this.copyUniforms=Tc.clone(g.uniforms),this.blendMaterial=new Dn({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:gs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new me,this.oldClearAlpha=1,this.basic=new ms,this.fsQuad=new Uv(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Wt(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(t,i,r,l,c){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this.fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=Ts.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Ts.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this.fsQuad.render(t),d=this.renderTargetsVertical[p];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=f}getSeparableBlurMaterial(t){const i=[];for(let r=0;r<t;r++)i.push(.39894*Math.exp(-.5*r*r/(t*t))/t);return new Dn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Wt(.5,.5)},direction:{value:new Wt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Dn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ts.BlurDirectionX=new Wt(1,0);Ts.BlurDirectionY=new Wt(0,1);const Lv=Math.sqrt(3),T1=.5*(Lv-1),wo=(3-Lv)/6,Y_=o=>Math.floor(o)|0,Z_=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Q_(o=Math.random){const t=b1(o),i=new Float64Array(t).map(l=>Z_[l%12*2]),r=new Float64Array(t).map(l=>Z_[l%12*2+1]);return function(c,f){let d=0,p=0,m=0;const g=(c+f)*T1,_=Y_(c+g),x=Y_(f+g),M=(_+x)*wo,E=_-M,w=x-M,y=c-E,v=f-w;let P,U;y>v?(P=1,U=0):(P=0,U=1);const D=y-P+wo,I=v-U+wo,B=y-1+2*wo,z=v-1+2*wo,Z=_&255,C=x&255;let A=.5-y*y-v*v;if(A>=0){const nt=Z+t[C],ft=i[nt],ut=r[nt];A*=A,d=A*A*(ft*y+ut*v)}let H=.5-D*D-I*I;if(H>=0){const nt=Z+P+t[C+U],ft=i[nt],ut=r[nt];H*=H,p=H*H*(ft*D+ut*I)}let ot=.5-B*B-z*z;if(ot>=0){const nt=Z+1+t[C+1],ft=i[nt],ut=r[nt];ot*=ot,m=ot*ot*(ft*B+ut*z)}return 70*(d+p+m)}}function b1(o){const i=new Uint8Array(512);for(let r=0;r<512/2;r++)i[r]=r;for(let r=0;r<512/2-1;r++){const l=r+~~(o()*(256-r)),c=i[r];i[r]=i[l],i[l]=c}for(let r=256;r<512;r++)i[r]=i[r-256];return i}class A1{constructor(t){ar(this,"colors");this.colors=t||[new me(24575),new me(8388736),new me(16728128)]}calculateContourPositions(t,i=3){const r=t||window.innerWidth/window.innerHeight,l=Q_(),c=[];for(let f=0;f<i;f++){const d=f/i*Math.PI*2,p=9,m=Math.cos(d)*p,g=Math.sin(d)*p*(1/r),_=2,x=m+l(m*.1,g*.1)*_,M=g+l(m*.1+100,g*.1+100)*_;c.push({x,y:M})}return c}createContourCurve(t,i,r,l,c){const f=[],p=Q_(),m=(E,w)=>{const y=E*Math.PI*2,v=.5,P=2,U=4,D=p(Math.cos(y)*v,Math.sin(y)*v),I=p(Math.cos(y)*P,Math.sin(y)*P)*.5,B=p(Math.cos(y)*U,Math.sin(y)*U)*.25,z=(D+I+B)/1.75,Z=Math.sin(y*3+r*.5)*.3,C=w*(1+z*.5+Z);return{x:C*Math.cos(y),y:C*Math.sin(y),z:z*.2}};for(let E=0;E<=70;E++){const w=E/70,{x:y,y:v,z:P}=m(w,c);f.push(new Y(y-t,v-i,P))}const g=new Mv(f,!0),_=new xd(g,200,.03+Math.random()*.02,8,!0),x=this.createShaderMaterial(l);return{mesh:new Bn(_,x),material:x}}createShaderMaterial(t){return new Dn({uniforms:{time:{value:0},progress:{value:0},colorA:{value:t},glowIntensity:{value:.3+Math.random()*.4}},vertexShader:`
                varying vec2 vUv;
                varying vec3 vPosition;
                varying vec3 vNormal;

                void main() {
                    vUv = uv;
                    vPosition = position;
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform float time;
                uniform float progress;
                uniform vec3 colorA;
                uniform float glowIntensity;

                varying vec2 vUv;
                varying vec3 vNormal;

                void main() {
                    float modifiedProgress = progress * 1.1;
                    float drawingProgress = smoothstep(0.0, 1.0, (modifiedProgress - vUv.x));
                    float closePoint = smoothstep(0.9, 1.0, modifiedProgress) * smoothstep(0.0, 0.1, vUv.x);

                    drawingProgress = max(drawingProgress, closePoint);
                    if (drawingProgress <= 0.0) discard;

                    float pulseRate = 1.5;
                    float glowPulse = sin(time * pulseRate) * 0.15 + 0.85;
                    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);

                    vec3 color = colorA;
                    float brightness = 1.0 - abs(vUv.y - 0.5) * 2.0;
                    brightness = pow(brightness, 2.0);

                    color *= glowPulse * glowIntensity;
                    color += color * fresnel * 2.5;
                    color += brightness * color * 1.5;

                    float alpha = (0.7 + brightness * 0.3) * max(drawingProgress, closePoint);
                    alpha *= (0.85 + fresnel * 0.15);

                    gl_FragColor = vec4(color, alpha);
                }
            `,transparent:!0,blending:gs,side:gi})}generateCurves(t=5,i=6){const r=this.calculateContourPositions(),l=[];return r.forEach((c,f)=>{for(let d=0;d<t;d++){const p=i+d*.3,m=this.createContourCurve(c.x,c.y,d,this.colors[f%this.colors.length],p);l.push(m)}}),l}}class R1{constructor(t,i){ar(this,"particles",[]);ar(this,"flashes",[]);ar(this,"scene");ar(this,"maxParticles");ar(this,"lived",0);this.scene=t,this.maxParticles=i}createFlash(t,i){const r=new Fo(.1,.1),l=new ms({color:i,transparent:!0,opacity:.3,side:gi,blending:gs}),c=new Bn(r,l);c.position.copy(t),c.lookAt(this.scene.position);const f={mesh:c,lifetime:.2,initialScale:1};this.scene.add(c),this.flashes.push(f)}createTrailParticle(t,i){const r=new bc(.02,4,4),l=new ms({color:i,transparent:!0,opacity:.5,blending:gs}),c=new Bn(r,l);c.position.copy(t);const f={mesh:c,lifetime:.5,maxLifetime:.5};return this.scene.add(c),f}createParticle(t,i,r){if(r=r??!1,this.particles.length>=this.maxParticles&&(!r||this.particles.length>=2*this.maxParticles))return null;const l=15,c=t||new Y((Math.random()-.5)*l,(Math.random()-.5)*l,(Math.random()-.5)*5),f=i||new me(Math.random(),Math.random(),Math.random());this.createFlash(c,f);const d=new bc(.05,4,4),p=new ms({color:f,transparent:!0,opacity:.7}),m=new Bn(d,p);m.position.copy(c);var g=4+Math.random()*15;r&&(g=.5+Math.random()*10);const _={mesh:m,velocity:new Y((Math.random()-.5)*.35,(Math.random()-.5)*.35,(Math.random()-.5)*.35),lifetime:g,position:c.clone(),color:f,size:.05,trail:[]};return this.scene.add(m),this.particles.push(_),_}update(t){try{this.lived+=t;for(let i=this.flashes.length-1;i>=0;i--)try{if(i>=this.flashes.length||i<0)continue;const r=this.flashes[i];if(!r)continue;r.lifetime-=t;const l=r.lifetime/.4,c=r.initialScale*(1+(1-l)*2);r.mesh.scale.set(c,c,c),r.mesh.material.opacity=l,r.lifetime<=0&&(this.scene.remove(r.mesh),this.flashes.splice(i,1))}catch(r){console.warn("Error al actualizar destello:",r);try{i>=0&&i<this.flashes.length&&this.flashes.splice(i,1)}catch{}}for(let i=this.particles.length-1;i>=0;i--)try{if(i>=this.particles.length||i<0)continue;const r=this.particles[i];if(!r)continue;try{if(Math.random()<.3){const c=this.createTrailParticle(r.mesh.position.clone(),r.color);r.trail.push(c)}}catch(c){console.warn("Error al crear rastro:",c)}for(let c=r.trail.length-1;c>=0;c--)try{if(c>=r.trail.length||c<0)continue;const f=r.trail[c];if(!f)continue;f.lifetime-=t;const d=f.lifetime/f.maxLifetime;f.mesh.material.opacity=d*.5,f.lifetime<=0&&(this.scene.remove(f.mesh),r.trail.splice(c,1))}catch(f){console.warn("Error al actualizar rastro:",f);try{c>=0&&c<r.trail.length&&r.trail.splice(c,1)}catch{}}try{r.mesh.position.add(r.velocity),r.lifetime-=t}catch(c){console.warn("Error al actualizar posición:",c)}let l=!1;try{for(let c=this.particles.length-1;c>=0&&!l;c--)try{if(c>=this.particles.length||c<0||i>=this.particles.length||i<0||i===c)continue;const f=this.particles[c];if(!f)continue;const d=r.mesh.position.x-f.mesh.position.x,p=r.mesh.position.y-f.mesh.position.y;if(Math.sqrt(d*d+p*p)<.1&&this.lived>3){const g=f.mesh.position.clone();try{r.trail.forEach(_=>{this.scene.remove(_.mesh)})}catch(_){console.warn("Error al limpiar rastros 1:",_)}try{f.trail.forEach(_=>{this.scene.remove(_.mesh)})}catch(_){console.warn("Error al limpiar rastros 2:",_)}try{this.scene.remove(r.mesh),i>=0&&i<this.particles.length&&this.particles.splice(i,1)}catch(_){console.warn("Error al eliminar partícula 1:",_)}try{if(this.scene.remove(f.mesh),c>=0&&c<this.particles.length){const _=i<c?c-1:c;_>=0&&_<this.particles.length&&this.particles.splice(_,1)}}catch(_){console.warn("Error al eliminar partícula 2:",_)}try{this.spawnInitialParticles(5,g)}catch(_){console.warn("Error al crear nuevas partículas:",_)}l=!0;break}}catch(f){console.warn("Error al procesar colisión con partícula:",f)}}catch(c){console.warn("Error en proceso de colisiones:",c)}if(l)continue;try{Math.random()<.37&&this.particles.length<this.maxParticles&&this.createParticle()}catch(c){console.warn("Error al crear partícula aleatoria:",c)}try{if(r.lifetime<=0){try{r.trail.forEach(c=>{this.scene.remove(c.mesh)})}catch(c){console.warn("Error al limpiar rastros:",c)}this.scene.remove(r.mesh),this.particles.splice(i,1)}}catch(c){console.warn("Error al verificar tiempo de vida:",c);try{i>=0&&i<this.particles.length&&this.particles.splice(i,1)}catch{}}}catch(r){console.warn("Error general al actualizar partícula:",r);try{i>=0&&i<this.particles.length&&this.particles.splice(i,1)}catch{}}}catch(i){console.error("Error crítico en el sistema de partículas:",i)}}spawnInitialParticles(t,i){for(let r=0;r<t;r++)this.createParticle(i)}}const C1=()=>{const o=vh.useRef(null);return vh.useEffect(()=>{if(!o.current)return;const t=o.current,i=new uy;i.background=new me("#111207");const r=new oi(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=14;const l=new m1({antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(l.domElement),l.domElement.style.position="absolute",l.domElement.style.top="0",l.domElement.style.left="0",l.domElement.style.pointerEvents="none";const f=new A1().generateCurves();f.forEach(y=>i.add(y.mesh));const d=new R1(i,25);d.spawnInitialParticles(25,new Y(0,0,0));const p=new y1(l);p.addPass(new M1(i,r));const m=new Ts(new Wt(window.innerWidth,window.innerHeight),1.5,.4,.85);m.threshold=0,m.strength=1.6,m.radius=0,p.addPass(m);const g=()=>{const y=window.innerWidth,v=window.innerHeight;r.aspect=y/v,r.updateProjectionMatrix(),l.setSize(y,v),p.setSize(y,v)};window.addEventListener("resize",g);const _=new Wt,x=new Ly;window.addEventListener("click",M);function M(y){_.x=y.clientX/window.innerWidth*2-1,_.y=-(y.clientY/window.innerHeight)*2+1,x.setFromCamera(_,r);const v=new Y;x.ray.at(5,v),d.createParticle(v,void 0,!0)}let E=Date.now();const w=()=>{const v=Date.now()-E,P=Math.min(v/8e3,1.1)*5;f.forEach((U,D)=>{U.material.uniforms.progress.value=Math.max(Math.min(P-D*.03,1.1),0),U.material.uniforms.time.value=v*.001}),d.update(.016),p.render(),requestAnimationFrame(w)};return w(),()=>{window.removeEventListener("resize",g),l.dispose(),p.dispose(),f.forEach(y=>{y.mesh.geometry.dispose(),y.material.dispose()}),t.contains(l.domElement)&&t.removeChild(l.domElement)}},[]),_h.jsx("div",{ref:o,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:-10}})};Yx.createRoot(document.getElementById("root")).render(_h.jsx(vh.StrictMode,{children:_h.jsx(C1,{})}));
