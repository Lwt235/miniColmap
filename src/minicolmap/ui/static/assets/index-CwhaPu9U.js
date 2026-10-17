(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Z0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ih={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Iy(){if(M_)return Do;M_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var E_;function By(){return E_||(E_=1,ih.exports=Iy()),ih.exports}var g=By(),ah={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Fy(){if(b_)return de;b_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function x(N,tt,yt){this.props=N,this.context=tt,this.refs=C,this.updater=yt||E}x.prototype.isReactComponent={},x.prototype.setState=function(N,tt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,tt,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function B(N,tt,yt){this.props=N,this.context=tt,this.refs=C,this.updater=yt||E}var P=B.prototype=new v;P.constructor=B,b(P,x.prototype),P.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function O(N,tt,yt,Mt,Nt,kt){return yt=kt.ref,{$$typeof:r,type:N,key:tt,ref:yt!==void 0?yt:null,props:kt}}function j(N,tt){return O(N.type,tt,void 0,void 0,void 0,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function U(N){var tt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return tt[yt]})}var V=/\/+/g;function Z(N,tt){return typeof N=="object"&&N!==null&&N.key!=null?U(""+N.key):tt.toString(36)}function it(){}function mt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(it,it):(N.status="pending",N.then(function(tt){N.status==="pending"&&(N.status="fulfilled",N.value=tt)},function(tt){N.status==="pending"&&(N.status="rejected",N.reason=tt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function lt(N,tt,yt,Mt,Nt){var kt=typeof N;(kt==="undefined"||kt==="boolean")&&(N=null);var et=!1;if(N===null)et=!0;else switch(kt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(N.$$typeof){case r:case t:et=!0;break;case _:return et=N._init,lt(et(N._payload),tt,yt,Mt,Nt)}}if(et)return Nt=Nt(N),et=Mt===""?"."+Z(N,0):Mt,D(Nt)?(yt="",et!=null&&(yt=et.replace(V,"$&/")+"/"),lt(Nt,tt,yt,"",function(Kt){return Kt})):Nt!=null&&(w(Nt)&&(Nt=j(Nt,yt+(Nt.key==null||N&&N.key===Nt.key?"":(""+Nt.key).replace(V,"$&/")+"/")+et)),tt.push(Nt)),1;et=0;var _t=Mt===""?".":Mt+":";if(D(N))for(var wt=0;wt<N.length;wt++)Mt=N[wt],kt=_t+Z(Mt,wt),et+=lt(Mt,tt,yt,kt,Nt);else if(wt=S(N),typeof wt=="function")for(N=wt.call(N),wt=0;!(Mt=N.next()).done;)Mt=Mt.value,kt=_t+Z(Mt,wt++),et+=lt(Mt,tt,yt,kt,Nt);else if(kt==="object"){if(typeof N.then=="function")return lt(mt(N),tt,yt,Mt,Nt);throw tt=String(N),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return et}function I(N,tt,yt){if(N==null)return N;var Mt=[],Nt=0;return lt(N,Mt,"","",function(kt){return tt.call(yt,kt,Nt++)}),Mt}function Y(N){if(N._status===-1){var tt=N._result;tt=tt(),tt.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=tt)}if(N._status===1)return N._result.default;throw N._result}var q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function pt(){}return de.Children={map:I,forEach:function(N,tt,yt){I(N,function(){tt.apply(this,arguments)},yt)},count:function(N){var tt=0;return I(N,function(){tt++}),tt},toArray:function(N){return I(N,function(tt){return tt})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},de.Component=x,de.Fragment=i,de.Profiler=l,de.PureComponent=B,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,de.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},de.cache=function(N){return function(){return N.apply(null,arguments)}},de.cloneElement=function(N,tt,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Mt=b({},N.props),Nt=N.key,kt=void 0;if(tt!=null)for(et in tt.ref!==void 0&&(kt=void 0),tt.key!==void 0&&(Nt=""+tt.key),tt)!k.call(tt,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&tt.ref===void 0||(Mt[et]=tt[et]);var et=arguments.length-2;if(et===1)Mt.children=yt;else if(1<et){for(var _t=Array(et),wt=0;wt<et;wt++)_t[wt]=arguments[wt+2];Mt.children=_t}return O(N.type,Nt,void 0,void 0,kt,Mt)},de.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},de.createElement=function(N,tt,yt){var Mt,Nt={},kt=null;if(tt!=null)for(Mt in tt.key!==void 0&&(kt=""+tt.key),tt)k.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Nt[Mt]=tt[Mt]);var et=arguments.length-2;if(et===1)Nt.children=yt;else if(1<et){for(var _t=Array(et),wt=0;wt<et;wt++)_t[wt]=arguments[wt+2];Nt.children=_t}if(N&&N.defaultProps)for(Mt in et=N.defaultProps,et)Nt[Mt]===void 0&&(Nt[Mt]=et[Mt]);return O(N,kt,void 0,void 0,null,Nt)},de.createRef=function(){return{current:null}},de.forwardRef=function(N){return{$$typeof:d,render:N}},de.isValidElement=w,de.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:Y}},de.memo=function(N,tt){return{$$typeof:p,type:N,compare:tt===void 0?null:tt}},de.startTransition=function(N){var tt=H.T,yt={};H.T=yt;try{var Mt=N(),Nt=H.S;Nt!==null&&Nt(yt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(pt,q)}catch(kt){q(kt)}finally{H.T=tt}},de.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},de.use=function(N){return H.H.use(N)},de.useActionState=function(N,tt,yt){return H.H.useActionState(N,tt,yt)},de.useCallback=function(N,tt){return H.H.useCallback(N,tt)},de.useContext=function(N){return H.H.useContext(N)},de.useDebugValue=function(){},de.useDeferredValue=function(N,tt){return H.H.useDeferredValue(N,tt)},de.useEffect=function(N,tt,yt){var Mt=H.H;if(typeof yt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(N,tt)},de.useId=function(){return H.H.useId()},de.useImperativeHandle=function(N,tt,yt){return H.H.useImperativeHandle(N,tt,yt)},de.useInsertionEffect=function(N,tt){return H.H.useInsertionEffect(N,tt)},de.useLayoutEffect=function(N,tt){return H.H.useLayoutEffect(N,tt)},de.useMemo=function(N,tt){return H.H.useMemo(N,tt)},de.useOptimistic=function(N,tt){return H.H.useOptimistic(N,tt)},de.useReducer=function(N,tt,yt){return H.H.useReducer(N,tt,yt)},de.useRef=function(N){return H.H.useRef(N)},de.useState=function(N){return H.H.useState(N)},de.useSyncExternalStore=function(N,tt,yt){return H.H.useSyncExternalStore(N,tt,yt)},de.useTransition=function(){return H.H.useTransition()},de.version="19.1.1",de}var T_;function zd(){return T_||(T_=1,ah.exports=Fy()),ah.exports}var Lt=zd();const Hy=Z0(Lt);var sh={exports:{}},Uo={},rh={exports:{}},oh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Gy(){return A_||(A_=1,(function(r){function t(I,Y){var q=I.length;I.push(Y);t:for(;0<q;){var pt=q-1>>>1,N=I[pt];if(0<l(N,Y))I[pt]=Y,I[q]=N,q=pt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var Y=I[0],q=I.pop();if(q!==Y){I[0]=q;t:for(var pt=0,N=I.length,tt=N>>>1;pt<tt;){var yt=2*(pt+1)-1,Mt=I[yt],Nt=yt+1,kt=I[Nt];if(0>l(Mt,q))Nt<N&&0>l(kt,Mt)?(I[pt]=kt,I[Nt]=q,pt=Nt):(I[pt]=Mt,I[yt]=q,pt=yt);else if(Nt<N&&0>l(kt,q))I[pt]=kt,I[Nt]=q,pt=Nt;else break t}}return Y}function l(I,Y){var q=I.sortIndex-Y.sortIndex;return q!==0?q:I.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,y=null,S=3,E=!1,b=!1,C=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=I)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function H(I){if(C=!1,D(I),!b)if(i(m)!==null)b=!0,k||(k=!0,Z());else{var Y=i(p);Y!==null&&lt(H,Y.startTime-I)}}var k=!1,O=-1,j=5,w=-1;function U(){return x?!0:!(r.unstable_now()-w<j)}function V(){if(x=!1,k){var I=r.unstable_now();w=I;var Y=!0;try{t:{b=!1,C&&(C=!1,B(O),O=-1),E=!0;var q=S;try{e:{for(D(I),y=i(m);y!==null&&!(y.expirationTime>I&&U());){var pt=y.callback;if(typeof pt=="function"){y.callback=null,S=y.priorityLevel;var N=pt(y.expirationTime<=I);if(I=r.unstable_now(),typeof N=="function"){y.callback=N,D(I),Y=!0;break e}y===i(m)&&s(m),D(I)}else s(m);y=i(m)}if(y!==null)Y=!0;else{var tt=i(p);tt!==null&&lt(H,tt.startTime-I),Y=!1}}break t}finally{y=null,S=q,E=!1}Y=void 0}}finally{Y?Z():k=!1}}}var Z;if(typeof P=="function")Z=function(){P(V)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,mt=it.port2;it.port1.onmessage=V,Z=function(){mt.postMessage(null)}}else Z=function(){v(V,0)};function lt(I,Y){O=v(function(){I(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(I){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var q=S;S=Y;try{return I()}finally{S=q}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(I,Y){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=S;S=I;try{return Y()}finally{S=q}},r.unstable_scheduleCallback=function(I,Y,q){var pt=r.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pt+q:pt):q=pt,I){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=q+N,I={id:_++,callback:Y,priorityLevel:I,startTime:q,expirationTime:N,sortIndex:-1},q>pt?(I.sortIndex=q,t(p,I),i(m)===null&&I===i(p)&&(C?(B(O),O=-1):C=!0,lt(H,q-pt))):(I.sortIndex=N,t(m,I),b||E||(b=!0,k||(k=!0,Z()))),I},r.unstable_shouldYield=U,r.unstable_wrapCallback=function(I){var Y=S;return function(){var q=S;S=Y;try{return I.apply(this,arguments)}finally{S=q}}}})(oh)),oh}var R_;function Vy(){return R_||(R_=1,rh.exports=Gy()),rh.exports}var lh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function ky(){if(C_)return Un;C_=1;var r=zd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Un.flushSync=function(m){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=_,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,y=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(m,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,y=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var w_;function jy(){if(w_)return lh.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),lh.exports=ky(),lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Xy(){if(D_)return Uo;D_=1;var r=Vy(),t=zd(),i=jy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=f;break}if(A===o){M=!0,o=u,a=f;break}A=A.sibling}if(!M){for(A=f.child;A;){if(A===a){M=!0,a=f,o=u;break}if(A===o){M=!0,o=f,a=u;break}A=A.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),U=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var it=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===it?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case x:return"Profiler";case C:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case P:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var lt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},pt=[],N=-1;function tt(e){return{current:e}}function yt(e){0>N||(e.current=pt[N],pt[N]=null,N--)}function Mt(e,n){N++,pt[N]=e.current,e.current=n}var Nt=tt(null),kt=tt(null),et=tt(null),_t=tt(null);function wt(e,n){switch(Mt(et,n),Mt(kt,e),Mt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Kg(n),e=Qg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}yt(Nt),Mt(Nt,e)}function Kt(){yt(Nt),yt(kt),yt(et)}function Et(e){e.memoizedState!==null&&Mt(_t,e);var n=Nt.current,a=Qg(n,e.type);n!==a&&(Mt(kt,e),Mt(Nt,a))}function Vt(e){kt.current===e&&(yt(Nt),yt(kt)),_t.current===e&&(yt(_t),To._currentValue=q)}var ye=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,he=r.unstable_cancelCallback,oe=r.unstable_shouldYield,te=r.unstable_requestPaint,Ht=r.unstable_now,Ie=r.unstable_getCurrentPriorityLevel,jt=r.unstable_ImmediatePriority,fe=r.unstable_UserBlockingPriority,Xe=r.unstable_NormalPriority,Ze=r.unstable_LowPriority,z=r.unstable_IdlePriority,T=r.log,at=r.unstable_setDisableYieldValue,dt=null,xt=null;function ht(e){if(typeof T=="function"&&at(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(dt,e)}catch{}}var Ft=Math.clz32?Math.clz32:qt,bt=Math.log,Xt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(bt(e)/Xt|0)|0}var Tt=256,Ot=4194304;function Jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Jt(o):(M&=A,M!==0?u=Jt(M):a||(a=A&~e,a!==0&&(u=Jt(a))))):(A=o&~f,A!==0?u=Jt(A):M!==0?u=Jt(M):a||(a=o&~e,a!==0&&(u=Jt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ut(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Rt(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function Dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,n,a,o,u,f){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,st=e.hiddenUpdates;for(a=M&~a;0<a;){var gt=31-Ft(a),St=1<<gt;A[gt]=0,G[gt]=-1;var rt=st[gt];if(rt!==null)for(st[gt]=null,gt=0;gt<rt.length;gt++){var ot=rt[gt];ot!==null&&(ot.lane&=-536870913)}a&=~St}o!==0&&L(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(M&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ct(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Pt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ne(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function se(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:g_(e.type))}function Oe(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var $e=Math.random().toString(36).slice(2),Be="__reactFiber$"+$e,Ce="__reactProps$"+$e,Qn="__reactContainer$"+$e,fa="__reactEvents$"+$e,Qo="__reactListeners$"+$e,Rs="__reactHandles$"+$e,zr="__reactResources$"+$e,wi="__reactMarker$"+$e;function Cs(e){delete e[Be],delete e[Ce],delete e[fa],delete e[Qo],delete e[Rs]}function Bi(e){var n=e[Be];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Qn]||a[Be]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=e_(e);e!==null;){if(a=e[Be])return a;e=e_(e)}return n}e=a,a=e.parentNode}return null}function ha(e){if(e=e[Be]||e[Qn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Za(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function da(e){var n=e[zr];return n||(n=e[zr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function un(e){e[wi]=!0}var Jo=new Set,$o={};function R(e,n){K(e,n),K(e+"Capture",n)}function K(e,n){for($o[e]=n,e=0;e<n.length;e++)Jo.add(n[e])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ft={},$={};function Ct(e){return ye.call($,e)?!0:ye.call(ft,e)?!1:ut.test(e)?$[e]=!0:(ft[e]=!0,!1)}function zt(e,n,a){if(Ct(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Wt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function It(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var ie,le;function Qt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+le}var me=!1;function we(e,n){if(!e||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ot){var rt=ot}Reflect.construct(e,[],St)}else{try{St.call()}catch(ot){rt=ot}e.call(St.prototype)}}else{try{throw Error()}catch(ot){rt=ot}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ot){if(ot&&rt&&typeof ot.stack=="string")return[ot.stack,rt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],A=f[1];if(M&&A){var G=M.split(`
`),st=A.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<st.length&&!st[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===st.length)for(o=G.length-1,u=st.length-1;1<=o&&0<=u&&G[o]!==st[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==st[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==st[u]){var gt=`
`+G[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=u);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function Qe(e){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return we(e.type,!1);case 11:return we(e.type.render,!1);case 1:return we(e.type,!0);case 31:return Qt("Activity");default:return""}}function Fe(e){try{var n="";do n+=Qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ge(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ee(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=ee(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function be(e){e._valueTracker||(e._valueTracker=Ke(e))}function Cn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ee(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function xn(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(e,n,a,o,u,f,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ge(n)):e.value!==""+ge(n)&&(e.value=""+ge(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?wn(e,M,ge(n)):a!=null?wn(e,M,ge(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+ge(A):e.removeAttribute("name")}function zn(e,n,a,o,u,f,M,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ge(a):"",n=n!=null?""+ge(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function wn(e,n,a){n==="number"&&xi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function an(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+ge(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ge(a):""}function ws(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ge(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function kn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ov.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Kd(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Kd(e,f,n[f])}function eu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function tl(e){return zv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var nu=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Us=null;function Jd(e){var n=ha(e);if(n&&(e=n.stateNode)){var a=e[Ce]||null;t:switch(e=n.stateNode,n.type){case"input":if(We(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ce]||null;if(!u)throw Error(s(90));We(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Cn(o)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&an(e,!!a.multiple,n,!1)}}}var au=!1;function $d(e,n,a){if(au)return e(n,a);au=!0;try{var o=e(n);return o}finally{if(au=!1,(Ds!==null||Us!==null)&&(Fl(),Ds&&(n=Ds,e=Us,Us=Ds=null,Jd(n),e)))for(n=0;n<e.length;n++)Jd(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ce]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),su=!1;if(Fi)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){su=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{su=!1}var pa=null,ru=null,el=null;function tp(){if(el)return el;var e,n=ru,a=n.length,o,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return el=u.slice(e,1<o?1-o:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function il(){return!0}function ep(){return!1}function jn(e){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?il:ep,this.isPropagationStopped=ep,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},al=jn(Ka),Fr=_({},Ka,{view:0,detail:0}),Iv=jn(Fr),ou,lu,Hr,sl=_({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(ou=e.screenX-Hr.screenX,lu=e.screenY-Hr.screenY):lu=ou=0,Hr=e),ou)},movementY:function(e){return"movementY"in e?e.movementY:lu}}),np=jn(sl),Bv=_({},sl,{dataTransfer:0}),Fv=jn(Bv),Hv=_({},Fr,{relatedTarget:0}),cu=jn(Hv),Gv=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=jn(Gv),kv=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=jn(kv),Xv=_({},Ka,{data:0}),ip=jn(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function uu(){return Zv}var Kv=_({},Fr,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=jn(Kv),Jv=_({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=jn(Jv),$v=_({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),tx=jn($v),ex=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),nx=jn(ex),ix=_({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=jn(ix),sx=_({},Ka,{newState:0,oldState:0}),rx=jn(sx),ox=[9,13,27,32],fu=Fi&&"CompositionEvent"in window,Gr=null;Fi&&"documentMode"in document&&(Gr=document.documentMode);var lx=Fi&&"TextEvent"in window&&!Gr,sp=Fi&&(!fu||Gr&&8<Gr&&11>=Gr),rp=" ",op=!1;function lp(e,n){switch(e){case"keyup":return ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function cx(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,rp);case"textInput":return e=n.data,e===rp&&op?null:e;default:return null}}function ux(e,n){if(Ns)return e==="compositionend"||!fu&&lp(e,n)?(e=tp(),el=ru=pa=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fx[e.type]:n==="textarea"}function fp(e,n,a,o){Ds?Us?Us.push(o):Us=[o]:Ds=o,n=Xl(n,"onChange"),0<n.length&&(a=new al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Vr=null,kr=null;function hx(e){Xg(e,0)}function rl(e){var n=Za(e);if(Cn(n))return e}function hp(e,n){if(e==="change")return n}var dp=!1;if(Fi){var hu;if(Fi){var du="oninput"in document;if(!du){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),du=typeof pp.oninput=="function"}hu=du}else hu=!1;dp=hu&&(!document.documentMode||9<document.documentMode)}function mp(){Vr&&(Vr.detachEvent("onpropertychange",gp),kr=Vr=null)}function gp(e){if(e.propertyName==="value"&&rl(kr)){var n=[];fp(n,kr,e,iu(e)),$d(hx,n)}}function dx(e,n,a){e==="focusin"?(mp(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",gp)):e==="focusout"&&mp()}function px(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(kr)}function mx(e,n){if(e==="click")return rl(n)}function gx(e,n){if(e==="input"||e==="change")return rl(n)}function _x(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:_x;function jr(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ye.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=_p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=xi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=xi(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vx=Fi&&"documentMode"in document&&11>=document.documentMode,Ls=null,mu=null,Xr=null,gu=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Ls==null||Ls!==xi(o)||(o=Ls,"selectionStart"in o&&pu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xr&&jr(Xr,o)||(Xr=o,o=Xl(mu,"onSelect"),0<o.length&&(n=new al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Ls)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},_u={},Mp={};Fi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Ja(e){if(_u[e])return _u[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return _u[e]=n[a];return e}var Ep=Ja("animationend"),bp=Ja("animationiteration"),Tp=Ja("animationstart"),xx=Ja("transitionrun"),yx=Ja("transitionstart"),Sx=Ja("transitioncancel"),Ap=Ja("transitionend"),Rp=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function yi(e,n){Rp.set(e,n),R(n,[e])}var Cp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Cp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Fe(n)},Cp.set(e,n),n)}return{value:e,source:n,stack:Fe(n)}}var ui=[],Ps=0,xu=0;function ol(){for(var e=Ps,n=xu=Ps=0;n<e;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&wp(a,u,f)}}function ll(e,n,a,o){ui[Ps++]=e,ui[Ps++]=n,ui[Ps++]=a,ui[Ps++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function yu(e,n,a,o){return ll(e,n,a,o),cl(e)}function zs(e,n){return ll(e,null,null,n),cl(e)}function wp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<_o)throw _o=0,Rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function Mx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,o){return new Mx(e,n,a,o)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,o,u,f){var M=0;if(o=e,typeof e=="function")Su(e)&&(M=1);else if(typeof e=="string")M=by(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=$n(31,a,n,u),e.elementType=w,e.lanes=f,e;case b:return $a(a.children,u,f,n);case C:M=8,u|=24;break;case x:return e=$n(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case H:return e=$n(13,a,n,u),e.elementType=H,e.lanes=f,e;case k:return e=$n(19,a,n,u),e.elementType=k,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case P:M=10;break t;case B:M=9;break t;case D:M=11;break t;case O:M=14;break t;case j:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=$n(M,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=$n(7,e,o,n),e.lanes=a,e}function Mu(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Eu(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bs=[],Fs=0,fl=null,hl=0,fi=[],hi=0,ts=null,Gi=1,Vi="";function es(e,n){Bs[Fs++]=hl,Bs[Fs++]=fl,fl=e,hl=n}function Up(e,n,a){fi[hi++]=Gi,fi[hi++]=Vi,fi[hi++]=ts,ts=e;var o=Gi;e=Vi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Gi=1<<32-Ft(n)+u|a<<u|o,Vi=f+e}else Gi=1<<f|a<<u|o,Vi=e}function bu(e){e.return!==null&&(es(e,1),Up(e,1,0))}function Tu(e){for(;e===fl;)fl=Bs[--Fs],Bs[Fs]=null,hl=Bs[--Fs],Bs[Fs]=null;for(;e===ts;)ts=fi[--hi],fi[hi]=null,Vi=fi[--hi],fi[hi]=null,Gi=fi[--hi],fi[hi]=null}var In=null,sn=null,Le=!1,ns=null,Di=!1,Au=Error(s(519));function is(e){var n=Error(s(418,""));throw Yr(ci(n,e)),Au}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Be]=e,n[Ce]=o,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)Ae(xo[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),be(n);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),ws(n,o.value,o.defaultValue,o.children),be(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Zg(n.textContent,a)?(o.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),o.onScroll!=null&&Ae("scroll",n),o.onScrollEnd!=null&&Ae("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||is(e)}function Lp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:In=In.return}}function Wr(e){if(e!==In)return!1;if(!Le)return Lp(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&sn&&is(e),Lp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){sn=Mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}sn=null}}else n===27?(n=sn,Da(e.type)?(e=qf,qf=null,sn=e):sn=n):sn=In?Mi(e.stateNode.nextSibling):null;return!0}function qr(){sn=In=null,Le=!1}function Op(){var e=ns;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),ns=null),e}function Yr(e){ns===null?ns=[e]:ns.push(e)}var Ru=tt(null),as=null,ki=null;function ma(e,n,a){Mt(Ru,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=Ru.current,yt(Ru)}function Cu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Cu(f.return,a,e),o||(M=null);break t}f=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Cu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Zr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var A=u.type;Jn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===_t.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&wu(n,e,a,o),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){as=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Pp(as,e)}function pl(e,n){return as===null&&ss(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Ex=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},bx=r.unstable_scheduleCallback,Tx=r.unstable_NormalPriority,pn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new Ex,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&bx(Tx,function(){e.controller.abort()})}var Qr=null,Uu=0,Hs=0,Gs=null;function Ax(e,n){if(Qr===null){var a=Qr=[];Uu=0,Hs=Of(),Gs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(zp,zp),n}function zp(){if(--Uu===0&&Qr!==null){Gs!==null&&(Gs.status="fulfilled");var e=Qr;Qr=null,Hs=0,Gs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Rx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Ip=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ax(e,n),Ip!==null&&Ip(e,n)};var rs=tt(null);function Nu(){var e=rs.current;return e!==null?e:Ye.pooledCache}function ml(e,n){n===null?Mt(rs,rs.current):Mt(rs,n.pool)}function Bp(){var e=Nu();return e===null?null:{parent:pn._currentValue,pool:e}}var Jr=Error(s(460)),Fp=Error(s(474)),gl=Error(s(542)),Lu={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function _l(){}function Gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(_l,_l),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(_l,_l);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw $r=n,Jr}}var $r=null;function Vp(){if($r===null)throw Error(s(459));var e=$r;return $r=null,e}function kp(e){if(e===Jr||e===gl)throw Error(s(483))}var ga=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=cl(e),wp(e,null,a),n}return ll(e,o,n,a),cl(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ct(e,a)}}function zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Iu=!1;function eo(){if(Iu){var e=Gs;if(e!==null)throw e}}function no(e,n,a,o){Iu=!1;var u=e.updateQueue;ga=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,st=G.next;G.next=null,M===null?f=st:M.next=st,M=G;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,A=gt.lastBaseUpdate,A!==M&&(A===null?gt.firstBaseUpdate=st:A.next=st,gt.lastBaseUpdate=G))}if(f!==null){var St=u.baseState;M=0,gt=st=G=null,A=f;do{var rt=A.lane&-536870913,ot=rt!==A.lane;if(ot?(Re&rt)===rt:(o&rt)===rt){rt!==0&&rt===Hs&&(Iu=!0),gt!==null&&(gt=gt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ue=e,re=A;rt=n;var Ve=a;switch(re.tag){case 1:if(ue=re.payload,typeof ue=="function"){St=ue.call(Ve,St,rt);break t}St=ue;break t;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=re.payload,rt=typeof ue=="function"?ue.call(Ve,St,rt):ue,rt==null)break t;St=_({},St,rt);break t;case 2:ga=!0}}rt=A.callback,rt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[rt]:ot.push(rt))}else ot={lane:rt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},gt===null?(st=gt=ot,G=St):gt=gt.next=ot,M|=rt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);gt===null&&(G=St),u.baseState=G,u.firstBaseUpdate=st,u.lastBaseUpdate=gt,f===null&&(u.shared.lanes=0),Aa|=M,e.lanes=M,e.memoizedState=St}}function jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Xp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var Vs=tt(null),vl=tt(0);function Wp(e,n){e=Qi,Mt(vl,e),Mt(Vs,n),Qi=e|n.baseLanes}function Bu(){Mt(vl,Qi),Mt(Vs,Vs.current)}function Fu(){Qi=vl.current,yt(Vs),yt(vl)}var xa=0,Se=null,He=null,fn=null,xl=!1,ks=!1,os=!1,yl=0,io=0,js=null,Cx=0;function on(){throw Error(s(321))}function Hu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Gu(e,n,a,o,u,f){return xa=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?wm:Dm,os=!1,f=a(o,u),os=!1,ks&&(f=Yp(n,a,o,u)),qp(e),f}function qp(e){I.H=Al;var n=He!==null&&He.next!==null;if(xa=0,fn=He=Se=null,xl=!1,io=0,js=null,n)throw Error(s(300));e===null||yn||(e=e.dependencies,e!==null&&dl(e)&&(yn=!0))}function Yp(e,n,a,o){Se=e;var u=0;do{if(ks&&(js=null),io=0,ks=!1,25<=u)throw Error(s(301));if(u+=1,fn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Px,f=n(a,o)}while(ks);return f}function wx(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(Se.flags|=1024),n}function Vu(){var e=yl!==0;return yl=0,e}function ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ju(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}xa=0,fn=He=Se=null,ks=!1,io=yl=0,js=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Se.memoizedState=fn=e:fn=fn.next=e,fn}function hn(){if(He===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=fn===null?Se.memoizedState:fn.next;if(n!==null)fn=n,He=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},fn===null?Se.memoizedState=fn=e:fn=fn.next=e}return fn}function Xu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,js===null&&(js=[]),e=Gp(js,e,n),n=Se,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?wm:Dm),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===P)return Dn(e)}throw Error(s(438,String(e)))}function Wu(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Se.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xu(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=hn();return qu(n,He,e)}function qu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=M=null,G=null,st=n,gt=!1;do{var St=st.lane&-536870913;if(St!==st.lane?(Re&St)===St:(xa&St)===St){var rt=st.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),St===Hs&&(gt=!0);else if((xa&rt)===rt){st=st.next,rt===Hs&&(gt=!0);continue}else St={lane:0,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(A=G=St,M=f):G=G.next=St,Se.lanes|=rt,Aa|=rt;St=st.action,os&&a(f,St),f=st.hasEagerState?st.eagerState:a(f,St)}else rt={lane:St,revertLane:st.revertLane,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},G===null?(A=G=rt,M=f):G=G.next=rt,Se.lanes|=St,Aa|=St;st=st.next}while(st!==null&&st!==n);if(G===null?M=f:G.next=A,!Jn(f,e.memoizedState)&&(yn=!0,gt&&(a=Gs,a!==null)))throw a;e.memoizedState=f,e.baseState=M,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yu(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=e(f,M.action),M=M.next;while(M!==u);Jn(f,n.memoizedState)||(yn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Zp(e,n,a){var o=Se,u=hn(),f=Le;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Jn((He||u).memoizedState,a);M&&(u.memoizedState=a,yn=!0),u=u.queue;var A=Jp.bind(null,o,u,e);if(so(2048,8,A,[e]),u.getSnapshot!==n||M||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Xs(9,El(),Qp.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));f||(xa&124)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Xu(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Qp(e,n,a,o){n.value=a,n.getSnapshot=o,$p(n)&&tm(e)}function Jp(e,n,a){return a(function(){$p(n)&&tm(e)})}function $p(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function tm(e){var n=zs(e,2);n!==null&&ai(n,e,2)}function Zu(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),os){ht(!0);try{a()}finally{ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function em(e,n,a,o){return e.baseState=a,qu(e,He,typeof o=="function"?o:Xi)}function Dx(e,n,a,o,u){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,nm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function nm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,M={};I.T=M;try{var A=a(u,o),G=I.S;G!==null&&G(M,A),im(e,n,A)}catch(st){Ku(e,n,st)}finally{I.T=f}}else try{f=a(u,o),im(e,n,f)}catch(st){Ku(e,n,st)}}function im(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){am(e,n,o)},function(o){return Ku(e,n,o)}):am(e,n,a)}function am(e,n,a){n.status="fulfilled",n.value=a,sm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,nm(e,a)))}function Ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,sm(n),n=n.next;while(n!==o)}e.action=null}function sm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function rm(e,n){return n}function om(e,n){if(Le){var a=Ye.formState;if(a!==null){t:{var o=Se;if(Le){if(sn){e:{for(var u=sn,f=Di;u.nodeType!==8;){if(!f){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Mi(u.nextSibling),o=u.data==="F!";break t}}is(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=Am.bind(null,Se,o),o.dispatch=a,o=Zu(!1),f=ef.bind(null,Se,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Dx.bind(null,Se,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function lm(e){var n=hn();return cm(n,He,e)}function cm(e,n,a){if(n=qu(e,n,rm)[0],e=Ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(M){throw M===Jr?gl:M}else o=n;n=hn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Xs(9,El(),Ux.bind(null,u,a),null)),[o,f,e]}function Ux(e,n){e.action=n}function um(e){var n=hn(),a=He;if(a!==null)return cm(n,a,e);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Xu(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function El(){return{destroy:void 0,resource:void 0}}function fm(){return hn().memoizedState}function bl(e,n,a,o){var u=Xn();o=o===void 0?null:o,Se.flags|=e,u.memoizedState=Xs(1|n,El(),a,o)}function so(e,n,a,o){var u=hn();o=o===void 0?null:o;var f=u.memoizedState.inst;He!==null&&o!==null&&Hu(o,He.memoizedState.deps)?u.memoizedState=Xs(n,f,a,o):(Se.flags|=e,u.memoizedState=Xs(1|n,f,a,o))}function hm(e,n){bl(8390656,8,e,n)}function dm(e,n){so(2048,8,e,n)}function pm(e,n){return so(4,2,e,n)}function mm(e,n){return so(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function _m(e,n,a){a=a!=null?a.concat([e]):null,so(4,4,gm.bind(null,n,e),a)}function Qu(){}function vm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hu(n,o[1]))return o[0];if(o=e(),os){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o}function Ju(e,n,a){return a===void 0||(xa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Mg(),Se.lanes|=e,Aa|=e,a)}function ym(e,n,a,o){return Jn(a,n)?a:Vs.current!==null?(e=Ju(e,a,o),Jn(e,n)||(yn=!0),e):(xa&42)===0?(yn=!0,e.memoizedState=a):(e=Mg(),Se.lanes|=e,Aa|=e,n)}function Sm(e,n,a,o,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var M=I.T,A={};I.T=A,ef(e,!1,n,a);try{var G=u(),st=I.S;if(st!==null&&st(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var gt=Rx(G,o);ro(e,n,gt,ii(e))}else ro(e,n,o,ii(e))}catch(St){ro(e,n,{then:function(){},status:"rejected",reason:St},ii())}finally{Y.p=f,I.T=M}}function Nx(){}function $u(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Mm(e).queue;Sm(e,u,n,q,a===null?Nx:function(){return Em(e),a(o)})}function Mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Em(e){var n=Mm(e).next.queue;ro(e,n,{},ii())}function tf(){return Dn(To)}function bm(){return hn().memoizedState}function Tm(){return hn().memoizedState}function Lx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=_a(a);var o=va(n,e,a);o!==null&&(ai(o,n,a),to(o,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function Ox(e,n,a){var o=ii();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Rm(n,a):(a=yu(e,n,a,o),a!==null&&(ai(a,e,o),Cm(a,n,o)))}function Am(e,n,a){var o=ii();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Rm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,A=f(M,a);if(u.hasEagerState=!0,u.eagerState=A,Jn(A,M))return ll(e,n,u,0),Ye===null&&ol(),!1}catch{}finally{}if(a=yu(e,n,u,o),a!==null)return ai(a,e,o),Cm(a,n,o),!0}return!1}function ef(e,n,a,o){if(o={lane:2,revertLane:Of(),action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=yu(e,a,o,2),n!==null&&ai(n,e,2)}function Tl(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function Rm(e,n){ks=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ct(e,a)}}var Al={readContext:Dn,use:Sl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},wm={readContext:Dn,use:Sl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:hm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,bl(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return bl(4194308,4,e,n)},useInsertionEffect:function(e,n){bl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(os){ht(!0);try{e()}finally{ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(os){ht(!0);try{a(n)}finally{ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Ox.bind(null,Se,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,a=Am.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qu,useDeferredValue:function(e,n){var a=Xn();return Ju(a,e,n)},useTransition:function(){var e=Zu(!1);return e=Sm.bind(null,Se,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=Se,u=Xn();if(Le){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Re&124)!==0||Kp(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,hm(Jp.bind(null,o,f,e),[e]),o.flags|=2048,Xs(9,El(),Qp.bind(null,o,f,a,n),null),a},useId:function(){var e=Xn(),n=Ye.identifierPrefix;if(Le){var a=Vi,o=Gi;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Cx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:tf,useFormState:om,useActionState:om,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wu,useCacheRefresh:function(){return Xn().memoizedState=Lx.bind(null,Se)}},Dm={readContext:Dn,use:Sl,useCallback:vm,useContext:Dn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Ml,useRef:fm,useState:function(){return Ml(Xi)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=hn();return ym(a,He.memoizedState,e,n)},useTransition:function(){var e=Ml(Xi)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:tf,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=hn();return em(a,He,e,n)},useMemoCache:Wu,useCacheRefresh:Tm},Px={readContext:Dn,use:Sl,useCallback:vm,useContext:Dn,useEffect:dm,useImperativeHandle:_m,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:xm,useReducer:Yu,useRef:fm,useState:function(){return Yu(Xi)},useDebugValue:Qu,useDeferredValue:function(e,n){var a=hn();return He===null?Ju(a,e,n):ym(a,He.memoizedState,e,n)},useTransition:function(){var e=Yu(Xi)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Zp,useId:bm,useHostTransitionStatus:tf,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=hn();return He!==null?em(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Tm},Ws=null,oo=0;function Rl(e){var n=oo;return oo+=1,Ws===null&&(Ws=[]),Gp(Ws,e,n)}function lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Cl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Um(e){var n=e._init;return n(e._payload)}function Nm(e){function n(Q,X){if(e){var nt=Q.deletions;nt===null?(Q.deletions=[X],Q.flags|=16):nt.push(X)}}function a(Q,X){if(!e)return null;for(;X!==null;)n(Q,X),X=X.sibling;return null}function o(Q){for(var X=new Map;Q!==null;)Q.key!==null?X.set(Q.key,Q):X.set(Q.index,Q),Q=Q.sibling;return X}function u(Q,X){return Q=Hi(Q,X),Q.index=0,Q.sibling=null,Q}function f(Q,X,nt){return Q.index=nt,e?(nt=Q.alternate,nt!==null?(nt=nt.index,nt<X?(Q.flags|=67108866,X):nt):(Q.flags|=67108866,X)):(Q.flags|=1048576,X)}function M(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function A(Q,X,nt,vt){return X===null||X.tag!==6?(X=Mu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function G(Q,X,nt,vt){var Zt=nt.type;return Zt===b?gt(Q,X,nt.props.children,vt,nt.key):X!==null&&(X.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===j&&Um(Zt)===X.type)?(X=u(X,nt.props),lo(X,nt),X.return=Q,X):(X=ul(nt.type,nt.key,nt.props,null,Q.mode,vt),lo(X,nt),X.return=Q,X)}function st(Q,X,nt,vt){return X===null||X.tag!==4||X.stateNode.containerInfo!==nt.containerInfo||X.stateNode.implementation!==nt.implementation?(X=Eu(nt,Q.mode,vt),X.return=Q,X):(X=u(X,nt.children||[]),X.return=Q,X)}function gt(Q,X,nt,vt,Zt){return X===null||X.tag!==7?(X=$a(nt,Q.mode,vt,Zt),X.return=Q,X):(X=u(X,nt),X.return=Q,X)}function St(Q,X,nt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Mu(""+X,Q.mode,nt),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return nt=ul(X.type,X.key,X.props,null,Q.mode,nt),lo(nt,X),nt.return=Q,nt;case E:return X=Eu(X,Q.mode,nt),X.return=Q,X;case j:var vt=X._init;return X=vt(X._payload),St(Q,X,nt)}if(lt(X)||Z(X))return X=$a(X,Q.mode,nt,null),X.return=Q,X;if(typeof X.then=="function")return St(Q,Rl(X),nt);if(X.$$typeof===P)return St(Q,pl(Q,X),nt);Cl(Q,X)}return null}function rt(Q,X,nt,vt){var Zt=X!==null?X.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return Zt!==null?null:A(Q,X,""+nt,vt);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:return nt.key===Zt?G(Q,X,nt,vt):null;case E:return nt.key===Zt?st(Q,X,nt,vt):null;case j:return Zt=nt._init,nt=Zt(nt._payload),rt(Q,X,nt,vt)}if(lt(nt)||Z(nt))return Zt!==null?null:gt(Q,X,nt,vt,null);if(typeof nt.then=="function")return rt(Q,X,Rl(nt),vt);if(nt.$$typeof===P)return rt(Q,X,pl(Q,nt),vt);Cl(Q,nt)}return null}function ot(Q,X,nt,vt,Zt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return Q=Q.get(nt)||null,A(X,Q,""+vt,Zt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return Q=Q.get(vt.key===null?nt:vt.key)||null,G(X,Q,vt,Zt);case E:return Q=Q.get(vt.key===null?nt:vt.key)||null,st(X,Q,vt,Zt);case j:var Me=vt._init;return vt=Me(vt._payload),ot(Q,X,nt,vt,Zt)}if(lt(vt)||Z(vt))return Q=Q.get(nt)||null,gt(X,Q,vt,Zt,null);if(typeof vt.then=="function")return ot(Q,X,nt,Rl(vt),Zt);if(vt.$$typeof===P)return ot(Q,X,nt,pl(X,vt),Zt);Cl(X,vt)}return null}function ue(Q,X,nt,vt){for(var Zt=null,Me=null,$t=X,ce=X=0,Mn=null;$t!==null&&ce<nt.length;ce++){$t.index>ce?(Mn=$t,$t=null):Mn=$t.sibling;var De=rt(Q,$t,nt[ce],vt);if(De===null){$t===null&&($t=Mn);break}e&&$t&&De.alternate===null&&n(Q,$t),X=f(De,X,ce),Me===null?Zt=De:Me.sibling=De,Me=De,$t=Mn}if(ce===nt.length)return a(Q,$t),Le&&es(Q,ce),Zt;if($t===null){for(;ce<nt.length;ce++)$t=St(Q,nt[ce],vt),$t!==null&&(X=f($t,X,ce),Me===null?Zt=$t:Me.sibling=$t,Me=$t);return Le&&es(Q,ce),Zt}for($t=o($t);ce<nt.length;ce++)Mn=ot($t,Q,ce,nt[ce],vt),Mn!==null&&(e&&Mn.alternate!==null&&$t.delete(Mn.key===null?ce:Mn.key),X=f(Mn,X,ce),Me===null?Zt=Mn:Me.sibling=Mn,Me=Mn);return e&&$t.forEach(function(Pa){return n(Q,Pa)}),Le&&es(Q,ce),Zt}function re(Q,X,nt,vt){if(nt==null)throw Error(s(151));for(var Zt=null,Me=null,$t=X,ce=X=0,Mn=null,De=nt.next();$t!==null&&!De.done;ce++,De=nt.next()){$t.index>ce?(Mn=$t,$t=null):Mn=$t.sibling;var Pa=rt(Q,$t,De.value,vt);if(Pa===null){$t===null&&($t=Mn);break}e&&$t&&Pa.alternate===null&&n(Q,$t),X=f(Pa,X,ce),Me===null?Zt=Pa:Me.sibling=Pa,Me=Pa,$t=Mn}if(De.done)return a(Q,$t),Le&&es(Q,ce),Zt;if($t===null){for(;!De.done;ce++,De=nt.next())De=St(Q,De.value,vt),De!==null&&(X=f(De,X,ce),Me===null?Zt=De:Me.sibling=De,Me=De);return Le&&es(Q,ce),Zt}for($t=o($t);!De.done;ce++,De=nt.next())De=ot($t,Q,ce,De.value,vt),De!==null&&(e&&De.alternate!==null&&$t.delete(De.key===null?ce:De.key),X=f(De,X,ce),Me===null?Zt=De:Me.sibling=De,Me=De);return e&&$t.forEach(function(zy){return n(Q,zy)}),Le&&es(Q,ce),Zt}function Ve(Q,X,nt,vt){if(typeof nt=="object"&&nt!==null&&nt.type===b&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case S:t:{for(var Zt=nt.key;X!==null;){if(X.key===Zt){if(Zt=nt.type,Zt===b){if(X.tag===7){a(Q,X.sibling),vt=u(X,nt.props.children),vt.return=Q,Q=vt;break t}}else if(X.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===j&&Um(Zt)===X.type){a(Q,X.sibling),vt=u(X,nt.props),lo(vt,nt),vt.return=Q,Q=vt;break t}a(Q,X);break}else n(Q,X);X=X.sibling}nt.type===b?(vt=$a(nt.props.children,Q.mode,vt,nt.key),vt.return=Q,Q=vt):(vt=ul(nt.type,nt.key,nt.props,null,Q.mode,vt),lo(vt,nt),vt.return=Q,Q=vt)}return M(Q);case E:t:{for(Zt=nt.key;X!==null;){if(X.key===Zt)if(X.tag===4&&X.stateNode.containerInfo===nt.containerInfo&&X.stateNode.implementation===nt.implementation){a(Q,X.sibling),vt=u(X,nt.children||[]),vt.return=Q,Q=vt;break t}else{a(Q,X);break}else n(Q,X);X=X.sibling}vt=Eu(nt,Q.mode,vt),vt.return=Q,Q=vt}return M(Q);case j:return Zt=nt._init,nt=Zt(nt._payload),Ve(Q,X,nt,vt)}if(lt(nt))return ue(Q,X,nt,vt);if(Z(nt)){if(Zt=Z(nt),typeof Zt!="function")throw Error(s(150));return nt=Zt.call(nt),re(Q,X,nt,vt)}if(typeof nt.then=="function")return Ve(Q,X,Rl(nt),vt);if(nt.$$typeof===P)return Ve(Q,X,pl(Q,nt),vt);Cl(Q,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,X!==null&&X.tag===6?(a(Q,X.sibling),vt=u(X,nt),vt.return=Q,Q=vt):(a(Q,X),vt=Mu(nt,Q.mode,vt),vt.return=Q,Q=vt),M(Q)):a(Q,X)}return function(Q,X,nt,vt){try{oo=0;var Zt=Ve(Q,X,nt,vt);return Ws=null,Zt}catch($t){if($t===Jr||$t===gl)throw $t;var Me=$n(29,$t,null,Q.mode);return Me.lanes=vt,Me.return=Q,Me}finally{}}}var qs=Nm(!0),Lm=Nm(!1),di=tt(null),Ui=null;function ya(e){var n=e.alternate;Mt(mn,mn.current&1),Mt(di,e),Ui===null&&(n===null||Vs.current!==null||n.memoizedState!==null)&&(Ui=e)}function Om(e){if(e.tag===22){if(Mt(mn,mn.current),Mt(di,e),Ui===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ui=e)}}else Sa()}function Sa(){Mt(mn,mn.current),Mt(di,di.current)}function Wi(e){yt(di),Ui===e&&(Ui=null),yt(mn)}var mn=tt(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function nf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ii(),u=_a(o);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(ai(n,e,o),to(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ii(),u=_a(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,o),n!==null&&(ai(n,e,o),to(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(e,o,a),n!==null&&(ai(n,e,a),to(n,e,a))}};function Pm(e,n,a,o,u,f,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!jr(a,o)||!jr(u,f):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Im(e){Dl(e)}function Bm(e){console.error(e)}function Fm(e){Dl(e)}function Ul(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Hm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(e,n)},a}function Gm(e){return e=_a(e),e.tag=3,e}function Vm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,o),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function zx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=di.current,a!==null){switch(a.tag){case 13:return Ui===null?wf():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(e,o,u)),!1;case 22:return a.flags|=65536,o===Lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(e,o,u)),!1}throw Error(s(435,a.tag))}return Uf(e,o,u),wf(),!1}if(Le)return n=di.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Au&&(e=Error(s(422),{cause:o}),Yr(ci(e,a)))):(o!==Au&&(n=Error(s(423),{cause:o}),Yr(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ci(o,a),u=sf(e.stateNode,o,u),zu(e,u),rn!==4&&(rn=2)),!1;var f=Error(s(520),{cause:o});if(f=ci(f,a),go===null?go=[f]:go.push(f),rn!==4&&(rn=2),n===null)return!0;o=ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=sf(a.stateNode,o,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var km=Error(s(461)),yn=!1;function Tn(e,n,a,o){n.child=e===null?Lm(n,null,a,o):qs(n,e.child,a,o)}function jm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return ss(n),o=Gu(e,n,a,M,f,u),A=Vu(),e!==null&&!yn?(ku(e,n,u),qi(e,n,u)):(Le&&A&&bu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Xm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,o,u)):(e=ul(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(M,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(jr(f,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=f,df(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return rf(e,n,a,o,u)}function qm(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Ym(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,f!==null?f.cachePool:null),f!==null?Wp(n,f):Bu(),Om(n);else return n.lanes=n.childLanes=536870912,Ym(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(ml(n,f.cachePool),Wp(n,f),Sa(),n.memoizedState=null):(e!==null&&ml(n,null),Bu(),Sa());return Tn(e,n,u,a),n.child}function Ym(e,n,a,o){var u=Nu();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&ml(n,null),Bu(),Om(n),e!==null&&Zr(e,n,o,!0),null}function Nl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function rf(e,n,a,o,u){return ss(n),a=Gu(e,n,a,o,void 0,u),o=Vu(),e!==null&&!yn?(ku(e,n,u),qi(e,n,u)):(Le&&o&&bu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Zm(e,n,a,o,u,f){return ss(n),n.updateQueue=null,a=Yp(n,o,a,u),qp(e),o=Vu(),e!==null&&!yn?(ku(e,n,f),qi(e,n,f)):(Le&&o&&bu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Km(e,n,a,o,u){if(ss(n),n.stateNode===null){var f=Is,M=a.contextType;typeof M=="object"&&M!==null&&(f=Dn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ou(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Dn(M):Is,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(nf(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&af.enqueueReplaceState(f,f.state,null),no(n,o,f,u),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=ls(a,A);f.props=G;var st=f.context,gt=a.contextType;M=Is,typeof gt=="object"&&gt!==null&&(M=Dn(gt));var St=a.getDerivedStateFromProps;gt=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||st!==M)&&zm(n,f,o,M),ga=!1;var rt=n.memoizedState;f.state=rt,no(n,o,f,u),eo(),st=n.memoizedState,A||rt!==st||ga?(typeof St=="function"&&(nf(n,a,St,o),st=n.memoizedState),(G=ga||Pm(n,a,G,o,rt,st,M))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=st),f.props=o,f.state=st,f.context=M,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Pu(e,n),M=n.memoizedProps,gt=ls(a,M),f.props=gt,St=n.pendingProps,rt=f.context,st=a.contextType,G=Is,typeof st=="object"&&st!==null&&(G=Dn(st)),A=a.getDerivedStateFromProps,(st=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==St||rt!==G)&&zm(n,f,o,G),ga=!1,rt=n.memoizedState,f.state=rt,no(n,o,f,u),eo();var ot=n.memoizedState;M!==St||rt!==ot||ga||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof A=="function"&&(nf(n,a,A,o),ot=n.memoizedState),(gt=ga||Pm(n,a,gt,o,rt,ot,G)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(st||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=G,o=gt):(typeof f.componentDidUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&rt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Nl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=qs(n,e.child,null,u),n.child=qs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function Qm(e,n,a,o){return qr(),n.flags|=256,Tn(e,n,a,o),n.child}var of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lf(e){return{baseLanes:e,cachePool:Bp()}}function cf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function Jm(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?ya(n):Sa(),Le){var A=sn,G;if(G=A){t:{for(G=A,A=Di;G.nodeType!==8;){if(!A){A=null;break t}if(G=Mi(G.nextSibling),G===null){A=null;break t}}A=G}A!==null?(n.memoizedState={dehydrated:A,treeContext:ts!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},G=$n(18,null,null,0),G.stateNode=A,G.return=n,n.child=G,In=n,sn=null,G=!0):G=!1}G||is(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Wf(A)?n.lanes=32:n.lanes=536870912,null;Wi(n)}return A=o.children,o=o.fallback,u?(Sa(),u=n.mode,A=Ll({mode:"hidden",children:A},u),o=$a(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=lf(a),u.childLanes=cf(e,M,a),n.memoizedState=of,o):(ya(n),uf(n,A))}if(G=e.memoizedState,G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=ff(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),u=o.fallback,A=n.mode,o=Ll({mode:"visible",children:o.children},A),u=$a(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,qs(n,e.child,null,a),o=n.child,o.memoizedState=lf(a),o.childLanes=cf(e,M,a),n.memoizedState=of,n=u);else if(ya(n),Wf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var st=M.dgst;M=st,o=Error(s(419)),o.stack="",o.digest=M,Yr({value:o,source:null,stack:null}),n=ff(e,n,a)}else if(yn||Zr(e,n,a,!1),M=(a&e.childLanes)!==0,yn||M){if(M=Ye,M!==null&&(o=a&-a,o=(o&42)!==0?1:Pt(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,zs(e,o),ai(M,e,o),km;A.data==="$?"||wf(),n=ff(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,sn=Mi(A.nextSibling),In=n,Le=!0,ns=null,Di=!1,e!==null&&(fi[hi++]=Gi,fi[hi++]=Vi,fi[hi++]=ts,Gi=e.id,Vi=e.overflow,ts=n),n=uf(n,o.children),n.flags|=4096);return n}return u?(Sa(),u=o.fallback,A=n.mode,G=e.child,st=G.sibling,o=Hi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,st!==null?u=Hi(st,u):(u=$a(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=lf(a):(G=A.cachePool,G!==null?(st=pn._currentValue,G=G.parent!==st?{parent:st,pool:st}:G):G=Bp(),A={baseLanes:A.baseLanes|a,cachePool:G}),u.memoizedState=A,u.childLanes=cf(e,M,a),n.memoizedState=of,o):(ya(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function uf(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=$n(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ff(e,n,a){return qs(n,e.child,null,a),e=uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Cu(e.return,n,a)}function hf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function tg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(Tn(e,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Mt(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&wl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hf(n,!0,a,null,f);break;case"together":hf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Zr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Ix(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),ma(n,pn,e.memoizedState.cache),qr();break;case 27:case 5:Et(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(ya(n),e=qi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Zr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,qm(e,n,a);case 24:ma(n,pn,e.memoizedState.cache)}return qi(e,n,a)}function eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!df(e,a)&&(n.flags&128)===0)return yn=!1,Ix(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,Le&&(n.flags&1048576)!==0&&Up(n,hl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Su(o)?(e=ls(o,e),n.tag=1,n=Km(null,n,o,e,a)):(n.tag=0,n=rf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=jm(null,n,o,e,a);break t}else if(u===O){n.tag=14,n=Xm(null,n,o,e,a);break t}}throw n=mt(o)||o,Error(s(306,n,""))}}return n;case 0:return rf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ls(o,n.pendingProps),Km(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),no(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ma(n,pn,o),o!==f.cache&&wu(n,[pn],a,!0),eo(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,o,a);break t}else if(o!==u){u=ci(Error(s(424)),n),Yr(u),n=Qm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Mi(e.firstChild),In=n,Le=!0,ns=null,Di=!0,a=Lm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qr(),o===u){n=qi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Nl(e,n),e===null?(a=s_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=ql(et.current).createElement(a),o[Be]=n,o[Ce]=e,Rn(o,a,e),un(o),n.stateNode=o):n.memoizedState=s_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Et(n),e===null&&Le&&(o=n.stateNode=n_(n.type,n.pendingProps,et.current),In=n,Di=!0,u=sn,Da(n.type)?(qf=u,sn=Mi(o.firstChild)):sn=u),Tn(e,n,n.pendingProps.children,a),Nl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=sn)&&(o=fy(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,In=n,sn=Mi(o.firstChild),Di=!1,u=!0):u=!1),u||is(n)),Et(n),u=n.type,f=n.pendingProps,M=e!==null?e.memoizedProps:null,o=f.children,kf(u,f)?o=null:M!==null&&kf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Gu(e,n,wx,null,null,a),To._currentValue=u),Nl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=sn)&&(a=hy(a,n.pendingProps,Di),a!==null?(n.stateNode=a,In=n,sn=null,e=!0):e=!1),e||is(n)),null;case 13:return Jm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return jm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ss(n),u=Dn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return tg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ll(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Hi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return qm(e,n,a);case 24:return ss(n),o=Dn(pn),e===null?(u=Nu(),u===null&&(u=Ye,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ou(n),ma(n,pn,u)):((e.lanes&a)!==0&&(Pu(e,n),no(n,null,null,a),eo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,pn,o)):(o=f.cache,ma(n,pn,o),o!==u.cache&&wu(n,[pn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!u_(n)){if(n=di.current,n!==null&&((Re&4194048)===Re?Ui!==null:(Re&62914560)!==Re&&(Re&536870912)===0||n!==Ui))throw $r=Lu,Fp;e.flags|=8192}}function Ol(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Rt():536870912,e.lanes|=n,Qs|=n)}function co(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Bx(e,n,a){var o=n.pendingProps;switch(Tu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ji(pn),Kt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Op())),tn(n),null;case 26:return a=n.memoizedState,e===null?(Yi(n),a!==null?(tn(n),ng(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Yi(n),tn(n),ng(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&Yi(n),tn(n),n.flags&=-16777217),null;case 27:Vt(n),a=et.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}e=Nt.current,Wr(n)?Np(n):(e=n_(u,o,a),n.stateNode=e,Yi(n))}return tn(n),null;case 5:if(Vt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(e=Nt.current,Wr(n))Np(n);else{switch(u=ql(et.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Be]=n,e[Ce]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Yi(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Be]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Zg(e.nodeValue,a)),e||is(n)}else e=ql(e).createTextNode(o),e[Be]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Be]=n}else qr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wi(n),n):(Wi(n),null)}if(Wi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Ol(n,n.updateQueue),tn(n),null;case 4:return Kt(),e===null&&Bf(n.stateNode.containerInfo),tn(n),null;case 10:return ji(n.type),tn(n),null;case 19:if(yt(mn),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)co(u,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=wl(e),f!==null){for(n.flags|=128,co(u,!1),e=f.updateQueue,n.updateQueue=e,Ol(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return Mt(mn,mn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Ht()>Il&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304)}else{if(!o)if(e=wl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Ol(n,e),co(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Le)return tn(n),null}else 2*Ht()-u.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,o=!0,co(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ht(),n.sibling=null,e=mn.current,Mt(mn,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return Wi(n),Fu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Ol(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&yt(rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(pn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Fx(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(pn),Kt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Vt(n),null;case 13:if(Wi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return yt(mn),null;case 4:return Kt(),null;case 10:return ji(n.type),null;case 22:case 23:return Wi(n),Fu(),e!==null&&yt(rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(pn),null;case 25:return null;default:return null}}function ig(e,n){switch(Tu(n),n.tag){case 3:ji(pn),Kt();break;case 26:case 27:case 5:Vt(n);break;case 4:Kt();break;case 13:Wi(n);break;case 19:yt(mn);break;case 10:ji(n.type);break;case 22:case 23:Wi(n),Fu(),e!==null&&yt(rs);break;case 24:ji(pn)}}function uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){qe(n,n.return,A)}}function Ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var G=a,st=A;try{st()}catch(gt){qe(u,G,gt)}}}o=o.next}while(o!==f)}}catch(gt){qe(n,n.return,gt)}}function ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Xp(n,a)}catch(o){qe(e,e.return,o)}}}function sg(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){qe(e,n,u)}}function Ni(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function pf(e,n,a){try{var o=e.stateNode;ry(o,e.type,a,n),o[Ce]=n}catch(u){qe(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Pl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Pl(e,n,a),e=e.sibling;e!==null;)Pl(e,n,a),e=e.sibling}function lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[Be]=e,n[Ce]=a}catch(f){qe(e,e.return,f)}}var Zi=!1,ln=!1,_f=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Hx(e,n){if(e=e.containerInfo,Gf=$l,e=yp(e),pu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,A=-1,G=-1,st=0,gt=0,St=e,rt=null;e:for(;;){for(var ot;St!==a||u!==0&&St.nodeType!==3||(A=M+u),St!==f||o!==0&&St.nodeType!==3||(G=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(ot=St.firstChild)!==null;)rt=St,St=ot;for(;;){if(St===e)break e;if(rt===a&&++st===u&&(A=M),rt===f&&++gt===o&&(G=M),(ot=St.nextSibling)!==null)break;St=rt,rt=St.parentNode}St=ot}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},$l=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ue=ls(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ue,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){qe(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function ug(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ea(e,a),o&4&&uo(5,a);break;case 1:if(Ea(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){qe(a,a.return,M)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){qe(a,a.return,M)}}o&64&&ag(a),o&512&&fo(a,a.return);break;case 3:if(Ea(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xp(e,n)}catch(M){qe(a,a.return,M)}}break;case 27:n===null&&o&4&&lg(a);case 26:case 5:Ea(e,a),n===null&&o&4&&rg(a),o&512&&fo(a,a.return);break;case 12:Ea(e,a);break;case 13:Ea(e,a),o&4&&dg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Zx.bind(null,a),dy(e,a))));break;case 22:if(o=a.memoizedState!==null||Zi,!o){n=n!==null&&n.memoizedState!==null||ln,u=Zi;var f=ln;Zi=o,(ln=n)&&!f?ba(e,a,(a.subtreeFlags&8772)!==0):Ea(e,a),Zi=u,ln=f}break;case 30:break;default:Ea(e,a)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Wn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)hg(e,n,a),a=a.sibling}function hg(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(dt,a)}catch{}switch(a.tag){case 26:ln||Ni(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ni(a,n);var o=Je,u=Wn;Da(a.type)&&(Je=a.stateNode,Wn=!1),Ki(e,n,a),So(a.stateNode),Je=o,Wn=u;break;case 5:ln||Ni(a,n);case 6:if(o=Je,u=Wn,Je=null,Ki(e,n,a),Je=o,Wn=u,Je!==null)if(Wn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){qe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){qe(a,n,f)}break;case 18:Je!==null&&(Wn?(e=Je,t_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),wo(e)):t_(Je,a.stateNode));break;case 4:o=Je,u=Wn,Je=a.stateNode.containerInfo,Wn=!0,Ki(e,n,a),Je=o,Wn=u;break;case 0:case 11:case 14:case 15:ln||Ma(2,a,n),ln||Ma(4,a,n),Ki(e,n,a);break;case 1:ln||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&sg(a,n,o)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,Ki(e,n,a),ln=o;break;default:Ki(e,n,a)}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{wo(e)}catch(a){qe(n,n.return,a)}}function Gx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(s(435,e.tag))}}function vf(e,n){var a=Gx(e);n.forEach(function(o){var u=Kx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Da(A.type)){Je=A.stateNode,Wn=!1;break t}break;case 5:Je=A.stateNode,Wn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));hg(f,M,u),Je=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}var Si=null;function pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),o&4&&(Ma(3,e,e.return),uo(3,e),Ma(5,e,e.return));break;case 1:ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),o&64&&Zi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Si;if(ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[wi]||f[Be]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,o,a),f[Be]=e,un(f),o=f;break t;case"link":var M=l_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(f=M[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=l_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(f=M[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}f=u.createElement(o),Rn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Be]=e,un(f),o=f}e.stateNode=o}else c_(u,e.type,e.stateNode);else e.stateNode=o_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?c_(u,e.type,e.stateNode):o_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),a!==null&&o&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ti(n,e),ei(e),o&512&&(ln||a===null||Ni(a,a.return)),e.flags&32){u=e.stateNode;try{kn(u,"")}catch(ot){qe(e,e.return,ot)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(_f=!0);break;case 6:if(ti(n,e),ei(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ot){qe(e,e.return,ot)}}break;case 3:if(Kl=null,u=Si,Si=Yl(n.containerInfo),ti(n,e),Si=u,ei(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{wo(n.containerInfo)}catch(ot){qe(e,e.return,ot)}_f&&(_f=!1,mg(e));break;case 4:o=Si,Si=Yl(e.stateNode.containerInfo),ti(n,e),ei(e),Si=o;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=Ht()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,st=Zi,gt=ln;if(Zi=st||u,ln=gt||G,ti(n,e),ln=gt,Zi=st,ei(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Zi||ln||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=G.stateNode;var St=G.memoizedProps.style,rt=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(ot){qe(G,G.return,ot)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(ot){qe(G,G.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,vf(e,a))));break;case 19:ti(n,e),ei(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,vf(e,o)));break;case 30:break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(og(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Pl(e,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(kn(M,""),a.flags&=-33);var A=mf(e);Pl(e,A,M);break;case 3:case 4:var G=a.stateNode.containerInfo,st=mf(e);gf(e,st,G);break;default:throw Error(s(161))}}catch(gt){qe(e,e.return,gt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),cs(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),cs(n);break;case 27:So(n.stateNode);case 26:case 5:Ni(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ba(u,f,a),uo(4,f);break;case 1:if(ba(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){qe(o,o.return,st)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)jp(G[u],A)}catch(st){qe(o,o.return,st)}}a&&M&64&&ag(f),fo(f,f.return);break;case 27:lg(f);case 26:case 5:ba(u,f,a),a&&o===null&&M&4&&rg(f),fo(f,f.return);break;case 12:ba(u,f,a);break;case 13:ba(u,f,a),a&&M&4&&dg(u,f);break;case 22:f.memoizedState===null&&ba(u,f,a),fo(f,f.return);break;case 30:break;default:ba(u,f,a)}n=n.sibling}}function xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function Li(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(e,n,a,o),n=n.sibling}function gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Li(e,n,a,o),u&2048&&uo(9,n);break;case 1:Li(e,n,a,o);break;case 3:Li(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(u&2048){Li(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,M=f.id,A=f.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){qe(n,n.return,G)}}else Li(e,n,a,o);break;case 13:Li(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Li(e,n,a,o):ho(e,n):f._visibility&2?Li(e,n,a,o):(f._visibility|=2,Ys(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&xf(M,n);break;case 24:Li(e,n,a,o),u&2048&&yf(n.alternate,n);break;default:Li(e,n,a,o)}}function Ys(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,M=n,A=a,G=o,st=M.flags;switch(M.tag){case 0:case 11:case 15:Ys(f,M,A,G,u),uo(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?Ys(f,M,A,G,u):ho(f,M):(gt._visibility|=2,Ys(f,M,A,G,u)),u&&st&2048&&xf(M.alternate,M);break;case 24:Ys(f,M,A,G,u),u&&st&2048&&yf(M.alternate,M);break;default:Ys(f,M,A,G,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&xf(o.alternate,o);break;case 24:ho(a,o),u&2048&&yf(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Zs(e){if(e.subtreeFlags&po)for(e=e.child;e!==null;)_g(e),e=e.sibling}function _g(e){switch(e.tag){case 26:Zs(e),e.flags&po&&e.memoizedState!==null&&Ay(Si,e.memoizedState,e.memoizedProps);break;case 5:Zs(e);break;case 3:case 4:var n=Si;Si=Yl(e.stateNode.containerInfo),Zs(e),Si=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=po,po=16777216,Zs(e),po=n):Zs(e));break;default:Zs(e)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,yg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):mo(e);break;default:mo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,yg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function yg(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else t:for(a=e;Sn!==null;){o=Sn;var u=o.sibling,f=o.return;if(fg(o),o===a){Sn=null;break t}if(u!==null){u.return=f,Sn=u;break t}Sn=f}}}var Vx={getCacheForType:function(e){var n=Dn(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},kx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Te=null,Re=0,ze=0,ni=null,Ta=!1,Ks=!1,Sf=!1,Qi=0,rn=0,Aa=0,us=0,Mf=0,pi=0,Qs=0,go=null,qn=null,Ef=!1,bf=0,Il=1/0,Bl=null,Ra=null,An=0,Ca=null,Js=null,$s=0,Tf=0,Af=null,Sg=null,_o=0,Rf=null;function ii(){if((Pe&2)!==0&&Re!==0)return Re&-Re;if(I.T!==null){var e=Hs;return e!==0?e:Of()}return se()}function Mg(){pi===0&&(pi=(Re&536870912)===0||Le?W():536870912);var e=di.current;return e!==null&&(e.flags|=32),pi}function ai(e,n,a){(e===Ye&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(tr(e,0),wa(e,Re,pi,!1)),Gt(e,a),((Pe&2)===0||e!==Ye)&&(e===Ye&&((Pe&2)===0&&(us|=a),rn===4&&wa(e,Re,pi,!1)),Oi(e))}function Eg(e,n,a){if((Pe&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ut(e,n),u=o?Wx(e,n):Df(e,n,!0),f=o;do{if(u===0){Ks&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jx(a)){u=Df(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=go;var G=A.current.memoizedState.isDehydrated;if(G&&(tr(A,M).flags|=256),M=Df(A,M,!1),M!==2){if(Sf&&!G){A.errorRecoveryDisabledLanes|=f,us|=f,u=4;break t}f=qn,qn=u,f!==null&&(qn===null?qn=f:qn.push.apply(qn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){tr(e,0),wa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,pi,!Ta);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=bf+300-Ht(),10<u)){if(wa(o,n,pi,!Ta),Yt(o,0,!0)!==0)break t;o.timeoutHandle=Jg(bg.bind(null,o,a,qn,Bl,Ef,n,pi,us,Qs,Ta,f,2,-0,0),u);break t}bg(o,a,qn,Bl,Ef,n,pi,us,Qs,Ta,f,0,-0,0)}}break}while(!0);Oi(e)}function bg(e,n,a,o,u,f,M,A,G,st,gt,St,rt,ot){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(bo={stylesheets:null,count:0,unsuspend:Ty},_g(n),St=Ry(),St!==null)){e.cancelPendingCommit=St(Ug.bind(null,e,n,f,a,o,u,M,A,G,gt,1,rt,ot)),wa(e,f,M,!st);return}Ug(e,n,f,a,o,u,M,A,G)}function jx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~Mf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&L(e,a,n)}function Fl(){return(Pe&6)===0?(vo(0),!1):!0}function Cf(){if(Te!==null){if(ze===0)var e=Te.return;else e=Te,ki=as=null,ju(e),Ws=null,oo=0,e=Te;for(;e!==null;)ig(e.alternate,e),e=e.return;Te=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ly(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Cf(),Ye=e,Te=a=Hi(e.current,null),Re=n,ze=0,ni=null,Ta=!1,Ks=Ut(e,n),Sf=!1,Qs=pi=Mf=us=Aa=rn=0,qn=go=null,Ef=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),f=1<<u;n|=e[u],o&=~f}return Qi=n,ol(),a}function Tg(e,n){Se=null,I.H=Al,n===Jr||n===gl?(n=Vp(),ze=3):n===Fp?(n=Vp(),ze=4):ze=n===km?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,Te===null&&(rn=1,Ul(e,ci(n,e.current)))}function Ag(){var e=I.H;return I.H=Al,e===null?Al:e}function Rg(){var e=I.A;return I.A=Vx,e}function wf(){rn=4,Ta||(Re&4194048)!==Re&&di.current!==null||(Ks=!0),(Aa&134217727)===0&&(us&134217727)===0||Ye===null||wa(Ye,Re,pi,!1)}function Df(e,n,a){var o=Pe;Pe|=2;var u=Ag(),f=Rg();(Ye!==e||Re!==n)&&(Bl=null,tr(e,n)),n=!1;var M=rn;t:do try{if(ze!==0&&Te!==null){var A=Te,G=ni;switch(ze){case 8:Cf(),M=6;break t;case 3:case 2:case 9:case 6:di.current===null&&(n=!0);var st=ze;if(ze=0,ni=null,er(e,A,G,st),a&&Ks){M=0;break t}break;default:st=ze,ze=0,ni=null,er(e,A,G,st)}}Xx(),M=rn;break}catch(gt){Tg(e,gt)}while(!0);return n&&e.shellSuspendCounter++,ki=as=null,Pe=o,I.H=u,I.A=f,Te===null&&(Ye=null,Re=0,ol()),M}function Xx(){for(;Te!==null;)Cg(Te)}function Wx(e,n){var a=Pe;Pe|=2;var o=Ag(),u=Rg();Ye!==e||Re!==n?(Bl=null,Il=Ht()+500,tr(e,n)):Ks=Ut(e,n);t:do try{if(ze!==0&&Te!==null){n=Te;var f=ni;e:switch(ze){case 1:ze=0,ni=null,er(e,n,f,1);break;case 2:case 9:if(Hp(f)){ze=0,ni=null,wg(n);break}n=function(){ze!==2&&ze!==9||Ye!==e||(ze=7),Oi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Hp(f)?(ze=0,ni=null,wg(n)):(ze=0,ni=null,er(e,n,f,7));break;case 5:var M=null;switch(Te.tag){case 26:M=Te.memoizedState;case 5:case 27:var A=Te;if(!M||u_(M)){ze=0,ni=null;var G=A.sibling;if(G!==null)Te=G;else{var st=A.return;st!==null?(Te=st,Hl(st)):Te=null}break e}}ze=0,ni=null,er(e,n,f,5);break;case 6:ze=0,ni=null,er(e,n,f,6);break;case 8:Cf(),rn=6;break t;default:throw Error(s(462))}}qx();break}catch(gt){Tg(e,gt)}while(!0);return ki=as=null,I.H=o,I.A=u,Pe=a,Te!==null?0:(Ye=null,Re=0,ol(),rn)}function qx(){for(;Te!==null&&!oe();)Cg(Te)}function Cg(e){var n=eg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Hl(e):Te=n}function wg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:ju(n);default:ig(a,n),n=Te=Dp(n,Qi),n=eg(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Hl(e):Te=n}function er(e,n,a,o){ki=as=null,ju(n),Ws=null,oo=0;var u=n.return;try{if(zx(e,u,n,a,Re)){rn=1,Ul(e,ci(a,e.current)),Te=null;return}}catch(f){if(u!==null)throw Te=u,f;rn=1,Ul(e,ci(a,e.current)),Te=null;return}n.flags&32768?(Le||o===1?e=!0:Ks||(Re&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=di.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dg(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Dg(n,Ta);return}e=n.return;var a=Bx(n.alternate,n,Qi);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=e}while(n!==null);rn===0&&(rn=5)}function Dg(e,n){do{var a=Fx(e.alternate,e);if(a!==null){a.flags&=32767,Te=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Te=e;return}Te=e=a}while(e!==null);rn=6,Te=null}function Ug(e,n,a,o,u,f,M,A,G){e.cancelPendingCommit=null;do Gl();while(An!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=xu,At(e,a,f,M,A,G),e===Ye&&(Te=Ye=null,Re=0),Js=n,Ca=e,$s=a,Tf=f,Af=u,Sg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qx(Xe,function(){return zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Y.p,Y.p=2,M=Pe,Pe|=4;try{Hx(e,n,a)}finally{Pe=M,Y.p=u,I.T=o}}An=1,Ng(),Lg(),Og()}}function Ng(){if(An===1){An=0;var e=Ca,n=Js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Y.p;Y.p=2;var u=Pe;Pe|=4;try{pg(n,e);var f=Vf,M=yp(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(M!==A&&A&&A.ownerDocument&&xp(A.ownerDocument.documentElement,A)){if(G!==null&&pu(A)){var st=G.start,gt=G.end;if(gt===void 0&&(gt=st),"selectionStart"in A)A.selectionStart=st,A.selectionEnd=Math.min(gt,A.value.length);else{var St=A.ownerDocument||document,rt=St&&St.defaultView||window;if(rt.getSelection){var ot=rt.getSelection(),ue=A.textContent.length,re=Math.min(G.start,ue),Ve=G.end===void 0?re:Math.min(G.end,ue);!ot.extend&&re>Ve&&(M=Ve,Ve=re,re=M);var Q=vp(A,re),X=vp(A,Ve);if(Q&&X&&(ot.rangeCount!==1||ot.anchorNode!==Q.node||ot.anchorOffset!==Q.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var nt=St.createRange();nt.setStart(Q.node,Q.offset),ot.removeAllRanges(),re>Ve?(ot.addRange(nt),ot.extend(X.node,X.offset)):(nt.setEnd(X.node,X.offset),ot.addRange(nt))}}}}for(St=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var vt=St[A];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}$l=!!Gf,Vf=Gf=null}finally{Pe=u,Y.p=o,I.T=a}}e.current=n,An=2}}function Lg(){if(An===2){An=0;var e=Ca,n=Js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Y.p;Y.p=2;var u=Pe;Pe|=4;try{ug(e,n.alternate,n)}finally{Pe=u,Y.p=o,I.T=a}}An=3}}function Og(){if(An===4||An===3){An=0,te();var e=Ca,n=Js,a=$s,o=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,Js=Ca=null,Pg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),ne(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Y.p,Y.p=2,I.T=null;try{for(var f=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];f(A.value,{componentStack:A.stack})}}finally{I.T=n,Y.p=u}}($s&3)!==0&&Gl(),Oi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Rf?_o++:(_o=0,Rf=e):_o=0,vo(0)}}function Pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Gl(e){return Ng(),Lg(),Og(),zg()}function zg(){if(An!==5)return!1;var e=Ca,n=Tf;Tf=0;var a=ne($s),o=I.T,u=Y.p;try{Y.p=32>a?32:a,I.T=null,a=Af,Af=null;var f=Ca,M=$s;if(An=0,Js=Ca=null,$s=0,(Pe&6)!==0)throw Error(s(331));var A=Pe;if(Pe|=4,xg(f.current),gg(f,f.current,M,a),Pe=A,vo(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(dt,f)}catch{}return!0}finally{Y.p=u,I.T=o,Pg(e,n)}}function Ig(e,n,a){n=ci(a,n),n=sf(e.stateNode,n,2),e=va(e,n,2),e!==null&&(Gt(e,2),Oi(e))}function qe(e,n,a){if(e.tag===3)Ig(e,e,a);else for(;n!==null;){if(n.tag===3){Ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ra===null||!Ra.has(o))){e=ci(a,e),a=Gm(2),o=va(n,a,2),o!==null&&(Vm(a,o,n,e),Gt(o,2),Oi(o));break}}n=n.return}}function Uf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Yx.bind(null,e,n,a),n.then(e,e))}function Yx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Re&a)===a&&(rn===4||rn===3&&(Re&62914560)===Re&&300>Ht()-bf?(Pe&2)===0&&tr(e,0):Mf|=a,Qs===Re&&(Qs=0)),Oi(e)}function Bg(e,n){n===0&&(n=Rt()),e=zs(e,n),e!==null&&(Gt(e,n),Oi(e))}function Zx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Bg(e,a)}function Kx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Bg(e,a)}function Qx(e,n){return F(e,n)}var Vl=null,nr=null,Nf=!1,kl=!1,Lf=!1,fs=0;function Oi(e){e!==nr&&e.next===null&&(nr===null?Vl=nr=e:nr=nr.next=e),kl=!0,Nf||(Nf=!0,$x())}function vo(e,n){if(!Lf&&kl){Lf=!0;do for(var a=!1,o=Vl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ft(42|e)+1)-1,f&=u&~(M&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Vg(o,f))}else f=Re,f=Yt(o,o===Ye?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ut(o,f)||(a=!0,Vg(o,f));o=o.next}while(a);Lf=!1}}function Jx(){Fg()}function Fg(){kl=Nf=!1;var e=0;fs!==0&&(oy()&&(e=fs),fs=0);for(var n=Ht(),a=null,o=Vl;o!==null;){var u=o.next,f=Hg(o,n);f===0?(o.next=null,a===null?Vl=u:a.next=u,u===null&&(nr=a)):(a=o,(e!==0||(f&3)!==0)&&(kl=!0)),o=u}vo(e)}function Hg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var M=31-Ft(f),A=1<<M,G=u[M];G===-1?((A&a)===0||(A&o)!==0)&&(u[M]=ae(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=Ye,a=Re,a=Yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&he(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ut(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&he(o),ne(a)){case 2:case 8:a=fe;break;case 32:a=Xe;break;case 268435456:a=z;break;default:a=Xe}return o=Gg.bind(null,e),a=F(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&he(o),e.callbackPriority=2,e.callbackNode=null,2}function Gg(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var o=Re;return o=Yt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Eg(e,o,n),Hg(e,Ht()),e.callbackNode!=null&&e.callbackNode===a?Gg.bind(null,e):null)}function Vg(e,n){if(Gl())return null;Eg(e,n,!0)}function $x(){cy(function(){(Pe&6)!==0?F(jt,Jx):Fg()})}function Of(){return fs===0&&(fs=W()),fs}function kg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:tl(""+e)}function jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ty(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=kg((u[Ce]||null).action),M=o.submitter;M&&(n=(n=M[Ce]||null)?kg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var A=new al("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var G=M?jg(u,M):new FormData(u);$u(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=M?jg(u,M):new FormData(u),$u(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Pf=0;Pf<vu.length;Pf++){var zf=vu[Pf],ey=zf.toLowerCase(),ny=zf[0].toUpperCase()+zf.slice(1);yi(ey,"on"+ny)}yi(Ep,"onAnimationEnd"),yi(bp,"onAnimationIteration"),yi(Tp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(xx,"onTransitionRun"),yi(yx,"onTransitionStart"),yi(Sx,"onTransitionCancel"),yi(Ap,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Xg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],G=A.instance,st=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(gt){Dl(gt)}u.currentTarget=null,f=G}else for(M=0;M<o.length;M++){if(A=o[M],G=A.instance,st=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=st;try{f(u)}catch(gt){Dl(gt)}u.currentTarget=null,f=G}}}}function Ae(e,n){var a=n[fa];a===void 0&&(a=n[fa]=new Set);var o=e+"__bubble";a.has(o)||(Wg(n,e,2,!1),a.add(o))}function If(e,n,a){var o=0;n&&(o|=4),Wg(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[jl]){e[jl]=!0,Jo.forEach(function(a){a!=="selectionchange"&&(iy.has(a)||If(a,!1,e),If(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,If("selectionchange",!1,n))}}function Wg(e,n,a,o){switch(g_(n)){case 2:var u=Dy;break;case 8:u=Uy;break;default:u=Jf}a=u.bind(null,n,a,e),u=void 0,!su||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Ff(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Bi(A),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){o=f=M;continue t}A=A.parentNode}}o=o.return}$d(function(){var st=f,gt=iu(a),St=[];t:{var rt=Rp.get(e);if(rt!==void 0){var ot=al,ue=e;switch(e){case"keypress":if(nl(a)===0)break t;case"keydown":case"keyup":ot=Qv;break;case"focusin":ue="focus",ot=cu;break;case"focusout":ue="blur",ot=cu;break;case"beforeblur":case"afterblur":ot=cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=tx;break;case Ep:case bp:case Tp:ot=Vv;break;case Ap:ot=nx;break;case"scroll":case"scrollend":ot=Iv;break;case"wheel":ot=ax;break;case"copy":case"cut":case"paste":ot=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=ap;break;case"toggle":case"beforetoggle":ot=rx}var re=(n&4)!==0,Ve=!re&&(e==="scroll"||e==="scrollend"),Q=re?rt!==null?rt+"Capture":null:rt;re=[];for(var X=st,nt;X!==null;){var vt=X;if(nt=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||nt===null||Q===null||(vt=Ir(X,Q),vt!=null&&re.push(yo(X,vt,nt))),Ve)break;X=X.return}0<re.length&&(rt=new ot(rt,ue,null,a,gt),St.push({event:rt,listeners:re}))}}if((n&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",rt&&a!==nu&&(ue=a.relatedTarget||a.fromElement)&&(Bi(ue)||ue[Qn]))break t;if((ot||rt)&&(rt=gt.window===gt?gt:(rt=gt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ot?(ue=a.relatedTarget||a.toElement,ot=st,ue=ue?Bi(ue):null,ue!==null&&(Ve=c(ue),re=ue.tag,ue!==Ve||re!==5&&re!==27&&re!==6)&&(ue=null)):(ot=null,ue=st),ot!==ue)){if(re=np,vt="onMouseLeave",Q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(re=ap,vt="onPointerLeave",Q="onPointerEnter",X="pointer"),Ve=ot==null?rt:Za(ot),nt=ue==null?rt:Za(ue),rt=new re(vt,X+"leave",ot,a,gt),rt.target=Ve,rt.relatedTarget=nt,vt=null,Bi(gt)===st&&(re=new re(Q,X+"enter",ue,a,gt),re.target=nt,re.relatedTarget=Ve,vt=re),Ve=vt,ot&&ue)e:{for(re=ot,Q=ue,X=0,nt=re;nt;nt=ir(nt))X++;for(nt=0,vt=Q;vt;vt=ir(vt))nt++;for(;0<X-nt;)re=ir(re),X--;for(;0<nt-X;)Q=ir(Q),nt--;for(;X--;){if(re===Q||Q!==null&&re===Q.alternate)break e;re=ir(re),Q=ir(Q)}re=null}else re=null;ot!==null&&qg(St,rt,ot,re,!1),ue!==null&&Ve!==null&&qg(St,Ve,ue,re,!0)}}t:{if(rt=st?Za(st):window,ot=rt.nodeName&&rt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&rt.type==="file")var Zt=hp;else if(up(rt))if(dp)Zt=gx;else{Zt=px;var Me=dx}else ot=rt.nodeName,!ot||ot.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?st&&eu(st.elementType)&&(Zt=hp):Zt=mx;if(Zt&&(Zt=Zt(e,st))){fp(St,Zt,a,gt);break t}Me&&Me(e,rt,st),e==="focusout"&&st&&rt.type==="number"&&st.memoizedProps.value!=null&&wn(rt,"number",rt.value)}switch(Me=st?Za(st):window,e){case"focusin":(up(Me)||Me.contentEditable==="true")&&(Ls=Me,mu=st,Xr=null);break;case"focusout":Xr=mu=Ls=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,Sp(St,a,gt);break;case"selectionchange":if(vx)break;case"keydown":case"keyup":Sp(St,a,gt)}var $t;if(fu)t:{switch(e){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else Ns?lp(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(sp&&a.locale!=="ko"&&(Ns||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Ns&&($t=tp()):(pa=gt,ru="value"in pa?pa.value:pa.textContent,Ns=!0)),Me=Xl(st,ce),0<Me.length&&(ce=new ip(ce,e,null,a,gt),St.push({event:ce,listeners:Me}),$t?ce.data=$t:($t=cp(a),$t!==null&&(ce.data=$t)))),($t=lx?cx(e,a):ux(e,a))&&(ce=Xl(st,"onBeforeInput"),0<ce.length&&(Me=new ip("onBeforeInput","beforeinput",null,a,gt),St.push({event:Me,listeners:ce}),Me.data=$t)),ty(St,e,st,a,gt)}Xg(St,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(e,a),u!=null&&o.unshift(yo(e,u,f)),u=Ir(e,n),u!=null&&o.push(yo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qg(e,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var A=a,G=A.alternate,st=A.stateNode;if(A=A.tag,G!==null&&G===o)break;A!==5&&A!==26&&A!==27||st===null||(G=st,u?(st=Ir(a,f),st!=null&&M.unshift(yo(a,st,G))):u||(st=Ir(a,f),st!=null&&M.push(yo(a,st,G)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function Yg(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(sy,"")}function Zg(e,n){return n=Yg(n),Yg(e)===n}function Wl(){}function Ge(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||kn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&kn(e,""+o);break;case"className":Wt(e,"class",o);break;case"tabIndex":Wt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Wt(e,a,o);break;case"style":Qd(e,o,f);break;case"data":if(n!=="object"){Wt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",u.name,u,null),Ge(e,n,"formEncType",u.formEncType,u,null),Ge(e,n,"formMethod",u.formMethod,u,null),Ge(e,n,"formTarget",u.formTarget,u,null)):(Ge(e,n,"encType",u.encType,u,null),Ge(e,n,"method",u.method,u,null),Ge(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=tl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=tl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ae("beforetoggle",e),Ae("toggle",e),zt(e,"popover",o);break;case"xlinkActuate":It(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":It(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":It(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":It(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":It(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":It(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":It(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":It(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":It(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":zt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pv.get(a)||a,zt(e,a,o))}}function Hf(e,n,a,o,u,f){switch(a){case"style":Qd(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?kn(e,o):(typeof o=="number"||typeof o=="bigint")&&kn(e,""+o);break;case"onScroll":o!=null&&Ae("scroll",e);break;case"onScrollEnd":o!=null&&Ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$o.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ce]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):zt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",e),Ae("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,f,M,a,null)}}u&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":Ae("invalid",e);var A=f=M=u=null,G=null,st=null;for(o in a)if(a.hasOwnProperty(o)){var gt=a[o];if(gt!=null)switch(o){case"name":u=gt;break;case"type":M=gt;break;case"checked":G=gt;break;case"defaultChecked":st=gt;break;case"value":f=gt;break;case"defaultValue":A=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(s(137,n));break;default:Ge(e,n,o,gt,a,null)}}zn(e,f,A,G,st,M,u,!1),be(e);return;case"select":Ae("invalid",e),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Ge(e,n,u,A,a,null)}n=f,a=M,e.multiple=!!o,n!=null?an(e,!!o,n,!1):a!=null&&an(e,!!o,a,!0);return;case"textarea":Ae("invalid",e),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ge(e,n,M,A,a,null)}ws(e,o,u,f),be(e);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,G,o,a,null)}return;case"dialog":Ae("beforetoggle",e),Ae("toggle",e),Ae("cancel",e),Ae("close",e);break;case"iframe":case"object":Ae("load",e);break;case"video":case"audio":for(o=0;o<xo.length;o++)Ae(xo[o],e);break;case"image":Ae("error",e),Ae("load",e);break;case"details":Ae("toggle",e);break;case"embed":case"source":case"link":Ae("error",e),Ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in a)if(a.hasOwnProperty(st)&&(o=a[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,st,o,a,null)}return;default:if(eu(n)){for(gt in a)a.hasOwnProperty(gt)&&(o=a[gt],o!==void 0&&Hf(e,n,gt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,A=null,G=null,st=null,gt=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":G=St;default:o.hasOwnProperty(ot)||Ge(e,n,ot,null,o,St)}}for(var rt in o){var ot=o[rt];if(St=a[rt],o.hasOwnProperty(rt)&&(ot!=null||St!=null))switch(rt){case"type":f=ot;break;case"name":u=ot;break;case"checked":st=ot;break;case"defaultChecked":gt=ot;break;case"value":M=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==St&&Ge(e,n,rt,ot,o,St)}}We(e,M,A,G,st,gt,f,u);return;case"select":ot=M=A=rt=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ot=G;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":rt=f;break;case"defaultValue":A=f;break;case"multiple":M=f;default:f!==G&&Ge(e,n,u,f,o,G)}n=A,a=M,o=ot,rt!=null?an(e,!!a,rt,!1):!!o!=!!a&&(n!=null?an(e,!!a,n,!0):an(e,!!a,a?[]:"",!1));return;case"textarea":ot=rt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":rt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ge(e,n,M,u,o,f)}bn(e,rt,ot);return;case"option":for(var ue in a)if(rt=a[ue],a.hasOwnProperty(ue)&&rt!=null&&!o.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:Ge(e,n,ue,null,o,rt)}for(G in o)if(rt=o[G],ot=a[G],o.hasOwnProperty(G)&&rt!==ot&&(rt!=null||ot!=null))switch(G){case"selected":e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol";break;default:Ge(e,n,G,rt,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)rt=a[re],a.hasOwnProperty(re)&&rt!=null&&!o.hasOwnProperty(re)&&Ge(e,n,re,null,o,rt);for(st in o)if(rt=o[st],ot=a[st],o.hasOwnProperty(st)&&rt!==ot&&(rt!=null||ot!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ge(e,n,st,rt,o,ot)}return;default:if(eu(n)){for(var Ve in a)rt=a[Ve],a.hasOwnProperty(Ve)&&rt!==void 0&&!o.hasOwnProperty(Ve)&&Hf(e,n,Ve,void 0,o,rt);for(gt in o)rt=o[gt],ot=a[gt],!o.hasOwnProperty(gt)||rt===ot||rt===void 0&&ot===void 0||Hf(e,n,gt,rt,o,ot);return}}for(var Q in a)rt=a[Q],a.hasOwnProperty(Q)&&rt!=null&&!o.hasOwnProperty(Q)&&Ge(e,n,Q,null,o,rt);for(St in o)rt=o[St],ot=a[St],!o.hasOwnProperty(St)||rt===ot||rt==null&&ot==null||Ge(e,n,St,rt,o,ot)}var Gf=null,Vf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function Kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var jf=null;function oy(){var e=window.event;return e&&e.type==="popstate"?e===jf?!1:(jf=e,!0):(jf=null,!1)}var Jg=typeof setTimeout=="function"?setTimeout:void 0,ly=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(e){return $g.resolve(null).then(e).catch(uy)}:Jg;function uy(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function t_(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&So(M.documentElement),a&2&&So(M.body),a&4)for(a=M.head,So(a),M=a.firstChild;M;){var A=M.nextSibling,G=M.nodeName;M[wi]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(f),wo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);wo(n)}function Xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[wi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function hy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function dy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var qf=null;function e_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function n_(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cs(e)}var mi=new Map,i_=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=Y.d;Y.d={f:py,r:my,D:gy,C:_y,L:vy,m:xy,X:Sy,S:yy,M:My};function py(){var e=Ji.f(),n=Fl();return e||n}function my(e){var n=ha(e);n!==null&&n.tag===5&&n.type==="form"?Em(n):Ji.r(e)}var ar=typeof document>"u"?null:document;function a_(e,n,a){var o=ar;if(o&&typeof n=="string"&&n){var u=xn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),i_.has(u)||(i_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),un(n),o.head.appendChild(n)))}}function gy(e){Ji.D(e),a_("dns-prefetch",e,null)}function _y(e,n){Ji.C(e,n),a_("preconnect",e,n)}function vy(e,n,a){Ji.L(e,n,a);var o=ar;if(o&&e&&n){var u='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xn(a.imageSizes)+'"]')):u+='[href="'+xn(e)+'"]';var f=u;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}mi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),Rn(n,"link",e),un(n),o.head.appendChild(n)))}}function xy(e,n){Ji.m(e,n);var a=ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xn(o)+'"][href="'+xn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!mi.has(f)&&(e=_({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),Rn(o,"link",e),un(o),a.head.appendChild(o)}}}function yy(e,n,a){Ji.S(e,n,a);var o=ar;if(o&&e){var u=da(o).hoistableStyles,f=sr(e);n=n||"default";var M=u.get(f);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Mo(f)))A.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&Yf(e,a);var G=M=o.createElement("link");un(G),Rn(G,"link",e),G._p=new Promise(function(st,gt){G.onload=st,G.onerror=gt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(f,M)}}}function Sy(e,n){Ji.X(e,n);var a=ar;if(a&&e){var o=da(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=_({src:e,async:!0},n),(n=mi.get(u))&&Zf(e,n),f=a.createElement("script"),un(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function My(e,n){Ji.M(e,n);var a=ar;if(a&&e){var o=da(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&Zf(e,n),f=a.createElement("script"),un(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function s_(e,n,a,o){var u=(u=et.current)?Yl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=da(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=da(u).hoistableStyles,M=f.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,M),(f=u.querySelector(Mo(e)))&&!f._p&&(M.instance=f,M.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||Ey(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=da(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+xn(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function r_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ey(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),un(n),e.head.appendChild(n))}function rr(e){return'[src="'+xn(e)+'"]'}function Eo(e){return"script[async]"+e}function o_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xn(a.href)+'"]');if(o)return n.instance=o,un(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),un(o),Rn(o,"style",u),Zl(o,a.precedence,e),n.instance=o;case"stylesheet":u=sr(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,un(f),f;o=r_(a),(u=mi.get(u))&&Yf(o,u),f=(e.ownerDocument||e).createElement("link"),un(f);var M=f;return M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Rn(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(u=e.querySelector(Eo(f)))?(n.instance=u,un(u),u):(o=a,(u=mi.get(f))&&(o=_({},a),Zf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),un(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,e));return n.instance}function Zl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Kl=null;function l_(e,n,a){if(Kl===null){var o=new Map,u=Kl=new Map;u.set(a,o)}else u=Kl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[wi]||f[Be]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(f):o.set(M,[f])}}return o}function c_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function by(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var bo=null;function Ty(){}function Ay(e,n,a){if(bo===null)throw Error(s(475));var o=bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=sr(a.href),f=e.querySelector(Mo(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Ql.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,un(f);return}f=e.ownerDocument||e,a=r_(a),(u=mi.get(u))&&Yf(a,u),f=f.createElement("link"),un(f);var M=f;M._p=new Promise(function(A,G){M.onload=A,M.onerror=G}),Rn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Ql.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ry(){if(bo===null)throw Error(s(475));var e=bo;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ql(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Jl=null;function Kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Jl=new Map,n.forEach(Cy,e),Jl=null,Ql.call(e))}function Cy(e,n){if(!(n.state.loading&4)){var a=Jl.get(e);if(a)var o=a.get(null);else{a=new Map,Jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=Ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:P,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function wy(e,n,a,o,u,f,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function f_(e,n,a,o,u,f,M,A,G,st,gt,St){return e=new wy(e,n,a,M,A,G,st,St),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ou(f),e}function h_(e){return e?(e=Is,e):Is}function d_(e,n,a,o,u,f){u=h_(u),o.context===null?o.context=u:o.pendingContext=u,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(e,o,n),a!==null&&(ai(a,e,n),to(a,e,n))}function p_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qf(e,n){p_(e,n),(e=e.alternate)&&p_(e,n)}function m_(e){if(e.tag===13){var n=zs(e,67108864);n!==null&&ai(n,e,67108864),Qf(e,67108864)}}var $l=!0;function Dy(e,n,a,o){var u=I.T;I.T=null;var f=Y.p;try{Y.p=2,Jf(e,n,a,o)}finally{Y.p=f,I.T=u}}function Uy(e,n,a,o){var u=I.T;I.T=null;var f=Y.p;try{Y.p=8,Jf(e,n,a,o)}finally{Y.p=f,I.T=u}}function Jf(e,n,a,o){if($l){var u=$f(o);if(u===null)Ff(e,n,o,tc,a),__(e,o);else if(Ly(u,e,n,a,o))o.stopPropagation();else if(__(e,o),n&4&&-1<Ny.indexOf(e)){for(;u!==null;){var f=ha(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=Jt(f.pendingLanes);if(M!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var G=1<<31-Ft(M);A.entanglements[1]|=G,M&=~G}Oi(f),(Pe&6)===0&&(Il=Ht()+500,vo(0))}}break;case 13:A=zs(f,2),A!==null&&ai(A,f,2),Fl(),Qf(f,2)}if(f=$f(o),f===null&&Ff(e,n,o,tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Ff(e,n,o,null,a)}}function $f(e){return e=iu(e),th(e)}var tc=null;function th(e){if(tc=null,e=Bi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function g_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ie()){case jt:return 2;case fe:return 8;case Xe:case Ze:return 32;case z:return 268435456;default:return 32}default:return 32}}var eh=!1,Ua=null,Na=null,La=null,Ao=new Map,Ro=new Map,Oa=[],Ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function __(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ha(n),n!==null&&m_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ly(e,n,a,o,u){switch(n){case"focusin":return Ua=Co(Ua,e,n,a,o,u),!0;case"dragenter":return Na=Co(Na,e,n,a,o,u),!0;case"mouseover":return La=Co(La,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,e,n,a,o,u)),!0}return!1}function v_(e){var n=Bi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Oe(e.priority,function(){if(a.tag===13){var o=ii();o=Pt(o);var u=zs(a,o);u!==null&&ai(u,a,o),Qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=$f(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);nu=o,a.target.dispatchEvent(o),nu=null}else return n=ha(a),n!==null&&m_(n),e.blockedOn=a,!1;n.shift()}return!0}function x_(e,n,a){ec(e)&&a.delete(n)}function Oy(){eh=!1,Ua!==null&&ec(Ua)&&(Ua=null),Na!==null&&ec(Na)&&(Na=null),La!==null&&ec(La)&&(La=null),Ao.forEach(x_),Ro.forEach(x_)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,eh||(eh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var ic=null;function y_(e){ic!==e&&(ic=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(th(o||a)===null)continue;break}var f=ha(a);f!==null&&(e.splice(n,3),n-=3,$u(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function wo(e){function n(G){return nc(G,e)}Ua!==null&&nc(Ua,e),Na!==null&&nc(Na,e),La!==null&&nc(La,e),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)v_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[Ce]||null;if(typeof f=="function")M||y_(a);else if(M){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[Ce]||null)A=M.formAction;else if(th(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),y_(a)}}}function nh(e){this._internalRoot=e}ac.prototype.render=nh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ii();d_(a,o,e,n,null,null)},ac.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;d_(e.current,2,null,e,null,null),Fl(),n[Qn]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=se();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&v_(e)}};var S_=t.version;if(S_!=="19.1.1")throw Error(s(527,S_,"19.1.1"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{dt=sc.inject(Py),xt=sc}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Im,f=Bm,M=Fm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=f_(e,1,!1,null,null,a,o,u,f,M,A,null),e[Qn]=n.current,Bf(e),new nh(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Im,M=Bm,A=Fm,G=null,st=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(st=a.formState)),n=f_(e,1,!0,n,a??null,o,u,f,M,A,G,st),n.context=h_(null),a=n.current,o=ii(),o=Pt(o),u=_a(o),u.callback=null,va(a,u,o),a=o,n.current.lanes=a,Gt(n,a),Oi(n),e[Qn]=n.current,Bf(e),new ac(n)},Uo.version="19.1.1",Uo}var U_;function Wy(){if(U_)return sh.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),sh.exports=Xy(),sh.exports}var qy=Wy();const Yy=Z0(qy);/**
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
 */const Qy=Lt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},m)=>Lt.createElement("svg",{ref:m,...Ky,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:K0("lucide",l),...d},[...h.map(([p,_])=>Lt.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(r,t)=>{const i=Lt.forwardRef(({className:s,...l},c)=>Lt.createElement(Qy,{ref:c,iconNode:t,className:K0(`lucide-${Zy(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=xe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=xe("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=xe("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=xe("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=xe("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=xe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=xe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=xe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=xe("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=xe("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=xe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=xe("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=xe("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=xe("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=xe("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=xe("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=xe("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=xe("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=xe("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=xe("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=xe("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=xe("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=xe("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=xe("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=xe("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=xe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=xe("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=xe("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=xe("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=xe("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=xe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=xe("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=xe("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=xe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=xe("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=xe("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=xe("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=xe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=xe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=xe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);async function On(r,t){const i=await fetch(r,t);if(!i.ok){let s=`请求失败 (${i.status})`;try{const l=await i.json();s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail??l)}catch{}throw new Error(s)}return i.json()}const zc=r=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});function vS(r,t){const i=URL.createObjectURL(new Blob([JSON.stringify(t,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download=r,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const en=(r,t=3)=>r==null||!Number.isFinite(r)?"—":r.toLocaleString("en-US",{maximumFractionDigits:t}),jc=r=>({loading:"读取数据",dataset_loading:"数据加载与准备",features:"提取特征",feature_extraction:"提取特征",matching:"特征匹配",pair_geometry:"匹配与几何验证",geometry:"几何验证",tracks:"构建轨迹",initialization:"两视图初始化",mapping:"增量建图",incremental_mapping:"增量建图",registration:"注册相机",bundle_adjustment:"束调整 BA",ba:"束调整 BA",export:"导出结果",exporting:"导出结果",done:"处理完成",starting:"正在启动",queued:"等待启动"})[r]??r;function $0(r){const t=/^registered_(\d+)$/.exec(r);return t?`注册图像 #${t[1]}`:{initialization:"初始化",incremental_complete:"增量建图完成",before_ba:"BA 前",after_ba:"BA 后",final:"最终结果"}[r]??r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="180",Tr={ROTATE:0,DOLLY:1,PAN:2},Mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xS=0,G_=1,yS=2,tv=1,SS=2,aa=3,qa=0,Zn=1,ra=2,ja=0,Ar=1,V_=2,k_=3,j_=4,MS=5,xs=100,ES=101,bS=102,TS=103,AS=104,RS=200,CS=201,wS=202,DS=203,Xh=204,Wh=205,US=206,NS=207,LS=208,OS=209,PS=210,zS=211,IS=212,BS=213,FS=214,qh=0,Yh=1,Zh=2,Cr=3,Kh=4,Qh=5,Jh=6,$h=7,ev=0,HS=1,GS=2,Xa=0,VS=1,kS=2,jS=3,XS=4,WS=5,qS=6,YS=7,nv=300,wr=301,Dr=302,td=303,ed=304,Jc=306,nd=1e3,Ss=1001,id=1002,Ci=1003,ZS=1004,rc=1005,zi=1006,uh=1007,Ms=1008,ca=1009,iv=1010,av=1011,Go=1012,Bd=1013,Es=1014,oa=1015,qo=1016,Fd=1017,Hd=1018,Vo=1020,sv=35902,rv=35899,ov=1021,lv=1022,Ri=1023,ko=1026,jo=1027,cv=1028,Gd=1029,uv=1030,Vd=1031,kd=1033,Ic=33776,Bc=33777,Fc=33778,Hc=33779,ad=35840,sd=35841,rd=35842,od=35843,ld=36196,cd=37492,ud=37496,fd=37808,hd=37809,dd=37810,pd=37811,md=37812,gd=37813,_d=37814,vd=37815,xd=37816,yd=37817,Sd=37818,Md=37819,Ed=37820,bd=37821,Td=36492,Ad=36494,Rd=36495,Cd=36283,wd=36284,Dd=36285,Ud=36286,KS=3200,QS=3201,JS=0,$S=1,ka="",Hn="srgb",Ur="srgb-linear",Xc="linear",ke="srgb",or=7680,X_=519,tM=512,eM=513,nM=514,fv=515,iM=516,aM=517,sM=518,rM=519,W_=35044,q_="300 es",Ii=2e3,Wc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Y_=1234567;const Fo=Math.PI/180,Xo=180/Math.PI;function Lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Ee(r,t,i){return Math.max(t,Math.min(i,r))}function jd(r,t){return(r%t+t)%t}function oM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function lM(r,t,i){return r!==t?(i-r)/(t-r):0}function Ho(r,t,i){return(1-i)*r+i*t}function cM(r,t,i,s){return Ho(r,t,1-Math.exp(-i*s))}function uM(r,t=1){return t-Math.abs(jd(r,t*2)-t)}function fM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function hM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function dM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function pM(r,t){return r+Math.random()*(t-r)}function mM(r){return r*(.5-Math.random())}function gM(r){r!==void 0&&(Y_=r);let t=Y_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _M(r){return r*Fo}function vM(r){return r*Xo}function xM(r){return(r&r-1)===0&&r!==0}function yM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function SM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function MM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),_=h((t+s)/2),y=c((t-s)/2),S=h((t-s)/2),E=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*_,m*y,m*S,d*p);break;case"YZY":r.set(m*S,d*_,m*y,d*p);break;case"ZXZ":r.set(m*y,m*S,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*E,d*p);break;case"YXY":r.set(m*E,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*E,d*_,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Sr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Bn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:Fo,RAD2DEG:Xo,generateUUID:Lr,clamp:Ee,euclideanModulo:jd,mapLinear:oM,inverseLerp:lM,lerp:Ho,damp:cM,pingpong:uM,smoothstep:fM,smootherstep:hM,randInt:dM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:_M,radToDeg:vM,isPowerOfTwo:xM,ceilPowerOfTwo:yM,floorPowerOfTwo:SM,setQuaternionFromProperEuler:MM,normalize:Bn,denormalize:Sr};class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],_=s[l+2],y=s[l+3];const S=c[h+0],E=c[h+1],b=c[h+2],C=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=y;return}if(d===1){t[i+0]=S,t[i+1]=E,t[i+2]=b,t[i+3]=C;return}if(y!==C||m!==S||p!==E||_!==b){let x=1-d;const v=m*S+p*E+_*b+y*C,B=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const H=Math.sqrt(P),k=Math.atan2(H,v*B);x=Math.sin(x*k)/H,d=Math.sin(d*k)/H}const D=d*B;if(m=m*x+S*D,p=p*x+E*D,_=_*x+b*D,y=y*x+C*D,x===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+y*y);m*=H,p*=H,_*=H,y*=H}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],y=c[h],S=c[h+1],E=c[h+2],b=c[h+3];return t[i]=d*b+_*y+m*E-p*S,t[i+1]=m*b+_*S+p*y-d*E,t[i+2]=p*b+_*E+d*S-m*y,t[i+3]=_*b-d*y-m*S-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),y=d(c/2),S=m(s/2),E=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=S*_*y+p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y-S*E*b;break;case"YXZ":this._x=S*_*y+p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y+S*E*b;break;case"ZXY":this._x=S*_*y-p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y-S*E*b;break;case"ZYX":this._x=S*_*y-p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y+S*E*b;break;case"YZX":this._x=S*_*y+p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y-S*E*b;break;case"XZY":this._x=S*_*y-p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y+S*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],y=i[10],S=s+d+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-m)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>y){const E=2*Math.sqrt(1+s-d-y);this._w=(_-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>y){const E=2*Math.sqrt(1+d-s-y);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+_)/E}else{const E=2*Math.sqrt(1+y-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(m+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-s*p,this._z=c*_+h*p+s*m-l*d,this._w=h*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),y=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=c*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,s=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),_=2*(d*i-c*l),y=2*(c*s-h*i);return this.x=i+m*p+h*y-d*_,this.y=s+m*_+d*p-c*y,this.z=l+m*y+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ee(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new J,Z_=new bs;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],_=s[4],y=s[7],S=s[2],E=s[5],b=s[8],C=l[0],x=l[3],v=l[6],B=l[1],P=l[4],D=l[7],H=l[2],k=l[5],O=l[8];return c[0]=h*C+d*B+m*H,c[3]=h*x+d*P+m*k,c[6]=h*v+d*D+m*O,c[1]=p*C+_*B+y*H,c[4]=p*x+_*P+y*k,c[7]=p*v+_*D+y*O,c[2]=S*C+E*B+b*H,c[5]=S*x+E*P+b*k,c[8]=S*v+E*D+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-s*c*_+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],y=_*h-d*p,S=d*m-_*c,E=p*c-h*m,b=i*y+s*S+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=y*C,t[1]=(l*p-_*s)*C,t[2]=(d*s-l*h)*C,t[3]=S*C,t[4]=(_*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=E*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(hh.makeScale(t,i)),this}rotate(t){return this.premultiply(hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new pe;function dv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function EM(){const r=qc("canvas");return r.style.display="block",r}const K_={};function Wo(r){r in K_||(K_[r]=!0,console.warn(r))}function bM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Q_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TM(){const r={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===ke&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(l.r=Rr(l.r),l.g=Rr(l.g),l.b=Rr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Xc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Ur]:{primaries:t,whitePoint:s,transfer:Xc,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:Q_,fromXYZ:J_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),r}const Ue=TM();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let lr;class AM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lr===void 0&&(lr=qc("canvas")),lr.width=t.width,lr.height=t.height;const l=lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=la(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let RM=0;class Xd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(dh(l[h].image)):c.push(dh(l[h]))}else c=dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function dh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?AM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let CM=0;const ph=new J;class Kn extends As{constructor(t=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=Ss,l=Ss,c=zi,h=Ms,d=Ri,m=ca,p=Kn.DEFAULT_ANISOTROPY,_=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Lr(),this.name="",this.source=new Xd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nd:t.x=t.x-Math.floor(t.x);break;case Ss:t.x=t.x<0?0:1;break;case id:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nd:t.y=t.y-Math.floor(t.y);break;case Ss:t.y=t.y<0?0:1;break;case id:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=nv;Kn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],_=m[4],y=m[8],S=m[1],E=m[5],b=m[9],C=m[2],x=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(y-C)<.01&&Math.abs(b-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(y+C)<.1&&Math.abs(b+x)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,D=(E+1)/2,H=(v+1)/2,k=(_+S)/4,O=(y+C)/4,j=(b+x)/4;return P>D&&P>H?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=k/s,c=O/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=k/l,c=j/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=O/c,l=j/c),this.set(s,l,c,i),this}let B=Math.sqrt((x-b)*(x-b)+(y-C)*(y-C)+(S-_)*(S-_));return Math.abs(B)<.001&&(B=1),this.x=(x-b)/B,this.y=(y-C)/B,this.z=(S-_)/B,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wM extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Kn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Xd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends wM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class pv extends Kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class DM extends Kn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ei):Ei.fromBufferAttribute(c,h),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),lc.subVectors(this.max,No),cr.subVectors(t.a,No),ur.subVectors(t.b,No),fr.subVectors(t.c,No),za.subVectors(ur,cr),Ia.subVectors(fr,ur),hs.subVectors(cr,fr);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-hs.z,hs.y,za.z,0,-za.x,Ia.z,0,-Ia.x,hs.z,0,-hs.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-hs.y,hs.x,0];return!mh(i,cr,ur,fr,lc)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,cr,ur,fr,lc))?!1:(cc.crossVectors(za,Ia),i=[cc.x,cc.y,cc.z],mh(i,cr,ur,fr,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new J,new J,new J,new J,new J,new J,new J,new J],Ei=new J,oc=new Wa,cr=new J,ur=new J,fr=new J,za=new J,Ia=new J,hs=new J,No=new J,lc=new J,cc=new J,ds=new J;function mh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ds.fromArray(r,c);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),_=s.dot(ds);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const UM=new Wa,Lo=new J,gh=new J;class Yo{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):UM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lo.subVectors(t,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Lo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lo.copy(t.center).add(gh)),this.expandByPoint(Lo.copy(t.center).sub(gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new J,_h=new J,uc=new J,Ba=new J,vh=new J,fc=new J,xh=new J;class Zo{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){_h.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(_h);const c=t.distanceTo(i)*.5,h=-this.direction.dot(uc),d=Ba.dot(this.direction),m=-Ba.dot(uc),p=Ba.lengthSq(),_=Math.abs(1-h*h);let y,S,E,b;if(_>0)if(y=h*m-d,S=h*d-m,b=c*_,y>=0)if(S>=-b)if(S<=b){const C=1/_;y*=C,S*=C,E=y*(y+h*S+2*d)+S*(h*y+S+2*m)+p}else S=c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;else S=-c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;else S<=-b?(y=Math.max(0,-(-h*c+d)),S=y>0?-c:Math.min(Math.max(-c,-m),c),E=-y*y+S*(S+2*m)+p):S<=b?(y=0,S=Math.min(Math.max(-c,-m),c),E=S*(S+2*m)+p):(y=Math.max(0,-(h*c+d)),S=y>0?c:Math.min(Math.max(-c,-m),c),E=-y*y+S*(S+2*m)+p);else S=h>0?-c:c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(_h).addScaledVector(uc,S),E}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(s=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(s=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(c=(t.min.y-S.y)*_,h=(t.max.y-S.y)*_):(c=(t.max.y-S.y)*_,h=(t.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),y>=0?(d=(t.min.z-S.z)*y,m=(t.max.z-S.z)*y):(d=(t.max.z-S.z)*y,m=(t.min.z-S.z)*y),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,s,l,c){vh.subVectors(i,t),fc.subVectors(s,t),xh.crossVectors(vh,fc);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(fc.crossVectors(Ba,fc));if(m<0)return null;const p=d*this.direction.dot(vh.cross(Ba));if(p<0||m+p>h)return null;const _=-d*Ba.dot(xh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,h,d,m,p,_,y,S,E,b,C,x){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,_,y,S,E,b,C,x)}set(t,i,s,l,c,h,d,m,p,_,y,S,E,b,C,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=y,v[14]=S,v[3]=E,v[7]=b,v[11]=C,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),c=1/hr.setFromMatrixColumn(t,1).length(),h=1/hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const S=h*_,E=h*y,b=d*_,C=d*y;i[0]=m*_,i[4]=-m*y,i[8]=p,i[1]=E+b*p,i[5]=S-C*p,i[9]=-d*m,i[2]=C-S*p,i[6]=b+E*p,i[10]=h*m}else if(t.order==="YXZ"){const S=m*_,E=m*y,b=p*_,C=p*y;i[0]=S+C*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*y,i[5]=h*_,i[9]=-d,i[2]=E*d-b,i[6]=C+S*d,i[10]=h*m}else if(t.order==="ZXY"){const S=m*_,E=m*y,b=p*_,C=p*y;i[0]=S-C*d,i[4]=-h*y,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*_,i[9]=C-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const S=h*_,E=h*y,b=d*_,C=d*y;i[0]=m*_,i[4]=b*p-E,i[8]=S*p+C,i[1]=m*y,i[5]=C*p+S,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const S=h*m,E=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-S*y,i[8]=b*y+E,i[1]=y,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*y+b,i[10]=S-C*y}else if(t.order==="XZY"){const S=h*m,E=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-y,i[8]=p*_,i[1]=S*y+C,i[5]=h*_,i[9]=E*y-b,i[2]=b*y-E,i[6]=d*_,i[10]=C*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(NM,t,LM)}lookAt(t,i,s){const l=this.elements;return si.subVectors(t,i),si.lengthSq()===0&&(si.z=1),si.normalize(),Fa.crossVectors(s,si),Fa.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Fa.crossVectors(s,si)),Fa.normalize(),hc.crossVectors(si,Fa),l[0]=Fa.x,l[4]=hc.x,l[8]=si.x,l[1]=Fa.y,l[5]=hc.y,l[9]=si.y,l[2]=Fa.z,l[6]=hc.z,l[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],_=s[1],y=s[5],S=s[9],E=s[13],b=s[2],C=s[6],x=s[10],v=s[14],B=s[3],P=s[7],D=s[11],H=s[15],k=l[0],O=l[4],j=l[8],w=l[12],U=l[1],V=l[5],Z=l[9],it=l[13],mt=l[2],lt=l[6],I=l[10],Y=l[14],q=l[3],pt=l[7],N=l[11],tt=l[15];return c[0]=h*k+d*U+m*mt+p*q,c[4]=h*O+d*V+m*lt+p*pt,c[8]=h*j+d*Z+m*I+p*N,c[12]=h*w+d*it+m*Y+p*tt,c[1]=_*k+y*U+S*mt+E*q,c[5]=_*O+y*V+S*lt+E*pt,c[9]=_*j+y*Z+S*I+E*N,c[13]=_*w+y*it+S*Y+E*tt,c[2]=b*k+C*U+x*mt+v*q,c[6]=b*O+C*V+x*lt+v*pt,c[10]=b*j+C*Z+x*I+v*N,c[14]=b*w+C*it+x*Y+v*tt,c[3]=B*k+P*U+D*mt+H*q,c[7]=B*O+P*V+D*lt+H*pt,c[11]=B*j+P*Z+D*I+H*N,c[15]=B*w+P*it+D*Y+H*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],y=t[6],S=t[10],E=t[14],b=t[3],C=t[7],x=t[11],v=t[15];return b*(+c*m*y-l*p*y-c*d*S+s*p*S+l*d*E-s*m*E)+C*(+i*m*E-i*p*S+c*h*S-l*h*E+l*p*_-c*m*_)+x*(+i*p*y-i*d*E-c*h*y+s*h*E+c*d*_-s*p*_)+v*(-l*d*_-i*m*y+i*d*S+l*h*y-s*h*S+s*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],y=t[9],S=t[10],E=t[11],b=t[12],C=t[13],x=t[14],v=t[15],B=y*x*p-C*S*p+C*m*E-d*x*E-y*m*v+d*S*v,P=b*S*p-_*x*p-b*m*E+h*x*E+_*m*v-h*S*v,D=_*C*p-b*y*p+b*d*E-h*C*E-_*d*v+h*y*v,H=b*y*m-_*C*m-b*d*S+h*C*S+_*d*x-h*y*x,k=i*B+s*P+l*D+c*H;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return t[0]=B*O,t[1]=(C*S*c-y*x*c-C*l*E+s*x*E+y*l*v-s*S*v)*O,t[2]=(d*x*c-C*m*c+C*l*p-s*x*p-d*l*v+s*m*v)*O,t[3]=(y*m*c-d*S*c-y*l*p+s*S*p+d*l*E-s*m*E)*O,t[4]=P*O,t[5]=(_*x*c-b*S*c+b*l*E-i*x*E-_*l*v+i*S*v)*O,t[6]=(b*m*c-h*x*c-b*l*p+i*x*p+h*l*v-i*m*v)*O,t[7]=(h*S*c-_*m*c+_*l*p-i*S*p-h*l*E+i*m*E)*O,t[8]=D*O,t[9]=(b*y*c-_*C*c-b*s*E+i*C*E+_*s*v-i*y*v)*O,t[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*v+i*d*v)*O,t[11]=(_*d*c-h*y*c-_*s*p+i*y*p+h*s*E-i*d*E)*O,t[12]=H*O,t[13]=(_*C*l-b*y*l+b*s*S-i*C*S-_*s*x+i*y*x)*O,t[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*x-i*d*x)*O,t[15]=(h*y*l-_*d*l+_*s*m-i*y*m-h*s*S+i*d*S)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,y=d+d,S=c*p,E=c*_,b=c*y,C=h*_,x=h*y,v=d*y,B=m*p,P=m*_,D=m*y,H=s.x,k=s.y,O=s.z;return l[0]=(1-(C+v))*H,l[1]=(E+D)*H,l[2]=(b-P)*H,l[3]=0,l[4]=(E-D)*k,l[5]=(1-(S+v))*k,l[6]=(x+B)*k,l[7]=0,l[8]=(b+P)*O,l[9]=(x-B)*O,l[10]=(1-(S+C))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=hr.set(l[0],l[1],l[2]).length();const h=hr.set(l[4],l[5],l[6]).length(),d=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,_=1/h,y=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=y,bi.elements[9]*=y,bi.elements[10]*=y,i.setFromRotationMatrix(bi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,_=2*c/(i-t),y=2*c/(s-l),S=(i+t)/(i-t),E=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===Ii)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Wc)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=y,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ii,m=!1){const p=this.elements,_=2/(i-t),y=2/(s-l),S=-(i+t)/(i-t),E=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===Ii)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===Wc)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=y,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hr=new J,bi=new nn,NM=new J(0,0,0),LM=new J(1,1,1),Fa=new J,hc=new J,si=new J,$_=new nn,t0=new bs;class ua{constructor(t=0,i=0,s=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],y=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return $_.makeRotationFromQuaternion(t),this.setFromRotationMatrix($_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return t0.setFromEuler(this),this.setFromQuaternion(t0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let OM=0;const e0=new J,dr=new bs,ea=new nn,dc=new J,Oo=new J,PM=new J,zM=new bs,n0=new J(1,0,0),i0=new J(0,1,0),a0=new J(0,0,1),s0={type:"added"},IM={type:"removed"},pr={type:"childadded",child:null},yh={type:"childremoved",child:null};class Gn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new J,i=new ua,s=new bs,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new pe}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,i){return dr.setFromAxisAngle(t,i),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(n0,t)}rotateY(t){return this.rotateOnAxis(i0,t)}rotateZ(t){return this.rotateOnAxis(a0,t)}translateOnAxis(t,i){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(n0,t)}translateY(t){return this.translateOnAxis(i0,t)}translateZ(t){return this.translateOnAxis(a0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?dc.copy(t):dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,dc,this.up):ea.lookAt(dc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),dr.setFromRotationMatrix(ea),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IM),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,t,PM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,zM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const y=m[p];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),y=h(t.shapes),S=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new J(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new J,na=new J,Sh=new J,ia=new J,mr=new J,gr=new J,r0=new J,Mh=new J,Eh=new J,bh=new J,Th=new cn,Ah=new cn,Rh=new cn;class Ai{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),na.subVectors(s,i),Sh.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(na),m=Ti.dot(Sh),p=na.dot(na),_=na.dot(Sh),y=h*p-d*d;if(y===0)return c.set(0,0,0),null;const S=1/y,E=(p*m-d*_)*S,b=(h*_-d*m)*S;return c.set(1-E-b,b,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Th,c.x),h.addScaledVector(Ah,c.y),h.addScaledVector(Rh,c.z),h}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),na.subVectors(t,i),Ti.cross(na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Ti.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;mr.subVectors(l,s),gr.subVectors(c,s),Mh.subVectors(t,s);const m=mr.dot(Mh),p=gr.dot(Mh);if(m<=0&&p<=0)return i.copy(s);Eh.subVectors(t,l);const _=mr.dot(Eh),y=gr.dot(Eh);if(_>=0&&y<=_)return i.copy(l);const S=m*y-_*p;if(S<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(s).addScaledVector(mr,h);bh.subVectors(t,c);const E=mr.dot(bh),b=gr.dot(bh);if(b>=0&&E<=b)return i.copy(c);const C=E*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(gr,d);const x=_*b-E*y;if(x<=0&&y-_>=0&&E-b>=0)return r0.subVectors(c,l),d=(y-_)/(y-_+(E-b)),i.copy(l).addScaledVector(r0,d);const v=1/(x+C+S);return h=C*v,d=S*v,i.copy(s).addScaledVector(mr,h).addScaledVector(gr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Ch(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Ne{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=jd(t,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ch(h,c,t+1/3),this.g=Ch(h,c,t),this.b=Ch(h,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=Hn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Hn){const s=mv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return Ue.workingToColorSpace(Ln.copy(this),t),Math.round(Ee(Ln.r*255,0,255))*65536+Math.round(Ee(Ln.g*255,0,255))*256+Math.round(Ee(Ln.b*255,0,255))}getHexString(t=Hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const y=h-d;switch(p=_<=.5?y/(h+d):y/(2-h-d),h){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=Hn){Ue.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==Hn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(pc);const s=Ho(Ha.h,pc.h,i),l=Ho(Ha.s,pc.s,i),c=Ho(Ha.l,pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ne;Ne.NAMES=mv;let BM=0;class Or extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ar,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Wh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==Wh&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yc extends Or{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new J,mc=new ve;let FM=0;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=W_,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Sr(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Sr(i,this.array)),i}setX(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Sr(i,this.array)),i}setY(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Sr(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Sr(i,this.array)),i}setW(t,i){return this.normalized&&(i=Bn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==W_&&(t.usage=this.usage),t}}class gv extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _v extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Vn extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let HM=0;const gi=new nn,wh=new Gn,_r=new J,ri=new Wa,Po=new Wa,En=new J;class li extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?_v:gv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(ri.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ri.min,Po.min),ri.expandByPoint(En),En.addVectors(ri.max,Po.max),ri.expandByPoint(En)):(ri.expandByPoint(Po.min),ri.expandByPoint(Po.max))}ri.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)En.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(En));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)En.fromBufferAttribute(d,p),m&&(_r.fromBufferAttribute(t,p),En.add(_r)),l=Math.max(l,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new J,m[j]=new J;const p=new J,_=new J,y=new J,S=new ve,E=new ve,b=new ve,C=new J,x=new J;function v(j,w,U){p.fromBufferAttribute(s,j),_.fromBufferAttribute(s,w),y.fromBufferAttribute(s,U),S.fromBufferAttribute(c,j),E.fromBufferAttribute(c,w),b.fromBufferAttribute(c,U),_.sub(p),y.sub(p),E.sub(S),b.sub(S);const V=1/(E.x*b.y-b.x*E.y);isFinite(V)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(y,-E.y).multiplyScalar(V),x.copy(y).multiplyScalar(E.x).addScaledVector(_,-b.x).multiplyScalar(V),d[j].add(C),d[w].add(C),d[U].add(C),m[j].add(x),m[w].add(x),m[U].add(x))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let j=0,w=B.length;j<w;++j){const U=B[j],V=U.start,Z=U.count;for(let it=V,mt=V+Z;it<mt;it+=3)v(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const P=new J,D=new J,H=new J,k=new J;function O(j){H.fromBufferAttribute(l,j),k.copy(H);const w=d[j];P.copy(w),P.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(k,w);const V=D.dot(m[j])<0?-1:1;h.setXYZW(j,P.x,P.y,P.z,V)}for(let j=0,w=B.length;j<w;++j){const U=B[j],V=U.start,Z=U.count;for(let it=V,mt=V+Z;it<mt;it+=3)O(t.getX(it+0)),O(t.getX(it+1)),O(t.getX(it+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,m=new J,p=new J,_=new J,y=new J;if(t)for(let S=0,E=t.count;S<E;S+=3){const b=t.getX(S+0),C=t.getX(S+1),x=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,x),_.subVectors(h,c),y.subVectors(l,c),_.cross(y),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,x),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),y.subVectors(l,c),_.cross(y),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,y=d.normalized,S=new p.constructor(m.length*_);let E=0,b=0;for(let C=0,x=m.length;C<x;C++){d.isInterleavedBufferAttribute?E=m[C]*d.data.stride+d.offset:E=m[C]*_;for(let v=0;v<_;v++)S[b++]=p[E++]}return new vi(S,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,y=p.length;_<y;_++){const S=p[_],E=t(S,s);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let y=0,S=p.length;y<S;y++){const E=p[y];_.push(E.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],y=c[p];for(let S=0,E=y.length;S<E;S++)_.push(y[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const y=h[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const o0=new nn,ps=new Zo,gc=new Yo,l0=new J,_c=new J,vc=new J,xc=new J,Dh=new J,yc=new J,c0=new J,Sc=new J;class _i extends Gn{constructor(t=new li,i=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],y=c[m];_!==0&&(Dh.fromBufferAttribute(y,t),h?yc.addScaledVector(Dh,_):yc.addScaledVector(Dh.sub(i),_))}i.add(yc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(c),ps.copy(t.ray).recast(t.near),!(gc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(gc,l0)===null||ps.origin.distanceToSquared(l0)>(t.far-t.near)**2))&&(o0.copy(c).invert(),ps.copy(t.ray).applyMatrix4(o0),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],v=h[x.materialIndex],B=Math.max(x.start,E.start),P=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let D=B,H=P;D<H;D+=3){const k=d.getX(D),O=d.getX(D+1),j=d.getX(D+2);l=Mc(this,v,t,s,p,_,y,k,O,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(d.count,E.start+E.count);for(let x=b,v=C;x<v;x+=3){const B=d.getX(x),P=d.getX(x+1),D=d.getX(x+2);l=Mc(this,h,t,s,p,_,y,B,P,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=S.length;b<C;b++){const x=S[b],v=h[x.materialIndex],B=Math.max(x.start,E.start),P=Math.min(m.count,Math.min(x.start+x.count,E.start+E.count));for(let D=B,H=P;D<H;D+=3){const k=D,O=D+1,j=D+2;l=Mc(this,v,t,s,p,_,y,k,O,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let x=b,v=C;x<v;x+=3){const B=x,P=x+1,D=x+2;l=Mc(this,h,t,s,p,_,y,B,P,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function GM(r,t,i,s,l,c,h,d){let m;if(t.side===Zn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===qa,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:r}}function Mc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,_c),r.getVertexPosition(m,vc),r.getVertexPosition(p,xc);const _=GM(r,t,i,s,_c,vc,xc,c0);if(_){const y=new J;Ai.getBarycoord(c0,_c,vc,xc,y),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,y,new ve)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,y,new ve)),h&&(_.normal=Ai.getInterpolatedAttribute(h,d,m,p,y,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new J,materialIndex:0};Ai.getNormal(_c,vc,xc,S.normal),_.face=S,_.barycoord=y}return _}class Ko extends li{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],y=[];let S=0,E=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(_,3)),this.setAttribute("uv",new Vn(y,2));function b(C,x,v,B,P,D,H,k,O,j,w){const U=D/O,V=H/j,Z=D/2,it=H/2,mt=k/2,lt=O+1,I=j+1;let Y=0,q=0;const pt=new J;for(let N=0;N<I;N++){const tt=N*V-it;for(let yt=0;yt<lt;yt++){const Mt=yt*U-Z;pt[C]=Mt*B,pt[x]=tt*P,pt[v]=mt,p.push(pt.x,pt.y,pt.z),pt[C]=0,pt[x]=0,pt[v]=k>0?1:-1,_.push(pt.x,pt.y,pt.z),y.push(yt/O),y.push(1-N/j),Y+=1}}for(let N=0;N<j;N++)for(let tt=0;tt<O;tt++){const yt=S+tt+lt*N,Mt=S+tt+lt*(N+1),Nt=S+(tt+1)+lt*(N+1),kt=S+(tt+1)+lt*N;m.push(yt,Mt,kt),m.push(Mt,Nt,kt),q+=6}d.addGroup(E,q,w),E+=q,S+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(r){const t={};for(let i=0;i<r.length;i++){const s=Nr(r[i]);for(const l in s)t[l]=s[l]}return t}function VM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function vv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const kM={clone:Nr,merge:Fn};var jM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Or{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jM,this.fragmentShader=XM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=VM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class xv extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new J,u0=new ve,f0=new ve;class oi extends xv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,u0,f0),i.subVectors(f0,u0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Fo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,xr=1;class WM extends Gn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(vr,xr,t,i);l.layers=this.layers,this.add(l);const c=new oi(vr,xr,t,i);c.layers=this.layers,this.add(c);const h=new oi(vr,xr,t,i);h.layers=this.layers,this.add(h);const d=new oi(vr,xr,t,i);d.layers=this.layers,this.add(d);const m=new oi(vr,xr,t,i);m.layers=this.layers,this.add(m);const p=new oi(vr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,y=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(y,S,E),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class yv extends Kn{constructor(t=[],i=wr,s,l,c,h,d,m,p,_){super(t,i,s,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qM extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ko(5,5,5),c=new Ya({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:ja});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=zi),new WM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Er extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const x=i.getJointPose(C,s),v=this._getHandJoint(p,C);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=_.position.distanceTo(y.position),E=.02,b=.005;p.inputState.pinching&&S>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Er;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class ZM extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Nh=new J,KM=new J,QM=new pe;class Va{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Nh.subVectors(s,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QM.getNormalMatrix(t),l=this.coplanarPoint(Nh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Yo,JM=new ve(.5,.5),Ec=new J;class Sv{constructor(t=new Va,i=new Va,s=new Va,l=new Va,c=new Va,h=new Va){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],y=c[5],S=c[6],E=c[7],b=c[8],C=c[9],x=c[10],v=c[11],B=c[12],P=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,E-_,v-b,H-B).normalize(),l[1].setComponents(p+h,E+_,v+b,H+B).normalize(),l[2].setComponents(p+d,E+y,v+C,H+P).normalize(),l[3].setComponents(p-d,E-y,v-C,H-P).normalize(),s)l[4].setComponents(m,S,x,D).normalize(),l[5].setComponents(p-m,E-S,v-x,H-D).normalize();else if(l[4].setComponents(p-m,E-S,v-x,H-D).normalize(),i===Ii)l[5].setComponents(p+m,E+S,v+x,H+D).normalize();else if(i===Wc)l[5].setComponents(m,S,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);const i=JM.distanceTo(t.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qd extends Or{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zc=new J,Kc=new J,h0=new nn,zo=new Zo,bc=new Yo,Lh=new J,d0=new J;class Mv extends Gn{constructor(t=new li,i=new qd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Zc.fromBufferAttribute(i,l-1),Kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Zc.distanceTo(Kc);t.setAttribute("lineDistance",new Vn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,t.ray.intersectsSphere(bc)===!1)return;h0.copy(l).invert(),zo.copy(t.ray).applyMatrix4(h0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const E=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let C=E,x=b-1;C<x;C+=p){const v=_.getX(C),B=_.getX(C+1),P=Tc(this,t,zo,m,v,B,C);P&&i.push(P)}if(this.isLineLoop){const C=_.getX(b-1),x=_.getX(E),v=Tc(this,t,zo,m,C,x,b-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let C=E,x=b-1;C<x;C+=p){const v=Tc(this,t,zo,m,C,C+1,C);v&&i.push(v)}if(this.isLineLoop){const C=Tc(this,t,zo,m,b-1,E,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(Zc.fromBufferAttribute(d,l),Kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Zc,Kc,Lh,d0)>s)return;Lh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Lh);if(!(p<t.near||p>t.far))return{distance:p,point:d0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const p0=new J,m0=new J;class Ev extends Mv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)p0.fromBufferAttribute(i,l),m0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+p0.distanceTo(m0);t.setAttribute("lineDistance",new Vn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bv extends Or{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const g0=new nn,Nd=new Zo,Ac=new Yo,Rc=new J;class Tv extends Gn{constructor(t=new li,i=new bv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;g0.copy(l).invert(),Nd.copy(t.ray).applyMatrix4(g0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,y=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let b=S,C=E;b<C;b++){const x=p.getX(b);Rc.fromBufferAttribute(y,x),_0(Rc,x,m,l,t,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=S,C=E;b<C;b++)Rc.fromBufferAttribute(y,b),_0(Rc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function _0(r,t,i,s,l,c,h){const d=Nd.distanceSqToPoint(r);if(d<i){const m=new J;Nd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class Av extends Kn{constructor(t,i,s=Es,l,c,h,d=Ci,m=Ci,p,_=ko,y=1){if(_!==ko&&_!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:y};super(S,l,c,h,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $c extends li{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,y=t/d,S=i/m,E=[],b=[],C=[],x=[];for(let v=0;v<_;v++){const B=v*S-h;for(let P=0;P<p;P++){const D=P*y-c;b.push(D,-B,0),C.push(0,0,1),x.push(P/d),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<d;B++){const P=B+p*v,D=B+p*(v+1),H=B+1+p*(v+1),k=B+1+p*v;E.push(P,D,k),E.push(D,H,k)}this.setIndex(E),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qc extends li{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const _=[],y=new J,S=new J,E=[],b=[],C=[],x=[];for(let v=0;v<=s;v++){const B=[],P=v/s;let D=0;v===0&&h===0?D=.5/i:v===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const k=H/i;y.x=-t*Math.cos(l+k*c)*Math.sin(h+P*d),y.y=t*Math.cos(h+P*d),y.z=t*Math.sin(l+k*c)*Math.sin(h+P*d),b.push(y.x,y.y,y.z),S.copy(y).normalize(),C.push(S.x,S.y,S.z),x.push(k+D,1-P),B.push(p++)}_.push(B)}for(let v=0;v<s;v++)for(let B=0;B<i;B++){const P=_[v][B+1],D=_[v][B],H=_[v+1][B],k=_[v+1][B+1];(v!==0||h>0)&&E.push(P,D,k),(v!==s-1||m<Math.PI)&&E.push(D,H,k)}this.setIndex(E),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(C,3)),this.setAttribute("uv",new Vn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $M extends Or{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tE extends Or{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class eE extends xv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nE extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const v0=new nn;class iE{constructor(t,i,s=0,l=1/0){this.ray=new Zo(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Wd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return v0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(v0),this}intersectObject(t,i=!0,s=[]){return Ld(t,this,s,i),s.sort(x0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Ld(t[l],this,s,i);return s.sort(x0),s}}function x0(r,t){return r.distance-t.distance}function Ld(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Ld(c[h],t,i,!0)}}class y0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aE extends Ev{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new li;l.setAttribute("position",new Vn(i,3)),l.setAttribute("color",new Vn(s,3));const c=new qd({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new Ne,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class sE extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function S0(r,t,i,s){const l=rE(s);switch(i){case ov:return r*t;case cv:return r*t/l.components*l.byteLength;case Gd:return r*t/l.components*l.byteLength;case uv:return r*t*2/l.components*l.byteLength;case Vd:return r*t*2/l.components*l.byteLength;case lv:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case kd:return r*t*4/l.components*l.byteLength;case Ic:case Bc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case sd:case od:return Math.max(r,16)*Math.max(t,8)/4;case ad:case rd:return Math.max(r,8)*Math.max(t,8)/2;case ld:case cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case pd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case gd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _d:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Td:case Ad:case Rd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Cd:case wd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function rE(r){switch(r){case ca:case iv:return{byteLength:1,components:1};case Go:case av:case qo:return{byteLength:2,components:1};case Fd:case Hd:return{byteLength:2,components:4};case Es:case Bd:case oa:return{byteLength:4,components:1};case sv:case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function oE(r){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,y=p.byteLength,S=r.createBuffer();r.bindBuffer(m,S),r.bufferData(m,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function s(d,m,p){const _=m.array,y=m.updateRanges;if(r.bindBuffer(p,d),y.length===0)r.bufferSubData(p,0,_);else{y.sort((E,b)=>E.start-b.start);let S=0;for(let E=1;E<y.length;E++){const b=y[S],C=y[E];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++S,y[S]=C)}y.length=S+1;for(let E=0,b=y.length;E<b;E++){const C=y[E];r.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var lE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cE=`#ifdef USE_ALPHAHASH
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
#endif`,uE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pE=`#ifdef USE_AOMAP
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
#endif`,mE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gE=`#ifdef USE_BATCHING
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
#endif`,_E=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SE=`#ifdef USE_IRIDESCENCE
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
#endif`,ME=`#ifdef USE_BUMPMAP
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
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UE=`#define PI 3.141592653589793
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
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LE=`vec3 transformedNormal = objectNormal;
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
#endif`,OE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",FE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HE=`#ifdef USE_ENVMAP
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
#endif`,GE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,VE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZE=`#ifdef USE_GRADIENTMAP
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
}`,KE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$E=`uniform bool receiveShadow;
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
#endif`,tb=`#ifdef USE_ENVMAP
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
#endif`,eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ib=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sb=`PhysicalMaterial material;
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
#endif`,rb=`struct PhysicalMaterial {
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
}`,ob=`
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
#endif`,lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_b=`#if defined( USE_POINTS_UV )
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
#endif`,vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`#ifdef USE_MORPHTARGETS
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
#endif`,bb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Db=`#ifdef USE_NORMALMAP
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
#endif`,Ub=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wb=`float getShadowMask() {
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
}`,qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,Zb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kb=`#ifdef USE_SKINNING
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
#endif`,Qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,n1=`#ifdef USE_TRANSMISSION
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
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
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
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
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
}`,p1=`#if DEPTH_PACKING == 3200
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
}`,m1=`#define DISTANCE
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
}`,g1=`#define DISTANCE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
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
}`,y1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,M1=`uniform vec3 diffuse;
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
}`,E1=`#define LAMBERT
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
}`,b1=`#define LAMBERT
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
}`,T1=`#define MATCAP
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
}`,A1=`#define MATCAP
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
}`,R1=`#define NORMAL
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
}`,C1=`#define NORMAL
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
}`,w1=`#define PHONG
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
}`,D1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,N1=`#define STANDARD
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
}`,L1=`#define TOON
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
}`,O1=`#define TOON
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
}`,P1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,B1=`uniform vec3 color;
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
}`,F1=`uniform float rotation;
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
}`,H1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:lE,alphahash_pars_fragment:cE,alphamap_fragment:uE,alphamap_pars_fragment:fE,alphatest_fragment:hE,alphatest_pars_fragment:dE,aomap_fragment:pE,aomap_pars_fragment:mE,batching_pars_vertex:gE,batching_vertex:_E,begin_vertex:vE,beginnormal_vertex:xE,bsdfs:yE,iridescence_fragment:SE,bumpmap_pars_fragment:ME,clipping_planes_fragment:EE,clipping_planes_pars_fragment:bE,clipping_planes_pars_vertex:TE,clipping_planes_vertex:AE,color_fragment:RE,color_pars_fragment:CE,color_pars_vertex:wE,color_vertex:DE,common:UE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:LE,displacementmap_pars_vertex:OE,displacementmap_vertex:PE,emissivemap_fragment:zE,emissivemap_pars_fragment:IE,colorspace_fragment:BE,colorspace_pars_fragment:FE,envmap_fragment:HE,envmap_common_pars_fragment:GE,envmap_pars_fragment:VE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:tb,envmap_vertex:jE,fog_vertex:XE,fog_pars_vertex:WE,fog_fragment:qE,fog_pars_fragment:YE,gradientmap_pars_fragment:ZE,lightmap_pars_fragment:KE,lights_lambert_fragment:QE,lights_lambert_pars_fragment:JE,lights_pars_begin:$E,lights_toon_fragment:eb,lights_toon_pars_fragment:nb,lights_phong_fragment:ib,lights_phong_pars_fragment:ab,lights_physical_fragment:sb,lights_physical_pars_fragment:rb,lights_fragment_begin:ob,lights_fragment_maps:lb,lights_fragment_end:cb,logdepthbuf_fragment:ub,logdepthbuf_pars_fragment:fb,logdepthbuf_pars_vertex:hb,logdepthbuf_vertex:db,map_fragment:pb,map_pars_fragment:mb,map_particle_fragment:gb,map_particle_pars_fragment:_b,metalnessmap_fragment:vb,metalnessmap_pars_fragment:xb,morphinstance_vertex:yb,morphcolor_vertex:Sb,morphnormal_vertex:Mb,morphtarget_pars_vertex:Eb,morphtarget_vertex:bb,normal_fragment_begin:Tb,normal_fragment_maps:Ab,normal_pars_fragment:Rb,normal_pars_vertex:Cb,normal_vertex:wb,normalmap_pars_fragment:Db,clearcoat_normal_fragment_begin:Ub,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Lb,iridescence_pars_fragment:Ob,opaque_fragment:Pb,packing:zb,premultiplied_alpha_fragment:Ib,project_vertex:Bb,dithering_fragment:Fb,dithering_pars_fragment:Hb,roughnessmap_fragment:Gb,roughnessmap_pars_fragment:Vb,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:jb,shadowmap_vertex:Xb,shadowmask_pars_fragment:Wb,skinbase_vertex:qb,skinning_pars_vertex:Yb,skinning_vertex:Zb,skinnormal_vertex:Kb,specularmap_fragment:Qb,specularmap_pars_fragment:Jb,tonemapping_fragment:$b,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:s1,worldpos_vertex:r1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:N1,meshtoon_vert:L1,meshtoon_frag:O1,points_vert:P1,points_frag:z1,shadow_vert:I1,shadow_frag:B1,sprite_vert:F1,sprite_frag:H1},Bt={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Fn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Fn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ne(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Fn([Bt.points,Bt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Fn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Fn([Bt.common,Bt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Fn([Bt.sprite,Bt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Fn([Bt.common,Bt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Fn([Bt.lights,Bt.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Cc={r:0,b:0,g:0},gs=new ua,G1=new nn;function V1(r,t,i,s,l,c,h){const d=new Ne(0);let m=c===!0?0:1,p,_,y=null,S=0,E=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?i:t).get(D)),D}function C(P){let D=!1;const H=b(P);H===null?v(d,m):H&&H.isColor&&(v(H,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?s.buffers.color.setClear(0,0,0,1,h):k==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(P,D){const H=b(D);H&&(H.isCubeTexture||H.mapping===Jc)?(_===void 0&&(_=new _i(new Ko(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Nr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,O,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),gs.copy(D.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(gs)),_.material.toneMapped=Ue.getTransfer(H.colorSpace)!==ke,(y!==H||S!==H.version||E!==r.toneMapping)&&(_.material.needsUpdate=!0,y=H,S=H.version,E=r.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new _i(new $c(2,2),new Ya({name:"BackgroundMaterial",uniforms:Nr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(H.colorSpace)!==ke,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(y!==H||S!==H.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,y=H,S=H.version,E=r.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function v(P,D){P.getRGB(Cc,vv(r)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,D,h)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(d,m)},render:C,addToRenderList:x,dispose:B}}function k1(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(U,V,Z,it,mt){let lt=!1;const I=y(it,Z,V);c!==I&&(c=I,p(c.object)),lt=E(U,it,Z,mt),lt&&b(U,it,Z,mt),mt!==null&&t.update(mt,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(U,V,Z,it),mt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return r.createVertexArray()}function p(U){return r.bindVertexArray(U)}function _(U){return r.deleteVertexArray(U)}function y(U,V,Z){const it=Z.wireframe===!0;let mt=s[U.id];mt===void 0&&(mt={},s[U.id]=mt);let lt=mt[V.id];lt===void 0&&(lt={},mt[V.id]=lt);let I=lt[it];return I===void 0&&(I=S(m()),lt[it]=I),I}function S(U){const V=[],Z=[],it=[];for(let mt=0;mt<i;mt++)V[mt]=0,Z[mt]=0,it[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:it,object:U,attributes:{},index:null}}function E(U,V,Z,it){const mt=c.attributes,lt=V.attributes;let I=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){const N=mt[q];let tt=lt[q];if(tt===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(tt=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(tt=U.instanceColor)),N===void 0||N.attribute!==tt||tt&&N.data!==tt.data)return!0;I++}return c.attributesNum!==I||c.index!==it}function b(U,V,Z,it){const mt={},lt=V.attributes;let I=0;const Y=Z.getAttributes();for(const q in Y)if(Y[q].location>=0){let N=lt[q];N===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(N=U.instanceColor));const tt={};tt.attribute=N,N&&N.data&&(tt.data=N.data),mt[q]=tt,I++}c.attributes=mt,c.attributesNum=I,c.index=it}function C(){const U=c.newAttributes;for(let V=0,Z=U.length;V<Z;V++)U[V]=0}function x(U){v(U,0)}function v(U,V){const Z=c.newAttributes,it=c.enabledAttributes,mt=c.attributeDivisors;Z[U]=1,it[U]===0&&(r.enableVertexAttribArray(U),it[U]=1),mt[U]!==V&&(r.vertexAttribDivisor(U,V),mt[U]=V)}function B(){const U=c.newAttributes,V=c.enabledAttributes;for(let Z=0,it=V.length;Z<it;Z++)V[Z]!==U[Z]&&(r.disableVertexAttribArray(Z),V[Z]=0)}function P(U,V,Z,it,mt,lt,I){I===!0?r.vertexAttribIPointer(U,V,Z,mt,lt):r.vertexAttribPointer(U,V,Z,it,mt,lt)}function D(U,V,Z,it){C();const mt=it.attributes,lt=Z.getAttributes(),I=V.defaultAttributeValues;for(const Y in lt){const q=lt[Y];if(q.location>=0){let pt=mt[Y];if(pt===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(pt=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(pt=U.instanceColor)),pt!==void 0){const N=pt.normalized,tt=pt.itemSize,yt=t.get(pt);if(yt===void 0)continue;const Mt=yt.buffer,Nt=yt.type,kt=yt.bytesPerElement,et=Nt===r.INT||Nt===r.UNSIGNED_INT||pt.gpuType===Bd;if(pt.isInterleavedBufferAttribute){const _t=pt.data,wt=_t.stride,Kt=pt.offset;if(_t.isInstancedInterleavedBuffer){for(let Et=0;Et<q.locationSize;Et++)v(q.location+Et,_t.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Et=0;Et<q.locationSize;Et++)x(q.location+Et);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let Et=0;Et<q.locationSize;Et++)P(q.location+Et,tt/q.locationSize,Nt,N,wt*kt,(Kt+tt/q.locationSize*Et)*kt,et)}else{if(pt.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)v(q.location+_t,pt.meshPerAttribute);U.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let _t=0;_t<q.locationSize;_t++)x(q.location+_t);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let _t=0;_t<q.locationSize;_t++)P(q.location+_t,tt/q.locationSize,Nt,N,tt*kt,tt/q.locationSize*_t*kt,et)}}else if(I!==void 0){const N=I[Y];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(q.location,N);break;case 3:r.vertexAttrib3fv(q.location,N);break;case 4:r.vertexAttrib4fv(q.location,N);break;default:r.vertexAttrib1fv(q.location,N)}}}}B()}function H(){j();for(const U in s){const V=s[U];for(const Z in V){const it=V[Z];for(const mt in it)_(it[mt].object),delete it[mt];delete V[Z]}delete s[U]}}function k(U){if(s[U.id]===void 0)return;const V=s[U.id];for(const Z in V){const it=V[Z];for(const mt in it)_(it[mt].object),delete it[mt];delete V[Z]}delete s[U.id]}function O(U){for(const V in s){const Z=s[V];if(Z[U.id]===void 0)continue;const it=Z[U.id];for(const mt in it)_(it[mt].object),delete it[mt];delete Z[U.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:k,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:x,disableUnusedAttributes:B}}function j1(r,t,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,y){y!==0&&(r.drawArraysInstanced(s,p,_,y),i.update(_,s,y))}function d(p,_,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,y);let E=0;for(let b=0;b<y;b++)E+=_[b];i.update(E,s,1)}function m(p,_,y,S){if(y===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],_[b],S[b]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,y);let b=0;for(let C=0;C<y;C++)b+=_[C]*S[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function X1(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Ri&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const j=O===qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ca&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==oa&&!j)}function m(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),B=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,k=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:B,maxVaryings:P,maxFragmentUniforms:D,vertexTextures:H,maxSamples:k}}function W1(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Va,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||l;return l=S,s=y.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,S){i=_(y,S,0)},this.setState=function(y,S,E){const b=y.clippingPlanes,C=y.clipIntersection,x=y.clipShadows,v=r.get(y);if(!l||b===null||b.length===0||c&&!x)c?_(null):p();else{const B=c?0:s,P=B*4;let D=v.clippingState||null;m.value=D,D=_(b,S,P,E);for(let H=0;H!==P;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(y,S,E,b){const C=y!==null?y.length:0;let x=null;if(C!==0){if(x=m.value,b!==!0||x===null){const v=E+C*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,D=E;P!==C;++P,D+=4)h.copy(y[P]).applyMatrix4(B,d),h.normal.toArray(x,D),x[D+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,x}}function q1(r){let t=new WeakMap;function i(h,d){return d===td?h.mapping=wr:d===ed&&(h.mapping=Dr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===td||d===ed)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new qM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const br=4,M0=[.125,.215,.35,.446,.526,.582],ys=20,Oh=new eE,E0=new Ne;let Ph=null,zh=0,Ih=0,Bh=!1;const vs=(1+Math.sqrt(5))/2,yr=1/vs,b0=[new J(-vs,yr,0),new J(vs,yr,0),new J(-yr,0,vs),new J(yr,0,vs),new J(0,vs,-yr),new J(0,vs,yr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],Y1=new J;class T0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Y1}=c;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,zh,Ih),this._renderer.xr.enabled=Bh,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===wr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:qo,format:Ri,colorSpace:Ur,depthBuffer:!1},l=A0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=K1(c,t,i)}return l}_compileMaterial(t){const i=new _i(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,s,l,c){const m=new oi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,E=y.toneMapping;y.getClearColor(E0),y.toneMapping=Xa,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null));const C=new Yc({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),x=new _i(new Ko,C);let v=!1;const B=t.background;B?B.isColor&&(C.color.copy(B),t.background=null,v=!0):(C.color.copy(E0),v=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):D===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const H=this._cubeSize;wc(l,D*H,P>2?H:0,H,H),y.setRenderTarget(l),v&&y.render(x,m),y.render(t,m)}x.geometry.dispose(),x.material.dispose(),y.toneMapping=E,y.autoClear=S,t.background=B}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===wr||t.mapping===Dr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new _i(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=b0[(l-c-1)%b0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new _i(this._lodPlanes[l],p),S=p.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ys-1),C=c/b,x=isFinite(c)?1+Math.floor(_*C):ys;x>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ys}`);const v=[];let B=0;for(let O=0;O<ys;++O){const j=O/C,w=Math.exp(-j*j/2);v.push(w),O===0?B+=w:O<x&&(B+=2*w)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;S.envMap.value=t.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-s;const D=this._sizeLods[l],H=3*D*(l>P-br?l-P+br:0),k=4*(this._cubeSize-D);wc(i,H,k,3*D,2*D),m.setRenderTarget(i),m.render(y,Oh)}}function Z1(r){const t=[],i=[],s=[];let l=r;const c=r-br+1+M0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-br?m=M0[h-r+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),_=-p,y=1+p,S=[_,_,y,_,y,y,_,_,y,y,_,y],E=6,b=6,C=3,x=2,v=1,B=new Float32Array(C*b*E),P=new Float32Array(x*b*E),D=new Float32Array(v*b*E);for(let k=0;k<E;k++){const O=k%3*2/3-1,j=k>2?0:-1,w=[O,j,0,O+2/3,j,0,O+2/3,j+1,0,O,j,0,O+2/3,j+1,0,O,j+1,0];B.set(w,C*b*k),P.set(S,x*b*k);const U=[k,k,k,k,k,k];D.set(U,v*b*k)}const H=new li;H.setAttribute("position",new vi(B,C)),H.setAttribute("uv",new vi(P,x)),H.setAttribute("faceIndex",new vi(D,v)),t.push(H),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function A0(r,t,i){const s=new Ts(r,t,i);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function K1(r,t,i){const s=new Float32Array(ys),l=new J(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function R0(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

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
		`,blending:ja,depthTest:!1,depthWrite:!1})}function C0(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function Yd(){return`

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
	`}function Q1(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===td||m===ed,_=m===wr||m===Dr;if(p||_){let y=t.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new T0(r)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),y.texture;if(y!==void 0)return y.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new T0(r)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function J1(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function $1(r,t,i,s){const l={},c=new WeakMap;function h(y){const S=y.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(t.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(y){const S=y.attributes;for(const E in S)t.update(S[E],r.ARRAY_BUFFER)}function p(y){const S=[],E=y.index,b=y.attributes.position;let C=0;if(E!==null){const B=E.array;C=E.version;for(let P=0,D=B.length;P<D;P+=3){const H=B[P+0],k=B[P+1],O=B[P+2];S.push(H,k,k,O,O,H)}}else if(b!==void 0){const B=b.array;C=b.version;for(let P=0,D=B.length/3-1;P<D;P+=3){const H=P+0,k=P+1,O=P+2;S.push(H,k,k,O,O,H)}}else return;const x=new(dv(S)?_v:gv)(S,1);x.version=C;const v=c.get(y);v&&t.remove(v),c.set(y,x)}function _(y){const S=c.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&p(y)}else p(y);return c.get(y)}return{get:d,update:m,getWireframeAttribute:_}}function tT(r,t,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function m(S,E){r.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,S*h,b),i.update(E,s,b))}function _(S,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,b);let x=0;for(let v=0;v<b;v++)x+=E[v];i.update(x,s,1)}function y(S,E,b,C){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/h,E[v],C[v]);else{x.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,C,0,b);let v=0;for(let B=0;B<b;B++)v+=E[B]*C[B];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function eT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(r,t,i){const s=new WeakMap,l=new cn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==y){let U=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",U)};var E=U;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),x===!0&&(D=3);let H=d.attributes.position.count*D,k=1;H>t.maxTextureSize&&(k=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const O=new Float32Array(H*k*4*y),j=new pv(O,H,k,y);j.type=oa,j.needsUpdate=!0;const w=D*4;for(let V=0;V<y;V++){const Z=v[V],it=B[V],mt=P[V],lt=H*k*4*V;for(let I=0;I<Z.count;I++){const Y=I*w;b===!0&&(l.fromBufferAttribute(Z,I),O[lt+Y+0]=l.x,O[lt+Y+1]=l.y,O[lt+Y+2]=l.z,O[lt+Y+3]=0),C===!0&&(l.fromBufferAttribute(it,I),O[lt+Y+4]=l.x,O[lt+Y+5]=l.y,O[lt+Y+6]=l.z,O[lt+Y+7]=0),x===!0&&(l.fromBufferAttribute(mt,I),O[lt+Y+8]=l.x,O[lt+Y+9]=l.y,O[lt+Y+10]=l.z,O[lt+Y+11]=mt.itemSize===4?l.w:1)}}S={count:y,texture:j,size:new ve(H,k)},s.set(d,S),d.addEventListener("dispose",U)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function iT(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,_=m.geometry,y=t.get(m,_);if(l.get(y)!==p&&(t.update(y),l.set(y,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return y}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const wv=new Kn,w0=new Av(1,1),Dv=new pv,Uv=new DM,Nv=new yv,D0=[],U0=[],N0=new Float32Array(16),L0=new Float32Array(9),O0=new Float32Array(4);function Pr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=D0[l];if(c===void 0&&(c=new Float32Array(l),D0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function tu(r,t){let i=U0[t];i===void 0&&(i=new Int32Array(t),U0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function aT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function sT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function rT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function oT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function lT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;O0.set(s),r.uniformMatrix2fv(this.addr,!1,O0),vn(i,s)}}function cT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;L0.set(s),r.uniformMatrix3fv(this.addr,!1,L0),vn(i,s)}}function uT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;N0.set(s),r.uniformMatrix4fv(this.addr,!1,N0),vn(i,s)}}function fT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function hT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function dT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function pT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function mT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function gT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function _T(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function vT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function xT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(w0.compareFunction=fv,c=w0):c=wv,i.setTexture2D(t||c,l)}function yT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Uv,l)}function ST(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nv,l)}function MT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Dv,l)}function ET(r){switch(r){case 5126:return aT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return _T;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function bT(r,t){r.uniform1fv(this.addr,t)}function TT(r,t){const i=Pr(t,this.size,2);r.uniform2fv(this.addr,i)}function AT(r,t){const i=Pr(t,this.size,3);r.uniform3fv(this.addr,i)}function RT(r,t){const i=Pr(t,this.size,4);r.uniform4fv(this.addr,i)}function CT(r,t){const i=Pr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function wT(r,t){const i=Pr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function DT(r,t){const i=Pr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function UT(r,t){r.uniform1iv(this.addr,t)}function NT(r,t){r.uniform2iv(this.addr,t)}function LT(r,t){r.uniform3iv(this.addr,t)}function OT(r,t){r.uniform4iv(this.addr,t)}function PT(r,t){r.uniform1uiv(this.addr,t)}function zT(r,t){r.uniform2uiv(this.addr,t)}function IT(r,t){r.uniform3uiv(this.addr,t)}function BT(r,t){r.uniform4uiv(this.addr,t)}function FT(r,t,i){const s=this.cache,l=t.length,c=tu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||wv,c[h])}function HT(r,t,i){const s=this.cache,l=t.length,c=tu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Uv,c[h])}function GT(r,t,i){const s=this.cache,l=t.length,c=tu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Nv,c[h])}function VT(r,t,i){const s=this.cache,l=t.length,c=tu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Dv,c[h])}function kT(r){switch(r){case 5126:return bT;case 35664:return TT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return NT;case 35668:case 35672:return LT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return IT;case 36296:return BT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class jT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ET(i.type)}}class XT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kT(i.type)}}class WT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function P0(r,t){r.seq.push(t),r.map[t.id]=t}function qT(r,t,i){const s=r.name,l=s.length;for(Fh.lastIndex=0;;){const c=Fh.exec(s),h=Fh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){P0(i,p===void 0?new jT(d,r,t):new XT(d,r,t));break}else{let y=i.map[d];y===void 0&&(y=new WT(d),P0(i,y)),i=y}}}class Gc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);qT(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function z0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const YT=37297;let ZT=0;function KT(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const I0=new pe;function QT(r){Ue._getMatrix(I0,Ue.workingColorSpace,r);const t=`mat3( ${I0.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(r)){case Xc:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function B0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+KT(r.getShaderSource(t),d)}else return c}function JT(r,t){const i=QT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $T(r,t){let i;switch(t){case VS:i="Linear";break;case kS:i="Reinhard";break;case jS:i="Cineon";break;case XS:i="ACESFilmic";break;case qS:i="AgX";break;case YS:i="Neutral";break;case WS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new J;function tA(){Ue.getLuminanceCoefficients(Dc);const r=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function nA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function iA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Bo(r){return r!==""}function F0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Od(r){return r.replace(aA,rA)}const sA=new Map;function rA(r,t){let i=_e[t];if(i===void 0){const s=sA.get(t);if(s!==void 0)i=_e[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Od(i)}const oA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(r){return r.replace(oA,lA)}function lA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function cA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===SS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function uA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wr:case Dr:t="ENVMAP_TYPE_CUBE";break;case Jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function hA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ev:t="ENVMAP_BLENDING_MULTIPLY";break;case HS:t="ENVMAP_BLENDING_MIX";break;case GS:t="ENVMAP_BLENDING_ADD";break}return t}function dA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function pA(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=cA(i),p=uA(i),_=fA(i),y=hA(i),S=dA(i),E=eA(i),b=nA(c),C=l.createProgram();let x,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(x=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?_e.tonemapping_pars_fragment:"",i.toneMapping!==Xa?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,JT("linearToOutputTexel",i.outputColorSpace),tA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Od(h),h=F0(h,i),h=H0(h,i),d=Od(d),d=F0(d,i),d=H0(d,i),h=G0(h),d=G0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=B+x+h,D=B+v+d,H=z0(l,l.VERTEX_SHADER,P),k=z0(l,l.FRAGMENT_SHADER,D);l.attachShader(C,H),l.attachShader(C,k),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(V){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(H)||"",mt=l.getShaderInfoLog(k)||"",lt=Z.trim(),I=it.trim(),Y=mt.trim();let q=!0,pt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,H,k);else{const N=B0(l,H,"vertex"),tt=B0(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+N+`
`+tt)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(I===""||Y==="")&&(pt=!1);pt&&(V.diagnostics={runnable:q,programLog:lt,vertexShader:{log:I,prefix:x},fragmentShader:{log:Y,prefix:v}})}l.deleteShader(H),l.deleteShader(k),j=new Gc(l,C),w=iA(l,C)}let j;this.getUniforms=function(){return j===void 0&&O(this),j};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let U=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=l.getProgramParameter(C,YT)),U},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZT++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=k,this}let mA=0;class gA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new _A(t),i.set(t,s)),s}}class _A{constructor(t){this.id=mA++,this.code=t,this.usedTimes=0}}function vA(r,t,i,s,l,c,h){const d=new Wd,m=new gA,p=new Set,_=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function x(w,U,V,Z,it){const mt=Z.fog,lt=it.geometry,I=w.isMeshStandardMaterial?Z.environment:null,Y=(w.isMeshStandardMaterial?i:t).get(w.envMap||I),q=Y&&Y.mapping===Jc?Y.image.height:null,pt=b[w.type];w.precision!==null&&(E=l.getMaxPrecision(w.precision),E!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",E,"instead."));const N=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,tt=N!==void 0?N.length:0;let yt=0;lt.morphAttributes.position!==void 0&&(yt=1),lt.morphAttributes.normal!==void 0&&(yt=2),lt.morphAttributes.color!==void 0&&(yt=3);let Mt,Nt,kt,et;if(pt){const se=Pi[pt];Mt=se.vertexShader,Nt=se.fragmentShader}else Mt=w.vertexShader,Nt=w.fragmentShader,m.update(w),kt=m.getVertexShaderID(w),et=m.getFragmentShaderID(w);const _t=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Kt=it.isInstancedMesh===!0,Et=it.isBatchedMesh===!0,Vt=!!w.map,ye=!!w.matcap,F=!!Y,he=!!w.aoMap,oe=!!w.lightMap,te=!!w.bumpMap,Ht=!!w.normalMap,Ie=!!w.displacementMap,jt=!!w.emissiveMap,fe=!!w.metalnessMap,Xe=!!w.roughnessMap,Ze=w.anisotropy>0,z=w.clearcoat>0,T=w.dispersion>0,at=w.iridescence>0,dt=w.sheen>0,xt=w.transmission>0,ht=Ze&&!!w.anisotropyMap,Ft=z&&!!w.clearcoatMap,bt=z&&!!w.clearcoatNormalMap,Xt=z&&!!w.clearcoatRoughnessMap,qt=at&&!!w.iridescenceMap,Tt=at&&!!w.iridescenceThicknessMap,Ot=dt&&!!w.sheenColorMap,Jt=dt&&!!w.sheenRoughnessMap,Yt=!!w.specularMap,Ut=!!w.specularColorMap,ae=!!w.specularIntensityMap,W=xt&&!!w.transmissionMap,Rt=xt&&!!w.thicknessMap,Dt=!!w.gradientMap,Gt=!!w.alphaMap,At=w.alphaTest>0,L=!!w.alphaHash,ct=!!w.extensions;let Pt=Xa;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Pt=r.toneMapping);const ne={shaderID:pt,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Nt,defines:w.defines,customVertexShaderID:kt,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:E,batching:Et,batchingColor:Et&&it._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&it.instanceColor!==null,instancingMorph:Kt&&it.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_t===null?r.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Ur,alphaToCoverage:!!w.alphaToCoverage,map:Vt,matcap:ye,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:q,aoMap:he,lightMap:oe,bumpMap:te,normalMap:Ht,displacementMap:S&&Ie,emissiveMap:jt,normalMapObjectSpace:Ht&&w.normalMapType===$S,normalMapTangentSpace:Ht&&w.normalMapType===JS,metalnessMap:fe,roughnessMap:Xe,anisotropy:Ze,anisotropyMap:ht,clearcoat:z,clearcoatMap:Ft,clearcoatNormalMap:bt,clearcoatRoughnessMap:Xt,dispersion:T,iridescence:at,iridescenceMap:qt,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Ot,sheenRoughnessMap:Jt,specularMap:Yt,specularColorMap:Ut,specularIntensityMap:ae,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:Dt,opaque:w.transparent===!1&&w.blending===Ar&&w.alphaToCoverage===!1,alphaMap:Gt,alphaTest:At,alphaHash:L,combine:w.combine,mapUv:Vt&&C(w.map.channel),aoMapUv:he&&C(w.aoMap.channel),lightMapUv:oe&&C(w.lightMap.channel),bumpMapUv:te&&C(w.bumpMap.channel),normalMapUv:Ht&&C(w.normalMap.channel),displacementMapUv:Ie&&C(w.displacementMap.channel),emissiveMapUv:jt&&C(w.emissiveMap.channel),metalnessMapUv:fe&&C(w.metalnessMap.channel),roughnessMapUv:Xe&&C(w.roughnessMap.channel),anisotropyMapUv:ht&&C(w.anisotropyMap.channel),clearcoatMapUv:Ft&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:bt&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&C(w.sheenRoughnessMap.channel),specularMapUv:Yt&&C(w.specularMap.channel),specularColorMapUv:Ut&&C(w.specularColorMap.channel),specularIntensityMapUv:ae&&C(w.specularIntensityMap.channel),transmissionMapUv:W&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:Gt&&C(w.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Ht||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!lt.attributes.uv&&(Vt||Gt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:wt,skinning:it.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:yt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Vt&&w.map.isVideoTexture===!0&&Ue.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:jt&&w.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===Zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ct&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&w.extensions.multiDraw===!0||Et)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ne.vertexUv1s=p.has(1),ne.vertexUv2s=p.has(2),ne.vertexUv3s=p.has(3),p.clear(),ne}function v(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)U.push(V),U.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(B(U,w),P(U,w),U.push(r.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function B(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function P(w,U){d.disableAll(),U.supportsVertexTextures&&d.enable(0),U.instancing&&d.enable(1),U.instancingColor&&d.enable(2),U.instancingMorph&&d.enable(3),U.matcap&&d.enable(4),U.envMap&&d.enable(5),U.normalMapObjectSpace&&d.enable(6),U.normalMapTangentSpace&&d.enable(7),U.clearcoat&&d.enable(8),U.iridescence&&d.enable(9),U.alphaTest&&d.enable(10),U.vertexColors&&d.enable(11),U.vertexAlphas&&d.enable(12),U.vertexUv1s&&d.enable(13),U.vertexUv2s&&d.enable(14),U.vertexUv3s&&d.enable(15),U.vertexTangents&&d.enable(16),U.anisotropy&&d.enable(17),U.alphaHash&&d.enable(18),U.batching&&d.enable(19),U.dispersion&&d.enable(20),U.batchingColor&&d.enable(21),U.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const U=b[w.type];let V;if(U){const Z=Pi[U];V=kM.clone(Z.uniforms)}else V=w.uniforms;return V}function H(w,U){let V;for(let Z=0,it=_.length;Z<it;Z++){const mt=_[Z];if(mt.cacheKey===U){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new pA(r,U,w,c),_.push(V)),V}function k(w){if(--w.usedTimes===0){const U=_.indexOf(w);_[U]=_[_.length-1],_.pop(),w.destroy()}}function O(w){m.remove(w)}function j(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:k,releaseShaderCache:O,programs:_,dispose:j}}function xA(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function yA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function k0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function j0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(y,S,E,b,C,x){let v=r[t];return v===void 0?(v={id:y.id,object:y,geometry:S,material:E,groupOrder:b,renderOrder:y.renderOrder,z:C,group:x},r[t]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=E,v.groupOrder=b,v.renderOrder=y.renderOrder,v.z=C,v.group=x),t++,v}function d(y,S,E,b,C,x){const v=h(y,S,E,b,C,x);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(y,S,E,b,C,x){const v=h(y,S,E,b,C,x);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(y,S){i.length>1&&i.sort(y||yA),s.length>1&&s.sort(S||k0),l.length>1&&l.sort(S||k0)}function _(){for(let y=t,S=r.length;y<S;y++){const E=r[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function SA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new j0,r.set(s,[h])):l>=c.length?(h=new j0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function MA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Ne};break;case"SpotLight":i={position:new J,direction:new J,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new J,halfWidth:new J,halfHeight:new J};break}return r[t.id]=i,i}}}function EA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let bA=0;function TA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function AA(r){const t=new MA,i=EA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new nn,h=new nn;function d(p){let _=0,y=0,S=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let E=0,b=0,C=0,x=0,v=0,B=0,P=0,D=0,H=0,k=0,O=0;p.sort(TA);for(let w=0,U=p.length;w<U;w++){const V=p[w],Z=V.color,it=V.intensity,mt=V.distance,lt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=Z.r*it,y+=Z.g*it,S+=Z.b*it;else if(V.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(V.sh.coefficients[I],it);O++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Y=V.shadow,q=i.get(V);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,s.directionalShadow[E]=q,s.directionalShadowMap[E]=lt,s.directionalShadowMatrix[E]=V.shadow.matrix,B++}s.directional[E]=I,E++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(Z).multiplyScalar(it),I.distance=mt,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,s.spot[C]=I;const Y=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,Y.updateMatrices(V),V.castShadow&&k++),s.spotLightMatrix[C]=Y.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,s.spotShadow[C]=q,s.spotShadowMap[C]=lt,D++}C++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(Z).multiplyScalar(it),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),s.rectArea[x]=I,x++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const Y=V.shadow,q=i.get(V);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,s.pointShadow[b]=q,s.pointShadowMap[b]=lt,s.pointShadowMatrix[b]=V.shadow.matrix,P++}s.point[b]=I,b++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(it),I.groundColor.copy(V.groundColor).multiplyScalar(it),s.hemi[v]=I,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=S;const j=s.hash;(j.directionalLength!==E||j.pointLength!==b||j.spotLength!==C||j.rectAreaLength!==x||j.hemiLength!==v||j.numDirectionalShadows!==B||j.numPointShadows!==P||j.numSpotShadows!==D||j.numSpotMaps!==H||j.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=x,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+H-k,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=O,j.directionalLength=E,j.pointLength=b,j.spotLength=C,j.rectAreaLength=x,j.hemiLength=v,j.numDirectionalShadows=B,j.numPointShadows=P,j.numSpotShadows=D,j.numSpotMaps=H,j.numLightProbes=O,s.version=bA++)}function m(p,_){let y=0,S=0,E=0,b=0,C=0;const x=_.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const P=p[v];if(P.isDirectionalLight){const D=s.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),y++}else if(P.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),E++}else if(P.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),h.identity(),c.copy(P.matrixWorld),c.premultiply(x),h.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const D=s.point[S];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(x),S++}else if(P.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(x),C++}}}return{setup:d,setupView:m,state:s}}function X0(r){const t=new AA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function RA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new X0(r),t.set(l,[d])):c>=h.length?(d=new X0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const CA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
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
}`;function DA(r,t,i){let s=new Sv;const l=new ve,c=new ve,h=new cn,d=new $M({depthPacking:QS}),m=new tE,p={},_=i.maxTextureSize,y={[qa]:Zn,[Zn]:qa,[ra]:ra},S=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:CA,fragmentShader:wA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const b=new li;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new _i(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let v=this.type;this.render=function(k,O,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const w=r.getRenderTarget(),U=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ja),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const it=v!==aa&&this.type===aa,mt=v===aa&&this.type!==aa;for(let lt=0,I=k.length;lt<I;lt++){const Y=k[lt],q=Y.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const pt=q.getFrameExtents();if(l.multiply(pt),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/pt.x),l.x=c.x*pt.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/pt.y),l.y=c.y*pt.y,q.mapSize.y=c.y)),q.map===null||it===!0||mt===!0){const tt=this.type!==aa?{minFilter:Ci,magFilter:Ci}:{};q.map!==null&&q.map.dispose(),q.map=new Ts(l.x,l.y,tt),q.map.texture.name=Y.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const N=q.getViewportCount();for(let tt=0;tt<N;tt++){const yt=q.getViewport(tt);h.set(c.x*yt.x,c.y*yt.y,c.x*yt.z,c.y*yt.w),Z.viewport(h),q.updateMatrices(Y,tt),s=q.getFrustum(),D(O,j,q.camera,Y,this.type)}q.isPointLightShadow!==!0&&this.type===aa&&B(q,j),q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(w,U,V)};function B(k,O){const j=t.update(C);S.defines.VSM_SAMPLES!==k.blurSamples&&(S.defines.VSM_SAMPLES=k.blurSamples,E.defines.VSM_SAMPLES=k.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ts(l.x,l.y)),S.uniforms.shadow_pass.value=k.map.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(O,null,j,S,C,null),E.uniforms.shadow_pass.value=k.mapPass.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(O,null,j,E,C,null)}function P(k,O,j,w){let U=null;const V=j.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(V!==void 0)U=V;else if(U=j.isPointLight===!0?m:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=U.uuid,it=O.uuid;let mt=p[Z];mt===void 0&&(mt={},p[Z]=mt);let lt=mt[it];lt===void 0&&(lt=U.clone(),mt[it]=lt,O.addEventListener("dispose",H)),U=lt}if(U.visible=O.visible,U.wireframe=O.wireframe,w===aa?U.side=O.shadowSide!==null?O.shadowSide:O.side:U.side=O.shadowSide!==null?O.shadowSide:y[O.side],U.alphaMap=O.alphaMap,U.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,U.map=O.map,U.clipShadows=O.clipShadows,U.clippingPlanes=O.clippingPlanes,U.clipIntersection=O.clipIntersection,U.displacementMap=O.displacementMap,U.displacementScale=O.displacementScale,U.displacementBias=O.displacementBias,U.wireframeLinewidth=O.wireframeLinewidth,U.linewidth=O.linewidth,j.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const Z=r.properties.get(U);Z.light=j}return U}function D(k,O,j,w,U){if(k.visible===!1)return;if(k.layers.test(O.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&U===aa)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,k.matrixWorld);const it=t.update(k),mt=k.material;if(Array.isArray(mt)){const lt=it.groups;for(let I=0,Y=lt.length;I<Y;I++){const q=lt[I],pt=mt[q.materialIndex];if(pt&&pt.visible){const N=P(k,pt,w,U);k.onBeforeShadow(r,k,O,j,it,N,q),r.renderBufferDirect(j,null,it,N,k,q),k.onAfterShadow(r,k,O,j,it,N,q)}}}else if(mt.visible){const lt=P(k,mt,w,U);k.onBeforeShadow(r,k,O,j,it,lt,null),r.renderBufferDirect(j,null,it,lt,k,null),k.onAfterShadow(r,k,O,j,it,lt,null)}}const Z=k.children;for(let it=0,mt=Z.length;it<mt;it++)D(Z[it],O,j,w,U)}function H(k){k.target.removeEventListener("dispose",H);for(const j in p){const w=p[j],U=k.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}const UA={[qh]:Yh,[Zh]:Jh,[Kh]:$h,[Cr]:Qh,[Yh]:qh,[Jh]:Zh,[$h]:Kh,[Qh]:Cr};function NA(r,t){function i(){let W=!1;const Rt=new cn;let Dt=null;const Gt=new cn(0,0,0,0);return{setMask:function(At){Dt!==At&&!W&&(r.colorMask(At,At,At,At),Dt=At)},setLocked:function(At){W=At},setClear:function(At,L,ct,Pt,ne){ne===!0&&(At*=Pt,L*=Pt,ct*=Pt),Rt.set(At,L,ct,Pt),Gt.equals(Rt)===!1&&(r.clearColor(At,L,ct,Pt),Gt.copy(Rt))},reset:function(){W=!1,Dt=null,Gt.set(-1,0,0,0)}}}function s(){let W=!1,Rt=!1,Dt=null,Gt=null,At=null;return{setReversed:function(L){if(Rt!==L){const ct=t.get("EXT_clip_control");L?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),Rt=L;const Pt=At;At=null,this.setClear(Pt)}},getReversed:function(){return Rt},setTest:function(L){L?_t(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(L){Dt!==L&&!W&&(r.depthMask(L),Dt=L)},setFunc:function(L){if(Rt&&(L=UA[L]),Gt!==L){switch(L){case qh:r.depthFunc(r.NEVER);break;case Yh:r.depthFunc(r.ALWAYS);break;case Zh:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case Kh:r.depthFunc(r.EQUAL);break;case Qh:r.depthFunc(r.GEQUAL);break;case Jh:r.depthFunc(r.GREATER);break;case $h:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Gt=L}},setLocked:function(L){W=L},setClear:function(L){At!==L&&(Rt&&(L=1-L),r.clearDepth(L),At=L)},reset:function(){W=!1,Dt=null,Gt=null,At=null,Rt=!1}}}function l(){let W=!1,Rt=null,Dt=null,Gt=null,At=null,L=null,ct=null,Pt=null,ne=null;return{setTest:function(se){W||(se?_t(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(se){Rt!==se&&!W&&(r.stencilMask(se),Rt=se)},setFunc:function(se,Oe,$e){(Dt!==se||Gt!==Oe||At!==$e)&&(r.stencilFunc(se,Oe,$e),Dt=se,Gt=Oe,At=$e)},setOp:function(se,Oe,$e){(L!==se||ct!==Oe||Pt!==$e)&&(r.stencilOp(se,Oe,$e),L=se,ct=Oe,Pt=$e)},setLocked:function(se){W=se},setClear:function(se){ne!==se&&(r.clearStencil(se),ne=se)},reset:function(){W=!1,Rt=null,Dt=null,Gt=null,At=null,L=null,ct=null,Pt=null,ne=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},y={},S=new WeakMap,E=[],b=null,C=!1,x=null,v=null,B=null,P=null,D=null,H=null,k=null,O=new Ne(0,0,0),j=0,w=!1,U=null,V=null,Z=null,it=null,mt=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Y=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=Y>=2);let pt=null,N={};const tt=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Mt=new cn().fromArray(tt),Nt=new cn().fromArray(yt);function kt(W,Rt,Dt,Gt){const At=new Uint8Array(4),L=r.createTexture();r.bindTexture(W,L),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<Dt;ct++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Rt,0,r.RGBA,1,1,Gt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(Rt+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return L}const et={};et[r.TEXTURE_2D]=kt(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=kt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=kt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=kt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(r.DEPTH_TEST),h.setFunc(Cr),te(!1),Ht(G_),_t(r.CULL_FACE),he(ja);function _t(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function wt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Kt(W,Rt){return y[W]!==Rt?(r.bindFramebuffer(W,Rt),y[W]=Rt,W===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Rt),W===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Et(W,Rt){let Dt=E,Gt=!1;if(W){Dt=S.get(Rt),Dt===void 0&&(Dt=[],S.set(Rt,Dt));const At=W.textures;if(Dt.length!==At.length||Dt[0]!==r.COLOR_ATTACHMENT0){for(let L=0,ct=At.length;L<ct;L++)Dt[L]=r.COLOR_ATTACHMENT0+L;Dt.length=At.length,Gt=!0}}else Dt[0]!==r.BACK&&(Dt[0]=r.BACK,Gt=!0);Gt&&r.drawBuffers(Dt)}function Vt(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const ye={[xs]:r.FUNC_ADD,[ES]:r.FUNC_SUBTRACT,[bS]:r.FUNC_REVERSE_SUBTRACT};ye[TS]=r.MIN,ye[AS]=r.MAX;const F={[RS]:r.ZERO,[CS]:r.ONE,[wS]:r.SRC_COLOR,[Xh]:r.SRC_ALPHA,[PS]:r.SRC_ALPHA_SATURATE,[LS]:r.DST_COLOR,[US]:r.DST_ALPHA,[DS]:r.ONE_MINUS_SRC_COLOR,[Wh]:r.ONE_MINUS_SRC_ALPHA,[OS]:r.ONE_MINUS_DST_COLOR,[NS]:r.ONE_MINUS_DST_ALPHA,[zS]:r.CONSTANT_COLOR,[IS]:r.ONE_MINUS_CONSTANT_COLOR,[BS]:r.CONSTANT_ALPHA,[FS]:r.ONE_MINUS_CONSTANT_ALPHA};function he(W,Rt,Dt,Gt,At,L,ct,Pt,ne,se){if(W===ja){C===!0&&(wt(r.BLEND),C=!1);return}if(C===!1&&(_t(r.BLEND),C=!0),W!==MS){if(W!==x||se!==w){if((v!==xs||D!==xs)&&(r.blendEquation(r.FUNC_ADD),v=xs,D=xs),se)switch(W){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V_:r.blendFunc(r.ONE,r.ONE);break;case k_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case j_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case V_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}B=null,P=null,H=null,k=null,O.set(0,0,0),j=0,x=W,w=se}return}At=At||Rt,L=L||Dt,ct=ct||Gt,(Rt!==v||At!==D)&&(r.blendEquationSeparate(ye[Rt],ye[At]),v=Rt,D=At),(Dt!==B||Gt!==P||L!==H||ct!==k)&&(r.blendFuncSeparate(F[Dt],F[Gt],F[L],F[ct]),B=Dt,P=Gt,H=L,k=ct),(Pt.equals(O)===!1||ne!==j)&&(r.blendColor(Pt.r,Pt.g,Pt.b,ne),O.copy(Pt),j=ne),x=W,w=!1}function oe(W,Rt){W.side===ra?wt(r.CULL_FACE):_t(r.CULL_FACE);let Dt=W.side===Zn;Rt&&(Dt=!Dt),te(Dt),W.blending===Ar&&W.transparent===!1?he(ja):he(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Gt=W.stencilWrite;d.setTest(Gt),Gt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),jt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(W){U!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),U=W)}function Ht(W){W!==xS?(_t(r.CULL_FACE),W!==V&&(W===G_?r.cullFace(r.BACK):W===yS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),V=W}function Ie(W){W!==Z&&(I&&r.lineWidth(W),Z=W)}function jt(W,Rt,Dt){W?(_t(r.POLYGON_OFFSET_FILL),(it!==Rt||mt!==Dt)&&(r.polygonOffset(Rt,Dt),it=Rt,mt=Dt)):wt(r.POLYGON_OFFSET_FILL)}function fe(W){W?_t(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Xe(W){W===void 0&&(W=r.TEXTURE0+lt-1),pt!==W&&(r.activeTexture(W),pt=W)}function Ze(W,Rt,Dt){Dt===void 0&&(pt===null?Dt=r.TEXTURE0+lt-1:Dt=pt);let Gt=N[Dt];Gt===void 0&&(Gt={type:void 0,texture:void 0},N[Dt]=Gt),(Gt.type!==W||Gt.texture!==Rt)&&(pt!==Dt&&(r.activeTexture(Dt),pt=Dt),r.bindTexture(W,Rt||et[W]),Gt.type=W,Gt.texture=Rt)}function z(){const W=N[pt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(W){Mt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Mt.copy(W))}function Jt(W){Nt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Nt.copy(W))}function Yt(W,Rt){let Dt=p.get(Rt);Dt===void 0&&(Dt=new WeakMap,p.set(Rt,Dt));let Gt=Dt.get(W);Gt===void 0&&(Gt=r.getUniformBlockIndex(Rt,W.name),Dt.set(W,Gt))}function Ut(W,Rt){const Gt=p.get(Rt).get(W);m.get(Rt)!==Gt&&(r.uniformBlockBinding(Rt,Gt,W.__bindingPointIndex),m.set(Rt,Gt))}function ae(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},pt=null,N={},y={},S=new WeakMap,E=[],b=null,C=!1,x=null,v=null,B=null,P=null,D=null,H=null,k=null,O=new Ne(0,0,0),j=0,w=!1,U=null,V=null,Z=null,it=null,mt=null,Mt.set(0,0,r.canvas.width,r.canvas.height),Nt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_t,disable:wt,bindFramebuffer:Kt,drawBuffers:Et,useProgram:Vt,setBlending:he,setMaterial:oe,setFlipSided:te,setCullFace:Ht,setLineWidth:Ie,setPolygonOffset:jt,setScissorTest:fe,activeTexture:Xe,bindTexture:Ze,unbindTexture:z,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:qt,texImage3D:Tt,updateUBOMapping:Yt,uniformBlockBinding:Ut,texStorage2D:bt,texStorage3D:Xt,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ft,scissor:Ot,viewport:Jt,reset:ae}}function LA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,_=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,T){return E?new OffscreenCanvas(z,T):qc("canvas")}function C(z,T,at){let dt=1;const xt=Ze(z);if((xt.width>at||xt.height>at)&&(dt=at/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ht=Math.floor(dt*xt.width),Ft=Math.floor(dt*xt.height);y===void 0&&(y=b(ht,Ft));const bt=T?b(ht,Ft):y;return bt.width=ht,bt.height=Ft,bt.getContext("2d").drawImage(z,0,0,ht,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Ft+")."),bt}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),z;return z}function x(z){return z.generateMipmaps}function v(z){r.generateMipmap(z)}function B(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(z,T,at,dt,xt=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ht=T;if(T===r.RED&&(at===r.FLOAT&&(ht=r.R32F),at===r.HALF_FLOAT&&(ht=r.R16F),at===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.R8UI),at===r.UNSIGNED_SHORT&&(ht=r.R16UI),at===r.UNSIGNED_INT&&(ht=r.R32UI),at===r.BYTE&&(ht=r.R8I),at===r.SHORT&&(ht=r.R16I),at===r.INT&&(ht=r.R32I)),T===r.RG&&(at===r.FLOAT&&(ht=r.RG32F),at===r.HALF_FLOAT&&(ht=r.RG16F),at===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RG8UI),at===r.UNSIGNED_SHORT&&(ht=r.RG16UI),at===r.UNSIGNED_INT&&(ht=r.RG32UI),at===r.BYTE&&(ht=r.RG8I),at===r.SHORT&&(ht=r.RG16I),at===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),at===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),at===r.UNSIGNED_INT&&(ht=r.RGB32UI),at===r.BYTE&&(ht=r.RGB8I),at===r.SHORT&&(ht=r.RGB16I),at===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&(at===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),at===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),at===r.UNSIGNED_INT&&(ht=r.RGBA32UI),at===r.BYTE&&(ht=r.RGBA8I),at===r.SHORT&&(ht=r.RGBA16I),at===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&(at===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),at===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const Ft=xt?Xc:Ue.getTransfer(dt);at===r.FLOAT&&(ht=r.RGBA32F),at===r.HALF_FLOAT&&(ht=r.RGBA16F),at===r.UNSIGNED_BYTE&&(ht=Ft===ke?r.SRGB8_ALPHA8:r.RGBA8),at===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),at===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(z,T){let at;return z?T===null||T===Es||T===Vo?at=r.DEPTH24_STENCIL8:T===oa?at=r.DEPTH32F_STENCIL8:T===Go&&(at=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===Vo?at=r.DEPTH_COMPONENT24:T===oa?at=r.DEPTH_COMPONENT32F:T===Go&&(at=r.DEPTH_COMPONENT16),at}function H(z,T){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ci&&z.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function k(z){const T=z.target;T.removeEventListener("dispose",k),j(T),T.isVideoTexture&&_.delete(T)}function O(z){const T=z.target;T.removeEventListener("dispose",O),U(T)}function j(z){const T=s.get(z);if(T.__webglInit===void 0)return;const at=z.source,dt=S.get(at);if(dt){const xt=dt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(z),Object.keys(dt).length===0&&S.delete(at)}s.remove(z)}function w(z){const T=s.get(z);r.deleteTexture(T.__webglTexture);const at=z.source,dt=S.get(at);delete dt[T.__cacheKey],h.memory.textures--}function U(z){const T=s.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),s.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let xt=0;xt<T.__webglFramebuffer[dt].length;xt++)r.deleteFramebuffer(T.__webglFramebuffer[dt][xt]);else r.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)r.deleteFramebuffer(T.__webglFramebuffer[dt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=z.textures;for(let dt=0,xt=at.length;dt<xt;dt++){const ht=s.get(at[dt]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(at[dt])}s.remove(z)}let V=0;function Z(){V=0}function it(){const z=V;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),V+=1,z}function mt(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function lt(z,T){const at=s.get(z);if(z.isVideoTexture&&fe(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&at.__version!==z.version){const dt=z.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(at,z,T);return}}else z.isExternalTexture&&(at.__webglTexture=z.sourceTexture?z.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,at.__webglTexture,r.TEXTURE0+T)}function I(z,T){const at=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){et(at,z,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,at.__webglTexture,r.TEXTURE0+T)}function Y(z,T){const at=s.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&at.__version!==z.version){et(at,z,T);return}i.bindTexture(r.TEXTURE_3D,at.__webglTexture,r.TEXTURE0+T)}function q(z,T){const at=s.get(z);if(z.version>0&&at.__version!==z.version){_t(at,z,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,at.__webglTexture,r.TEXTURE0+T)}const pt={[nd]:r.REPEAT,[Ss]:r.CLAMP_TO_EDGE,[id]:r.MIRRORED_REPEAT},N={[Ci]:r.NEAREST,[ZS]:r.NEAREST_MIPMAP_NEAREST,[rc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[uh]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},tt={[tM]:r.NEVER,[rM]:r.ALWAYS,[eM]:r.LESS,[fv]:r.LEQUAL,[nM]:r.EQUAL,[sM]:r.GEQUAL,[iM]:r.GREATER,[aM]:r.NOTEQUAL};function yt(z,T){if(T.type===oa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===uh||T.magFilter===rc||T.magFilter===Ms||T.minFilter===zi||T.minFilter===uh||T.minFilter===rc||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,pt[T.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,pt[T.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,pt[T.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,tt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==rc&&T.minFilter!==Ms||T.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Mt(z,T){let at=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",k));const dt=T.source;let xt=S.get(dt);xt===void 0&&(xt={},S.set(dt,xt));const ht=mt(T);if(ht!==z.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,at=!0),xt[ht].usedTimes++;const Ft=xt[z.__cacheKey];Ft!==void 0&&(xt[z.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(T)),z.__cacheKey=ht,z.__webglTexture=xt[ht].texture}return at}function Nt(z,T,at){return Math.floor(Math.floor(z/at)/T)}function kt(z,T,at,dt){const ht=z.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,at,dt,T.data);else{ht.sort((Tt,Ot)=>Tt.start-Ot.start);let Ft=0;for(let Tt=1;Tt<ht.length;Tt++){const Ot=ht[Ft],Jt=ht[Tt],Yt=Ot.start+Ot.count,Ut=Nt(Jt.start,T.width,4),ae=Nt(Ot.start,T.width,4);Jt.start<=Yt+1&&Ut===ae&&Nt(Jt.start+Jt.count-1,T.width,4)===Ut?Ot.count=Math.max(Ot.count,Jt.start+Jt.count-Ot.start):(++Ft,ht[Ft]=Jt)}ht.length=Ft+1;const bt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),qt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Tt=0,Ot=ht.length;Tt<Ot;Tt++){const Jt=ht[Tt],Yt=Math.floor(Jt.start/4),Ut=Math.ceil(Jt.count/4),ae=Yt%T.width,W=Math.floor(Yt/T.width),Rt=Ut,Dt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ae,W,Rt,Dt,at,dt,T.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,bt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,qt)}}function et(z,T,at){let dt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=r.TEXTURE_3D);const xt=Mt(z,T),ht=T.source;i.bindTexture(dt,z.__webglTexture,r.TEXTURE0+at);const Ft=s.get(ht);if(ht.version!==Ft.__version||xt===!0){i.activeTexture(r.TEXTURE0+at);const bt=Ue.getPrimaries(Ue.workingColorSpace),Xt=T.colorSpace===ka?null:Ue.getPrimaries(T.colorSpace),qt=T.colorSpace===ka||bt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Tt=C(T.image,!1,l.maxTextureSize);Tt=Xe(T,Tt);const Ot=c.convert(T.format,T.colorSpace),Jt=c.convert(T.type);let Yt=P(T.internalFormat,Ot,Jt,T.colorSpace,T.isVideoTexture);yt(dt,T);let Ut;const ae=T.mipmaps,W=T.isVideoTexture!==!0,Rt=Ft.__version===void 0||xt===!0,Dt=ht.dataReady,Gt=H(T,Tt);if(T.isDepthTexture)Yt=D(T.format===jo,T.type),Rt&&(W?i.texStorage2D(r.TEXTURE_2D,1,Yt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Yt,Tt.width,Tt.height,0,Ot,Jt,null));else if(T.isDataTexture)if(ae.length>0){W&&Rt&&i.texStorage2D(r.TEXTURE_2D,Gt,Yt,ae[0].width,ae[0].height);for(let At=0,L=ae.length;At<L;At++)Ut=ae[At],W?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,Jt,Ut.data):i.texImage2D(r.TEXTURE_2D,At,Yt,Ut.width,Ut.height,0,Ot,Jt,Ut.data);T.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(r.TEXTURE_2D,Gt,Yt,Tt.width,Tt.height),Dt&&kt(T,Tt,Ot,Jt)):i.texImage2D(r.TEXTURE_2D,0,Yt,Tt.width,Tt.height,0,Ot,Jt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Yt,ae[0].width,ae[0].height,Tt.depth);for(let At=0,L=ae.length;At<L;At++)if(Ut=ae[At],T.format!==Ri)if(Ot!==null)if(W){if(Dt)if(T.layerUpdates.size>0){const ct=S0(Ut.width,Ut.height,T.format,T.type);for(const Pt of T.layerUpdates){const ne=Ut.data.subarray(Pt*ct/Ut.data.BYTES_PER_ELEMENT,(Pt+1)*ct/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,Pt,Ut.width,Ut.height,1,Ot,ne)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,Tt.depth,Ot,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Yt,Ut.width,Ut.height,Tt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Dt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ut.width,Ut.height,Tt.depth,Ot,Jt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,At,Yt,Ut.width,Ut.height,Tt.depth,0,Ot,Jt,Ut.data)}else{W&&Rt&&i.texStorage2D(r.TEXTURE_2D,Gt,Yt,ae[0].width,ae[0].height);for(let At=0,L=ae.length;At<L;At++)Ut=ae[At],T.format!==Ri?Ot!==null?W?Dt&&i.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,At,Yt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ut.width,Ut.height,Ot,Jt,Ut.data):i.texImage2D(r.TEXTURE_2D,At,Yt,Ut.width,Ut.height,0,Ot,Jt,Ut.data)}else if(T.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Gt,Yt,Tt.width,Tt.height,Tt.depth),Dt)if(T.layerUpdates.size>0){const At=S0(Tt.width,Tt.height,T.format,T.type);for(const L of T.layerUpdates){const ct=Tt.data.subarray(L*At/Tt.data.BYTES_PER_ELEMENT,(L+1)*At/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,L,Tt.width,Tt.height,1,Ot,Jt,ct)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,Jt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Yt,Tt.width,Tt.height,Tt.depth,0,Ot,Jt,Tt.data);else if(T.isData3DTexture)W?(Rt&&i.texStorage3D(r.TEXTURE_3D,Gt,Yt,Tt.width,Tt.height,Tt.depth),Dt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ot,Jt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Yt,Tt.width,Tt.height,Tt.depth,0,Ot,Jt,Tt.data);else if(T.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(r.TEXTURE_2D,Gt,Yt,Tt.width,Tt.height);else{let At=Tt.width,L=Tt.height;for(let ct=0;ct<Gt;ct++)i.texImage2D(r.TEXTURE_2D,ct,Yt,At,L,0,Ot,Jt,null),At>>=1,L>>=1}}else if(ae.length>0){if(W&&Rt){const At=Ze(ae[0]);i.texStorage2D(r.TEXTURE_2D,Gt,Yt,At.width,At.height)}for(let At=0,L=ae.length;At<L;At++)Ut=ae[At],W?Dt&&i.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot,Jt,Ut):i.texImage2D(r.TEXTURE_2D,At,Yt,Ot,Jt,Ut);T.generateMipmaps=!1}else if(W){if(Rt){const At=Ze(Tt);i.texStorage2D(r.TEXTURE_2D,Gt,Yt,At.width,At.height)}Dt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ot,Jt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Yt,Ot,Jt,Tt);x(T)&&v(dt),Ft.__version=ht.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function _t(z,T,at){if(T.image.length!==6)return;const dt=Mt(z,T),xt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+at);const ht=s.get(xt);if(xt.version!==ht.__version||dt===!0){i.activeTexture(r.TEXTURE0+at);const Ft=Ue.getPrimaries(Ue.workingColorSpace),bt=T.colorSpace===ka?null:Ue.getPrimaries(T.colorSpace),Xt=T.colorSpace===ka||Ft===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let L=0;L<6;L++)!qt&&!Tt?Ot[L]=C(T.image[L],!0,l.maxCubemapSize):Ot[L]=Tt?T.image[L].image:T.image[L],Ot[L]=Xe(T,Ot[L]);const Jt=Ot[0],Yt=c.convert(T.format,T.colorSpace),Ut=c.convert(T.type),ae=P(T.internalFormat,Yt,Ut,T.colorSpace),W=T.isVideoTexture!==!0,Rt=ht.__version===void 0||dt===!0,Dt=xt.dataReady;let Gt=H(T,Jt);yt(r.TEXTURE_CUBE_MAP,T);let At;if(qt){W&&Rt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ae,Jt.width,Jt.height);for(let L=0;L<6;L++){At=Ot[L].mipmaps;for(let ct=0;ct<At.length;ct++){const Pt=At[ct];T.format!==Ri?Yt!==null?W?Dt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct,0,0,Pt.width,Pt.height,Yt,Pt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct,ae,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct,0,0,Pt.width,Pt.height,Yt,Ut,Pt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct,ae,Pt.width,Pt.height,0,Yt,Ut,Pt.data)}}}else{if(At=T.mipmaps,W&&Rt){At.length>0&&Gt++;const L=Ze(Ot[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Gt,ae,L.width,L.height)}for(let L=0;L<6;L++)if(Tt){W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Ot[L].width,Ot[L].height,Yt,Ut,Ot[L].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ae,Ot[L].width,Ot[L].height,0,Yt,Ut,Ot[L].data);for(let ct=0;ct<At.length;ct++){const ne=At[ct].image[L].image;W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct+1,0,0,ne.width,ne.height,Yt,Ut,ne.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct+1,ae,ne.width,ne.height,0,Yt,Ut,ne.data)}}else{W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Yt,Ut,Ot[L]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,ae,Yt,Ut,Ot[L]);for(let ct=0;ct<At.length;ct++){const Pt=At[ct];W?Dt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct+1,0,0,Yt,Ut,Pt.image[L]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct+1,ae,Yt,Ut,Pt.image[L])}}}x(T)&&v(r.TEXTURE_CUBE_MAP),ht.__version=xt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function wt(z,T,at,dt,xt,ht){const Ft=c.convert(at.format,at.colorSpace),bt=c.convert(at.type),Xt=P(at.internalFormat,Ft,bt,at.colorSpace),qt=s.get(T),Tt=s.get(at);if(Tt.__renderTarget=T,!qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ht),Jt=Math.max(1,T.height>>ht);xt===r.TEXTURE_3D||xt===r.TEXTURE_2D_ARRAY?i.texImage3D(xt,ht,Xt,Ot,Jt,T.depth,0,Ft,bt,null):i.texImage2D(xt,ht,Xt,Ot,Jt,0,Ft,bt,null)}i.bindFramebuffer(r.FRAMEBUFFER,z),jt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,xt,Tt.__webglTexture,0,Ie(T)):(xt===r.TEXTURE_2D||xt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,xt,Tt.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Kt(z,T,at){if(r.bindRenderbuffer(r.RENDERBUFFER,z),T.depthBuffer){const dt=T.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,ht=D(T.stencilBuffer,xt),Ft=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=Ie(T);jt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,bt,ht,T.width,T.height):at?r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,z)}else{const dt=T.textures;for(let xt=0;xt<dt.length;xt++){const ht=dt[xt],Ft=c.convert(ht.format,ht.colorSpace),bt=c.convert(ht.type),Xt=P(ht.internalFormat,Ft,bt,ht.colorSpace),qt=Ie(T);at&&jt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,Xt,T.width,T.height):jt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt,Xt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const xt=dt.__webglTexture,ht=Ie(T);if(T.depthTexture.format===ko)jt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,xt,0);else if(T.depthTexture.format===jo)jt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Vt(z){const T=s.get(z),at=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const dt=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=dt}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const dt=z.texture.mipmaps;dt&&dt.length>0?Et(T.__webglFramebuffer[0],z):Et(T.__webglFramebuffer,z)}else if(at){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=r.createRenderbuffer(),Kt(T.__webglDepthbuffer[dt],z,!1);else{const xt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ht)}}else{const dt=z.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Kt(T.__webglDepthbuffer,z,!1);else{const xt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(z,T,at){const dt=s.get(z);T!==void 0&&wt(dt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),at!==void 0&&Vt(z)}function F(z){const T=z.texture,at=s.get(z),dt=s.get(T);z.addEventListener("dispose",O);const xt=z.textures,ht=z.isWebGLCubeRenderTarget===!0,Ft=xt.length>1;if(Ft||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=T.version,h.memory.textures++),ht){at.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[bt]=[];for(let Xt=0;Xt<T.mipmaps.length;Xt++)at.__webglFramebuffer[bt][Xt]=r.createFramebuffer()}else at.__webglFramebuffer[bt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let bt=0;bt<T.mipmaps.length;bt++)at.__webglFramebuffer[bt]=r.createFramebuffer()}else at.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let bt=0,Xt=xt.length;bt<Xt;bt++){const qt=s.get(xt[bt]);qt.__webglTexture===void 0&&(qt.__webglTexture=r.createTexture(),h.memory.textures++)}if(z.samples>0&&jt(z)===!1){at.__webglMultisampledFramebuffer=r.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let bt=0;bt<xt.length;bt++){const Xt=xt[bt];at.__webglColorRenderbuffer[bt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,at.__webglColorRenderbuffer[bt]);const qt=c.convert(Xt.format,Xt.colorSpace),Tt=c.convert(Xt.type),Ot=P(Xt.internalFormat,qt,Tt,Xt.colorSpace,z.isXRRenderTarget===!0),Jt=Ie(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Ot,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,at.__webglColorRenderbuffer[bt])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(at.__webglDepthRenderbuffer=r.createRenderbuffer(),Kt(at.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),yt(r.TEXTURE_CUBE_MAP,T);for(let bt=0;bt<6;bt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Xt=0;Xt<T.mipmaps.length;Xt++)wt(at.__webglFramebuffer[bt][Xt],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Xt);else wt(at.__webglFramebuffer[bt],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);x(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let bt=0,Xt=xt.length;bt<Xt;bt++){const qt=xt[bt],Tt=s.get(qt);let Ot=r.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ot=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ot,Tt.__webglTexture),yt(Ot,qt),wt(at.__webglFramebuffer,z,qt,r.COLOR_ATTACHMENT0+bt,Ot,0),x(qt)&&v(Ot)}i.unbindTexture()}else{let bt=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(bt=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,dt.__webglTexture),yt(bt,T),T.mipmaps&&T.mipmaps.length>0)for(let Xt=0;Xt<T.mipmaps.length;Xt++)wt(at.__webglFramebuffer[Xt],z,T,r.COLOR_ATTACHMENT0,bt,Xt);else wt(at.__webglFramebuffer,z,T,r.COLOR_ATTACHMENT0,bt,0);x(T)&&v(bt),i.unbindTexture()}z.depthBuffer&&Vt(z)}function he(z){const T=z.textures;for(let at=0,dt=T.length;at<dt;at++){const xt=T[at];if(x(xt)){const ht=B(z),Ft=s.get(xt).__webglTexture;i.bindTexture(ht,Ft),v(ht),i.unbindTexture()}}}const oe=[],te=[];function Ht(z){if(z.samples>0){if(jt(z)===!1){const T=z.textures,at=z.width,dt=z.height;let xt=r.COLOR_BUFFER_BIT;const ht=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=s.get(z),bt=T.length>1;if(bt)for(let qt=0;qt<T.length;qt++)i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Xt=z.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(xt|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(xt|=r.STENCIL_BUFFER_BIT)),bt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[qt]);const Tt=s.get(T[qt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,at,dt,0,0,at,dt,xt,r.NEAREST),m===!0&&(oe.length=0,te.length=0,oe.push(r.COLOR_ATTACHMENT0+qt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(oe.push(ht),te.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),bt)for(let qt=0;qt<T.length;qt++){i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[qt]);const Tt=s.get(T[qt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+qt,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const T=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ie(z){return Math.min(l.maxSamples,z.samples)}function jt(z){const T=s.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function fe(z){const T=h.render.frame;_.get(z)!==T&&(_.set(z,T),z.update())}function Xe(z,T){const at=z.colorSpace,dt=z.format,xt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||at!==Ur&&at!==ka&&(Ue.getTransfer(at)===ke?(dt!==Ri||xt!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),T}function Ze(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=it,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=I,this.setTexture3D=Y,this.setTextureCube=q,this.rebindTextures=ye,this.setupRenderTarget=F,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=jt}function OA(r,t){function i(s,l=ka){let c;const h=Ue.getTransfer(l);if(s===ca)return r.UNSIGNED_BYTE;if(s===Fd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===sv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===rv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===iv)return r.BYTE;if(s===av)return r.SHORT;if(s===Go)return r.UNSIGNED_SHORT;if(s===Bd)return r.INT;if(s===Es)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===qo)return r.HALF_FLOAT;if(s===ov)return r.ALPHA;if(s===lv)return r.RGB;if(s===Ri)return r.RGBA;if(s===ko)return r.DEPTH_COMPONENT;if(s===jo)return r.DEPTH_STENCIL;if(s===cv)return r.RED;if(s===Gd)return r.RED_INTEGER;if(s===uv)return r.RG;if(s===Vd)return r.RG_INTEGER;if(s===kd)return r.RGBA_INTEGER;if(s===Ic||s===Bc||s===Fc||s===Hc)if(h===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ad||s===sd||s===rd||s===od)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ld||s===cd||s===ud)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ld||s===cd)return h===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ud)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===fd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===md)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_d)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Md)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ed)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bd)return h===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Td||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Td)return h===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ad)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cd||s===wd||s===Dd||s===Ud)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Cd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ya({vertexShader:PA,fragmentShader:zA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new $c(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BA extends As{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,y=null,S=null,E=null,b=null;const C=typeof XRWebGLBinding<"u",x=new IA,v={},B=i.getContextAttributes();let P=null,D=null;const H=[],k=[],O=new ve;let j=null;const w=new oi;w.viewport=new cn;const U=new oi;U.viewport=new cn;const V=[w,U],Z=new nE;let it=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let _t=H[et];return _t===void 0&&(_t=new Uh,H[et]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(et){let _t=H[et];return _t===void 0&&(_t=new Uh,H[et]=_t),_t.getGripSpace()},this.getHand=function(et){let _t=H[et];return _t===void 0&&(_t=new Uh,H[et]=_t),_t.getHandSpace()};function lt(et){const _t=k.indexOf(et.inputSource);if(_t===-1)return;const wt=H[_t];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||h),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function I(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",Y);for(let et=0;et<H.length;et++){const _t=k[et];_t!==null&&(k[et]=null,H[et].disconnect(_t))}it=null,mt=null,x.reset();for(const et in v)delete v[et];t.setRenderTarget(P),E=null,S=null,y=null,l=null,D=null,kt.stop(),s.isPresenting=!1,t.setPixelRatio(j),t.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(P=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",Y),B.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Kt=null,Et=null;B.depth&&(Et=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=B.stencil?jo:ko,Kt=B.stencil?Vo:Es);const Vt={colorFormat:i.RGBA8,depthFormat:Et,scaleFactor:c};y=this.getBinding(),S=y.createProjectionLayer(Vt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),D=new Ts(S.textureWidth,S.textureHeight,{format:Ri,type:ca,depthTexture:new Av(S.textureWidth,S.textureHeight,Kt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new Ts(E.framebufferWidth,E.framebufferHeight,{format:Ri,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),kt.setContext(l),kt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(et){for(let _t=0;_t<et.removed.length;_t++){const wt=et.removed[_t],Kt=k.indexOf(wt);Kt>=0&&(k[Kt]=null,H[Kt].disconnect(wt))}for(let _t=0;_t<et.added.length;_t++){const wt=et.added[_t];let Kt=k.indexOf(wt);if(Kt===-1){for(let Vt=0;Vt<H.length;Vt++)if(Vt>=k.length){k.push(wt),Kt=Vt;break}else if(k[Vt]===null){k[Vt]=wt,Kt=Vt;break}if(Kt===-1)break}const Et=H[Kt];Et&&Et.connect(wt)}}const q=new J,pt=new J;function N(et,_t,wt){q.setFromMatrixPosition(_t.matrixWorld),pt.setFromMatrixPosition(wt.matrixWorld);const Kt=q.distanceTo(pt),Et=_t.projectionMatrix.elements,Vt=wt.projectionMatrix.elements,ye=Et[14]/(Et[10]-1),F=Et[14]/(Et[10]+1),he=(Et[9]+1)/Et[5],oe=(Et[9]-1)/Et[5],te=(Et[8]-1)/Et[0],Ht=(Vt[8]+1)/Vt[0],Ie=ye*te,jt=ye*Ht,fe=Kt/(-te+Ht),Xe=fe*-te;if(_t.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Xe),et.translateZ(fe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Et[10]===-1)et.projectionMatrix.copy(_t.projectionMatrix),et.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const Ze=ye+fe,z=F+fe,T=Ie-Xe,at=jt+(Kt-Xe),dt=he*F/z*Ze,xt=oe*F/z*Ze;et.projectionMatrix.makePerspective(T,at,dt,xt,Ze,z),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function tt(et,_t){_t===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(_t.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let _t=et.near,wt=et.far;x.texture!==null&&(x.depthNear>0&&(_t=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),Z.near=U.near=w.near=_t,Z.far=U.far=w.far=wt,(it!==Z.near||mt!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),it=Z.near,mt=Z.far),Z.layers.mask=et.layers.mask|6,w.layers.mask=Z.layers.mask&3,U.layers.mask=Z.layers.mask&5;const Kt=et.parent,Et=Z.cameras;tt(Z,Kt);for(let Vt=0;Vt<Et.length;Vt++)tt(Et[Vt],Kt);Et.length===2?N(Z,w,U):Z.projectionMatrix.copy(w.projectionMatrix),yt(et,Z,Kt)};function yt(et,_t,wt){wt===null?et.matrix.copy(_t.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(_t.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(_t.projectionMatrix),et.projectionMatrixInverse.copy(_t.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xo*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(S===null&&E===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=et)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(et){return v[et]};let Mt=null;function Nt(et,_t){if(_=_t.getViewerPose(p||h),b=_t,_!==null){const wt=_.views;E!==null&&(t.setRenderTargetFramebuffer(D,E.framebuffer),t.setRenderTarget(D));let Kt=!1;wt.length!==Z.cameras.length&&(Z.cameras.length=0,Kt=!0);for(let F=0;F<wt.length;F++){const he=wt[F];let oe=null;if(E!==null)oe=E.getViewport(he);else{const Ht=y.getViewSubImage(S,he);oe=Ht.viewport,F===0&&(t.setRenderTargetTextures(D,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(D))}let te=V[F];te===void 0&&(te=new oi,te.layers.enable(F),te.viewport=new cn,V[F]=te),te.matrix.fromArray(he.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(he.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(oe.x,oe.y,oe.width,oe.height),F===0&&(Z.matrix.copy(te.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Kt===!0&&Z.cameras.push(te)}const Et=l.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const F=y.getDepthInformation(wt[0]);F&&F.isValid&&F.texture&&x.init(F,l.renderState)}if(Et&&Et.includes("camera-access")&&C){t.state.unbindTexture(),y=s.getBinding();for(let F=0;F<wt.length;F++){const he=wt[F].camera;if(he){let oe=v[he];oe||(oe=new Rv,v[he]=oe);const te=y.getCameraImage(he);oe.sourceTexture=te}}}}for(let wt=0;wt<H.length;wt++){const Kt=k[wt],Et=H[wt];Kt!==null&&Et!==void 0&&Et.update(Kt,_t,p||h)}Mt&&Mt(et,_t),_t.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:_t}),b=null}const kt=new Cv;kt.setAnimationLoop(Nt),this.setAnimationLoop=function(et){Mt=et},this.dispose=function(){}}}const _s=new ua,FA=new nn;function HA(r,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,vv(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,B,P,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),y(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v)):v.isMeshStandardMaterial?(c(x,v),S(x,v),v.isMeshPhysicalMaterial&&E(x,v,D)):v.isMeshMatcapMaterial?(c(x,v),b(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),C(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?m(x,v,B,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Zn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Zn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const B=t.get(v),P=B.envMap,D=B.envMapRotation;P&&(x.envMap.value=P,_s.copy(D),_s.x*=-1,_s.y*=-1,_s.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),x.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(_s)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,B,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*B,x.scale.value=P*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function E(x,v,B){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Zn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=B.texture,x.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function C(x,v){const B=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(B.matrixWorld),x.nearDistance.value=B.shadow.camera.near,x.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function GA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,P){const D=P.program;s.uniformBlockBinding(B,D)}function p(B,P){let D=l[B.id];D===void 0&&(b(B),D=_(B),l[B.id]=D,B.addEventListener("dispose",x));const H=P.program;s.updateUBOMapping(B,H);const k=t.render.frame;c[B.id]!==k&&(S(B),c[B.id]=k)}function _(B){const P=y();B.__bindingPointIndex=P;const D=r.createBuffer(),H=B.__size,k=B.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,D),D}function y(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const P=l[B.id],D=B.uniforms,H=B.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let k=0,O=D.length;k<O;k++){const j=Array.isArray(D[k])?D[k]:[D[k]];for(let w=0,U=j.length;w<U;w++){const V=j[w];if(E(V,k,w,H)===!0){const Z=V.__offset,it=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let lt=0;lt<it.length;lt++){const I=it[lt],Y=C(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Z+mt,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,mt),mt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(B,P,D,H){const k=B.value,O=P+"_"+D;if(H[O]===void 0)return typeof k=="number"||typeof k=="boolean"?H[O]=k:H[O]=k.clone(),!0;{const j=H[O];if(typeof k=="number"||typeof k=="boolean"){if(j!==k)return H[O]=k,!0}else if(j.equals(k)===!1)return j.copy(k),!0}return!1}function b(B){const P=B.uniforms;let D=0;const H=16;for(let O=0,j=P.length;O<j;O++){const w=Array.isArray(P[O])?P[O]:[P[O]];for(let U=0,V=w.length;U<V;U++){const Z=w[U],it=Array.isArray(Z.value)?Z.value:[Z.value];for(let mt=0,lt=it.length;mt<lt;mt++){const I=it[mt],Y=C(I),q=D%H,pt=q%Y.boundary,N=q+pt;D+=pt,N!==0&&H-N<Y.storage&&(D+=H-N),Z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=D,D+=Y.storage}}}const k=D%H;return k>0&&(D+=H-k),B.__size=D,B.__cache={},this}function C(B){const P={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(P.boundary=4,P.storage=4):B.isVector2?(P.boundary=8,P.storage=8):B.isVector3||B.isColor?(P.boundary=16,P.storage=12):B.isVector4?(P.boundary=16,P.storage=16):B.isMatrix3?(P.boundary=48,P.storage=48):B.isMatrix4?(P.boundary=64,P.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),P}function x(B){const P=B.target;P.removeEventListener("dispose",x);const D=h.indexOf(P.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function v(){for(const B in l)r.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class VA{constructor(t={}){const{canvas:i=EM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const b=new Uint32Array(4),C=new Int32Array(4);let x=null,v=null;const B=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=Hn;let k=0,O=0,j=null,w=-1,U=null;const V=new cn,Z=new cn;let it=null;const mt=new Ne(0);let lt=0,I=i.width,Y=i.height,q=1,pt=null,N=null;const tt=new cn(0,0,I,Y),yt=new cn(0,0,I,Y);let Mt=!1;const Nt=new Sv;let kt=!1,et=!1;const _t=new nn,wt=new J,Kt=new cn,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ye(){return j===null?q:1}let F=s;function he(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",At,!1),F===null){const K="webgl2";if(F=he(K,R),F===null)throw he(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let oe,te,Ht,Ie,jt,fe,Xe,Ze,z,T,at,dt,xt,ht,Ft,bt,Xt,qt,Tt,Ot,Jt,Yt,Ut,ae;function W(){oe=new J1(F),oe.init(),Yt=new OA(F,oe),te=new X1(F,oe,t,Yt),Ht=new NA(F,oe),te.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),Ie=new eT(F),jt=new xA,fe=new LA(F,oe,Ht,jt,te,Yt,Ie),Xe=new q1(D),Ze=new Q1(D),z=new oE(F),Ut=new k1(F,z),T=new $1(F,z,Ie,Ut),at=new iT(F,T,z,Ie),Tt=new nT(F,te,fe),bt=new W1(jt),dt=new vA(D,Xe,Ze,oe,te,Ut,bt),xt=new HA(D,jt),ht=new SA,Ft=new RA(oe),qt=new V1(D,Xe,Ze,Ht,at,E,m),Xt=new DA(D,at,te),ae=new GA(F,Ie,te,Ht),Ot=new j1(F,oe,Ie),Jt=new tT(F,oe,Ie),Ie.programs=dt.programs,D.capabilities=te,D.extensions=oe,D.properties=jt,D.renderLists=ht,D.shadowMap=Xt,D.state=Ht,D.info=Ie}W();const Rt=new BA(D,F);this.xr=Rt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=oe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=oe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(I,Y,!1))},this.getSize=function(R){return R.set(I,Y)},this.setSize=function(R,K,ut=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,Y=K,i.width=Math.floor(R*q),i.height=Math.floor(K*q),ut===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(I*q,Y*q).floor()},this.setDrawingBufferSize=function(R,K,ut){I=R,Y=K,q=ut,i.width=Math.floor(R*ut),i.height=Math.floor(K*ut),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,K,ut,ft){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,K,ut,ft),Ht.viewport(V.copy(tt).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,K,ut,ft){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,K,ut,ft),Ht.scissor(Z.copy(yt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Ht.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){pt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ut=!0){let ft=0;if(R){let $=!1;if(j!==null){const Ct=j.texture.format;$=Ct===kd||Ct===Vd||Ct===Gd}if($){const Ct=j.texture.type,zt=Ct===ca||Ct===Es||Ct===Go||Ct===Vo||Ct===Fd||Ct===Hd,Wt=qt.getClearColor(),It=qt.getClearAlpha(),ie=Wt.r,le=Wt.g,Qt=Wt.b;zt?(b[0]=ie,b[1]=le,b[2]=Qt,b[3]=It,F.clearBufferuiv(F.COLOR,0,b)):(C[0]=ie,C[1]=le,C[2]=Qt,C[3]=It,F.clearBufferiv(F.COLOR,0,C))}else ft|=F.COLOR_BUFFER_BIT}K&&(ft|=F.DEPTH_BUFFER_BIT),ut&&(ft|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",At,!1),qt.dispose(),ht.dispose(),Ft.dispose(),jt.dispose(),Xe.dispose(),Ze.dispose(),at.dispose(),Ut.dispose(),ae.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",$e),Rt.removeEventListener("sessionend",Be),Ce.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Gt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const R=Ie.autoReset,K=Xt.enabled,ut=Xt.autoUpdate,ft=Xt.needsUpdate,$=Xt.type;W(),Ie.autoReset=R,Xt.enabled=K,Xt.autoUpdate=ut,Xt.needsUpdate=ft,Xt.type=$}function At(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function L(R){const K=R.target;K.removeEventListener("dispose",L),ct(K)}function ct(R){Pt(R),jt.remove(R)}function Pt(R){const K=jt.get(R).programs;K!==void 0&&(K.forEach(function(ut){dt.releaseProgram(ut)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ut,ft,$,Ct){K===null&&(K=Et);const zt=$.isMesh&&$.matrixWorld.determinant()<0,Wt=ha(R,K,ut,ft,$);Ht.setMaterial(ft,zt);let It=ut.index,ie=1;if(ft.wireframe===!0){if(It=T.getWireframeAttribute(ut),It===void 0)return;ie=2}const le=ut.drawRange,Qt=ut.attributes.position;let me=le.start*ie,we=(le.start+le.count)*ie;Ct!==null&&(me=Math.max(me,Ct.start*ie),we=Math.min(we,(Ct.start+Ct.count)*ie)),It!==null?(me=Math.max(me,0),we=Math.min(we,It.count)):Qt!=null&&(me=Math.max(me,0),we=Math.min(we,Qt.count));const Qe=we-me;if(Qe<0||Qe===1/0)return;Ut.setup($,ft,Wt,ut,It);let Fe,ge=Ot;if(It!==null&&(Fe=z.get(It),ge=Jt,ge.setIndex(Fe)),$.isMesh)ft.wireframe===!0?(Ht.setLineWidth(ft.wireframeLinewidth*ye()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if($.isLine){let ee=ft.linewidth;ee===void 0&&(ee=1),Ht.setLineWidth(ee*ye()),$.isLineSegments?ge.setMode(F.LINES):$.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else $.isPoints?ge.setMode(F.POINTS):$.isSprite&&ge.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))ge.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ee=$._multiDrawStarts,Ke=$._multiDrawCounts,be=$._multiDrawCount,Cn=It?z.get(It).bytesPerElement:1,xi=jt.get(ft).currentProgram.getUniforms();for(let Pn=0;Pn<be;Pn++)xi.setValue(F,"_gl_DrawID",Pn),ge.render(ee[Pn]/Cn,Ke[Pn])}else if($.isInstancedMesh)ge.renderInstances(me,Qe,$.count);else if(ut.isInstancedBufferGeometry){const ee=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ke=Math.min(ut.instanceCount,ee);ge.renderInstances(me,Qe,Ke)}else ge.render(me,Qe)};function ne(R,K,ut){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,wi(R,K,ut),R.side=qa,R.needsUpdate=!0,wi(R,K,ut),R.side=ra):wi(R,K,ut)}this.compile=function(R,K,ut=null){ut===null&&(ut=R),v=Ft.get(ut),v.init(K),P.push(v),ut.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),R!==ut&&R.traverseVisible(function($){$.isLight&&$.layers.test(K.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const ft=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ct=$.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Wt=Ct[zt];ne(Wt,ut,$),ft.add(Wt)}else ne(Ct,ut,$),ft.add(Ct)}),v=P.pop(),ft},this.compileAsync=function(R,K,ut=null){const ft=this.compile(R,K,ut);return new Promise($=>{function Ct(){if(ft.forEach(function(zt){jt.get(zt).currentProgram.isReady()&&ft.delete(zt)}),ft.size===0){$(R);return}setTimeout(Ct,10)}oe.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let se=null;function Oe(R){se&&se(R)}function $e(){Ce.stop()}function Be(){Ce.start()}const Ce=new Cv;Ce.setAnimationLoop(Oe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(R){se=R,Rt.setAnimationLoop(R),R===null?Ce.stop():Ce.start()},Rt.addEventListener("sessionstart",$e),Rt.addEventListener("sessionend",Be),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(K),K=Rt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,K,j),v=Ft.get(R,P.length),v.init(K),P.push(v),_t.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Nt.setFromProjectionMatrix(_t,Ii,K.reversedDepth),et=this.localClippingEnabled,kt=bt.init(this.clippingPlanes,et),x=ht.get(R,B.length),x.init(),B.push(x),Rt.enabled===!0&&Rt.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&Qn(Ct,K,-1/0,D.sortObjects)}Qn(R,K,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(pt,N),Vt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Vt&&qt.addToRenderList(x,R),this.info.render.frame++,kt===!0&&bt.beginShadows();const ut=v.state.shadowsArray;Xt.render(ut,R,K),kt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=x.opaque,$=x.transmissive;if(v.setupLights(),K.isArrayCamera){const Ct=K.cameras;if($.length>0)for(let zt=0,Wt=Ct.length;zt<Wt;zt++){const It=Ct[zt];Qo(ft,$,R,It)}Vt&&qt.render(R);for(let zt=0,Wt=Ct.length;zt<Wt;zt++){const It=Ct[zt];fa(x,R,It,It.viewport)}}else $.length>0&&Qo(ft,$,R,K),Vt&&qt.render(R),fa(x,R,K);j!==null&&O===0&&(fe.updateMultisampleRenderTarget(j),fe.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(D,R,K),Ut.resetDefaultState(),w=-1,U=null,P.pop(),P.length>0?(v=P[P.length-1],kt===!0&&bt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,B.pop(),B.length>0?x=B[B.length-1]:x=null};function Qn(R,K,ut,ft){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ut=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Nt.intersectsSprite(R)){ft&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const zt=at.update(R),Wt=R.material;Wt.visible&&x.push(R,zt,Wt,ut,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Nt.intersectsObject(R))){const zt=at.update(R),Wt=R.material;if(ft&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Kt.copy(zt.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(Wt)){const It=zt.groups;for(let ie=0,le=It.length;ie<le;ie++){const Qt=It[ie],me=Wt[Qt.materialIndex];me&&me.visible&&x.push(R,zt,me,ut,Kt.z,Qt)}}else Wt.visible&&x.push(R,zt,Wt,ut,Kt.z,null)}}const Ct=R.children;for(let zt=0,Wt=Ct.length;zt<Wt;zt++)Qn(Ct[zt],K,ut,ft)}function fa(R,K,ut,ft){const $=R.opaque,Ct=R.transmissive,zt=R.transparent;v.setupLightsView(ut),kt===!0&&bt.setGlobalState(D.clippingPlanes,ut),ft&&Ht.viewport(V.copy(ft)),$.length>0&&Rs($,K,ut),Ct.length>0&&Rs(Ct,K,ut),zt.length>0&&Rs(zt,K,ut),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Qo(R,K,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ft.id]===void 0&&(v.state.transmissionRenderTarget[ft.id]=new Ts(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?qo:ca,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Ct=v.state.transmissionRenderTarget[ft.id],zt=ft.viewport||V;Ct.setSize(zt.z*D.transmissionResolutionScale,zt.w*D.transmissionResolutionScale);const Wt=D.getRenderTarget(),It=D.getActiveCubeFace(),ie=D.getActiveMipmapLevel();D.setRenderTarget(Ct),D.getClearColor(mt),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),Vt&&qt.render(ut);const le=D.toneMapping;D.toneMapping=Xa;const Qt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),v.setupLightsView(ft),kt===!0&&bt.setGlobalState(D.clippingPlanes,ft),Rs(R,ut,ft),fe.updateMultisampleRenderTarget(Ct),fe.updateRenderTargetMipmap(Ct),oe.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let we=0,Qe=K.length;we<Qe;we++){const Fe=K[we],ge=Fe.object,ee=Fe.geometry,Ke=Fe.material,be=Fe.group;if(Ke.side===ra&&ge.layers.test(ft.layers)){const Cn=Ke.side;Ke.side=Zn,Ke.needsUpdate=!0,zr(ge,ut,ft,ee,Ke,be),Ke.side=Cn,Ke.needsUpdate=!0,me=!0}}me===!0&&(fe.updateMultisampleRenderTarget(Ct),fe.updateRenderTargetMipmap(Ct))}D.setRenderTarget(Wt,It,ie),D.setClearColor(mt,lt),Qt!==void 0&&(ft.viewport=Qt),D.toneMapping=le}function Rs(R,K,ut){const ft=K.isScene===!0?K.overrideMaterial:null;for(let $=0,Ct=R.length;$<Ct;$++){const zt=R[$],Wt=zt.object,It=zt.geometry,ie=zt.group;let le=zt.material;le.allowOverride===!0&&ft!==null&&(le=ft),Wt.layers.test(ut.layers)&&zr(Wt,K,ut,It,le,ie)}}function zr(R,K,ut,ft,$,Ct){R.onBeforeRender(D,K,ut,ft,$,Ct),R.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(D,K,ut,ft,R,Ct),$.transparent===!0&&$.side===ra&&$.forceSinglePass===!1?($.side=Zn,$.needsUpdate=!0,D.renderBufferDirect(ut,K,ft,$,R,Ct),$.side=qa,$.needsUpdate=!0,D.renderBufferDirect(ut,K,ft,$,R,Ct),$.side=ra):D.renderBufferDirect(ut,K,ft,$,R,Ct),R.onAfterRender(D,K,ut,ft,$,Ct)}function wi(R,K,ut){K.isScene!==!0&&(K=Et);const ft=jt.get(R),$=v.state.lights,Ct=v.state.shadowsArray,zt=$.state.version,Wt=dt.getParameters(R,$.state,Ct,K,ut),It=dt.getProgramCacheKey(Wt);let ie=ft.programs;ft.environment=R.isMeshStandardMaterial?K.environment:null,ft.fog=K.fog,ft.envMap=(R.isMeshStandardMaterial?Ze:Xe).get(R.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",L),ie=new Map,ft.programs=ie);let le=ie.get(It);if(le!==void 0){if(ft.currentProgram===le&&ft.lightsStateVersion===zt)return Bi(R,Wt),le}else Wt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Wt,D),le=dt.acquireProgram(Wt,It),ie.set(It,le),ft.uniforms=Wt.uniforms;const Qt=ft.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=bt.uniform),Bi(R,Wt),ft.needsLights=da(R),ft.lightsStateVersion=zt,ft.needsLights&&(Qt.ambientLightColor.value=$.state.ambient,Qt.lightProbe.value=$.state.probe,Qt.directionalLights.value=$.state.directional,Qt.directionalLightShadows.value=$.state.directionalShadow,Qt.spotLights.value=$.state.spot,Qt.spotLightShadows.value=$.state.spotShadow,Qt.rectAreaLights.value=$.state.rectArea,Qt.ltc_1.value=$.state.rectAreaLTC1,Qt.ltc_2.value=$.state.rectAreaLTC2,Qt.pointLights.value=$.state.point,Qt.pointLightShadows.value=$.state.pointShadow,Qt.hemisphereLights.value=$.state.hemi,Qt.directionalShadowMap.value=$.state.directionalShadowMap,Qt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qt.spotShadowMap.value=$.state.spotShadowMap,Qt.spotLightMatrix.value=$.state.spotLightMatrix,Qt.spotLightMap.value=$.state.spotLightMap,Qt.pointShadowMap.value=$.state.pointShadowMap,Qt.pointShadowMatrix.value=$.state.pointShadowMatrix),ft.currentProgram=le,ft.uniformsList=null,le}function Cs(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Gc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Bi(R,K){const ut=jt.get(R);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function ha(R,K,ut,ft,$){K.isScene!==!0&&(K=Et),fe.resetTextureUnits();const Ct=K.fog,zt=ft.isMeshStandardMaterial?K.environment:null,Wt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ur,It=(ft.isMeshStandardMaterial?Ze:Xe).get(ft.envMap||zt),ie=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,le=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Qt=!!ut.morphAttributes.position,me=!!ut.morphAttributes.normal,we=!!ut.morphAttributes.color;let Qe=Xa;ft.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Fe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ge=Fe!==void 0?Fe.length:0,ee=jt.get(ft),Ke=v.state.lights;if(kt===!0&&(et===!0||R!==U)){const an=R===U&&ft.id===w;bt.setState(ft,R,an)}let be=!1;ft.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ke.state.version||ee.outputColorSpace!==Wt||$.isBatchedMesh&&ee.batching===!1||!$.isBatchedMesh&&ee.batching===!0||$.isBatchedMesh&&ee.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&ee.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&ee.instancing===!1||!$.isInstancedMesh&&ee.instancing===!0||$.isSkinnedMesh&&ee.skinning===!1||!$.isSkinnedMesh&&ee.skinning===!0||$.isInstancedMesh&&ee.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&ee.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&ee.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&ee.instancingMorph===!1&&$.morphTexture!==null||ee.envMap!==It||ft.fog===!0&&ee.fog!==Ct||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==bt.numPlanes||ee.numIntersection!==bt.numIntersection)||ee.vertexAlphas!==ie||ee.vertexTangents!==le||ee.morphTargets!==Qt||ee.morphNormals!==me||ee.morphColors!==we||ee.toneMapping!==Qe||ee.morphTargetsCount!==ge)&&(be=!0):(be=!0,ee.__version=ft.version);let Cn=ee.currentProgram;be===!0&&(Cn=wi(ft,K,$));let xi=!1,Pn=!1,xn=!1;const We=Cn.getUniforms(),zn=ee.uniforms;if(Ht.useProgram(Cn.program)&&(xi=!0,Pn=!0,xn=!0),ft.id!==w&&(w=ft.id,Pn=!0),xi||U!==R){Ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),We.setValue(F,"projectionMatrix",R.projectionMatrix),We.setValue(F,"viewMatrix",R.matrixWorldInverse);const bn=We.map.cameraPosition;bn!==void 0&&bn.setValue(F,wt.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&We.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&We.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,Pn=!0,xn=!0)}if($.isSkinnedMesh){We.setOptional(F,$,"bindMatrix"),We.setOptional(F,$,"bindMatrixInverse");const an=$.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),We.setValue(F,"boneTexture",an.boneTexture,fe))}$.isBatchedMesh&&(We.setOptional(F,$,"batchingTexture"),We.setValue(F,"batchingTexture",$._matricesTexture,fe),We.setOptional(F,$,"batchingIdTexture"),We.setValue(F,"batchingIdTexture",$._indirectTexture,fe),We.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&We.setValue(F,"batchingColorTexture",$._colorsTexture,fe));const wn=ut.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Tt.update($,ut,Cn),(Pn||ee.receiveShadow!==$.receiveShadow)&&(ee.receiveShadow=$.receiveShadow,We.setValue(F,"receiveShadow",$.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(zn.envMap.value=It,zn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&K.environment!==null&&(zn.envMapIntensity.value=K.environmentIntensity),Pn&&(We.setValue(F,"toneMappingExposure",D.toneMappingExposure),ee.needsLights&&Za(zn,xn),Ct&&ft.fog===!0&&xt.refreshFogUniforms(zn,Ct),xt.refreshMaterialUniforms(zn,ft,q,Y,v.state.transmissionRenderTarget[R.id]),Gc.upload(F,Cs(ee),zn,fe)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Gc.upload(F,Cs(ee),zn,fe),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&We.setValue(F,"center",$.center),We.setValue(F,"modelViewMatrix",$.modelViewMatrix),We.setValue(F,"normalMatrix",$.normalMatrix),We.setValue(F,"modelMatrix",$.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const an=ft.uniformsGroups;for(let bn=0,ws=an.length;bn<ws;bn++){const kn=an[bn];ae.update(kn,Cn),ae.bind(kn,Cn)}}return Cn}function Za(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function da(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,K,ut){const ft=jt.get(R);ft.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=K,jt.get(R.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ut=jt.get(R);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const un=F.createFramebuffer();this.setRenderTarget=function(R,K=0,ut=0){j=R,k=K,O=ut;let ft=!0,$=null,Ct=!1,zt=!1;if(R){const It=jt.get(R);if(It.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(F.FRAMEBUFFER,null),ft=!1;else if(It.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(It.__hasExternalTextures)fe.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(It.__boundDepthTexture!==Qt){if(Qt!==null&&jt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(zt=!0);const le=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[K])?$=le[K][ut]:$=le[K],Ct=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?$=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?$=le[ut]:$=le,V.copy(R.viewport),Z.copy(R.scissor),it=R.scissorTest}else V.copy(tt).multiplyScalar(q).floor(),Z.copy(yt).multiplyScalar(q).floor(),it=Mt;if(ut!==0&&($=un),Ht.bindFramebuffer(F.FRAMEBUFFER,$)&&ft&&Ht.drawBuffers(R,$),Ht.viewport(V),Ht.scissor(Z),Ht.setScissorTest(it),Ct){const It=jt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,It.__webglTexture,ut)}else if(zt){const It=K;for(let ie=0;ie<R.textures.length;ie++){const le=jt.get(R.textures[ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ie,le.__webglTexture,ut,It)}}else if(R!==null&&ut!==0){const It=jt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,It.__webglTexture,ut)}w=-1},this.readRenderTargetPixels=function(R,K,ut,ft,$,Ct,zt,Wt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){Ht.bindFramebuffer(F.FRAMEBUFFER,It);try{const ie=R.textures[Wt],le=ie.format,Qt=ie.type;if(!te.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ft&&ut>=0&&ut<=R.height-$&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Wt),F.readPixels(K,ut,ft,$,Yt.convert(le),Yt.convert(Qt),Ct))}finally{const ie=j!==null?jt.get(j).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(R,K,ut,ft,$,Ct,zt,Wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It)if(K>=0&&K<=R.width-ft&&ut>=0&&ut<=R.height-$){Ht.bindFramebuffer(F.FRAMEBUFFER,It);const ie=R.textures[Wt],le=ie.format,Qt=ie.type;if(!te.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.bufferData(F.PIXEL_PACK_BUFFER,Ct.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Wt),F.readPixels(K,ut,ft,$,Yt.convert(le),Yt.convert(Qt),0);const we=j!==null?jt.get(j).__webglFramebuffer:null;Ht.bindFramebuffer(F.FRAMEBUFFER,we);const Qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bM(F,Qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ct),F.deleteBuffer(me),F.deleteSync(Qe),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ut=0){const ft=Math.pow(2,-ut),$=Math.floor(R.image.width*ft),Ct=Math.floor(R.image.height*ft),zt=K!==null?K.x:0,Wt=K!==null?K.y:0;fe.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ut,0,0,zt,Wt,$,Ct),Ht.unbindTexture()};const Jo=F.createFramebuffer(),$o=F.createFramebuffer();this.copyTextureToTexture=function(R,K,ut=null,ft=null,$=0,Ct=null){Ct===null&&($!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ct=$,$=0):Ct=0);let zt,Wt,It,ie,le,Qt,me,we,Qe;const Fe=R.isCompressedTexture?R.mipmaps[Ct]:R.image;if(ut!==null)zt=ut.max.x-ut.min.x,Wt=ut.max.y-ut.min.y,It=ut.isBox3?ut.max.z-ut.min.z:1,ie=ut.min.x,le=ut.min.y,Qt=ut.isBox3?ut.min.z:0;else{const wn=Math.pow(2,-$);zt=Math.floor(Fe.width*wn),Wt=Math.floor(Fe.height*wn),R.isDataArrayTexture?It=Fe.depth:R.isData3DTexture?It=Math.floor(Fe.depth*wn):It=1,ie=0,le=0,Qt=0}ft!==null?(me=ft.x,we=ft.y,Qe=ft.z):(me=0,we=0,Qe=0);const ge=Yt.convert(K.format),ee=Yt.convert(K.type);let Ke;K.isData3DTexture?(fe.setTexture3D(K,0),Ke=F.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(fe.setTexture2DArray(K,0),Ke=F.TEXTURE_2D_ARRAY):(fe.setTexture2D(K,0),Ke=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,K.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,K.unpackAlignment);const be=F.getParameter(F.UNPACK_ROW_LENGTH),Cn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xi=F.getParameter(F.UNPACK_SKIP_PIXELS),Pn=F.getParameter(F.UNPACK_SKIP_ROWS),xn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,le),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qt);const We=R.isDataArrayTexture||R.isData3DTexture,zn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const wn=jt.get(R),an=jt.get(K),bn=jt.get(wn.__renderTarget),ws=jt.get(an.__renderTarget);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let kn=0;kn<It;kn++)We&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,$,Qt+kn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.get(K).__webglTexture,Ct,Qe+kn)),F.blitFramebuffer(ie,le,zt,Wt,me,we,zt,Wt,F.DEPTH_BUFFER_BIT,F.NEAREST);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||jt.has(R)){const wn=jt.get(R),an=jt.get(K);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,Jo),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,$o);for(let bn=0;bn<It;bn++)We?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wn.__webglTexture,$,Qt+bn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wn.__webglTexture,$),zn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,an.__webglTexture,Ct,Qe+bn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,an.__webglTexture,Ct),$!==0?F.blitFramebuffer(ie,le,zt,Wt,me,we,zt,Wt,F.COLOR_BUFFER_BIT,F.NEAREST):zn?F.copyTexSubImage3D(Ke,Ct,me,we,Qe+bn,ie,le,zt,Wt):F.copyTexSubImage2D(Ke,Ct,me,we,ie,le,zt,Wt);Ht.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else zn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ke,Ct,me,we,Qe,zt,Wt,It,ge,ee,Fe.data):K.isCompressedArrayTexture?F.compressedTexSubImage3D(Ke,Ct,me,we,Qe,zt,Wt,It,ge,Fe.data):F.texSubImage3D(Ke,Ct,me,we,Qe,zt,Wt,It,ge,ee,Fe):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ct,me,we,zt,Wt,ge,ee,Fe.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ct,me,we,Fe.width,Fe.height,ge,Fe.data):F.texSubImage2D(F.TEXTURE_2D,Ct,me,we,zt,Wt,ge,ee,Fe);F.pixelStorei(F.UNPACK_ROW_LENGTH,be),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Cn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xn),Ct===0&&K.generateMipmaps&&F.generateMipmap(Ke),Ht.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){k=0,O=0,j=null,Ht.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const W0={type:"change"},Zd={type:"start"},Lv={type:"end"},Uc=new Zo,q0=new Va,kA=Math.cos(70*hv.DEG2RAD),gn=new J,Yn=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class jA extends sE{constructor(t,i=null){super(t,i),this.state=je.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Mr.ROTATE,TWO:Mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new bs,this._lastTargetPosition=new J,this._quat=new bs().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new J,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new J,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WA.bind(this),this._onPointerDown=XA.bind(this),this._onPointerUp=qA.bind(this),this._onContextMenu=tR.bind(this),this._onMouseWheel=KA.bind(this),this._onKeyDown=QA.bind(this),this._onTouchStart=JA.bind(this),this._onTouchMove=$A.bind(this),this._onMouseDown=YA.bind(this),this._onMouseMove=ZA.bind(this),this._interceptControlDown=eR.bind(this),this._interceptControlUp=nR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W0),this.update(),this.state=je.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),l<-Math.PI?l+=Yn:l>Math.PI&&(l-=Yn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<kA?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(W0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Yn/60*this.autoRotateSpeed*t:Yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ve,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function XA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function WA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function qA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lv),this.state=je.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function YA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Tr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=je.DOLLY;break;case Tr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}break;case Tr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Zd)}function ZA(r){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function KA(r){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(r.preventDefault(),this.dispatchEvent(Zd),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Lv))}function QA(r){this.enabled!==!1&&this._handleKeyDown(r)}function JA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=je.TOUCH_ROTATE;break;case Mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case Mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=je.TOUCH_DOLLY_PAN;break;case Mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Zd)}function $A(r){switch(this._trackPointer(r),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=je.NONE}}function tR(r){this.enabled!==!1&&r.preventDefault()}function eR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pd(r,t){return[0,1,2].map(i=>-r.reduce((s,l,c)=>s+l[i]*t[c],0))}function iR(r,t){if(!r.R||!r.t)return[];const{K:i,R:s,t:l,width:c,height:h}=r,d=Pd(s,l);return[[0,0],[c,0],[c,h],[0,h]].map(([m,p])=>{const _=1/i[2][2],y=(p-i[1][2]*_)/i[1][1],S=(m-i[0][1]*y-i[0][2]*_)/i[0][0],E=[S,y,_];return d.map((b,C)=>b+t*s.reduce((x,v,B)=>x+v[C]*E[B],0))})}function aR(r,t,i,s,l){const c=[];for(let h=0;h<i;h++){const d=r[h];(s<=0||d!=null&&d<=s)&&(t[h]??0)>=l&&c.push(h)}return c}function sR(r,t,i,s){if(!r.registered||!r.R||!r.t)return null;const{R:l,t:c,K:h,height:d}=r,m=new oi,p=[0,1,2].map(y=>-l.reduce((S,E,b)=>S+E[y]*c[b],0)),_=new nn().set(l[0][0],-l[1][0],-l[2][0],p[0],l[0][1],-l[1][1],-l[2][1],p[1],l[0][2],-l[1][2],-l[2][2],p[2],0,0,0,1);return m.position.fromArray(p),m.quaternion.setFromRotationMatrix(_),m.up.set(-l[1][0],-l[1][1],-l[1][2]),m.near=i,m.far=s,m.aspect=t,m.fov=hv.radToDeg(2*Math.atan(d*h[2][2]/(2*h[1][1]))),m.updateProjectionMatrix(),m.updateMatrixWorld(!0),m}function Nc(r){for(const t of[...r.children])r.remove(t),t.traverse(i=>{(i instanceof _i||i instanceof Tv||i instanceof Mv)&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>l.dispose()))})}function rR({scene:r,runId:t,options:i,setOptions:s,selection:l,onSelect:c,cameraViewRequest:h,onCameraViewChange:d}){const m=Lt.useRef(null),p=Lt.useRef(null),_=Lt.useRef(c),y=Lt.useRef(d),S=Lt.useRef(""),[E,b]=Lt.useState(""),[C,x]=Lt.useState(!1),[v,B]=Lt.useState(0),[P,D]=Lt.useState("");_.current=c,y.current=d,Lt.useEffect(()=>{if(!m.current)return;const O=m.current;let j=0,w=!1;const U=()=>{!w&&!document.hidden&&!j&&(j=requestAnimationFrame(Kt))};let V;try{V=new VA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch(Et){b(`无法创建 WebGL 视图：${String(Et)}`);return}V.setPixelRatio(Math.min(window.devicePixelRatio,2)),V.outputColorSpace=Hn,V.setClearColor(1120027,0),V.domElement.setAttribute("aria-label","可拖拽的三维重建视图"),V.domElement.setAttribute("data-testid","scene-canvas"),O.appendChild(V.domElement);const Z=new ZM,it=new oi(45,1,.001,1e6);it.up.set(0,-1,0),it.position.set(3,-2,-4);const mt=()=>{const Et=new jA(it,V.domElement);return Et.enableDamping=!0,Et.dampingFactor=.12,Et.screenSpacePanning=!0,Et.minDistance=1e-4,Et.maxDistance=1e8,Et.addEventListener("change",U),Et};let lt=mt();const I=new Er,Y=new Er;Z.add(I,Y);const q=Et=>{const Vt=it.position.clone();lt.dispose(),lt=mt(),it.position.copy(Vt),lt.target.copy(Et),lt.update(),N.controls=lt,U()},pt=()=>{const Et=O.clientWidth,Vt=O.clientHeight;it.aspect=Et/Math.max(Vt,1),it.updateProjectionMatrix()},N={renderer:V,scene:Z,camera:it,controls:lt,content:I,highlight:Y,bounds:new Wa(new J(-1,-1,-1),new J(1,1,1)),radius:1,pickables:[],pointIndices:[],invalidate:U,enterCamera:Et=>{const Vt=sR(Et,O.clientWidth/Math.max(O.clientHeight,1),Math.max(N.radius*1e-6,1e-8),Math.max(N.radius*1e4,1e3));if(!Vt)return;it.copy(Vt);const ye=it.getWorldDirection(new J),F=Math.max(N.bounds.getCenter(new J).sub(it.position).dot(ye),N.radius*.01);q(it.position.clone().addScaledVector(ye,F)),y.current(Et.image_id)},fit:Et=>{const Vt=Et&&!Et.isEmpty()?Et:N.bounds,ye=Vt.getCenter(new J),F=Math.max(Vt.getSize(new J).length()/2,.001),he=new J(-.5,-.35,-1).normalize();it.up.set(0,-1,0),it.fov=45,it.zoom=1,it.position.copy(ye).addScaledVector(he,F*3.1),it.near=Math.max(F/1e4,1e-6),it.far=Math.max(F*1e4,1e3),it.updateProjectionMatrix(),q(ye),y.current(null)}};p.current=N;const tt=new iE,yt=new ve;let Mt=[0,0];const Nt=Et=>{const Vt=V.domElement.getBoundingClientRect(),ye={x:0,y:0,width:Vt.width,height:Vt.height},F=Et.clientX-Vt.left-ye.x,he=Et.clientY-Vt.top-ye.y;return F<0||he<0||F>ye.width||he>ye.height?[]:(yt.set(F/ye.width*2-1,-(he/ye.height)*2+1),tt.setFromCamera(yt,it),tt.params.Points.threshold=Math.max(it.position.distanceTo(lt.target)*(1/it.projectionMatrix.elements[5])*12/Math.max(ye.height,1),1e-8),tt.intersectObjects(N.pickables,!1).filter(oe=>oe.object.visible))},kt=Et=>{Mt=[Et.clientX,Et.clientY]},et=Et=>{if(Et.button!==0||Math.hypot(Et.clientX-Mt[0],Et.clientY-Mt[1])>5)return;const Vt=Nt(Et),ye=Vt.find(he=>he.object.userData.kind==="camera"),F=ye??Vt[0];if(!F){_.current(null);return}F.object.userData.kind==="camera"?_.current({kind:"camera",id:F.object.userData.id}):F.index!=null&&_.current({kind:"point",id:F.object.userData.ids[F.index]})},_t=Et=>{if(Et.buttons)return;const Vt=Nt(Et)[0];D(Vt?Vt.object.userData.kind==="camera"?`相机 #${Vt.object.userData.id}`:`三维点 #${Vt.object.userData.ids[Vt.index]}`:""),V.domElement.style.cursor=Vt?"pointer":"grab"};V.domElement.addEventListener("pointerdown",kt),V.domElement.addEventListener("pointerup",et),V.domElement.addEventListener("pointermove",_t);const wt=new ResizeObserver(()=>{const Et=O.clientWidth,Vt=O.clientHeight;!Et||!Vt||(V.setSize(Et,Vt),pt(),U())});wt.observe(O);function Kt(){if(j=0,!(w||document.hidden)){lt.update();for(const Et of I.children)Et.userData.cameraCenter&&(Et.visible=it.position.distanceToSquared(Et.userData.cameraCenter)>(N.radius*.02)**2);V.setViewport(0,0,O.clientWidth,O.clientHeight),V.render(Z,it)}}return document.addEventListener("visibilitychange",U),U(),()=>{w=!0,cancelAnimationFrame(j),document.removeEventListener("visibilitychange",U),wt.disconnect(),lt.dispose(),V.domElement.removeEventListener("pointerdown",kt),V.domElement.removeEventListener("pointerup",et),V.domElement.removeEventListener("pointermove",_t),Nc(I),Nc(Y),V.dispose(),O.removeChild(V.domElement),p.current=null}},[]),Lt.useEffect(()=>{const O=p.current;if(!O)return;if(Nc(O.content),O.pickables=[],!r){y.current(null),B(0),O.invalidate();return}const j=r.points,w=new Wa;for(let Z=0;Z<j.positions.length;Z+=3)w.expandByPoint(new J(j.positions[Z],j.positions[Z+1],j.positions[Z+2]));for(const Z of r.cameras)Z.registered&&Z.R&&Z.t&&w.expandByPoint(new J(...Pd(Z.R,Z.t)));w.isEmpty()&&w.set(new J(-1,-1,-1),new J(1,1,1)),O.bounds.copy(w),O.radius=Math.max(w.getSize(new J).length()/2,.001);const U=O.radius,V=aR(j.errors,j.track_lengths,j.ids.length,i.maxError,i.minTrack);if(O.pointIndices=V,B(i.points?V.length:0),i.points&&V.length){const Z=new Float32Array(V.length*3),it=new Float32Array(V.length*3),mt=new Ne,lt=Math.max(r.summary.p95_reprojection_error_px??1,.01),I=j.track_lengths.reduce((pt,N)=>Math.max(pt,N),2);V.forEach((pt,N)=>{if(Z.set(j.positions.slice(pt*3,pt*3+3),N*3),i.color==="rgb")mt.setRGB((j.colors[pt*3]??180)/255,(j.colors[pt*3+1]??180)/255,(j.colors[pt*3+2]??180)/255,Hn);else{const tt=i.color==="error"?Math.min((j.errors[pt]??lt)/lt,1):Math.min(Math.log(j.track_lengths[pt]??1)/Math.log(I),1);mt.setHSL(i.color==="error"?(1-tt)*.48:.55-tt*.4,.84,.55,Hn)}it.set([mt.r,mt.g,mt.b],N*3)});const Y=new li;Y.setAttribute("position",new vi(Z,3)),Y.setAttribute("color",new vi(it,3));const q=new Tv(Y,new bv({size:i.pointSize,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.96}));q.userData={kind:"points",ids:V.map(pt=>j.ids[pt])},O.content.add(q),O.pickables.push(q)}if(i.cameras)for(const Z of r.cameras){if(!Z.registered||!Z.R||!Z.t)continue;const it=Pd(Z.R,Z.t),mt=iR(Z,U*.09*i.cameraScale),lt=[];mt.forEach((N,tt)=>lt.push(...it,...N,...N,...mt[(tt+1)%4]));const I=new li;I.setAttribute("position",new Vn(lt,3));const Y=l?.kind==="camera"&&l.id===Z.image_id,q=new Ev(I,new qd({color:Y?16760681:5684173,transparent:!0,opacity:Y?1:.6}));q.userData.cameraCenter=new J().fromArray(it),O.content.add(q);const pt=new _i(new Qc(U*.0075,10,8),new Yc({color:Y?16760681:8118495}));pt.position.fromArray(it),pt.userData={kind:"camera",id:Z.image_id,cameraCenter:new J().fromArray(it)},O.content.add(pt),O.pickables.push(pt)}if(i.axes){const Z=new aE(U*.4);O.content.add(Z)}S.current!==t&&(O.fit(),S.current=t),O.invalidate()},[r,t,i,l]),Lt.useEffect(()=>{const O=r?.cameras.find(j=>j.image_id===h?.imageId);O&&p.current?.enterCamera(O)},[h]),Lt.useEffect(()=>{const O=p.current;if(!O||(Nc(O.highlight),O.invalidate(),!r||l?.kind!=="point"))return;const j=r.points.ids.indexOf(l.id);if(j<0)return;const w=new _i(new Qc(O.radius*.009,12,10),new Yc({color:16762744,depthTest:!1}));w.position.fromArray(r.points.positions,j*3),w.renderOrder=10,O.highlight.add(w)},[l,r]);const H=(O,j)=>s({...i,[O]:j}),k=r?.snapshots.find(O=>O.id===r.snapshot_id);return g.jsxs("div",{className:"viewport",children:[g.jsxs("div",{className:"view-heading",children:[g.jsxs("span",{className:"view-title",children:[g.jsx(H_,{size:14})," 三维重建"]}),g.jsxs("span",{className:"view-context",children:[k?$0(k.label):"模型空间"," ",g.jsx("span",{className:"live-dot"})," ","真实算法输出"]})]}),g.jsx("div",{ref:m,className:"canvas-host"}),(!r||r.points.ids.length===0)&&g.jsxs("div",{className:"empty-scene",children:[g.jsx("div",{className:"empty-orbit",children:g.jsx(H_,{size:32})}),g.jsx("h3",{children:r?"等待三维点生成":"从照片，进入三维空间"}),g.jsx("p",{children:r?"初始化成功后，点云和相机将出现在这里。":"选择一个已有结果，或导入数据开始重建。"}),g.jsx("span",{children:"只呈现真实结果 · 不生成示意点云"})]}),E&&g.jsx("div",{className:"view-error",children:E}),g.jsxs("div",{className:"view-toolbar",children:[g.jsx("button",{title:"适配完整场景","aria-label":"适配完整场景",onClick:()=>p.current?.fit(),children:g.jsx(Q0,{size:17})}),g.jsx("button",{title:"聚焦点云（仅调整观察视角）","aria-label":"聚焦点云",disabled:!r?.points.ids.length,onClick:()=>{if(!r)return;const O=new Wa,j=r.points.positions;for(let w=0;w<j.length;w+=3)O.expandByPoint(new J(j[w],j[w+1],j[w+2]));p.current?.fit(O)},children:g.jsx(hS,{size:17})}),g.jsx("button",{title:"重置视角","aria-label":"重置视角",onClick:()=>p.current?.fit(),children:g.jsx(J0,{size:16})}),g.jsx("span",{className:"toolbar-divider"}),g.jsx("button",{className:i.cameras?"active":"",title:"相机显隐","aria-label":"相机显隐","aria-pressed":i.cameras,onClick:()=>H("cameras",!i.cameras),children:g.jsx(sa,{size:17})}),g.jsx("button",{className:i.axes?"active":"",title:"坐标轴显隐","aria-label":"坐标轴显隐","aria-pressed":i.axes,onClick:()=>H("axes",!i.axes),children:g.jsx(Jy,{size:17})}),g.jsx("button",{className:C?"active":"",title:"显示设置","aria-label":"显示设置",onClick:()=>x(!C),children:g.jsx(pS,{size:17})}),g.jsx("span",{className:"toolbar-divider"}),g.jsx("button",{title:"保存视图 PNG","aria-label":"保存视图 PNG",disabled:!r,onClick:()=>{const O=p.current;if(!O)return;O.renderer.render(O.scene,O.camera);const j=document.createElement("a");j.href=O.renderer.domElement.toDataURL("image/png"),j.download="minicolmap-view.png",j.click()},children:g.jsx(rS,{size:17})}),g.jsx("button",{title:"全屏显示","aria-label":"全屏显示",onClick:()=>{const O=m.current?.parentElement;document.fullscreenElement?document.exitFullscreen():O&&O.requestFullscreen()},children:g.jsx(nS,{size:16})})]}),C&&g.jsxs("div",{className:"view-settings panel-popover",children:[g.jsxs("div",{className:"popover-title",children:["显示设置 ",g.jsx("span",{children:"仅影响当前视图"})]}),g.jsxs("label",{className:"switch-row",children:["显示点云",g.jsx("input",{type:"checkbox",checked:i.points,onChange:O=>H("points",O.target.checked)})]}),g.jsxs("label",{children:["点云着色",g.jsxs("select",{"aria-label":"点云着色",value:i.color,onChange:O=>H("color",O.target.value),children:[g.jsx("option",{value:"rgb",children:"原始 RGB"}),g.jsx("option",{value:"error",children:"重投影误差"}),g.jsx("option",{value:"track",children:"轨迹长度"})]})]}),g.jsxs("label",{children:["点大小 ",g.jsxs("span",{children:[i.pointSize," px"]}),g.jsx("input",{type:"range",min:"1",max:"9",step:".5",value:i.pointSize,onChange:O=>H("pointSize",+O.target.value)})]}),g.jsxs("label",{children:["相机视锥 ",g.jsxs("span",{children:[i.cameraScale.toFixed(1)," ×"]}),g.jsx("input",{type:"range",min:".2",max:"3",step:".1",value:i.cameraScale,onChange:O=>H("cameraScale",+O.target.value)})]}),g.jsxs("div",{className:"two-inputs",children:[g.jsxs("label",{children:["最大误差 / px",g.jsx("input",{type:"number",min:"0",step:".1",value:i.maxError,onChange:O=>H("maxError",+O.target.value)}),g.jsx("small",{children:"0 = 不筛选"})]}),g.jsxs("label",{children:["最短轨迹",g.jsx("input",{type:"number",min:"0",step:"1",value:i.minTrack,onChange:O=>H("minTrack",+O.target.value)}),g.jsx("small",{children:"观测图像数量"})]})]})]}),r&&g.jsxs("div",{className:"scene-stats",children:[g.jsxs("div",{children:[g.jsx("strong",{children:en(v,0)}),g.jsxs("span",{children:["显示点 / ",en(r.points.ids.length,0)]})]}),g.jsxs("div",{children:[g.jsxs("strong",{children:[r.summary.registered_images,g.jsxs("i",{children:[" / ",r.summary.image_count]})]}),g.jsx("span",{children:"已注册相机"})]}),g.jsxs("div",{children:[g.jsxs("strong",{children:[en(r.summary.mean_reprojection_error_px),g.jsx("i",{children:" px"})]}),g.jsx("span",{children:"平均重投影误差"})]})]}),r&&i.color!=="rgb"&&g.jsxs("div",{className:`color-legend ${i.color}`,children:[g.jsx("span",{children:i.color==="error"?"重投影误差 / px":"轨迹长度 / 张"}),g.jsx("i",{}),g.jsxs("div",{children:[g.jsx("b",{children:i.color==="error"?"0":"1"}),g.jsxs("b",{children:[i.color==="error"?en(r.summary.p95_reprojection_error_px):r.points.track_lengths.reduce((O,j)=>Math.max(O,j),0),i.color==="error"?"+":""]})]})]}),g.jsxs("div",{className:"view-footer",children:[g.jsxs("span",{children:[g.jsx(oS,{size:12})," ",P||"左键旋转 · 右键平移 · 滚轮缩放"]}),g.jsxs("span",{children:["坐标单位：重建尺度 ",g.jsx("b",{className:"axis-x",children:"X"}),g.jsx("b",{className:"axis-y",children:"Y"}),g.jsx("b",{className:"axis-z",children:"Z"})]})]})]})}const oR=[{key:"features",name:"特征提取",subtitle:"SIFT 与描述子匹配",fields:[{key:"max_features",label:"最大特征数",unit:"点 / 图",help:"每张图像最多保留的 SIFT 特征数。",step:100,min:2},{key:"ratio",label:"匹配距离比",help:"Lowe 比值阈值；越小筛选越严格。",step:.01,min:.01}]},{key:"geometry",name:"几何验证",subtitle:"RANSAC 与初始模型",fields:[{key:"threshold_px",label:"Sampson 阈值",unit:"px",help:"内部使用该数值的平方筛选 Sampson 误差。",step:.1,min:.01},{key:"max_trials",label:"最大采样次数",unit:"次",help:"自适应 RANSAC 的采样硬上限；置信度要求更多次数时仍受此限制。",step:100,min:1},{key:"confidence",label:"RANSAC 置信度",help:"目标概率，严格在0与1之间；提高置信度通常需要更多采样，仍受硬上限限制。",step:.001,min:0,max:1},{key:"min_trials",label:"最少采样次数",unit:"次",help:"提前停止前至少抽样的次数；若超过最大采样次数，则硬上限优先。",step:1,min:1},{key:"min_inliers",label:"最少内点数",unit:"点",help:"图像对准入和初始化最终保留点的下限。",step:1,min:8}]},{key:"mapping",name:"增量建图",subtitle:"PnP、三角化与质量筛选",fields:[{key:"min_pnp_points",label:"PnP 最少对应点",unit:"点",help:"注册前和最终筛选后都需满足的 2D–3D 对应数量。",step:1,min:6},{key:"pnp_threshold_px",label:"PnP 内点阈值",unit:"px",help:"传给 PnP RANSAC 的像素距离阈值。",step:.1,min:.01},{key:"min_angle_deg",label:"最小三角化夹角",unit:"°",help:"夹角过小的点深度不稳定，将被拒绝。",step:.1,min:.01},{key:"max_reprojection_px",label:"最大重投影误差",unit:"px",help:"初始化、补点及新增观测的像素误差上限。",step:.1,min:.01}]},{key:"bundle_adjustment",name:"束调整 BA",subtitle:"对现有位姿与点进行整体优化",fields:[{key:"max_nfev",label:"函数评估预算",unit:"次",help:"允许的最大函数评估次数；达到预算不代表已收敛。",step:10,min:1},{key:"f_scale",label:"鲁棒损失尺度",unit:"px",help:"控制鲁棒损失对大残差的抑制尺度。",step:.1,min:.01}]}];function lR({config:r,defaults:t,disabled:i,onChange:s,onValidate:l,onError:c}){function h(d,m,p){s({...r,[d]:{...r[d],[m]:p}})}return g.jsxs("div",{className:"config-panel",children:[g.jsxs("div",{className:"panel-intro",children:["参数直接传入现有 Python 流水线。",g.jsx("br",{}),"修改后将在下一次运行生效。"]}),g.jsxs("div",{className:"small-actions",children:[g.jsxs("button",{title:"恢复默认参数",disabled:i,onClick:()=>s(structuredClone(t)),children:[g.jsx(J0,{size:13}),"默认"]}),g.jsxs("label",{className:`button ${i?"disabled":""}`,children:[g.jsx(kh,{size:13}),"导入",g.jsx("input",{type:"file",accept:".json",disabled:i,hidden:!0,onChange:async d=>{const m=d.target.files?.[0];if(m){try{const p=JSON.parse(await m.text());s(await On("/api/config/validate",zc(p)))}catch(p){c(String(p))}d.target.value=""}}})]}),g.jsxs("button",{onClick:()=>vS("mini-colmap-config.json",r),children:[g.jsx(eS,{size:13}),"导出"]})]}),g.jsxs("fieldset",{disabled:i,children:[g.jsxs("label",{className:"number-field seed-field",children:[g.jsxs("span",{children:["随机种子 ",g.jsx("small",{children:"复现实验"})]}),g.jsx("input",{type:"number",min:"0",step:"1",value:r.seed,onChange:d=>s({...r,seed:+d.target.value})})]}),oR.map(d=>g.jsxs("details",{open:!0,className:"config-group",children:[g.jsxs("summary",{children:[d.name,g.jsx("span",{children:d.subtitle})]}),d.key==="bundle_adjustment"&&g.jsxs("label",{className:"switch-row",children:["启用最终 BA",g.jsx("input",{type:"checkbox",checked:r.bundle_adjustment.enabled,onChange:m=>h("bundle_adjustment","enabled",m.target.checked)})]}),d.fields.map(m=>g.jsxs("label",{className:"number-field",title:m.help,children:[g.jsxs("span",{children:[m.label,g.jsx("small",{children:m.unit??""})]}),g.jsx("input",{type:"number",step:m.step??1,min:m.min,max:m.max,"aria-label":m.label,value:Number(r[d.key][m.key]),onChange:p=>h(d.key,m.key,+p.target.value)})]},m.key)),d.key==="geometry"&&g.jsx("p",{className:"form-note",children:"自适应 RANSAC：置信度不是内点比例；最少采样次数超过硬上限时，按上限执行。"}),d.key==="bundle_adjustment"&&g.jsxs("label",{className:"number-field",children:[g.jsx("span",{children:"损失函数"}),g.jsxs("select",{value:r.bundle_adjustment.loss,onChange:m=>h("bundle_adjustment","loss",m.target.value),children:[g.jsx("option",{value:"linear",children:"Linear"}),g.jsx("option",{value:"huber",children:"Huber"}),g.jsx("option",{value:"soft_l1",children:"Soft L1"})]})]})]},d.key))]}),g.jsx("button",{className:"outline full",disabled:i,onClick:l,children:"检查参数配置"}),g.jsx("p",{className:"form-note",children:"悬停字段查看说明。初始化两视图优化与最终 BA 为不同步骤。"})]})}function Io({label:r,values:t}){return g.jsxs("div",{className:"matrix-block",children:[g.jsx("span",{children:r}),g.jsx("div",{className:"matrix",children:t.map((i,s)=>g.jsx("div",{children:i.map((l,c)=>g.jsx("code",{children:en(l,4)},c))},s))})]})}function Y0({url:r,width:t,height:i,xy:s,projected:l}){const[c,h]=Lt.useState(!1),[d,m]=Lt.useState([t??1,i??1]);return Lt.useEffect(()=>{h(!1),m([t??1,i??1])},[r,t,i]),g.jsx("div",{className:"photo-preview",children:r&&!c?g.jsxs(g.Fragment,{children:[g.jsx("img",{src:r,alt:"选中相机的原始照片",onError:()=>h(!0),onLoad:p=>m([p.currentTarget.naturalWidth,p.currentTarget.naturalHeight])}),s&&g.jsxs("svg",{viewBox:`0 0 ${d[0]} ${d[1]}`,"aria-label":"观测点和重投影点",children:[g.jsx("circle",{cx:s[0],cy:s[1],r:d[0]*.013,fill:"none",stroke:"#62efbd",strokeWidth:d[0]*.004}),g.jsx("path",{d:`M${s[0]-d[0]*.02},${s[1]}h${d[0]*.04} M${s[0]},${s[1]-d[0]*.02}v${d[0]*.04}`,stroke:"#62efbd",strokeWidth:d[0]*.0025}),l&&g.jsxs(g.Fragment,{children:[g.jsx("line",{x1:s[0],y1:s[1],x2:l[0],y2:l[1],stroke:"#ffc478",strokeWidth:d[0]*.003}),g.jsx("circle",{cx:l[0],cy:l[1],r:d[0]*.006,fill:"#ffc478"})]})]}),g.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"photo-open",title:"打开原始照片",children:g.jsx(iS,{size:12})})]}):g.jsxs("div",{className:"photo-missing",children:[g.jsx(sa,{size:24}),g.jsx("span",{children:"原始照片不可用"}),g.jsx("small",{children:"仍可检查三维模型和位姿"})]})})}function cR({scene:r,inputDataset:t,runId:i,snapshot:s,selection:l,onSelect:c,onViewCamera:h,viewCameraId:d}){const[m,p]=Lt.useState(null),[_,y]=Lt.useState(""),[S,E]=Lt.useState(0),[b,C]=Lt.useState(!1);Lt.useEffect(()=>{if(p(null),y(""),E(0),l?.kind!=="point"||!i)return;let P=!1;return C(!0),On(`/api/runs/${encodeURIComponent(i)}/points/${l.id}?snapshot=${encodeURIComponent(s)}`).then(D=>{P||p(D)}).catch(D=>{P||y(String(D))}).finally(()=>{P||C(!1)}),()=>{P=!0}},[i,s,l]),Lt.useEffect(()=>{if(!m||d==null)return;const P=m.observations.findIndex(D=>D.image_id===d);P>=0&&E(P)},[m,d]);let x=l?.kind==="camera"?r?.cameras.find(P=>P.image_id===l.id):void 0;if(!r&&l?.kind==="camera"&&t){const P=t.images.find(H=>H.id===l.id),D=t.cameras.find(H=>H.id===P?.camera_id);P&&D&&(x={...P,image_id:P.id,K:D.K,registered:!1,observations:0})}const v=m?.observations[S],B=r?.cameras.find(P=>P.image_id===v?.image_id);return l?g.jsxs("aside",{className:"inspector",children:[g.jsxs("div",{className:"panel-heading",children:[x?g.jsx(sa,{size:14}):g.jsx(Q0,{size:14})," ",x?"相机信息":"三维点信息",g.jsx("button",{className:"text-button",onClick:()=>c(null),children:"取消选择"})]}),g.jsx("div",{className:"inspector-scroll",children:x?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"object-title",children:[g.jsx("span",{className:"object-icon",children:g.jsx(sa,{size:20})}),g.jsxs("div",{children:[g.jsx("strong",{children:x.name}),g.jsxs("span",{children:["IMAGE #",x.image_id]})]}),g.jsx("i",{className:`status-dot ${x.registered?"good":""}`})]}),g.jsx(Y0,{url:x.image_url,width:x.width,height:x.height}),x.registered&&x.R&&x.t&&g.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(x.image_id),children:[g.jsx(sa,{size:14})," 对齐至此相机"]}),g.jsxs("div",{className:"detail-grid",children:[g.jsx("span",{children:"注册状态"}),g.jsx("strong",{children:x.registered?"已注册":"未注册"}),g.jsx("span",{children:"图像尺寸"}),g.jsxs("strong",{children:[x.width," × ",x.height]}),g.jsx("span",{children:"相机 ID"}),g.jsx("strong",{children:x.camera_id}),g.jsx("span",{children:"有效观测"}),g.jsx("strong",{children:en(x.observations,0)})]}),g.jsx(Io,{label:"内参 K",values:x.K}),x.registered&&x.R&&x.t?g.jsxs(g.Fragment,{children:[g.jsx(Io,{label:"世界 → 相机旋转 R",values:x.R}),g.jsx(Io,{label:"平移 t",values:[x.t]}),x.center&&g.jsx(Io,{label:"相机中心 C = −Rᵀt",values:[x.center]}),g.jsx("p",{className:"form-note",children:"相机局部坐标：+Z 朝前，+Y 朝下。位置使用重建尺度。"})]}):g.jsx("div",{className:"info-note",children:"该图像尚未估计出相机位姿，因此不会在三维视图中生成相机。"})]}):b?g.jsx("div",{className:"loading-inline",children:"读取点的观测轨迹…"}):_?g.jsx("div",{className:"inline-error",children:_}):m?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"object-title",children:[g.jsx("span",{className:"object-icon point-icon",children:g.jsx(I_,{size:20})}),g.jsxs("div",{children:[g.jsxs("strong",{children:["三维点 #",m.id]}),g.jsx("span",{children:"POINT INSPECTOR"})]}),g.jsx("span",{className:"rgb-swatch",style:{background:`rgb(${m.color.join(",")})`}})]}),g.jsx(Io,{label:"世界坐标 XYZ",values:[m.xyz]}),g.jsxs("div",{className:"detail-grid",children:[g.jsx("span",{children:"RGB 颜色"}),g.jsx("strong",{children:m.color.join(", ")}),g.jsx("span",{children:"轨迹长度"}),g.jsxs("strong",{children:[m.track_length," 张图像"]}),g.jsx("span",{children:"平均误差"}),g.jsxs("strong",{children:[en(m.mean_error)," px"]})]}),g.jsxs("div",{className:"section-label",children:["关联观测 ",g.jsx("span",{children:m.observations.length})]}),d!=null&&!m.observations.some(P=>P.image_id===d)&&g.jsx("div",{className:"info-note",children:"上次对齐的相机没有该点的记录观测；下方显示其他相机的观测。"}),g.jsx("div",{className:"observation-list",children:m.observations.map((P,D)=>g.jsxs("button",{className:S===D?"selected":"",onClick:()=>E(D),children:[g.jsx(sa,{size:13}),g.jsx("span",{children:r?.cameras.find(H=>H.image_id===P.image_id)?.name??`图像 #${P.image_id}`}),g.jsxs("small",{children:[en(P.error)," px"]}),g.jsx(Vh,{size:12})]},`${P.image_id}-${P.keypoint_index}`))}),v&&g.jsxs(g.Fragment,{children:[g.jsx(Y0,{url:v.image_url??B?.image_url,width:B?.width,height:B?.height,xy:v.xy,projected:v.projected_xy}),g.jsxs("div",{className:"pixel-legend",children:[g.jsxs("span",{children:[g.jsx("i",{}),"观测位置"]}),g.jsxs("span",{children:[g.jsx("i",{}),"重投影位置"]})]}),B?.registered&&B.R&&B.t&&g.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(v.image_id),children:[g.jsx(sa,{size:14})," 对齐至此观测相机"]}),g.jsxs("div",{className:"detail-grid",children:[g.jsx("span",{children:"特征点索引"}),g.jsx("strong",{children:v.keypoint_index}),g.jsx("span",{children:"观测像素"}),g.jsx("strong",{children:v.xy.map(P=>en(P,2)).join(", ")}),g.jsx("span",{children:"投影像素"}),g.jsx("strong",{children:v.projected_xy?.map(P=>en(P,2)).join(", ")??"—"})]}),g.jsxs("button",{className:"outline full",onClick:()=>c({kind:"camera",id:v.image_id}),children:[g.jsx(sa,{size:13}),"检查这台相机"]})]})]}):null})]}):g.jsxs("aside",{className:"inspector",children:[g.jsxs("div",{className:"panel-heading",children:[g.jsx(kc,{size:14}),"场景检查器"]}),g.jsxs("div",{className:"inspector-empty",children:[g.jsx("div",{className:"inspector-symbol",children:g.jsx(I_,{size:26})}),g.jsx("h3",{children:"探索你的重建"}),g.jsxs("p",{children:["点选三维点或相机，",g.jsx("br",{}),"查看对应照片、位姿与观测。"]}),g.jsxs("div",{className:"legend",children:[g.jsxs("span",{children:[g.jsx("i",{className:"legend-point"}),"三维点"]}),g.jsxs("span",{children:[g.jsx("i",{className:"legend-camera"}),"注册相机"]}),g.jsxs("span",{children:[g.jsx("i",{className:"legend-selected"}),"当前选中"]})]})]}),g.jsxs("div",{className:"inspector-hint",children:[g.jsx(kc,{size:14}),g.jsx("p",{children:"所有坐标、颜色与位姿均来自算法结果。视图操作不会修改地图。"})]})]})}function uR({timing:r}){return g.jsxs("details",{className:"timing-panel","data-testid":"pipeline-timings",open:!0,children:[g.jsxs("summary",{children:[g.jsx(tS,{size:14})," Pipeline 计时 ",g.jsxs("strong",{children:[en(r.total_seconds,3)," 秒"]}),g.jsx(Oc,{size:12})]}),g.jsxs("table",{children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{children:"阶段"}),g.jsx("th",{children:"耗时 / 秒"}),g.jsx("th",{children:"占总耗时"})]})}),g.jsx("tbody",{children:Object.entries(r.stages_seconds).map(([t,i])=>g.jsxs("tr",{children:[g.jsx("td",{children:jc(t)}),g.jsx("td",{children:en(i,3)}),g.jsx("td",{children:r.total_seconds>0?`${en(i/r.total_seconds*100,1)}%`:"—"})]},t))})]}),g.jsx("div",{className:"timing-details",children:Object.entries(r.details).map(([t,i])=>g.jsxs("span",{children:[t==="descriptor_matching"?"描述子匹配":t==="fundamental_ransac"?"F-RANSAC":t,"：",en(i.seconds,3)," 秒 / ",i.calls," 次"]},t))}),g.jsx("p",{children:"墙钟时间，包含该阶段的文件读写与快照开销；匹配子项已包含在阶段总耗时中，不重复相加。"}),r.status!=="completed"&&g.jsx("p",{children:r.status==="failed"?"任务失败，以上仅统计已执行部分。":"以上为最近一次阶段检查点，不代表完整运行耗时。"})]})}function fR({onClose:r,onImported:t}){const[i,s]=Lt.useState("manifest"),[l,c]=Lt.useState([]),[h,d]=Lt.useState(""),[m,p]=Lt.useState({fx:"",fy:"",cx:"",cy:""}),[_,y]=Lt.useState(!1),[S,E]=Lt.useState(""),b=l.filter(x=>/\.json$/i.test(x.name));Lt.useEffect(()=>{const x=l.find(v=>v.name==="dataset.json")??l.find(v=>/\.json$/i.test(v.name));d(x?.webkitRelativePath||x?.name||"")},[l]);async function C(){y(!0),E("");try{if(!l.length)throw Error("请先选择数据目录或照片。");const x=new FormData;x.append("mode",i);for(const B of l)x.append("files",B),x.append("paths",B.webkitRelativePath||B.name);if(i==="manifest"){if(!h)throw Error("所选目录中未找到 JSON 数据清单。");x.append("manifest_path",h)}if(i==="photos"){if(Object.values(m).some(B=>B.trim()===""||!Number.isFinite(+B)))throw Error("请填写全部四个内参值。");if(+m.fx<=0||+m.fy<=0)throw Error("fx 和 fy 必须大于 0。");x.append("camera",JSON.stringify(Object.fromEntries(Object.entries(m).map(([B,P])=>[B,+P]))))}const v=await On("/api/datasets/import",{method:"POST",body:x});t(v),r()}catch(x){E(String(x))}finally{y(!1)}}return g.jsx("div",{className:"modal-backdrop",onMouseDown:x=>{x.target===x.currentTarget&&!_&&r()},children:g.jsxs("section",{className:"modal import-modal",role:"dialog","aria-modal":"true","aria-label":"导入重建数据",children:[g.jsxs("div",{className:"modal-heading",children:[g.jsxs("div",{children:[g.jsx("span",{className:"eyebrow",children:"DATA IMPORT"}),g.jsx("h2",{children:"导入重建数据"})]}),g.jsx("button",{className:"icon-button","aria-label":"关闭导入窗口",disabled:_,onClick:r,children:g.jsx(jh,{size:18})})]}),g.jsxs("div",{className:"segmented",children:[g.jsxs("button",{className:i==="manifest"?"selected":"",onClick:()=>{s("manifest"),c([]),E("")},children:[g.jsx(Vc,{size:15}),"已有数据集"]}),g.jsxs("button",{className:i==="photos"?"selected":"",onClick:()=>{s("photos"),c([]),E("")},children:[g.jsx(F_,{size:15}),"照片 + 相机内参"]})]}),g.jsx("p",{className:"muted",children:i==="manifest"?"选择包含 dataset.json 与图像文件的完整目录。清单中的相对路径将被保留。":"导入同一台相机拍摄、已去畸变且尺寸一致的照片，并填写对应的真实内参。"}),g.jsxs("div",{className:"upload-zone",children:[g.jsx(kh,{size:28}),g.jsx("strong",{children:l.length?`已选择 ${l.length} 个文件`:"选择本地数据文件"}),g.jsx("span",{children:l.length?l.slice(0,3).map(x=>x.name).join(" · "):"文件保存在本机项目中，不上传到外部服务"}),g.jsxs("div",{className:"upload-actions",children:[g.jsxs("label",{className:"button outline",children:[g.jsx(Vc,{size:15}),"选择文件夹",g.jsx("input",{type:"file",multiple:!0,hidden:!0,webkitdirectory:"",onChange:x=>{c(Array.from(x.target.files??[]).filter(v=>i==="manifest"||/\.(png|jpg|jpeg|bmp|tif|tiff|webp)$/i.test(v.name))),E("")}})]}),i==="photos"&&g.jsxs("label",{className:"button outline",children:[g.jsx(F_,{size:15}),"选择照片",g.jsx("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:x=>{c(Array.from(x.target.files??[])),E("")}})]})]})]}),i==="manifest"&&b.length>0&&g.jsxs("label",{className:"manifest-select",children:["数据清单",g.jsx("select",{"aria-label":"选择导入的数据清单",value:h,onChange:x=>d(x.target.value),children:b.map(x=>g.jsx("option",{value:x.webkitRelativePath||x.name,children:x.webkitRelativePath||x.name},x.webkitRelativePath||x.name))})]}),i==="photos"&&g.jsxs("div",{className:"intrinsics",children:[g.jsxs("div",{className:"section-label",children:[g.jsx(sa,{size:14}),"共享相机内参 ",g.jsx("span",{children:"单位 px"})]}),g.jsx("div",{className:"intrinsics-grid",children:["fx","fy","cx","cy"].map(x=>g.jsxs("label",{children:[x,g.jsx("input",{type:"number",step:"any",placeholder:x==="fx"||x==="fy"?"焦距":"主点坐标",value:m[x],onChange:v=>p({...m,[x]:v.target.value})})]},x))}),g.jsx("p",{className:"form-note",children:"图像尺寸自动读取并校验。此界面不会猜测焦距，也不会自动去畸变。"})]}),S&&g.jsx("div",{className:"inline-error",children:S}),g.jsxs("div",{className:"modal-footer",children:[g.jsx("button",{className:"quiet",disabled:_,onClick:r,children:"取消"}),g.jsxs("button",{className:"primary",disabled:_||!l.length,onClick:()=>void C(),children:[_?g.jsx(Pc,{size:15,className:"spin"}):g.jsx(kh,{size:15}),"校验并导入"]})]})]})})}const hR={running:"重建进行中",completed:"重建完成",failed:"重建失败",cancelled:"已取消",interrupted:"运行中断",imported:"已导入模型"};function Lc(r){return r.status==="completed"&&r.registered_images!=null&&r.image_count!=null&&r.registered_images<r.image_count?`部分重建 ${r.registered_images}/${r.image_count}`:hR[r.status]??r.status}const dR={points:!0,cameras:!0,axes:!0,pointSize:2.5,cameraScale:1,color:"rgb",maxError:0,minTrack:0},Gh=[["features","特征"],["pair_geometry","匹配"],["tracks","轨迹"],["initialization","初始化"],["incremental_mapping","建图"],["bundle_adjustment","BA"],["export","导出"]];function pR(r){if(typeof r.message=="string")return r.message;if(typeof r.text=="string")return r.text;const t=typeof r.stage=="string"?jc(r.stage):"",i=Object.entries(r).filter(([s])=>!["kind","type","stage","timestamp","time","seq","snapshot"].includes(s)).map(([s,l])=>`${s}: ${typeof l=="object"?JSON.stringify(l):l}`).join(" · ");return[t,i].filter(Boolean).join(" · ")||String(r.kind??"状态更新")}function mR(r){if(r==null)return"—";const t=Math.round(r);return t<60?`${t} 秒`:`${Math.floor(t/60)} 分 ${t%60} 秒`}function gR(){const[r,t]=Lt.useState([]),[i,s]=Lt.useState([]),[l,c]=Lt.useState(null),[h,d]=Lt.useState(null),[m,p]=Lt.useState(""),[_,y]=Lt.useState(null),[S,E]=Lt.useState(""),[b,C]=Lt.useState(null),[x,v]=Lt.useState(null),[B,P]=Lt.useState("latest"),[D,H]=Lt.useState(null),[k,O]=Lt.useState([]),[j,w]=Lt.useState(null),[U,V]=Lt.useState(null),[Z,it]=Lt.useState(null),[mt,lt]=Lt.useState(dR),[I,Y]=Lt.useState("images"),[q,pt]=Lt.useState("log"),[N,tt]=Lt.useState([]),[yt,Mt]=Lt.useState(null),[Nt,kt]=Lt.useState(!0),[et,_t]=Lt.useState(!1),[wt,Kt]=Lt.useState(!1),[Et,Vt]=Lt.useState(!1),[ye,F]=Lt.useState(!1),[he,oe]=Lt.useState(!1),[te,Ht]=Lt.useState(!1),[Ie,jt]=Lt.useState(!1),[fe,Xe]=Lt.useState(""),[Ze,z]=Lt.useState(0),[T,at]=Lt.useState(0),dt=i.find(L=>L.status==="running"),xt=Lt.useRef(null),ht=Lt.useRef(null),Ft=Lt.useRef(null),bt=Lt.useCallback((L,ct=!0)=>Mt({text:L,error:ct}),[]),Xt=Lt.useCallback(L=>{C(L),s(ct=>[L,...ct.filter(Pt=>Pt.id!==L.id)])},[]),qt=Lt.useCallback(L=>{try{localStorage.setItem("minicolmap.lastRun",L.id)}catch{}E(L.id),C(L),P("latest"),w(null),v(null),H(null),O([]),tt([]),z(ct=>ct+1),L.dataset_id&&p(L.dataset_id)},[]),Tt=Lt.useCallback(L=>{p(L),y(ct=>ct?.id===L?ct:null),E(""),C(null),v(null),Kt(!1),w(null),H(null),O([]),tt([]),P("latest"),Y("images")},[]);Lt.useEffect(()=>{let L=!1;return On("/api/bootstrap").then(ct=>{if(L)return;t(ct.datasets),s(ct.runs),c(ct.defaults),d(structuredClone(ct.defaults));let Pt="";try{Pt=localStorage.getItem("minicolmap.lastRun")??""}catch{}const ne=ct.runs.find(Oe=>Oe.status==="running")??ct.runs.find(Oe=>Oe.id===Pt)??ct.runs.find(Oe=>Oe.name==="temple_ring_8_arc_no_ba_01")??ct.runs.find(Oe=>Oe.name.includes("temple_ring_8_arc_no_ba"))??ct.runs[0];ne&&qt(ne);const se=ct.datasets.find(Oe=>Oe.name.includes("8"))??ct.datasets[0];!ne?.dataset_id&&se&&p(se.id)}).catch(ct=>{L||bt(String(ct))}).finally(()=>{L||kt(!1)}),()=>{L=!0}},[bt,qt]),Lt.useEffect(()=>{if(!m){y(null);return}let L=!1;return On(`/api/datasets/${encodeURIComponent(m)}`).then(ct=>{L||y(ct)}).catch(ct=>{L||bt(String(ct))}),()=>{L=!0}},[m,bt]),Lt.useEffect(()=>{if(!S)return;let L=!1,ct=!1,Pt=!1;const ne=new AbortController,se=async()=>{if(!L){if(ct){Pt=!0;return}ct=!0,Kt(!0);try{const Oe=await On(`/api/runs/${encodeURIComponent(S)}/scene?snapshot=${encodeURIComponent(B)}`,{signal:ne.signal});L||v(Oe)}catch{L||v(null)}finally{ct=!1,L||(Kt(!1),Pt&&(Pt=!1,se()))}}};return Ft.current=()=>void se(),()=>{L=!0,ne.abort(),Ft.current=null}},[S,B]),Lt.useEffect(()=>{Ft.current?.()},[S,B,Ze]),Lt.useEffect(()=>{if(!S)return;let L=!1;return Promise.all([On(`/api/runs/${encodeURIComponent(S)}/reports`),On(`/api/runs/${encodeURIComponent(S)}/artifacts`)]).then(([ct,Pt])=>{L||(H(ct),O(Pt))}).catch(ct=>{!L&&b?.status!=="running"&&bt(String(ct))}),()=>{L=!0}},[S,b?.status,T,bt]),Lt.useEffect(()=>{if(!S||b?.status!=="running"){Xe("");return}const L=new EventSource(`/api/runs/${encodeURIComponent(S)}/events`);let ct,Pt=!1,ne=!1,se=!1;const Oe=($e=!1,Be=!1)=>{ne||=$e,se||=Be,!ct&&(ct=setTimeout(()=>{ct=void 0,On(`/api/runs/${encodeURIComponent(S)}`).then(Ce=>{Pt||Xt(Ce)}).catch(()=>{}),ne&&z(Ce=>Ce+1),se&&at(Ce=>Ce+1),ne=se=!1},300))};return L.onopen=()=>{Xe("已连接"),Oe(!0,!0)},L.onmessage=$e=>{try{const Be=JSON.parse($e.data);tt(fa=>[...fa,{time:new Date(typeof Be.time=="number"?Be.time*1e3:Date.now()).toLocaleTimeString("zh-CN",{hour12:!1}),kind:String(Be.kind??Be.type??"info"),text:pR(Be)}].slice(-500));const Ce=String(Be.kind??""),Qn=["complete","terminal","error","cancelled"].includes(Ce);Oe(Ce==="snapshot"||Qn,Ce==="timing"||Ce==="warning"||Qn)}catch{}},L.onerror=()=>{Xe("连接恢复中…")},()=>{Pt=!0,L.close(),ct&&clearTimeout(ct)}},[S,b?.status,Xt]),Lt.useEffect(()=>{if(!dt)return;let L=!1,ct;const Pt=()=>{On(`/api/runs/${encodeURIComponent(dt.id)}`).then(ne=>{L||(s(se=>se.map(Oe=>Oe.id===ne.id?ne:Oe)),ne.id===S&&(C(ne),ne.status!=="running"&&(z(se=>se+1),at(se=>se+1))))}).catch(()=>{}).finally(()=>{L||(ct=setTimeout(Pt,2e3))})};return ct=setTimeout(Pt,2e3),()=>{L=!0,clearTimeout(ct)}},[dt?.id,S]),Lt.useEffect(()=>{ht.current?.scrollIntoView({block:"nearest"})},[N]),Lt.useEffect(()=>{const L=ct=>{ct.key==="Escape"&&(w(null),jt(!1))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]);async function Ot(){if(!(!m||!h)){_t(!0),Mt(null);try{const L=await On("/api/config/validate",zc(h));d(L);const ct=await On("/api/runs",zc({dataset_id:m,config:L}));Xt(ct),qt(ct),pt("log")}catch(L){bt(String(L))}finally{_t(!1)}}}async function Jt(){const L=i.find(ct=>ct.status==="running");if(L){_t(!0);try{const ct=await On(`/api/runs/${encodeURIComponent(L.id)}/cancel`,{method:"POST"});ct.id===S?(Xt(ct),z(Pt=>Pt+1)):s(Pt=>[ct,...Pt.filter(ne=>ne.id!==ct.id)])}catch(ct){bt(String(ct))}finally{_t(!1)}}}async function Yt(L){_t(!0);try{const ct=new FormData;ct.append("file",L);const Pt=await On("/api/results/import",{method:"POST",body:ct});Xt(Pt),qt(Pt),bt("模型已导入。原始照片缺失时仍可检查点云与位姿。",!1)}catch(ct){bt(String(ct))}finally{_t(!1)}}const Ut=x?.cameras??_?.images.map(L=>({...L,image_id:L.id,registered:!1,observations:0,K:_.cameras.find(ct=>ct.id===L.camera_id)?.K??[]}))??[],ae=x?.summary,W=ae?.registered_images??b?.registered_images??0,Rt=ae?.image_count??b?.image_count??_?.image_count??0,Dt=x?.snapshots?.length?x.snapshots:b?.snapshots??[],Gt=Gh.findIndex(([L])=>L===b?.stage||L==="bundle_adjustment"&&b?.stage==="ba"||L==="export"&&b?.stage==="exporting"||L==="features"&&b?.stage==="feature_extraction"||L==="incremental_mapping"&&["registration","mapping"].includes(b?.stage??"")||L==="pair_geometry"&&b?.stage==="matching"),At=b&&!b.images_available;return g.jsxs("div",{className:`app ${ye?"left-hidden":""} ${he?"right-hidden":""}`,children:[g.jsxs("header",{className:"topbar",children:[g.jsxs("div",{className:"brand",children:[g.jsx("div",{className:"brand-mark",children:g.jsx(O_,{size:23,strokeWidth:1.5})}),g.jsxs("div",{children:[g.jsxs("strong",{children:["MINI",g.jsx("span",{children:"COLMAP"})]}),g.jsx("small",{children:"三维重建工作台"})]})]}),g.jsxs("div",{className:"project-heading",children:[g.jsx("span",{className:"project-divider"}),g.jsx(Vc,{size:15}),g.jsx("span",{children:_?.name??"未选择数据集"}),g.jsxs("span",{className:"local-pill",children:[g.jsx("i",{}),"LOCAL"]})]}),g.jsxs("div",{className:"top-actions",children:[g.jsxs("button",{className:"quiet","data-testid":"import-model",onClick:()=>xt.current?.click(),disabled:et,children:[g.jsx(B_,{size:15}),"打开模型"]}),g.jsx("input",{ref:xt,hidden:!0,type:"file",accept:".json",onChange:L=>{const ct=L.target.files?.[0];ct&&Yt(ct),L.target.value=""}}),g.jsxs("details",{className:"export-menu",children:[g.jsxs("summary",{className:`button quiet ${b?"":"disabled"}`,children:[g.jsx(L_,{size:15}),"导出",g.jsx(Oc,{size:12})]}),g.jsx("div",{className:"dropdown",children:k.length?k.map(L=>g.jsxs("a",{href:L.url,download:!0,children:[/\.png|\.jpe?g/i.test(L.name)?g.jsx(ch,{size:13}):g.jsx(B_,{size:13}),g.jsx("span",{children:L.name}),g.jsx(L_,{size:12})]},L.url)):g.jsx("p",{children:"当前还没有可下载的结果。"})})]}),g.jsx("span",{className:"action-divider"}),dt?g.jsxs("button",{className:"cancel-button","data-testid":"cancel-run",disabled:et,onClick:()=>void Jt(),children:[g.jsx(mS,{size:13,fill:"currentColor"}),"取消重建"]}):g.jsxs("button",{className:"primary start-button","data-testid":"start-run",disabled:et||!m||Nt,onClick:()=>void Ot(),children:[et?g.jsx(Pc,{size:15,className:"spin"}):g.jsx(uS,{size:14,fill:"currentColor"}),"开始重建"]}),g.jsx("button",{className:"icon-button help-button","aria-label":"操作说明",title:"操作说明",onClick:()=>jt(!0),children:g.jsx(kc,{size:17})})]})]}),yt&&g.jsxs("div",{className:`notice ${yt.error?"error":"success"}`,role:"alert",children:[yt.error?g.jsx(_S,{size:15}):g.jsx(P_,{size:15}),g.jsx("span",{children:yt.text}),g.jsx("button",{"aria-label":"关闭通知",onClick:()=>Mt(null),children:g.jsx(jh,{size:14})})]}),g.jsxs("div",{className:"workspace",children:[g.jsxs("aside",{className:"left-panel",children:[g.jsxs("div",{className:"workspace-label",children:[g.jsx("span",{children:"工作区"}),g.jsx("button",{className:"icon-button",title:"收起左侧栏","aria-label":"收起左侧栏",onClick:()=>F(!0),children:g.jsx(lS,{size:15})})]}),g.jsxs("div",{className:"dataset-picker",children:[g.jsx("label",{children:"当前输入数据"}),g.jsxs("div",{className:"select-wrapper",children:[g.jsx(Vc,{size:15}),g.jsxs("select",{"aria-label":"选择输入数据集",value:m,disabled:!!dt,onChange:L=>{Tt(L.target.value)},children:[g.jsx("option",{value:"",disabled:!0,children:"选择数据集"}),r.map(L=>g.jsxs("option",{value:L.id,children:[L.name," · ",L.image_count," 张"]},L.id))]}),g.jsx($y,{size:12})]}),g.jsxs("button",{className:"outline full import-dataset","data-testid":"import-dataset",disabled:!!dt,onClick:()=>Vt(!0),children:[g.jsx(fS,{size:14}),"导入数据集"]})]}),g.jsxs("nav",{className:"side-tabs",children:[g.jsxs("button",{className:I==="images"?"selected":"",onClick:()=>Y("images"),children:[g.jsx(ch,{size:14}),"照片"]}),g.jsxs("button",{className:I==="config"?"selected":"",onClick:()=>Y("config"),children:[g.jsx(dS,{size:14}),"参数"]}),g.jsxs("button",{className:I==="history"?"selected":"",onClick:()=>Y("history"),children:[g.jsx(sS,{size:14}),"历史"]})]}),g.jsx("div",{className:"left-content",children:I==="images"?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"list-heading",children:[g.jsx("span",{children:x?"当前模型图像":"输入照片"}),g.jsxs("span",{children:[Ut.length," 张"]})]}),Ut.length?g.jsx("div",{className:"image-list",children:Ut.map(L=>g.jsxs("button",{className:`image-row ${j?.kind==="camera"&&j.id===L.image_id?"selected":""}`,"data-testid":`image-${L.image_id}`,onClick:()=>{(x||_)&&(w({kind:"camera",id:L.image_id}),oe(!1))},children:[g.jsx("div",{className:"image-thumbnail",children:L.image_url?g.jsx("img",{loading:"lazy",src:L.image_url,alt:"",onError:ct=>{ct.currentTarget.style.visibility="hidden"}}):g.jsx(ch,{size:17})}),g.jsxs("div",{children:[g.jsx("strong",{children:L.name}),g.jsxs("small",{children:["#",L.image_id," ",g.jsx("span",{children:L.registered?`${en(L.observations,0)} 观测`:`${L.width} × ${L.height}`})]})]}),g.jsx("span",{className:`registration-dot ${L.registered?"registered":""}`,title:L.registered?"已注册":"尚未注册"})]},L.image_id))}):g.jsxs("div",{className:"sidebar-empty",children:[g.jsx(aS,{size:26}),g.jsx("p",{children:"导入照片以开始重建"})]}),x&&g.jsxs("div",{className:"registration-key",children:[g.jsx("i",{className:"registration-dot registered"}),"已注册"," ",g.jsxs("span",{children:[W," / ",Rt]})]})]}):I==="config"&&h&&l?g.jsx(lR,{config:h,defaults:l,disabled:!!dt,onChange:d,onError:bt,onValidate:()=>{On("/api/config/validate",zc(h)).then(L=>{d(L),bt("配置检查通过，可以开始重建。",!1)}).catch(L=>bt(String(L)))}}):I==="history"?g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"list-heading",children:[g.jsx("span",{children:"本地重建记录"}),g.jsx("button",{className:"text-button","aria-label":"刷新历史运行",onClick:()=>{On("/api/runs?discover=true").then(s).catch(L=>bt(String(L)))},children:"刷新"})]}),g.jsx("div",{className:"run-list",children:i.map(L=>g.jsxs("button",{className:`run-row ${S===L.id?"selected":""}`,onClick:()=>qt(L),children:[g.jsxs("div",{className:"run-row-top",children:[g.jsx("span",{className:`status-dot ${L.status==="completed"||L.status==="imported"?"good":L.status==="running"?"live":L.status==="failed"?"bad":""}`}),g.jsx("strong",{children:L.name})]}),g.jsx("span",{children:Lc(L)}),g.jsxs("small",{children:[L.registered_images??"—","/",L.image_count??"—"," 相机 ·"," ",en(L.point_count,0)," 点"]})]},L.id))})]}):null}),g.jsxs("div",{className:"sidebar-footer",children:[g.jsx("span",{className:"live-dot"}),"本机运行 · Python 算法引擎",g.jsx("span",{children:"v0.1"})]})]}),g.jsxs("main",{className:"main-panel",children:[g.jsxs("div",{className:"scene-topline",children:[g.jsxs("div",{className:"scene-breadcrumb",children:[ye&&g.jsx("button",{className:"icon-button",title:"展开左侧栏","aria-label":"展开左侧栏",onClick:()=>F(!1),children:g.jsx(Vh,{size:16})}),g.jsx(O_,{size:14}),g.jsx("span",{children:b?.name??"尚无重建结果"}),b&&g.jsxs("span",{className:`run-state ${b.status} ${Lc(b).startsWith("部分重建")?"partial":""}`,children:[g.jsx("i",{}),Lc(b)]}),wt&&g.jsx(Pc,{size:12,className:"spin"})]}),g.jsxs("div",{className:"scene-actions",children:[g.jsxs("label",{className:"snapshot-select",children:[g.jsx(z_,{size:13}),g.jsxs("select",{"aria-label":"选择场景快照",value:B,disabled:!Dt.length,onChange:L=>{P(L.target.value),w(null)},children:[g.jsxs("option",{value:"latest",children:["最新结果",b?.status==="running"?" · 实时":""]}),Dt.map(L=>g.jsx("option",{value:L.id,children:$0(L.label)},L.id))]})]}),g.jsx("button",{className:"icon-button","aria-label":he?"展开检查器":"收起检查器",onClick:()=>oe(!he),children:g.jsx(cS,{size:15})})]})]}),At&&g.jsxs("div",{className:"image-warning",children:[g.jsx(kc,{size:12}),"此模型未关联原始照片；点云和相机位姿仍可查看。"]}),g.jsx(rR,{scene:x,runId:S,options:mt,setOptions:lt,selection:j,cameraViewRequest:U,onCameraViewChange:it,onSelect:L=>{w(L),L&&oe(!1)}}),g.jsxs("section",{className:`bottom-panel ${te?"expanded":""}`,children:[g.jsxs("div",{className:"bottom-heading",children:[g.jsxs("div",{className:"bottom-tabs",children:[g.jsxs("button",{className:q==="log"?"selected":"",onClick:()=>pt("log"),children:[g.jsx(gS,{size:13}),"运行日志",b?.status==="running"&&g.jsx("i",{className:"live-dot"})]}),g.jsxs("button",{className:q==="diagnostics"?"selected":"",onClick:()=>pt("diagnostics"),children:[g.jsx(N_,{size:13}),"质量与诊断"]})]}),g.jsxs("div",{className:"bottom-status",children:[b?.status==="running"&&g.jsxs("span",{className:"actual-progress","data-testid":"actual-progress",children:[jc(b.stage),b.total!=null&&b.total>0?` ${b.completed??0} / ${b.total}`:""]}),fe&&g.jsxs("span",{children:[g.jsx("i",{className:"live-dot"}),fe]}),g.jsxs("span",{children:[g.jsx(z_,{size:12}),mR(b?.elapsed_seconds)]}),g.jsx("button",{className:"icon-button",title:te?"收起日志区":"展开日志区","aria-label":"调整日志区域",onClick:()=>Ht(!te),children:g.jsx(Oc,{size:14,style:{transform:te?"none":"rotate(180deg)"}})})]})]}),q==="log"?g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"phase-strip",children:Gh.map(([L,ct],Pt)=>{const ne=L==="bundle_adjustment"&&b?.status==="completed"&&!D?.ba,se=!ne&&(b?.status==="completed"||Gt>Pt);return g.jsxs("div",{className:`${b?.status==="running"&&Pt===Gt?"current":""} ${se?"complete":""}`,title:ne?"本次未启用最终 BA":ct,children:[g.jsx("span",{children:se?g.jsx(P_,{size:10}):ne?"—":String(Pt+1).padStart(2,"0")}),ct,Pt<Gh.length-1&&g.jsx(Vh,{size:10})]},L)})}),g.jsxs("div",{className:"log-scroll",role:"log","aria-label":"算法运行日志",children:[!N.length&&g.jsxs("div",{className:"log-line",children:[g.jsx("time",{children:"—"}),g.jsx("span",{className:"log-tag",children:"SYSTEM"}),g.jsx("span",{children:b?.status==="running"?"正在连接实际运行事件…":b?`已加载本地结果：${b.name}。${b.status==="imported"?"此模型由文件导入。":"完整诊断与原始文件可在“质量与诊断”和“导出”中查看。"}`:"就绪。选择数据集并开始重建。"})]}),N.map((L,ct)=>g.jsxs("div",{className:`log-line ${L.kind==="warning"||L.kind==="error"?"warning":""}`,children:[g.jsx("time",{children:L.time}),g.jsx("span",{className:"log-tag",children:L.kind.toUpperCase()}),g.jsx("span",{children:L.text})]},ct)),b?.error&&g.jsxs("div",{className:"log-line warning",children:[g.jsx("time",{children:"ERROR"}),g.jsx("span",{children:b.error})]}),b?.warnings?.map((L,ct)=>g.jsxs("div",{className:"log-line warning",children:[g.jsx("time",{children:"WARN"}),g.jsx("span",{children:L})]},`w${ct}`)),g.jsx("div",{ref:ht})]})]}):g.jsxs("div",{className:"diagnostics-scroll",children:[g.jsxs("div",{className:"metric-strip",children:[g.jsxs("div",{children:[g.jsx("span",{children:"注册相机"}),g.jsxs("strong",{children:[W," / ",Rt]})]}),g.jsxs("div",{children:[g.jsx("span",{children:"三维点"}),g.jsx("strong",{children:en(ae?.point_count,0)})]}),g.jsxs("div",{children:[g.jsx("span",{children:"有效观测"}),g.jsx("strong",{children:en(ae?.observation_count,0)})]}),g.jsxs("div",{children:[g.jsx("span",{children:"中位误差"}),g.jsxs("strong",{children:[en(ae?.median_reprojection_error_px)," ",g.jsx("small",{children:"px"})]})]}),g.jsxs("div",{children:[g.jsx("span",{children:"P95 误差"}),g.jsxs("strong",{children:[en(ae?.p95_reprojection_error_px)," ",g.jsx("small",{children:"px"})]})]}),g.jsxs("div",{children:[g.jsx("span",{children:"正深度比例"}),g.jsx("strong",{children:ae?.positive_depth_ratio==null?"—":`${en(ae.positive_depth_ratio*100,1)}%`})]})]}),D?.ba&&g.jsxs("div",{className:`ba-notice ${D.ba.solver_success?"converged":""}`,"data-testid":"ba-status",children:[g.jsx(N_,{size:15}),g.jsx("strong",{children:D.ba.accepted?"BA 候选已接受":"BA 候选未接受"}),g.jsx("span",{children:D.ba.solver_success?"求解器已收敛":"求解器尚未收敛"}),g.jsxs("span",{children:[D.ba.nfev," 次评估"]}),g.jsxs("span",{children:[en(D.ba.before_mean_px)," → ",en(D.ba.candidate_mean_px)," ","px"]}),g.jsx("p",{children:D.ba.rejection_reason??D.ba.message})]}),D?.timings&&g.jsx(uR,{timing:D.timings}),b&&Lc(b).startsWith("部分重建")&&g.jsxs("div",{className:"info-note",children:["流程完成，但仅 ",b.registered_images,"/",b.image_count," ","张图像成功注册。请检查未注册照片与匹配质量。"]}),g.jsx("div",{className:"report-disclosures",children:["pairs","initialization"].map(L=>g.jsxs("details",{children:[g.jsxs("summary",{children:[L==="pairs"?"图像对匹配与几何验证":"初始化候选与筛选诊断",g.jsx(Oc,{size:12})]}),g.jsx("pre",{children:D?.[L]?JSON.stringify(D[L],null,2):"暂无该阶段报告。"})]},L))}),k.some(L=>/\.(png|jpe?g)$/i.test(L.name))&&g.jsxs("details",{className:"match-previews",children:[g.jsx("summary",{children:"查看真实匹配预览"}),g.jsx("div",{children:k.filter(L=>/\.(png|jpe?g)$/i.test(L.name)).map(L=>g.jsxs("a",{href:L.url,target:"_blank",rel:"noreferrer",children:[g.jsx("img",{src:L.url,loading:"lazy",alt:L.name}),g.jsx("span",{children:L.name})]},L.url))})]})]})]})]}),!he&&g.jsx(cR,{scene:x,inputDataset:_,runId:S,snapshot:x?.snapshot_id??B,selection:j,onSelect:w,onViewCamera:L=>V(ct=>({imageId:L,version:(ct?.version??0)+1})),viewCameraId:Z})]}),g.jsxs("footer",{className:"statusbar",children:[g.jsxs("span",{children:[g.jsx("span",{className:"status-dot good"}),"本地工作台 ",g.jsx("i",{}),"127.0.0.1"]}),g.jsxs("span",{children:[b?.status==="running"?jc(b.stage):"只呈现算法计算结果",g.jsx("i",{}),"React + Three.js · Python"]})]}),Nt&&g.jsxs("div",{className:"boot-overlay",children:[g.jsx(Pc,{size:26,className:"spin"}),g.jsx("span",{children:"正在连接本地重建引擎…"})]}),Et&&g.jsx(fR,{onClose:()=>Vt(!1),onImported:L=>{t(ct=>[L,...ct.filter(Pt=>Pt.id!==L.id)]),Tt(L.id),y(L),Y("images"),bt(`已导入 ${L.image_count} 张图像。请检查参数后开始重建。`,!1)}}),Ie&&g.jsx("div",{className:"modal-backdrop",onMouseDown:L=>{L.target===L.currentTarget&&jt(!1)},children:g.jsxs("section",{className:"modal help-modal",role:"dialog","aria-modal":"true","aria-label":"工作台操作说明",children:[g.jsxs("div",{className:"modal-heading",children:[g.jsxs("div",{children:[g.jsx("span",{className:"eyebrow",children:"WORKBENCH GUIDE"}),g.jsx("h2",{children:"从照片到稀疏重建"})]}),g.jsx("button",{className:"icon-button",onClick:()=>jt(!1),"aria-label":"关闭操作说明",children:g.jsx(jh,{size:18})})]}),g.jsxs("ol",{children:[g.jsxs("li",{children:[g.jsx("strong",{children:"选择或导入数据"}),g.jsx("p",{children:"使用项目数据集，或导入已去畸变照片与真实内参。"})]}),g.jsxs("li",{children:[g.jsx("strong",{children:"检查参数并运行"}),g.jsx("p",{children:"“参数”中的配置直接交给现有 Python 算法，实际进度在底部更新。"})]}),g.jsxs("li",{children:[g.jsx("strong",{children:"拖拽检查三维结果"}),g.jsx("p",{children:"左键旋转、右键平移、滚轮缩放；点击相机或点查看原始信息。Esc 清除选择。"})]}),g.jsxs("li",{children:[g.jsx("strong",{children:"对照快照与质量"}),g.jsx("p",{children:"切换初始化、增量建图和 BA 前后快照。BA 接受与求解器收敛分别展示。"})]}),g.jsxs("li",{children:[g.jsx("strong",{children:"导出真实结果"}),g.jsx("p",{children:"右上角下载模型、PLY 和其他实际生成的文件。视图调整不修改地图。"})]})]})]})})]})}Yy.createRoot(document.getElementById("root")).render(g.jsx(Hy.StrictMode,{children:g.jsx(gR,{})}));
