(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Z0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var eh={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Iy(){if(M_)return Do;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var E_;function By(){return E_||(E_=1,eh.exports=Iy()),eh.exports}var v=By(),nh={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Fy(){if(b_)return ue;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function x(N,tt,Et){this.props=N,this.context=tt,this.refs=C,this.updater=Et||E}x.prototype.isReactComponent={},x.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=x.prototype;function I(N,tt,Et){this.props=N,this.context=tt,this.refs=C,this.updater=Et||E}var L=I.prototype=new _;L.constructor=I,b(L,x.prototype),L.isPureReactComponent=!0;var U=Array.isArray,F={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function O(N,tt,Et,Tt,Ut,Vt){return Et=Vt.ref,{$$typeof:r,type:N,key:tt,ref:Et!==void 0?Et:null,props:Vt}}function V(N,tt){return O(N.type,tt,void 0,void 0,void 0,N.props)}function D(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function w(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Et){return tt[Et]})}var j=/\/+/g;function Z(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?w(""+N.key):tt.toString(36)}function lt(){}function vt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(lt,lt):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ft(N,tt,Et,Tt,Ut){var Vt=typeof N;(Vt==="undefined"||Vt==="boolean")&&(N=null);var et=!1;if(N===null)et=!0;else switch(Vt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(N.$$typeof){case r:case t:et=!0;break;case g:return et=N._init,ft(et(N._payload),tt,Et,Tt,Ut)}}if(et)return Ut=Ut(N),et=Tt===""?"."+Z(N,0):Tt,U(Ut)?(Et="",et!=null&&(Et=et.replace(j,"$&/")+"/"),ft(Ut,tt,Et,"",function(Dt){return Dt})):Ut!=null&&(D(Ut)&&(Ut=V(Ut,Et+(Ut.key==null||N&&N.key===Ut.key?"":(""+Ut.key).replace(j,"$&/")+"/")+et)),tt.push(Ut)),1;et=0;var yt=Tt===""?".":Tt+":";if(U(N))for(var dt=0;dt<N.length;dt++)Tt=N[dt],Vt=yt+Z(Tt,dt),et+=ft(Tt,tt,Et,Vt,Ut);else if(dt=S(N),typeof dt=="function")for(N=dt.call(N),dt=0;!(Tt=N.next()).done;)Tt=Tt.value,Vt=yt+Z(Tt,dt++),et+=ft(Tt,tt,Et,Vt,Ut);else if(Vt==="object"){if(typeof N.then=="function")return ft(vt(N),tt,Et,Tt,Ut);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return et}function B(N,tt,Et){if(N==null)return N;var Tt=[],Ut=0;return ft(N,Tt,"","",function(Vt){return tt.call(Et,Vt,Ut++)}),Tt}function q(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(Et){(N._status===0||N._status===-1)&&(N._status=1,N._result=Et)},function(Et){(N._status===0||N._status===-1)&&(N._status=2,N._result=Et)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function _t(){}return ue.Children={map:B,forEach:function(N,tt,Et){B(N,function(){tt.apply(this,arguments)},Et)},count:function(N){var tt=0;return B(N,function(){tt++}),tt},toArray:function(N){return B(N,function(tt){return tt})||[]},only:function(N){if(!D(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ue.Component=x,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=I,ue.StrictMode=s,ue.Suspense=m,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},ue.cache=function(N){return function(){return N.apply(null,arguments)}},ue.cloneElement=function(N,tt,Et){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Tt=b({},N.props),Ut=N.key,Vt=void 0;if(tt!=null)for(et in tt.ref!==void 0&&(Vt=void 0),tt.key!==void 0&&(Ut=""+tt.key),tt)!k.call(tt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&tt.ref===void 0||(Tt[et]=tt[et]);var et=arguments.length-2;if(et===1)Tt.children=Et;else if(1<et){for(var yt=Array(et),dt=0;dt<et;dt++)yt[dt]=arguments[dt+2];Tt.children=yt}return O(N.type,Ut,void 0,void 0,Vt,Tt)},ue.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ue.createElement=function(N,tt,Et){var Tt,Ut={},Vt=null;if(tt!=null)for(Tt in tt.key!==void 0&&(Vt=""+tt.key),tt)k.call(tt,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ut[Tt]=tt[Tt]);var et=arguments.length-2;if(et===1)Ut.children=Et;else if(1<et){for(var yt=Array(et),dt=0;dt<et;dt++)yt[dt]=arguments[dt+2];Ut.children=yt}if(N&&N.defaultProps)for(Tt in et=N.defaultProps,et)Ut[Tt]===void 0&&(Ut[Tt]=et[Tt]);return O(N,Vt,void 0,void 0,null,Ut)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(N){return{$$typeof:d,render:N}},ue.isValidElement=D,ue.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:q}},ue.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},ue.startTransition=function(N){var tt=F.T,Et={};F.T=Et;try{var Tt=N(),Ut=F.S;Ut!==null&&Ut(Et,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(_t,Y)}catch(Vt){Y(Vt)}finally{F.T=tt}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(N){return F.H.use(N)},ue.useActionState=function(N,tt,Et){return F.H.useActionState(N,tt,Et)},ue.useCallback=function(N,tt){return F.H.useCallback(N,tt)},ue.useContext=function(N){return F.H.useContext(N)},ue.useDebugValue=function(){},ue.useDeferredValue=function(N,tt){return F.H.useDeferredValue(N,tt)},ue.useEffect=function(N,tt,Et){var Tt=F.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Tt.useEffect(N,tt)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(N,tt,Et){return F.H.useImperativeHandle(N,tt,Et)},ue.useInsertionEffect=function(N,tt){return F.H.useInsertionEffect(N,tt)},ue.useLayoutEffect=function(N,tt){return F.H.useLayoutEffect(N,tt)},ue.useMemo=function(N,tt){return F.H.useMemo(N,tt)},ue.useOptimistic=function(N,tt){return F.H.useOptimistic(N,tt)},ue.useReducer=function(N,tt,Et){return F.H.useReducer(N,tt,Et)},ue.useRef=function(N){return F.H.useRef(N)},ue.useState=function(N){return F.H.useState(N)},ue.useSyncExternalStore=function(N,tt,Et){return F.H.useSyncExternalStore(N,tt,Et)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.1.1",ue}var T_;function zd(){return T_||(T_=1,nh.exports=Fy()),nh.exports}var Pt=zd();const Hy=Z0(Pt);var ih={exports:{}},Uo={},ah={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Gy(){return A_||(A_=1,(function(r){function t(B,q){var Y=B.length;B.push(q);t:for(;0<Y;){var _t=Y-1>>>1,N=B[_t];if(0<l(N,q))B[_t]=q,B[Y]=N,Y=_t;else break t}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var q=B[0],Y=B.pop();if(Y!==q){B[0]=Y;t:for(var _t=0,N=B.length,tt=N>>>1;_t<tt;){var Et=2*(_t+1)-1,Tt=B[Et],Ut=Et+1,Vt=B[Ut];if(0>l(Tt,Y))Ut<N&&0>l(Vt,Tt)?(B[_t]=Vt,B[Ut]=Y,_t=Ut):(B[_t]=Tt,B[Et]=Y,_t=Et);else if(Ut<N&&0>l(Vt,Y))B[_t]=Vt,B[Ut]=Y,_t=Ut;else break t}}return q}function l(B,q){var Y=B.sortIndex-q.sortIndex;return Y!==0?Y:B.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,y=null,S=3,E=!1,b=!1,C=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=B)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function F(B){if(C=!1,U(B),!b)if(i(m)!==null)b=!0,k||(k=!0,Z());else{var q=i(p);q!==null&&ft(F,q.startTime-B)}}var k=!1,O=-1,V=5,D=-1;function w(){return x?!0:!(r.unstable_now()-D<V)}function j(){if(x=!1,k){var B=r.unstable_now();D=B;var q=!0;try{t:{b=!1,C&&(C=!1,I(O),O=-1),E=!0;var Y=S;try{e:{for(U(B),y=i(m);y!==null&&!(y.expirationTime>B&&w());){var _t=y.callback;if(typeof _t=="function"){y.callback=null,S=y.priorityLevel;var N=_t(y.expirationTime<=B);if(B=r.unstable_now(),typeof N=="function"){y.callback=N,U(B),q=!0;break e}y===i(m)&&s(m),U(B)}else s(m);y=i(m)}if(y!==null)q=!0;else{var tt=i(p);tt!==null&&ft(F,tt.startTime-B),q=!1}}break t}finally{y=null,S=Y,E=!1}q=void 0}}finally{q?Z():k=!1}}}var Z;if(typeof L=="function")Z=function(){L(j)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,vt=lt.port2;lt.port1.onmessage=j,Z=function(){vt.postMessage(null)}}else Z=function(){_(j,0)};function ft(B,q){O=_(function(){B(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(B){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var Y=S;S=q;try{return B()}finally{S=Y}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(B,q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=S;S=B;try{return q()}finally{S=Y}},r.unstable_scheduleCallback=function(B,q,Y){var _t=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?_t+Y:_t):Y=_t,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:q,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>_t?(B.sortIndex=Y,t(p,B),i(m)===null&&B===i(p)&&(C?(I(O),O=-1):C=!0,ft(F,Y-_t))):(B.sortIndex=N,t(m,B),b||E||(b=!0,k||(k=!0,Z()))),B},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(B){var q=S;return function(){var Y=S;S=q;try{return B.apply(this,arguments)}finally{S=Y}}}})(sh)),sh}var R_;function Vy(){return R_||(R_=1,ah.exports=Gy()),ah.exports}var rh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function ky(){if(C_)return Dn;C_=1;var r=zd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,y=d(g,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):g==="script"&&s.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,y=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var w_;function jy(){if(w_)return rh.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rh.exports=ky(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Xy(){if(D_)return Uo;D_=1;var r=Vy(),t=zd(),i=jy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case C:return"StrictMode";case F:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var ft=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},_t=[],N=-1;function tt(e){return{current:e}}function Et(e){0>N||(e.current=_t[N],_t[N]=null,N--)}function Tt(e,n){N++,_t[N]=e.current,e.current=n}var Ut=tt(null),Vt=tt(null),et=tt(null),yt=tt(null);function dt(e,n){switch(Tt(et,n),Tt(Vt,e),Tt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Kg(n),e=Qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et(Ut),Tt(Ut,e)}function Dt(){Et(Ut),Et(Vt),Et(et)}function zt(e){e.memoizedState!==null&&Tt(yt,e);var n=Ut.current,a=Qg(n,e.type);n!==a&&(Tt(Vt,e),Tt(Ut,a))}function Jt(e){Vt.current===e&&(Et(Ut),Et(Vt)),yt.current===e&&(Et(yt),To._currentValue=Y)}var Ue=Object.prototype.hasOwnProperty,G=r.unstable_scheduleCallback,be=r.unstable_cancelCallback,re=r.unstable_shouldYield,te=r.unstable_requestPaint,Gt=r.unstable_now,Pe=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,le=r.unstable_UserBlockingPriority,Ve=r.unstable_NormalPriority,Xe=r.unstable_LowPriority,P=r.unstable_IdlePriority,T=r.log,it=r.unstable_setDisableYieldValue,gt=null,mt=null;function ht(e){if(typeof T=="function"&&it(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(gt,e)}catch{}}var Bt=Math.clz32?Math.clz32:Kt,wt=Math.log,Zt=Math.LN2;function Kt(e){return e>>>=0,e===0?32:31-(wt(e)/Zt|0)|0}var At=256,Lt=4194304;function Xt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Xt(o):(M&=A,M!==0?u=Xt(M):a||(a=A&~e,a!==0&&(u=Xt(a))))):(A=o&~f,A!==0?u=Xt(A):M!==0?u=Xt(M):a||(a=o&~e,a!==0&&(u=Xt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Nt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=At;return At<<=1,(At&4194048)===0&&(At=256),e}function Rt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function z(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ot(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function St(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,at=e.hiddenUpdates;for(a=M&~a;0<a;){var xt=31-Bt(a),bt=1<<xt;A[xt]=0,H[xt]=-1;var st=at[xt];if(st!==null)for(at[xt]=null,xt=0;xt<st.length;xt++){var rt=st[xt];rt!==null&&(rt.lane&=-536870913)}a&=~bt}o!==0&&pt(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function pt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Ot(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function _i(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var un=Math.random().toString(36).slice(2),fn="__reactFiber$"+un,Je="__reactProps$"+un,Ci="__reactContainer$"+un,As="__reactEvents$"+un,Qo="__reactListeners$"+un,Rs="__reactHandles$"+un,zr="__reactResources$"+un,wi="__reactMarker$"+un;function Cs(e){delete e[fn],delete e[Je],delete e[As],delete e[Qo],delete e[Rs]}function Bi(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ci]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=e_(e);e!==null;){if(a=e[fn])return a;e=e_(e)}return n}e=a,a=e.parentNode}return null}function fa(e){if(e=e[fn]||e[Ci]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ya(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ha(e){var n=e[zr];return n||(n=e[zr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[wi]=!0}var Jo=new Set,$o={};function R(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for($o[e]=n,e=0;e<n.length;e++)Jo.add(n[e])}var ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ut={},$={};function Ct(e){return Ue.call($,e)?!0:Ue.call(ut,e)?!1:ct.test(e)?$[e]=!0:(ut[e]=!0,!1)}function It(e,n,a){if(Ct(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function jt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ft(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ne,ae;function Qt(e){if(ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",ae=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+ae}var he=!1;function Re(e,n){if(!e||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(rt){var st=rt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(rt){st=rt}e.call(bt.prototype)}}else{try{throw Error()}catch(rt){st=rt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(rt){if(rt&&st&&typeof rt.stack=="string")return[rt.stack,st.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var H=M.split(`
`),at=A.split(`
`);for(u=o=0;o<H.length&&!H[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===H.length||u===at.length)for(o=H.length-1,u=at.length-1;1<=o&&0<=u&&H[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(H[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||H[o]!==at[u]){var xt=`
`+H[o].replace(" at new "," at ");return e.displayName&&xt.includes("<anonymous>")&&(xt=xt.replace("<anonymous>",e.displayName)),xt}while(1<=o&&0<=u);break}}}finally{he=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Ye(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return Qt("Activity");default:return""}}function ze(e){try{var n="";do n+=Ye(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function de(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qe(e){var n=ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ye(e){e._valueTracker||(e._valueTracker=qe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ee(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var On=/[\n"\\]/g;function vn(e){return e.replace(On,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+de(n)):e.value!==""+de(n)&&(e.value=""+de(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,de(n)):a!=null?Cn(e,M,de(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+de(A):e.removeAttribute("name")}function Pn(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+de(a):"",n=n!=null?""+de(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+de(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n,a){if(n!=null&&(n=""+de(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+de(a):""}function ws(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ft(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=de(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ov.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Kd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Kd(e,f,n[f])}function $c(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return zv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tu=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function Jd(e){var n=fa(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(ke(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Je]||null;if(!u)throw Error(s(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Rn(o)}break t;case"textarea":En(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var nu=!1;function $d(e,n,a){if(nu)return e(n,a);nu=!0;try{var o=e(n);return o}finally{if(nu=!1,(Ds!==null||Us!==null)&&(Fl(),Ds&&(n=Ds,e=Us,Us=Ds=null,Jd(n),e)))for(n=0;n<e.length;n++)Jd(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Je]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=!1;if(Fi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){iu=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{iu=!1}var da=null,au=null,el=null;function tp(){if(el)return el;var e,n=au,a=n.length,o,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return el=u.slice(e,1<o?1-o:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function ep(){return!1}function kn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:ep,this.isPropagationStopped=ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=kn(Za),Fr=g({},Za,{view:0,detail:0}),Iv=kn(Fr),su,ru,Hr,sl=g({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(su=e.screenX-Hr.screenX,ru=e.screenY-Hr.screenY):ru=su=0,Hr=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),np=kn(sl),Bv=g({},sl,{dataTransfer:0}),Fv=kn(Bv),Hv=g({},Fr,{relatedTarget:0}),ou=kn(Hv),Gv=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=kn(Gv),kv=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=kn(kv),Xv=g({},Za,{data:0}),ip=kn(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function lu(){return Zv}var Kv=g({},Fr,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=kn(Kv),Jv=g({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=kn(Jv),$v=g({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),tx=kn($v),ex=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=kn(ex),ix=g({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=kn(ix),sx=g({},Za,{newState:0,oldState:0}),rx=kn(sx),ox=[9,13,27,32],cu=Fi&&"CompositionEvent"in window,Gr=null;Fi&&"documentMode"in document&&(Gr=document.documentMode);var lx=Fi&&"TextEvent"in window&&!Gr,sp=Fi&&(!cu||Gr&&8<Gr&&11>=Gr),rp=" ",op=!1;function lp(e,n){switch(e){case"keyup":return ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function cx(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,rp);case"textInput":return e=n.data,e===rp&&op?null:e;default:return null}}function ux(e,n){if(Ns)return e==="compositionend"||!cu&&lp(e,n)?(e=tp(),el=au=da=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fx[e.type]:n==="textarea"}function fp(e,n,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,n=Xl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Vr=null,kr=null;function hx(e){Xg(e,0)}function rl(e){var n=Ya(e);if(Rn(n))return e}function hp(e,n){if(e==="change")return n}var dp=!1;if(Fi){var uu;if(Fi){var fu="oninput"in document;if(!fu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),fu=typeof pp.oninput=="function"}uu=fu}else uu=!1;dp=uu&&(!document.documentMode||9<document.documentMode)}function mp(){Vr&&(Vr.detachEvent("onpropertychange",gp),kr=Vr=null)}function gp(e){if(e.propertyName==="value"&&rl(kr)){var n=[];fp(n,kr,e,eu(e)),$d(hx,n)}}function dx(e,n,a){e==="focusin"?(mp(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",gp)):e==="focusout"&&mp()}function px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(kr)}function mx(e,n){if(e==="click")return rl(n)}function gx(e,n){if(e==="input"||e==="change")return rl(n)}function _x(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:_x;function jr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ue.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=_p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vx=Fi&&"documentMode"in document&&11>=document.documentMode,Ls=null,du=null,Xr=null,pu=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pu||Ls==null||Ls!==vi(o)||(o=Ls,"selectionStart"in o&&hu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xr&&jr(Xr,o)||(Xr=o,o=Xl(du,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},mu={},Mp={};Fi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Qa(e){if(mu[e])return mu[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return mu[e]=n[a];return e}var Ep=Qa("animationend"),bp=Qa("animationiteration"),Tp=Qa("animationstart"),xx=Qa("transitionrun"),yx=Qa("transitionstart"),Sx=Qa("transitioncancel"),Ap=Qa("transitionend"),Rp=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function xi(e,n){Rp.set(e,n),R(n,[e])}var Cp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ze(n)},Cp.set(e,n),n)}return{value:e,source:n,stack:ze(n)}}var li=[],Ps=0,_u=0;function ol(){for(var e=Ps,n=_u=Ps=0;n<e;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&wp(a,u,f)}}function ll(e,n,a,o){li[Ps++]=e,li[Ps++]=n,li[Ps++]=a,li[Ps++]=o,_u|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function vu(e,n,a,o){return ll(e,n,a,o),cl(e)}function zs(e,n){return ll(e,null,null,n),cl(e)}function wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<_o)throw _o=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function Mx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Mx(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")xu(e)&&(M=1);else if(typeof e=="string")M=by(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case b:return Ja(a.children,u,f,n);case C:M=8,u|=24;break;case x:return e=Qn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case F:return e=Qn(13,a,n,u),e.elementType=F,e.lanes=f,e;case k:return e=Qn(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case L:M=10;break t;case I:M=9;break t;case U:M=11;break t;case O:M=14;break t;case V:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function Ja(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function yu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Su(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bs=[],Fs=0,fl=null,hl=0,ci=[],ui=0,$a=null,Gi=1,Vi="";function ts(e,n){Bs[Fs++]=hl,Bs[Fs++]=fl,fl=e,hl=n}function Up(e,n,a){ci[ui++]=Gi,ci[ui++]=Vi,ci[ui++]=$a,$a=e;var o=Gi;e=Vi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Gi=1<<32-Bt(n)+u|a<<u|o,Vi=f+e}else Gi=1<<f|a<<u|o,Vi=e}function Mu(e){e.return!==null&&(ts(e,1),Up(e,1,0))}function Eu(e){for(;e===fl;)fl=Bs[--Fs],Bs[Fs]=null,hl=Bs[--Fs],Bs[Fs]=null;for(;e===$a;)$a=ci[--ui],ci[ui]=null,Vi=ci[--ui],ci[ui]=null,Gi=ci[--ui],ci[ui]=null}var zn=null,tn=null,Ne=!1,es=null,Di=!1,bu=Error(s(519));function ns(e){var n=Error(s(418,""));throw Yr(oi(n,e)),bu}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[fn]=e,n[Je]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Me(xo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),ye(n);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),ws(n,o.value,o.defaultValue,o.children),ye(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Zg(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||ns(e)}function Lp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:zn=zn.return}}function Wr(e){if(e!==zn)return!1;if(!Ne)return Lp(e),Ne=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gf(e.type,e.memoizedProps)),a=!a),a&&tn&&ns(e),Lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=Si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,wa(e.type)?(e=Xf,Xf=null,tn=e):tn=n):tn=zn?Si(e.stateNode.nextSibling):null;return!0}function qr(){tn=zn=null,Ne=!1}function Op(){var e=es;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),es=null),e}function Yr(e){es===null?es=[e]:es.push(e)}var Tu=tt(null),is=null,ki=null;function pa(e,n,a){Tt(Tu,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=Tu.current,Et(Tu)}function Au(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ru(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Au(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Au(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;Kn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===yt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&Ru(n,e,a,o),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Pp(is,e)}function pl(e,n){return is===null&&as(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},bx=r.unstable_scheduleCallback,Tx=r.unstable_NormalPriority,hn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new Ex,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&bx(Tx,function(){e.controller.abort()})}var Qr=null,wu=0,Hs=0,Gs=null;function Ax(e,n){if(Qr===null){var a=Qr=[];wu=0,Hs=Nf(),Gs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return wu++,n.then(zp,zp),n}function zp(){if(--wu===0&&Qr!==null){Gs!==null&&(Gs.status="fulfilled");var e=Qr;Qr=null,Hs=0,Gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Rx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ax(e,n),Ip!==null&&Ip(e,n)};var ss=tt(null);function Du(){var e=ss.current;return e!==null?e:We.pooledCache}function ml(e,n){n===null?Tt(ss,ss.current):Tt(ss,n.pool)}function Bp(){var e=Du();return e===null?null:{parent:hn._currentValue,pool:e}}var Jr=Error(s(460)),Fp=Error(s(474)),gl=Error(s(542)),Uu={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function Gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw $r=n,Jr}}var $r=null;function Vp(){if($r===null)throw Error(s(459));var e=$r;return $r=null,e}function kp(e){if(e===Jr||e===gl)throw Error(s(483))}var ma=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(e),wp(e,null,a),n}return ll(e,o,n,a),cl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ot(e,a)}}function Ou(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Pu=!1;function eo(){if(Pu){var e=Gs;if(e!==null)throw e}}function no(e,n,a,o){Pu=!1;var u=e.updateQueue;ma=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,at=H.next;H.next=null,M===null?f=at:M.next=at,M=H;var xt=e.alternate;xt!==null&&(xt=xt.updateQueue,A=xt.lastBaseUpdate,A!==M&&(A===null?xt.firstBaseUpdate=at:A.next=at,xt.lastBaseUpdate=H))}if(f!==null){var bt=u.baseState;M=0,xt=at=H=null,A=f;do{var st=A.lane&-536870913,rt=st!==A.lane;if(rt?(Ee&st)===st:(o&st)===st){st!==0&&st===Hs&&(Pu=!0),xt!==null&&(xt=xt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var oe=e,ie=A;st=n;var Fe=a;switch(ie.tag){case 1:if(oe=ie.payload,typeof oe=="function"){bt=oe.call(Fe,bt,st);break t}bt=oe;break t;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ie.payload,st=typeof oe=="function"?oe.call(Fe,bt,st):oe,st==null)break t;bt=g({},bt,st);break t;case 2:ma=!0}}st=A.callback,st!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[st]:rt.push(st))}else rt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xt===null?(at=xt=rt,H=bt):xt=xt.next=rt,M|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);xt===null&&(H=bt),u.baseState=H,u.firstBaseUpdate=at,u.lastBaseUpdate=xt,f===null&&(u.shared.lanes=0),Ta|=M,e.lanes=M,e.memoizedState=bt}}function jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var Vs=tt(null),vl=tt(0);function Wp(e,n){e=Qi,Tt(vl,e),Tt(Vs,n),Qi=e|n.baseLanes}function zu(){Tt(vl,Qi),Tt(Vs,Vs.current)}function Iu(){Qi=vl.current,Et(Vs),Et(vl)}var va=0,ge=null,Ie=null,on=null,xl=!1,ks=!1,rs=!1,yl=0,io=0,js=null,Cx=0;function nn(){throw Error(s(321))}function Bu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Fu(e,n,a,o,u,f){return va=f,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?wm:Dm,rs=!1,f=a(o,u),rs=!1,ks&&(f=Yp(n,a,o,u)),qp(e),f}function qp(e){B.H=Al;var n=Ie!==null&&Ie.next!==null;if(va=0,on=Ie=ge=null,xl=!1,io=0,js=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&dl(e)&&(xn=!0))}function Yp(e,n,a,o){ge=e;var u=0;do{if(ks&&(js=null),io=0,ks=!1,25<=u)throw Error(s(301));if(u+=1,on=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=Px,f=n(a,o)}while(ks);return f}function wx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(ge.flags|=1024),n}function Hu(){var e=yl!==0;return yl=0,e}function Gu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Vu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}va=0,on=Ie=ge=null,ks=!1,io=yl=0,js=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ge.memoizedState=on=e:on=on.next=e,on}function ln(){if(Ie===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=on===null?ge.memoizedState:on.next;if(n!==null)on=n,Ie=e;else{if(e===null)throw ge.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},on===null?ge.memoizedState=on=e:on=on.next=e}return on}function ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,js===null&&(js=[]),e=Gp(js,e,n),n=ge,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?wm:Dm),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===L)return wn(e)}throw Error(s(438,String(e)))}function ju(e){var n=null,a=ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ge.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ku(),ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=ln();return Xu(n,Ie,e)}function Xu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,H=null,at=n,xt=!1;do{var bt=at.lane&-536870913;if(bt!==at.lane?(Ee&bt)===bt:(va&bt)===bt){var st=at.revertLane;if(st===0)H!==null&&(H=H.next={lane:0,revertLane:0,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),bt===Hs&&(xt=!0);else if((va&st)===st){at=at.next,st===Hs&&(xt=!0);continue}else bt={lane:0,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(A=H=bt,M=f):H=H.next=bt,ge.lanes|=st,Ta|=st;bt=at.action,rs&&a(f,bt),f=at.hasEagerState?at.eagerState:a(f,bt)}else st={lane:bt,revertLane:at.revertLane,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},H===null?(A=H=st,M=f):H=H.next=st,ge.lanes|=bt,Ta|=bt;at=at.next}while(at!==null&&at!==n);if(H===null?M=f:H.next=A,!Kn(f,e.memoizedState)&&(xn=!0,xt&&(a=Gs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=H,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Wu(e){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Kn(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Zp(e,n,a){var o=ge,u=ln(),f=Ne;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Kn((Ie||u).memoizedState,a);M&&(u.memoizedState=a,xn=!0),u=u.queue;var A=Jp.bind(null,o,u,e);if(so(2048,8,A,[e]),u.getSnapshot!==n||M||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,Xs(9,El(),Qp.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(va&124)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ge.updateQueue,n===null?(n=ku(),ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qp(e,n,a,o){n.value=a,n.getSnapshot=o,$p(n)&&tm(e)}function Jp(e,n,a){return a(function(){$p(n)&&tm(e)})}function $p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function tm(e){var n=zs(e,2);n!==null&&ni(n,e,2)}function qu(e){var n=jn();if(typeof e=="function"){var a=e;if(e=a(),rs){ht(!0);try{a()}finally{ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function em(e,n,a,o){return e.baseState=a,Xu(e,Ie,typeof o=="function"?o:Xi)}function Dx(e,n,a,o,u){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};B.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=B.T,M={};B.T=M;try{var A=a(u,o),H=B.S;H!==null&&H(M,A),im(e,n,A)}catch(at){Yu(e,n,at)}finally{B.T=f}}else try{f=a(u,o),im(e,n,f)}catch(at){Yu(e,n,at)}}function im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,n,o)},function(o){return Yu(e,n,o)}):am(e,n,a)}function am(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,nm(e,a)))}function Yu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function om(e,n){if(Ne){var a=We.formState;if(a!==null){t:{var o=ge;if(Ne){if(tn){e:{for(var u=tn,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){tn=Si(u.nextSibling),o=u.data==="F!";break t}}ns(o)}o=!1}o&&(n=a[0])}}return a=jn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=Am.bind(null,ge,o),o.dispatch=a,o=qu(!1),f=$u.bind(null,ge,!1,o.queue),o=jn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Dx.bind(null,ge,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function lm(e){var n=ln();return cm(n,Ie,e)}function cm(e,n,a){if(n=Xu(e,n,rm)[0],e=Ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(M){throw M===Jr?gl:M}else o=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ge.flags|=2048,Xs(9,El(),Ux.bind(null,u,a),null)),[o,f,e]}function Ux(e,n){e.action=n}function um(e){var n=ln(),a=Ie;if(a!==null)return cm(n,a,e);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ge.updateQueue,n===null&&(n=ku(),ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function fm(){return ln().memoizedState}function bl(e,n,a,o){var u=jn();o=o===void 0?null:o,ge.flags|=e,u.memoizedState=Xs(1|n,El(),a,o)}function so(e,n,a,o){var u=ln();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Bu(o,Ie.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(ge.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function hm(e,n){bl(8390656,8,e,n)}function dm(e,n){so(2048,8,e,n)}function pm(e,n){return so(4,2,e,n)}function mm(e,n){return so(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _m(e,n,a){a=a!=null?a.concat([e]):null,so(4,4,gm.bind(null,n,e),a)}function Zu(){}function vm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Bu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Bu(n,o[1]))return o[0];if(o=e(),rs){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o}function Ku(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Mg(),ge.lanes|=e,Ta|=e,a)}function ym(e,n,a,o){return Kn(a,n)?a:Vs.current!==null?(e=Ku(e,a,o),Kn(e,n)||(xn=!0),e):(va&42)===0?(xn=!0,e.memoizedState=a):(e=Mg(),ge.lanes|=e,Ta|=e,n)}function Sm(e,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var M=B.T,A={};B.T=A,$u(e,!1,n,a);try{var H=u(),at=B.S;if(at!==null&&at(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var xt=Rx(H,o);ro(e,n,xt,ei(e))}else ro(e,n,o,ei(e))}catch(bt){ro(e,n,{then:function(){},status:"rejected",reason:bt},ei())}finally{q.p=f,B.T=M}}function Nx(){}function Qu(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Mm(e).queue;Sm(e,u,n,Y,a===null?Nx:function(){return Em(e),a(o)})}function Mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Em(e){var n=Mm(e).next.queue;ro(e,n,{},ei())}function Ju(){return wn(To)}function bm(){return ln().memoizedState}function Tm(){return ln().memoizedState}function Lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=ga(a);var o=_a(n,e,a);o!==null&&(ni(o,n,a),to(o,n,a)),n={cache:Cu()},e.payload=n;return}n=n.return}}function Ox(e,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Rm(n,a):(a=vu(e,n,a,o),a!==null&&(ni(a,e,o),Cm(a,n,o)))}function Am(e,n,a){var o=ei();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Rm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,M))return ll(e,n,u,0),We===null&&ol(),!1}catch{}finally{}if(a=vu(e,n,u,o),a!==null)return ni(a,e,o),Cm(a,n,o),!0}return!1}function $u(e,n,a,o){if(o={lane:2,revertLane:Nf(),action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=vu(e,a,o,2),n!==null&&ni(n,e,2)}function Tl(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function Rm(e,n){ks=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ot(e,a)}}var Al={readContext:wn,use:Sl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},wm={readContext:wn,use:Sl,useCallback:function(e,n){return jn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=jn();n=n===void 0?null:n;var o=e();if(rs){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=jn();if(a!==void 0){var u=a(n);if(rs){ht(!0);try{a(n)}finally{ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ox.bind(null,ge,e),[o.memoizedState,e]},useRef:function(e){var n=jn();return e={current:e},n.memoizedState=e},useState:function(e){e=qu(e);var n=e.queue,a=Am.bind(null,ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Zu,useDeferredValue:function(e,n){var a=jn();return Ku(a,e,n)},useTransition:function(){var e=qu(!1);return e=Sm.bind(null,ge,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ge,u=jn();if(Ne){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Ee&124)!==0||Kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,hm(Jp.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,El(),Qp.bind(null,o,f,a,n),null),a},useId:function(){var e=jn(),n=We.identifierPrefix;if(Ne){var a=Vi,o=Gi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Cx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ju,useFormState:om,useActionState:om,useOptimistic:function(e){var n=jn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=$u.bind(null,ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:ju,useCacheRefresh:function(){return jn().memoizedState=Lx.bind(null,ge)}},Dm={readContext:wn,use:Sl,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Ml,useRef:fm,useState:function(){return Ml(Xi)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=ln();return ym(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ml(Xi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:Ju,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=ln();return em(a,Ie,e,n)},useMemoCache:ju,useCacheRefresh:Tm},Px={readContext:wn,use:Sl,useCallback:vm,useContext:wn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Wu,useRef:fm,useState:function(){return Wu(Xi)},useDebugValue:Zu,useDeferredValue:function(e,n){var a=ln();return Ie===null?Ku(a,e,n):ym(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Wu(Xi)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:Ju,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=ln();return Ie!==null?em(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Tm},Ws=null,oo=0;function Rl(e){var n=oo;return oo+=1,Ws===null&&(Ws=[]),Gp(Ws,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Um(e){var n=e._init;return n(e._payload)}function Nm(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Hi(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function M(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,X,nt,Mt){return X===null||X.tag!==6?(X=yu(nt,Q.mode,Mt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function H(Q,X,nt,Mt){var qt=nt.type;return qt===b?xt(Q,X,nt.props.children,Mt,nt.key):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&Um(qt)===X.type)?(X=u(X,nt.props),lo(X,nt),X.return=Q,X):(X=ul(nt.type,nt.key,nt.props,null,Q.mode,Mt),lo(X,nt),X.return=Q,X)}function at(Q,X,nt,Mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Su(nt,Q.mode,Mt),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function xt(Q,X,nt,Mt,qt){return X===null||X.tag!==7?(X=Ja(nt,Q.mode,Mt,qt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function bt(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=yu(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return nt=ul(X.type,X.key,X.props,null,Q.mode,nt),lo(nt,X),nt.return=Q,nt;case E:return X=Su(X,Q.mode,nt),X.return=Q,X;case V:var Mt=X._init;return X=Mt(X._payload),bt(Q,X,nt)}if(ft(X)||Z(X))return X=Ja(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return bt(Q,Rl(X),nt);if(X.$$typeof===L)return bt(Q,pl(Q,X),nt);Cl(Q,X)}return null}function st(Q,X,nt,Mt){var qt=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return qt!==null?null:A(Q,X,""+nt,Mt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return nt.key===qt?H(Q,X,nt,Mt):null;case E:return nt.key===qt?at(Q,X,nt,Mt):null;case V:return qt=nt._init,nt=qt(nt._payload),st(Q,X,nt,Mt)}if(ft(nt)||Z(nt))return qt!==null?null:xt(Q,X,nt,Mt,null);if(typeof nt.then=="function")return st(Q,X,Rl(nt),Mt);if(nt.$$typeof===L)return st(Q,X,pl(Q,nt),Mt);Cl(Q,nt)}return null}function rt(Q,X,nt,Mt,qt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return Q=Q.get(nt)||null,A(X,Q,""+Mt,qt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case S:return Q=Q.get(Mt.key===null?nt:Mt.key)||null,H(X,Q,Mt,qt);case E:return Q=Q.get(Mt.key===null?nt:Mt.key)||null,at(X,Q,Mt,qt);case V:var ve=Mt._init;return Mt=ve(Mt._payload),rt(Q,X,nt,Mt,qt)}if(ft(Mt)||Z(Mt))return Q=Q.get(nt)||null,xt(X,Q,Mt,qt,null);if(typeof Mt.then=="function")return rt(Q,X,nt,Rl(Mt),qt);if(Mt.$$typeof===L)return rt(Q,X,nt,pl(X,Mt),qt);Cl(X,Mt)}return null}function oe(Q,X,nt,Mt){for(var qt=null,ve=null,$t=X,se=X=0,Sn=null;$t!==null&&se<nt.length;se++){$t.index>se?(Sn=$t,$t=null):Sn=$t.sibling;var Ce=st(Q,$t,nt[se],Mt);if(Ce===null){$t===null&&($t=Sn);break}e&&$t&&Ce.alternate===null&&n(Q,$t),X=f(Ce,X,se),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce,$t=Sn}if(se===nt.length)return a(Q,$t),Ne&&ts(Q,se),qt;if($t===null){for(;se<nt.length;se++)$t=bt(Q,nt[se],Mt),$t!==null&&(X=f($t,X,se),ve===null?qt=$t:ve.sibling=$t,ve=$t);return Ne&&ts(Q,se),qt}for($t=o($t);se<nt.length;se++)Sn=rt($t,Q,se,nt[se],Mt),Sn!==null&&(e&&Sn.alternate!==null&&$t.delete(Sn.key===null?se:Sn.key),X=f(Sn,X,se),ve===null?qt=Sn:ve.sibling=Sn,ve=Sn);return e&&$t.forEach(function(Oa){return n(Q,Oa)}),Ne&&ts(Q,se),qt}function ie(Q,X,nt,Mt){if(nt==null)throw Error(s(151));for(var qt=null,ve=null,$t=X,se=X=0,Sn=null,Ce=nt.next();$t!==null&&!Ce.done;se++,Ce=nt.next()){$t.index>se?(Sn=$t,$t=null):Sn=$t.sibling;var Oa=st(Q,$t,Ce.value,Mt);if(Oa===null){$t===null&&($t=Sn);break}e&&$t&&Oa.alternate===null&&n(Q,$t),X=f(Oa,X,se),ve===null?qt=Oa:ve.sibling=Oa,ve=Oa,$t=Sn}if(Ce.done)return a(Q,$t),Ne&&ts(Q,se),qt;if($t===null){for(;!Ce.done;se++,Ce=nt.next())Ce=bt(Q,Ce.value,Mt),Ce!==null&&(X=f(Ce,X,se),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce);return Ne&&ts(Q,se),qt}for($t=o($t);!Ce.done;se++,Ce=nt.next())Ce=rt($t,Q,se,Ce.value,Mt),Ce!==null&&(e&&Ce.alternate!==null&&$t.delete(Ce.key===null?se:Ce.key),X=f(Ce,X,se),ve===null?qt=Ce:ve.sibling=Ce,ve=Ce);return e&&$t.forEach(function(zy){return n(Q,zy)}),Ne&&ts(Q,se),qt}function Fe(Q,X,nt,Mt){if(typeof nt=="object"&&nt!==null&&nt.type===b&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:t:{for(var qt=nt.key;X!==null;){if(X.key===qt){if(qt=nt.type,qt===b){if(X.tag===7){a(Q,X.sibling),Mt=u(X,nt.props.children),Mt.return=Q,Q=Mt;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&Um(qt)===X.type){a(Q,X.sibling),Mt=u(X,nt.props),lo(Mt,nt),Mt.return=Q,Q=Mt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===b?(Mt=Ja(nt.props.children,Q.mode,Mt,nt.key),Mt.return=Q,Q=Mt):(Mt=ul(nt.type,nt.key,nt.props,null,Q.mode,Mt),lo(Mt,nt),Mt.return=Q,Q=Mt)}return M(Q);case E:t:{for(qt=nt.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),Mt=u(X,nt.children||[]),Mt.return=Q,Q=Mt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}Mt=Su(nt,Q.mode,Mt),Mt.return=Q,Q=Mt}return M(Q);case V:return qt=nt._init,nt=qt(nt._payload),Fe(Q,X,nt,Mt)}if(ft(nt))return oe(Q,X,nt,Mt);if(Z(nt)){if(qt=Z(nt),typeof qt!="function")throw Error(s(150));return nt=qt.call(nt),ie(Q,X,nt,Mt)}if(typeof nt.then=="function")return Fe(Q,X,Rl(nt),Mt);if(nt.$$typeof===L)return Fe(Q,X,pl(Q,nt),Mt);Cl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),Mt=u(X,nt),Mt.return=Q,Q=Mt):(a(Q,X),Mt=yu(nt,Q.mode,Mt),Mt.return=Q,Q=Mt),M(Q)):a(Q,X)}return function(Q,X,nt,Mt){try{oo=0;var qt=Fe(Q,X,nt,Mt);return Ws=null,qt}catch($t){if($t===Jr||$t===gl)throw $t;var ve=Qn(29,$t,null,Q.mode);return ve.lanes=Mt,ve.return=Q,ve}finally{}}}var qs=Nm(!0),Lm=Nm(!1),fi=tt(null),Ui=null;function xa(e){var n=e.alternate;Tt(dn,dn.current&1),Tt(fi,e),Ui===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(Ui=e)}function Om(e){if(e.tag===22){if(Tt(dn,dn.current),Tt(fi,e),Ui===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ui=e)}}else ya()}function ya(){Tt(dn,dn.current),Tt(fi,fi.current)}function Wi(e){Et(fi),Ui===e&&(Ui=null),Et(dn)}var dn=tt(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),u=ga(o);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(ni(n,e,o),to(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),u=ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(ni(n,e,o),to(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(ni(n,e,a),to(n,e,a))}};function Pm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!jr(a,o)||!jr(u,f):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Im(e){Dl(e)}function Bm(e){console.error(e)}function Fm(e){Dl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Gm(e){return e=ga(e),e.tag=3,e}function Vm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function zx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 13:return Ui===null?Rf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Uu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),wf(e,o,u)),!1;case 22:return a.flags|=65536,o===Uu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),wf(e,o,u)),!1}throw Error(s(435,a.tag))}return wf(e,o,u),Rf(),!1}if(Ne)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(e=Error(s(422),{cause:o}),Yr(oi(e,a)))):(o!==bu&&(n=Error(s(423),{cause:o}),Yr(oi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=oi(o,a),u=nf(e.stateNode,o,u),Ou(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=oi(f,a),go===null?go=[f]:go.push(f),en!==4&&(en=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,o,e),Ou(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,o),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var km=Error(s(461)),xn=!1;function bn(e,n,a,o){n.child=e===null?Lm(n,null,a,o):qs(n,e.child,a,o)}function jm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return as(n),o=Fu(e,n,a,M,f,u),A=Hu(),e!==null&&!xn?(Gu(e,n,u),qi(e,n,u)):(Ne&&A&&Mu(n),n.flags|=1,bn(e,n,o,u),n.child)}function Xm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,o,u)):(e=ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ff(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(M,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(jr(f,o)&&e.ref===n.ref)if(xn=!1,n.pendingProps=o=f,ff(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return af(e,n,a,o,u)}function qm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Ym(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):zu(),Om(n);else return n.lanes=n.childLanes=536870912,Ym(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ml(n,f.cachePool),Wp(n,f),ya(),n.memoizedState=null):(e!==null&&ml(n,null),zu(),ya());return bn(e,n,u,a),n.child}function Ym(e,n,a,o){var u=Du();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ml(n,null),zu(),Om(n),e!==null&&Zr(e,n,o,!0),null}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function af(e,n,a,o,u){return as(n),a=Fu(e,n,a,o,void 0,u),o=Hu(),e!==null&&!xn?(Gu(e,n,u),qi(e,n,u)):(Ne&&o&&Mu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Zm(e,n,a,o,u,f){return as(n),n.updateQueue=null,a=Yp(n,o,a,u),qp(e),o=Hu(),e!==null&&!xn?(Gu(e,n,f),qi(e,n,f)):(Ne&&o&&Mu(n),n.flags|=1,bn(e,n,a,f),n.child)}function Km(e,n,a,o,u){if(as(n),n.stateNode===null){var f=Is,M=a.contextType;typeof M=="object"&&M!==null&&(f=wn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Nu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?wn(M):Is,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(tf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&ef.enqueueReplaceState(f,f.state,null),no(n,o,f,u),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=os(a,A);f.props=H;var at=f.context,xt=a.contextType;M=Is,typeof xt=="object"&&xt!==null&&(M=wn(xt));var bt=a.getDerivedStateFromProps;xt=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,xt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||at!==M)&&zm(n,f,o,M),ma=!1;var st=n.memoizedState;f.state=st,no(n,o,f,u),eo(),at=n.memoizedState,A||st!==at||ma?(typeof bt=="function"&&(tf(n,a,bt,o),at=n.memoizedState),(H=ma||Pm(n,a,H,o,st,at,M))?(xt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=M,o=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Lu(e,n),M=n.memoizedProps,xt=os(a,M),f.props=xt,bt=n.pendingProps,st=f.context,at=a.contextType,H=Is,typeof at=="object"&&at!==null&&(H=wn(at)),A=a.getDerivedStateFromProps,(at=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==bt||st!==H)&&zm(n,f,o,H),ma=!1,st=n.memoizedState,f.state=st,no(n,o,f,u),eo();var rt=n.memoizedState;M!==bt||st!==rt||ma||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof A=="function"&&(tf(n,a,A,o),rt=n.memoizedState),(xt=ma||Pm(n,a,xt,o,st,rt,H)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(at||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=H,o=xt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Nl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function Qm(e,n,a,o){return qr(),n.flags|=256,bn(e,n,a,o),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Bp()}}function of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Jm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(u?xa(n):ya(),Ne){var A=tn,H;if(H=A){t:{for(H=A,A=Di;H.nodeType!==8;){if(!A){A=null;break t}if(H=Si(H.nextSibling),H===null){A=null;break t}}A=H}A!==null?(n.memoizedState={dehydrated:A,treeContext:$a!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},H=Qn(18,null,null,0),H.stateNode=A,H.return=n,n.child=H,zn=n,tn=null,H=!0):H=!1}H||ns(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return jf(A)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return A=o.children,o=o.fallback,u?(ya(),u=n.mode,A=Ll({mode:"hidden",children:A},u),o=Ja(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=rf(a),u.childLanes=of(e,M,a),n.memoizedState=sf,o):(xa(n),lf(n,A))}if(H=e.memoizedState,H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),u=o.fallback,A=n.mode,o=Ll({mode:"visible",children:o.children},A),u=Ja(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=rf(a),o.childLanes=of(e,M,a),n.memoizedState=sf,n=u);else if(xa(n),jf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var at=M.dgst;M=at,o=Error(s(419)),o.stack="",o.digest=M,Yr({value:o,source:null,stack:null}),n=cf(e,n,a)}else if(xn||Zr(e,n,a,!1),M=(a&e.childLanes)!==0,xn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:Yt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==H.retryLane))throw H.retryLane=o,zs(e,o),ni(M,e,o),km;A.data==="$?"||Rf(),n=cf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,tn=Si(A.nextSibling),zn=n,Ne=!0,es=null,Di=!1,e!==null&&(ci[ui++]=Gi,ci[ui++]=Vi,ci[ui++]=$a,Gi=e.id,Vi=e.overflow,$a=n),n=lf(n,o.children),n.flags|=4096);return n}return u?(ya(),u=o.fallback,A=n.mode,H=e.child,at=H.sibling,o=Hi(H,{mode:"hidden",children:o.children}),o.subtreeFlags=H.subtreeFlags&65011712,at!==null?u=Hi(at,u):(u=Ja(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=rf(a):(H=A.cachePool,H!==null?(at=hn._currentValue,H=H.parent!==at?{parent:at,pool:at}:H):H=Bp(),A={baseLanes:A.baseLanes|a,cachePool:H}),u.memoizedState=A,u.childLanes=of(e,M,a),n.memoizedState=sf,o):(xa(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function lf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cf(e,n,a){return qs(n,e.child,null,a),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Au(e.return,n,a)}function uf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function tg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(bn(e,n,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Tt(dn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uf(n,!0,a,null,f);break;case"together":uf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Ix(e,n,a){switch(n.tag){case 3:dt(n,n.stateNode.containerInfo),pa(n,hn,e.memoizedState.cache),qr();break;case 27:case 5:zt(n);break;case 4:dt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(xa(n),e=qi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Tt(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,qm(e,n,a);case 24:pa(n,hn,e.memoizedState.cache)}return qi(e,n,a)}function eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!ff(e,a)&&(n.flags&128)===0)return xn=!1,Ix(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Ne&&(n.flags&1048576)!==0&&Up(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")xu(o)?(e=os(o,e),n.tag=1,n=Km(null,n,o,e,a)):(n.tag=0,n=af(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=jm(null,n,o,e,a);break t}else if(u===O){n.tag=14,n=Xm(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(s(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=os(o,n.pendingProps),Km(e,n,o,u,a);case 3:t:{if(dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Lu(e,n),no(n,o,null,a);var M=n.memoizedState;if(o=M.cache,pa(n,hn,o),o!==f.cache&&Ru(n,[hn],a,!0),eo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,o,a);break t}else if(o!==u){u=oi(Error(s(424)),n),Yr(u),n=Qm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Si(e.firstChild),zn=n,Ne=!0,es=null,Di=!0,a=Lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qr(),o===u){n=qi(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=s_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ne||(a=n.type,e=n.pendingProps,o=ql(et.current).createElement(a),o[fn]=n,o[Je]=e,An(o,a,e),rn(o),n.stateNode=o):n.memoizedState=s_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return zt(n),e===null&&Ne&&(o=n.stateNode=n_(n.type,n.pendingProps,et.current),zn=n,Di=!0,u=tn,wa(n.type)?(Xf=u,tn=Si(o.firstChild)):tn=u),bn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ne&&((u=o=tn)&&(o=fy(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,zn=n,tn=Si(o.firstChild),Di=!1,u=!0):u=!1),u||ns(n)),zt(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,Gf(u,f)?o=null:M!==null&&Gf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Fu(e,n,wx,null,null,a),To._currentValue=u),Nl(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Ne&&((e=a=tn)&&(a=hy(a,n.pendingProps,Di),a!==null?(n.stateNode=a,zn=n,tn=null,e=!0):e=!1),e||ns(n)),null;case 13:return Jm(e,n,a);case 4:return dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):bn(e,n,o,a),n.child;case 11:return jm(e,n,n.type,n.pendingProps,a);case 7:return bn(e,n,n.pendingProps,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),bn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=wn(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return tg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ll(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return qm(e,n,a);case 24:return as(n),o=wn(hn),e===null?(u=Du(),u===null&&(u=We,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Nu(n),pa(n,hn,u)):((e.lanes&a)!==0&&(Lu(e,n),no(n,null,null,a),eo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,hn,o)):(o=f.cache,pa(n,hn,o),o!==u.cache&&Ru(n,[hn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(n)){if(n=fi.current,n!==null&&((Ee&4194048)===Ee?Ui!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Ui))throw $r=Uu,Fp;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,Qs|=n)}function co(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch(Eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(hn),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Op())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(Ke(n),ng(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),Ke(n),ng(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),Ke(n),n.flags&=-16777217),null;case 27:Jt(n),a=et.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=Ut.current,Wr(n)?Np(n):(e=n_(u,o,a),n.stateNode=e,Yi(n))}return Ke(n),null;case 5:if(Jt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(e=Ut.current,Wr(n))Np(n);else{switch(u=ql(et.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[fn]=n,e[Je]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Zg(e.nodeValue,a)),e||ns(n)}else e=ql(e).createTextNode(o),e[fn]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),Ke(n),null;case 4:return Dt(),e===null&&zf(n.stateNode.containerInfo),Ke(n),null;case 10:return ji(n.type),Ke(n),null;case 19:if(Et(dn),u=n.memoizedState,u===null)return Ke(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)co(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,co(u,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return Tt(dn,dn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Gt()>Il&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304)}else{if(!o)if(e=wl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),co(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Ne)return Ke(n),null}else 2*Gt()-u.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Gt(),n.sibling=null,e=dn.current,Tt(dn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Wi(n),Iu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Et(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(hn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fx(e,n){switch(Eu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(hn),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Jt(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Et(dn),null;case 4:return Dt(),null;case 10:return ji(n.type),null;case 22:case 23:return Wi(n),Iu(),e!==null&&Et(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(hn),null;case 25:return null;default:return null}}function ig(e,n){switch(Eu(n),n.tag){case 3:ji(hn),Dt();break;case 26:case 27:case 5:Jt(n);break;case 4:Dt();break;case 13:Wi(n);break;case 19:Et(dn);break;case 10:ji(n.type);break;case 22:case 23:Wi(n),Iu(),e!==null&&Et(ss);break;case 24:ji(hn)}}function uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){je(n,n.return,A)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var H=a,at=A;try{at()}catch(xt){je(u,H,xt)}}}o=o.next}while(o!==f)}}catch(xt){je(n,n.return,xt)}}function ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xp(n,a)}catch(o){je(e,e.return,o)}}}function sg(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){je(e,n,o)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){je(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){je(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){je(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){je(e,e.return,u)}}function hf(e,n,a){try{var o=e.stateNode;ry(o,e.type,a,n),o[Je]=n}catch(u){je(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[fn]=e,n[Je]=a}catch(f){je(e,e.return,f)}}var Zi=!1,an=!1,mf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Hx(e,n){if(e=e.containerInfo,Ff=$l,e=yp(e),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,H=-1,at=0,xt=0,bt=e,st=null;e:for(;;){for(var rt;bt!==a||u!==0&&bt.nodeType!==3||(A=M+u),bt!==f||o!==0&&bt.nodeType!==3||(H=M+o),bt.nodeType===3&&(M+=bt.nodeValue.length),(rt=bt.firstChild)!==null;)st=bt,bt=rt;for(;;){if(bt===e)break e;if(st===a&&++at===u&&(A=M),st===f&&++xt===o&&(H=M),(rt=bt.nextSibling)!==null)break;bt=st,st=bt.parentNode}bt=rt}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hf={focusedElem:e,selectionRange:a},$l=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var oe=os(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(oe,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ie){je(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&uo(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){je(a,a.return,M)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){je(a,a.return,M)}}o&64&&ag(a),o&512&&fo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(e,n)}catch(M){je(a,a.return,M)}}break;case 27:n===null&&o&4&&lg(a);case 26:case 5:Ma(e,a),n===null&&o&4&&rg(a),o&512&&fo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&dg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zx.bind(null,a),dy(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||an,u=Zi;var f=an;Zi=o,(an=n)&&!f?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Zi=u,an=f}break;case 30:break;default:Ma(e,a)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Xn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)hg(e,n,a),a=a.sibling}function hg(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(gt,a)}catch{}switch(a.tag){case 26:an||Ni(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:an||Ni(a,n);var o=Ze,u=Xn;wa(a.type)&&(Ze=a.stateNode,Xn=!1),Ki(e,n,a),So(a.stateNode),Ze=o,Xn=u;break;case 5:an||Ni(a,n);case 6:if(o=Ze,u=Xn,Ze=null,Ki(e,n,a),Ze=o,Xn=u,Ze!==null)if(Xn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){je(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){je(a,n,f)}break;case 18:Ze!==null&&(Xn?(e=Ze,t_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):t_(Ze,a.stateNode));break;case 4:o=Ze,u=Xn,Ze=a.stateNode.containerInfo,Xn=!0,Ki(e,n,a),Ze=o,Xn=u;break;case 0:case 11:case 14:case 15:an||Sa(2,a,n),an||Sa(4,a,n),Ki(e,n,a);break;case 1:an||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:an=(o=an)||a.memoizedState!==null,Ki(e,n,a),an=o;break;default:Ki(e,n,a)}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){je(n,n.return,a)}}function Gx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(s(435,e.tag))}}function gf(e,n){var a=Gx(e);n.forEach(function(o){var u=Kx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(wa(A.type)){Ze=A.stateNode,Xn=!1;break t}break;case 5:Ze=A.stateNode,Xn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Xn=!0;break t}A=A.return}if(Ze===null)throw Error(s(160));hg(f,M,u),Ze=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}var yi=null;function pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),$n(e),o&4&&(Sa(3,e,e.return),uo(3,e),Sa(5,e,e.return));break;case 1:Jn(n,e),$n(e),o&512&&(an||a===null||Ni(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Jn(n,e),$n(e),o&512&&(an||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[fn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[fn]=e,rn(f),o=f;break t;case"link":var M=l_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(M=l_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[fn]=e,rn(f),o=f}e.stateNode=o}else c_(u,e.type,e.stateNode);else e.stateNode=o_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?c_(u,e.type,e.stateNode):o_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),$n(e),o&512&&(an||a===null||Ni(a,a.return)),a!==null&&o&4&&hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),$n(e),o&512&&(an||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(rt){je(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(mf=!0);break;case 6:if(Jn(n,e),$n(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){je(e,e.return,rt)}}break;case 3:if(Kl=null,u=yi,yi=Yl(n.containerInfo),Jn(n,e),yi=u,$n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(rt){je(e,e.return,rt)}mf&&(mf=!1,mg(e));break;case 4:o=yi,yi=Yl(e.stateNode.containerInfo),Jn(n,e),$n(e),yi=o;break;case 12:Jn(n,e),$n(e);break;case 13:Jn(n,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mf=Gt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gf(e,o)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,at=Zi,xt=an;if(Zi=at||u,an=xt||H,Jn(n,e),an=xt,Zi=at,$n(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Zi||an||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=H.stateNode;var bt=H.memoizedProps.style,st=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(rt){je(H,H.return,rt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(rt){je(H,H.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,gf(e,a))));break;case 19:Jn(n,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gf(e,o)));break;case 30:break;case 21:break;default:Jn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(og(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=df(e);Pl(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Vn(M,""),a.flags&=-33);var A=df(e);Pl(e,A,M);break;case 3:case 4:var H=a.stateNode.containerInfo,at=df(e);pf(e,at,H);break;default:throw Error(s(161))}}catch(xt){je(e,e.return,xt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ls(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),ls(n);break;case 27:So(n.stateNode);case 26:case 5:Ni(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ea(u,f,a),uo(4,f);break;case 1:if(Ea(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(at){je(o,o.return,at)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)jp(H[u],A)}catch(at){je(o,o.return,at)}}a&&M&64&&ag(f),fo(f,f.return);break;case 27:lg(f);case 26:case 5:Ea(u,f,a),a&&o===null&&M&4&&rg(f),fo(f,f.return);break;case 12:Ea(u,f,a);break;case 13:Ea(u,f,a),a&&M&4&&dg(u,f);break;case 22:f.memoizedState===null&&Ea(u,f,a),fo(f,f.return);break;case 30:break;default:Ea(u,f,a)}n=n.sibling}}function _f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(e,n,a,o),n=n.sibling}function gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&uo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){je(n,n.return,H)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,o):ho(e,n):f._visibility&2?Li(e,n,a,o):(f._visibility|=2,Ys(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&_f(M,n);break;case 24:Li(e,n,a,o),u&2048&&vf(n.alternate,n);break;default:Li(e,n,a,o)}}function Ys(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,H=o,at=M.flags;switch(M.tag){case 0:case 11:case 15:Ys(f,M,A,H,u),uo(8,M);break;case 23:break;case 22:var xt=M.stateNode;M.memoizedState!==null?xt._visibility&2?Ys(f,M,A,H,u):ho(f,M):(xt._visibility|=2,Ys(f,M,A,H,u)),u&&at&2048&&_f(M.alternate,M);break;case 24:Ys(f,M,A,H,u),u&&at&2048&&vf(M.alternate,M);break;default:Ys(f,M,A,H,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&_f(o.alternate,o);break;case 24:ho(a,o),u&2048&&vf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Zs(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 26:Zs(e),e.flags&po&&e.memoizedState!==null&&Ay(yi,e.memoizedState,e.memoizedProps);break;case 5:Zs(e);break;case 3:case 4:var n=yi;yi=Yl(e.stateNode.containerInfo),Zs(e),yi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Zs(e),po=n):Zs(e));break;default:Zs(e)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,yg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):mo(e);break;default:mo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,yg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function yg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(fg(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var Vx={getCacheForType:function(e){var n=wn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},kx=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,Se=null,Ee=0,Oe=0,ti=null,ba=!1,Ks=!1,xf=!1,Qi=0,en=0,Ta=0,cs=0,yf=0,hi=0,Qs=0,go=null,Wn=null,Sf=!1,Mf=0,Il=1/0,Bl=null,Aa=null,Tn=0,Ra=null,Js=null,$s=0,Ef=0,bf=null,Sg=null,_o=0,Tf=null;function ei(){if((Le&2)!==0&&Ee!==0)return Ee&-Ee;if(B.T!==null){var e=Hs;return e!==0?e:Nf()}return Te()}function Mg(){hi===0&&(hi=(Ee&536870912)===0||Ne?W():536870912);var e=fi.current;return e!==null&&(e.flags|=32),hi}function ni(e,n,a){(e===We&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(tr(e,0),Ca(e,Ee,hi,!1)),ot(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(cs|=a),en===4&&Ca(e,Ee,hi,!1)),Oi(e))}function Eg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Nt(e,n),u=o?Wx(e,n):Cf(e,n,!0),f=o;do{if(u===0){Ks&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jx(a)){u=Cf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=go;var H=A.current.memoizedState.isDehydrated;if(H&&(tr(A,M).flags|=256),M=Cf(A,M,!1),M!==2){if(xf&&!H){A.errorRecoveryDisabledLanes|=f,cs|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){tr(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,hi,!ba);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Mf+300-Gt(),10<u)){if(Ca(o,n,hi,!ba),Wt(o,0,!0)!==0)break t;o.timeoutHandle=Jg(bg.bind(null,o,a,Wn,Bl,Sf,n,hi,cs,Qs,ba,f,2,-0,0),u);break t}bg(o,a,Wn,Bl,Sf,n,hi,cs,Qs,ba,f,0,-0,0)}}break}while(!0);Oi(e)}function bg(e,n,a,o,u,f,M,A,H,at,xt,bt,st,rt){if(e.timeoutHandle=-1,bt=n.subtreeFlags,(bt&8192||(bt&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Ty},_g(n),bt=Ry(),bt!==null)){e.cancelPendingCommit=bt(Ug.bind(null,e,n,f,a,o,u,M,A,H,xt,1,st,rt)),Ca(e,f,M,!at);return}Ug(e,n,f,a,o,u,M,A,H)}function jx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~yf,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&pt(e,a,n)}function Fl(){return(Le&6)===0?(vo(0),!1):!0}function Af(){if(Se!==null){if(Oe===0)var e=Se.return;else e=Se,ki=is=null,Vu(e),Ws=null,oo=0,e=Se;for(;e!==null;)ig(e.alternate,e),e=e.return;Se=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ly(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Af(),We=e,Se=a=Hi(e.current,null),Ee=n,Oe=0,ti=null,ba=!1,Ks=Nt(e,n),xf=!1,Qs=hi=yf=cs=Ta=en=0,Wn=go=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),f=1<<u;n|=e[u],o&=~f}return Qi=n,ol(),a}function Tg(e,n){ge=null,B.H=Al,n===Jr||n===gl?(n=Vp(),Oe=3):n===Fp?(n=Vp(),Oe=4):Oe=n===km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Se===null&&(en=1,Ul(e,oi(n,e.current)))}function Ag(){var e=B.H;return B.H=Al,e===null?Al:e}function Rg(){var e=B.A;return B.A=Vx,e}function Rf(){en=4,ba||(Ee&4194048)!==Ee&&fi.current!==null||(Ks=!0),(Ta&134217727)===0&&(cs&134217727)===0||We===null||Ca(We,Ee,hi,!1)}function Cf(e,n,a){var o=Le;Le|=2;var u=Ag(),f=Rg();(We!==e||Ee!==n)&&(Bl=null,tr(e,n)),n=!1;var M=en;t:do try{if(Oe!==0&&Se!==null){var A=Se,H=ti;switch(Oe){case 8:Af(),M=6;break t;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var at=Oe;if(Oe=0,ti=null,er(e,A,H,at),a&&Ks){M=0;break t}break;default:at=Oe,Oe=0,ti=null,er(e,A,H,at)}}Xx(),M=en;break}catch(xt){Tg(e,xt)}while(!0);return n&&e.shellSuspendCounter++,ki=is=null,Le=o,B.H=u,B.A=f,Se===null&&(We=null,Ee=0,ol()),M}function Xx(){for(;Se!==null;)Cg(Se)}function Wx(e,n){var a=Le;Le|=2;var o=Ag(),u=Rg();We!==e||Ee!==n?(Bl=null,Il=Gt()+500,tr(e,n)):Ks=Nt(e,n);t:do try{if(Oe!==0&&Se!==null){n=Se;var f=ti;e:switch(Oe){case 1:Oe=0,ti=null,er(e,n,f,1);break;case 2:case 9:if(Hp(f)){Oe=0,ti=null,wg(n);break}n=function(){Oe!==2&&Oe!==9||We!==e||(Oe=7),Oi(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Hp(f)?(Oe=0,ti=null,wg(n)):(Oe=0,ti=null,er(e,n,f,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||u_(M)){Oe=0,ti=null;var H=A.sibling;if(H!==null)Se=H;else{var at=A.return;at!==null?(Se=at,Hl(at)):Se=null}break e}}Oe=0,ti=null,er(e,n,f,5);break;case 6:Oe=0,ti=null,er(e,n,f,6);break;case 8:Af(),en=6;break t;default:throw Error(s(462))}}qx();break}catch(xt){Tg(e,xt)}while(!0);return ki=is=null,B.H=o,B.A=u,Le=a,Se!==null?0:(We=null,Ee=0,ol(),en)}function qx(){for(;Se!==null&&!re();)Cg(Se)}function Cg(e){var n=eg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Hl(e):Se=n}function wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Vu(n);default:ig(a,n),n=Se=Dp(n,Qi),n=eg(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):Se=n}function er(e,n,a,o){ki=is=null,Vu(n),Ws=null,oo=0;var u=n.return;try{if(zx(e,u,n,a,Ee)){en=1,Ul(e,oi(a,e.current)),Se=null;return}}catch(f){if(u!==null)throw Se=u,f;en=1,Ul(e,oi(a,e.current)),Se=null;return}n.flags&32768?(Ne||o===1?e=!0:Ks||(Ee&536870912)!==0?e=!1:(ba=e=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Dg(n,ba);return}e=n.return;var a=Bx(n.alternate,n,Qi);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);en===0&&(en=5)}function Dg(e,n){do{var a=Fx(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);en=6,Se=null}function Ug(e,n,a,o,u,f,M,A,H){e.cancelPendingCommit=null;do Gl();while(Tn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=_u,St(e,a,f,M,A,H),e===We&&(Se=We=null,Ee=0),Js=n,Ra=e,$s=a,Ef=f,bf=u,Sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qx(Ve,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=q.p,q.p=2,M=Le,Le|=4;try{Hx(e,n,a)}finally{Le=M,q.p=u,B.T=o}}Tn=1,Ng(),Lg(),Og()}}function Ng(){if(Tn===1){Tn=0;var e=Ra,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=q.p;q.p=2;var u=Le;Le|=4;try{pg(n,e);var f=Hf,M=yp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&xp(A.ownerDocument.documentElement,A)){if(H!==null&&hu(A)){var at=H.start,xt=H.end;if(xt===void 0&&(xt=at),"selectionStart"in A)A.selectionStart=at,A.selectionEnd=Math.min(xt,A.value.length);else{var bt=A.ownerDocument||document,st=bt&&bt.defaultView||window;if(st.getSelection){var rt=st.getSelection(),oe=A.textContent.length,ie=Math.min(H.start,oe),Fe=H.end===void 0?ie:Math.min(H.end,oe);!rt.extend&&ie>Fe&&(M=Fe,Fe=ie,ie=M);var Q=vp(A,ie),X=vp(A,Fe);if(Q&&X&&(rt.rangeCount!==1||rt.anchorNode!==Q.node||rt.anchorOffset!==Q.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var nt=bt.createRange();nt.setStart(Q.node,Q.offset),rt.removeAllRanges(),ie>Fe?(rt.addRange(nt),rt.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),rt.addRange(nt))}}}}for(bt=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&bt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<bt.length;A++){var Mt=bt[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}$l=!!Ff,Hf=Ff=null}finally{Le=u,q.p=o,B.T=a}}e.current=n,Tn=2}}function Lg(){if(Tn===2){Tn=0;var e=Ra,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=q.p;q.p=2;var u=Le;Le|=4;try{ug(e,n.alternate,n)}finally{Le=u,q.p=o,B.T=a}}Tn=3}}function Og(){if(Tn===4||Tn===3){Tn=0,te();var e=Ra,n=Js,a=$s,o=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Tn=5:(Tn=0,Js=Ra=null,Pg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Ae(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(gt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=q.p,q.p=2,B.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{B.T=n,q.p=u}}($s&3)!==0&&Gl(),Oi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Tf?_o++:(_o=0,Tf=e):_o=0,vo(0)}}function Pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Gl(e){return Ng(),Lg(),Og(),zg()}function zg(){if(Tn!==5)return!1;var e=Ra,n=Ef;Ef=0;var a=Ae($s),o=B.T,u=q.p;try{q.p=32>a?32:a,B.T=null,a=bf,bf=null;var f=Ra,M=$s;if(Tn=0,Js=Ra=null,$s=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,xg(f.current),gg(f,f.current,M,a),Le=A,vo(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(gt,f)}catch{}return!0}finally{q.p=u,B.T=o,Pg(e,n)}}function Ig(e,n,a){n=oi(a,n),n=nf(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(ot(e,2),Oi(e))}function je(e,n,a){if(e.tag===3)Ig(e,e,a);else for(;n!==null;){if(n.tag===3){Ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=oi(a,e),a=Gm(2),o=_a(n,a,2),o!==null&&(Vm(a,o,n,e),ot(o,2),Oi(o));break}}n=n.return}}function wf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(xf=!0,u.add(a),e=Yx.bind(null,e,n,a),n.then(e,e))}function Yx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ee&a)===a&&(en===4||en===3&&(Ee&62914560)===Ee&&300>Gt()-Mf?(Le&2)===0&&tr(e,0):yf|=a,Qs===Ee&&(Qs=0)),Oi(e)}function Bg(e,n){n===0&&(n=Rt()),e=zs(e,n),e!==null&&(ot(e,n),Oi(e))}function Zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bg(e,a)}function Kx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Bg(e,a)}function Qx(e,n){return G(e,n)}var Vl=null,nr=null,Df=!1,kl=!1,Uf=!1,us=0;function Oi(e){e!==nr&&e.next===null&&(nr===null?Vl=nr=e:nr=nr.next=e),kl=!0,Df||(Df=!0,$x())}function vo(e,n){if(!Uf&&kl){Uf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Vg(o,f))}else f=Ee,f=Wt(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Nt(o,f)||(a=!0,Vg(o,f));o=o.next}while(a);Uf=!1}}function Jx(){Fg()}function Fg(){kl=Df=!1;var e=0;us!==0&&(oy()&&(e=us),us=0);for(var n=Gt(),a=null,o=Vl;o!==null;){var u=o.next,f=Hg(o,n);f===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(nr=a)):(a=o,(e!==0||(f&3)!==0)&&(kl=!0)),o=u}vo(e)}function Hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Bt(f),A=1<<M,H=u[M];H===-1?((A&a)===0||(A&o)!==0)&&(u[M]=ce(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Ee,a=Wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&be(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&be(o),Ae(a)){case 2:case 8:a=le;break;case 32:a=Ve;break;case 268435456:a=P;break;default:a=Ve}return o=Gg.bind(null,e),a=G(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&be(o),e.callbackPriority=2,e.callbackNode=null,2}function Gg(e,n){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=Ee;return o=Wt(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Eg(e,o,n),Hg(e,Gt()),e.callbackNode!=null&&e.callbackNode===a?Gg.bind(null,e):null)}function Vg(e,n){if(Gl())return null;Eg(e,n,!0)}function $x(){cy(function(){(Le&6)!==0?G(kt,Jx):Fg()})}function Nf(){return us===0&&(us=W()),us}function kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=kg((u[Je]||null).action),M=o.submitter;M&&(n=(n=M[Je]||null)?kg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new al("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(us!==0){var H=M?jg(u,M):new FormData(u);Qu(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=M?jg(u,M):new FormData(u),Qu(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Lf=0;Lf<gu.length;Lf++){var Of=gu[Lf],ey=Of.toLowerCase(),ny=Of[0].toUpperCase()+Of.slice(1);xi(ey,"on"+ny)}xi(Ep,"onAnimationEnd"),xi(bp,"onAnimationIteration"),xi(Tp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(xx,"onTransitionRun"),xi(yx,"onTransitionStart"),xi(Sx,"onTransitionCancel"),xi(Ap,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],H=A.instance,at=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(xt){Dl(xt)}u.currentTarget=null,f=H}else for(M=0;M<o.length;M++){if(A=o[M],H=A.instance,at=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=at;try{f(u)}catch(xt){Dl(xt)}u.currentTarget=null,f=H}}}}function Me(e,n){var a=n[As];a===void 0&&(a=n[As]=new Set);var o=e+"__bubble";a.has(o)||(Wg(n,e,2,!1),a.add(o))}function Pf(e,n,a){var o=0;n&&(o|=4),Wg(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function zf(e){if(!e[jl]){e[jl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||Pf(a,!1,e),Pf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Pf("selectionchange",!1,n))}}function Wg(e,n,a,o){switch(g_(n)){case 2:var u=Dy;break;case 8:u=Uy;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var H=M.tag;if((H===3||H===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Bi(A),M===null)return;if(H=M.tag,H===5||H===6||H===26||H===27){o=f=M;continue t}A=A.parentNode}}o=o.return}$d(function(){var at=f,xt=eu(a),bt=[];t:{var st=Rp.get(e);if(st!==void 0){var rt=al,oe=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":rt=Qv;break;case"focusin":oe="focus",rt=ou;break;case"focusout":oe="blur",rt=ou;break;case"beforeblur":case"afterblur":rt=ou;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=tx;break;case Ep:case bp:case Tp:rt=Vv;break;case Ap:rt=nx;break;case"scroll":case"scrollend":rt=Iv;break;case"wheel":rt=ax;break;case"copy":case"cut":case"paste":rt=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=ap;break;case"toggle":case"beforetoggle":rt=rx}var ie=(n&4)!==0,Fe=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?st!==null?st+"Capture":null:st;ie=[];for(var X=at,nt;X!==null;){var Mt=X;if(nt=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||nt===null||Q===null||(Mt=Ir(X,Q),Mt!=null&&ie.push(yo(X,Mt,nt))),Fe)break;X=X.return}0<ie.length&&(st=new rt(st,oe,null,a,xt),bt.push({event:st,listeners:ie}))}}if((n&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",st&&a!==tu&&(oe=a.relatedTarget||a.fromElement)&&(Bi(oe)||oe[Ci]))break t;if((rt||st)&&(st=xt.window===xt?xt:(st=xt.ownerDocument)?st.defaultView||st.parentWindow:window,rt?(oe=a.relatedTarget||a.toElement,rt=at,oe=oe?Bi(oe):null,oe!==null&&(Fe=c(oe),ie=oe.tag,oe!==Fe||ie!==5&&ie!==27&&ie!==6)&&(oe=null)):(rt=null,oe=at),rt!==oe)){if(ie=np,Mt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ap,Mt="onPointerLeave",Q="onPointerEnter",X="pointer"),Fe=rt==null?st:Ya(rt),nt=oe==null?st:Ya(oe),st=new ie(Mt,X+"leave",rt,a,xt),st.target=Fe,st.relatedTarget=nt,Mt=null,Bi(xt)===at&&(ie=new ie(Q,X+"enter",oe,a,xt),ie.target=nt,ie.relatedTarget=Fe,Mt=ie),Fe=Mt,rt&&oe)e:{for(ie=rt,Q=oe,X=0,nt=ie;nt;nt=ir(nt))X++;for(nt=0,Mt=Q;Mt;Mt=ir(Mt))nt++;for(;0<X-nt;)ie=ir(ie),X--;for(;0<nt-X;)Q=ir(Q),nt--;for(;X--;){if(ie===Q||Q!==null&&ie===Q.alternate)break e;ie=ir(ie),Q=ir(Q)}ie=null}else ie=null;rt!==null&&qg(bt,st,rt,ie,!1),oe!==null&&Fe!==null&&qg(bt,Fe,oe,ie,!0)}}t:{if(st=at?Ya(at):window,rt=st.nodeName&&st.nodeName.toLowerCase(),rt==="select"||rt==="input"&&st.type==="file")var qt=hp;else if(up(st))if(dp)qt=gx;else{qt=px;var ve=dx}else rt=st.nodeName,!rt||rt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?at&&$c(at.elementType)&&(qt=hp):qt=mx;if(qt&&(qt=qt(e,at))){fp(bt,qt,a,xt);break t}ve&&ve(e,st,at),e==="focusout"&&at&&st.type==="number"&&at.memoizedProps.value!=null&&Cn(st,"number",st.value)}switch(ve=at?Ya(at):window,e){case"focusin":(up(ve)||ve.contentEditable==="true")&&(Ls=ve,du=at,Xr=null);break;case"focusout":Xr=du=Ls=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,Sp(bt,a,xt);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Sp(bt,a,xt)}var $t;if(cu)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else Ns?lp(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(sp&&a.locale!=="ko"&&(Ns||se!=="onCompositionStart"?se==="onCompositionEnd"&&Ns&&($t=tp()):(da=xt,au="value"in da?da.value:da.textContent,Ns=!0)),ve=Xl(at,se),0<ve.length&&(se=new ip(se,e,null,a,xt),bt.push({event:se,listeners:ve}),$t?se.data=$t:($t=cp(a),$t!==null&&(se.data=$t)))),($t=lx?cx(e,a):ux(e,a))&&(se=Xl(at,"onBeforeInput"),0<se.length&&(ve=new ip("onBeforeInput","beforeinput",null,a,xt),bt.push({event:ve,listeners:se}),ve.data=$t)),ty(bt,e,at,a,xt)}Xg(bt,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(e,a),u!=null&&o.unshift(yo(e,u,f)),u=Ir(e,n),u!=null&&o.push(yo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qg(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,H=A.alternate,at=A.stateNode;if(A=A.tag,H!==null&&H===o)break;A!==5&&A!==26&&A!==27||at===null||(H=at,u?(at=Ir(a,f),at!=null&&M.unshift(yo(a,at,H))):u||(at=Ir(a,f),at!=null&&M.push(yo(a,at,H)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(sy,"")}function Zg(e,n){return n=Yg(n),Yg(e)===n}function Wl(){}function Be(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":jt(e,"class",o);break;case"tabIndex":jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":jt(e,a,o);break;case"style":Qd(e,o,f);break;case"data":if(n!=="object"){jt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),It(e,"popover",o);break;case"xlinkActuate":Ft(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ft(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ft(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ft(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ft(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ft(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ft(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":It(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pv.get(a)||a,It(e,a,o))}}function Bf(e,n,a,o,u,f){switch(a){case"style":Qd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Je]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):It(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,f,M,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=M=u=null,H=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var xt=a[o];if(xt!=null)switch(o){case"name":u=xt;break;case"type":M=xt;break;case"checked":H=xt;break;case"defaultChecked":at=xt;break;case"value":f=xt;break;case"defaultValue":A=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:Be(e,n,o,xt,a,null)}}Pn(e,f,A,H,at,M,u,!1),ye(e);return;case"select":Me("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Be(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?$e(e,!!o,n,!1):a!=null&&$e(e,!!o,a,!0);return;case"textarea":Me("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Be(e,n,M,A,a,null)}ws(e,o,u,f),ye(e);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(o=a[H],o!=null))switch(H){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,H,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<xo.length;o++)Me(xo[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(e,n,at,o,a,null)}return;default:if($c(n)){for(xt in a)a.hasOwnProperty(xt)&&(o=a[xt],o!==void 0&&Bf(e,n,xt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,H=null,at=null,xt=null;for(rt in a){var bt=a[rt];if(a.hasOwnProperty(rt)&&bt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":H=bt;default:o.hasOwnProperty(rt)||Be(e,n,rt,null,o,bt)}}for(var st in o){var rt=o[st];if(bt=a[st],o.hasOwnProperty(st)&&(rt!=null||bt!=null))switch(st){case"type":f=rt;break;case"name":u=rt;break;case"checked":at=rt;break;case"defaultChecked":xt=rt;break;case"value":M=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==bt&&Be(e,n,st,rt,o,bt)}}ke(e,M,A,H,at,xt,f,u);return;case"select":rt=M=A=st=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":rt=H;default:o.hasOwnProperty(f)||Be(e,n,f,null,o,H)}for(u in o)if(f=o[u],H=a[u],o.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":st=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==H&&Be(e,n,u,f,o,H)}n=A,a=M,o=rt,st!=null?$e(e,!!a,st,!1):!!o!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":rt=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":st=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Be(e,n,M,u,o,f)}En(e,st,rt);return;case"option":for(var oe in a)if(st=a[oe],a.hasOwnProperty(oe)&&st!=null&&!o.hasOwnProperty(oe))switch(oe){case"selected":e.selected=!1;break;default:Be(e,n,oe,null,o,st)}for(H in o)if(st=o[H],rt=a[H],o.hasOwnProperty(H)&&st!==rt&&(st!=null||rt!=null))switch(H){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Be(e,n,H,st,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)st=a[ie],a.hasOwnProperty(ie)&&st!=null&&!o.hasOwnProperty(ie)&&Be(e,n,ie,null,o,st);for(at in o)if(st=o[at],rt=a[at],o.hasOwnProperty(at)&&st!==rt&&(st!=null||rt!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Be(e,n,at,st,o,rt)}return;default:if($c(n)){for(var Fe in a)st=a[Fe],a.hasOwnProperty(Fe)&&st!==void 0&&!o.hasOwnProperty(Fe)&&Bf(e,n,Fe,void 0,o,st);for(xt in o)st=o[xt],rt=a[xt],!o.hasOwnProperty(xt)||st===rt||st===void 0&&rt===void 0||Bf(e,n,xt,st,o,rt);return}}for(var Q in a)st=a[Q],a.hasOwnProperty(Q)&&st!=null&&!o.hasOwnProperty(Q)&&Be(e,n,Q,null,o,st);for(bt in o)st=o[bt],rt=a[bt],!o.hasOwnProperty(bt)||st===rt||st==null&&rt==null||Be(e,n,bt,st,o,rt)}var Ff=null,Hf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vf=null;function oy(){var e=window.event;return e&&e.type==="popstate"?e===Vf?!1:(Vf=e,!0):(Vf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(uy)}:Jg;function uy(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function t_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&So(M.documentElement),a&2&&So(M.body),a&4)for(a=M.head,So(a),M=a.firstChild;M;){var A=M.nextSibling,H=M.nodeName;M[wi]||H==="SCRIPT"||H==="STYLE"||H==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),wo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);wo(n)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function hy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Xf=null;function e_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function n_(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cs(e)}var di=new Map,i_=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=q.d;q.d={f:py,r:my,D:gy,C:_y,L:vy,m:xy,X:Sy,S:yy,M:My};function py(){var e=Ji.f(),n=Fl();return e||n}function my(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?Em(n):Ji.r(e)}var ar=typeof document>"u"?null:document;function a_(e,n,a){var o=ar;if(o&&typeof n=="string"&&n){var u=vn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),i_.has(u)||(i_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),rn(n),o.head.appendChild(n)))}}function gy(e){Ji.D(e),a_("dns-prefetch",e,null)}function _y(e,n){Ji.C(e,n),a_("preconnect",e,n)}function vy(e,n,a){Ji.L(e,n,a);var o=ar;if(o&&e&&n){var u='link[rel="preload"][as="'+vn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vn(a.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var f=u;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),An(n,"link",e),rn(n),o.head.appendChild(n)))}}function xy(e,n){Ji.m(e,n);var a=ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+vn(o)+'"][href="'+vn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),An(o,"link",e),rn(o),a.head.appendChild(o)}}}function yy(e,n,a){Ji.S(e,n,a);var o=ar;if(o&&e){var u=ha(o).hoistableStyles,f=sr(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Mo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Wf(e,a);var H=M=o.createElement("link");rn(H),An(H,"link",e),H._p=new Promise(function(at,xt){H.onload=at,H.onerror=xt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function Sy(e,n){Ji.X(e,n);var a=ar;if(a&&e){var o=ha(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&qf(e,n),f=a.createElement("script"),rn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function My(e,n){Ji.M(e,n);var a=ar;if(a&&e){var o=ha(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&qf(e,n),f=a.createElement("script"),rn(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function s_(e,n,a,o){var u=(u=et.current)?Yl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=ha(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Mo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||Ey(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+vn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ey(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),rn(n),e.head.appendChild(n))}function rr(e){return'[src="'+vn(e)+'"]'}function Eo(e){return"script[async]"+e}function o_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+vn(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),An(o,"style",u),Zl(o,a.precedence,e),n.instance=o;case"stylesheet":u=sr(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,rn(f),f;o=r_(a),(u=di.get(u))&&Wf(o,u),f=(e.ownerDocument||e).createElement("link"),rn(f);var M=f;return M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),An(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(u=e.querySelector(Eo(f)))?(n.instance=u,rn(u),u):(o=a,(u=di.get(f))&&(o=g({},a),qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,e));return n.instance}function Zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function l_(e,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wi]||f[fn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function c_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function by(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Ty(){}function Ay(e,n,a){if(bo===null)throw Error(s(475));var o=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=sr(a.href),f=e.querySelector(Mo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ql.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,rn(f);return}f=e.ownerDocument||e,a=r_(a),(u=di.get(u))&&Wf(a,u),f=f.createElement("link"),rn(f);var M=f;M._p=new Promise(function(A,H){M.onload=A,M.onerror=H}),An(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ql.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ry(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Yf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Yf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Yf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(Cy,e),Jl=null,Ql.call(e))}function Cy(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var o=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function wy(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=z(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=z(0),this.hiddenUpdates=z(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function f_(e,n,a,o,u,f,M,A,H,at,xt,bt){return e=new wy(e,n,a,M,A,H,at,bt),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Nu(f),e}function h_(e){return e?(e=Is,e):Is}function d_(e,n,a,o,u,f){u=h_(u),o.context===null?o.context=u:o.pendingContext=u,o=ga(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=_a(e,o,n),a!==null&&(ni(a,e,n),to(a,e,n))}function p_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){p_(e,n),(e=e.alternate)&&p_(e,n)}function m_(e){if(e.tag===13){var n=zs(e,67108864);n!==null&&ni(n,e,67108864),Zf(e,67108864)}}var $l=!0;function Dy(e,n,a,o){var u=B.T;B.T=null;var f=q.p;try{q.p=2,Kf(e,n,a,o)}finally{q.p=f,B.T=u}}function Uy(e,n,a,o){var u=B.T;B.T=null;var f=q.p;try{q.p=8,Kf(e,n,a,o)}finally{q.p=f,B.T=u}}function Kf(e,n,a,o){if($l){var u=Qf(o);if(u===null)If(e,n,o,tc,a),__(e,o);else if(Ly(u,e,n,a,o))o.stopPropagation();else if(__(e,o),n&4&&-1<Ny.indexOf(e)){for(;u!==null;){var f=fa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Xt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var H=1<<31-Bt(M);A.entanglements[1]|=H,M&=~H}Oi(f),(Le&6)===0&&(Il=Gt()+500,vo(0))}}break;case 13:A=zs(f,2),A!==null&&ni(A,f,2),Fl(),Zf(f,2)}if(f=Qf(o),f===null&&If(e,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else If(e,n,o,null,a)}}function Qf(e){return e=eu(e),Jf(e)}var tc=null;function Jf(e){if(tc=null,e=Bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pe()){case kt:return 2;case le:return 8;case Ve:case Xe:return 32;case P:return 268435456;default:return 32}default:return 32}}var $f=!1,Da=null,Ua=null,Na=null,Ao=new Map,Ro=new Map,La=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=fa(n),n!==null&&m_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ly(e,n,a,o,u){switch(n){case"focusin":return Da=Co(Da,e,n,a,o,u),!0;case"dragenter":return Ua=Co(Ua,e,n,a,o,u),!0;case"mouseover":return Na=Co(Na,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function v_(e){var n=Bi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,_i(e.priority,function(){if(a.tag===13){var o=ei();o=Yt(o);var u=zs(a,o);u!==null&&ni(u,a,o),Zf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);tu=o,a.target.dispatchEvent(o),tu=null}else return n=fa(a),n!==null&&m_(n),e.blockedOn=a,!1;n.shift()}return!0}function x_(e,n,a){ec(e)&&a.delete(n)}function Oy(){$f=!1,Da!==null&&ec(Da)&&(Da=null),Ua!==null&&ec(Ua)&&(Ua=null),Na!==null&&ec(Na)&&(Na=null),Ao.forEach(x_),Ro.forEach(x_)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var ic=null;function y_(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var f=fa(a);f!==null&&(e.splice(n,3),n-=3,Qu(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wo(e){function n(H){return nc(H,e)}Da!==null&&nc(Da,e),Ua!==null&&nc(Ua,e),Na!==null&&nc(Na,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[Je]||null;if(typeof f=="function")M||y_(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[Je]||null)A=M.formAction;else if(Jf(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),y_(a)}}}function th(e){this._internalRoot=e}ac.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();d_(a,o,e,n,null,null)},ac.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;d_(e.current,2,null,e,null,null),Fl(),n[Ci]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&v_(e)}};var S_=t.version;if(S_!=="19.1.1")throw Error(s(527,S_,"19.1.1"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{gt=sc.inject(Py),mt=sc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Im,f=Bm,M=Fm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=f_(e,1,!1,null,null,a,o,u,f,M,A,null),e[Ci]=n.current,zf(e),new th(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Im,M=Bm,A=Fm,H=null,at=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(H=a.unstable_transitionCallbacks),a.formState!==void 0&&(at=a.formState)),n=f_(e,1,!0,n,a??null,o,u,f,M,A,H,at),n.context=h_(null),a=n.current,o=ei(),o=Yt(o),u=ga(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,ot(n,a),Oi(n),e[Ci]=n.current,zf(e),new ac(n)},Uo.version="19.1.1",Uo}var U_;function Wy(){if(U_)return ih.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ih.exports=Xy(),ih.exports}var qy=Wy();const Yy=Z0(qy);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K0=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ky={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=Pt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Pt.createElement("svg",{ref:m,...Ky,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:K0("lucide",l),...d},[...h.map(([p,g])=>Pt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(r,t)=>{const i=Pt.forwardRef(({className:s,...l},c)=>Pt.createElement(Qy,{ref:c,iconNode:t,className:K0(`lucide-${Zy(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=_e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=_e("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=_e("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=_e("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=_e("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=_e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=_e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=_e("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=_e("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=_e("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=_e("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=_e("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=_e("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=_e("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=_e("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=_e("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=_e("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=_e("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=_e("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=_e("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=_e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=_e("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=_e("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=_e("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=_e("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=_e("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=_e("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=_e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=_e("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=_e("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=_e("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=_e("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=_e("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=_e("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=_e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=_e("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);async function Ln(r,t){const i=await fetch(r,t);if(!i.ok){let s=`请求失败 (${i.status})`;try{const l=await i.json();s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail??l)}catch{}throw new Error(s)}return i.json()}const Pc=r=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});function _S(r,t){const i=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download=r,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const mn=(r,t=3)=>r==null||!Number.isFinite(r)?"—":r.toLocaleString("en-US",{maximumFractionDigits:t}),jh=r=>({loading:"读取数据",features:"提取特征",feature_extraction:"提取特征",matching:"特征匹配",pair_geometry:"匹配与几何验证",geometry:"几何验证",tracks:"构建轨迹",initialization:"两视图初始化",mapping:"增量建图",incremental_mapping:"增量建图",registration:"注册相机",bundle_adjustment:"束调整 BA",ba:"束调整 BA",export:"导出结果",exporting:"导出结果",done:"处理完成",starting:"正在启动",queued:"等待启动"})[r]??r;function $0(r){const t=/^registered_(\d+)$/.exec(r);return t?`注册图像 #${t[1]}`:{initialization:"初始化",incremental_complete:"增量建图完成",before_ba:"BA 前",after_ba:"BA 后",final:"最终结果"}[r]??r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="180",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vS=0,G_=1,xS=2,tv=1,yS=2,aa=3,Wa=0,Yn=1,ra=2,ka=0,Ar=1,V_=2,k_=3,j_=4,SS=5,vs=100,MS=101,ES=102,bS=103,TS=104,AS=200,RS=201,CS=202,wS=203,Xh=204,Wh=205,DS=206,US=207,NS=208,LS=209,OS=210,PS=211,zS=212,IS=213,BS=214,qh=0,Yh=1,Zh=2,Cr=3,Kh=4,Qh=5,Jh=6,$h=7,ev=0,FS=1,HS=2,ja=0,GS=1,VS=2,kS=3,jS=4,XS=5,WS=6,qS=7,nv=300,wr=301,Dr=302,td=303,ed=304,Kc=306,nd=1e3,ys=1001,id=1002,Ri=1003,YS=1004,rc=1005,zi=1006,ch=1007,Ss=1008,ca=1009,iv=1010,av=1011,Go=1012,Bd=1013,Ms=1014,oa=1015,qo=1016,Fd=1017,Hd=1018,Vo=1020,sv=35902,rv=35899,ov=1021,lv=1022,Ai=1023,ko=1026,jo=1027,cv=1028,Gd=1029,uv=1030,Vd=1031,kd=1033,zc=33776,Ic=33777,Bc=33778,Fc=33779,ad=35840,sd=35841,rd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Ed=37820,bd=37821,Td=36492,Ad=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,ZS=3200,KS=3201,QS=0,JS=1,Va="",Fn="srgb",Ur="srgb-linear",kc="linear",He="srgb",or=7680,X_=519,$S=512,tM=513,eM=514,fv=515,nM=516,iM=517,aM=518,sM=519,W_=35044,q_="300 es",Ii=2e3,jc=2001;class Ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const Fo=Math.PI/180,Xo=180/Math.PI;function Lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function jd(r,t){return(r%t+t)%t}function rM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function oM(r,t,i){return r!==t?(i-r)/(t-r):0}function Ho(r,t,i){return(1-i)*r+i*t}function lM(r,t,i,s){return Ho(r,t,1-Math.exp(-i*s))}function cM(r,t=1){return t-Math.abs(jd(r,t*2)-t)}function uM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function fM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function hM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dM(r,t){return r+Math.random()*(t-r)}function pM(r){return r*(.5-Math.random())}function mM(r){r!==void 0&&(Y_=r);let t=Y_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gM(r){return r*Fo}function _M(r){return r*Xo}function vM(r){return(r&r-1)===0&&r!==0}function xM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function SM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),g=h((t+s)/2),y=c((t-s)/2),S=h((t-s)/2),E=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*g,m*y,m*S,d*p);break;case"YZY":r.set(m*S,d*g,m*y,d*p);break;case"ZXZ":r.set(m*y,m*S,d*g,d*p);break;case"XZX":r.set(d*g,m*b,m*E,d*p);break;case"YXY":r.set(m*E,d*g,m*b,d*p);break;case"ZYZ":r.set(m*b,m*E,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Sr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:Fo,RAD2DEG:Xo,generateUUID:Lr,clamp:xe,euclideanModulo:jd,mapLinear:rM,inverseLerp:oM,lerp:Ho,damp:lM,pingpong:cM,smoothstep:uM,smootherstep:fM,randInt:hM,randFloat:dM,randFloatSpread:pM,seededRandom:mM,degToRad:gM,radToDeg:_M,isPowerOfTwo:vM,ceilPowerOfTwo:xM,floorPowerOfTwo:yM,setQuaternionFromProperEuler:SM,normalize:In,denormalize:Sr};class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],y=s[l+3];const S=c[h+0],E=c[h+1],b=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=y;return}if(d===1){t[i+0]=S,t[i+1]=E,t[i+2]=b,t[i+3]=C;return}if(y!==C||m!==S||p!==E||g!==b){let x=1-d;const _=m*S+p*E+g*b+y*C,I=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const F=Math.sqrt(L),k=Math.atan2(F,_*I);x=Math.sin(x*k)/F,d=Math.sin(d*k)/F}const U=d*I;if(m=m*x+S*U,p=p*x+E*U,g=g*x+b*U,y=y*x+C*U,x===1-d){const F=1/Math.sqrt(m*m+p*p+g*g+y*y);m*=F,p*=F,g*=F,y*=F}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],y=c[h],S=c[h+1],E=c[h+2],b=c[h+3];return t[i]=d*b+g*y+m*E-p*S,t[i+1]=m*b+g*S+p*y-d*E,t[i+2]=p*b+g*E+d*S-m*y,t[i+3]=g*b-d*y-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),y=d(c/2),S=m(s/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*g*y+p*E*b,this._y=p*E*y-S*g*b,this._z=p*g*b+S*E*y,this._w=p*g*y-S*E*b;break;case"YXZ":this._x=S*g*y+p*E*b,this._y=p*E*y-S*g*b,this._z=p*g*b-S*E*y,this._w=p*g*y+S*E*b;break;case"ZXY":this._x=S*g*y-p*E*b,this._y=p*E*y+S*g*b,this._z=p*g*b+S*E*y,this._w=p*g*y-S*E*b;break;case"ZYX":this._x=S*g*y-p*E*b,this._y=p*E*y+S*g*b,this._z=p*g*b-S*E*y,this._w=p*g*y+S*E*b;break;case"YZX":this._x=S*g*y+p*E*b,this._y=p*E*y+S*g*b,this._z=p*g*b-S*E*y,this._w=p*g*y-S*E*b;break;case"XZY":this._x=S*g*y-p*E*b,this._y=p*E*y-S*g*b,this._z=p*g*b+S*E*y,this._w=p*g*y+S*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],y=i[10],S=s+d+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>y){const E=2*Math.sqrt(1+s-d-y);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>y){const E=2*Math.sqrt(1+d-s-y);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+y-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),y=Math.sin((1-i)*g)/p,S=Math.sin(i*g)/p;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=c*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),y=2*(c*s-h*i);return this.x=i+m*p+h*y-d*g,this.y=s+m*g+d*p-c*y,this.z=l+m*y+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return uh.copy(this).projectOnVector(t),this.sub(uh)}reflect(t){return this.sub(uh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uh=new J,Z_=new Es;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],y=s[7],S=s[2],E=s[5],b=s[8],C=l[0],x=l[3],_=l[6],I=l[1],L=l[4],U=l[7],F=l[2],k=l[5],O=l[8];return c[0]=h*C+d*I+m*F,c[3]=h*x+d*L+m*k,c[6]=h*_+d*U+m*O,c[1]=p*C+g*I+y*F,c[4]=p*x+g*L+y*k,c[7]=p*_+g*U+y*O,c[2]=S*C+E*I+b*F,c[5]=S*x+E*L+b*k,c[8]=S*_+E*U+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],y=g*h-d*p,S=d*m-g*c,E=p*c-h*m,b=i*y+s*S+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=y*C,t[1]=(l*p-g*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(g*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(fh.makeScale(t,i)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new fe;function dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function MM(){const r=Xc("canvas");return r.style.display="block",r}const K_={};function Wo(r){r in K_||(K_[r]=!0,console.warn(r))}function EM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Q_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bM(){const r={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Rr(l.r),l.g=Rr(l.g),l.b=Rr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ur]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),r}const we=bM();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class TM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lr===void 0&&(lr=Xc("canvas")),lr.width=t.width,lr.height=t.height;const l=lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Xc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AM=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(hh(l[h].image)):c.push(hh(l[h]))}else c=hh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?TM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RM=0;const dh=new J;class Zn extends Ts{constructor(t=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=ys,l=ys,c=zi,h=Ss,d=Ai,m=ca,p=Zn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Lr(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dh).x}get height(){return this.source.getSize(dh).y}get depth(){return this.source.getSize(dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=nv;Zn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],y=m[8],S=m[1],E=m[5],b=m[9],C=m[2],x=m[6],_=m[10];if(Math.abs(g-S)<.01&&Math.abs(y-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+C)<.1&&Math.abs(b+x)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,U=(E+1)/2,F=(_+1)/2,k=(g+S)/4,O=(y+C)/4,V=(b+x)/4;return L>U&&L>F?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=k/s,c=O/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=k/l,c=V/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=O/c,l=V/c),this.set(s,l,c,i),this}let I=Math.sqrt((x-b)*(x-b)+(y-C)*(y-C)+(S-g)*(S-g));return Math.abs(I)<.001&&(I=1),this.x=(x-b)/I,this.y=(y-C)/I,this.z=(S-g)/I,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Ts{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Zn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends CM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class pv extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wM extends Zn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),lc.subVectors(this.max,No),cr.subVectors(t.a,No),ur.subVectors(t.b,No),fr.subVectors(t.c,No),Pa.subVectors(ur,cr),za.subVectors(fr,ur),fs.subVectors(cr,fr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-fs.z,fs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,fs.z,0,-fs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!ph(i,cr,ur,fr,lc)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,cr,ur,fr,lc))?!1:(cc.crossVectors(Pa,za),i=[cc.x,cc.y,cc.z],ph(i,cr,ur,fr,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new J,new J,new J,new J,new J,new J,new J,new J],Mi=new J,oc=new Xa,cr=new J,ur=new J,fr=new J,Pa=new J,za=new J,fs=new J,No=new J,lc=new J,cc=new J,hs=new J;function ph(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){hs.fromArray(r,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const DM=new Xa,Lo=new J,mh=new J;class Yo{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):DM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(mh)),this.expandByPoint(Lo.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new J,gh=new J,uc=new J,Ia=new J,_h=new J,fc=new J,vh=new J;class Zo{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){gh.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(gh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(uc),d=Ia.dot(this.direction),m=-Ia.dot(uc),p=Ia.lengthSq(),g=Math.abs(1-h*h);let y,S,E,b;if(g>0)if(y=h*m-d,S=h*d-m,b=c*g,y>=0)if(S>=-b)if(S<=b){const C=1/g;y*=C,S*=C,E=y*(y+h*S+2*d)+S*(h*y+S+2*m)+p}else S=c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;else S=-c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;else S<=-b?(y=Math.max(0,-(-h*c+d)),S=y>0?-c:Math.min(Math.max(-c,-m),c),E=-y*y+S*(S+2*m)+p):S<=b?(y=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(y=Math.max(0,-(h*c+d)),S=y>0?c:Math.min(Math.max(-c,-m),c),E=-y*y+S*(S+2*m)+p);else S=h>0?-c:c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(gh).addScaledVector(uc,S),E}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),g>=0?(c=(t.min.y-S.y)*g,h=(t.max.y-S.y)*g):(c=(t.max.y-S.y)*g,h=(t.min.y-S.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),y>=0?(d=(t.min.z-S.z)*y,m=(t.max.z-S.z)*y):(d=(t.max.z-S.z)*y,m=(t.min.z-S.z)*y),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,c){_h.subVectors(i,t),fc.subVectors(s,t),vh.crossVectors(_h,fc);let h=this.direction.dot(vh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(fc.crossVectors(Ia,fc));if(m<0)return null;const p=d*this.direction.dot(_h.cross(Ia));if(p<0||m+p>h)return null;const g=-d*Ia.dot(vh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,c,h,d,m,p,g,y,S,E,b,C,x){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,y,S,E,b,C,x)}set(t,i,s,l,c,h,d,m,p,g,y,S,E,b,C,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=y,_[14]=S,_[3]=E,_[7]=b,_[11]=C,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),c=1/hr.setFromMatrixColumn(t,1).length(),h=1/hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const S=h*g,E=h*y,b=d*g,C=d*y;i[0]=m*g,i[4]=-m*y,i[8]=p,i[1]=E+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*g,E=m*y,b=p*g,C=p*y;i[0]=S+C*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*y,i[5]=h*g,i[9]=-d,i[2]=E*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*g,E=m*y,b=p*g,C=p*y;i[0]=S-C*d,i[4]=-h*y,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*g,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*g,E=h*y,b=d*g,C=d*y;i[0]=m*g,i[4]=b*p-E,i[8]=S*p+C,i[1]=m*y,i[5]=C*p+S,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=C-S*y,i[8]=b*y+E,i[1]=y,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*y+b,i[10]=S-C*y}else if(t.order==="XZY"){const S=h*m,E=h*p,b=d*m,C=d*p;i[0]=m*g,i[4]=-y,i[8]=p*g,i[1]=S*y+C,i[5]=h*g,i[9]=E*y-b,i[2]=b*y-E,i[6]=d*g,i[10]=C*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UM,t,NM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ba.crossVectors(s,ii),Ba.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ba.crossVectors(s,ii)),Ba.normalize(),hc.crossVectors(ii,Ba),l[0]=Ba.x,l[4]=hc.x,l[8]=ii.x,l[1]=Ba.y,l[5]=hc.y,l[9]=ii.y,l[2]=Ba.z,l[6]=hc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],y=s[5],S=s[9],E=s[13],b=s[2],C=s[6],x=s[10],_=s[14],I=s[3],L=s[7],U=s[11],F=s[15],k=l[0],O=l[4],V=l[8],D=l[12],w=l[1],j=l[5],Z=l[9],lt=l[13],vt=l[2],ft=l[6],B=l[10],q=l[14],Y=l[3],_t=l[7],N=l[11],tt=l[15];return c[0]=h*k+d*w+m*vt+p*Y,c[4]=h*O+d*j+m*ft+p*_t,c[8]=h*V+d*Z+m*B+p*N,c[12]=h*D+d*lt+m*q+p*tt,c[1]=g*k+y*w+S*vt+E*Y,c[5]=g*O+y*j+S*ft+E*_t,c[9]=g*V+y*Z+S*B+E*N,c[13]=g*D+y*lt+S*q+E*tt,c[2]=b*k+C*w+x*vt+_*Y,c[6]=b*O+C*j+x*ft+_*_t,c[10]=b*V+C*Z+x*B+_*N,c[14]=b*D+C*lt+x*q+_*tt,c[3]=I*k+L*w+U*vt+F*Y,c[7]=I*O+L*j+U*ft+F*_t,c[11]=I*V+L*Z+U*B+F*N,c[15]=I*D+L*lt+U*q+F*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],y=t[6],S=t[10],E=t[14],b=t[3],C=t[7],x=t[11],_=t[15];return b*(+c*m*y-l*p*y-c*d*S+s*p*S+l*d*E-s*m*E)+C*(+i*m*E-i*p*S+c*h*S-l*h*E+l*p*g-c*m*g)+x*(+i*p*y-i*d*E-c*h*y+s*h*E+c*d*g-s*p*g)+_*(-l*d*g-i*m*y+i*d*S+l*h*y-s*h*S+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],y=t[9],S=t[10],E=t[11],b=t[12],C=t[13],x=t[14],_=t[15],I=y*x*p-C*S*p+C*m*E-d*x*E-y*m*_+d*S*_,L=b*S*p-g*x*p-b*m*E+h*x*E+g*m*_-h*S*_,U=g*C*p-b*y*p+b*d*E-h*C*E-g*d*_+h*y*_,F=b*y*m-g*C*m-b*d*S+h*C*S+g*d*x-h*y*x,k=i*I+s*L+l*U+c*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return t[0]=I*O,t[1]=(C*S*c-y*x*c-C*l*E+s*x*E+y*l*_-s*S*_)*O,t[2]=(d*x*c-C*m*c+C*l*p-s*x*p-d*l*_+s*m*_)*O,t[3]=(y*m*c-d*S*c-y*l*p+s*S*p+d*l*E-s*m*E)*O,t[4]=L*O,t[5]=(g*x*c-b*S*c+b*l*E-i*x*E-g*l*_+i*S*_)*O,t[6]=(b*m*c-h*x*c-b*l*p+i*x*p+h*l*_-i*m*_)*O,t[7]=(h*S*c-g*m*c+g*l*p-i*S*p-h*l*E+i*m*E)*O,t[8]=U*O,t[9]=(b*y*c-g*C*c-b*s*E+i*C*E+g*s*_-i*y*_)*O,t[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*_+i*d*_)*O,t[11]=(g*d*c-h*y*c-g*s*p+i*y*p+h*s*E-i*d*E)*O,t[12]=F*O,t[13]=(g*C*l-b*y*l+b*s*S-i*C*S-g*s*x+i*y*x)*O,t[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*x-i*d*x)*O,t[15]=(h*y*l-g*d*l+g*s*m-i*y*m-h*s*S+i*d*S)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,y=d+d,S=c*p,E=c*g,b=c*y,C=h*g,x=h*y,_=d*y,I=m*p,L=m*g,U=m*y,F=s.x,k=s.y,O=s.z;return l[0]=(1-(C+_))*F,l[1]=(E+U)*F,l[2]=(b-L)*F,l[3]=0,l[4]=(E-U)*k,l[5]=(1-(S+_))*k,l[6]=(x+I)*k,l[7]=0,l[8]=(b+L)*O,l[9]=(x-I)*O,l[10]=(1-(S+C))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,g=1/h,y=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=y,Ei.elements[9]*=y,Ei.elements[10]*=y,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,g=2*c/(i-t),y=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===Ii)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===jc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=y,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,g=2/(i-t),y=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===Ii)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===jc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=y,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hr=new J,Ei=new Qe,UM=new J(0,0,0),NM=new J(1,1,1),Ba=new J,hc=new J,ii=new J,$_=new Qe,t0=new Es;class ua{constructor(t=0,i=0,s=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],y=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $_.makeRotationFromQuaternion(t),this.setFromRotationMatrix($_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return t0.setFromEuler(this),this.setFromQuaternion(t0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LM=0;const e0=new J,dr=new Es,ea=new Qe,dc=new J,Oo=new J,OM=new J,PM=new Es,n0=new J(1,0,0),i0=new J(0,1,0),a0=new J(0,0,1),s0={type:"added"},zM={type:"removed"},pr={type:"childadded",child:null},xh={type:"childremoved",child:null};class Hn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new J,i=new ua,s=new Es,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new fe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(n0,t)}rotateY(t){return this.rotateOnAxis(i0,t)}rotateZ(t){return this.rotateOnAxis(a0,t)}translateOnAxis(t,i){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n0,t)}translateY(t){return this.translateOnAxis(i0,t)}translateZ(t){return this.translateOnAxis(a0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?dc.copy(t):dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,dc,this.up):ea.lookAt(dc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ea),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zM),xh.child=t,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,OM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,PM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const y=m[p];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),y=h(t.shapes),S=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new J(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new J,na=new J,yh=new J,ia=new J,mr=new J,gr=new J,r0=new J,Sh=new J,Mh=new J,Eh=new J,bh=new sn,Th=new sn,Ah=new sn;class Ti{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){bi.subVectors(l,i),na.subVectors(s,i),yh.subVectors(t,i);const h=bi.dot(bi),d=bi.dot(na),m=bi.dot(yh),p=na.dot(na),g=na.dot(yh),y=h*p-d*d;if(y===0)return c.set(0,0,0),null;const S=1/y,E=(p*m-d*g)*S,b=(h*g-d*m)*S;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return bh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),bh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,s),Ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(bh,c.x),h.addScaledVector(Th,c.y),h.addScaledVector(Ah,c.z),h}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),na.subVectors(t,i),bi.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),bi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(c,s),Sh.subVectors(t,s);const m=mr.dot(Sh),p=gr.dot(Sh);if(m<=0&&p<=0)return i.copy(s);Mh.subVectors(t,l);const g=mr.dot(Mh),y=gr.dot(Mh);if(g>=0&&y<=g)return i.copy(l);const S=m*y-g*p;if(S<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(mr,h);Eh.subVectors(t,c);const E=mr.dot(Eh),b=gr.dot(Eh);if(b>=0&&E<=b)return i.copy(c);const C=E*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(gr,d);const x=g*b-E*y;if(x<=0&&y-g>=0&&E-b>=0)return r0.subVectors(c,l),d=(y-g)/(y-g+(E-b)),i.copy(l).addScaledVector(r0,d);const _=1/(x+C+S);return h=C*_,d=S*_,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Rh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class De{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=jd(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rh(h,c,t+1/3),this.g=Rh(h,c,t),this.b=Rh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=Fn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Fn){const s=mv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return we.workingToColorSpace(Nn.copy(this),t),Math.round(xe(Nn.r*255,0,255))*65536+Math.round(xe(Nn.g*255,0,255))*256+Math.round(xe(Nn.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const y=h-d;switch(p=g<=.5?y/(h+d):y/(2-h-d),h){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Fn){we.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==Fn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(pc);const s=Ho(Fa.h,pc.h,i),l=Ho(Fa.s,pc.s,i),c=Ho(Fa.l,pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new De;De.NAMES=mv;let IM=0;class Or extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ar,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Wh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wc extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new J,mc=new me;let BM=0;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=W_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Sr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=In(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Sr(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Sr(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Sr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Sr(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),s=In(s,this.array),l=In(l,this.array),c=In(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W_&&(t.usage=this.usage),t}}class gv extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _v extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Gn extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let FM=0;const pi=new Qe,Ch=new Hn,_r=new J,ai=new Xa,Po=new Xa,Mn=new J;class ri extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?_v:gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Gn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ai.min,Po.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Po.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Po.min),ai.expandByPoint(Po.max))}ai.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Mn.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(t,p),Mn.add(_r)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let V=0;V<s.count;V++)d[V]=new J,m[V]=new J;const p=new J,g=new J,y=new J,S=new me,E=new me,b=new me,C=new J,x=new J;function _(V,D,w){p.fromBufferAttribute(s,V),g.fromBufferAttribute(s,D),y.fromBufferAttribute(s,w),S.fromBufferAttribute(c,V),E.fromBufferAttribute(c,D),b.fromBufferAttribute(c,w),g.sub(p),y.sub(p),E.sub(S),b.sub(S);const j=1/(E.x*b.y-b.x*E.y);isFinite(j)&&(C.copy(g).multiplyScalar(b.y).addScaledVector(y,-E.y).multiplyScalar(j),x.copy(y).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(j),d[V].add(C),d[D].add(C),d[w].add(C),m[V].add(x),m[D].add(x),m[w].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let V=0,D=I.length;V<D;++V){const w=I[V],j=w.start,Z=w.count;for(let lt=j,vt=j+Z;lt<vt;lt+=3)_(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const L=new J,U=new J,F=new J,k=new J;function O(V){F.fromBufferAttribute(l,V),k.copy(F);const D=d[V];L.copy(D),L.sub(F.multiplyScalar(F.dot(D))).normalize(),U.crossVectors(k,D);const j=U.dot(m[V])<0?-1:1;h.setXYZW(V,L.x,L.y,L.z,j)}for(let V=0,D=I.length;V<D;++V){const w=I[V],j=w.start,Z=w.count;for(let lt=j,vt=j+Z;lt<vt;lt+=3)O(t.getX(lt+0)),O(t.getX(lt+1)),O(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,g=new J,y=new J;if(t)for(let S=0,E=t.count;S<E;S+=3){const b=t.getX(S+0),C=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),g.subVectors(h,c),y.subVectors(l,c),g.cross(y),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),y.subVectors(l,c),g.cross(y),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,y=d.normalized,S=new p.constructor(m.length*g);let E=0,b=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*g;for(let _=0;_<g;_++)S[b++]=p[E++]}return new gi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,y=p.length;g<y;g++){const S=p[g],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let y=0,S=p.length;y<S;y++){const E=p[y];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],y=c[p];for(let S=0,E=y.length;S<E;S++)g.push(y[S].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const y=h[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o0=new Qe,ds=new Zo,gc=new Yo,l0=new J,_c=new J,vc=new J,xc=new J,wh=new J,yc=new J,c0=new J,Sc=new J;class mi extends Hn{constructor(t=new ri,i=new Wc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],y=c[m];g!==0&&(wh.fromBufferAttribute(y,t),h?yc.addScaledVector(wh,g):yc.addScaledVector(wh.sub(i),g))}i.add(yc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(gc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(gc,l0)===null||ds.origin.distanceToSquared(l0)>(t.far-t.near)**2))&&(o0.copy(c).invert(),ds.copy(t.ray).applyMatrix4(o0),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],_=h[x.materialIndex],I=Math.max(x.start,E.start),L=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let U=I,F=L;U<F;U+=3){const k=d.getX(U),O=d.getX(U+1),V=d.getX(U+2);l=Mc(this,_,t,s,p,g,y,k,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let x=b,_=C;x<_;x+=3){const I=d.getX(x),L=d.getX(x+1),U=d.getX(x+2);l=Mc(this,h,t,s,p,g,y,I,L,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],_=h[x.materialIndex],I=Math.max(x.start,E.start),L=Math.min(m.count,Math.min(x.start+x.count,E.start+E.count));for(let U=I,F=L;U<F;U+=3){const k=U,O=U+1,V=U+2;l=Mc(this,_,t,s,p,g,y,k,O,V),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let x=b,_=C;x<_;x+=3){const I=x,L=x+1,U=x+2;l=Mc(this,h,t,s,p,g,y,I,L,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function HM(r,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Wa,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:r}}function Mc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,_c),r.getVertexPosition(m,vc),r.getVertexPosition(p,xc);const g=HM(r,t,i,s,_c,vc,xc,c0);if(g){const y=new J;Ti.getBarycoord(c0,_c,vc,xc,y),l&&(g.uv=Ti.getInterpolatedAttribute(l,d,m,p,y,new me)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,d,m,p,y,new me)),h&&(g.normal=Ti.getInterpolatedAttribute(h,d,m,p,y,new J),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Ti.getNormal(_c,vc,xc,S.normal),g.face=S,g.barycoord=y}return g}class Ko extends ri{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],y=[];let S=0,E=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Gn(p,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(y,2));function b(C,x,_,I,L,U,F,k,O,V,D){const w=U/O,j=F/V,Z=U/2,lt=F/2,vt=k/2,ft=O+1,B=V+1;let q=0,Y=0;const _t=new J;for(let N=0;N<B;N++){const tt=N*j-lt;for(let Et=0;Et<ft;Et++){const Tt=Et*w-Z;_t[C]=Tt*I,_t[x]=tt*L,_t[_]=vt,p.push(_t.x,_t.y,_t.z),_t[C]=0,_t[x]=0,_t[_]=k>0?1:-1,g.push(_t.x,_t.y,_t.z),y.push(Et/O),y.push(1-N/V),q+=1}}for(let N=0;N<V;N++)for(let tt=0;tt<O;tt++){const Et=S+tt+ft*N,Tt=S+tt+ft*(N+1),Ut=S+(tt+1)+ft*(N+1),Vt=S+(tt+1)+ft*N;m.push(Et,Tt,Vt),m.push(Tt,Ut,Vt),Y+=6}d.addGroup(E,Y,D),E+=Y,S+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(r){const t={};for(let i=0;i<r.length;i++){const s=Nr(r[i]);for(const l in s)t[l]=s[l]}return t}function GM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function vv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const VM={clone:Nr,merge:Bn};var kM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kM,this.fragmentShader=jM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=GM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new J,u0=new me,f0=new me;class si extends xv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,u0,f0),i.subVectors(f0,u0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class XM extends Hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(vr,xr,t,i);l.layers=this.layers,this.add(l);const c=new si(vr,xr,t,i);c.layers=this.layers,this.add(c);const h=new si(vr,xr,t,i);h.layers=this.layers,this.add(h);const d=new si(vr,xr,t,i);d.layers=this.layers,this.add(d);const m=new si(vr,xr,t,i);m.layers=this.layers,this.add(m);const p=new si(vr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(y,S,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class yv extends Zn{constructor(t=[],i=wr,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class WM extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:ka});c.uniforms.tEquirect.value=i;const h=new mi(l,c),d=i.minFilter;return i.minFilter===Ss&&(i.minFilter=zi),new XM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Er extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qM={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const x=i.getJointPose(C,s),_=this._getHandJoint(p,C);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=g.position.distanceTo(y.position),E=.02,b=.005;p.inputState.pinching&&S>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(qM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Er;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class YM extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Uh=new J,ZM=new J,KM=new fe;class Ga{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Uh.subVectors(s,i).cross(ZM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||KM.getNormalMatrix(t),l=this.coplanarPoint(Uh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Yo,QM=new me(.5,.5),Ec=new J;class Sv{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,c=new Ga,h=new Ga){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],y=c[5],S=c[6],E=c[7],b=c[8],C=c[9],x=c[10],_=c[11],I=c[12],L=c[13],U=c[14],F=c[15];if(l[0].setComponents(p-h,E-g,_-b,F-I).normalize(),l[1].setComponents(p+h,E+g,_+b,F+I).normalize(),l[2].setComponents(p+d,E+y,_+C,F+L).normalize(),l[3].setComponents(p-d,E-y,_-C,F-L).normalize(),s)l[4].setComponents(m,S,x,U).normalize(),l[5].setComponents(p-m,E-S,_-x,F-U).normalize();else if(l[4].setComponents(p-m,E-S,_-x,F-U).normalize(),i===Ii)l[5].setComponents(p+m,E+S,_+x,F+U).normalize();else if(i===jc)l[5].setComponents(m,S,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=QM.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qd extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qc=new J,Yc=new J,h0=new Qe,zo=new Zo,bc=new Yo,Nh=new J,d0=new J;class Mv extends Hn{constructor(t=new ri,i=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)qc.fromBufferAttribute(i,l-1),Yc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=qc.distanceTo(Yc);t.setAttribute("lineDistance",new Gn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;h0.copy(l).invert(),zo.copy(t.ray).applyMatrix4(h0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,S=s.attributes.position;if(g!==null){const E=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let C=E,x=b-1;C<x;C+=p){const _=g.getX(C),I=g.getX(C+1),L=Tc(this,t,zo,m,_,I,C);L&&i.push(L)}if(this.isLineLoop){const C=g.getX(b-1),x=g.getX(E),_=Tc(this,t,zo,m,C,x,b-1);_&&i.push(_)}}else{const E=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=E,x=b-1;C<x;C+=p){const _=Tc(this,t,zo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Tc(this,t,zo,m,b-1,E,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(qc.fromBufferAttribute(d,l),Yc.fromBufferAttribute(d,c),i.distanceSqToSegment(qc,Yc,Nh,d0)>s)return;Nh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Nh);if(!(p<t.near||p>t.far))return{distance:p,point:d0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const p0=new J,m0=new J;class Ev extends Mv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)p0.fromBufferAttribute(i,l),m0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+p0.distanceTo(m0);t.setAttribute("lineDistance",new Gn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const g0=new Qe,Nd=new Zo,Ac=new Yo,Rc=new J;class Tv extends Hn{constructor(t=new ri,i=new bv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;g0.copy(l).invert(),Nd.copy(t.ray).applyMatrix4(g0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,y=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let b=S,C=E;b<C;b++){const x=p.getX(b);Rc.fromBufferAttribute(y,x),_0(Rc,x,m,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=S,C=E;b<C;b++)Rc.fromBufferAttribute(y,b),_0(Rc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function _0(r,t,i,s,l,c,h){const d=Nd.distanceSqToPoint(r);if(d<i){const m=new J;Nd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Av extends Zn{constructor(t,i,s=Ms,l,c,h,d=Ri,m=Ri,p,g=ko,y=1){if(g!==ko&&g!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:y};super(S,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qc extends ri{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,y=t/d,S=i/m,E=[],b=[],C=[],x=[];for(let _=0;_<g;_++){const I=_*S-h;for(let L=0;L<p;L++){const U=L*y-c;b.push(U,-I,0),C.push(0,0,1),x.push(L/d),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const L=I+p*_,U=I+p*(_+1),F=I+1+p*(_+1),k=I+1+p*_;E.push(L,U,k),E.push(U,F,k)}this.setIndex(E),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zc extends ri{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],y=new J,S=new J,E=[],b=[],C=[],x=[];for(let _=0;_<=s;_++){const I=[],L=_/s;let U=0;_===0&&h===0?U=.5/i:_===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const k=F/i;y.x=-t*Math.cos(l+k*c)*Math.sin(h+L*d),y.y=t*Math.cos(h+L*d),y.z=t*Math.sin(l+k*c)*Math.sin(h+L*d),b.push(y.x,y.y,y.z),S.copy(y).normalize(),C.push(S.x,S.y,S.z),x.push(k+U,1-L),I.push(p++)}g.push(I)}for(let _=0;_<s;_++)for(let I=0;I<i;I++){const L=g[_][I+1],U=g[_][I],F=g[_+1][I],k=g[_+1][I+1];(_!==0||h>0)&&E.push(L,U,k),(_!==s-1||m<Math.PI)&&E.push(U,F,k)}this.setIndex(E),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class JM extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $M extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tE extends xv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class eE extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const v0=new Qe;class nE{constructor(t,i,s=0,l=1/0){this.ray=new Zo(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Wd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return v0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(v0),this}intersectObject(t,i=!0,s=[]){return Ld(t,this,s,i),s.sort(x0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Ld(t[l],this,s,i);return s.sort(x0),s}}function x0(r,t){return r.distance-t.distance}function Ld(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Ld(c[h],t,i,!0)}}class y0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(xe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iE extends Ev{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new ri;l.setAttribute("position",new Gn(i,3)),l.setAttribute("color",new Gn(s,3));const c=new qd({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new De,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class aE extends Ts{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function S0(r,t,i,s){const l=sE(s);switch(i){case ov:return r*t;case cv:return r*t/l.components*l.byteLength;case Gd:return r*t/l.components*l.byteLength;case uv:return r*t*2/l.components*l.byteLength;case Vd:return r*t*2/l.components*l.byteLength;case lv:return r*t*3/l.components*l.byteLength;case Ai:return r*t*4/l.components*l.byteLength;case kd:return r*t*4/l.components*l.byteLength;case zc:case Ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bc:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sd:case od:return Math.max(r,16)*Math.max(t,8)/4;case ad:case rd:return Math.max(r,8)*Math.max(t,8)/2;case ld:case cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Td:case Ad:case Rd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Cd:case wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sE(r){switch(r){case ca:case iv:return{byteLength:1,components:1};case Go:case av:case qo:return{byteLength:2,components:1};case Fd:case Hd:return{byteLength:2,components:4};case Ms:case Bd:case oa:return{byteLength:4,components:1};case sv:case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function rE(r){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,y=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function s(d,m,p){const g=m.array,y=m.updateRanges;if(r.bindBuffer(p,d),y.length===0)r.bufferSubData(p,0,g);else{y.sort((E,b)=>E.start-b.start);let S=0;for(let E=1;E<y.length;E++){const b=y[S],C=y[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,y[S]=C)}y.length=S+1;for(let E=0,b=y.length;E<b;E++){const C=y[E];r.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var oE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lE=`#ifdef USE_ALPHAHASH
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
#endif`,cE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dE=`#ifdef USE_AOMAP
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
#endif`,pE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mE=`#ifdef USE_BATCHING
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
#endif`,gE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yE=`#ifdef USE_IRIDESCENCE
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
#endif`,SE=`#ifdef USE_BUMPMAP
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
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,DE=`#define PI 3.141592653589793
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
} // validated`,UE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NE=`vec3 transformedNormal = objectNormal;
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
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",BE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YE=`#ifdef USE_GRADIENTMAP
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
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JE=`uniform bool receiveShadow;
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
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ab=`PhysicalMaterial material;
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
#endif`,sb=`struct PhysicalMaterial {
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
}`,rb=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gb=`#if defined( USE_POINTS_UV )
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
#endif`,_b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Db=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ob=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xb=`float getShadowMask() {
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
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Kb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t1=`#ifdef USE_TRANSMISSION
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
#endif`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o1=`uniform sampler2D t2D;
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h1=`#include <common>
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
}`,d1=`#if DEPTH_PACKING == 3200
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
}`,p1=`#define DISTANCE
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
}`,m1=`#define DISTANCE
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,y1=`#include <common>
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
}`,S1=`uniform vec3 diffuse;
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
}`,M1=`#define LAMBERT
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
}`,E1=`#define LAMBERT
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
}`,b1=`#define MATCAP
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
}`,T1=`#define MATCAP
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
}`,A1=`#define NORMAL
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
}`,R1=`#define NORMAL
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
}`,C1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,D1=`#define STANDARD
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
}`,U1=`#define STANDARD
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
}`,N1=`#define TOON
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
}`,L1=`#define TOON
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
}`,O1=`uniform float size;
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
}`,P1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,B1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:oE,alphahash_pars_fragment:lE,alphamap_fragment:cE,alphamap_pars_fragment:uE,alphatest_fragment:fE,alphatest_pars_fragment:hE,aomap_fragment:dE,aomap_pars_fragment:pE,batching_pars_vertex:mE,batching_vertex:gE,begin_vertex:_E,beginnormal_vertex:vE,bsdfs:xE,iridescence_fragment:yE,bumpmap_pars_fragment:SE,clipping_planes_fragment:ME,clipping_planes_pars_fragment:EE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:TE,color_fragment:AE,color_pars_fragment:RE,color_pars_vertex:CE,color_vertex:wE,common:DE,cube_uv_reflection_fragment:UE,defaultnormal_vertex:NE,displacementmap_pars_vertex:LE,displacementmap_vertex:OE,emissivemap_fragment:PE,emissivemap_pars_fragment:zE,colorspace_fragment:IE,colorspace_pars_fragment:BE,envmap_fragment:FE,envmap_common_pars_fragment:HE,envmap_pars_fragment:GE,envmap_pars_vertex:VE,envmap_physical_pars_fragment:$E,envmap_vertex:kE,fog_vertex:jE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:qE,gradientmap_pars_fragment:YE,lightmap_pars_fragment:ZE,lights_lambert_fragment:KE,lights_lambert_pars_fragment:QE,lights_pars_begin:JE,lights_toon_fragment:tb,lights_toon_pars_fragment:eb,lights_phong_fragment:nb,lights_phong_pars_fragment:ib,lights_physical_fragment:ab,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:lb,logdepthbuf_fragment:cb,logdepthbuf_pars_fragment:ub,logdepthbuf_pars_vertex:fb,logdepthbuf_vertex:hb,map_fragment:db,map_pars_fragment:pb,map_particle_fragment:mb,map_particle_pars_fragment:gb,metalnessmap_fragment:_b,metalnessmap_pars_fragment:vb,morphinstance_vertex:xb,morphcolor_vertex:yb,morphnormal_vertex:Sb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Eb,normal_fragment_begin:bb,normal_fragment_maps:Tb,normal_pars_fragment:Ab,normal_pars_vertex:Rb,normal_vertex:Cb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Db,clearcoat_normal_fragment_maps:Ub,clearcoat_pars_fragment:Nb,iridescence_pars_fragment:Lb,opaque_fragment:Ob,packing:Pb,premultiplied_alpha_fragment:zb,project_vertex:Ib,dithering_fragment:Bb,dithering_pars_fragment:Fb,roughnessmap_fragment:Hb,roughnessmap_pars_fragment:Gb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:kb,shadowmap_vertex:jb,shadowmask_pars_fragment:Xb,skinbase_vertex:Wb,skinning_pars_vertex:qb,skinning_vertex:Yb,skinnormal_vertex:Zb,specularmap_fragment:Kb,specularmap_pars_fragment:Qb,tonemapping_fragment:Jb,tonemapping_pars_fragment:$b,transmission_fragment:t1,transmission_pars_fragment:e1,uv_pars_fragment:n1,uv_pars_vertex:i1,uv_vertex:a1,worldpos_vertex:s1,background_vert:r1,background_frag:o1,backgroundCube_vert:l1,backgroundCube_frag:c1,cube_vert:u1,cube_frag:f1,depth_vert:h1,depth_frag:d1,distanceRGBA_vert:p1,distanceRGBA_frag:m1,equirect_vert:g1,equirect_frag:_1,linedashed_vert:v1,linedashed_frag:x1,meshbasic_vert:y1,meshbasic_frag:S1,meshlambert_vert:M1,meshlambert_frag:E1,meshmatcap_vert:b1,meshmatcap_frag:T1,meshnormal_vert:A1,meshnormal_frag:R1,meshphong_vert:C1,meshphong_frag:w1,meshphysical_vert:D1,meshphysical_frag:U1,meshtoon_vert:N1,meshtoon_frag:L1,points_vert:O1,points_frag:P1,shadow_vert:z1,shadow_frag:I1,sprite_vert:B1,sprite_frag:F1},Ht={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Pi={basic:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new De(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Bn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Bn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Bn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new De(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Bn([Ht.points,Ht.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Bn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Bn([Ht.common,Ht.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Bn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Bn([Ht.sprite,Ht.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Bn([Ht.common,Ht.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Bn([Ht.lights,Ht.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Pi.physical={uniforms:Bn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Cc={r:0,b:0,g:0},ms=new ua,H1=new Qe;function G1(r,t,i,s,l,c,h){const d=new De(0);let m=c===!0?0:1,p,g,y=null,S=0,E=null;function b(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?i:t).get(U)),U}function C(L){let U=!1;const F=b(L);F===null?_(d,m):F&&F.isColor&&(_(F,1),U=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(L,U){const F=b(U);F&&(F.isCubeTexture||F.mapping===Kc)?(g===void 0&&(g=new mi(new Ko(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Nr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,O,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(U.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(H1.makeRotationFromEuler(ms)),g.material.toneMapped=we.getTransfer(F.colorSpace)!==He,(y!==F||S!==F.version||E!==r.toneMapping)&&(g.material.needsUpdate=!0,y=F,S=F.version,E=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new mi(new Qc(2,2),new qa({name:"BackgroundMaterial",uniforms:Nr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=we.getTransfer(F.colorSpace)!==He,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(y!==F||S!==F.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,y=F,S=F.version,E=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(Cc,vv(r)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,U,h)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(d,m)},render:C,addToRenderList:x,dispose:I}}function V1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,j,Z,lt,vt){let ft=!1;const B=y(lt,Z,j);c!==B&&(c=B,p(c.object)),ft=E(w,lt,Z,vt),ft&&b(w,lt,Z,vt),vt!==null&&t.update(vt,r.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,U(w,j,Z,lt),vt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function y(w,j,Z){const lt=Z.wireframe===!0;let vt=s[w.id];vt===void 0&&(vt={},s[w.id]=vt);let ft=vt[j.id];ft===void 0&&(ft={},vt[j.id]=ft);let B=ft[lt];return B===void 0&&(B=S(m()),ft[lt]=B),B}function S(w){const j=[],Z=[],lt=[];for(let vt=0;vt<i;vt++)j[vt]=0,Z[vt]=0,lt[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:lt,object:w,attributes:{},index:null}}function E(w,j,Z,lt){const vt=c.attributes,ft=j.attributes;let B=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){const N=vt[Y];let tt=ft[Y];if(tt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function b(w,j,Z,lt){const vt={},ft=j.attributes;let B=0;const q=Z.getAttributes();for(const Y in q)if(q[Y].location>=0){let N=ft[Y];N===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(N=w.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),vt[Y]=tt,B++}c.attributes=vt,c.attributesNum=B,c.index=lt}function C(){const w=c.newAttributes;for(let j=0,Z=w.length;j<Z;j++)w[j]=0}function x(w){_(w,0)}function _(w,j){const Z=c.newAttributes,lt=c.enabledAttributes,vt=c.attributeDivisors;Z[w]=1,lt[w]===0&&(r.enableVertexAttribArray(w),lt[w]=1),vt[w]!==j&&(r.vertexAttribDivisor(w,j),vt[w]=j)}function I(){const w=c.newAttributes,j=c.enabledAttributes;for(let Z=0,lt=j.length;Z<lt;Z++)j[Z]!==w[Z]&&(r.disableVertexAttribArray(Z),j[Z]=0)}function L(w,j,Z,lt,vt,ft,B){B===!0?r.vertexAttribIPointer(w,j,Z,vt,ft):r.vertexAttribPointer(w,j,Z,lt,vt,ft)}function U(w,j,Z,lt){C();const vt=lt.attributes,ft=Z.getAttributes(),B=j.defaultAttributeValues;for(const q in ft){const Y=ft[q];if(Y.location>=0){let _t=vt[q];if(_t===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const N=_t.normalized,tt=_t.itemSize,Et=t.get(_t);if(Et===void 0)continue;const Tt=Et.buffer,Ut=Et.type,Vt=Et.bytesPerElement,et=Ut===r.INT||Ut===r.UNSIGNED_INT||_t.gpuType===Bd;if(_t.isInterleavedBufferAttribute){const yt=_t.data,dt=yt.stride,Dt=_t.offset;if(yt.isInstancedInterleavedBuffer){for(let zt=0;zt<Y.locationSize;zt++)_(Y.location+zt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let zt=0;zt<Y.locationSize;zt++)x(Y.location+zt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let zt=0;zt<Y.locationSize;zt++)L(Y.location+zt,tt/Y.locationSize,Ut,N,dt*Vt,(Dt+tt/Y.locationSize*zt)*Vt,et)}else{if(_t.isInstancedBufferAttribute){for(let yt=0;yt<Y.locationSize;yt++)_(Y.location+yt,_t.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let yt=0;yt<Y.locationSize;yt++)x(Y.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Tt);for(let yt=0;yt<Y.locationSize;yt++)L(Y.location+yt,tt/Y.locationSize,Ut,N,tt*Vt,tt/Y.locationSize*yt*Vt,et)}}else if(B!==void 0){const N=B[q];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Y.location,N);break;case 3:r.vertexAttrib3fv(Y.location,N);break;case 4:r.vertexAttrib4fv(Y.location,N);break;default:r.vertexAttrib1fv(Y.location,N)}}}}I()}function F(){V();for(const w in s){const j=s[w];for(const Z in j){const lt=j[Z];for(const vt in lt)g(lt[vt].object),delete lt[vt];delete j[Z]}delete s[w]}}function k(w){if(s[w.id]===void 0)return;const j=s[w.id];for(const Z in j){const lt=j[Z];for(const vt in lt)g(lt[vt].object),delete lt[vt];delete j[Z]}delete s[w.id]}function O(w){for(const j in s){const Z=s[j];if(Z[w.id]===void 0)continue;const lt=Z[w.id];for(const vt in lt)g(lt[vt].object),delete lt[vt];delete Z[w.id]}}function V(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:x,disableUnusedAttributes:I}}function k1(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,y){y!==0&&(r.drawArraysInstanced(s,p,g,y),i.update(g,s,y))}function d(p,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,y);let E=0;for(let b=0;b<y;b++)E+=g[b];i.update(E,s,1)}function m(p,g,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],g[b],S[b]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,y);let b=0;for(let C=0;C<y;C++)b+=g[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function j1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ai&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const V=O===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ca&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==oa&&!V)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:F,maxSamples:k}}function X1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ga,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||l;return l=S,s=y.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,S){i=g(y,S,0)},this.setState=function(y,S,E){const b=y.clippingPlanes,C=y.clipIntersection,x=y.clipShadows,_=r.get(y);if(!l||b===null||b.length===0||c&&!x)c?g(null):p();else{const I=c?0:s,L=I*4;let U=_.clippingState||null;m.value=U,U=g(b,S,L,E);for(let F=0;F!==L;++F)U[F]=i[F];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(y,S,E,b){const C=y!==null?y.length:0;let x=null;if(C!==0){if(x=m.value,b!==!0||x===null){const _=E+C*4,I=S.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<_)&&(x=new Float32Array(_));for(let L=0,U=E;L!==C;++L,U+=4)h.copy(y[L]).applyMatrix4(I,d),h.normal.toArray(x,U),x[U+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,x}}function W1(r){let t=new WeakMap;function i(h,d){return d===td?h.mapping=wr:d===ed&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===ed)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new WM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const br=4,M0=[.125,.215,.35,.446,.526,.582],xs=20,Lh=new tE,E0=new De;let Oh=null,Ph=0,zh=0,Ih=!1;const _s=(1+Math.sqrt(5))/2,yr=1/_s,b0=[new J(-_s,yr,0),new J(_s,yr,0),new J(-yr,0,_s),new J(yr,0,_s),new J(0,_s,-yr),new J(0,_s,yr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],q1=new J;class T0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=q1}=c;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:qo,format:Ai,colorSpace:Ur,depthBuffer:!1},l=A0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y1(c)),this._blurMaterial=Z1(c,t,i)}return l}_compileMaterial(t){const i=new mi(this._lodPlanes[0],t);this._renderer.compile(i,Lh)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,E=y.toneMapping;y.getClearColor(E0),y.toneMapping=ja,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null));const C=new Wc({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),x=new mi(new Ko,C);let _=!1;const I=t.background;I?I.isColor&&(C.color.copy(I),t.background=null,_=!0):(C.color.copy(E0),_=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const F=this._cubeSize;wc(l,U*F,L>2?F:0,F,F),y.setRenderTarget(l),_&&y.render(x,m),y.render(t,m)}x.geometry.dispose(),x.material.dispose(),y.toneMapping=E,y.autoClear=S,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===wr||t.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new mi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Lh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=b0[(l-c-1)%b0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new mi(this._lodPlanes[l],p),S=p.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*xs-1),C=c/b,x=isFinite(c)?1+Math.floor(g*C):xs;x>xs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${xs}`);const _=[];let I=0;for(let O=0;O<xs;++O){const V=O/C,D=Math.exp(-V*V/2);_.push(D),O===0?I+=D:O<x&&(I+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/I;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=b,S.mipInt.value=L-s;const U=this._sizeLods[l],F=3*U*(l>L-br?l-L+br:0),k=4*(this._cubeSize-U);wc(i,F,k,3*U,2*U),m.setRenderTarget(i),m.render(y,Lh)}}function Y1(r){const t=[],i=[],s=[];let l=r;const c=r-br+1+M0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-br?m=M0[h-r+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,y=1+p,S=[g,g,y,g,y,y,g,g,y,y,g,y],E=6,b=6,C=3,x=2,_=1,I=new Float32Array(C*b*E),L=new Float32Array(x*b*E),U=new Float32Array(_*b*E);for(let k=0;k<E;k++){const O=k%3*2/3-1,V=k>2?0:-1,D=[O,V,0,O+2/3,V,0,O+2/3,V+1,0,O,V,0,O+2/3,V+1,0,O,V+1,0];I.set(D,C*b*k),L.set(S,x*b*k);const w=[k,k,k,k,k,k];U.set(w,_*b*k)}const F=new ri;F.setAttribute("position",new gi(I,C)),F.setAttribute("uv",new gi(L,x)),F.setAttribute("faceIndex",new gi(U,_)),t.push(F),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function A0(r,t,i){const s=new bs(r,t,i);return s.texture.mapping=Kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Z1(r,t,i){const s=new Float32Array(xs),l=new J(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function R0(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function C0(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function K1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===td||m===ed,g=m===wr||m===Dr;if(p||g){let y=t.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new T0(r)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),y.texture;if(y!==void 0)return y.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new T0(r)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Q1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function J1(r,t,i,s){const l={},c=new WeakMap;function h(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(y){const S=y.attributes;for(const E in S)t.update(S[E],r.ARRAY_BUFFER)}function p(y){const S=[],E=y.index,b=y.attributes.position;let C=0;if(E!==null){const I=E.array;C=E.version;for(let L=0,U=I.length;L<U;L+=3){const F=I[L+0],k=I[L+1],O=I[L+2];S.push(F,k,k,O,O,F)}}else if(b!==void 0){const I=b.array;C=b.version;for(let L=0,U=I.length/3-1;L<U;L+=3){const F=L+0,k=L+1,O=L+2;S.push(F,k,k,O,O,F)}}else return;const x=new(dv(S)?_v:gv)(S,1);x.version=C;const _=c.get(y);_&&t.remove(_),c.set(y,x)}function g(y){const S=c.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&p(y)}else p(y);return c.get(y)}return{get:d,update:m,getWireframeAttribute:g}}function $1(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){r.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,S*h,b),i.update(E,s,b))}function g(S,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,b);let x=0;for(let _=0;_<b;_++)x+=E[_];i.update(x,s,1)}function y(S,E,b,C){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<S.length;_++)p(S[_]/h,E[_],C[_]);else{x.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,C,0,b);let _=0;for(let I=0;I<b;I++)_+=E[I]*C[I];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function tT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function eT(r,t,i){const s=new WeakMap,l=new sn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==y){let w=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),x===!0&&(U=3);let F=d.attributes.position.count*U,k=1;F>t.maxTextureSize&&(k=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*k*4*y),V=new pv(O,F,k,y);V.type=oa,V.needsUpdate=!0;const D=U*4;for(let j=0;j<y;j++){const Z=_[j],lt=I[j],vt=L[j],ft=F*k*4*j;for(let B=0;B<Z.count;B++){const q=B*D;b===!0&&(l.fromBufferAttribute(Z,B),O[ft+q+0]=l.x,O[ft+q+1]=l.y,O[ft+q+2]=l.z,O[ft+q+3]=0),C===!0&&(l.fromBufferAttribute(lt,B),O[ft+q+4]=l.x,O[ft+q+5]=l.y,O[ft+q+6]=l.z,O[ft+q+7]=0),x===!0&&(l.fromBufferAttribute(vt,B),O[ft+q+8]=l.x,O[ft+q+9]=l.y,O[ft+q+10]=l.z,O[ft+q+11]=vt.itemSize===4?l.w:1)}}S={count:y,texture:V,size:new me(F,k)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function nT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,y=t.get(m,g);if(l.get(y)!==p&&(t.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return y}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const wv=new Zn,w0=new Av(1,1),Dv=new pv,Uv=new wM,Nv=new yv,D0=[],U0=[],N0=new Float32Array(16),L0=new Float32Array(9),O0=new Float32Array(4);function Pr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=D0[l];if(c===void 0&&(c=new Float32Array(l),D0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function _n(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Jc(r,t){let i=U0[t];i===void 0&&(i=new Int32Array(t),U0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function iT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function aT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2fv(this.addr,t),_n(i,t)}}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;r.uniform3fv(this.addr,t),_n(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4fv(this.addr,t),_n(i,t)}}function oT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;O0.set(s),r.uniformMatrix2fv(this.addr,!1,O0),_n(i,s)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;L0.set(s),r.uniformMatrix3fv(this.addr,!1,L0),_n(i,s)}}function cT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;N0.set(s),r.uniformMatrix4fv(this.addr,!1,N0),_n(i,s)}}function uT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function fT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2iv(this.addr,t),_n(i,t)}}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3iv(this.addr,t),_n(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4iv(this.addr,t),_n(i,t)}}function pT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function mT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;r.uniform2uiv(this.addr,t),_n(i,t)}}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;r.uniform3uiv(this.addr,t),_n(i,t)}}function _T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;r.uniform4uiv(this.addr,t),_n(i,t)}}function vT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(w0.compareFunction=fv,c=w0):c=wv,i.setTexture2D(t||c,l)}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Uv,l)}function yT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nv,l)}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Dv,l)}function MT(r){switch(r){case 5126:return iT;case 35664:return aT;case 35665:return sT;case 35666:return rT;case 35674:return oT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return dT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}function ET(r,t){r.uniform1fv(this.addr,t)}function bT(r,t){const i=Pr(t,this.size,2);r.uniform2fv(this.addr,i)}function TT(r,t){const i=Pr(t,this.size,3);r.uniform3fv(this.addr,i)}function AT(r,t){const i=Pr(t,this.size,4);r.uniform4fv(this.addr,i)}function RT(r,t){const i=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function CT(r,t){const i=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function wT(r,t){const i=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function DT(r,t){r.uniform1iv(this.addr,t)}function UT(r,t){r.uniform2iv(this.addr,t)}function NT(r,t){r.uniform3iv(this.addr,t)}function LT(r,t){r.uniform4iv(this.addr,t)}function OT(r,t){r.uniform1uiv(this.addr,t)}function PT(r,t){r.uniform2uiv(this.addr,t)}function zT(r,t){r.uniform3uiv(this.addr,t)}function IT(r,t){r.uniform4uiv(this.addr,t)}function BT(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||wv,c[h])}function FT(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Uv,c[h])}function HT(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Nv,c[h])}function GT(r,t,i){const s=this.cache,l=t.length,c=Jc(i,l);gn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Dv,c[h])}function VT(r){switch(r){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return PT;case 36295:return zT;case 36296:return IT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class kT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class jT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VT(i.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function P0(r,t){r.seq.push(t),r.map[t.id]=t}function WT(r,t,i){const s=r.name,l=s.length;for(Bh.lastIndex=0;;){const c=Bh.exec(s),h=Bh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){P0(i,p===void 0?new kT(d,r,t):new jT(d,r,t));break}else{let y=i.map[d];y===void 0&&(y=new XT(d),P0(i,y)),i=y}}}class Hc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);WT(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function z0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const qT=37297;let YT=0;function ZT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const I0=new fe;function KT(r){we._getMatrix(I0,we.workingColorSpace,r);const t=`mat3( ${I0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(r)){case kc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function B0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+ZT(r.getShaderSource(t),d)}else return c}function QT(r,t){const i=KT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function JT(r,t){let i;switch(t){case GS:i="Linear";break;case VS:i="Reinhard";break;case kS:i="Cineon";break;case jS:i="ACESFilmic";break;case WS:i="AgX";break;case qS:i="Neutral";break;case XS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new J;function $T(){we.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function eA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Bo(r){return r!==""}function F0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(r){return r.replace(iA,sA)}const aA=new Map;function sA(r,t){let i=pe[t];if(i===void 0){const s=aA.get(t);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Od(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(r){return r.replace(rA,oA)}function oA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V0(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===yS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function cA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function fA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ev:t="ENVMAP_BLENDING_MULTIPLY";break;case FS:t="ENVMAP_BLENDING_MIX";break;case HS:t="ENVMAP_BLENDING_ADD";break}return t}function hA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function dA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=lA(i),p=cA(i),g=uA(i),y=fA(i),S=hA(i),E=tA(i),b=eA(c),C=l.createProgram();let x,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(x=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ja?"#define TONE_MAPPING":"",i.toneMapping!==ja?pe.tonemapping_pars_fragment:"",i.toneMapping!==ja?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,QT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Od(h),h=F0(h,i),h=H0(h,i),d=Od(d),d=F0(d,i),d=H0(d,i),h=G0(h),d=G0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=I+x+h,U=I+_+d,F=z0(l,l.VERTEX_SHADER,L),k=z0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,F),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(j){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(F)||"",vt=l.getShaderInfoLog(k)||"",ft=Z.trim(),B=lt.trim(),q=vt.trim();let Y=!0,_t=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,F,k);else{const N=B0(l,F,"vertex"),tt=B0(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ft+`
`+N+`
`+tt)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(B===""||q==="")&&(_t=!1);_t&&(j.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:B,prefix:x},fragmentShader:{log:q,prefix:_}})}l.deleteShader(F),l.deleteShader(k),V=new Hc(l,C),D=nA(l,C)}let V;this.getUniforms=function(){return V===void 0&&O(this),V};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,qT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=YT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=k,this}let pA=0;class mA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new gA(t),i.set(t,s)),s}}class gA{constructor(t){this.id=pA++,this.code=t,this.usedTimes=0}}function _A(r,t,i,s,l,c,h){const d=new Wd,m=new mA,p=new Set,g=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,w,j,Z,lt){const vt=Z.fog,ft=lt.geometry,B=D.isMeshStandardMaterial?Z.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||B),Y=q&&q.mapping===Kc?q.image.height:null,_t=b[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const N=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,tt=N!==void 0?N.length:0;let Et=0;ft.morphAttributes.position!==void 0&&(Et=1),ft.morphAttributes.normal!==void 0&&(Et=2),ft.morphAttributes.color!==void 0&&(Et=3);let Tt,Ut,Vt,et;if(_t){const Te=Pi[_t];Tt=Te.vertexShader,Ut=Te.fragmentShader}else Tt=D.vertexShader,Ut=D.fragmentShader,m.update(D),Vt=m.getVertexShaderID(D),et=m.getFragmentShaderID(D);const yt=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Dt=lt.isInstancedMesh===!0,zt=lt.isBatchedMesh===!0,Jt=!!D.map,Ue=!!D.matcap,G=!!q,be=!!D.aoMap,re=!!D.lightMap,te=!!D.bumpMap,Gt=!!D.normalMap,Pe=!!D.displacementMap,kt=!!D.emissiveMap,le=!!D.metalnessMap,Ve=!!D.roughnessMap,Xe=D.anisotropy>0,P=D.clearcoat>0,T=D.dispersion>0,it=D.iridescence>0,gt=D.sheen>0,mt=D.transmission>0,ht=Xe&&!!D.anisotropyMap,Bt=P&&!!D.clearcoatMap,wt=P&&!!D.clearcoatNormalMap,Zt=P&&!!D.clearcoatRoughnessMap,Kt=it&&!!D.iridescenceMap,At=it&&!!D.iridescenceThicknessMap,Lt=gt&&!!D.sheenColorMap,Xt=gt&&!!D.sheenRoughnessMap,Wt=!!D.specularMap,Nt=!!D.specularColorMap,ce=!!D.specularIntensityMap,W=mt&&!!D.transmissionMap,Rt=mt&&!!D.thicknessMap,z=!!D.gradientMap,ot=!!D.alphaMap,St=D.alphaTest>0,pt=!!D.alphaHash,Ot=!!D.extensions;let Yt=ja;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Yt=r.toneMapping);const Ae={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:Tt,fragmentShader:Ut,defines:D.defines,customVertexShaderID:Vt,customFragmentShaderID:et,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:zt,batchingColor:zt&&lt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&lt.instanceColor!==null,instancingMorph:Dt&&lt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Ur,alphaToCoverage:!!D.alphaToCoverage,map:Jt,matcap:Ue,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:Y,aoMap:be,lightMap:re,bumpMap:te,normalMap:Gt,displacementMap:S&&Pe,emissiveMap:kt,normalMapObjectSpace:Gt&&D.normalMapType===JS,normalMapTangentSpace:Gt&&D.normalMapType===QS,metalnessMap:le,roughnessMap:Ve,anisotropy:Xe,anisotropyMap:ht,clearcoat:P,clearcoatMap:Bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Zt,dispersion:T,iridescence:it,iridescenceMap:Kt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Lt,sheenRoughnessMap:Xt,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ce,transmission:mt,transmissionMap:W,thicknessMap:Rt,gradientMap:z,opaque:D.transparent===!1&&D.blending===Ar&&D.alphaToCoverage===!1,alphaMap:ot,alphaTest:St,alphaHash:pt,combine:D.combine,mapUv:Jt&&C(D.map.channel),aoMapUv:be&&C(D.aoMap.channel),lightMapUv:re&&C(D.lightMap.channel),bumpMapUv:te&&C(D.bumpMap.channel),normalMapUv:Gt&&C(D.normalMap.channel),displacementMapUv:Pe&&C(D.displacementMap.channel),emissiveMapUv:kt&&C(D.emissiveMap.channel),metalnessMapUv:le&&C(D.metalnessMap.channel),roughnessMapUv:Ve&&C(D.roughnessMap.channel),anisotropyMapUv:ht&&C(D.anisotropyMap.channel),clearcoatMapUv:Bt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:wt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:At&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&C(D.sheenRoughnessMap.channel),specularMapUv:Wt&&C(D.specularMap.channel),specularColorMapUv:Nt&&C(D.specularColorMap.channel),specularIntensityMapUv:ce&&C(D.specularIntensityMap.channel),transmissionMapUv:W&&C(D.transmissionMap.channel),thicknessMapUv:Rt&&C(D.thicknessMap.channel),alphaMapUv:ot&&C(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Gt||Xe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(Jt||ot),fog:!!vt,useFog:D.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:dt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Jt&&D.map.isVideoTexture===!0&&we.getTransfer(D.map.colorSpace)===He,decodeVideoTextureEmissive:kt&&D.emissiveMap.isVideoTexture===!0&&we.getTransfer(D.emissiveMap.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===Yn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ot&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&D.extensions.multiDraw===!0||zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ae.vertexUv1s=p.has(1),Ae.vertexUv2s=p.has(2),Ae.vertexUv3s=p.has(3),p.clear(),Ae}function _(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)w.push(j),w.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(I(w,D),L(w,D),w.push(r.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function I(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const w=b[D.type];let j;if(w){const Z=Pi[w];j=VM.clone(Z.uniforms)}else j=D.uniforms;return j}function F(D,w){let j;for(let Z=0,lt=g.length;Z<lt;Z++){const vt=g[Z];if(vt.cacheKey===w){j=vt,++j.usedTimes;break}}return j===void 0&&(j=new dA(r,w,D,c),g.push(j)),j}function k(D){if(--D.usedTimes===0){const w=g.indexOf(D);g[w]=g[g.length-1],g.pop(),D.destroy()}}function O(D){m.remove(D)}function V(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:F,releaseProgram:k,releaseShaderCache:O,programs:g,dispose:V}}function vA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function xA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function k0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function j0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(y,S,E,b,C,x){let _=r[t];return _===void 0?(_={id:y.id,object:y,geometry:S,material:E,groupOrder:b,renderOrder:y.renderOrder,z:C,group:x},r[t]=_):(_.id=y.id,_.object=y,_.geometry=S,_.material=E,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=C,_.group=x),t++,_}function d(y,S,E,b,C,x){const _=h(y,S,E,b,C,x);E.transmission>0?s.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(y,S,E,b,C,x){const _=h(y,S,E,b,C,x);E.transmission>0?s.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(y,S){i.length>1&&i.sort(y||xA),s.length>1&&s.sort(S||k0),l.length>1&&l.sort(S||k0)}function g(){for(let y=t,S=r.length;y<S;y++){const E=r[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function yA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new j0,r.set(s,[h])):l>=c.length?(h=new j0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function SA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new De};break;case"SpotLight":i={position:new J,direction:new J,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function MA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let EA=0;function bA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TA(r){const t=new SA,i=MA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new Qe,h=new Qe;function d(p){let g=0,y=0,S=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,b=0,C=0,x=0,_=0,I=0,L=0,U=0,F=0,k=0,O=0;p.sort(bA);for(let D=0,w=p.length;D<w;D++){const j=p[D],Z=j.color,lt=j.intensity,vt=j.distance,ft=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=Z.r*lt,y+=Z.g*lt,S+=Z.b*lt;else if(j.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(j.sh.coefficients[B],lt);O++}else if(j.isDirectionalLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const q=j.shadow,Y=i.get(j);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,s.directionalShadow[E]=Y,s.directionalShadowMap[E]=ft,s.directionalShadowMatrix[E]=j.shadow.matrix,I++}s.directional[E]=B,E++}else if(j.isSpotLight){const B=t.get(j);B.position.setFromMatrixPosition(j.matrixWorld),B.color.copy(Z).multiplyScalar(lt),B.distance=vt,B.coneCos=Math.cos(j.angle),B.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),B.decay=j.decay,s.spot[C]=B;const q=j.shadow;if(j.map&&(s.spotLightMap[F]=j.map,F++,q.updateMatrices(j),j.castShadow&&k++),s.spotLightMatrix[C]=q.matrix,j.castShadow){const Y=i.get(j);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=ft,U++}C++}else if(j.isRectAreaLight){const B=t.get(j);B.color.copy(Z).multiplyScalar(lt),B.halfWidth.set(j.width*.5,0,0),B.halfHeight.set(0,j.height*.5,0),s.rectArea[x]=B,x++}else if(j.isPointLight){const B=t.get(j);if(B.color.copy(j.color).multiplyScalar(j.intensity),B.distance=j.distance,B.decay=j.decay,j.castShadow){const q=j.shadow,Y=i.get(j);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,s.pointShadow[b]=Y,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=j.shadow.matrix,L++}s.point[b]=B,b++}else if(j.isHemisphereLight){const B=t.get(j);B.skyColor.copy(j.color).multiplyScalar(lt),B.groundColor.copy(j.groundColor).multiplyScalar(lt),s.hemi[_]=B,_++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=y,s.ambient[2]=S;const V=s.hash;(V.directionalLength!==E||V.pointLength!==b||V.spotLength!==C||V.rectAreaLength!==x||V.hemiLength!==_||V.numDirectionalShadows!==I||V.numPointShadows!==L||V.numSpotShadows!==U||V.numSpotMaps!==F||V.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=x,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=U+F-k,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=O,V.directionalLength=E,V.pointLength=b,V.spotLength=C,V.rectAreaLength=x,V.hemiLength=_,V.numDirectionalShadows=I,V.numPointShadows=L,V.numSpotShadows=U,V.numSpotMaps=F,V.numLightProbes=O,s.version=EA++)}function m(p,g){let y=0,S=0,E=0,b=0,C=0;const x=g.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const L=p[_];if(L.isDirectionalLight){const U=s.directional[y];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),y++}else if(L.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),E++}else if(L.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),h.identity(),c.copy(L.matrixWorld),c.premultiply(x),h.extractRotation(c),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(L.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(x),S++}else if(L.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:s}}function X0(r){const t=new TA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function AA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new X0(r),t.set(l,[d])):c>=h.length?(d=new X0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const RA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CA=`uniform sampler2D shadow_pass;
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
}`;function wA(r,t,i){let s=new Sv;const l=new me,c=new me,h=new sn,d=new JM({depthPacking:KS}),m=new $M,p={},g=i.maxTextureSize,y={[Wa]:Yn,[Yn]:Wa,[ra]:ra},S=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:RA,fragmentShader:CA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let _=this.type;this.render=function(k,O,V){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const D=r.getRenderTarget(),w=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ka),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const lt=_!==aa&&this.type===aa,vt=_===aa&&this.type!==aa;for(let ft=0,B=k.length;ft<B;ft++){const q=k[ft],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const _t=Y.getFrameExtents();if(l.multiply(_t),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/_t.x),l.x=c.x*_t.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/_t.y),l.y=c.y*_t.y,Y.mapSize.y=c.y)),Y.map===null||lt===!0||vt===!0){const tt=this.type!==aa?{minFilter:Ri,magFilter:Ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new bs(l.x,l.y,tt),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const N=Y.getViewportCount();for(let tt=0;tt<N;tt++){const Et=Y.getViewport(tt);h.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),Z.viewport(h),Y.updateMatrices(q,tt),s=Y.getFrustum(),U(O,V,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===aa&&I(Y,V),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,r.setRenderTarget(D,w,j)};function I(k,O){const V=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,E.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new bs(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(O,null,V,S,C,null),E.uniforms.shadow_pass.value=k.mapPass.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(O,null,V,E,C,null)}function L(k,O,V,D){let w=null;const j=V.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(j!==void 0)w=j;else if(w=V.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=w.uuid,lt=O.uuid;let vt=p[Z];vt===void 0&&(vt={},p[Z]=vt);let ft=vt[lt];ft===void 0&&(ft=w.clone(),vt[lt]=ft,O.addEventListener("dispose",F)),w=ft}if(w.visible=O.visible,w.wireframe=O.wireframe,D===aa?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:y[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=r.properties.get(w);Z.light=V}return w}function U(k,O,V,D,w){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&w===aa)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,k.matrixWorld);const lt=t.update(k),vt=k.material;if(Array.isArray(vt)){const ft=lt.groups;for(let B=0,q=ft.length;B<q;B++){const Y=ft[B],_t=vt[Y.materialIndex];if(_t&&_t.visible){const N=L(k,_t,D,w);k.onBeforeShadow(r,k,O,V,lt,N,Y),r.renderBufferDirect(V,null,lt,N,k,Y),k.onAfterShadow(r,k,O,V,lt,N,Y)}}}else if(vt.visible){const ft=L(k,vt,D,w);k.onBeforeShadow(r,k,O,V,lt,ft,null),r.renderBufferDirect(V,null,lt,ft,k,null),k.onAfterShadow(r,k,O,V,lt,ft,null)}}const Z=k.children;for(let lt=0,vt=Z.length;lt<vt;lt++)U(Z[lt],O,V,D,w)}function F(k){k.target.removeEventListener("dispose",F);for(const V in p){const D=p[V],w=k.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const DA={[qh]:Yh,[Zh]:Jh,[Kh]:$h,[Cr]:Qh,[Yh]:qh,[Jh]:Zh,[$h]:Kh,[Qh]:Cr};function UA(r,t){function i(){let W=!1;const Rt=new sn;let z=null;const ot=new sn(0,0,0,0);return{setMask:function(St){z!==St&&!W&&(r.colorMask(St,St,St,St),z=St)},setLocked:function(St){W=St},setClear:function(St,pt,Ot,Yt,Ae){Ae===!0&&(St*=Yt,pt*=Yt,Ot*=Yt),Rt.set(St,pt,Ot,Yt),ot.equals(Rt)===!1&&(r.clearColor(St,pt,Ot,Yt),ot.copy(Rt))},reset:function(){W=!1,z=null,ot.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,z=null,ot=null,St=null;return{setReversed:function(pt){if(Rt!==pt){const Ot=t.get("EXT_clip_control");pt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),Rt=pt;const Yt=St;St=null,this.setClear(Yt)}},getReversed:function(){return Rt},setTest:function(pt){pt?yt(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(pt){z!==pt&&!W&&(r.depthMask(pt),z=pt)},setFunc:function(pt){if(Rt&&(pt=DA[pt]),ot!==pt){switch(pt){case qh:r.depthFunc(r.NEVER);break;case Yh:r.depthFunc(r.ALWAYS);break;case Zh:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case Kh:r.depthFunc(r.EQUAL);break;case Qh:r.depthFunc(r.GEQUAL);break;case Jh:r.depthFunc(r.GREATER);break;case $h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ot=pt}},setLocked:function(pt){W=pt},setClear:function(pt){St!==pt&&(Rt&&(pt=1-pt),r.clearDepth(pt),St=pt)},reset:function(){W=!1,z=null,ot=null,St=null,Rt=!1}}}function l(){let W=!1,Rt=null,z=null,ot=null,St=null,pt=null,Ot=null,Yt=null,Ae=null;return{setTest:function(Te){W||(Te?yt(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(r.stencilMask(Te),Rt=Te)},setFunc:function(Te,_i,un){(z!==Te||ot!==_i||St!==un)&&(r.stencilFunc(Te,_i,un),z=Te,ot=_i,St=un)},setOp:function(Te,_i,un){(pt!==Te||Ot!==_i||Yt!==un)&&(r.stencilOp(Te,_i,un),pt=Te,Ot=_i,Yt=un)},setLocked:function(Te){W=Te},setClear:function(Te){Ae!==Te&&(r.clearStencil(Te),Ae=Te)},reset:function(){W=!1,Rt=null,z=null,ot=null,St=null,pt=null,Ot=null,Yt=null,Ae=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},y={},S=new WeakMap,E=[],b=null,C=!1,x=null,_=null,I=null,L=null,U=null,F=null,k=null,O=new De(0,0,0),V=0,D=!1,w=null,j=null,Z=null,lt=null,vt=null;const ft=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=q>=2);let _t=null,N={};const tt=r.getParameter(r.SCISSOR_BOX),Et=r.getParameter(r.VIEWPORT),Tt=new sn().fromArray(tt),Ut=new sn().fromArray(Et);function Vt(W,Rt,z,ot){const St=new Uint8Array(4),pt=r.createTexture();r.bindTexture(W,pt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<z;Ot++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,ot,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Rt+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return pt}const et={};et[r.TEXTURE_2D]=Vt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),yt(r.DEPTH_TEST),h.setFunc(Cr),te(!1),Gt(G_),yt(r.CULL_FACE),be(ka);function yt(W){g[W]!==!0&&(r.enable(W),g[W]=!0)}function dt(W){g[W]!==!1&&(r.disable(W),g[W]=!1)}function Dt(W,Rt){return y[W]!==Rt?(r.bindFramebuffer(W,Rt),y[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function zt(W,Rt){let z=E,ot=!1;if(W){z=S.get(Rt),z===void 0&&(z=[],S.set(Rt,z));const St=W.textures;if(z.length!==St.length||z[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,Ot=St.length;pt<Ot;pt++)z[pt]=r.COLOR_ATTACHMENT0+pt;z.length=St.length,ot=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,ot=!0);ot&&r.drawBuffers(z)}function Jt(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Ue={[vs]:r.FUNC_ADD,[MS]:r.FUNC_SUBTRACT,[ES]:r.FUNC_REVERSE_SUBTRACT};Ue[bS]=r.MIN,Ue[TS]=r.MAX;const G={[AS]:r.ZERO,[RS]:r.ONE,[CS]:r.SRC_COLOR,[Xh]:r.SRC_ALPHA,[OS]:r.SRC_ALPHA_SATURATE,[NS]:r.DST_COLOR,[DS]:r.DST_ALPHA,[wS]:r.ONE_MINUS_SRC_COLOR,[Wh]:r.ONE_MINUS_SRC_ALPHA,[LS]:r.ONE_MINUS_DST_COLOR,[US]:r.ONE_MINUS_DST_ALPHA,[PS]:r.CONSTANT_COLOR,[zS]:r.ONE_MINUS_CONSTANT_COLOR,[IS]:r.CONSTANT_ALPHA,[BS]:r.ONE_MINUS_CONSTANT_ALPHA};function be(W,Rt,z,ot,St,pt,Ot,Yt,Ae,Te){if(W===ka){C===!0&&(dt(r.BLEND),C=!1);return}if(C===!1&&(yt(r.BLEND),C=!0),W!==SS){if(W!==x||Te!==D){if((_!==vs||U!==vs)&&(r.blendEquation(r.FUNC_ADD),_=vs,U=vs),Te)switch(W){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V_:r.blendFunc(r.ONE,r.ONE);break;case k_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,L=null,F=null,k=null,O.set(0,0,0),V=0,x=W,D=Te}return}St=St||Rt,pt=pt||z,Ot=Ot||ot,(Rt!==_||St!==U)&&(r.blendEquationSeparate(Ue[Rt],Ue[St]),_=Rt,U=St),(z!==I||ot!==L||pt!==F||Ot!==k)&&(r.blendFuncSeparate(G[z],G[ot],G[pt],G[Ot]),I=z,L=ot,F=pt,k=Ot),(Yt.equals(O)===!1||Ae!==V)&&(r.blendColor(Yt.r,Yt.g,Yt.b,Ae),O.copy(Yt),V=Ae),x=W,D=!1}function re(W,Rt){W.side===ra?dt(r.CULL_FACE):yt(r.CULL_FACE);let z=W.side===Yn;Rt&&(z=!z),te(z),W.blending===Ar&&W.transparent===!1?be(ka):be(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const ot=W.stencilWrite;d.setTest(ot),ot&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),kt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?yt(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function Gt(W){W!==vS?(yt(r.CULL_FACE),W!==j&&(W===G_?r.cullFace(r.BACK):W===xS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),j=W}function Pe(W){W!==Z&&(B&&r.lineWidth(W),Z=W)}function kt(W,Rt,z){W?(yt(r.POLYGON_OFFSET_FILL),(lt!==Rt||vt!==z)&&(r.polygonOffset(Rt,z),lt=Rt,vt=z)):dt(r.POLYGON_OFFSET_FILL)}function le(W){W?yt(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function Ve(W){W===void 0&&(W=r.TEXTURE0+ft-1),_t!==W&&(r.activeTexture(W),_t=W)}function Xe(W,Rt,z){z===void 0&&(_t===null?z=r.TEXTURE0+ft-1:z=_t);let ot=N[z];ot===void 0&&(ot={type:void 0,texture:void 0},N[z]=ot),(ot.type!==W||ot.texture!==Rt)&&(_t!==z&&(r.activeTexture(z),_t=z),r.bindTexture(W,Rt||et[W]),ot.type=W,ot.texture=Rt)}function P(){const W=N[_t];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Kt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(W){Tt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Tt.copy(W))}function Xt(W){Ut.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ut.copy(W))}function Wt(W,Rt){let z=p.get(Rt);z===void 0&&(z=new WeakMap,p.set(Rt,z));let ot=z.get(W);ot===void 0&&(ot=r.getUniformBlockIndex(Rt,W.name),z.set(W,ot))}function Nt(W,Rt){const ot=p.get(Rt).get(W);m.get(Rt)!==ot&&(r.uniformBlockBinding(Rt,ot,W.__bindingPointIndex),m.set(Rt,ot))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},_t=null,N={},y={},S=new WeakMap,E=[],b=null,C=!1,x=null,_=null,I=null,L=null,U=null,F=null,k=null,O=new De(0,0,0),V=0,D=!1,w=null,j=null,Z=null,lt=null,vt=null,Tt.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:yt,disable:dt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:Jt,setBlending:be,setMaterial:re,setFlipSided:te,setCullFace:Gt,setLineWidth:Pe,setPolygonOffset:kt,setScissorTest:le,activeTexture:Ve,bindTexture:Xe,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Kt,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:wt,texStorage3D:Zt,texSubImage2D:gt,texSubImage3D:mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Bt,scissor:Lt,viewport:Xt,reset:ce}}function NA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new me,g=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return E?new OffscreenCanvas(P,T):Xc("canvas")}function C(P,T,it){let gt=1;const mt=Xe(P);if((mt.width>it||mt.height>it)&&(gt=it/Math.max(mt.width,mt.height)),gt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(gt*mt.width),Bt=Math.floor(gt*mt.height);y===void 0&&(y=b(ht,Bt));const wt=T?b(ht,Bt):y;return wt.width=ht,wt.height=Bt,wt.getContext("2d").drawImage(P,0,0,ht,Bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ht+"x"+Bt+")."),wt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),P;return P}function x(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,T,it,gt,mt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=T;if(T===r.RED&&(it===r.FLOAT&&(ht=r.R32F),it===r.HALF_FLOAT&&(ht=r.R16F),it===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.R8UI),it===r.UNSIGNED_SHORT&&(ht=r.R16UI),it===r.UNSIGNED_INT&&(ht=r.R32UI),it===r.BYTE&&(ht=r.R8I),it===r.SHORT&&(ht=r.R16I),it===r.INT&&(ht=r.R32I)),T===r.RG&&(it===r.FLOAT&&(ht=r.RG32F),it===r.HALF_FLOAT&&(ht=r.RG16F),it===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RG8UI),it===r.UNSIGNED_SHORT&&(ht=r.RG16UI),it===r.UNSIGNED_INT&&(ht=r.RG32UI),it===r.BYTE&&(ht=r.RG8I),it===r.SHORT&&(ht=r.RG16I),it===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),it===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),it===r.UNSIGNED_INT&&(ht=r.RGB32UI),it===r.BYTE&&(ht=r.RGB8I),it===r.SHORT&&(ht=r.RGB16I),it===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),it===r.UNSIGNED_INT&&(ht=r.RGBA32UI),it===r.BYTE&&(ht=r.RGBA8I),it===r.SHORT&&(ht=r.RGBA16I),it===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&(it===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),it===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const Bt=mt?kc:we.getTransfer(gt);it===r.FLOAT&&(ht=r.RGBA32F),it===r.HALF_FLOAT&&(ht=r.RGBA16F),it===r.UNSIGNED_BYTE&&(ht=Bt===He?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function U(P,T){let it;return P?T===null||T===Ms||T===Vo?it=r.DEPTH24_STENCIL8:T===oa?it=r.DEPTH32F_STENCIL8:T===Go&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===Vo?it=r.DEPTH_COMPONENT24:T===oa?it=r.DEPTH_COMPONENT32F:T===Go&&(it=r.DEPTH_COMPONENT16),it}function F(P,T){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ri&&P.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function k(P){const T=P.target;T.removeEventListener("dispose",k),V(T),T.isVideoTexture&&g.delete(T)}function O(P){const T=P.target;T.removeEventListener("dispose",O),w(T)}function V(P){const T=s.get(P);if(T.__webglInit===void 0)return;const it=P.source,gt=S.get(it);if(gt){const mt=gt[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&D(P),Object.keys(gt).length===0&&S.delete(it)}s.remove(P)}function D(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const it=P.source,gt=S.get(it);delete gt[T.__cacheKey],h.memory.textures--}function w(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let mt=0;mt<T.__webglFramebuffer[gt].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[gt][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)r.deleteFramebuffer(T.__webglFramebuffer[gt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=P.textures;for(let gt=0,mt=it.length;gt<mt;gt++){const ht=s.get(it[gt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(it[gt])}s.remove(P)}let j=0;function Z(){j=0}function lt(){const P=j;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),j+=1,P}function vt(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ft(P,T){const it=s.get(P);if(P.isVideoTexture&&le(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&it.__version!==P.version){const gt=P.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(it,P,T);return}}else P.isExternalTexture&&(it.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+T)}function B(P,T){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){et(it,P,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+T)}function q(P,T){const it=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){et(it,P,T);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+T)}function Y(P,T){const it=s.get(P);if(P.version>0&&it.__version!==P.version){yt(it,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+T)}const _t={[nd]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[id]:r.MIRRORED_REPEAT},N={[Ri]:r.NEAREST,[YS]:r.NEAREST_MIPMAP_NEAREST,[rc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[ch]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},tt={[$S]:r.NEVER,[sM]:r.ALWAYS,[tM]:r.LESS,[fv]:r.LEQUAL,[eM]:r.EQUAL,[aM]:r.GEQUAL,[nM]:r.GREATER,[iM]:r.NOTEQUAL};function Et(P,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===ch||T.magFilter===rc||T.magFilter===Ss||T.minFilter===zi||T.minFilter===ch||T.minFilter===rc||T.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,_t[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,_t[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,_t[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ri||T.minFilter!==rc&&T.minFilter!==Ss||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Tt(P,T){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",k));const gt=T.source;let mt=S.get(gt);mt===void 0&&(mt={},S.set(gt,mt));const ht=vt(T);if(ht!==P.__cacheKey){mt[ht]===void 0&&(mt[ht]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,it=!0),mt[ht].usedTimes++;const Bt=mt[P.__cacheKey];Bt!==void 0&&(mt[P.__cacheKey].usedTimes--,Bt.usedTimes===0&&D(T)),P.__cacheKey=ht,P.__webglTexture=mt[ht].texture}return it}function Ut(P,T,it){return Math.floor(Math.floor(P/it)/T)}function Vt(P,T,it,gt){const ht=P.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,it,gt,T.data);else{ht.sort((At,Lt)=>At.start-Lt.start);let Bt=0;for(let At=1;At<ht.length;At++){const Lt=ht[Bt],Xt=ht[At],Wt=Lt.start+Lt.count,Nt=Ut(Xt.start,T.width,4),ce=Ut(Lt.start,T.width,4);Xt.start<=Wt+1&&Nt===ce&&Ut(Xt.start+Xt.count-1,T.width,4)===Nt?Lt.count=Math.max(Lt.count,Xt.start+Xt.count-Lt.start):(++Bt,ht[Bt]=Xt)}ht.length=Bt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),Zt=r.getParameter(r.UNPACK_SKIP_PIXELS),Kt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let At=0,Lt=ht.length;At<Lt;At++){const Xt=ht[At],Wt=Math.floor(Xt.start/4),Nt=Math.ceil(Xt.count/4),ce=Wt%T.width,W=Math.floor(Wt/T.width),Rt=Nt,z=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ce,W,Rt,z,it,gt,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Kt)}}function et(P,T,it){let gt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=r.TEXTURE_3D);const mt=Tt(P,T),ht=T.source;i.bindTexture(gt,P.__webglTexture,r.TEXTURE0+it);const Bt=s.get(ht);if(ht.version!==Bt.__version||mt===!0){i.activeTexture(r.TEXTURE0+it);const wt=we.getPrimaries(we.workingColorSpace),Zt=T.colorSpace===Va?null:we.getPrimaries(T.colorSpace),Kt=T.colorSpace===Va||wt===Zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let At=C(T.image,!1,l.maxTextureSize);At=Ve(T,At);const Lt=c.convert(T.format,T.colorSpace),Xt=c.convert(T.type);let Wt=L(T.internalFormat,Lt,Xt,T.colorSpace,T.isVideoTexture);Et(gt,T);let Nt;const ce=T.mipmaps,W=T.isVideoTexture!==!0,Rt=Bt.__version===void 0||mt===!0,z=ht.dataReady,ot=F(T,At);if(T.isDepthTexture)Wt=U(T.format===jo,T.type),Rt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Wt,At.width,At.height):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,Lt,Xt,null));else if(T.isDataTexture)if(ce.length>0){W&&Rt&&i.texStorage2D(r.TEXTURE_2D,ot,Wt,ce[0].width,ce[0].height);for(let St=0,pt=ce.length;St<pt;St++)Nt=ce[St],W?z&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):i.texImage2D(r.TEXTURE_2D,St,Wt,Nt.width,Nt.height,0,Lt,Xt,Nt.data);T.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(r.TEXTURE_2D,ot,Wt,At.width,At.height),z&&Vt(T,At,Lt,Xt)):i.texImage2D(r.TEXTURE_2D,0,Wt,At.width,At.height,0,Lt,Xt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Wt,ce[0].width,ce[0].height,At.depth);for(let St=0,pt=ce.length;St<pt;St++)if(Nt=ce[St],T.format!==Ai)if(Lt!==null)if(W){if(z)if(T.layerUpdates.size>0){const Ot=S0(Nt.width,Nt.height,T.format,T.type);for(const Yt of T.layerUpdates){const Ae=Nt.data.subarray(Yt*Ot/Nt.data.BYTES_PER_ELEMENT,(Yt+1)*Ot/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,Yt,Nt.width,Nt.height,1,Lt,Ae)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Nt.width,Nt.height,At.depth,Lt,Nt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Wt,Nt.width,Nt.height,At.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?z&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Nt.width,Nt.height,At.depth,Lt,Xt,Nt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,Wt,Nt.width,Nt.height,At.depth,0,Lt,Xt,Nt.data)}else{W&&Rt&&i.texStorage2D(r.TEXTURE_2D,ot,Wt,ce[0].width,ce[0].height);for(let St=0,pt=ce.length;St<pt;St++)Nt=ce[St],T.format!==Ai?Lt!==null?W?z&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Nt.width,Nt.height,Lt,Nt.data):i.compressedTexImage2D(r.TEXTURE_2D,St,Wt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?z&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Nt.width,Nt.height,Lt,Xt,Nt.data):i.texImage2D(r.TEXTURE_2D,St,Wt,Nt.width,Nt.height,0,Lt,Xt,Nt.data)}else if(T.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ot,Wt,At.width,At.height,At.depth),z)if(T.layerUpdates.size>0){const St=S0(At.width,At.height,T.format,T.type);for(const pt of T.layerUpdates){const Ot=At.data.subarray(pt*St/At.data.BYTES_PER_ELEMENT,(pt+1)*St/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,At.width,At.height,1,Lt,Xt,Ot)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Lt,Xt,At.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Wt,At.width,At.height,At.depth,0,Lt,Xt,At.data);else if(T.isData3DTexture)W?(Rt&&i.texStorage3D(r.TEXTURE_3D,ot,Wt,At.width,At.height,At.depth),z&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Lt,Xt,At.data)):i.texImage3D(r.TEXTURE_3D,0,Wt,At.width,At.height,At.depth,0,Lt,Xt,At.data);else if(T.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(r.TEXTURE_2D,ot,Wt,At.width,At.height);else{let St=At.width,pt=At.height;for(let Ot=0;Ot<ot;Ot++)i.texImage2D(r.TEXTURE_2D,Ot,Wt,St,pt,0,Lt,Xt,null),St>>=1,pt>>=1}}else if(ce.length>0){if(W&&Rt){const St=Xe(ce[0]);i.texStorage2D(r.TEXTURE_2D,ot,Wt,St.width,St.height)}for(let St=0,pt=ce.length;St<pt;St++)Nt=ce[St],W?z&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Lt,Xt,Nt):i.texImage2D(r.TEXTURE_2D,St,Wt,Lt,Xt,Nt);T.generateMipmaps=!1}else if(W){if(Rt){const St=Xe(At);i.texStorage2D(r.TEXTURE_2D,ot,Wt,St.width,St.height)}z&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Xt,At)}else i.texImage2D(r.TEXTURE_2D,0,Wt,Lt,Xt,At);x(T)&&_(gt),Bt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function yt(P,T,it){if(T.image.length!==6)return;const gt=Tt(P,T),mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+it);const ht=s.get(mt);if(mt.version!==ht.__version||gt===!0){i.activeTexture(r.TEXTURE0+it);const Bt=we.getPrimaries(we.workingColorSpace),wt=T.colorSpace===Va?null:we.getPrimaries(T.colorSpace),Zt=T.colorSpace===Va||Bt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let pt=0;pt<6;pt++)!Kt&&!At?Lt[pt]=C(T.image[pt],!0,l.maxCubemapSize):Lt[pt]=At?T.image[pt].image:T.image[pt],Lt[pt]=Ve(T,Lt[pt]);const Xt=Lt[0],Wt=c.convert(T.format,T.colorSpace),Nt=c.convert(T.type),ce=L(T.internalFormat,Wt,Nt,T.colorSpace),W=T.isVideoTexture!==!0,Rt=ht.__version===void 0||gt===!0,z=mt.dataReady;let ot=F(T,Xt);Et(r.TEXTURE_CUBE_MAP,T);let St;if(Kt){W&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ce,Xt.width,Xt.height);for(let pt=0;pt<6;pt++){St=Lt[pt].mipmaps;for(let Ot=0;Ot<St.length;Ot++){const Yt=St[Ot];T.format!==Ai?Wt!==null?W?z&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,0,0,Yt.width,Yt.height,Wt,Yt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,ce,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,0,0,Yt.width,Yt.height,Wt,Nt,Yt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot,ce,Yt.width,Yt.height,0,Wt,Nt,Yt.data)}}}else{if(St=T.mipmaps,W&&Rt){St.length>0&&ot++;const pt=Xe(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ce,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(At){W?z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Lt[pt].width,Lt[pt].height,Wt,Nt,Lt[pt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,Lt[pt].width,Lt[pt].height,0,Wt,Nt,Lt[pt].data);for(let Ot=0;Ot<St.length;Ot++){const Ae=St[Ot].image[pt].image;W?z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,0,0,Ae.width,Ae.height,Wt,Nt,Ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,ce,Ae.width,Ae.height,0,Wt,Nt,Ae.data)}}else{W?z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Wt,Nt,Lt[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ce,Wt,Nt,Lt[pt]);for(let Ot=0;Ot<St.length;Ot++){const Yt=St[Ot];W?z&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,0,0,Wt,Nt,Yt.image[pt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ot+1,ce,Wt,Nt,Yt.image[pt])}}}x(T)&&_(r.TEXTURE_CUBE_MAP),ht.__version=mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function dt(P,T,it,gt,mt,ht){const Bt=c.convert(it.format,it.colorSpace),wt=c.convert(it.type),Zt=L(it.internalFormat,Bt,wt,it.colorSpace),Kt=s.get(T),At=s.get(it);if(At.__renderTarget=T,!Kt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ht),Xt=Math.max(1,T.height>>ht);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,ht,Zt,Lt,Xt,T.depth,0,Bt,wt,null):i.texImage2D(mt,ht,Zt,Lt,Xt,0,Bt,wt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,mt,At.__webglTexture,0,Pe(T)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,mt,At.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(P,T,it){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const gt=T.depthTexture,mt=gt&&gt.isDepthTexture?gt.type:null,ht=U(T.stencilBuffer,mt),Bt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=Pe(T);kt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,wt,ht,T.width,T.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Bt,r.RENDERBUFFER,P)}else{const gt=T.textures;for(let mt=0;mt<gt.length;mt++){const ht=gt[mt],Bt=c.convert(ht.format,ht.colorSpace),wt=c.convert(ht.type),Zt=L(ht.internalFormat,Bt,wt,ht.colorSpace),Kt=Pe(T);it&&kt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Zt,T.width,T.height):kt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Kt,Zt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Zt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function zt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ft(T.depthTexture,0);const mt=gt.__webglTexture,ht=Pe(T);if(T.depthTexture.format===ko)kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(T.depthTexture.format===jo)kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Jt(P){const T=s.get(P),it=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const gt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",mt)};gt.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=gt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const gt=P.texture.mipmaps;gt&&gt.length>0?zt(T.__webglFramebuffer[0],P):zt(T.__webglFramebuffer,P)}else if(it){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=r.createRenderbuffer(),Dt(T.__webglDepthbuffer[gt],P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ht)}}else{const gt=P.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Dt(T.__webglDepthbuffer,P,!1);else{const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,T,it){const gt=s.get(P);T!==void 0&&dt(gt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&Jt(P)}function G(P){const T=P.texture,it=s.get(P),gt=s.get(T);P.addEventListener("dispose",O);const mt=P.textures,ht=P.isWebGLCubeRenderTarget===!0,Bt=mt.length>1;if(Bt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=T.version,h.memory.textures++),ht){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let Zt=0;Zt<T.mipmaps.length;Zt++)it.__webglFramebuffer[wt][Zt]=r.createFramebuffer()}else it.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)it.__webglFramebuffer[wt]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(Bt)for(let wt=0,Zt=mt.length;wt<Zt;wt++){const Kt=s.get(mt[wt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&kt(P)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<mt.length;wt++){const Zt=mt[wt];it.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const Kt=c.convert(Zt.format,Zt.colorSpace),At=c.convert(Zt.type),Lt=L(Zt.internalFormat,Kt,At,Zt.colorSpace,P.isXRRenderTarget===!0),Xt=Pe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,Lt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),Et(r.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)dt(it.__webglFramebuffer[wt][Zt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Zt);else dt(it.__webglFramebuffer[wt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(T)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Bt){for(let wt=0,Zt=mt.length;wt<Zt;wt++){const Kt=mt[wt],At=s.get(Kt);let Lt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,At.__webglTexture),Et(Lt,Kt),dt(it.__webglFramebuffer,P,Kt,r.COLOR_ATTACHMENT0+wt,Lt,0),x(Kt)&&_(Lt)}i.unbindTexture()}else{let wt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(wt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,gt.__webglTexture),Et(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Zt=0;Zt<T.mipmaps.length;Zt++)dt(it.__webglFramebuffer[Zt],P,T,r.COLOR_ATTACHMENT0,wt,Zt);else dt(it.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,wt,0);x(T)&&_(wt),i.unbindTexture()}P.depthBuffer&&Jt(P)}function be(P){const T=P.textures;for(let it=0,gt=T.length;it<gt;it++){const mt=T[it];if(x(mt)){const ht=I(P),Bt=s.get(mt).__webglTexture;i.bindTexture(ht,Bt),_(ht),i.unbindTexture()}}}const re=[],te=[];function Gt(P){if(P.samples>0){if(kt(P)===!1){const T=P.textures,it=P.width,gt=P.height;let mt=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Bt=s.get(P),wt=T.length>1;if(wt)for(let Kt=0;Kt<T.length;Kt++)i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer);const Zt=P.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Kt]);const At=s.get(T[Kt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,it,gt,0,0,it,gt,mt,r.NEAREST),m===!0&&(re.length=0,te.length=0,re.push(r.COLOR_ATTACHMENT0+Kt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(ht),te.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let Kt=0;Kt<T.length;Kt++){i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.RENDERBUFFER,Bt.__webglColorRenderbuffer[Kt]);const At=s.get(T[Kt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Kt,r.TEXTURE_2D,At,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Bt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Pe(P){return Math.min(l.maxSamples,P.samples)}function kt(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function le(P){const T=h.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Ve(P,T){const it=P.colorSpace,gt=P.format,mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==Ur&&it!==Va&&(we.getTransfer(it)===He?(gt!==Ai||mt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=Z,this.setTexture2D=ft,this.setTexture2DArray=B,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=Ue,this.setupRenderTarget=G,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=kt}function LA(r,t){function i(s,l=Va){let c;const h=we.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===sv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===rv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===iv)return r.BYTE;if(s===av)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===Bd)return r.INT;if(s===Ms)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===qo)return r.HALF_FLOAT;if(s===ov)return r.ALPHA;if(s===lv)return r.RGB;if(s===Ai)return r.RGBA;if(s===ko)return r.DEPTH_COMPONENT;if(s===jo)return r.DEPTH_STENCIL;if(s===cv)return r.RED;if(s===Gd)return r.RED_INTEGER;if(s===uv)return r.RG;if(s===Vd)return r.RG_INTEGER;if(s===kd)return r.RGBA_INTEGER;if(s===zc||s===Ic||s===Bc||s===Fc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===sd||s===rd||s===od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===cd||s===ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ld||s===cd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Td||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Td)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Cd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const OA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PA=`
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

}`;class zA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:OA,fragmentShader:PA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Qc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IA extends Ts{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,y=null,S=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",x=new zA,_={},I=i.getContextAttributes();let L=null,U=null;const F=[],k=[],O=new me;let V=null;const D=new si;D.viewport=new sn;const w=new si;w.viewport=new sn;const j=[D,w],Z=new eE;let lt=null,vt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let yt=F[et];return yt===void 0&&(yt=new Dh,F[et]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(et){let yt=F[et];return yt===void 0&&(yt=new Dh,F[et]=yt),yt.getGripSpace()},this.getHand=function(et){let yt=F[et];return yt===void 0&&(yt=new Dh,F[et]=yt),yt.getHandSpace()};function ft(et){const yt=k.indexOf(et.inputSource);if(yt===-1)return;const dt=F[yt];dt!==void 0&&(dt.update(et.inputSource,et.frame,p||h),dt.dispatchEvent({type:et.type,data:et.inputSource}))}function B(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",q);for(let et=0;et<F.length;et++){const yt=k[et];yt!==null&&(k[et]=null,F[et].disconnect(yt))}lt=null,vt=null,x.reset();for(const et in _)delete _[et];t.setRenderTarget(L),E=null,S=null,y=null,l=null,U=null,Vt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",B),l.addEventListener("inputsourceschange",q),I.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Dt=null,zt=null;I.depth&&(zt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,dt=I.stencil?jo:ko,Dt=I.stencil?Vo:Ms);const Jt={colorFormat:i.RGBA8,depthFormat:zt,scaleFactor:c};y=this.getBinding(),S=y.createProjectionLayer(Jt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),U=new bs(S.textureWidth,S.textureHeight,{format:Ai,type:ca,depthTexture:new Av(S.textureWidth,S.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const dt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,dt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new bs(E.framebufferWidth,E.framebufferHeight,{format:Ai,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Vt.setContext(l),Vt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(et){for(let yt=0;yt<et.removed.length;yt++){const dt=et.removed[yt],Dt=k.indexOf(dt);Dt>=0&&(k[Dt]=null,F[Dt].disconnect(dt))}for(let yt=0;yt<et.added.length;yt++){const dt=et.added[yt];let Dt=k.indexOf(dt);if(Dt===-1){for(let Jt=0;Jt<F.length;Jt++)if(Jt>=k.length){k.push(dt),Dt=Jt;break}else if(k[Jt]===null){k[Jt]=dt,Dt=Jt;break}if(Dt===-1)break}const zt=F[Dt];zt&&zt.connect(dt)}}const Y=new J,_t=new J;function N(et,yt,dt){Y.setFromMatrixPosition(yt.matrixWorld),_t.setFromMatrixPosition(dt.matrixWorld);const Dt=Y.distanceTo(_t),zt=yt.projectionMatrix.elements,Jt=dt.projectionMatrix.elements,Ue=zt[14]/(zt[10]-1),G=zt[14]/(zt[10]+1),be=(zt[9]+1)/zt[5],re=(zt[9]-1)/zt[5],te=(zt[8]-1)/zt[0],Gt=(Jt[8]+1)/Jt[0],Pe=Ue*te,kt=Ue*Gt,le=Dt/(-te+Gt),Ve=le*-te;if(yt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ve),et.translateZ(le),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),zt[10]===-1)et.projectionMatrix.copy(yt.projectionMatrix),et.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const Xe=Ue+le,P=G+le,T=Pe-Ve,it=kt+(Dt-Ve),gt=be*G/P*Xe,mt=re*G/P*Xe;et.projectionMatrix.makePerspective(T,it,gt,mt,Xe,P),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function tt(et,yt){yt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(yt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let yt=et.near,dt=et.far;x.texture!==null&&(x.depthNear>0&&(yt=x.depthNear),x.depthFar>0&&(dt=x.depthFar)),Z.near=w.near=D.near=yt,Z.far=w.far=D.far=dt,(lt!==Z.near||vt!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),lt=Z.near,vt=Z.far),Z.layers.mask=et.layers.mask|6,D.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Dt=et.parent,zt=Z.cameras;tt(Z,Dt);for(let Jt=0;Jt<zt.length;Jt++)tt(zt[Jt],Dt);zt.length===2?N(Z,D,w):Z.projectionMatrix.copy(D.projectionMatrix),Et(et,Z,Dt)};function Et(et,yt,dt){dt===null?et.matrix.copy(yt.matrixWorld):(et.matrix.copy(dt.matrixWorld),et.matrix.invert(),et.matrix.multiply(yt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(yt.projectionMatrix),et.projectionMatrixInverse.copy(yt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xo*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(et){return _[et]};let Tt=null;function Ut(et,yt){if(g=yt.getViewerPose(p||h),b=yt,g!==null){const dt=g.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let Dt=!1;dt.length!==Z.cameras.length&&(Z.cameras.length=0,Dt=!0);for(let G=0;G<dt.length;G++){const be=dt[G];let re=null;if(E!==null)re=E.getViewport(be);else{const Gt=y.getViewSubImage(S,be);re=Gt.viewport,G===0&&(t.setRenderTargetTextures(U,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(U))}let te=j[G];te===void 0&&(te=new si,te.layers.enable(G),te.viewport=new sn,j[G]=te),te.matrix.fromArray(be.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(be.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),G===0&&(Z.matrix.copy(te.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Dt===!0&&Z.cameras.push(te)}const zt=l.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const G=y.getDepthInformation(dt[0]);G&&G.isValid&&G.texture&&x.init(G,l.renderState)}if(zt&&zt.includes("camera-access")&&C){t.state.unbindTexture(),y=s.getBinding();for(let G=0;G<dt.length;G++){const be=dt[G].camera;if(be){let re=_[be];re||(re=new Rv,_[be]=re);const te=y.getCameraImage(be);re.sourceTexture=te}}}}for(let dt=0;dt<F.length;dt++){const Dt=k[dt],zt=F[dt];Dt!==null&&zt!==void 0&&zt.update(Dt,yt,p||h)}Tt&&Tt(et,yt),yt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:yt}),b=null}const Vt=new Cv;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(et){Tt=et},this.dispose=function(){}}}const gs=new ua,BA=new Qe;function FA(r,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,vv(r)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,I,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),y(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),S(x,_),_.isMeshPhysicalMaterial&&E(x,_,U)):_.isMeshMatcapMaterial?(c(x,_),b(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),C(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(h(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?m(x,_,I,L):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Yn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Yn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const I=t.get(_),L=I.envMap,U=I.envMapRotation;L&&(x.envMap.value=L,gs.copy(U),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),x.envMapRotation.value.setFromMatrix4(BA.makeRotationFromEuler(gs)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,I,L){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*I,x.scale.value=L*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function S(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function E(x,_,I){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function C(x,_){const I=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function HA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const U=L.program;s.uniformBlockBinding(I,U)}function p(I,L){let U=l[I.id];U===void 0&&(b(I),U=g(I),l[I.id]=U,I.addEventListener("dispose",x));const F=L.program;s.updateUBOMapping(I,F);const k=t.render.frame;c[I.id]!==k&&(S(I),c[I.id]=k)}function g(I){const L=y();I.__bindingPointIndex=L;const U=r.createBuffer(),F=I.__size,k=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,U),U}function y(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(I){const L=l[I.id],U=I.uniforms,F=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let k=0,O=U.length;k<O;k++){const V=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,w=V.length;D<w;D++){const j=V[D];if(E(j,k,D,F)===!0){const Z=j.__offset,lt=Array.isArray(j.value)?j.value:[j.value];let vt=0;for(let ft=0;ft<lt.length;ft++){const B=lt[ft],q=C(B);typeof B=="number"||typeof B=="boolean"?(j.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,Z+vt,j.__data)):B.isMatrix3?(j.__data[0]=B.elements[0],j.__data[1]=B.elements[1],j.__data[2]=B.elements[2],j.__data[3]=0,j.__data[4]=B.elements[3],j.__data[5]=B.elements[4],j.__data[6]=B.elements[5],j.__data[7]=0,j.__data[8]=B.elements[6],j.__data[9]=B.elements[7],j.__data[10]=B.elements[8],j.__data[11]=0):(B.toArray(j.__data,vt),vt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,j.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(I,L,U,F){const k=I.value,O=L+"_"+U;if(F[O]===void 0)return typeof k=="number"||typeof k=="boolean"?F[O]=k:F[O]=k.clone(),!0;{const V=F[O];if(typeof k=="number"||typeof k=="boolean"){if(V!==k)return F[O]=k,!0}else if(V.equals(k)===!1)return V.copy(k),!0}return!1}function b(I){const L=I.uniforms;let U=0;const F=16;for(let O=0,V=L.length;O<V;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let w=0,j=D.length;w<j;w++){const Z=D[w],lt=Array.isArray(Z.value)?Z.value:[Z.value];for(let vt=0,ft=lt.length;vt<ft;vt++){const B=lt[vt],q=C(B),Y=U%F,_t=Y%q.boundary,N=Y+_t;U+=_t,N!==0&&F-N<q.storage&&(U+=F-N),Z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=q.storage}}}const k=U%F;return k>0&&(U+=F-k),I.__size=U,I.__cache={},this}function C(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function x(I){const L=I.target;L.removeEventListener("dispose",x);const U=h.indexOf(L.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const I in l)r.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class GA{constructor(t={}){const{canvas:i=MM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const b=new Uint32Array(4),C=new Int32Array(4);let x=null,_=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let F=!1;this._outputColorSpace=Fn;let k=0,O=0,V=null,D=-1,w=null;const j=new sn,Z=new sn;let lt=null;const vt=new De(0);let ft=0,B=i.width,q=i.height,Y=1,_t=null,N=null;const tt=new sn(0,0,B,q),Et=new sn(0,0,B,q);let Tt=!1;const Ut=new Sv;let Vt=!1,et=!1;const yt=new Qe,dt=new J,Dt=new sn,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Ue(){return V===null?Y:1}let G=s;function be(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",z,!1),i.addEventListener("webglcontextrestored",ot,!1),i.addEventListener("webglcontextcreationerror",St,!1),G===null){const K="webgl2";if(G=be(K,R),G===null)throw be(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let re,te,Gt,Pe,kt,le,Ve,Xe,P,T,it,gt,mt,ht,Bt,wt,Zt,Kt,At,Lt,Xt,Wt,Nt,ce;function W(){re=new Q1(G),re.init(),Wt=new LA(G,re),te=new j1(G,re,t,Wt),Gt=new UA(G,re),te.reversedDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),Pe=new tT(G),kt=new vA,le=new NA(G,re,Gt,kt,te,Wt,Pe),Ve=new W1(U),Xe=new K1(U),P=new rE(G),Nt=new V1(G,P),T=new J1(G,P,Pe,Nt),it=new nT(G,T,P,Pe),At=new eT(G,te,le),wt=new X1(kt),gt=new _A(U,Ve,Xe,re,te,Nt,wt),mt=new FA(U,kt),ht=new yA,Bt=new AA(re),Kt=new G1(U,Ve,Xe,Gt,it,E,m),Zt=new wA(U,it,te),ce=new HA(G,Pe,te,Gt),Lt=new k1(G,re,Pe),Xt=new $1(G,re,Pe),Pe.programs=gt.programs,U.capabilities=te,U.extensions=re,U.properties=kt,U.renderLists=ht,U.shadowMap=Zt,U.state=Gt,U.info=Pe}W();const Rt=new IA(U,G);this.xr=Rt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,q,!1))},this.getSize=function(R){return R.set(B,q)},this.setSize=function(R,K,ct=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,q=K,i.width=Math.floor(R*Y),i.height=Math.floor(K*Y),ct===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(B*Y,q*Y).floor()},this.setDrawingBufferSize=function(R,K,ct){B=R,q=K,Y=ct,i.width=Math.floor(R*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(j)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,K,ct,ut){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,K,ct,ut),Gt.viewport(j.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,K,ct,ut){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,K,ct,ut),Gt.scissor(Z.copy(Et).multiplyScalar(Y).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(R){Gt.setScissorTest(Tt=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ct=!0){let ut=0;if(R){let $=!1;if(V!==null){const Ct=V.texture.format;$=Ct===kd||Ct===Vd||Ct===Gd}if($){const Ct=V.texture.type,It=Ct===ca||Ct===Ms||Ct===Go||Ct===Vo||Ct===Fd||Ct===Hd,jt=Kt.getClearColor(),Ft=Kt.getClearAlpha(),ne=jt.r,ae=jt.g,Qt=jt.b;It?(b[0]=ne,b[1]=ae,b[2]=Qt,b[3]=Ft,G.clearBufferuiv(G.COLOR,0,b)):(C[0]=ne,C[1]=ae,C[2]=Qt,C[3]=Ft,G.clearBufferiv(G.COLOR,0,C))}else ut|=G.COLOR_BUFFER_BIT}K&&(ut|=G.DEPTH_BUFFER_BIT),ct&&(ut|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",z,!1),i.removeEventListener("webglcontextrestored",ot,!1),i.removeEventListener("webglcontextcreationerror",St,!1),Kt.dispose(),ht.dispose(),Bt.dispose(),kt.dispose(),Ve.dispose(),Xe.dispose(),it.dispose(),Nt.dispose(),ce.dispose(),gt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",un),Rt.removeEventListener("sessionend",fn),Je.stop()};function z(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const R=Pe.autoReset,K=Zt.enabled,ct=Zt.autoUpdate,ut=Zt.needsUpdate,$=Zt.type;W(),Pe.autoReset=R,Zt.enabled=K,Zt.autoUpdate=ct,Zt.needsUpdate=ut,Zt.type=$}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pt(R){const K=R.target;K.removeEventListener("dispose",pt),Ot(K)}function Ot(R){Yt(R),kt.remove(R)}function Yt(R){const K=kt.get(R).programs;K!==void 0&&(K.forEach(function(ct){gt.releaseProgram(ct)}),R.isShaderMaterial&&gt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ct,ut,$,Ct){K===null&&(K=zt);const It=$.isMesh&&$.matrixWorld.determinant()<0,jt=fa(R,K,ct,ut,$);Gt.setMaterial(ut,It);let Ft=ct.index,ne=1;if(ut.wireframe===!0){if(Ft=T.getWireframeAttribute(ct),Ft===void 0)return;ne=2}const ae=ct.drawRange,Qt=ct.attributes.position;let he=ae.start*ne,Re=(ae.start+ae.count)*ne;Ct!==null&&(he=Math.max(he,Ct.start*ne),Re=Math.min(Re,(Ct.start+Ct.count)*ne)),Ft!==null?(he=Math.max(he,0),Re=Math.min(Re,Ft.count)):Qt!=null&&(he=Math.max(he,0),Re=Math.min(Re,Qt.count));const Ye=Re-he;if(Ye<0||Ye===1/0)return;Nt.setup($,ut,jt,ct,Ft);let ze,de=Lt;if(Ft!==null&&(ze=P.get(Ft),de=Xt,de.setIndex(ze)),$.isMesh)ut.wireframe===!0?(Gt.setLineWidth(ut.wireframeLinewidth*Ue()),de.setMode(G.LINES)):de.setMode(G.TRIANGLES);else if($.isLine){let ee=ut.linewidth;ee===void 0&&(ee=1),Gt.setLineWidth(ee*Ue()),$.isLineSegments?de.setMode(G.LINES):$.isLineLoop?de.setMode(G.LINE_LOOP):de.setMode(G.LINE_STRIP)}else $.isPoints?de.setMode(G.POINTS):$.isSprite&&de.setMode(G.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))de.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ee=$._multiDrawStarts,qe=$._multiDrawCounts,ye=$._multiDrawCount,Rn=Ft?P.get(Ft).bytesPerElement:1,vi=kt.get(ut).currentProgram.getUniforms();for(let On=0;On<ye;On++)vi.setValue(G,"_gl_DrawID",On),de.render(ee[On]/Rn,qe[On])}else if($.isInstancedMesh)de.renderInstances(he,Ye,$.count);else if(ct.isInstancedBufferGeometry){const ee=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,qe=Math.min(ct.instanceCount,ee);de.renderInstances(he,Ye,qe)}else de.render(he,Ye)};function Ae(R,K,ct){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,wi(R,K,ct),R.side=Wa,R.needsUpdate=!0,wi(R,K,ct),R.side=ra):wi(R,K,ct)}this.compile=function(R,K,ct=null){ct===null&&(ct=R),_=Bt.get(ct),_.init(K),L.push(_),ct.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),R!==ct&&R.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights();const ut=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let It=0;It<Ct.length;It++){const jt=Ct[It];Ae(jt,ct,$),ut.add(jt)}else Ae(Ct,ct,$),ut.add(Ct)}),_=L.pop(),ut},this.compileAsync=function(R,K,ct=null){const ut=this.compile(R,K,ct);return new Promise($=>{function Ct(){if(ut.forEach(function(It){kt.get(It).currentProgram.isReady()&&ut.delete(It)}),ut.size===0){$(R);return}setTimeout(Ct,10)}re.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Te=null;function _i(R){Te&&Te(R)}function un(){Je.stop()}function fn(){Je.start()}const Je=new Cv;Je.setAnimationLoop(_i),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(R){Te=R,Rt.setAnimationLoop(R),R===null?Je.stop():Je.start()},Rt.addEventListener("sessionstart",un),Rt.addEventListener("sessionend",fn),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(K),K=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,K,V),_=Bt.get(R,L.length),_.init(K),L.push(_),yt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ut.setFromProjectionMatrix(yt,Ii,K.reversedDepth),et=this.localClippingEnabled,Vt=wt.init(this.clippingPlanes,et),x=ht.get(R,I.length),x.init(),I.push(x),Rt.enabled===!0&&Rt.isPresenting===!0){const Ct=U.xr.getDepthSensingMesh();Ct!==null&&Ci(Ct,K,-1/0,U.sortObjects)}Ci(R,K,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(_t,N),Jt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Jt&&Kt.addToRenderList(x,R),this.info.render.frame++,Vt===!0&&wt.beginShadows();const ct=_.state.shadowsArray;Zt.render(ct,R,K),Vt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=x.opaque,$=x.transmissive;if(_.setupLights(),K.isArrayCamera){const Ct=K.cameras;if($.length>0)for(let It=0,jt=Ct.length;It<jt;It++){const Ft=Ct[It];Qo(ut,$,R,Ft)}Jt&&Kt.render(R);for(let It=0,jt=Ct.length;It<jt;It++){const Ft=Ct[It];As(x,R,Ft,Ft.viewport)}}else $.length>0&&Qo(ut,$,R,K),Jt&&Kt.render(R),As(x,R,K);V!==null&&O===0&&(le.updateMultisampleRenderTarget(V),le.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(U,R,K),Nt.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(_=L[L.length-1],Vt===!0&&wt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Ci(R,K,ct,ut){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){ut&&Dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(yt);const It=it.update(R),jt=R.material;jt.visible&&x.push(R,It,jt,ct,Dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const It=it.update(R),jt=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Dt.copy(R.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Dt.copy(It.boundingSphere.center)),Dt.applyMatrix4(R.matrixWorld).applyMatrix4(yt)),Array.isArray(jt)){const Ft=It.groups;for(let ne=0,ae=Ft.length;ne<ae;ne++){const Qt=Ft[ne],he=jt[Qt.materialIndex];he&&he.visible&&x.push(R,It,he,ct,Dt.z,Qt)}}else jt.visible&&x.push(R,It,jt,ct,Dt.z,null)}}const Ct=R.children;for(let It=0,jt=Ct.length;It<jt;It++)Ci(Ct[It],K,ct,ut)}function As(R,K,ct,ut){const $=R.opaque,Ct=R.transmissive,It=R.transparent;_.setupLightsView(ct),Vt===!0&&wt.setGlobalState(U.clippingPlanes,ct),ut&&Gt.viewport(j.copy(ut)),$.length>0&&Rs($,K,ct),Ct.length>0&&Rs(Ct,K,ct),It.length>0&&Rs(It,K,ct),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Qo(R,K,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ut.id]===void 0&&(_.state.transmissionRenderTarget[ut.id]=new bs(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?qo:ca,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Ct=_.state.transmissionRenderTarget[ut.id],It=ut.viewport||j;Ct.setSize(It.z*U.transmissionResolutionScale,It.w*U.transmissionResolutionScale);const jt=U.getRenderTarget(),Ft=U.getActiveCubeFace(),ne=U.getActiveMipmapLevel();U.setRenderTarget(Ct),U.getClearColor(vt),ft=U.getClearAlpha(),ft<1&&U.setClearColor(16777215,.5),U.clear(),Jt&&Kt.render(ct);const ae=U.toneMapping;U.toneMapping=ja;const Qt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),_.setupLightsView(ut),Vt===!0&&wt.setGlobalState(U.clippingPlanes,ut),Rs(R,ct,ut),le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct),re.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Re=0,Ye=K.length;Re<Ye;Re++){const ze=K[Re],de=ze.object,ee=ze.geometry,qe=ze.material,ye=ze.group;if(qe.side===ra&&de.layers.test(ut.layers)){const Rn=qe.side;qe.side=Yn,qe.needsUpdate=!0,zr(de,ct,ut,ee,qe,ye),qe.side=Rn,qe.needsUpdate=!0,he=!0}}he===!0&&(le.updateMultisampleRenderTarget(Ct),le.updateRenderTargetMipmap(Ct))}U.setRenderTarget(jt,Ft,ne),U.setClearColor(vt,ft),Qt!==void 0&&(ut.viewport=Qt),U.toneMapping=ae}function Rs(R,K,ct){const ut=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ct=R.length;$<Ct;$++){const It=R[$],jt=It.object,Ft=It.geometry,ne=It.group;let ae=It.material;ae.allowOverride===!0&&ut!==null&&(ae=ut),jt.layers.test(ct.layers)&&zr(jt,K,ct,Ft,ae,ne)}}function zr(R,K,ct,ut,$,Ct){R.onBeforeRender(U,K,ct,ut,$,Ct),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(U,K,ct,ut,R,Ct),$.transparent===!0&&$.side===ra&&$.forceSinglePass===!1?($.side=Yn,$.needsUpdate=!0,U.renderBufferDirect(ct,K,ut,$,R,Ct),$.side=Wa,$.needsUpdate=!0,U.renderBufferDirect(ct,K,ut,$,R,Ct),$.side=ra):U.renderBufferDirect(ct,K,ut,$,R,Ct),R.onAfterRender(U,K,ct,ut,$,Ct)}function wi(R,K,ct){K.isScene!==!0&&(K=zt);const ut=kt.get(R),$=_.state.lights,Ct=_.state.shadowsArray,It=$.state.version,jt=gt.getParameters(R,$.state,Ct,K,ct),Ft=gt.getProgramCacheKey(jt);let ne=ut.programs;ut.environment=R.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(R.isMeshStandardMaterial?Xe:Ve).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",pt),ne=new Map,ut.programs=ne);let ae=ne.get(Ft);if(ae!==void 0){if(ut.currentProgram===ae&&ut.lightsStateVersion===It)return Bi(R,jt),ae}else jt.uniforms=gt.getUniforms(R),R.onBeforeCompile(jt,U),ae=gt.acquireProgram(jt,Ft),ne.set(Ft,ae),ut.uniforms=jt.uniforms;const Qt=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=wt.uniform),Bi(R,jt),ut.needsLights=ha(R),ut.lightsStateVersion=It,ut.needsLights&&(Qt.ambientLightColor.value=$.state.ambient,Qt.lightProbe.value=$.state.probe,Qt.directionalLights.value=$.state.directional,Qt.directionalLightShadows.value=$.state.directionalShadow,Qt.spotLights.value=$.state.spot,Qt.spotLightShadows.value=$.state.spotShadow,Qt.rectAreaLights.value=$.state.rectArea,Qt.ltc_1.value=$.state.rectAreaLTC1,Qt.ltc_2.value=$.state.rectAreaLTC2,Qt.pointLights.value=$.state.point,Qt.pointLightShadows.value=$.state.pointShadow,Qt.hemisphereLights.value=$.state.hemi,Qt.directionalShadowMap.value=$.state.directionalShadowMap,Qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qt.spotShadowMap.value=$.state.spotShadowMap,Qt.spotLightMatrix.value=$.state.spotLightMatrix,Qt.spotLightMap.value=$.state.spotLightMap,Qt.pointShadowMap.value=$.state.pointShadowMap,Qt.pointShadowMatrix.value=$.state.pointShadowMatrix),ut.currentProgram=ae,ut.uniformsList=null,ae}function Cs(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Hc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Bi(R,K){const ct=kt.get(R);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function fa(R,K,ct,ut,$){K.isScene!==!0&&(K=zt),le.resetTextureUnits();const Ct=K.fog,It=ut.isMeshStandardMaterial?K.environment:null,jt=V===null?U.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ur,Ft=(ut.isMeshStandardMaterial?Xe:Ve).get(ut.envMap||It),ne=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ae=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Qt=!!ct.morphAttributes.position,he=!!ct.morphAttributes.normal,Re=!!ct.morphAttributes.color;let Ye=ja;ut.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const ze=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,de=ze!==void 0?ze.length:0,ee=kt.get(ut),qe=_.state.lights;if(Vt===!0&&(et===!0||R!==w)){const $e=R===w&&ut.id===D;wt.setState(ut,R,$e)}let ye=!1;ut.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==qe.state.version||ee.outputColorSpace!==jt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isBatchedMesh&&ee.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ee.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ee.instancingMorph===!1&&$.morphTexture!==null||ee.envMap!==Ft||ut.fog===!0&&ee.fog!==Ct||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==ne||ee.vertexTangents!==ae||ee.morphTargets!==Qt||ee.morphNormals!==he||ee.morphColors!==Re||ee.toneMapping!==Ye||ee.morphTargetsCount!==de)&&(ye=!0):(ye=!0,ee.__version=ut.version);let Rn=ee.currentProgram;ye===!0&&(Rn=wi(ut,K,$));let vi=!1,On=!1,vn=!1;const ke=Rn.getUniforms(),Pn=ee.uniforms;if(Gt.useProgram(Rn.program)&&(vi=!0,On=!0,vn=!0),ut.id!==D&&(D=ut.id,On=!0),vi||w!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(G,"projectionMatrix",R.projectionMatrix),ke.setValue(G,"viewMatrix",R.matrixWorldInverse);const En=ke.map.cameraPosition;En!==void 0&&En.setValue(G,dt.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&ke.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&ke.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,On=!0,vn=!0)}if($.isSkinnedMesh){ke.setOptional(G,$,"bindMatrix"),ke.setOptional(G,$,"bindMatrixInverse");const $e=$.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),ke.setValue(G,"boneTexture",$e.boneTexture,le))}$.isBatchedMesh&&(ke.setOptional(G,$,"batchingTexture"),ke.setValue(G,"batchingTexture",$._matricesTexture,le),ke.setOptional(G,$,"batchingIdTexture"),ke.setValue(G,"batchingIdTexture",$._indirectTexture,le),ke.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&ke.setValue(G,"batchingColorTexture",$._colorsTexture,le));const Cn=ct.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&At.update($,ct,Rn),(On||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,ke.setValue(G,"receiveShadow",$.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Pn.envMap.value=Ft,Pn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(Pn.envMapIntensity.value=K.environmentIntensity),On&&(ke.setValue(G,"toneMappingExposure",U.toneMappingExposure),ee.needsLights&&Ya(Pn,vn),Ct&&ut.fog===!0&&mt.refreshFogUniforms(Pn,Ct),mt.refreshMaterialUniforms(Pn,ut,Y,q,_.state.transmissionRenderTarget[R.id]),Hc.upload(G,Cs(ee),Pn,le)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Hc.upload(G,Cs(ee),Pn,le),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&ke.setValue(G,"center",$.center),ke.setValue(G,"modelViewMatrix",$.modelViewMatrix),ke.setValue(G,"normalMatrix",$.normalMatrix),ke.setValue(G,"modelMatrix",$.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const $e=ut.uniformsGroups;for(let En=0,ws=$e.length;En<ws;En++){const Vn=$e[En];ce.update(Vn,Rn),ce.bind(Vn,Rn)}}return Rn}function Ya(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function ha(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,K,ct){const ut=kt.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=K,kt.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ct,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ct=kt.get(R);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const rn=G.createFramebuffer();this.setRenderTarget=function(R,K=0,ct=0){V=R,k=K,O=ct;let ut=!0,$=null,Ct=!1,It=!1;if(R){const Ft=kt.get(R);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(G.FRAMEBUFFER,null),ut=!1;else if(Ft.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(Ft.__hasExternalTextures)le.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Ft.__boundDepthTexture!==Qt){if(Qt!==null&&kt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(It=!0);const ae=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[K])?$=ae[K][ct]:$=ae[K],Ct=!0):R.samples>0&&le.useMultisampledRTT(R)===!1?$=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?$=ae[ct]:$=ae,j.copy(R.viewport),Z.copy(R.scissor),lt=R.scissorTest}else j.copy(tt).multiplyScalar(Y).floor(),Z.copy(Et).multiplyScalar(Y).floor(),lt=Tt;if(ct!==0&&($=rn),Gt.bindFramebuffer(G.FRAMEBUFFER,$)&&ut&&Gt.drawBuffers(R,$),Gt.viewport(j),Gt.scissor(Z),Gt.setScissorTest(lt),Ct){const Ft=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,ct)}else if(It){const Ft=K;for(let ne=0;ne<R.textures.length;ne++){const ae=kt.get(R.textures[ne]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ne,ae.__webglTexture,ct,Ft)}}else if(R!==null&&ct!==0){const Ft=kt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,ct)}D=-1},this.readRenderTargetPixels=function(R,K,ct,ut,$,Ct,It,jt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){Gt.bindFramebuffer(G.FRAMEBUFFER,Ft);try{const ne=R.textures[jt],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ut&&ct>=0&&ct<=R.height-$&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+jt),G.readPixels(K,ct,ut,$,Wt.convert(ae),Wt.convert(Qt),Ct))}finally{const ne=V!==null?kt.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(G.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,K,ct,ut,$,Ct,It,jt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(K>=0&&K<=R.width-ut&&ct>=0&&ct<=R.height-$){Gt.bindFramebuffer(G.FRAMEBUFFER,Ft);const ne=R.textures[jt],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.bufferData(G.PIXEL_PACK_BUFFER,Ct.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+jt),G.readPixels(K,ct,ut,$,Wt.convert(ae),Wt.convert(Qt),0);const Re=V!==null?kt.get(V).__webglFramebuffer:null;Gt.bindFramebuffer(G.FRAMEBUFFER,Re);const Ye=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await EM(G,Ye,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,he),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ct),G.deleteBuffer(he),G.deleteSync(Ye),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ct=0){const ut=Math.pow(2,-ct),$=Math.floor(R.image.width*ut),Ct=Math.floor(R.image.height*ut),It=K!==null?K.x:0,jt=K!==null?K.y:0;le.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ct,0,0,It,jt,$,Ct),Gt.unbindTexture()};const Jo=G.createFramebuffer(),$o=G.createFramebuffer();this.copyTextureToTexture=function(R,K,ct=null,ut=null,$=0,Ct=null){Ct===null&&($!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=$,$=0):Ct=0);let It,jt,Ft,ne,ae,Qt,he,Re,Ye;const ze=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(ct!==null)It=ct.max.x-ct.min.x,jt=ct.max.y-ct.min.y,Ft=ct.isBox3?ct.max.z-ct.min.z:1,ne=ct.min.x,ae=ct.min.y,Qt=ct.isBox3?ct.min.z:0;else{const Cn=Math.pow(2,-$);It=Math.floor(ze.width*Cn),jt=Math.floor(ze.height*Cn),R.isDataArrayTexture?Ft=ze.depth:R.isData3DTexture?Ft=Math.floor(ze.depth*Cn):Ft=1,ne=0,ae=0,Qt=0}ut!==null?(he=ut.x,Re=ut.y,Ye=ut.z):(he=0,Re=0,Ye=0);const de=Wt.convert(K.format),ee=Wt.convert(K.type);let qe;K.isData3DTexture?(le.setTexture3D(K,0),qe=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(le.setTexture2DArray(K,0),qe=G.TEXTURE_2D_ARRAY):(le.setTexture2D(K,0),qe=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const ye=G.getParameter(G.UNPACK_ROW_LENGTH),Rn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),vi=G.getParameter(G.UNPACK_SKIP_PIXELS),On=G.getParameter(G.UNPACK_SKIP_ROWS),vn=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,ze.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ze.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ne),G.pixelStorei(G.UNPACK_SKIP_ROWS,ae),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt);const ke=R.isDataArrayTexture||R.isData3DTexture,Pn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const Cn=kt.get(R),$e=kt.get(K),En=kt.get(Cn.__renderTarget),ws=kt.get($e.__renderTarget);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let Vn=0;Vn<Ft;Vn++)ke&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,$,Qt+Vn),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,kt.get(K).__webglTexture,Ct,Ye+Vn)),G.blitFramebuffer(ne,ae,It,jt,he,Re,It,jt,G.DEPTH_BUFFER_BIT,G.NEAREST);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||kt.has(R)){const Cn=kt.get(R),$e=kt.get(K);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,Jo),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,$o);for(let En=0;En<Ft;En++)ke?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Cn.__webglTexture,$,Qt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Cn.__webglTexture,$),Pn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$e.__webglTexture,Ct,Ye+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$e.__webglTexture,Ct),$!==0?G.blitFramebuffer(ne,ae,It,jt,he,Re,It,jt,G.COLOR_BUFFER_BIT,G.NEAREST):Pn?G.copyTexSubImage3D(qe,Ct,he,Re,Ye+En,ne,ae,It,jt):G.copyTexSubImage2D(qe,Ct,he,Re,ne,ae,It,jt);Gt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Pn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(qe,Ct,he,Re,Ye,It,jt,Ft,de,ee,ze.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(qe,Ct,he,Re,Ye,It,jt,Ft,de,ze.data):G.texSubImage3D(qe,Ct,he,Re,Ye,It,jt,Ft,de,ee,ze):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ct,he,Re,It,jt,de,ee,ze.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ct,he,Re,ze.width,ze.height,de,ze.data):G.texSubImage2D(G.TEXTURE_2D,Ct,he,Re,It,jt,de,ee,ze);G.pixelStorei(G.UNPACK_ROW_LENGTH,ye),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Rn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,vi),G.pixelStorei(G.UNPACK_SKIP_ROWS,On),G.pixelStorei(G.UNPACK_SKIP_IMAGES,vn),Ct===0&&K.generateMipmaps&&G.generateMipmap(qe),Gt.unbindTexture()},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){k=0,O=0,V=null,Gt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const W0={type:"change"},Zd={type:"start"},Lv={type:"end"},Uc=new Zo,q0=new Ga,VA=Math.cos(70*hv.DEG2RAD),pn=new J,qn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6;class kA extends aE{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Es,this._lastTargetPosition=new J,this._quat=new Es().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new J,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new J,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XA.bind(this),this._onPointerDown=jA.bind(this),this._onPointerUp=WA.bind(this),this._onContextMenu=$A.bind(this),this._onMouseWheel=ZA.bind(this),this._onKeyDown=KA.bind(this),this._onTouchStart=QA.bind(this),this._onTouchMove=JA.bind(this),this._onMouseDown=qA.bind(this),this._onMouseMove=YA.bind(this),this._interceptControlDown=tR.bind(this),this._interceptControlUp=eR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W0),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;pn.copy(i).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=qn:s>Math.PI&&(s-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),i.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=pn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<VA?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(W0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){pn.setFromMatrixColumn(i,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,i){this.screenSpacePanning===!0?pn.setFromMatrixColumn(i,1):(pn.setFromMatrixColumn(i,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new me,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function jA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function XA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function WA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lv),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function qA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ge.DOLLY;break;case Tr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}break;case Tr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Zd)}function YA(r){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function ZA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(r.preventDefault(),this.dispatchEvent(Zd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Lv))}function KA(r){this.enabled!==!1&&this._handleKeyDown(r)}function QA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ge.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ge.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Zd)}function JA(r){switch(this._trackPointer(r),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ge.NONE}}function $A(r){this.enabled!==!1&&r.preventDefault()}function tR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function eR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pd(r,t){return[0,1,2].map(i=>-r.reduce((s,l,c)=>s+l[i]*t[c],0))}function nR(r,t){if(!r.R||!r.t)return[];const{K:i,R:s,t:l,width:c,height:h}=r,d=Pd(s,l);return[[0,0],[c,0],[c,h],[0,h]].map(([m,p])=>{const g=1/i[2][2],y=(p-i[1][2]*g)/i[1][1],S=(m-i[0][1]*y-i[0][2]*g)/i[0][0],E=[S,y,g];return d.map((b,C)=>b+t*s.reduce((x,_,I)=>x+_[C]*E[I],0))})}function iR(r,t,i,s,l){const c=[];for(let h=0;h<i;h++){const d=r[h];(s<=0||d!=null&&d<=s)&&(t[h]??0)>=l&&c.push(h)}return c}function aR(r,t,i,s){if(!r.registered||!r.R||!r.t)return null;const{R:l,t:c,K:h,height:d}=r,m=new si,p=[0,1,2].map(y=>-l.reduce((S,E,b)=>S+E[y]*c[b],0)),g=new Qe().set(l[0][0],-l[1][0],-l[2][0],p[0],l[0][1],-l[1][1],-l[2][1],p[1],l[0][2],-l[1][2],-l[2][2],p[2],0,0,0,1);return m.position.fromArray(p),m.quaternion.setFromRotationMatrix(g),m.up.set(-l[1][0],-l[1][1],-l[1][2]),m.near=i,m.far=s,m.aspect=t,m.fov=hv.radToDeg(2*Math.atan(d*h[2][2]/(2*h[1][1]))),m.updateProjectionMatrix(),m.updateMatrixWorld(!0),m}function Nc(r){for(const t of[...r.children])r.remove(t),t.traverse(i=>{(i instanceof mi||i instanceof Tv||i instanceof Mv)&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>l.dispose()))})}function sR({scene:r,runId:t,options:i,setOptions:s,selection:l,onSelect:c,cameraViewRequest:h,onCameraViewChange:d}){const m=Pt.useRef(null),p=Pt.useRef(null),g=Pt.useRef(c),y=Pt.useRef(d),S=Pt.useRef(""),[E,b]=Pt.useState(""),[C,x]=Pt.useState(!1),[_,I]=Pt.useState(0),[L,U]=Pt.useState("");g.current=c,y.current=d,Pt.useEffect(()=>{if(!m.current)return;const O=m.current;let V;try{V=new GA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch(dt){b(`无法创建 WebGL 视图：${String(dt)}`);return}V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.outputColorSpace=Fn,V.setClearColor(1120027,0),V.domElement.setAttribute("aria-label","可拖拽的三维重建视图"),V.domElement.setAttribute("data-testid","scene-canvas"),O.appendChild(V.domElement);const D=new YM,w=new si(45,1,.001,1e6);w.up.set(0,-1,0),w.position.set(3,-2,-4);const j=()=>{const dt=new kA(w,V.domElement);return dt.enableDamping=!0,dt.dampingFactor=.12,dt.screenSpacePanning=!0,dt.minDistance=1e-4,dt.maxDistance=1e8,dt};let Z=j();const lt=new Er,vt=new Er;D.add(lt,vt);const ft=dt=>{const Dt=w.position.clone();Z.dispose(),Z=j(),w.position.copy(Dt),Z.target.copy(dt),Z.update(),q.controls=Z},B=()=>{const dt=O.clientWidth,Dt=O.clientHeight;w.aspect=dt/Math.max(Dt,1),w.updateProjectionMatrix()},q={renderer:V,scene:D,camera:w,controls:Z,content:lt,highlight:vt,bounds:new Xa(new J(-1,-1,-1),new J(1,1,1)),radius:1,pickables:[],pointIndices:[],enterCamera:dt=>{const Dt=aR(dt,O.clientWidth/Math.max(O.clientHeight,1),Math.max(q.radius*1e-6,1e-8),Math.max(q.radius*1e4,1e3));if(!Dt)return;w.copy(Dt);const zt=w.getWorldDirection(new J),Jt=Math.max(q.bounds.getCenter(new J).sub(w.position).dot(zt),q.radius*.01);ft(w.position.clone().addScaledVector(zt,Jt)),y.current(dt.image_id)},fit:dt=>{const Dt=dt&&!dt.isEmpty()?dt:q.bounds,zt=Dt.getCenter(new J),Jt=Math.max(Dt.getSize(new J).length()/2,.001),Ue=new J(-.5,-.35,-1).normalize();w.up.set(0,-1,0),w.fov=45,w.zoom=1,w.position.copy(zt).addScaledVector(Ue,Jt*3.1),w.near=Math.max(Jt/1e4,1e-6),w.far=Math.max(Jt*1e4,1e3),w.updateProjectionMatrix(),ft(zt),y.current(null)}};p.current=q;const Y=new nE,_t=new me;let N=[0,0];const tt=dt=>{const Dt=V.domElement.getBoundingClientRect(),zt={x:0,y:0,width:Dt.width,height:Dt.height},Jt=dt.clientX-Dt.left-zt.x,Ue=dt.clientY-Dt.top-zt.y;return Jt<0||Ue<0||Jt>zt.width||Ue>zt.height?[]:(_t.set(Jt/zt.width*2-1,-(Ue/zt.height)*2+1),Y.setFromCamera(_t,w),Y.params.Points.threshold=Math.max(w.position.distanceTo(Z.target)*(1/w.projectionMatrix.elements[5])*12/Math.max(zt.height,1),1e-8),Y.intersectObjects(q.pickables,!1).filter(G=>G.object.visible))},Et=dt=>{N=[dt.clientX,dt.clientY]},Tt=dt=>{if(dt.button!==0||Math.hypot(dt.clientX-N[0],dt.clientY-N[1])>5)return;const Dt=tt(dt),zt=Dt.find(Ue=>Ue.object.userData.kind==="camera"),Jt=zt??Dt[0];if(!Jt){g.current(null);return}Jt.object.userData.kind==="camera"?g.current({kind:"camera",id:Jt.object.userData.id}):Jt.index!=null&&g.current({kind:"point",id:Jt.object.userData.ids[Jt.index]})},Ut=dt=>{if(dt.buttons)return;const Dt=tt(dt)[0];U(Dt?Dt.object.userData.kind==="camera"?`相机 #${Dt.object.userData.id}`:`三维点 #${Dt.object.userData.ids[Dt.index]}`:""),V.domElement.style.cursor=Dt?"pointer":"grab"};V.domElement.addEventListener("pointerdown",Et),V.domElement.addEventListener("pointerup",Tt),V.domElement.addEventListener("pointermove",Ut);const Vt=new ResizeObserver(()=>{const dt=O.clientWidth,Dt=O.clientHeight;!dt||!Dt||(V.setSize(dt,Dt),B())});Vt.observe(O);let et=0;const yt=()=>{et=requestAnimationFrame(yt),Z.update();for(const dt of lt.children)dt.userData.cameraCenter&&(dt.visible=w.position.distanceToSquared(dt.userData.cameraCenter)>(q.radius*.02)**2);V.setViewport(0,0,O.clientWidth,O.clientHeight),V.render(D,w)};return yt(),()=>{cancelAnimationFrame(et),Vt.disconnect(),Z.dispose(),V.domElement.removeEventListener("pointerdown",Et),V.domElement.removeEventListener("pointerup",Tt),V.domElement.removeEventListener("pointermove",Ut),Nc(lt),Nc(vt),V.dispose(),O.removeChild(V.domElement),p.current=null}},[]),Pt.useEffect(()=>{const O=p.current;if(!O)return;if(Nc(O.content),O.pickables=[],!r){y.current(null),I(0);return}const V=r.points,D=new Xa;for(let Z=0;Z<V.positions.length;Z+=3)D.expandByPoint(new J(V.positions[Z],V.positions[Z+1],V.positions[Z+2]));for(const Z of r.cameras)Z.registered&&Z.R&&Z.t&&D.expandByPoint(new J(...Pd(Z.R,Z.t)));D.isEmpty()&&D.set(new J(-1,-1,-1),new J(1,1,1)),O.bounds.copy(D),O.radius=Math.max(D.getSize(new J).length()/2,.001);const w=O.radius,j=iR(V.errors,V.track_lengths,V.ids.length,i.maxError,i.minTrack);if(O.pointIndices=j,I(i.points?j.length:0),i.points&&j.length){const Z=new Float32Array(j.length*3),lt=new Float32Array(j.length*3),vt=new De,ft=Math.max(r.summary.p95_reprojection_error_px??1,.01),B=V.track_lengths.reduce((_t,N)=>Math.max(_t,N),2);j.forEach((_t,N)=>{if(Z.set(V.positions.slice(_t*3,_t*3+3),N*3),i.color==="rgb")vt.setRGB((V.colors[_t*3]??180)/255,(V.colors[_t*3+1]??180)/255,(V.colors[_t*3+2]??180)/255,Fn);else{const tt=i.color==="error"?Math.min((V.errors[_t]??ft)/ft,1):Math.min(Math.log(V.track_lengths[_t]??1)/Math.log(B),1);vt.setHSL(i.color==="error"?(1-tt)*.48:.55-tt*.4,.84,.55,Fn)}lt.set([vt.r,vt.g,vt.b],N*3)});const q=new ri;q.setAttribute("position",new gi(Z,3)),q.setAttribute("color",new gi(lt,3));const Y=new Tv(q,new bv({size:i.pointSize,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.96}));Y.userData={kind:"points",ids:j.map(_t=>V.ids[_t])},O.content.add(Y),O.pickables.push(Y)}if(i.cameras)for(const Z of r.cameras){if(!Z.registered||!Z.R||!Z.t)continue;const lt=Pd(Z.R,Z.t),vt=nR(Z,w*.09*i.cameraScale),ft=[];vt.forEach((N,tt)=>ft.push(...lt,...N,...N,...vt[(tt+1)%4]));const B=new ri;B.setAttribute("position",new Gn(ft,3));const q=l?.kind==="camera"&&l.id===Z.image_id,Y=new Ev(B,new qd({color:q?16760681:5684173,transparent:!0,opacity:q?1:.6}));Y.userData.cameraCenter=new J().fromArray(lt),O.content.add(Y);const _t=new mi(new Zc(w*.0075,10,8),new Wc({color:q?16760681:8118495}));_t.position.fromArray(lt),_t.userData={kind:"camera",id:Z.image_id,cameraCenter:new J().fromArray(lt)},O.content.add(_t),O.pickables.push(_t)}if(i.axes){const Z=new iE(w*.4);O.content.add(Z)}S.current!==t&&(O.fit(),S.current=t)},[r,t,i,l]),Pt.useEffect(()=>{const O=r?.cameras.find(V=>V.image_id===h?.imageId);O&&p.current?.enterCamera(O)},[h]),Pt.useEffect(()=>{const O=p.current;if(!O||(Nc(O.highlight),!r||l?.kind!=="point"))return;const V=r.points.ids.indexOf(l.id);if(V<0)return;const D=new mi(new Zc(O.radius*.009,12,10),new Wc({color:16762744,depthTest:!1}));D.position.fromArray(r.points.positions,V*3),D.renderOrder=10,O.highlight.add(D)},[l,r]);const F=(O,V)=>s({...i,[O]:V}),k=r?.snapshots.find(O=>O.id===r.snapshot_id);return v.jsxs("div",{className:"viewport",children:[v.jsxs("div",{className:"view-heading",children:[v.jsxs("span",{className:"view-title",children:[v.jsx(H_,{size:14})," 三维重建"]}),v.jsxs("span",{className:"view-context",children:[k?$0(k.label):"模型空间"," ",v.jsx("span",{className:"live-dot"})," ","真实算法输出"]})]}),v.jsx("div",{ref:m,className:"canvas-host"}),(!r||r.points.ids.length===0)&&v.jsxs("div",{className:"empty-scene",children:[v.jsx("div",{className:"empty-orbit",children:v.jsx(H_,{size:32})}),v.jsx("h3",{children:r?"等待三维点生成":"从照片，进入三维空间"}),v.jsx("p",{children:r?"初始化成功后，点云和相机将出现在这里。":"选择一个已有结果，或导入数据开始重建。"}),v.jsx("span",{children:"只呈现真实结果 · 不生成示意点云"})]}),E&&v.jsx("div",{className:"view-error",children:E}),v.jsxs("div",{className:"view-toolbar",children:[v.jsx("button",{title:"适配完整场景","aria-label":"适配完整场景",onClick:()=>p.current?.fit(),children:v.jsx(Q0,{size:17})}),v.jsx("button",{title:"聚焦点云（仅调整观察视角）","aria-label":"聚焦点云",disabled:!r?.points.ids.length,onClick:()=>{if(!r)return;const O=new Xa,V=r.points.positions;for(let D=0;D<V.length;D+=3)O.expandByPoint(new J(V[D],V[D+1],V[D+2]));p.current?.fit(O)},children:v.jsx(fS,{size:17})}),v.jsx("button",{title:"重置视角","aria-label":"重置视角",onClick:()=>p.current?.fit(),children:v.jsx(J0,{size:16})}),v.jsx("span",{className:"toolbar-divider"}),v.jsx("button",{className:i.cameras?"active":"",title:"相机显隐","aria-label":"相机显隐","aria-pressed":i.cameras,onClick:()=>F("cameras",!i.cameras),children:v.jsx(sa,{size:17})}),v.jsx("button",{className:i.axes?"active":"",title:"坐标轴显隐","aria-label":"坐标轴显隐","aria-pressed":i.axes,onClick:()=>F("axes",!i.axes),children:v.jsx(Jy,{size:17})}),v.jsx("button",{className:C?"active":"",title:"显示设置","aria-label":"显示设置",onClick:()=>x(!C),children:v.jsx(dS,{size:17})}),v.jsx("span",{className:"toolbar-divider"}),v.jsx("button",{title:"保存视图 PNG","aria-label":"保存视图 PNG",disabled:!r,onClick:()=>{const O=p.current;if(!O)return;O.renderer.render(O.scene,O.camera);const V=document.createElement("a");V.href=O.renderer.domElement.toDataURL("image/png"),V.download="minicolmap-view.png",V.click()},children:v.jsx(sS,{size:17})}),v.jsx("button",{title:"全屏显示","aria-label":"全屏显示",onClick:()=>{const O=m.current?.parentElement;document.fullscreenElement?document.exitFullscreen():O&&O.requestFullscreen()},children:v.jsx(eS,{size:16})})]}),C&&v.jsxs("div",{className:"view-settings panel-popover",children:[v.jsxs("div",{className:"popover-title",children:["显示设置 ",v.jsx("span",{children:"仅影响当前视图"})]}),v.jsxs("label",{className:"switch-row",children:["显示点云",v.jsx("input",{type:"checkbox",checked:i.points,onChange:O=>F("points",O.target.checked)})]}),v.jsxs("label",{children:["点云着色",v.jsxs("select",{"aria-label":"点云着色",value:i.color,onChange:O=>F("color",O.target.value),children:[v.jsx("option",{value:"rgb",children:"原始 RGB"}),v.jsx("option",{value:"error",children:"重投影误差"}),v.jsx("option",{value:"track",children:"轨迹长度"})]})]}),v.jsxs("label",{children:["点大小 ",v.jsxs("span",{children:[i.pointSize," px"]}),v.jsx("input",{type:"range",min:"1",max:"9",step:".5",value:i.pointSize,onChange:O=>F("pointSize",+O.target.value)})]}),v.jsxs("label",{children:["相机视锥 ",v.jsxs("span",{children:[i.cameraScale.toFixed(1)," ×"]}),v.jsx("input",{type:"range",min:".2",max:"3",step:".1",value:i.cameraScale,onChange:O=>F("cameraScale",+O.target.value)})]}),v.jsxs("div",{className:"two-inputs",children:[v.jsxs("label",{children:["最大误差 / px",v.jsx("input",{type:"number",min:"0",step:".1",value:i.maxError,onChange:O=>F("maxError",+O.target.value)}),v.jsx("small",{children:"0 = 不筛选"})]}),v.jsxs("label",{children:["最短轨迹",v.jsx("input",{type:"number",min:"0",step:"1",value:i.minTrack,onChange:O=>F("minTrack",+O.target.value)}),v.jsx("small",{children:"观测图像数量"})]})]})]}),r&&v.jsxs("div",{className:"scene-stats",children:[v.jsxs("div",{children:[v.jsx("strong",{children:mn(_,0)}),v.jsxs("span",{children:["显示点 / ",mn(r.points.ids.length,0)]})]}),v.jsxs("div",{children:[v.jsxs("strong",{children:[r.summary.registered_images,v.jsxs("i",{children:[" / ",r.summary.image_count]})]}),v.jsx("span",{children:"已注册相机"})]}),v.jsxs("div",{children:[v.jsxs("strong",{children:[mn(r.summary.mean_reprojection_error_px),v.jsx("i",{children:" px"})]}),v.jsx("span",{children:"平均重投影误差"})]})]}),r&&i.color!=="rgb"&&v.jsxs("div",{className:`color-legend ${i.color}`,children:[v.jsx("span",{children:i.color==="error"?"重投影误差 / px":"轨迹长度 / 张"}),v.jsx("i",{}),v.jsxs("div",{children:[v.jsx("b",{children:i.color==="error"?"0":"1"}),v.jsxs("b",{children:[i.color==="error"?mn(r.summary.p95_reprojection_error_px):r.points.track_lengths.reduce((O,V)=>Math.max(O,V),0),i.color==="error"?"+":""]})]})]}),v.jsxs("div",{className:"view-footer",children:[v.jsxs("span",{children:[v.jsx(rS,{size:12})," ",L||"左键旋转 · 右键平移 · 滚轮缩放"]}),v.jsxs("span",{children:["坐标单位：重建尺度 ",v.jsx("b",{className:"axis-x",children:"X"}),v.jsx("b",{className:"axis-y",children:"Y"}),v.jsx("b",{className:"axis-z",children:"Z"})]})]})]})}const rR=[{key:"features",name:"特征提取",subtitle:"SIFT 与描述子匹配",fields:[{key:"max_features",label:"最大特征数",unit:"点 / 图",help:"每张图像最多保留的 SIFT 特征数。",step:100,min:2},{key:"ratio",label:"匹配距离比",help:"Lowe 比值阈值；越小筛选越严格。",step:.01,min:.01}]},{key:"geometry",name:"几何验证",subtitle:"RANSAC 与初始模型",fields:[{key:"threshold_px",label:"Sampson 阈值",unit:"px",help:"内部使用该数值的平方筛选 Sampson 误差。",step:.1,min:.01},{key:"max_trials",label:"最大采样次数",unit:"次",help:"两视图基础矩阵 RANSAC 的采样预算。",step:100,min:1},{key:"min_inliers",label:"最少内点数",unit:"点",help:"图像对准入和初始化最终保留点的下限。",step:1,min:8}]},{key:"mapping",name:"增量建图",subtitle:"PnP、三角化与质量筛选",fields:[{key:"min_pnp_points",label:"PnP 最少对应点",unit:"点",help:"注册前和最终筛选后都需满足的 2D–3D 对应数量。",step:1,min:6},{key:"pnp_threshold_px",label:"PnP 内点阈值",unit:"px",help:"传给 PnP RANSAC 的像素距离阈值。",step:.1,min:.01},{key:"min_angle_deg",label:"最小三角化夹角",unit:"°",help:"夹角过小的点深度不稳定，将被拒绝。",step:.1,min:.01},{key:"max_reprojection_px",label:"最大重投影误差",unit:"px",help:"初始化、补点及新增观测的像素误差上限。",step:.1,min:.01}]},{key:"bundle_adjustment",name:"束调整 BA",subtitle:"对现有位姿与点进行整体优化",fields:[{key:"max_nfev",label:"函数评估预算",unit:"次",help:"允许的最大函数评估次数；达到预算不代表已收敛。",step:10,min:1},{key:"f_scale",label:"鲁棒损失尺度",unit:"px",help:"控制鲁棒损失对大残差的抑制尺度。",step:.1,min:.01}]}];function oR({config:r,defaults:t,disabled:i,onChange:s,onValidate:l,onError:c}){function h(d,m,p){s({...r,[d]:{...r[d],[m]:p}})}return v.jsxs("div",{className:"config-panel",children:[v.jsxs("div",{className:"panel-intro",children:["参数直接传入现有 Python 流水线。",v.jsx("br",{}),"修改后将在下一次运行生效。"]}),v.jsxs("div",{className:"small-actions",children:[v.jsxs("button",{title:"恢复默认参数",disabled:i,onClick:()=>s(structuredClone(t)),children:[v.jsx(J0,{size:13}),"默认"]}),v.jsxs("label",{className:`button ${i?"disabled":""}`,children:[v.jsx(Vh,{size:13}),"导入",v.jsx("input",{type:"file",accept:".json",disabled:i,hidden:!0,onChange:async d=>{const m=d.target.files?.[0];if(m){try{const p=JSON.parse(await m.text());s(await Ln("/api/config/validate",Pc(p)))}catch(p){c(String(p))}d.target.value=""}}})]}),v.jsxs("button",{onClick:()=>_S("mini-colmap-config.json",r),children:[v.jsx(tS,{size:13}),"导出"]})]}),v.jsxs("fieldset",{disabled:i,children:[v.jsxs("label",{className:"number-field seed-field",children:[v.jsxs("span",{children:["随机种子 ",v.jsx("small",{children:"复现实验"})]}),v.jsx("input",{type:"number",min:"0",step:"1",value:r.seed,onChange:d=>s({...r,seed:+d.target.value})})]}),rR.map(d=>v.jsxs("details",{open:!0,className:"config-group",children:[v.jsxs("summary",{children:[d.name,v.jsx("span",{children:d.subtitle})]}),d.key==="bundle_adjustment"&&v.jsxs("label",{className:"switch-row",children:["启用最终 BA",v.jsx("input",{type:"checkbox",checked:r.bundle_adjustment.enabled,onChange:m=>h("bundle_adjustment","enabled",m.target.checked)})]}),d.fields.map(m=>v.jsxs("label",{className:"number-field",title:m.help,children:[v.jsxs("span",{children:[m.label,v.jsx("small",{children:m.unit??""})]}),v.jsx("input",{type:"number",step:m.step??1,min:m.min,value:Number(r[d.key][m.key]),onChange:p=>h(d.key,m.key,+p.target.value)})]},m.key)),d.key==="bundle_adjustment"&&v.jsxs("label",{className:"number-field",children:[v.jsx("span",{children:"损失函数"}),v.jsxs("select",{value:r.bundle_adjustment.loss,onChange:m=>h("bundle_adjustment","loss",m.target.value),children:[v.jsx("option",{value:"linear",children:"Linear"}),v.jsx("option",{value:"huber",children:"Huber"}),v.jsx("option",{value:"soft_l1",children:"Soft L1"})]})]})]},d.key))]}),v.jsx("button",{className:"outline full",disabled:i,onClick:l,children:"检查参数配置"}),v.jsx("p",{className:"form-note",children:"悬停字段查看说明。初始化两视图优化与最终 BA 为不同步骤。"})]})}function Io({label:r,values:t}){return v.jsxs("div",{className:"matrix-block",children:[v.jsx("span",{children:r}),v.jsx("div",{className:"matrix",children:t.map((i,s)=>v.jsx("div",{children:i.map((l,c)=>v.jsx("code",{children:mn(l,4)},c))},s))})]})}function Y0({url:r,width:t,height:i,xy:s,projected:l}){const[c,h]=Pt.useState(!1),[d,m]=Pt.useState([t??1,i??1]);return Pt.useEffect(()=>{h(!1),m([t??1,i??1])},[r,t,i]),v.jsx("div",{className:"photo-preview",children:r&&!c?v.jsxs(v.Fragment,{children:[v.jsx("img",{src:r,alt:"选中相机的原始照片",onError:()=>h(!0),onLoad:p=>m([p.currentTarget.naturalWidth,p.currentTarget.naturalHeight])}),s&&v.jsxs("svg",{viewBox:`0 0 ${d[0]} ${d[1]}`,"aria-label":"观测点和重投影点",children:[v.jsx("circle",{cx:s[0],cy:s[1],r:d[0]*.013,fill:"none",stroke:"#62efbd",strokeWidth:d[0]*.004}),v.jsx("path",{d:`M${s[0]-d[0]*.02},${s[1]}h${d[0]*.04} M${s[0]},${s[1]-d[0]*.02}v${d[0]*.04}`,stroke:"#62efbd",strokeWidth:d[0]*.0025}),l&&v.jsxs(v.Fragment,{children:[v.jsx("line",{x1:s[0],y1:s[1],x2:l[0],y2:l[1],stroke:"#ffc478",strokeWidth:d[0]*.003}),v.jsx("circle",{cx:l[0],cy:l[1],r:d[0]*.006,fill:"#ffc478"})]})]}),v.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"photo-open",title:"打开原始照片",children:v.jsx(nS,{size:12})})]}):v.jsxs("div",{className:"photo-missing",children:[v.jsx(sa,{size:24}),v.jsx("span",{children:"原始照片不可用"}),v.jsx("small",{children:"仍可检查三维模型和位姿"})]})})}function lR({scene:r,inputDataset:t,runId:i,snapshot:s,selection:l,onSelect:c,onViewCamera:h,viewCameraId:d}){const[m,p]=Pt.useState(null),[g,y]=Pt.useState(""),[S,E]=Pt.useState(0),[b,C]=Pt.useState(!1);Pt.useEffect(()=>{if(p(null),y(""),E(0),l?.kind!=="point"||!i)return;let L=!1;return C(!0),Ln(`/api/runs/${encodeURIComponent(i)}/points/${l.id}?snapshot=${encodeURIComponent(s)}`).then(U=>{L||p(U)}).catch(U=>{L||y(String(U))}).finally(()=>{L||C(!1)}),()=>{L=!0}},[i,s,l]),Pt.useEffect(()=>{if(!m||d==null)return;const L=m.observations.findIndex(U=>U.image_id===d);L>=0&&E(L)},[m,d]);let x=l?.kind==="camera"?r?.cameras.find(L=>L.image_id===l.id):void 0;if(!r&&l?.kind==="camera"&&t){const L=t.images.find(F=>F.id===l.id),U=t.cameras.find(F=>F.id===L?.camera_id);L&&U&&(x={...L,image_id:L.id,K:U.K,registered:!1,observations:0})}const _=m?.observations[S],I=r?.cameras.find(L=>L.image_id===_?.image_id);return l?v.jsxs("aside",{className:"inspector",children:[v.jsxs("div",{className:"panel-heading",children:[x?v.jsx(sa,{size:14}):v.jsx(Q0,{size:14})," ",x?"相机信息":"三维点信息",v.jsx("button",{className:"text-button",onClick:()=>c(null),children:"取消选择"})]}),v.jsx("div",{className:"inspector-scroll",children:x?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"object-title",children:[v.jsx("span",{className:"object-icon",children:v.jsx(sa,{size:20})}),v.jsxs("div",{children:[v.jsx("strong",{children:x.name}),v.jsxs("span",{children:["IMAGE #",x.image_id]})]}),v.jsx("i",{className:`status-dot ${x.registered?"good":""}`})]}),v.jsx(Y0,{url:x.image_url,width:x.width,height:x.height}),x.registered&&x.R&&x.t&&v.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(x.image_id),children:[v.jsx(sa,{size:14})," 对齐至此相机"]}),v.jsxs("div",{className:"detail-grid",children:[v.jsx("span",{children:"注册状态"}),v.jsx("strong",{children:x.registered?"已注册":"未注册"}),v.jsx("span",{children:"图像尺寸"}),v.jsxs("strong",{children:[x.width," × ",x.height]}),v.jsx("span",{children:"相机 ID"}),v.jsx("strong",{children:x.camera_id}),v.jsx("span",{children:"有效观测"}),v.jsx("strong",{children:mn(x.observations,0)})]}),v.jsx(Io,{label:"内参 K",values:x.K}),x.registered&&x.R&&x.t?v.jsxs(v.Fragment,{children:[v.jsx(Io,{label:"世界 → 相机旋转 R",values:x.R}),v.jsx(Io,{label:"平移 t",values:[x.t]}),x.center&&v.jsx(Io,{label:"相机中心 C = −Rᵀt",values:[x.center]}),v.jsx("p",{className:"form-note",children:"相机局部坐标：+Z 朝前，+Y 朝下。位置使用重建尺度。"})]}):v.jsx("div",{className:"info-note",children:"该图像尚未估计出相机位姿，因此不会在三维视图中生成相机。"})]}):b?v.jsx("div",{className:"loading-inline",children:"读取点的观测轨迹…"}):g?v.jsx("div",{className:"inline-error",children:g}):m?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"object-title",children:[v.jsx("span",{className:"object-icon point-icon",children:v.jsx(I_,{size:20})}),v.jsxs("div",{children:[v.jsxs("strong",{children:["三维点 #",m.id]}),v.jsx("span",{children:"POINT INSPECTOR"})]}),v.jsx("span",{className:"rgb-swatch",style:{background:`rgb(${m.color.join(",")})`}})]}),v.jsx(Io,{label:"世界坐标 XYZ",values:[m.xyz]}),v.jsxs("div",{className:"detail-grid",children:[v.jsx("span",{children:"RGB 颜色"}),v.jsx("strong",{children:m.color.join(", ")}),v.jsx("span",{children:"轨迹长度"}),v.jsxs("strong",{children:[m.track_length," 张图像"]}),v.jsx("span",{children:"平均误差"}),v.jsxs("strong",{children:[mn(m.mean_error)," px"]})]}),v.jsxs("div",{className:"section-label",children:["关联观测 ",v.jsx("span",{children:m.observations.length})]}),d!=null&&!m.observations.some(L=>L.image_id===d)&&v.jsx("div",{className:"info-note",children:"上次对齐的相机没有该点的记录观测；下方显示其他相机的观测。"}),v.jsx("div",{className:"observation-list",children:m.observations.map((L,U)=>v.jsxs("button",{className:S===U?"selected":"",onClick:()=>E(U),children:[v.jsx(sa,{size:13}),v.jsx("span",{children:r?.cameras.find(F=>F.image_id===L.image_id)?.name??`图像 #${L.image_id}`}),v.jsxs("small",{children:[mn(L.error)," px"]}),v.jsx(Gh,{size:12})]},`${L.image_id}-${L.keypoint_index}`))}),_&&v.jsxs(v.Fragment,{children:[v.jsx(Y0,{url:_.image_url??I?.image_url,width:I?.width,height:I?.height,xy:_.xy,projected:_.projected_xy}),v.jsxs("div",{className:"pixel-legend",children:[v.jsxs("span",{children:[v.jsx("i",{}),"观测位置"]}),v.jsxs("span",{children:[v.jsx("i",{}),"重投影位置"]})]}),I?.registered&&I.R&&I.t&&v.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(_.image_id),children:[v.jsx(sa,{size:14})," 对齐至此观测相机"]}),v.jsxs("div",{className:"detail-grid",children:[v.jsx("span",{children:"特征点索引"}),v.jsx("strong",{children:_.keypoint_index}),v.jsx("span",{children:"观测像素"}),v.jsx("strong",{children:_.xy.map(L=>mn(L,2)).join(", ")}),v.jsx("span",{children:"投影像素"}),v.jsx("strong",{children:_.projected_xy?.map(L=>mn(L,2)).join(", ")??"—"})]}),v.jsxs("button",{className:"outline full",onClick:()=>c({kind:"camera",id:_.image_id}),children:[v.jsx(sa,{size:13}),"检查这台相机"]})]})]}):null})]}):v.jsxs("aside",{className:"inspector",children:[v.jsxs("div",{className:"panel-heading",children:[v.jsx(Vc,{size:14}),"场景检查器"]}),v.jsxs("div",{className:"inspector-empty",children:[v.jsx("div",{className:"inspector-symbol",children:v.jsx(I_,{size:26})}),v.jsx("h3",{children:"探索你的重建"}),v.jsxs("p",{children:["点选三维点或相机，",v.jsx("br",{}),"查看对应照片、位姿与观测。"]}),v.jsxs("div",{className:"legend",children:[v.jsxs("span",{children:[v.jsx("i",{className:"legend-point"}),"三维点"]}),v.jsxs("span",{children:[v.jsx("i",{className:"legend-camera"}),"注册相机"]}),v.jsxs("span",{children:[v.jsx("i",{className:"legend-selected"}),"当前选中"]})]})]}),v.jsxs("div",{className:"inspector-hint",children:[v.jsx(Vc,{size:14}),v.jsx("p",{children:"所有坐标、颜色与位姿均来自算法结果。视图操作不会修改地图。"})]})]})}function cR({onClose:r,onImported:t}){const[i,s]=Pt.useState("manifest"),[l,c]=Pt.useState([]),[h,d]=Pt.useState(""),[m,p]=Pt.useState({fx:"",fy:"",cx:"",cy:""}),[g,y]=Pt.useState(!1),[S,E]=Pt.useState(""),b=l.filter(x=>/\.json$/i.test(x.name));Pt.useEffect(()=>{const x=l.find(_=>_.name==="dataset.json")??l.find(_=>/\.json$/i.test(_.name));d(x?.webkitRelativePath||x?.name||"")},[l]);async function C(){y(!0),E("");try{if(!l.length)throw Error("请先选择数据目录或照片。");const x=new FormData;x.append("mode",i);for(const I of l)x.append("files",I),x.append("paths",I.webkitRelativePath||I.name);if(i==="manifest"){if(!h)throw Error("所选目录中未找到 JSON 数据清单。");x.append("manifest_path",h)}if(i==="photos"){if(Object.values(m).some(I=>I.trim()===""||!Number.isFinite(+I)))throw Error("请填写全部四个内参值。");if(+m.fx<=0||+m.fy<=0)throw Error("fx 和 fy 必须大于 0。");x.append("camera",JSON.stringify(Object.fromEntries(Object.entries(m).map(([I,L])=>[I,+L]))))}const _=await Ln("/api/datasets/import",{method:"POST",body:x});t(_),r()}catch(x){E(String(x))}finally{y(!1)}}return v.jsx("div",{className:"modal-backdrop",onMouseDown:x=>{x.target===x.currentTarget&&!g&&r()},children:v.jsxs("section",{className:"modal import-modal",role:"dialog","aria-modal":"true","aria-label":"导入重建数据",children:[v.jsxs("div",{className:"modal-heading",children:[v.jsxs("div",{children:[v.jsx("span",{className:"eyebrow",children:"DATA IMPORT"}),v.jsx("h2",{children:"导入重建数据"})]}),v.jsx("button",{className:"icon-button","aria-label":"关闭导入窗口",disabled:g,onClick:r,children:v.jsx(kh,{size:18})})]}),v.jsxs("div",{className:"segmented",children:[v.jsxs("button",{className:i==="manifest"?"selected":"",onClick:()=>{s("manifest"),c([]),E("")},children:[v.jsx(Gc,{size:15}),"已有数据集"]}),v.jsxs("button",{className:i==="photos"?"selected":"",onClick:()=>{s("photos"),c([]),E("")},children:[v.jsx(F_,{size:15}),"照片 + 相机内参"]})]}),v.jsx("p",{className:"muted",children:i==="manifest"?"选择包含 dataset.json 与图像文件的完整目录。清单中的相对路径将被保留。":"导入同一台相机拍摄、已去畸变且尺寸一致的照片，并填写对应的真实内参。"}),v.jsxs("div",{className:"upload-zone",children:[v.jsx(Vh,{size:28}),v.jsx("strong",{children:l.length?`已选择 ${l.length} 个文件`:"选择本地数据文件"}),v.jsx("span",{children:l.length?l.slice(0,3).map(x=>x.name).join(" · "):"文件保存在本机项目中，不上传到外部服务"}),v.jsxs("div",{className:"upload-actions",children:[v.jsxs("label",{className:"button outline",children:[v.jsx(Gc,{size:15}),"选择文件夹",v.jsx("input",{type:"file",multiple:!0,hidden:!0,webkitdirectory:"",onChange:x=>{c(Array.from(x.target.files??[]).filter(_=>i==="manifest"||/\.(png|jpg|jpeg|bmp|tif|tiff|webp)$/i.test(_.name))),E("")}})]}),i==="photos"&&v.jsxs("label",{className:"button outline",children:[v.jsx(F_,{size:15}),"选择照片",v.jsx("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:x=>{c(Array.from(x.target.files??[])),E("")}})]})]})]}),i==="manifest"&&b.length>0&&v.jsxs("label",{className:"manifest-select",children:["数据清单",v.jsx("select",{"aria-label":"选择导入的数据清单",value:h,onChange:x=>d(x.target.value),children:b.map(x=>v.jsx("option",{value:x.webkitRelativePath||x.name,children:x.webkitRelativePath||x.name},x.webkitRelativePath||x.name))})]}),i==="photos"&&v.jsxs("div",{className:"intrinsics",children:[v.jsxs("div",{className:"section-label",children:[v.jsx(sa,{size:14}),"共享相机内参 ",v.jsx("span",{children:"单位 px"})]}),v.jsx("div",{className:"intrinsics-grid",children:["fx","fy","cx","cy"].map(x=>v.jsxs("label",{children:[x,v.jsx("input",{type:"number",step:"any",placeholder:x==="fx"||x==="fy"?"焦距":"主点坐标",value:m[x],onChange:_=>p({...m,[x]:_.target.value})})]},x))}),v.jsx("p",{className:"form-note",children:"图像尺寸自动读取并校验。此界面不会猜测焦距，也不会自动去畸变。"})]}),S&&v.jsx("div",{className:"inline-error",children:S}),v.jsxs("div",{className:"modal-footer",children:[v.jsx("button",{className:"quiet",disabled:g,onClick:r,children:"取消"}),v.jsxs("button",{className:"primary",disabled:g||!l.length,onClick:()=>void C(),children:[g?v.jsx(Oc,{size:15,className:"spin"}):v.jsx(Vh,{size:15}),"校验并导入"]})]})]})})}const uR={running:"重建进行中",completed:"重建完成",failed:"重建失败",cancelled:"已取消",interrupted:"运行中断",imported:"已导入模型"};function Lc(r){return r.status==="completed"&&r.registered_images!=null&&r.image_count!=null&&r.registered_images<r.image_count?`部分重建 ${r.registered_images}/${r.image_count}`:uR[r.status]??r.status}const fR={points:!0,cameras:!0,axes:!0,pointSize:2.5,cameraScale:1,color:"rgb",maxError:0,minTrack:0},Hh=[["features","特征"],["pair_geometry","匹配"],["tracks","轨迹"],["initialization","初始化"],["incremental_mapping","建图"],["bundle_adjustment","BA"],["export","导出"]];function hR(r){if(typeof r.message=="string")return r.message;if(typeof r.text=="string")return r.text;const t=typeof r.stage=="string"?jh(r.stage):"",i=Object.entries(r).filter(([s])=>!["kind","type","stage","timestamp","time","seq","snapshot"].includes(s)).map(([s,l])=>`${s}: ${typeof l=="object"?JSON.stringify(l):l}`).join(" · ");return[t,i].filter(Boolean).join(" · ")||String(r.kind??"状态更新")}function dR(r){if(r==null)return"—";const t=Math.round(r);return t<60?`${t} 秒`:`${Math.floor(t/60)} 分 ${t%60} 秒`}function pR(){const[r,t]=Pt.useState([]),[i,s]=Pt.useState([]),[l,c]=Pt.useState(null),[h,d]=Pt.useState(null),[m,p]=Pt.useState(""),[g,y]=Pt.useState(null),[S,E]=Pt.useState(""),[b,C]=Pt.useState(null),[x,_]=Pt.useState(null),[I,L]=Pt.useState("latest"),[U,F]=Pt.useState(null),[k,O]=Pt.useState([]),[V,D]=Pt.useState(null),[w,j]=Pt.useState(null),[Z,lt]=Pt.useState(null),[vt,ft]=Pt.useState(fR),[B,q]=Pt.useState("images"),[Y,_t]=Pt.useState("log"),[N,tt]=Pt.useState([]),[Et,Tt]=Pt.useState(null),[Ut,Vt]=Pt.useState(!0),[et,yt]=Pt.useState(!1),[dt,Dt]=Pt.useState(!1),[zt,Jt]=Pt.useState(!1),[Ue,G]=Pt.useState(!1),[be,re]=Pt.useState(!1),[te,Gt]=Pt.useState(!1),[Pe,kt]=Pt.useState(!1),[le,Ve]=Pt.useState(""),[Xe,P]=Pt.useState(0),T=i.find(z=>z.status==="running"),it=Pt.useRef(null),gt=Pt.useRef(null),mt=Pt.useCallback((z,ot=!0)=>Tt({text:z,error:ot}),[]),ht=Pt.useCallback(z=>{C(z),s(ot=>[z,...ot.filter(St=>St.id!==z.id)])},[]),Bt=Pt.useCallback(z=>{try{localStorage.setItem("minicolmap.lastRun",z.id)}catch{}E(z.id),C(z),L("latest"),D(null),_(null),F(null),O([]),tt([]),P(ot=>ot+1),z.dataset_id&&p(z.dataset_id)},[]),wt=Pt.useCallback(z=>{p(z),y(ot=>ot?.id===z?ot:null),E(""),C(null),_(null),Dt(!1),D(null),F(null),O([]),tt([]),L("latest"),q("images")},[]);Pt.useEffect(()=>{let z=!1;return Ln("/api/bootstrap").then(ot=>{if(z)return;t(ot.datasets),s(ot.runs),c(ot.defaults),d(structuredClone(ot.defaults));let St="";try{St=localStorage.getItem("minicolmap.lastRun")??""}catch{}const pt=ot.runs.find(Yt=>Yt.status==="running")??ot.runs.find(Yt=>Yt.id===St)??ot.runs.find(Yt=>Yt.name==="temple_ring_8_arc_no_ba_01")??ot.runs.find(Yt=>Yt.name.includes("temple_ring_8_arc_no_ba"))??ot.runs[0];pt&&Bt(pt);const Ot=ot.datasets.find(Yt=>Yt.name.includes("8"))??ot.datasets[0];!pt?.dataset_id&&Ot&&p(Ot.id)}).catch(ot=>{z||mt(String(ot))}).finally(()=>{z||Vt(!1)}),()=>{z=!0}},[mt,Bt]),Pt.useEffect(()=>{if(!m){y(null);return}let z=!1;return Ln(`/api/datasets/${encodeURIComponent(m)}`).then(ot=>{z||y(ot)}).catch(ot=>{z||mt(String(ot))}),()=>{z=!0}},[m,mt]),Pt.useEffect(()=>{if(!S)return;let z=!1;return Dt(!0),Ln(`/api/runs/${encodeURIComponent(S)}/scene?snapshot=${encodeURIComponent(I)}`).then(ot=>{z||_(ot)}).catch(()=>{z||_(null)}).finally(()=>{z||Dt(!1)}),()=>{z=!0}},[S,I,Xe]),Pt.useEffect(()=>{if(!S)return;let z=!1;return Promise.all([Ln(`/api/runs/${encodeURIComponent(S)}/reports`),Ln(`/api/runs/${encodeURIComponent(S)}/artifacts`)]).then(([ot,St])=>{z||(F(ot),O(St))}).catch(ot=>{!z&&b?.status!=="running"&&mt(String(ot))}),()=>{z=!0}},[S,b?.status,Xe,mt]),Pt.useEffect(()=>{if(!S||b?.status!=="running"){Ve("");return}const z=new EventSource(`/api/runs/${encodeURIComponent(S)}/events`);let ot,St=!1;const pt=()=>{ot||(ot=setTimeout(()=>{ot=void 0,Ln(`/api/runs/${encodeURIComponent(S)}`).then(Ot=>{St||ht(Ot)}).catch(()=>{}),P(Ot=>Ot+1)},300))};return z.onopen=()=>{Ve("已连接"),pt()},z.onmessage=Ot=>{try{const Yt=JSON.parse(Ot.data);tt(Ae=>[...Ae,{time:new Date(typeof Yt.time=="number"?Yt.time*1e3:Date.now()).toLocaleTimeString("zh-CN",{hour12:!1}),kind:String(Yt.kind??Yt.type??"info"),text:hR(Yt)}].slice(-500)),pt()}catch{}},z.onerror=()=>{Ve("连接恢复中…")},()=>{St=!0,z.close(),ot&&clearTimeout(ot)}},[S,b?.status,ht]),Pt.useEffect(()=>{if(!T)return;let z=!1;const ot=setInterval(()=>{Ln("/api/runs").then(St=>{if(z)return;s(St);const pt=St.find(Ot=>Ot.id===S);pt&&(C(pt),pt.id===T.id&&pt.status!=="running"&&P(Ot=>Ot+1))}).catch(()=>{})},2e3);return()=>{z=!0,clearInterval(ot)}},[T?.id,S]),Pt.useEffect(()=>{gt.current?.scrollIntoView({block:"nearest"})},[N]),Pt.useEffect(()=>{const z=ot=>{ot.key==="Escape"&&(D(null),kt(!1))};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[]);async function Zt(){if(!(!m||!h)){yt(!0),Tt(null);try{const z=await Ln("/api/config/validate",Pc(h));d(z);const ot=await Ln("/api/runs",Pc({dataset_id:m,config:z}));ht(ot),Bt(ot),_t("log")}catch(z){mt(String(z))}finally{yt(!1)}}}async function Kt(){const z=i.find(ot=>ot.status==="running");if(z){yt(!0);try{const ot=await Ln(`/api/runs/${encodeURIComponent(z.id)}/cancel`,{method:"POST"});ot.id===S?(ht(ot),P(St=>St+1)):s(St=>[ot,...St.filter(pt=>pt.id!==ot.id)])}catch(ot){mt(String(ot))}finally{yt(!1)}}}async function At(z){yt(!0);try{const ot=new FormData;ot.append("file",z);const St=await Ln("/api/results/import",{method:"POST",body:ot});ht(St),Bt(St),mt("模型已导入。原始照片缺失时仍可检查点云与位姿。",!1)}catch(ot){mt(String(ot))}finally{yt(!1)}}const Lt=x?.cameras??g?.images.map(z=>({...z,image_id:z.id,registered:!1,observations:0,K:g.cameras.find(ot=>ot.id===z.camera_id)?.K??[]}))??[],Xt=x?.summary,Wt=Xt?.registered_images??b?.registered_images??0,Nt=Xt?.image_count??b?.image_count??g?.image_count??0,ce=x?.snapshots?.length?x.snapshots:b?.snapshots??[],W=Hh.findIndex(([z])=>z===b?.stage||z==="bundle_adjustment"&&b?.stage==="ba"||z==="export"&&b?.stage==="exporting"||z==="features"&&b?.stage==="feature_extraction"||z==="incremental_mapping"&&["registration","mapping"].includes(b?.stage??"")||z==="pair_geometry"&&b?.stage==="matching"),Rt=b&&!b.images_available;return v.jsxs("div",{className:`app ${Ue?"left-hidden":""} ${be?"right-hidden":""}`,children:[v.jsxs("header",{className:"topbar",children:[v.jsxs("div",{className:"brand",children:[v.jsx("div",{className:"brand-mark",children:v.jsx(O_,{size:23,strokeWidth:1.5})}),v.jsxs("div",{children:[v.jsxs("strong",{children:["MINI",v.jsx("span",{children:"COLMAP"})]}),v.jsx("small",{children:"三维重建工作台"})]})]}),v.jsxs("div",{className:"project-heading",children:[v.jsx("span",{className:"project-divider"}),v.jsx(Gc,{size:15}),v.jsx("span",{children:g?.name??"未选择数据集"}),v.jsxs("span",{className:"local-pill",children:[v.jsx("i",{}),"LOCAL"]})]}),v.jsxs("div",{className:"top-actions",children:[v.jsxs("button",{className:"quiet","data-testid":"import-model",onClick:()=>it.current?.click(),disabled:et,children:[v.jsx(B_,{size:15}),"打开模型"]}),v.jsx("input",{ref:it,hidden:!0,type:"file",accept:".json",onChange:z=>{const ot=z.target.files?.[0];ot&&At(ot),z.target.value=""}}),v.jsxs("details",{className:"export-menu",children:[v.jsxs("summary",{className:`button quiet ${b?"":"disabled"}`,children:[v.jsx(L_,{size:15}),"导出",v.jsx(oh,{size:12})]}),v.jsx("div",{className:"dropdown",children:k.length?k.map(z=>v.jsxs("a",{href:z.url,download:!0,children:[/\.png|\.jpe?g/i.test(z.name)?v.jsx(lh,{size:13}):v.jsx(B_,{size:13}),v.jsx("span",{children:z.name}),v.jsx(L_,{size:12})]},z.url)):v.jsx("p",{children:"当前还没有可下载的结果。"})})]}),v.jsx("span",{className:"action-divider"}),T?v.jsxs("button",{className:"cancel-button","data-testid":"cancel-run",disabled:et,onClick:()=>void Kt(),children:[v.jsx(pS,{size:13,fill:"currentColor"}),"取消重建"]}):v.jsxs("button",{className:"primary start-button","data-testid":"start-run",disabled:et||!m||Ut,onClick:()=>void Zt(),children:[et?v.jsx(Oc,{size:15,className:"spin"}):v.jsx(cS,{size:14,fill:"currentColor"}),"开始重建"]}),v.jsx("button",{className:"icon-button help-button","aria-label":"操作说明",title:"操作说明",onClick:()=>kt(!0),children:v.jsx(Vc,{size:17})})]})]}),Et&&v.jsxs("div",{className:`notice ${Et.error?"error":"success"}`,role:"alert",children:[Et.error?v.jsx(gS,{size:15}):v.jsx(P_,{size:15}),v.jsx("span",{children:Et.text}),v.jsx("button",{"aria-label":"关闭通知",onClick:()=>Tt(null),children:v.jsx(kh,{size:14})})]}),v.jsxs("div",{className:"workspace",children:[v.jsxs("aside",{className:"left-panel",children:[v.jsxs("div",{className:"workspace-label",children:[v.jsx("span",{children:"工作区"}),v.jsx("button",{className:"icon-button",title:"收起左侧栏","aria-label":"收起左侧栏",onClick:()=>G(!0),children:v.jsx(oS,{size:15})})]}),v.jsxs("div",{className:"dataset-picker",children:[v.jsx("label",{children:"当前输入数据"}),v.jsxs("div",{className:"select-wrapper",children:[v.jsx(Gc,{size:15}),v.jsxs("select",{"aria-label":"选择输入数据集",value:m,disabled:!!T,onChange:z=>{wt(z.target.value)},children:[v.jsx("option",{value:"",disabled:!0,children:"选择数据集"}),r.map(z=>v.jsxs("option",{value:z.id,children:[z.name," · ",z.image_count," 张"]},z.id))]}),v.jsx($y,{size:12})]}),v.jsxs("button",{className:"outline full import-dataset","data-testid":"import-dataset",disabled:!!T,onClick:()=>Jt(!0),children:[v.jsx(uS,{size:14}),"导入数据集"]})]}),v.jsxs("nav",{className:"side-tabs",children:[v.jsxs("button",{className:B==="images"?"selected":"",onClick:()=>q("images"),children:[v.jsx(lh,{size:14}),"照片"]}),v.jsxs("button",{className:B==="config"?"selected":"",onClick:()=>q("config"),children:[v.jsx(hS,{size:14}),"参数"]}),v.jsxs("button",{className:B==="history"?"selected":"",onClick:()=>q("history"),children:[v.jsx(aS,{size:14}),"历史"]})]}),v.jsx("div",{className:"left-content",children:B==="images"?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"list-heading",children:[v.jsx("span",{children:x?"当前模型图像":"输入照片"}),v.jsxs("span",{children:[Lt.length," 张"]})]}),Lt.length?v.jsx("div",{className:"image-list",children:Lt.map(z=>v.jsxs("button",{className:`image-row ${V?.kind==="camera"&&V.id===z.image_id?"selected":""}`,"data-testid":`image-${z.image_id}`,onClick:()=>{(x||g)&&(D({kind:"camera",id:z.image_id}),re(!1))},children:[v.jsx("div",{className:"image-thumbnail",children:z.image_url?v.jsx("img",{loading:"lazy",src:z.image_url,alt:"",onError:ot=>{ot.currentTarget.style.visibility="hidden"}}):v.jsx(lh,{size:17})}),v.jsxs("div",{children:[v.jsx("strong",{children:z.name}),v.jsxs("small",{children:["#",z.image_id," ",v.jsx("span",{children:z.registered?`${mn(z.observations,0)} 观测`:`${z.width} × ${z.height}`})]})]}),v.jsx("span",{className:`registration-dot ${z.registered?"registered":""}`,title:z.registered?"已注册":"尚未注册"})]},z.image_id))}):v.jsxs("div",{className:"sidebar-empty",children:[v.jsx(iS,{size:26}),v.jsx("p",{children:"导入照片以开始重建"})]}),x&&v.jsxs("div",{className:"registration-key",children:[v.jsx("i",{className:"registration-dot registered"}),"已注册"," ",v.jsxs("span",{children:[Wt," / ",Nt]})]})]}):B==="config"&&h&&l?v.jsx(oR,{config:h,defaults:l,disabled:!!T,onChange:d,onError:mt,onValidate:()=>{Ln("/api/config/validate",Pc(h)).then(z=>{d(z),mt("配置检查通过，可以开始重建。",!1)}).catch(z=>mt(String(z)))}}):B==="history"?v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"list-heading",children:[v.jsx("span",{children:"本地重建记录"}),v.jsx("button",{className:"text-button","aria-label":"刷新历史运行",onClick:()=>{Ln("/api/runs").then(s).catch(z=>mt(String(z)))},children:"刷新"})]}),v.jsx("div",{className:"run-list",children:i.map(z=>v.jsxs("button",{className:`run-row ${S===z.id?"selected":""}`,onClick:()=>Bt(z),children:[v.jsxs("div",{className:"run-row-top",children:[v.jsx("span",{className:`status-dot ${z.status==="completed"||z.status==="imported"?"good":z.status==="running"?"live":z.status==="failed"?"bad":""}`}),v.jsx("strong",{children:z.name})]}),v.jsx("span",{children:Lc(z)}),v.jsxs("small",{children:[z.registered_images??"—","/",z.image_count??"—"," 相机 ·"," ",mn(z.point_count,0)," 点"]})]},z.id))})]}):null}),v.jsxs("div",{className:"sidebar-footer",children:[v.jsx("span",{className:"live-dot"}),"本机运行 · Python 算法引擎",v.jsx("span",{children:"v0.1"})]})]}),v.jsxs("main",{className:"main-panel",children:[v.jsxs("div",{className:"scene-topline",children:[v.jsxs("div",{className:"scene-breadcrumb",children:[Ue&&v.jsx("button",{className:"icon-button",title:"展开左侧栏","aria-label":"展开左侧栏",onClick:()=>G(!1),children:v.jsx(Gh,{size:16})}),v.jsx(O_,{size:14}),v.jsx("span",{children:b?.name??"尚无重建结果"}),b&&v.jsxs("span",{className:`run-state ${b.status} ${Lc(b).startsWith("部分重建")?"partial":""}`,children:[v.jsx("i",{}),Lc(b)]}),dt&&v.jsx(Oc,{size:12,className:"spin"})]}),v.jsxs("div",{className:"scene-actions",children:[v.jsxs("label",{className:"snapshot-select",children:[v.jsx(z_,{size:13}),v.jsxs("select",{"aria-label":"选择场景快照",value:I,disabled:!ce.length,onChange:z=>{L(z.target.value),D(null)},children:[v.jsxs("option",{value:"latest",children:["最新结果",b?.status==="running"?" · 实时":""]}),ce.map(z=>v.jsx("option",{value:z.id,children:$0(z.label)},z.id))]})]}),v.jsx("button",{className:"icon-button","aria-label":be?"展开检查器":"收起检查器",onClick:()=>re(!be),children:v.jsx(lS,{size:15})})]})]}),Rt&&v.jsxs("div",{className:"image-warning",children:[v.jsx(Vc,{size:12}),"此模型未关联原始照片；点云和相机位姿仍可查看。"]}),v.jsx(sR,{scene:x,runId:S,options:vt,setOptions:ft,selection:V,cameraViewRequest:w,onCameraViewChange:lt,onSelect:z=>{D(z),z&&re(!1)}}),v.jsxs("section",{className:`bottom-panel ${te?"expanded":""}`,children:[v.jsxs("div",{className:"bottom-heading",children:[v.jsxs("div",{className:"bottom-tabs",children:[v.jsxs("button",{className:Y==="log"?"selected":"",onClick:()=>_t("log"),children:[v.jsx(mS,{size:13}),"运行日志",b?.status==="running"&&v.jsx("i",{className:"live-dot"})]}),v.jsxs("button",{className:Y==="diagnostics"?"selected":"",onClick:()=>_t("diagnostics"),children:[v.jsx(N_,{size:13}),"质量与诊断"]})]}),v.jsxs("div",{className:"bottom-status",children:[b?.status==="running"&&v.jsxs("span",{className:"actual-progress","data-testid":"actual-progress",children:[jh(b.stage),b.total!=null&&b.total>0?` ${b.completed??0} / ${b.total}`:""]}),le&&v.jsxs("span",{children:[v.jsx("i",{className:"live-dot"}),le]}),v.jsxs("span",{children:[v.jsx(z_,{size:12}),dR(b?.elapsed_seconds)]}),v.jsx("button",{className:"icon-button",title:te?"收起日志区":"展开日志区","aria-label":"调整日志区域",onClick:()=>Gt(!te),children:v.jsx(oh,{size:14,style:{transform:te?"none":"rotate(180deg)"}})})]})]}),Y==="log"?v.jsxs(v.Fragment,{children:[v.jsx("div",{className:"phase-strip",children:Hh.map(([z,ot],St)=>{const pt=z==="bundle_adjustment"&&b?.status==="completed"&&!U?.ba,Ot=!pt&&(b?.status==="completed"||W>St);return v.jsxs("div",{className:`${b?.status==="running"&&St===W?"current":""} ${Ot?"complete":""}`,title:pt?"本次未启用最终 BA":ot,children:[v.jsx("span",{children:Ot?v.jsx(P_,{size:10}):pt?"—":String(St+1).padStart(2,"0")}),ot,St<Hh.length-1&&v.jsx(Gh,{size:10})]},z)})}),v.jsxs("div",{className:"log-scroll",role:"log","aria-label":"算法运行日志",children:[!N.length&&v.jsxs("div",{className:"log-line",children:[v.jsx("time",{children:"—"}),v.jsx("span",{className:"log-tag",children:"SYSTEM"}),v.jsx("span",{children:b?.status==="running"?"正在连接实际运行事件…":b?`已加载本地结果：${b.name}。${b.status==="imported"?"此模型由文件导入。":"完整诊断与原始文件可在“质量与诊断”和“导出”中查看。"}`:"就绪。选择数据集并开始重建。"})]}),N.map((z,ot)=>v.jsxs("div",{className:`log-line ${z.kind==="warning"||z.kind==="error"?"warning":""}`,children:[v.jsx("time",{children:z.time}),v.jsx("span",{className:"log-tag",children:z.kind.toUpperCase()}),v.jsx("span",{children:z.text})]},ot)),b?.error&&v.jsxs("div",{className:"log-line warning",children:[v.jsx("time",{children:"ERROR"}),v.jsx("span",{children:b.error})]}),b?.warnings?.map((z,ot)=>v.jsxs("div",{className:"log-line warning",children:[v.jsx("time",{children:"WARN"}),v.jsx("span",{children:z})]},`w${ot}`)),v.jsx("div",{ref:gt})]})]}):v.jsxs("div",{className:"diagnostics-scroll",children:[v.jsxs("div",{className:"metric-strip",children:[v.jsxs("div",{children:[v.jsx("span",{children:"注册相机"}),v.jsxs("strong",{children:[Wt," / ",Nt]})]}),v.jsxs("div",{children:[v.jsx("span",{children:"三维点"}),v.jsx("strong",{children:mn(Xt?.point_count,0)})]}),v.jsxs("div",{children:[v.jsx("span",{children:"有效观测"}),v.jsx("strong",{children:mn(Xt?.observation_count,0)})]}),v.jsxs("div",{children:[v.jsx("span",{children:"中位误差"}),v.jsxs("strong",{children:[mn(Xt?.median_reprojection_error_px)," ",v.jsx("small",{children:"px"})]})]}),v.jsxs("div",{children:[v.jsx("span",{children:"P95 误差"}),v.jsxs("strong",{children:[mn(Xt?.p95_reprojection_error_px)," ",v.jsx("small",{children:"px"})]})]}),v.jsxs("div",{children:[v.jsx("span",{children:"正深度比例"}),v.jsx("strong",{children:Xt?.positive_depth_ratio==null?"—":`${mn(Xt.positive_depth_ratio*100,1)}%`})]})]}),U?.ba&&v.jsxs("div",{className:`ba-notice ${U.ba.solver_success?"converged":""}`,"data-testid":"ba-status",children:[v.jsx(N_,{size:15}),v.jsx("strong",{children:U.ba.accepted?"BA 候选已接受":"BA 候选未接受"}),v.jsx("span",{children:U.ba.solver_success?"求解器已收敛":"求解器尚未收敛"}),v.jsxs("span",{children:[U.ba.nfev," 次评估"]}),v.jsxs("span",{children:[mn(U.ba.before_mean_px)," → ",mn(U.ba.candidate_mean_px)," ","px"]}),v.jsx("p",{children:U.ba.rejection_reason??U.ba.message})]}),b&&Lc(b).startsWith("部分重建")&&v.jsxs("div",{className:"info-note",children:["流程完成，但仅 ",b.registered_images,"/",b.image_count," ","张图像成功注册。请检查未注册照片与匹配质量。"]}),v.jsx("div",{className:"report-disclosures",children:["pairs","initialization"].map(z=>v.jsxs("details",{children:[v.jsxs("summary",{children:[z==="pairs"?"图像对匹配与几何验证":"初始化候选与筛选诊断",v.jsx(oh,{size:12})]}),v.jsx("pre",{children:U?.[z]?JSON.stringify(U[z],null,2):"暂无该阶段报告。"})]},z))}),k.some(z=>/\.(png|jpe?g)$/i.test(z.name))&&v.jsxs("details",{className:"match-previews",children:[v.jsx("summary",{children:"查看真实匹配预览"}),v.jsx("div",{children:k.filter(z=>/\.(png|jpe?g)$/i.test(z.name)).map(z=>v.jsxs("a",{href:z.url,target:"_blank",rel:"noreferrer",children:[v.jsx("img",{src:z.url,loading:"lazy",alt:z.name}),v.jsx("span",{children:z.name})]},z.url))})]})]})]})]}),!be&&v.jsx(lR,{scene:x,inputDataset:g,runId:S,snapshot:x?.snapshot_id??I,selection:V,onSelect:D,onViewCamera:z=>j(ot=>({imageId:z,version:(ot?.version??0)+1})),viewCameraId:Z})]}),v.jsxs("footer",{className:"statusbar",children:[v.jsxs("span",{children:[v.jsx("span",{className:"status-dot good"}),"本地工作台 ",v.jsx("i",{}),"127.0.0.1"]}),v.jsxs("span",{children:[b?.status==="running"?jh(b.stage):"只呈现算法计算结果",v.jsx("i",{}),"React + Three.js · Python"]})]}),Ut&&v.jsxs("div",{className:"boot-overlay",children:[v.jsx(Oc,{size:26,className:"spin"}),v.jsx("span",{children:"正在连接本地重建引擎…"})]}),zt&&v.jsx(cR,{onClose:()=>Jt(!1),onImported:z=>{t(ot=>[z,...ot.filter(St=>St.id!==z.id)]),wt(z.id),y(z),q("images"),mt(`已导入 ${z.image_count} 张图像。请检查参数后开始重建。`,!1)}}),Pe&&v.jsx("div",{className:"modal-backdrop",onMouseDown:z=>{z.target===z.currentTarget&&kt(!1)},children:v.jsxs("section",{className:"modal help-modal",role:"dialog","aria-modal":"true","aria-label":"工作台操作说明",children:[v.jsxs("div",{className:"modal-heading",children:[v.jsxs("div",{children:[v.jsx("span",{className:"eyebrow",children:"WORKBENCH GUIDE"}),v.jsx("h2",{children:"从照片到稀疏重建"})]}),v.jsx("button",{className:"icon-button",onClick:()=>kt(!1),"aria-label":"关闭操作说明",children:v.jsx(kh,{size:18})})]}),v.jsxs("ol",{children:[v.jsxs("li",{children:[v.jsx("strong",{children:"选择或导入数据"}),v.jsx("p",{children:"使用项目数据集，或导入已去畸变照片与真实内参。"})]}),v.jsxs("li",{children:[v.jsx("strong",{children:"检查参数并运行"}),v.jsx("p",{children:"“参数”中的配置直接交给现有 Python 算法，实际进度在底部更新。"})]}),v.jsxs("li",{children:[v.jsx("strong",{children:"拖拽检查三维结果"}),v.jsx("p",{children:"左键旋转、右键平移、滚轮缩放；点击相机或点查看原始信息。Esc 清除选择。"})]}),v.jsxs("li",{children:[v.jsx("strong",{children:"对照快照与质量"}),v.jsx("p",{children:"切换初始化、增量建图和 BA 前后快照。BA 接受与求解器收敛分别展示。"})]}),v.jsxs("li",{children:[v.jsx("strong",{children:"导出真实结果"}),v.jsx("p",{children:"右上角下载模型、PLY 和其他实际生成的文件。视图调整不修改地图。"})]})]})]})})]})}Yy.createRoot(document.getElementById("root")).render(v.jsx(Hy.StrictMode,{children:v.jsx(pR,{})}));
