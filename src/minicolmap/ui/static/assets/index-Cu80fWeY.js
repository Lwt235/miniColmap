(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function rv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var uh={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Qy(){if(D_)return Po;D_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var N_;function Jy(){return N_||(N_=1,uh.exports=Qy()),uh.exports}var p=Jy(),fh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function $y(){if(U_)return _t;U_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function x(L,Q,fe){this.props=L,this.context=Q,this.refs=C,this.updater=fe||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,Q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Q,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=x.prototype;function I(L,Q,fe){this.props=L,this.context=Q,this.refs=C,this.updater=fe||b}var O=I.prototype=new _;O.constructor=I,M(O,x.prototype),O.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function j(L,Q,fe,xe,de,Ie){return fe=Ie.ref,{$$typeof:r,type:L,key:Q,ref:fe!==void 0?fe:null,props:Ie}}function K(L,Q){return j(L.type,Q,void 0,void 0,void 0,L.props)}function T(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var Q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(fe){return Q[fe]})}var H=/\/+/g;function ne(L,Q){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):Q.toString(36)}function le(){}function X(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(le,le):(L.status="pending",L.then(function(Q){L.status==="pending"&&(L.status="fulfilled",L.value=Q)},function(Q){L.status==="pending"&&(L.status="rejected",L.reason=Q)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ae(L,Q,fe,xe,de){var Ie=typeof L;(Ie==="undefined"||Ie==="boolean")&&(L=null);var ie=!1;if(L===null)ie=!0;else switch(Ie){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(L.$$typeof){case r:case e:ie=!0;break;case v:return ie=L._init,ae(ie(L._payload),Q,fe,xe,de)}}if(ie)return de=de(L),ie=xe===""?"."+ne(L,0):xe,U(de)?(fe="",ie!=null&&(fe=ie.replace(H,"$&/")+"/"),ae(de,Q,fe,"",function(Ve){return Ve})):de!=null&&(T(de)&&(de=K(de,fe+(de.key==null||L&&L.key===de.key?"":(""+de.key).replace(H,"$&/")+"/")+ie)),Q.push(de)),1;ie=0;var _e=xe===""?".":xe+":";if(U(L))for(var Ce=0;Ce<L.length;Ce++)xe=L[Ce],Ie=_e+ne(xe,Ce),ie+=ae(xe,Q,fe,Ie,de);else if(Ce=y(L),typeof Ce=="function")for(L=Ce.call(L),Ce=0;!(xe=L.next()).done;)xe=xe.value,Ie=_e+ne(xe,Ce++),ie+=ae(xe,Q,fe,Ie,de);else if(Ie==="object"){if(typeof L.then=="function")return ae(X(L),Q,fe,xe,de);throw Q=String(L),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function P(L,Q,fe){if(L==null)return L;var xe=[],de=0;return ae(L,xe,"","",function(Ie){return Q.call(fe,Ie,de++)}),xe}function Z(L){if(L._status===-1){var Q=L._result;Q=Q(),Q.then(function(fe){(L._status===0||L._status===-1)&&(L._status=1,L._result=fe)},function(fe){(L._status===0||L._status===-1)&&(L._status=2,L._result=fe)}),L._status===-1&&(L._status=0,L._result=Q)}if(L._status===1)return L._result.default;throw L._result}var k=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ge(){}return _t.Children={map:P,forEach:function(L,Q,fe){P(L,function(){Q.apply(this,arguments)},fe)},count:function(L){var Q=0;return P(L,function(){Q++}),Q},toArray:function(L){return P(L,function(Q){return Q})||[]},only:function(L){if(!T(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},_t.Component=x,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=I,_t.StrictMode=s,_t.Suspense=g,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,_t.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},_t.cache=function(L){return function(){return L.apply(null,arguments)}},_t.cloneElement=function(L,Q,fe){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var xe=M({},L.props),de=L.key,Ie=void 0;if(Q!=null)for(ie in Q.ref!==void 0&&(Ie=void 0),Q.key!==void 0&&(de=""+Q.key),Q)!G.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(xe[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)xe.children=fe;else if(1<ie){for(var _e=Array(ie),Ce=0;Ce<ie;Ce++)_e[Ce]=arguments[Ce+2];xe.children=_e}return j(L.type,de,void 0,void 0,Ie,xe)},_t.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},_t.createElement=function(L,Q,fe){var xe,de={},Ie=null;if(Q!=null)for(xe in Q.key!==void 0&&(Ie=""+Q.key),Q)G.call(Q,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(de[xe]=Q[xe]);var ie=arguments.length-2;if(ie===1)de.children=fe;else if(1<ie){for(var _e=Array(ie),Ce=0;Ce<ie;Ce++)_e[Ce]=arguments[Ce+2];de.children=_e}if(L&&L.defaultProps)for(xe in ie=L.defaultProps,ie)de[xe]===void 0&&(de[xe]=ie[xe]);return j(L,Ie,void 0,void 0,null,de)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(L){return{$$typeof:d,render:L}},_t.isValidElement=T,_t.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Z}},_t.memo=function(L,Q){return{$$typeof:m,type:L,compare:Q===void 0?null:Q}},_t.startTransition=function(L){var Q=B.T,fe={};B.T=fe;try{var xe=L(),de=B.S;de!==null&&de(fe,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(ge,k)}catch(Ie){k(Ie)}finally{B.T=Q}},_t.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},_t.use=function(L){return B.H.use(L)},_t.useActionState=function(L,Q,fe){return B.H.useActionState(L,Q,fe)},_t.useCallback=function(L,Q){return B.H.useCallback(L,Q)},_t.useContext=function(L){return B.H.useContext(L)},_t.useDebugValue=function(){},_t.useDeferredValue=function(L,Q){return B.H.useDeferredValue(L,Q)},_t.useEffect=function(L,Q,fe){var xe=B.H;if(typeof fe=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return xe.useEffect(L,Q)},_t.useId=function(){return B.H.useId()},_t.useImperativeHandle=function(L,Q,fe){return B.H.useImperativeHandle(L,Q,fe)},_t.useInsertionEffect=function(L,Q){return B.H.useInsertionEffect(L,Q)},_t.useLayoutEffect=function(L,Q){return B.H.useLayoutEffect(L,Q)},_t.useMemo=function(L,Q){return B.H.useMemo(L,Q)},_t.useOptimistic=function(L,Q){return B.H.useOptimistic(L,Q)},_t.useReducer=function(L,Q,fe){return B.H.useReducer(L,Q,fe)},_t.useRef=function(L){return B.H.useRef(L)},_t.useState=function(L){return B.H.useState(L)},_t.useSyncExternalStore=function(L,Q,fe){return B.H.useSyncExternalStore(L,Q,fe)},_t.useTransition=function(){return B.H.useTransition()},_t.version="19.1.1",_t}var L_;function Vd(){return L_||(L_=1,fh.exports=$y()),fh.exports}var ye=Vd();const eS=rv(ye);var hh={exports:{}},zo={},dh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function tS(){return O_||(O_=1,(function(r){function e(P,Z){var k=P.length;P.push(Z);e:for(;0<k;){var ge=k-1>>>1,L=P[ge];if(0<l(L,Z))P[ge]=Z,P[k]=L,k=ge;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Z=P[0],k=P.pop();if(k!==Z){P[0]=k;e:for(var ge=0,L=P.length,Q=L>>>1;ge<Q;){var fe=2*(ge+1)-1,xe=P[fe],de=fe+1,Ie=P[de];if(0>l(xe,k))de<L&&0>l(Ie,xe)?(P[ge]=Ie,P[de]=k,ge=de):(P[ge]=xe,P[fe]=k,ge=fe);else if(de<L&&0>l(Ie,k))P[ge]=Ie,P[de]=k,ge=de;else break e}}return Z}function l(P,Z){var k=P.sortIndex-Z.sortIndex;return k!==0?k:P.id-Z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var g=[],m=[],v=1,S=null,y=3,b=!1,M=!1,C=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Z=i(m);Z!==null;){if(Z.callback===null)s(m);else if(Z.startTime<=P)s(m),Z.sortIndex=Z.expirationTime,e(g,Z);else break;Z=i(m)}}function B(P){if(C=!1,U(P),!M)if(i(g)!==null)M=!0,G||(G=!0,ne());else{var Z=i(m);Z!==null&&ae(B,Z.startTime-P)}}var G=!1,j=-1,K=5,T=-1;function D(){return x?!0:!(r.unstable_now()-T<K)}function H(){if(x=!1,G){var P=r.unstable_now();T=P;var Z=!0;try{e:{M=!1,C&&(C=!1,I(j),j=-1),b=!0;var k=y;try{t:{for(U(P),S=i(g);S!==null&&!(S.expirationTime>P&&D());){var ge=S.callback;if(typeof ge=="function"){S.callback=null,y=S.priorityLevel;var L=ge(S.expirationTime<=P);if(P=r.unstable_now(),typeof L=="function"){S.callback=L,U(P),Z=!0;break t}S===i(g)&&s(g),U(P)}else s(g);S=i(g)}if(S!==null)Z=!0;else{var Q=i(m);Q!==null&&ae(B,Q.startTime-P),Z=!1}}break e}finally{S=null,y=k,b=!1}Z=void 0}}finally{Z?ne():G=!1}}}var ne;if(typeof O=="function")ne=function(){O(H)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,X=le.port2;le.port1.onmessage=H,ne=function(){X.postMessage(null)}}else ne=function(){_(H,0)};function ae(P,Z){j=_(function(){P(r.unstable_now())},Z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(P){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var k=y;y=Z;try{return P()}finally{y=k}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=y;y=P;try{return Z()}finally{y=k}},r.unstable_scheduleCallback=function(P,Z,k){var ge=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ge+k:ge):k=ge,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=k+L,P={id:v++,callback:Z,priorityLevel:P,startTime:k,expirationTime:L,sortIndex:-1},k>ge?(P.sortIndex=k,e(m,P),i(g)===null&&P===i(m)&&(C?(I(j),j=-1):C=!0,ae(B,k-ge))):(P.sortIndex=L,e(g,P),M||b||(M=!0,G||(G=!0,ne()))),P},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(P){var Z=y;return function(){var k=y;y=Z;try{return P.apply(this,arguments)}finally{y=k}}}})(ph)),ph}var P_;function nS(){return P_||(P_=1,dh.exports=tS()),dh.exports}var mh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function iS(){if(z_)return Un;z_=1;var r=Vd();function e(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,m,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:m,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(g,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(g,m,null,v)},Un.flushSync=function(g){var m=h.T,v=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=m,s.p=v,s.d.f()}},Un.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Un.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Un.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var v=m.as,S=d(v,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:b}):v==="script"&&s.d.X(g,{crossOrigin:S,integrity:y,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=d(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Un.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,S=d(v,m.crossOrigin);s.d.L(g,v,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(g,m){if(typeof g=="string")if(m){var v=d(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Un.requestFormReset=function(g){s.d.r(g)},Un.unstable_batchedUpdates=function(g,m){return g(m)},Un.useFormState=function(g,m,v){return h.H.useFormState(g,m,v)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var I_;function aS(){if(I_)return mh.exports;I_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),mh.exports=iS(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function sS(){if(B_)return zo;B_=1;var r=nS(),e=Vd(),i=aS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var E=!1,w=u.child;w;){if(w===a){E=!0,a=u,o=f;break}if(w===o){E=!0,o=u,a=f;break}w=w.sibling}if(!E){for(w=f.child;w;){if(w===a){E=!0,a=f,o=u;break}if(w===o){E=!0,o=f,a=u;break}w=w.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function m(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=m(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function X(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case x:return"Profiler";case C:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return(t.displayName||"Context")+".Provider";case I:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return n=t.displayName||null,n!==null?n:X(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return X(t(n))}catch{}}return null}var ae=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ge=[],L=-1;function Q(t){return{current:t}}function fe(t){0>L||(t.current=ge[L],ge[L]=null,L--)}function xe(t,n){L++,ge[L]=t.current,t.current=n}var de=Q(null),Ie=Q(null),ie=Q(null),_e=Q(null);function Ce(t,n){switch(xe(ie,n),xe(Ie,t),xe(de,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?a_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=a_(n),t=s_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}fe(de),xe(de,t)}function Ve(){fe(de),fe(Ie),fe(ie)}function Ye(t){t.memoizedState!==null&&xe(_e,t);var n=de.current,a=s_(n,t.type);n!==a&&(xe(Ie,t),xe(de,a))}function it(t){Ie.current===t&&(fe(de),fe(Ie)),_e.current===t&&(fe(_e),Do._currentValue=k)}var Nt=Object.prototype.hasOwnProperty,A=r.unstable_scheduleCallback,ve=r.unstable_cancelCallback,be=r.unstable_shouldYield,je=r.unstable_requestPaint,De=r.unstable_now,gt=r.unstable_getCurrentPriorityLevel,qe=r.unstable_ImmediatePriority,ot=r.unstable_UserBlockingPriority,It=r.unstable_NormalPriority,Gt=r.unstable_LowPriority,z=r.unstable_IdlePriority,R=r.log,q=r.unstable_setDisableYieldValue,ce=null,Se=null;function oe(t){if(typeof R=="function"&&q(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(ce,t)}catch{}}var Fe=Math.clz32?Math.clz32:He,we=Math.log,Ze=Math.LN2;function He(t){return t>>>=0,t===0?32:31-(we(t)/Ze|0)|0}var Ne=256,ze=4194304;function et(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Je(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~f,o!==0?u=et(o):(E&=w,E!==0?u=et(E):a||(a=w&~t,a!==0&&(u=et(a))))):(w=o&~f,w!==0?u=et(w):E!==0?u=et(E):a||(a=o&~t,a!==0&&(u=et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Be(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var t=Ne;return Ne<<=1,(Ne&4194048)===0&&(Ne=256),t}function Le(){var t=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),t}function Oe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ue(t,n,a,o,u,f){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,F=t.expirationTimes,re=t.hiddenUpdates;for(a=E&~a;0<a;){var Ee=31-Fe(a),Re=1<<Ee;w[Ee]=0,F[Ee]=-1;var ue=re[Ee];if(ue!==null)for(re[Ee]=null,Ee=0;Ee<ue.length;Ee++){var he=ue[Ee];he!==null&&(he.lane&=-536870913)}a&=~Re}o!==0&&Ae(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(E&~n))}function Ae(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Qe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function V(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Me(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:b_(t.type))}function ht(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var pt=Math.random().toString(36).slice(2),Tt="__reactFiber$"+pt,mt="__reactProps$"+pt,Xn="__reactContainer$"+pt,Pn="__reactEvents$"+pt,zn="__reactListeners$"+pt,Vi="__reactHandles$"+pt,es="__reactResources$"+pt,Ui="__reactMarker$"+pt;function Ls(t){delete t[Tt],delete t[mt],delete t[Pn],delete t[zn],delete t[Vi]}function ki(t){var n=t[Tt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[Tt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=c_(t);t!==null;){if(a=t[Tt])return a;t=c_(t)}return n}t=a,a=t.parentNode}return null}function _a(t){if(t=t[Tt]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function ts(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function va(t){var n=t[es];return n||(n=t[es]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ui]=!0}var il=new Set,al={};function N(t,n){$(t,n),$(t+"Capture",n)}function $(t,n){for(al[t]=n,t=0;t<n.length;t++)il.add(n[t])}var pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),me={},te={};function Pe(t){return Nt.call(te,t)?!0:Nt.call(me,t)?!1:pe.test(t)?te[t]=!0:(me[t]=!0,!1)}function Ge(t,n,a){if(Pe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ke(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var st,lt;function tt(t){if(st===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);st=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+t+lt}var xt=!1;function Lt(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(he){var ue=he}Reflect.construct(t,[],Re)}else{try{Re.call()}catch(he){ue=he}t.call(Re.prototype)}}else{try{throw Error()}catch(he){ue=he}(Re=t())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(he){if(he&&ue&&typeof he.stack=="string")return[he.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),E=f[0],w=f[1];if(E&&w){var F=E.split(`
`),re=w.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===re.length)for(o=F.length-1,u=re.length-1;1<=o&&0<=u&&F[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==re[u]){var Ee=`
`+F[o].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?tt(a):""}function $t(t){switch(t.tag){case 26:case 27:case 5:return tt(t.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return Lt(t.type,!1);case 11:return Lt(t.type.render,!1);case 1:return Lt(t.type,!0);case 31:return tt("Activity");default:return""}}function Vt(t){try{var n="";do n+=$t(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function at(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t){var n=at(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,f.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Jt(t))}function wn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=at(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function yn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zt(t,n,a,o,u,f,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+yt(n)):t.value!==""+yt(n)&&(t.value=""+yt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Dn(t,E,yt(n)):a!=null?Dn(t,E,yt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+yt(w):t.removeAttribute("name")}function Bn(t,n,a,o,u,f,E,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Dn(t,n,a){n==="number"&&Mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tn(t,n,a){if(n!=null&&(n=""+yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+yt(a):""}function Os(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ae(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function qn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Yv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ap(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Yv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function sp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ap(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&ap(t,f,n[f])}function lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(t){return Kv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ps=null,zs=null;function rp(t){var n=_a(t);if(n&&(t=n.stateNode)){var a=t[mt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Zt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mt]||null;if(!u)throw Error(s(90));Zt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&wn(o)}break e;case"textarea":Tn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var fu=!1;function op(t,n,a){if(fu)return t(n,a);fu=!0;try{var o=t(n);return o}finally{if(fu=!1,(Ps!==null||zs!==null)&&(kl(),Ps&&(n=Ps,t=zs,zs=Ps=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function Gr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(Xi)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{hu=!1}var xa=null,du=null,rl=null;function lp(){if(rl)return rl;var t,n=du,a=n.length,o,u="value"in xa?xa.value:xa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[f-o];o++);return rl=u.slice(t,1<o?1-o:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function cp(){return!1}function Wn(t){function n(a,o,u,f,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:cp,this.isPropagationStopped=cp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Wn(ns),kr=v({},ns,{view:0,detail:0}),Qv=Wn(kr),pu,mu,Xr,ul=v({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xr&&(Xr&&t.type==="mousemove"?(pu=t.screenX-Xr.screenX,mu=t.screenY-Xr.screenY):mu=pu=0,Xr=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),up=Wn(ul),Jv=v({},ul,{dataTransfer:0}),$v=Wn(Jv),ex=v({},kr,{relatedTarget:0}),gu=Wn(ex),tx=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=Wn(tx),ix=v({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ax=Wn(ix),sx=v({},ns,{data:0}),fp=Wn(sx),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=lx[t])?!!n[t]:!1}function _u(){return cx}var ux=v({},kr,{key:function(t){if(t.key){var n=rx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ox[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fx=Wn(ux),hx=v({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Wn(hx),dx=v({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),px=Wn(dx),mx=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=Wn(mx),_x=v({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=Wn(_x),xx=v({},ns,{newState:0,oldState:0}),yx=Wn(xx),Sx=[9,13,27,32],vu=Xi&&"CompositionEvent"in window,qr=null;Xi&&"documentMode"in document&&(qr=document.documentMode);var Mx=Xi&&"TextEvent"in window&&!qr,dp=Xi&&(!vu||qr&&8<qr&&11>=qr),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return Sx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function Ex(t,n){switch(t){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function bx(t,n){if(Is)return t==="compositionend"||!vu&&gp(t,n)?(t=lp(),rl=du=xa=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Tx[t.type]:n==="textarea"}function xp(t,n,a,o){Ps?zs?zs.push(o):zs=[o]:Ps=o,n=Kl(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Wr=null,Yr=null;function Ax(t){$g(t,0)}function fl(t){var n=ts(t);if(wn(n))return t}function yp(t,n){if(t==="change")return n}var Sp=!1;if(Xi){var xu;if(Xi){var yu="oninput"in document;if(!yu){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),yu=typeof Mp.oninput=="function"}xu=yu}else xu=!1;Sp=xu&&(!document.documentMode||9<document.documentMode)}function Ep(){Wr&&(Wr.detachEvent("onpropertychange",bp),Yr=Wr=null)}function bp(t){if(t.propertyName==="value"&&fl(Yr)){var n=[];xp(n,Yr,t,uu(t)),op(Ax,n)}}function Rx(t,n,a){t==="focusin"?(Ep(),Wr=n,Yr=a,Wr.attachEvent("onpropertychange",bp)):t==="focusout"&&Ep()}function Cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Yr)}function wx(t,n){if(t==="click")return fl(n)}function Dx(t,n){if(t==="input"||t==="change")return fl(n)}function Nx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Nx;function Zr(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Nt.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mi(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ux=Xi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Mu=null,Kr=null,Eu=!1;function wp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||Bs==null||Bs!==Mi(o)||(o=Bs,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Kr&&Zr(Kr,o)||(Kr=o,o=Kl(Mu,"onSelect"),0<o.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Bs)))}function is(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Fs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},bu={},Dp={};Xi&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function as(t){if(bu[t])return bu[t];if(!Fs[t])return t;var n=Fs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return bu[t]=n[a];return t}var Np=as("animationend"),Up=as("animationiteration"),Lp=as("animationstart"),Lx=as("transitionrun"),Ox=as("transitionstart"),Px=as("transitioncancel"),Op=as("transitionend"),Pp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Ei(t,n){Pp.set(t,n),N(n,[t])}var zp=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=zp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Vt(n)},zp.set(t,n),n)}return{value:t,source:n,stack:Vt(n)}}var hi=[],Hs=0,Au=0;function hl(){for(var t=Hs,n=Au=Hs=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}f!==0&&Ip(a,u,f)}}function dl(t,n,a,o){hi[Hs++]=t,hi[Hs++]=n,hi[Hs++]=a,hi[Hs++]=o,Au|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ru(t,n,a,o){return dl(t,n,a,o),pl(t)}function js(t,n){return dl(t,null,null,n),pl(t)}function Ip(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function pl(t){if(50<Mo)throw Mo=0,Of=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function zx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,n,a,o){return new zx(t,n,a,o)}function Cu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var a=t.alternate;return a===null?(a=ni(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ml(t,n,a,o,u,f){var E=0;if(o=t,typeof t=="function")Cu(t)&&(E=1);else if(typeof t=="string")E=By(t,a,de.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case T:return t=ni(31,a,n,u),t.elementType=T,t.lanes=f,t;case M:return ss(a.children,u,f,n);case C:E=8,u|=24;break;case x:return t=ni(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=ni(13,a,n,u),t.elementType=B,t.lanes=f,t;case G:return t=ni(19,a,n,u),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case O:E=10;break e;case I:E=9;break e;case U:E=11;break e;case j:E=14;break e;case K:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ni(E,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ss(t,n,a,o){return t=ni(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=ni(6,t,null,n),t.lanes=a,t}function Du(t,n,a){return n=ni(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vs=[],ks=0,gl=null,_l=0,di=[],pi=0,rs=null,Wi=1,Yi="";function os(t,n){Vs[ks++]=_l,Vs[ks++]=gl,gl=t,_l=n}function Fp(t,n,a){di[pi++]=Wi,di[pi++]=Yi,di[pi++]=rs,rs=t;var o=Wi;t=Yi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var E=u-u%5;f=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Wi=1<<32-Fe(n)+u|a<<u|o,Yi=f+t}else Wi=1<<f|a<<u|o,Yi=t}function Nu(t){t.return!==null&&(os(t,1),Fp(t,1,0))}function Uu(t){for(;t===gl;)gl=Vs[--ks],Vs[ks]=null,_l=Vs[--ks],Vs[ks]=null;for(;t===rs;)rs=di[--pi],di[pi]=null,Yi=di[--pi],di[pi]=null,Wi=di[--pi],di[pi]=null}var Fn=null,rn=null,Bt=!1,ls=null,Li=!1,Lu=Error(s(519));function cs(t){var n=Error(s(418,""));throw $r(fi(n,t)),Lu}function Hp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Tt]=t,n[mt]=o,a){case"dialog":Dt("cancel",n),Dt("close",n);break;case"iframe":case"object":case"embed":Dt("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)Dt(bo[a],n);break;case"source":Dt("error",n);break;case"img":case"image":case"link":Dt("error",n),Dt("load",n);break;case"details":Dt("toggle",n);break;case"input":Dt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ct(n);break;case"select":Dt("invalid",n);break;case"textarea":Dt("invalid",n),Os(n,o.value,o.defaultValue,o.children),Ct(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||i_(n.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",n),Dt("toggle",n)),o.onScroll!=null&&Dt("scroll",n),o.onScrollEnd!=null&&Dt("scrollend",n),o.onClick!=null&&(n.onclick=Ql),n=!0):n=!1,n||cs(t)}function jp(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fn=Fn.return}}function Qr(t){if(t!==Fn)return!1;if(!Bt)return jp(t),Bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&rn&&cs(t),jp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){rn=Ti(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}rn=null}}else n===27?(n=rn,Pa(t.type)?(t=eh,eh=null,rn=t):rn=n):rn=Fn?Ti(t.stateNode.nextSibling):null;return!0}function Jr(){rn=Fn=null,Bt=!1}function Gp(){var t=ls;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),ls=null),t}function $r(t){ls===null?ls=[t]:ls.push(t)}var Ou=Q(null),us=null,Zi=null;function ya(t,n,a){xe(Ou,n._currentValue),n._currentValue=a}function Ki(t){t._currentValue=Ou.current,fe(Ou)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var E=u.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=u;for(var F=0;F<n.length;F++)if(w.context===n[F]){f.lanes|=a,w=f.alternate,w!==null&&(w.lanes|=a),Pu(f.return,a,t),o||(E=null);break e}f=w.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,f=E.alternate,f!==null&&(f.lanes|=a),Pu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function eo(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var w=u.type;ti(u.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(u===_e.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}u=u.return}t!==null&&zu(n,t,a,o),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fs(t){us=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Vp(us,t)}function xl(t,n){return us===null&&fs(t),Vp(t,n)}function Vp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(t===null)throw Error(s(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return a}var Ix=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Bx=r.unstable_scheduleCallback,Fx=r.unstable_NormalPriority,mn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Iu(){return{controller:new Ix,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&Bx(Fx,function(){t.controller.abort()})}var no=null,Bu=0,Xs=0,qs=null;function Hx(t,n){if(no===null){var a=no=[];Bu=0,Xs=jf(),qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bu++,n.then(kp,kp),n}function kp(){if(--Bu===0&&no!==null){qs!==null&&(qs.status="fulfilled");var t=no;no=null,Xs=0,qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function jx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Xp=P.S;P.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hx(t,n),Xp!==null&&Xp(t,n)};var hs=Q(null);function Fu(){var t=hs.current;return t!==null?t:Qt.pooledCache}function yl(t,n){n===null?xe(hs,hs.current):xe(hs,n.pool)}function qp(){var t=Fu();return t===null?null:{parent:mn._currentValue,pool:t}}var io=Error(s(460)),Wp=Error(s(474)),Sl=Error(s(542)),Hu={then:function(){}};function Yp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ml(){}function Zp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ml,Ml),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t;default:if(typeof n.status=="string")n.then(Ml,Ml);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Qp(t),t}throw ao=n,io}}var ao=null;function Kp(){if(ao===null)throw Error(s(459));var t=ao;return ao=null,t}function Qp(t){if(t===io||t===Sl)throw Error(s(483))}var Sa=!1;function ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ht&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=pl(t),Ip(t,null,a),n}return dl(t,o,n,a),pl(t)}function so(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qe(t,a)}}function Vu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=E:f=f.next=E,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ku=!1;function ro(){if(ku){var t=qs;if(t!==null)throw t}}function oo(t,n,a,o){ku=!1;var u=t.updateQueue;Sa=!1;var f=u.firstBaseUpdate,E=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var F=w,re=F.next;F.next=null,E===null?f=re:E.next=re,E=F;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,w=Ee.lastBaseUpdate,w!==E&&(w===null?Ee.firstBaseUpdate=re:w.next=re,Ee.lastBaseUpdate=F))}if(f!==null){var Re=u.baseState;E=0,Ee=re=F=null,w=f;do{var ue=w.lane&-536870913,he=ue!==w.lane;if(he?(Ut&ue)===ue:(o&ue)===ue){ue!==0&&ue===Xs&&(ku=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ft=t,rt=w;ue=n;var qt=a;switch(rt.tag){case 1:if(ft=rt.payload,typeof ft=="function"){Re=ft.call(qt,Re,ue);break e}Re=ft;break e;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=rt.payload,ue=typeof ft=="function"?ft.call(qt,Re,ue):ft,ue==null)break e;Re=v({},Re,ue);break e;case 2:Sa=!0}}ue=w.callback,ue!==null&&(t.flags|=64,he&&(t.flags|=8192),he=u.callbacks,he===null?u.callbacks=[ue]:he.push(ue))}else he={lane:ue,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Ee===null?(re=Ee=he,F=Re):Ee=Ee.next=he,E|=ue;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;he=w,w=he.next,he.next=null,u.lastBaseUpdate=he,u.shared.pending=null}}while(!0);Ee===null&&(F=Re),u.baseState=F,u.firstBaseUpdate=re,u.lastBaseUpdate=Ee,f===null&&(u.shared.lanes=0),Na|=E,t.lanes=E,t.memoizedState=Re}}function Jp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function $p(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Jp(a[t],n)}var Ws=Q(null),El=Q(0);function em(t,n){t=ia,xe(El,t),xe(Ws,n),ia=t|n.baseLanes}function Xu(){xe(El,ia),xe(Ws,Ws.current)}function qu(){ia=El.current,fe(Ws),fe(El)}var ba=0,bt=null,kt=null,hn=null,bl=!1,Ys=!1,ds=!1,Tl=0,lo=0,Zs=null,Gx=0;function ln(){throw Error(s(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Yu(t,n,a,o,u,f){return ba=f,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Im:Bm,ds=!1,f=a(o,u),ds=!1,Ys&&(f=nm(n,a,o,u)),tm(t),f}function tm(t){P.H=Nl;var n=kt!==null&&kt.next!==null;if(ba=0,hn=kt=bt=null,bl=!1,lo=0,Zs=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&vl(t)&&(Sn=!0))}function nm(t,n,a,o){bt=t;var u=0;do{if(Ys&&(Zs=null),lo=0,Ys=!1,25<=u)throw Error(s(301));if(u+=1,hn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Zx,f=n(a,o)}while(Ys);return f}function Vx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?co(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(bt.flags|=1024),n}function Zu(){var t=Tl!==0;return Tl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}bl=!1}ba=0,hn=kt=bt=null,Ys=!1,lo=Tl=0,Zs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?bt.memoizedState=hn=t:hn=hn.next=t,hn}function dn(){if(kt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=hn===null?bt.memoizedState:hn.next;if(n!==null)hn=n,kt=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},hn===null?bt.memoizedState=hn=t:hn=hn.next=t}return hn}function Ju(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var n=lo;return lo+=1,Zs===null&&(Zs=[]),t=Zp(Zs,t,n),n=bt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Im:Bm),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===O)return Nn(t)}throw Error(s(438,String(t)))}function $u(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ju(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function Qi(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=dn();return ef(n,kt,t)}function ef(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var E=u.next;u.next=f.next,f.next=E}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var w=E=null,F=null,re=n,Ee=!1;do{var Re=re.lane&-536870913;if(Re!==re.lane?(Ut&Re)===Re:(ba&Re)===Re){var ue=re.revertLane;if(ue===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),Re===Xs&&(Ee=!0);else if((ba&ue)===ue){re=re.next,ue===Xs&&(Ee=!0);continue}else Re={lane:0,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},F===null?(w=F=Re,E=f):F=F.next=Re,bt.lanes|=ue,Na|=ue;Re=re.action,ds&&a(f,Re),f=re.hasEagerState?re.eagerState:a(f,Re)}else ue={lane:Re,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},F===null?(w=F=ue,E=f):F=F.next=ue,bt.lanes|=Re,Na|=Re;re=re.next}while(re!==null&&re!==n);if(F===null?E=f:F.next=w,!ti(f,t.memoizedState)&&(Sn=!0,Ee&&(a=qs,a!==null)))throw a;t.memoizedState=f,t.baseState=E,t.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function tf(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do f=t(f,E.action),E=E.next;while(E!==u);ti(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function im(t,n,a){var o=bt,u=dn(),f=Bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!ti((kt||u).memoizedState,a);E&&(u.memoizedState=a,Sn=!0),u=u.queue;var w=rm.bind(null,o,u,t);if(uo(2048,8,w,[t]),u.getSnapshot!==n||E||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,Ks(9,Cl(),sm.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));f||(ba&124)!==0||am(o,n,a)}return a}function am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Ju(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function sm(t,n,a,o){n.value=a,n.getSnapshot=o,om(n)&&lm(t)}function rm(t,n,a){return a(function(){om(n)&&lm(t)})}function om(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function lm(t){var n=js(t,2);n!==null&&oi(n,t,2)}function nf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),ds){oe(!0);try{a()}finally{oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},n}function cm(t,n,a,o){return t.baseState=a,ef(t,kt,typeof o=="function"?o:Qi)}function kx(t,n,a,o,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){f.listeners.push(E)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,um(n,f)):(f.next=a.next,n.pending=a.next=f)}}function um(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,E={};P.T=E;try{var w=a(u,o),F=P.S;F!==null&&F(E,w),fm(t,n,w)}catch(re){af(t,n,re)}finally{P.T=f}}else try{f=a(u,o),fm(t,n,f)}catch(re){af(t,n,re)}}function fm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){hm(t,n,o)},function(o){return af(t,n,o)}):hm(t,n,a)}function hm(t,n,a){n.status="fulfilled",n.value=a,dm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,um(t,a)))}function af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,dm(n),n=n.next;while(n!==o)}t.action=null}function dm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function pm(t,n){return n}function mm(t,n){if(Bt){var a=Qt.formState;if(a!==null){e:{var o=bt;if(Bt){if(rn){t:{for(var u=rn,f=Li;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ti(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){rn=Ti(u.nextSibling),o=u.data==="F!";break e}}cs(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pm,lastRenderedState:n},a.queue=o,a=Om.bind(null,bt,o),o.dispatch=a,o=nf(!1),f=cf.bind(null,bt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=kx.bind(null,bt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function gm(t){var n=dn();return _m(n,kt,t)}function _m(t,n,a){if(n=ef(t,n,pm)[0],t=Rl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(E){throw E===io?Sl:E}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,Ks(9,Cl(),Xx.bind(null,u,a),null)),[o,f,t]}function Xx(t,n){t.action=n}function vm(t){var n=dn(),a=kt;if(a!==null)return _m(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Ks(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Ju(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Cl(){return{destroy:void 0,resource:void 0}}function xm(){return dn().memoizedState}function wl(t,n,a,o){var u=Yn();o=o===void 0?null:o,bt.flags|=t,u.memoizedState=Ks(1|n,Cl(),a,o)}function uo(t,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;kt!==null&&o!==null&&Wu(o,kt.memoizedState.deps)?u.memoizedState=Ks(n,f,a,o):(bt.flags|=t,u.memoizedState=Ks(1|n,f,a,o))}function ym(t,n){wl(8390656,8,t,n)}function Sm(t,n){uo(2048,8,t,n)}function Mm(t,n){return uo(4,2,t,n)}function Em(t,n){return uo(4,4,t,n)}function bm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Tm(t,n,a){a=a!=null?a.concat([t]):null,uo(4,4,bm.bind(null,n,t),a)}function sf(){}function Am(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Rm(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=t(),ds){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[o,n],o}function rf(t,n,a){return a===void 0||(ba&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Dg(),bt.lanes|=t,Na|=t,a)}function Cm(t,n,a,o){return ti(a,n)?a:Ws.current!==null?(t=rf(t,a,o),ti(t,n)||(Sn=!0),t):(ba&42)===0?(Sn=!0,t.memoizedState=a):(t=Dg(),bt.lanes|=t,Na|=t,n)}function wm(t,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var E=P.T,w={};P.T=w,cf(t,!1,n,a);try{var F=u(),re=P.S;if(re!==null&&re(w,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var Ee=jx(F,o);fo(t,n,Ee,ri(t))}else fo(t,n,o,ri(t))}catch(Re){fo(t,n,{then:function(){},status:"rejected",reason:Re},ri())}finally{Z.p=f,P.T=E}}function qx(){}function of(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Dm(t).queue;wm(t,u,n,k,a===null?qx:function(){return Nm(t),a(o)})}function Dm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Nm(t){var n=Dm(t).next.queue;fo(t,n,{},ri())}function lf(){return Nn(Do)}function Um(){return dn().memoizedState}function Lm(){return dn().memoizedState}function Wx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Ma(a);var o=Ea(n,t,a);o!==null&&(oi(o,n,a),so(o,n,a)),n={cache:Iu()},t.payload=n;return}n=n.return}}function Yx(t,n,a){var o=ri();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?Pm(n,a):(a=Ru(t,n,a,o),a!==null&&(oi(a,t,o),zm(a,n,o)))}function Om(t,n,a){var o=ri();fo(t,n,a,o)}function fo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))Pm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var E=n.lastRenderedState,w=f(E,a);if(u.hasEagerState=!0,u.eagerState=w,ti(w,E))return dl(t,n,u,0),Qt===null&&hl(),!1}catch{}finally{}if(a=Ru(t,n,u,o),a!==null)return oi(a,t,o),zm(a,n,o),!0}return!1}function cf(t,n,a,o){if(o={lane:2,revertLane:jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=Ru(t,a,o,2),n!==null&&oi(n,t,2)}function Dl(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function Pm(t,n){Ys=bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function zm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Qe(t,a)}}var Nl={readContext:Nn,use:Al,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},Im={readContext:Nn,use:Al,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:ym,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,wl(4194308,4,bm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return wl(4194308,4,t,n)},useInsertionEffect:function(t,n){wl(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(ds){oe(!0);try{t()}finally{oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(ds){oe(!0);try{a(n)}finally{oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Yx.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,a=Om.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:sf,useDeferredValue:function(t,n){var a=Yn();return rf(a,t,n)},useTransition:function(){var t=nf(!1);return t=wm.bind(null,bt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=Yn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(Ut&124)!==0||am(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(rm.bind(null,o,f,t),[t]),o.flags|=2048,Ks(9,Cl(),sm.bind(null,o,f,a,n),null),a},useId:function(){var t=Yn(),n=Qt.identifierPrefix;if(Bt){var a=Yi,o=Wi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Gx++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:lf,useFormState:mm,useActionState:mm,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return Yn().memoizedState=Wx.bind(null,bt)}},Bm={readContext:Nn,use:Al,useCallback:Am,useContext:Nn,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:Rl,useRef:xm,useState:function(){return Rl(Qi)},useDebugValue:sf,useDeferredValue:function(t,n){var a=dn();return Cm(a,kt.memoizedState,t,n)},useTransition:function(){var t=Rl(Qi)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:im,useId:Um,useHostTransitionStatus:lf,useFormState:gm,useActionState:gm,useOptimistic:function(t,n){var a=dn();return cm(a,kt,t,n)},useMemoCache:$u,useCacheRefresh:Lm},Zx={readContext:Nn,use:Al,useCallback:Am,useContext:Nn,useEffect:Sm,useImperativeHandle:Tm,useInsertionEffect:Mm,useLayoutEffect:Em,useMemo:Rm,useReducer:tf,useRef:xm,useState:function(){return tf(Qi)},useDebugValue:sf,useDeferredValue:function(t,n){var a=dn();return kt===null?rf(a,t,n):Cm(a,kt.memoizedState,t,n)},useTransition:function(){var t=tf(Qi)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:co(t),n]},useSyncExternalStore:im,useId:Um,useHostTransitionStatus:lf,useFormState:vm,useActionState:vm,useOptimistic:function(t,n){var a=dn();return kt!==null?cm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Lm},Qs=null,ho=0;function Ul(t){var n=ho;return ho+=1,Qs===null&&(Qs=[]),Zp(Qs,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ll(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){var n=t._init;return n(t._payload)}function Hm(t){function n(ee,W){if(t){var se=ee.deletions;se===null?(ee.deletions=[W],ee.flags|=16):se.push(W)}}function a(ee,W){if(!t)return null;for(;W!==null;)n(ee,W),W=W.sibling;return null}function o(ee){for(var W=new Map;ee!==null;)ee.key!==null?W.set(ee.key,ee):W.set(ee.index,ee),ee=ee.sibling;return W}function u(ee,W){return ee=qi(ee,W),ee.index=0,ee.sibling=null,ee}function f(ee,W,se){return ee.index=se,t?(se=ee.alternate,se!==null?(se=se.index,se<W?(ee.flags|=67108866,W):se):(ee.flags|=67108866,W)):(ee.flags|=1048576,W)}function E(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function w(ee,W,se,Te){return W===null||W.tag!==6?(W=wu(se,ee.mode,Te),W.return=ee,W):(W=u(W,se),W.return=ee,W)}function F(ee,W,se,Te){var $e=se.type;return $e===M?Ee(ee,W,se.props.children,Te,se.key):W!==null&&(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&Fm($e)===W.type)?(W=u(W,se.props),po(W,se),W.return=ee,W):(W=ml(se.type,se.key,se.props,null,ee.mode,Te),po(W,se),W.return=ee,W)}function re(ee,W,se,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=Du(se,ee.mode,Te),W.return=ee,W):(W=u(W,se.children||[]),W.return=ee,W)}function Ee(ee,W,se,Te,$e){return W===null||W.tag!==7?(W=ss(se,ee.mode,Te,$e),W.return=ee,W):(W=u(W,se),W.return=ee,W)}function Re(ee,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=wu(""+W,ee.mode,se),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return se=ml(W.type,W.key,W.props,null,ee.mode,se),po(se,W),se.return=ee,se;case b:return W=Du(W,ee.mode,se),W.return=ee,W;case K:var Te=W._init;return W=Te(W._payload),Re(ee,W,se)}if(ae(W)||ne(W))return W=ss(W,ee.mode,se,null),W.return=ee,W;if(typeof W.then=="function")return Re(ee,Ul(W),se);if(W.$$typeof===O)return Re(ee,xl(ee,W),se);Ll(ee,W)}return null}function ue(ee,W,se,Te){var $e=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return $e!==null?null:w(ee,W,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case y:return se.key===$e?F(ee,W,se,Te):null;case b:return se.key===$e?re(ee,W,se,Te):null;case K:return $e=se._init,se=$e(se._payload),ue(ee,W,se,Te)}if(ae(se)||ne(se))return $e!==null?null:Ee(ee,W,se,Te,null);if(typeof se.then=="function")return ue(ee,W,Ul(se),Te);if(se.$$typeof===O)return ue(ee,W,xl(ee,se),Te);Ll(ee,se)}return null}function he(ee,W,se,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number"||typeof Te=="bigint")return ee=ee.get(se)||null,w(W,ee,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case y:return ee=ee.get(Te.key===null?se:Te.key)||null,F(W,ee,Te,$e);case b:return ee=ee.get(Te.key===null?se:Te.key)||null,re(W,ee,Te,$e);case K:var At=Te._init;return Te=At(Te._payload),he(ee,W,se,Te,$e)}if(ae(Te)||ne(Te))return ee=ee.get(se)||null,Ee(W,ee,Te,$e,null);if(typeof Te.then=="function")return he(ee,W,se,Ul(Te),$e);if(Te.$$typeof===O)return he(ee,W,se,xl(W,Te),$e);Ll(W,Te)}return null}function ft(ee,W,se,Te){for(var $e=null,At=null,nt=W,ct=W=0,En=null;nt!==null&&ct<se.length;ct++){nt.index>ct?(En=nt,nt=null):En=nt.sibling;var Ot=ue(ee,nt,se[ct],Te);if(Ot===null){nt===null&&(nt=En);break}t&&nt&&Ot.alternate===null&&n(ee,nt),W=f(Ot,W,ct),At===null?$e=Ot:At.sibling=Ot,At=Ot,nt=En}if(ct===se.length)return a(ee,nt),Bt&&os(ee,ct),$e;if(nt===null){for(;ct<se.length;ct++)nt=Re(ee,se[ct],Te),nt!==null&&(W=f(nt,W,ct),At===null?$e=nt:At.sibling=nt,At=nt);return Bt&&os(ee,ct),$e}for(nt=o(nt);ct<se.length;ct++)En=he(nt,ee,ct,se[ct],Te),En!==null&&(t&&En.alternate!==null&&nt.delete(En.key===null?ct:En.key),W=f(En,W,ct),At===null?$e=En:At.sibling=En,At=En);return t&&nt.forEach(function(Ha){return n(ee,Ha)}),Bt&&os(ee,ct),$e}function rt(ee,W,se,Te){if(se==null)throw Error(s(151));for(var $e=null,At=null,nt=W,ct=W=0,En=null,Ot=se.next();nt!==null&&!Ot.done;ct++,Ot=se.next()){nt.index>ct?(En=nt,nt=null):En=nt.sibling;var Ha=ue(ee,nt,Ot.value,Te);if(Ha===null){nt===null&&(nt=En);break}t&&nt&&Ha.alternate===null&&n(ee,nt),W=f(Ha,W,ct),At===null?$e=Ha:At.sibling=Ha,At=Ha,nt=En}if(Ot.done)return a(ee,nt),Bt&&os(ee,ct),$e;if(nt===null){for(;!Ot.done;ct++,Ot=se.next())Ot=Re(ee,Ot.value,Te),Ot!==null&&(W=f(Ot,W,ct),At===null?$e=Ot:At.sibling=Ot,At=Ot);return Bt&&os(ee,ct),$e}for(nt=o(nt);!Ot.done;ct++,Ot=se.next())Ot=he(nt,ee,ct,Ot.value,Te),Ot!==null&&(t&&Ot.alternate!==null&&nt.delete(Ot.key===null?ct:Ot.key),W=f(Ot,W,ct),At===null?$e=Ot:At.sibling=Ot,At=Ot);return t&&nt.forEach(function(Ky){return n(ee,Ky)}),Bt&&os(ee,ct),$e}function qt(ee,W,se,Te){if(typeof se=="object"&&se!==null&&se.type===M&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case y:e:{for(var $e=se.key;W!==null;){if(W.key===$e){if($e=se.type,$e===M){if(W.tag===7){a(ee,W.sibling),Te=u(W,se.props.children),Te.return=ee,ee=Te;break e}}else if(W.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&Fm($e)===W.type){a(ee,W.sibling),Te=u(W,se.props),po(Te,se),Te.return=ee,ee=Te;break e}a(ee,W);break}else n(ee,W);W=W.sibling}se.type===M?(Te=ss(se.props.children,ee.mode,Te,se.key),Te.return=ee,ee=Te):(Te=ml(se.type,se.key,se.props,null,ee.mode,Te),po(Te,se),Te.return=ee,ee=Te)}return E(ee);case b:e:{for($e=se.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(ee,W.sibling),Te=u(W,se.children||[]),Te.return=ee,ee=Te;break e}else{a(ee,W);break}else n(ee,W);W=W.sibling}Te=Du(se,ee.mode,Te),Te.return=ee,ee=Te}return E(ee);case K:return $e=se._init,se=$e(se._payload),qt(ee,W,se,Te)}if(ae(se))return ft(ee,W,se,Te);if(ne(se)){if($e=ne(se),typeof $e!="function")throw Error(s(150));return se=$e.call(se),rt(ee,W,se,Te)}if(typeof se.then=="function")return qt(ee,W,Ul(se),Te);if(se.$$typeof===O)return qt(ee,W,xl(ee,se),Te);Ll(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(ee,W.sibling),Te=u(W,se),Te.return=ee,ee=Te):(a(ee,W),Te=wu(se,ee.mode,Te),Te.return=ee,ee=Te),E(ee)):a(ee,W)}return function(ee,W,se,Te){try{ho=0;var $e=qt(ee,W,se,Te);return Qs=null,$e}catch(nt){if(nt===io||nt===Sl)throw nt;var At=ni(29,nt,null,ee.mode);return At.lanes=Te,At.return=ee,At}finally{}}}var Js=Hm(!0),jm=Hm(!1),mi=Q(null),Oi=null;function Ta(t){var n=t.alternate;xe(gn,gn.current&1),xe(mi,t),Oi===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(Oi=t)}function Gm(t){if(t.tag===22){if(xe(gn,gn.current),xe(mi,t),Oi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Oi=t)}}else Aa()}function Aa(){xe(gn,gn.current),xe(mi,mi.current)}function Ji(t){fe(mi),Oi===t&&(Oi=null),fe(gn)}var gn=Q(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||$f(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function uf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ma(o);u.payload=n,a!=null&&(u.callback=a),n=Ea(t,u,o),n!==null&&(oi(n,t,o),so(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),u=Ma(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ea(t,u,o),n!==null&&(oi(n,t,o),so(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(t,o,a),n!==null&&(oi(n,t,a),so(n,t,a))}};function Vm(t,n,a,o,u,f,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,E):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,o)||!Zr(u,f):!0}function km(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&ff.enqueueReplaceState(n,n.state,null)}function ps(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Xm(t){Pl(t)}function qm(t){console.error(t)}function Wm(t){Pl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function Zm(t){return t=Ma(t),t.tag=3,t}function Km(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Kx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=mi.current,a!==null){switch(a.tag){case 13:return Oi===null?zf():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(t,o,u)),!1;case 22:return a.flags|=65536,o===Hu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(t,o,u)),!1}throw Error(s(435,a.tag))}return Bf(t,o,u),zf(),!1}if(Bt)return n=mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Lu&&(t=Error(s(422),{cause:o}),$r(fi(t,a)))):(o!==Lu&&(n=Error(s(423),{cause:o}),$r(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=hf(t.stateNode,o,u),Vu(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),So===null?So=[f]:So.push(f),on!==4&&(on=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,o,t),Vu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ua===null||!Ua.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Km(u,t,a,o),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var Qm=Error(s(461)),Sn=!1;function An(t,n,a,o){n.child=t===null?jm(n,null,a,o):Js(n,t.child,a,o)}function Jm(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var E={};for(var w in o)w!=="ref"&&(E[w]=o[w])}else E=o;return fs(n),o=Yu(t,n,a,E,f,u),w=Zu(),t!==null&&!Sn?(Ku(t,n,u),$i(t,n,u)):(Bt&&w&&Nu(n),n.flags|=1,An(t,n,o,u),n.child)}function $m(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Cu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,eg(t,n,f,o,u)):(t=ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var E=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(E,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=qi(f,o),t.ref=n.ref,t.return=n,n.child=t}function eg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(Zr(f,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,yf(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return df(t,n,a,o,u)}function tg(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return ng(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&yl(n,f!==null?f.cachePool:null),f!==null?em(n,f):Xu(),Gm(n);else return n.lanes=n.childLanes=536870912,ng(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(yl(n,f.cachePool),em(n,f),Aa(),n.memoizedState=null):(t!==null&&yl(n,null),Xu(),Aa());return An(t,n,u,a),n.child}function ng(t,n,a,o){var u=Fu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&yl(n,null),Xu(),Gm(n),t!==null&&eo(t,n,o,!0),null}function Il(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,o,u){return fs(n),a=Yu(t,n,a,o,void 0,u),o=Zu(),t!==null&&!Sn?(Ku(t,n,u),$i(t,n,u)):(Bt&&o&&Nu(n),n.flags|=1,An(t,n,a,u),n.child)}function ig(t,n,a,o,u,f){return fs(n),n.updateQueue=null,a=nm(n,o,a,u),tm(t),o=Zu(),t!==null&&!Sn?(Ku(t,n,f),$i(t,n,f)):(Bt&&o&&Nu(n),n.flags|=1,An(t,n,a,f),n.child)}function ag(t,n,a,o,u){if(fs(n),n.stateNode===null){var f=Gs,E=a.contextType;typeof E=="object"&&E!==null&&(f=Nn(E)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ju(n),E=a.contextType,f.context=typeof E=="object"&&E!==null?Nn(E):Gs,f.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(uf(n,a,E,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(E=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),E!==f.state&&ff.enqueueReplaceState(f,f.state,null),oo(n,o,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var w=n.memoizedProps,F=ps(a,w);f.props=F;var re=f.context,Ee=a.contextType;E=Gs,typeof Ee=="object"&&Ee!==null&&(E=Nn(Ee));var Re=a.getDerivedStateFromProps;Ee=typeof Re=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,Ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||re!==E)&&km(n,f,o,E),Sa=!1;var ue=n.memoizedState;f.state=ue,oo(n,o,f,u),ro(),re=n.memoizedState,w||ue!==re||Sa?(typeof Re=="function"&&(uf(n,a,Re,o),re=n.memoizedState),(F=Sa||Vm(n,a,F,o,ue,re,E))?(Ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),f.props=o,f.state=re,f.context=E,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gu(t,n),E=n.memoizedProps,Ee=ps(a,E),f.props=Ee,Re=n.pendingProps,ue=f.context,re=a.contextType,F=Gs,typeof re=="object"&&re!==null&&(F=Nn(re)),w=a.getDerivedStateFromProps,(re=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==Re||ue!==F)&&km(n,f,o,F),Sa=!1,ue=n.memoizedState,f.state=ue,oo(n,o,f,u),ro();var he=n.memoizedState;E!==Re||ue!==he||Sa||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof w=="function"&&(uf(n,a,w,o),he=n.memoizedState),(Ee=Sa||Vm(n,a,Ee,o,ue,he,F)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(re||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,he,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,he,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=he),f.props=o,f.state=he,f.context=F,o=Ee):(typeof f.componentDidUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Il(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Js(n,t.child,null,u),n.child=Js(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=$i(t,n,u),t}function sg(t,n,a,o){return Jr(),n.flags|=256,An(t,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:qp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function rg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,E;if((E=f)||(E=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Bt){if(u?Ta(n):Aa(),Bt){var w=rn,F;if(F=w){e:{for(F=w,w=Li;F.nodeType!==8;){if(!w){w=null;break e}if(F=Ti(F.nextSibling),F===null){w=null;break e}}w=F}w!==null?(n.memoizedState={dehydrated:w,treeContext:rs!==null?{id:Wi,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},F=ni(18,null,null,0),F.stateNode=w,F.return=n,n.child=F,Fn=n,rn=null,F=!0):F=!1}F||cs(n)}if(w=n.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return $f(w)?n.lanes=32:n.lanes=536870912,null;Ji(n)}return w=o.children,o=o.fallback,u?(Aa(),u=n.mode,w=Bl({mode:"hidden",children:w},u),o=ss(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,u=n.child,u.memoizedState=mf(a),u.childLanes=gf(t,E,a),n.memoizedState=pf,o):(Ta(n),_f(n,w))}if(F=t.memoizedState,F!==null&&(w=F.dehydrated,w!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Aa(),n.child=t.child,n.flags|=128,n=null):(Aa(),u=o.fallback,w=n.mode,o=Bl({mode:"visible",children:o.children},w),u=ss(u,w,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Js(n,t.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(t,E,a),n.memoizedState=pf,n=u);else if(Ta(n),$f(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var re=E.dgst;E=re,o=Error(s(419)),o.stack="",o.digest=E,$r({value:o,source:null,stack:null}),n=vf(t,n,a)}else if(Sn||eo(t,n,a,!1),E=(a&t.childLanes)!==0,Sn||E){if(E=Qt,E!==null&&(o=a&-a,o=(o&42)!==0?1:ut(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,js(t,o),oi(E,t,o),Qm;w.data==="$?"||zf(),n=vf(t,n,a)}else w.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,rn=Ti(w.nextSibling),Fn=n,Bt=!0,ls=null,Li=!1,t!==null&&(di[pi++]=Wi,di[pi++]=Yi,di[pi++]=rs,Wi=t.id,Yi=t.overflow,rs=n),n=_f(n,o.children),n.flags|=4096);return n}return u?(Aa(),u=o.fallback,w=n.mode,F=t.child,re=F.sibling,o=qi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,re!==null?u=qi(re,u):(u=ss(u,w,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,w=t.child.memoizedState,w===null?w=mf(a):(F=w.cachePool,F!==null?(re=mn._currentValue,F=F.parent!==re?{parent:re,pool:re}:F):F=qp(),w={baseLanes:w.baseLanes|a,cachePool:F}),u.memoizedState=w,u.childLanes=gf(t,E,a),n.memoizedState=pf,o):(Ta(n),a=t.child,t=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ni(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function vf(t,n,a){return Js(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function og(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function xf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function lg(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(An(t,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(xe(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f);break;case"together":xf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $i(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Na|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(eo(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Qx(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ya(n,mn,t.memoizedState.cache),Jr();break;case 27:case 5:Ye(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?rg(t,n,a):(Ta(n),t=$i(t,n,a),t!==null?t.sibling:null);Ta(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return lg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,tg(t,n,a);case 24:ya(n,mn,t.memoizedState.cache)}return $i(t,n,a)}function cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return Sn=!1,Qx(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Bt&&(n.flags&1048576)!==0&&Fp(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Cu(o)?(t=ps(o,t),n.tag=1,n=ag(null,n,o,t,a)):(n.tag=0,n=df(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Jm(null,n,o,t,a);break e}else if(u===j){n.tag=14,n=$m(null,n,o,t,a);break e}}throw n=X(o)||o,Error(s(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ps(o,n.pendingProps),ag(t,n,o,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(t,n),oo(n,o,null,a);var E=n.memoizedState;if(o=E.cache,ya(n,mn,o),o!==f.cache&&zu(n,[mn],a,!0),ro(),o=E.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=sg(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),$r(u),n=sg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rn=Ti(t.firstChild),Fn=n,Bt=!0,ls=null,Li=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jr(),o===u){n=$i(t,n,a);break e}An(t,n,o,a)}n=n.child}return n;case 26:return Il(t,n),t===null?(a=d_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Bt||(a=n.type,t=n.pendingProps,o=Jl(ie.current).createElement(a),o[Tt]=n,o[mt]=t,Cn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=d_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ye(n),t===null&&Bt&&(o=n.stateNode=u_(n.type,n.pendingProps,ie.current),Fn=n,Li=!0,u=rn,Pa(n.type)?(eh=u,rn=Ti(o.firstChild)):rn=u),An(t,n,n.pendingProps.children,a),Il(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Bt&&((u=o=rn)&&(o=Ty(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Fn=n,rn=Ti(o.firstChild),Li=!1,u=!0):u=!1),u||cs(n)),Ye(n),u=n.type,f=n.pendingProps,E=t!==null?t.memoizedProps:null,o=f.children,Kf(u,f)?o=null:E!==null&&Kf(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,Vx,null,null,a),Do._currentValue=u),Il(t,n),An(t,n,o,a),n.child;case 6:return t===null&&Bt&&((t=a=rn)&&(a=Ay(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Fn=n,rn=null,t=!0):t=!1),t||cs(n)),null;case 13:return rg(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Js(n,null,o,a):An(t,n,o,a),n.child;case 11:return Jm(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),An(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,fs(n),u=Nn(u),o=o(u),n.flags|=1,An(t,n,o,a),n.child;case 14:return $m(t,n,n.type,n.pendingProps,a);case 15:return eg(t,n,n.type,n.pendingProps,a);case 19:return lg(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=qi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return tg(t,n,a);case 24:return fs(n),o=Nn(mn),t===null?(u=Fu(),u===null&&(u=Qt,f=Iu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ju(n),ya(n,mn,u)):((t.lanes&a)!==0&&(Gu(t,n),oo(n,null,null,a),ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,mn,o)):(o=f.cache,ya(n,mn,o),o!==u.cache&&zu(n,[mn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(t){t.flags|=4}function ug(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!v_(n)){if(n=mi.current,n!==null&&((Ut&4194048)===Ut?Oi!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||n!==Oi))throw ao=Hu,Wp;t.flags|=8192}}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,nr|=n)}function mo(t,n){if(!Bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Jx(t,n,a){var o=n.pendingProps;switch(Uu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(mn),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gp())),tn(n),null;case 26:return a=n.memoizedState,t===null?(ea(n),a!==null?(tn(n),ug(n,a)):(tn(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ea(n),tn(n),ug(n,a)):(tn(n),n.flags&=-16777217):(t.memoizedProps!==o&&ea(n),tn(n),n.flags&=-16777217),null;case 27:it(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=de.current,Qr(n)?Hp(n):(t=u_(u,o,a),n.stateNode=t,ea(n))}return tn(n),null;case 5:if(it(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(t=de.current,Qr(n))Hp(n);else{switch(u=Jl(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[Tt]=n,t[mt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Cn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ea(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,Qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Tt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||i_(t.nodeValue,a)),t||cs(n)}else t=Jl(t).createTextNode(o),t[Tt]=n,n.stateNode=t}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Tt]=n}else Jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Gp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ji(n),n):(Ji(n),null)}if(Ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),tn(n),null;case 4:return Ve(),t===null&&Xf(n.stateNode.containerInfo),tn(n),null;case 10:return Ki(n.type),tn(n),null;case 19:if(fe(gn),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)mo(u,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ol(t),f!==null){for(n.flags|=128,mo(u,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bp(a,t),a=a.sibling;return xe(gn,gn.current&1|2),n.child}t=t.sibling}u.tail!==null&&De()>Gl&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ol(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Bt)return tn(n),null}else 2*De()-u.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,mo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=De(),n.sibling=null,t=gn.current,xe(gn,o?t&1|2:t&1),n):(tn(n),null);case 22:case 23:return Ji(n),qu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&fe(hs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(mn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $x(t,n){switch(Uu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(mn),Ve(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return it(n),null;case 13:if(Ji(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Jr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return fe(gn),null;case 4:return Ve(),null;case 10:return Ki(n.type),null;case 22:case 23:return Ji(n),qu(),t!==null&&fe(hs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(mn),null;case 25:return null;default:return null}}function fg(t,n){switch(Uu(n),n.tag){case 3:Ki(mn),Ve();break;case 26:case 27:case 5:it(n);break;case 4:Ve();break;case 13:Ji(n);break;case 19:fe(gn);break;case 10:Ki(n.type);break;case 22:case 23:Ji(n),qu(),t!==null&&fe(hs);break;case 24:Ki(mn)}}function go(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,E=a.inst;o=f(),E.destroy=o}a=a.next}while(a!==u)}}catch(w){Kt(n,n.return,w)}}function Ra(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var E=o.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,u=n;var F=a,re=w;try{re()}catch(Ee){Kt(u,F,Ee)}}}o=o.next}while(o!==f)}}catch(Ee){Kt(n,n.return,Ee)}}function hg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{$p(n,a)}catch(o){Kt(t,t.return,o)}}}function dg(t,n,a){a.props=ps(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Kt(t,n,o)}}function _o(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Kt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Kt(t,n,u)}else a.current=null}function pg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Kt(t,t.return,u)}}function Sf(t,n,a){try{var o=t.stateNode;yy(o,t.type,a,n),o[mt]=n}catch(u){Kt(t,t.return,u)}}function mg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ql));else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Hl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Pa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function gg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[Tt]=t,n[mt]=a}catch(f){Kt(t,t.return,f)}}var ta=!1,cn=!1,bf=!1,_g=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function ey(t,n){if(t=t.containerInfo,Yf=ac,t=Cp(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var E=0,w=-1,F=-1,re=0,Ee=0,Re=t,ue=null;t:for(;;){for(var he;Re!==a||u!==0&&Re.nodeType!==3||(w=E+u),Re!==f||o!==0&&Re.nodeType!==3||(F=E+o),Re.nodeType===3&&(E+=Re.nodeValue.length),(he=Re.firstChild)!==null;)ue=Re,Re=he;for(;;){if(Re===t)break t;if(ue===a&&++re===u&&(w=E),ue===f&&++Ee===o&&(F=E),(he=Re.nextSibling)!==null)break;Re=ue,ue=Re.parentNode}Re=he}a=w===-1||F===-1?null:{start:w,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},ac=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ft=ps(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(ft,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Kt(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function vg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a),o&4&&go(5,a);break;case 1:if(Ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){Kt(a,a.return,E)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Kt(a,a.return,E)}}o&64&&hg(a),o&512&&_o(a,a.return);break;case 3:if(Ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(t,n)}catch(E){Kt(a,a.return,E)}}break;case 27:n===null&&o&4&&gg(a);case 26:case 5:Ca(t,a),n===null&&o&4&&pg(a),o&512&&_o(a,a.return);break;case 12:Ca(t,a);break;case 13:Ca(t,a),o&4&&Sg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cy.bind(null,a),Ry(t,a))));break;case 22:if(o=a.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||cn,u=ta;var f=cn;ta=o,(cn=n)&&!f?wa(t,a,(a.subtreeFlags&8772)!==0):Ca(t,a),ta=u,cn=f}break;case 30:break;default:Ca(t,a)}}function xg(t){var n=t.alternate;n!==null&&(t.alternate=null,xg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ls(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Zn=!1;function na(t,n,a){for(a=a.child;a!==null;)yg(t,n,a),a=a.sibling}function yg(t,n,a){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:cn||Pi(a,n),na(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Pi(a,n);var o=en,u=Zn;Pa(a.type)&&(en=a.stateNode,Zn=!1),na(t,n,a),Ao(a.stateNode),en=o,Zn=u;break;case 5:cn||Pi(a,n);case 6:if(o=en,u=Zn,en=null,na(t,n,a),en=o,Zn=u,en!==null)if(Zn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Kt(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Kt(a,n,f)}break;case 18:en!==null&&(Zn?(t=en,l_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Oo(t)):l_(en,a.stateNode));break;case 4:o=en,u=Zn,en=a.stateNode.containerInfo,Zn=!0,na(t,n,a),en=o,Zn=u;break;case 0:case 11:case 14:case 15:cn||Ra(2,a,n),cn||Ra(4,a,n),na(t,n,a);break;case 1:cn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&dg(a,n,o)),na(t,n,a);break;case 21:na(t,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,na(t,n,a),cn=o;break;default:na(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oo(t)}catch(a){Kt(n,n.return,a)}}function ty(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new _g),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new _g),n;default:throw Error(s(435,t.tag))}}function Tf(t,n){var a=ty(t);n.forEach(function(o){var u=uy.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function ii(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,E=n,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(Pa(w.type)){en=w.stateNode,Zn=!1;break e}break;case 5:en=w.stateNode,Zn=!1;break e;case 3:case 4:en=w.stateNode.containerInfo,Zn=!0;break e}w=w.return}if(en===null)throw Error(s(160));yg(f,E,u),en=null,Zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Mg(n,t),n=n.sibling}var bi=null;function Mg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(n,t),ai(t),o&4&&(Ra(3,t,t.return),go(3,t),Ra(5,t,t.return));break;case 1:ii(n,t),ai(t),o&512&&(cn||a===null||Pi(a,a.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(ii(n,t),ai(t),o&512&&(cn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ui]||f[Tt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[Tt]=t,fn(f),o=f;break e;case"link":var E=g_("link","href",u).get(o+(a.href||""));if(E){for(var w=0;w<E.length;w++)if(f=E[w],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(w,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(E=g_("meta","content",u).get(o+(a.content||""))){for(w=0;w<E.length;w++)if(f=E[w],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(w,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Tt]=t,fn(f),o=f}t.stateNode=o}else __(u,t.type,t.stateNode);else t.stateNode=m_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?__(u,t.type,t.stateNode):m_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ii(n,t),ai(t),o&512&&(cn||a===null||Pi(a,a.return)),a!==null&&o&4&&Sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ii(n,t),ai(t),o&512&&(cn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{qn(u,"")}catch(he){Kt(t,t.return,he)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Sf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(bf=!0);break;case 6:if(ii(n,t),ai(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(he){Kt(t,t.return,he)}}break;case 3:if(tc=null,u=bi,bi=$l(n.containerInfo),ii(n,t),bi=u,ai(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(he){Kt(t,t.return,he)}bf&&(bf=!1,Eg(t));break;case 4:o=bi,bi=$l(t.stateNode.containerInfo),ii(n,t),ai(t),bi=o;break;case 12:ii(n,t),ai(t);break;case 13:ii(n,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nf=De()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tf(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,re=ta,Ee=cn;if(ta=re||u,cn=Ee||F,ii(n,t),cn=Ee,ta=re,ai(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ta||cn||ms(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)E=f.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=F.stateNode;var Re=F.memoizedProps.style,ue=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;w.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(he){Kt(F,F.return,he)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(he){Kt(F,F.return,he)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Tf(t,a))));break;case 19:ii(n,t),ai(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Tf(t,o)));break;case 30:break;case 21:break;default:ii(n,t),ai(t)}}function ai(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(mg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Hl(t,f,u);break;case 5:var E=a.stateNode;a.flags&32&&(qn(E,""),a.flags&=-33);var w=Mf(t);Hl(t,w,E);break;case 3:case 4:var F=a.stateNode.containerInfo,re=Mf(t);Ef(t,re,F);break;default:throw Error(s(161))}}catch(Ee){Kt(t,t.return,Ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vg(t,n.alternate,n),n=n.sibling}function ms(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ms(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dg(n,n.return,a),ms(n);break;case 27:Ao(n.stateNode);case 26:case 5:Pi(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}t=t.sibling}}function wa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,E=f.flags;switch(f.tag){case 0:case 11:case 15:wa(u,f,a),go(4,f);break;case 1:if(wa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){Kt(o,o.return,re)}if(o=f,u=o.updateQueue,u!==null){var w=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Jp(F[u],w)}catch(re){Kt(o,o.return,re)}}a&&E&64&&hg(f),_o(f,f.return);break;case 27:gg(f);case 26:case 5:wa(u,f,a),a&&o===null&&E&4&&pg(f),_o(f,f.return);break;case 12:wa(u,f,a);break;case 13:wa(u,f,a),a&&E&4&&Sg(u,f);break;case 22:f.memoizedState===null&&wa(u,f,a),_o(f,f.return);break;case 30:break;default:wa(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&to(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t))}function zi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bg(t,n,a,o),n=n.sibling}function bg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(t,n,a,o),u&2048&&go(9,n);break;case 1:zi(t,n,a,o);break;case 3:zi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&to(t)));break;case 12:if(u&2048){zi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,E=f.id,w=f.onPostCommit;typeof w=="function"&&w(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Kt(n,n.return,F)}}else zi(t,n,a,o);break;case 13:zi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,E=n.alternate,n.memoizedState!==null?f._visibility&2?zi(t,n,a,o):vo(t,n):f._visibility&2?zi(t,n,a,o):(f._visibility|=2,$s(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Af(E,n);break;case 24:zi(t,n,a,o),u&2048&&Rf(n.alternate,n);break;default:zi(t,n,a,o)}}function $s(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,E=n,w=a,F=o,re=E.flags;switch(E.tag){case 0:case 11:case 15:$s(f,E,w,F,u),go(8,E);break;case 23:break;case 22:var Ee=E.stateNode;E.memoizedState!==null?Ee._visibility&2?$s(f,E,w,F,u):vo(f,E):(Ee._visibility|=2,$s(f,E,w,F,u)),u&&re&2048&&Af(E.alternate,E);break;case 24:$s(f,E,w,F,u),u&&re&2048&&Rf(E.alternate,E);break;default:$s(f,E,w,F,u)}n=n.sibling}}function vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:vo(a,o),u&2048&&Af(o.alternate,o);break;case 24:vo(a,o),u&2048&&Rf(o.alternate,o);break;default:vo(a,o)}n=n.sibling}}var xo=8192;function er(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)Tg(t),t=t.sibling}function Tg(t){switch(t.tag){case 26:er(t),t.flags&xo&&t.memoizedState!==null&&Hy(bi,t.memoizedState,t.memoizedProps);break;case 5:er(t);break;case 3:case 4:var n=bi;bi=$l(t.stateNode.containerInfo),er(t),bi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,er(t),xo=n):er(t));break;default:er(t)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Cg(o,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&Ra(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):yo(t);break;default:yo(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Cg(o,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function Cg(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(xg(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var ny={getCacheForType:function(t){var n=Nn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},iy=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Qt=null,wt=null,Ut=0,jt=0,si=null,Da=!1,tr=!1,Cf=!1,ia=0,on=0,Na=0,gs=0,wf=0,gi=0,nr=0,So=null,Kn=null,Df=!1,Nf=0,Gl=1/0,Vl=null,Ua=null,Rn=0,La=null,ir=null,ar=0,Uf=0,Lf=null,wg=null,Mo=0,Of=null;function ri(){if((Ht&2)!==0&&Ut!==0)return Ut&-Ut;if(P.T!==null){var t=Xs;return t!==0?t:jf()}return Me()}function Dg(){gi===0&&(gi=(Ut&536870912)===0||Bt?Y():536870912);var t=mi.current;return t!==null&&(t.flags|=32),gi}function oi(t,n,a){(t===Qt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(sr(t,0),Oa(t,Ut,gi,!1)),We(t,a),((Ht&2)===0||t!==Qt)&&(t===Qt&&((Ht&2)===0&&(gs|=a),on===4&&Oa(t,Ut,gi,!1)),Ii(t))}function Ng(t,n,a){if((Ht&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Be(t,n),u=o?ry(t,n):If(t,n,!0),f=o;do{if(u===0){tr&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ay(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var w=t;u=So;var F=w.current.memoizedState.isDehydrated;if(F&&(sr(w,E).flags|=256),E=If(w,E,!1),E!==2){if(Cf&&!F){w.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=E}if(f=!1,u!==2)continue}}if(u===1){sr(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,gi,!Da);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nf+300-De(),10<u)){if(Oa(o,n,gi,!Da),Je(o,0,!0)!==0)break e;o.timeoutHandle=r_(Ug.bind(null,o,a,Kn,Vl,Df,n,gi,gs,nr,Da,f,2,-0,0),u);break e}Ug(o,a,Kn,Vl,Df,n,gi,gs,nr,Da,f,0,-0,0)}}break}while(!0);Ii(t)}function Ug(t,n,a,o,u,f,E,w,F,re,Ee,Re,ue,he){if(t.timeoutHandle=-1,Re=n.subtreeFlags,(Re&8192||(Re&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:Fy},Tg(n),Re=jy(),Re!==null)){t.cancelPendingCommit=Re(Fg.bind(null,t,n,f,a,o,u,E,w,F,Ee,1,ue,he)),Oa(t,f,E,!re);return}Fg(t,n,f,a,o,u,E,w,F)}function ay(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ti(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~wf,n&=~gs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),E=1<<f;o[f]=-1,u&=~E}a!==0&&Ae(t,a,n)}function kl(){return(Ht&6)===0?(Eo(0),!1):!0}function Pf(){if(wt!==null){if(jt===0)var t=wt.return;else t=wt,Zi=us=null,Qu(t),Qs=null,ho=0,t=wt;for(;t!==null;)fg(t.alternate,t),t=t.return;wt=null}}function sr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,My(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Pf(),Qt=t,wt=a=qi(t.current,null),Ut=n,jt=0,si=null,Da=!1,tr=Be(t,n),Cf=!1,nr=gi=wf=gs=Na=on=0,Kn=So=null,Df=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return ia=n,hl(),a}function Lg(t,n){bt=null,P.H=Nl,n===io||n===Sl?(n=Kp(),jt=3):n===Wp?(n=Kp(),jt=4):jt=n===Qm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,si=n,wt===null&&(on=1,zl(t,fi(n,t.current)))}function Og(){var t=P.H;return P.H=Nl,t===null?Nl:t}function Pg(){var t=P.A;return P.A=ny,t}function zf(){on=4,Da||(Ut&4194048)!==Ut&&mi.current!==null||(tr=!0),(Na&134217727)===0&&(gs&134217727)===0||Qt===null||Oa(Qt,Ut,gi,!1)}function If(t,n,a){var o=Ht;Ht|=2;var u=Og(),f=Pg();(Qt!==t||Ut!==n)&&(Vl=null,sr(t,n)),n=!1;var E=on;e:do try{if(jt!==0&&wt!==null){var w=wt,F=si;switch(jt){case 8:Pf(),E=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(n=!0);var re=jt;if(jt=0,si=null,rr(t,w,F,re),a&&tr){E=0;break e}break;default:re=jt,jt=0,si=null,rr(t,w,F,re)}}sy(),E=on;break}catch(Ee){Lg(t,Ee)}while(!0);return n&&t.shellSuspendCounter++,Zi=us=null,Ht=o,P.H=u,P.A=f,wt===null&&(Qt=null,Ut=0,hl()),E}function sy(){for(;wt!==null;)zg(wt)}function ry(t,n){var a=Ht;Ht|=2;var o=Og(),u=Pg();Qt!==t||Ut!==n?(Vl=null,Gl=De()+500,sr(t,n)):tr=Be(t,n);e:do try{if(jt!==0&&wt!==null){n=wt;var f=si;t:switch(jt){case 1:jt=0,si=null,rr(t,n,f,1);break;case 2:case 9:if(Yp(f)){jt=0,si=null,Ig(n);break}n=function(){jt!==2&&jt!==9||Qt!==t||(jt=7),Ii(t)},f.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:Yp(f)?(jt=0,si=null,Ig(n)):(jt=0,si=null,rr(t,n,f,7));break;case 5:var E=null;switch(wt.tag){case 26:E=wt.memoizedState;case 5:case 27:var w=wt;if(!E||v_(E)){jt=0,si=null;var F=w.sibling;if(F!==null)wt=F;else{var re=w.return;re!==null?(wt=re,Xl(re)):wt=null}break t}}jt=0,si=null,rr(t,n,f,5);break;case 6:jt=0,si=null,rr(t,n,f,6);break;case 8:Pf(),on=6;break e;default:throw Error(s(462))}}oy();break}catch(Ee){Lg(t,Ee)}while(!0);return Zi=us=null,P.H=o,P.A=u,Ht=a,wt!==null?0:(Qt=null,Ut=0,hl(),on)}function oy(){for(;wt!==null&&!be();)zg(wt)}function zg(t){var n=cg(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Xl(t):wt=n}function Ig(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,Ut);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,Ut);break;case 5:Qu(n);default:fg(a,n),n=wt=Bp(n,ia),n=cg(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Xl(t):wt=n}function rr(t,n,a,o){Zi=us=null,Qu(n),Qs=null,ho=0;var u=n.return;try{if(Kx(t,u,n,a,Ut)){on=1,zl(t,fi(a,t.current)),wt=null;return}}catch(f){if(u!==null)throw wt=u,f;on=1,zl(t,fi(a,t.current)),wt=null;return}n.flags&32768?(Bt||o===1?t=!0:tr||(Ut&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Bg(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){Bg(n,Da);return}t=n.return;var a=Jx(n.alternate,n,ia);if(a!==null){wt=a;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=t}while(n!==null);on===0&&(on=5)}function Bg(t,n){do{var a=$x(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);on=6,wt=null}function Fg(t,n,a,o,u,f,E,w,F){t.cancelPendingCommit=null;do ql();while(Rn!==0);if((Ht&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Au,Ue(t,a,f,E,w,F),t===Qt&&(wt=Qt=null,Ut=0),ir=n,La=t,ar=a,Uf=f,Lf=u,wg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fy(It,function(){return kg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=Z.p,Z.p=2,E=Ht,Ht|=4;try{ey(t,n,a)}finally{Ht=E,Z.p=u,P.T=o}}Rn=1,Hg(),jg(),Gg()}}function Hg(){if(Rn===1){Rn=0;var t=La,n=ir,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Z.p;Z.p=2;var u=Ht;Ht|=4;try{Mg(n,t);var f=Zf,E=Cp(t.containerInfo),w=f.focusedElem,F=f.selectionRange;if(E!==w&&w&&w.ownerDocument&&Rp(w.ownerDocument.documentElement,w)){if(F!==null&&Su(w)){var re=F.start,Ee=F.end;if(Ee===void 0&&(Ee=re),"selectionStart"in w)w.selectionStart=re,w.selectionEnd=Math.min(Ee,w.value.length);else{var Re=w.ownerDocument||document,ue=Re&&Re.defaultView||window;if(ue.getSelection){var he=ue.getSelection(),ft=w.textContent.length,rt=Math.min(F.start,ft),qt=F.end===void 0?rt:Math.min(F.end,ft);!he.extend&&rt>qt&&(E=qt,qt=rt,rt=E);var ee=Ap(w,rt),W=Ap(w,qt);if(ee&&W&&(he.rangeCount!==1||he.anchorNode!==ee.node||he.anchorOffset!==ee.offset||he.focusNode!==W.node||he.focusOffset!==W.offset)){var se=Re.createRange();se.setStart(ee.node,ee.offset),he.removeAllRanges(),rt>qt?(he.addRange(se),he.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),he.addRange(se))}}}}for(Re=[],he=w;he=he.parentNode;)he.nodeType===1&&Re.push({element:he,left:he.scrollLeft,top:he.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Re.length;w++){var Te=Re[w];Te.element.scrollLeft=Te.left,Te.element.scrollTop=Te.top}}ac=!!Yf,Zf=Yf=null}finally{Ht=u,Z.p=o,P.T=a}}t.current=n,Rn=2}}function jg(){if(Rn===2){Rn=0;var t=La,n=ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Z.p;Z.p=2;var u=Ht;Ht|=4;try{vg(t,n.alternate,n)}finally{Ht=u,Z.p=o,P.T=a}}Rn=3}}function Gg(){if(Rn===4||Rn===3){Rn=0,je();var t=La,n=ir,a=ar,o=wg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,ir=La=null,Vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ua=null),V(a),n=n.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=Z.p,Z.p=2,P.T=null;try{for(var f=t.onRecoverableError,E=0;E<o.length;E++){var w=o[E];f(w.value,{componentStack:w.stack})}}finally{P.T=n,Z.p=u}}(ar&3)!==0&&ql(),Ii(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Of?Mo++:(Mo=0,Of=t):Mo=0,Eo(0)}}function Vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,to(n)))}function ql(t){return Hg(),jg(),Gg(),kg()}function kg(){if(Rn!==5)return!1;var t=La,n=Uf;Uf=0;var a=V(ar),o=P.T,u=Z.p;try{Z.p=32>a?32:a,P.T=null,a=Lf,Lf=null;var f=La,E=ar;if(Rn=0,ir=La=null,ar=0,(Ht&6)!==0)throw Error(s(331));var w=Ht;if(Ht|=4,Rg(f.current),bg(f,f.current,E,a),Ht=w,Eo(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(ce,f)}catch{}return!0}finally{Z.p=u,P.T=o,Vg(t,n)}}function Xg(t,n,a){n=fi(a,n),n=hf(t.stateNode,n,2),t=Ea(t,n,2),t!==null&&(We(t,2),Ii(t))}function Kt(t,n,a){if(t.tag===3)Xg(t,t,a);else for(;n!==null;){if(n.tag===3){Xg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){t=fi(a,t),a=Zm(2),o=Ea(n,a,2),o!==null&&(Km(a,o,n,t),We(o,2),Ii(o));break}}n=n.return}}function Bf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new iy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),t=ly.bind(null,t,n,a),n.then(t,t))}function ly(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(Ut&a)===a&&(on===4||on===3&&(Ut&62914560)===Ut&&300>De()-Nf?(Ht&2)===0&&sr(t,0):wf|=a,nr===Ut&&(nr=0)),Ii(t)}function qg(t,n){n===0&&(n=Le()),t=js(t,n),t!==null&&(We(t,n),Ii(t))}function cy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(t,a)}function uy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),qg(t,a)}function fy(t,n){return A(t,n)}var Wl=null,or=null,Ff=!1,Yl=!1,Hf=!1,_s=0;function Ii(t){t!==or&&t.next===null&&(or===null?Wl=or=t:or=or.next=t),Yl=!0,Ff||(Ff=!0,dy())}function Eo(t,n){if(!Hf&&Yl){Hf=!0;do for(var a=!1,o=Wl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var E=o.suspendedLanes,w=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(E&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Kg(o,f))}else f=Ut,f=Je(o,o===Qt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Be(o,f)||(a=!0,Kg(o,f));o=o.next}while(a);Hf=!1}}function hy(){Wg()}function Wg(){Yl=Ff=!1;var t=0;_s!==0&&(Sy()&&(t=_s),_s=0);for(var n=De(),a=null,o=Wl;o!==null;){var u=o.next,f=Yg(o,n);f===0?(o.next=null,a===null?Wl=u:a.next=u,u===null&&(or=a)):(a=o,(t!==0||(f&3)!==0)&&(Yl=!0)),o=u}Eo(t)}function Yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var E=31-Fe(f),w=1<<E,F=u[E];F===-1?((w&a)===0||(w&o)!==0)&&(u[E]=dt(w,n)):F<=n&&(t.expiredLanes|=w),f&=~w}if(n=Qt,a=Ut,a=Je(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ve(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Be(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&ve(o),V(a)){case 2:case 8:a=ot;break;case 32:a=It;break;case 268435456:a=z;break;default:a=It}return o=Zg.bind(null,t),a=A(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&ve(o),t.callbackPriority=2,t.callbackNode=null,2}function Zg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ql()&&t.callbackNode!==a)return null;var o=Ut;return o=Je(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Ng(t,o,n),Yg(t,De()),t.callbackNode!=null&&t.callbackNode===a?Zg.bind(null,t):null)}function Kg(t,n){if(ql())return null;Ng(t,n,!0)}function dy(){Ey(function(){(Ht&6)!==0?A(qe,hy):Wg()})}function jf(){return _s===0&&(_s=Y()),_s}function Qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:sl(""+t)}function Jg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function py(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qg((u[mt]||null).action),E=o.submitter;E&&(n=(n=E[mt]||null)?Qg(n.formAction):E.getAttribute("formAction"),n!==null&&(f=n,E=null));var w=new cl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(_s!==0){var F=E?Jg(u,E):new FormData(u);of(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(w.preventDefault(),F=E?Jg(u,E):new FormData(u),of(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Gf=0;Gf<Tu.length;Gf++){var Vf=Tu[Gf],my=Vf.toLowerCase(),gy=Vf[0].toUpperCase()+Vf.slice(1);Ei(my,"on"+gy)}Ei(Np,"onAnimationEnd"),Ei(Up,"onAnimationIteration"),Ei(Lp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Lx,"onTransitionRun"),Ei(Ox,"onTransitionStart"),Ei(Px,"onTransitionCancel"),Ei(Op,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_y=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function $g(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var E=o.length-1;0<=E;E--){var w=o[E],F=w.instance,re=w.currentTarget;if(w=w.listener,F!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=re;try{f(u)}catch(Ee){Pl(Ee)}u.currentTarget=null,f=F}else for(E=0;E<o.length;E++){if(w=o[E],F=w.instance,re=w.currentTarget,w=w.listener,F!==f&&u.isPropagationStopped())break e;f=w,u.currentTarget=re;try{f(u)}catch(Ee){Pl(Ee)}u.currentTarget=null,f=F}}}}function Dt(t,n){var a=n[Pn];a===void 0&&(a=n[Pn]=new Set);var o=t+"__bubble";a.has(o)||(e_(n,t,2,!1),a.add(o))}function kf(t,n,a){var o=0;n&&(o|=4),e_(a,t,o,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Xf(t){if(!t[Zl]){t[Zl]=!0,il.forEach(function(a){a!=="selectionchange"&&(_y.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,kf("selectionchange",!1,n))}}function e_(t,n,a,o){switch(b_(n)){case 2:var u=ky;break;case 8:u=Xy;break;default:u=sh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var w=o.stateNode.containerInfo;if(w===u)break;if(E===4)for(E=o.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;w!==null;){if(E=ki(w),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){o=f=E;continue e}w=w.parentNode}}o=o.return}op(function(){var re=f,Ee=uu(a),Re=[];e:{var ue=Pp.get(t);if(ue!==void 0){var he=cl,ft=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":he=fx;break;case"focusin":ft="focus",he=gu;break;case"focusout":ft="blur",he=gu;break;case"beforeblur":case"afterblur":he=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=px;break;case Np:case Up:case Lp:he=nx;break;case Op:he=gx;break;case"scroll":case"scrollend":he=Qv;break;case"wheel":he=vx;break;case"copy":case"cut":case"paste":he=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=hp;break;case"toggle":case"beforetoggle":he=yx}var rt=(n&4)!==0,qt=!rt&&(t==="scroll"||t==="scrollend"),ee=rt?ue!==null?ue+"Capture":null:ue;rt=[];for(var W=re,se;W!==null;){var Te=W;if(se=Te.stateNode,Te=Te.tag,Te!==5&&Te!==26&&Te!==27||se===null||ee===null||(Te=Gr(W,ee),Te!=null&&rt.push(To(W,Te,se))),qt)break;W=W.return}0<rt.length&&(ue=new he(ue,ft,null,a,Ee),Re.push({event:ue,listeners:rt}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",he=t==="mouseout"||t==="pointerout",ue&&a!==cu&&(ft=a.relatedTarget||a.fromElement)&&(ki(ft)||ft[Xn]))break e;if((he||ue)&&(ue=Ee.window===Ee?Ee:(ue=Ee.ownerDocument)?ue.defaultView||ue.parentWindow:window,he?(ft=a.relatedTarget||a.toElement,he=re,ft=ft?ki(ft):null,ft!==null&&(qt=c(ft),rt=ft.tag,ft!==qt||rt!==5&&rt!==27&&rt!==6)&&(ft=null)):(he=null,ft=re),he!==ft)){if(rt=up,Te="onMouseLeave",ee="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(rt=hp,Te="onPointerLeave",ee="onPointerEnter",W="pointer"),qt=he==null?ue:ts(he),se=ft==null?ue:ts(ft),ue=new rt(Te,W+"leave",he,a,Ee),ue.target=qt,ue.relatedTarget=se,Te=null,ki(Ee)===re&&(rt=new rt(ee,W+"enter",ft,a,Ee),rt.target=se,rt.relatedTarget=qt,Te=rt),qt=Te,he&&ft)t:{for(rt=he,ee=ft,W=0,se=rt;se;se=lr(se))W++;for(se=0,Te=ee;Te;Te=lr(Te))se++;for(;0<W-se;)rt=lr(rt),W--;for(;0<se-W;)ee=lr(ee),se--;for(;W--;){if(rt===ee||ee!==null&&rt===ee.alternate)break t;rt=lr(rt),ee=lr(ee)}rt=null}else rt=null;he!==null&&t_(Re,ue,he,rt,!1),ft!==null&&qt!==null&&t_(Re,qt,ft,rt,!0)}}e:{if(ue=re?ts(re):window,he=ue.nodeName&&ue.nodeName.toLowerCase(),he==="select"||he==="input"&&ue.type==="file")var $e=yp;else if(vp(ue))if(Sp)$e=Dx;else{$e=Cx;var At=Rx}else he=ue.nodeName,!he||he.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?re&&lu(re.elementType)&&($e=yp):$e=wx;if($e&&($e=$e(t,re))){xp(Re,$e,a,Ee);break e}At&&At(t,ue,re),t==="focusout"&&re&&ue.type==="number"&&re.memoizedProps.value!=null&&Dn(ue,"number",ue.value)}switch(At=re?ts(re):window,t){case"focusin":(vp(At)||At.contentEditable==="true")&&(Bs=At,Mu=re,Kr=null);break;case"focusout":Kr=Mu=Bs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,wp(Re,a,Ee);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":wp(Re,a,Ee)}var nt;if(vu)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Is?gp(t,a)&&(ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(dp&&a.locale!=="ko"&&(Is||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Is&&(nt=lp()):(xa=Ee,du="value"in xa?xa.value:xa.textContent,Is=!0)),At=Kl(re,ct),0<At.length&&(ct=new fp(ct,t,null,a,Ee),Re.push({event:ct,listeners:At}),nt?ct.data=nt:(nt=_p(a),nt!==null&&(ct.data=nt)))),(nt=Mx?Ex(t,a):bx(t,a))&&(ct=Kl(re,"onBeforeInput"),0<ct.length&&(At=new fp("onBeforeInput","beforeinput",null,a,Ee),Re.push({event:At,listeners:ct}),At.data=nt)),py(Re,t,re,a,Ee)}$g(Re,n)})}function To(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Kl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gr(t,a),u!=null&&o.unshift(To(t,u,f)),u=Gr(t,n),u!=null&&o.push(To(t,u,f))),t.tag===3)return o;t=t.return}return[]}function lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function t_(t,n,a,o,u){for(var f=n._reactName,E=[];a!==null&&a!==o;){var w=a,F=w.alternate,re=w.stateNode;if(w=w.tag,F!==null&&F===o)break;w!==5&&w!==26&&w!==27||re===null||(F=re,u?(re=Gr(a,f),re!=null&&E.unshift(To(a,re,F))):u||(re=Gr(a,f),re!=null&&E.push(To(a,re,F)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var vy=/\r\n?/g,xy=/\u0000|\uFFFD/g;function n_(t){return(typeof t=="string"?t:""+t).replace(vy,`
`).replace(xy,"")}function i_(t,n){return n=n_(n),n_(t)===n}function Ql(){}function Xt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||qn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&qn(t,""+o);break;case"className":Ke(t,"class",o);break;case"tabIndex":Ke(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ke(t,a,o);break;case"style":sp(t,o,f);break;case"data":if(n!=="object"){Ke(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=sl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ql);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=sl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Ge(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zv.get(a)||a,Ge(t,a,o))}}function Wf(t,n,a,o,u,f){switch(a){case"style":sp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?qn(t,o):(typeof o=="number"||typeof o=="bigint")&&qn(t,""+o);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!al.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[mt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ge(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var E=a[f];if(E!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,f,E,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),o&&Xt(t,n,"src",a.src,a,null);return;case"input":Dt("invalid",t);var w=f=E=u=null,F=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var Ee=a[o];if(Ee!=null)switch(o){case"name":u=Ee;break;case"type":E=Ee;break;case"checked":F=Ee;break;case"defaultChecked":re=Ee;break;case"value":f=Ee;break;case"defaultValue":w=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(s(137,n));break;default:Xt(t,n,o,Ee,a,null)}}Bn(t,f,w,F,re,E,u,!1),Ct(t);return;case"select":Dt("invalid",t),o=E=f=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":f=w;break;case"defaultValue":E=w;break;case"multiple":o=w;default:Xt(t,n,u,w,a,null)}n=f,a=E,t.multiple=!!o,n!=null?sn(t,!!o,n,!1):a!=null&&sn(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),f=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(w=a[E],w!=null))switch(E){case"value":o=w;break;case"defaultValue":u=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Xt(t,n,E,w,a,null)}Os(t,o,u,f),Ct(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,F,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)Dt(bo[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xt(t,n,re,o,a,null)}return;default:if(lu(n)){for(Ee in a)a.hasOwnProperty(Ee)&&(o=a[Ee],o!==void 0&&Wf(t,n,Ee,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Xt(t,n,w,o,a,null))}function yy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,E=null,w=null,F=null,re=null,Ee=null;for(he in a){var Re=a[he];if(a.hasOwnProperty(he)&&Re!=null)switch(he){case"checked":break;case"value":break;case"defaultValue":F=Re;default:o.hasOwnProperty(he)||Xt(t,n,he,null,o,Re)}}for(var ue in o){var he=o[ue];if(Re=a[ue],o.hasOwnProperty(ue)&&(he!=null||Re!=null))switch(ue){case"type":f=he;break;case"name":u=he;break;case"checked":re=he;break;case"defaultChecked":Ee=he;break;case"value":E=he;break;case"defaultValue":w=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(s(137,n));break;default:he!==Re&&Xt(t,n,ue,he,o,Re)}}Zt(t,E,w,F,re,Ee,f,u);return;case"select":he=E=w=ue=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":he=F;default:o.hasOwnProperty(f)||Xt(t,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":ue=f;break;case"defaultValue":w=f;break;case"multiple":E=f;default:f!==F&&Xt(t,n,u,f,o,F)}n=w,a=E,o=he,ue!=null?sn(t,!!a,ue,!1):!!o!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":he=ue=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Xt(t,n,w,null,o,u)}for(E in o)if(u=o[E],f=a[E],o.hasOwnProperty(E)&&(u!=null||f!=null))switch(E){case"value":ue=u;break;case"defaultValue":he=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xt(t,n,E,u,o,f)}Tn(t,ue,he);return;case"option":for(var ft in a)if(ue=a[ft],a.hasOwnProperty(ft)&&ue!=null&&!o.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:Xt(t,n,ft,null,o,ue)}for(F in o)if(ue=o[F],he=a[F],o.hasOwnProperty(F)&&ue!==he&&(ue!=null||he!=null))switch(F){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Xt(t,n,F,ue,o,he)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)ue=a[rt],a.hasOwnProperty(rt)&&ue!=null&&!o.hasOwnProperty(rt)&&Xt(t,n,rt,null,o,ue);for(re in o)if(ue=o[re],he=a[re],o.hasOwnProperty(re)&&ue!==he&&(ue!=null||he!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(s(137,n));break;default:Xt(t,n,re,ue,o,he)}return;default:if(lu(n)){for(var qt in a)ue=a[qt],a.hasOwnProperty(qt)&&ue!==void 0&&!o.hasOwnProperty(qt)&&Wf(t,n,qt,void 0,o,ue);for(Ee in o)ue=o[Ee],he=a[Ee],!o.hasOwnProperty(Ee)||ue===he||ue===void 0&&he===void 0||Wf(t,n,Ee,ue,o,he);return}}for(var ee in a)ue=a[ee],a.hasOwnProperty(ee)&&ue!=null&&!o.hasOwnProperty(ee)&&Xt(t,n,ee,null,o,ue);for(Re in o)ue=o[Re],he=a[Re],!o.hasOwnProperty(Re)||ue===he||ue==null&&he==null||Xt(t,n,Re,ue,o,he)}var Yf=null,Zf=null;function Jl(t){return t.nodeType===9?t:t.ownerDocument}function a_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function s_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var r_=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,o_=typeof Promise=="function"?Promise:void 0,Ey=typeof queueMicrotask=="function"?queueMicrotask:typeof o_<"u"?function(t){return o_.resolve(null).then(t).catch(by)}:r_;function by(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function l_(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Ao(E.documentElement),a&2&&Ao(E.body),a&4)for(a=E.head,Ao(a),E=a.firstChild;E;){var w=E.nextSibling,F=E.nodeName;E[Ui]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=w}}if(u===0){t.removeChild(f),Oo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Oo(n)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),Ls(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ty(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ui])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function Ay(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function $f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ry(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var eh=null;function c_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function u_(t,n,a){switch(n=Jl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ls(t)}var _i=new Map,f_=new Set;function $l(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=Z.d;Z.d={f:Cy,r:wy,D:Dy,C:Ny,L:Uy,m:Ly,X:Py,S:Oy,M:zy};function Cy(){var t=aa.f(),n=kl();return t||n}function wy(t){var n=_a(t);n!==null&&n.tag===5&&n.type==="form"?Nm(n):aa.r(t)}var cr=typeof document>"u"?null:document;function h_(t,n,a){var o=cr;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),f_.has(u)||(f_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function Dy(t){aa.D(t),h_("dns-prefetch",t,null)}function Ny(t,n){aa.C(t,n),h_("preconnect",t,n)}function Uy(t,n,a){aa.L(t,n,a);var o=cr;if(o&&t&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(t)+'"]';var f=u;switch(n){case"style":f=ur(t);break;case"script":f=fr(t)}_i.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ro(f))||n==="script"&&o.querySelector(Co(f))||(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function Ly(t,n){aa.m(t,n);var a=cr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fr(t)}if(!_i.has(f)&&(t=v({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}o=a.createElement("link"),Cn(o,"link",t),fn(o),a.head.appendChild(o)}}}function Oy(t,n,a){aa.S(t,n,a);var o=cr;if(o&&t){var u=va(o).hoistableStyles,f=ur(t);n=n||"default";var E=u.get(f);if(!E){var w={loading:0,preload:null};if(E=o.querySelector(Ro(f)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&th(t,a);var F=E=o.createElement("link");fn(F),Cn(F,"link",t),F._p=new Promise(function(re,Ee){F.onload=re,F.onerror=Ee}),F.addEventListener("load",function(){w.loading|=1}),F.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ec(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:w},u.set(f,E)}}}function Py(t,n){aa.X(t,n);var a=cr;if(a&&t){var o=va(a).hoistableScripts,u=fr(t),f=o.get(u);f||(f=a.querySelector(Co(u)),f||(t=v({src:t,async:!0},n),(n=_i.get(u))&&nh(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function zy(t,n){aa.M(t,n);var a=cr;if(a&&t){var o=va(a).hoistableScripts,u=fr(t),f=o.get(u);f||(f=a.querySelector(Co(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&nh(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function d_(t,n,a,o){var u=(u=ie.current)?$l(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ur(a.href),a=va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ur(a.href);var f=va(u).hoistableStyles,E=f.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,E),(f=u.querySelector(Ro(t)))&&!f._p&&(E.instance=f,E.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||Iy(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fr(a),a=va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ur(t){return'href="'+yn(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function p_(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),fn(n),t.head.appendChild(n))}function fr(t){return'[src="'+yn(t)+'"]'}function Co(t){return"script[async]"+t}function m_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),Cn(o,"style",u),ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=ur(a.href);var f=t.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=p_(a),(u=_i.get(u))&&th(o,u),f=(t.ownerDocument||t).createElement("link"),fn(f);var E=f;return E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Cn(f,"link",o),n.state.loading|=4,ec(f,a.precedence,t),n.instance=f;case"script":return f=fr(a.src),(u=t.querySelector(Co(f)))?(n.instance=u,fn(u),u):(o=a,(u=_i.get(f))&&(o=v({},a),nh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,t));return n.instance}function ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,E=0;E<o.length;E++){var w=o[E];if(w.dataset.precedence===n)f=w;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tc=null;function g_(t,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ui]||f[Tt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var E=f.getAttribute(n)||"";E=t+E;var w=o.get(E);w?w.push(f):o.set(E,[f])}}return o}function __(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function By(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function v_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function Fy(){}function Hy(t,n,a){if(wo===null)throw Error(s(475));var o=wo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ur(a.href),f=t.querySelector(Ro(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=nc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,fn(f);return}f=t.ownerDocument||t,a=p_(a),(u=_i.get(u))&&th(a,u),f=f.createElement("link"),fn(f);var E=f;E._p=new Promise(function(w,F){E.onload=w,E.onerror=F}),Cn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=nc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function jy(){if(wo===null)throw Error(s(475));var t=wo;return t.stylesheets&&t.count===0&&ih(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ih(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function nc(){if(this.count--,this.count===0){if(this.stylesheets)ih(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ic=null;function ih(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ic=new Map,n.forEach(Gy,t),ic=null,nc.call(t))}function Gy(t,n){if(!(n.state.loading&4)){var a=ic.get(t);if(a)var o=a.get(null);else{a=new Map,ic.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var E=u[f];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),f=a.get(E)||o,f===o&&a.set(null,u),a.set(E,u),this.count++,o=nc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Do={$$typeof:O,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Vy(t,n,a,o,u,f,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oe(0),this.hiddenUpdates=Oe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function x_(t,n,a,o,u,f,E,w,F,re,Ee,Re){return t=new Vy(t,n,a,E,w,F,re,Re),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),t.current=f,f.stateNode=t,n=Iu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ju(f),t}function y_(t){return t?(t=Gs,t):Gs}function S_(t,n,a,o,u,f){u=y_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ea(t,o,n),a!==null&&(oi(a,t,n),so(a,t,n))}function M_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ah(t,n){M_(t,n),(t=t.alternate)&&M_(t,n)}function E_(t){if(t.tag===13){var n=js(t,67108864);n!==null&&oi(n,t,67108864),ah(t,67108864)}}var ac=!0;function ky(t,n,a,o){var u=P.T;P.T=null;var f=Z.p;try{Z.p=2,sh(t,n,a,o)}finally{Z.p=f,P.T=u}}function Xy(t,n,a,o){var u=P.T;P.T=null;var f=Z.p;try{Z.p=8,sh(t,n,a,o)}finally{Z.p=f,P.T=u}}function sh(t,n,a,o){if(ac){var u=rh(o);if(u===null)qf(t,n,o,sc,a),T_(t,o);else if(Wy(u,t,n,a,o))o.stopPropagation();else if(T_(t,o),n&4&&-1<qy.indexOf(t)){for(;u!==null;){var f=_a(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var E=et(f.pendingLanes);if(E!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var F=1<<31-Fe(E);w.entanglements[1]|=F,E&=~F}Ii(f),(Ht&6)===0&&(Gl=De()+500,Eo(0))}}break;case 13:w=js(f,2),w!==null&&oi(w,f,2),kl(),ah(f,2)}if(f=rh(o),f===null&&qf(t,n,o,sc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function rh(t){return t=uu(t),oh(t)}var sc=null;function oh(t){if(sc=null,t=ki(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return sc=t,null}function b_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gt()){case qe:return 2;case ot:return 8;case It:case Gt:return 32;case z:return 268435456;default:return 32}default:return 32}}var lh=!1,za=null,Ia=null,Ba=null,No=new Map,Uo=new Map,Fa=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=_a(n),n!==null&&E_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Wy(t,n,a,o,u){switch(n){case"focusin":return za=Lo(za,t,n,a,o,u),!0;case"dragenter":return Ia=Lo(Ia,t,n,a,o,u),!0;case"mouseover":return Ba=Lo(Ba,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Lo(No.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Uo.set(f,Lo(Uo.get(f)||null,t,n,a,o,u)),!0}return!1}function A_(t){var n=ki(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,ht(t.priority,function(){if(a.tag===13){var o=ri();o=ut(o);var u=js(a,o);u!==null&&oi(u,a,o),ah(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);cu=o,a.target.dispatchEvent(o),cu=null}else return n=_a(a),n!==null&&E_(n),t.blockedOn=a,!1;n.shift()}return!0}function R_(t,n,a){rc(t)&&a.delete(n)}function Yy(){lh=!1,za!==null&&rc(za)&&(za=null),Ia!==null&&rc(Ia)&&(Ia=null),Ba!==null&&rc(Ba)&&(Ba=null),No.forEach(R_),Uo.forEach(R_)}function oc(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yy)))}var lc=null;function C_(t){lc!==t&&(lc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){lc===t&&(lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(oh(o||a)===null)continue;break}var f=_a(a);f!==null&&(t.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Oo(t){function n(F){return oc(F,t)}za!==null&&oc(za,t),Ia!==null&&oc(Ia,t),Ba!==null&&oc(Ba,t),No.forEach(n),Uo.forEach(n);for(var a=0;a<Fa.length;a++){var o=Fa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)A_(a),a.blockedOn===null&&Fa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],E=u[mt]||null;if(typeof f=="function")E||C_(a);else if(E){var w=null;if(f&&f.hasAttribute("formAction")){if(u=f,E=f[mt]||null)w=E.formAction;else if(oh(u)!==null)continue}else w=E.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),C_(a)}}}function ch(t){this._internalRoot=t}cc.prototype.render=ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ri();S_(a,o,t,n,null,null)},cc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;S_(t.current,2,null,t,null,null),kl(),n[Xn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Me();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,t),a===0&&A_(t)}};var w_=e.version;if(w_!=="19.1.1")throw Error(s(527,w_,"19.1.1"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{ce=uc.inject(Zy),Se=uc}catch{}}return zo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Xm,f=qm,E=Wm,w=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(w=n.unstable_transitionCallbacks)),n=x_(t,1,!1,null,null,a,o,u,f,E,w,null),t[Xn]=n.current,Xf(t),new ch(n)},zo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Xm,E=qm,w=Wm,F=null,re=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(re=a.formState)),n=x_(t,1,!0,n,a??null,o,u,f,E,w,F,re),n.context=y_(null),a=n.current,o=ri(),o=ut(o),u=Ma(o),u.callback=null,Ea(a,u,o),a=o,n.current.lanes=a,We(n,a),Ii(n),t[Xn]=n.current,Xf(t),new cc(n)},zo.version="19.1.1",zo}var F_;function rS(){if(F_)return hh.exports;F_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hh.exports=sS(),hh.exports}var oS=rS();const lS=rv(oS);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ov=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=ye.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},g)=>ye.createElement("svg",{ref:g,...uS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:ov("lucide",l),...d},[...h.map(([m,v])=>ye.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(r,e)=>{const i=ye.forwardRef(({className:s,...l},c)=>ye.createElement(fS,{ref:c,iconNode:e,className:ov(`lucide-${cS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Et("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Et("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Et("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Et("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=Et("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=Et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Et("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Et("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Et("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=Et("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Et("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Et("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Et("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=Et("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Et("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=Et("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Et("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Et("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Et("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=Et("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=Et("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Et("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=Et("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Et("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Et("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=Et("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=Et("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=Et("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=Et("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=Et("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=Et("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=Et("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=Et("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=Et("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=Et("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=Et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);async function nn(r,e){const i=await fetch(r,e);if(!i.ok){let s=`请求失败 (${i.status})`;try{const l=await i.json();s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail??l)}catch{}throw new Error(s)}return i.json()}const ha=r=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});function uv(r,e){const i=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download=r,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const Ft=(r,e=3)=>r==null||!Number.isFinite(r)?"—":r.toLocaleString("en-US",{maximumFractionDigits:e}),Kc=r=>({loading:"读取数据",dataset_loading:"数据加载与准备",features:"提取特征",feature_extraction:"提取特征",matching:"特征匹配",pair_geometry:"匹配与几何验证",geometry:"几何验证",tracks:"构建轨迹",initialization:"两视图初始化",mapping:"增量建图",incremental_mapping:"增量建图",registration:"注册相机",bundle_adjustment:"束调整 BA",ba:"束调整 BA",export:"导出结果",exporting:"导出结果",done:"处理完成",starting:"正在启动",queued:"等待启动",preparing:"准备训练数据",training:"训练",evaluation:"验证与渲染",todo:"算法待实现"})[r]??r;function fv(r){const e=/^registered_(\d+)$/.exec(r);return e?`注册图像 #${e[1]}`:{initialization:"初始化",incremental_complete:"增量建图完成",before_ba:"BA 前",after_ba:"BA 后",final:"最终结果"}[r]??r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xd="180",Nr={ROTATE:0,DOLLY:1,PAN:2},Rr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CS=0,Z_=1,wS=2,hv=1,DS=2,ua=3,Ja=0,$n=1,fa=2,Za=0,Ur=1,K_=2,Q_=3,J_=4,NS=5,Ts=100,US=101,LS=102,OS=103,PS=104,zS=200,IS=201,BS=202,FS=203,Qh=204,Jh=205,HS=206,jS=207,GS=208,VS=209,kS=210,XS=211,qS=212,WS=213,YS=214,$h=0,ed=1,td=2,Or=3,nd=4,id=5,ad=6,sd=7,dv=0,ZS=1,KS=2,Ka=0,QS=1,JS=2,$S=3,eM=4,tM=5,nM=6,iM=7,pv=300,Pr=301,zr=302,rd=303,od=304,su=306,ld=1e3,Rs=1001,cd=1002,Ni=1003,aM=1004,fc=1005,ji=1006,gh=1007,Cs=1008,ma=1009,mv=1010,gv=1011,Wo=1012,qd=1013,ws=1014,da=1015,$o=1016,Wd=1017,Yd=1018,Yo=1020,_v=35902,vv=35899,xv=1021,yv=1022,Di=1023,Zo=1026,Ko=1027,Sv=1028,Zd=1029,Mv=1030,Kd=1031,Qd=1033,jc=33776,Gc=33777,Vc=33778,kc=33779,ud=35840,fd=35841,hd=35842,dd=35843,pd=36196,md=37492,gd=37496,_d=37808,vd=37809,xd=37810,yd=37811,Sd=37812,Md=37813,Ed=37814,bd=37815,Td=37816,Ad=37817,Rd=37818,Cd=37819,wd=37820,Dd=37821,Nd=36492,Ud=36494,Ld=36495,Od=36283,Pd=36284,zd=36285,Id=36286,sM=3200,rM=3201,oM=0,lM=1,Ya="",Gn="srgb",Ir="srgb-linear",Qc="linear",Wt="srgb",hr=7680,$_=519,cM=512,uM=513,fM=514,Ev=515,hM=516,dM=517,pM=518,mM=519,e0=35044,t0="300 es",Gi=2e3,Jc=2001;class Us{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let n0=1234567;const Xo=Math.PI/180,Qo=180/Math.PI;function Fr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Rt(r,e,i){return Math.max(e,Math.min(i,r))}function Jd(r,e){return(r%e+e)%e}function gM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function _M(r,e,i){return r!==e?(i-r)/(e-r):0}function qo(r,e,i){return(1-i)*r+i*e}function vM(r,e,i,s){return qo(r,e,1-Math.exp(-i*s))}function xM(r,e=1){return e-Math.abs(Jd(r,e*2)-e)}function yM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function SM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function MM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function EM(r,e){return r+Math.random()*(e-r)}function bM(r){return r*(.5-Math.random())}function TM(r){r!==void 0&&(n0=r);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AM(r){return r*Xo}function RM(r){return r*Qo}function CM(r){return(r&r-1)===0&&r!==0}function wM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function DM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function NM(r,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),g=h(i/2),m=c((e+s)/2),v=h((e+s)/2),S=c((e-s)/2),y=h((e-s)/2),b=c((s-e)/2),M=h((s-e)/2);switch(l){case"XYX":r.set(d*v,g*S,g*y,d*m);break;case"YZY":r.set(g*y,d*v,g*S,d*m);break;case"ZXZ":r.set(g*S,g*y,d*v,d*m);break;case"XZX":r.set(d*v,g*M,g*b,d*m);break;case"YXY":r.set(g*b,d*v,g*M,d*m);break;case"ZYZ":r.set(g*M,g*b,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ar(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fi={DEG2RAD:Xo,RAD2DEG:Qo,generateUUID:Fr,clamp:Rt,euclideanModulo:Jd,mapLinear:gM,inverseLerp:_M,lerp:qo,damp:vM,pingpong:xM,smoothstep:yM,smootherstep:SM,randInt:MM,randFloat:EM,randFloatSpread:bM,seededRandom:TM,degToRad:AM,radToDeg:RM,isPowerOfTwo:CM,ceilPowerOfTwo:wM,floorPowerOfTwo:DM,setQuaternionFromProperEuler:NM,normalize:Hn,denormalize:Ar};class Mt{constructor(e=0,i=0){Mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ds{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let g=s[l+0],m=s[l+1],v=s[l+2],S=s[l+3];const y=c[h+0],b=c[h+1],M=c[h+2],C=c[h+3];if(d===0){e[i+0]=g,e[i+1]=m,e[i+2]=v,e[i+3]=S;return}if(d===1){e[i+0]=y,e[i+1]=b,e[i+2]=M,e[i+3]=C;return}if(S!==C||g!==y||m!==b||v!==M){let x=1-d;const _=g*y+m*b+v*M+S*C,I=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const B=Math.sqrt(O),G=Math.atan2(B,_*I);x=Math.sin(x*G)/B,d=Math.sin(d*G)/B}const U=d*I;if(g=g*x+y*U,m=m*x+b*U,v=v*x+M*U,S=S*x+C*U,x===1-d){const B=1/Math.sqrt(g*g+m*m+v*v+S*S);g*=B,m*=B,v*=B,S*=B}}e[i]=g,e[i+1]=m,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],g=s[l+1],m=s[l+2],v=s[l+3],S=c[h],y=c[h+1],b=c[h+2],M=c[h+3];return e[i]=d*M+v*S+g*b-m*y,e[i+1]=g*M+v*y+m*S-d*b,e[i+2]=m*M+v*b+d*y-g*S,e[i+3]=v*M-d*S-g*y-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,g=Math.sin,m=d(s/2),v=d(l/2),S=d(c/2),y=g(s/2),b=g(l/2),M=g(c/2);switch(h){case"XYZ":this._x=y*v*S+m*b*M,this._y=m*b*S-y*v*M,this._z=m*v*M+y*b*S,this._w=m*v*S-y*b*M;break;case"YXZ":this._x=y*v*S+m*b*M,this._y=m*b*S-y*v*M,this._z=m*v*M-y*b*S,this._w=m*v*S+y*b*M;break;case"ZXY":this._x=y*v*S-m*b*M,this._y=m*b*S+y*v*M,this._z=m*v*M+y*b*S,this._w=m*v*S-y*b*M;break;case"ZYX":this._x=y*v*S-m*b*M,this._y=m*b*S+y*v*M,this._z=m*v*M-y*b*S,this._w=m*v*S+y*b*M;break;case"YZX":this._x=y*v*S+m*b*M,this._y=m*b*S+y*v*M,this._z=m*v*M-y*b*S,this._w=m*v*S-y*b*M;break;case"XZY":this._x=y*v*S-m*b*M,this._y=m*b*S-y*v*M,this._z=m*v*M+y*b*S,this._w=m*v*S+y*b*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],g=i[9],m=i[2],v=i[6],S=i[10],y=s+d+S;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(v-g)*b,this._y=(c-m)*b,this._z=(h-l)*b}else if(s>d&&s>S){const b=2*Math.sqrt(1+s-d-S);this._w=(v-g)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(c+m)/b}else if(d>S){const b=2*Math.sqrt(1+d-s-S);this._w=(c-m)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(g+v)/b}else{const b=2*Math.sqrt(1+S-s-d);this._w=(h-l)/b,this._x=(c+m)/b,this._y=(g+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,g=i._y,m=i._z,v=i._w;return this._x=s*v+h*d+l*m-c*g,this._y=l*v+h*g+c*d-s*m,this._z=c*v+h*m+s*g-l*d,this._w=h*v-s*d-l*g-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const g=1-d*d;if(g<=Number.EPSILON){const b=1-i;return this._w=b*h+i*this._w,this._x=b*s+i*this._x,this._y=b*l+i*this._y,this._z=b*c+i*this._z,this.normalize(),this}const m=Math.sqrt(g),v=Math.atan2(m,d),S=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=h*S+this._w*y,this._x=s*S+this._x*y,this._y=l*S+this._y*y,this._z=c*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(i0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,g=e.w,m=2*(h*l-d*s),v=2*(d*i-c*l),S=2*(c*s-h*i);return this.x=i+g*m+h*S-d*v,this.y=s+g*v+d*m-c*S,this.z=l+g*S+c*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,g=i.z;return this.x=l*g-c*d,this.y=c*h-s*g,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new J,i0=new Ds;class vt{constructor(e,i,s,l,c,h,d,g,m){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,m)}set(e,i,s,l,c,h,d,g,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=g,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],g=s[6],m=s[1],v=s[4],S=s[7],y=s[2],b=s[5],M=s[8],C=l[0],x=l[3],_=l[6],I=l[1],O=l[4],U=l[7],B=l[2],G=l[5],j=l[8];return c[0]=h*C+d*I+g*B,c[3]=h*x+d*O+g*G,c[6]=h*_+d*U+g*j,c[1]=m*C+v*I+S*B,c[4]=m*x+v*O+S*G,c[7]=m*_+v*U+S*j,c[2]=y*C+b*I+M*B,c[5]=y*x+b*O+M*G,c[8]=y*_+b*U+M*j,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-s*c*v+s*d*g+l*c*m-l*h*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],m=e[7],v=e[8],S=v*h-d*m,y=d*g-v*c,b=m*c-h*g,M=i*S+s*y+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=S*C,e[1]=(l*m-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=y*C,e[4]=(v*i-l*g)*C,e[5]=(l*c-d*i)*C,e[6]=b*C,e[7]=(s*g-m*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const g=Math.cos(c),m=Math.sin(c);return this.set(s*g,s*m,-s*(g*h+m*d)+h+e,-l*m,l*g,-l*(-m*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(vh.makeScale(e,i)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,i){return this.premultiply(vh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new vt;function bv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function UM(){const r=$c("canvas");return r.style.display="block",r}const a0={};function Jo(r){r in a0||(a0[r]=!0,console.warn(r))}function LM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const s0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OM(){const r={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Wt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Wt&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ir]:{primaries:e,whitePoint:s,transfer:Qc,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:s,transfer:Wt,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),r}const Pt=OM();function pa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let dr;class PM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{dr===void 0&&(dr=$c("canvas")),dr.width=e.width,dr.height=e.height;const l=dr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=dr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=pa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zM=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=Fr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(xh(l[h].image)):c.push(xh(l[h]))}else c=xh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?PM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IM=0;const yh=new J;class ei extends Us{constructor(e=ei.DEFAULT_IMAGE,i=ei.DEFAULT_MAPPING,s=Rs,l=Rs,c=ji,h=Cs,d=Di,g=ma,m=ei.DEFAULT_ANISOTROPY,v=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Fr(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ld:e.x=e.x-Math.floor(e.x);break;case Rs:e.x=e.x<0?0:1;break;case cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ld:e.y=e.y-Math.floor(e.y);break;case Rs:e.y=e.y<0?0:1;break;case cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=pv;ei.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,m=g[0],v=g[4],S=g[8],y=g[1],b=g[5],M=g[9],C=g[2],x=g[6],_=g[10];if(Math.abs(v-y)<.01&&Math.abs(S-C)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+y)<.1&&Math.abs(S+C)<.1&&Math.abs(M+x)<.1&&Math.abs(m+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(b+1)/2,B=(_+1)/2,G=(v+y)/4,j=(S+C)/4,K=(M+x)/4;return O>U&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=G/s,c=j/s):U>B?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=G/l,c=K/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=j/c,l=K/c),this.set(s,l,c,i),this}let I=Math.sqrt((x-M)*(x-M)+(S-C)*(S-C)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(x-M)/I,this.y=(S-C)/I,this.z=(y-v)/I,this.w=Math.acos((m+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BM extends Us{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new ei(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new $d(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ns extends BM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Tv extends ei{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends ei{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),dc.subVectors(this.max,Io),pr.subVectors(e.a,Io),mr.subVectors(e.b,Io),gr.subVectors(e.c,Io),ja.subVectors(mr,pr),Ga.subVectors(gr,mr),vs.subVectors(pr,gr);let i=[0,-ja.z,ja.y,0,-Ga.z,Ga.y,0,-vs.z,vs.y,ja.z,0,-ja.x,Ga.z,0,-Ga.x,vs.z,0,-vs.x,-ja.y,ja.x,0,-Ga.y,Ga.x,0,-vs.y,vs.x,0];return!Sh(i,pr,mr,gr,dc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,pr,mr,gr,dc))?!1:(pc.crossVectors(ja,Ga),i=[pc.x,pc.y,pc.z],Sh(i,pr,mr,gr,dc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,hc=new Qa,pr=new J,mr=new J,gr=new J,ja=new J,Ga=new J,vs=new J,Io=new J,dc=new J,pc=new J,xs=new J;function Sh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){xs.fromArray(r,c);const d=l.x*Math.abs(xs.x)+l.y*Math.abs(xs.y)+l.z*Math.abs(xs.z),g=e.dot(xs),m=i.dot(xs),v=s.dot(xs);if(Math.max(-Math.max(g,m,v),Math.min(g,m,v))>d)return!1}return!0}const HM=new Qa,Bo=new J,Mh=new J;class el{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):HM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Mh)),this.expandByPoint(Bo.copy(e.center).sub(Mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ra=new J,Eh=new J,mc=new J,Va=new J,bh=new J,gc=new J,Th=new J;class tl{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ra)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ra.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Eh.copy(e).add(i).multiplyScalar(.5),mc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(Eh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(mc),d=Va.dot(this.direction),g=-Va.dot(mc),m=Va.lengthSq(),v=Math.abs(1-h*h);let S,y,b,M;if(v>0)if(S=h*g-d,y=h*d-g,M=c*v,S>=0)if(y>=-M)if(y<=M){const C=1/v;S*=C,y*=C,b=S*(S+h*y+2*d)+y*(h*S+y+2*g)+m}else y=c,S=Math.max(0,-(h*y+d)),b=-S*S+y*(y+2*g)+m;else y=-c,S=Math.max(0,-(h*y+d)),b=-S*S+y*(y+2*g)+m;else y<=-M?(S=Math.max(0,-(-h*c+d)),y=S>0?-c:Math.min(Math.max(-c,-g),c),b=-S*S+y*(y+2*g)+m):y<=M?(S=0,y=Math.min(Math.max(-c,-g),c),b=y*(y+2*g)+m):(S=Math.max(0,-(h*c+d)),y=S>0?c:Math.min(Math.max(-c,-g),c),b=-S*S+y*(y+2*g)+m);else y=h>0?-c:c,S=Math.max(0,-(h*y+d)),b=-S*S+y*(y+2*g)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Eh).addScaledVector(mc,y),b}intersectSphere(e,i){ra.subVectors(e.center,this.origin);const s=ra.dot(this.direction),l=ra.dot(ra)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,g;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),v>=0?(c=(e.min.y-y.y)*v,h=(e.max.y-y.y)*v):(c=(e.max.y-y.y)*v,h=(e.min.y-y.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-y.z)*S,g=(e.max.z-y.z)*S):(d=(e.max.z-y.z)*S,g=(e.min.z-y.z)*S),s>g||d>l)||((d>s||s!==s)&&(s=d),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ra)!==null}intersectTriangle(e,i,s,l,c){bh.subVectors(i,e),gc.subVectors(s,e),Th.crossVectors(bh,gc);let h=this.direction.dot(Th),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,e);const g=d*this.direction.dot(gc.crossVectors(Va,gc));if(g<0)return null;const m=d*this.direction.dot(bh.cross(Va));if(m<0||g+m>h)return null;const v=-d*Va.dot(Th);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,c,h,d,g,m,v,S,y,b,M,C,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,m,v,S,y,b,M,C,x)}set(e,i,s,l,c,h,d,g,m,v,S,y,b,M,C,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=g,_[2]=m,_[6]=v,_[10]=S,_[14]=y,_[3]=b,_[7]=M,_[11]=C,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/_r.setFromMatrixColumn(e,0).length(),c=1/_r.setFromMatrixColumn(e,1).length(),h=1/_r.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),m=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const y=h*v,b=h*S,M=d*v,C=d*S;i[0]=g*v,i[4]=-g*S,i[8]=m,i[1]=b+M*m,i[5]=y-C*m,i[9]=-d*g,i[2]=C-y*m,i[6]=M+b*m,i[10]=h*g}else if(e.order==="YXZ"){const y=g*v,b=g*S,M=m*v,C=m*S;i[0]=y+C*d,i[4]=M*d-b,i[8]=h*m,i[1]=h*S,i[5]=h*v,i[9]=-d,i[2]=b*d-M,i[6]=C+y*d,i[10]=h*g}else if(e.order==="ZXY"){const y=g*v,b=g*S,M=m*v,C=m*S;i[0]=y-C*d,i[4]=-h*S,i[8]=M+b*d,i[1]=b+M*d,i[5]=h*v,i[9]=C-y*d,i[2]=-h*m,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const y=h*v,b=h*S,M=d*v,C=d*S;i[0]=g*v,i[4]=M*m-b,i[8]=y*m+C,i[1]=g*S,i[5]=C*m+y,i[9]=b*m-M,i[2]=-m,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const y=h*g,b=h*m,M=d*g,C=d*m;i[0]=g*v,i[4]=C-y*S,i[8]=M*S+b,i[1]=S,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=b*S+M,i[10]=y-C*S}else if(e.order==="XZY"){const y=h*g,b=h*m,M=d*g,C=d*m;i[0]=g*v,i[4]=-S,i[8]=m*v,i[1]=y*S+C,i[5]=h*v,i[9]=b*S-M,i[2]=M*S-b,i[6]=d*v,i[10]=C*S+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jM,e,GM)}lookAt(e,i,s){const l=this.elements;return li.subVectors(e,i),li.lengthSq()===0&&(li.z=1),li.normalize(),ka.crossVectors(s,li),ka.lengthSq()===0&&(Math.abs(s.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ka.crossVectors(s,li)),ka.normalize(),_c.crossVectors(li,ka),l[0]=ka.x,l[4]=_c.x,l[8]=li.x,l[1]=ka.y,l[5]=_c.y,l[9]=li.y,l[2]=ka.z,l[6]=_c.z,l[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],g=s[8],m=s[12],v=s[1],S=s[5],y=s[9],b=s[13],M=s[2],C=s[6],x=s[10],_=s[14],I=s[3],O=s[7],U=s[11],B=s[15],G=l[0],j=l[4],K=l[8],T=l[12],D=l[1],H=l[5],ne=l[9],le=l[13],X=l[2],ae=l[6],P=l[10],Z=l[14],k=l[3],ge=l[7],L=l[11],Q=l[15];return c[0]=h*G+d*D+g*X+m*k,c[4]=h*j+d*H+g*ae+m*ge,c[8]=h*K+d*ne+g*P+m*L,c[12]=h*T+d*le+g*Z+m*Q,c[1]=v*G+S*D+y*X+b*k,c[5]=v*j+S*H+y*ae+b*ge,c[9]=v*K+S*ne+y*P+b*L,c[13]=v*T+S*le+y*Z+b*Q,c[2]=M*G+C*D+x*X+_*k,c[6]=M*j+C*H+x*ae+_*ge,c[10]=M*K+C*ne+x*P+_*L,c[14]=M*T+C*le+x*Z+_*Q,c[3]=I*G+O*D+U*X+B*k,c[7]=I*j+O*H+U*ae+B*ge,c[11]=I*K+O*ne+U*P+B*L,c[15]=I*T+O*le+U*Z+B*Q,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],g=e[9],m=e[13],v=e[2],S=e[6],y=e[10],b=e[14],M=e[3],C=e[7],x=e[11],_=e[15];return M*(+c*g*S-l*m*S-c*d*y+s*m*y+l*d*b-s*g*b)+C*(+i*g*b-i*m*y+c*h*y-l*h*b+l*m*v-c*g*v)+x*(+i*m*S-i*d*b-c*h*S+s*h*b+c*d*v-s*m*v)+_*(-l*d*v-i*g*S+i*d*y+l*h*S-s*h*y+s*g*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],m=e[7],v=e[8],S=e[9],y=e[10],b=e[11],M=e[12],C=e[13],x=e[14],_=e[15],I=S*x*m-C*y*m+C*g*b-d*x*b-S*g*_+d*y*_,O=M*y*m-v*x*m-M*g*b+h*x*b+v*g*_-h*y*_,U=v*C*m-M*S*m+M*d*b-h*C*b-v*d*_+h*S*_,B=M*S*g-v*C*g-M*d*y+h*C*y+v*d*x-h*S*x,G=i*I+s*O+l*U+c*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/G;return e[0]=I*j,e[1]=(C*y*c-S*x*c-C*l*b+s*x*b+S*l*_-s*y*_)*j,e[2]=(d*x*c-C*g*c+C*l*m-s*x*m-d*l*_+s*g*_)*j,e[3]=(S*g*c-d*y*c-S*l*m+s*y*m+d*l*b-s*g*b)*j,e[4]=O*j,e[5]=(v*x*c-M*y*c+M*l*b-i*x*b-v*l*_+i*y*_)*j,e[6]=(M*g*c-h*x*c-M*l*m+i*x*m+h*l*_-i*g*_)*j,e[7]=(h*y*c-v*g*c+v*l*m-i*y*m-h*l*b+i*g*b)*j,e[8]=U*j,e[9]=(M*S*c-v*C*c-M*s*b+i*C*b+v*s*_-i*S*_)*j,e[10]=(h*C*c-M*d*c+M*s*m-i*C*m-h*s*_+i*d*_)*j,e[11]=(v*d*c-h*S*c-v*s*m+i*S*m+h*s*b-i*d*b)*j,e[12]=B*j,e[13]=(v*C*l-M*S*l+M*s*y-i*C*y-v*s*x+i*S*x)*j,e[14]=(M*d*l-h*C*l-M*s*g+i*C*g+h*s*x-i*d*x)*j,e[15]=(h*S*l-v*d*l+v*s*g-i*S*g-h*s*y+i*d*y)*j,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,g=e.z,m=c*h,v=c*d;return this.set(m*h+s,m*d-l*g,m*g+l*d,0,m*d+l*g,v*d+s,v*g-l*h,0,m*g-l*d,v*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,g=i._w,m=c+c,v=h+h,S=d+d,y=c*m,b=c*v,M=c*S,C=h*v,x=h*S,_=d*S,I=g*m,O=g*v,U=g*S,B=s.x,G=s.y,j=s.z;return l[0]=(1-(C+_))*B,l[1]=(b+U)*B,l[2]=(M-O)*B,l[3]=0,l[4]=(b-U)*G,l[5]=(1-(y+_))*G,l[6]=(x+I)*G,l[7]=0,l[8]=(M+O)*j,l[9]=(x-I)*j,l[10]=(1-(y+C))*j,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=_r.set(l[0],l[1],l[2]).length();const h=_r.set(l[4],l[5],l[6]).length(),d=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const m=1/c,v=1/h,S=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=v,Ri.elements[5]*=v,Ri.elements[6]*=v,Ri.elements[8]*=S,Ri.elements[9]*=S,Ri.elements[10]*=S,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Gi,g=!1){const m=this.elements,v=2*c/(i-e),S=2*c/(s-l),y=(i+e)/(i-e),b=(s+l)/(s-l);let M,C;if(g)M=c/(h-c),C=h*c/(h-c);else if(d===Gi)M=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Jc)M=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=S,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Gi,g=!1){const m=this.elements,v=2/(i-e),S=2/(s-l),y=-(i+e)/(i-e),b=-(s+l)/(s-l);let M,C;if(g)M=1/(h-c),C=h/(h-c);else if(d===Gi)M=-2/(h-c),C=-(h+c)/(h-c);else if(d===Jc)M=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=S,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=M,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const _r=new J,Ri=new an,jM=new J(0,0,0),GM=new J(1,1,1),ka=new J,_c=new J,li=new J,o0=new an,l0=new Ds;class ga{constructor(e=0,i=0,s=0,l=ga.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],g=l[1],m=l[5],v=l[9],S=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Rt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return l0.setFromEuler(this),this.setFromQuaternion(l0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ga.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const c0=new J,vr=new Ds,oa=new an,vc=new J,Fo=new J,kM=new J,XM=new Ds,u0=new J(1,0,0),f0=new J(0,1,0),h0=new J(0,0,1),d0={type:"added"},qM={type:"removed"},xr={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Vn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new J,i=new ga,s=new Ds,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new vt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,i){return vr.setFromAxisAngle(e,i),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(u0,e)}rotateY(e){return this.rotateOnAxis(f0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,i){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(u0,e)}translateY(e){return this.translateOnAxis(f0,e)}translateZ(e){return this.translateOnAxis(h0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Fo,vc,this.up):oa.lookAt(vc,Fo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),vr.setFromRotationMatrix(oa),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(d0),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(qM),Ah.child=e,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(d0),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,kM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let m=0,v=g.length;m<v;m++){const S=g[m];c(e.shapes,S)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,m=this.material.length;g<m;g++)d.push(c(e.materials,this.material[g]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];l.animations.push(c(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),m=h(e.textures),v=h(e.images),S=h(e.shapes),y=h(e.skeletons),b=h(e.animations),M=h(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function h(d){const g=[];for(const m in d){const v=d[m];delete v.metadata,g.push(v)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Vn.DEFAULT_UP=new J(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,la=new J,Rh=new J,ca=new J,yr=new J,Sr=new J,p0=new J,Ch=new J,wh=new J,Dh=new J,Nh=new un,Uh=new un,Lh=new un;class wi{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),la.subVectors(s,i),Rh.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(la),g=Ci.dot(Rh),m=la.dot(la),v=la.dot(Rh),S=h*m-d*d;if(S===0)return c.set(0,0,0),null;const y=1/S,b=(m*g-d*v)*y,M=(h*v-d*g)*y;return c.set(1-b-M,M,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(e,i,s,l,c,h,d,g){return this.getBarycoord(e,i,s,l,ca)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,ca.x),g.addScaledVector(h,ca.y),g.addScaledVector(d,ca.z),g)}static getInterpolatedAttribute(e,i,s,l,c,h){return Nh.setScalar(0),Uh.setScalar(0),Lh.setScalar(0),Nh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,s),Lh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Lh,c.z),h}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),la.subVectors(e,i),Ci.cross(la).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ci.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;yr.subVectors(l,s),Sr.subVectors(c,s),Ch.subVectors(e,s);const g=yr.dot(Ch),m=Sr.dot(Ch);if(g<=0&&m<=0)return i.copy(s);wh.subVectors(e,l);const v=yr.dot(wh),S=Sr.dot(wh);if(v>=0&&S<=v)return i.copy(l);const y=g*S-v*m;if(y<=0&&g>=0&&v<=0)return h=g/(g-v),i.copy(s).addScaledVector(yr,h);Dh.subVectors(e,c);const b=yr.dot(Dh),M=Sr.dot(Dh);if(M>=0&&b<=M)return i.copy(c);const C=b*m-g*M;if(C<=0&&m>=0&&M<=0)return d=m/(m-M),i.copy(s).addScaledVector(Sr,d);const x=v*M-b*S;if(x<=0&&S-v>=0&&b-M>=0)return p0.subVectors(c,l),d=(S-v)/(S-v+(b-M)),i.copy(l).addScaledVector(p0,d);const _=1/(x+C+y);return h=C*_,d=y*_,i.copy(s).addScaledVector(yr,h).addScaledVector(Sr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},xc={h:0,s:0,l:0};function Oh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class zt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Pt.workingColorSpace){if(e=Jd(e,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Oh(h,c,e+1/3),this.g=Oh(h,c,e),this.b=Oh(h,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=Gn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Gn){const s=Av[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Pt.workingToColorSpace(On.copy(this),e),Math.round(Rt(On.r*255,0,255))*65536+Math.round(Rt(On.g*255,0,255))*256+Math.round(Rt(On.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let g,m;const v=(d+h)/2;if(d===h)g=0,m=0;else{const S=h-d;switch(m=v<=.5?S/(h+d):S/(2-h-d),h){case s:g=(l-c)/S+(l<c?6:0);break;case l:g=(c-s)/S+2;break;case c:g=(s-l)/S+4;break}g/=6}return e.h=g,e.s=m,e.l=v,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Gn){Pt.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==Gn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+e,Xa.s+i,Xa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Xa),e.getHSL(xc);const s=qo(Xa.h,xc.h,i),l=qo(Xa.s,xc.s,i),c=qo(Xa.l,xc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new zt;zt.NAMES=Av;let WM=0;class Hr extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Ur,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(s.blending=this.blending),this.side!==Ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Jh&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const g=c[d];delete g.metadata,h.push(g)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eu extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ga,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new J,yc=new Mt;let YM=0;class Si{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=e0,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(e),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ar(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ar(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ar(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ar(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ar(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e0&&(e.usage=this.usage),e}}class Rv extends Si{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Cv extends Si{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class kn extends Si{constructor(e,i,s){super(new Float32Array(e),i,s)}}let ZM=0;const vi=new an,Ph=new Vn,Mr=new J,ci=new Qa,Ho=new Qa,bn=new J;class ui extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bv(e)?Cv:Rv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return Ph.lookAt(e),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(ci.min,Ho.min),ci.expandByPoint(bn),bn.addVectors(ci.max,Ho.max),ci.expandByPoint(bn)):(ci.expandByPoint(Ho.min),ci.expandByPoint(Ho.max))}ci.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],g=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)bn.fromBufferAttribute(d,m),g&&(Mr.fromBufferAttribute(e,m),bn.add(Mr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let K=0;K<s.count;K++)d[K]=new J,g[K]=new J;const m=new J,v=new J,S=new J,y=new Mt,b=new Mt,M=new Mt,C=new J,x=new J;function _(K,T,D){m.fromBufferAttribute(s,K),v.fromBufferAttribute(s,T),S.fromBufferAttribute(s,D),y.fromBufferAttribute(c,K),b.fromBufferAttribute(c,T),M.fromBufferAttribute(c,D),v.sub(m),S.sub(m),b.sub(y),M.sub(y);const H=1/(b.x*M.y-M.x*b.y);isFinite(H)&&(C.copy(v).multiplyScalar(M.y).addScaledVector(S,-b.y).multiplyScalar(H),x.copy(S).multiplyScalar(b.x).addScaledVector(v,-M.x).multiplyScalar(H),d[K].add(C),d[T].add(C),d[D].add(C),g[K].add(x),g[T].add(x),g[D].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,T=I.length;K<T;++K){const D=I[K],H=D.start,ne=D.count;for(let le=H,X=H+ne;le<X;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const O=new J,U=new J,B=new J,G=new J;function j(K){B.fromBufferAttribute(l,K),G.copy(B);const T=d[K];O.copy(T),O.sub(B.multiplyScalar(B.dot(T))).normalize(),U.crossVectors(G,T);const H=U.dot(g[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,H)}for(let K=0,T=I.length;K<T;++K){const D=I[K],H=D.start,ne=D.count;for(let le=H,X=H+ne;le<X;le+=3)j(e.getX(le+0)),j(e.getX(le+1)),j(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new J,c=new J,h=new J,d=new J,g=new J,m=new J,v=new J,S=new J;if(e)for(let y=0,b=e.count;y<b;y+=3){const M=e.getX(y+0),C=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,C),m.fromBufferAttribute(s,x),d.add(v),g.add(v),m.add(v),s.setXYZ(M,d.x,d.y,d.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,g){const m=d.array,v=d.itemSize,S=d.normalized,y=new m.constructor(g.length*v);let b=0,M=0;for(let C=0,x=g.length;C<x;C++){d.isInterleavedBufferAttribute?b=g[C]*d.data.stride+d.offset:b=g[C]*v;for(let _=0;_<v;_++)y[M++]=m[b++]}return new Si(y,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,s=this.index.array,l=this.attributes;for(const d in l){const g=l[d],m=e(g,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const g=[],m=c[d];for(let v=0,S=m.length;v<S;v++){const y=m[v],b=e(y,s);g.push(b)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const m=s[g];e.data.attributes[g]=m.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],v=[];for(let S=0,y=m.length;S<y;S++){const b=m[S];v.push(b.toJSON(e.data))}v.length>0&&(l[g]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=e.morphAttributes;for(const m in c){const v=[],S=c[m];for(let y=0,b=S.length;y<b;y++)v.push(S[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const S=h[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m0=new an,ys=new tl,Sc=new el,g0=new J,Mc=new J,Ec=new J,bc=new J,zh=new J,Tc=new J,_0=new J,Ac=new J;class yi extends Vn{constructor(e=new ui,i=new eu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Tc.set(0,0,0);for(let g=0,m=c.length;g<m;g++){const v=d[g],S=c[g];v!==0&&(zh.fromBufferAttribute(S,e),h?Tc.addScaledVector(zh,v):Tc.addScaledVector(zh.sub(i),v))}i.add(Tc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),ys.copy(e.ray).recast(e.near),!(Sc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Sc,g0)===null||ys.origin.distanceToSquared(g0)>(e.far-e.near)**2))&&(m0.copy(c).invert(),ys.copy(e.ray).applyMatrix4(m0),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ys)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,g=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,y=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(h))for(let M=0,C=y.length;M<C;M++){const x=y[M],_=h[x.materialIndex],I=Math.max(x.start,b.start),O=Math.min(d.count,Math.min(x.start+x.count,b.start+b.count));for(let U=I,B=O;U<B;U+=3){const G=d.getX(U),j=d.getX(U+1),K=d.getX(U+2);l=Rc(this,_,e,s,m,v,S,G,j,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let x=M,_=C;x<_;x+=3){const I=d.getX(x),O=d.getX(x+1),U=d.getX(x+2);l=Rc(this,h,e,s,m,v,S,I,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let M=0,C=y.length;M<C;M++){const x=y[M],_=h[x.materialIndex],I=Math.max(x.start,b.start),O=Math.min(g.count,Math.min(x.start+x.count,b.start+b.count));for(let U=I,B=O;U<B;U+=3){const G=U,j=U+1,K=U+2;l=Rc(this,_,e,s,m,v,S,G,j,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),C=Math.min(g.count,b.start+b.count);for(let x=M,_=C;x<_;x+=3){const I=x,O=x+1,U=x+2;l=Rc(this,h,e,s,m,v,S,I,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function KM(r,e,i,s,l,c,h,d){let g;if(e.side===$n?g=s.intersectTriangle(h,c,l,!0,d):g=s.intersectTriangle(l,c,h,e.side===Ja,d),g===null)return null;Ac.copy(d),Ac.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Ac);return m<i.near||m>i.far?null:{distance:m,point:Ac.clone(),object:r}}function Rc(r,e,i,s,l,c,h,d,g,m){r.getVertexPosition(d,Mc),r.getVertexPosition(g,Ec),r.getVertexPosition(m,bc);const v=KM(r,e,i,s,Mc,Ec,bc,_0);if(v){const S=new J;wi.getBarycoord(_0,Mc,Ec,bc,S),l&&(v.uv=wi.getInterpolatedAttribute(l,d,g,m,S,new Mt)),c&&(v.uv1=wi.getInterpolatedAttribute(c,d,g,m,S,new Mt)),h&&(v.normal=wi.getInterpolatedAttribute(h,d,g,m,S,new J),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:g,c:m,normal:new J,materialIndex:0};wi.getNormal(Mc,Ec,bc,y.normal),v.face=y,v.barycoord=S}return v}class nl extends ui{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],m=[],v=[],S=[];let y=0,b=0;M("z","y","x",-1,-1,s,i,e,h,c,0),M("z","y","x",1,-1,s,i,-e,h,c,1),M("x","z","y",1,1,e,s,i,l,h,2),M("x","z","y",1,-1,e,s,-i,l,h,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(v,3)),this.setAttribute("uv",new kn(S,2));function M(C,x,_,I,O,U,B,G,j,K,T){const D=U/j,H=B/K,ne=U/2,le=B/2,X=G/2,ae=j+1,P=K+1;let Z=0,k=0;const ge=new J;for(let L=0;L<P;L++){const Q=L*H-le;for(let fe=0;fe<ae;fe++){const xe=fe*D-ne;ge[C]=xe*I,ge[x]=Q*O,ge[_]=X,m.push(ge.x,ge.y,ge.z),ge[C]=0,ge[x]=0,ge[_]=G>0?1:-1,v.push(ge.x,ge.y,ge.z),S.push(fe/j),S.push(1-L/K),Z+=1}}for(let L=0;L<K;L++)for(let Q=0;Q<j;Q++){const fe=y+Q+ae*L,xe=y+Q+ae*(L+1),de=y+(Q+1)+ae*(L+1),Ie=y+(Q+1)+ae*L;g.push(fe,xe,Ie),g.push(xe,de,Ie),k+=6}d.addGroup(b,k,T),b+=k,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Br(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function jn(r){const e={};for(let i=0;i<r.length;i++){const s=Br(r[i]);for(const l in s)e[l]=s[l]}return e}function QM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function wv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const JM={clone:Br,merge:jn};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $a extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=QM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Dv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new J,v0=new Mt,x0=new Mt;class Jn extends Dv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-e/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qa.x,qa.y).multiplyScalar(-e/qa.z)}getViewSize(e,i){return this.getViewBounds(e,v0,x0),i.subVectors(x0,v0)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Xo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/m,l*=h.width/g,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Er=-90,br=1;class tE extends Vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(Er,br,e,i);l.layers=this.layers,this.add(l);const c=new Jn(Er,br,e,i);c.layers=this.layers,this.add(c);const h=new Jn(Er,br,e,i);h.layers=this.layers,this.add(h);const d=new Jn(Er,br,e,i);d.layers=this.layers,this.add(d);const g=new Jn(Er,br,e,i);g.layers=this.layers,this.add(g);const m=new Jn(Er,br,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,g]=i;for(const m of i)this.remove(m);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,g,m,v]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,g),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(S,y,b),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Nv extends ei{constructor(e=[],i=Pr,s,l,c,h,d,g,m,v){super(e,i,s,l,c,h,d,g,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nE extends Ns{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Nv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new $a({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:$n,blending:Za});c.uniforms.tEquirect.value=i;const h=new yi(l,c),d=i.minFilter;return i.minFilter===Cs&&(i.minFilter=ji),new tE(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Cr extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iE={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,g=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const x=i.getJointPose(C,s),_=this._getHandJoint(m,C);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],y=v.position.distanceTo(S.position),b=.02,M=.005;m.inputState.pinching&&y>b+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=b-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(iE)))}return d!==null&&(d.visible=l!==null),g!==null&&(g.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Cr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class aE extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ga,this.environmentIntensity=1,this.environmentRotation=new ga,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Bh=new J,sE=new J,rE=new vt;class Wa{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Bh.subVectors(s,i).cross(sE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Bh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||rE.getNormalMatrix(e),l=this.coplanarPoint(Bh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new el,oE=new Mt(.5,.5),Cc=new J;class Uv{constructor(e=new Wa,i=new Wa,s=new Wa,l=new Wa,c=new Wa,h=new Wa){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],g=c[2],m=c[3],v=c[4],S=c[5],y=c[6],b=c[7],M=c[8],C=c[9],x=c[10],_=c[11],I=c[12],O=c[13],U=c[14],B=c[15];if(l[0].setComponents(m-h,b-v,_-M,B-I).normalize(),l[1].setComponents(m+h,b+v,_+M,B+I).normalize(),l[2].setComponents(m+d,b+S,_+C,B+O).normalize(),l[3].setComponents(m-d,b-S,_-C,B-O).normalize(),s)l[4].setComponents(g,y,x,U).normalize(),l[5].setComponents(m-g,b-y,_-x,B-U).normalize();else if(l[4].setComponents(m-g,b-y,_-x,B-U).normalize(),i===Gi)l[5].setComponents(m+g,b+y,_+x,B+U).normalize();else if(i===Jc)l[5].setComponents(g,y,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const i=oE.distanceTo(e.center);return Ss.radius=.7071067811865476+i,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Cc.x=l.normal.x>0?e.max.x:e.min.x,Cc.y=l.normal.y>0?e.max.y:e.min.y,Cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tp extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new J,nu=new J,y0=new an,jo=new tl,wc=new el,Fh=new J,S0=new J;class Lv extends Vn{constructor(e=new ui,i=new tp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)tu.fromBufferAttribute(i,l-1),nu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,e.ray.intersectsSphere(wc)===!1)return;y0.copy(l).invert(),jo.copy(e.ray).applyMatrix4(y0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const b=Math.max(0,h.start),M=Math.min(v.count,h.start+h.count);for(let C=b,x=M-1;C<x;C+=m){const _=v.getX(C),I=v.getX(C+1),O=Dc(this,e,jo,g,_,I,C);O&&i.push(O)}if(this.isLineLoop){const C=v.getX(M-1),x=v.getX(b),_=Dc(this,e,jo,g,C,x,M-1);_&&i.push(_)}}else{const b=Math.max(0,h.start),M=Math.min(y.count,h.start+h.count);for(let C=b,x=M-1;C<x;C+=m){const _=Dc(this,e,jo,g,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Dc(this,e,jo,g,M-1,b,M-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Dc(r,e,i,s,l,c,h){const d=r.geometry.attributes.position;if(tu.fromBufferAttribute(d,l),nu.fromBufferAttribute(d,c),i.distanceSqToSegment(tu,nu,Fh,S0)>s)return;Fh.applyMatrix4(r.matrixWorld);const m=e.ray.origin.distanceTo(Fh);if(!(m<e.near||m>e.far))return{distance:m,point:S0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const M0=new J,E0=new J;class Ov extends Lv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)M0.fromBufferAttribute(i,l),E0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+M0.distanceTo(E0);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pv extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const b0=new an,Bd=new tl,Nc=new el,Uc=new J;class zv extends Vn{constructor(e=new ui,i=new Pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,e.ray.intersectsSphere(Nc)===!1)return;b0.copy(l).invert(),Bd.copy(e.ray).applyMatrix4(b0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,m=s.index,S=s.attributes.position;if(m!==null){const y=Math.max(0,h.start),b=Math.min(m.count,h.start+h.count);for(let M=y,C=b;M<C;M++){const x=m.getX(M);Uc.fromBufferAttribute(S,x),T0(Uc,x,g,l,e,i,this)}}else{const y=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let M=y,C=b;M<C;M++)Uc.fromBufferAttribute(S,M),T0(Uc,M,g,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function T0(r,e,i,s,l,c,h){const d=Bd.distanceSqToPoint(r);if(d<i){const g=new J;Bd.closestPointToPoint(r,g),g.applyMatrix4(s);const m=l.ray.origin.distanceTo(g);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Iv extends ei{constructor(e,i,s=ws,l,c,h,d=Ni,g=Ni,m,v=Zo,S=1){if(v!==Zo&&v!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:S};super(y,l,c,h,d,g,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Bv extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ru extends ui{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),g=Math.floor(l),m=d+1,v=g+1,S=e/d,y=i/g,b=[],M=[],C=[],x=[];for(let _=0;_<v;_++){const I=_*y-h;for(let O=0;O<m;O++){const U=O*S-c;M.push(U,-I,0),C.push(0,0,1),x.push(O/d),x.push(1-_/g)}}for(let _=0;_<g;_++)for(let I=0;I<d;I++){const O=I+m*_,U=I+m*(_+1),B=I+1+m*(_+1),G=I+1+m*_;b.push(O,U,G),b.push(U,B,G)}this.setIndex(b),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(C,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class iu extends ui{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+d,Math.PI);let m=0;const v=[],S=new J,y=new J,b=[],M=[],C=[],x=[];for(let _=0;_<=s;_++){const I=[],O=_/s;let U=0;_===0&&h===0?U=.5/i:_===s&&g===Math.PI&&(U=-.5/i);for(let B=0;B<=i;B++){const G=B/i;S.x=-e*Math.cos(l+G*c)*Math.sin(h+O*d),S.y=e*Math.cos(h+O*d),S.z=e*Math.sin(l+G*c)*Math.sin(h+O*d),M.push(S.x,S.y,S.z),y.copy(S).normalize(),C.push(y.x,y.y,y.z),x.push(G+U,1-O),I.push(m++)}v.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const O=v[_][I+1],U=v[_][I],B=v[_+1][I],G=v[_+1][I+1];(_!==0||h>0)&&b.push(O,U,G),(_!==s-1||g<Math.PI)&&b.push(U,B,G)}this.setIndex(b),this.setAttribute("position",new kn(M,3)),this.setAttribute("normal",new kn(C,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lE extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cE extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uE extends Dv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=v*this.view.offsetY,g=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class fE extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const A0=new an;class hE{constructor(e,i,s=0,l=1/0){this.ray=new tl(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return A0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A0),this}intersectObject(e,i=!0,s=[]){return Fd(e,this,s,i),s.sort(R0),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Fd(e[l],this,s,i);return s.sort(R0),s}}function R0(r,e){return r.distance-e.distance}function Fd(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Fd(c[h],e,i,!0)}}class C0{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Rt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dE extends Ov{constructor(e=1){const i=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new ui;l.setAttribute("position",new kn(i,3)),l.setAttribute("color",new kn(s,3));const c=new tp({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(e,i,s){const l=new zt,c=this.geometry.attributes.color.array;return l.set(e),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class pE extends Us{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function w0(r,e,i,s){const l=mE(s);switch(i){case xv:return r*e;case Sv:return r*e/l.components*l.byteLength;case Zd:return r*e/l.components*l.byteLength;case Mv:return r*e*2/l.components*l.byteLength;case Kd:return r*e*2/l.components*l.byteLength;case yv:return r*e*3/l.components*l.byteLength;case Di:return r*e*4/l.components*l.byteLength;case Qd:return r*e*4/l.components*l.byteLength;case jc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fd:case dd:return Math.max(r,16)*Math.max(e,8)/4;case ud:case hd:return Math.max(r,8)*Math.max(e,8)/2;case pd:case md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _d:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ud:case Ld:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Od:case Pd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case zd:case Id:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mE(r){switch(r){case ma:case mv:return{byteLength:1,components:1};case Wo:case gv:case $o:return{byteLength:2,components:1};case Wd:case Yd:return{byteLength:2,components:4};case ws:case qd:case da:return{byteLength:4,components:1};case _v:case vv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function gE(r){const e=new WeakMap;function i(d,g){const m=d.array,v=d.usage,S=m.byteLength,y=r.createBuffer();r.bindBuffer(g,y),r.bufferData(g,m,v),d.onUploadCallback();let b;if(m instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=r.SHORT;else if(m instanceof Uint32Array)b=r.UNSIGNED_INT;else if(m instanceof Int32Array)b=r.INT;else if(m instanceof Int8Array)b=r.BYTE;else if(m instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,g,m){const v=g.array,S=g.updateRanges;if(r.bindBuffer(m,d),S.length===0)r.bufferSubData(m,0,v);else{S.sort((b,M)=>b.start-M.start);let y=0;for(let b=1;b<S.length;b++){const M=S[y],C=S[b];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++y,S[y]=C)}S.length=y+1;for(let b=0,M=S.length;b<M;b++){const C=S[b];r.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(r.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,g));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,g),m.version=d.version}}return{get:l,remove:c,update:h}}var _E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
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
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,NE=`#ifdef USE_BUMPMAP
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
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,jE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`struct PhysicalMaterial {
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
}`,gb=`
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ab=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fb=`#ifdef USE_NORMALMAP
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
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t1=`float getShadowMask() {
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
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_1=`uniform sampler2D t2D;
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
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
}`,E1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,b1=`#define DISTANCE
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
}`,T1=`#define DISTANCE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,w1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,U1=`#define LAMBERT
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
}`,L1=`#define LAMBERT
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
}`,O1=`#define MATCAP
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
}`,P1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,I1=`#define NORMAL
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
}`,B1=`#define PHONG
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
}`,F1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,j1=`#define STANDARD
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
}`,G1=`#define TOON
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
}`,V1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,W1=`uniform vec3 color;
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
}`,Y1=`uniform float rotation;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:_E,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:yE,alphatest_fragment:SE,alphatest_pars_fragment:ME,aomap_fragment:EE,aomap_pars_fragment:bE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:RE,beginnormal_vertex:CE,bsdfs:wE,iridescence_fragment:DE,bumpmap_pars_fragment:NE,clipping_planes_fragment:UE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:PE,color_fragment:zE,color_pars_fragment:IE,color_pars_vertex:BE,color_vertex:FE,common:HE,cube_uv_reflection_fragment:jE,defaultnormal_vertex:GE,displacementmap_pars_vertex:VE,displacementmap_vertex:kE,emissivemap_fragment:XE,emissivemap_pars_fragment:qE,colorspace_fragment:WE,colorspace_pars_fragment:YE,envmap_fragment:ZE,envmap_common_pars_fragment:KE,envmap_pars_fragment:QE,envmap_pars_vertex:JE,envmap_physical_pars_fragment:cb,envmap_vertex:$E,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:sb,lights_lambert_fragment:rb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:hb,lights_phong_pars_fragment:db,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:_b,lights_fragment_end:vb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:yb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:Mb,map_fragment:Eb,map_pars_fragment:bb,map_particle_fragment:Tb,map_particle_pars_fragment:Ab,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Cb,morphinstance_vertex:wb,morphcolor_vertex:Db,morphnormal_vertex:Nb,morphtarget_pars_vertex:Ub,morphtarget_vertex:Lb,normal_fragment_begin:Ob,normal_fragment_maps:Pb,normal_pars_fragment:zb,normal_pars_vertex:Ib,normal_vertex:Bb,normalmap_pars_fragment:Fb,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:jb,clearcoat_pars_fragment:Gb,iridescence_pars_fragment:Vb,opaque_fragment:kb,packing:Xb,premultiplied_alpha_fragment:qb,project_vertex:Wb,dithering_fragment:Yb,dithering_pars_fragment:Zb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:$b,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:a1,skinnormal_vertex:s1,specularmap_fragment:r1,specularmap_pars_fragment:o1,tonemapping_fragment:l1,tonemapping_pars_fragment:c1,transmission_fragment:u1,transmission_pars_fragment:f1,uv_pars_fragment:h1,uv_pars_vertex:d1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:_1,backgroundCube_vert:v1,backgroundCube_frag:x1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:E1,distanceRGBA_vert:b1,distanceRGBA_frag:T1,equirect_vert:A1,equirect_frag:R1,linedashed_vert:C1,linedashed_frag:w1,meshbasic_vert:D1,meshbasic_frag:N1,meshlambert_vert:U1,meshlambert_frag:L1,meshmatcap_vert:O1,meshmatcap_frag:P1,meshnormal_vert:z1,meshnormal_frag:I1,meshphong_vert:B1,meshphong_frag:F1,meshphysical_vert:H1,meshphysical_frag:j1,meshtoon_vert:G1,meshtoon_frag:V1,points_vert:k1,points_frag:X1,shadow_vert:q1,shadow_frag:W1,sprite_vert:Y1,sprite_frag:Z1},Xe={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Hi={basic:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new zt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:jn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:jn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new zt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:jn([Xe.points,Xe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:jn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:jn([Xe.common,Xe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:jn([Xe.sprite,Xe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:jn([Xe.common,Xe.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:jn([Xe.lights,Xe.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Hi.physical={uniforms:jn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Lc={r:0,b:0,g:0},Ms=new ga,K1=new an;function Q1(r,e,i,s,l,c,h){const d=new zt(0);let g=c===!0?0:1,m,v,S=null,y=0,b=null;function M(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const B=M(O);B===null?_(d,g):B&&B.isColor&&(_(B,1),U=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(O,U){const B=M(U);B&&(B.isCubeTexture||B.mapping===su)?(v===void 0&&(v=new yi(new nl(1,1,1),new $a({name:"BackgroundCubeMaterial",uniforms:Br(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,j,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ms.copy(U.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),v.material.uniforms.envMap.value=B,v.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(Ms)),v.material.toneMapped=Pt.getTransfer(B.colorSpace)!==Wt,(S!==B||y!==B.version||b!==r.toneMapping)&&(v.material.needsUpdate=!0,S=B,y=B.version,b=r.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new yi(new ru(2,2),new $a({name:"BackgroundMaterial",uniforms:Br(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(B.colorSpace)!==Wt,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(S!==B||y!==B.version||b!==r.toneMapping)&&(m.material.needsUpdate=!0,S=B,y=B.version,b=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,U){O.getRGB(Lc,wv(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,U,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),g=U,_(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(O){g=O,_(d,g)},render:C,addToRenderList:x,dispose:I}}function J1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(D,H,ne,le,X){let ae=!1;const P=S(le,ne,H);c!==P&&(c=P,m(c.object)),ae=b(D,le,ne,X),ae&&M(D,le,ne,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(ae||h)&&(h=!1,U(D,H,ne,le),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function g(){return r.createVertexArray()}function m(D){return r.bindVertexArray(D)}function v(D){return r.deleteVertexArray(D)}function S(D,H,ne){const le=ne.wireframe===!0;let X=s[D.id];X===void 0&&(X={},s[D.id]=X);let ae=X[H.id];ae===void 0&&(ae={},X[H.id]=ae);let P=ae[le];return P===void 0&&(P=y(g()),ae[le]=P),P}function y(D){const H=[],ne=[],le=[];for(let X=0;X<i;X++)H[X]=0,ne[X]=0,le[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ne,attributeDivisors:le,object:D,attributes:{},index:null}}function b(D,H,ne,le){const X=c.attributes,ae=H.attributes;let P=0;const Z=ne.getAttributes();for(const k in Z)if(Z[k].location>=0){const L=X[k];let Q=ae[k];if(Q===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),L===void 0||L.attribute!==Q||Q&&L.data!==Q.data)return!0;P++}return c.attributesNum!==P||c.index!==le}function M(D,H,ne,le){const X={},ae=H.attributes;let P=0;const Z=ne.getAttributes();for(const k in Z)if(Z[k].location>=0){let L=ae[k];L===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(L=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(L=D.instanceColor));const Q={};Q.attribute=L,L&&L.data&&(Q.data=L.data),X[k]=Q,P++}c.attributes=X,c.attributesNum=P,c.index=le}function C(){const D=c.newAttributes;for(let H=0,ne=D.length;H<ne;H++)D[H]=0}function x(D){_(D,0)}function _(D,H){const ne=c.newAttributes,le=c.enabledAttributes,X=c.attributeDivisors;ne[D]=1,le[D]===0&&(r.enableVertexAttribArray(D),le[D]=1),X[D]!==H&&(r.vertexAttribDivisor(D,H),X[D]=H)}function I(){const D=c.newAttributes,H=c.enabledAttributes;for(let ne=0,le=H.length;ne<le;ne++)H[ne]!==D[ne]&&(r.disableVertexAttribArray(ne),H[ne]=0)}function O(D,H,ne,le,X,ae,P){P===!0?r.vertexAttribIPointer(D,H,ne,X,ae):r.vertexAttribPointer(D,H,ne,le,X,ae)}function U(D,H,ne,le){C();const X=le.attributes,ae=ne.getAttributes(),P=H.defaultAttributeValues;for(const Z in ae){const k=ae[Z];if(k.location>=0){let ge=X[Z];if(ge===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ge!==void 0){const L=ge.normalized,Q=ge.itemSize,fe=e.get(ge);if(fe===void 0)continue;const xe=fe.buffer,de=fe.type,Ie=fe.bytesPerElement,ie=de===r.INT||de===r.UNSIGNED_INT||ge.gpuType===qd;if(ge.isInterleavedBufferAttribute){const _e=ge.data,Ce=_e.stride,Ve=ge.offset;if(_e.isInstancedInterleavedBuffer){for(let Ye=0;Ye<k.locationSize;Ye++)_(k.location+Ye,_e.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ye=0;Ye<k.locationSize;Ye++)x(k.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let Ye=0;Ye<k.locationSize;Ye++)O(k.location+Ye,Q/k.locationSize,de,L,Ce*Ie,(Ve+Q/k.locationSize*Ye)*Ie,ie)}else{if(ge.isInstancedBufferAttribute){for(let _e=0;_e<k.locationSize;_e++)_(k.location+_e,ge.meshPerAttribute);D.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let _e=0;_e<k.locationSize;_e++)x(k.location+_e);r.bindBuffer(r.ARRAY_BUFFER,xe);for(let _e=0;_e<k.locationSize;_e++)O(k.location+_e,Q/k.locationSize,de,L,Q*Ie,Q/k.locationSize*_e*Ie,ie)}}else if(P!==void 0){const L=P[Z];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(k.location,L);break;case 3:r.vertexAttrib3fv(k.location,L);break;case 4:r.vertexAttrib4fv(k.location,L);break;default:r.vertexAttrib1fv(k.location,L)}}}}I()}function B(){K();for(const D in s){const H=s[D];for(const ne in H){const le=H[ne];for(const X in le)v(le[X].object),delete le[X];delete H[ne]}delete s[D]}}function G(D){if(s[D.id]===void 0)return;const H=s[D.id];for(const ne in H){const le=H[ne];for(const X in le)v(le[X].object),delete le[X];delete H[ne]}delete s[D.id]}function j(D){for(const H in s){const ne=s[H];if(ne[D.id]===void 0)continue;const le=ne[D.id];for(const X in le)v(le[X].object),delete le[X];delete ne[D.id]}}function K(){T(),h=!0,c!==l&&(c=l,m(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:T,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:j,initAttributes:C,enableAttribute:x,disableUnusedAttributes:I}}function $1(r,e,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function h(m,v,S){S!==0&&(r.drawArraysInstanced(s,m,v,S),i.update(v,s,S))}function d(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,S);let b=0;for(let M=0;M<S;M++)b+=v[M];i.update(b,s,1)}function g(m,v,S,y){if(S===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<m.length;M++)h(m[M],v[M],y[M]);else{b.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,S);let M=0;for(let C=0;C<S;C++)M+=v[C]*y[C];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function eT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(j){return!(j!==Di&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(j){const K=j===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(j!==ma&&s.convert(j)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==da&&!K)}function g(j){if(j==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";j="mediump"}return j==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=g(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:B,maxSamples:G}}function tT(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Wa,d=new vt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const b=S.length!==0||y||s!==0||l;return l=y,s=S.length,b},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,y){i=v(S,y,0)},this.setState=function(S,y,b){const M=S.clippingPlanes,C=S.clipIntersection,x=S.clipShadows,_=r.get(S);if(!l||M===null||M.length===0||c&&!x)c?v(null):m();else{const I=c?0:s,O=I*4;let U=_.clippingState||null;g.value=U,U=v(M,y,O,b);for(let B=0;B!==O;++B)U[B]=i[B];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,y,b,M){const C=S!==null?S.length:0;let x=null;if(C!==0){if(x=g.value,M!==!0||x===null){const _=b+C*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let O=0,U=b;O!==C;++O,U+=4)h.copy(S[O]).applyMatrix4(I,d),h.normal.toArray(x,U),x[U+3]=h.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}function nT(r){let e=new WeakMap;function i(h,d){return d===rd?h.mapping=Pr:d===od&&(h.mapping=zr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===rd||d===od)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const m=new nE(g.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const wr=4,D0=[.125,.215,.35,.446,.526,.582],As=20,Hh=new uE,N0=new zt;let jh=null,Gh=0,Vh=0,kh=!1;const bs=(1+Math.sqrt(5))/2,Tr=1/bs,U0=[new J(-bs,Tr,0),new J(bs,Tr,0),new J(-Tr,0,bs),new J(Tr,0,bs),new J(0,bs,-Tr),new J(0,bs,Tr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],iT=new J;class L0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=iT}=c;jh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh,Gh,Vh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Oc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Pr||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:$o,format:Di,colorSpace:Ir,depthBuffer:!1},l=O0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O0(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aT(c)),this._blurMaterial=sT(c,e,i)}return l}_compileMaterial(e){const i=new yi(this._lodPlanes[0],e);this._renderer.compile(i,Hh)}_sceneToCubeUV(e,i,s,l,c){const g=new Jn(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,y=S.autoClear,b=S.toneMapping;S.getClearColor(N0),S.toneMapping=Ka,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null));const C=new eu({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1}),x=new yi(new nl,C);let _=!1;const I=e.background;I?I.isColor&&(C.color.copy(I),e.background=null,_=!0):(C.color.copy(N0),_=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(g.up.set(0,m[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+v[O],c.y,c.z)):U===1?(g.up.set(0,0,m[O]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+v[O],c.z)):(g.up.set(0,m[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+v[O]));const B=this._cubeSize;Oc(l,U*B,O>2?B:0,B,B),S.setRenderTarget(l),_&&S.render(x,g),S.render(e,g)}x.geometry.dispose(),x.material.dispose(),S.toneMapping=b,S.autoClear=y,e.background=I}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Pr||e.mapping===zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const g=this._cubeSize;Oc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Hh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=U0[(l-c-1)%U0.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const g=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new yi(this._lodPlanes[l],m),y=m.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*As-1),C=c/M,x=isFinite(c)?1+Math.floor(v*C):As;x>As&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${As}`);const _=[];let I=0;for(let j=0;j<As;++j){const K=j/C,T=Math.exp(-K*K/2);_.push(T),j===0?I+=T:j<x&&(I+=2*T)}for(let j=0;j<_.length;j++)_[j]=_[j]/I;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=M,y.mipInt.value=O-s;const U=this._sizeLods[l],B=3*U*(l>O-wr?l-O+wr:0),G=4*(this._cubeSize-U);Oc(i,B,G,3*U,2*U),g.setRenderTarget(i),g.render(S,Hh)}}function aT(r){const e=[],i=[],s=[];let l=r;const c=r-wr+1+D0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let g=1/d;h>r-wr?g=D0[h-r+wr-1]:h===0&&(g=0),s.push(g);const m=1/(d-2),v=-m,S=1+m,y=[v,v,S,v,S,S,v,v,S,S,v,S],b=6,M=6,C=3,x=2,_=1,I=new Float32Array(C*M*b),O=new Float32Array(x*M*b),U=new Float32Array(_*M*b);for(let G=0;G<b;G++){const j=G%3*2/3-1,K=G>2?0:-1,T=[j,K,0,j+2/3,K,0,j+2/3,K+1,0,j,K,0,j+2/3,K+1,0,j,K+1,0];I.set(T,C*M*G),O.set(y,x*M*G);const D=[G,G,G,G,G,G];U.set(D,_*M*G)}const B=new ui;B.setAttribute("position",new Si(I,C)),B.setAttribute("uv",new Si(O,x)),B.setAttribute("faceIndex",new Si(U,_)),e.push(B),l>wr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function O0(r,e,i){const s=new Ns(r,e,i);return s.texture.mapping=su,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Oc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function sT(r,e,i){const s=new Float32Array(As),l=new J(0,1,0);return new $a({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:np(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function P0(){return new $a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:np(),fragmentShader:`

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
		`,blending:Za,depthTest:!1,depthWrite:!1})}function z0(){return new $a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function np(){return`

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
	`}function rT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const g=d.mapping,m=g===rd||g===od,v=g===Pr||g===zr;if(m||v){let S=e.get(d);const y=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new L0(r)),S=m?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const b=d.image;return m&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new L0(r)),S=m?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let g=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&g++;return g===m}function c(d){const g=d.target;g.removeEventListener("dispose",c);const m=e.get(g);m!==void 0&&(e.delete(g),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function oT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Jo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function lT(r,e,i,s){const l={},c=new WeakMap;function h(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",h),delete l[y.id];const b=c.get(y);b&&(e.remove(b),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(S,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function g(S){const y=S.attributes;for(const b in y)e.update(y[b],r.ARRAY_BUFFER)}function m(S){const y=[],b=S.index,M=S.attributes.position;let C=0;if(b!==null){const I=b.array;C=b.version;for(let O=0,U=I.length;O<U;O+=3){const B=I[O+0],G=I[O+1],j=I[O+2];y.push(B,G,G,j,j,B)}}else if(M!==void 0){const I=M.array;C=M.version;for(let O=0,U=I.length/3-1;O<U;O+=3){const B=O+0,G=O+1,j=O+2;y.push(B,G,G,j,j,B)}}else return;const x=new(bv(y)?Cv:Rv)(y,1);x.version=C;const _=c.get(S);_&&e.remove(_),c.set(S,x)}function v(S){const y=c.get(S);if(y){const b=S.index;b!==null&&y.version<b.version&&m(S)}else m(S);return c.get(S)}return{get:d,update:g,getWireframeAttribute:v}}function cT(r,e,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function g(y,b){r.drawElements(s,b,c,y*h),i.update(b,s,1)}function m(y,b,M){M!==0&&(r.drawElementsInstanced(s,b,c,y*h,M),i.update(b,s,M))}function v(y,b,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,y,0,M);let x=0;for(let _=0;_<M;_++)x+=b[_];i.update(x,s,1)}function S(y,b,M,C){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)m(y[_]/h,b[_],C[_]);else{x.multiDrawElementsInstancedWEBGL(s,b,0,c,y,0,C,0,M);let _=0;for(let I=0;I<M;I++)_+=b[I]*C[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=g,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function uT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function fT(r,e,i){const s=new WeakMap,l=new un;function c(h,d,g){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==S){let D=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",D)};var b=D;y!==void 0&&y.texture.dispose();const M=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;M===!0&&(U=1),C===!0&&(U=2),x===!0&&(U=3);let B=d.attributes.position.count*U,G=1;B>e.maxTextureSize&&(G=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const j=new Float32Array(B*G*4*S),K=new Tv(j,B,G,S);K.type=da,K.needsUpdate=!0;const T=U*4;for(let H=0;H<S;H++){const ne=_[H],le=I[H],X=O[H],ae=B*G*4*H;for(let P=0;P<ne.count;P++){const Z=P*T;M===!0&&(l.fromBufferAttribute(ne,P),j[ae+Z+0]=l.x,j[ae+Z+1]=l.y,j[ae+Z+2]=l.z,j[ae+Z+3]=0),C===!0&&(l.fromBufferAttribute(le,P),j[ae+Z+4]=l.x,j[ae+Z+5]=l.y,j[ae+Z+6]=l.z,j[ae+Z+7]=0),x===!0&&(l.fromBufferAttribute(X,P),j[ae+Z+8]=l.x,j[ae+Z+9]=l.y,j[ae+Z+10]=l.z,j[ae+Z+11]=X.itemSize===4?l.w:1)}}y={count:S,texture:K,size:new Mt(B,G)},s.set(d,y),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let M=0;for(let x=0;x<m.length;x++)M+=m[x];const C=d.morphTargetsRelative?1:1-M;g.getUniforms().setValue(r,"morphTargetBaseInfluence",C),g.getUniforms().setValue(r,"morphTargetInfluences",m)}g.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function hT(r,e,i,s){let l=new WeakMap;function c(g){const m=s.render.frame,v=g.geometry,S=e.get(g,v);if(l.get(S)!==m&&(e.update(S),l.set(S,m)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),l.get(g)!==m&&(i.update(g.instanceMatrix,r.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,r.ARRAY_BUFFER),l.set(g,m))),g.isSkinnedMesh){const y=g.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return S}function h(){l=new WeakMap}function d(g){const m=g.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const Hv=new ei,I0=new Iv(1,1),jv=new Tv,Gv=new FM,Vv=new Nv,B0=[],F0=[],H0=new Float32Array(16),j0=new Float32Array(9),G0=new Float32Array(4);function jr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=B0[l];if(c===void 0&&(c=new Float32Array(l),B0[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ou(r,e){let i=F0[e];i===void 0&&(i=new Int32Array(e),F0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function dT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function pT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function mT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function _T(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;G0.set(s),r.uniformMatrix2fv(this.addr,!1,G0),xn(i,s)}}function vT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;j0.set(s),r.uniformMatrix3fv(this.addr,!1,j0),xn(i,s)}}function xT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;H0.set(s),r.uniformMatrix4fv(this.addr,!1,H0),xn(i,s)}}function yT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function ET(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function bT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function TT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function AT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function RT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function CT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(I0.compareFunction=Ev,c=I0):c=Hv,i.setTexture2D(e||c,l)}function wT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Gv,l)}function DT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Vv,l)}function NT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||jv,l)}function UT(r){switch(r){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return yT;case 35667:case 35671:return ST;case 35668:case 35672:return MT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return wT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return NT}}function LT(r,e){r.uniform1fv(this.addr,e)}function OT(r,e){const i=jr(e,this.size,2);r.uniform2fv(this.addr,i)}function PT(r,e){const i=jr(e,this.size,3);r.uniform3fv(this.addr,i)}function zT(r,e){const i=jr(e,this.size,4);r.uniform4fv(this.addr,i)}function IT(r,e){const i=jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function BT(r,e){const i=jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function FT(r,e){const i=jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function HT(r,e){r.uniform1iv(this.addr,e)}function jT(r,e){r.uniform2iv(this.addr,e)}function GT(r,e){r.uniform3iv(this.addr,e)}function VT(r,e){r.uniform4iv(this.addr,e)}function kT(r,e){r.uniform1uiv(this.addr,e)}function XT(r,e){r.uniform2uiv(this.addr,e)}function qT(r,e){r.uniform3uiv(this.addr,e)}function WT(r,e){r.uniform4uiv(this.addr,e)}function YT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Hv,c[h])}function ZT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Gv,c[h])}function KT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Vv,c[h])}function QT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||jv,c[h])}function JT(r){switch(r){case 5126:return LT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return IT;case 35675:return BT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return jT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return kT;case 36294:return XT;case 36295:return qT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class eA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class tA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function V0(r,e){r.seq.push(e),r.map[e.id]=e}function nA(r,e,i){const s=r.name,l=s.length;for(Xh.lastIndex=0;;){const c=Xh.exec(s),h=Xh.lastIndex;let d=c[1];const g=c[2]==="]",m=c[3];if(g&&(d=d|0),m===void 0||m==="["&&h+2===l){V0(i,m===void 0?new $T(d,r,e):new eA(d,r,e));break}else{let S=i.map[d];S===void 0&&(S=new tA(d),V0(i,S)),i=S}}}class Xc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);nA(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function k0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const iA=37297;let aA=0;function sA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const X0=new vt;function rA(r){Pt._getMatrix(X0,Pt.workingColorSpace,r);const e=`mat3( ${X0.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Qc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function q0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+sA(r.getShaderSource(e),d)}else return c}function oA(r,e){const i=rA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function lA(r,e){let i;switch(e){case QS:i="Linear";break;case JS:i="Reinhard";break;case $S:i="Cineon";break;case eM:i="ACESFilmic";break;case nM:i="AgX";break;case iM:i="Neutral";break;case tM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new J;function cA(){Pt.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),e=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function fA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Vo(r){return r!==""}function W0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(r){return r.replace(dA,mA)}const pA=new Map;function mA(r,e){let i=St[e];if(i===void 0){const s=pA.get(e);if(s!==void 0)i=St[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Hd(i)}const gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(r){return r.replace(gA,_A)}function _A(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function K0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===DS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ua&&(e="SHADOWMAP_TYPE_VSM"),e}function xA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Pr:case zr:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function SA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case dv:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function MA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function EA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=vA(i),m=xA(i),v=yA(i),S=SA(i),y=MA(i),b=uA(i),M=fA(c),C=l.createProgram();let x,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(x=[K0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[K0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?St.tonemapping_pars_fragment:"",i.toneMapping!==Ka?lA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,oA("linearToOutputTexel",i.outputColorSpace),cA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Hd(h),h=W0(h,i),h=Y0(h,i),d=Hd(d),d=W0(d,i),d=Y0(d,i),h=Z0(h),d=Z0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===t0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=I+x+h,U=I+_+d,B=k0(l,l.VERTEX_SHADER,O),G=k0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,B),l.attachShader(C,G),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function j(H){if(r.debug.checkShaderErrors){const ne=l.getProgramInfoLog(C)||"",le=l.getShaderInfoLog(B)||"",X=l.getShaderInfoLog(G)||"",ae=ne.trim(),P=le.trim(),Z=X.trim();let k=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,B,G);else{const L=q0(l,B,"vertex"),Q=q0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+L+`
`+Q)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||Z==="")&&(ge=!1);ge&&(H.diagnostics={runnable:k,programLog:ae,vertexShader:{log:P,prefix:x},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(B),l.deleteShader(G),K=new Xc(l,C),T=hA(l,C)}let K;this.getUniforms=function(){return K===void 0&&j(this),K};let T;this.getAttributes=function(){return T===void 0&&j(this),T};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(C,iA)),D},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=G,this}let bA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new AA(e),i.set(e,s)),s}}class AA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function RA(r,e,i,s,l,c,h){const d=new ep,g=new TA,m=new Set,v=[],S=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return m.add(T),T===0?"uv":`uv${T}`}function x(T,D,H,ne,le){const X=ne.fog,ae=le.geometry,P=T.isMeshStandardMaterial?ne.environment:null,Z=(T.isMeshStandardMaterial?i:e).get(T.envMap||P),k=Z&&Z.mapping===su?Z.image.height:null,ge=M[T.type];T.precision!==null&&(b=l.getMaxPrecision(T.precision),b!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",b,"instead."));const L=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Q=L!==void 0?L.length:0;let fe=0;ae.morphAttributes.position!==void 0&&(fe=1),ae.morphAttributes.normal!==void 0&&(fe=2),ae.morphAttributes.color!==void 0&&(fe=3);let xe,de,Ie,ie;if(ge){const Me=Hi[ge];xe=Me.vertexShader,de=Me.fragmentShader}else xe=T.vertexShader,de=T.fragmentShader,g.update(T),Ie=g.getVertexShaderID(T),ie=g.getFragmentShaderID(T);const _e=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Ve=le.isInstancedMesh===!0,Ye=le.isBatchedMesh===!0,it=!!T.map,Nt=!!T.matcap,A=!!Z,ve=!!T.aoMap,be=!!T.lightMap,je=!!T.bumpMap,De=!!T.normalMap,gt=!!T.displacementMap,qe=!!T.emissiveMap,ot=!!T.metalnessMap,It=!!T.roughnessMap,Gt=T.anisotropy>0,z=T.clearcoat>0,R=T.dispersion>0,q=T.iridescence>0,ce=T.sheen>0,Se=T.transmission>0,oe=Gt&&!!T.anisotropyMap,Fe=z&&!!T.clearcoatMap,we=z&&!!T.clearcoatNormalMap,Ze=z&&!!T.clearcoatRoughnessMap,He=q&&!!T.iridescenceMap,Ne=q&&!!T.iridescenceThicknessMap,ze=ce&&!!T.sheenColorMap,et=ce&&!!T.sheenRoughnessMap,Je=!!T.specularMap,Be=!!T.specularColorMap,dt=!!T.specularIntensityMap,Y=Se&&!!T.transmissionMap,Le=Se&&!!T.thicknessMap,Oe=!!T.gradientMap,We=!!T.alphaMap,Ue=T.alphaTest>0,Ae=!!T.alphaHash,Qe=!!T.extensions;let ut=Ka;T.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ut=r.toneMapping);const V={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:xe,fragmentShader:de,defines:T.defines,customVertexShaderID:Ie,customFragmentShaderID:ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:b,batching:Ye,batchingColor:Ye&&le._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&le.instanceColor!==null,instancingMorph:Ve&&le.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Ir,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:Nt,envMap:A,envMapMode:A&&Z.mapping,envMapCubeUVHeight:k,aoMap:ve,lightMap:be,bumpMap:je,normalMap:De,displacementMap:y&&gt,emissiveMap:qe,normalMapObjectSpace:De&&T.normalMapType===lM,normalMapTangentSpace:De&&T.normalMapType===oM,metalnessMap:ot,roughnessMap:It,anisotropy:Gt,anisotropyMap:oe,clearcoat:z,clearcoatMap:Fe,clearcoatNormalMap:we,clearcoatRoughnessMap:Ze,dispersion:R,iridescence:q,iridescenceMap:He,iridescenceThicknessMap:Ne,sheen:ce,sheenColorMap:ze,sheenRoughnessMap:et,specularMap:Je,specularColorMap:Be,specularIntensityMap:dt,transmission:Se,transmissionMap:Y,thicknessMap:Le,gradientMap:Oe,opaque:T.transparent===!1&&T.blending===Ur&&T.alphaToCoverage===!1,alphaMap:We,alphaTest:Ue,alphaHash:Ae,combine:T.combine,mapUv:it&&C(T.map.channel),aoMapUv:ve&&C(T.aoMap.channel),lightMapUv:be&&C(T.lightMap.channel),bumpMapUv:je&&C(T.bumpMap.channel),normalMapUv:De&&C(T.normalMap.channel),displacementMapUv:gt&&C(T.displacementMap.channel),emissiveMapUv:qe&&C(T.emissiveMap.channel),metalnessMapUv:ot&&C(T.metalnessMap.channel),roughnessMapUv:It&&C(T.roughnessMap.channel),anisotropyMapUv:oe&&C(T.anisotropyMap.channel),clearcoatMapUv:Fe&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:et&&C(T.sheenRoughnessMap.channel),specularMapUv:Je&&C(T.specularMap.channel),specularColorMapUv:Be&&C(T.specularColorMap.channel),specularIntensityMapUv:dt&&C(T.specularIntensityMap.channel),transmissionMapUv:Y&&C(T.transmissionMap.channel),thicknessMapUv:Le&&C(T.thicknessMap.channel),alphaMapUv:We&&C(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(De||Gt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!ae.attributes.uv&&(it||We),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ce,skinning:le.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:fe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Wt,decodeVideoTextureEmissive:qe&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===fa,flipSided:T.side===$n,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Qe&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&T.extensions.multiDraw===!0||Ye)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return V.vertexUv1s=m.has(1),V.vertexUv2s=m.has(2),V.vertexUv3s=m.has(3),m.clear(),V}function _(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)D.push(H),D.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(I(D,T),O(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function I(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function O(T,D){d.disableAll(),D.supportsVertexTextures&&d.enable(0),D.instancing&&d.enable(1),D.instancingColor&&d.enable(2),D.instancingMorph&&d.enable(3),D.matcap&&d.enable(4),D.envMap&&d.enable(5),D.normalMapObjectSpace&&d.enable(6),D.normalMapTangentSpace&&d.enable(7),D.clearcoat&&d.enable(8),D.iridescence&&d.enable(9),D.alphaTest&&d.enable(10),D.vertexColors&&d.enable(11),D.vertexAlphas&&d.enable(12),D.vertexUv1s&&d.enable(13),D.vertexUv2s&&d.enable(14),D.vertexUv3s&&d.enable(15),D.vertexTangents&&d.enable(16),D.anisotropy&&d.enable(17),D.alphaHash&&d.enable(18),D.batching&&d.enable(19),D.dispersion&&d.enable(20),D.batchingColor&&d.enable(21),D.gradientMap&&d.enable(22),T.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const D=M[T.type];let H;if(D){const ne=Hi[D];H=JM.clone(ne.uniforms)}else H=T.uniforms;return H}function B(T,D){let H;for(let ne=0,le=v.length;ne<le;ne++){const X=v[ne];if(X.cacheKey===D){H=X,++H.usedTimes;break}}return H===void 0&&(H=new EA(r,D,T,c),v.push(H)),H}function G(T){if(--T.usedTimes===0){const D=v.indexOf(T);v[D]=v[v.length-1],v.pop(),T.destroy()}}function j(T){g.remove(T)}function K(){g.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:B,releaseProgram:G,releaseShaderCache:j,programs:v,dispose:K}}function CA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,g){r.get(h)[d]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function wA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function J0(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(S,y,b,M,C,x){let _=r[e];return _===void 0?(_={id:S.id,object:S,geometry:y,material:b,groupOrder:M,renderOrder:S.renderOrder,z:C,group:x},r[e]=_):(_.id=S.id,_.object=S,_.geometry=y,_.material=b,_.groupOrder=M,_.renderOrder=S.renderOrder,_.z=C,_.group=x),e++,_}function d(S,y,b,M,C,x){const _=h(S,y,b,M,C,x);b.transmission>0?s.push(_):b.transparent===!0?l.push(_):i.push(_)}function g(S,y,b,M,C,x){const _=h(S,y,b,M,C,x);b.transmission>0?s.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function m(S,y){i.length>1&&i.sort(S||wA),s.length>1&&s.sort(y||Q0),l.length>1&&l.sort(y||Q0)}function v(){for(let S=e,y=r.length;S<y;S++){const b=r[S];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:g,finish:v,sort:m}}function DA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new J0,r.set(s,[h])):l>=c.length?(h=new J0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function NA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new zt};break;case"SpotLight":i={position:new J,direction:new J,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=i,i}}}function UA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let LA=0;function OA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function PA(r){const e=new NA,i=UA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new J);const l=new J,c=new an,h=new an;function d(m){let v=0,S=0,y=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let b=0,M=0,C=0,x=0,_=0,I=0,O=0,U=0,B=0,G=0,j=0;m.sort(OA);for(let T=0,D=m.length;T<D;T++){const H=m[T],ne=H.color,le=H.intensity,X=H.distance,ae=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ne.r*le,S+=ne.g*le,y+=ne.b*le;else if(H.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(H.sh.coefficients[P],le);j++}else if(H.isDirectionalLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,k=i.get(H);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,s.directionalShadow[b]=k,s.directionalShadowMap[b]=ae,s.directionalShadowMatrix[b]=H.shadow.matrix,I++}s.directional[b]=P,b++}else if(H.isSpotLight){const P=e.get(H);P.position.setFromMatrixPosition(H.matrixWorld),P.color.copy(ne).multiplyScalar(le),P.distance=X,P.coneCos=Math.cos(H.angle),P.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),P.decay=H.decay,s.spot[C]=P;const Z=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,Z.updateMatrices(H),H.castShadow&&G++),s.spotLightMatrix[C]=Z.matrix,H.castShadow){const k=i.get(H);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,s.spotShadow[C]=k,s.spotShadowMap[C]=ae,U++}C++}else if(H.isRectAreaLight){const P=e.get(H);P.color.copy(ne).multiplyScalar(le),P.halfWidth.set(H.width*.5,0,0),P.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=P,x++}else if(H.isPointLight){const P=e.get(H);if(P.color.copy(H.color).multiplyScalar(H.intensity),P.distance=H.distance,P.decay=H.decay,H.castShadow){const Z=H.shadow,k=i.get(H);k.shadowIntensity=Z.intensity,k.shadowBias=Z.bias,k.shadowNormalBias=Z.normalBias,k.shadowRadius=Z.radius,k.shadowMapSize=Z.mapSize,k.shadowCameraNear=Z.camera.near,k.shadowCameraFar=Z.camera.far,s.pointShadow[M]=k,s.pointShadowMap[M]=ae,s.pointShadowMatrix[M]=H.shadow.matrix,O++}s.point[M]=P,M++}else if(H.isHemisphereLight){const P=e.get(H);P.skyColor.copy(H.color).multiplyScalar(le),P.groundColor.copy(H.groundColor).multiplyScalar(le),s.hemi[_]=P,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Xe.LTC_FLOAT_1,s.rectAreaLTC2=Xe.LTC_FLOAT_2):(s.rectAreaLTC1=Xe.LTC_HALF_1,s.rectAreaLTC2=Xe.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=y;const K=s.hash;(K.directionalLength!==b||K.pointLength!==M||K.spotLength!==C||K.rectAreaLength!==x||K.hemiLength!==_||K.numDirectionalShadows!==I||K.numPointShadows!==O||K.numSpotShadows!==U||K.numSpotMaps!==B||K.numLightProbes!==j)&&(s.directional.length=b,s.spot.length=C,s.rectArea.length=x,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+B-G,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=j,K.directionalLength=b,K.pointLength=M,K.spotLength=C,K.rectAreaLength=x,K.hemiLength=_,K.numDirectionalShadows=I,K.numPointShadows=O,K.numSpotShadows=U,K.numSpotMaps=B,K.numLightProbes=j,s.version=LA++)}function g(m,v){let S=0,y=0,b=0,M=0,C=0;const x=v.matrixWorldInverse;for(let _=0,I=m.length;_<I;_++){const O=m[_];if(O.isDirectionalLight){const U=s.directional[S];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),S++}else if(O.isSpotLight){const U=s.spot[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),b++}else if(O.isRectAreaLight){const U=s.rectArea[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),h.identity(),c.copy(O.matrixWorld),c.premultiply(x),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),M++}else if(O.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),y++}else if(O.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(x),C++}}}return{setup:d,setupView:g,state:s}}function $0(r){const e=new PA(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function g(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:h}}function zA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new $0(r),e.set(l,[d])):c>=h.length?(d=new $0(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const IA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BA=`uniform sampler2D shadow_pass;
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
}`;function FA(r,e,i){let s=new Uv;const l=new Mt,c=new Mt,h=new un,d=new lE({depthPacking:rM}),g=new cE,m={},v=i.maxTextureSize,S={[Ja]:$n,[$n]:Ja,[fa]:fa},y=new $a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:IA,fragmentShader:BA}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const M=new ui;M.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new yi(M,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(G,j,K){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const T=r.getRenderTarget(),D=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(Za),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const le=_!==ua&&this.type===ua,X=_===ua&&this.type!==ua;for(let ae=0,P=G.length;ae<P;ae++){const Z=G[ae],k=Z.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const ge=k.getFrameExtents();if(l.multiply(ge),c.copy(k.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ge.x),l.x=c.x*ge.x,k.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ge.y),l.y=c.y*ge.y,k.mapSize.y=c.y)),k.map===null||le===!0||X===!0){const Q=this.type!==ua?{minFilter:Ni,magFilter:Ni}:{};k.map!==null&&k.map.dispose(),k.map=new Ns(l.x,l.y,Q),k.map.texture.name=Z.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const L=k.getViewportCount();for(let Q=0;Q<L;Q++){const fe=k.getViewport(Q);h.set(c.x*fe.x,c.y*fe.y,c.x*fe.z,c.y*fe.w),ne.viewport(h),k.updateMatrices(Z,Q),s=k.getFrustum(),U(j,K,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&I(k,K),k.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(T,D,H)};function I(G,j){const K=e.update(C);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,b.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Ns(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(j,null,K,y,C,null),b.uniforms.shadow_pass.value=G.mapPass.texture,b.uniforms.resolution.value=G.mapSize,b.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(j,null,K,b,C,null)}function O(G,j,K,T){let D=null;const H=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)D=H;else if(D=K.isPointLight===!0?g:d,r.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){const ne=D.uuid,le=j.uuid;let X=m[ne];X===void 0&&(X={},m[ne]=X);let ae=X[le];ae===void 0&&(ae=D.clone(),X[le]=ae,j.addEventListener("dispose",B)),D=ae}if(D.visible=j.visible,D.wireframe=j.wireframe,T===ua?D.side=j.shadowSide!==null?j.shadowSide:j.side:D.side=j.shadowSide!==null?j.shadowSide:S[j.side],D.alphaMap=j.alphaMap,D.alphaTest=j.alphaToCoverage===!0?.5:j.alphaTest,D.map=j.map,D.clipShadows=j.clipShadows,D.clippingPlanes=j.clippingPlanes,D.clipIntersection=j.clipIntersection,D.displacementMap=j.displacementMap,D.displacementScale=j.displacementScale,D.displacementBias=j.displacementBias,D.wireframeLinewidth=j.wireframeLinewidth,D.linewidth=j.linewidth,K.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=r.properties.get(D);ne.light=K}return D}function U(G,j,K,T,D){if(G.visible===!1)return;if(G.layers.test(j.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===ua)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const le=e.update(G),X=G.material;if(Array.isArray(X)){const ae=le.groups;for(let P=0,Z=ae.length;P<Z;P++){const k=ae[P],ge=X[k.materialIndex];if(ge&&ge.visible){const L=O(G,ge,T,D);G.onBeforeShadow(r,G,j,K,le,L,k),r.renderBufferDirect(K,null,le,L,G,k),G.onAfterShadow(r,G,j,K,le,L,k)}}}else if(X.visible){const ae=O(G,X,T,D);G.onBeforeShadow(r,G,j,K,le,ae,null),r.renderBufferDirect(K,null,le,ae,G,null),G.onAfterShadow(r,G,j,K,le,ae,null)}}const ne=G.children;for(let le=0,X=ne.length;le<X;le++)U(ne[le],j,K,T,D)}function B(G){G.target.removeEventListener("dispose",B);for(const K in m){const T=m[K],D=G.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}const HA={[$h]:ed,[td]:ad,[nd]:sd,[Or]:id,[ed]:$h,[ad]:td,[sd]:nd,[id]:Or};function jA(r,e){function i(){let Y=!1;const Le=new un;let Oe=null;const We=new un(0,0,0,0);return{setMask:function(Ue){Oe!==Ue&&!Y&&(r.colorMask(Ue,Ue,Ue,Ue),Oe=Ue)},setLocked:function(Ue){Y=Ue},setClear:function(Ue,Ae,Qe,ut,V){V===!0&&(Ue*=ut,Ae*=ut,Qe*=ut),Le.set(Ue,Ae,Qe,ut),We.equals(Le)===!1&&(r.clearColor(Ue,Ae,Qe,ut),We.copy(Le))},reset:function(){Y=!1,Oe=null,We.set(-1,0,0,0)}}}function s(){let Y=!1,Le=!1,Oe=null,We=null,Ue=null;return{setReversed:function(Ae){if(Le!==Ae){const Qe=e.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Ae;const ut=Ue;Ue=null,this.setClear(ut)}},getReversed:function(){return Le},setTest:function(Ae){Ae?_e(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(Ae){Oe!==Ae&&!Y&&(r.depthMask(Ae),Oe=Ae)},setFunc:function(Ae){if(Le&&(Ae=HA[Ae]),We!==Ae){switch(Ae){case $h:r.depthFunc(r.NEVER);break;case ed:r.depthFunc(r.ALWAYS);break;case td:r.depthFunc(r.LESS);break;case Or:r.depthFunc(r.LEQUAL);break;case nd:r.depthFunc(r.EQUAL);break;case id:r.depthFunc(r.GEQUAL);break;case ad:r.depthFunc(r.GREATER);break;case sd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}We=Ae}},setLocked:function(Ae){Y=Ae},setClear:function(Ae){Ue!==Ae&&(Le&&(Ae=1-Ae),r.clearDepth(Ae),Ue=Ae)},reset:function(){Y=!1,Oe=null,We=null,Ue=null,Le=!1}}}function l(){let Y=!1,Le=null,Oe=null,We=null,Ue=null,Ae=null,Qe=null,ut=null,V=null;return{setTest:function(Me){Y||(Me?_e(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Me){Le!==Me&&!Y&&(r.stencilMask(Me),Le=Me)},setFunc:function(Me,ht,pt){(Oe!==Me||We!==ht||Ue!==pt)&&(r.stencilFunc(Me,ht,pt),Oe=Me,We=ht,Ue=pt)},setOp:function(Me,ht,pt){(Ae!==Me||Qe!==ht||ut!==pt)&&(r.stencilOp(Me,ht,pt),Ae=Me,Qe=ht,ut=pt)},setLocked:function(Me){Y=Me},setClear:function(Me){V!==Me&&(r.clearStencil(Me),V=Me)},reset:function(){Y=!1,Le=null,Oe=null,We=null,Ue=null,Ae=null,Qe=null,ut=null,V=null}}}const c=new i,h=new s,d=new l,g=new WeakMap,m=new WeakMap;let v={},S={},y=new WeakMap,b=[],M=null,C=!1,x=null,_=null,I=null,O=null,U=null,B=null,G=null,j=new zt(0,0,0),K=0,T=!1,D=null,H=null,ne=null,le=null,X=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),P=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),P=Z>=2);let ge=null,L={};const Q=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),xe=new un().fromArray(Q),de=new un().fromArray(fe);function Ie(Y,Le,Oe,We){const Ue=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(Y,Ae),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<Oe;Qe++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,We,0,r.RGBA,r.UNSIGNED_BYTE,Ue):r.texImage2D(Le+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ue);return Ae}const ie={};ie[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_e(r.DEPTH_TEST),h.setFunc(Or),je(!1),De(Z_),_e(r.CULL_FACE),ve(Za);function _e(Y){v[Y]!==!0&&(r.enable(Y),v[Y]=!0)}function Ce(Y){v[Y]!==!1&&(r.disable(Y),v[Y]=!1)}function Ve(Y,Le){return S[Y]!==Le?(r.bindFramebuffer(Y,Le),S[Y]=Le,Y===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Le),Y===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ye(Y,Le){let Oe=b,We=!1;if(Y){Oe=y.get(Le),Oe===void 0&&(Oe=[],y.set(Le,Oe));const Ue=Y.textures;if(Oe.length!==Ue.length||Oe[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Qe=Ue.length;Ae<Qe;Ae++)Oe[Ae]=r.COLOR_ATTACHMENT0+Ae;Oe.length=Ue.length,We=!0}}else Oe[0]!==r.BACK&&(Oe[0]=r.BACK,We=!0);We&&r.drawBuffers(Oe)}function it(Y){return M!==Y?(r.useProgram(Y),M=Y,!0):!1}const Nt={[Ts]:r.FUNC_ADD,[US]:r.FUNC_SUBTRACT,[LS]:r.FUNC_REVERSE_SUBTRACT};Nt[OS]=r.MIN,Nt[PS]=r.MAX;const A={[zS]:r.ZERO,[IS]:r.ONE,[BS]:r.SRC_COLOR,[Qh]:r.SRC_ALPHA,[kS]:r.SRC_ALPHA_SATURATE,[GS]:r.DST_COLOR,[HS]:r.DST_ALPHA,[FS]:r.ONE_MINUS_SRC_COLOR,[Jh]:r.ONE_MINUS_SRC_ALPHA,[VS]:r.ONE_MINUS_DST_COLOR,[jS]:r.ONE_MINUS_DST_ALPHA,[XS]:r.CONSTANT_COLOR,[qS]:r.ONE_MINUS_CONSTANT_COLOR,[WS]:r.CONSTANT_ALPHA,[YS]:r.ONE_MINUS_CONSTANT_ALPHA};function ve(Y,Le,Oe,We,Ue,Ae,Qe,ut,V,Me){if(Y===Za){C===!0&&(Ce(r.BLEND),C=!1);return}if(C===!1&&(_e(r.BLEND),C=!0),Y!==NS){if(Y!==x||Me!==T){if((_!==Ts||U!==Ts)&&(r.blendEquation(r.FUNC_ADD),_=Ts,U=Ts),Me)switch(Y){case Ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K_:r.blendFunc(r.ONE,r.ONE);break;case Q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case J_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case K_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case J_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}I=null,O=null,B=null,G=null,j.set(0,0,0),K=0,x=Y,T=Me}return}Ue=Ue||Le,Ae=Ae||Oe,Qe=Qe||We,(Le!==_||Ue!==U)&&(r.blendEquationSeparate(Nt[Le],Nt[Ue]),_=Le,U=Ue),(Oe!==I||We!==O||Ae!==B||Qe!==G)&&(r.blendFuncSeparate(A[Oe],A[We],A[Ae],A[Qe]),I=Oe,O=We,B=Ae,G=Qe),(ut.equals(j)===!1||V!==K)&&(r.blendColor(ut.r,ut.g,ut.b,V),j.copy(ut),K=V),x=Y,T=!1}function be(Y,Le){Y.side===fa?Ce(r.CULL_FACE):_e(r.CULL_FACE);let Oe=Y.side===$n;Le&&(Oe=!Oe),je(Oe),Y.blending===Ur&&Y.transparent===!1?ve(Za):ve(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const We=Y.stencilWrite;d.setTest(We),We&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(Y){D!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),D=Y)}function De(Y){Y!==CS?(_e(r.CULL_FACE),Y!==H&&(Y===Z_?r.cullFace(r.BACK):Y===wS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),H=Y}function gt(Y){Y!==ne&&(P&&r.lineWidth(Y),ne=Y)}function qe(Y,Le,Oe){Y?(_e(r.POLYGON_OFFSET_FILL),(le!==Le||X!==Oe)&&(r.polygonOffset(Le,Oe),le=Le,X=Oe)):Ce(r.POLYGON_OFFSET_FILL)}function ot(Y){Y?_e(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function It(Y){Y===void 0&&(Y=r.TEXTURE0+ae-1),ge!==Y&&(r.activeTexture(Y),ge=Y)}function Gt(Y,Le,Oe){Oe===void 0&&(ge===null?Oe=r.TEXTURE0+ae-1:Oe=ge);let We=L[Oe];We===void 0&&(We={type:void 0,texture:void 0},L[Oe]=We),(We.type!==Y||We.texture!==Le)&&(ge!==Oe&&(r.activeTexture(Oe),ge=Oe),r.bindTexture(Y,Le||ie[Y]),We.type=Y,We.texture=Le)}function z(){const Y=L[ge];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function R(){try{r.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ce(){try{r.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{r.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function we(){try{r.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ze(){try{r.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{r.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ne(){try{r.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ze(Y){xe.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),xe.copy(Y))}function et(Y){de.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),de.copy(Y))}function Je(Y,Le){let Oe=m.get(Le);Oe===void 0&&(Oe=new WeakMap,m.set(Le,Oe));let We=Oe.get(Y);We===void 0&&(We=r.getUniformBlockIndex(Le,Y.name),Oe.set(Y,We))}function Be(Y,Le){const We=m.get(Le).get(Y);g.get(Le)!==We&&(r.uniformBlockBinding(Le,We,Y.__bindingPointIndex),g.set(Le,We))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},ge=null,L={},S={},y=new WeakMap,b=[],M=null,C=!1,x=null,_=null,I=null,O=null,U=null,B=null,G=null,j=new zt(0,0,0),K=0,T=!1,D=null,H=null,ne=null,le=null,X=null,xe.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_e,disable:Ce,bindFramebuffer:Ve,drawBuffers:Ye,useProgram:it,setBlending:ve,setMaterial:be,setFlipSided:je,setCullFace:De,setLineWidth:gt,setPolygonOffset:qe,setScissorTest:ot,activeTexture:It,bindTexture:Gt,unbindTexture:z,compressedTexImage2D:R,compressedTexImage3D:q,texImage2D:He,texImage3D:Ne,updateUBOMapping:Je,uniformBlockBinding:Be,texStorage2D:we,texStorage3D:Ze,texSubImage2D:ce,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:Fe,scissor:ze,viewport:et,reset:dt}}function GA(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Mt,v=new WeakMap;let S;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,R){return b?new OffscreenCanvas(z,R):$c("canvas")}function C(z,R,q){let ce=1;const Se=Gt(z);if((Se.width>q||Se.height>q)&&(ce=q/Math.max(Se.width,Se.height)),ce<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const oe=Math.floor(ce*Se.width),Fe=Math.floor(ce*Se.height);S===void 0&&(S=M(oe,Fe));const we=R?M(oe,Fe):S;return we.width=oe,we.height=Fe,we.getContext("2d").drawImage(z,0,0,oe,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+oe+"x"+Fe+")."),we}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),z;return z}function x(z){return z.generateMipmaps}function _(z){r.generateMipmap(z)}function I(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(z,R,q,ce,Se=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let oe=R;if(R===r.RED&&(q===r.FLOAT&&(oe=r.R32F),q===r.HALF_FLOAT&&(oe=r.R16F),q===r.UNSIGNED_BYTE&&(oe=r.R8)),R===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.R8UI),q===r.UNSIGNED_SHORT&&(oe=r.R16UI),q===r.UNSIGNED_INT&&(oe=r.R32UI),q===r.BYTE&&(oe=r.R8I),q===r.SHORT&&(oe=r.R16I),q===r.INT&&(oe=r.R32I)),R===r.RG&&(q===r.FLOAT&&(oe=r.RG32F),q===r.HALF_FLOAT&&(oe=r.RG16F),q===r.UNSIGNED_BYTE&&(oe=r.RG8)),R===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RG8UI),q===r.UNSIGNED_SHORT&&(oe=r.RG16UI),q===r.UNSIGNED_INT&&(oe=r.RG32UI),q===r.BYTE&&(oe=r.RG8I),q===r.SHORT&&(oe=r.RG16I),q===r.INT&&(oe=r.RG32I)),R===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),q===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),q===r.UNSIGNED_INT&&(oe=r.RGB32UI),q===r.BYTE&&(oe=r.RGB8I),q===r.SHORT&&(oe=r.RGB16I),q===r.INT&&(oe=r.RGB32I)),R===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),q===r.UNSIGNED_INT&&(oe=r.RGBA32UI),q===r.BYTE&&(oe=r.RGBA8I),q===r.SHORT&&(oe=r.RGBA16I),q===r.INT&&(oe=r.RGBA32I)),R===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),R===r.RGBA){const Fe=Se?Qc:Pt.getTransfer(ce);q===r.FLOAT&&(oe=r.RGBA32F),q===r.HALF_FLOAT&&(oe=r.RGBA16F),q===r.UNSIGNED_BYTE&&(oe=Fe===Wt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function U(z,R){let q;return z?R===null||R===ws||R===Yo?q=r.DEPTH24_STENCIL8:R===da?q=r.DEPTH32F_STENCIL8:R===Wo&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ws||R===Yo?q=r.DEPTH_COMPONENT24:R===da?q=r.DEPTH_COMPONENT32F:R===Wo&&(q=r.DEPTH_COMPONENT16),q}function B(z,R){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ni&&z.minFilter!==ji?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function G(z){const R=z.target;R.removeEventListener("dispose",G),K(R),R.isVideoTexture&&v.delete(R)}function j(z){const R=z.target;R.removeEventListener("dispose",j),D(R)}function K(z){const R=s.get(z);if(R.__webglInit===void 0)return;const q=z.source,ce=y.get(q);if(ce){const Se=ce[R.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&T(z),Object.keys(ce).length===0&&y.delete(q)}s.remove(z)}function T(z){const R=s.get(z);r.deleteTexture(R.__webglTexture);const q=z.source,ce=y.get(q);delete ce[R.__cacheKey],h.memory.textures--}function D(z){const R=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(R.__webglFramebuffer[ce]))for(let Se=0;Se<R.__webglFramebuffer[ce].length;Se++)r.deleteFramebuffer(R.__webglFramebuffer[ce][Se]);else r.deleteFramebuffer(R.__webglFramebuffer[ce]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let ce=0;ce<R.__webglFramebuffer.length;ce++)r.deleteFramebuffer(R.__webglFramebuffer[ce]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ce=0;ce<R.__webglColorRenderbuffer.length;ce++)R.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ce]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const q=z.textures;for(let ce=0,Se=q.length;ce<Se;ce++){const oe=s.get(q[ce]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),h.memory.textures--),s.remove(q[ce])}s.remove(z)}let H=0;function ne(){H=0}function le(){const z=H;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),H+=1,z}function X(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function ae(z,R){const q=s.get(z);if(z.isVideoTexture&&ot(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&q.__version!==z.version){const ce=z.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(q,z,R);return}}else z.isExternalTexture&&(q.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+R)}function P(z,R){const q=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&q.__version!==z.version){ie(q,z,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+R)}function Z(z,R){const q=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&q.__version!==z.version){ie(q,z,R);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+R)}function k(z,R){const q=s.get(z);if(z.version>0&&q.__version!==z.version){_e(q,z,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+R)}const ge={[ld]:r.REPEAT,[Rs]:r.CLAMP_TO_EDGE,[cd]:r.MIRRORED_REPEAT},L={[Ni]:r.NEAREST,[aM]:r.NEAREST_MIPMAP_NEAREST,[fc]:r.NEAREST_MIPMAP_LINEAR,[ji]:r.LINEAR,[gh]:r.LINEAR_MIPMAP_NEAREST,[Cs]:r.LINEAR_MIPMAP_LINEAR},Q={[cM]:r.NEVER,[mM]:r.ALWAYS,[uM]:r.LESS,[Ev]:r.LEQUAL,[fM]:r.EQUAL,[pM]:r.GEQUAL,[hM]:r.GREATER,[dM]:r.NOTEQUAL};function fe(z,R){if(R.type===da&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ji||R.magFilter===gh||R.magFilter===fc||R.magFilter===Cs||R.minFilter===ji||R.minFilter===gh||R.minFilter===fc||R.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,ge[R.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,ge[R.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,ge[R.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,L[R.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,L[R.minFilter]),R.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,Q[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ni||R.minFilter!==fc&&R.minFilter!==Cs||R.type===da&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function xe(z,R){let q=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",G));const ce=R.source;let Se=y.get(ce);Se===void 0&&(Se={},y.set(ce,Se));const oe=X(R);if(oe!==z.__cacheKey){Se[oe]===void 0&&(Se[oe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,q=!0),Se[oe].usedTimes++;const Fe=Se[z.__cacheKey];Fe!==void 0&&(Se[z.__cacheKey].usedTimes--,Fe.usedTimes===0&&T(R)),z.__cacheKey=oe,z.__webglTexture=Se[oe].texture}return q}function de(z,R,q){return Math.floor(Math.floor(z/q)/R)}function Ie(z,R,q,ce){const oe=z.updateRanges;if(oe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,q,ce,R.data);else{oe.sort((Ne,ze)=>Ne.start-ze.start);let Fe=0;for(let Ne=1;Ne<oe.length;Ne++){const ze=oe[Fe],et=oe[Ne],Je=ze.start+ze.count,Be=de(et.start,R.width,4),dt=de(ze.start,R.width,4);et.start<=Je+1&&Be===dt&&de(et.start+et.count-1,R.width,4)===Be?ze.count=Math.max(ze.count,et.start+et.count-ze.start):(++Fe,oe[Fe]=et)}oe.length=Fe+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),Ze=r.getParameter(r.UNPACK_SKIP_PIXELS),He=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let Ne=0,ze=oe.length;Ne<ze;Ne++){const et=oe[Ne],Je=Math.floor(et.start/4),Be=Math.ceil(et.count/4),dt=Je%R.width,Y=Math.floor(Je/R.width),Le=Be,Oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,dt,Y,Le,Oe,q,ce,R.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,He)}}function ie(z,R,q){let ce=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ce=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ce=r.TEXTURE_3D);const Se=xe(z,R),oe=R.source;i.bindTexture(ce,z.__webglTexture,r.TEXTURE0+q);const Fe=s.get(oe);if(oe.version!==Fe.__version||Se===!0){i.activeTexture(r.TEXTURE0+q);const we=Pt.getPrimaries(Pt.workingColorSpace),Ze=R.colorSpace===Ya?null:Pt.getPrimaries(R.colorSpace),He=R.colorSpace===Ya||we===Ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ne=C(R.image,!1,l.maxTextureSize);Ne=It(R,Ne);const ze=c.convert(R.format,R.colorSpace),et=c.convert(R.type);let Je=O(R.internalFormat,ze,et,R.colorSpace,R.isVideoTexture);fe(ce,R);let Be;const dt=R.mipmaps,Y=R.isVideoTexture!==!0,Le=Fe.__version===void 0||Se===!0,Oe=oe.dataReady,We=B(R,Ne);if(R.isDepthTexture)Je=U(R.format===Ko,R.type),Le&&(Y?i.texStorage2D(r.TEXTURE_2D,1,Je,Ne.width,Ne.height):i.texImage2D(r.TEXTURE_2D,0,Je,Ne.width,Ne.height,0,ze,et,null));else if(R.isDataTexture)if(dt.length>0){Y&&Le&&i.texStorage2D(r.TEXTURE_2D,We,Je,dt[0].width,dt[0].height);for(let Ue=0,Ae=dt.length;Ue<Ae;Ue++)Be=dt[Ue],Y?Oe&&i.texSubImage2D(r.TEXTURE_2D,Ue,0,0,Be.width,Be.height,ze,et,Be.data):i.texImage2D(r.TEXTURE_2D,Ue,Je,Be.width,Be.height,0,ze,et,Be.data);R.generateMipmaps=!1}else Y?(Le&&i.texStorage2D(r.TEXTURE_2D,We,Je,Ne.width,Ne.height),Oe&&Ie(R,Ne,ze,et)):i.texImage2D(r.TEXTURE_2D,0,Je,Ne.width,Ne.height,0,ze,et,Ne.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Y&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,We,Je,dt[0].width,dt[0].height,Ne.depth);for(let Ue=0,Ae=dt.length;Ue<Ae;Ue++)if(Be=dt[Ue],R.format!==Di)if(ze!==null)if(Y){if(Oe)if(R.layerUpdates.size>0){const Qe=w0(Be.width,Be.height,R.format,R.type);for(const ut of R.layerUpdates){const V=Be.data.subarray(ut*Qe/Be.data.BYTES_PER_ELEMENT,(ut+1)*Qe/Be.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ue,0,0,ut,Be.width,Be.height,1,ze,V)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ue,0,0,0,Be.width,Be.height,Ne.depth,ze,Be.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ue,Je,Be.width,Be.height,Ne.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Oe&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ue,0,0,0,Be.width,Be.height,Ne.depth,ze,et,Be.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ue,Je,Be.width,Be.height,Ne.depth,0,ze,et,Be.data)}else{Y&&Le&&i.texStorage2D(r.TEXTURE_2D,We,Je,dt[0].width,dt[0].height);for(let Ue=0,Ae=dt.length;Ue<Ae;Ue++)Be=dt[Ue],R.format!==Di?ze!==null?Y?Oe&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ue,0,0,Be.width,Be.height,ze,Be.data):i.compressedTexImage2D(r.TEXTURE_2D,Ue,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Oe&&i.texSubImage2D(r.TEXTURE_2D,Ue,0,0,Be.width,Be.height,ze,et,Be.data):i.texImage2D(r.TEXTURE_2D,Ue,Je,Be.width,Be.height,0,ze,et,Be.data)}else if(R.isDataArrayTexture)if(Y){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,We,Je,Ne.width,Ne.height,Ne.depth),Oe)if(R.layerUpdates.size>0){const Ue=w0(Ne.width,Ne.height,R.format,R.type);for(const Ae of R.layerUpdates){const Qe=Ne.data.subarray(Ae*Ue/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*Ue/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ae,Ne.width,Ne.height,1,ze,et,Qe)}R.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,ze,et,Ne.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,Ne.width,Ne.height,Ne.depth,0,ze,et,Ne.data);else if(R.isData3DTexture)Y?(Le&&i.texStorage3D(r.TEXTURE_3D,We,Je,Ne.width,Ne.height,Ne.depth),Oe&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,ze,et,Ne.data)):i.texImage3D(r.TEXTURE_3D,0,Je,Ne.width,Ne.height,Ne.depth,0,ze,et,Ne.data);else if(R.isFramebufferTexture){if(Le)if(Y)i.texStorage2D(r.TEXTURE_2D,We,Je,Ne.width,Ne.height);else{let Ue=Ne.width,Ae=Ne.height;for(let Qe=0;Qe<We;Qe++)i.texImage2D(r.TEXTURE_2D,Qe,Je,Ue,Ae,0,ze,et,null),Ue>>=1,Ae>>=1}}else if(dt.length>0){if(Y&&Le){const Ue=Gt(dt[0]);i.texStorage2D(r.TEXTURE_2D,We,Je,Ue.width,Ue.height)}for(let Ue=0,Ae=dt.length;Ue<Ae;Ue++)Be=dt[Ue],Y?Oe&&i.texSubImage2D(r.TEXTURE_2D,Ue,0,0,ze,et,Be):i.texImage2D(r.TEXTURE_2D,Ue,Je,ze,et,Be);R.generateMipmaps=!1}else if(Y){if(Le){const Ue=Gt(Ne);i.texStorage2D(r.TEXTURE_2D,We,Je,Ue.width,Ue.height)}Oe&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,et,Ne)}else i.texImage2D(r.TEXTURE_2D,0,Je,ze,et,Ne);x(R)&&_(ce),Fe.__version=oe.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function _e(z,R,q){if(R.image.length!==6)return;const ce=xe(z,R),Se=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+q);const oe=s.get(Se);if(Se.version!==oe.__version||ce===!0){i.activeTexture(r.TEXTURE0+q);const Fe=Pt.getPrimaries(Pt.workingColorSpace),we=R.colorSpace===Ya?null:Pt.getPrimaries(R.colorSpace),Ze=R.colorSpace===Ya||Fe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const He=R.isCompressedTexture||R.image[0].isCompressedTexture,Ne=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let Ae=0;Ae<6;Ae++)!He&&!Ne?ze[Ae]=C(R.image[Ae],!0,l.maxCubemapSize):ze[Ae]=Ne?R.image[Ae].image:R.image[Ae],ze[Ae]=It(R,ze[Ae]);const et=ze[0],Je=c.convert(R.format,R.colorSpace),Be=c.convert(R.type),dt=O(R.internalFormat,Je,Be,R.colorSpace),Y=R.isVideoTexture!==!0,Le=oe.__version===void 0||ce===!0,Oe=Se.dataReady;let We=B(R,et);fe(r.TEXTURE_CUBE_MAP,R);let Ue;if(He){Y&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,We,dt,et.width,et.height);for(let Ae=0;Ae<6;Ae++){Ue=ze[Ae].mipmaps;for(let Qe=0;Qe<Ue.length;Qe++){const ut=Ue[Qe];R.format!==Di?Je!==null?Y?Oe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ut.width,ut.height,Je,ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,ut.width,ut.height,Je,Be,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,dt,ut.width,ut.height,0,Je,Be,ut.data)}}}else{if(Ue=R.mipmaps,Y&&Le){Ue.length>0&&We++;const Ae=Gt(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,We,dt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ne){Y?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ze[Ae].width,ze[Ae].height,Je,Be,ze[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,dt,ze[Ae].width,ze[Ae].height,0,Je,Be,ze[Ae].data);for(let Qe=0;Qe<Ue.length;Qe++){const V=Ue[Qe].image[Ae].image;Y?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,V.width,V.height,Je,Be,V.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,dt,V.width,V.height,0,Je,Be,V.data)}}else{Y?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Je,Be,ze[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,dt,Je,Be,ze[Ae]);for(let Qe=0;Qe<Ue.length;Qe++){const ut=Ue[Qe];Y?Oe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,Je,Be,ut.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,dt,Je,Be,ut.image[Ae])}}}x(R)&&_(r.TEXTURE_CUBE_MAP),oe.__version=Se.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ce(z,R,q,ce,Se,oe){const Fe=c.convert(q.format,q.colorSpace),we=c.convert(q.type),Ze=O(q.internalFormat,Fe,we,q.colorSpace),He=s.get(R),Ne=s.get(q);if(Ne.__renderTarget=R,!He.__hasExternalTextures){const ze=Math.max(1,R.width>>oe),et=Math.max(1,R.height>>oe);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,oe,Ze,ze,et,R.depth,0,Fe,we,null):i.texImage2D(Se,oe,Ze,ze,et,0,Fe,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ce,Se,Ne.__webglTexture,0,gt(R)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ce,Se,Ne.__webglTexture,oe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(z,R,q){if(r.bindRenderbuffer(r.RENDERBUFFER,z),R.depthBuffer){const ce=R.depthTexture,Se=ce&&ce.isDepthTexture?ce.type:null,oe=U(R.stencilBuffer,Se),Fe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=gt(R);qe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,oe,R.width,R.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,oe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Fe,r.RENDERBUFFER,z)}else{const ce=R.textures;for(let Se=0;Se<ce.length;Se++){const oe=ce[Se],Fe=c.convert(oe.format,oe.colorSpace),we=c.convert(oe.type),Ze=O(oe.internalFormat,Fe,we,oe.colorSpace),He=gt(R);q&&qe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,Ze,R.width,R.height):qe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,Ze,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ze,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(z,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=s.get(R.depthTexture);ce.__renderTarget=R,(!ce.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ae(R.depthTexture,0);const Se=ce.__webglTexture,oe=gt(R);if(R.depthTexture.format===Zo)qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Se,0);else if(R.depthTexture.format===Ko)qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function it(z){const R=s.get(z),q=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const ce=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ce){const Se=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ce.removeEventListener("dispose",Se)};ce.addEventListener("dispose",Se),R.__depthDisposeCallback=Se}R.__boundDepthTexture=ce}if(z.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ce=z.texture.mipmaps;ce&&ce.length>0?Ye(R.__webglFramebuffer[0],z):Ye(R.__webglFramebuffer,z)}else if(q){R.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ce]),R.__webglDepthbuffer[ce]===void 0)R.__webglDepthbuffer[ce]=r.createRenderbuffer(),Ve(R.__webglDepthbuffer[ce],z,!1);else{const Se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=R.__webglDepthbuffer[ce];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,oe)}}else{const ce=z.texture.mipmaps;if(ce&&ce.length>0?i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Ve(R.__webglDepthbuffer,z,!1);else{const Se=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,oe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(z,R,q){const ce=s.get(z);R!==void 0&&Ce(ce.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&it(z)}function A(z){const R=z.texture,q=s.get(z),ce=s.get(R);z.addEventListener("dispose",j);const Se=z.textures,oe=z.isWebGLCubeRenderTarget===!0,Fe=Se.length>1;if(Fe||(ce.__webglTexture===void 0&&(ce.__webglTexture=r.createTexture()),ce.__version=R.version,h.memory.textures++),oe){q.__webglFramebuffer=[];for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[we]=[];for(let Ze=0;Ze<R.mipmaps.length;Ze++)q.__webglFramebuffer[we][Ze]=r.createFramebuffer()}else q.__webglFramebuffer[we]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let we=0;we<R.mipmaps.length;we++)q.__webglFramebuffer[we]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Fe)for(let we=0,Ze=Se.length;we<Ze;we++){const He=s.get(Se[we]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),h.memory.textures++)}if(z.samples>0&&qe(z)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let we=0;we<Se.length;we++){const Ze=Se[we];q.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[we]);const He=c.convert(Ze.format,Ze.colorSpace),Ne=c.convert(Ze.type),ze=O(Ze.internalFormat,He,Ne,Ze.colorSpace,z.isXRRenderTarget===!0),et=gt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,ze,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,q.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(q.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){i.bindTexture(r.TEXTURE_CUBE_MAP,ce.__webglTexture),fe(r.TEXTURE_CUBE_MAP,R);for(let we=0;we<6;we++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ze=0;Ze<R.mipmaps.length;Ze++)Ce(q.__webglFramebuffer[we][Ze],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ze);else Ce(q.__webglFramebuffer[we],z,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(R)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Fe){for(let we=0,Ze=Se.length;we<Ze;we++){const He=Se[we],Ne=s.get(He);let ze=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ze=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Ne.__webglTexture),fe(ze,He),Ce(q.__webglFramebuffer,z,He,r.COLOR_ATTACHMENT0+we,ze,0),x(He)&&_(ze)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(we=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,ce.__webglTexture),fe(we,R),R.mipmaps&&R.mipmaps.length>0)for(let Ze=0;Ze<R.mipmaps.length;Ze++)Ce(q.__webglFramebuffer[Ze],z,R,r.COLOR_ATTACHMENT0,we,Ze);else Ce(q.__webglFramebuffer,z,R,r.COLOR_ATTACHMENT0,we,0);x(R)&&_(we),i.unbindTexture()}z.depthBuffer&&it(z)}function ve(z){const R=z.textures;for(let q=0,ce=R.length;q<ce;q++){const Se=R[q];if(x(Se)){const oe=I(z),Fe=s.get(Se).__webglTexture;i.bindTexture(oe,Fe),_(oe),i.unbindTexture()}}}const be=[],je=[];function De(z){if(z.samples>0){if(qe(z)===!1){const R=z.textures,q=z.width,ce=z.height;let Se=r.COLOR_BUFFER_BIT;const oe=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Fe=s.get(z),we=R.length>1;if(we)for(let He=0;He<R.length;He++)i.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ze=z.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let He=0;He<R.length;He++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[He]);const Ne=s.get(R[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,q,ce,0,0,q,ce,Se,r.NEAREST),g===!0&&(be.length=0,je.length=0,be.push(r.COLOR_ATTACHMENT0+He),z.depthBuffer&&z.resolveDepthBuffer===!1&&(be.push(oe),je.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,je)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let He=0;He<R.length;He++){i.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,Fe.__webglColorRenderbuffer[He]);const Ne=s.get(R[He]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,Ne,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&g){const R=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function gt(z){return Math.min(l.maxSamples,z.samples)}function qe(z){const R=s.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ot(z){const R=h.render.frame;v.get(z)!==R&&(v.set(z,R),z.update())}function It(z,R){const q=z.colorSpace,ce=z.format,Se=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||q!==Ir&&q!==Ya&&(Pt.getTransfer(q)===Wt?(ce!==Di||Se!==ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}function Gt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=ne,this.setTexture2D=ae,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=k,this.rebindTextures=Nt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=qe}function VA(r,e){function i(s,l=Ya){let c;const h=Pt.getTransfer(l);if(s===ma)return r.UNSIGNED_BYTE;if(s===Wd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===_v)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===vv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===mv)return r.BYTE;if(s===gv)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===qd)return r.INT;if(s===ws)return r.UNSIGNED_INT;if(s===da)return r.FLOAT;if(s===$o)return r.HALF_FLOAT;if(s===xv)return r.ALPHA;if(s===yv)return r.RGB;if(s===Di)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Ko)return r.DEPTH_STENCIL;if(s===Sv)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===Mv)return r.RG;if(s===Kd)return r.RG_INTEGER;if(s===Qd)return r.RGBA_INTEGER;if(s===jc||s===Gc||s===Vc||s===kc)if(h===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ud||s===fd||s===hd||s===dd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ud)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pd||s===md||s===gd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===pd||s===md)return h===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===gd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===_d)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===vd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Md)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ed)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Td)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ad)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dd)return h===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nd||s===Ud||s===Ld)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Nd)return h===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ud)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ld)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Od||s===Pd||s===zd||s===Id)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Od)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const kA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
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

}`;class qA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Bv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new $a({vertexShader:kA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new ru(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends Us{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",g=1,m=null,v=null,S=null,y=null,b=null,M=null;const C=typeof XRWebGLBinding<"u",x=new qA,_={},I=i.getContextAttributes();let O=null,U=null;const B=[],G=[],j=new Mt;let K=null;const T=new Jn;T.viewport=new un;const D=new Jn;D.viewport=new un;const H=[T,D],ne=new fE;let le=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let _e=B[ie];return _e===void 0&&(_e=new Ih,B[ie]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ie){let _e=B[ie];return _e===void 0&&(_e=new Ih,B[ie]=_e),_e.getGripSpace()},this.getHand=function(ie){let _e=B[ie];return _e===void 0&&(_e=new Ih,B[ie]=_e),_e.getHandSpace()};function ae(ie){const _e=G.indexOf(ie.inputSource);if(_e===-1)return;const Ce=B[_e];Ce!==void 0&&(Ce.update(ie.inputSource,ie.frame,m||h),Ce.dispatchEvent({type:ie.type,data:ie.inputSource}))}function P(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<B.length;ie++){const _e=G[ie];_e!==null&&(G[ie]=null,B[ie].disconnect(_e))}le=null,X=null,x.reset();for(const ie in _)delete _[ie];e.setRenderTarget(O),b=null,y=null,S=null,l=null,U=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Z),I.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(j),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ve=null,Ye=null;I.depth&&(Ye=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=I.stencil?Ko:Zo,Ve=I.stencil?Yo:ws);const it={colorFormat:i.RGBA8,depthFormat:Ye,scaleFactor:c};S=this.getBinding(),y=S.createProjectionLayer(it),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Ns(y.textureWidth,y.textureHeight,{format:Di,type:ma,depthTexture:new Iv(y.textureWidth,y.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new Ns(b.framebufferWidth,b.framebufferHeight,{format:Di,type:ma,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(g),m=null,h=await l.requestReferenceSpace(d),Ie.setContext(l),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ie){for(let _e=0;_e<ie.removed.length;_e++){const Ce=ie.removed[_e],Ve=G.indexOf(Ce);Ve>=0&&(G[Ve]=null,B[Ve].disconnect(Ce))}for(let _e=0;_e<ie.added.length;_e++){const Ce=ie.added[_e];let Ve=G.indexOf(Ce);if(Ve===-1){for(let it=0;it<B.length;it++)if(it>=G.length){G.push(Ce),Ve=it;break}else if(G[it]===null){G[it]=Ce,Ve=it;break}if(Ve===-1)break}const Ye=B[Ve];Ye&&Ye.connect(Ce)}}const k=new J,ge=new J;function L(ie,_e,Ce){k.setFromMatrixPosition(_e.matrixWorld),ge.setFromMatrixPosition(Ce.matrixWorld);const Ve=k.distanceTo(ge),Ye=_e.projectionMatrix.elements,it=Ce.projectionMatrix.elements,Nt=Ye[14]/(Ye[10]-1),A=Ye[14]/(Ye[10]+1),ve=(Ye[9]+1)/Ye[5],be=(Ye[9]-1)/Ye[5],je=(Ye[8]-1)/Ye[0],De=(it[8]+1)/it[0],gt=Nt*je,qe=Nt*De,ot=Ve/(-je+De),It=ot*-je;if(_e.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(It),ie.translateZ(ot),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ye[10]===-1)ie.projectionMatrix.copy(_e.projectionMatrix),ie.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Gt=Nt+ot,z=A+ot,R=gt-It,q=qe+(Ve-It),ce=ve*A/z*Gt,Se=be*A/z*Gt;ie.projectionMatrix.makePerspective(R,q,ce,Se,Gt,z),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Q(ie,_e){_e===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(_e.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let _e=ie.near,Ce=ie.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(Ce=x.depthFar)),ne.near=D.near=T.near=_e,ne.far=D.far=T.far=Ce,(le!==ne.near||X!==ne.far)&&(l.updateRenderState({depthNear:ne.near,depthFar:ne.far}),le=ne.near,X=ne.far),ne.layers.mask=ie.layers.mask|6,T.layers.mask=ne.layers.mask&3,D.layers.mask=ne.layers.mask&5;const Ve=ie.parent,Ye=ne.cameras;Q(ne,Ve);for(let it=0;it<Ye.length;it++)Q(Ye[it],Ve);Ye.length===2?L(ne,T,D):ne.projectionMatrix.copy(T.projectionMatrix),fe(ie,ne,Ve)};function fe(ie,_e,Ce){Ce===null?ie.matrix.copy(_e.matrixWorld):(ie.matrix.copy(Ce.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(_e.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(_e.projectionMatrix),ie.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Qo*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(y===null&&b===null))return g},this.setFoveation=function(ie){g=ie,y!==null&&(y.fixedFoveation=ie),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(ie){return _[ie]};let xe=null;function de(ie,_e){if(v=_e.getViewerPose(m||h),M=_e,v!==null){const Ce=v.views;b!==null&&(e.setRenderTargetFramebuffer(U,b.framebuffer),e.setRenderTarget(U));let Ve=!1;Ce.length!==ne.cameras.length&&(ne.cameras.length=0,Ve=!0);for(let A=0;A<Ce.length;A++){const ve=Ce[A];let be=null;if(b!==null)be=b.getViewport(ve);else{const De=S.getViewSubImage(y,ve);be=De.viewport,A===0&&(e.setRenderTargetTextures(U,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(U))}let je=H[A];je===void 0&&(je=new Jn,je.layers.enable(A),je.viewport=new un,H[A]=je),je.matrix.fromArray(ve.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ve.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(be.x,be.y,be.width,be.height),A===0&&(ne.matrix.copy(je.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ve===!0&&ne.cameras.push(je)}const Ye=l.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const A=S.getDepthInformation(Ce[0]);A&&A.isValid&&A.texture&&x.init(A,l.renderState)}if(Ye&&Ye.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let A=0;A<Ce.length;A++){const ve=Ce[A].camera;if(ve){let be=_[ve];be||(be=new Bv,_[ve]=be);const je=S.getCameraImage(ve);be.sourceTexture=je}}}}for(let Ce=0;Ce<B.length;Ce++){const Ve=G[Ce],Ye=B[Ce];Ve!==null&&Ye!==void 0&&Ye.update(Ve,_e,m||h)}xe&&xe(ie,_e),_e.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_e}),M=null}const Ie=new Fv;Ie.setAnimationLoop(de),this.setAnimationLoop=function(ie){xe=ie},this.dispose=function(){}}}const Es=new ga,YA=new an;function ZA(r,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,wv(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,I,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),S(x,_)):_.isMeshPhongMaterial?(c(x,_),v(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&b(x,_,U)):_.isMeshMatcapMaterial?(c(x,_),M(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),C(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?g(x,_,I,O):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===$n&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===$n&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=e.get(_),O=I.envMap,U=I.envMapRotation;O&&(x.envMap.value=O,Es.copy(U),Es.x*=-1,Es.y*=-1,Es.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),x.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Es)),x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function g(x,_,I,O){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=O*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function S(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function b(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function C(x,_){const I=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function KA(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(I,O){const U=O.program;s.uniformBlockBinding(I,U)}function m(I,O){let U=l[I.id];U===void 0&&(M(I),U=v(I),l[I.id]=U,I.addEventListener("dispose",x));const B=O.program;s.updateUBOMapping(I,B);const G=e.render.frame;c[I.id]!==G&&(y(I),c[I.id]=G)}function v(I){const O=S();I.__bindingPointIndex=O;const U=r.createBuffer(),B=I.__size,G=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,U),U}function S(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const O=l[I.id],U=I.uniforms,B=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let G=0,j=U.length;G<j;G++){const K=Array.isArray(U[G])?U[G]:[U[G]];for(let T=0,D=K.length;T<D;T++){const H=K[T];if(b(H,G,T,B)===!0){const ne=H.__offset,le=Array.isArray(H.value)?H.value:[H.value];let X=0;for(let ae=0;ae<le.length;ae++){const P=le[ae],Z=C(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ne+X,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(I,O,U,B){const G=I.value,j=O+"_"+U;if(B[j]===void 0)return typeof G=="number"||typeof G=="boolean"?B[j]=G:B[j]=G.clone(),!0;{const K=B[j];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return B[j]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function M(I){const O=I.uniforms;let U=0;const B=16;for(let j=0,K=O.length;j<K;j++){const T=Array.isArray(O[j])?O[j]:[O[j]];for(let D=0,H=T.length;D<H;D++){const ne=T[D],le=Array.isArray(ne.value)?ne.value:[ne.value];for(let X=0,ae=le.length;X<ae;X++){const P=le[X],Z=C(P),k=U%B,ge=k%Z.boundary,L=k+ge;U+=ge,L!==0&&B-L<Z.storage&&(U+=B-L),ne.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=U,U+=Z.storage}}}const G=U%B;return G>0&&(U+=B-G),I.__size=U,I.__cache={},this}function C(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function x(I){const O=I.target;O.removeEventListener("dispose",x);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:g,update:m,dispose:_}}class QA{constructor(e={}){const{canvas:i=UM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const M=new Uint32Array(4),C=new Int32Array(4);let x=null,_=null;const I=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=Gn;let G=0,j=0,K=null,T=-1,D=null;const H=new un,ne=new un;let le=null;const X=new zt(0);let ae=0,P=i.width,Z=i.height,k=1,ge=null,L=null;const Q=new un(0,0,P,Z),fe=new un(0,0,P,Z);let xe=!1;const de=new Uv;let Ie=!1,ie=!1;const _e=new an,Ce=new J,Ve=new un,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Nt(){return K===null?k:1}let A=s;function ve(N,$){return i.getContext(N,$)}try{const N={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xd}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",We,!1),i.addEventListener("webglcontextcreationerror",Ue,!1),A===null){const $="webgl2";if(A=ve($,N),A===null)throw ve($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let be,je,De,gt,qe,ot,It,Gt,z,R,q,ce,Se,oe,Fe,we,Ze,He,Ne,ze,et,Je,Be,dt;function Y(){be=new oT(A),be.init(),Je=new VA(A,be),je=new eT(A,be,e,Je),De=new jA(A,be),je.reversedDepthBuffer&&y&&De.buffers.depth.setReversed(!0),gt=new uT(A),qe=new CA,ot=new GA(A,be,De,qe,je,Je,gt),It=new nT(U),Gt=new rT(U),z=new gE(A),Be=new J1(A,z),R=new lT(A,z,gt,Be),q=new hT(A,R,z,gt),Ne=new fT(A,je,ot),we=new tT(qe),ce=new RA(U,It,Gt,be,je,Be,we),Se=new ZA(U,qe),oe=new DA,Fe=new zA(be),He=new Q1(U,It,Gt,De,q,b,g),Ze=new FA(U,q,je),dt=new KA(A,gt,je,De),ze=new $1(A,be,gt),et=new cT(A,be,gt),gt.programs=ce.programs,U.capabilities=je,U.extensions=be,U.properties=qe,U.renderLists=oe,U.shadowMap=Ze,U.state=De,U.info=gt}Y();const Le=new WA(U,A);this.xr=Le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const N=be.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=be.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(N){N!==void 0&&(k=N,this.setSize(P,Z,!1))},this.getSize=function(N){return N.set(P,Z)},this.setSize=function(N,$,pe=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=N,Z=$,i.width=Math.floor(N*k),i.height=Math.floor($*k),pe===!0&&(i.style.width=N+"px",i.style.height=$+"px"),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(P*k,Z*k).floor()},this.setDrawingBufferSize=function(N,$,pe){P=N,Z=$,k=pe,i.width=Math.floor(N*pe),i.height=Math.floor($*pe),this.setViewport(0,0,N,$)},this.getCurrentViewport=function(N){return N.copy(H)},this.getViewport=function(N){return N.copy(Q)},this.setViewport=function(N,$,pe,me){N.isVector4?Q.set(N.x,N.y,N.z,N.w):Q.set(N,$,pe,me),De.viewport(H.copy(Q).multiplyScalar(k).round())},this.getScissor=function(N){return N.copy(fe)},this.setScissor=function(N,$,pe,me){N.isVector4?fe.set(N.x,N.y,N.z,N.w):fe.set(N,$,pe,me),De.scissor(ne.copy(fe).multiplyScalar(k).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(N){De.setScissorTest(xe=N)},this.setOpaqueSort=function(N){ge=N},this.setTransparentSort=function(N){L=N},this.getClearColor=function(N){return N.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,pe=!0){let me=0;if(N){let te=!1;if(K!==null){const Pe=K.texture.format;te=Pe===Qd||Pe===Kd||Pe===Zd}if(te){const Pe=K.texture.type,Ge=Pe===ma||Pe===ws||Pe===Wo||Pe===Yo||Pe===Wd||Pe===Yd,Ke=He.getClearColor(),ke=He.getClearAlpha(),st=Ke.r,lt=Ke.g,tt=Ke.b;Ge?(M[0]=st,M[1]=lt,M[2]=tt,M[3]=ke,A.clearBufferuiv(A.COLOR,0,M)):(C[0]=st,C[1]=lt,C[2]=tt,C[3]=ke,A.clearBufferiv(A.COLOR,0,C))}else me|=A.COLOR_BUFFER_BIT}$&&(me|=A.DEPTH_BUFFER_BIT),pe&&(me|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",We,!1),i.removeEventListener("webglcontextcreationerror",Ue,!1),He.dispose(),oe.dispose(),Fe.dispose(),qe.dispose(),It.dispose(),Gt.dispose(),q.dispose(),Be.dispose(),dt.dispose(),ce.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",pt),Le.removeEventListener("sessionend",Tt),mt.stop()};function Oe(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const N=gt.autoReset,$=Ze.enabled,pe=Ze.autoUpdate,me=Ze.needsUpdate,te=Ze.type;Y(),gt.autoReset=N,Ze.enabled=$,Ze.autoUpdate=pe,Ze.needsUpdate=me,Ze.type=te}function Ue(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ae(N){const $=N.target;$.removeEventListener("dispose",Ae),Qe($)}function Qe(N){ut(N),qe.remove(N)}function ut(N){const $=qe.get(N).programs;$!==void 0&&($.forEach(function(pe){ce.releaseProgram(pe)}),N.isShaderMaterial&&ce.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,pe,me,te,Pe){$===null&&($=Ye);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Ke=_a(N,$,pe,me,te);De.setMaterial(me,Ge);let ke=pe.index,st=1;if(me.wireframe===!0){if(ke=R.getWireframeAttribute(pe),ke===void 0)return;st=2}const lt=pe.drawRange,tt=pe.attributes.position;let xt=lt.start*st,Lt=(lt.start+lt.count)*st;Pe!==null&&(xt=Math.max(xt,Pe.start*st),Lt=Math.min(Lt,(Pe.start+Pe.count)*st)),ke!==null?(xt=Math.max(xt,0),Lt=Math.min(Lt,ke.count)):tt!=null&&(xt=Math.max(xt,0),Lt=Math.min(Lt,tt.count));const $t=Lt-xt;if($t<0||$t===1/0)return;Be.setup(te,me,Ke,pe,ke);let Vt,yt=ze;if(ke!==null&&(Vt=z.get(ke),yt=et,yt.setIndex(Vt)),te.isMesh)me.wireframe===!0?(De.setLineWidth(me.wireframeLinewidth*Nt()),yt.setMode(A.LINES)):yt.setMode(A.TRIANGLES);else if(te.isLine){let at=me.linewidth;at===void 0&&(at=1),De.setLineWidth(at*Nt()),te.isLineSegments?yt.setMode(A.LINES):te.isLineLoop?yt.setMode(A.LINE_LOOP):yt.setMode(A.LINE_STRIP)}else te.isPoints?yt.setMode(A.POINTS):te.isSprite&&yt.setMode(A.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))yt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const at=te._multiDrawStarts,Jt=te._multiDrawCounts,Ct=te._multiDrawCount,wn=ke?z.get(ke).bytesPerElement:1,Mi=qe.get(me).currentProgram.getUniforms();for(let In=0;In<Ct;In++)Mi.setValue(A,"_gl_DrawID",In),yt.render(at[In]/wn,Jt[In])}else if(te.isInstancedMesh)yt.renderInstances(xt,$t,te.count);else if(pe.isInstancedBufferGeometry){const at=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Jt=Math.min(pe.instanceCount,at);yt.renderInstances(xt,$t,Jt)}else yt.render(xt,$t)};function V(N,$,pe){N.transparent===!0&&N.side===fa&&N.forceSinglePass===!1?(N.side=$n,N.needsUpdate=!0,Ui(N,$,pe),N.side=Ja,N.needsUpdate=!0,Ui(N,$,pe),N.side=fa):Ui(N,$,pe)}this.compile=function(N,$,pe=null){pe===null&&(pe=N),_=Fe.get(pe),_.init($),O.push(_),pe.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(_.pushLight(te),te.castShadow&&_.pushShadow(te))}),N!==pe&&N.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(_.pushLight(te),te.castShadow&&_.pushShadow(te))}),_.setupLights();const me=new Set;return N.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Pe=te.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){const Ke=Pe[Ge];V(Ke,pe,te),me.add(Ke)}else V(Pe,pe,te),me.add(Pe)}),_=O.pop(),me},this.compileAsync=function(N,$,pe=null){const me=this.compile(N,$,pe);return new Promise(te=>{function Pe(){if(me.forEach(function(Ge){qe.get(Ge).currentProgram.isReady()&&me.delete(Ge)}),me.size===0){te(N);return}setTimeout(Pe,10)}be.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Me=null;function ht(N){Me&&Me(N)}function pt(){mt.stop()}function Tt(){mt.start()}const mt=new Fv;mt.setAnimationLoop(ht),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(N){Me=N,Le.setAnimationLoop(N),N===null?mt.stop():mt.start()},Le.addEventListener("sessionstart",pt),Le.addEventListener("sessionend",Tt),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera($),$=Le.getCamera()),N.isScene===!0&&N.onBeforeRender(U,N,$,K),_=Fe.get(N,O.length),_.init($),O.push(_),_e.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),de.setFromProjectionMatrix(_e,Gi,$.reversedDepth),ie=this.localClippingEnabled,Ie=we.init(this.clippingPlanes,ie),x=oe.get(N,I.length),x.init(),I.push(x),Le.enabled===!0&&Le.isPresenting===!0){const Pe=U.xr.getDepthSensingMesh();Pe!==null&&Xn(Pe,$,-1/0,U.sortObjects)}Xn(N,$,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(ge,L),it=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,it&&He.addToRenderList(x,N),this.info.render.frame++,Ie===!0&&we.beginShadows();const pe=_.state.shadowsArray;Ze.render(pe,N,$),Ie===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const me=x.opaque,te=x.transmissive;if(_.setupLights(),$.isArrayCamera){const Pe=$.cameras;if(te.length>0)for(let Ge=0,Ke=Pe.length;Ge<Ke;Ge++){const ke=Pe[Ge];zn(me,te,N,ke)}it&&He.render(N);for(let Ge=0,Ke=Pe.length;Ge<Ke;Ge++){const ke=Pe[Ge];Pn(x,N,ke,ke.viewport)}}else te.length>0&&zn(me,te,N,$),it&&He.render(N),Pn(x,N,$);K!==null&&j===0&&(ot.updateMultisampleRenderTarget(K),ot.updateRenderTargetMipmap(K)),N.isScene===!0&&N.onAfterRender(U,N,$),Be.resetDefaultState(),T=-1,D=null,O.pop(),O.length>0?(_=O[O.length-1],Ie===!0&&we.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Xn(N,$,pe,me){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||de.intersectsSprite(N)){me&&Ve.setFromMatrixPosition(N.matrixWorld).applyMatrix4(_e);const Ge=q.update(N),Ke=N.material;Ke.visible&&x.push(N,Ge,Ke,pe,Ve.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||de.intersectsObject(N))){const Ge=q.update(N),Ke=N.material;if(me&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ve.copy(N.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ve.copy(Ge.boundingSphere.center)),Ve.applyMatrix4(N.matrixWorld).applyMatrix4(_e)),Array.isArray(Ke)){const ke=Ge.groups;for(let st=0,lt=ke.length;st<lt;st++){const tt=ke[st],xt=Ke[tt.materialIndex];xt&&xt.visible&&x.push(N,Ge,xt,pe,Ve.z,tt)}}else Ke.visible&&x.push(N,Ge,Ke,pe,Ve.z,null)}}const Pe=N.children;for(let Ge=0,Ke=Pe.length;Ge<Ke;Ge++)Xn(Pe[Ge],$,pe,me)}function Pn(N,$,pe,me){const te=N.opaque,Pe=N.transmissive,Ge=N.transparent;_.setupLightsView(pe),Ie===!0&&we.setGlobalState(U.clippingPlanes,pe),me&&De.viewport(H.copy(me)),te.length>0&&Vi(te,$,pe),Pe.length>0&&Vi(Pe,$,pe),Ge.length>0&&Vi(Ge,$,pe),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function zn(N,$,pe,me){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[me.id]===void 0&&(_.state.transmissionRenderTarget[me.id]=new Ns(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?$o:ma,minFilter:Cs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Pe=_.state.transmissionRenderTarget[me.id],Ge=me.viewport||H;Pe.setSize(Ge.z*U.transmissionResolutionScale,Ge.w*U.transmissionResolutionScale);const Ke=U.getRenderTarget(),ke=U.getActiveCubeFace(),st=U.getActiveMipmapLevel();U.setRenderTarget(Pe),U.getClearColor(X),ae=U.getClearAlpha(),ae<1&&U.setClearColor(16777215,.5),U.clear(),it&&He.render(pe);const lt=U.toneMapping;U.toneMapping=Ka;const tt=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),_.setupLightsView(me),Ie===!0&&we.setGlobalState(U.clippingPlanes,me),Vi(N,pe,me),ot.updateMultisampleRenderTarget(Pe),ot.updateRenderTargetMipmap(Pe),be.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Lt=0,$t=$.length;Lt<$t;Lt++){const Vt=$[Lt],yt=Vt.object,at=Vt.geometry,Jt=Vt.material,Ct=Vt.group;if(Jt.side===fa&&yt.layers.test(me.layers)){const wn=Jt.side;Jt.side=$n,Jt.needsUpdate=!0,es(yt,pe,me,at,Jt,Ct),Jt.side=wn,Jt.needsUpdate=!0,xt=!0}}xt===!0&&(ot.updateMultisampleRenderTarget(Pe),ot.updateRenderTargetMipmap(Pe))}U.setRenderTarget(Ke,ke,st),U.setClearColor(X,ae),tt!==void 0&&(me.viewport=tt),U.toneMapping=lt}function Vi(N,$,pe){const me=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Pe=N.length;te<Pe;te++){const Ge=N[te],Ke=Ge.object,ke=Ge.geometry,st=Ge.group;let lt=Ge.material;lt.allowOverride===!0&&me!==null&&(lt=me),Ke.layers.test(pe.layers)&&es(Ke,$,pe,ke,lt,st)}}function es(N,$,pe,me,te,Pe){N.onBeforeRender(U,$,pe,me,te,Pe),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),te.onBeforeRender(U,$,pe,me,N,Pe),te.transparent===!0&&te.side===fa&&te.forceSinglePass===!1?(te.side=$n,te.needsUpdate=!0,U.renderBufferDirect(pe,$,me,te,N,Pe),te.side=Ja,te.needsUpdate=!0,U.renderBufferDirect(pe,$,me,te,N,Pe),te.side=fa):U.renderBufferDirect(pe,$,me,te,N,Pe),N.onAfterRender(U,$,pe,me,te,Pe)}function Ui(N,$,pe){$.isScene!==!0&&($=Ye);const me=qe.get(N),te=_.state.lights,Pe=_.state.shadowsArray,Ge=te.state.version,Ke=ce.getParameters(N,te.state,Pe,$,pe),ke=ce.getProgramCacheKey(Ke);let st=me.programs;me.environment=N.isMeshStandardMaterial?$.environment:null,me.fog=$.fog,me.envMap=(N.isMeshStandardMaterial?Gt:It).get(N.envMap||me.environment),me.envMapRotation=me.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",Ae),st=new Map,me.programs=st);let lt=st.get(ke);if(lt!==void 0){if(me.currentProgram===lt&&me.lightsStateVersion===Ge)return ki(N,Ke),lt}else Ke.uniforms=ce.getUniforms(N),N.onBeforeCompile(Ke,U),lt=ce.acquireProgram(Ke,ke),st.set(ke,lt),me.uniforms=Ke.uniforms;const tt=me.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=we.uniform),ki(N,Ke),me.needsLights=va(N),me.lightsStateVersion=Ge,me.needsLights&&(tt.ambientLightColor.value=te.state.ambient,tt.lightProbe.value=te.state.probe,tt.directionalLights.value=te.state.directional,tt.directionalLightShadows.value=te.state.directionalShadow,tt.spotLights.value=te.state.spot,tt.spotLightShadows.value=te.state.spotShadow,tt.rectAreaLights.value=te.state.rectArea,tt.ltc_1.value=te.state.rectAreaLTC1,tt.ltc_2.value=te.state.rectAreaLTC2,tt.pointLights.value=te.state.point,tt.pointLightShadows.value=te.state.pointShadow,tt.hemisphereLights.value=te.state.hemi,tt.directionalShadowMap.value=te.state.directionalShadowMap,tt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,tt.spotShadowMap.value=te.state.spotShadowMap,tt.spotLightMatrix.value=te.state.spotLightMatrix,tt.spotLightMap.value=te.state.spotLightMap,tt.pointShadowMap.value=te.state.pointShadowMap,tt.pointShadowMatrix.value=te.state.pointShadowMatrix),me.currentProgram=lt,me.uniformsList=null,lt}function Ls(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=Xc.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function ki(N,$){const pe=qe.get(N);pe.outputColorSpace=$.outputColorSpace,pe.batching=$.batching,pe.batchingColor=$.batchingColor,pe.instancing=$.instancing,pe.instancingColor=$.instancingColor,pe.instancingMorph=$.instancingMorph,pe.skinning=$.skinning,pe.morphTargets=$.morphTargets,pe.morphNormals=$.morphNormals,pe.morphColors=$.morphColors,pe.morphTargetsCount=$.morphTargetsCount,pe.numClippingPlanes=$.numClippingPlanes,pe.numIntersection=$.numClipIntersection,pe.vertexAlphas=$.vertexAlphas,pe.vertexTangents=$.vertexTangents,pe.toneMapping=$.toneMapping}function _a(N,$,pe,me,te){$.isScene!==!0&&($=Ye),ot.resetTextureUnits();const Pe=$.fog,Ge=me.isMeshStandardMaterial?$.environment:null,Ke=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ir,ke=(me.isMeshStandardMaterial?Gt:It).get(me.envMap||Ge),st=me.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,lt=!!pe.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),tt=!!pe.morphAttributes.position,xt=!!pe.morphAttributes.normal,Lt=!!pe.morphAttributes.color;let $t=Ka;me.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&($t=U.toneMapping);const Vt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,yt=Vt!==void 0?Vt.length:0,at=qe.get(me),Jt=_.state.lights;if(Ie===!0&&(ie===!0||N!==D)){const sn=N===D&&me.id===T;we.setState(me,N,sn)}let Ct=!1;me.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Jt.state.version||at.outputColorSpace!==Ke||te.isBatchedMesh&&at.batching===!1||!te.isBatchedMesh&&at.batching===!0||te.isBatchedMesh&&at.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&at.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&at.instancing===!1||!te.isInstancedMesh&&at.instancing===!0||te.isSkinnedMesh&&at.skinning===!1||!te.isSkinnedMesh&&at.skinning===!0||te.isInstancedMesh&&at.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&at.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&at.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&at.instancingMorph===!1&&te.morphTexture!==null||at.envMap!==ke||me.fog===!0&&at.fog!==Pe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==we.numPlanes||at.numIntersection!==we.numIntersection)||at.vertexAlphas!==st||at.vertexTangents!==lt||at.morphTargets!==tt||at.morphNormals!==xt||at.morphColors!==Lt||at.toneMapping!==$t||at.morphTargetsCount!==yt)&&(Ct=!0):(Ct=!0,at.__version=me.version);let wn=at.currentProgram;Ct===!0&&(wn=Ui(me,$,te));let Mi=!1,In=!1,yn=!1;const Zt=wn.getUniforms(),Bn=at.uniforms;if(De.useProgram(wn.program)&&(Mi=!0,In=!0,yn=!0),me.id!==T&&(T=me.id,In=!0),Mi||D!==N){De.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Zt.setValue(A,"projectionMatrix",N.projectionMatrix),Zt.setValue(A,"viewMatrix",N.matrixWorldInverse);const Tn=Zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(A,Ce.setFromMatrixPosition(N.matrixWorld)),je.logarithmicDepthBuffer&&Zt.setValue(A,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&Zt.setValue(A,"isOrthographic",N.isOrthographicCamera===!0),D!==N&&(D=N,In=!0,yn=!0)}if(te.isSkinnedMesh){Zt.setOptional(A,te,"bindMatrix"),Zt.setOptional(A,te,"bindMatrixInverse");const sn=te.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Zt.setValue(A,"boneTexture",sn.boneTexture,ot))}te.isBatchedMesh&&(Zt.setOptional(A,te,"batchingTexture"),Zt.setValue(A,"batchingTexture",te._matricesTexture,ot),Zt.setOptional(A,te,"batchingIdTexture"),Zt.setValue(A,"batchingIdTexture",te._indirectTexture,ot),Zt.setOptional(A,te,"batchingColorTexture"),te._colorsTexture!==null&&Zt.setValue(A,"batchingColorTexture",te._colorsTexture,ot));const Dn=pe.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ne.update(te,pe,wn),(In||at.receiveShadow!==te.receiveShadow)&&(at.receiveShadow=te.receiveShadow,Zt.setValue(A,"receiveShadow",te.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Bn.envMap.value=ke,Bn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&$.environment!==null&&(Bn.envMapIntensity.value=$.environmentIntensity),In&&(Zt.setValue(A,"toneMappingExposure",U.toneMappingExposure),at.needsLights&&ts(Bn,yn),Pe&&me.fog===!0&&Se.refreshFogUniforms(Bn,Pe),Se.refreshMaterialUniforms(Bn,me,k,Z,_.state.transmissionRenderTarget[N.id]),Xc.upload(A,Ls(at),Bn,ot)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(Xc.upload(A,Ls(at),Bn,ot),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&Zt.setValue(A,"center",te.center),Zt.setValue(A,"modelViewMatrix",te.modelViewMatrix),Zt.setValue(A,"normalMatrix",te.normalMatrix),Zt.setValue(A,"modelMatrix",te.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const sn=me.uniformsGroups;for(let Tn=0,Os=sn.length;Tn<Os;Tn++){const qn=sn[Tn];dt.update(qn,wn),dt.bind(qn,wn)}}return wn}function ts(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function va(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,$,pe){const me=qe.get(N);me.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),qe.get(N.texture).__webglTexture=$,qe.get(N.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:pe,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){const pe=qe.get(N);pe.__webglFramebuffer=$,pe.__useDefaultFramebuffer=$===void 0};const fn=A.createFramebuffer();this.setRenderTarget=function(N,$=0,pe=0){K=N,G=$,j=pe;let me=!0,te=null,Pe=!1,Ge=!1;if(N){const ke=qe.get(N);if(ke.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(A.FRAMEBUFFER,null),me=!1;else if(ke.__webglFramebuffer===void 0)ot.setupRenderTarget(N);else if(ke.__hasExternalTextures)ot.rebindTextures(N,qe.get(N.texture).__webglTexture,qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const tt=N.depthTexture;if(ke.__boundDepthTexture!==tt){if(tt!==null&&qe.has(tt)&&(N.width!==tt.image.width||N.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(N)}}const st=N.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Ge=!0);const lt=qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[$])?te=lt[$][pe]:te=lt[$],Pe=!0):N.samples>0&&ot.useMultisampledRTT(N)===!1?te=qe.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?te=lt[pe]:te=lt,H.copy(N.viewport),ne.copy(N.scissor),le=N.scissorTest}else H.copy(Q).multiplyScalar(k).floor(),ne.copy(fe).multiplyScalar(k).floor(),le=xe;if(pe!==0&&(te=fn),De.bindFramebuffer(A.FRAMEBUFFER,te)&&me&&De.drawBuffers(N,te),De.viewport(H),De.scissor(ne),De.setScissorTest(le),Pe){const ke=qe.get(N.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+$,ke.__webglTexture,pe)}else if(Ge){const ke=$;for(let st=0;st<N.textures.length;st++){const lt=qe.get(N.textures[st]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+st,lt.__webglTexture,pe,ke)}}else if(N!==null&&pe!==0){const ke=qe.get(N.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ke.__webglTexture,pe)}T=-1},this.readRenderTargetPixels=function(N,$,pe,me,te,Pe,Ge,Ke=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke){De.bindFramebuffer(A.FRAMEBUFFER,ke);try{const st=N.textures[Ke],lt=st.format,tt=st.type;if(!je.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-me&&pe>=0&&pe<=N.height-te&&(N.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ke),A.readPixels($,pe,me,te,Je.convert(lt),Je.convert(tt),Pe))}finally{const st=K!==null?qe.get(K).__webglFramebuffer:null;De.bindFramebuffer(A.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,$,pe,me,te,Pe,Ge,Ke=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge]),ke)if($>=0&&$<=N.width-me&&pe>=0&&pe<=N.height-te){De.bindFramebuffer(A.FRAMEBUFFER,ke);const st=N.textures[Ke],lt=st.format,tt=st.type;if(!je.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,xt),A.bufferData(A.PIXEL_PACK_BUFFER,Pe.byteLength,A.STREAM_READ),N.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ke),A.readPixels($,pe,me,te,Je.convert(lt),Je.convert(tt),0);const Lt=K!==null?qe.get(K).__webglFramebuffer:null;De.bindFramebuffer(A.FRAMEBUFFER,Lt);const $t=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await LM(A,$t,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,xt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Pe),A.deleteBuffer(xt),A.deleteSync($t),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,pe=0){const me=Math.pow(2,-pe),te=Math.floor(N.image.width*me),Pe=Math.floor(N.image.height*me),Ge=$!==null?$.x:0,Ke=$!==null?$.y:0;ot.setTexture2D(N,0),A.copyTexSubImage2D(A.TEXTURE_2D,pe,0,0,Ge,Ke,te,Pe),De.unbindTexture()};const il=A.createFramebuffer(),al=A.createFramebuffer();this.copyTextureToTexture=function(N,$,pe=null,me=null,te=0,Pe=null){Pe===null&&(te!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=te,te=0):Pe=0);let Ge,Ke,ke,st,lt,tt,xt,Lt,$t;const Vt=N.isCompressedTexture?N.mipmaps[Pe]:N.image;if(pe!==null)Ge=pe.max.x-pe.min.x,Ke=pe.max.y-pe.min.y,ke=pe.isBox3?pe.max.z-pe.min.z:1,st=pe.min.x,lt=pe.min.y,tt=pe.isBox3?pe.min.z:0;else{const Dn=Math.pow(2,-te);Ge=Math.floor(Vt.width*Dn),Ke=Math.floor(Vt.height*Dn),N.isDataArrayTexture?ke=Vt.depth:N.isData3DTexture?ke=Math.floor(Vt.depth*Dn):ke=1,st=0,lt=0,tt=0}me!==null?(xt=me.x,Lt=me.y,$t=me.z):(xt=0,Lt=0,$t=0);const yt=Je.convert($.format),at=Je.convert($.type);let Jt;$.isData3DTexture?(ot.setTexture3D($,0),Jt=A.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ot.setTexture2DArray($,0),Jt=A.TEXTURE_2D_ARRAY):(ot.setTexture2D($,0),Jt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);const Ct=A.getParameter(A.UNPACK_ROW_LENGTH),wn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Mi=A.getParameter(A.UNPACK_SKIP_PIXELS),In=A.getParameter(A.UNPACK_SKIP_ROWS),yn=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,st),A.pixelStorei(A.UNPACK_SKIP_ROWS,lt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,tt);const Zt=N.isDataArrayTexture||N.isData3DTexture,Bn=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){const Dn=qe.get(N),sn=qe.get($),Tn=qe.get(Dn.__renderTarget),Os=qe.get(sn.__renderTarget);De.bindFramebuffer(A.READ_FRAMEBUFFER,Tn.__webglFramebuffer),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let qn=0;qn<ke;qn++)Zt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,qe.get(N).__webglTexture,te,tt+qn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,qe.get($).__webglTexture,Pe,$t+qn)),A.blitFramebuffer(st,lt,Ge,Ke,xt,Lt,Ge,Ke,A.DEPTH_BUFFER_BIT,A.NEAREST);De.bindFramebuffer(A.READ_FRAMEBUFFER,null),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(te!==0||N.isRenderTargetTexture||qe.has(N)){const Dn=qe.get(N),sn=qe.get($);De.bindFramebuffer(A.READ_FRAMEBUFFER,il),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,al);for(let Tn=0;Tn<ke;Tn++)Zt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Dn.__webglTexture,te,tt+Tn):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Dn.__webglTexture,te),Bn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,sn.__webglTexture,Pe,$t+Tn):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,sn.__webglTexture,Pe),te!==0?A.blitFramebuffer(st,lt,Ge,Ke,xt,Lt,Ge,Ke,A.COLOR_BUFFER_BIT,A.NEAREST):Bn?A.copyTexSubImage3D(Jt,Pe,xt,Lt,$t+Tn,st,lt,Ge,Ke):A.copyTexSubImage2D(Jt,Pe,xt,Lt,st,lt,Ge,Ke);De.bindFramebuffer(A.READ_FRAMEBUFFER,null),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Bn?N.isDataTexture||N.isData3DTexture?A.texSubImage3D(Jt,Pe,xt,Lt,$t,Ge,Ke,ke,yt,at,Vt.data):$.isCompressedArrayTexture?A.compressedTexSubImage3D(Jt,Pe,xt,Lt,$t,Ge,Ke,ke,yt,Vt.data):A.texSubImage3D(Jt,Pe,xt,Lt,$t,Ge,Ke,ke,yt,at,Vt):N.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Pe,xt,Lt,Ge,Ke,yt,at,Vt.data):N.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Pe,xt,Lt,Vt.width,Vt.height,yt,Vt.data):A.texSubImage2D(A.TEXTURE_2D,Pe,xt,Lt,Ge,Ke,yt,at,Vt);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ct),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,wn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Mi),A.pixelStorei(A.UNPACK_SKIP_ROWS,In),A.pixelStorei(A.UNPACK_SKIP_IMAGES,yn),Pe===0&&$.generateMipmaps&&A.generateMipmap(Jt),De.unbindTexture()},this.initRenderTarget=function(N){qe.get(N).__webglFramebuffer===void 0&&ot.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ot.setTextureCube(N,0):N.isData3DTexture?ot.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ot.setTexture2DArray(N,0):ot.setTexture2D(N,0),De.unbindTexture()},this.resetState=function(){G=0,j=0,K=null,De.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}const ev={type:"change"},ip={type:"start"},kv={type:"end"},zc=new tl,tv=new Wa,JA=Math.cos(70*Fi.DEG2RAD),_n=new J,Qn=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class Xv extends pE{constructor(e,i=null){super(e,i),this.state=Yt.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Rr.ROTATE,TWO:Rr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Ds,this._lastTargetPosition=new J,this._quat=new Ds().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new C0,this._sphericalDelta=new C0,this._scale=1,this._panOffset=new J,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new J,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eR.bind(this),this._onPointerDown=$A.bind(this),this._onPointerUp=tR.bind(this),this._onContextMenu=lR.bind(this),this._onMouseWheel=aR.bind(this),this._onKeyDown=sR.bind(this),this._onTouchStart=rR.bind(this),this._onTouchMove=oR.bind(this),this._onMouseDown=nR.bind(this),this._onMouseMove=iR.bind(this),this._interceptControlDown=cR.bind(this),this._interceptControlUp=uR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ev),this.update(),this.state=Yt.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),c=!!g}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=g!==this.object.zoom;const m=new J(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<JA?this.object.lookAt(this.target):(tv.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane(tv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Mt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function $A(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function eR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function tR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=Yt.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function nR(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Yt.DOLLY;break;case Nr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}break;case Nr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(ip)}function iR(r){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function aR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(r.preventDefault(),this.dispatchEvent(ip),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(kv))}function sR(r){this.enabled!==!1&&this._handleKeyDown(r)}function rR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Rr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Yt.TOUCH_ROTATE;break;case Rr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case Rr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Yt.TOUCH_DOLLY_PAN;break;case Rr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(ip)}function oR(r){switch(this._trackPointer(r),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Yt.NONE}}function lR(r){this.enabled!==!1&&r.preventDefault()}function cR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jd(r,e){return[0,1,2].map(i=>-r.reduce((s,l,c)=>s+l[i]*e[c],0))}function fR(r,e){if(!r.R||!r.t)return[];const{K:i,R:s,t:l,width:c,height:h}=r,d=jd(s,l);return[[0,0],[c,0],[c,h],[0,h]].map(([g,m])=>{const v=1/i[2][2],S=(m-i[1][2]*v)/i[1][1],y=(g-i[0][1]*S-i[0][2]*v)/i[0][0],b=[y,S,v];return d.map((M,C)=>M+e*s.reduce((x,_,I)=>x+_[C]*b[I],0))})}function hR(r,e,i,s,l){const c=[];for(let h=0;h<i;h++){const d=r[h];(s<=0||d!=null&&d<=s)&&(e[h]??0)>=l&&c.push(h)}return c}class dR{constructor(e,i,s,l,c,h=750){this.fromDistance=s,this.toDistance=l,this.startedAt=c,this.duration=h,this.from=e.clone(),this.to=i.clone()}from;to;target=new J;update(e,i){const s=Fi.clamp((i-this.startedAt)/this.duration,0,1),l=s*s*(3-2*s);return e.position.lerpVectors(this.from.position,this.to.position,l),e.quaternion.slerpQuaternions(this.from.quaternion,this.to.quaternion,l),e.up.set(0,1,0).applyQuaternion(e.quaternion),e.fov=Fi.lerp(this.from.fov,this.to.fov,l),e.zoom=Fi.lerp(this.from.zoom,this.to.zoom,l),e.near=Fi.lerp(this.from.near,this.to.near,l),e.far=Fi.lerp(this.from.far,this.to.far,l),e.updateProjectionMatrix(),e.updateMatrixWorld(!0),this.target.set(0,0,-1).applyQuaternion(e.quaternion).multiplyScalar(Fi.lerp(this.fromDistance,this.toDistance,l)).add(e.position),s===1}}function qv(r,e,i,s){if(!r.registered||!r.R||!r.t)return null;const{R:l,t:c,K:h,height:d}=r,g=new Jn,m=[0,1,2].map(S=>-l.reduce((y,b,M)=>y+b[S]*c[M],0)),v=new an().set(l[0][0],-l[1][0],-l[2][0],m[0],l[0][1],-l[1][1],-l[2][1],m[1],l[0][2],-l[1][2],-l[2][2],m[2],0,0,0,1);return g.position.fromArray(m),g.quaternion.setFromRotationMatrix(v),g.up.set(-l[1][0],-l[1][1],-l[1][2]),g.near=i,g.far=s,g.aspect=e,g.fov=Fi.radToDeg(2*Math.atan(d*h[2][2]/(2*h[1][1]))),g.updateProjectionMatrix(),g.updateMatrixWorld(!0),g}const Gd=5e6,xi=r=>r?.pipeline==="nerf"||r?.pipeline==="3dgs",Wv=(r,e="nerf")=>r.filter(i=>!xi(i)&&["completed","imported"].includes(i.status)&&(i.registered_images??0)>=2&&(e==="nerf"||(i.point_count??0)>0));function pR(r,e,i,s,l,c){if(e==="dataset"){if(r!=="nerf")throw new Error("3DGS 需要先构建或加载点云，不能直接使用照片数据集。");const d=c.find(g=>g.id===i);if(!d||(d.pose_count??0)<2)throw new Error("照片缺少至少两台真实相机位姿。请先估计或导入位姿；NeRF 不要求点云。");return{dataset_id:d.id}}const h=Wv(l,r).find(d=>d.id===i);if(!h)throw new Error(r==="nerf"?"请选择至少含两台真实相机位姿的模型，或导入带位姿的照片数据集。":"请选择含点云与至少两台相机位姿的模型，或先构建点云。");if(!h.images_available){const d=c.find(g=>g.id===s);if(!d||d.image_count<2)throw new Error("此模型缺少原图。请关联与模型图像 ID、文件名及内参一致的照片数据集。");return{source_run_id:h.id,photo_dataset_id:d.id}}return{source_run_id:h.id}}function Wh(r){if(!Number.isInteger(r.gaussian.max_gaussians)||r.gaussian.max_gaussians<1||r.gaussian.max_gaussians>Gd)return`最大高斯数必须是 1 至 ${Gd} 的整数。`;const e=r.gaussian.sh_degree??3,i=r.gaussian.sh_degree_interval??0;return!Number.isInteger(e)||e<0||e>3?"球谐阶数必须是 0 至 3 的整数。":!Number.isInteger(i)||i<0||i>1e6?"球谐升阶间隔必须是 0 至 1000000 的整数；0 表示直接启用全部阶数。":r.gaussian.backend!==void 0&&!["reference","gsplat"].includes(r.gaussian.backend)?"高斯光栅后端需要选择 reference 或 gsplat。":r.method==="3dgs"&&r.gaussian.backend==="gsplat"&&r.device!=="cuda"?"gsplat 光栅后端需要 CUDA 设备。":r.background!==void 0&&!["white","black"].includes(r.background)?"背景需要选择黑色或白色。":r.stratified_sampling!==void 0&&typeof r.stratified_sampling!="boolean"?"随机深度采样必须为布尔值。":r.ray_sampling!==void 0&&!["image","all_images"].includes(r.ray_sampling)?"光线批次需要选择单张照片或混合训练照片。":[r.iterations,r.image_downscale,r.rays_per_batch,r.samples_per_ray,r.holdout_every,r.preview_every,r.nerf.hidden_dim,r.gaussian.max_gaussians].some(l=>!Number.isInteger(l)||l<=0)?"迭代数、降采样倍数、批大小、采样数和网络宽度等必须为正整数。":[r.seed,r.nerf.levels_xyz,r.nerf.levels_dir,r.gaussian.densify_every].some(l=>!Number.isInteger(l)||l<0)?"种子、编码层数和增密间隔必须为非负整数。":!Number.isFinite(r.learning_rate)||r.learning_rate<=0?"学习率必须为正数。":!Number.isFinite(r.near)||!Number.isFinite(r.far)||r.near<0||r.far<=r.near?"采样范围需要满足 0 ≤ near < far（归一化场景单位）。":!Number.isFinite(r.gaussian.initial_scale)||r.gaussian.initial_scale<=0?"初始高斯尺度必须为正数。":!Number.isFinite(r.gaussian.initial_opacity)||r.gaussian.initial_opacity<=0||r.gaussian.initial_opacity>=1?"初始不透明度必须严格位于 0 与 1 之间。":null}function mR(r,e=256){if(!Number.isInteger(e)||e<=0||!Number.isFinite(r.aspect)||r.aspect<=0)throw new Error("输出大小与相机宽高比无效。");r.updateProjectionMatrix(),r.updateMatrixWorld(!0);const i=r.aspect>=1?e:Math.max(1,Math.round(e*r.aspect)),s=r.aspect>=1?Math.max(1,Math.round(e/r.aspect)):e,l=r.matrixWorldInverse.elements,c=r.projectionMatrix.elements;return{R:[[l[0],l[4],l[8]],[-l[1],-l[5],-l[9]],[-l[2],-l[6],-l[10]]],t:[l[12],-l[13],-l[14]],K:[[i*c[0]/2,0,(i*(1-c[8])-1)/2],[0,s*c[5]/2,(s*(1+c[9])-1)/2],[0,0,1]],width:i,height:s}}function gR(r){const e=JSON.parse(r),i=s=>Array.isArray(s)&&s.length===3&&s.every(l=>Array.isArray(l)&&l.length===3&&l.every(c=>typeof c=="number"&&Number.isFinite(c)));if(!i(e.K)||!i(e.R)||!Array.isArray(e.t)||e.t.length!==3||e.t.some(s=>typeof s!="number"||!Number.isFinite(s)))throw new Error("K、R 需要为有限的 3×3 数组，t 需要为长度 3 的有限数组。");if(![e.width,e.height].every(s=>Number.isInteger(s)&&s>0))throw new Error("width、height 需要为正整数。");return e}function Ic(r){for(const e of[...r.children])r.remove(e),e.traverse(i=>{(i instanceof yi||i instanceof zv||i instanceof Lv)&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>l.dispose()))})}function _R({scene:r,runId:e,options:i,setOptions:s,selection:l,onSelect:c,cameraViewRequest:h,onCameraViewChange:d,onRenderCamera:g,renderBusy:m}){const v=ye.useRef(null),S=ye.useRef(null),y=ye.useRef(c),b=ye.useRef(d),M=ye.useRef(""),[C,x]=ye.useState(""),[_,I]=ye.useState(!1),[O,U]=ye.useState(0),[B,G]=ye.useState("");y.current=c,b.current=d,ye.useEffect(()=>{if(!v.current)return;const T=v.current;let D=0,H=!1,ne=null;const le=()=>{!H&&!document.hidden&&!D&&(D=requestAnimationFrame(A))};let X;try{X=new QA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch(ve){x(`无法创建 WebGL 视图：${String(ve)}`);return}X.setPixelRatio(Math.min(window.devicePixelRatio,2)),X.outputColorSpace=Gn,X.setClearColor(1120027,0),X.domElement.setAttribute("aria-label","可拖拽的三维重建视图"),X.domElement.setAttribute("data-testid","scene-canvas"),T.appendChild(X.domElement);const ae=new aE,P=new Jn(45,1,.001,1e6);P.up.set(0,-1,0),P.position.set(3,-2,-4);const Z=()=>{const ve=new Xv(P,X.domElement);return ve.enableDamping=!0,ve.dampingFactor=.12,ve.screenSpacePanning=!0,ve.minDistance=1e-4,ve.maxDistance=1e8,ve.addEventListener("change",le),ve};let k=Z();const ge=new Cr,L=new Cr;ae.add(ge,L);const Q=ve=>{const be=P.position.clone();k.dispose(),k=Z(),P.position.copy(be),k.target.copy(ve),k.update(),de.controls=k,le()},fe=()=>{ne&&(ne=null,X.domElement.removeAttribute("data-camera-aligning"),Q(k.target.clone()))};T.addEventListener("pointerdown",fe,!0),T.addEventListener("wheel",fe,{capture:!0,passive:!0});const xe=()=>{const ve=T.clientWidth,be=T.clientHeight;P.aspect=ve/Math.max(be,1),P.updateProjectionMatrix()},de={renderer:X,scene:ae,camera:P,controls:k,content:ge,highlight:L,bounds:new Qa(new J(-1,-1,-1),new J(1,1,1)),radius:1,pickables:[],pointIndices:[],invalidate:le,cancelAlignment:fe,enterCamera:ve=>{const be=qv(ve,T.clientWidth/Math.max(T.clientHeight,1),Math.max(de.radius*1e-6,1e-8),Math.max(de.radius*1e4,1e3));if(!be)return;const je=be.getWorldDirection(new J),De=Math.max(de.bounds.getCenter(new J).sub(be.position).dot(je),de.radius*.01);ne=new dR(P,be,P.position.distanceTo(k.target),De,performance.now()),k.enabled=!1,X.domElement.setAttribute("data-camera-aligning","true"),le(),b.current(ve.image_id)},fit:ve=>{fe();const be=ve&&!ve.isEmpty()?ve:de.bounds,je=be.getCenter(new J),De=Math.max(be.getSize(new J).length()/2,.001),gt=new J(-.5,-.35,-1).normalize();P.up.set(0,-1,0),P.fov=45,P.zoom=1,P.position.copy(je).addScaledVector(gt,De*3.1),P.near=Math.max(De/1e4,1e-6),P.far=Math.max(De*1e4,1e3),P.updateProjectionMatrix(),Q(je),b.current(null)}};S.current=de;const Ie=new hE,ie=new Mt;let _e=[0,0];const Ce=ve=>{const be=X.domElement.getBoundingClientRect(),je={x:0,y:0,width:be.width,height:be.height},De=ve.clientX-be.left-je.x,gt=ve.clientY-be.top-je.y;return De<0||gt<0||De>je.width||gt>je.height?[]:(ie.set(De/je.width*2-1,-(gt/je.height)*2+1),Ie.setFromCamera(ie,P),Ie.params.Points.threshold=Math.max(P.position.distanceTo(k.target)*(1/P.projectionMatrix.elements[5])*12/Math.max(je.height,1),1e-8),Ie.intersectObjects(de.pickables,!1).filter(qe=>qe.object.visible))},Ve=ve=>{_e=[ve.clientX,ve.clientY]},Ye=ve=>{if(ve.button!==0||Math.hypot(ve.clientX-_e[0],ve.clientY-_e[1])>5)return;const be=Ce(ve),je=be.find(gt=>gt.object.userData.kind==="camera"),De=je??be[0];if(!De){y.current(null);return}De.object.userData.kind==="camera"?y.current({kind:"camera",id:De.object.userData.id}):De.index!=null&&y.current({kind:"point",id:De.object.userData.ids[De.index]})},it=ve=>{if(ve.buttons)return;const be=Ce(ve)[0];G(be?be.object.userData.kind==="camera"?`相机 #${be.object.userData.id}`:`三维点 #${be.object.userData.ids[be.index]}`:""),X.domElement.style.cursor=be?"pointer":"grab"};X.domElement.addEventListener("pointerdown",Ve),X.domElement.addEventListener("pointerup",Ye),X.domElement.addEventListener("pointermove",it);const Nt=new ResizeObserver(()=>{const ve=T.clientWidth,be=T.clientHeight;!ve||!be||(X.setSize(ve,be),xe(),le())});Nt.observe(T);function A(ve){if(D=0,!(H||document.hidden)){if(ne){const be=ne.update(P,ve);k.target.copy(ne.target),be?fe():le()}else k.update();for(const be of ge.children)be.userData.cameraCenter&&(be.visible=P.position.distanceToSquared(be.userData.cameraCenter)>(de.radius*.02)**2);X.setViewport(0,0,T.clientWidth,T.clientHeight),X.render(ae,P)}}return document.addEventListener("visibilitychange",le),le(),()=>{H=!0,cancelAnimationFrame(D),document.removeEventListener("visibilitychange",le),T.removeEventListener("pointerdown",fe,!0),T.removeEventListener("wheel",fe,!0),Nt.disconnect(),k.dispose(),X.domElement.removeEventListener("pointerdown",Ve),X.domElement.removeEventListener("pointerup",Ye),X.domElement.removeEventListener("pointermove",it),Ic(ge),Ic(L),X.dispose(),T.removeChild(X.domElement),S.current=null}},[]),ye.useEffect(()=>{const T=S.current;if(!T)return;if(Ic(T.content),T.pickables=[],!r){T.cancelAlignment(),b.current(null),U(0),T.invalidate();return}const D=r.points,H=new Qa;for(let X=0;X<D.positions.length;X+=3)H.expandByPoint(new J(D.positions[X],D.positions[X+1],D.positions[X+2]));for(const X of r.cameras)X.registered&&X.R&&X.t&&H.expandByPoint(new J(...jd(X.R,X.t)));H.isEmpty()&&H.set(new J(-1,-1,-1),new J(1,1,1)),T.bounds.copy(H),T.radius=Math.max(H.getSize(new J).length()/2,.001);const ne=T.radius,le=hR(D.errors,D.track_lengths,D.ids.length,i.maxError,i.minTrack);if(T.pointIndices=le,U(i.points?le.length:0),i.points&&le.length){const X=new Float32Array(le.length*3),ae=new Float32Array(le.length*3),P=new zt,Z=Math.max(r.summary.p95_reprojection_error_px??1,.01),k=D.track_lengths.reduce((Q,fe)=>Math.max(Q,fe),2);le.forEach((Q,fe)=>{if(X.set(D.positions.slice(Q*3,Q*3+3),fe*3),i.color==="rgb")P.setRGB((D.colors[Q*3]??180)/255,(D.colors[Q*3+1]??180)/255,(D.colors[Q*3+2]??180)/255,Gn);else{const xe=i.color==="error"?Math.min((D.errors[Q]??Z)/Z,1):Math.min(Math.log(D.track_lengths[Q]??1)/Math.log(k),1);P.setHSL(i.color==="error"?(1-xe)*.48:.55-xe*.4,.84,.55,Gn)}ae.set([P.r,P.g,P.b],fe*3)});const ge=new ui;ge.setAttribute("position",new Si(X,3)),ge.setAttribute("color",new Si(ae,3));const L=new zv(ge,new Pv({size:i.pointSize,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.96}));L.userData={kind:"points",ids:le.map(Q=>D.ids[Q])},T.content.add(L),T.pickables.push(L)}if(i.cameras)for(const X of r.cameras){if(!X.registered||!X.R||!X.t)continue;const ae=jd(X.R,X.t),P=fR(X,ne*.09*i.cameraScale),Z=[];P.forEach((fe,xe)=>Z.push(...ae,...fe,...fe,...P[(xe+1)%4]));const k=new ui;k.setAttribute("position",new kn(Z,3));const ge=l?.kind==="camera"&&l.id===X.image_id,L=new Ov(k,new tp({color:ge?16760681:5684173,transparent:!0,opacity:ge?1:.6}));L.userData.cameraCenter=new J().fromArray(ae),T.content.add(L);const Q=new yi(new iu(ne*.0075,10,8),new eu({color:ge?16760681:8118495}));Q.position.fromArray(ae),Q.userData={kind:"camera",id:X.image_id,cameraCenter:new J().fromArray(ae)},T.content.add(Q),T.pickables.push(Q)}if(i.axes){const X=new dE(ne*.4);T.content.add(X)}M.current!==e&&(T.fit(),M.current=e),T.invalidate()},[r,e,i,l]),ye.useEffect(()=>{const T=r?.cameras.find(D=>D.image_id===h?.imageId);T&&S.current?.enterCamera(T)},[h]),ye.useEffect(()=>{const T=S.current;if(!T||(Ic(T.highlight),T.invalidate(),!r||l?.kind!=="point"))return;const D=r.points.ids.indexOf(l.id);if(D<0)return;const H=new yi(new iu(T.radius*.009,12,10),new eu({color:16762744,depthTest:!1}));H.position.fromArray(r.points.positions,D*3),H.renderOrder=10,T.highlight.add(H)},[l,r]);const j=(T,D)=>s({...i,[T]:D}),K=r?.snapshots.find(T=>T.id===r.snapshot_id);return p.jsxs("div",{className:"viewport",children:[p.jsxs("div",{className:"view-heading",children:[p.jsxs("span",{className:"view-title",children:[p.jsx(Y_,{size:14})," 三维重建"]}),p.jsxs("span",{className:"view-context",children:[K?fv(K.label):"模型空间"," ",p.jsx("span",{className:"live-dot"})," ","真实算法输出"]})]}),p.jsx("div",{ref:v,className:"canvas-host"}),(!r||r.points.ids.length===0&&!r.cameras.some(T=>T.registered))&&p.jsxs("div",{className:"empty-scene",children:[p.jsx("div",{className:"empty-orbit",children:p.jsx(Y_,{size:32})}),p.jsx("h3",{children:r?"等待三维点生成":"从照片，进入三维空间"}),p.jsx("p",{children:r?"初始化成功后，点云和相机将出现在这里。":"选择一个已有结果，或导入数据开始重建。"}),p.jsx("span",{children:"只呈现真实结果 · 不生成示意点云"})]}),C&&p.jsx("div",{className:"view-error",children:C}),p.jsxs("div",{className:"view-toolbar",children:[g&&p.jsxs("button",{title:"以训练模型渲染当前自由视角（长边 256 px）","aria-label":"渲染当前自由视角",disabled:m||!r,onClick:()=>{S.current&&g(mR(S.current.camera))},children:[p.jsx(Bi,{size:17}),"渲染当前视角"]}),p.jsx("button",{title:"适配完整场景","aria-label":"适配完整场景",onClick:()=>S.current?.fit(),children:p.jsx(qc,{size:17})}),p.jsx("button",{title:"聚焦点云（仅调整观察视角）","aria-label":"聚焦点云",disabled:!r?.points.ids.length,onClick:()=>{if(!r)return;const T=new Qa,D=r.points.positions;for(let H=0;H<D.length;H+=3)T.expandByPoint(new J(D[H],D[H+1],D[H+2]));S.current?.fit(T)},children:p.jsx(ES,{size:17})}),p.jsx("button",{title:"重置视角","aria-label":"重置视角",onClick:()=>S.current?.fit(),children:p.jsx(au,{size:16})}),p.jsx("span",{className:"toolbar-divider"}),p.jsx("button",{className:i.cameras?"active":"",title:"相机显隐","aria-label":"相机显隐","aria-pressed":i.cameras,onClick:()=>j("cameras",!i.cameras),children:p.jsx(Bi,{size:17})}),p.jsx("button",{className:i.axes?"active":"",title:"坐标轴显隐","aria-label":"坐标轴显隐","aria-pressed":i.axes,onClick:()=>j("axes",!i.axes),children:p.jsx(hS,{size:17})}),p.jsx("button",{className:_?"active":"",title:"显示设置","aria-label":"显示设置",onClick:()=>I(!_),children:p.jsx(TS,{size:17})}),p.jsx("span",{className:"toolbar-divider"}),p.jsx("button",{title:"保存视图 PNG","aria-label":"保存视图 PNG",disabled:!r,onClick:()=>{const T=S.current;if(!T)return;T.renderer.render(T.scene,T.camera);const D=document.createElement("a");D.href=T.renderer.domElement.toDataURL("image/png"),D.download="minicolmap-view.png",D.click()},children:p.jsx(vS,{size:17})}),p.jsx("button",{title:"全屏显示","aria-label":"全屏显示",onClick:()=>{const T=v.current?.parentElement;document.fullscreenElement?document.exitFullscreen():T&&T.requestFullscreen()},children:p.jsx(lv,{size:16})})]}),_&&p.jsxs("div",{className:"view-settings panel-popover",children:[p.jsxs("div",{className:"popover-title",children:["显示设置 ",p.jsx("span",{children:"仅影响当前视图"})]}),p.jsxs("label",{className:"switch-row",children:["显示点云",p.jsx("input",{type:"checkbox",checked:i.points,onChange:T=>j("points",T.target.checked)})]}),p.jsxs("label",{children:["点云着色",p.jsxs("select",{"aria-label":"点云着色",value:i.color,onChange:T=>j("color",T.target.value),children:[p.jsx("option",{value:"rgb",children:"原始 RGB"}),p.jsx("option",{value:"error",children:"重投影误差"}),p.jsx("option",{value:"track",children:"轨迹长度"})]})]}),p.jsxs("label",{children:["点大小 ",p.jsxs("span",{children:[i.pointSize," px"]}),p.jsx("input",{type:"range",min:"1",max:"9",step:".5",value:i.pointSize,onChange:T=>j("pointSize",+T.target.value)})]}),p.jsxs("label",{children:["相机视锥 ",p.jsxs("span",{children:[i.cameraScale.toFixed(1)," ×"]}),p.jsx("input",{type:"range",min:".2",max:"3",step:".1",value:i.cameraScale,onChange:T=>j("cameraScale",+T.target.value)})]}),p.jsxs("div",{className:"two-inputs",children:[p.jsxs("label",{children:["最大误差 / px",p.jsx("input",{type:"number",min:"0",step:".1",value:i.maxError,onChange:T=>j("maxError",+T.target.value)}),p.jsx("small",{children:"0 = 不筛选"})]}),p.jsxs("label",{children:["最短轨迹",p.jsx("input",{type:"number",min:"0",step:"1",value:i.minTrack,onChange:T=>j("minTrack",+T.target.value)}),p.jsx("small",{children:"观测图像数量"})]})]})]}),r&&p.jsxs("div",{className:"scene-stats",children:[p.jsxs("div",{children:[p.jsx("strong",{children:Ft(O,0)}),p.jsxs("span",{children:["显示点 / ",Ft(r.points.ids.length,0)]})]}),p.jsxs("div",{children:[p.jsxs("strong",{children:[r.summary.registered_images,p.jsxs("i",{children:[" / ",r.summary.image_count]})]}),p.jsx("span",{children:"已注册相机"})]}),p.jsxs("div",{children:[p.jsxs("strong",{children:[Ft(r.summary.mean_reprojection_error_px),p.jsx("i",{children:" px"})]}),p.jsx("span",{children:"平均重投影误差"})]})]}),r&&i.color!=="rgb"&&p.jsxs("div",{className:`color-legend ${i.color}`,children:[p.jsx("span",{children:i.color==="error"?"重投影误差 / px":"轨迹长度 / 张"}),p.jsx("i",{}),p.jsxs("div",{children:[p.jsx("b",{children:i.color==="error"?"0":"1"}),p.jsxs("b",{children:[i.color==="error"?Ft(r.summary.p95_reprojection_error_px):r.points.track_lengths.reduce((T,D)=>Math.max(T,D),0),i.color==="error"?"+":""]})]})]}),p.jsxs("div",{className:"view-footer",children:[p.jsxs("span",{children:[p.jsx(xS,{size:12})," ",B||"左键旋转 · 右键平移 · 滚轮缩放"]}),p.jsxs("span",{children:["坐标单位：源场景尺度 ",p.jsx("b",{className:"axis-x",children:"X"}),p.jsx("b",{className:"axis-y",children:"Y"}),p.jsx("b",{className:"axis-z",children:"Z"})]})]})]})}const vR=[{key:"features",name:"特征提取",subtitle:"SIFT 与描述子匹配",fields:[{key:"max_features",label:"最大特征数",unit:"点 / 图",help:"每张图像最多保留的 SIFT 特征数。",step:100,min:2},{key:"ratio",label:"匹配距离比",help:"Lowe 比值阈值；越小筛选越严格。",step:.01,min:.01}]},{key:"geometry",name:"几何验证",subtitle:"RANSAC 与初始模型",fields:[{key:"threshold_px",label:"Sampson 阈值",unit:"px",help:"内部使用该数值的平方筛选 Sampson 误差。",step:.1,min:.01},{key:"max_trials",label:"最大采样次数",unit:"次",help:"自适应 RANSAC 的采样硬上限；置信度要求更多次数时仍受此限制。",step:100,min:1},{key:"confidence",label:"RANSAC 置信度",help:"目标概率，严格在0与1之间；提高置信度通常需要更多采样，仍受硬上限限制。",step:.001,min:0,max:1},{key:"min_trials",label:"最少采样次数",unit:"次",help:"提前停止前至少抽样的次数；若超过最大采样次数，则硬上限优先。",step:1,min:1},{key:"min_inliers",label:"最少内点数",unit:"点",help:"图像对准入和初始化最终保留点的下限。",step:1,min:8}]},{key:"mapping",name:"增量建图",subtitle:"PnP、三角化与质量筛选",fields:[{key:"min_pnp_points",label:"PnP 最少对应点",unit:"点",help:"注册前和最终筛选后都需满足的 2D–3D 对应数量。",step:1,min:6},{key:"pnp_threshold_px",label:"PnP 内点阈值",unit:"px",help:"传给 PnP RANSAC 的像素距离阈值。",step:.1,min:.01},{key:"min_angle_deg",label:"最小三角化夹角",unit:"°",help:"夹角过小的点深度不稳定，将被拒绝。",step:.1,min:.01},{key:"max_reprojection_px",label:"最大重投影误差",unit:"px",help:"初始化、补点及新增观测的像素误差上限。",step:.1,min:.01}]},{key:"bundle_adjustment",name:"束调整 BA",subtitle:"对现有位姿与点进行整体优化",fields:[{key:"max_nfev",label:"函数评估预算",unit:"次",help:"允许的最大函数评估次数；达到预算不代表已收敛。",step:10,min:1},{key:"f_scale",label:"鲁棒损失尺度",unit:"px",help:"控制鲁棒损失对大残差的抑制尺度。",step:.1,min:.01}]}];function xR({config:r,defaults:e,disabled:i,onChange:s,onValidate:l,onError:c}){function h(d,g,m){s({...r,[d]:{...r[d],[g]:m}})}return p.jsxs("div",{className:"config-panel",children:[p.jsxs("div",{className:"panel-intro",children:["参数直接传入现有 Python 流水线。",p.jsx("br",{}),"修改后将在下一次运行生效。"]}),p.jsxs("div",{className:"small-actions",children:[p.jsxs("button",{title:"恢复默认参数",disabled:i,onClick:()=>s(structuredClone(e)),children:[p.jsx(au,{size:13}),"默认"]}),p.jsxs("label",{className:`button ${i?"disabled":""}`,children:[p.jsx(Zc,{size:13}),"导入",p.jsx("input",{type:"file",accept:".json",disabled:i,hidden:!0,onChange:async d=>{const g=d.target.files?.[0];if(g){try{const m=JSON.parse(await g.text());s(await nn("/api/config/validate",ha(m)))}catch(m){c(String(m))}d.target.value=""}}})]}),p.jsxs("button",{onClick:()=>uv("mini-colmap-config.json",r),children:[p.jsx(Hc,{size:13}),"导出"]})]}),p.jsxs("fieldset",{disabled:i,children:[p.jsxs("label",{className:"number-field seed-field",children:[p.jsxs("span",{children:["随机种子 ",p.jsx("small",{children:"复现实验"})]}),p.jsx("input",{type:"number",min:"0",step:"1",value:r.seed,onChange:d=>s({...r,seed:+d.target.value})})]}),vR.map(d=>p.jsxs("details",{open:!0,className:"config-group",children:[p.jsxs("summary",{children:[d.name,p.jsx("span",{children:d.subtitle})]}),d.key==="bundle_adjustment"&&p.jsxs("label",{className:"switch-row",children:["启用最终 BA",p.jsx("input",{type:"checkbox",checked:r.bundle_adjustment.enabled,onChange:g=>h("bundle_adjustment","enabled",g.target.checked)})]}),d.fields.map(g=>p.jsxs("label",{className:"number-field",title:g.help,children:[p.jsxs("span",{children:[g.label,p.jsx("small",{children:g.unit??""})]}),p.jsx("input",{type:"number",step:g.step??1,min:g.min,max:g.max,"aria-label":g.label,value:Number(r[d.key][g.key]),onChange:m=>h(d.key,g.key,+m.target.value)})]},g.key)),d.key==="geometry"&&p.jsx("p",{className:"form-note",children:"自适应 RANSAC：置信度不是内点比例；最少采样次数超过硬上限时，按上限执行。"}),d.key==="bundle_adjustment"&&p.jsxs("label",{className:"number-field",children:[p.jsx("span",{children:"损失函数"}),p.jsxs("select",{value:r.bundle_adjustment.loss,onChange:g=>h("bundle_adjustment","loss",g.target.value),children:[p.jsx("option",{value:"linear",children:"Linear"}),p.jsx("option",{value:"huber",children:"Huber"}),p.jsx("option",{value:"soft_l1",children:"Soft L1"})]})]})]},d.key))]}),p.jsx("button",{className:"outline full",disabled:i,onClick:l,children:"检查参数配置"}),p.jsx("p",{className:"form-note",children:"悬停字段查看说明。初始化两视图优化与最终 BA 为不同步骤。"})]})}function Go({label:r,values:e}){return p.jsxs("div",{className:"matrix-block",children:[p.jsx("span",{children:r}),p.jsx("div",{className:"matrix",children:e.map((i,s)=>p.jsx("div",{children:i.map((l,c)=>p.jsx("code",{children:Ft(l,4)},c))},s))})]})}function nv({url:r,width:e,height:i,xy:s,projected:l}){const[c,h]=ye.useState(!1),[d,g]=ye.useState([e??1,i??1]);return ye.useEffect(()=>{h(!1),g([e??1,i??1])},[r,e,i]),p.jsx("div",{className:"photo-preview",children:r&&!c?p.jsxs(p.Fragment,{children:[p.jsx("img",{src:r,alt:"选中相机的原始照片",onError:()=>h(!0),onLoad:m=>g([m.currentTarget.naturalWidth,m.currentTarget.naturalHeight])}),s&&p.jsxs("svg",{viewBox:`0 0 ${d[0]} ${d[1]}`,"aria-label":"观测点和重投影点",children:[p.jsx("circle",{cx:s[0],cy:s[1],r:d[0]*.013,fill:"none",stroke:"#62efbd",strokeWidth:d[0]*.004}),p.jsx("path",{d:`M${s[0]-d[0]*.02},${s[1]}h${d[0]*.04} M${s[0]},${s[1]-d[0]*.02}v${d[0]*.04}`,stroke:"#62efbd",strokeWidth:d[0]*.0025}),l&&p.jsxs(p.Fragment,{children:[p.jsx("line",{x1:s[0],y1:s[1],x2:l[0],y2:l[1],stroke:"#ffc478",strokeWidth:d[0]*.003}),p.jsx("circle",{cx:l[0],cy:l[1],r:d[0]*.006,fill:"#ffc478"})]})]}),p.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"photo-open",title:"打开原始照片",children:p.jsx(mS,{size:12})})]}):p.jsxs("div",{className:"photo-missing",children:[p.jsx(Bi,{size:24}),p.jsx("span",{children:"原始照片不可用"}),p.jsx("small",{children:"仍可检查三维模型和位姿"})]})})}function yR({scene:r,inputDataset:e,runId:i,snapshot:s,selection:l,onSelect:c,onViewCamera:h,viewCameraId:d}){const[g,m]=ye.useState(null),[v,S]=ye.useState(""),[y,b]=ye.useState(0),[M,C]=ye.useState(!1);ye.useEffect(()=>{if(m(null),S(""),b(0),l?.kind!=="point"||!i)return;let O=!1;return C(!0),nn(`/api/runs/${encodeURIComponent(i)}/points/${l.id}?snapshot=${encodeURIComponent(s)}`).then(U=>{O||m(U)}).catch(U=>{O||S(String(U))}).finally(()=>{O||C(!1)}),()=>{O=!0}},[i,s,l]),ye.useEffect(()=>{if(!g||d==null)return;const O=g.observations.findIndex(U=>U.image_id===d);O>=0&&b(O)},[g,d]);let x=l?.kind==="camera"?r?.cameras.find(O=>O.image_id===l.id):void 0;if(!r&&l?.kind==="camera"&&e){const O=e.images.find(B=>B.id===l.id),U=e.cameras.find(B=>B.id===O?.camera_id);O&&U&&(x={...O,image_id:O.id,K:U.K,registered:!1,observations:0})}const _=g?.observations[y],I=r?.cameras.find(O=>O.image_id===_?.image_id);return l?p.jsxs("aside",{className:"inspector",children:[p.jsxs("div",{className:"panel-heading",children:[x?p.jsx(Bi,{size:14}):p.jsx(qc,{size:14})," ",x?"相机信息":"三维点信息",p.jsx("button",{className:"text-button",onClick:()=>c(null),children:"取消选择"})]}),p.jsx("div",{className:"inspector-scroll",children:x?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"object-title",children:[p.jsx("span",{className:"object-icon",children:p.jsx(Bi,{size:20})}),p.jsxs("div",{children:[p.jsx("strong",{children:x.name}),p.jsxs("span",{children:["IMAGE #",x.image_id]})]}),p.jsx("i",{className:`status-dot ${x.registered?"good":""}`})]}),p.jsx(nv,{url:x.image_url,width:x.width,height:x.height}),x.registered&&x.R&&x.t&&p.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(x.image_id),children:[p.jsx(Bi,{size:14})," 对齐至此相机"]}),p.jsxs("div",{className:"detail-grid",children:[p.jsx("span",{children:"注册状态"}),p.jsx("strong",{children:x.registered?"已注册":"未注册"}),p.jsx("span",{children:"图像尺寸"}),p.jsxs("strong",{children:[x.width," × ",x.height]}),p.jsx("span",{children:"相机 ID"}),p.jsx("strong",{children:x.camera_id}),p.jsx("span",{children:"有效观测"}),p.jsx("strong",{children:Ft(x.observations,0)})]}),p.jsx(Go,{label:"内参 K",values:x.K}),x.registered&&x.R&&x.t?p.jsxs(p.Fragment,{children:[p.jsx(Go,{label:"世界 → 相机旋转 R",values:x.R}),p.jsx(Go,{label:"平移 t",values:[x.t]}),x.center&&p.jsx(Go,{label:"相机中心 C = −Rᵀt",values:[x.center]}),p.jsx("p",{className:"form-note",children:"相机局部坐标：+Z 朝前，+Y 朝下。位置使用重建尺度。"})]}):p.jsx("div",{className:"info-note",children:"该图像尚未估计出相机位姿，因此不会在三维视图中生成相机。"})]}):M?p.jsx("div",{className:"loading-inline",children:"读取点的观测轨迹…"}):v?p.jsx("div",{className:"inline-error",children:v}):g?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"object-title",children:[p.jsx("span",{className:"object-icon point-icon",children:p.jsx(X_,{size:20})}),p.jsxs("div",{children:[p.jsxs("strong",{children:["三维点 #",g.id]}),p.jsx("span",{children:"POINT INSPECTOR"})]}),p.jsx("span",{className:"rgb-swatch",style:{background:`rgb(${g.color.join(",")})`}})]}),p.jsx(Go,{label:"世界坐标 XYZ",values:[g.xyz]}),p.jsxs("div",{className:"detail-grid",children:[p.jsx("span",{children:"RGB 颜色"}),p.jsx("strong",{children:g.color.join(", ")}),p.jsx("span",{children:"轨迹长度"}),p.jsxs("strong",{children:[g.track_length," 张图像"]}),p.jsx("span",{children:"平均误差"}),p.jsxs("strong",{children:[Ft(g.mean_error)," px"]})]}),p.jsxs("div",{className:"section-label",children:["关联观测 ",p.jsx("span",{children:g.observations.length})]}),d!=null&&!g.observations.some(O=>O.image_id===d)&&p.jsx("div",{className:"info-note",children:"上次对齐的相机没有该点的记录观测；下方显示其他相机的观测。"}),p.jsx("div",{className:"observation-list",children:g.observations.map((O,U)=>p.jsxs("button",{className:y===U?"selected":"",onClick:()=>b(U),children:[p.jsx(Bi,{size:13}),p.jsx("span",{children:r?.cameras.find(B=>B.image_id===O.image_id)?.name??`图像 #${O.image_id}`}),p.jsxs("small",{children:[Ft(O.error)," px"]}),p.jsx(Zh,{size:12})]},`${O.image_id}-${O.keypoint_index}`))}),_&&p.jsxs(p.Fragment,{children:[p.jsx(nv,{url:_.image_url??I?.image_url,width:I?.width,height:I?.height,xy:_.xy,projected:_.projected_xy}),p.jsxs("div",{className:"pixel-legend",children:[p.jsxs("span",{children:[p.jsx("i",{}),"观测位置"]}),p.jsxs("span",{children:[p.jsx("i",{}),"重投影位置"]})]}),I?.registered&&I.R&&I.t&&p.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(_.image_id),children:[p.jsx(Bi,{size:14})," 对齐至此观测相机"]}),p.jsxs("div",{className:"detail-grid",children:[p.jsx("span",{children:"特征点索引"}),p.jsx("strong",{children:_.keypoint_index}),p.jsx("span",{children:"观测像素"}),p.jsx("strong",{children:_.xy.map(O=>Ft(O,2)).join(", ")}),p.jsx("span",{children:"投影像素"}),p.jsx("strong",{children:_.projected_xy?.map(O=>Ft(O,2)).join(", ")??"—"})]}),p.jsxs("button",{className:"outline full",onClick:()=>c({kind:"camera",id:_.image_id}),children:[p.jsx(Bi,{size:13}),"检查这台相机"]})]})]}):null})]}):p.jsxs("aside",{className:"inspector",children:[p.jsxs("div",{className:"panel-heading",children:[p.jsx(Yc,{size:14}),"场景检查器"]}),p.jsxs("div",{className:"inspector-empty",children:[p.jsx("div",{className:"inspector-symbol",children:p.jsx(X_,{size:26})}),p.jsx("h3",{children:"探索你的重建"}),p.jsxs("p",{children:["点选三维点或相机，",p.jsx("br",{}),"查看对应照片、位姿与观测。"]}),p.jsxs("div",{className:"legend",children:[p.jsxs("span",{children:[p.jsx("i",{className:"legend-point"}),"三维点"]}),p.jsxs("span",{children:[p.jsx("i",{className:"legend-camera"}),"注册相机"]}),p.jsxs("span",{children:[p.jsx("i",{className:"legend-selected"}),"当前选中"]})]})]}),p.jsxs("div",{className:"inspector-hint",children:[p.jsx(Yc,{size:14}),p.jsx("p",{children:"所有坐标、颜色与位姿均来自算法结果。视图操作不会修改地图。"})]})]})}function SR({timing:r}){return p.jsxs("details",{className:"timing-panel","data-testid":"pipeline-timings",open:!0,children:[p.jsxs("summary",{children:[p.jsx(pS,{size:14})," Pipeline 计时 ",p.jsxs("strong",{children:[Ft(r.total_seconds,3)," 秒"]}),p.jsx(Fc,{size:12})]}),p.jsxs("table",{children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"阶段"}),p.jsx("th",{children:"耗时 / 秒"}),p.jsx("th",{children:"占总耗时"})]})}),p.jsx("tbody",{children:Object.entries(r.stages_seconds).map(([e,i])=>p.jsxs("tr",{children:[p.jsx("td",{children:Kc(e)}),p.jsx("td",{children:Ft(i,3)}),p.jsx("td",{children:r.total_seconds>0?`${Ft(i/r.total_seconds*100,1)}%`:"—"})]},e))})]}),p.jsx("div",{className:"timing-details",children:Object.entries(r.details).map(([e,i])=>p.jsxs("span",{children:[e==="descriptor_matching"?"描述子匹配":e==="fundamental_ransac"?"F-RANSAC":e,"：",Ft(i.seconds,3)," 秒 / ",i.calls," 次"]},e))}),p.jsx("p",{children:"墙钟时间，包含该阶段的文件读写与快照开销；匹配子项已包含在阶段总耗时中，不重复相加。"}),r.status!=="completed"&&p.jsx("p",{children:r.status==="failed"?"任务失败，以上仅统计已执行部分。":"以上为最近一次阶段检查点，不代表完整运行耗时。"})]})}function MR({onClose:r,onImported:e}){const[i,s]=ye.useState("manifest"),[l,c]=ye.useState([]),[h,d]=ye.useState(""),[g,m]=ye.useState({fx:"",fy:"",cx:"",cy:""}),[v,S]=ye.useState(!1),[y,b]=ye.useState(""),M=l.filter(x=>/\.json$/i.test(x.name));ye.useEffect(()=>{const x=l.find(_=>_.name==="dataset.json")??l.find(_=>/\.json$/i.test(_.name));d(x?.webkitRelativePath||x?.name||"")},[l]);async function C(){S(!0),b("");try{if(!l.length)throw Error("请先选择数据目录或照片。");const x=new FormData;x.append("mode",i);for(const I of l)x.append("files",I),x.append("paths",I.webkitRelativePath||I.name);if(i==="manifest"){if(!h)throw Error("所选目录中未找到 JSON 数据清单。");x.append("manifest_path",h)}if(i==="photos"){if(Object.values(g).some(I=>I.trim()===""||!Number.isFinite(+I)))throw Error("请填写全部四个内参值。");if(+g.fx<=0||+g.fy<=0)throw Error("fx 和 fy 必须大于 0。");x.append("camera",JSON.stringify(Object.fromEntries(Object.entries(g).map(([I,O])=>[I,+O]))))}const _=await nn("/api/datasets/import",{method:"POST",body:x});e(_),r()}catch(x){b(String(x))}finally{S(!1)}}return p.jsx("div",{className:"modal-backdrop",onMouseDown:x=>{x.target===x.currentTarget&&!v&&r()},children:p.jsxs("section",{className:"modal import-modal",role:"dialog","aria-modal":"true","aria-label":"导入重建数据",children:[p.jsxs("div",{className:"modal-heading",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"DATA IMPORT"}),p.jsx("h2",{children:"导入重建数据"})]}),p.jsx("button",{className:"icon-button","aria-label":"关闭导入窗口",disabled:v,onClick:r,children:p.jsx(Kh,{size:18})})]}),p.jsxs("div",{className:"segmented",children:[p.jsxs("button",{className:i==="manifest"?"selected":"",onClick:()=>{s("manifest"),c([]),b("")},children:[p.jsx(Wc,{size:15}),"已有数据集"]}),p.jsxs("button",{className:i==="photos"?"selected":"",onClick:()=>{s("photos"),c([]),b("")},children:[p.jsx(W_,{size:15}),"照片 + 相机内参"]})]}),p.jsx("p",{className:"muted",children:i==="manifest"?"选择包含 dataset.json 与图像文件的完整目录。清单中的相对路径与真实相机位姿将保留；含 poses 的数据集可直接训练 NeRF，无需点云。":"导入同一台相机拍摄、已去畸变且尺寸一致的照片，并填写对应的真实内参。"}),p.jsxs("div",{className:"upload-zone",children:[p.jsx(Zc,{size:28}),p.jsx("strong",{children:l.length?`已选择 ${l.length} 个文件`:"选择本地数据文件"}),p.jsx("span",{children:l.length?l.slice(0,3).map(x=>x.name).join(" · "):"文件保存在本机项目中，不上传到外部服务"}),p.jsxs("div",{className:"upload-actions",children:[p.jsxs("label",{className:"button outline",children:[p.jsx(Wc,{size:15}),"选择文件夹",p.jsx("input",{type:"file",multiple:!0,hidden:!0,webkitdirectory:"",onChange:x=>{c(Array.from(x.target.files??[]).filter(_=>i==="manifest"||/\.(png|jpg|jpeg|bmp|tif|tiff|webp)$/i.test(_.name))),b("")}})]}),i==="photos"&&p.jsxs("label",{className:"button outline",children:[p.jsx(W_,{size:15}),"选择照片",p.jsx("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:x=>{c(Array.from(x.target.files??[])),b("")}})]})]})]}),i==="manifest"&&M.length>0&&p.jsxs("label",{className:"manifest-select",children:["数据清单",p.jsx("select",{"aria-label":"选择导入的数据清单",value:h,onChange:x=>d(x.target.value),children:M.map(x=>p.jsx("option",{value:x.webkitRelativePath||x.name,children:x.webkitRelativePath||x.name},x.webkitRelativePath||x.name))})]}),i==="photos"&&p.jsxs("div",{className:"intrinsics",children:[p.jsxs("div",{className:"section-label",children:[p.jsx(Bi,{size:14}),"共享相机内参 ",p.jsx("span",{children:"单位 px"})]}),p.jsx("div",{className:"intrinsics-grid",children:["fx","fy","cx","cy"].map(x=>p.jsxs("label",{children:[x,p.jsx("input",{type:"number",step:"any",placeholder:x==="fx"||x==="fy"?"焦距":"主点坐标",value:g[x],onChange:_=>m({...g,[x]:_.target.value})})]},x))}),p.jsx("p",{className:"form-note",children:"图像尺寸自动读取并校验。此入口仅添加内参，不生成位姿；NeRF 训练前需估计或导入真实相机位姿。此界面不会猜测焦距，也不会自动去畸变。"})]}),y&&p.jsx("div",{className:"inline-error",children:y}),p.jsxs("div",{className:"modal-footer",children:[p.jsx("button",{className:"quiet",disabled:v,onClick:r,children:"取消"}),p.jsxs("button",{className:"primary",disabled:v||!l.length,onClick:()=>void C(),children:[v?p.jsx(Dr,{size:15,className:"spin"}):p.jsx(Zc,{size:15}),"校验并导入"]})]})]})})}function iv(r){const{K:e,width:i,height:s}=r;return{fx:e[0][0]/s,fy:e[1][1]/s,skew:e[0][1]/s,offsetX:(e[0][2]+.5-i/2)/s,offsetY:(e[1][2]+.5-s/2)/s}}function ER(r,e,i){return[[r.fx*i,r.skew*i,(e-1)/2+r.offsetX*i],[0,r.fy*i,(i-1)/2+r.offsetY*i],[0,0,1]]}function bR(r,e,i,s){r.aspect=i/s,r.fov=Fi.radToDeg(2*Math.atan(s/(2*e[1][1])));const{near:l,far:c}=r;r.projectionMatrix.set(2*e[0][0]/i,-2*e[0][1]/i,1-2*(e[0][2]+.5)/i,0,0,2*e[1][1]/s,2*(e[1][2]+.5)/s-1,0,0,0,-(c+l)/(c-l),-2*c*l/(c-l),0,0,-1,0),r.projectionMatrixInverse.copy(r.projectionMatrix).invert()}function TR(r,e,i,s){r.updateMatrixWorld(!0);const l=r.matrixWorldInverse.elements;return{width:i,height:s,K:e.map(c=>[...c]),R:[[l[0],l[4],l[8]],[-l[1],-l[5],-l[9]],[-l[2],-l[6],-l[10]]],t:[l[12],-l[13],-l[14]]}}function AR(r,e,i){const s=Math.min(1,i/Math.max(r,e));return{width:Math.max(1,Math.round(r*s)),height:Math.max(1,Math.round(e*s))}}function RR(r){const e=r?.points.positions??[],i=[[],[],[]];for(let h=0;h+2<e.length;h+=3)if(e.slice(h,h+3).every(Number.isFinite))for(let d=0;d<3;d++)i[d].push(e[h+d]);if(!i[0].length)return{center:new J,radius:1};i.forEach(h=>h.sort((d,g)=>d-g));const s=i.map(h=>h[Math.floor((h.length-1)*.02)]),l=i.map(h=>h[Math.ceil((h.length-1)*.98)]);return{center:new J(...s).add(new J(...l)).multiplyScalar(.5),radius:Math.max(new J(...l).distanceTo(new J(...s))/2,1e-4)}}class CR{revision=0;sequence=0;generation=0;displayedSequence=0;pending=null;flight=null;queue(e){this.pending={revision:++this.revision,value:e}}begin(e){if(this.flight||!this.pending)return null;const i=this.pending;return this.pending=null,this.flight={seq:++this.sequence,revision:i.revision,sentAt:e},{...this.flight,value:i.value}}finish(e,i){if(this.flight?.seq!==e)return null;const s=this.flight;return this.flight=null,{...s,generation:this.generation,display:s.seq>this.displayedSequence,latencyMs:i-s.sentAt}}acceptDisplay(e,i){return i!==this.generation||e<=this.displayedSequence?!1:(this.displayedSequence=e,!0)}reset(){this.pending=null,this.flight=null,++this.revision,++this.generation}}class wR{constructor(e,i,s,l){this.present=e,this.discard=i,this.requestFrame=s,this.cancelFrame=l}pending=null;frame=null;disposed=!1;queue(e){if(this.disposed||this.pending&&e.seq<=this.pending.seq){this.discard(e);return}this.pending&&this.discard(this.pending),this.pending=e,this.frame===null&&(this.frame=this.requestFrame(()=>{this.frame=null;const i=this.pending;this.pending=null,i&&this.present(i)}))}clear(){this.frame!==null&&this.cancelFrame(this.frame),this.frame=null,this.pending&&this.discard(this.pending),this.pending=null}dispose(){this.disposed=!0,this.clear()}}const av={640:[640,480],960:[960,720],1280:[1280,720]};function DR({runId:r,scene:e,selectedCameraId:i,disabled:s=!1}){const[l,c]=ye.useState(!1),[h,d]=ye.useState(0),[g,m]=ye.useState("640"),[v,S]=ye.useState(""),[y,b]=ye.useState("尚未开启"),[M,C]=ye.useState(""),[x,_]=ye.useState(null),[I,O]=ye.useState(null),U=ye.useRef(null),B=ye.useRef(null),G=ye.useRef(null),j=ye.useRef(null),K=ye.useRef(null),T=ye.useRef(g);T.current=g;const D=e?.cameras.filter(X=>X.registered&&X.R&&X.t)??[],H=ye.useRef(i);H.current=i,ye.useEffect(()=>{const X=D.find(ae=>ae.image_id===i)??D[0];S(X?String(X.image_id):"")},[e?.revision,i]),ye.useEffect(()=>{c(!1),O(null),_(null),C("")},[r]),ye.useEffect(()=>{s&&c(!1)},[s]),ye.useEffect(()=>{K.current?.refresh()},[g]),ye.useEffect(()=>{if(!l||!U.current||!G.current||!e)return;const X=U.current,ae=RR(e),P=e.cameras.find(q=>q.image_id===H.current&&q.registered&&q.R&&q.t)??e.cameras.find(q=>q.registered&&q.R&&q.t);if(!P){C("源模型缺少可用的注册相机。");return}let Z=!1,k=null,ge=!1,L=!1,Q=0,fe=0,xe=0,de=null,Ie="",ie=0,_e=[],Ce=1,Ve=1,Ye=iv(P),it=P.K;const Nt=new Set,A=new CR,ve=new wR(({url:q,frame:ce,completion:Se})=>{if(Z||!A.acceptDisplay(ce.seq,Se.generation)){URL.revokeObjectURL(q);return}j.current&&(j.current.src=q),Ie&&URL.revokeObjectURL(Ie),Ie=q;const oe=performance.now();_e.length&&oe-_e.at(-1)>=1e3&&(_e=[]),_e.push(oe),_e=_e.filter(we=>oe-we<=1e3).slice(-30);const Fe=_e.length>=2?1e3*(_e.length-1)/(oe-_e[0]):null;O({frames:++ie,seq:ce.seq,fps:Fe,render:ce.render_ms,encode:ce.encode_ms,latency:oe-Se.sentAt,width:ce.width,height:ce.height})},({url:q})=>URL.revokeObjectURL(q),q=>requestAnimationFrame(q),q=>cancelAnimationFrame(q)),be=new Jn(45,1,Math.max(ae.radius*1e-5,1e-7),Math.max(ae.radius*1e4,100)),je=()=>{const q=new Xv(be,G.current);return q.enableDamping=!1,q.minDistance=Math.max(ae.radius*.001,1e-6),q.maxDistance=ae.radius*1e3,q.screenSpacePanning=!0,q};let De=je();const gt=()=>{if(!ge||k?.readyState!==WebSocket.OPEN||Z)return;const q=A.begin(performance.now());q&&(k.send(JSON.stringify({type:"camera",seq:q.seq,camera:q.value})),window.clearTimeout(fe),fe=window.setTimeout(()=>{Z||(b("等待图像超时，正在重新连接…"),k?.close())},3e4))},qe=()=>{Z||!Ce||!Ve||(A.queue(TR(be,it,Ce,Ve)),gt())},ot=()=>{const q=av[T.current],ce=AR(Math.max(X.clientWidth,1),Math.max(X.clientHeight,1),q[0]);Ce=ce.width,Ve=ce.height,it=ER(Ye,Ce,Ve),bR(be,it,Ce,Ve),qe()},It=q=>{const ce=qv(q,Ce/Ve,be.near,be.far);if(!ce)return;Ye=iv(q),be.position.copy(ce.position),be.quaternion.copy(ce.quaternion),be.up.copy(ce.up);const Se=be.getWorldDirection(new J),oe=Math.max(be.position.distanceTo(ae.center),ae.radius*.5);De.removeEventListener("change",qe),De.dispose(),De=je(),De.target.copy(be.position).addScaledVector(Se,oe),De.update(),De.addEventListener("change",qe),ot()},Gt=()=>{const q=be.getWorldDirection(new J),ce=ae.radius/Math.sin(Fi.degToRad(be.fov/2))*1.15;De.target.copy(ae.center),be.position.copy(ae.center).addScaledVector(q,-ce),De.update(),qe()};K.current={fit:Gt,align:It,refresh:ot},It(P),De.addEventListener("change",qe);const z=new ResizeObserver(ot);z.observe(X);const R=()=>{if(Z)return;L=!1,ge=!1,A.reset(),ve.clear(),_e=[],de=null,_(null),C(""),b(xe?"连接中断，正在重连…":"正在加载高斯模型到 GPU…");const q=new URL(`/api/rendering/runs/${encodeURIComponent(r)}/live`,location.href);q.protocol=location.protocol==="https:"?"wss:":"ws:";const ce=new WebSocket(q);k=ce,ce.binaryType="blob",ce.onmessage=Se=>{if(Z||ce!==k)return;if(typeof Se.data=="string"){try{const we=JSON.parse(Se.data);we.type==="ready"?(ge=!0,xe=0,_(we),b("已连接 · 自由视角"),qe()):we.type==="frame"?de=we:we.type==="error"&&(L=!0,ge=!1,window.clearTimeout(fe),b("渲染失败"),C(String(we.message??"服务器未能渲染此视角。")),ce.close())}catch{C("实时渲染返回了无效的消息。")}return}const oe=de;if(de=null,!oe)return;const Fe=A.finish(oe.seq,performance.now());if(Fe){if(window.clearTimeout(fe),Fe.display){const we=URL.createObjectURL(Se.data);Nt.add(we);const Ze=new Image;Ze.onload=()=>{if(Nt.delete(we),Z||ce!==k){URL.revokeObjectURL(we);return}ve.queue({seq:oe.seq,url:we,frame:oe,completion:Fe})},Ze.onerror=()=>{Nt.delete(we),URL.revokeObjectURL(we),C("实时图像解码失败。")},Ze.src=we}gt()}},ce.onclose=()=>{Z||ce!==k||(ge=!1,window.clearTimeout(fe),A.reset(),ve.clear(),!L&&(xe<3?(b("连接中断，正在重连…"),Q=window.setTimeout(R,1e3*2**xe++)):(b("连接已断开"),C("无法连接实时渲染服务。可点击重新连接；已有静态结果仍可查看。"))))},ce.onerror=()=>{Z||b("实时连接发生错误…")}};return ot(),R(),()=>{Z=!0,ge=!1,window.clearTimeout(Q),window.clearTimeout(fe),z.disconnect(),De.removeEventListener("change",qe),De.dispose(),k?.close(),A.reset(),ve.dispose(),K.current=null,Ie&&URL.revokeObjectURL(Ie),Nt.forEach(q=>URL.revokeObjectURL(q)),j.current&&j.current.removeAttribute("src")}},[l,r,e?.revision,h]);const[ne,le]=av[g];return p.jsxs("section",{className:"gaussian-live","data-testid":"gaussian-live","aria-label":"3DGS 自由视角渲染",children:[p.jsxs("div",{className:"gaussian-live-heading",children:[p.jsxs("div",{children:[p.jsx("strong",{children:"3DGS 自由视角"}),p.jsx("small",{children:"真实高斯模型 · 本机 GPU 渲染"})]}),p.jsxs("button",{"data-testid":"gaussian-live-toggle",disabled:s||!D.length,className:l?"outline":"primary",onClick:()=>{c(!l),b(l?"已关闭 · GPU 资源已释放":"正在连接…"),O(null)},children:[l?p.jsx(cv,{size:13}):p.jsx(kd,{size:13}),l?"关闭实时渲染":"开启实时渲染"]})]}),p.jsxs("p",{className:"rendering-note",children:["拖拽旋转 · 右键平移 · 滚轮缩放。仅视角变化时请求新图像；视图操作不修改训练模型。",s&&"请等待当前训练任务结束后开启。"]}),l&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"gaussian-live-toolbar",children:[p.jsxs("label",{children:["输出上限",p.jsxs("select",{"data-testid":"gaussian-live-resolution","aria-label":"实时渲染分辨率",value:g,onChange:X=>m(X.target.value),children:[p.jsx("option",{value:"640",children:"640 × 480"}),p.jsx("option",{value:"960",children:"960 × 720"}),p.jsx("option",{value:"1280",children:"1280 × 720"})]})]}),p.jsxs("label",{children:["已有相机",p.jsx("select",{"data-testid":"gaussian-live-camera","aria-label":"实时渲染对齐相机",value:v,onChange:X=>S(X.target.value),children:D.map(X=>p.jsxs("option",{value:X.image_id,children:["#",X.image_id," · ",X.name]},X.image_id))})]}),p.jsxs("button",{"data-testid":"gaussian-live-align",onClick:()=>{const X=D.find(ae=>String(ae.image_id)===v);X&&K.current?.align(X)},children:[p.jsx(qc,{size:13}),"对齐相机"]}),p.jsxs("button",{"data-testid":"gaussian-live-fit",onClick:()=>K.current?.fit(),children:[p.jsx(qc,{size:13}),"适配场景"]}),p.jsxs("button",{"aria-label":"实时渲染全屏",onClick:()=>{document.fullscreenElement?document.exitFullscreen():B.current?.requestFullscreen().catch(X=>C(String(X)))},children:[p.jsx(lv,{size:13}),"全屏"]}),p.jsxs("button",{"data-testid":"gaussian-live-reconnect",onClick:()=>{O(null),d(X=>X+1)},children:[p.jsx(au,{size:13}),"重新连接"]})]}),p.jsx("div",{className:"gaussian-live-stage",ref:B,style:{"--live-aspect":`${ne/le}`},children:p.jsxs("div",{ref:U,className:"gaussian-live-viewport",children:[p.jsx("img",{ref:j,alt:"实时高斯渲染输出","data-testid":"gaussian-live-image",draggable:!1}),!I&&p.jsxs("div",{className:"gaussian-live-placeholder",children:[!M&&p.jsx(Dr,{size:25,className:"spin"}),p.jsx("span",{children:M?"渲染不可用":y})]}),p.jsx("canvas",{ref:G,"data-testid":"gaussian-live-canvas",tabIndex:0,"aria-label":"可拖拽旋转、右键平移、滚轮缩放的实时高斯视图",onContextMenu:X=>X.preventDefault()}),p.jsxs("span",{className:"gaussian-live-badge",children:["3DGS ·"," ",I?`${I.width} × ${I.height}`:`${ne} × ${le}`]})]})}),p.jsxs("div",{className:"gaussian-live-status","data-testid":"gaussian-live-status",role:"status",children:[y,x&&p.jsxs("span",{children:[x.backend," / ",x.device," · ",Ft(x.gaussian_count,0)," 个高斯 · SH"," ",x.sh_degree]})]}),p.jsxs("div",{className:"gaussian-live-metrics","data-testid":"gaussian-live-metrics","data-frame-count":I?.frames??0,"data-last-seq":I?.seq??"","data-fps":I?.fps??"","data-latency-ms":I?.latency??"",children:[p.jsxs("span",{children:["相邻新帧 ",p.jsx("b",{children:Ft(I?.fps,1)})," FPS"]}),p.jsxs("span",{children:["GPU 渲染 ",p.jsx("b",{children:Ft(I?.render,1)})," ms"]}),p.jsxs("span",{children:["编码 ",p.jsx("b",{children:Ft(I?.encode,1)})," ms"]}),p.jsxs("span",{children:["端到端 ",p.jsx("b",{children:Ft(I?.latency,1)})," ms"]}),p.jsxs("span",{children:["已显示 ",p.jsx("b",{children:I?.frames??0})," 帧"]})]}),p.jsx("small",{className:"rendering-note",children:"帧率只统计真实返回并显示的新图像；静止时不重复渲染。端到端包含请求、GPU 计算、编码、传输与解码。"}),M&&p.jsx("p",{className:"rendering-error",role:"alert",children:M})]})]})}const NR=[{key:"iterations",name:"训练迭代数",hint:"步",min:1},{key:"learning_rate",name:"学习率",hint:"Adam",step:1e-4,min:1e-6},{key:"image_downscale",name:"图像降采样",hint:"倍；越大越快",min:1},{key:"rays_per_batch",name:"每批光线数",hint:"NeRF / 批",min:1},{key:"samples_per_ray",name:"每条光线采样",hint:"NeRF / 点",min:1},{key:"near",name:"近裁面 near",hint:"归一化场景单位",step:.1,min:.001},{key:"far",name:"远裁面 far",hint:"归一化场景单位",step:.1,min:.001},{key:"holdout_every",name:"验证图像间隔",hint:"每 N 张留一张",min:1},{key:"preview_every",name:"预览输出间隔",hint:"步",min:1},{key:"seed",name:"随机种子",hint:"整数",min:0}];function UR({runs:r,datasets:e,selectedDatasetId:i,run:s,scene:l,activeRun:c,selectedCameraId:h,onStarted:d,onError:g,onPrepareSfM:m,onImportModel:v,onImportDataset:S}){const[y,b]=ye.useState(null),[M,C]=ye.useState(null),[x,_]=ye.useState(""),[I,O]=ye.useState("result"),[U,B]=ye.useState(i),[G,j]=ye.useState(""),[K,T]=ye.useState(null),[D,H]=ye.useState(null),[ne,le]=ye.useState(!1),[X,ae]=ye.useState(""),[P,Z]=ye.useState(""),[k,ge]=ye.useState(""),L=ye.useRef(null),Q=ye.useRef(""),fe=M?.method??"nerf",xe=Wv(r,fe),de=xi(s)?s:null,Ie=ne||!!c,ie=xe.find(A=>A.id===x);let _e="",Ce=null;try{Ce=pR(fe,I,I==="dataset"?U:x,G,r,e)}catch(A){_e=A.message}ye.useEffect(()=>{let A=!1;return nn("/api/rendering/capabilities").then(ve=>{A||(b(ve),C(be=>be??structuredClone(ve.defaults)))}).catch(ve=>{A||ae(String(ve))}),()=>{A=!0}},[]),ye.useEffect(()=>{if(de?.source_kind==="posed_dataset"){O("dataset"),B(de.source_dataset_id??de.dataset_id??"");return}const A=de?.source_run_id??(xi(s)?void 0:s?.id);A?O("result"):!xe.length&&fe==="nerf"&&e.length&&O("dataset"),A&&xe.some(ve=>ve.id===A)?_(A):_(ve=>xe.some(be=>be.id===ve)?ve:xe[0]?.id??"")},[s?.id,de?.source_run_id,r.map(A=>A.id).join(",")]),ye.useEffect(()=>{fe==="3dgs"&&O("result"),_(A=>xe.some(ve=>ve.id===A)?A:xe[0]?.id??"")},[fe]),ye.useEffect(()=>{de?.source_kind!=="posed_dataset"&&B(A=>e.some(ve=>ve.id===A)?A:i||e.find(ve=>(ve.pose_count??0)>=2)?.id||e[0]?.id||""),de?.source_kind==="sfm_result"&&de.dataset_id&&j(de.dataset_id)},[e.map(A=>A.id).join(","),i,de?.id]),ye.useEffect(()=>{de?.config&&C(structuredClone(de.config))},[de?.id]),ye.useEffect(()=>{T(null),H(null),Q.current=""},[de?.id]),ye.useEffect(()=>{if(!de)return;let A=!1;return nn(`/api/rendering/runs/${encodeURIComponent(de.id)}/result`).then(ve=>{A||(T(ve),ve.config&&Q.current!==de.id&&(C(structuredClone(ve.config)),Q.current=de.id),H(ve.previews.at(-1)??de.latest_preview??null))}).catch(ve=>{A||g(String(ve))}),()=>{A=!0}},[de?.id,de?.status,de?.latest_preview?.url,de?.latest_preview?.step,g]),ye.useEffect(()=>{const ve=l?.cameras.find(be=>be.image_id===h&&be.registered)??l?.cameras.find(be=>be.registered);ve&&(Z(String(ve.image_id)),ge(JSON.stringify({K:ve.K,R:ve.R,t:ve.t,width:ve.width,height:ve.height},null,2)))},[l?.revision,h]);async function Ve(){if(!M||!Ce)return;const A=Wh(M);if(A){g(A);return}le(!0);try{const ve=await nn("/api/rendering/config/validate",ha(M));C(ve);const be=await nn("/api/rendering/runs",ha({...Ce,config:ve}));d(be)}catch(ve){g(String(ve))}finally{le(!1)}}async function Ye(A){if(de){le(!0);try{const ve=A?{camera:gR(k)}:{image_id:Number(P)},be=await nn(`/api/rendering/runs/${encodeURIComponent(de.id)}/render`,ha(ve));H(be)}catch(ve){g(String(ve))}finally{le(!1)}}}const it=de?.training_metrics??K?.metrics,Nt=M?Wh(M):null;return p.jsxs("section",{className:"rendering-workspace","data-testid":"rendering-workspace","aria-label":"NeRF 与 3DGS 工作区",children:[p.jsxs("div",{className:"rendering-settings",children:[p.jsxs("div",{className:"rendering-title",children:[p.jsx("strong",{children:"NeRF / 3DGS"}),p.jsx("span",{children:"教学实现 · 固定位姿"})]}),p.jsxs("p",{className:"rendering-note",children:[fe==="nerf"?"NeRF 使用照片、内参与真实相机位姿，不要求点云。可直接使用已含位姿的照片数据集。":"3DGS 使用照片、内参、相机位姿与初始点云。请先构建点云，或加载已有模型并关联原图。","训练预览仅来自实际渲染器；尚未补完的算法标为「待实现」。"]}),X&&p.jsx("p",{role:"alert",className:"rendering-error",children:X}),!y&&!X&&p.jsx("p",{children:"正在检查训练环境…"}),y&&!y.torch_available&&p.jsx("p",{role:"alert",className:"rendering-error",children:"尚未安装 PyTorch。请按开发文档安装可选渲染依赖后重启服务。"}),p.jsx("fieldset",{disabled:Ie||!M,children:M&&p.jsxs(p.Fragment,{children:[p.jsxs("label",{className:"rendering-wide",children:["训练方法",p.jsxs("select",{"aria-label":"渲染训练方法",value:M.method,onChange:A=>C({...M,method:A.target.value}),children:[p.jsx("option",{value:"nerf",children:"NeRF · MLP 与体渲染"}),p.jsx("option",{value:"3dgs",children:"3DGS · 可微高斯渲染"})]})]}),fe==="nerf"&&p.jsxs("label",{className:"rendering-wide",children:["NeRF 数据源类型",p.jsxs("select",{"aria-label":"NeRF 数据源类型",value:I,onChange:A=>O(A.target.value),children:[p.jsx("option",{value:"dataset",children:"已含相机位姿的照片数据集"}),p.jsx("option",{value:"result",children:"已有相机位姿结果（不要求点云）"})]})]}),I==="dataset"&&fe==="nerf"?p.jsxs("label",{className:"rendering-wide",children:["照片与相机位姿",p.jsxs("select",{"aria-label":"NeRF 位姿照片数据集",value:U,onChange:A=>B(A.target.value),children:[p.jsx("option",{value:"",children:"选择数据集"}),e.map(A=>p.jsxs("option",{value:A.id,children:[A.name," · ",A.image_count," 张 / ",A.pose_count??0," 位姿"]},A.id))]})]}):p.jsxs("label",{className:"rendering-wide",children:[fe==="nerf"?"相机位姿结果":"初始点云模型",p.jsxs("select",{"aria-label":"渲染来源结果",value:x,onChange:A=>_(A.target.value),children:[p.jsx("option",{value:"",children:fe==="nerf"?"选择至少含两台位姿的模型":"选择含点云与相机位姿的模型"}),xe.map(A=>p.jsxs("option",{value:A.id,children:[A.name," · ",A.registered_images," 相机",fe==="3dgs"?` / ${A.point_count} 点`:A.point_count===0?" · 无点云（可训练）":"",A.images_available?"":" · 待关联原图"]},A.id))]})]}),I==="result"&&ie&&!ie.images_available&&p.jsxs("label",{className:"rendering-wide",children:["关联原始照片数据集",p.jsxs("select",{"aria-label":"关联原始照片数据集",value:G,onChange:A=>j(A.target.value),children:[p.jsx("option",{value:"",children:"请选择匹配原图与内参的数据集"}),e.map(A=>p.jsxs("option",{value:A.id,children:[A.name," · ",A.image_count," 张"]},A.id))]}),p.jsx("small",{children:"模型已有位姿；照片集无需另含位姿。后端严格核对图像 ID、文件名、相机与尺寸。"})]}),_e&&p.jsxs("div",{className:"rendering-source-help","data-testid":"rendering-source-help",children:[p.jsx("p",{className:"rendering-note",children:_e}),p.jsxs("div",{className:"rendering-source-actions",children:[p.jsx("button",{type:"button",className:"outline",onClick:()=>m(I==="dataset"?U:void 0),children:fe==="nerf"?"先估计相机位姿":"先构建点云"}),p.jsx("button",{type:"button",className:"outline",onClick:v,children:fe==="nerf"?"加载已有位姿模型":"加载已有模型"}),p.jsx("button",{type:"button",className:"outline",onClick:S,children:"导入照片 / 位姿数据集"})]})]}),p.jsxs("label",{className:"rendering-wide",children:["计算设备",p.jsxs("select",{"aria-label":"渲染计算设备",value:M.device,onChange:A=>C({...M,device:A.target.value}),children:[p.jsx("option",{value:"cpu",children:"CPU · 小分辨率教学实验"}),p.jsxs("option",{value:"cuda",disabled:y?.cuda_available===!1,children:["CUDA"," ",y?.cuda_available==null?"· 启动时检查":y.cuda_available?"· 可用":"· 不可用"]})]})]}),p.jsxs("div",{className:"rendering-fields",children:[p.jsxs("label",{children:["图像背景",p.jsxs("select",{"aria-label":"图像背景",value:M.background??"white",onChange:A=>C({...M,background:A.target.value}),children:[p.jsx("option",{value:"white",children:"白色"}),p.jsx("option",{value:"black",children:"黑色"})]}),p.jsx("small",{children:"匹配照片的背景颜色"})]}),fe==="nerf"&&p.jsxs(p.Fragment,{children:[p.jsxs("label",{children:["训练深度采样",p.jsxs("select",{"aria-label":"训练深度采样",value:M.stratified_sampling?"random":"fixed",onChange:A=>C({...M,stratified_sampling:A.target.value==="random"}),children:[p.jsx("option",{value:"fixed",children:"固定等距"}),p.jsx("option",{value:"random",children:"随机分层"})]}),p.jsx("small",{children:"渲染预览始终使用固定采样"})]}),p.jsxs("label",{children:["光线批次",p.jsxs("select",{"aria-label":"光线批次",value:M.ray_sampling??"image",onChange:A=>C({...M,ray_sampling:A.target.value}),children:[p.jsx("option",{value:"image",children:"每批单张照片"}),p.jsx("option",{value:"all_images",children:"混合训练照片"})]}),p.jsx("small",{children:"混合模式仅使用训练照片"})]})]}),NR.filter(A=>fe==="nerf"||!["rays_per_batch","samples_per_ray"].includes(A.key)).map(A=>p.jsxs("label",{children:[A.name,p.jsx("input",{"aria-label":A.name,type:"number",step:A.step??1,min:A.min,value:M[A.key],onChange:ve=>C({...M,[A.key]:ve.target.valueAsNumber})}),p.jsx("small",{children:A.hint})]},A.key))]}),fe==="nerf"&&p.jsxs("details",{open:!0,children:[p.jsx("summary",{children:"NeRF 网络参数"}),p.jsx("div",{className:"rendering-fields",children:[["levels_xyz","位置编码层数"],["levels_dir","方向编码层数"],["hidden_dim","隐藏层宽度"]].map(([A,ve])=>p.jsxs("label",{children:[ve,p.jsx("input",{type:"number","aria-label":ve,min:A==="hidden_dim"?1:0,value:M.nerf[A],onChange:be=>C({...M,nerf:{...M.nerf,[A]:be.target.valueAsNumber}})})]},A))})]}),fe==="3dgs"&&p.jsxs("details",{open:!0,children:[p.jsx("summary",{children:"3DGS 高斯参数"}),p.jsxs("div",{className:"rendering-fields",children:[p.jsxs("label",{children:["球谐阶数",p.jsx("select",{"aria-label":"球谐阶数",value:M.gaussian.sh_degree??3,onChange:A=>C({...M,gaussian:{...M.gaussian,sh_degree:Number(A.target.value)}}),children:[0,1,2,3].map(A=>p.jsxs("option",{value:A,children:[A," 阶 · ",(A+1)**2," 个系数 / 通道"]},A))})]}),p.jsxs("label",{children:["球谐升阶间隔",p.jsx("input",{type:"number",min:0,max:1e6,step:1,"aria-label":"球谐升阶间隔",value:M.gaussian.sh_degree_interval??0,onChange:A=>C({...M,gaussian:{...M.gaussian,sh_degree_interval:A.target.valueAsNumber}})})]}),p.jsxs("label",{children:["高斯光栅后端",p.jsxs("select",{"aria-label":"高斯光栅后端",value:M.gaussian.backend??"reference",onChange:A=>C({...M,gaussian:{...M.gaussian,backend:A.target.value}}),children:[p.jsx("option",{value:"reference",children:"reference · 数学验证"}),p.jsx("option",{value:"gsplat",children:"gsplat · CUDA 光栅加速"})]})]}),[["initial_scale","初始高斯尺度",.001],["initial_opacity","初始不透明度",.01],["max_gaussians","最大高斯数",1],["densify_every","增密间隔",1]].map(([A,ve,be])=>p.jsxs("label",{children:[ve,p.jsx("input",{type:"number","aria-label":ve,min:A==="max_gaussians"?1:0,max:A==="max_gaussians"?y?.limits?.max_gaussians??Gd:void 0,step:be,value:M.gaussian[A],onChange:je=>C({...M,gaussian:{...M.gaussian,[A]:je.target.valueAsNumber}})})]},A))]}),p.jsxs("p",{className:"rendering-note",children:["最大高斯数支持设置到500万，是初始化与增密的数量上限，不会自动填满。大模型使用CUDA/gsplat。 点数超过高斯上限时稳定子采样。首次冒烟实验推荐降采样 16 倍、最多 128 个高斯。增密间隔 0 表示禁用；开启前请补完增密与剪枝练习。球谐升阶间隔 0 表示直接启用全部阶数，1000 表示每 1000 步升一阶。 球谐颜色须完成 S6。reference 用于数学验证；gsplat 需 CUDA 和独立光栅扩展。",y?.gsplat_native_available?"检测到已编译且通过自检的本机 gsplat 扩展；训练时检查 CUDA 设备。":y?.gsplat_available?"检测到 gsplat 包，CUDA 扩展仍需编译与自检。":"当前未检测到 gsplat 包。","完成训练后可开启自由视角 GPU 渲染；静态预览仍可用于原图对照。"]})]})]})}),p.jsxs("div",{className:"rendering-config-actions",children:[p.jsxs("button",{title:"恢复渲染默认参数",disabled:Ie||!y,onClick:()=>C(structuredClone(y.defaults)),children:[p.jsx(au,{size:13}),"默认"]}),p.jsxs("button",{disabled:!M,onClick:()=>uv("rendering-config.json",M),children:[p.jsx(Hc,{size:13}),"导出配置"]}),p.jsxs("button",{disabled:Ie,onClick:()=>L.current?.click(),children:[p.jsx(Zc,{size:13}),"导入配置"]}),p.jsx("input",{hidden:!0,ref:L,type:"file",accept:".json",onChange:async A=>{const ve=A.target.files?.[0];if(A.target.value="",!!ve)try{const be=await nn("/api/rendering/config/validate",ha(JSON.parse(await ve.text()))),je=Wh(be);if(je)throw new Error(je);C(be)}catch(be){g(`配置无效：${String(be)}`)}}})]}),Nt&&p.jsx("p",{className:"rendering-error",role:"alert",children:Nt}),p.jsxs("button",{className:"primary full","data-testid":"start-training",disabled:Ie||!Ce||!M||!!Nt||!y?.torch_available,onClick:()=>void Ve(),children:[ne?p.jsx(Dr,{size:14,className:"spin"}):p.jsx(kd,{size:14}),"开始训练"]}),c&&p.jsx("p",{className:"rendering-note",children:"当前任务运行中，参数已锁定；可在顶部取消。"})]}),p.jsxs("div",{className:"rendering-results",children:[p.jsx("div",{className:"rendering-result-heading",children:p.jsxs("div",{children:[p.jsx("strong",{children:"训练与新视角渲染"}),p.jsx("span",{children:de?`${de.pipeline?.toUpperCase()} · ${de.name}`:"选择参数并启动训练，或从历史打开训练记录"})]})}),de?.status==="todo"&&p.jsxs("div",{className:"rendering-todo","data-testid":"rendering-todo",children:[p.jsx("strong",{children:"算法待实现"}),p.jsx("p",{children:de.error??de.message??"请补完对应练习后重新启动。本次没有生成训练结果。"})]}),de?.error&&de.status!=="todo"&&p.jsx("p",{className:"rendering-error",role:"alert",children:de.error}),p.jsxs("div",{className:"rendering-metrics",children:[p.jsxs("div",{children:[p.jsx("small",{children:"迭代进度"}),p.jsxs("strong",{children:[it?.step??de?.completed??"—"," /"," ",it?.total??de?.total??"—"]})]}),p.jsxs("div",{children:[p.jsx("small",{children:"训练 loss"}),p.jsx("strong",{children:Ft(it?.loss,6)})]}),p.jsxs("div",{children:[p.jsx("small",{children:"验证 PSNR"}),p.jsxs("strong",{children:[Ft(it?.psnr,2)," ",p.jsx("small",{children:"dB"})]})]})]}),de?.pipeline==="3dgs"&&de.status==="completed"&&p.jsx(DR,{runId:de.id,scene:l,selectedCameraId:h,disabled:!!c},de.id),p.jsxs("div",{className:"rendering-comparison","data-testid":"rendering-comparison",children:[p.jsxs("figure",{children:[p.jsxs("figcaption",{children:["渲染输出 ",D?.step!=null&&p.jsxs("span",{children:["step ",D.step]})]}),D?.url?p.jsx("a",{href:D.url,target:"_blank",rel:"noreferrer",children:p.jsx("img",{src:D.url,alt:"实际渲染输出"})}):p.jsxs("div",{className:"rendering-empty",children:[p.jsx(ko,{size:32}),p.jsx("p",{children:"尚无渲染图像"}),p.jsx("small",{children:"补完算法并完成预览步骤后显示真实输出。"})]})]}),p.jsxs("figure",{children:[p.jsxs("figcaption",{children:["对应原图 ",D?.image_id!=null&&p.jsxs("span",{children:["#",D.image_id]})]}),D?.reference_url?p.jsx("a",{href:D.reference_url,target:"_blank",rel:"noreferrer",children:p.jsx("img",{src:D.reference_url,alt:"对应参考原图"})}):p.jsxs("div",{className:"rendering-empty",children:[p.jsx(ko,{size:32}),p.jsx("p",{children:"此视角没有参考原图"})]})]})]}),!!K?.previews.length&&p.jsxs("label",{className:"rendering-preview-select",children:["查看预览快照",p.jsxs("select",{"aria-label":"渲染预览快照",value:D?.url??"",onChange:A=>H(K.previews.find(ve=>ve.url===A.target.value)??null),children:[!K.previews.some(A=>A.url===D?.url)&&p.jsx("option",{value:D?.url,children:"手动渲染结果"}),K.previews.map(A=>p.jsxs("option",{value:A.url,children:["step ",A.step??"—"," · 图像 #",A.image_id??"新视角"]},A.url))]})]}),de&&p.jsxs("div",{className:"rendering-downloads",children:[K?.checkpoint_url&&p.jsxs("a",{href:K.checkpoint_url,download:!0,children:[p.jsx(Hc,{size:13}),"模型 checkpoint"]}),K?.gaussians_url&&p.jsxs("a",{href:K.gaussians_url,download:!0,children:[p.jsx(Hc,{size:13}),"高斯参数"]})]}),p.jsxs("div",{className:"rendering-camera-controls",children:[p.jsxs("label",{children:["原始相机",p.jsx("select",{"aria-label":"待渲染相机",value:P,onChange:A=>Z(A.target.value),children:l?.cameras.filter(A=>A.registered).map(A=>p.jsxs("option",{value:A.image_id,children:["#",A.image_id," · ",A.name]},A.image_id))})]}),p.jsx("button",{className:"outline",disabled:ne||!de||de.status!=="completed"||!P,onClick:()=>void Ye(!1),children:"渲染此相机"})]}),p.jsxs("details",{className:"rendering-custom-camera",children:[p.jsx("summary",{children:"自定义新视角（源场景世界坐标，world-to-camera）"}),p.jsx("p",{className:"rendering-note",children:"K、R、t 沿用项目约定 Xc = R X + t，width / height 为输出分辨率。此处修改只用于渲染，不修改源相机。"}),p.jsx("textarea",{"aria-label":"新视角相机 JSON",value:k,onChange:A=>ge(A.target.value),spellCheck:!1}),p.jsx("button",{className:"outline",disabled:ne||!de||de.status!=="completed"||!k,onClick:()=>void Ye(!0),children:"渲染自定义新视角"})]})]})]})}const sv={running:"重建进行中",completed:"重建完成",failed:"重建失败",cancelled:"已取消",interrupted:"运行中断",imported:"已导入模型",todo:"算法待实现"};function Bc(r){return xi(r)?{running:"训练进行中",completed:"训练完成",failed:"训练失败",todo:"算法待实现"}[r.status]??sv[r.status]??r.status:r.status==="completed"&&r.registered_images!=null&&r.image_count!=null&&r.registered_images<r.image_count?`部分重建 ${r.registered_images}/${r.image_count}`:sv[r.status]??r.status}const LR={points:!0,cameras:!0,axes:!0,pointSize:2.5,cameraScale:1,color:"rgb",maxError:0,minTrack:0},Yh=[["features","特征"],["pair_geometry","匹配"],["tracks","轨迹"],["initialization","初始化"],["incremental_mapping","建图"],["bundle_adjustment","BA"],["export","导出"]];function OR(r){if(typeof r.message=="string")return r.message;if(typeof r.text=="string")return r.text;const e=typeof r.stage=="string"?Kc(r.stage):"",i=Object.entries(r).filter(([s])=>!["kind","type","stage","timestamp","time","seq","snapshot"].includes(s)).map(([s,l])=>`${s}: ${typeof l=="object"?JSON.stringify(l):l}`).join(" · ");return[e,i].filter(Boolean).join(" · ")||String(r.kind??"状态更新")}function PR(r){if(r==null)return"—";const e=Math.round(r);return e<60?`${e} 秒`:`${Math.floor(e/60)} 分 ${e%60} 秒`}function zR(){const[r,e]=ye.useState([]),[i,s]=ye.useState([]),[l,c]=ye.useState(null),[h,d]=ye.useState(null),[g,m]=ye.useState(""),[v,S]=ye.useState(null),[y,b]=ye.useState(""),[M,C]=ye.useState(null),[x,_]=ye.useState(null),[I,O]=ye.useState("latest"),[U,B]=ye.useState(null),[G,j]=ye.useState([]),[K,T]=ye.useState(null),[D,H]=ye.useState(null),[ne,le]=ye.useState(null),[X,ae]=ye.useState("scene"),[P,Z]=ye.useState(LR),[k,ge]=ye.useState("images"),[L,Q]=ye.useState("log"),[fe,xe]=ye.useState([]),[de,Ie]=ye.useState(null),[ie,_e]=ye.useState(!0),[Ce,Ve]=ye.useState(!1),[Ye,it]=ye.useState(!1),[Nt,A]=ye.useState(!1),[ve,be]=ye.useState(!1),[je,De]=ye.useState(!1),[gt,qe]=ye.useState(!1),[ot,It]=ye.useState(!1),[Gt,z]=ye.useState(""),[R,q]=ye.useState(0),[ce,Se]=ye.useState(0),oe=i.find(V=>V.status==="running"),Fe=ye.useRef(null),we=ye.useRef(null),Ze=ye.useRef(null),He=ye.useCallback((V,Me=!0)=>Ie({text:V,error:Me}),[]),Ne=ye.useCallback(V=>{C(V),s(Me=>[V,...Me.filter(ht=>ht.id!==V.id)])},[]),ze=ye.useCallback(V=>{try{localStorage.setItem("minicolmap.lastRun",V.id)}catch{}b(V.id),ae(xi(V)?"rendering":"scene"),C(V),O("latest"),T(null),_(null),B(null),j([]),xe([]),q(Me=>Me+1),V.dataset_id&&m(V.dataset_id)},[]),et=ye.useCallback(V=>{m(V),ae("scene"),S(Me=>Me?.id===V?Me:null),b(""),C(null),_(null),it(!1),T(null),B(null),j([]),xe([]),O("latest"),ge("images")},[]);ye.useEffect(()=>{let V=!1;return nn("/api/bootstrap").then(Me=>{if(V)return;e(Me.datasets),s(Me.runs),c(Me.defaults),d(structuredClone(Me.defaults));let ht="";try{ht=localStorage.getItem("minicolmap.lastRun")??""}catch{}const pt=Me.runs.find(mt=>mt.status==="running")??Me.runs.find(mt=>mt.id===ht)??Me.runs.find(mt=>mt.name==="temple_ring_8_arc_no_ba_01")??Me.runs.find(mt=>mt.name.includes("temple_ring_8_arc_no_ba"))??Me.runs[0];pt&&ze(pt);const Tt=Me.datasets.find(mt=>mt.name.includes("8"))??Me.datasets[0];!pt?.dataset_id&&Tt&&m(Tt.id)}).catch(Me=>{V||He(String(Me))}).finally(()=>{V||_e(!1)}),()=>{V=!0}},[He,ze]),ye.useEffect(()=>{if(!g){S(null);return}let V=!1;return nn(`/api/datasets/${encodeURIComponent(g)}`).then(Me=>{V||S(Me)}).catch(Me=>{V||He(String(Me))}),()=>{V=!0}},[g,He]),ye.useEffect(()=>{if(!y)return;let V=!1,Me=!1,ht=!1;const pt=new AbortController,Tt=async()=>{if(!V){if(Me){ht=!0;return}Me=!0,it(!0);try{const mt=await nn(`/api/runs/${encodeURIComponent(y)}/scene?snapshot=${encodeURIComponent(I)}`,{signal:pt.signal});V||_(mt)}catch{V||_(null)}finally{Me=!1,V||(it(!1),ht&&(ht=!1,Tt()))}}};return Ze.current=()=>void Tt(),()=>{V=!0,pt.abort(),Ze.current=null}},[y,I]),ye.useEffect(()=>{Ze.current?.()},[y,I,R]),ye.useEffect(()=>{if(!y)return;let V=!1;return Promise.all([nn(`/api/runs/${encodeURIComponent(y)}/reports`),nn(`/api/runs/${encodeURIComponent(y)}/artifacts`)]).then(([Me,ht])=>{V||(B(Me),j(ht))}).catch(Me=>{!V&&M?.status!=="running"&&He(String(Me))}),()=>{V=!0}},[y,M?.status,ce,He]),ye.useEffect(()=>{if(!y||M?.status!=="running"){z("");return}const V=new EventSource(`/api/runs/${encodeURIComponent(y)}/events`);let Me,ht=!1,pt=!1,Tt=!1;const mt=(Xn=!1,Pn=!1)=>{pt||=Xn,Tt||=Pn,!Me&&(Me=setTimeout(()=>{Me=void 0,nn(`/api/runs/${encodeURIComponent(y)}`).then(zn=>{ht||Ne(zn)}).catch(()=>{}),pt&&q(zn=>zn+1),Tt&&Se(zn=>zn+1),pt=Tt=!1},300))};return V.onopen=()=>{z("已连接"),mt(!0,!0)},V.onmessage=Xn=>{try{const Pn=JSON.parse(Xn.data);xe(es=>[...es,{time:new Date(typeof Pn.time=="number"?Pn.time*1e3:Date.now()).toLocaleTimeString("zh-CN",{hour12:!1}),kind:String(Pn.kind??Pn.type??"info"),text:OR(Pn)}].slice(-500));const zn=String(Pn.kind??""),Vi=["complete","terminal","error","cancelled","todo"].includes(zn);mt(zn==="snapshot"||Vi,zn==="timing"||zn==="warning"||Vi)}catch{}},V.onerror=()=>{z("连接恢复中…")},()=>{ht=!0,V.close(),Me&&clearTimeout(Me)}},[y,M?.status,Ne]),ye.useEffect(()=>{if(!oe)return;let V=!1,Me;const ht=()=>{nn(`/api/runs/${encodeURIComponent(oe.id)}`).then(pt=>{V||(s(Tt=>Tt.map(mt=>mt.id===pt.id?pt:mt)),pt.id===y&&(C(pt),pt.status!=="running"&&(q(Tt=>Tt+1),Se(Tt=>Tt+1))))}).catch(()=>{}).finally(()=>{V||(Me=setTimeout(ht,2e3))})};return Me=setTimeout(ht,2e3),()=>{V=!0,clearTimeout(Me)}},[oe?.id,y]),ye.useEffect(()=>{we.current?.scrollIntoView({block:"nearest"})},[fe]),ye.useEffect(()=>{const V=Me=>{Me.key==="Escape"&&(T(null),It(!1))};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[]);async function Je(){if(!(!g||!h)){Ve(!0),Ie(null);try{const V=await nn("/api/config/validate",ha(h));d(V);const Me=await nn("/api/runs",ha({dataset_id:g,config:V}));Ne(Me),ze(Me),Q("log")}catch(V){He(String(V))}finally{Ve(!1)}}}async function Be(){const V=i.find(Me=>Me.status==="running");if(V){Ve(!0);try{const Me=await nn(`/api/runs/${encodeURIComponent(V.id)}/cancel`,{method:"POST"});Me.id===y?(Ne(Me),q(ht=>ht+1)):s(ht=>[Me,...ht.filter(pt=>pt.id!==Me.id)])}catch(Me){He(String(Me))}finally{Ve(!1)}}}async function dt(V){Ve(!0);try{const Me=new FormData;Me.append("file",V);const ht=await nn("/api/results/import",{method:"POST",body:Me});Ne(ht),ze(ht),He("模型已导入。原始照片缺失时仍可检查点云与位姿。",!1)}catch(Me){He(String(Me))}finally{Ve(!1)}}async function Y(V){if(!(!M||!xi(M)||M.status!=="completed")){Ve(!0);try{const Me=await nn(`/api/rendering/runs/${encodeURIComponent(M.id)}/render`,ha({camera:V}));Ne({...M,latest_preview:Me}),ae("rendering")}catch(Me){He(String(Me))}finally{Ve(!1)}}}const Le=x?.cameras??v?.images.map(V=>({...V,image_id:V.id,registered:!1,observations:0,K:v.cameras.find(Me=>Me.id===V.camera_id)?.K??[]}))??[],Oe=x?.summary,We=Oe?.registered_images??M?.registered_images??0,Ue=Oe?.image_count??M?.image_count??v?.image_count??0,Ae=x?.snapshots?.length?x.snapshots:M?.snapshots??[],Qe=Yh.findIndex(([V])=>V===M?.stage||V==="bundle_adjustment"&&M?.stage==="ba"||V==="export"&&M?.stage==="exporting"||V==="features"&&M?.stage==="feature_extraction"||V==="incremental_mapping"&&["registration","mapping"].includes(M?.stage??"")||V==="pair_geometry"&&M?.stage==="matching"),ut=M&&!M.images_available;return p.jsxs("div",{className:`app ${ve?"left-hidden":""} ${je||X==="rendering"?"right-hidden":""}`,children:[p.jsxs("header",{className:"topbar",children:[p.jsxs("div",{className:"brand",children:[p.jsx("div",{className:"brand-mark",children:p.jsx(G_,{size:23,strokeWidth:1.5})}),p.jsxs("div",{children:[p.jsxs("strong",{children:["MINI",p.jsx("span",{children:"COLMAP"})]}),p.jsx("small",{children:"三维重建工作台"})]})]}),p.jsxs("div",{className:"project-heading",children:[p.jsx("span",{className:"project-divider"}),p.jsx(Wc,{size:15}),p.jsx("span",{children:v?.name??"未选择数据集"}),p.jsxs("span",{className:"local-pill",children:[p.jsx("i",{}),"LOCAL"]})]}),p.jsxs("div",{className:"top-actions",children:[p.jsxs("button",{className:"quiet","data-testid":"import-model",onClick:()=>Fe.current?.click(),disabled:Ce,children:[p.jsx(q_,{size:15}),"打开模型"]}),p.jsx("input",{ref:Fe,hidden:!0,type:"file",accept:".json",onChange:V=>{const Me=V.target.files?.[0];Me&&dt(Me),V.target.value=""}}),p.jsxs("details",{className:"export-menu",children:[p.jsxs("summary",{className:`button quiet ${M?"":"disabled"}`,children:[p.jsx(j_,{size:15}),"导出",p.jsx(Fc,{size:12})]}),p.jsx("div",{className:"dropdown",children:G.length?G.map(V=>p.jsxs("a",{href:V.url,download:!0,children:[/\.png|\.jpe?g/i.test(V.name)?p.jsx(ko,{size:13}):p.jsx(q_,{size:13}),p.jsx("span",{children:V.name}),p.jsx(j_,{size:12})]},V.url)):p.jsx("p",{children:"当前还没有可下载的结果。"})})]}),p.jsx("button",{className:`quiet ${X==="rendering"?"selected":""}`,"data-testid":"open-rendering",onClick:()=>ae(X==="rendering"?"scene":"rendering"),children:"NeRF / 3DGS"}),p.jsx("span",{className:"action-divider"}),oe?p.jsxs("button",{className:"cancel-button","data-testid":"cancel-run",disabled:Ce,onClick:()=>void Be(),children:[p.jsx(cv,{size:13,fill:"currentColor"}),xi(oe)?"取消训练":"取消重建"]}):p.jsxs("button",{className:"primary start-button","data-testid":"start-run",disabled:Ce||!g||ie||X==="rendering",onClick:()=>void Je(),children:[Ce?p.jsx(Dr,{size:15,className:"spin"}):p.jsx(kd,{size:14,fill:"currentColor"}),"开始 SfM 重建"]}),p.jsx("button",{className:"icon-button help-button","aria-label":"操作说明",title:"操作说明",onClick:()=>It(!0),children:p.jsx(Yc,{size:17})})]})]}),de&&p.jsxs("div",{className:`notice ${de.error?"error":"success"}`,role:"alert",children:[de.error?p.jsx(RS,{size:15}):p.jsx(V_,{size:15}),p.jsx("span",{children:de.text}),p.jsx("button",{"aria-label":"关闭通知",onClick:()=>Ie(null),children:p.jsx(Kh,{size:14})})]}),p.jsxs("div",{className:"workspace",children:[p.jsxs("aside",{className:"left-panel",children:[p.jsxs("div",{className:"workspace-label",children:[p.jsx("span",{children:"工作区"}),p.jsx("button",{className:"icon-button",title:"收起左侧栏","aria-label":"收起左侧栏",onClick:()=>be(!0),children:p.jsx(yS,{size:15})})]}),p.jsxs("div",{className:"dataset-picker",children:[p.jsx("label",{children:"当前输入数据"}),p.jsxs("div",{className:"select-wrapper",children:[p.jsx(Wc,{size:15}),p.jsxs("select",{"aria-label":"选择输入数据集",value:g,disabled:!!oe,onChange:V=>{et(V.target.value)},children:[p.jsx("option",{value:"",disabled:!0,children:"选择数据集"}),r.map(V=>p.jsxs("option",{value:V.id,children:[V.name," · ",V.image_count," 张"]},V.id))]}),p.jsx(dS,{size:12})]}),p.jsxs("button",{className:"outline full import-dataset","data-testid":"import-dataset",disabled:!!oe,onClick:()=>A(!0),children:[p.jsx(MS,{size:14}),"导入数据集"]})]}),p.jsxs("nav",{className:"side-tabs",children:[p.jsxs("button",{className:k==="images"?"selected":"",onClick:()=>ge("images"),children:[p.jsx(ko,{size:14}),"照片"]}),p.jsxs("button",{className:k==="config"?"selected":"",onClick:()=>ge("config"),children:[p.jsx(bS,{size:14}),"参数"]}),p.jsxs("button",{className:k==="history"?"selected":"",onClick:()=>ge("history"),children:[p.jsx(_S,{size:14}),"历史"]})]}),p.jsx("div",{className:"left-content",children:k==="images"?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"list-heading",children:[p.jsx("span",{children:x?"当前模型图像":"输入照片"}),p.jsxs("span",{children:[Le.length," 张"]})]}),Le.length?p.jsx("div",{className:"image-list",children:Le.map(V=>p.jsxs("button",{className:`image-row ${K?.kind==="camera"&&K.id===V.image_id?"selected":""}`,"data-testid":`image-${V.image_id}`,onClick:()=>{(x||v)&&(T({kind:"camera",id:V.image_id}),De(!1))},children:[p.jsx("div",{className:"image-thumbnail",children:V.image_url?p.jsx("img",{loading:"lazy",src:V.image_url,alt:"",onError:Me=>{Me.currentTarget.style.visibility="hidden"}}):p.jsx(ko,{size:17})}),p.jsxs("div",{children:[p.jsx("strong",{children:V.name}),p.jsxs("small",{children:["#",V.image_id," ",p.jsx("span",{children:V.registered?`${Ft(V.observations,0)} 观测`:`${V.width} × ${V.height}`})]})]}),p.jsx("span",{className:`registration-dot ${V.registered?"registered":""}`,title:V.registered?"已注册":"尚未注册"})]},V.image_id))}):p.jsxs("div",{className:"sidebar-empty",children:[p.jsx(gS,{size:26}),p.jsx("p",{children:"导入照片以开始重建"})]}),x&&p.jsxs("div",{className:"registration-key",children:[p.jsx("i",{className:"registration-dot registered"}),"已注册"," ",p.jsxs("span",{children:[We," / ",Ue]})]})]}):k==="config"&&h&&l?p.jsx(xR,{config:h,defaults:l,disabled:!!oe,onChange:d,onError:He,onValidate:()=>{nn("/api/config/validate",ha(h)).then(V=>{d(V),He("配置检查通过，可以开始重建。",!1)}).catch(V=>He(String(V)))}}):k==="history"?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"list-heading",children:[p.jsx("span",{children:"本地任务记录"}),p.jsx("button",{className:"text-button","aria-label":"刷新历史运行",title:"刷新并清除输出目录已删除的历史记录",onClick:()=>{nn("/api/runs?discover=true").then(V=>{const Me=i.filter(ht=>!V.some(pt=>pt.id===ht.id)).length;if(s(V),y&&!V.some(ht=>ht.id===y))if(V[0])ze(V[0]);else{b(""),C(null),_(null),it(!1),T(null),B(null),j([]),xe([]),O("latest"),ae("scene");try{localStorage.removeItem("minicolmap.lastRun")}catch{}}He(Me?`已清理 ${Me} 条失效历史记录`:"历史已刷新",!1)}).catch(V=>He(String(V)))},children:"刷新"})]}),p.jsx("div",{className:"run-list",children:i.map(V=>p.jsxs("button",{className:`run-row ${y===V.id?"selected":""}`,onClick:()=>ze(V),children:[p.jsxs("div",{className:"run-row-top",children:[p.jsx("span",{className:`status-dot ${V.status==="completed"||V.status==="imported"?"good":V.status==="running"?"live":V.status==="failed"?"bad":""}`}),p.jsx("strong",{children:V.name})]}),p.jsx("span",{children:Bc(V)}),p.jsx("small",{children:xi(V)?`${V.pipeline?.toUpperCase()} · ${V.training_metrics?.step??V.completed??0} / ${V.training_metrics?.total??V.total??"—"} 步`:p.jsxs(p.Fragment,{children:[V.registered_images??"—","/",V.image_count??"—"," 相机 ·"," ",Ft(V.point_count,0)," 点"]})})]},V.id))})]}):null}),p.jsxs("div",{className:"sidebar-footer",children:[p.jsx("span",{className:"live-dot"}),"本机运行 · Python 算法引擎",p.jsx("span",{children:"v0.1"})]})]}),p.jsxs("main",{className:"main-panel",children:[p.jsxs("div",{className:"scene-topline",children:[p.jsxs("div",{className:"scene-breadcrumb",children:[ve&&p.jsx("button",{className:"icon-button",title:"展开左侧栏","aria-label":"展开左侧栏",onClick:()=>be(!1),children:p.jsx(Zh,{size:16})}),p.jsx(G_,{size:14}),p.jsx("span",{children:M?.name??"尚无重建结果"}),M&&p.jsxs("span",{className:`run-state ${M.status} ${Bc(M).startsWith("部分重建")?"partial":""}`,children:[p.jsx("i",{}),Bc(M)]}),Ye&&p.jsx(Dr,{size:12,className:"spin"})]}),p.jsxs("div",{className:"scene-actions",children:[p.jsxs("div",{className:"workspace-mode","aria-label":"工作区视图",children:[p.jsx("button",{className:X==="scene"?"selected":"",onClick:()=>ae("scene"),children:M?.source_kind==="posed_dataset"?"相机位姿场景":xi(M)?"源 SfM 场景":"三维场景"}),p.jsx("button",{className:X==="rendering"?"selected":"",onClick:()=>ae("rendering"),children:"训练 / 渲染"})]}),p.jsxs("label",{className:"snapshot-select",children:[p.jsx(k_,{size:13}),p.jsxs("select",{"aria-label":"选择场景快照",value:I,disabled:!Ae.length,onChange:V=>{O(V.target.value),T(null)},children:[p.jsxs("option",{value:"latest",children:["最新结果",M?.status==="running"?" · 实时":""]}),Ae.map(V=>p.jsx("option",{value:V.id,children:fv(V.label)},V.id))]})]}),p.jsx("button",{className:"icon-button","aria-label":je?"展开检查器":"收起检查器",onClick:()=>De(!je),children:p.jsx(SS,{size:15})})]})]}),ut&&p.jsxs("div",{className:"image-warning",children:[p.jsx(Yc,{size:12}),"此模型未关联原始照片；点云和相机位姿仍可查看。"]}),X==="rendering"?p.jsx(UR,{runs:i,datasets:r,selectedDatasetId:g,run:M,scene:x,activeRun:oe,selectedCameraId:K?.kind==="camera"?K.id:null,onStarted:V=>{Ne(V),ze(V),Q("log")},onError:He,onPrepareSfM:V=>{V&&et(V),ae("scene"),ge("images"),be(!1)},onImportModel:()=>Fe.current?.click(),onImportDataset:()=>A(!0)}):p.jsx(_R,{scene:x,runId:y,options:P,setOptions:Z,selection:K,cameraViewRequest:D,onCameraViewChange:le,onRenderCamera:xi(M)&&M?.status==="completed"?V=>void Y(V):void 0,renderBusy:Ce||!!oe,onSelect:V=>{T(V),V&&De(!1)}}),p.jsxs("section",{className:`bottom-panel ${gt?"expanded":""}`,children:[p.jsxs("div",{className:"bottom-heading",children:[p.jsxs("div",{className:"bottom-tabs",children:[p.jsxs("button",{className:L==="log"?"selected":"",onClick:()=>Q("log"),children:[p.jsx(AS,{size:13}),"运行日志",M?.status==="running"&&p.jsx("i",{className:"live-dot"})]}),p.jsxs("button",{className:L==="diagnostics"?"selected":"",onClick:()=>Q("diagnostics"),children:[p.jsx(H_,{size:13}),"质量与诊断"]})]}),p.jsxs("div",{className:"bottom-status",children:[M?.status==="running"&&p.jsxs("span",{className:"actual-progress","data-testid":"actual-progress",children:[Kc(M.stage),M.total!=null&&M.total>0?` ${M.completed??0} / ${M.total}`:""]}),Gt&&p.jsxs("span",{children:[p.jsx("i",{className:"live-dot"}),Gt]}),p.jsxs("span",{children:[p.jsx(k_,{size:12}),PR(M?.elapsed_seconds)]}),p.jsx("button",{className:"icon-button",title:gt?"收起日志区":"展开日志区","aria-label":"调整日志区域",onClick:()=>qe(!gt),children:p.jsx(Fc,{size:14,style:{transform:gt?"none":"rotate(180deg)"}})})]})]}),L==="log"?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"phase-strip",children:(xi(M)?[["preparing","准备数据"],["training","训练"],["evaluation","验证"],["export","导出"]]:Yh).map(([V,Me],ht)=>{const pt=V==="bundle_adjustment"&&M?.status==="completed"&&!U?.ba,Tt=xi(M)?["preparing","training","evaluation","export"].indexOf(M?.stage??""):Qe,mt=!pt&&(M?.status==="completed"||Tt>ht);return p.jsxs("div",{className:`${M?.status==="running"&&ht===Tt?"current":""} ${mt?"complete":""}`,title:pt?"本次未启用最终 BA":Me,children:[p.jsx("span",{children:mt?p.jsx(V_,{size:10}):pt?"—":String(ht+1).padStart(2,"0")}),Me,ht<Yh.length-1&&p.jsx(Zh,{size:10})]},V)})}),p.jsxs("div",{className:"log-scroll",role:"log","aria-label":"算法运行日志",children:[!fe.length&&p.jsxs("div",{className:"log-line",children:[p.jsx("time",{children:"—"}),p.jsx("span",{className:"log-tag",children:"SYSTEM"}),p.jsx("span",{children:M?.status==="running"?"正在连接实际运行事件…":M?`已加载本地结果：${M.name}。${M.status==="imported"?"此模型由文件导入。":"完整诊断与原始文件可在“质量与诊断”和“导出”中查看。"}`:"就绪。选择数据集并开始重建。"})]}),fe.map((V,Me)=>p.jsxs("div",{className:`log-line ${V.kind==="warning"||V.kind==="error"?"warning":""}`,children:[p.jsx("time",{children:V.time}),p.jsx("span",{className:"log-tag",children:V.kind.toUpperCase()}),p.jsx("span",{children:V.text})]},Me)),M?.error&&p.jsxs("div",{className:"log-line warning",children:[p.jsx("time",{children:"ERROR"}),p.jsx("span",{children:M.error})]}),M?.warnings?.map((V,Me)=>p.jsxs("div",{className:"log-line warning",children:[p.jsx("time",{children:"WARN"}),p.jsx("span",{children:V})]},`w${Me}`)),p.jsx("div",{ref:we})]})]}):p.jsxs("div",{className:"diagnostics-scroll",children:[p.jsxs("div",{className:"metric-strip",children:[p.jsxs("div",{children:[p.jsx("span",{children:"注册相机"}),p.jsxs("strong",{children:[We," / ",Ue]})]}),p.jsxs("div",{children:[p.jsx("span",{children:"三维点"}),p.jsx("strong",{children:Ft(Oe?.point_count,0)})]}),p.jsxs("div",{children:[p.jsx("span",{children:"有效观测"}),p.jsx("strong",{children:Ft(Oe?.observation_count,0)})]}),p.jsxs("div",{children:[p.jsx("span",{children:"中位误差"}),p.jsxs("strong",{children:[Ft(Oe?.median_reprojection_error_px)," ",p.jsx("small",{children:"px"})]})]}),p.jsxs("div",{children:[p.jsx("span",{children:"P95 误差"}),p.jsxs("strong",{children:[Ft(Oe?.p95_reprojection_error_px)," ",p.jsx("small",{children:"px"})]})]}),p.jsxs("div",{children:[p.jsx("span",{children:"正深度比例"}),p.jsx("strong",{children:Oe?.positive_depth_ratio==null?"—":`${Ft(Oe.positive_depth_ratio*100,1)}%`})]})]}),U?.ba&&p.jsxs("div",{className:`ba-notice ${U.ba.solver_success?"converged":""}`,"data-testid":"ba-status",children:[p.jsx(H_,{size:15}),p.jsx("strong",{children:U.ba.accepted?"BA 候选已接受":"BA 候选未接受"}),p.jsx("span",{children:U.ba.solver_success?"求解器已收敛":"求解器尚未收敛"}),p.jsxs("span",{children:[U.ba.nfev," 次评估"]}),p.jsxs("span",{children:[Ft(U.ba.before_mean_px)," → ",Ft(U.ba.candidate_mean_px)," ","px"]}),p.jsx("p",{children:U.ba.rejection_reason??U.ba.message})]}),U?.timings&&p.jsx(SR,{timing:U.timings}),M&&Bc(M).startsWith("部分重建")&&p.jsxs("div",{className:"info-note",children:["流程完成，但仅 ",M.registered_images,"/",M.image_count," ","张图像成功注册。请检查未注册照片与匹配质量。"]}),p.jsx("div",{className:"report-disclosures",children:["pairs","initialization"].map(V=>p.jsxs("details",{children:[p.jsxs("summary",{children:[V==="pairs"?"图像对匹配与几何验证":"初始化候选与筛选诊断",p.jsx(Fc,{size:12})]}),p.jsx("pre",{children:U?.[V]?JSON.stringify(U[V],null,2):"暂无该阶段报告。"})]},V))}),G.some(V=>/\.(png|jpe?g)$/i.test(V.name))&&p.jsxs("details",{className:"match-previews",children:[p.jsx("summary",{children:"查看真实匹配预览"}),p.jsx("div",{children:G.filter(V=>/\.(png|jpe?g)$/i.test(V.name)).map(V=>p.jsxs("a",{href:V.url,target:"_blank",rel:"noreferrer",children:[p.jsx("img",{src:V.url,loading:"lazy",alt:V.name}),p.jsx("span",{children:V.name})]},V.url))})]})]})]})]}),!je&&X==="scene"&&p.jsx(yR,{scene:x,inputDataset:v,runId:y,snapshot:x?.snapshot_id??I,selection:K,onSelect:T,onViewCamera:V=>H(Me=>({imageId:V,version:(Me?.version??0)+1})),viewCameraId:ne})]}),p.jsxs("footer",{className:"statusbar",children:[p.jsxs("span",{children:[p.jsx("span",{className:"status-dot good"}),"本地工作台 ",p.jsx("i",{}),"127.0.0.1"]}),p.jsxs("span",{children:[M?.status==="running"?Kc(M.stage):"只呈现算法计算结果",p.jsx("i",{}),"React + Three.js · Python"]})]}),ie&&p.jsxs("div",{className:"boot-overlay",children:[p.jsx(Dr,{size:26,className:"spin"}),p.jsx("span",{children:"正在连接本地重建引擎…"})]}),Nt&&p.jsx(MR,{onClose:()=>A(!1),onImported:V=>{e(Me=>[V,...Me.filter(ht=>ht.id!==V.id)]),et(V.id),X==="rendering"&&ae("rendering"),S(V),ge("images"),He(`已导入 ${V.image_count} 张图像。${(V.pose_count??0)>=2?`已保留 ${V.pose_count} 台真实相机位姿，可直接训练 NeRF。`:"尚无相机位姿；可先估计位姿或导入含位姿的清单。"}`,!1)}}),ot&&p.jsx("div",{className:"modal-backdrop",onMouseDown:V=>{V.target===V.currentTarget&&It(!1)},children:p.jsxs("section",{className:"modal help-modal",role:"dialog","aria-modal":"true","aria-label":"工作台操作说明",children:[p.jsxs("div",{className:"modal-heading",children:[p.jsxs("div",{children:[p.jsx("span",{className:"eyebrow",children:"WORKBENCH GUIDE"}),p.jsx("h2",{children:"从照片到稀疏重建"})]}),p.jsx("button",{className:"icon-button",onClick:()=>It(!1),"aria-label":"关闭操作说明",children:p.jsx(Kh,{size:18})})]}),p.jsxs("ol",{children:[p.jsxs("li",{children:[p.jsx("strong",{children:"选择或导入数据"}),p.jsx("p",{children:"使用项目数据集，或导入已去畸变照片与真实内参。"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"检查参数并运行"}),p.jsx("p",{children:"“参数”中的配置直接交给现有 Python 算法，实际进度在底部更新。"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"拖拽检查三维结果"}),p.jsx("p",{children:"左键旋转、右键平移、滚轮缩放；点击相机或点查看原始信息。Esc 清除选择。"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"对照快照与质量"}),p.jsx("p",{children:"切换初始化、增量建图和 BA 前后快照。BA 接受与求解器收敛分别展示。"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"导出真实结果"}),p.jsx("p",{children:"右上角下载模型、PLY 和其他实际生成的文件。视图调整不修改地图。"})]})]})]})})]})}lS.createRoot(document.getElementById("root")).render(p.jsx(eS.StrictMode,{children:p.jsx(zR,{})}));
