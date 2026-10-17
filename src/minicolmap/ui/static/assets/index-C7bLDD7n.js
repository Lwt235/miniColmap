(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ev(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var oh={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function ky(){if(A_)return Lo;A_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=e,Lo.jsx=i,Lo.jsxs=i,Lo}var R_;function Xy(){return R_||(R_=1,oh.exports=ky()),oh.exports}var m=Xy(),lh={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Wy(){if(C_)return _t;C_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,D={};function x(L,Y,ue){this.props=L,this.context=Y,this.refs=D,this.updater=ue||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,Y){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Y,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function v(){}v.prototype=x.prototype;function z(L,Y,ue){this.props=L,this.context=Y,this.refs=D,this.updater=ue||E}var O=z.prototype=new v;O.constructor=z,b(O,x.prototype),O.isPureReactComponent=!0;var U=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function G(L,Y,ue,ve,pe,Fe){return ue=Fe.ref,{$$typeof:r,type:L,key:Y,ref:ue!==void 0?ue:null,props:Fe}}function Z(L,Y){return G(L.type,Y,void 0,void 0,void 0,L.props)}function A(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function w(L){var Y={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ue){return Y[ue]})}var H=/\/+/g;function te(L,Y){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):Y.toString(36)}function ne(){}function oe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(ne,ne):(L.status="pending",L.then(function(Y){L.status==="pending"&&(L.status="fulfilled",L.value=Y)},function(Y){L.status==="pending"&&(L.status="rejected",L.reason=Y)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function $(L,Y,ue,ve,pe){var Fe=typeof L;(Fe==="undefined"||Fe==="boolean")&&(L=null);var ie=!1;if(L===null)ie=!0;else switch(Fe){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(L.$$typeof){case r:case e:ie=!0;break;case _:return ie=L._init,$(ie(L._payload),Y,ue,ve,pe)}}if(ie)return pe=pe(L),ie=ve===""?"."+te(L,0):ve,U(pe)?(ue="",ie!=null&&(ue=ie.replace(H,"$&/")+"/"),$(pe,Y,ue,"",function(Xe){return Xe})):pe!=null&&(A(pe)&&(pe=Z(pe,ue+(pe.key==null||L&&L.key===pe.key?"":(""+pe.key).replace(H,"$&/")+"/")+ie)),Y.push(pe)),1;ie=0;var xe=ve===""?".":ve+":";if(U(L))for(var Re=0;Re<L.length;Re++)ve=L[Re],Fe=xe+te(ve,Re),ie+=$(ve,Y,ue,Fe,pe);else if(Re=S(L),typeof Re=="function")for(L=Re.call(L),Re=0;!(ve=L.next()).done;)ve=ve.value,Fe=xe+te(ve,Re++),ie+=$(ve,Y,ue,Fe,pe);else if(Fe==="object"){if(typeof L.then=="function")return $(oe(L),Y,ue,ve,pe);throw Y=String(L),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ie}function I(L,Y,ue){if(L==null)return L;var ve=[],pe=0;return $(L,ve,"","",function(Fe){return Y.call(ue,Fe,pe++)}),ve}function q(L){if(L._status===-1){var Y=L._result;Y=Y(),Y.then(function(ue){(L._status===0||L._status===-1)&&(L._status=1,L._result=ue)},function(ue){(L._status===0||L._status===-1)&&(L._status=2,L._result=ue)}),L._status===-1&&(L._status=0,L._result=Y)}if(L._status===1)return L._result.default;throw L._result}var X=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function ge(){}return _t.Children={map:I,forEach:function(L,Y,ue){I(L,function(){Y.apply(this,arguments)},ue)},count:function(L){var Y=0;return I(L,function(){Y++}),Y},toArray:function(L){return I(L,function(Y){return Y})||[]},only:function(L){if(!A(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},_t.Component=x,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=z,_t.StrictMode=s,_t.Suspense=g,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,_t.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},_t.cache=function(L){return function(){return L.apply(null,arguments)}},_t.cloneElement=function(L,Y,ue){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ve=b({},L.props),pe=L.key,Fe=void 0;if(Y!=null)for(ie in Y.ref!==void 0&&(Fe=void 0),Y.key!==void 0&&(pe=""+Y.key),Y)!V.call(Y,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Y.ref===void 0||(ve[ie]=Y[ie]);var ie=arguments.length-2;if(ie===1)ve.children=ue;else if(1<ie){for(var xe=Array(ie),Re=0;Re<ie;Re++)xe[Re]=arguments[Re+2];ve.children=xe}return G(L.type,pe,void 0,void 0,Fe,ve)},_t.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},_t.createElement=function(L,Y,ue){var ve,pe={},Fe=null;if(Y!=null)for(ve in Y.key!==void 0&&(Fe=""+Y.key),Y)V.call(Y,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(pe[ve]=Y[ve]);var ie=arguments.length-2;if(ie===1)pe.children=ue;else if(1<ie){for(var xe=Array(ie),Re=0;Re<ie;Re++)xe[Re]=arguments[Re+2];pe.children=xe}if(L&&L.defaultProps)for(ve in ie=L.defaultProps,ie)pe[ve]===void 0&&(pe[ve]=ie[ve]);return G(L,Fe,void 0,void 0,null,pe)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(L){return{$$typeof:d,render:L}},_t.isValidElement=A,_t.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:q}},_t.memo=function(L,Y){return{$$typeof:p,type:L,compare:Y===void 0?null:Y}},_t.startTransition=function(L){var Y=B.T,ue={};B.T=ue;try{var ve=L(),pe=B.S;pe!==null&&pe(ue,ve),typeof ve=="object"&&ve!==null&&typeof ve.then=="function"&&ve.then(ge,X)}catch(Fe){X(Fe)}finally{B.T=Y}},_t.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},_t.use=function(L){return B.H.use(L)},_t.useActionState=function(L,Y,ue){return B.H.useActionState(L,Y,ue)},_t.useCallback=function(L,Y){return B.H.useCallback(L,Y)},_t.useContext=function(L){return B.H.useContext(L)},_t.useDebugValue=function(){},_t.useDeferredValue=function(L,Y){return B.H.useDeferredValue(L,Y)},_t.useEffect=function(L,Y,ue){var ve=B.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ve.useEffect(L,Y)},_t.useId=function(){return B.H.useId()},_t.useImperativeHandle=function(L,Y,ue){return B.H.useImperativeHandle(L,Y,ue)},_t.useInsertionEffect=function(L,Y){return B.H.useInsertionEffect(L,Y)},_t.useLayoutEffect=function(L,Y){return B.H.useLayoutEffect(L,Y)},_t.useMemo=function(L,Y){return B.H.useMemo(L,Y)},_t.useOptimistic=function(L,Y){return B.H.useOptimistic(L,Y)},_t.useReducer=function(L,Y,ue){return B.H.useReducer(L,Y,ue)},_t.useRef=function(L){return B.H.useRef(L)},_t.useState=function(L){return B.H.useState(L)},_t.useSyncExternalStore=function(L,Y,ue){return B.H.useSyncExternalStore(L,Y,ue)},_t.useTransition=function(){return B.H.useTransition()},_t.version="19.1.1",_t}var w_;function Fd(){return w_||(w_=1,lh.exports=Wy()),lh.exports}var Te=Fd();const qy=ev(Te);var ch={exports:{}},Oo={},uh={exports:{}},fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Yy(){return D_||(D_=1,(function(r){function e(I,q){var X=I.length;I.push(q);e:for(;0<X;){var ge=X-1>>>1,L=I[ge];if(0<l(L,q))I[ge]=q,I[X]=L,X=ge;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var q=I[0],X=I.pop();if(X!==q){I[0]=X;e:for(var ge=0,L=I.length,Y=L>>>1;ge<Y;){var ue=2*(ge+1)-1,ve=I[ue],pe=ue+1,Fe=I[pe];if(0>l(ve,X))pe<L&&0>l(Fe,ve)?(I[ge]=Fe,I[pe]=X,ge=pe):(I[ge]=ve,I[ue]=X,ge=ue);else if(pe<L&&0>l(Fe,X))I[ge]=Fe,I[pe]=X,ge=pe;else break e}}return q}function l(I,q){var X=I.sortIndex-q.sortIndex;return X!==0?X:I.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var g=[],p=[],_=1,y=null,S=3,E=!1,b=!1,D=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=I)s(p),q.sortIndex=q.expirationTime,e(g,q);else break;q=i(p)}}function B(I){if(D=!1,U(I),!b)if(i(g)!==null)b=!0,V||(V=!0,te());else{var q=i(p);q!==null&&$(B,q.startTime-I)}}var V=!1,G=-1,Z=5,A=-1;function w(){return x?!0:!(r.unstable_now()-A<Z)}function H(){if(x=!1,V){var I=r.unstable_now();A=I;var q=!0;try{e:{b=!1,D&&(D=!1,z(G),G=-1),E=!0;var X=S;try{t:{for(U(I),y=i(g);y!==null&&!(y.expirationTime>I&&w());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,S=y.priorityLevel;var L=ge(y.expirationTime<=I);if(I=r.unstable_now(),typeof L=="function"){y.callback=L,U(I),q=!0;break t}y===i(g)&&s(g),U(I)}else s(g);y=i(g)}if(y!==null)q=!0;else{var Y=i(p);Y!==null&&$(B,Y.startTime-I),q=!1}}break e}finally{y=null,S=X,E=!1}q=void 0}}finally{q?te():V=!1}}}var te;if(typeof O=="function")te=function(){O(H)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,oe=ne.port2;ne.port1.onmessage=H,te=function(){oe.postMessage(null)}}else te=function(){v(H,0)};function $(I,q){G=v(function(){I(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(I){switch(S){case 1:case 2:case 3:var q=3;break;default:q=S}var X=S;S=q;try{return I()}finally{S=X}},r.unstable_requestPaint=function(){x=!0},r.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var X=S;S=I;try{return q()}finally{S=X}},r.unstable_scheduleCallback=function(I,q,X){var ge=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,I){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=X+L,I={id:_++,callback:q,priorityLevel:I,startTime:X,expirationTime:L,sortIndex:-1},X>ge?(I.sortIndex=X,e(p,I),i(g)===null&&I===i(p)&&(D?(z(G),G=-1):D=!0,$(B,X-ge))):(I.sortIndex=L,e(g,I),b||E||(b=!0,V||(V=!0,te()))),I},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(I){var q=S;return function(){var X=S;S=q;try{return I.apply(this,arguments)}finally{S=X}}}})(fh)),fh}var N_;function Zy(){return N_||(N_=1,uh.exports=Yy()),uh.exports}var hh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Ky(){if(U_)return Un;U_=1;var r=Fd();function e(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,p,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:g,containerInfo:p,implementation:_}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(g,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(g,p,null,_)},Un.flushSync=function(g){var p=h.T,_=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=_,s.d.f()}},Un.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},Un.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Un.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var _=p.as,y=d(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:E}):_==="script"&&s.d.X(g,{crossOrigin:y,integrity:S,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},Un.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,y=d(_,p.crossOrigin);s.d.L(g,_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(g,p){if(typeof g=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},Un.requestFormReset=function(g){s.d.r(g)},Un.unstable_batchedUpdates=function(g,p){return g(p)},Un.useFormState=function(g,p,_){return h.H.useFormState(g,p,_)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var L_;function Qy(){if(L_)return hh.exports;L_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hh.exports=Ky(),hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function Jy(){if(O_)return Oo;O_=1;var r=Zy(),e=Fd(),i=Qy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),t;if(f===o)return d(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var M=!1,C=u.child;C;){if(C===a){M=!0,a=u,o=f;break}if(C===o){M=!0,o=u,a=f;break}C=C.sibling}if(!M){for(C=f.child;C;){if(C===a){M=!0,a=f,o=u;break}if(C===o){M=!0,o=f,a=u;break}C=C.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Symbol.for("react.client.reference");function oe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ne?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case x:return"Profiler";case D:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case O:return(t.displayName||"Context")+".Provider";case z:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:oe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return oe(t(n))}catch{}}return null}var $=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ge=[],L=-1;function Y(t){return{current:t}}function ue(t){0>L||(t.current=ge[L],ge[L]=null,L--)}function ve(t,n){L++,ge[L]=t.current,t.current=n}var pe=Y(null),Fe=Y(null),ie=Y(null),xe=Y(null);function Re(t,n){switch(ve(ie,n),ve(Fe,t),ve(pe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?e_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=e_(n),t=t_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(pe),ve(pe,t)}function Xe(){ue(pe),ue(Fe),ue(ie)}function qe(t){t.memoizedState!==null&&ve(xe,t);var n=pe.current,a=t_(n,t.type);n!==a&&(ve(Fe,t),ve(pe,a))}function ot(t){Fe.current===t&&(ue(pe),ue(Fe)),xe.current===t&&(ue(xe),Co._currentValue=X)}var We=Object.prototype.hasOwnProperty,T=r.unstable_scheduleCallback,Ce=r.unstable_cancelCallback,Le=r.unstable_shouldYield,Ye=r.unstable_requestPaint,He=r.unstable_now,zt=r.unstable_getCurrentPriorityLevel,Qe=r.unstable_ImmediatePriority,ht=r.unstable_UserBlockingPriority,Ht=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,P=r.unstable_IdlePriority,R=r.log,se=r.unstable_setDisableYieldValue,me=null,Me=null;function fe(t){if(typeof R=="function"&&se(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(me,t)}catch{}}var je=Math.clz32?Math.clz32:Ie,Oe=Math.log,Je=Math.LN2;function Ie(t){return t>>>=0,t===0?32:31-(Oe(t)/Je|0)|0}var Ae=256,Pe=4194304;function tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=tt(o):(M&=C,M!==0?u=tt(M):a||(a=C&~t,a!==0&&(u=tt(a))))):(C=o&~f,C!==0?u=tt(C):M!==0?u=tt(M):a||(a=o&~t,a!==0&&(u=tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var t=Ae;return Ae<<=1,(Ae&4194048)===0&&(Ae=256),t}function De(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Ne(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function we(t,n,a,o,u,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var C=t.entanglements,F=t.expirationTimes,re=t.hiddenUpdates;for(a=M&~a;0<a;){var _e=31-je(a),be=1<<_e;C[_e]=0,F[_e]=-1;var le=re[_e];if(le!==null)for(re[_e]=null,_e=0;_e<le.length;_e++){var ce=le[_e];ce!==null&&(ce.lane&=-536870913)}a&=~be}o!==0&&Ee(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function Ee(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-je(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Ke(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-je(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ut(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function j(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ye(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:y_(t.type))}function mt(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var gt=Math.random().toString(36).slice(2),Tt="__reactFiber$"+gt,pt="__reactProps$"+gt,Xn="__reactContainer$"+gt,Pn="__reactEvents$"+gt,zn="__reactListeners$"+gt,Vi="__reactHandles$"+gt,$a="__reactResources$"+gt,Ui="__reactMarker$"+gt;function Us(t){delete t[Tt],delete t[pt],delete t[Pn],delete t[zn],delete t[Vi]}function ji(t){var n=t[Tt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Xn]||a[Tt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=s_(t);t!==null;){if(a=t[Tt])return a;t=s_(t)}return n}t=a,a=t.parentNode}return null}function ga(t){if(t=t[Tt]||t[Xn]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function es(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function _a(t){var n=t[$a];return n||(n=t[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[Ui]=!0}var nl=new Set,il={};function N(t,n){K(t,n),K(t+"Capture",n)}function K(t,n){for(il[t]=n,t=0;t<n.length;t++)nl.add(n[t])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),de={},ee={};function Ue(t){return We.call(ee,t)?!0:We.call(de,t)?!1:he.test(t)?ee[t]=!0:(de[t]=!0,!1)}function Be(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var st,lt;function nt(t){if(st===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);st=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+st+t+lt}var xt=!1;function Ut(t,n){if(!t||xt)return"";xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ce){var le=ce}Reflect.construct(t,[],be)}else{try{be.call()}catch(ce){le=ce}t.call(be.prototype)}}else{try{throw Error()}catch(ce){le=ce}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),M=f[0],C=f[1];if(M&&C){var F=M.split(`
`),re=C.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<re.length&&!re[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===re.length)for(o=F.length-1,u=re.length-1;1<=o&&0<=u&&F[o]!==re[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==re[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==re[u]){var _e=`
`+F[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{xt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?nt(a):""}function $t(t){switch(t.tag){case 26:case 27:case 5:return nt(t.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return Ut(t.type,!1);case 11:return Ut(t.type.render,!1);case 1:return Ut(t.type,!0);case 31:return nt("Activity");default:return""}}function Gt(t){try{var n="";do n+=$t(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function at(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t){var n=at(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){t._valueTracker||(t._valueTracker=Qt(t))}function wn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=at(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function yn(t){return t.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qt(t,n,a,o,u,f,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+yt(n)):t.value!==""+yt(n)&&(t.value=""+yt(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Dn(t,M,yt(n)):a!=null?Dn(t,M,yt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+yt(C):t.removeAttribute("name")}function Bn(t,n,a,o,u,f,M,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Dn(t,n,a){n==="number"&&Mi(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function sn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tn(t,n,a){if(n!=null&&(n=""+yt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+yt(a):""}function Ls(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function Wn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Gv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function tp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ep(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&ep(t,f,n[f])}function su(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(t){return jv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ru=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Os=null,Ps=null;function np(t){var n=ga(t);if(n&&(t=n.stateNode)){var a=t[pt]||null;e:switch(t=n.stateNode,n.type){case"input":if(qt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[pt]||null;if(!u)throw Error(s(90));qt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&wn(o)}break e;case"textarea":Tn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&sn(t,!!a.multiple,n,!1)}}}var lu=!1;function ip(t,n,a){if(lu)return t(n,a);lu=!0;try{var o=t(n);return o}finally{if(lu=!1,(Os!==null||Ps!==null)&&(jl(),Os&&(n=Os,t=Ps,Ps=Os=null,np(n),t)))for(n=0;n<t.length;n++)np(t[n])}}function Hr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[pt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(ki)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){cu=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{cu=!1}var va=null,uu=null,sl=null;function ap(){if(sl)return sl;var t,n=uu,a=n.length,o,u="value"in va?va.value:va.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var M=a-t;for(o=1;o<=M&&n[a-o]===u[f-o];o++);return sl=u.slice(t,1<o?1-o:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function sp(){return!1}function qn(t){function n(a,o,u,f,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(a=t[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:sp,this.isPropagationStopped=sp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=qn(ts),Vr=_({},ts,{view:0,detail:0}),kv=qn(Vr),fu,hu,jr,cl=_({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(fu=t.screenX-jr.screenX,hu=t.screenY-jr.screenY):hu=fu=0,jr=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),rp=qn(cl),Xv=_({},cl,{dataTransfer:0}),Wv=qn(Xv),qv=_({},Vr,{relatedTarget:0}),du=qn(qv),Yv=_({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=qn(Yv),Kv=_({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=qn(Kv),Jv=_({},ts,{data:0}),op=qn(Jv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tx[t])?!!n[t]:!1}function pu(){return nx}var ix=_({},Vr,{key:function(t){if(t.key){var n=$v[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ax=qn(ix),sx=_({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=qn(sx),rx=_({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),ox=qn(rx),lx=_({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=qn(lx),ux=_({},cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=qn(ux),hx=_({},ts,{newState:0,oldState:0}),dx=qn(hx),px=[9,13,27,32],mu=ki&&"CompositionEvent"in window,kr=null;ki&&"documentMode"in document&&(kr=document.documentMode);var mx=ki&&"TextEvent"in window&&!kr,cp=ki&&(!mu||kr&&8<kr&&11>=kr),up=" ",fp=!1;function hp(t,n){switch(t){case"keyup":return px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zs=!1;function gx(t,n){switch(t){case"compositionend":return dp(n);case"keypress":return n.which!==32?null:(fp=!0,up);case"textInput":return t=n.data,t===up&&fp?null:t;default:return null}}function _x(t,n){if(zs)return t==="compositionend"||!mu&&hp(t,n)?(t=ap(),sl=uu=va=null,zs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return cp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!vx[t.type]:n==="textarea"}function mp(t,n,a,o){Os?Ps?Ps.push(o):Ps=[o]:Os=o,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Xr=null,Wr=null;function xx(t){Zg(t,0)}function ul(t){var n=es(t);if(wn(n))return t}function gp(t,n){if(t==="change")return n}var _p=!1;if(ki){var gu;if(ki){var _u="oninput"in document;if(!_u){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),_u=typeof vp.oninput=="function"}gu=_u}else gu=!1;_p=gu&&(!document.documentMode||9<document.documentMode)}function xp(){Xr&&(Xr.detachEvent("onpropertychange",yp),Wr=Xr=null)}function yp(t){if(t.propertyName==="value"&&ul(Wr)){var n=[];mp(n,Wr,t,ou(t)),ip(xx,n)}}function yx(t,n,a){t==="focusin"?(xp(),Xr=n,Wr=a,Xr.attachEvent("onpropertychange",yp)):t==="focusout"&&xp()}function Sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(Wr)}function Mx(t,n){if(t==="click")return ul(n)}function Ex(t,n){if(t==="input"||t==="change")return ul(n)}function bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ei=typeof Object.is=="function"?Object.is:bx;function qr(t,n){if(ei(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!We.call(n,u)||!ei(t[u],n[u]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,n){var a=Sp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sp(a)}}function Ep(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Ep(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Mi(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Mi(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Tx=ki&&"documentMode"in document&&11>=document.documentMode,Is=null,xu=null,Yr=null,yu=!1;function Tp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Is==null||Is!==Mi(o)||(o=Is,"selectionStart"in o&&vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Yr&&qr(Yr,o)||(Yr=o,o=Zl(xu,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Is)))}function ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Bs={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},Su={},Ap={};ki&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function is(t){if(Su[t])return Su[t];if(!Bs[t])return t;var n=Bs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ap)return Su[t]=n[a];return t}var Rp=is("animationend"),Cp=is("animationiteration"),wp=is("animationstart"),Ax=is("transitionrun"),Rx=is("transitionstart"),Cx=is("transitioncancel"),Dp=is("transitionend"),Np=new Map,Mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mu.push("scrollEnd");function Ei(t,n){Np.set(t,n),N(n,[t])}var Up=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=Up.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Gt(n)},Up.set(t,n),n)}return{value:t,source:n,stack:Gt(n)}}var hi=[],Fs=0,Eu=0;function fl(){for(var t=Fs,n=Eu=Fs=0;n<t;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}f!==0&&Lp(a,u,f)}}function hl(t,n,a,o){hi[Fs++]=t,hi[Fs++]=n,hi[Fs++]=a,hi[Fs++]=o,Eu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function bu(t,n,a,o){return hl(t,n,a,o),dl(t)}function Hs(t,n){return hl(t,null,null,n),dl(t)}function Lp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-je(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<yo)throw yo=0,Nf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Gs={};function wx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,o){return new wx(t,n,a,o)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Op(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function pl(t,n,a,o,u,f){var M=0;if(o=t,typeof t=="function")Tu(t)&&(M=1);else if(typeof t=="string")M=Ny(t,a,pe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=ti(31,a,n,u),t.elementType=A,t.lanes=f,t;case b:return as(a.children,u,f,n);case D:M=8,u|=24;break;case x:return t=ti(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case B:return t=ti(13,a,n,u),t.elementType=B,t.lanes=f,t;case V:return t=ti(19,a,n,u),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case v:case O:M=10;break e;case z:M=9;break e;case U:M=11;break e;case G:M=14;break e;case Z:M=16,o=null;break e}M=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ti(M,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function as(t,n,a,o){return t=ti(7,t,o,n),t.lanes=a,t}function Au(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function Ru(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vs=[],js=0,ml=null,gl=0,di=[],pi=0,ss=null,Wi=1,qi="";function rs(t,n){Vs[js++]=gl,Vs[js++]=ml,ml=t,gl=n}function Pp(t,n,a){di[pi++]=Wi,di[pi++]=qi,di[pi++]=ss,ss=t;var o=Wi;t=qi;var u=32-je(o)-1;o&=~(1<<u),a+=1;var f=32-je(n)+u;if(30<f){var M=u-u%5;f=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Wi=1<<32-je(n)+u|a<<u|o,qi=f+t}else Wi=1<<f|a<<u|o,qi=t}function Cu(t){t.return!==null&&(rs(t,1),Pp(t,1,0))}function wu(t){for(;t===ml;)ml=Vs[--js],Vs[js]=null,gl=Vs[--js],Vs[js]=null;for(;t===ss;)ss=di[--pi],di[pi]=null,qi=di[--pi],di[pi]=null,Wi=di[--pi],di[pi]=null}var Fn=null,rn=null,It=!1,os=null,Li=!1,Du=Error(s(519));function ls(t){var n=Error(s(418,""));throw Qr(fi(n,t)),Du}function zp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Tt]=t,n[pt]=o,a){case"dialog":Dt("cancel",n),Dt("close",n);break;case"iframe":case"object":case"embed":Dt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)Dt(Mo[a],n);break;case"source":Dt("error",n);break;case"img":case"image":case"link":Dt("error",n),Dt("load",n);break;case"details":Dt("toggle",n);break;case"input":Dt("invalid",n),Bn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ct(n);break;case"select":Dt("invalid",n);break;case"textarea":Dt("invalid",n),Ls(n,o.value,o.defaultValue,o.children),Ct(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||$g(n.textContent,a)?(o.popover!=null&&(Dt("beforetoggle",n),Dt("toggle",n)),o.onScroll!=null&&Dt("scroll",n),o.onScrollEnd!=null&&Dt("scrollend",n),o.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||ls(t)}function Ip(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:Fn=Fn.return}}function Zr(t){if(t!==Fn)return!1;if(!It)return Ip(t),It=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qf(t.type,t.memoizedProps)),a=!a),a&&rn&&ls(t),Ip(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){rn=Ti(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}rn=null}}else n===27?(n=rn,Oa(t.type)?(t=Qf,Qf=null,rn=t):rn=n):rn=Fn?Ti(t.stateNode.nextSibling):null;return!0}function Kr(){rn=Fn=null,It=!1}function Bp(){var t=os;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),os=null),t}function Qr(t){os===null?os=[t]:os.push(t)}var Nu=Y(null),cs=null,Yi=null;function xa(t,n,a){ve(Nu,n._currentValue),n._currentValue=a}function Zi(t){t._currentValue=Nu.current,ue(Nu)}function Uu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var M=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var F=0;F<n.length;F++)if(C.context===n[F]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Uu(f.return,a,t),o||(M=null);break e}f=C.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Uu(M,a,t),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===t){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Jr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var C=u.type;ei(u.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(u===xe.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Co):t=[Co])}u=u.return}t!==null&&Lu(n,t,a,o),n.flags|=262144}function _l(t){for(t=t.firstContext;t!==null;){if(!ei(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function us(t){cs=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Fp(cs,t)}function vl(t,n){return cs===null&&us(t),Fp(t,n)}function Fp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(s(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Nx=r.unstable_scheduleCallback,Ux=r.unstable_NormalPriority,mn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Dx,data:new Map,refCount:0}}function $r(t){t.refCount--,t.refCount===0&&Nx(Ux,function(){t.controller.abort()})}var eo=null,Pu=0,ks=0,Xs=null;function Lx(t,n){if(eo===null){var a=eo=[];Pu=0,ks=Bf(),Xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pu++,n.then(Hp,Hp),n}function Hp(){if(--Pu===0&&eo!==null){Xs!==null&&(Xs.status="fulfilled");var t=eo;eo=null,ks=0,Xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ox(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gp=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lx(t,n),Gp!==null&&Gp(t,n)};var fs=Y(null);function zu(){var t=fs.current;return t!==null?t:Kt.pooledCache}function xl(t,n){n===null?ve(fs,fs.current):ve(fs,n.pool)}function Vp(){var t=zu();return t===null?null:{parent:mn._currentValue,pool:t}}var to=Error(s(460)),jp=Error(s(474)),yl=Error(s(542)),Iu={then:function(){}};function kp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sl(){}function Xp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qp(t),t;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qp(t),t}throw no=n,to}}var no=null;function Wp(){if(no===null)throw Error(s(459));var t=no;return no=null,t}function qp(t){if(t===to||t===yl)throw Error(s(483))}var ya=!1;function Bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Sa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ma(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dl(t),Lp(t,null,a),n}return hl(t,o,n,a),dl(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ke(t,a)}}function Hu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function ao(){if(Gu){var t=Xs;if(t!==null)throw t}}function so(t,n,a,o){Gu=!1;var u=t.updateQueue;ya=!1;var f=u.firstBaseUpdate,M=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var F=C,re=F.next;F.next=null,M===null?f=re:M.next=re,M=F;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,C=_e.lastBaseUpdate,C!==M&&(C===null?_e.firstBaseUpdate=re:C.next=re,_e.lastBaseUpdate=F))}if(f!==null){var be=u.baseState;M=0,_e=re=F=null,C=f;do{var le=C.lane&-536870913,ce=le!==C.lane;if(ce?(Nt&le)===le:(o&le)===le){le!==0&&le===ks&&(Gu=!0),_e!==null&&(_e=_e.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var ft=t,rt=C;le=n;var kt=a;switch(rt.tag){case 1:if(ft=rt.payload,typeof ft=="function"){be=ft.call(kt,be,le);break e}be=ft;break e;case 3:ft.flags=ft.flags&-65537|128;case 0:if(ft=rt.payload,le=typeof ft=="function"?ft.call(kt,be,le):ft,le==null)break e;be=_({},be,le);break e;case 2:ya=!0}}le=C.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:C.tag,payload:C.payload,callback:C.callback,next:null},_e===null?(re=_e=ce,F=be):_e=_e.next=ce,M|=le;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ce=C,C=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(F=be),u.baseState=F,u.firstBaseUpdate=re,u.lastBaseUpdate=_e,f===null&&(u.shared.lanes=0),Da|=M,t.lanes=M,t.memoizedState=be}}function Yp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Zp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yp(a[t],n)}var Ws=Y(null),Ml=Y(0);function Kp(t,n){t=na,ve(Ml,t),ve(Ws,n),na=t|n.baseLanes}function Vu(){ve(Ml,na),ve(Ws,Ws.current)}function ju(){na=Ml.current,ue(Ws),ue(Ml)}var Ea=0,bt=null,Vt=null,hn=null,El=!1,qs=!1,hs=!1,bl=0,ro=0,Ys=null,Px=0;function ln(){throw Error(s(321))}function ku(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ei(t[a],n[a]))return!1;return!0}function Xu(t,n,a,o,u,f){return Ea=f,bt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Lm:Om,hs=!1,f=a(o,u),hs=!1,qs&&(f=Jp(n,a,o,u)),Qp(t),f}function Qp(t){I.H=Dl;var n=Vt!==null&&Vt.next!==null;if(Ea=0,hn=Vt=bt=null,El=!1,ro=0,Ys=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&_l(t)&&(Sn=!0))}function Jp(t,n,a,o){bt=t;var u=0;do{if(qs&&(Ys=null),ro=0,qs=!1,25<=u)throw Error(s(301));if(u+=1,hn=Vt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Vx,f=n(a,o)}while(qs);return f}function zx(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(bt.flags|=1024),n}function Wu(){var t=bl!==0;return bl=0,t}function qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}Ea=0,hn=Vt=bt=null,qs=!1,ro=bl=0,Ys=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?bt.memoizedState=hn=t:hn=hn.next=t,hn}function dn(){if(Vt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var n=hn===null?bt.memoizedState:hn.next;if(n!==null)hn=n,Vt=t;else{if(t===null)throw bt.alternate===null?Error(s(467)):Error(s(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},hn===null?bt.memoizedState=hn=t:hn=hn.next=t}return hn}function Zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=ro;return ro+=1,Ys===null&&(Ys=[]),t=Xp(Ys,t,n),n=bt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Lm:Om),t}function Tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===O)return Nn(t)}throw Error(s(438,String(t)))}function Ku(t){var n=null,a=bt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=bt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zu(),bt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function Al(t){var n=dn();return Qu(n,Vt,t)}function Qu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var M=u.next;u.next=f.next,f.next=M}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var C=M=null,F=null,re=n,_e=!1;do{var be=re.lane&-536870913;if(be!==re.lane?(Nt&be)===be:(Ea&be)===be){var le=re.revertLane;if(le===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),be===ks&&(_e=!0);else if((Ea&le)===le){re=re.next,le===ks&&(_e=!0);continue}else be={lane:0,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},F===null?(C=F=be,M=f):F=F.next=be,bt.lanes|=le,Da|=le;be=re.action,hs&&a(f,be),f=re.hasEagerState?re.eagerState:a(f,be)}else le={lane:be,revertLane:re.revertLane,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null},F===null?(C=F=le,M=f):F=F.next=le,bt.lanes|=be,Da|=be;re=re.next}while(re!==null&&re!==n);if(F===null?M=f:F.next=C,!ei(f,t.memoizedState)&&(Sn=!0,_e&&(a=Xs,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=F,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ju(t){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do f=t(f,M.action),M=M.next;while(M!==u);ei(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function $p(t,n,a){var o=bt,u=dn(),f=It;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ei((Vt||u).memoizedState,a);M&&(u.memoizedState=a,Sn=!0),u=u.queue;var C=nm.bind(null,o,u,t);if(lo(2048,8,C,[t]),u.getSnapshot!==n||M||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,Zs(9,Rl(),tm.bind(null,o,u,a,n),null),Kt===null)throw Error(s(349));f||(Ea&124)!==0||em(o,n,a)}return a}function em(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=bt.updateQueue,n===null?(n=Zu(),bt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function tm(t,n,a,o){n.value=a,n.getSnapshot=o,im(n)&&am(t)}function nm(t,n,a){return a(function(){im(n)&&am(t)})}function im(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ei(t,a)}catch{return!0}}function am(t){var n=Hs(t,2);n!==null&&ri(n,t,2)}function $u(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),hs){fe(!0);try{a()}finally{fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function sm(t,n,a,o){return t.baseState=a,Qu(t,Vt,typeof o=="function"?o:Ki)}function Ix(t,n,a,o,u){if(wl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,M={};I.T=M;try{var C=a(u,o),F=I.S;F!==null&&F(M,C),om(t,n,C)}catch(re){ef(t,n,re)}finally{I.T=f}}else try{f=a(u,o),om(t,n,f)}catch(re){ef(t,n,re)}}function om(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){lm(t,n,o)},function(o){return ef(t,n,o)}):lm(t,n,a)}function lm(t,n,a){n.status="fulfilled",n.value=a,cm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,rm(t,a)))}function ef(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==o)}t.action=null}function cm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function um(t,n){return n}function fm(t,n){if(It){var a=Kt.formState;if(a!==null){e:{var o=bt;if(It){if(rn){t:{for(var u=rn,f=Li;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ti(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){rn=Ti(u.nextSibling),o=u.data==="F!";break e}}ls(o)}o=!1}o&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=o,a=Dm.bind(null,bt,o),o.dispatch=a,o=$u(!1),f=rf.bind(null,bt,!1,o.queue),o=Yn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ix.bind(null,bt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function hm(t){var n=dn();return dm(n,Vt,t)}function dm(t,n,a){if(n=Qu(t,n,um)[0],t=Al(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(M){throw M===to?yl:M}else o=n;n=dn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(bt.flags|=2048,Zs(9,Rl(),Bx.bind(null,u,a),null)),[o,f,t]}function Bx(t,n){t.action=n}function pm(t){var n=dn(),a=Vt;if(a!==null)return dm(n,a,t);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Zs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=bt.updateQueue,n===null&&(n=Zu(),bt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Rl(){return{destroy:void 0,resource:void 0}}function mm(){return dn().memoizedState}function Cl(t,n,a,o){var u=Yn();o=o===void 0?null:o,bt.flags|=t,u.memoizedState=Zs(1|n,Rl(),a,o)}function lo(t,n,a,o){var u=dn();o=o===void 0?null:o;var f=u.memoizedState.inst;Vt!==null&&o!==null&&ku(o,Vt.memoizedState.deps)?u.memoizedState=Zs(n,f,a,o):(bt.flags|=t,u.memoizedState=Zs(1|n,f,a,o))}function gm(t,n){Cl(8390656,8,t,n)}function _m(t,n){lo(2048,8,t,n)}function vm(t,n){return lo(4,2,t,n)}function xm(t,n){return lo(4,4,t,n)}function ym(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Sm(t,n,a){a=a!=null?a.concat([t]):null,lo(4,4,ym.bind(null,n,t),a)}function tf(){}function Mm(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ku(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Em(t,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ku(n,o[1]))return o[0];if(o=t(),hs){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o}function nf(t,n,a){return a===void 0||(Ea&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=Ag(),bt.lanes|=t,Da|=t,a)}function bm(t,n,a,o){return ei(a,n)?a:Ws.current!==null?(t=nf(t,a,o),ei(t,n)||(Sn=!0),t):(Ea&42)===0?(Sn=!0,t.memoizedState=a):(t=Ag(),bt.lanes|=t,Da|=t,n)}function Tm(t,n,a,o,u){var f=q.p;q.p=f!==0&&8>f?f:8;var M=I.T,C={};I.T=C,rf(t,!1,n,a);try{var F=u(),re=I.S;if(re!==null&&re(C,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var _e=Ox(F,o);co(t,n,_e,si(t))}else co(t,n,o,si(t))}catch(be){co(t,n,{then:function(){},status:"rejected",reason:be},si())}finally{q.p=f,I.T=M}}function Fx(){}function af(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Am(t).queue;Tm(t,u,n,X,a===null?Fx:function(){return Rm(t),a(o)})}function Am(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rm(t){var n=Am(t).next.queue;co(t,n,{},si())}function sf(){return Nn(Co)}function Cm(){return dn().memoizedState}function wm(){return dn().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Sa(a);var o=Ma(n,t,a);o!==null&&(ri(o,n,a),io(o,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var o=si();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},wl(t)?Nm(n,a):(a=bu(t,n,a,o),a!==null&&(ri(a,t,o),Um(a,n,o)))}function Dm(t,n,a){var o=si();co(t,n,a,o)}function co(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Nm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,C=f(M,a);if(u.hasEagerState=!0,u.eagerState=C,ei(C,M))return hl(t,n,u,0),Kt===null&&fl(),!1}catch{}finally{}if(a=bu(t,n,u,o),a!==null)return ri(a,t,o),Um(a,n,o),!0}return!1}function rf(t,n,a,o){if(o={lane:2,revertLane:Bf(),action:o,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(n)throw Error(s(479))}else n=bu(t,a,o,2),n!==null&&ri(n,t,2)}function wl(t){var n=t.alternate;return t===bt||n!==null&&n===bt}function Nm(t,n){qs=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Um(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ke(t,a)}}var Dl={readContext:Nn,use:Tl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},Lm={readContext:Nn,use:Tl,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:gm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,ym.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var o=t();if(hs){fe(!0);try{t()}finally{fe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Yn();if(a!==void 0){var u=a(n);if(hs){fe(!0);try{a(n)}finally{fe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Gx.bind(null,bt,t),[o.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Dm.bind(null,bt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:tf,useDeferredValue:function(t,n){var a=Yn();return nf(a,t,n)},useTransition:function(){var t=$u(!1);return t=Tm.bind(null,bt,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=bt,u=Yn();if(It){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Kt===null)throw Error(s(349));(Nt&124)!==0||em(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,o,f,t),[t]),o.flags|=2048,Zs(9,Rl(),tm.bind(null,o,f,a,n),null),a},useId:function(){var t=Yn(),n=Kt.identifierPrefix;if(It){var a=qi,o=Wi;a=(o&~(1<<32-je(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Px++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:fm,useActionState:fm,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,bt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return Yn().memoizedState=Hx.bind(null,bt)}},Om={readContext:Nn,use:Tl,useCallback:Mm,useContext:Nn,useEffect:_m,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Al,useRef:mm,useState:function(){return Al(Ki)},useDebugValue:tf,useDeferredValue:function(t,n){var a=dn();return bm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Al(Ki)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:sf,useFormState:hm,useActionState:hm,useOptimistic:function(t,n){var a=dn();return sm(a,Vt,t,n)},useMemoCache:Ku,useCacheRefresh:wm},Vx={readContext:Nn,use:Tl,useCallback:Mm,useContext:Nn,useEffect:_m,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Ju,useRef:mm,useState:function(){return Ju(Ki)},useDebugValue:tf,useDeferredValue:function(t,n){var a=dn();return Vt===null?nf(a,t,n):bm(a,Vt.memoizedState,t,n)},useTransition:function(){var t=Ju(Ki)[0],n=dn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:sf,useFormState:pm,useActionState:pm,useOptimistic:function(t,n){var a=dn();return Vt!==null?sm(a,Vt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:wm},Ks=null,uo=0;function Nl(t){var n=uo;return uo+=1,Ks===null&&(Ks=[]),Xp(Ks,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){var n=t._init;return n(t._payload)}function zm(t){function n(Q,k){if(t){var ae=Q.deletions;ae===null?(Q.deletions=[k],Q.flags|=16):ae.push(k)}}function a(Q,k){if(!t)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function o(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Xi(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,ae){return Q.index=ae,t?(ae=Q.alternate,ae!==null?(ae=ae.index,ae<k?(Q.flags|=67108866,k):ae):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function M(Q){return t&&Q.alternate===null&&(Q.flags|=67108866),Q}function C(Q,k,ae,Se){return k===null||k.tag!==6?(k=Au(ae,Q.mode,Se),k.return=Q,k):(k=u(k,ae),k.return=Q,k)}function F(Q,k,ae,Se){var et=ae.type;return et===b?_e(Q,k,ae.props.children,Se,ae.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Z&&Pm(et)===k.type)?(k=u(k,ae.props),fo(k,ae),k.return=Q,k):(k=pl(ae.type,ae.key,ae.props,null,Q.mode,Se),fo(k,ae),k.return=Q,k)}function re(Q,k,ae,Se){return k===null||k.tag!==4||k.stateNode.containerInfo!==ae.containerInfo||k.stateNode.implementation!==ae.implementation?(k=Ru(ae,Q.mode,Se),k.return=Q,k):(k=u(k,ae.children||[]),k.return=Q,k)}function _e(Q,k,ae,Se,et){return k===null||k.tag!==7?(k=as(ae,Q.mode,Se,et),k.return=Q,k):(k=u(k,ae),k.return=Q,k)}function be(Q,k,ae){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Au(""+k,Q.mode,ae),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return ae=pl(k.type,k.key,k.props,null,Q.mode,ae),fo(ae,k),ae.return=Q,ae;case E:return k=Ru(k,Q.mode,ae),k.return=Q,k;case Z:var Se=k._init;return k=Se(k._payload),be(Q,k,ae)}if($(k)||te(k))return k=as(k,Q.mode,ae,null),k.return=Q,k;if(typeof k.then=="function")return be(Q,Nl(k),ae);if(k.$$typeof===O)return be(Q,vl(Q,k),ae);Ul(Q,k)}return null}function le(Q,k,ae,Se){var et=k!==null?k.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return et!==null?null:C(Q,k,""+ae,Se);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:return ae.key===et?F(Q,k,ae,Se):null;case E:return ae.key===et?re(Q,k,ae,Se):null;case Z:return et=ae._init,ae=et(ae._payload),le(Q,k,ae,Se)}if($(ae)||te(ae))return et!==null?null:_e(Q,k,ae,Se,null);if(typeof ae.then=="function")return le(Q,k,Nl(ae),Se);if(ae.$$typeof===O)return le(Q,k,vl(Q,ae),Se);Ul(Q,ae)}return null}function ce(Q,k,ae,Se,et){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ae)||null,C(k,Q,""+Se,et);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case S:return Q=Q.get(Se.key===null?ae:Se.key)||null,F(k,Q,Se,et);case E:return Q=Q.get(Se.key===null?ae:Se.key)||null,re(k,Q,Se,et);case Z:var At=Se._init;return Se=At(Se._payload),ce(Q,k,ae,Se,et)}if($(Se)||te(Se))return Q=Q.get(ae)||null,_e(k,Q,Se,et,null);if(typeof Se.then=="function")return ce(Q,k,ae,Nl(Se),et);if(Se.$$typeof===O)return ce(Q,k,ae,vl(k,Se),et);Ul(k,Se)}return null}function ft(Q,k,ae,Se){for(var et=null,At=null,it=k,ct=k=0,En=null;it!==null&&ct<ae.length;ct++){it.index>ct?(En=it,it=null):En=it.sibling;var Lt=le(Q,it,ae[ct],Se);if(Lt===null){it===null&&(it=En);break}t&&it&&Lt.alternate===null&&n(Q,it),k=f(Lt,k,ct),At===null?et=Lt:At.sibling=Lt,At=Lt,it=En}if(ct===ae.length)return a(Q,it),It&&rs(Q,ct),et;if(it===null){for(;ct<ae.length;ct++)it=be(Q,ae[ct],Se),it!==null&&(k=f(it,k,ct),At===null?et=it:At.sibling=it,At=it);return It&&rs(Q,ct),et}for(it=o(it);ct<ae.length;ct++)En=ce(it,Q,ct,ae[ct],Se),En!==null&&(t&&En.alternate!==null&&it.delete(En.key===null?ct:En.key),k=f(En,k,ct),At===null?et=En:At.sibling=En,At=En);return t&&it.forEach(function(Fa){return n(Q,Fa)}),It&&rs(Q,ct),et}function rt(Q,k,ae,Se){if(ae==null)throw Error(s(151));for(var et=null,At=null,it=k,ct=k=0,En=null,Lt=ae.next();it!==null&&!Lt.done;ct++,Lt=ae.next()){it.index>ct?(En=it,it=null):En=it.sibling;var Fa=le(Q,it,Lt.value,Se);if(Fa===null){it===null&&(it=En);break}t&&it&&Fa.alternate===null&&n(Q,it),k=f(Fa,k,ct),At===null?et=Fa:At.sibling=Fa,At=Fa,it=En}if(Lt.done)return a(Q,it),It&&rs(Q,ct),et;if(it===null){for(;!Lt.done;ct++,Lt=ae.next())Lt=be(Q,Lt.value,Se),Lt!==null&&(k=f(Lt,k,ct),At===null?et=Lt:At.sibling=Lt,At=Lt);return It&&rs(Q,ct),et}for(it=o(it);!Lt.done;ct++,Lt=ae.next())Lt=ce(it,Q,ct,Lt.value,Se),Lt!==null&&(t&&Lt.alternate!==null&&it.delete(Lt.key===null?ct:Lt.key),k=f(Lt,k,ct),At===null?et=Lt:At.sibling=Lt,At=Lt);return t&&it.forEach(function(jy){return n(Q,jy)}),It&&rs(Q,ct),et}function kt(Q,k,ae,Se){if(typeof ae=="object"&&ae!==null&&ae.type===b&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case S:e:{for(var et=ae.key;k!==null;){if(k.key===et){if(et=ae.type,et===b){if(k.tag===7){a(Q,k.sibling),Se=u(k,ae.props.children),Se.return=Q,Q=Se;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Z&&Pm(et)===k.type){a(Q,k.sibling),Se=u(k,ae.props),fo(Se,ae),Se.return=Q,Q=Se;break e}a(Q,k);break}else n(Q,k);k=k.sibling}ae.type===b?(Se=as(ae.props.children,Q.mode,Se,ae.key),Se.return=Q,Q=Se):(Se=pl(ae.type,ae.key,ae.props,null,Q.mode,Se),fo(Se,ae),Se.return=Q,Q=Se)}return M(Q);case E:e:{for(et=ae.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===ae.containerInfo&&k.stateNode.implementation===ae.implementation){a(Q,k.sibling),Se=u(k,ae.children||[]),Se.return=Q,Q=Se;break e}else{a(Q,k);break}else n(Q,k);k=k.sibling}Se=Ru(ae,Q.mode,Se),Se.return=Q,Q=Se}return M(Q);case Z:return et=ae._init,ae=et(ae._payload),kt(Q,k,ae,Se)}if($(ae))return ft(Q,k,ae,Se);if(te(ae)){if(et=te(ae),typeof et!="function")throw Error(s(150));return ae=et.call(ae),rt(Q,k,ae,Se)}if(typeof ae.then=="function")return kt(Q,k,Nl(ae),Se);if(ae.$$typeof===O)return kt(Q,k,vl(Q,ae),Se);Ul(Q,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint"?(ae=""+ae,k!==null&&k.tag===6?(a(Q,k.sibling),Se=u(k,ae),Se.return=Q,Q=Se):(a(Q,k),Se=Au(ae,Q.mode,Se),Se.return=Q,Q=Se),M(Q)):a(Q,k)}return function(Q,k,ae,Se){try{uo=0;var et=kt(Q,k,ae,Se);return Ks=null,et}catch(it){if(it===to||it===yl)throw it;var At=ti(29,it,null,Q.mode);return At.lanes=Se,At.return=Q,At}finally{}}}var Qs=zm(!0),Im=zm(!1),mi=Y(null),Oi=null;function ba(t){var n=t.alternate;ve(gn,gn.current&1),ve(mi,t),Oi===null&&(n===null||Ws.current!==null||n.memoizedState!==null)&&(Oi=t)}function Bm(t){if(t.tag===22){if(ve(gn,gn.current),ve(mi,t),Oi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Oi=t)}}else Ta()}function Ta(){ve(gn,gn.current),ve(mi,mi.current)}function Qi(t){ue(mi),Oi===t&&(Oi=null),ue(gn)}var gn=Y(0);function Ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Kf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var lf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(t,u,o),n!==null&&(ri(n,t,o),io(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(t,u,o),n!==null&&(ri(n,t,o),io(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(t,o,a),n!==null&&(ri(n,t,a),io(n,t,a))}};function Fm(t,n,a,o,u,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,M):n.prototype&&n.prototype.isPureReactComponent?!qr(a,o)||!qr(u,f):!0}function Hm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&lf.enqueueReplaceState(n,n.state,null)}function ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Gm(t){Ol(t)}function Vm(t){console.error(t)}function jm(t){Ol(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function km(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function cf(t,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Xm(t){return t=Sa(t),t.tag=3,t}function Wm(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){km(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){km(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function jx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=mi.current,a!==null){switch(a.tag){case 13:return Oi===null?Lf():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Iu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Pf(t,o,u)),!1;case 22:return a.flags|=65536,o===Iu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Pf(t,o,u)),!1}throw Error(s(435,a.tag))}return Pf(t,o,u),Lf(),!1}if(It)return n=mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Du&&(t=Error(s(422),{cause:o}),Qr(fi(t,a)))):(o!==Du&&(n=Error(s(423),{cause:o}),Qr(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=cf(t.stateNode,o,u),Hu(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:o});if(f=fi(f,a),xo===null?xo=[f]:xo.push(f),on!==4&&(on=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=cf(a.stateNode,o,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Xm(u),Wm(u,t,a,o),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var qm=Error(s(461)),Sn=!1;function An(t,n,a,o){n.child=t===null?Im(n,null,a,o):Qs(n,t.child,a,o)}function Ym(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var M={};for(var C in o)C!=="ref"&&(M[C]=o[C])}else M=o;return us(n),o=Xu(t,n,a,M,f,u),C=Wu(),t!==null&&!Sn?(qu(t,n,u),Ji(t,n,u)):(It&&C&&Cu(n),n.flags|=1,An(t,n,o,u),n.child)}function Zm(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(t,n,f,o,u)):(t=pl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!_f(t,u)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(M,o)&&t.ref===n.ref)return Ji(t,n,u)}return n.flags|=1,t=Xi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Km(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(qr(f,o)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=o=f,_f(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,Ji(t,n,u)}return uf(t,n,a,o,u)}function Qm(t,n,a){var o=n.pendingProps,u=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(u=n.child=t.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Jm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&xl(n,f!==null?f.cachePool:null),f!==null?Kp(n,f):Vu(),Bm(n);else return n.lanes=n.childLanes=536870912,Jm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(xl(n,f.cachePool),Kp(n,f),Ta(),n.memoizedState=null):(t!==null&&xl(n,null),Vu(),Ta());return An(t,n,u,a),n.child}function Jm(t,n,a,o){var u=zu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&xl(n,null),Vu(),Bm(n),t!==null&&Jr(t,n,o,!0),null}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function uf(t,n,a,o,u){return us(n),a=Xu(t,n,a,o,void 0,u),o=Wu(),t!==null&&!Sn?(qu(t,n,u),Ji(t,n,u)):(It&&o&&Cu(n),n.flags|=1,An(t,n,a,u),n.child)}function $m(t,n,a,o,u,f){return us(n),n.updateQueue=null,a=Jp(n,o,a,u),Qp(t),o=Wu(),t!==null&&!Sn?(qu(t,n,f),Ji(t,n,f)):(It&&o&&Cu(n),n.flags|=1,An(t,n,a,f),n.child)}function eg(t,n,a,o,u){if(us(n),n.stateNode===null){var f=Gs,M=a.contextType;typeof M=="object"&&M!==null&&(f=Nn(M)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=lf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Bu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Nn(M):Gs,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(of(n,a,M,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&lf.enqueueReplaceState(f,f.state,null),so(n,o,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var C=n.memoizedProps,F=ds(a,C);f.props=F;var re=f.context,_e=a.contextType;M=Gs,typeof _e=="object"&&_e!==null&&(M=Nn(_e));var be=a.getDerivedStateFromProps;_e=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,_e||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||re!==M)&&Hm(n,f,o,M),ya=!1;var le=n.memoizedState;f.state=le,so(n,o,f,u),ao(),re=n.memoizedState,C||le!==re||ya?(typeof be=="function"&&(of(n,a,be,o),re=n.memoizedState),(F=ya||Fm(n,a,F,o,le,re,M))?(_e||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=re),f.props=o,f.state=re,f.context=M,o=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Fu(t,n),M=n.memoizedProps,_e=ds(a,M),f.props=_e,be=n.pendingProps,le=f.context,re=a.contextType,F=Gs,typeof re=="object"&&re!==null&&(F=Nn(re)),C=a.getDerivedStateFromProps,(re=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==be||le!==F)&&Hm(n,f,o,F),ya=!1,le=n.memoizedState,f.state=le,so(n,o,f,u),ao();var ce=n.memoizedState;M!==be||le!==ce||ya||t!==null&&t.dependencies!==null&&_l(t.dependencies)?(typeof C=="function"&&(of(n,a,C,o),ce=n.memoizedState),(_e=ya||Fm(n,a,_e,o,le,ce,F)||t!==null&&t.dependencies!==null&&_l(t.dependencies))?(re||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ce,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ce,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),f.props=o,f.state=ce,f.context=F,o=_e):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Qs(n,t.child,null,u),n.child=Qs(n,null,a,u)):An(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ji(t,n,u),t}function tg(t,n,a,o){return Kr(),n.flags|=256,An(t,n,a,o),n.child}var ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hf(t){return{baseLanes:t,cachePool:Vp()}}function df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=gi),t}function ng(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(It){if(u?ba(n):Ta(),It){var C=rn,F;if(F=C){e:{for(F=C,C=Li;F.nodeType!==8;){if(!C){C=null;break e}if(F=Ti(F.nextSibling),F===null){C=null;break e}}C=F}C!==null?(n.memoizedState={dehydrated:C,treeContext:ss!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},F=ti(18,null,null,0),F.stateNode=C,F.return=n,n.child=F,Fn=n,rn=null,F=!0):F=!1}F||ls(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return Kf(C)?n.lanes=32:n.lanes=536870912,null;Qi(n)}return C=o.children,o=o.fallback,u?(Ta(),u=n.mode,C=Il({mode:"hidden",children:C},u),o=as(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,u=n.child,u.memoizedState=hf(a),u.childLanes=df(t,M,a),n.memoizedState=ff,o):(ba(n),pf(n,C))}if(F=t.memoizedState,F!==null&&(C=F.dehydrated,C!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=mf(t,n,a)):n.memoizedState!==null?(Ta(),n.child=t.child,n.flags|=128,n=null):(Ta(),u=o.fallback,C=n.mode,o=Il({mode:"visible",children:o.children},C),u=as(u,C,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Qs(n,t.child,null,a),o=n.child,o.memoizedState=hf(a),o.childLanes=df(t,M,a),n.memoizedState=ff,n=u);else if(ba(n),Kf(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var re=M.dgst;M=re,o=Error(s(419)),o.stack="",o.digest=M,Qr({value:o,source:null,stack:null}),n=mf(t,n,a)}else if(Sn||Jr(t,n,a,!1),M=(a&t.childLanes)!==0,Sn||M){if(M=Kt,M!==null&&(o=a&-a,o=(o&42)!==0?1:ut(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Hs(t,o),ri(M,t,o),qm;C.data==="$?"||Lf(),n=mf(t,n,a)}else C.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,rn=Ti(C.nextSibling),Fn=n,It=!0,os=null,Li=!1,t!==null&&(di[pi++]=Wi,di[pi++]=qi,di[pi++]=ss,Wi=t.id,qi=t.overflow,ss=n),n=pf(n,o.children),n.flags|=4096);return n}return u?(Ta(),u=o.fallback,C=n.mode,F=t.child,re=F.sibling,o=Xi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,re!==null?u=Xi(re,u):(u=as(u,C,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,C=t.child.memoizedState,C===null?C=hf(a):(F=C.cachePool,F!==null?(re=mn._currentValue,F=F.parent!==re?{parent:re,pool:re}:F):F=Vp(),C={baseLanes:C.baseLanes|a,cachePool:F}),u.memoizedState=C,u.childLanes=df(t,M,a),n.memoizedState=ff,o):(ba(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function pf(t,n){return n=Il({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Il(t,n){return t=ti(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function mf(t,n,a){return Qs(n,t.child,null,a),t=pf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ig(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Uu(t.return,n,a)}function gf(t,n,a,o,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function ag(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(An(t,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ig(t,a,n);else if(t.tag===19)ig(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(ve(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ll(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),gf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ll(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}gf(n,!0,a,null,f);break;case"together":gf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function _f(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&_l(t)))}function kx(t,n,a){switch(n.tag){case 3:Re(n,n.stateNode.containerInfo),xa(n,mn,t.memoizedState.cache),Kr();break;case 27:case 5:qe(n);break;case 4:Re(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ng(t,n,a):(ba(n),t=Ji(t,n,a),t!==null?t.sibling:null);ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return ag(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,Qm(t,n,a);case 24:xa(n,mn,t.memoizedState.cache)}return Ji(t,n,a)}function sg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!_f(t,a)&&(n.flags&128)===0)return Sn=!1,kx(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,It&&(n.flags&1048576)!==0&&Pp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Tu(o)?(t=ds(o,t),n.tag=1,n=eg(null,n,o,t,a)):(n.tag=0,n=uf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Ym(null,n,o,t,a);break e}else if(u===G){n.tag=14,n=Zm(null,n,o,t,a);break e}}throw n=oe(o)||o,Error(s(306,n,""))}}return n;case 0:return uf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ds(o,n.pendingProps),eg(t,n,o,u,a);case 3:e:{if(Re(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Fu(t,n),so(n,o,null,a);var M=n.memoizedState;if(o=M.cache,xa(n,mn,o),o!==f.cache&&Lu(n,[mn],a,!0),ao(),o=M.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=tg(t,n,o,a);break e}else if(o!==u){u=fi(Error(s(424)),n),Qr(u),n=tg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rn=Ti(t.firstChild),Fn=n,It=!0,os=null,Li=!0,a=Im(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kr(),o===u){n=Ji(t,n,a);break e}An(t,n,o,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=c_(n.type,null,n.pendingProps,null))?n.memoizedState=a:It||(a=n.type,t=n.pendingProps,o=Ql(ie.current).createElement(a),o[Tt]=n,o[pt]=t,Cn(o,a,t),fn(o),n.stateNode=o):n.memoizedState=c_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return qe(n),t===null&&It&&(o=n.stateNode=r_(n.type,n.pendingProps,ie.current),Fn=n,Li=!0,u=rn,Oa(n.type)?(Qf=u,rn=Ti(o.firstChild)):rn=u),An(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&It&&((u=o=rn)&&(o=vy(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,Fn=n,rn=Ti(o.firstChild),Li=!1,u=!0):u=!1),u||ls(n)),qe(n),u=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,o=f.children,qf(u,f)?o=null:M!==null&&qf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Xu(t,n,zx,null,null,a),Co._currentValue=u),zl(t,n),An(t,n,o,a),n.child;case 6:return t===null&&It&&((t=a=rn)&&(a=xy(a,n.pendingProps,Li),a!==null?(n.stateNode=a,Fn=n,rn=null,t=!0):t=!1),t||ls(n)),null;case 13:return ng(t,n,a);case 4:return Re(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Qs(n,null,o,a):An(t,n,o,a),n.child;case 11:return Ym(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),An(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,us(n),u=Nn(u),o=o(u),n.flags|=1,An(t,n,o,a),n.child;case 14:return Zm(t,n,n.type,n.pendingProps,a);case 15:return Km(t,n,n.type,n.pendingProps,a);case 19:return ag(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Il(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Xi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Qm(t,n,a);case 24:return us(n),o=Nn(mn),t===null?(u=zu(),u===null&&(u=Kt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Bu(n),xa(n,mn,u)):((t.lanes&a)!==0&&(Fu(t,n),so(n,null,null,a),ao()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,mn,o)):(o=f.cache,xa(n,mn,o),o!==u.cache&&Lu(n,[mn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function $i(t){t.flags|=4}function rg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p_(n)){if(n=mi.current,n!==null&&((Nt&4194048)===Nt?Oi!==null:(Nt&62914560)!==Nt&&(Nt&536870912)===0||n!==Oi))throw no=Iu,jp;t.flags|=8192}}function Bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?De():536870912,t.lanes|=n,tr|=n)}function ho(t,n){if(!It)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function tn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Xx(t,n,a){var o=n.pendingProps;switch(wu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Zi(mn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zr(n)?$i(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Bp())),tn(n),null;case 26:return a=n.memoizedState,t===null?($i(n),a!==null?(tn(n),rg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==t.memoizedState?($i(n),tn(n),rg(n,a)):(tn(n),n.flags&=-16777217):(t.memoizedProps!==o&&$i(n),tn(n),n.flags&=-16777217),null;case 27:ot(n),a=ie.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}t=pe.current,Zr(n)?zp(n):(t=r_(u,o,a),n.stateNode=t,$i(n))}return tn(n),null;case 5:if(ot(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),null}if(t=pe.current,Zr(n))zp(n);else{switch(u=Ql(ie.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[Tt]=n,t[pt]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Cn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&$i(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&$i(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ie.current,Zr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Tt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||$g(t.nodeValue,a)),t||ls(n)}else t=Ql(t).createTextNode(o),t[Tt]=n,n.stateNode=t}return tn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Tt]=n}else Kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Bp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qi(n),n):(Qi(n),null)}if(Qi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),tn(n),null;case 4:return Xe(),t===null&&Vf(n.stateNode.containerInfo),tn(n),null;case 10:return Zi(n.type),tn(n),null;case 19:if(ue(gn),u=n.memoizedState,u===null)return tn(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)ho(u,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ll(t),f!==null){for(n.flags|=128,ho(u,!1),t=f.updateQueue,n.updateQueue=t,Bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Op(a,t),a=a.sibling;return ve(gn,gn.current&1|2),n.child}t=t.sibling}u.tail!==null&&He()>Gl&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304)}else{if(!o)if(t=Ll(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Bl(n,t),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!It)return tn(n),null}else 2*He()-u.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(t=u.last,t!==null?t.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=He(),n.sibling=null,t=gn.current,ve(gn,o?t&1|2:t&1),n):(tn(n),null);case 22:case 23:return Qi(n),ju(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ue(fs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(mn),tn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(mn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ot(n),null;case 13:if(Qi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Kr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ue(gn),null;case 4:return Xe(),null;case 10:return Zi(n.type),null;case 22:case 23:return Qi(n),ju(),t!==null&&ue(fs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(mn),null;case 25:return null;default:return null}}function og(t,n){switch(wu(n),n.tag){case 3:Zi(mn),Xe();break;case 26:case 27:case 5:ot(n);break;case 4:Xe();break;case 13:Qi(n);break;case 19:ue(gn);break;case 10:Zi(n.type);break;case 22:case 23:Qi(n),ju(),t!==null&&ue(fs);break;case 24:Zi(mn)}}function po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,M=a.inst;o=f(),M.destroy=o}a=a.next}while(a!==u)}}catch(C){Yt(n,n.return,C)}}function Aa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var M=o.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,u=n;var F=a,re=C;try{re()}catch(_e){Yt(u,F,_e)}}}o=o.next}while(o!==f)}}catch(_e){Yt(n,n.return,_e)}}function lg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Zp(n,a)}catch(o){Yt(t,t.return,o)}}}function cg(t,n,a){a.props=ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Yt(t,n,o)}}function mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Yt(t,n,u)}}function Pi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Yt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Yt(t,n,u)}else a.current=null}function ug(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Yt(t,t.return,u)}}function vf(t,n,a){try{var o=t.stateNode;dy(o,t.type,a,n),o[pt]=n}catch(u){Yt(t,t.return,u)}}function fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Oa(t.type)||t.tag===4}function xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Oa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(yf(t,n,a),t=t.sibling;t!==null;)yf(t,n,a),t=t.sibling}function Fl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Oa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Fl(t,n,a),t=t.sibling;t!==null;)Fl(t,n,a),t=t.sibling}function hg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[Tt]=t,n[pt]=a}catch(f){Yt(t,t.return,f)}}var ea=!1,cn=!1,Sf=!1,dg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function qx(t,n){if(t=t.containerInfo,Xf=ic,t=bp(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var M=0,C=-1,F=-1,re=0,_e=0,be=t,le=null;t:for(;;){for(var ce;be!==a||u!==0&&be.nodeType!==3||(C=M+u),be!==f||o!==0&&be.nodeType!==3||(F=M+o),be.nodeType===3&&(M+=be.nodeValue.length),(ce=be.firstChild)!==null;)le=be,be=ce;for(;;){if(be===t)break t;if(le===a&&++re===u&&(C=M),le===f&&++_e===o&&(F=M),(ce=be.nextSibling)!==null)break;be=le,le=be.parentNode}be=ce}a=C===-1||F===-1?null:{start:C,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wf={focusedElem:t,selectionRange:a},ic=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ft=ds(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(ft,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Yt(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function pg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(t,a),o&4&&po(5,a);break;case 1:if(Ra(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Yt(a,a.return,M)}else{var u=ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Yt(a,a.return,M)}}o&64&&lg(a),o&512&&mo(a,a.return);break;case 3:if(Ra(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(t,n)}catch(M){Yt(a,a.return,M)}}break;case 27:n===null&&o&4&&hg(a);case 26:case 5:Ra(t,a),n===null&&o&4&&ug(a),o&512&&mo(a,a.return);break;case 12:Ra(t,a);break;case 13:Ra(t,a),o&4&&_g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),yy(t,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||cn,u=ea;var f=cn;ea=o,(cn=n)&&!f?Ca(t,a,(a.subtreeFlags&8772)!==0):Ra(t,a),ea=u,cn=f}break;case 30:break;default:Ra(t,a)}}function mg(t){var n=t.alternate;n!==null&&(t.alternate=null,mg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Us(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Zn=!1;function ta(t,n,a){for(a=a.child;a!==null;)gg(t,n,a),a=a.sibling}function gg(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:cn||Pi(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Pi(a,n);var o=en,u=Zn;Oa(a.type)&&(en=a.stateNode,Zn=!1),ta(t,n,a),bo(a.stateNode),en=o,Zn=u;break;case 5:cn||Pi(a,n);case 6:if(o=en,u=Zn,en=null,ta(t,n,a),en=o,Zn=u,en!==null)if(Zn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(f){Yt(a,n,f)}else try{en.removeChild(a.stateNode)}catch(f){Yt(a,n,f)}break;case 18:en!==null&&(Zn?(t=en,a_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Uo(t)):a_(en,a.stateNode));break;case 4:o=en,u=Zn,en=a.stateNode.containerInfo,Zn=!0,ta(t,n,a),en=o,Zn=u;break;case 0:case 11:case 14:case 15:cn||Aa(2,a,n),cn||Aa(4,a,n),ta(t,n,a);break;case 1:cn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&cg(a,n,o)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,ta(t,n,a),cn=o;break;default:ta(t,n,a)}}function _g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Uo(t)}catch(a){Yt(n,n.return,a)}}function Yx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new dg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new dg),n;default:throw Error(s(435,t.tag))}}function Mf(t,n){var a=Yx(t);n.forEach(function(o){var u=iy.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function ni(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,M=n,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(Oa(C.type)){en=C.stateNode,Zn=!1;break e}break;case 5:en=C.stateNode,Zn=!1;break e;case 3:case 4:en=C.stateNode.containerInfo,Zn=!0;break e}C=C.return}if(en===null)throw Error(s(160));gg(f,M,u),en=null,Zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)vg(n,t),n=n.sibling}var bi=null;function vg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ni(n,t),ii(t),o&4&&(Aa(3,t,t.return),po(3,t),Aa(5,t,t.return));break;case 1:ni(n,t),ii(t),o&512&&(cn||a===null||Pi(a,a.return)),o&64&&ea&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(ni(n,t),ii(t),o&512&&(cn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ui]||f[Tt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,o,a),f[Tt]=t,fn(f),o=f;break e;case"link":var M=h_("link","href",u).get(o+(a.href||""));if(M){for(var C=0;C<M.length;C++)if(f=M[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;case"meta":if(M=h_("meta","content",u).get(o+(a.content||""))){for(C=0;C<M.length;C++)if(f=M[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(C,1);break t}}f=u.createElement(o),Cn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Tt]=t,fn(f),o=f}t.stateNode=o}else d_(u,t.type,t.stateNode);else t.stateNode=f_(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?d_(u,t.type,t.stateNode):f_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ni(n,t),ii(t),o&512&&(cn||a===null||Pi(a,a.return)),a!==null&&o&4&&vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,t),ii(t),o&512&&(cn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Wn(u,"")}catch(ce){Yt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Sf=!0);break;case 6:if(ni(n,t),ii(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){Yt(t,t.return,ce)}}break;case 3:if(ec=null,u=bi,bi=Jl(n.containerInfo),ni(n,t),bi=u,ii(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ce){Yt(t,t.return,ce)}Sf&&(Sf=!1,xg(t));break;case 4:o=bi,bi=Jl(t.stateNode.containerInfo),ni(n,t),ii(t),bi=o;break;case 12:ni(n,t),ii(t);break;case 13:ni(n,t),ii(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cf=He()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,re=ea,_e=cn;if(ea=re||u,cn=_e||F,ni(n,t),cn=_e,ea=re,ii(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ea||cn||ps(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=F.stateNode;var be=F.memoizedProps.style,le=be!=null&&be.hasOwnProperty("display")?be.display:null;C.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(ce){Yt(F,F.return,ce)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(ce){Yt(F,F.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Mf(t,a))));break;case 19:ni(n,t),ii(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Mf(t,o)));break;case 30:break;case 21:break;default:ni(n,t),ii(t)}}function ii(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(fg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(t);Fl(t,f,u);break;case 5:var M=a.stateNode;a.flags&32&&(Wn(M,""),a.flags&=-33);var C=xf(t);Fl(t,C,M);break;case 3:case 4:var F=a.stateNode.containerInfo,re=xf(t);yf(t,re,F);break;default:throw Error(s(161))}}catch(_e){Yt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function xg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pg(t,n.alternate,n),n=n.sibling}function ps(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),ps(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cg(n,n.return,a),ps(n);break;case 27:bo(n.stateNode);case 26:case 5:Pi(n,n.return),ps(n);break;case 22:n.memoizedState===null&&ps(n);break;case 30:ps(n);break;default:ps(n)}t=t.sibling}}function Ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:Ca(u,f,a),po(4,f);break;case 1:if(Ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(re){Yt(o,o.return,re)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Yp(F[u],C)}catch(re){Yt(o,o.return,re)}}a&&M&64&&lg(f),mo(f,f.return);break;case 27:hg(f);case 26:case 5:Ca(u,f,a),a&&o===null&&M&4&&ug(f),mo(f,f.return);break;case 12:Ca(u,f,a);break;case 13:Ca(u,f,a),a&&M&4&&_g(u,f);break;case 22:f.memoizedState===null&&Ca(u,f,a),mo(f,f.return);break;case 30:break;default:Ca(u,f,a)}n=n.sibling}}function Ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$r(a))}function bf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t))}function zi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yg(t,n,a,o),n=n.sibling}function yg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:zi(t,n,a,o),u&2048&&po(9,n);break;case 1:zi(t,n,a,o);break;case 3:zi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t)));break;case 12:if(u&2048){zi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,C=f.onPostCommit;typeof C=="function"&&C(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Yt(n,n.return,F)}}else zi(t,n,a,o);break;case 13:zi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?zi(t,n,a,o):go(t,n):f._visibility&2?zi(t,n,a,o):(f._visibility|=2,Js(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Ef(M,n);break;case 24:zi(t,n,a,o),u&2048&&bf(n.alternate,n);break;default:zi(t,n,a,o)}}function Js(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,C=a,F=o,re=M.flags;switch(M.tag){case 0:case 11:case 15:Js(f,M,C,F,u),po(8,M);break;case 23:break;case 22:var _e=M.stateNode;M.memoizedState!==null?_e._visibility&2?Js(f,M,C,F,u):go(f,M):(_e._visibility|=2,Js(f,M,C,F,u)),u&&re&2048&&Ef(M.alternate,M);break;case 24:Js(f,M,C,F,u),u&&re&2048&&bf(M.alternate,M);break;default:Js(f,M,C,F,u)}n=n.sibling}}function go(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&Ef(o.alternate,o);break;case 24:go(a,o),u&2048&&bf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function $s(t){if(t.subtreeFlags&_o)for(t=t.child;t!==null;)Sg(t),t=t.sibling}function Sg(t){switch(t.tag){case 26:$s(t),t.flags&_o&&t.memoizedState!==null&&Ly(bi,t.memoizedState,t.memoizedProps);break;case 5:$s(t);break;case 3:case 4:var n=bi;bi=Jl(t.stateNode.containerInfo),$s(t),bi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,$s(t),_o=n):$s(t));break;default:$s(t)}}function Mg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function vo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,bg(o,t)}Mg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eg(t),t=t.sibling}function Eg(t){switch(t.tag){case 0:case 11:case 15:vo(t),t.flags&2048&&Aa(9,t,t.return);break;case 3:vo(t);break;case 12:vo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Hl(t)):vo(t);break;default:vo(t)}}function Hl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,bg(o,t)}Mg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}t=t.sibling}}function bg(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$r(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,f=o.return;if(mg(o),o===a){Mn=null;break e}if(u!==null){u.return=f,Mn=u;break e}Mn=f}}}var Zx={getCacheForType:function(t){var n=Nn(mn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Kx=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Kt=null,wt=null,Nt=0,Ft=0,ai=null,wa=!1,er=!1,Tf=!1,na=0,on=0,Da=0,ms=0,Af=0,gi=0,tr=0,xo=null,Kn=null,Rf=!1,Cf=0,Gl=1/0,Vl=null,Na=null,Rn=0,Ua=null,nr=null,ir=0,wf=0,Df=null,Tg=null,yo=0,Nf=null;function si(){if((Bt&2)!==0&&Nt!==0)return Nt&-Nt;if(I.T!==null){var t=ks;return t!==0?t:Bf()}return ye()}function Ag(){gi===0&&(gi=(Nt&536870912)===0||It?W():536870912);var t=mi.current;return t!==null&&(t.flags|=32),gi}function ri(t,n,a){(t===Kt&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)&&(ar(t,0),La(t,Nt,gi,!1)),ke(t,a),((Bt&2)===0||t!==Kt)&&(t===Kt&&((Bt&2)===0&&(ms|=a),on===4&&La(t,Nt,gi,!1)),Ii(t))}function Rg(t,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||ze(t,n),u=o?$x(t,n):Of(t,n,!0),f=o;do{if(u===0){er&&!o&&La(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qx(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;e:{var C=t;u=xo;var F=C.current.memoizedState.isDehydrated;if(F&&(ar(C,M).flags|=256),M=Of(C,M,!1),M!==2){if(Tf&&!F){C.errorRecoveryDisabledLanes|=f,ms|=f,u=4;break e}f=Kn,Kn=u,f!==null&&(Kn===null?Kn=f:Kn.push.apply(Kn,f))}u=M}if(f=!1,u!==2)continue}}if(u===1){ar(t,0),La(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(o,n,gi,!wa);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cf+300-He(),10<u)){if(La(o,n,gi,!wa),$e(o,0,!0)!==0)break e;o.timeoutHandle=n_(Cg.bind(null,o,a,Kn,Vl,Rf,n,gi,ms,tr,wa,f,2,-0,0),u);break e}Cg(o,a,Kn,Vl,Rf,n,gi,ms,tr,wa,f,0,-0,0)}}break}while(!0);Ii(t)}function Cg(t,n,a,o,u,f,M,C,F,re,_e,be,le,ce){if(t.timeoutHandle=-1,be=n.subtreeFlags,(be&8192||(be&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:Uy},Sg(n),be=Oy(),be!==null)){t.cancelPendingCommit=be(Pg.bind(null,t,n,f,a,o,u,M,C,F,_e,1,le,ce)),La(t,f,M,!re);return}Pg(t,n,f,a,o,u,M,C,F)}function Qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!ei(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(t,n,a,o){n&=~Af,n&=~ms,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-je(u),M=1<<f;o[f]=-1,u&=~M}a!==0&&Ee(t,a,n)}function jl(){return(Bt&6)===0?(So(0),!1):!0}function Uf(){if(wt!==null){if(Ft===0)var t=wt.return;else t=wt,Yi=cs=null,Yu(t),Ks=null,uo=0,t=wt;for(;t!==null;)og(t.alternate,t),t=t.return;wt=null}}function ar(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,my(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Uf(),Kt=t,wt=a=Xi(t.current,null),Nt=n,Ft=0,ai=null,wa=!1,er=ze(t,n),Tf=!1,tr=gi=Af=ms=Da=on=0,Kn=xo=null,Rf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-je(o),f=1<<u;n|=t[u],o&=~f}return na=n,fl(),a}function wg(t,n){bt=null,I.H=Dl,n===to||n===yl?(n=Wp(),Ft=3):n===jp?(n=Wp(),Ft=4):Ft=n===qm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ai=n,wt===null&&(on=1,Pl(t,fi(n,t.current)))}function Dg(){var t=I.H;return I.H=Dl,t===null?Dl:t}function Ng(){var t=I.A;return I.A=Zx,t}function Lf(){on=4,wa||(Nt&4194048)!==Nt&&mi.current!==null||(er=!0),(Da&134217727)===0&&(ms&134217727)===0||Kt===null||La(Kt,Nt,gi,!1)}function Of(t,n,a){var o=Bt;Bt|=2;var u=Dg(),f=Ng();(Kt!==t||Nt!==n)&&(Vl=null,ar(t,n)),n=!1;var M=on;e:do try{if(Ft!==0&&wt!==null){var C=wt,F=ai;switch(Ft){case 8:Uf(),M=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(n=!0);var re=Ft;if(Ft=0,ai=null,sr(t,C,F,re),a&&er){M=0;break e}break;default:re=Ft,Ft=0,ai=null,sr(t,C,F,re)}}Jx(),M=on;break}catch(_e){wg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,Yi=cs=null,Bt=o,I.H=u,I.A=f,wt===null&&(Kt=null,Nt=0,fl()),M}function Jx(){for(;wt!==null;)Ug(wt)}function $x(t,n){var a=Bt;Bt|=2;var o=Dg(),u=Ng();Kt!==t||Nt!==n?(Vl=null,Gl=He()+500,ar(t,n)):er=ze(t,n);e:do try{if(Ft!==0&&wt!==null){n=wt;var f=ai;t:switch(Ft){case 1:Ft=0,ai=null,sr(t,n,f,1);break;case 2:case 9:if(kp(f)){Ft=0,ai=null,Lg(n);break}n=function(){Ft!==2&&Ft!==9||Kt!==t||(Ft=7),Ii(t)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:kp(f)?(Ft=0,ai=null,Lg(n)):(Ft=0,ai=null,sr(t,n,f,7));break;case 5:var M=null;switch(wt.tag){case 26:M=wt.memoizedState;case 5:case 27:var C=wt;if(!M||p_(M)){Ft=0,ai=null;var F=C.sibling;if(F!==null)wt=F;else{var re=C.return;re!==null?(wt=re,kl(re)):wt=null}break t}}Ft=0,ai=null,sr(t,n,f,5);break;case 6:Ft=0,ai=null,sr(t,n,f,6);break;case 8:Uf(),on=6;break e;default:throw Error(s(462))}}ey();break}catch(_e){wg(t,_e)}while(!0);return Yi=cs=null,I.H=o,I.A=u,Bt=a,wt!==null?0:(Kt=null,Nt=0,fl(),on)}function ey(){for(;wt!==null&&!Le();)Ug(wt)}function Ug(t){var n=sg(t.alternate,t,na);t.memoizedProps=t.pendingProps,n===null?kl(t):wt=n}function Lg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=$m(a,n,n.pendingProps,n.type,void 0,Nt);break;case 11:n=$m(a,n,n.pendingProps,n.type.render,n.ref,Nt);break;case 5:Yu(n);default:og(a,n),n=wt=Op(n,na),n=sg(a,n,na)}t.memoizedProps=t.pendingProps,n===null?kl(t):wt=n}function sr(t,n,a,o){Yi=cs=null,Yu(n),Ks=null,uo=0;var u=n.return;try{if(jx(t,u,n,a,Nt)){on=1,Pl(t,fi(a,t.current)),wt=null;return}}catch(f){if(u!==null)throw wt=u,f;on=1,Pl(t,fi(a,t.current)),wt=null;return}n.flags&32768?(It||o===1?t=!0:er||(Nt&536870912)!==0?t=!1:(wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){Og(n,wa);return}t=n.return;var a=Xx(n.alternate,n,na);if(a!==null){wt=a;return}if(n=n.sibling,n!==null){wt=n;return}wt=n=t}while(n!==null);on===0&&(on=5)}function Og(t,n){do{var a=Wx(t.alternate,t);if(a!==null){a.flags&=32767,wt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){wt=t;return}wt=t=a}while(t!==null);on=6,wt=null}function Pg(t,n,a,o,u,f,M,C,F){t.cancelPendingCommit=null;do Xl();while(Rn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Eu,we(t,a,f,M,C,F),t===Kt&&(wt=Kt=null,Nt=0),nr=n,Ua=t,ir=a,wf=f,Df=u,Tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(Ht,function(){return Hg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=q.p,q.p=2,M=Bt,Bt|=4;try{qx(t,n,a)}finally{Bt=M,q.p=u,I.T=o}}Rn=1,zg(),Ig(),Bg()}}function zg(){if(Rn===1){Rn=0;var t=Ua,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=Bt;Bt|=4;try{vg(n,t);var f=Wf,M=bp(t.containerInfo),C=f.focusedElem,F=f.selectionRange;if(M!==C&&C&&C.ownerDocument&&Ep(C.ownerDocument.documentElement,C)){if(F!==null&&vu(C)){var re=F.start,_e=F.end;if(_e===void 0&&(_e=re),"selectionStart"in C)C.selectionStart=re,C.selectionEnd=Math.min(_e,C.value.length);else{var be=C.ownerDocument||document,le=be&&be.defaultView||window;if(le.getSelection){var ce=le.getSelection(),ft=C.textContent.length,rt=Math.min(F.start,ft),kt=F.end===void 0?rt:Math.min(F.end,ft);!ce.extend&&rt>kt&&(M=kt,kt=rt,rt=M);var Q=Mp(C,rt),k=Mp(C,kt);if(Q&&k&&(ce.rangeCount!==1||ce.anchorNode!==Q.node||ce.anchorOffset!==Q.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ae=be.createRange();ae.setStart(Q.node,Q.offset),ce.removeAllRanges(),rt>kt?(ce.addRange(ae),ce.extend(k.node,k.offset)):(ae.setEnd(k.node,k.offset),ce.addRange(ae))}}}}for(be=[],ce=C;ce=ce.parentNode;)ce.nodeType===1&&be.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<be.length;C++){var Se=be[C];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}ic=!!Xf,Wf=Xf=null}finally{Bt=u,q.p=o,I.T=a}}t.current=n,Rn=2}}function Ig(){if(Rn===2){Rn=0;var t=Ua,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=q.p;q.p=2;var u=Bt;Bt|=4;try{pg(t,n.alternate,n)}finally{Bt=u,q.p=o,I.T=a}}Rn=3}}function Bg(){if(Rn===4||Rn===3){Rn=0,Ye();var t=Ua,n=nr,a=ir,o=Tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,nr=Ua=null,Fg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Na=null),j(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=q.p,q.p=2,I.T=null;try{for(var f=t.onRecoverableError,M=0;M<o.length;M++){var C=o[M];f(C.value,{componentStack:C.stack})}}finally{I.T=n,q.p=u}}(ir&3)!==0&&Xl(),Ii(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Nf?yo++:(yo=0,Nf=t):yo=0,So(0)}}function Fg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$r(n)))}function Xl(t){return zg(),Ig(),Bg(),Hg()}function Hg(){if(Rn!==5)return!1;var t=Ua,n=wf;wf=0;var a=j(ir),o=I.T,u=q.p;try{q.p=32>a?32:a,I.T=null,a=Df,Df=null;var f=Ua,M=ir;if(Rn=0,nr=Ua=null,ir=0,(Bt&6)!==0)throw Error(s(331));var C=Bt;if(Bt|=4,Eg(f.current),yg(f,f.current,M,a),Bt=C,So(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(me,f)}catch{}return!0}finally{q.p=u,I.T=o,Fg(t,n)}}function Gg(t,n,a){n=fi(a,n),n=cf(t.stateNode,n,2),t=Ma(t,n,2),t!==null&&(ke(t,2),Ii(t))}function Yt(t,n,a){if(t.tag===3)Gg(t,t,a);else for(;n!==null;){if(n.tag===3){Gg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){t=fi(a,t),a=Xm(2),o=Ma(n,a,2),o!==null&&(Wm(a,o,n,t),ke(o,2),Ii(o));break}}n=n.return}}function Pf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Kt===t&&(Nt&a)===a&&(on===4||on===3&&(Nt&62914560)===Nt&&300>He()-Cf?(Bt&2)===0&&ar(t,0):Af|=a,tr===Nt&&(tr=0)),Ii(t)}function Vg(t,n){n===0&&(n=De()),t=Hs(t,n),t!==null&&(ke(t,n),Ii(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Vg(t,a)}function iy(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Vg(t,a)}function ay(t,n){return T(t,n)}var Wl=null,rr=null,zf=!1,ql=!1,If=!1,gs=0;function Ii(t){t!==rr&&t.next===null&&(rr===null?Wl=rr=t:rr=rr.next=t),ql=!0,zf||(zf=!0,ry())}function So(t,n){if(!If&&ql){If=!0;do for(var a=!1,o=Wl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var M=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-je(42|t)+1)-1,f&=u&~(M&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Wg(o,f))}else f=Nt,f=$e(o,o===Kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ze(o,f)||(a=!0,Wg(o,f));o=o.next}while(a);If=!1}}function sy(){jg()}function jg(){ql=zf=!1;var t=0;gs!==0&&(py()&&(t=gs),gs=0);for(var n=He(),a=null,o=Wl;o!==null;){var u=o.next,f=kg(o,n);f===0?(o.next=null,a===null?Wl=u:a.next=u,u===null&&(rr=a)):(a=o,(t!==0||(f&3)!==0)&&(ql=!0)),o=u}So(t)}function kg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-je(f),C=1<<M,F=u[M];F===-1?((C&a)===0||(C&o)!==0)&&(u[M]=dt(C,n)):F<=n&&(t.expiredLanes|=C),f&=~C}if(n=Kt,a=Nt,a=$e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ft===2||Ft===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ce(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ce(o),j(a)){case 2:case 8:a=ht;break;case 32:a=Ht;break;case 268435456:a=P;break;default:a=Ht}return o=Xg.bind(null,t),a=T(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ce(o),t.callbackPriority=2,t.callbackNode=null,2}function Xg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var o=Nt;return o=$e(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Rg(t,o,n),kg(t,He()),t.callbackNode!=null&&t.callbackNode===a?Xg.bind(null,t):null)}function Wg(t,n){if(Xl())return null;Rg(t,n,!0)}function ry(){gy(function(){(Bt&6)!==0?T(Qe,sy):jg()})}function Bf(){return gs===0&&(gs=W()),gs}function qg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:al(""+t)}function Yg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=qg((u[pt]||null).action),M=o.submitter;M&&(n=(n=M[pt]||null)?qg(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var C=new ll("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gs!==0){var F=M?Yg(u,M):new FormData(u);af(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(C.preventDefault(),F=M?Yg(u,M):new FormData(u),af(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Ff=0;Ff<Mu.length;Ff++){var Hf=Mu[Ff],ly=Hf.toLowerCase(),cy=Hf[0].toUpperCase()+Hf.slice(1);Ei(ly,"on"+cy)}Ei(Rp,"onAnimationEnd"),Ei(Cp,"onAnimationIteration"),Ei(wp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Ax,"onTransitionRun"),Ei(Rx,"onTransitionStart"),Ei(Cx,"onTransitionCancel"),Ei(Dp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),N("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),N("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),N("onBeforeInput",["compositionend","keypress","textInput","paste"]),N("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),N("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Zg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var M=o.length-1;0<=M;M--){var C=o[M],F=C.instance,re=C.currentTarget;if(C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=re;try{f(u)}catch(_e){Ol(_e)}u.currentTarget=null,f=F}else for(M=0;M<o.length;M++){if(C=o[M],F=C.instance,re=C.currentTarget,C=C.listener,F!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=re;try{f(u)}catch(_e){Ol(_e)}u.currentTarget=null,f=F}}}}function Dt(t,n){var a=n[Pn];a===void 0&&(a=n[Pn]=new Set);var o=t+"__bubble";a.has(o)||(Kg(n,t,2,!1),a.add(o))}function Gf(t,n,a){var o=0;n&&(o|=4),Kg(a,t,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Yl]){t[Yl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Gf("selectionchange",!1,n))}}function Kg(t,n,a,o){switch(y_(n)){case 2:var u=Iy;break;case 8:u=By;break;default:u=nh}a=u.bind(null,n,a,t),u=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var C=o.stateNode.containerInfo;if(C===u)break;if(M===4)for(M=o.return;M!==null;){var F=M.tag;if((F===3||F===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;C!==null;){if(M=ji(C),M===null)return;if(F=M.tag,F===5||F===6||F===26||F===27){o=f=M;continue e}C=C.parentNode}}o=o.return}ip(function(){var re=f,_e=ou(a),be=[];e:{var le=Np.get(t);if(le!==void 0){var ce=ll,ft=t;switch(t){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":ce=ax;break;case"focusin":ft="focus",ce=du;break;case"focusout":ft="blur",ce=du;break;case"beforeblur":case"afterblur":ce=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=ox;break;case Rp:case Cp:case wp:ce=Zv;break;case Dp:ce=cx;break;case"scroll":case"scrollend":ce=kv;break;case"wheel":ce=fx;break;case"copy":case"cut":case"paste":ce=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=lp;break;case"toggle":case"beforetoggle":ce=dx}var rt=(n&4)!==0,kt=!rt&&(t==="scroll"||t==="scrollend"),Q=rt?le!==null?le+"Capture":null:le;rt=[];for(var k=re,ae;k!==null;){var Se=k;if(ae=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ae===null||Q===null||(Se=Hr(k,Q),Se!=null&&rt.push(Eo(k,Se,ae))),kt)break;k=k.return}0<rt.length&&(le=new ce(le,ft,null,a,_e),be.push({event:le,listeners:rt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==ru&&(ft=a.relatedTarget||a.fromElement)&&(ji(ft)||ft[Xn]))break e;if((ce||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(ft=a.relatedTarget||a.toElement,ce=re,ft=ft?ji(ft):null,ft!==null&&(kt=c(ft),rt=ft.tag,ft!==kt||rt!==5&&rt!==27&&rt!==6)&&(ft=null)):(ce=null,ft=re),ce!==ft)){if(rt=rp,Se="onMouseLeave",Q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(rt=lp,Se="onPointerLeave",Q="onPointerEnter",k="pointer"),kt=ce==null?le:es(ce),ae=ft==null?le:es(ft),le=new rt(Se,k+"leave",ce,a,_e),le.target=kt,le.relatedTarget=ae,Se=null,ji(_e)===re&&(rt=new rt(Q,k+"enter",ft,a,_e),rt.target=ae,rt.relatedTarget=kt,Se=rt),kt=Se,ce&&ft)t:{for(rt=ce,Q=ft,k=0,ae=rt;ae;ae=or(ae))k++;for(ae=0,Se=Q;Se;Se=or(Se))ae++;for(;0<k-ae;)rt=or(rt),k--;for(;0<ae-k;)Q=or(Q),ae--;for(;k--;){if(rt===Q||Q!==null&&rt===Q.alternate)break t;rt=or(rt),Q=or(Q)}rt=null}else rt=null;ce!==null&&Qg(be,le,ce,rt,!1),ft!==null&&kt!==null&&Qg(be,kt,ft,rt,!0)}}e:{if(le=re?es(re):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var et=gp;else if(pp(le))if(_p)et=Ex;else{et=Sx;var At=yx}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?re&&su(re.elementType)&&(et=gp):et=Mx;if(et&&(et=et(t,re))){mp(be,et,a,_e);break e}At&&At(t,le,re),t==="focusout"&&re&&le.type==="number"&&re.memoizedProps.value!=null&&Dn(le,"number",le.value)}switch(At=re?es(re):window,t){case"focusin":(pp(At)||At.contentEditable==="true")&&(Is=At,xu=re,Yr=null);break;case"focusout":Yr=xu=Is=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Tp(be,a,_e);break;case"selectionchange":if(Tx)break;case"keydown":case"keyup":Tp(be,a,_e)}var it;if(mu)e:{switch(t){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else zs?hp(t,a)&&(ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&(cp&&a.locale!=="ko"&&(zs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&zs&&(it=ap()):(va=_e,uu="value"in va?va.value:va.textContent,zs=!0)),At=Zl(re,ct),0<At.length&&(ct=new op(ct,t,null,a,_e),be.push({event:ct,listeners:At}),it?ct.data=it:(it=dp(a),it!==null&&(ct.data=it)))),(it=mx?gx(t,a):_x(t,a))&&(ct=Zl(re,"onBeforeInput"),0<ct.length&&(At=new op("onBeforeInput","beforeinput",null,a,_e),be.push({event:At,listeners:ct}),At.data=it)),oy(be,t,re,a,_e)}Zg(be,n)})}function Eo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hr(t,a),u!=null&&o.unshift(Eo(t,u,f)),u=Hr(t,n),u!=null&&o.push(Eo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function or(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Qg(t,n,a,o,u){for(var f=n._reactName,M=[];a!==null&&a!==o;){var C=a,F=C.alternate,re=C.stateNode;if(C=C.tag,F!==null&&F===o)break;C!==5&&C!==26&&C!==27||re===null||(F=re,u?(re=Hr(a,f),re!=null&&M.unshift(Eo(a,re,F))):u||(re=Hr(a,f),re!=null&&M.push(Eo(a,re,F)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function Jg(t){return(typeof t=="string"?t:""+t).replace(fy,`
`).replace(hy,"")}function $g(t,n){return n=Jg(n),Jg(t)===n}function Kl(){}function jt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Wn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Wn(t,""+o);break;case"className":Ze(t,"class",o);break;case"tabIndex":Ze(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,o);break;case"style":tp(t,o,f);break;case"data":if(n!=="object"){Ze(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Dt("beforetoggle",t),Dt("toggle",t),Be(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Be(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vv.get(a)||a,Be(t,a,o))}}function kf(t,n,a,o,u,f){switch(a){case"style":tp(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Wn(t,o):(typeof o=="number"||typeof o=="bigint")&&Wn(t,""+o);break;case"onScroll":o!=null&&Dt("scroll",t);break;case"onScrollEnd":o!=null&&Dt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[pt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Be(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Dt("error",t),Dt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,f,M,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),o&&jt(t,n,"src",a.src,a,null);return;case"input":Dt("invalid",t);var C=f=M=u=null,F=null,re=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":M=_e;break;case"checked":F=_e;break;case"defaultChecked":re=_e;break;case"value":f=_e;break;case"defaultValue":C=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:jt(t,n,o,_e,a,null)}}Bn(t,f,C,F,re,M,u,!1),Ct(t);return;case"select":Dt("invalid",t),o=M=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":M=C;break;case"multiple":o=C;default:jt(t,n,u,C,a,null)}n=f,a=M,t.multiple=!!o,n!=null?sn(t,!!o,n,!1):a!=null&&sn(t,!!o,a,!0);return;case"textarea":Dt("invalid",t),f=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(C=a[M],C!=null))switch(M){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:jt(t,n,M,C,a,null)}Ls(t,o,u,f),Ct(t);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:jt(t,n,F,o,a,null)}return;case"dialog":Dt("beforetoggle",t),Dt("toggle",t),Dt("cancel",t),Dt("close",t);break;case"iframe":case"object":Dt("load",t);break;case"video":case"audio":for(o=0;o<Mo.length;o++)Dt(Mo[o],t);break;case"image":Dt("error",t),Dt("load",t);break;case"details":Dt("toggle",t);break;case"embed":case"source":case"link":Dt("error",t),Dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(re in a)if(a.hasOwnProperty(re)&&(o=a[re],o!=null))switch(re){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:jt(t,n,re,o,a,null)}return;default:if(su(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&kf(t,n,_e,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&jt(t,n,C,o,a,null))}function dy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,M=null,C=null,F=null,re=null,_e=null;for(ce in a){var be=a[ce];if(a.hasOwnProperty(ce)&&be!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=be;default:o.hasOwnProperty(ce)||jt(t,n,ce,null,o,be)}}for(var le in o){var ce=o[le];if(be=a[le],o.hasOwnProperty(le)&&(ce!=null||be!=null))switch(le){case"type":f=ce;break;case"name":u=ce;break;case"checked":re=ce;break;case"defaultChecked":_e=ce;break;case"value":M=ce;break;case"defaultValue":C=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==be&&jt(t,n,le,ce,o,be)}}qt(t,M,C,F,re,_e,f,u);return;case"select":ce=M=C=le=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":ce=F;default:o.hasOwnProperty(f)||jt(t,n,f,null,o,F)}for(u in o)if(f=o[u],F=a[u],o.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":le=f;break;case"defaultValue":C=f;break;case"multiple":M=f;default:f!==F&&jt(t,n,u,f,o,F)}n=C,a=M,o=ce,le!=null?sn(t,!!a,le,!1):!!o!=!!a&&(n!=null?sn(t,!!a,n,!0):sn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:jt(t,n,C,null,o,u)}for(M in o)if(u=o[M],f=a[M],o.hasOwnProperty(M)&&(u!=null||f!=null))switch(M){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&jt(t,n,M,u,o,f)}Tn(t,le,ce);return;case"option":for(var ft in a)if(le=a[ft],a.hasOwnProperty(ft)&&le!=null&&!o.hasOwnProperty(ft))switch(ft){case"selected":t.selected=!1;break;default:jt(t,n,ft,null,o,le)}for(F in o)if(le=o[F],ce=a[F],o.hasOwnProperty(F)&&le!==ce&&(le!=null||ce!=null))switch(F){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:jt(t,n,F,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)le=a[rt],a.hasOwnProperty(rt)&&le!=null&&!o.hasOwnProperty(rt)&&jt(t,n,rt,null,o,le);for(re in o)if(le=o[re],ce=a[re],o.hasOwnProperty(re)&&le!==ce&&(le!=null||ce!=null))switch(re){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:jt(t,n,re,le,o,ce)}return;default:if(su(n)){for(var kt in a)le=a[kt],a.hasOwnProperty(kt)&&le!==void 0&&!o.hasOwnProperty(kt)&&kf(t,n,kt,void 0,o,le);for(_e in o)le=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||le===ce||le===void 0&&ce===void 0||kf(t,n,_e,le,o,ce);return}}for(var Q in a)le=a[Q],a.hasOwnProperty(Q)&&le!=null&&!o.hasOwnProperty(Q)&&jt(t,n,Q,null,o,le);for(be in o)le=o[be],ce=a[be],!o.hasOwnProperty(be)||le===ce||le==null&&ce==null||jt(t,n,be,le,o,ce)}var Xf=null,Wf=null;function Ql(t){return t.nodeType===9?t:t.ownerDocument}function e_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function py(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(t){return i_.resolve(null).then(t).catch(_y)}:n_;function _y(t){setTimeout(function(){throw t})}function Oa(t){return t==="head"}function a_(t,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var M=t.ownerDocument;if(a&1&&bo(M.documentElement),a&2&&bo(M.body),a&4)for(a=M.head,bo(a),M=a.firstChild;M;){var C=M.nextSibling,F=M.nodeName;M[Ui]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=C}}if(u===0){t.removeChild(f),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Uo(n)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),Us(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ui])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ti(t.nextSibling),t===null)break}return null}function xy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ti(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function yy(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ti(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Qf=null;function s_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function r_(t,n,a){switch(n=Ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Us(t)}var _i=new Map,o_=new Set;function Jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ia=q.d;q.d={f:Sy,r:My,D:Ey,C:by,L:Ty,m:Ay,X:Cy,S:Ry,M:wy};function Sy(){var t=ia.f(),n=jl();return t||n}function My(t){var n=ga(t);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ia.r(t)}var lr=typeof document>"u"?null:document;function l_(t,n,a){var o=lr;if(o&&typeof n=="string"&&n){var u=yn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),o_.has(u)||(o_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function Ey(t){ia.D(t),l_("dns-prefetch",t,null)}function by(t,n){ia.C(t,n),l_("preconnect",t,n)}function Ty(t,n,a){ia.L(t,n,a);var o=lr;if(o&&t&&n){var u='link[rel="preload"][as="'+yn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+yn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+yn(a.imageSizes)+'"]')):u+='[href="'+yn(t)+'"]';var f=u;switch(n){case"style":f=cr(t);break;case"script":f=ur(t)}_i.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(To(f))||n==="script"&&o.querySelector(Ao(f))||(n=o.createElement("link"),Cn(n,"link",t),fn(n),o.head.appendChild(n)))}}function Ay(t,n){ia.m(t,n);var a=lr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ur(t)}if(!_i.has(f)&&(t=_({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}o=a.createElement("link"),Cn(o,"link",t),fn(o),a.head.appendChild(o)}}}function Ry(t,n,a){ia.S(t,n,a);var o=lr;if(o&&t){var u=_a(o).hoistableStyles,f=cr(t);n=n||"default";var M=u.get(f);if(!M){var C={loading:0,preload:null};if(M=o.querySelector(To(f)))C.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&Jf(t,a);var F=M=o.createElement("link");fn(F),Cn(F,"link",t),F._p=new Promise(function(re,_e){F.onload=re,F.onerror=_e}),F.addEventListener("load",function(){C.loading|=1}),F.addEventListener("error",function(){C.loading|=2}),C.loading|=4,$l(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:C},u.set(f,M)}}}function Cy(t,n){ia.X(t,n);var a=lr;if(a&&t){var o=_a(a).hoistableScripts,u=ur(t),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(t=_({src:t,async:!0},n),(n=_i.get(u))&&$f(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function wy(t,n){ia.M(t,n);var a=lr;if(a&&t){var o=_a(a).hoistableScripts,u=ur(t),f=o.get(u);f||(f=a.querySelector(Ao(u)),f||(t=_({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&$f(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function c_(t,n,a,o){var u=(u=ie.current)?Jl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=_a(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=cr(a.href);var f=_a(u).hoistableStyles,M=f.get(t);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=u.querySelector(To(t)))&&!f._p&&(M.instance=f,M.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||Dy(u,t,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=_a(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function cr(t){return'href="'+yn(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function u_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Dy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),fn(n),t.head.appendChild(n))}function ur(t){return'[src="'+yn(t)+'"]'}function Ao(t){return"script[async]"+t}function f_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+yn(a.href)+'"]');if(o)return n.instance=o,fn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),fn(o),Cn(o,"style",u),$l(o,a.precedence,t),n.instance=o;case"stylesheet":u=cr(a.href);var f=t.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;o=u_(a),(u=_i.get(u))&&Jf(o,u),f=(t.ownerDocument||t).createElement("link"),fn(f);var M=f;return M._p=new Promise(function(C,F){M.onload=C,M.onerror=F}),Cn(f,"link",o),n.state.loading|=4,$l(f,a.precedence,t),n.instance=f;case"script":return f=ur(a.src),(u=t.querySelector(Ao(f)))?(n.instance=u,fn(u),u):(o=a,(u=_i.get(f))&&(o=_({},a),$f(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,t));return n.instance}function $l(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,M=0;M<o.length;M++){var C=o[M];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Jf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ec=null;function h_(t,n,a){if(ec===null){var o=new Map,u=ec=new Map;u.set(a,o)}else u=ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ui]||f[Tt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var C=o.get(M);C?C.push(f):o.set(M,[f])}}return o}function d_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ny(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function p_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ro=null;function Uy(){}function Ly(t,n,a){if(Ro===null)throw Error(s(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=cr(a.href),f=t.querySelector(To(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=tc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,fn(f);return}f=t.ownerDocument||t,a=u_(a),(u=_i.get(u))&&Jf(a,u),f=f.createElement("link"),fn(f);var M=f;M._p=new Promise(function(C,F){M.onload=C,M.onerror=F}),Cn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function Oy(){if(Ro===null)throw Error(s(475));var t=Ro;return t.stylesheets&&t.count===0&&eh(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var nc=null;function eh(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,nc=new Map,n.forEach(Py,t),nc=null,tc.call(t))}function Py(t,n){if(!(n.state.loading&4)){var a=nc.get(t);if(a)var o=a.get(null);else{a=new Map,nc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var M=u[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),f=a.get(M)||o,f===o&&a.set(null,u),a.set(M,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Co={$$typeof:O,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function zy(t,n,a,o,u,f,M,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function m_(t,n,a,o,u,f,M,C,F,re,_e,be){return t=new zy(t,n,a,M,C,F,re,be),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Bu(f),t}function g_(t){return t?(t=Gs,t):Gs}function __(t,n,a,o,u,f){u=g_(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ma(t,o,n),a!==null&&(ri(a,t,n),io(a,t,n))}function v_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function th(t,n){v_(t,n),(t=t.alternate)&&v_(t,n)}function x_(t){if(t.tag===13){var n=Hs(t,67108864);n!==null&&ri(n,t,67108864),th(t,67108864)}}var ic=!0;function Iy(t,n,a,o){var u=I.T;I.T=null;var f=q.p;try{q.p=2,nh(t,n,a,o)}finally{q.p=f,I.T=u}}function By(t,n,a,o){var u=I.T;I.T=null;var f=q.p;try{q.p=8,nh(t,n,a,o)}finally{q.p=f,I.T=u}}function nh(t,n,a,o){if(ic){var u=ih(o);if(u===null)jf(t,n,o,ac,a),S_(t,o);else if(Hy(u,t,n,a,o))o.stopPropagation();else if(S_(t,o),n&4&&-1<Fy.indexOf(t)){for(;u!==null;){var f=ga(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=tt(f.pendingLanes);if(M!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var F=1<<31-je(M);C.entanglements[1]|=F,M&=~F}Ii(f),(Bt&6)===0&&(Gl=He()+500,So(0))}}break;case 13:C=Hs(f,2),C!==null&&ri(C,f,2),jl(),th(f,2)}if(f=ih(o),f===null&&jf(t,n,o,ac,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else jf(t,n,o,null,a)}}function ih(t){return t=ou(t),ah(t)}var ac=null;function ah(t){if(ac=null,t=ji(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function y_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case Qe:return 2;case ht:return 8;case Ht:case Zt:return 32;case P:return 268435456;default:return 32}default:return 32}}var sh=!1,Pa=null,za=null,Ia=null,wo=new Map,Do=new Map,Ba=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S_(t,n){switch(t){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function No(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ga(n),n!==null&&x_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Hy(t,n,a,o,u){switch(n){case"focusin":return Pa=No(Pa,t,n,a,o,u),!0;case"dragenter":return za=No(za,t,n,a,o,u),!0;case"mouseover":return Ia=No(Ia,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,No(wo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,No(Do.get(f)||null,t,n,a,o,u)),!0}return!1}function M_(t){var n=ji(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,mt(t.priority,function(){if(a.tag===13){var o=si();o=ut(o);var u=Hs(a,o);u!==null&&ri(u,a,o),th(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ih(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);ru=o,a.target.dispatchEvent(o),ru=null}else return n=ga(a),n!==null&&x_(n),t.blockedOn=a,!1;n.shift()}return!0}function E_(t,n,a){sc(t)&&a.delete(n)}function Gy(){sh=!1,Pa!==null&&sc(Pa)&&(Pa=null),za!==null&&sc(za)&&(za=null),Ia!==null&&sc(Ia)&&(Ia=null),wo.forEach(E_),Do.forEach(E_)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,sh||(sh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gy)))}var oc=null;function b_(t){oc!==t&&(oc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(ah(o||a)===null)continue;break}var f=ga(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(t){function n(F){return rc(F,t)}Pa!==null&&rc(Pa,t),za!==null&&rc(za,t),Ia!==null&&rc(Ia,t),wo.forEach(n),Do.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)M_(a),a.blockedOn===null&&Ba.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],M=u[pt]||null;if(typeof f=="function")M||b_(a);else if(M){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,M=f[pt]||null)C=M.formAction;else if(ah(u)!==null)continue}else C=M.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),b_(a)}}}function rh(t){this._internalRoot=t}lc.prototype.render=rh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();__(a,o,t,n,null,null)},lc.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;__(t.current,2,null,t,null,null),jl(),n[Xn]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,t),a===0&&M_(t)}};var T_=e.version;if(T_!=="19.1.1")throw Error(s(527,T_,"19.1.1"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Vy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{me=cc.inject(Vy),Me=cc}catch{}}return Oo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Gm,f=Vm,M=jm,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=m_(t,1,!1,null,null,a,o,u,f,M,C,null),t[Xn]=n.current,Vf(t),new rh(n)},Oo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Gm,M=Vm,C=jm,F=null,re=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(F=a.unstable_transitionCallbacks),a.formState!==void 0&&(re=a.formState)),n=m_(t,1,!0,n,a??null,o,u,f,M,C,F,re),n.context=g_(null),a=n.current,o=si(),o=ut(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,ke(n,a),Ii(n),t[Xn]=n.current,Vf(t),new lc(n)},Oo.version="19.1.1",Oo}var P_;function $y(){if(P_)return ch.exports;P_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ch.exports=Jy(),ch.exports}var eS=$y();const tS=ev(eS);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=Te.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},g)=>Te.createElement("svg",{ref:g,...iS,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:tv("lucide",l),...d},[...h.map(([p,_])=>Te.createElement(p,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=(r,e)=>{const i=Te.forwardRef(({className:s,...l},c)=>Te.createElement(aS,{ref:c,iconNode:e,className:tv(`lucide-${nS(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Et("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Et("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=Et("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Et("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=Et("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Et("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=Et("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=Et("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=Et("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=Et("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Et("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Et("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=Et("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=Et("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=Et("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Et("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=Et("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=Et("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=Et("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=Et("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=Et("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Et("ImagePlus",[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=Et("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=Et("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Et("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=Et("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=Et("MousePointer2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=Et("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=Et("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=Et("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=Et("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=Et("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=Et("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=Et("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=Et("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=Et("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=Et("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=Et("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=Et("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=Et("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);async function nn(r,e){const i=await fetch(r,e);if(!i.ok){let s=`请求失败 (${i.status})`;try{const l=await i.json();s=typeof l.detail=="string"?l.detail:JSON.stringify(l.detail??l)}catch{}throw new Error(s)}return i.json()}const fa=r=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});function av(r,e){const i=URL.createObjectURL(new Blob([JSON.stringify(e,null,2)],{type:"application/json"})),s=document.createElement("a");s.href=i,s.download=r,s.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const Jt=(r,e=3)=>r==null||!Number.isFinite(r)?"—":r.toLocaleString("en-US",{maximumFractionDigits:e}),Yc=r=>({loading:"读取数据",dataset_loading:"数据加载与准备",features:"提取特征",feature_extraction:"提取特征",matching:"特征匹配",pair_geometry:"匹配与几何验证",geometry:"几何验证",tracks:"构建轨迹",initialization:"两视图初始化",mapping:"增量建图",incremental_mapping:"增量建图",registration:"注册相机",bundle_adjustment:"束调整 BA",ba:"束调整 BA",export:"导出结果",exporting:"导出结果",done:"处理完成",starting:"正在启动",queued:"等待启动",preparing:"准备训练数据",training:"训练",evaluation:"验证与渲染",todo:"算法待实现"})[r]??r;function sv(r){const e=/^registered_(\d+)$/.exec(r);return e?`注册图像 #${e[1]}`:{initialization:"初始化",incremental_complete:"增量建图完成",before_ba:"BA 前",after_ba:"BA 后",final:"最终结果"}[r]??r}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="180",wr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ES=0,X_=1,bS=2,rv=1,TS=2,ca=3,Qa=0,Jn=1,ua=2,Ya=0,Dr=1,W_=2,q_=3,Y_=4,AS=5,bs=100,RS=101,CS=102,wS=103,DS=104,NS=200,US=201,LS=202,OS=203,Yh=204,Zh=205,PS=206,zS=207,IS=208,BS=209,FS=210,HS=211,GS=212,VS=213,jS=214,Kh=0,Qh=1,Jh=2,Ur=3,$h=4,ed=5,td=6,nd=7,ov=0,kS=1,XS=2,Za=0,WS=1,qS=2,YS=3,ZS=4,KS=5,QS=6,JS=7,lv=300,Lr=301,Or=302,id=303,ad=304,nu=306,sd=1e3,As=1001,rd=1002,Ni=1003,$S=1004,uc=1005,Hi=1006,dh=1007,Rs=1008,pa=1009,cv=1010,uv=1011,Wo=1012,Vd=1013,Cs=1014,ha=1015,Jo=1016,jd=1017,kd=1018,qo=1020,fv=35902,hv=35899,dv=1021,pv=1022,Di=1023,Yo=1026,Zo=1027,mv=1028,Xd=1029,gv=1030,Wd=1031,qd=1033,Hc=33776,Gc=33777,Vc=33778,jc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,xd=37813,yd=37814,Sd=37815,Md=37816,Ed=37817,bd=37818,Td=37819,Ad=37820,Rd=37821,Cd=36492,wd=36494,Dd=36495,Nd=36283,Ud=36284,Ld=36285,Od=36286,eM=3200,tM=3201,nM=0,iM=1,qa="",Vn="srgb",Pr="srgb-linear",Zc="linear",Xt="srgb",fr=7680,Z_=519,aM=512,sM=513,rM=514,_v=515,oM=516,lM=517,cM=518,uM=519,K_=35044,Q_="300 es",Gi=2e3,Kc=2001;class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let J_=1234567;const ko=Math.PI/180,Ko=180/Math.PI;function Ir(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function Rt(r,e,i){return Math.max(e,Math.min(i,r))}function Yd(r,e){return(r%e+e)%e}function fM(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function hM(r,e,i){return r!==e?(i-r)/(e-r):0}function Xo(r,e,i){return(1-i)*r+i*e}function dM(r,e,i,s){return Xo(r,e,1-Math.exp(-i*s))}function pM(r,e=1){return e-Math.abs(Yd(r,e*2)-e)}function mM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function gM(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function _M(r,e){return r+Math.floor(Math.random()*(e-r+1))}function vM(r,e){return r+Math.random()*(e-r)}function xM(r){return r*(.5-Math.random())}function yM(r){r!==void 0&&(J_=r);let e=J_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function SM(r){return r*ko}function MM(r){return r*Ko}function EM(r){return(r&r-1)===0&&r!==0}function bM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function TM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function AM(r,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),g=h(i/2),p=c((e+s)/2),_=h((e+s)/2),y=c((e-s)/2),S=h((e-s)/2),E=c((s-e)/2),b=h((s-e)/2);switch(l){case"XYX":r.set(d*_,g*y,g*S,d*p);break;case"YZY":r.set(g*S,d*_,g*y,d*p);break;case"ZXZ":r.set(g*y,g*S,d*_,d*p);break;case"XZX":r.set(d*_,g*b,g*E,d*p);break;case"YXY":r.set(g*E,d*_,g*b,d*p);break;case"ZYZ":r.set(g*b,g*E,d*_,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Tr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vv={DEG2RAD:ko,RAD2DEG:Ko,generateUUID:Ir,clamp:Rt,euclideanModulo:Yd,mapLinear:fM,inverseLerp:hM,lerp:Xo,damp:dM,pingpong:pM,smoothstep:mM,smootherstep:gM,randInt:_M,randFloat:vM,randFloatSpread:xM,seededRandom:yM,degToRad:SM,radToDeg:MM,isPowerOfTwo:EM,ceilPowerOfTwo:bM,floorPowerOfTwo:TM,setQuaternionFromProperEuler:AM,normalize:Hn,denormalize:Tr};class Mt{constructor(e=0,i=0){Mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let g=s[l+0],p=s[l+1],_=s[l+2],y=s[l+3];const S=c[h+0],E=c[h+1],b=c[h+2],D=c[h+3];if(d===0){e[i+0]=g,e[i+1]=p,e[i+2]=_,e[i+3]=y;return}if(d===1){e[i+0]=S,e[i+1]=E,e[i+2]=b,e[i+3]=D;return}if(y!==D||g!==S||p!==E||_!==b){let x=1-d;const v=g*S+p*E+_*b+y*D,z=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const B=Math.sqrt(O),V=Math.atan2(B,v*z);x=Math.sin(x*V)/B,d=Math.sin(d*V)/B}const U=d*z;if(g=g*x+S*U,p=p*x+E*U,_=_*x+b*U,y=y*x+D*U,x===1-d){const B=1/Math.sqrt(g*g+p*p+_*_+y*y);g*=B,p*=B,_*=B,y*=B}}e[i]=g,e[i+1]=p,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],g=s[l+1],p=s[l+2],_=s[l+3],y=c[h],S=c[h+1],E=c[h+2],b=c[h+3];return e[i]=d*b+_*y+g*E-p*S,e[i+1]=g*b+_*S+p*y-d*E,e[i+2]=p*b+_*E+d*S-g*y,e[i+3]=_*b-d*y-g*S-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,g=Math.sin,p=d(s/2),_=d(l/2),y=d(c/2),S=g(s/2),E=g(l/2),b=g(c/2);switch(h){case"XYZ":this._x=S*_*y+p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y-S*E*b;break;case"YXZ":this._x=S*_*y+p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y+S*E*b;break;case"ZXY":this._x=S*_*y-p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y-S*E*b;break;case"ZYX":this._x=S*_*y-p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y+S*E*b;break;case"YZX":this._x=S*_*y+p*E*b,this._y=p*E*y+S*_*b,this._z=p*_*b-S*E*y,this._w=p*_*y-S*E*b;break;case"XZY":this._x=S*_*y-p*E*b,this._y=p*E*y-S*_*b,this._z=p*_*b+S*E*y,this._w=p*_*y+S*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],g=i[9],p=i[2],_=i[6],y=i[10],S=s+d+y;if(S>0){const E=.5/Math.sqrt(S+1);this._w=.25/E,this._x=(_-g)*E,this._y=(c-p)*E,this._z=(h-l)*E}else if(s>d&&s>y){const E=2*Math.sqrt(1+s-d-y);this._w=(_-g)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+p)/E}else if(d>y){const E=2*Math.sqrt(1+d-s-y);this._w=(c-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(g+_)/E}else{const E=2*Math.sqrt(1+y-s-d);this._w=(h-l)/E,this._x=(c+p)/E,this._y=(g+_)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,g=i._y,p=i._z,_=i._w;return this._x=s*_+h*d+l*p-c*g,this._y=l*_+h*g+c*d-s*p,this._z=c*_+h*p+s*g-l*d,this._w=h*_-s*d-l*g-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const g=1-d*d;if(g<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*s+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const p=Math.sqrt(g),_=Math.atan2(p,d),y=Math.sin((1-i)*_)/p,S=Math.sin(i*_)/p;return this._w=h*y+this._w*S,this._x=s*y+this._x*S,this._y=l*y+this._y*S,this._z=c*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion($_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion($_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,g=e.w,p=2*(h*l-d*s),_=2*(d*i-c*l),y=2*(c*s-h*i);return this.x=i+g*p+h*y-d*_,this.y=s+g*_+d*p-c*y,this.z=l+g*y+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,g=i.z;return this.x=l*g-c*d,this.y=c*h-s*g,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ph.copy(this).projectOnVector(e),this.sub(ph)}reflect(e){return this.sub(ph.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Rt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ph=new J,$_=new ws;class vt{constructor(e,i,s,l,c,h,d,g,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,p)}set(e,i,s,l,c,h,d,g,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=g,_[6]=s,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],g=s[6],p=s[1],_=s[4],y=s[7],S=s[2],E=s[5],b=s[8],D=l[0],x=l[3],v=l[6],z=l[1],O=l[4],U=l[7],B=l[2],V=l[5],G=l[8];return c[0]=h*D+d*z+g*B,c[3]=h*x+d*O+g*V,c[6]=h*v+d*U+g*G,c[1]=p*D+_*z+y*B,c[4]=p*x+_*O+y*V,c[7]=p*v+_*U+y*G,c[2]=S*D+E*z+b*B,c[5]=S*x+E*O+b*V,c[8]=S*v+E*U+b*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-s*c*_+s*d*g+l*c*p-l*h*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],_=e[8],y=_*h-d*p,S=d*g-_*c,E=p*c-h*g,b=i*y+s*S+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=y*D,e[1]=(l*p-_*s)*D,e[2]=(d*s-l*h)*D,e[3]=S*D,e[4]=(_*i-l*g)*D,e[5]=(l*c-d*i)*D,e[6]=E*D,e[7]=(s*g-p*i)*D,e[8]=(h*i-s*c)*D,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const g=Math.cos(c),p=Math.sin(c);return this.set(s*g,s*p,-s*(g*h+p*d)+h+e,-l*p,l*g,-l*(-p*h+g*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(mh.makeScale(e,i)),this}rotate(e){return this.premultiply(mh.makeRotation(-e)),this}translate(e,i){return this.premultiply(mh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mh=new vt;function xv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function RM(){const r=Qc("canvas");return r.style.display="block",r}const e0={};function Qo(r){r in e0||(e0[r]=!0,console.warn(r))}function CM(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const t0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xt&&(l.r=da(l.r),l.g=da(l.g),l.b=da(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xt&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===qa?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pr]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:s,transfer:Xt,toXYZ:t0,fromXYZ:n0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),r}const Ot=wM();function da(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Nr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class DM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{hr===void 0&&(hr=Qc("canvas")),hr.width=e.width,hr.height=e.height;const l=hr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=da(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(da(i[s]/255)*255):i[s]=da(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NM=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(gh(l[h].image)):c.push(gh(l[h]))}else c=gh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function gh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?DM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;const _h=new J;class $n extends Ns{constructor(e=$n.DEFAULT_IMAGE,i=$n.DEFAULT_MAPPING,s=As,l=As,c=Hi,h=Rs,d=Di,g=pa,p=$n.DEFAULT_ANISOTROPY,_=qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=Ir(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=g,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_h).x}get height(){return this.source.getSize(_h).y}get depth(){return this.source.getSize(_h).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case As:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case As:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=lv;$n.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,s=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,p=g[0],_=g[4],y=g[8],S=g[1],E=g[5],b=g[9],D=g[2],x=g[6],v=g[10];if(Math.abs(_-S)<.01&&Math.abs(y-D)<.01&&Math.abs(b-x)<.01){if(Math.abs(_+S)<.1&&Math.abs(y+D)<.1&&Math.abs(b+x)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(E+1)/2,B=(v+1)/2,V=(_+S)/4,G=(y+D)/4,Z=(b+x)/4;return O>U&&O>B?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=V/s,c=G/s):U>B?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=V/l,c=Z/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=G/c,l=Z/c),this.set(s,l,c,i),this}let z=Math.sqrt((x-b)*(x-b)+(y-D)*(y-D)+(S-_)*(S-_));return Math.abs(z)<.001&&(z=1),this.x=(x-b)/z,this.y=(y-D)/z,this.z=(S-_)/z,this.w=Math.acos((p+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Rt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LM extends Ns{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new $n(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Hi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ds extends LM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class yv extends $n{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends $n{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Ni,this.minFilter=Ni,this.wrapR=As,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),hc.subVectors(this.max,Po),dr.subVectors(e.a,Po),pr.subVectors(e.b,Po),mr.subVectors(e.c,Po),Ha.subVectors(pr,dr),Ga.subVectors(mr,pr),_s.subVectors(dr,mr);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_s.z,_s.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_s.z,0,-_s.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_s.y,_s.x,0];return!vh(i,dr,pr,mr,hc)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,dr,pr,mr,hc))?!1:(dc.crossVectors(Ha,Ga),i=[dc.x,dc.y,dc.z],vh(i,dr,pr,mr,hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(aa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const aa=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,fc=new Ka,dr=new J,pr=new J,mr=new J,Ha=new J,Ga=new J,_s=new J,Po=new J,hc=new J,dc=new J,vs=new J;function vh(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){vs.fromArray(r,c);const d=l.x*Math.abs(vs.x)+l.y*Math.abs(vs.y)+l.z*Math.abs(vs.z),g=e.dot(vs),p=i.dot(vs),_=s.dot(vs);if(Math.max(-Math.max(g,p,_),Math.min(g,p,_))>d)return!1}return!0}const PM=new Ka,zo=new J,xh=new J;class $o{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):PM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(zo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(xh)),this.expandByPoint(zo.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new J,yh=new J,pc=new J,Va=new J,Sh=new J,mc=new J,Mh=new J;class el{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){yh.copy(e).add(i).multiplyScalar(.5),pc.copy(i).sub(e).normalize(),Va.copy(this.origin).sub(yh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(pc),d=Va.dot(this.direction),g=-Va.dot(pc),p=Va.lengthSq(),_=Math.abs(1-h*h);let y,S,E,b;if(_>0)if(y=h*g-d,S=h*d-g,b=c*_,y>=0)if(S>=-b)if(S<=b){const D=1/_;y*=D,S*=D,E=y*(y+h*S+2*d)+S*(h*y+S+2*g)+p}else S=c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*g)+p;else S=-c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*g)+p;else S<=-b?(y=Math.max(0,-(-h*c+d)),S=y>0?-c:Math.min(Math.max(-c,-g),c),E=-y*y+S*(S+2*g)+p):S<=b?(y=0,S=Math.min(Math.max(-c,-g),c),E=S*(S+2*g)+p):(y=Math.max(0,-(h*c+d)),S=y>0?c:Math.min(Math.max(-c,-g),c),E=-y*y+S*(S+2*g)+p);else S=h>0?-c:c,y=Math.max(0,-(h*S+d)),E=-y*y+S*(S+2*g)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(yh).addScaledVector(pc,S),E}intersectSphere(e,i){sa.subVectors(e.center,this.origin);const s=sa.dot(this.direction),l=sa.dot(sa)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,g=s+h;return g<0?null:d<0?this.at(g,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,g;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),_>=0?(c=(e.min.y-S.y)*_,h=(e.max.y-S.y)*_):(c=(e.max.y-S.y)*_,h=(e.min.y-S.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),y>=0?(d=(e.min.z-S.z)*y,g=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,g=(e.min.z-S.z)*y),s>g||d>l)||((d>s||s!==s)&&(s=d),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,i,s,l,c){Sh.subVectors(i,e),mc.subVectors(s,e),Mh.crossVectors(Sh,mc);let h=this.direction.dot(Mh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Va.subVectors(this.origin,e);const g=d*this.direction.dot(mc.crossVectors(Va,mc));if(g<0)return null;const p=d*this.direction.dot(Sh.cross(Va));if(p<0||g+p>h)return null;const _=-d*Va.dot(Mh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,i,s,l,c,h,d,g,p,_,y,S,E,b,D,x){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,g,p,_,y,S,E,b,D,x)}set(e,i,s,l,c,h,d,g,p,_,y,S,E,b,D,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=g,v[2]=p,v[6]=_,v[10]=y,v[14]=S,v[3]=E,v[7]=b,v[11]=D,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/gr.setFromMatrixColumn(e,0).length(),c=1/gr.setFromMatrixColumn(e,1).length(),h=1/gr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),p=Math.sin(l),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const S=h*_,E=h*y,b=d*_,D=d*y;i[0]=g*_,i[4]=-g*y,i[8]=p,i[1]=E+b*p,i[5]=S-D*p,i[9]=-d*g,i[2]=D-S*p,i[6]=b+E*p,i[10]=h*g}else if(e.order==="YXZ"){const S=g*_,E=g*y,b=p*_,D=p*y;i[0]=S+D*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*y,i[5]=h*_,i[9]=-d,i[2]=E*d-b,i[6]=D+S*d,i[10]=h*g}else if(e.order==="ZXY"){const S=g*_,E=g*y,b=p*_,D=p*y;i[0]=S-D*d,i[4]=-h*y,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*_,i[9]=D-S*d,i[2]=-h*p,i[6]=d,i[10]=h*g}else if(e.order==="ZYX"){const S=h*_,E=h*y,b=d*_,D=d*y;i[0]=g*_,i[4]=b*p-E,i[8]=S*p+D,i[1]=g*y,i[5]=D*p+S,i[9]=E*p-b,i[2]=-p,i[6]=d*g,i[10]=h*g}else if(e.order==="YZX"){const S=h*g,E=h*p,b=d*g,D=d*p;i[0]=g*_,i[4]=D-S*y,i[8]=b*y+E,i[1]=y,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=E*y+b,i[10]=S-D*y}else if(e.order==="XZY"){const S=h*g,E=h*p,b=d*g,D=d*p;i[0]=g*_,i[4]=-y,i[8]=p*_,i[1]=S*y+D,i[5]=h*_,i[9]=E*y-b,i[2]=b*y-E,i[6]=d*_,i[10]=D*y+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,IM)}lookAt(e,i,s){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ja.crossVectors(s,oi),ja.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ja.crossVectors(s,oi)),ja.normalize(),gc.crossVectors(oi,ja),l[0]=ja.x,l[4]=gc.x,l[8]=oi.x,l[1]=ja.y,l[5]=gc.y,l[9]=oi.y,l[2]=ja.z,l[6]=gc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],g=s[8],p=s[12],_=s[1],y=s[5],S=s[9],E=s[13],b=s[2],D=s[6],x=s[10],v=s[14],z=s[3],O=s[7],U=s[11],B=s[15],V=l[0],G=l[4],Z=l[8],A=l[12],w=l[1],H=l[5],te=l[9],ne=l[13],oe=l[2],$=l[6],I=l[10],q=l[14],X=l[3],ge=l[7],L=l[11],Y=l[15];return c[0]=h*V+d*w+g*oe+p*X,c[4]=h*G+d*H+g*$+p*ge,c[8]=h*Z+d*te+g*I+p*L,c[12]=h*A+d*ne+g*q+p*Y,c[1]=_*V+y*w+S*oe+E*X,c[5]=_*G+y*H+S*$+E*ge,c[9]=_*Z+y*te+S*I+E*L,c[13]=_*A+y*ne+S*q+E*Y,c[2]=b*V+D*w+x*oe+v*X,c[6]=b*G+D*H+x*$+v*ge,c[10]=b*Z+D*te+x*I+v*L,c[14]=b*A+D*ne+x*q+v*Y,c[3]=z*V+O*w+U*oe+B*X,c[7]=z*G+O*H+U*$+B*ge,c[11]=z*Z+O*te+U*I+B*L,c[15]=z*A+O*ne+U*q+B*Y,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],g=e[9],p=e[13],_=e[2],y=e[6],S=e[10],E=e[14],b=e[3],D=e[7],x=e[11],v=e[15];return b*(+c*g*y-l*p*y-c*d*S+s*p*S+l*d*E-s*g*E)+D*(+i*g*E-i*p*S+c*h*S-l*h*E+l*p*_-c*g*_)+x*(+i*p*y-i*d*E-c*h*y+s*h*E+c*d*_-s*p*_)+v*(-l*d*_-i*g*y+i*d*S+l*h*y-s*h*S+s*g*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],g=e[6],p=e[7],_=e[8],y=e[9],S=e[10],E=e[11],b=e[12],D=e[13],x=e[14],v=e[15],z=y*x*p-D*S*p+D*g*E-d*x*E-y*g*v+d*S*v,O=b*S*p-_*x*p-b*g*E+h*x*E+_*g*v-h*S*v,U=_*D*p-b*y*p+b*d*E-h*D*E-_*d*v+h*y*v,B=b*y*g-_*D*g-b*d*S+h*D*S+_*d*x-h*y*x,V=i*z+s*O+l*U+c*B;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/V;return e[0]=z*G,e[1]=(D*S*c-y*x*c-D*l*E+s*x*E+y*l*v-s*S*v)*G,e[2]=(d*x*c-D*g*c+D*l*p-s*x*p-d*l*v+s*g*v)*G,e[3]=(y*g*c-d*S*c-y*l*p+s*S*p+d*l*E-s*g*E)*G,e[4]=O*G,e[5]=(_*x*c-b*S*c+b*l*E-i*x*E-_*l*v+i*S*v)*G,e[6]=(b*g*c-h*x*c-b*l*p+i*x*p+h*l*v-i*g*v)*G,e[7]=(h*S*c-_*g*c+_*l*p-i*S*p-h*l*E+i*g*E)*G,e[8]=U*G,e[9]=(b*y*c-_*D*c-b*s*E+i*D*E+_*s*v-i*y*v)*G,e[10]=(h*D*c-b*d*c+b*s*p-i*D*p-h*s*v+i*d*v)*G,e[11]=(_*d*c-h*y*c-_*s*p+i*y*p+h*s*E-i*d*E)*G,e[12]=B*G,e[13]=(_*D*l-b*y*l+b*s*S-i*D*S-_*s*x+i*y*x)*G,e[14]=(b*d*l-h*D*l-b*s*g+i*D*g+h*s*x-i*d*x)*G,e[15]=(h*y*l-_*d*l+_*s*g-i*y*g-h*s*S+i*d*S)*G,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,g=e.z,p=c*h,_=c*d;return this.set(p*h+s,p*d-l*g,p*g+l*d,0,p*d+l*g,_*d+s,_*g-l*h,0,p*g-l*d,_*g+l*h,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,g=i._w,p=c+c,_=h+h,y=d+d,S=c*p,E=c*_,b=c*y,D=h*_,x=h*y,v=d*y,z=g*p,O=g*_,U=g*y,B=s.x,V=s.y,G=s.z;return l[0]=(1-(D+v))*B,l[1]=(E+U)*B,l[2]=(b-O)*B,l[3]=0,l[4]=(E-U)*V,l[5]=(1-(S+v))*V,l[6]=(x+z)*V,l[7]=0,l[8]=(b+O)*G,l[9]=(x-z)*G,l[10]=(1-(S+D))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=gr.set(l[0],l[1],l[2]).length();const h=gr.set(l[4],l[5],l[6]).length(),d=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ri.copy(this);const p=1/c,_=1/h,y=1/d;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=_,Ri.elements[5]*=_,Ri.elements[6]*=_,Ri.elements[8]*=y,Ri.elements[9]*=y,Ri.elements[10]*=y,i.setFromRotationMatrix(Ri),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=Gi,g=!1){const p=this.elements,_=2*c/(i-e),y=2*c/(s-l),S=(i+e)/(i-e),E=(s+l)/(s-l);let b,D;if(g)b=c/(h-c),D=h*c/(h-c);else if(d===Gi)b=-(h+c)/(h-c),D=-2*h*c/(h-c);else if(d===Kc)b=-h/(h-c),D=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=y,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=Gi,g=!1){const p=this.elements,_=2/(i-e),y=2/(s-l),S=-(i+e)/(i-e),E=-(s+l)/(s-l);let b,D;if(g)b=1/(h-c),D=h/(h-c);else if(d===Gi)b=-2/(h-c),D=-(h+c)/(h-c);else if(d===Kc)b=-1/(h-c),D=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=y,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const gr=new J,Ri=new an,zM=new J(0,0,0),IM=new J(1,1,1),ja=new J,gc=new J,oi=new J,i0=new an,a0=new ws;class ma{constructor(e=0,i=0,s=0,l=ma.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],g=l[1],p=l[5],_=l[9],y=l[2],S=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(g,p)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Rt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return i0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ma.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let BM=0;const s0=new J,_r=new ws,ra=new an,_c=new J,Io=new J,FM=new J,HM=new ws,r0=new J(1,0,0),o0=new J(0,1,0),l0=new J(0,0,1),c0={type:"added"},GM={type:"removed"},vr={type:"childadded",child:null},Eh={type:"childremoved",child:null};class jn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new J,i=new ma,s=new ws,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new an},normalMatrix:{value:new vt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(r0,e)}rotateY(e){return this.rotateOnAxis(o0,e)}rotateZ(e){return this.rotateOnAxis(l0,e)}translateOnAxis(e,i){return s0.copy(e).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(r0,e)}translateY(e){return this.translateOnAxis(o0,e)}translateZ(e){return this.translateOnAxis(l0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?_c.copy(e):_c.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Io,_c,this.up):ra.lookAt(_c,Io,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ra),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c0),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(GM),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ra.multiply(e.parent.matrixWorld)),e.applyMatrix4(ra),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c0),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,FM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,HM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,g){return d[g.uuid]===void 0&&(d[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const g=d.shapes;if(Array.isArray(g))for(let p=0,_=g.length;p<_;p++){const y=g[p];c(e.shapes,y)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let g=0,p=this.material.length;g<p;g++)d.push(c(e.materials,this.material[g]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const g=this.animations[d];l.animations.push(c(e.animations,g))}}if(i){const d=h(e.geometries),g=h(e.materials),p=h(e.textures),_=h(e.images),y=h(e.shapes),S=h(e.skeletons),E=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),g.length>0&&(s.materials=g),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),E.length>0&&(s.animations=E),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const g=[];for(const p in d){const _=d[p];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}jn.DEFAULT_UP=new J(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,oa=new J,bh=new J,la=new J,xr=new J,yr=new J,u0=new J,Th=new J,Ah=new J,Rh=new J,Ch=new un,wh=new un,Dh=new un;class wi{constructor(e=new J,i=new J,s=new J){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ci.subVectors(l,i),oa.subVectors(s,i),bh.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(oa),g=Ci.dot(bh),p=oa.dot(oa),_=oa.dot(bh),y=h*p-d*d;if(y===0)return c.set(0,0,0),null;const S=1/y,E=(p*g-d*_)*S,b=(h*_-d*g)*S;return c.set(1-E-b,b,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,s,l,c,h,d,g){return this.getBarycoord(e,i,s,l,la)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,la.x),g.addScaledVector(h,la.y),g.addScaledVector(d,la.z),g)}static getInterpolatedAttribute(e,i,s,l,c,h){return Ch.setScalar(0),wh.setScalar(0),Dh.setScalar(0),Ch.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,s),Dh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ch,c.x),h.addScaledVector(wh,c.y),h.addScaledVector(Dh,c.z),h}static isFrontFacing(e,i,s,l){return Ci.subVectors(s,i),oa.subVectors(e,i),Ci.cross(oa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ci.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;xr.subVectors(l,s),yr.subVectors(c,s),Th.subVectors(e,s);const g=xr.dot(Th),p=yr.dot(Th);if(g<=0&&p<=0)return i.copy(s);Ah.subVectors(e,l);const _=xr.dot(Ah),y=yr.dot(Ah);if(_>=0&&y<=_)return i.copy(l);const S=g*y-_*p;if(S<=0&&g>=0&&_<=0)return h=g/(g-_),i.copy(s).addScaledVector(xr,h);Rh.subVectors(e,c);const E=xr.dot(Rh),b=yr.dot(Rh);if(b>=0&&E<=b)return i.copy(c);const D=E*p-g*b;if(D<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(yr,d);const x=_*b-E*y;if(x<=0&&y-_>=0&&E-b>=0)return u0.subVectors(c,l),d=(y-_)/(y-_+(E-b)),i.copy(l).addScaledVector(u0,d);const v=1/(x+D+S);return h=D*v,d=S*v,i.copy(s).addScaledVector(xr,h).addScaledVector(yr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Nh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=Yd(e,1),i=Rt(i,0,1),s=Rt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Nh(h,c,e+1/3),this.g=Nh(h,c,e),this.b=Nh(h,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Vn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Vn){const s=Sv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return Ot.workingToColorSpace(On.copy(this),e),Math.round(Rt(On.r*255,0,255))*65536+Math.round(Rt(On.g*255,0,255))*256+Math.round(Rt(On.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(On.copy(this),i);const s=On.r,l=On.g,c=On.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let g,p;const _=(d+h)/2;if(d===h)g=0,p=0;else{const y=h-d;switch(p=_<=.5?y/(h+d):y/(2-h-d),h){case s:g=(l-c)/y+(l<c?6:0);break;case l:g=(c-s)/y+2;break;case c:g=(s-l)/y+4;break}g/=6}return e.h=g,e.s=p,e.l=_,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Vn){Ot.workingToColorSpace(On.copy(this),e);const i=On.r,s=On.g,l=On.b;return e!==Vn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ka),this.setHSL(ka.h+e,ka.s+i,ka.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ka),e.getHSL(vc);const s=Xo(ka.h,vc.h,i),l=Xo(ka.s,vc.s,i),c=Xo(ka.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Pt;Pt.NAMES=Sv;let VM=0;class Br extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=Dr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=Zh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yh&&(s.blendSrc=this.blendSrc),this.blendDst!==Zh&&(s.blendDst=this.blendDst),this.blendEquation!==bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Z_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const g=c[d];delete g.metadata,h.push(g)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jc extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ma,this.combine=ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new J,xc=new Mt;let jM=0;class Si{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=K_,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(e),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Tr(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Tr(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Tr(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Tr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Tr(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),e}}class Mv extends Si{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ev extends Si{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class kn extends Si{constructor(e,i,s){super(new Float32Array(e),i,s)}}let kM=0;const vi=new an,Uh=new jn,Sr=new J,li=new Ka,Bo=new Ka,bn=new J;class ui extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Ev:Mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new vt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,s){return vi.makeTranslation(e,i,s),this.applyMatrix4(vi),this}scale(e,i,s){return vi.makeScale(e,i,s),this.applyMatrix4(vi),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new kn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];li.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(li.min,Bo.min),li.expandByPoint(bn),bn.addVectors(li.max,Bo.max),li.expandByPoint(bn)):(li.expandByPoint(Bo.min),li.expandByPoint(Bo.max))}li.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],g=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)bn.fromBufferAttribute(d,p),g&&(Sr.fromBufferAttribute(e,p),bn.add(Sr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],g=[];for(let Z=0;Z<s.count;Z++)d[Z]=new J,g[Z]=new J;const p=new J,_=new J,y=new J,S=new Mt,E=new Mt,b=new Mt,D=new J,x=new J;function v(Z,A,w){p.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,A),y.fromBufferAttribute(s,w),S.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,A),b.fromBufferAttribute(c,w),_.sub(p),y.sub(p),E.sub(S),b.sub(S);const H=1/(E.x*b.y-b.x*E.y);isFinite(H)&&(D.copy(_).multiplyScalar(b.y).addScaledVector(y,-E.y).multiplyScalar(H),x.copy(y).multiplyScalar(E.x).addScaledVector(_,-b.x).multiplyScalar(H),d[Z].add(D),d[A].add(D),d[w].add(D),g[Z].add(x),g[A].add(x),g[w].add(x))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,A=z.length;Z<A;++Z){const w=z[Z],H=w.start,te=w.count;for(let ne=H,oe=H+te;ne<oe;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const O=new J,U=new J,B=new J,V=new J;function G(Z){B.fromBufferAttribute(l,Z),V.copy(B);const A=d[Z];O.copy(A),O.sub(B.multiplyScalar(B.dot(A))).normalize(),U.crossVectors(V,A);const H=U.dot(g[Z])<0?-1:1;h.setXYZW(Z,O.x,O.y,O.z,H)}for(let Z=0,A=z.length;Z<A;++Z){const w=z[Z],H=w.start,te=w.count;for(let ne=H,oe=H+te;ne<oe;ne+=3)G(e.getX(ne+0)),G(e.getX(ne+1)),G(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,E=s.count;S<E;S++)s.setXYZ(S,0,0,0);const l=new J,c=new J,h=new J,d=new J,g=new J,p=new J,_=new J,y=new J;if(e)for(let S=0,E=e.count;S<E;S+=3){const b=e.getX(S+0),D=e.getX(S+1),x=e.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,x),_.subVectors(h,c),y.subVectors(l,c),_.cross(y),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,D),p.fromBufferAttribute(s,x),d.add(_),g.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(D,g.x,g.y,g.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,E=i.count;S<E;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),_.subVectors(h,c),y.subVectors(l,c),_.cross(y),s.setXYZ(S+0,_.x,_.y,_.z),s.setXYZ(S+1,_.x,_.y,_.z),s.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,g){const p=d.array,_=d.itemSize,y=d.normalized,S=new p.constructor(g.length*_);let E=0,b=0;for(let D=0,x=g.length;D<x;D++){d.isInterleavedBufferAttribute?E=g[D]*d.data.stride+d.offset:E=g[D]*_;for(let v=0;v<_;v++)S[b++]=p[E++]}return new Si(S,_,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ui,s=this.index.array,l=this.attributes;for(const d in l){const g=l[d],p=e(g,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const g=[],p=c[d];for(let _=0,y=p.length;_<y;_++){const S=p[_],E=e(S,s);g.push(E)}i.morphAttributes[d]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,g=h.length;d<g;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const p in g)g[p]!==void 0&&(e[p]=g[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const p=s[g];e.data.attributes[g]=p.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const p=this.morphAttributes[g],_=[];for(let y=0,S=p.length;y<S;y++){const E=p[y];_.push(E.toJSON(e.data))}_.length>0&&(l[g]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],y=c[p];for(let S=0,E=y.length;S<E;S++)_.push(y[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const y=h[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f0=new an,xs=new el,yc=new $o,h0=new J,Sc=new J,Mc=new J,Ec=new J,Lh=new J,bc=new J,d0=new J,Tc=new J;class yi extends jn{constructor(e=new ui,i=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){bc.set(0,0,0);for(let g=0,p=c.length;g<p;g++){const _=d[g],y=c[g];_!==0&&(Lh.fromBufferAttribute(y,e),h?bc.addScaledVector(Lh,_):bc.addScaledVector(Lh.sub(i),_))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),xs.copy(e.ray).recast(e.near),!(yc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(yc,h0)===null||xs.origin.distanceToSquared(h0)>(e.far-e.near)**2))&&(f0.copy(c).invert(),xs.copy(e.ray).applyMatrix4(f0),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,xs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,g=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,S=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,D=S.length;b<D;b++){const x=S[b],v=h[x.materialIndex],z=Math.max(x.start,E.start),O=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let U=z,B=O;U<B;U+=3){const V=d.getX(U),G=d.getX(U+1),Z=d.getX(U+2);l=Ac(this,v,e,s,p,_,y,V,G,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),D=Math.min(d.count,E.start+E.count);for(let x=b,v=D;x<v;x+=3){const z=d.getX(x),O=d.getX(x+1),U=d.getX(x+2);l=Ac(this,h,e,s,p,_,y,z,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let b=0,D=S.length;b<D;b++){const x=S[b],v=h[x.materialIndex],z=Math.max(x.start,E.start),O=Math.min(g.count,Math.min(x.start+x.count,E.start+E.count));for(let U=z,B=O;U<B;U+=3){const V=U,G=U+1,Z=U+2;l=Ac(this,v,e,s,p,_,y,V,G,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),D=Math.min(g.count,E.start+E.count);for(let x=b,v=D;x<v;x+=3){const z=x,O=x+1,U=x+2;l=Ac(this,h,e,s,p,_,y,z,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function XM(r,e,i,s,l,c,h,d){let g;if(e.side===Jn?g=s.intersectTriangle(h,c,l,!0,d):g=s.intersectTriangle(l,c,h,e.side===Qa,d),g===null)return null;Tc.copy(d),Tc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:r}}function Ac(r,e,i,s,l,c,h,d,g,p){r.getVertexPosition(d,Sc),r.getVertexPosition(g,Mc),r.getVertexPosition(p,Ec);const _=XM(r,e,i,s,Sc,Mc,Ec,d0);if(_){const y=new J;wi.getBarycoord(d0,Sc,Mc,Ec,y),l&&(_.uv=wi.getInterpolatedAttribute(l,d,g,p,y,new Mt)),c&&(_.uv1=wi.getInterpolatedAttribute(c,d,g,p,y,new Mt)),h&&(_.normal=wi.getInterpolatedAttribute(h,d,g,p,y,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:g,c:p,normal:new J,materialIndex:0};wi.getNormal(Sc,Mc,Ec,S.normal),_.face=S,_.barycoord=y}return _}class tl extends ui{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const g=[],p=[],_=[],y=[];let S=0,E=0;b("z","y","x",-1,-1,s,i,e,h,c,0),b("z","y","x",1,-1,s,i,-e,h,c,1),b("x","z","y",1,1,e,s,i,l,h,2),b("x","z","y",1,-1,e,s,-i,l,h,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new kn(p,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(y,2));function b(D,x,v,z,O,U,B,V,G,Z,A){const w=U/G,H=B/Z,te=U/2,ne=B/2,oe=V/2,$=G+1,I=Z+1;let q=0,X=0;const ge=new J;for(let L=0;L<I;L++){const Y=L*H-ne;for(let ue=0;ue<$;ue++){const ve=ue*w-te;ge[D]=ve*z,ge[x]=Y*O,ge[v]=oe,p.push(ge.x,ge.y,ge.z),ge[D]=0,ge[x]=0,ge[v]=V>0?1:-1,_.push(ge.x,ge.y,ge.z),y.push(ue/G),y.push(1-L/Z),q+=1}}for(let L=0;L<Z;L++)for(let Y=0;Y<G;Y++){const ue=S+Y+$*L,ve=S+Y+$*(L+1),pe=S+(Y+1)+$*(L+1),Fe=S+(Y+1)+$*L;g.push(ue,ve,Fe),g.push(ve,pe,Fe),X+=6}d.addGroup(E,X,A),E+=X,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)e[l]=s[l]}return e}function WM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function bv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const qM={clone:zr,merge:Gn};var YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ja extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=WM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new J,p0=new Mt,m0=new Mt;class ci extends Tv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-e/Xa.z)}getViewSize(e,i){return this.getViewBounds(e,p0,m0),i.subVectors(m0,p0)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ko*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/g,i-=h.offsetY*s/p,l*=h.width/g,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,Er=1;class KM extends jn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ci(Mr,Er,e,i);l.layers=this.layers,this.add(l);const c=new ci(Mr,Er,e,i);c.layers=this.layers,this.add(c);const h=new ci(Mr,Er,e,i);h.layers=this.layers,this.add(h);const d=new ci(Mr,Er,e,i);d.layers=this.layers,this.add(d);const g=new ci(Mr,Er,e,i);g.layers=this.layers,this.add(g);const p=new ci(Mr,Er,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,g]=i;for(const p of i)this.remove(p);if(e===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,g,p,_]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const D=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,g),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=D,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(y,S,E),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Av extends $n{constructor(e=[],i=Lr,s,l,c,h,d,g,p,_){super(e,i,s,l,c,h,d,g,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QM extends Ds{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new tl(5,5,5),c=new Ja({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ya});c.uniforms.tEquirect.value=i;const h=new yi(l,c),d=i.minFilter;return i.minFilter===Rs&&(i.minFilter=Hi),new KM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Rr extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,g=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const D of e.hand.values()){const x=i.getJointPose(D,s),v=this._getHandJoint(p,D);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=_.position.distanceTo(y.position),E=.02,b=.005;p.inputState.pinching&&S>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return d!==null&&(d.visible=l!==null),g!==null&&(g.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Rr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class $M extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ma,this.environmentIntensity=1,this.environmentRotation=new ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ph=new J,eE=new J,tE=new vt;class Wa{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Ph.subVectors(s,i).cross(eE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Ph),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||tE.getNormalMatrix(e),l=this.coplanarPoint(Ph).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new $o,nE=new Mt(.5,.5),Rc=new J;class Rv{constructor(e=new Wa,i=new Wa,s=new Wa,l=new Wa,c=new Wa,h=new Wa){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Gi,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],g=c[2],p=c[3],_=c[4],y=c[5],S=c[6],E=c[7],b=c[8],D=c[9],x=c[10],v=c[11],z=c[12],O=c[13],U=c[14],B=c[15];if(l[0].setComponents(p-h,E-_,v-b,B-z).normalize(),l[1].setComponents(p+h,E+_,v+b,B+z).normalize(),l[2].setComponents(p+d,E+y,v+D,B+O).normalize(),l[3].setComponents(p-d,E-y,v-D,B-O).normalize(),s)l[4].setComponents(g,S,x,U).normalize(),l[5].setComponents(p-g,E-S,v-x,B-U).normalize();else if(l[4].setComponents(p-g,E-S,v-x,B-U).normalize(),i===Gi)l[5].setComponents(p+g,E+S,v+x,B+U).normalize();else if(i===Kc)l[5].setComponents(g,S,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const i=nE.distanceTo(e.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $c=new J,eu=new J,g0=new an,Fo=new el,Cc=new $o,zh=new J,_0=new J;class Cv extends jn{constructor(e=new ui,i=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)$c.fromBufferAttribute(i,l-1),eu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=$c.distanceTo(eu);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;g0.copy(l).invert(),Fo.copy(e.ray).applyMatrix4(g0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=this.isLineSegments?2:1,_=s.index,S=s.attributes.position;if(_!==null){const E=Math.max(0,h.start),b=Math.min(_.count,h.start+h.count);for(let D=E,x=b-1;D<x;D+=p){const v=_.getX(D),z=_.getX(D+1),O=wc(this,e,Fo,g,v,z,D);O&&i.push(O)}if(this.isLineLoop){const D=_.getX(b-1),x=_.getX(E),v=wc(this,e,Fo,g,D,x,b-1);v&&i.push(v)}}else{const E=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let D=E,x=b-1;D<x;D+=p){const v=wc(this,e,Fo,g,D,D+1,D);v&&i.push(v)}if(this.isLineLoop){const D=wc(this,e,Fo,g,b-1,E,b-1);D&&i.push(D)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function wc(r,e,i,s,l,c,h){const d=r.geometry.attributes.position;if($c.fromBufferAttribute(d,l),eu.fromBufferAttribute(d,c),i.distanceSqToSegment($c,eu,zh,_0)>s)return;zh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(zh);if(!(p<e.near||p>e.far))return{distance:p,point:_0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const v0=new J,x0=new J;class wv extends Cv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)v0.fromBufferAttribute(i,l),x0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+v0.distanceTo(x0);e.setAttribute("lineDistance",new kn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dv extends Br{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y0=new an,Pd=new el,Dc=new $o,Nc=new J;class Nv extends jn{constructor(e=new ui,i=new Dv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,e.ray.intersectsSphere(Dc)===!1)return;y0.copy(l).invert(),Pd.copy(e.ray).applyMatrix4(y0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=d*d,p=s.index,y=s.attributes.position;if(p!==null){const S=Math.max(0,h.start),E=Math.min(p.count,h.start+h.count);for(let b=S,D=E;b<D;b++){const x=p.getX(b);Nc.fromBufferAttribute(y,x),S0(Nc,x,g,l,e,i,this)}}else{const S=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let b=S,D=E;b<D;b++)Nc.fromBufferAttribute(y,b),S0(Nc,b,g,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function S0(r,e,i,s,l,c,h){const d=Pd.distanceSqToPoint(r);if(d<i){const g=new J;Pd.closestPointToPoint(r,g),g.applyMatrix4(s);const p=l.ray.origin.distanceTo(g);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class Uv extends $n{constructor(e,i,s=Cs,l,c,h,d=Ni,g=Ni,p,_=Yo,y=1){if(_!==Yo&&_!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:y};super(S,l,c,h,d,g,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Lv extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class iu extends ui{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),g=Math.floor(l),p=d+1,_=g+1,y=e/d,S=i/g,E=[],b=[],D=[],x=[];for(let v=0;v<_;v++){const z=v*S-h;for(let O=0;O<p;O++){const U=O*y-c;b.push(U,-z,0),D.push(0,0,1),x.push(O/d),x.push(1-v/g)}}for(let v=0;v<g;v++)for(let z=0;z<d;z++){const O=z+p*v,U=z+p*(v+1),B=z+1+p*(v+1),V=z+1+p*v;E.push(O,U,V),E.push(U,B,V)}this.setIndex(E),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(D,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class tu extends ui{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const g=Math.min(h+d,Math.PI);let p=0;const _=[],y=new J,S=new J,E=[],b=[],D=[],x=[];for(let v=0;v<=s;v++){const z=[],O=v/s;let U=0;v===0&&h===0?U=.5/i:v===s&&g===Math.PI&&(U=-.5/i);for(let B=0;B<=i;B++){const V=B/i;y.x=-e*Math.cos(l+V*c)*Math.sin(h+O*d),y.y=e*Math.cos(h+O*d),y.z=e*Math.sin(l+V*c)*Math.sin(h+O*d),b.push(y.x,y.y,y.z),S.copy(y).normalize(),D.push(S.x,S.y,S.z),x.push(V+U,1-O),z.push(p++)}_.push(z)}for(let v=0;v<s;v++)for(let z=0;z<i;z++){const O=_[v][z+1],U=_[v][z],B=_[v+1][z],V=_[v+1][z+1];(v!==0||h>0)&&E.push(O,U,V),(v!==s-1||g<Math.PI)&&E.push(U,B,V)}this.setIndex(E),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(D,3)),this.setAttribute("uv",new kn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class iE extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aE extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sE extends Tv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,g=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rE extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const M0=new an;class oE{constructor(e,i,s=0,l=1/0){this.ray=new el(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new Kd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return M0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(M0),this}intersectObject(e,i=!0,s=[]){return zd(e,this,s,i),s.sort(E0),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)zd(e[l],this,s,i);return s.sort(E0),s}}function E0(r,e){return r.distance-e.distance}function zd(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)zd(c[h],e,i,!0)}}class b0{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Rt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lE extends wv{constructor(e=1){const i=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new ui;l.setAttribute("position",new kn(i,3)),l.setAttribute("color",new kn(s,3));const c=new Qd({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(e,i,s){const l=new Pt,c=this.geometry.attributes.color.array;return l.set(e),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class cE extends Ns{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function T0(r,e,i,s){const l=uE(s);switch(i){case dv:return r*e;case mv:return r*e/l.components*l.byteLength;case Xd:return r*e/l.components*l.byteLength;case gv:return r*e*2/l.components*l.byteLength;case Wd:return r*e*2/l.components*l.byteLength;case pv:return r*e*3/l.components*l.byteLength;case Di:return r*e*4/l.components*l.byteLength;case qd:return r*e*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Vc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(r,16)*Math.max(e,8)/4;case od:case cd:return Math.max(r,8)*Math.max(e,8)/2;case fd:case hd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Cd:case wd:case Dd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nd:case Ud:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ld:case Od:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function uE(r){switch(r){case pa:case cv:return{byteLength:1,components:1};case Wo:case uv:case Jo:return{byteLength:2,components:1};case jd:case kd:return{byteLength:2,components:4};case Cs:case Vd:case ha:return{byteLength:4,components:1};case fv:case hv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function fE(r){const e=new WeakMap;function i(d,g){const p=d.array,_=d.usage,y=p.byteLength,S=r.createBuffer();r.bindBuffer(g,S),r.bufferData(g,p,_),d.onUploadCallback();let E;if(p instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=r.SHORT;else if(p instanceof Uint32Array)E=r.UNSIGNED_INT;else if(p instanceof Int32Array)E=r.INT;else if(p instanceof Int8Array)E=r.BYTE;else if(p instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function s(d,g,p){const _=g.array,y=g.updateRanges;if(r.bindBuffer(p,d),y.length===0)r.bufferSubData(p,0,_);else{y.sort((E,b)=>E.start-b.start);let S=0;for(let E=1;E<y.length;E++){const b=y[S],D=y[E];D.start<=b.start+b.count+1?b.count=Math.max(b.count,D.start+D.count-b.start):(++S,y[S]=D)}y.length=S+1;for(let E=0,b=y.length;E<b;E++){const D=y[E];r.bufferSubData(p,D.start*_.BYTES_PER_ELEMENT,_,D.start,D.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const g=e.get(d);g&&(r.deleteBuffer(g.buffer),e.delete(d))}function h(d,g){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,g));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,g),p.version=d.version}}return{get:l,remove:c,update:h}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dE=`#ifdef USE_ALPHAHASH
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
#endif`,pE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_E=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vE=`#ifdef USE_AOMAP
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
#endif`,xE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yE=`#ifdef USE_BATCHING
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
#endif`,SE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ME=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TE=`#ifdef USE_IRIDESCENCE
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
#endif`,AE=`#ifdef USE_BUMPMAP
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
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PE=`#define PI 3.141592653589793
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
} // validated`,zE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IE=`vec3 transformedNormal = objectNormal;
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
#endif`,BE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VE="gl_FragColor = linearToOutputTexel( gl_FragColor );",jE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kE=`#ifdef USE_ENVMAP
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
#endif`,XE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$E=`#ifdef USE_GRADIENTMAP
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
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ib=`uniform bool receiveShadow;
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
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cb=`PhysicalMaterial material;
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
#endif`,ub=`struct PhysicalMaterial {
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
}`,fb=`
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sb=`#if defined( USE_POINTS_UV )
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
#endif`,Mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ob=`#ifdef USE_NORMALMAP
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
#endif`,Pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,$b=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,x1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,N1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,L1=`#define PHONG
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
}`,O1=`#define PHONG
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
}`,P1=`#define STANDARD
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
}`,z1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,B1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 color;
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
}`,j1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:hE,alphahash_pars_fragment:dE,alphamap_fragment:pE,alphamap_pars_fragment:mE,alphatest_fragment:gE,alphatest_pars_fragment:_E,aomap_fragment:vE,aomap_pars_fragment:xE,batching_pars_vertex:yE,batching_vertex:SE,begin_vertex:ME,beginnormal_vertex:EE,bsdfs:bE,iridescence_fragment:TE,bumpmap_pars_fragment:AE,clipping_planes_fragment:RE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:wE,clipping_planes_vertex:DE,color_fragment:NE,color_pars_fragment:UE,color_pars_vertex:LE,color_vertex:OE,common:PE,cube_uv_reflection_fragment:zE,defaultnormal_vertex:IE,displacementmap_pars_vertex:BE,displacementmap_vertex:FE,emissivemap_fragment:HE,emissivemap_pars_fragment:GE,colorspace_fragment:VE,colorspace_pars_fragment:jE,envmap_fragment:kE,envmap_common_pars_fragment:XE,envmap_pars_fragment:WE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:ab,envmap_vertex:YE,fog_vertex:ZE,fog_pars_vertex:KE,fog_fragment:QE,fog_pars_fragment:JE,gradientmap_pars_fragment:$E,lightmap_pars_fragment:eb,lights_lambert_fragment:tb,lights_lambert_pars_fragment:nb,lights_pars_begin:ib,lights_toon_fragment:sb,lights_toon_pars_fragment:rb,lights_phong_fragment:ob,lights_phong_pars_fragment:lb,lights_physical_fragment:cb,lights_physical_pars_fragment:ub,lights_fragment_begin:fb,lights_fragment_maps:hb,lights_fragment_end:db,logdepthbuf_fragment:pb,logdepthbuf_pars_fragment:mb,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:_b,map_fragment:vb,map_pars_fragment:xb,map_particle_fragment:yb,map_particle_pars_fragment:Sb,metalnessmap_fragment:Mb,metalnessmap_pars_fragment:Eb,morphinstance_vertex:bb,morphcolor_vertex:Tb,morphnormal_vertex:Ab,morphtarget_pars_vertex:Rb,morphtarget_vertex:Cb,normal_fragment_begin:wb,normal_fragment_maps:Db,normal_pars_fragment:Nb,normal_pars_vertex:Ub,normal_vertex:Lb,normalmap_pars_fragment:Ob,clearcoat_normal_fragment_begin:Pb,clearcoat_normal_fragment_maps:zb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Bb,opaque_fragment:Fb,packing:Hb,premultiplied_alpha_fragment:Gb,project_vertex:Vb,dithering_fragment:jb,dithering_pars_fragment:kb,roughnessmap_fragment:Xb,roughnessmap_pars_fragment:Wb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Yb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Kb,skinbase_vertex:Qb,skinning_pars_vertex:Jb,skinning_vertex:$b,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:a1,transmission_fragment:s1,transmission_pars_fragment:r1,uv_pars_fragment:o1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:f1,background_frag:h1,backgroundCube_vert:d1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:_1,depth_frag:v1,distanceRGBA_vert:x1,distanceRGBA_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:E1,linedashed_frag:b1,meshbasic_vert:T1,meshbasic_frag:A1,meshlambert_vert:R1,meshlambert_frag:C1,meshmatcap_vert:w1,meshmatcap_frag:D1,meshnormal_vert:N1,meshnormal_frag:U1,meshphong_vert:L1,meshphong_frag:O1,meshphysical_vert:P1,meshphysical_frag:z1,meshtoon_vert:I1,meshtoon_frag:B1,points_vert:F1,points_frag:H1,shadow_vert:G1,shadow_frag:V1,sprite_vert:j1,sprite_frag:k1},Ve={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Fi={basic:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Gn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Gn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Gn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Gn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Gn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Gn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Gn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Gn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Gn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Gn([Ve.common,Ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Gn([Ve.lights,Ve.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Fi.physical={uniforms:Gn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Uc={r:0,b:0,g:0},Ss=new ma,X1=new an;function W1(r,e,i,s,l,c,h){const d=new Pt(0);let g=c===!0?0:1,p,_,y=null,S=0,E=null;function b(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function D(O){let U=!1;const B=b(O);B===null?v(d,g):B&&B.isColor&&(v(B,1),U=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(O,U){const B=b(U);B&&(B.isCubeTexture||B.mapping===nu)?(_===void 0&&(_=new yi(new tl(1,1,1),new Ja({name:"BackgroundCubeMaterial",uniforms:zr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(V,G,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ss.copy(U.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Ss)),_.material.toneMapped=Ot.getTransfer(B.colorSpace)!==Xt,(y!==B||S!==B.version||E!==r.toneMapping)&&(_.material.needsUpdate=!0,y=B,S=B.version,E=r.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new yi(new iu(2,2),new Ja({name:"BackgroundMaterial",uniforms:zr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(B.colorSpace)!==Xt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(y!==B||S!==B.version||E!==r.toneMapping)&&(p.material.needsUpdate=!0,y=B,S=B.version,E=r.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,U){O.getRGB(Uc,bv(r)),s.buffers.color.setClear(Uc.r,Uc.g,Uc.b,U,h)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),g=U,v(d,g)},getClearAlpha:function(){return g},setClearAlpha:function(O){g=O,v(d,g)},render:D,addToRenderList:x,dispose:z}}function q1(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,H,te,ne,oe){let $=!1;const I=y(ne,te,H);c!==I&&(c=I,p(c.object)),$=E(w,ne,te,oe),$&&b(w,ne,te,oe),oe!==null&&e.update(oe,r.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,U(w,H,te,ne),oe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function g(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function _(w){return r.deleteVertexArray(w)}function y(w,H,te){const ne=te.wireframe===!0;let oe=s[w.id];oe===void 0&&(oe={},s[w.id]=oe);let $=oe[H.id];$===void 0&&($={},oe[H.id]=$);let I=$[ne];return I===void 0&&(I=S(g()),$[ne]=I),I}function S(w){const H=[],te=[],ne=[];for(let oe=0;oe<i;oe++)H[oe]=0,te[oe]=0,ne[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:ne,object:w,attributes:{},index:null}}function E(w,H,te,ne){const oe=c.attributes,$=H.attributes;let I=0;const q=te.getAttributes();for(const X in q)if(q[X].location>=0){const L=oe[X];let Y=$[X];if(Y===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(Y=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(Y=w.instanceColor)),L===void 0||L.attribute!==Y||Y&&L.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==ne}function b(w,H,te,ne){const oe={},$=H.attributes;let I=0;const q=te.getAttributes();for(const X in q)if(q[X].location>=0){let L=$[X];L===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const Y={};Y.attribute=L,L&&L.data&&(Y.data=L.data),oe[X]=Y,I++}c.attributes=oe,c.attributesNum=I,c.index=ne}function D(){const w=c.newAttributes;for(let H=0,te=w.length;H<te;H++)w[H]=0}function x(w){v(w,0)}function v(w,H){const te=c.newAttributes,ne=c.enabledAttributes,oe=c.attributeDivisors;te[w]=1,ne[w]===0&&(r.enableVertexAttribArray(w),ne[w]=1),oe[w]!==H&&(r.vertexAttribDivisor(w,H),oe[w]=H)}function z(){const w=c.newAttributes,H=c.enabledAttributes;for(let te=0,ne=H.length;te<ne;te++)H[te]!==w[te]&&(r.disableVertexAttribArray(te),H[te]=0)}function O(w,H,te,ne,oe,$,I){I===!0?r.vertexAttribIPointer(w,H,te,oe,$):r.vertexAttribPointer(w,H,te,ne,oe,$)}function U(w,H,te,ne){D();const oe=ne.attributes,$=te.getAttributes(),I=H.defaultAttributeValues;for(const q in $){const X=$[q];if(X.location>=0){let ge=oe[q];if(ge===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ge!==void 0){const L=ge.normalized,Y=ge.itemSize,ue=e.get(ge);if(ue===void 0)continue;const ve=ue.buffer,pe=ue.type,Fe=ue.bytesPerElement,ie=pe===r.INT||pe===r.UNSIGNED_INT||ge.gpuType===Vd;if(ge.isInterleavedBufferAttribute){const xe=ge.data,Re=xe.stride,Xe=ge.offset;if(xe.isInstancedInterleavedBuffer){for(let qe=0;qe<X.locationSize;qe++)v(X.location+qe,xe.meshPerAttribute);w.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let qe=0;qe<X.locationSize;qe++)x(X.location+qe);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let qe=0;qe<X.locationSize;qe++)O(X.location+qe,Y/X.locationSize,pe,L,Re*Fe,(Xe+Y/X.locationSize*qe)*Fe,ie)}else{if(ge.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)v(X.location+xe,ge.meshPerAttribute);w.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let xe=0;xe<X.locationSize;xe++)x(X.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let xe=0;xe<X.locationSize;xe++)O(X.location+xe,Y/X.locationSize,pe,L,Y*Fe,Y/X.locationSize*xe*Fe,ie)}}else if(I!==void 0){const L=I[q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(X.location,L);break;case 3:r.vertexAttrib3fv(X.location,L);break;case 4:r.vertexAttrib4fv(X.location,L);break;default:r.vertexAttrib1fv(X.location,L)}}}}z()}function B(){Z();for(const w in s){const H=s[w];for(const te in H){const ne=H[te];for(const oe in ne)_(ne[oe].object),delete ne[oe];delete H[te]}delete s[w]}}function V(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const te in H){const ne=H[te];for(const oe in ne)_(ne[oe].object),delete ne[oe];delete H[te]}delete s[w.id]}function G(w){for(const H in s){const te=s[H];if(te[w.id]===void 0)continue;const ne=te[w.id];for(const oe in ne)_(ne[oe].object),delete ne[oe];delete te[w.id]}}function Z(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:A,dispose:B,releaseStatesOfGeometry:V,releaseStatesOfProgram:G,initAttributes:D,enableAttribute:x,disableUnusedAttributes:z}}function Y1(r,e,i){let s;function l(p){s=p}function c(p,_){r.drawArrays(s,p,_),i.update(_,s,1)}function h(p,_,y){y!==0&&(r.drawArraysInstanced(s,p,_,y),i.update(_,s,y))}function d(p,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,y);let E=0;for(let b=0;b<y;b++)E+=_[b];i.update(E,s,1)}function g(p,_,y,S){if(y===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],_[b],S[b]);else{E.multiDrawArraysInstancedWEBGL(s,p,0,_,0,S,0,y);let b=0;for(let D=0;D<y;D++)b+=_[D]*S[D];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function Z1(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(G){return!(G!==Di&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(G){const Z=G===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==pa&&s.convert(G)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==ha&&!Z)}function g(G){if(G==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=g(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:S,maxTextures:E,maxVertexTextures:b,maxTextureSize:D,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:z,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:B,maxSamples:V}}function K1(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Wa,d=new vt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const E=y.length!==0||S||s!==0||l;return l=S,s=y.length,E},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,S){i=_(y,S,0)},this.setState=function(y,S,E){const b=y.clippingPlanes,D=y.clipIntersection,x=y.clipShadows,v=r.get(y);if(!l||b===null||b.length===0||c&&!x)c?_(null):p();else{const z=c?0:s,O=z*4;let U=v.clippingState||null;g.value=U,U=_(b,S,O,E);for(let B=0;B!==O;++B)U[B]=i[B];v.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=z}};function p(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(y,S,E,b){const D=y!==null?y.length:0;let x=null;if(D!==0){if(x=g.value,b!==!0||x===null){const v=E+D*4,z=S.matrixWorldInverse;d.getNormalMatrix(z),(x===null||x.length<v)&&(x=new Float32Array(v));for(let O=0,U=E;O!==D;++O,U+=4)h.copy(y[O]).applyMatrix4(z,d),h.normal.toArray(x,U),x[U+3]=h.constant}g.value=x,g.needsUpdate=!0}return e.numPlanes=D,e.numIntersection=0,x}}function Q1(r){let e=new WeakMap;function i(h,d){return d===id?h.mapping=Lr:d===ad&&(h.mapping=Or),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===id||d===ad)if(e.has(h)){const g=e.get(h).texture;return i(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const p=new QM(g.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const Cr=4,A0=[.125,.215,.35,.446,.526,.582],Ts=20,Ih=new sE,R0=new Pt;let Bh=null,Fh=0,Hh=0,Gh=!1;const Es=(1+Math.sqrt(5))/2,br=1/Es,C0=[new J(-Es,br,0),new J(Es,br,0),new J(-br,0,Es),new J(br,0,Es),new J(0,Es,-br),new J(0,Es,br),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],J1=new J;class w0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=J1}=c;Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,d),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Fh,Hh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Lc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Lr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hi,minFilter:Hi,generateMipmaps:!1,type:Jo,format:Di,colorSpace:Pr,depthBuffer:!1},l=D0(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D0(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$1(c)),this._blurMaterial=eT(c,e,i)}return l}_compileMaterial(e){const i=new yi(this._lodPlanes[0],e);this._renderer.compile(i,Ih)}_sceneToCubeUV(e,i,s,l,c){const g=new ci(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,E=y.toneMapping;y.getClearColor(R0),y.toneMapping=Za,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null));const D=new Jc({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),x=new yi(new tl,D);let v=!1;const z=e.background;z?z.isColor&&(D.color.copy(z),e.background=null,v=!0):(D.color.copy(R0),v=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(g.up.set(0,p[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+_[O],c.y,c.z)):U===1?(g.up.set(0,0,p[O]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+_[O],c.z)):(g.up.set(0,p[O],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+_[O]));const B=this._cubeSize;Lc(l,U*B,O>2?B:0,B,B),y.setRenderTarget(l),v&&y.render(x,g),y.render(e,g)}x.geometry.dispose(),x.material.dispose(),y.toneMapping=E,y.autoClear=S,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Lr||e.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new yi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const g=this._cubeSize;Lc(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(h,Ih)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=C0[(l-c-1)%C0.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const g=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,y=new yi(this._lodPlanes[l],p),S=p.uniforms,E=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Ts-1),D=c/b,x=isFinite(c)?1+Math.floor(_*D):Ts;x>Ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const v=[];let z=0;for(let G=0;G<Ts;++G){const Z=G/D,A=Math.exp(-Z*Z/2);v.push(A),G===0?z+=A:G<x&&(z+=2*A)}for(let G=0;G<v.length;G++)v[G]=v[G]/z;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=v,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=b,S.mipInt.value=O-s;const U=this._sizeLods[l],B=3*U*(l>O-Cr?l-O+Cr:0),V=4*(this._cubeSize-U);Lc(i,B,V,3*U,2*U),g.setRenderTarget(i),g.render(y,Ih)}}function $1(r){const e=[],i=[],s=[];let l=r;const c=r-Cr+1+A0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let g=1/d;h>r-Cr?g=A0[h-r+Cr-1]:h===0&&(g=0),s.push(g);const p=1/(d-2),_=-p,y=1+p,S=[_,_,y,_,y,y,_,_,y,y,_,y],E=6,b=6,D=3,x=2,v=1,z=new Float32Array(D*b*E),O=new Float32Array(x*b*E),U=new Float32Array(v*b*E);for(let V=0;V<E;V++){const G=V%3*2/3-1,Z=V>2?0:-1,A=[G,Z,0,G+2/3,Z,0,G+2/3,Z+1,0,G,Z,0,G+2/3,Z+1,0,G,Z+1,0];z.set(A,D*b*V),O.set(S,x*b*V);const w=[V,V,V,V,V,V];U.set(w,v*b*V)}const B=new ui;B.setAttribute("position",new Si(z,D)),B.setAttribute("uv",new Si(O,x)),B.setAttribute("faceIndex",new Si(U,v)),e.push(B),l>Cr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function D0(r,e,i){const s=new Ds(r,e,i);return s.texture.mapping=nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function eT(r,e,i){const s=new Float32Array(Ts),l=new J(0,1,0);return new Ja({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function N0(){return new Ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function U0(){return new Ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function tT(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const g=d.mapping,p=g===id||g===ad,_=g===Lr||g===Or;if(p||_){let y=e.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new w0(r)),y=p?i.fromEquirectangular(d,y):i.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const E=d.image;return p&&E&&E.height>0||_&&E&&l(E)?(i===null&&(i=new w0(r)),y=p?i.fromEquirectangular(d):i.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",c),y.texture):null}}}return d}function l(d){let g=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&g++;return g===p}function c(d){const g=d.target;g.removeEventListener("dispose",c);const p=e.get(g);p!==void 0&&(e.delete(g),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function nT(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function iT(r,e,i,s){const l={},c=new WeakMap;function h(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);S.removeEventListener("dispose",h),delete l[S.id];const E=c.get(S);E&&(e.remove(E),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(y,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function g(y){const S=y.attributes;for(const E in S)e.update(S[E],r.ARRAY_BUFFER)}function p(y){const S=[],E=y.index,b=y.attributes.position;let D=0;if(E!==null){const z=E.array;D=E.version;for(let O=0,U=z.length;O<U;O+=3){const B=z[O+0],V=z[O+1],G=z[O+2];S.push(B,V,V,G,G,B)}}else if(b!==void 0){const z=b.array;D=b.version;for(let O=0,U=z.length/3-1;O<U;O+=3){const B=O+0,V=O+1,G=O+2;S.push(B,V,V,G,G,B)}}else return;const x=new(xv(S)?Ev:Mv)(S,1);x.version=D;const v=c.get(y);v&&e.remove(v),c.set(y,x)}function _(y){const S=c.get(y);if(S){const E=y.index;E!==null&&S.version<E.version&&p(y)}else p(y);return c.get(y)}return{get:d,update:g,getWireframeAttribute:_}}function aT(r,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function g(S,E){r.drawElements(s,E,c,S*h),i.update(E,s,1)}function p(S,E,b){b!==0&&(r.drawElementsInstanced(s,E,c,S*h,b),i.update(E,s,b))}function _(S,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,S,0,b);let x=0;for(let v=0;v<b;v++)x+=E[v];i.update(x,s,1)}function y(S,E,b,D){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<S.length;v++)p(S[v]/h,E[v],D[v]);else{x.multiDrawElementsInstancedWEBGL(s,E,0,c,S,0,D,0,b);let v=0;for(let z=0;z<b;z++)v+=E[z]*D[z];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=g,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function sT(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function rT(r,e,i){const s=new WeakMap,l=new un;function c(h,d,g){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=_!==void 0?_.length:0;let S=s.get(d);if(S===void 0||S.count!==y){let w=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var E=w;S!==void 0&&S.texture.dispose();const b=d.morphAttributes.position!==void 0,D=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),D===!0&&(U=2),x===!0&&(U=3);let B=d.attributes.position.count*U,V=1;B>e.maxTextureSize&&(V=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const G=new Float32Array(B*V*4*y),Z=new yv(G,B,V,y);Z.type=ha,Z.needsUpdate=!0;const A=U*4;for(let H=0;H<y;H++){const te=v[H],ne=z[H],oe=O[H],$=B*V*4*H;for(let I=0;I<te.count;I++){const q=I*A;b===!0&&(l.fromBufferAttribute(te,I),G[$+q+0]=l.x,G[$+q+1]=l.y,G[$+q+2]=l.z,G[$+q+3]=0),D===!0&&(l.fromBufferAttribute(ne,I),G[$+q+4]=l.x,G[$+q+5]=l.y,G[$+q+6]=l.z,G[$+q+7]=0),x===!0&&(l.fromBufferAttribute(oe,I),G[$+q+8]=l.x,G[$+q+9]=l.y,G[$+q+10]=l.z,G[$+q+11]=oe.itemSize===4?l.w:1)}}S={count:y,texture:Z,size:new Mt(B,V)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let x=0;x<p.length;x++)b+=p[x];const D=d.morphTargetsRelative?1:1-b;g.getUniforms().setValue(r,"morphTargetBaseInfluence",D),g.getUniforms().setValue(r,"morphTargetInfluences",p)}g.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function oT(r,e,i,s){let l=new WeakMap;function c(g){const p=s.render.frame,_=g.geometry,y=e.get(g,_);if(l.get(y)!==p&&(e.update(y),l.set(y,p)),g.isInstancedMesh&&(g.hasEventListener("dispose",d)===!1&&g.addEventListener("dispose",d),l.get(g)!==p&&(i.update(g.instanceMatrix,r.ARRAY_BUFFER),g.instanceColor!==null&&i.update(g.instanceColor,r.ARRAY_BUFFER),l.set(g,p))),g.isSkinnedMesh){const S=g.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return y}function h(){l=new WeakMap}function d(g){const p=g.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Pv=new $n,L0=new Uv(1,1),zv=new yv,Iv=new OM,Bv=new Av,O0=[],P0=[],z0=new Float32Array(16),I0=new Float32Array(9),B0=new Float32Array(4);function Fr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=O0[l];if(c===void 0&&(c=new Float32Array(l),O0[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function au(r,e){let i=P0[e];i===void 0&&(i=new Int32Array(e),P0[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function lT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function cT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function uT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function fT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function hT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;B0.set(s),r.uniformMatrix2fv(this.addr,!1,B0),xn(i,s)}}function dT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;I0.set(s),r.uniformMatrix3fv(this.addr,!1,I0),xn(i,s)}}function pT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(vn(i,s))return;z0.set(s),r.uniformMatrix4fv(this.addr,!1,z0),xn(i,s)}}function mT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function gT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function _T(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function vT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function xT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function yT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function ST(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function MT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function ET(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(L0.compareFunction=_v,c=L0):c=Pv,i.setTexture2D(e||c,l)}function bT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Iv,l)}function TT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Bv,l)}function AT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||zv,l)}function RT(r){switch(r){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return hT;case 35675:return dT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return yT;case 36295:return ST;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function CT(r,e){r.uniform1fv(this.addr,e)}function wT(r,e){const i=Fr(e,this.size,2);r.uniform2fv(this.addr,i)}function DT(r,e){const i=Fr(e,this.size,3);r.uniform3fv(this.addr,i)}function NT(r,e){const i=Fr(e,this.size,4);r.uniform4fv(this.addr,i)}function UT(r,e){const i=Fr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function LT(r,e){const i=Fr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function OT(r,e){const i=Fr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function PT(r,e){r.uniform1iv(this.addr,e)}function zT(r,e){r.uniform2iv(this.addr,e)}function IT(r,e){r.uniform3iv(this.addr,e)}function BT(r,e){r.uniform4iv(this.addr,e)}function FT(r,e){r.uniform1uiv(this.addr,e)}function HT(r,e){r.uniform2uiv(this.addr,e)}function GT(r,e){r.uniform3uiv(this.addr,e)}function VT(r,e){r.uniform4uiv(this.addr,e)}function jT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Pv,c[h])}function kT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Iv,c[h])}function XT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Bv,c[h])}function WT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||zv,c[h])}function qT(r){switch(r){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return NT;case 35674:return UT;case 35675:return LT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return IT;case 35669:case 35673:return BT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return WT}}class YT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=RT(i.type)}}class ZT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=qT(i.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function F0(r,e){r.seq.push(e),r.map[e.id]=e}function QT(r,e,i){const s=r.name,l=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),h=Vh.lastIndex;let d=c[1];const g=c[2]==="]",p=c[3];if(g&&(d=d|0),p===void 0||p==="["&&h+2===l){F0(i,p===void 0?new YT(d,r,e):new ZT(d,r,e));break}else{let y=i.map[d];y===void 0&&(y=new KT(d),F0(i,y)),i=y}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);QT(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],g=s[d.id];g.needsUpdate!==!1&&d.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function H0(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const JT=37297;let $T=0;function eA(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const G0=new vt;function tA(r){Ot._getMatrix(G0,Ot.workingColorSpace,r);const e=`mat3( ${G0.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(r)){case Zc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function V0(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+eA(r.getShaderSource(e),d)}else return c}function nA(r,e){const i=tA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function iA(r,e){let i;switch(e){case WS:i="Linear";break;case qS:i="Reinhard";break;case YS:i="Cineon";break;case ZS:i="ACESFilmic";break;case QS:i="AgX";break;case JS:i="Neutral";break;case KS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new J;function aA(){Ot.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function rA(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function oA(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Go(r){return r!==""}function j0(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(r){return r.replace(lA,uA)}const cA=new Map;function uA(r,e){let i=St[e];if(i===void 0){const s=cA.get(e);if(s!==void 0)i=St[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Id(i)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(r){return r.replace(fA,hA)}function hA(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W0(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function dA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function pA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lr:case Or:e="ENVMAP_TYPE_CUBE";break;case nu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function gA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ov:e="ENVMAP_BLENDING_MULTIPLY";break;case kS:e="ENVMAP_BLENDING_MIX";break;case XS:e="ENVMAP_BLENDING_ADD";break}return e}function _A(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vA(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const g=dA(i),p=pA(i),_=mA(i),y=gA(i),S=_A(i),E=sA(i),b=rA(c),D=l.createProgram();let x,v,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Go).join(`
`),v.length>0&&(v+=`
`)):(x=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),v=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?St.tonemapping_pars_fragment:"",i.toneMapping!==Za?iA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,nA("linearToOutputTexel",i.outputColorSpace),aA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),h=Id(h),h=j0(h,i),h=k0(h,i),d=Id(d),d=j0(d,i),d=k0(d,i),h=X0(h),d=X0(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=z+x+h,U=z+v+d,B=H0(l,l.VERTEX_SHADER,O),V=H0(l,l.FRAGMENT_SHADER,U);l.attachShader(D,B),l.attachShader(D,V),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function G(H){if(r.debug.checkShaderErrors){const te=l.getProgramInfoLog(D)||"",ne=l.getShaderInfoLog(B)||"",oe=l.getShaderInfoLog(V)||"",$=te.trim(),I=ne.trim(),q=oe.trim();let X=!0,ge=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,D,B,V);else{const L=V0(l,B,"vertex"),Y=V0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+L+`
`+Y)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||q==="")&&(ge=!1);ge&&(H.diagnostics={runnable:X,programLog:$,vertexShader:{log:I,prefix:x},fragmentShader:{log:q,prefix:v}})}l.deleteShader(B),l.deleteShader(V),Z=new kc(l,D),A=oA(l,D)}let Z;this.getUniforms=function(){return Z===void 0&&G(this),Z};let A;this.getAttributes=function(){return A===void 0&&G(this),A};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(D,JT)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=$T++,this.cacheKey=e,this.usedTimes=1,this.program=D,this.vertexShader=B,this.fragmentShader=V,this}let xA=0;class yA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new SA(e),i.set(e,s)),s}}class SA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function MA(r,e,i,s,l,c,h){const d=new Kd,g=new yA,p=new Set,_=[],y=l.logarithmicDepthBuffer,S=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(A){return p.add(A),A===0?"uv":`uv${A}`}function x(A,w,H,te,ne){const oe=te.fog,$=ne.geometry,I=A.isMeshStandardMaterial?te.environment:null,q=(A.isMeshStandardMaterial?i:e).get(A.envMap||I),X=q&&q.mapping===nu?q.image.height:null,ge=b[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Y=L!==void 0?L.length:0;let ue=0;$.morphAttributes.position!==void 0&&(ue=1),$.morphAttributes.normal!==void 0&&(ue=2),$.morphAttributes.color!==void 0&&(ue=3);let ve,pe,Fe,ie;if(ge){const ye=Fi[ge];ve=ye.vertexShader,pe=ye.fragmentShader}else ve=A.vertexShader,pe=A.fragmentShader,g.update(A),Fe=g.getVertexShaderID(A),ie=g.getFragmentShaderID(A);const xe=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Xe=ne.isInstancedMesh===!0,qe=ne.isBatchedMesh===!0,ot=!!A.map,We=!!A.matcap,T=!!q,Ce=!!A.aoMap,Le=!!A.lightMap,Ye=!!A.bumpMap,He=!!A.normalMap,zt=!!A.displacementMap,Qe=!!A.emissiveMap,ht=!!A.metalnessMap,Ht=!!A.roughnessMap,Zt=A.anisotropy>0,P=A.clearcoat>0,R=A.dispersion>0,se=A.iridescence>0,me=A.sheen>0,Me=A.transmission>0,fe=Zt&&!!A.anisotropyMap,je=P&&!!A.clearcoatMap,Oe=P&&!!A.clearcoatNormalMap,Je=P&&!!A.clearcoatRoughnessMap,Ie=se&&!!A.iridescenceMap,Ae=se&&!!A.iridescenceThicknessMap,Pe=me&&!!A.sheenColorMap,tt=me&&!!A.sheenRoughnessMap,$e=!!A.specularMap,ze=!!A.specularColorMap,dt=!!A.specularIntensityMap,W=Me&&!!A.transmissionMap,De=Me&&!!A.thicknessMap,Ne=!!A.gradientMap,ke=!!A.alphaMap,we=A.alphaTest>0,Ee=!!A.alphaHash,Ke=!!A.extensions;let ut=Za;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ut=r.toneMapping);const j={shaderID:ge,shaderType:A.type,shaderName:A.name,vertexShader:ve,fragmentShader:pe,defines:A.defines,customVertexShaderID:Fe,customFragmentShaderID:ie,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:qe,batchingColor:qe&&ne._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ne.instanceColor!==null,instancingMorph:Xe&&ne.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Pr,alphaToCoverage:!!A.alphaToCoverage,map:ot,matcap:We,envMap:T,envMapMode:T&&q.mapping,envMapCubeUVHeight:X,aoMap:Ce,lightMap:Le,bumpMap:Ye,normalMap:He,displacementMap:S&&zt,emissiveMap:Qe,normalMapObjectSpace:He&&A.normalMapType===iM,normalMapTangentSpace:He&&A.normalMapType===nM,metalnessMap:ht,roughnessMap:Ht,anisotropy:Zt,anisotropyMap:fe,clearcoat:P,clearcoatMap:je,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Je,dispersion:R,iridescence:se,iridescenceMap:Ie,iridescenceThicknessMap:Ae,sheen:me,sheenColorMap:Pe,sheenRoughnessMap:tt,specularMap:$e,specularColorMap:ze,specularIntensityMap:dt,transmission:Me,transmissionMap:W,thicknessMap:De,gradientMap:Ne,opaque:A.transparent===!1&&A.blending===Dr&&A.alphaToCoverage===!1,alphaMap:ke,alphaTest:we,alphaHash:Ee,combine:A.combine,mapUv:ot&&D(A.map.channel),aoMapUv:Ce&&D(A.aoMap.channel),lightMapUv:Le&&D(A.lightMap.channel),bumpMapUv:Ye&&D(A.bumpMap.channel),normalMapUv:He&&D(A.normalMap.channel),displacementMapUv:zt&&D(A.displacementMap.channel),emissiveMapUv:Qe&&D(A.emissiveMap.channel),metalnessMapUv:ht&&D(A.metalnessMap.channel),roughnessMapUv:Ht&&D(A.roughnessMap.channel),anisotropyMapUv:fe&&D(A.anisotropyMap.channel),clearcoatMapUv:je&&D(A.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&D(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&D(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&D(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&D(A.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&D(A.sheenColorMap.channel),sheenRoughnessMapUv:tt&&D(A.sheenRoughnessMap.channel),specularMapUv:$e&&D(A.specularMap.channel),specularColorMapUv:ze&&D(A.specularColorMap.channel),specularIntensityMapUv:dt&&D(A.specularIntensityMap.channel),transmissionMapUv:W&&D(A.transmissionMap.channel),thicknessMapUv:De&&D(A.thicknessMap.channel),alphaMapUv:ke&&D(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(He||Zt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!$.attributes.uv&&(ot||ke),fog:!!oe,useFog:A.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Re,skinning:ne.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:ot&&A.map.isVideoTexture===!0&&Ot.getTransfer(A.map.colorSpace)===Xt,decodeVideoTextureEmissive:Qe&&A.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(A.emissiveMap.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ua,flipSided:A.side===Jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ke&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&A.extensions.multiDraw===!0||qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return j.vertexUv1s=p.has(1),j.vertexUv2s=p.has(2),j.vertexUv3s=p.has(3),p.clear(),j}function v(A){const w=[];if(A.shaderID?w.push(A.shaderID):(w.push(A.customVertexShaderID),w.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)w.push(H),w.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(z(w,A),O(w,A),w.push(r.outputColorSpace)),w.push(A.customProgramCacheKey),w.join()}function z(A,w){A.push(w.precision),A.push(w.outputColorSpace),A.push(w.envMapMode),A.push(w.envMapCubeUVHeight),A.push(w.mapUv),A.push(w.alphaMapUv),A.push(w.lightMapUv),A.push(w.aoMapUv),A.push(w.bumpMapUv),A.push(w.normalMapUv),A.push(w.displacementMapUv),A.push(w.emissiveMapUv),A.push(w.metalnessMapUv),A.push(w.roughnessMapUv),A.push(w.anisotropyMapUv),A.push(w.clearcoatMapUv),A.push(w.clearcoatNormalMapUv),A.push(w.clearcoatRoughnessMapUv),A.push(w.iridescenceMapUv),A.push(w.iridescenceThicknessMapUv),A.push(w.sheenColorMapUv),A.push(w.sheenRoughnessMapUv),A.push(w.specularMapUv),A.push(w.specularColorMapUv),A.push(w.specularIntensityMapUv),A.push(w.transmissionMapUv),A.push(w.thicknessMapUv),A.push(w.combine),A.push(w.fogExp2),A.push(w.sizeAttenuation),A.push(w.morphTargetsCount),A.push(w.morphAttributeCount),A.push(w.numDirLights),A.push(w.numPointLights),A.push(w.numSpotLights),A.push(w.numSpotLightMaps),A.push(w.numHemiLights),A.push(w.numRectAreaLights),A.push(w.numDirLightShadows),A.push(w.numPointLightShadows),A.push(w.numSpotLightShadows),A.push(w.numSpotLightShadowsWithMaps),A.push(w.numLightProbes),A.push(w.shadowMapType),A.push(w.toneMapping),A.push(w.numClippingPlanes),A.push(w.numClipIntersection),A.push(w.depthPacking)}function O(A,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),A.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),A.push(d.mask)}function U(A){const w=b[A.type];let H;if(w){const te=Fi[w];H=qM.clone(te.uniforms)}else H=A.uniforms;return H}function B(A,w){let H;for(let te=0,ne=_.length;te<ne;te++){const oe=_[te];if(oe.cacheKey===w){H=oe,++H.usedTimes;break}}return H===void 0&&(H=new vA(r,w,A,c),_.push(H)),H}function V(A){if(--A.usedTimes===0){const w=_.indexOf(A);_[w]=_[_.length-1],_.pop(),A.destroy()}}function G(A){g.remove(A)}function Z(){g.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:U,acquireProgram:B,releaseProgram:V,releaseShaderCache:G,programs:_,dispose:Z}}function EA(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,g){r.get(h)[d]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function bA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function q0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Y0(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(y,S,E,b,D,x){let v=r[e];return v===void 0?(v={id:y.id,object:y,geometry:S,material:E,groupOrder:b,renderOrder:y.renderOrder,z:D,group:x},r[e]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=E,v.groupOrder=b,v.renderOrder=y.renderOrder,v.z=D,v.group=x),e++,v}function d(y,S,E,b,D,x){const v=h(y,S,E,b,D,x);E.transmission>0?s.push(v):E.transparent===!0?l.push(v):i.push(v)}function g(y,S,E,b,D,x){const v=h(y,S,E,b,D,x);E.transmission>0?s.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(y,S){i.length>1&&i.sort(y||bA),s.length>1&&s.sort(S||q0),l.length>1&&l.sort(S||q0)}function _(){for(let y=e,S=r.length;y<S;y++){const E=r[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:g,finish:_,sort:p}}function TA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new Y0,r.set(s,[h])):l>=c.length?(h=new Y0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function AA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new Pt};break;case"SpotLight":i={position:new J,direction:new J,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=i,i}}}function RA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let CA=0;function wA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function DA(r){const e=new AA,i=RA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new an,h=new an;function d(p){let _=0,y=0,S=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let E=0,b=0,D=0,x=0,v=0,z=0,O=0,U=0,B=0,V=0,G=0;p.sort(wA);for(let A=0,w=p.length;A<w;A++){const H=p[A],te=H.color,ne=H.intensity,oe=H.distance,$=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=te.r*ne,y+=te.g*ne,S+=te.b*ne;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],ne);G++}else if(H.isDirectionalLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.directionalShadow[E]=X,s.directionalShadowMap[E]=$,s.directionalShadowMatrix[E]=H.shadow.matrix,z++}s.directional[E]=I,E++}else if(H.isSpotLight){const I=e.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(te).multiplyScalar(ne),I.distance=oe,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[D]=I;const q=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,q.updateMatrices(H),H.castShadow&&V++),s.spotLightMatrix[D]=q.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,s.spotShadow[D]=X,s.spotShadowMap[D]=$,U++}D++}else if(H.isRectAreaLight){const I=e.get(H);I.color.copy(te).multiplyScalar(ne),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=I,x++}else if(H.isPointLight){const I=e.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const q=H.shadow,X=i.get(H);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,s.pointShadow[b]=X,s.pointShadowMap[b]=$,s.pointShadowMatrix[b]=H.shadow.matrix,O++}s.point[b]=I,b++}else if(H.isHemisphereLight){const I=e.get(H);I.skyColor.copy(H.color).multiplyScalar(ne),I.groundColor.copy(H.groundColor).multiplyScalar(ne),s.hemi[v]=I,v++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=S;const Z=s.hash;(Z.directionalLength!==E||Z.pointLength!==b||Z.spotLength!==D||Z.rectAreaLength!==x||Z.hemiLength!==v||Z.numDirectionalShadows!==z||Z.numPointShadows!==O||Z.numSpotShadows!==U||Z.numSpotMaps!==B||Z.numLightProbes!==G)&&(s.directional.length=E,s.spot.length=D,s.rectArea.length=x,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+B-V,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=G,Z.directionalLength=E,Z.pointLength=b,Z.spotLength=D,Z.rectAreaLength=x,Z.hemiLength=v,Z.numDirectionalShadows=z,Z.numPointShadows=O,Z.numSpotShadows=U,Z.numSpotMaps=B,Z.numLightProbes=G,s.version=CA++)}function g(p,_){let y=0,S=0,E=0,b=0,D=0;const x=_.matrixWorldInverse;for(let v=0,z=p.length;v<z;v++){const O=p[v];if(O.isDirectionalLight){const U=s.directional[y];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),y++}else if(O.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),E++}else if(O.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),h.identity(),c.copy(O.matrixWorld),c.premultiply(x),h.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const U=s.point[S];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),S++}else if(O.isHemisphereLight){const U=s.hemi[D];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(x),D++}}}return{setup:d,setupView:g,state:s}}function Z0(r){const e=new DA(r),i=[],s=[];function l(_){p.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function g(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:h}}function NA(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Z0(r),e.set(l,[d])):c>=h.length?(d=new Z0(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LA=`uniform sampler2D shadow_pass;
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
}`;function OA(r,e,i){let s=new Rv;const l=new Mt,c=new Mt,h=new un,d=new iE({depthPacking:tM}),g=new aE,p={},_=i.maxTextureSize,y={[Qa]:Jn,[Jn]:Qa,[ua]:ua},S=new Ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:UA,fragmentShader:LA}),E=S.clone();E.defines.HORIZONTAL_PASS=1;const b=new ui;b.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new yi(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rv;let v=this.type;this.render=function(V,G,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||V.length===0)return;const A=r.getRenderTarget(),w=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),te=r.state;te.setBlending(Ya),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ne=v!==ca&&this.type===ca,oe=v===ca&&this.type!==ca;for(let $=0,I=V.length;$<I;$++){const q=V[$],X=q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;l.copy(X.mapSize);const ge=X.getFrameExtents();if(l.multiply(ge),c.copy(X.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ge.x),l.x=c.x*ge.x,X.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ge.y),l.y=c.y*ge.y,X.mapSize.y=c.y)),X.map===null||ne===!0||oe===!0){const Y=this.type!==ca?{minFilter:Ni,magFilter:Ni}:{};X.map!==null&&X.map.dispose(),X.map=new Ds(l.x,l.y,Y),X.map.texture.name=q.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const L=X.getViewportCount();for(let Y=0;Y<L;Y++){const ue=X.getViewport(Y);h.set(c.x*ue.x,c.y*ue.y,c.x*ue.z,c.y*ue.w),te.viewport(h),X.updateMatrices(q,Y),s=X.getFrustum(),U(G,Z,X.camera,q,this.type)}X.isPointLightShadow!==!0&&this.type===ca&&z(X,Z),X.needsUpdate=!1}v=this.type,x.needsUpdate=!1,r.setRenderTarget(A,w,H)};function z(V,G){const Z=e.update(D);S.defines.VSM_SAMPLES!==V.blurSamples&&(S.defines.VSM_SAMPLES=V.blurSamples,E.defines.VSM_SAMPLES=V.blurSamples,S.needsUpdate=!0,E.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ds(l.x,l.y)),S.uniforms.shadow_pass.value=V.map.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(G,null,Z,S,D,null),E.uniforms.shadow_pass.value=V.mapPass.texture,E.uniforms.resolution.value=V.mapSize,E.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(G,null,Z,E,D,null)}function O(V,G,Z,A){let w=null;const H=Z.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)w=H;else if(w=Z.isPointLight===!0?g:d,r.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0||G.alphaToCoverage===!0){const te=w.uuid,ne=G.uuid;let oe=p[te];oe===void 0&&(oe={},p[te]=oe);let $=oe[ne];$===void 0&&($=w.clone(),oe[ne]=$,G.addEventListener("dispose",B)),w=$}if(w.visible=G.visible,w.wireframe=G.wireframe,A===ca?w.side=G.shadowSide!==null?G.shadowSide:G.side:w.side=G.shadowSide!==null?G.shadowSide:y[G.side],w.alphaMap=G.alphaMap,w.alphaTest=G.alphaToCoverage===!0?.5:G.alphaTest,w.map=G.map,w.clipShadows=G.clipShadows,w.clippingPlanes=G.clippingPlanes,w.clipIntersection=G.clipIntersection,w.displacementMap=G.displacementMap,w.displacementScale=G.displacementScale,w.displacementBias=G.displacementBias,w.wireframeLinewidth=G.wireframeLinewidth,w.linewidth=G.linewidth,Z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const te=r.properties.get(w);te.light=Z}return w}function U(V,G,Z,A,w){if(V.visible===!1)return;if(V.layers.test(G.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===ca)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,V.matrixWorld);const ne=e.update(V),oe=V.material;if(Array.isArray(oe)){const $=ne.groups;for(let I=0,q=$.length;I<q;I++){const X=$[I],ge=oe[X.materialIndex];if(ge&&ge.visible){const L=O(V,ge,A,w);V.onBeforeShadow(r,V,G,Z,ne,L,X),r.renderBufferDirect(Z,null,ne,L,V,X),V.onAfterShadow(r,V,G,Z,ne,L,X)}}}else if(oe.visible){const $=O(V,oe,A,w);V.onBeforeShadow(r,V,G,Z,ne,$,null),r.renderBufferDirect(Z,null,ne,$,V,null),V.onAfterShadow(r,V,G,Z,ne,$,null)}}const te=V.children;for(let ne=0,oe=te.length;ne<oe;ne++)U(te[ne],G,Z,A,w)}function B(V){V.target.removeEventListener("dispose",B);for(const Z in p){const A=p[Z],w=V.target.uuid;w in A&&(A[w].dispose(),delete A[w])}}}const PA={[Kh]:Qh,[Jh]:td,[$h]:nd,[Ur]:ed,[Qh]:Kh,[td]:Jh,[nd]:$h,[ed]:Ur};function zA(r,e){function i(){let W=!1;const De=new un;let Ne=null;const ke=new un(0,0,0,0);return{setMask:function(we){Ne!==we&&!W&&(r.colorMask(we,we,we,we),Ne=we)},setLocked:function(we){W=we},setClear:function(we,Ee,Ke,ut,j){j===!0&&(we*=ut,Ee*=ut,Ke*=ut),De.set(we,Ee,Ke,ut),ke.equals(De)===!1&&(r.clearColor(we,Ee,Ke,ut),ke.copy(De))},reset:function(){W=!1,Ne=null,ke.set(-1,0,0,0)}}}function s(){let W=!1,De=!1,Ne=null,ke=null,we=null;return{setReversed:function(Ee){if(De!==Ee){const Ke=e.get("EXT_clip_control");Ee?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),De=Ee;const ut=we;we=null,this.setClear(ut)}},getReversed:function(){return De},setTest:function(Ee){Ee?xe(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ee){Ne!==Ee&&!W&&(r.depthMask(Ee),Ne=Ee)},setFunc:function(Ee){if(De&&(Ee=PA[Ee]),ke!==Ee){switch(Ee){case Kh:r.depthFunc(r.NEVER);break;case Qh:r.depthFunc(r.ALWAYS);break;case Jh:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case $h:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case nd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ke=Ee}},setLocked:function(Ee){W=Ee},setClear:function(Ee){we!==Ee&&(De&&(Ee=1-Ee),r.clearDepth(Ee),we=Ee)},reset:function(){W=!1,Ne=null,ke=null,we=null,De=!1}}}function l(){let W=!1,De=null,Ne=null,ke=null,we=null,Ee=null,Ke=null,ut=null,j=null;return{setTest:function(ye){W||(ye?xe(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(ye){De!==ye&&!W&&(r.stencilMask(ye),De=ye)},setFunc:function(ye,mt,gt){(Ne!==ye||ke!==mt||we!==gt)&&(r.stencilFunc(ye,mt,gt),Ne=ye,ke=mt,we=gt)},setOp:function(ye,mt,gt){(Ee!==ye||Ke!==mt||ut!==gt)&&(r.stencilOp(ye,mt,gt),Ee=ye,Ke=mt,ut=gt)},setLocked:function(ye){W=ye},setClear:function(ye){j!==ye&&(r.clearStencil(ye),j=ye)},reset:function(){W=!1,De=null,Ne=null,ke=null,we=null,Ee=null,Ke=null,ut=null,j=null}}}const c=new i,h=new s,d=new l,g=new WeakMap,p=new WeakMap;let _={},y={},S=new WeakMap,E=[],b=null,D=!1,x=null,v=null,z=null,O=null,U=null,B=null,V=null,G=new Pt(0,0,0),Z=0,A=!1,w=null,H=null,te=null,ne=null,oe=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,q=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),I=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),I=q>=2);let ge=null,L={};const Y=r.getParameter(r.SCISSOR_BOX),ue=r.getParameter(r.VIEWPORT),ve=new un().fromArray(Y),pe=new un().fromArray(ue);function Fe(W,De,Ne,ke){const we=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(W,Ee),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<Ne;Ke++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,ke,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(De+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return Ee}const ie={};ie[r.TEXTURE_2D]=Fe(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=Fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=Fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=Fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xe(r.DEPTH_TEST),h.setFunc(Ur),Ye(!1),He(X_),xe(r.CULL_FACE),Ce(Ya);function xe(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Re(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Xe(W,De){return y[W]!==De?(r.bindFramebuffer(W,De),y[W]=De,W===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=De),W===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=De),!0):!1}function qe(W,De){let Ne=E,ke=!1;if(W){Ne=S.get(De),Ne===void 0&&(Ne=[],S.set(De,Ne));const we=W.textures;if(Ne.length!==we.length||Ne[0]!==r.COLOR_ATTACHMENT0){for(let Ee=0,Ke=we.length;Ee<Ke;Ee++)Ne[Ee]=r.COLOR_ATTACHMENT0+Ee;Ne.length=we.length,ke=!0}}else Ne[0]!==r.BACK&&(Ne[0]=r.BACK,ke=!0);ke&&r.drawBuffers(Ne)}function ot(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const We={[bs]:r.FUNC_ADD,[RS]:r.FUNC_SUBTRACT,[CS]:r.FUNC_REVERSE_SUBTRACT};We[wS]=r.MIN,We[DS]=r.MAX;const T={[NS]:r.ZERO,[US]:r.ONE,[LS]:r.SRC_COLOR,[Yh]:r.SRC_ALPHA,[FS]:r.SRC_ALPHA_SATURATE,[IS]:r.DST_COLOR,[PS]:r.DST_ALPHA,[OS]:r.ONE_MINUS_SRC_COLOR,[Zh]:r.ONE_MINUS_SRC_ALPHA,[BS]:r.ONE_MINUS_DST_COLOR,[zS]:r.ONE_MINUS_DST_ALPHA,[HS]:r.CONSTANT_COLOR,[GS]:r.ONE_MINUS_CONSTANT_COLOR,[VS]:r.CONSTANT_ALPHA,[jS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ce(W,De,Ne,ke,we,Ee,Ke,ut,j,ye){if(W===Ya){D===!0&&(Re(r.BLEND),D=!1);return}if(D===!1&&(xe(r.BLEND),D=!0),W!==AS){if(W!==x||ye!==A){if((v!==bs||U!==bs)&&(r.blendEquation(r.FUNC_ADD),v=bs,U=bs),ye)switch(W){case Dr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFunc(r.ONE,r.ONE);break;case q_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Y_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Dr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case W_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case q_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}z=null,O=null,B=null,V=null,G.set(0,0,0),Z=0,x=W,A=ye}return}we=we||De,Ee=Ee||Ne,Ke=Ke||ke,(De!==v||we!==U)&&(r.blendEquationSeparate(We[De],We[we]),v=De,U=we),(Ne!==z||ke!==O||Ee!==B||Ke!==V)&&(r.blendFuncSeparate(T[Ne],T[ke],T[Ee],T[Ke]),z=Ne,O=ke,B=Ee,V=Ke),(ut.equals(G)===!1||j!==Z)&&(r.blendColor(ut.r,ut.g,ut.b,j),G.copy(ut),Z=j),x=W,A=!1}function Le(W,De){W.side===ua?Re(r.CULL_FACE):xe(r.CULL_FACE);let Ne=W.side===Jn;De&&(Ne=!Ne),Ye(Ne),W.blending===Dr&&W.transparent===!1?Ce(Ya):Ce(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const ke=W.stencilWrite;d.setTest(ke),ke&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(W){w!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),w=W)}function He(W){W!==ES?(xe(r.CULL_FACE),W!==H&&(W===X_?r.cullFace(r.BACK):W===bS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),H=W}function zt(W){W!==te&&(I&&r.lineWidth(W),te=W)}function Qe(W,De,Ne){W?(xe(r.POLYGON_OFFSET_FILL),(ne!==De||oe!==Ne)&&(r.polygonOffset(De,Ne),ne=De,oe=Ne)):Re(r.POLYGON_OFFSET_FILL)}function ht(W){W?xe(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Ht(W){W===void 0&&(W=r.TEXTURE0+$-1),ge!==W&&(r.activeTexture(W),ge=W)}function Zt(W,De,Ne){Ne===void 0&&(ge===null?Ne=r.TEXTURE0+$-1:Ne=ge);let ke=L[Ne];ke===void 0&&(ke={type:void 0,texture:void 0},L[Ne]=ke),(ke.type!==W||ke.texture!==De)&&(ge!==Ne&&(r.activeTexture(Ne),ge=Ne),r.bindTexture(W,De||ie[W]),ke.type=W,ke.texture=De)}function P(){const W=L[ge];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function R(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function se(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ie(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pe(W){ve.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ve.copy(W))}function tt(W){pe.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),pe.copy(W))}function $e(W,De){let Ne=p.get(De);Ne===void 0&&(Ne=new WeakMap,p.set(De,Ne));let ke=Ne.get(W);ke===void 0&&(ke=r.getUniformBlockIndex(De,W.name),Ne.set(W,ke))}function ze(W,De){const ke=p.get(De).get(W);g.get(De)!==ke&&(r.uniformBlockBinding(De,ke,W.__bindingPointIndex),g.set(De,ke))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ge=null,L={},y={},S=new WeakMap,E=[],b=null,D=!1,x=null,v=null,z=null,O=null,U=null,B=null,V=null,G=new Pt(0,0,0),Z=0,A=!1,w=null,H=null,te=null,ne=null,oe=null,ve.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:xe,disable:Re,bindFramebuffer:Xe,drawBuffers:qe,useProgram:ot,setBlending:Ce,setMaterial:Le,setFlipSided:Ye,setCullFace:He,setLineWidth:zt,setPolygonOffset:Qe,setScissorTest:ht,activeTexture:Ht,bindTexture:Zt,unbindTexture:P,compressedTexImage2D:R,compressedTexImage3D:se,texImage2D:Ie,texImage3D:Ae,updateUBOMapping:$e,uniformBlockBinding:ze,texStorage2D:Oe,texStorage3D:Je,texSubImage2D:me,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:je,scissor:Pe,viewport:tt,reset:dt}}function IA(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Mt,_=new WeakMap;let y;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,R){return E?new OffscreenCanvas(P,R):Qc("canvas")}function D(P,R,se){let me=1;const Me=Zt(P);if((Me.width>se||Me.height>se)&&(me=se/Math.max(Me.width,Me.height)),me<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const fe=Math.floor(me*Me.width),je=Math.floor(me*Me.height);y===void 0&&(y=b(fe,je));const Oe=R?b(fe,je):y;return Oe.width=fe,Oe.height=je,Oe.getContext("2d").drawImage(P,0,0,fe,je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+fe+"x"+je+")."),Oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),P;return P}function x(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function z(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(P,R,se,me,Me=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let fe=R;if(R===r.RED&&(se===r.FLOAT&&(fe=r.R32F),se===r.HALF_FLOAT&&(fe=r.R16F),se===r.UNSIGNED_BYTE&&(fe=r.R8)),R===r.RED_INTEGER&&(se===r.UNSIGNED_BYTE&&(fe=r.R8UI),se===r.UNSIGNED_SHORT&&(fe=r.R16UI),se===r.UNSIGNED_INT&&(fe=r.R32UI),se===r.BYTE&&(fe=r.R8I),se===r.SHORT&&(fe=r.R16I),se===r.INT&&(fe=r.R32I)),R===r.RG&&(se===r.FLOAT&&(fe=r.RG32F),se===r.HALF_FLOAT&&(fe=r.RG16F),se===r.UNSIGNED_BYTE&&(fe=r.RG8)),R===r.RG_INTEGER&&(se===r.UNSIGNED_BYTE&&(fe=r.RG8UI),se===r.UNSIGNED_SHORT&&(fe=r.RG16UI),se===r.UNSIGNED_INT&&(fe=r.RG32UI),se===r.BYTE&&(fe=r.RG8I),se===r.SHORT&&(fe=r.RG16I),se===r.INT&&(fe=r.RG32I)),R===r.RGB_INTEGER&&(se===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),se===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),se===r.UNSIGNED_INT&&(fe=r.RGB32UI),se===r.BYTE&&(fe=r.RGB8I),se===r.SHORT&&(fe=r.RGB16I),se===r.INT&&(fe=r.RGB32I)),R===r.RGBA_INTEGER&&(se===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),se===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),se===r.UNSIGNED_INT&&(fe=r.RGBA32UI),se===r.BYTE&&(fe=r.RGBA8I),se===r.SHORT&&(fe=r.RGBA16I),se===r.INT&&(fe=r.RGBA32I)),R===r.RGB&&(se===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),se===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),R===r.RGBA){const je=Me?Zc:Ot.getTransfer(me);se===r.FLOAT&&(fe=r.RGBA32F),se===r.HALF_FLOAT&&(fe=r.RGBA16F),se===r.UNSIGNED_BYTE&&(fe=je===Xt?r.SRGB8_ALPHA8:r.RGBA8),se===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),se===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function U(P,R){let se;return P?R===null||R===Cs||R===qo?se=r.DEPTH24_STENCIL8:R===ha?se=r.DEPTH32F_STENCIL8:R===Wo&&(se=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Cs||R===qo?se=r.DEPTH_COMPONENT24:R===ha?se=r.DEPTH_COMPONENT32F:R===Wo&&(se=r.DEPTH_COMPONENT16),se}function B(P,R){return x(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ni&&P.minFilter!==Hi?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function V(P){const R=P.target;R.removeEventListener("dispose",V),Z(R),R.isVideoTexture&&_.delete(R)}function G(P){const R=P.target;R.removeEventListener("dispose",G),w(R)}function Z(P){const R=s.get(P);if(R.__webglInit===void 0)return;const se=P.source,me=S.get(se);if(me){const Me=me[R.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&A(P),Object.keys(me).length===0&&S.delete(se)}s.remove(P)}function A(P){const R=s.get(P);r.deleteTexture(R.__webglTexture);const se=P.source,me=S.get(se);delete me[R.__cacheKey],h.memory.textures--}function w(P){const R=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(R.__webglFramebuffer[me]))for(let Me=0;Me<R.__webglFramebuffer[me].length;Me++)r.deleteFramebuffer(R.__webglFramebuffer[me][Me]);else r.deleteFramebuffer(R.__webglFramebuffer[me]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[me])}else{if(Array.isArray(R.__webglFramebuffer))for(let me=0;me<R.__webglFramebuffer.length;me++)r.deleteFramebuffer(R.__webglFramebuffer[me]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let me=0;me<R.__webglColorRenderbuffer.length;me++)R.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[me]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=P.textures;for(let me=0,Me=se.length;me<Me;me++){const fe=s.get(se[me]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),h.memory.textures--),s.remove(se[me])}s.remove(P)}let H=0;function te(){H=0}function ne(){const P=H;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function oe(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function $(P,R){const se=s.get(P);if(P.isVideoTexture&&ht(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&se.__version!==P.version){const me=P.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(se,P,R);return}}else P.isExternalTexture&&(se.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,se.__webglTexture,r.TEXTURE0+R)}function I(P,R){const se=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){ie(se,P,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,se.__webglTexture,r.TEXTURE0+R)}function q(P,R){const se=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&se.__version!==P.version){ie(se,P,R);return}i.bindTexture(r.TEXTURE_3D,se.__webglTexture,r.TEXTURE0+R)}function X(P,R){const se=s.get(P);if(P.version>0&&se.__version!==P.version){xe(se,P,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture,r.TEXTURE0+R)}const ge={[sd]:r.REPEAT,[As]:r.CLAMP_TO_EDGE,[rd]:r.MIRRORED_REPEAT},L={[Ni]:r.NEAREST,[$S]:r.NEAREST_MIPMAP_NEAREST,[uc]:r.NEAREST_MIPMAP_LINEAR,[Hi]:r.LINEAR,[dh]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},Y={[aM]:r.NEVER,[uM]:r.ALWAYS,[sM]:r.LESS,[_v]:r.LEQUAL,[rM]:r.EQUAL,[cM]:r.GEQUAL,[oM]:r.GREATER,[lM]:r.NOTEQUAL};function ue(P,R){if(R.type===ha&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Hi||R.magFilter===dh||R.magFilter===uc||R.magFilter===Rs||R.minFilter===Hi||R.minFilter===dh||R.minFilter===uc||R.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ge[R.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ge[R.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ge[R.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,L[R.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,L[R.minFilter]),R.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Y[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ni||R.minFilter!==uc&&R.minFilter!==Rs||R.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function ve(P,R){let se=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",V));const me=R.source;let Me=S.get(me);Me===void 0&&(Me={},S.set(me,Me));const fe=oe(R);if(fe!==P.__cacheKey){Me[fe]===void 0&&(Me[fe]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,se=!0),Me[fe].usedTimes++;const je=Me[P.__cacheKey];je!==void 0&&(Me[P.__cacheKey].usedTimes--,je.usedTimes===0&&A(R)),P.__cacheKey=fe,P.__webglTexture=Me[fe].texture}return se}function pe(P,R,se){return Math.floor(Math.floor(P/se)/R)}function Fe(P,R,se,me){const fe=P.updateRanges;if(fe.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,se,me,R.data);else{fe.sort((Ae,Pe)=>Ae.start-Pe.start);let je=0;for(let Ae=1;Ae<fe.length;Ae++){const Pe=fe[je],tt=fe[Ae],$e=Pe.start+Pe.count,ze=pe(tt.start,R.width,4),dt=pe(Pe.start,R.width,4);tt.start<=$e+1&&ze===dt&&pe(tt.start+tt.count-1,R.width,4)===ze?Pe.count=Math.max(Pe.count,tt.start+tt.count-Pe.start):(++je,fe[je]=tt)}fe.length=je+1;const Oe=r.getParameter(r.UNPACK_ROW_LENGTH),Je=r.getParameter(r.UNPACK_SKIP_PIXELS),Ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let Ae=0,Pe=fe.length;Ae<Pe;Ae++){const tt=fe[Ae],$e=Math.floor(tt.start/4),ze=Math.ceil(tt.count/4),dt=$e%R.width,W=Math.floor($e/R.width),De=ze,Ne=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,dt,W,De,Ne,se,me,R.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Je),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function ie(P,R,se){let me=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(me=r.TEXTURE_3D);const Me=ve(P,R),fe=R.source;i.bindTexture(me,P.__webglTexture,r.TEXTURE0+se);const je=s.get(fe);if(fe.version!==je.__version||Me===!0){i.activeTexture(r.TEXTURE0+se);const Oe=Ot.getPrimaries(Ot.workingColorSpace),Je=R.colorSpace===qa?null:Ot.getPrimaries(R.colorSpace),Ie=R.colorSpace===qa||Oe===Je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ae=D(R.image,!1,l.maxTextureSize);Ae=Ht(R,Ae);const Pe=c.convert(R.format,R.colorSpace),tt=c.convert(R.type);let $e=O(R.internalFormat,Pe,tt,R.colorSpace,R.isVideoTexture);ue(me,R);let ze;const dt=R.mipmaps,W=R.isVideoTexture!==!0,De=je.__version===void 0||Me===!0,Ne=fe.dataReady,ke=B(R,Ae);if(R.isDepthTexture)$e=U(R.format===Zo,R.type),De&&(W?i.texStorage2D(r.TEXTURE_2D,1,$e,Ae.width,Ae.height):i.texImage2D(r.TEXTURE_2D,0,$e,Ae.width,Ae.height,0,Pe,tt,null));else if(R.isDataTexture)if(dt.length>0){W&&De&&i.texStorage2D(r.TEXTURE_2D,ke,$e,dt[0].width,dt[0].height);for(let we=0,Ee=dt.length;we<Ee;we++)ze=dt[we],W?Ne&&i.texSubImage2D(r.TEXTURE_2D,we,0,0,ze.width,ze.height,Pe,tt,ze.data):i.texImage2D(r.TEXTURE_2D,we,$e,ze.width,ze.height,0,Pe,tt,ze.data);R.generateMipmaps=!1}else W?(De&&i.texStorage2D(r.TEXTURE_2D,ke,$e,Ae.width,Ae.height),Ne&&Fe(R,Ae,Pe,tt)):i.texImage2D(r.TEXTURE_2D,0,$e,Ae.width,Ae.height,0,Pe,tt,Ae.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){W&&De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ke,$e,dt[0].width,dt[0].height,Ae.depth);for(let we=0,Ee=dt.length;we<Ee;we++)if(ze=dt[we],R.format!==Di)if(Pe!==null)if(W){if(Ne)if(R.layerUpdates.size>0){const Ke=T0(ze.width,ze.height,R.format,R.type);for(const ut of R.layerUpdates){const j=ze.data.subarray(ut*Ke/ze.data.BYTES_PER_ELEMENT,(ut+1)*Ke/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ut,ze.width,ze.height,1,Pe,j)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,ze.width,ze.height,Ae.depth,Pe,ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,$e,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ne&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,ze.width,ze.height,Ae.depth,Pe,tt,ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,we,$e,ze.width,ze.height,Ae.depth,0,Pe,tt,ze.data)}else{W&&De&&i.texStorage2D(r.TEXTURE_2D,ke,$e,dt[0].width,dt[0].height);for(let we=0,Ee=dt.length;we<Ee;we++)ze=dt[we],R.format!==Di?Pe!==null?W?Ne&&i.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,ze.width,ze.height,Pe,ze.data):i.compressedTexImage2D(r.TEXTURE_2D,we,$e,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ne&&i.texSubImage2D(r.TEXTURE_2D,we,0,0,ze.width,ze.height,Pe,tt,ze.data):i.texImage2D(r.TEXTURE_2D,we,$e,ze.width,ze.height,0,Pe,tt,ze.data)}else if(R.isDataArrayTexture)if(W){if(De&&i.texStorage3D(r.TEXTURE_2D_ARRAY,ke,$e,Ae.width,Ae.height,Ae.depth),Ne)if(R.layerUpdates.size>0){const we=T0(Ae.width,Ae.height,R.format,R.type);for(const Ee of R.layerUpdates){const Ke=Ae.data.subarray(Ee*we/Ae.data.BYTES_PER_ELEMENT,(Ee+1)*we/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ee,Ae.width,Ae.height,1,Pe,tt,Ke)}R.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Pe,tt,Ae.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,$e,Ae.width,Ae.height,Ae.depth,0,Pe,tt,Ae.data);else if(R.isData3DTexture)W?(De&&i.texStorage3D(r.TEXTURE_3D,ke,$e,Ae.width,Ae.height,Ae.depth),Ne&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Pe,tt,Ae.data)):i.texImage3D(r.TEXTURE_3D,0,$e,Ae.width,Ae.height,Ae.depth,0,Pe,tt,Ae.data);else if(R.isFramebufferTexture){if(De)if(W)i.texStorage2D(r.TEXTURE_2D,ke,$e,Ae.width,Ae.height);else{let we=Ae.width,Ee=Ae.height;for(let Ke=0;Ke<ke;Ke++)i.texImage2D(r.TEXTURE_2D,Ke,$e,we,Ee,0,Pe,tt,null),we>>=1,Ee>>=1}}else if(dt.length>0){if(W&&De){const we=Zt(dt[0]);i.texStorage2D(r.TEXTURE_2D,ke,$e,we.width,we.height)}for(let we=0,Ee=dt.length;we<Ee;we++)ze=dt[we],W?Ne&&i.texSubImage2D(r.TEXTURE_2D,we,0,0,Pe,tt,ze):i.texImage2D(r.TEXTURE_2D,we,$e,Pe,tt,ze);R.generateMipmaps=!1}else if(W){if(De){const we=Zt(Ae);i.texStorage2D(r.TEXTURE_2D,ke,$e,we.width,we.height)}Ne&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Pe,tt,Ae)}else i.texImage2D(r.TEXTURE_2D,0,$e,Pe,tt,Ae);x(R)&&v(me),je.__version=fe.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function xe(P,R,se){if(R.image.length!==6)return;const me=ve(P,R),Me=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+se);const fe=s.get(Me);if(Me.version!==fe.__version||me===!0){i.activeTexture(r.TEXTURE0+se);const je=Ot.getPrimaries(Ot.workingColorSpace),Oe=R.colorSpace===qa?null:Ot.getPrimaries(R.colorSpace),Je=R.colorSpace===qa||je===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const Ie=R.isCompressedTexture||R.image[0].isCompressedTexture,Ae=R.image[0]&&R.image[0].isDataTexture,Pe=[];for(let Ee=0;Ee<6;Ee++)!Ie&&!Ae?Pe[Ee]=D(R.image[Ee],!0,l.maxCubemapSize):Pe[Ee]=Ae?R.image[Ee].image:R.image[Ee],Pe[Ee]=Ht(R,Pe[Ee]);const tt=Pe[0],$e=c.convert(R.format,R.colorSpace),ze=c.convert(R.type),dt=O(R.internalFormat,$e,ze,R.colorSpace),W=R.isVideoTexture!==!0,De=fe.__version===void 0||me===!0,Ne=Me.dataReady;let ke=B(R,tt);ue(r.TEXTURE_CUBE_MAP,R);let we;if(Ie){W&&De&&i.texStorage2D(r.TEXTURE_CUBE_MAP,ke,dt,tt.width,tt.height);for(let Ee=0;Ee<6;Ee++){we=Pe[Ee].mipmaps;for(let Ke=0;Ke<we.length;Ke++){const ut=we[Ke];R.format!==Di?$e!==null?W?Ne&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,ut.width,ut.height,$e,ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,dt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,0,0,ut.width,ut.height,$e,ze,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke,dt,ut.width,ut.height,0,$e,ze,ut.data)}}}else{if(we=R.mipmaps,W&&De){we.length>0&&ke++;const Ee=Zt(Pe[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,ke,dt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ae){W?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe[Ee].width,Pe[Ee].height,$e,ze,Pe[Ee].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,Pe[Ee].width,Pe[Ee].height,0,$e,ze,Pe[Ee].data);for(let Ke=0;Ke<we.length;Ke++){const j=we[Ke].image[Ee].image;W?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,j.width,j.height,$e,ze,j.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,dt,j.width,j.height,0,$e,ze,j.data)}}else{W?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,$e,ze,Pe[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,$e,ze,Pe[Ee]);for(let Ke=0;Ke<we.length;Ke++){const ut=we[Ke];W?Ne&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,0,0,$e,ze,ut.image[Ee]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ke+1,dt,$e,ze,ut.image[Ee])}}}x(R)&&v(r.TEXTURE_CUBE_MAP),fe.__version=Me.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function Re(P,R,se,me,Me,fe){const je=c.convert(se.format,se.colorSpace),Oe=c.convert(se.type),Je=O(se.internalFormat,je,Oe,se.colorSpace),Ie=s.get(R),Ae=s.get(se);if(Ae.__renderTarget=R,!Ie.__hasExternalTextures){const Pe=Math.max(1,R.width>>fe),tt=Math.max(1,R.height>>fe);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?i.texImage3D(Me,fe,Je,Pe,tt,R.depth,0,je,Oe,null):i.texImage2D(Me,fe,Je,Pe,tt,0,je,Oe,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,Me,Ae.__webglTexture,0,zt(R)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,Me,Ae.__webglTexture,fe),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(P,R,se){if(r.bindRenderbuffer(r.RENDERBUFFER,P),R.depthBuffer){const me=R.depthTexture,Me=me&&me.isDepthTexture?me.type:null,fe=U(R.stencilBuffer,Me),je=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=zt(R);Qe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Oe,fe,R.width,R.height):se?r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,fe,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,fe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,P)}else{const me=R.textures;for(let Me=0;Me<me.length;Me++){const fe=me[Me],je=c.convert(fe.format,fe.colorSpace),Oe=c.convert(fe.type),Je=O(fe.internalFormat,je,Oe,fe.colorSpace),Ie=zt(R);se&&Qe(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,Je,R.width,R.height):Qe(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,Je,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Je,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function qe(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(R.depthTexture);me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),$(R.depthTexture,0);const Me=me.__webglTexture,fe=zt(R);if(R.depthTexture.format===Yo)Qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0);else if(R.depthTexture.format===Zo)Qe(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ot(P){const R=s.get(P),se=P.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==P.depthTexture){const me=P.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),me){const Me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,me.removeEventListener("dispose",Me)};me.addEventListener("dispose",Me),R.__depthDisposeCallback=Me}R.__boundDepthTexture=me}if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const me=P.texture.mipmaps;me&&me.length>0?qe(R.__webglFramebuffer[0],P):qe(R.__webglFramebuffer,P)}else if(se){R.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[me]),R.__webglDepthbuffer[me]===void 0)R.__webglDepthbuffer[me]=r.createRenderbuffer(),Xe(R.__webglDepthbuffer[me],P,!1);else{const Me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,fe)}}else{const me=P.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Xe(R.__webglDepthbuffer,P,!1);else{const Me=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,fe)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function We(P,R,se){const me=s.get(P);R!==void 0&&Re(me.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),se!==void 0&&ot(P)}function T(P){const R=P.texture,se=s.get(P),me=s.get(R);P.addEventListener("dispose",G);const Me=P.textures,fe=P.isWebGLCubeRenderTarget===!0,je=Me.length>1;if(je||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=R.version,h.memory.textures++),fe){se.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[Oe]=[];for(let Je=0;Je<R.mipmaps.length;Je++)se.__webglFramebuffer[Oe][Je]=r.createFramebuffer()}else se.__webglFramebuffer[Oe]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let Oe=0;Oe<R.mipmaps.length;Oe++)se.__webglFramebuffer[Oe]=r.createFramebuffer()}else se.__webglFramebuffer=r.createFramebuffer();if(je)for(let Oe=0,Je=Me.length;Oe<Je;Oe++){const Ie=s.get(Me[Oe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&Qe(P)===!1){se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Me.length;Oe++){const Je=Me[Oe];se.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,se.__webglColorRenderbuffer[Oe]);const Ie=c.convert(Je.format,Je.colorSpace),Ae=c.convert(Je.type),Pe=O(Je.internalFormat,Ie,Ae,Je.colorSpace,P.isXRRenderTarget===!0),tt=zt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Pe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,se.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(se.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){i.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ue(r.TEXTURE_CUBE_MAP,R);for(let Oe=0;Oe<6;Oe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Je=0;Je<R.mipmaps.length;Je++)Re(se.__webglFramebuffer[Oe][Je],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Je);else Re(se.__webglFramebuffer[Oe],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);x(R)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Oe=0,Je=Me.length;Oe<Je;Oe++){const Ie=Me[Oe],Ae=s.get(Ie);let Pe=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pe,Ae.__webglTexture),ue(Pe,Ie),Re(se.__webglFramebuffer,P,Ie,r.COLOR_ATTACHMENT0+Oe,Pe,0),x(Ie)&&v(Pe)}i.unbindTexture()}else{let Oe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Oe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Oe,me.__webglTexture),ue(Oe,R),R.mipmaps&&R.mipmaps.length>0)for(let Je=0;Je<R.mipmaps.length;Je++)Re(se.__webglFramebuffer[Je],P,R,r.COLOR_ATTACHMENT0,Oe,Je);else Re(se.__webglFramebuffer,P,R,r.COLOR_ATTACHMENT0,Oe,0);x(R)&&v(Oe),i.unbindTexture()}P.depthBuffer&&ot(P)}function Ce(P){const R=P.textures;for(let se=0,me=R.length;se<me;se++){const Me=R[se];if(x(Me)){const fe=z(P),je=s.get(Me).__webglTexture;i.bindTexture(fe,je),v(fe),i.unbindTexture()}}}const Le=[],Ye=[];function He(P){if(P.samples>0){if(Qe(P)===!1){const R=P.textures,se=P.width,me=P.height;let Me=r.COLOR_BUFFER_BIT;const fe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(P),Oe=R.length>1;if(Oe)for(let Ie=0;Ie<R.length;Ie++)i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Je=P.texture.mipmaps;Je&&Je.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[Ie]);const Ae=s.get(R[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,se,me,0,0,se,me,Me,r.NEAREST),g===!0&&(Le.length=0,Ye.length=0,Le.push(r.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Le.push(fe),Ye.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Le))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let Ie=0;Ie<R.length;Ie++){i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,je.__webglColorRenderbuffer[Ie]);const Ae=s.get(R[Ie]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,Ae,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&g){const R=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function zt(P){return Math.min(l.maxSamples,P.samples)}function Qe(P){const R=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function ht(P){const R=h.render.frame;_.get(P)!==R&&(_.set(P,R),P.update())}function Ht(P,R){const se=P.colorSpace,me=P.format,Me=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||se!==Pr&&se!==qa&&(Ot.getTransfer(se)===Xt?(me!==Di||Me!==pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),R}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=ne,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=T,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Qe}function BA(r,e){function i(s,l=qa){let c;const h=Ot.getTransfer(l);if(s===pa)return r.UNSIGNED_BYTE;if(s===jd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===fv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===hv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===cv)return r.BYTE;if(s===uv)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===Vd)return r.INT;if(s===Cs)return r.UNSIGNED_INT;if(s===ha)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===dv)return r.ALPHA;if(s===pv)return r.RGB;if(s===Di)return r.RGBA;if(s===Yo)return r.DEPTH_COMPONENT;if(s===Zo)return r.DEPTH_STENCIL;if(s===mv)return r.RED;if(s===Xd)return r.RED_INTEGER;if(s===gv)return r.RG;if(s===Wd)return r.RG_INTEGER;if(s===qd)return r.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===jc)if(h===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===od||s===ld||s===cd||s===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fd||s===hd||s===dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===fd||s===hd)return h===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===dd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===pd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===md)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_d)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===yd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Md)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ed)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Td)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ad)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rd)return h===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===wd||s===Dd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Cd)return h===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Nd||s===Ud||s===Ld||s===Od)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Nd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ld)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Od)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const FA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HA=`
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

}`;class GA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Lv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ja({vertexShader:FA,fragmentShader:HA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yi(new iu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Ns{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",g=1,p=null,_=null,y=null,S=null,E=null,b=null;const D=typeof XRWebGLBinding<"u",x=new GA,v={},z=i.getContextAttributes();let O=null,U=null;const B=[],V=[],G=new Mt;let Z=null;const A=new ci;A.viewport=new un;const w=new ci;w.viewport=new un;const H=[A,w],te=new rE;let ne=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=B[ie];return xe===void 0&&(xe=new Oh,B[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=B[ie];return xe===void 0&&(xe=new Oh,B[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=B[ie];return xe===void 0&&(xe=new Oh,B[ie]=xe),xe.getHandSpace()};function $(ie){const xe=V.indexOf(ie.inputSource);if(xe===-1)return;const Re=B[xe];Re!==void 0&&(Re.update(ie.inputSource,ie.frame,p||h),Re.dispatchEvent({type:ie.type,data:ie.inputSource}))}function I(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",q);for(let ie=0;ie<B.length;ie++){const xe=V[ie];xe!==null&&(V[ie]=null,B[ie].disconnect(xe))}ne=null,oe=null,x.reset();for(const ie in v)delete v[ie];e.setRenderTarget(O),E=null,S=null,y=null,l=null,U=null,Fe.stop(),s.isPresenting=!1,e.setPixelRatio(Z),e.setSize(G.width,G.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){c=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return S!==null?S:E},this.getBinding=function(){return y===null&&D&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",I),l.addEventListener("inputsourceschange",q),z.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(G),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Xe=null,qe=null;z.depth&&(qe=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Re=z.stencil?Zo:Yo,Xe=z.stencil?qo:Cs);const ot={colorFormat:i.RGBA8,depthFormat:qe,scaleFactor:c};y=this.getBinding(),S=y.createProjectionLayer(ot),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new Ds(S.textureWidth,S.textureHeight,{format:Di,type:pa,depthTexture:new Uv(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Re={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Re),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Ds(E.framebufferWidth,E.framebufferHeight,{format:Di,type:pa,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(g),p=null,h=await l.requestReferenceSpace(d),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(ie){for(let xe=0;xe<ie.removed.length;xe++){const Re=ie.removed[xe],Xe=V.indexOf(Re);Xe>=0&&(V[Xe]=null,B[Xe].disconnect(Re))}for(let xe=0;xe<ie.added.length;xe++){const Re=ie.added[xe];let Xe=V.indexOf(Re);if(Xe===-1){for(let ot=0;ot<B.length;ot++)if(ot>=V.length){V.push(Re),Xe=ot;break}else if(V[ot]===null){V[ot]=Re,Xe=ot;break}if(Xe===-1)break}const qe=B[Xe];qe&&qe.connect(Re)}}const X=new J,ge=new J;function L(ie,xe,Re){X.setFromMatrixPosition(xe.matrixWorld),ge.setFromMatrixPosition(Re.matrixWorld);const Xe=X.distanceTo(ge),qe=xe.projectionMatrix.elements,ot=Re.projectionMatrix.elements,We=qe[14]/(qe[10]-1),T=qe[14]/(qe[10]+1),Ce=(qe[9]+1)/qe[5],Le=(qe[9]-1)/qe[5],Ye=(qe[8]-1)/qe[0],He=(ot[8]+1)/ot[0],zt=We*Ye,Qe=We*He,ht=Xe/(-Ye+He),Ht=ht*-Ye;if(xe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ht),ie.translateZ(ht),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),qe[10]===-1)ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Zt=We+ht,P=T+ht,R=zt-Ht,se=Qe+(Xe-Ht),me=Ce*T/P*Zt,Me=Le*T/P*Zt;ie.projectionMatrix.makePerspective(R,se,me,Me,Zt,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function Y(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let xe=ie.near,Re=ie.far;x.texture!==null&&(x.depthNear>0&&(xe=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),te.near=w.near=A.near=xe,te.far=w.far=A.far=Re,(ne!==te.near||oe!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ne=te.near,oe=te.far),te.layers.mask=ie.layers.mask|6,A.layers.mask=te.layers.mask&3,w.layers.mask=te.layers.mask&5;const Xe=ie.parent,qe=te.cameras;Y(te,Xe);for(let ot=0;ot<qe.length;ot++)Y(qe[ot],Xe);qe.length===2?L(te,A,w):te.projectionMatrix.copy(A.projectionMatrix),ue(ie,te,Xe)};function ue(ie,xe,Re){Re===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Re.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ko*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(S===null&&E===null))return g},this.setFoveation=function(ie){g=ie,S!==null&&(S.fixedFoveation=ie),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(te)},this.getCameraTexture=function(ie){return v[ie]};let ve=null;function pe(ie,xe){if(_=xe.getViewerPose(p||h),b=xe,_!==null){const Re=_.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Xe=!1;Re.length!==te.cameras.length&&(te.cameras.length=0,Xe=!0);for(let T=0;T<Re.length;T++){const Ce=Re[T];let Le=null;if(E!==null)Le=E.getViewport(Ce);else{const He=y.getViewSubImage(S,Ce);Le=He.viewport,T===0&&(e.setRenderTargetTextures(U,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(U))}let Ye=H[T];Ye===void 0&&(Ye=new ci,Ye.layers.enable(T),Ye.viewport=new un,H[T]=Ye),Ye.matrix.fromArray(Ce.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ce.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Le.x,Le.y,Le.width,Le.height),T===0&&(te.matrix.copy(Ye.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Xe===!0&&te.cameras.push(Ye)}const qe=l.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){y=s.getBinding();const T=y.getDepthInformation(Re[0]);T&&T.isValid&&T.texture&&x.init(T,l.renderState)}if(qe&&qe.includes("camera-access")&&D){e.state.unbindTexture(),y=s.getBinding();for(let T=0;T<Re.length;T++){const Ce=Re[T].camera;if(Ce){let Le=v[Ce];Le||(Le=new Lv,v[Ce]=Le);const Ye=y.getCameraImage(Ce);Le.sourceTexture=Ye}}}}for(let Re=0;Re<B.length;Re++){const Xe=V[Re],qe=B[Re];Xe!==null&&qe!==void 0&&qe.update(Xe,xe,p||h)}ve&&ve(ie,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),b=null}const Fe=new Ov;Fe.setAnimationLoop(pe),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const Ms=new ma,jA=new an;function kA(r,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,bv(r)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,z,O,U){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),y(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v)):v.isMeshStandardMaterial?(c(x,v),S(x,v),v.isMeshPhysicalMaterial&&E(x,v,U)):v.isMeshMatcapMaterial?(c(x,v),b(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),D(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?g(x,v,z,O):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Jn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Jn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const z=e.get(v),O=z.envMap,U=z.envMapRotation;O&&(x.envMap.value=O,Ms.copy(U),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),x.envMapRotation.value.setFromMatrix4(jA.makeRotationFromEuler(Ms)),x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function g(x,v,z,O){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*z,x.scale.value=O*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function S(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function E(x,v,z){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=z.texture,x.transmissionSamplerSize.value.set(z.width,z.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,v){v.matcap&&(x.matcap.value=v.matcap)}function D(x,v){const z=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(z.matrixWorld),x.nearDistance.value=z.shadow.camera.near,x.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XA(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(z,O){const U=O.program;s.uniformBlockBinding(z,U)}function p(z,O){let U=l[z.id];U===void 0&&(b(z),U=_(z),l[z.id]=U,z.addEventListener("dispose",x));const B=O.program;s.updateUBOMapping(z,B);const V=e.render.frame;c[z.id]!==V&&(S(z),c[z.id]=V)}function _(z){const O=y();z.__bindingPointIndex=O;const U=r.createBuffer(),B=z.__size,V=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,B,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,U),U}function y(){for(let z=0;z<d;z++)if(h.indexOf(z)===-1)return h.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(z){const O=l[z.id],U=z.uniforms,B=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let V=0,G=U.length;V<G;V++){const Z=Array.isArray(U[V])?U[V]:[U[V]];for(let A=0,w=Z.length;A<w;A++){const H=Z[A];if(E(H,V,A,B)===!0){const te=H.__offset,ne=Array.isArray(H.value)?H.value:[H.value];let oe=0;for(let $=0;$<ne.length;$++){const I=ne[$],q=D(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,te+oe,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,oe),oe+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,te,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(z,O,U,B){const V=z.value,G=O+"_"+U;if(B[G]===void 0)return typeof V=="number"||typeof V=="boolean"?B[G]=V:B[G]=V.clone(),!0;{const Z=B[G];if(typeof V=="number"||typeof V=="boolean"){if(Z!==V)return B[G]=V,!0}else if(Z.equals(V)===!1)return Z.copy(V),!0}return!1}function b(z){const O=z.uniforms;let U=0;const B=16;for(let G=0,Z=O.length;G<Z;G++){const A=Array.isArray(O[G])?O[G]:[O[G]];for(let w=0,H=A.length;w<H;w++){const te=A[w],ne=Array.isArray(te.value)?te.value:[te.value];for(let oe=0,$=ne.length;oe<$;oe++){const I=ne[oe],q=D(I),X=U%B,ge=X%q.boundary,L=X+ge;U+=ge,L!==0&&B-L<q.storage&&(U+=B-L),te.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=U,U+=q.storage}}}const V=U%B;return V>0&&(U+=B-V),z.__size=U,z.__cache={},this}function D(z){const O={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(O.boundary=4,O.storage=4):z.isVector2?(O.boundary=8,O.storage=8):z.isVector3||z.isColor?(O.boundary=16,O.storage=12):z.isVector4?(O.boundary=16,O.storage=16):z.isMatrix3?(O.boundary=48,O.storage=48):z.isMatrix4?(O.boundary=64,O.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),O}function x(z){const O=z.target;O.removeEventListener("dispose",x);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function v(){for(const z in l)r.deleteBuffer(l[z]);h=[],l={},c={}}return{bind:g,update:p,dispose:v}}class WA{constructor(e={}){const{canvas:i=RM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const b=new Uint32Array(4),D=new Int32Array(4);let x=null,v=null;const z=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=Vn;let V=0,G=0,Z=null,A=-1,w=null;const H=new un,te=new un;let ne=null;const oe=new Pt(0);let $=0,I=i.width,q=i.height,X=1,ge=null,L=null;const Y=new un(0,0,I,q),ue=new un(0,0,I,q);let ve=!1;const pe=new Rv;let Fe=!1,ie=!1;const xe=new an,Re=new J,Xe=new un,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function We(){return Z===null?X:1}let T=s;function Ce(N,K){return i.getContext(N,K)}try{const N={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:g,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Gd}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",ke,!1),i.addEventListener("webglcontextcreationerror",we,!1),T===null){const K="webgl2";if(T=Ce(K,N),T===null)throw Ce(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Le,Ye,He,zt,Qe,ht,Ht,Zt,P,R,se,me,Me,fe,je,Oe,Je,Ie,Ae,Pe,tt,$e,ze,dt;function W(){Le=new nT(T),Le.init(),$e=new BA(T,Le),Ye=new Z1(T,Le,e,$e),He=new zA(T,Le),Ye.reversedDepthBuffer&&S&&He.buffers.depth.setReversed(!0),zt=new sT(T),Qe=new EA,ht=new IA(T,Le,He,Qe,Ye,$e,zt),Ht=new Q1(U),Zt=new tT(U),P=new fE(T),ze=new q1(T,P),R=new iT(T,P,zt,ze),se=new oT(T,R,P,zt),Ae=new rT(T,Ye,ht),Oe=new K1(Qe),me=new MA(U,Ht,Zt,Le,Ye,ze,Oe),Me=new kA(U,Qe),fe=new TA,je=new NA(Le),Ie=new W1(U,Ht,Zt,He,se,E,g),Je=new OA(U,se,Ye),dt=new XA(T,zt,Ye,He),Pe=new Y1(T,Le,zt),tt=new aT(T,Le,zt),zt.programs=me.programs,U.capabilities=Ye,U.extensions=Le,U.properties=Qe,U.renderLists=fe,U.shadowMap=Je,U.state=He,U.info=zt}W();const De=new VA(U,T);this.xr=De,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const N=Le.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Le.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(N){N!==void 0&&(X=N,this.setSize(I,q,!1))},this.getSize=function(N){return N.set(I,q)},this.setSize=function(N,K,he=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=N,q=K,i.width=Math.floor(N*X),i.height=Math.floor(K*X),he===!0&&(i.style.width=N+"px",i.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(I*X,q*X).floor()},this.setDrawingBufferSize=function(N,K,he){I=N,q=K,X=he,i.width=Math.floor(N*he),i.height=Math.floor(K*he),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(H)},this.getViewport=function(N){return N.copy(Y)},this.setViewport=function(N,K,he,de){N.isVector4?Y.set(N.x,N.y,N.z,N.w):Y.set(N,K,he,de),He.viewport(H.copy(Y).multiplyScalar(X).round())},this.getScissor=function(N){return N.copy(ue)},this.setScissor=function(N,K,he,de){N.isVector4?ue.set(N.x,N.y,N.z,N.w):ue.set(N,K,he,de),He.scissor(te.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(N){He.setScissorTest(ve=N)},this.setOpaqueSort=function(N){ge=N},this.setTransparentSort=function(N){L=N},this.getClearColor=function(N){return N.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(N=!0,K=!0,he=!0){let de=0;if(N){let ee=!1;if(Z!==null){const Ue=Z.texture.format;ee=Ue===qd||Ue===Wd||Ue===Xd}if(ee){const Ue=Z.texture.type,Be=Ue===pa||Ue===Cs||Ue===Wo||Ue===qo||Ue===jd||Ue===kd,Ze=Ie.getClearColor(),Ge=Ie.getClearAlpha(),st=Ze.r,lt=Ze.g,nt=Ze.b;Be?(b[0]=st,b[1]=lt,b[2]=nt,b[3]=Ge,T.clearBufferuiv(T.COLOR,0,b)):(D[0]=st,D[1]=lt,D[2]=nt,D[3]=Ge,T.clearBufferiv(T.COLOR,0,D))}else de|=T.COLOR_BUFFER_BIT}K&&(de|=T.DEPTH_BUFFER_BIT),he&&(de|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",ke,!1),i.removeEventListener("webglcontextcreationerror",we,!1),Ie.dispose(),fe.dispose(),je.dispose(),Qe.dispose(),Ht.dispose(),Zt.dispose(),se.dispose(),ze.dispose(),dt.dispose(),me.dispose(),De.dispose(),De.removeEventListener("sessionstart",gt),De.removeEventListener("sessionend",Tt),pt.stop()};function Ne(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const N=zt.autoReset,K=Je.enabled,he=Je.autoUpdate,de=Je.needsUpdate,ee=Je.type;W(),zt.autoReset=N,Je.enabled=K,Je.autoUpdate=he,Je.needsUpdate=de,Je.type=ee}function we(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ee(N){const K=N.target;K.removeEventListener("dispose",Ee),Ke(K)}function Ke(N){ut(N),Qe.remove(N)}function ut(N){const K=Qe.get(N).programs;K!==void 0&&(K.forEach(function(he){me.releaseProgram(he)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,he,de,ee,Ue){K===null&&(K=qe);const Be=ee.isMesh&&ee.matrixWorld.determinant()<0,Ze=ga(N,K,he,de,ee);He.setMaterial(de,Be);let Ge=he.index,st=1;if(de.wireframe===!0){if(Ge=R.getWireframeAttribute(he),Ge===void 0)return;st=2}const lt=he.drawRange,nt=he.attributes.position;let xt=lt.start*st,Ut=(lt.start+lt.count)*st;Ue!==null&&(xt=Math.max(xt,Ue.start*st),Ut=Math.min(Ut,(Ue.start+Ue.count)*st)),Ge!==null?(xt=Math.max(xt,0),Ut=Math.min(Ut,Ge.count)):nt!=null&&(xt=Math.max(xt,0),Ut=Math.min(Ut,nt.count));const $t=Ut-xt;if($t<0||$t===1/0)return;ze.setup(ee,de,Ze,he,Ge);let Gt,yt=Pe;if(Ge!==null&&(Gt=P.get(Ge),yt=tt,yt.setIndex(Gt)),ee.isMesh)de.wireframe===!0?(He.setLineWidth(de.wireframeLinewidth*We()),yt.setMode(T.LINES)):yt.setMode(T.TRIANGLES);else if(ee.isLine){let at=de.linewidth;at===void 0&&(at=1),He.setLineWidth(at*We()),ee.isLineSegments?yt.setMode(T.LINES):ee.isLineLoop?yt.setMode(T.LINE_LOOP):yt.setMode(T.LINE_STRIP)}else ee.isPoints?yt.setMode(T.POINTS):ee.isSprite&&yt.setMode(T.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))yt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const at=ee._multiDrawStarts,Qt=ee._multiDrawCounts,Ct=ee._multiDrawCount,wn=Ge?P.get(Ge).bytesPerElement:1,Mi=Qe.get(de).currentProgram.getUniforms();for(let In=0;In<Ct;In++)Mi.setValue(T,"_gl_DrawID",In),yt.render(at[In]/wn,Qt[In])}else if(ee.isInstancedMesh)yt.renderInstances(xt,$t,ee.count);else if(he.isInstancedBufferGeometry){const at=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Qt=Math.min(he.instanceCount,at);yt.renderInstances(xt,$t,Qt)}else yt.render(xt,$t)};function j(N,K,he){N.transparent===!0&&N.side===ua&&N.forceSinglePass===!1?(N.side=Jn,N.needsUpdate=!0,Ui(N,K,he),N.side=Qa,N.needsUpdate=!0,Ui(N,K,he),N.side=ua):Ui(N,K,he)}this.compile=function(N,K,he=null){he===null&&(he=N),v=je.get(he),v.init(K),O.push(v),he.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),N!==he&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(v.pushLight(ee),ee.castShadow&&v.pushShadow(ee))}),v.setupLights();const de=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let Be=0;Be<Ue.length;Be++){const Ze=Ue[Be];j(Ze,he,ee),de.add(Ze)}else j(Ue,he,ee),de.add(Ue)}),v=O.pop(),de},this.compileAsync=function(N,K,he=null){const de=this.compile(N,K,he);return new Promise(ee=>{function Ue(){if(de.forEach(function(Be){Qe.get(Be).currentProgram.isReady()&&de.delete(Be)}),de.size===0){ee(N);return}setTimeout(Ue,10)}Le.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let ye=null;function mt(N){ye&&ye(N)}function gt(){pt.stop()}function Tt(){pt.start()}const pt=new Ov;pt.setAnimationLoop(mt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(N){ye=N,De.setAnimationLoop(N),N===null?pt.stop():pt.start()},De.addEventListener("sessionstart",gt),De.addEventListener("sessionend",Tt),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(K),K=De.getCamera()),N.isScene===!0&&N.onBeforeRender(U,N,K,Z),v=je.get(N,O.length),v.init(K),O.push(v),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),pe.setFromProjectionMatrix(xe,Gi,K.reversedDepth),ie=this.localClippingEnabled,Fe=Oe.init(this.clippingPlanes,ie),x=fe.get(N,z.length),x.init(),z.push(x),De.enabled===!0&&De.isPresenting===!0){const Ue=U.xr.getDepthSensingMesh();Ue!==null&&Xn(Ue,K,-1/0,U.sortObjects)}Xn(N,K,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(ge,L),ot=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ot&&Ie.addToRenderList(x,N),this.info.render.frame++,Fe===!0&&Oe.beginShadows();const he=v.state.shadowsArray;Je.render(he,N,K),Fe===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=x.opaque,ee=x.transmissive;if(v.setupLights(),K.isArrayCamera){const Ue=K.cameras;if(ee.length>0)for(let Be=0,Ze=Ue.length;Be<Ze;Be++){const Ge=Ue[Be];zn(de,ee,N,Ge)}ot&&Ie.render(N);for(let Be=0,Ze=Ue.length;Be<Ze;Be++){const Ge=Ue[Be];Pn(x,N,Ge,Ge.viewport)}}else ee.length>0&&zn(de,ee,N,K),ot&&Ie.render(N),Pn(x,N,K);Z!==null&&G===0&&(ht.updateMultisampleRenderTarget(Z),ht.updateRenderTargetMipmap(Z)),N.isScene===!0&&N.onAfterRender(U,N,K),ze.resetDefaultState(),A=-1,w=null,O.pop(),O.length>0?(v=O[O.length-1],Fe===!0&&Oe.setGlobalState(U.clippingPlanes,v.state.camera)):v=null,z.pop(),z.length>0?x=z[z.length-1]:x=null};function Xn(N,K,he,de){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||pe.intersectsSprite(N)){de&&Xe.setFromMatrixPosition(N.matrixWorld).applyMatrix4(xe);const Be=se.update(N),Ze=N.material;Ze.visible&&x.push(N,Be,Ze,he,Xe.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||pe.intersectsObject(N))){const Be=se.update(N),Ze=N.material;if(de&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Xe.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Xe.copy(Be.boundingSphere.center)),Xe.applyMatrix4(N.matrixWorld).applyMatrix4(xe)),Array.isArray(Ze)){const Ge=Be.groups;for(let st=0,lt=Ge.length;st<lt;st++){const nt=Ge[st],xt=Ze[nt.materialIndex];xt&&xt.visible&&x.push(N,Be,xt,he,Xe.z,nt)}}else Ze.visible&&x.push(N,Be,Ze,he,Xe.z,null)}}const Ue=N.children;for(let Be=0,Ze=Ue.length;Be<Ze;Be++)Xn(Ue[Be],K,he,de)}function Pn(N,K,he,de){const ee=N.opaque,Ue=N.transmissive,Be=N.transparent;v.setupLightsView(he),Fe===!0&&Oe.setGlobalState(U.clippingPlanes,he),de&&He.viewport(H.copy(de)),ee.length>0&&Vi(ee,K,he),Ue.length>0&&Vi(Ue,K,he),Be.length>0&&Vi(Be,K,he),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function zn(N,K,he,de){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[de.id]===void 0&&(v.state.transmissionRenderTarget[de.id]=new Ds(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Jo:pa,minFilter:Rs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace}));const Ue=v.state.transmissionRenderTarget[de.id],Be=de.viewport||H;Ue.setSize(Be.z*U.transmissionResolutionScale,Be.w*U.transmissionResolutionScale);const Ze=U.getRenderTarget(),Ge=U.getActiveCubeFace(),st=U.getActiveMipmapLevel();U.setRenderTarget(Ue),U.getClearColor(oe),$=U.getClearAlpha(),$<1&&U.setClearColor(16777215,.5),U.clear(),ot&&Ie.render(he);const lt=U.toneMapping;U.toneMapping=Za;const nt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),v.setupLightsView(de),Fe===!0&&Oe.setGlobalState(U.clippingPlanes,de),Vi(N,he,de),ht.updateMultisampleRenderTarget(Ue),ht.updateRenderTargetMipmap(Ue),Le.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Ut=0,$t=K.length;Ut<$t;Ut++){const Gt=K[Ut],yt=Gt.object,at=Gt.geometry,Qt=Gt.material,Ct=Gt.group;if(Qt.side===ua&&yt.layers.test(de.layers)){const wn=Qt.side;Qt.side=Jn,Qt.needsUpdate=!0,$a(yt,he,de,at,Qt,Ct),Qt.side=wn,Qt.needsUpdate=!0,xt=!0}}xt===!0&&(ht.updateMultisampleRenderTarget(Ue),ht.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Ze,Ge,st),U.setClearColor(oe,$),nt!==void 0&&(de.viewport=nt),U.toneMapping=lt}function Vi(N,K,he){const de=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Ue=N.length;ee<Ue;ee++){const Be=N[ee],Ze=Be.object,Ge=Be.geometry,st=Be.group;let lt=Be.material;lt.allowOverride===!0&&de!==null&&(lt=de),Ze.layers.test(he.layers)&&$a(Ze,K,he,Ge,lt,st)}}function $a(N,K,he,de,ee,Ue){N.onBeforeRender(U,K,he,de,ee,Ue),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(U,K,he,de,N,Ue),ee.transparent===!0&&ee.side===ua&&ee.forceSinglePass===!1?(ee.side=Jn,ee.needsUpdate=!0,U.renderBufferDirect(he,K,de,ee,N,Ue),ee.side=Qa,ee.needsUpdate=!0,U.renderBufferDirect(he,K,de,ee,N,Ue),ee.side=ua):U.renderBufferDirect(he,K,de,ee,N,Ue),N.onAfterRender(U,K,he,de,ee,Ue)}function Ui(N,K,he){K.isScene!==!0&&(K=qe);const de=Qe.get(N),ee=v.state.lights,Ue=v.state.shadowsArray,Be=ee.state.version,Ze=me.getParameters(N,ee.state,Ue,K,he),Ge=me.getProgramCacheKey(Ze);let st=de.programs;de.environment=N.isMeshStandardMaterial?K.environment:null,de.fog=K.fog,de.envMap=(N.isMeshStandardMaterial?Zt:Ht).get(N.envMap||de.environment),de.envMapRotation=de.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",Ee),st=new Map,de.programs=st);let lt=st.get(Ge);if(lt!==void 0){if(de.currentProgram===lt&&de.lightsStateVersion===Be)return ji(N,Ze),lt}else Ze.uniforms=me.getUniforms(N),N.onBeforeCompile(Ze,U),lt=me.acquireProgram(Ze,Ge),st.set(Ge,lt),de.uniforms=Ze.uniforms;const nt=de.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=Oe.uniform),ji(N,Ze),de.needsLights=_a(N),de.lightsStateVersion=Be,de.needsLights&&(nt.ambientLightColor.value=ee.state.ambient,nt.lightProbe.value=ee.state.probe,nt.directionalLights.value=ee.state.directional,nt.directionalLightShadows.value=ee.state.directionalShadow,nt.spotLights.value=ee.state.spot,nt.spotLightShadows.value=ee.state.spotShadow,nt.rectAreaLights.value=ee.state.rectArea,nt.ltc_1.value=ee.state.rectAreaLTC1,nt.ltc_2.value=ee.state.rectAreaLTC2,nt.pointLights.value=ee.state.point,nt.pointLightShadows.value=ee.state.pointShadow,nt.hemisphereLights.value=ee.state.hemi,nt.directionalShadowMap.value=ee.state.directionalShadowMap,nt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,nt.spotShadowMap.value=ee.state.spotShadowMap,nt.spotLightMatrix.value=ee.state.spotLightMatrix,nt.spotLightMap.value=ee.state.spotLightMap,nt.pointShadowMap.value=ee.state.pointShadowMap,nt.pointShadowMatrix.value=ee.state.pointShadowMatrix),de.currentProgram=lt,de.uniformsList=null,lt}function Us(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=kc.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function ji(N,K){const he=Qe.get(N);he.outputColorSpace=K.outputColorSpace,he.batching=K.batching,he.batchingColor=K.batchingColor,he.instancing=K.instancing,he.instancingColor=K.instancingColor,he.instancingMorph=K.instancingMorph,he.skinning=K.skinning,he.morphTargets=K.morphTargets,he.morphNormals=K.morphNormals,he.morphColors=K.morphColors,he.morphTargetsCount=K.morphTargetsCount,he.numClippingPlanes=K.numClippingPlanes,he.numIntersection=K.numClipIntersection,he.vertexAlphas=K.vertexAlphas,he.vertexTangents=K.vertexTangents,he.toneMapping=K.toneMapping}function ga(N,K,he,de,ee){K.isScene!==!0&&(K=qe),ht.resetTextureUnits();const Ue=K.fog,Be=de.isMeshStandardMaterial?K.environment:null,Ze=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pr,Ge=(de.isMeshStandardMaterial?Zt:Ht).get(de.envMap||Be),st=de.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,lt=!!he.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),nt=!!he.morphAttributes.position,xt=!!he.morphAttributes.normal,Ut=!!he.morphAttributes.color;let $t=Za;de.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&($t=U.toneMapping);const Gt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,yt=Gt!==void 0?Gt.length:0,at=Qe.get(de),Qt=v.state.lights;if(Fe===!0&&(ie===!0||N!==w)){const sn=N===w&&de.id===A;Oe.setState(de,N,sn)}let Ct=!1;de.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Qt.state.version||at.outputColorSpace!==Ze||ee.isBatchedMesh&&at.batching===!1||!ee.isBatchedMesh&&at.batching===!0||ee.isBatchedMesh&&at.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&at.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&at.instancing===!1||!ee.isInstancedMesh&&at.instancing===!0||ee.isSkinnedMesh&&at.skinning===!1||!ee.isSkinnedMesh&&at.skinning===!0||ee.isInstancedMesh&&at.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&at.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&at.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&at.instancingMorph===!1&&ee.morphTexture!==null||at.envMap!==Ge||de.fog===!0&&at.fog!==Ue||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Oe.numPlanes||at.numIntersection!==Oe.numIntersection)||at.vertexAlphas!==st||at.vertexTangents!==lt||at.morphTargets!==nt||at.morphNormals!==xt||at.morphColors!==Ut||at.toneMapping!==$t||at.morphTargetsCount!==yt)&&(Ct=!0):(Ct=!0,at.__version=de.version);let wn=at.currentProgram;Ct===!0&&(wn=Ui(de,K,ee));let Mi=!1,In=!1,yn=!1;const qt=wn.getUniforms(),Bn=at.uniforms;if(He.useProgram(wn.program)&&(Mi=!0,In=!0,yn=!0),de.id!==A&&(A=de.id,In=!0),Mi||w!==N){He.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),qt.setValue(T,"projectionMatrix",N.projectionMatrix),qt.setValue(T,"viewMatrix",N.matrixWorldInverse);const Tn=qt.map.cameraPosition;Tn!==void 0&&Tn.setValue(T,Re.setFromMatrixPosition(N.matrixWorld)),Ye.logarithmicDepthBuffer&&qt.setValue(T,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&qt.setValue(T,"isOrthographic",N.isOrthographicCamera===!0),w!==N&&(w=N,In=!0,yn=!0)}if(ee.isSkinnedMesh){qt.setOptional(T,ee,"bindMatrix"),qt.setOptional(T,ee,"bindMatrixInverse");const sn=ee.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),qt.setValue(T,"boneTexture",sn.boneTexture,ht))}ee.isBatchedMesh&&(qt.setOptional(T,ee,"batchingTexture"),qt.setValue(T,"batchingTexture",ee._matricesTexture,ht),qt.setOptional(T,ee,"batchingIdTexture"),qt.setValue(T,"batchingIdTexture",ee._indirectTexture,ht),qt.setOptional(T,ee,"batchingColorTexture"),ee._colorsTexture!==null&&qt.setValue(T,"batchingColorTexture",ee._colorsTexture,ht));const Dn=he.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Ae.update(ee,he,wn),(In||at.receiveShadow!==ee.receiveShadow)&&(at.receiveShadow=ee.receiveShadow,qt.setValue(T,"receiveShadow",ee.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Bn.envMap.value=Ge,Bn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&K.environment!==null&&(Bn.envMapIntensity.value=K.environmentIntensity),In&&(qt.setValue(T,"toneMappingExposure",U.toneMappingExposure),at.needsLights&&es(Bn,yn),Ue&&de.fog===!0&&Me.refreshFogUniforms(Bn,Ue),Me.refreshMaterialUniforms(Bn,de,X,q,v.state.transmissionRenderTarget[N.id]),kc.upload(T,Us(at),Bn,ht)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(kc.upload(T,Us(at),Bn,ht),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&qt.setValue(T,"center",ee.center),qt.setValue(T,"modelViewMatrix",ee.modelViewMatrix),qt.setValue(T,"normalMatrix",ee.normalMatrix),qt.setValue(T,"modelMatrix",ee.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const sn=de.uniformsGroups;for(let Tn=0,Ls=sn.length;Tn<Ls;Tn++){const Wn=sn[Tn];dt.update(Wn,wn),dt.bind(Wn,wn)}}return wn}function es(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function _a(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(N,K,he){const de=Qe.get(N);de.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),Qe.get(N.texture).__webglTexture=K,Qe.get(N.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:he,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,K){const he=Qe.get(N);he.__webglFramebuffer=K,he.__useDefaultFramebuffer=K===void 0};const fn=T.createFramebuffer();this.setRenderTarget=function(N,K=0,he=0){Z=N,V=K,G=he;let de=!0,ee=null,Ue=!1,Be=!1;if(N){const Ge=Qe.get(N);if(Ge.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(T.FRAMEBUFFER,null),de=!1;else if(Ge.__webglFramebuffer===void 0)ht.setupRenderTarget(N);else if(Ge.__hasExternalTextures)ht.rebindTextures(N,Qe.get(N.texture).__webglTexture,Qe.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const nt=N.depthTexture;if(Ge.__boundDepthTexture!==nt){if(nt!==null&&Qe.has(nt)&&(N.width!==nt.image.width||N.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(N)}}const st=N.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Be=!0);const lt=Qe.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?ee=lt[K][he]:ee=lt[K],Ue=!0):N.samples>0&&ht.useMultisampledRTT(N)===!1?ee=Qe.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?ee=lt[he]:ee=lt,H.copy(N.viewport),te.copy(N.scissor),ne=N.scissorTest}else H.copy(Y).multiplyScalar(X).floor(),te.copy(ue).multiplyScalar(X).floor(),ne=ve;if(he!==0&&(ee=fn),He.bindFramebuffer(T.FRAMEBUFFER,ee)&&de&&He.drawBuffers(N,ee),He.viewport(H),He.scissor(te),He.setScissorTest(ne),Ue){const Ge=Qe.get(N.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ge.__webglTexture,he)}else if(Be){const Ge=K;for(let st=0;st<N.textures.length;st++){const lt=Qe.get(N.textures[st]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+st,lt.__webglTexture,he,Ge)}}else if(N!==null&&he!==0){const Ge=Qe.get(N.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Ge.__webglTexture,he)}A=-1},this.readRenderTargetPixels=function(N,K,he,de,ee,Ue,Be,Ze=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){He.bindFramebuffer(T.FRAMEBUFFER,Ge);try{const st=N.textures[Ze],lt=st.format,nt=st.type;if(!Ye.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-de&&he>=0&&he<=N.height-ee&&(N.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ze),T.readPixels(K,he,de,ee,$e.convert(lt),$e.convert(nt),Ue))}finally{const st=Z!==null?Qe.get(Z).__webglFramebuffer:null;He.bindFramebuffer(T.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,K,he,de,ee,Ue,Be,Ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Qe.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge)if(K>=0&&K<=N.width-de&&he>=0&&he<=N.height-ee){He.bindFramebuffer(T.FRAMEBUFFER,Ge);const st=N.textures[Ze],lt=st.format,nt=st.type;if(!Ye.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.bufferData(T.PIXEL_PACK_BUFFER,Ue.byteLength,T.STREAM_READ),N.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Ze),T.readPixels(K,he,de,ee,$e.convert(lt),$e.convert(nt),0);const Ut=Z!==null?Qe.get(Z).__webglFramebuffer:null;He.bindFramebuffer(T.FRAMEBUFFER,Ut);const $t=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await CM(T,$t,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,xt),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Ue),T.deleteBuffer(xt),T.deleteSync($t),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,K=null,he=0){const de=Math.pow(2,-he),ee=Math.floor(N.image.width*de),Ue=Math.floor(N.image.height*de),Be=K!==null?K.x:0,Ze=K!==null?K.y:0;ht.setTexture2D(N,0),T.copyTexSubImage2D(T.TEXTURE_2D,he,0,0,Be,Ze,ee,Ue),He.unbindTexture()};const nl=T.createFramebuffer(),il=T.createFramebuffer();this.copyTextureToTexture=function(N,K,he=null,de=null,ee=0,Ue=null){Ue===null&&(ee!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=ee,ee=0):Ue=0);let Be,Ze,Ge,st,lt,nt,xt,Ut,$t;const Gt=N.isCompressedTexture?N.mipmaps[Ue]:N.image;if(he!==null)Be=he.max.x-he.min.x,Ze=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,st=he.min.x,lt=he.min.y,nt=he.isBox3?he.min.z:0;else{const Dn=Math.pow(2,-ee);Be=Math.floor(Gt.width*Dn),Ze=Math.floor(Gt.height*Dn),N.isDataArrayTexture?Ge=Gt.depth:N.isData3DTexture?Ge=Math.floor(Gt.depth*Dn):Ge=1,st=0,lt=0,nt=0}de!==null?(xt=de.x,Ut=de.y,$t=de.z):(xt=0,Ut=0,$t=0);const yt=$e.convert(K.format),at=$e.convert(K.type);let Qt;K.isData3DTexture?(ht.setTexture3D(K,0),Qt=T.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ht.setTexture2DArray(K,0),Qt=T.TEXTURE_2D_ARRAY):(ht.setTexture2D(K,0),Qt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,K.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,K.unpackAlignment);const Ct=T.getParameter(T.UNPACK_ROW_LENGTH),wn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Mi=T.getParameter(T.UNPACK_SKIP_PIXELS),In=T.getParameter(T.UNPACK_SKIP_ROWS),yn=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Gt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Gt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,st),T.pixelStorei(T.UNPACK_SKIP_ROWS,lt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,nt);const qt=N.isDataArrayTexture||N.isData3DTexture,Bn=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const Dn=Qe.get(N),sn=Qe.get(K),Tn=Qe.get(Dn.__renderTarget),Ls=Qe.get(sn.__renderTarget);He.bindFramebuffer(T.READ_FRAMEBUFFER,Tn.__webglFramebuffer),He.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Wn=0;Wn<Ge;Wn++)qt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Qe.get(N).__webglTexture,ee,nt+Wn),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Qe.get(K).__webglTexture,Ue,$t+Wn)),T.blitFramebuffer(st,lt,Be,Ze,xt,Ut,Be,Ze,T.DEPTH_BUFFER_BIT,T.NEAREST);He.bindFramebuffer(T.READ_FRAMEBUFFER,null),He.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||Qe.has(N)){const Dn=Qe.get(N),sn=Qe.get(K);He.bindFramebuffer(T.READ_FRAMEBUFFER,nl),He.bindFramebuffer(T.DRAW_FRAMEBUFFER,il);for(let Tn=0;Tn<Ge;Tn++)qt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Dn.__webglTexture,ee,nt+Tn):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Dn.__webglTexture,ee),Bn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,sn.__webglTexture,Ue,$t+Tn):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,sn.__webglTexture,Ue),ee!==0?T.blitFramebuffer(st,lt,Be,Ze,xt,Ut,Be,Ze,T.COLOR_BUFFER_BIT,T.NEAREST):Bn?T.copyTexSubImage3D(Qt,Ue,xt,Ut,$t+Tn,st,lt,Be,Ze):T.copyTexSubImage2D(Qt,Ue,xt,Ut,st,lt,Be,Ze);He.bindFramebuffer(T.READ_FRAMEBUFFER,null),He.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Bn?N.isDataTexture||N.isData3DTexture?T.texSubImage3D(Qt,Ue,xt,Ut,$t,Be,Ze,Ge,yt,at,Gt.data):K.isCompressedArrayTexture?T.compressedTexSubImage3D(Qt,Ue,xt,Ut,$t,Be,Ze,Ge,yt,Gt.data):T.texSubImage3D(Qt,Ue,xt,Ut,$t,Be,Ze,Ge,yt,at,Gt):N.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Ue,xt,Ut,Be,Ze,yt,at,Gt.data):N.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Ue,xt,Ut,Gt.width,Gt.height,yt,Gt.data):T.texSubImage2D(T.TEXTURE_2D,Ue,xt,Ut,Be,Ze,yt,at,Gt);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,wn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Mi),T.pixelStorei(T.UNPACK_SKIP_ROWS,In),T.pixelStorei(T.UNPACK_SKIP_IMAGES,yn),Ue===0&&K.generateMipmaps&&T.generateMipmap(Qt),He.unbindTexture()},this.initRenderTarget=function(N){Qe.get(N).__webglFramebuffer===void 0&&ht.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ht.setTextureCube(N,0):N.isData3DTexture?ht.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ht.setTexture2DArray(N,0):ht.setTexture2D(N,0),He.unbindTexture()},this.resetState=function(){V=0,G=0,Z=null,He.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const K0={type:"change"},$d={type:"start"},Fv={type:"end"},Pc=new el,Q0=new Wa,qA=Math.cos(70*vv.DEG2RAD),_n=new J,Qn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class YA extends cE{constructor(e,i=null){super(e,i),this.state=Wt.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ws,this._lastTargetPosition=new J,this._quat=new ws().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new b0,this._sphericalDelta=new b0,this._scale=1,this._panOffset=new J,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new J,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KA.bind(this),this._onPointerDown=ZA.bind(this),this._onPointerUp=QA.bind(this),this._onContextMenu=aR.bind(this),this._onMouseWheel=eR.bind(this),this._onKeyDown=tR.bind(this),this._onTouchStart=nR.bind(this),this._onTouchMove=iR.bind(this),this._onMouseDown=JA.bind(this),this._onMouseMove=$A.bind(this),this._interceptControlDown=sR.bind(this),this._interceptControlUp=rR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(K0),this.update(),this.state=Wt.NONE}update(e=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Qn:s>Math.PI&&(s-=Qn),l<-Math.PI?l+=Qn:l>Math.PI&&(l-=Qn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=_n.length();h=this._clampDistance(d*this._scale);const g=d-h;this.object.position.addScaledVector(this._dollyDirection,g),this.object.updateMatrixWorld(),c=!!g}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const g=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=g!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Pc.origin.copy(this.object.position),Pc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pc.direction))<qA?this.object.lookAt(this.target):(Q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pc.intersectPlane(Q0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(K0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-e),this._panOffset.add(_n)}_panUp(e,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(e),this._panOffset.add(_n)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new Mt,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function ZA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function KA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function QA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fv),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function JA(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Wt.DOLLY;break;case wr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Wt.ROTATE}break;case wr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent($d)}function $A(r){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function eR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(r.preventDefault(),this.dispatchEvent($d),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Fv))}function tR(r){this.enabled!==!1&&this._handleKeyDown(r)}function nR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Wt.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Wt.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent($d)}function iR(r){switch(this._trackPointer(r),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Wt.NONE}}function aR(r){this.enabled!==!1&&r.preventDefault()}function sR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bd(r,e){return[0,1,2].map(i=>-r.reduce((s,l,c)=>s+l[i]*e[c],0))}function oR(r,e){if(!r.R||!r.t)return[];const{K:i,R:s,t:l,width:c,height:h}=r,d=Bd(s,l);return[[0,0],[c,0],[c,h],[0,h]].map(([g,p])=>{const _=1/i[2][2],y=(p-i[1][2]*_)/i[1][1],S=(g-i[0][1]*y-i[0][2]*_)/i[0][0],E=[S,y,_];return d.map((b,D)=>b+e*s.reduce((x,v,z)=>x+v[D]*E[z],0))})}function lR(r,e,i,s,l){const c=[];for(let h=0;h<i;h++){const d=r[h];(s<=0||d!=null&&d<=s)&&(e[h]??0)>=l&&c.push(h)}return c}function cR(r,e,i,s){if(!r.registered||!r.R||!r.t)return null;const{R:l,t:c,K:h,height:d}=r,g=new ci,p=[0,1,2].map(y=>-l.reduce((S,E,b)=>S+E[y]*c[b],0)),_=new an().set(l[0][0],-l[1][0],-l[2][0],p[0],l[0][1],-l[1][1],-l[2][1],p[1],l[0][2],-l[1][2],-l[2][2],p[2],0,0,0,1);return g.position.fromArray(p),g.quaternion.setFromRotationMatrix(_),g.up.set(-l[1][0],-l[1][1],-l[1][2]),g.near=i,g.far=s,g.aspect=e,g.fov=vv.radToDeg(2*Math.atan(d*h[2][2]/(2*h[1][1]))),g.updateProjectionMatrix(),g.updateMatrixWorld(!0),g}const xi=r=>r?.pipeline==="nerf"||r?.pipeline==="3dgs",Hv=(r,e="nerf")=>r.filter(i=>!xi(i)&&["completed","imported"].includes(i.status)&&(i.registered_images??0)>=2&&(e==="nerf"||(i.point_count??0)>0));function uR(r,e,i,s,l,c){if(e==="dataset"){if(r!=="nerf")throw new Error("3DGS 需要先构建或加载点云，不能直接使用照片数据集。");const d=c.find(g=>g.id===i);if(!d||(d.pose_count??0)<2)throw new Error("照片缺少至少两台真实相机位姿。请先估计或导入位姿；NeRF 不要求点云。");return{dataset_id:d.id}}const h=Hv(l,r).find(d=>d.id===i);if(!h)throw new Error(r==="nerf"?"请选择至少含两台真实相机位姿的模型，或导入带位姿的照片数据集。":"请选择含点云与至少两台相机位姿的模型，或先构建点云。");if(!h.images_available){const d=c.find(g=>g.id===s);if(!d||d.image_count<2)throw new Error("此模型缺少原图。请关联与模型图像 ID、文件名及内参一致的照片数据集。");return{source_run_id:h.id,photo_dataset_id:d.id}}return{source_run_id:h.id}}function kh(r){return[r.iterations,r.image_downscale,r.rays_per_batch,r.samples_per_ray,r.holdout_every,r.preview_every,r.nerf.hidden_dim,r.gaussian.max_gaussians].some(i=>!Number.isInteger(i)||i<=0)?"迭代数、降采样倍数、批大小、采样数和网络宽度等必须为正整数。":[r.seed,r.nerf.levels_xyz,r.nerf.levels_dir,r.gaussian.densify_every].some(i=>!Number.isInteger(i)||i<0)?"种子、编码层数和增密间隔必须为非负整数。":!Number.isFinite(r.learning_rate)||r.learning_rate<=0?"学习率必须为正数。":!Number.isFinite(r.near)||!Number.isFinite(r.far)||r.near<0||r.far<=r.near?"采样范围需要满足 0 ≤ near < far（归一化场景单位）。":!Number.isFinite(r.gaussian.initial_scale)||r.gaussian.initial_scale<=0?"初始高斯尺度必须为正数。":!Number.isFinite(r.gaussian.initial_opacity)||r.gaussian.initial_opacity<=0||r.gaussian.initial_opacity>=1?"初始不透明度必须严格位于 0 与 1 之间。":null}function fR(r,e=256){if(!Number.isInteger(e)||e<=0||!Number.isFinite(r.aspect)||r.aspect<=0)throw new Error("输出大小与相机宽高比无效。");r.updateProjectionMatrix(),r.updateMatrixWorld(!0);const i=r.aspect>=1?e:Math.max(1,Math.round(e*r.aspect)),s=r.aspect>=1?Math.max(1,Math.round(e/r.aspect)):e,l=r.matrixWorldInverse.elements,c=r.projectionMatrix.elements;return{R:[[l[0],l[4],l[8]],[-l[1],-l[5],-l[9]],[-l[2],-l[6],-l[10]]],t:[l[12],-l[13],-l[14]],K:[[i*c[0]/2,0,(i*(1-c[8])-1)/2],[0,s*c[5]/2,(s*(1+c[9])-1)/2],[0,0,1]],width:i,height:s}}function hR(r){const e=JSON.parse(r),i=s=>Array.isArray(s)&&s.length===3&&s.every(l=>Array.isArray(l)&&l.length===3&&l.every(c=>typeof c=="number"&&Number.isFinite(c)));if(!i(e.K)||!i(e.R)||!Array.isArray(e.t)||e.t.length!==3||e.t.some(s=>typeof s!="number"||!Number.isFinite(s)))throw new Error("K、R 需要为有限的 3×3 数组，t 需要为长度 3 的有限数组。");if(![e.width,e.height].every(s=>Number.isInteger(s)&&s>0))throw new Error("width、height 需要为正整数。");return e}function zc(r){for(const e of[...r.children])r.remove(e),e.traverse(i=>{(i instanceof yi||i instanceof Nv||i instanceof Cv)&&(i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(l=>l.dispose()))})}function dR({scene:r,runId:e,options:i,setOptions:s,selection:l,onSelect:c,cameraViewRequest:h,onCameraViewChange:d,onRenderCamera:g,renderBusy:p}){const _=Te.useRef(null),y=Te.useRef(null),S=Te.useRef(c),E=Te.useRef(d),b=Te.useRef(""),[D,x]=Te.useState(""),[v,z]=Te.useState(!1),[O,U]=Te.useState(0),[B,V]=Te.useState("");S.current=c,E.current=d,Te.useEffect(()=>{if(!_.current)return;const A=_.current;let w=0,H=!1;const te=()=>{!H&&!document.hidden&&!w&&(w=requestAnimationFrame(ot))};let ne;try{ne=new WA({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})}catch(We){x(`无法创建 WebGL 视图：${String(We)}`);return}ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),ne.outputColorSpace=Vn,ne.setClearColor(1120027,0),ne.domElement.setAttribute("aria-label","可拖拽的三维重建视图"),ne.domElement.setAttribute("data-testid","scene-canvas"),A.appendChild(ne.domElement);const oe=new $M,$=new ci(45,1,.001,1e6);$.up.set(0,-1,0),$.position.set(3,-2,-4);const I=()=>{const We=new YA($,ne.domElement);return We.enableDamping=!0,We.dampingFactor=.12,We.screenSpacePanning=!0,We.minDistance=1e-4,We.maxDistance=1e8,We.addEventListener("change",te),We};let q=I();const X=new Rr,ge=new Rr;oe.add(X,ge);const L=We=>{const T=$.position.clone();q.dispose(),q=I(),$.position.copy(T),q.target.copy(We),q.update(),ue.controls=q,te()},Y=()=>{const We=A.clientWidth,T=A.clientHeight;$.aspect=We/Math.max(T,1),$.updateProjectionMatrix()},ue={renderer:ne,scene:oe,camera:$,controls:q,content:X,highlight:ge,bounds:new Ka(new J(-1,-1,-1),new J(1,1,1)),radius:1,pickables:[],pointIndices:[],invalidate:te,enterCamera:We=>{const T=cR(We,A.clientWidth/Math.max(A.clientHeight,1),Math.max(ue.radius*1e-6,1e-8),Math.max(ue.radius*1e4,1e3));if(!T)return;$.copy(T);const Ce=$.getWorldDirection(new J),Le=Math.max(ue.bounds.getCenter(new J).sub($.position).dot(Ce),ue.radius*.01);L($.position.clone().addScaledVector(Ce,Le)),E.current(We.image_id)},fit:We=>{const T=We&&!We.isEmpty()?We:ue.bounds,Ce=T.getCenter(new J),Le=Math.max(T.getSize(new J).length()/2,.001),Ye=new J(-.5,-.35,-1).normalize();$.up.set(0,-1,0),$.fov=45,$.zoom=1,$.position.copy(Ce).addScaledVector(Ye,Le*3.1),$.near=Math.max(Le/1e4,1e-6),$.far=Math.max(Le*1e4,1e3),$.updateProjectionMatrix(),L(Ce),E.current(null)}};y.current=ue;const ve=new oE,pe=new Mt;let Fe=[0,0];const ie=We=>{const T=ne.domElement.getBoundingClientRect(),Ce={x:0,y:0,width:T.width,height:T.height},Le=We.clientX-T.left-Ce.x,Ye=We.clientY-T.top-Ce.y;return Le<0||Ye<0||Le>Ce.width||Ye>Ce.height?[]:(pe.set(Le/Ce.width*2-1,-(Ye/Ce.height)*2+1),ve.setFromCamera(pe,$),ve.params.Points.threshold=Math.max($.position.distanceTo(q.target)*(1/$.projectionMatrix.elements[5])*12/Math.max(Ce.height,1),1e-8),ve.intersectObjects(ue.pickables,!1).filter(He=>He.object.visible))},xe=We=>{Fe=[We.clientX,We.clientY]},Re=We=>{if(We.button!==0||Math.hypot(We.clientX-Fe[0],We.clientY-Fe[1])>5)return;const T=ie(We),Ce=T.find(Ye=>Ye.object.userData.kind==="camera"),Le=Ce??T[0];if(!Le){S.current(null);return}Le.object.userData.kind==="camera"?S.current({kind:"camera",id:Le.object.userData.id}):Le.index!=null&&S.current({kind:"point",id:Le.object.userData.ids[Le.index]})},Xe=We=>{if(We.buttons)return;const T=ie(We)[0];V(T?T.object.userData.kind==="camera"?`相机 #${T.object.userData.id}`:`三维点 #${T.object.userData.ids[T.index]}`:""),ne.domElement.style.cursor=T?"pointer":"grab"};ne.domElement.addEventListener("pointerdown",xe),ne.domElement.addEventListener("pointerup",Re),ne.domElement.addEventListener("pointermove",Xe);const qe=new ResizeObserver(()=>{const We=A.clientWidth,T=A.clientHeight;!We||!T||(ne.setSize(We,T),Y(),te())});qe.observe(A);function ot(){if(w=0,!(H||document.hidden)){q.update();for(const We of X.children)We.userData.cameraCenter&&(We.visible=$.position.distanceToSquared(We.userData.cameraCenter)>(ue.radius*.02)**2);ne.setViewport(0,0,A.clientWidth,A.clientHeight),ne.render(oe,$)}}return document.addEventListener("visibilitychange",te),te(),()=>{H=!0,cancelAnimationFrame(w),document.removeEventListener("visibilitychange",te),qe.disconnect(),q.dispose(),ne.domElement.removeEventListener("pointerdown",xe),ne.domElement.removeEventListener("pointerup",Re),ne.domElement.removeEventListener("pointermove",Xe),zc(X),zc(ge),ne.dispose(),A.removeChild(ne.domElement),y.current=null}},[]),Te.useEffect(()=>{const A=y.current;if(!A)return;if(zc(A.content),A.pickables=[],!r){E.current(null),U(0),A.invalidate();return}const w=r.points,H=new Ka;for(let oe=0;oe<w.positions.length;oe+=3)H.expandByPoint(new J(w.positions[oe],w.positions[oe+1],w.positions[oe+2]));for(const oe of r.cameras)oe.registered&&oe.R&&oe.t&&H.expandByPoint(new J(...Bd(oe.R,oe.t)));H.isEmpty()&&H.set(new J(-1,-1,-1),new J(1,1,1)),A.bounds.copy(H),A.radius=Math.max(H.getSize(new J).length()/2,.001);const te=A.radius,ne=lR(w.errors,w.track_lengths,w.ids.length,i.maxError,i.minTrack);if(A.pointIndices=ne,U(i.points?ne.length:0),i.points&&ne.length){const oe=new Float32Array(ne.length*3),$=new Float32Array(ne.length*3),I=new Pt,q=Math.max(r.summary.p95_reprojection_error_px??1,.01),X=w.track_lengths.reduce((Y,ue)=>Math.max(Y,ue),2);ne.forEach((Y,ue)=>{if(oe.set(w.positions.slice(Y*3,Y*3+3),ue*3),i.color==="rgb")I.setRGB((w.colors[Y*3]??180)/255,(w.colors[Y*3+1]??180)/255,(w.colors[Y*3+2]??180)/255,Vn);else{const ve=i.color==="error"?Math.min((w.errors[Y]??q)/q,1):Math.min(Math.log(w.track_lengths[Y]??1)/Math.log(X),1);I.setHSL(i.color==="error"?(1-ve)*.48:.55-ve*.4,.84,.55,Vn)}$.set([I.r,I.g,I.b],ue*3)});const ge=new ui;ge.setAttribute("position",new Si(oe,3)),ge.setAttribute("color",new Si($,3));const L=new Nv(ge,new Dv({size:i.pointSize,vertexColors:!0,sizeAttenuation:!1,transparent:!0,opacity:.96}));L.userData={kind:"points",ids:ne.map(Y=>w.ids[Y])},A.content.add(L),A.pickables.push(L)}if(i.cameras)for(const oe of r.cameras){if(!oe.registered||!oe.R||!oe.t)continue;const $=Bd(oe.R,oe.t),I=oR(oe,te*.09*i.cameraScale),q=[];I.forEach((ue,ve)=>q.push(...$,...ue,...ue,...I[(ve+1)%4]));const X=new ui;X.setAttribute("position",new kn(q,3));const ge=l?.kind==="camera"&&l.id===oe.image_id,L=new wv(X,new Qd({color:ge?16760681:5684173,transparent:!0,opacity:ge?1:.6}));L.userData.cameraCenter=new J().fromArray($),A.content.add(L);const Y=new yi(new tu(te*.0075,10,8),new Jc({color:ge?16760681:8118495}));Y.position.fromArray($),Y.userData={kind:"camera",id:oe.image_id,cameraCenter:new J().fromArray($)},A.content.add(Y),A.pickables.push(Y)}if(i.axes){const oe=new lE(te*.4);A.content.add(oe)}b.current!==e&&(A.fit(),b.current=e),A.invalidate()},[r,e,i,l]),Te.useEffect(()=>{const A=r?.cameras.find(w=>w.image_id===h?.imageId);A&&y.current?.enterCamera(A)},[h]),Te.useEffect(()=>{const A=y.current;if(!A||(zc(A.highlight),A.invalidate(),!r||l?.kind!=="point"))return;const w=r.points.ids.indexOf(l.id);if(w<0)return;const H=new yi(new tu(A.radius*.009,12,10),new Jc({color:16762744,depthTest:!1}));H.position.fromArray(r.points.positions,w*3),H.renderOrder=10,A.highlight.add(H)},[l,r]);const G=(A,w)=>s({...i,[A]:w}),Z=r?.snapshots.find(A=>A.id===r.snapshot_id);return m.jsxs("div",{className:"viewport",children:[m.jsxs("div",{className:"view-heading",children:[m.jsxs("span",{className:"view-title",children:[m.jsx(k_,{size:14})," 三维重建"]}),m.jsxs("span",{className:"view-context",children:[Z?sv(Z.label):"模型空间"," ",m.jsx("span",{className:"live-dot"})," ","真实算法输出"]})]}),m.jsx("div",{ref:_,className:"canvas-host"}),(!r||r.points.ids.length===0&&!r.cameras.some(A=>A.registered))&&m.jsxs("div",{className:"empty-scene",children:[m.jsx("div",{className:"empty-orbit",children:m.jsx(k_,{size:32})}),m.jsx("h3",{children:r?"等待三维点生成":"从照片，进入三维空间"}),m.jsx("p",{children:r?"初始化成功后，点云和相机将出现在这里。":"选择一个已有结果，或导入数据开始重建。"}),m.jsx("span",{children:"只呈现真实结果 · 不生成示意点云"})]}),D&&m.jsx("div",{className:"view-error",children:D}),m.jsxs("div",{className:"view-toolbar",children:[g&&m.jsxs("button",{title:"以训练模型渲染当前自由视角（长边 256 px）","aria-label":"渲染当前自由视角",disabled:p||!r,onClick:()=>{y.current&&g(fR(y.current.camera))},children:[m.jsx(Bi,{size:17}),"渲染当前视角"]}),m.jsx("button",{title:"适配完整场景","aria-label":"适配完整场景",onClick:()=>y.current?.fit(),children:m.jsx(nv,{size:17})}),m.jsx("button",{title:"聚焦点云（仅调整观察视角）","aria-label":"聚焦点云",disabled:!r?.points.ids.length,onClick:()=>{if(!r)return;const A=new Ka,w=r.points.positions;for(let H=0;H<w.length;H+=3)A.expandByPoint(new J(w[H],w[H+1],w[H+2]));y.current?.fit(A)},children:m.jsx(_S,{size:17})}),m.jsx("button",{title:"重置视角","aria-label":"重置视角",onClick:()=>y.current?.fit(),children:m.jsx(Hd,{size:16})}),m.jsx("span",{className:"toolbar-divider"}),m.jsx("button",{className:i.cameras?"active":"",title:"相机显隐","aria-label":"相机显隐","aria-pressed":i.cameras,onClick:()=>G("cameras",!i.cameras),children:m.jsx(Bi,{size:17})}),m.jsx("button",{className:i.axes?"active":"",title:"坐标轴显隐","aria-label":"坐标轴显隐","aria-pressed":i.axes,onClick:()=>G("axes",!i.axes),children:m.jsx(sS,{size:17})}),m.jsx("button",{className:v?"active":"",title:"显示设置","aria-label":"显示设置",onClick:()=>z(!v),children:m.jsx(xS,{size:17})}),m.jsx("span",{className:"toolbar-divider"}),m.jsx("button",{title:"保存视图 PNG","aria-label":"保存视图 PNG",disabled:!r,onClick:()=>{const A=y.current;if(!A)return;A.renderer.render(A.scene,A.camera);const w=document.createElement("a");w.href=A.renderer.domElement.toDataURL("image/png"),w.download="minicolmap-view.png",w.click()},children:m.jsx(hS,{size:17})}),m.jsx("button",{title:"全屏显示","aria-label":"全屏显示",onClick:()=>{const A=_.current?.parentElement;document.fullscreenElement?document.exitFullscreen():A&&A.requestFullscreen()},children:m.jsx(lS,{size:16})})]}),v&&m.jsxs("div",{className:"view-settings panel-popover",children:[m.jsxs("div",{className:"popover-title",children:["显示设置 ",m.jsx("span",{children:"仅影响当前视图"})]}),m.jsxs("label",{className:"switch-row",children:["显示点云",m.jsx("input",{type:"checkbox",checked:i.points,onChange:A=>G("points",A.target.checked)})]}),m.jsxs("label",{children:["点云着色",m.jsxs("select",{"aria-label":"点云着色",value:i.color,onChange:A=>G("color",A.target.value),children:[m.jsx("option",{value:"rgb",children:"原始 RGB"}),m.jsx("option",{value:"error",children:"重投影误差"}),m.jsx("option",{value:"track",children:"轨迹长度"})]})]}),m.jsxs("label",{children:["点大小 ",m.jsxs("span",{children:[i.pointSize," px"]}),m.jsx("input",{type:"range",min:"1",max:"9",step:".5",value:i.pointSize,onChange:A=>G("pointSize",+A.target.value)})]}),m.jsxs("label",{children:["相机视锥 ",m.jsxs("span",{children:[i.cameraScale.toFixed(1)," ×"]}),m.jsx("input",{type:"range",min:".2",max:"3",step:".1",value:i.cameraScale,onChange:A=>G("cameraScale",+A.target.value)})]}),m.jsxs("div",{className:"two-inputs",children:[m.jsxs("label",{children:["最大误差 / px",m.jsx("input",{type:"number",min:"0",step:".1",value:i.maxError,onChange:A=>G("maxError",+A.target.value)}),m.jsx("small",{children:"0 = 不筛选"})]}),m.jsxs("label",{children:["最短轨迹",m.jsx("input",{type:"number",min:"0",step:"1",value:i.minTrack,onChange:A=>G("minTrack",+A.target.value)}),m.jsx("small",{children:"观测图像数量"})]})]})]}),r&&m.jsxs("div",{className:"scene-stats",children:[m.jsxs("div",{children:[m.jsx("strong",{children:Jt(O,0)}),m.jsxs("span",{children:["显示点 / ",Jt(r.points.ids.length,0)]})]}),m.jsxs("div",{children:[m.jsxs("strong",{children:[r.summary.registered_images,m.jsxs("i",{children:[" / ",r.summary.image_count]})]}),m.jsx("span",{children:"已注册相机"})]}),m.jsxs("div",{children:[m.jsxs("strong",{children:[Jt(r.summary.mean_reprojection_error_px),m.jsx("i",{children:" px"})]}),m.jsx("span",{children:"平均重投影误差"})]})]}),r&&i.color!=="rgb"&&m.jsxs("div",{className:`color-legend ${i.color}`,children:[m.jsx("span",{children:i.color==="error"?"重投影误差 / px":"轨迹长度 / 张"}),m.jsx("i",{}),m.jsxs("div",{children:[m.jsx("b",{children:i.color==="error"?"0":"1"}),m.jsxs("b",{children:[i.color==="error"?Jt(r.summary.p95_reprojection_error_px):r.points.track_lengths.reduce((A,w)=>Math.max(A,w),0),i.color==="error"?"+":""]})]})]}),m.jsxs("div",{className:"view-footer",children:[m.jsxs("span",{children:[m.jsx(dS,{size:12})," ",B||"左键旋转 · 右键平移 · 滚轮缩放"]}),m.jsxs("span",{children:["坐标单位：源场景尺度 ",m.jsx("b",{className:"axis-x",children:"X"}),m.jsx("b",{className:"axis-y",children:"Y"}),m.jsx("b",{className:"axis-z",children:"Z"})]})]})]})}const pR=[{key:"features",name:"特征提取",subtitle:"SIFT 与描述子匹配",fields:[{key:"max_features",label:"最大特征数",unit:"点 / 图",help:"每张图像最多保留的 SIFT 特征数。",step:100,min:2},{key:"ratio",label:"匹配距离比",help:"Lowe 比值阈值；越小筛选越严格。",step:.01,min:.01}]},{key:"geometry",name:"几何验证",subtitle:"RANSAC 与初始模型",fields:[{key:"threshold_px",label:"Sampson 阈值",unit:"px",help:"内部使用该数值的平方筛选 Sampson 误差。",step:.1,min:.01},{key:"max_trials",label:"最大采样次数",unit:"次",help:"自适应 RANSAC 的采样硬上限；置信度要求更多次数时仍受此限制。",step:100,min:1},{key:"confidence",label:"RANSAC 置信度",help:"目标概率，严格在0与1之间；提高置信度通常需要更多采样，仍受硬上限限制。",step:.001,min:0,max:1},{key:"min_trials",label:"最少采样次数",unit:"次",help:"提前停止前至少抽样的次数；若超过最大采样次数，则硬上限优先。",step:1,min:1},{key:"min_inliers",label:"最少内点数",unit:"点",help:"图像对准入和初始化最终保留点的下限。",step:1,min:8}]},{key:"mapping",name:"增量建图",subtitle:"PnP、三角化与质量筛选",fields:[{key:"min_pnp_points",label:"PnP 最少对应点",unit:"点",help:"注册前和最终筛选后都需满足的 2D–3D 对应数量。",step:1,min:6},{key:"pnp_threshold_px",label:"PnP 内点阈值",unit:"px",help:"传给 PnP RANSAC 的像素距离阈值。",step:.1,min:.01},{key:"min_angle_deg",label:"最小三角化夹角",unit:"°",help:"夹角过小的点深度不稳定，将被拒绝。",step:.1,min:.01},{key:"max_reprojection_px",label:"最大重投影误差",unit:"px",help:"初始化、补点及新增观测的像素误差上限。",step:.1,min:.01}]},{key:"bundle_adjustment",name:"束调整 BA",subtitle:"对现有位姿与点进行整体优化",fields:[{key:"max_nfev",label:"函数评估预算",unit:"次",help:"允许的最大函数评估次数；达到预算不代表已收敛。",step:10,min:1},{key:"f_scale",label:"鲁棒损失尺度",unit:"px",help:"控制鲁棒损失对大残差的抑制尺度。",step:.1,min:.01}]}];function mR({config:r,defaults:e,disabled:i,onChange:s,onValidate:l,onError:c}){function h(d,g,p){s({...r,[d]:{...r[d],[g]:p}})}return m.jsxs("div",{className:"config-panel",children:[m.jsxs("div",{className:"panel-intro",children:["参数直接传入现有 Python 流水线。",m.jsx("br",{}),"修改后将在下一次运行生效。"]}),m.jsxs("div",{className:"small-actions",children:[m.jsxs("button",{title:"恢复默认参数",disabled:i,onClick:()=>s(structuredClone(e)),children:[m.jsx(Hd,{size:13}),"默认"]}),m.jsxs("label",{className:`button ${i?"disabled":""}`,children:[m.jsx(qc,{size:13}),"导入",m.jsx("input",{type:"file",accept:".json",disabled:i,hidden:!0,onChange:async d=>{const g=d.target.files?.[0];if(g){try{const p=JSON.parse(await g.text());s(await nn("/api/config/validate",fa(p)))}catch(p){c(String(p))}d.target.value=""}}})]}),m.jsxs("button",{onClick:()=>av("mini-colmap-config.json",r),children:[m.jsx(Fc,{size:13}),"导出"]})]}),m.jsxs("fieldset",{disabled:i,children:[m.jsxs("label",{className:"number-field seed-field",children:[m.jsxs("span",{children:["随机种子 ",m.jsx("small",{children:"复现实验"})]}),m.jsx("input",{type:"number",min:"0",step:"1",value:r.seed,onChange:d=>s({...r,seed:+d.target.value})})]}),pR.map(d=>m.jsxs("details",{open:!0,className:"config-group",children:[m.jsxs("summary",{children:[d.name,m.jsx("span",{children:d.subtitle})]}),d.key==="bundle_adjustment"&&m.jsxs("label",{className:"switch-row",children:["启用最终 BA",m.jsx("input",{type:"checkbox",checked:r.bundle_adjustment.enabled,onChange:g=>h("bundle_adjustment","enabled",g.target.checked)})]}),d.fields.map(g=>m.jsxs("label",{className:"number-field",title:g.help,children:[m.jsxs("span",{children:[g.label,m.jsx("small",{children:g.unit??""})]}),m.jsx("input",{type:"number",step:g.step??1,min:g.min,max:g.max,"aria-label":g.label,value:Number(r[d.key][g.key]),onChange:p=>h(d.key,g.key,+p.target.value)})]},g.key)),d.key==="geometry"&&m.jsx("p",{className:"form-note",children:"自适应 RANSAC：置信度不是内点比例；最少采样次数超过硬上限时，按上限执行。"}),d.key==="bundle_adjustment"&&m.jsxs("label",{className:"number-field",children:[m.jsx("span",{children:"损失函数"}),m.jsxs("select",{value:r.bundle_adjustment.loss,onChange:g=>h("bundle_adjustment","loss",g.target.value),children:[m.jsx("option",{value:"linear",children:"Linear"}),m.jsx("option",{value:"huber",children:"Huber"}),m.jsx("option",{value:"soft_l1",children:"Soft L1"})]})]})]},d.key))]}),m.jsx("button",{className:"outline full",disabled:i,onClick:l,children:"检查参数配置"}),m.jsx("p",{className:"form-note",children:"悬停字段查看说明。初始化两视图优化与最终 BA 为不同步骤。"})]})}function Ho({label:r,values:e}){return m.jsxs("div",{className:"matrix-block",children:[m.jsx("span",{children:r}),m.jsx("div",{className:"matrix",children:e.map((i,s)=>m.jsx("div",{children:i.map((l,c)=>m.jsx("code",{children:Jt(l,4)},c))},s))})]})}function J0({url:r,width:e,height:i,xy:s,projected:l}){const[c,h]=Te.useState(!1),[d,g]=Te.useState([e??1,i??1]);return Te.useEffect(()=>{h(!1),g([e??1,i??1])},[r,e,i]),m.jsx("div",{className:"photo-preview",children:r&&!c?m.jsxs(m.Fragment,{children:[m.jsx("img",{src:r,alt:"选中相机的原始照片",onError:()=>h(!0),onLoad:p=>g([p.currentTarget.naturalWidth,p.currentTarget.naturalHeight])}),s&&m.jsxs("svg",{viewBox:`0 0 ${d[0]} ${d[1]}`,"aria-label":"观测点和重投影点",children:[m.jsx("circle",{cx:s[0],cy:s[1],r:d[0]*.013,fill:"none",stroke:"#62efbd",strokeWidth:d[0]*.004}),m.jsx("path",{d:`M${s[0]-d[0]*.02},${s[1]}h${d[0]*.04} M${s[0]},${s[1]-d[0]*.02}v${d[0]*.04}`,stroke:"#62efbd",strokeWidth:d[0]*.0025}),l&&m.jsxs(m.Fragment,{children:[m.jsx("line",{x1:s[0],y1:s[1],x2:l[0],y2:l[1],stroke:"#ffc478",strokeWidth:d[0]*.003}),m.jsx("circle",{cx:l[0],cy:l[1],r:d[0]*.006,fill:"#ffc478"})]})]}),m.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"photo-open",title:"打开原始照片",children:m.jsx(cS,{size:12})})]}):m.jsxs("div",{className:"photo-missing",children:[m.jsx(Bi,{size:24}),m.jsx("span",{children:"原始照片不可用"}),m.jsx("small",{children:"仍可检查三维模型和位姿"})]})})}function gR({scene:r,inputDataset:e,runId:i,snapshot:s,selection:l,onSelect:c,onViewCamera:h,viewCameraId:d}){const[g,p]=Te.useState(null),[_,y]=Te.useState(""),[S,E]=Te.useState(0),[b,D]=Te.useState(!1);Te.useEffect(()=>{if(p(null),y(""),E(0),l?.kind!=="point"||!i)return;let O=!1;return D(!0),nn(`/api/runs/${encodeURIComponent(i)}/points/${l.id}?snapshot=${encodeURIComponent(s)}`).then(U=>{O||p(U)}).catch(U=>{O||y(String(U))}).finally(()=>{O||D(!1)}),()=>{O=!0}},[i,s,l]),Te.useEffect(()=>{if(!g||d==null)return;const O=g.observations.findIndex(U=>U.image_id===d);O>=0&&E(O)},[g,d]);let x=l?.kind==="camera"?r?.cameras.find(O=>O.image_id===l.id):void 0;if(!r&&l?.kind==="camera"&&e){const O=e.images.find(B=>B.id===l.id),U=e.cameras.find(B=>B.id===O?.camera_id);O&&U&&(x={...O,image_id:O.id,K:U.K,registered:!1,observations:0})}const v=g?.observations[S],z=r?.cameras.find(O=>O.image_id===v?.image_id);return l?m.jsxs("aside",{className:"inspector",children:[m.jsxs("div",{className:"panel-heading",children:[x?m.jsx(Bi,{size:14}):m.jsx(nv,{size:14})," ",x?"相机信息":"三维点信息",m.jsx("button",{className:"text-button",onClick:()=>c(null),children:"取消选择"})]}),m.jsx("div",{className:"inspector-scroll",children:x?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"object-title",children:[m.jsx("span",{className:"object-icon",children:m.jsx(Bi,{size:20})}),m.jsxs("div",{children:[m.jsx("strong",{children:x.name}),m.jsxs("span",{children:["IMAGE #",x.image_id]})]}),m.jsx("i",{className:`status-dot ${x.registered?"good":""}`})]}),m.jsx(J0,{url:x.image_url,width:x.width,height:x.height}),x.registered&&x.R&&x.t&&m.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(x.image_id),children:[m.jsx(Bi,{size:14})," 对齐至此相机"]}),m.jsxs("div",{className:"detail-grid",children:[m.jsx("span",{children:"注册状态"}),m.jsx("strong",{children:x.registered?"已注册":"未注册"}),m.jsx("span",{children:"图像尺寸"}),m.jsxs("strong",{children:[x.width," × ",x.height]}),m.jsx("span",{children:"相机 ID"}),m.jsx("strong",{children:x.camera_id}),m.jsx("span",{children:"有效观测"}),m.jsx("strong",{children:Jt(x.observations,0)})]}),m.jsx(Ho,{label:"内参 K",values:x.K}),x.registered&&x.R&&x.t?m.jsxs(m.Fragment,{children:[m.jsx(Ho,{label:"世界 → 相机旋转 R",values:x.R}),m.jsx(Ho,{label:"平移 t",values:[x.t]}),x.center&&m.jsx(Ho,{label:"相机中心 C = −Rᵀt",values:[x.center]}),m.jsx("p",{className:"form-note",children:"相机局部坐标：+Z 朝前，+Y 朝下。位置使用重建尺度。"})]}):m.jsx("div",{className:"info-note",children:"该图像尚未估计出相机位姿，因此不会在三维视图中生成相机。"})]}):b?m.jsx("div",{className:"loading-inline",children:"读取点的观测轨迹…"}):_?m.jsx("div",{className:"inline-error",children:_}):g?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"object-title",children:[m.jsx("span",{className:"object-icon point-icon",children:m.jsx(G_,{size:20})}),m.jsxs("div",{children:[m.jsxs("strong",{children:["三维点 #",g.id]}),m.jsx("span",{children:"POINT INSPECTOR"})]}),m.jsx("span",{className:"rgb-swatch",style:{background:`rgb(${g.color.join(",")})`}})]}),m.jsx(Ho,{label:"世界坐标 XYZ",values:[g.xyz]}),m.jsxs("div",{className:"detail-grid",children:[m.jsx("span",{children:"RGB 颜色"}),m.jsx("strong",{children:g.color.join(", ")}),m.jsx("span",{children:"轨迹长度"}),m.jsxs("strong",{children:[g.track_length," 张图像"]}),m.jsx("span",{children:"平均误差"}),m.jsxs("strong",{children:[Jt(g.mean_error)," px"]})]}),m.jsxs("div",{className:"section-label",children:["关联观测 ",m.jsx("span",{children:g.observations.length})]}),d!=null&&!g.observations.some(O=>O.image_id===d)&&m.jsx("div",{className:"info-note",children:"上次对齐的相机没有该点的记录观测；下方显示其他相机的观测。"}),m.jsx("div",{className:"observation-list",children:g.observations.map((O,U)=>m.jsxs("button",{className:S===U?"selected":"",onClick:()=>E(U),children:[m.jsx(Bi,{size:13}),m.jsx("span",{children:r?.cameras.find(B=>B.image_id===O.image_id)?.name??`图像 #${O.image_id}`}),m.jsxs("small",{children:[Jt(O.error)," px"]}),m.jsx(Wh,{size:12})]},`${O.image_id}-${O.keypoint_index}`))}),v&&m.jsxs(m.Fragment,{children:[m.jsx(J0,{url:v.image_url??z?.image_url,width:z?.width,height:z?.height,xy:v.xy,projected:v.projected_xy}),m.jsxs("div",{className:"pixel-legend",children:[m.jsxs("span",{children:[m.jsx("i",{}),"观测位置"]}),m.jsxs("span",{children:[m.jsx("i",{}),"重投影位置"]})]}),z?.registered&&z.R&&z.t&&m.jsxs("button",{className:"outline full camera-view-action",onClick:()=>h(v.image_id),children:[m.jsx(Bi,{size:14})," 对齐至此观测相机"]}),m.jsxs("div",{className:"detail-grid",children:[m.jsx("span",{children:"特征点索引"}),m.jsx("strong",{children:v.keypoint_index}),m.jsx("span",{children:"观测像素"}),m.jsx("strong",{children:v.xy.map(O=>Jt(O,2)).join(", ")}),m.jsx("span",{children:"投影像素"}),m.jsx("strong",{children:v.projected_xy?.map(O=>Jt(O,2)).join(", ")??"—"})]}),m.jsxs("button",{className:"outline full",onClick:()=>c({kind:"camera",id:v.image_id}),children:[m.jsx(Bi,{size:13}),"检查这台相机"]})]})]}):null})]}):m.jsxs("aside",{className:"inspector",children:[m.jsxs("div",{className:"panel-heading",children:[m.jsx(Wc,{size:14}),"场景检查器"]}),m.jsxs("div",{className:"inspector-empty",children:[m.jsx("div",{className:"inspector-symbol",children:m.jsx(G_,{size:26})}),m.jsx("h3",{children:"探索你的重建"}),m.jsxs("p",{children:["点选三维点或相机，",m.jsx("br",{}),"查看对应照片、位姿与观测。"]}),m.jsxs("div",{className:"legend",children:[m.jsxs("span",{children:[m.jsx("i",{className:"legend-point"}),"三维点"]}),m.jsxs("span",{children:[m.jsx("i",{className:"legend-camera"}),"注册相机"]}),m.jsxs("span",{children:[m.jsx("i",{className:"legend-selected"}),"当前选中"]})]})]}),m.jsxs("div",{className:"inspector-hint",children:[m.jsx(Wc,{size:14}),m.jsx("p",{children:"所有坐标、颜色与位姿均来自算法结果。视图操作不会修改地图。"})]})]})}function _R({timing:r}){return m.jsxs("details",{className:"timing-panel","data-testid":"pipeline-timings",open:!0,children:[m.jsxs("summary",{children:[m.jsx(oS,{size:14})," Pipeline 计时 ",m.jsxs("strong",{children:[Jt(r.total_seconds,3)," 秒"]}),m.jsx(Bc,{size:12})]}),m.jsxs("table",{children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"阶段"}),m.jsx("th",{children:"耗时 / 秒"}),m.jsx("th",{children:"占总耗时"})]})}),m.jsx("tbody",{children:Object.entries(r.stages_seconds).map(([e,i])=>m.jsxs("tr",{children:[m.jsx("td",{children:Yc(e)}),m.jsx("td",{children:Jt(i,3)}),m.jsx("td",{children:r.total_seconds>0?`${Jt(i/r.total_seconds*100,1)}%`:"—"})]},e))})]}),m.jsx("div",{className:"timing-details",children:Object.entries(r.details).map(([e,i])=>m.jsxs("span",{children:[e==="descriptor_matching"?"描述子匹配":e==="fundamental_ransac"?"F-RANSAC":e,"：",Jt(i.seconds,3)," 秒 / ",i.calls," 次"]},e))}),m.jsx("p",{children:"墙钟时间，包含该阶段的文件读写与快照开销；匹配子项已包含在阶段总耗时中，不重复相加。"}),r.status!=="completed"&&m.jsx("p",{children:r.status==="failed"?"任务失败，以上仅统计已执行部分。":"以上为最近一次阶段检查点，不代表完整运行耗时。"})]})}function vR({onClose:r,onImported:e}){const[i,s]=Te.useState("manifest"),[l,c]=Te.useState([]),[h,d]=Te.useState(""),[g,p]=Te.useState({fx:"",fy:"",cx:"",cy:""}),[_,y]=Te.useState(!1),[S,E]=Te.useState(""),b=l.filter(x=>/\.json$/i.test(x.name));Te.useEffect(()=>{const x=l.find(v=>v.name==="dataset.json")??l.find(v=>/\.json$/i.test(v.name));d(x?.webkitRelativePath||x?.name||"")},[l]);async function D(){y(!0),E("");try{if(!l.length)throw Error("请先选择数据目录或照片。");const x=new FormData;x.append("mode",i);for(const z of l)x.append("files",z),x.append("paths",z.webkitRelativePath||z.name);if(i==="manifest"){if(!h)throw Error("所选目录中未找到 JSON 数据清单。");x.append("manifest_path",h)}if(i==="photos"){if(Object.values(g).some(z=>z.trim()===""||!Number.isFinite(+z)))throw Error("请填写全部四个内参值。");if(+g.fx<=0||+g.fy<=0)throw Error("fx 和 fy 必须大于 0。");x.append("camera",JSON.stringify(Object.fromEntries(Object.entries(g).map(([z,O])=>[z,+O]))))}const v=await nn("/api/datasets/import",{method:"POST",body:x});e(v),r()}catch(x){E(String(x))}finally{y(!1)}}return m.jsx("div",{className:"modal-backdrop",onMouseDown:x=>{x.target===x.currentTarget&&!_&&r()},children:m.jsxs("section",{className:"modal import-modal",role:"dialog","aria-modal":"true","aria-label":"导入重建数据",children:[m.jsxs("div",{className:"modal-heading",children:[m.jsxs("div",{children:[m.jsx("span",{className:"eyebrow",children:"DATA IMPORT"}),m.jsx("h2",{children:"导入重建数据"})]}),m.jsx("button",{className:"icon-button","aria-label":"关闭导入窗口",disabled:_,onClick:r,children:m.jsx(qh,{size:18})})]}),m.jsxs("div",{className:"segmented",children:[m.jsxs("button",{className:i==="manifest"?"selected":"",onClick:()=>{s("manifest"),c([]),E("")},children:[m.jsx(Xc,{size:15}),"已有数据集"]}),m.jsxs("button",{className:i==="photos"?"selected":"",onClick:()=>{s("photos"),c([]),E("")},children:[m.jsx(j_,{size:15}),"照片 + 相机内参"]})]}),m.jsx("p",{className:"muted",children:i==="manifest"?"选择包含 dataset.json 与图像文件的完整目录。清单中的相对路径与真实相机位姿将保留；含 poses 的数据集可直接训练 NeRF，无需点云。":"导入同一台相机拍摄、已去畸变且尺寸一致的照片，并填写对应的真实内参。"}),m.jsxs("div",{className:"upload-zone",children:[m.jsx(qc,{size:28}),m.jsx("strong",{children:l.length?`已选择 ${l.length} 个文件`:"选择本地数据文件"}),m.jsx("span",{children:l.length?l.slice(0,3).map(x=>x.name).join(" · "):"文件保存在本机项目中，不上传到外部服务"}),m.jsxs("div",{className:"upload-actions",children:[m.jsxs("label",{className:"button outline",children:[m.jsx(Xc,{size:15}),"选择文件夹",m.jsx("input",{type:"file",multiple:!0,hidden:!0,webkitdirectory:"",onChange:x=>{c(Array.from(x.target.files??[]).filter(v=>i==="manifest"||/\.(png|jpg|jpeg|bmp|tif|tiff|webp)$/i.test(v.name))),E("")}})]}),i==="photos"&&m.jsxs("label",{className:"button outline",children:[m.jsx(j_,{size:15}),"选择照片",m.jsx("input",{type:"file",accept:"image/*",multiple:!0,hidden:!0,onChange:x=>{c(Array.from(x.target.files??[])),E("")}})]})]})]}),i==="manifest"&&b.length>0&&m.jsxs("label",{className:"manifest-select",children:["数据清单",m.jsx("select",{"aria-label":"选择导入的数据清单",value:h,onChange:x=>d(x.target.value),children:b.map(x=>m.jsx("option",{value:x.webkitRelativePath||x.name,children:x.webkitRelativePath||x.name},x.webkitRelativePath||x.name))})]}),i==="photos"&&m.jsxs("div",{className:"intrinsics",children:[m.jsxs("div",{className:"section-label",children:[m.jsx(Bi,{size:14}),"共享相机内参 ",m.jsx("span",{children:"单位 px"})]}),m.jsx("div",{className:"intrinsics-grid",children:["fx","fy","cx","cy"].map(x=>m.jsxs("label",{children:[x,m.jsx("input",{type:"number",step:"any",placeholder:x==="fx"||x==="fy"?"焦距":"主点坐标",value:g[x],onChange:v=>p({...g,[x]:v.target.value})})]},x))}),m.jsx("p",{className:"form-note",children:"图像尺寸自动读取并校验。此入口仅添加内参，不生成位姿；NeRF 训练前需估计或导入真实相机位姿。此界面不会猜测焦距，也不会自动去畸变。"})]}),S&&m.jsx("div",{className:"inline-error",children:S}),m.jsxs("div",{className:"modal-footer",children:[m.jsx("button",{className:"quiet",disabled:_,onClick:r,children:"取消"}),m.jsxs("button",{className:"primary",disabled:_||!l.length,onClick:()=>void D(),children:[_?m.jsx(jo,{size:15,className:"spin"}):m.jsx(qc,{size:15}),"校验并导入"]})]})]})})}const xR=[{key:"iterations",name:"训练迭代数",hint:"步",min:1},{key:"learning_rate",name:"学习率",hint:"Adam",step:1e-4,min:1e-6},{key:"image_downscale",name:"图像降采样",hint:"倍；越大越快",min:1},{key:"rays_per_batch",name:"每批光线数",hint:"NeRF / 批",min:1},{key:"samples_per_ray",name:"每条光线采样",hint:"NeRF / 点",min:1},{key:"near",name:"近裁面 near",hint:"归一化场景单位",step:.1,min:.001},{key:"far",name:"远裁面 far",hint:"归一化场景单位",step:.1,min:.001},{key:"holdout_every",name:"验证图像间隔",hint:"每 N 张留一张",min:1},{key:"preview_every",name:"预览输出间隔",hint:"步",min:1},{key:"seed",name:"随机种子",hint:"整数",min:0}];function yR({runs:r,datasets:e,selectedDatasetId:i,run:s,scene:l,activeRun:c,selectedCameraId:h,onStarted:d,onError:g,onPrepareSfM:p,onImportModel:_,onImportDataset:y}){const[S,E]=Te.useState(null),[b,D]=Te.useState(null),[x,v]=Te.useState(""),[z,O]=Te.useState("result"),[U,B]=Te.useState(i),[V,G]=Te.useState(""),[Z,A]=Te.useState(null),[w,H]=Te.useState(null),[te,ne]=Te.useState(!1),[oe,$]=Te.useState(""),[I,q]=Te.useState(""),[X,ge]=Te.useState(""),L=Te.useRef(null),Y=Te.useRef(""),ue=b?.method??"nerf",ve=Hv(r,ue),pe=xi(s)?s:null,Fe=te||!!c,ie=ve.find(T=>T.id===x);let xe="",Re=null;try{Re=uR(ue,z,z==="dataset"?U:x,V,r,e)}catch(T){xe=T.message}Te.useEffect(()=>{let T=!1;return nn("/api/rendering/capabilities").then(Ce=>{T||(E(Ce),D(Le=>Le??structuredClone(Ce.defaults)))}).catch(Ce=>{T||$(String(Ce))}),()=>{T=!0}},[]),Te.useEffect(()=>{if(pe?.source_kind==="posed_dataset"){O("dataset"),B(pe.source_dataset_id??pe.dataset_id??"");return}const T=pe?.source_run_id??(xi(s)?void 0:s?.id);T?O("result"):!ve.length&&ue==="nerf"&&e.length&&O("dataset"),T&&ve.some(Ce=>Ce.id===T)?v(T):v(Ce=>ve.some(Le=>Le.id===Ce)?Ce:ve[0]?.id??"")},[s?.id,pe?.source_run_id,r.map(T=>T.id).join(",")]),Te.useEffect(()=>{ue==="3dgs"&&O("result"),v(T=>ve.some(Ce=>Ce.id===T)?T:ve[0]?.id??"")},[ue]),Te.useEffect(()=>{pe?.source_kind!=="posed_dataset"&&B(T=>e.some(Ce=>Ce.id===T)?T:i||e.find(Ce=>(Ce.pose_count??0)>=2)?.id||e[0]?.id||""),pe?.source_kind==="sfm_result"&&pe.dataset_id&&G(pe.dataset_id)},[e.map(T=>T.id).join(","),i,pe?.id]),Te.useEffect(()=>{pe?.config&&D(structuredClone(pe.config))},[pe?.id]),Te.useEffect(()=>{A(null),H(null),Y.current=""},[pe?.id]),Te.useEffect(()=>{if(!pe)return;let T=!1;return nn(`/api/rendering/runs/${encodeURIComponent(pe.id)}/result`).then(Ce=>{T||(A(Ce),Ce.config&&Y.current!==pe.id&&(D(structuredClone(Ce.config)),Y.current=pe.id),H(Ce.previews.at(-1)??pe.latest_preview??null))}).catch(Ce=>{T||g(String(Ce))}),()=>{T=!0}},[pe?.id,pe?.status,pe?.latest_preview?.url,pe?.latest_preview?.step,g]),Te.useEffect(()=>{const Ce=l?.cameras.find(Le=>Le.image_id===h&&Le.registered)??l?.cameras.find(Le=>Le.registered);Ce&&(q(String(Ce.image_id)),ge(JSON.stringify({K:Ce.K,R:Ce.R,t:Ce.t,width:Ce.width,height:Ce.height},null,2)))},[l?.revision,h]);async function Xe(){if(!b||!Re)return;const T=kh(b);if(T){g(T);return}ne(!0);try{const Ce=await nn("/api/rendering/config/validate",fa(b));D(Ce);const Le=await nn("/api/rendering/runs",fa({...Re,config:Ce}));d(Le)}catch(Ce){g(String(Ce))}finally{ne(!1)}}async function qe(T){if(pe){ne(!0);try{const Ce=T?{camera:hR(X)}:{image_id:Number(I)},Le=await nn(`/api/rendering/runs/${encodeURIComponent(pe.id)}/render`,fa(Ce));H(Le)}catch(Ce){g(String(Ce))}finally{ne(!1)}}}const ot=pe?.training_metrics??Z?.metrics,We=b?kh(b):null;return m.jsxs("section",{className:"rendering-workspace","data-testid":"rendering-workspace","aria-label":"NeRF 与 3DGS 工作区",children:[m.jsxs("div",{className:"rendering-settings",children:[m.jsxs("div",{className:"rendering-title",children:[m.jsx("strong",{children:"NeRF / 3DGS"}),m.jsx("span",{children:"教学实现 · 固定位姿"})]}),m.jsxs("p",{className:"rendering-note",children:[ue==="nerf"?"NeRF 使用照片、内参与真实相机位姿，不要求点云。可直接使用已含位姿的照片数据集。":"3DGS 使用照片、内参、相机位姿与初始点云。请先构建点云，或加载已有模型并关联原图。","训练预览仅来自实际渲染器；尚未补完的算法标为「待实现」。"]}),oe&&m.jsx("p",{role:"alert",className:"rendering-error",children:oe}),!S&&!oe&&m.jsx("p",{children:"正在检查训练环境…"}),S&&!S.torch_available&&m.jsx("p",{role:"alert",className:"rendering-error",children:"尚未安装 PyTorch。请按开发文档安装可选渲染依赖后重启服务。"}),m.jsx("fieldset",{disabled:Fe||!b,children:b&&m.jsxs(m.Fragment,{children:[m.jsxs("label",{className:"rendering-wide",children:["训练方法",m.jsxs("select",{"aria-label":"渲染训练方法",value:b.method,onChange:T=>D({...b,method:T.target.value}),children:[m.jsx("option",{value:"nerf",children:"NeRF · MLP 与体渲染"}),m.jsx("option",{value:"3dgs",children:"3DGS · 可微高斯渲染"})]})]}),ue==="nerf"&&m.jsxs("label",{className:"rendering-wide",children:["NeRF 数据源类型",m.jsxs("select",{"aria-label":"NeRF 数据源类型",value:z,onChange:T=>O(T.target.value),children:[m.jsx("option",{value:"dataset",children:"已含相机位姿的照片数据集"}),m.jsx("option",{value:"result",children:"已有相机位姿结果（不要求点云）"})]})]}),z==="dataset"&&ue==="nerf"?m.jsxs("label",{className:"rendering-wide",children:["照片与相机位姿",m.jsxs("select",{"aria-label":"NeRF 位姿照片数据集",value:U,onChange:T=>B(T.target.value),children:[m.jsx("option",{value:"",children:"选择数据集"}),e.map(T=>m.jsxs("option",{value:T.id,children:[T.name," · ",T.image_count," 张 / ",T.pose_count??0," 位姿"]},T.id))]})]}):m.jsxs("label",{className:"rendering-wide",children:[ue==="nerf"?"相机位姿结果":"初始点云模型",m.jsxs("select",{"aria-label":"渲染来源结果",value:x,onChange:T=>v(T.target.value),children:[m.jsx("option",{value:"",children:ue==="nerf"?"选择至少含两台位姿的模型":"选择含点云与相机位姿的模型"}),ve.map(T=>m.jsxs("option",{value:T.id,children:[T.name," · ",T.registered_images," 相机",ue==="3dgs"?` / ${T.point_count} 点`:T.point_count===0?" · 无点云（可训练）":"",T.images_available?"":" · 待关联原图"]},T.id))]})]}),z==="result"&&ie&&!ie.images_available&&m.jsxs("label",{className:"rendering-wide",children:["关联原始照片数据集",m.jsxs("select",{"aria-label":"关联原始照片数据集",value:V,onChange:T=>G(T.target.value),children:[m.jsx("option",{value:"",children:"请选择匹配原图与内参的数据集"}),e.map(T=>m.jsxs("option",{value:T.id,children:[T.name," · ",T.image_count," 张"]},T.id))]}),m.jsx("small",{children:"模型已有位姿；照片集无需另含位姿。后端严格核对图像 ID、文件名、相机与尺寸。"})]}),xe&&m.jsxs("div",{className:"rendering-source-help","data-testid":"rendering-source-help",children:[m.jsx("p",{className:"rendering-note",children:xe}),m.jsxs("div",{className:"rendering-source-actions",children:[m.jsx("button",{type:"button",className:"outline",onClick:()=>p(z==="dataset"?U:void 0),children:ue==="nerf"?"先估计相机位姿":"先构建点云"}),m.jsx("button",{type:"button",className:"outline",onClick:_,children:ue==="nerf"?"加载已有位姿模型":"加载已有模型"}),m.jsx("button",{type:"button",className:"outline",onClick:y,children:"导入照片 / 位姿数据集"})]})]}),m.jsxs("label",{className:"rendering-wide",children:["计算设备",m.jsxs("select",{"aria-label":"渲染计算设备",value:b.device,onChange:T=>D({...b,device:T.target.value}),children:[m.jsx("option",{value:"cpu",children:"CPU · 小分辨率教学实验"}),m.jsxs("option",{value:"cuda",disabled:S?.cuda_available===!1,children:["CUDA"," ",S?.cuda_available==null?"· 启动时检查":S.cuda_available?"· 可用":"· 不可用"]})]})]}),m.jsx("div",{className:"rendering-fields",children:xR.filter(T=>ue==="nerf"||!["rays_per_batch","samples_per_ray"].includes(T.key)).map(T=>m.jsxs("label",{children:[T.name,m.jsx("input",{"aria-label":T.name,type:"number",step:T.step??1,min:T.min,value:b[T.key],onChange:Ce=>D({...b,[T.key]:Ce.target.valueAsNumber})}),m.jsx("small",{children:T.hint})]},T.key))}),ue==="nerf"&&m.jsxs("details",{open:!0,children:[m.jsx("summary",{children:"NeRF 网络参数"}),m.jsx("div",{className:"rendering-fields",children:[["levels_xyz","位置编码层数"],["levels_dir","方向编码层数"],["hidden_dim","隐藏层宽度"]].map(([T,Ce])=>m.jsxs("label",{children:[Ce,m.jsx("input",{type:"number","aria-label":Ce,min:T==="hidden_dim"?1:0,value:b.nerf[T],onChange:Le=>D({...b,nerf:{...b.nerf,[T]:Le.target.valueAsNumber}})})]},T))})]}),ue==="3dgs"&&m.jsxs("details",{open:!0,children:[m.jsx("summary",{children:"3DGS 高斯参数"}),m.jsx("div",{className:"rendering-fields",children:[["initial_scale","初始高斯尺度",.001],["initial_opacity","初始不透明度",.01],["max_gaussians","最大高斯数",1],["densify_every","增密间隔",1]].map(([T,Ce,Le])=>m.jsxs("label",{children:[Ce,m.jsx("input",{type:"number","aria-label":Ce,min:0,step:Le,value:b.gaussian[T],onChange:Ye=>D({...b,gaussian:{...b.gaussian,[T]:Ye.target.valueAsNumber}})})]},T))}),m.jsx("p",{className:"rendering-note",children:"点数超过高斯上限时稳定子采样。首次冒烟实验推荐降采样 16 倍、最多 128 个高斯。增密间隔 0 表示禁用；开启前请补完增密与剪枝练习。此版本为教学渲染器，不承诺实时 CUDA 性能。"})]})]})}),m.jsxs("div",{className:"rendering-config-actions",children:[m.jsxs("button",{title:"恢复渲染默认参数",disabled:Fe||!S,onClick:()=>D(structuredClone(S.defaults)),children:[m.jsx(Hd,{size:13}),"默认"]}),m.jsxs("button",{disabled:!b,onClick:()=>av("rendering-config.json",b),children:[m.jsx(Fc,{size:13}),"导出配置"]}),m.jsxs("button",{disabled:Fe,onClick:()=>L.current?.click(),children:[m.jsx(qc,{size:13}),"导入配置"]}),m.jsx("input",{hidden:!0,ref:L,type:"file",accept:".json",onChange:async T=>{const Ce=T.target.files?.[0];if(T.target.value="",!!Ce)try{const Le=await nn("/api/rendering/config/validate",fa(JSON.parse(await Ce.text()))),Ye=kh(Le);if(Ye)throw new Error(Ye);D(Le)}catch(Le){g(`配置无效：${String(Le)}`)}}})]}),We&&m.jsx("p",{className:"rendering-error",role:"alert",children:We}),m.jsxs("button",{className:"primary full","data-testid":"start-training",disabled:Fe||!Re||!b||!!We||!S?.torch_available,onClick:()=>void Xe(),children:[te?m.jsx(jo,{size:14,className:"spin"}):m.jsx(iv,{size:14}),"开始训练"]}),c&&m.jsx("p",{className:"rendering-note",children:"当前任务运行中，参数已锁定；可在顶部取消。"})]}),m.jsxs("div",{className:"rendering-results",children:[m.jsx("div",{className:"rendering-result-heading",children:m.jsxs("div",{children:[m.jsx("strong",{children:"训练与新视角渲染"}),m.jsx("span",{children:pe?`${pe.pipeline?.toUpperCase()} · ${pe.name}`:"选择参数并启动训练，或从历史打开训练记录"})]})}),pe?.status==="todo"&&m.jsxs("div",{className:"rendering-todo","data-testid":"rendering-todo",children:[m.jsx("strong",{children:"算法待实现"}),m.jsx("p",{children:pe.error??pe.message??"请补完对应练习后重新启动。本次没有生成训练结果。"})]}),pe?.error&&pe.status!=="todo"&&m.jsx("p",{className:"rendering-error",role:"alert",children:pe.error}),m.jsxs("div",{className:"rendering-metrics",children:[m.jsxs("div",{children:[m.jsx("small",{children:"迭代进度"}),m.jsxs("strong",{children:[ot?.step??pe?.completed??"—"," /"," ",ot?.total??pe?.total??"—"]})]}),m.jsxs("div",{children:[m.jsx("small",{children:"训练 loss"}),m.jsx("strong",{children:Jt(ot?.loss,6)})]}),m.jsxs("div",{children:[m.jsx("small",{children:"验证 PSNR"}),m.jsxs("strong",{children:[Jt(ot?.psnr,2)," ",m.jsx("small",{children:"dB"})]})]})]}),m.jsxs("div",{className:"rendering-comparison","data-testid":"rendering-comparison",children:[m.jsxs("figure",{children:[m.jsxs("figcaption",{children:["渲染输出 ",w?.step!=null&&m.jsxs("span",{children:["step ",w.step]})]}),w?.url?m.jsx("a",{href:w.url,target:"_blank",rel:"noreferrer",children:m.jsx("img",{src:w.url,alt:"实际渲染输出"})}):m.jsxs("div",{className:"rendering-empty",children:[m.jsx(Vo,{size:32}),m.jsx("p",{children:"尚无渲染图像"}),m.jsx("small",{children:"补完算法并完成预览步骤后显示真实输出。"})]})]}),m.jsxs("figure",{children:[m.jsxs("figcaption",{children:["对应原图 ",w?.image_id!=null&&m.jsxs("span",{children:["#",w.image_id]})]}),w?.reference_url?m.jsx("a",{href:w.reference_url,target:"_blank",rel:"noreferrer",children:m.jsx("img",{src:w.reference_url,alt:"对应参考原图"})}):m.jsxs("div",{className:"rendering-empty",children:[m.jsx(Vo,{size:32}),m.jsx("p",{children:"此视角没有参考原图"})]})]})]}),!!Z?.previews.length&&m.jsxs("label",{className:"rendering-preview-select",children:["查看预览快照",m.jsxs("select",{"aria-label":"渲染预览快照",value:w?.url??"",onChange:T=>H(Z.previews.find(Ce=>Ce.url===T.target.value)??null),children:[!Z.previews.some(T=>T.url===w?.url)&&m.jsx("option",{value:w?.url,children:"手动渲染结果"}),Z.previews.map(T=>m.jsxs("option",{value:T.url,children:["step ",T.step??"—"," · 图像 #",T.image_id??"新视角"]},T.url))]})]}),pe&&m.jsxs("div",{className:"rendering-downloads",children:[Z?.checkpoint_url&&m.jsxs("a",{href:Z.checkpoint_url,download:!0,children:[m.jsx(Fc,{size:13}),"模型 checkpoint"]}),Z?.gaussians_url&&m.jsxs("a",{href:Z.gaussians_url,download:!0,children:[m.jsx(Fc,{size:13}),"高斯参数"]})]}),m.jsxs("div",{className:"rendering-camera-controls",children:[m.jsxs("label",{children:["原始相机",m.jsx("select",{"aria-label":"待渲染相机",value:I,onChange:T=>q(T.target.value),children:l?.cameras.filter(T=>T.registered).map(T=>m.jsxs("option",{value:T.image_id,children:["#",T.image_id," · ",T.name]},T.image_id))})]}),m.jsx("button",{className:"outline",disabled:te||!pe||pe.status!=="completed"||!I,onClick:()=>void qe(!1),children:"渲染此相机"})]}),m.jsxs("details",{className:"rendering-custom-camera",children:[m.jsx("summary",{children:"自定义新视角（源场景世界坐标，world-to-camera）"}),m.jsx("p",{className:"rendering-note",children:"K、R、t 沿用项目约定 Xc = R X + t，width / height 为输出分辨率。此处修改只用于渲染，不修改源相机。"}),m.jsx("textarea",{"aria-label":"新视角相机 JSON",value:X,onChange:T=>ge(T.target.value),spellCheck:!1}),m.jsx("button",{className:"outline",disabled:te||!pe||pe.status!=="completed"||!X,onClick:()=>void qe(!0),children:"渲染自定义新视角"})]})]})]})}const $0={running:"重建进行中",completed:"重建完成",failed:"重建失败",cancelled:"已取消",interrupted:"运行中断",imported:"已导入模型",todo:"算法待实现"};function Ic(r){return xi(r)?{running:"训练进行中",completed:"训练完成",failed:"训练失败",todo:"算法待实现"}[r.status]??$0[r.status]??r.status:r.status==="completed"&&r.registered_images!=null&&r.image_count!=null&&r.registered_images<r.image_count?`部分重建 ${r.registered_images}/${r.image_count}`:$0[r.status]??r.status}const SR={points:!0,cameras:!0,axes:!0,pointSize:2.5,cameraScale:1,color:"rgb",maxError:0,minTrack:0},Xh=[["features","特征"],["pair_geometry","匹配"],["tracks","轨迹"],["initialization","初始化"],["incremental_mapping","建图"],["bundle_adjustment","BA"],["export","导出"]];function MR(r){if(typeof r.message=="string")return r.message;if(typeof r.text=="string")return r.text;const e=typeof r.stage=="string"?Yc(r.stage):"",i=Object.entries(r).filter(([s])=>!["kind","type","stage","timestamp","time","seq","snapshot"].includes(s)).map(([s,l])=>`${s}: ${typeof l=="object"?JSON.stringify(l):l}`).join(" · ");return[e,i].filter(Boolean).join(" · ")||String(r.kind??"状态更新")}function ER(r){if(r==null)return"—";const e=Math.round(r);return e<60?`${e} 秒`:`${Math.floor(e/60)} 分 ${e%60} 秒`}function bR(){const[r,e]=Te.useState([]),[i,s]=Te.useState([]),[l,c]=Te.useState(null),[h,d]=Te.useState(null),[g,p]=Te.useState(""),[_,y]=Te.useState(null),[S,E]=Te.useState(""),[b,D]=Te.useState(null),[x,v]=Te.useState(null),[z,O]=Te.useState("latest"),[U,B]=Te.useState(null),[V,G]=Te.useState([]),[Z,A]=Te.useState(null),[w,H]=Te.useState(null),[te,ne]=Te.useState(null),[oe,$]=Te.useState("scene"),[I,q]=Te.useState(SR),[X,ge]=Te.useState("images"),[L,Y]=Te.useState("log"),[ue,ve]=Te.useState([]),[pe,Fe]=Te.useState(null),[ie,xe]=Te.useState(!0),[Re,Xe]=Te.useState(!1),[qe,ot]=Te.useState(!1),[We,T]=Te.useState(!1),[Ce,Le]=Te.useState(!1),[Ye,He]=Te.useState(!1),[zt,Qe]=Te.useState(!1),[ht,Ht]=Te.useState(!1),[Zt,P]=Te.useState(""),[R,se]=Te.useState(0),[me,Me]=Te.useState(0),fe=i.find(j=>j.status==="running"),je=Te.useRef(null),Oe=Te.useRef(null),Je=Te.useRef(null),Ie=Te.useCallback((j,ye=!0)=>Fe({text:j,error:ye}),[]),Ae=Te.useCallback(j=>{D(j),s(ye=>[j,...ye.filter(mt=>mt.id!==j.id)])},[]),Pe=Te.useCallback(j=>{try{localStorage.setItem("minicolmap.lastRun",j.id)}catch{}E(j.id),$(xi(j)?"rendering":"scene"),D(j),O("latest"),A(null),v(null),B(null),G([]),ve([]),se(ye=>ye+1),j.dataset_id&&p(j.dataset_id)},[]),tt=Te.useCallback(j=>{p(j),$("scene"),y(ye=>ye?.id===j?ye:null),E(""),D(null),v(null),ot(!1),A(null),B(null),G([]),ve([]),O("latest"),ge("images")},[]);Te.useEffect(()=>{let j=!1;return nn("/api/bootstrap").then(ye=>{if(j)return;e(ye.datasets),s(ye.runs),c(ye.defaults),d(structuredClone(ye.defaults));let mt="";try{mt=localStorage.getItem("minicolmap.lastRun")??""}catch{}const gt=ye.runs.find(pt=>pt.status==="running")??ye.runs.find(pt=>pt.id===mt)??ye.runs.find(pt=>pt.name==="temple_ring_8_arc_no_ba_01")??ye.runs.find(pt=>pt.name.includes("temple_ring_8_arc_no_ba"))??ye.runs[0];gt&&Pe(gt);const Tt=ye.datasets.find(pt=>pt.name.includes("8"))??ye.datasets[0];!gt?.dataset_id&&Tt&&p(Tt.id)}).catch(ye=>{j||Ie(String(ye))}).finally(()=>{j||xe(!1)}),()=>{j=!0}},[Ie,Pe]),Te.useEffect(()=>{if(!g){y(null);return}let j=!1;return nn(`/api/datasets/${encodeURIComponent(g)}`).then(ye=>{j||y(ye)}).catch(ye=>{j||Ie(String(ye))}),()=>{j=!0}},[g,Ie]),Te.useEffect(()=>{if(!S)return;let j=!1,ye=!1,mt=!1;const gt=new AbortController,Tt=async()=>{if(!j){if(ye){mt=!0;return}ye=!0,ot(!0);try{const pt=await nn(`/api/runs/${encodeURIComponent(S)}/scene?snapshot=${encodeURIComponent(z)}`,{signal:gt.signal});j||v(pt)}catch{j||v(null)}finally{ye=!1,j||(ot(!1),mt&&(mt=!1,Tt()))}}};return Je.current=()=>void Tt(),()=>{j=!0,gt.abort(),Je.current=null}},[S,z]),Te.useEffect(()=>{Je.current?.()},[S,z,R]),Te.useEffect(()=>{if(!S)return;let j=!1;return Promise.all([nn(`/api/runs/${encodeURIComponent(S)}/reports`),nn(`/api/runs/${encodeURIComponent(S)}/artifacts`)]).then(([ye,mt])=>{j||(B(ye),G(mt))}).catch(ye=>{!j&&b?.status!=="running"&&Ie(String(ye))}),()=>{j=!0}},[S,b?.status,me,Ie]),Te.useEffect(()=>{if(!S||b?.status!=="running"){P("");return}const j=new EventSource(`/api/runs/${encodeURIComponent(S)}/events`);let ye,mt=!1,gt=!1,Tt=!1;const pt=(Xn=!1,Pn=!1)=>{gt||=Xn,Tt||=Pn,!ye&&(ye=setTimeout(()=>{ye=void 0,nn(`/api/runs/${encodeURIComponent(S)}`).then(zn=>{mt||Ae(zn)}).catch(()=>{}),gt&&se(zn=>zn+1),Tt&&Me(zn=>zn+1),gt=Tt=!1},300))};return j.onopen=()=>{P("已连接"),pt(!0,!0)},j.onmessage=Xn=>{try{const Pn=JSON.parse(Xn.data);ve($a=>[...$a,{time:new Date(typeof Pn.time=="number"?Pn.time*1e3:Date.now()).toLocaleTimeString("zh-CN",{hour12:!1}),kind:String(Pn.kind??Pn.type??"info"),text:MR(Pn)}].slice(-500));const zn=String(Pn.kind??""),Vi=["complete","terminal","error","cancelled","todo"].includes(zn);pt(zn==="snapshot"||Vi,zn==="timing"||zn==="warning"||Vi)}catch{}},j.onerror=()=>{P("连接恢复中…")},()=>{mt=!0,j.close(),ye&&clearTimeout(ye)}},[S,b?.status,Ae]),Te.useEffect(()=>{if(!fe)return;let j=!1,ye;const mt=()=>{nn(`/api/runs/${encodeURIComponent(fe.id)}`).then(gt=>{j||(s(Tt=>Tt.map(pt=>pt.id===gt.id?gt:pt)),gt.id===S&&(D(gt),gt.status!=="running"&&(se(Tt=>Tt+1),Me(Tt=>Tt+1))))}).catch(()=>{}).finally(()=>{j||(ye=setTimeout(mt,2e3))})};return ye=setTimeout(mt,2e3),()=>{j=!0,clearTimeout(ye)}},[fe?.id,S]),Te.useEffect(()=>{Oe.current?.scrollIntoView({block:"nearest"})},[ue]),Te.useEffect(()=>{const j=ye=>{ye.key==="Escape"&&(A(null),Ht(!1))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[]);async function $e(){if(!(!g||!h)){Xe(!0),Fe(null);try{const j=await nn("/api/config/validate",fa(h));d(j);const ye=await nn("/api/runs",fa({dataset_id:g,config:j}));Ae(ye),Pe(ye),Y("log")}catch(j){Ie(String(j))}finally{Xe(!1)}}}async function ze(){const j=i.find(ye=>ye.status==="running");if(j){Xe(!0);try{const ye=await nn(`/api/runs/${encodeURIComponent(j.id)}/cancel`,{method:"POST"});ye.id===S?(Ae(ye),se(mt=>mt+1)):s(mt=>[ye,...mt.filter(gt=>gt.id!==ye.id)])}catch(ye){Ie(String(ye))}finally{Xe(!1)}}}async function dt(j){Xe(!0);try{const ye=new FormData;ye.append("file",j);const mt=await nn("/api/results/import",{method:"POST",body:ye});Ae(mt),Pe(mt),Ie("模型已导入。原始照片缺失时仍可检查点云与位姿。",!1)}catch(ye){Ie(String(ye))}finally{Xe(!1)}}async function W(j){if(!(!b||!xi(b)||b.status!=="completed")){Xe(!0);try{const ye=await nn(`/api/rendering/runs/${encodeURIComponent(b.id)}/render`,fa({camera:j}));Ae({...b,latest_preview:ye}),$("rendering")}catch(ye){Ie(String(ye))}finally{Xe(!1)}}}const De=x?.cameras??_?.images.map(j=>({...j,image_id:j.id,registered:!1,observations:0,K:_.cameras.find(ye=>ye.id===j.camera_id)?.K??[]}))??[],Ne=x?.summary,ke=Ne?.registered_images??b?.registered_images??0,we=Ne?.image_count??b?.image_count??_?.image_count??0,Ee=x?.snapshots?.length?x.snapshots:b?.snapshots??[],Ke=Xh.findIndex(([j])=>j===b?.stage||j==="bundle_adjustment"&&b?.stage==="ba"||j==="export"&&b?.stage==="exporting"||j==="features"&&b?.stage==="feature_extraction"||j==="incremental_mapping"&&["registration","mapping"].includes(b?.stage??"")||j==="pair_geometry"&&b?.stage==="matching"),ut=b&&!b.images_available;return m.jsxs("div",{className:`app ${Ce?"left-hidden":""} ${Ye||oe==="rendering"?"right-hidden":""}`,children:[m.jsxs("header",{className:"topbar",children:[m.jsxs("div",{className:"brand",children:[m.jsx("div",{className:"brand-mark",children:m.jsx(B_,{size:23,strokeWidth:1.5})}),m.jsxs("div",{children:[m.jsxs("strong",{children:["MINI",m.jsx("span",{children:"COLMAP"})]}),m.jsx("small",{children:"三维重建工作台"})]})]}),m.jsxs("div",{className:"project-heading",children:[m.jsx("span",{className:"project-divider"}),m.jsx(Xc,{size:15}),m.jsx("span",{children:_?.name??"未选择数据集"}),m.jsxs("span",{className:"local-pill",children:[m.jsx("i",{}),"LOCAL"]})]}),m.jsxs("div",{className:"top-actions",children:[m.jsxs("button",{className:"quiet","data-testid":"import-model",onClick:()=>je.current?.click(),disabled:Re,children:[m.jsx(V_,{size:15}),"打开模型"]}),m.jsx("input",{ref:je,hidden:!0,type:"file",accept:".json",onChange:j=>{const ye=j.target.files?.[0];ye&&dt(ye),j.target.value=""}}),m.jsxs("details",{className:"export-menu",children:[m.jsxs("summary",{className:`button quiet ${b?"":"disabled"}`,children:[m.jsx(I_,{size:15}),"导出",m.jsx(Bc,{size:12})]}),m.jsx("div",{className:"dropdown",children:V.length?V.map(j=>m.jsxs("a",{href:j.url,download:!0,children:[/\.png|\.jpe?g/i.test(j.name)?m.jsx(Vo,{size:13}):m.jsx(V_,{size:13}),m.jsx("span",{children:j.name}),m.jsx(I_,{size:12})]},j.url)):m.jsx("p",{children:"当前还没有可下载的结果。"})})]}),m.jsx("button",{className:`quiet ${oe==="rendering"?"selected":""}`,"data-testid":"open-rendering",onClick:()=>$(oe==="rendering"?"scene":"rendering"),children:"NeRF / 3DGS"}),m.jsx("span",{className:"action-divider"}),fe?m.jsxs("button",{className:"cancel-button","data-testid":"cancel-run",disabled:Re,onClick:()=>void ze(),children:[m.jsx(yS,{size:13,fill:"currentColor"}),xi(fe)?"取消训练":"取消重建"]}):m.jsxs("button",{className:"primary start-button","data-testid":"start-run",disabled:Re||!g||ie||oe==="rendering",onClick:()=>void $e(),children:[Re?m.jsx(jo,{size:15,className:"spin"}):m.jsx(iv,{size:14,fill:"currentColor"}),"开始 SfM 重建"]}),m.jsx("button",{className:"icon-button help-button","aria-label":"操作说明",title:"操作说明",onClick:()=>Ht(!0),children:m.jsx(Wc,{size:17})})]})]}),pe&&m.jsxs("div",{className:`notice ${pe.error?"error":"success"}`,role:"alert",children:[pe.error?m.jsx(MS,{size:15}):m.jsx(F_,{size:15}),m.jsx("span",{children:pe.text}),m.jsx("button",{"aria-label":"关闭通知",onClick:()=>Fe(null),children:m.jsx(qh,{size:14})})]}),m.jsxs("div",{className:"workspace",children:[m.jsxs("aside",{className:"left-panel",children:[m.jsxs("div",{className:"workspace-label",children:[m.jsx("span",{children:"工作区"}),m.jsx("button",{className:"icon-button",title:"收起左侧栏","aria-label":"收起左侧栏",onClick:()=>Le(!0),children:m.jsx(pS,{size:15})})]}),m.jsxs("div",{className:"dataset-picker",children:[m.jsx("label",{children:"当前输入数据"}),m.jsxs("div",{className:"select-wrapper",children:[m.jsx(Xc,{size:15}),m.jsxs("select",{"aria-label":"选择输入数据集",value:g,disabled:!!fe,onChange:j=>{tt(j.target.value)},children:[m.jsx("option",{value:"",disabled:!0,children:"选择数据集"}),r.map(j=>m.jsxs("option",{value:j.id,children:[j.name," · ",j.image_count," 张"]},j.id))]}),m.jsx(rS,{size:12})]}),m.jsxs("button",{className:"outline full import-dataset","data-testid":"import-dataset",disabled:!!fe,onClick:()=>T(!0),children:[m.jsx(gS,{size:14}),"导入数据集"]})]}),m.jsxs("nav",{className:"side-tabs",children:[m.jsxs("button",{className:X==="images"?"selected":"",onClick:()=>ge("images"),children:[m.jsx(Vo,{size:14}),"照片"]}),m.jsxs("button",{className:X==="config"?"selected":"",onClick:()=>ge("config"),children:[m.jsx(vS,{size:14}),"参数"]}),m.jsxs("button",{className:X==="history"?"selected":"",onClick:()=>ge("history"),children:[m.jsx(fS,{size:14}),"历史"]})]}),m.jsx("div",{className:"left-content",children:X==="images"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"list-heading",children:[m.jsx("span",{children:x?"当前模型图像":"输入照片"}),m.jsxs("span",{children:[De.length," 张"]})]}),De.length?m.jsx("div",{className:"image-list",children:De.map(j=>m.jsxs("button",{className:`image-row ${Z?.kind==="camera"&&Z.id===j.image_id?"selected":""}`,"data-testid":`image-${j.image_id}`,onClick:()=>{(x||_)&&(A({kind:"camera",id:j.image_id}),He(!1))},children:[m.jsx("div",{className:"image-thumbnail",children:j.image_url?m.jsx("img",{loading:"lazy",src:j.image_url,alt:"",onError:ye=>{ye.currentTarget.style.visibility="hidden"}}):m.jsx(Vo,{size:17})}),m.jsxs("div",{children:[m.jsx("strong",{children:j.name}),m.jsxs("small",{children:["#",j.image_id," ",m.jsx("span",{children:j.registered?`${Jt(j.observations,0)} 观测`:`${j.width} × ${j.height}`})]})]}),m.jsx("span",{className:`registration-dot ${j.registered?"registered":""}`,title:j.registered?"已注册":"尚未注册"})]},j.image_id))}):m.jsxs("div",{className:"sidebar-empty",children:[m.jsx(uS,{size:26}),m.jsx("p",{children:"导入照片以开始重建"})]}),x&&m.jsxs("div",{className:"registration-key",children:[m.jsx("i",{className:"registration-dot registered"}),"已注册"," ",m.jsxs("span",{children:[ke," / ",we]})]})]}):X==="config"&&h&&l?m.jsx(mR,{config:h,defaults:l,disabled:!!fe,onChange:d,onError:Ie,onValidate:()=>{nn("/api/config/validate",fa(h)).then(j=>{d(j),Ie("配置检查通过，可以开始重建。",!1)}).catch(j=>Ie(String(j)))}}):X==="history"?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"list-heading",children:[m.jsx("span",{children:"本地任务记录"}),m.jsx("button",{className:"text-button","aria-label":"刷新历史运行",onClick:()=>{nn("/api/runs?discover=true").then(s).catch(j=>Ie(String(j)))},children:"刷新"})]}),m.jsx("div",{className:"run-list",children:i.map(j=>m.jsxs("button",{className:`run-row ${S===j.id?"selected":""}`,onClick:()=>Pe(j),children:[m.jsxs("div",{className:"run-row-top",children:[m.jsx("span",{className:`status-dot ${j.status==="completed"||j.status==="imported"?"good":j.status==="running"?"live":j.status==="failed"?"bad":""}`}),m.jsx("strong",{children:j.name})]}),m.jsx("span",{children:Ic(j)}),m.jsx("small",{children:xi(j)?`${j.pipeline?.toUpperCase()} · ${j.training_metrics?.step??j.completed??0} / ${j.training_metrics?.total??j.total??"—"} 步`:m.jsxs(m.Fragment,{children:[j.registered_images??"—","/",j.image_count??"—"," 相机 ·"," ",Jt(j.point_count,0)," 点"]})})]},j.id))})]}):null}),m.jsxs("div",{className:"sidebar-footer",children:[m.jsx("span",{className:"live-dot"}),"本机运行 · Python 算法引擎",m.jsx("span",{children:"v0.1"})]})]}),m.jsxs("main",{className:"main-panel",children:[m.jsxs("div",{className:"scene-topline",children:[m.jsxs("div",{className:"scene-breadcrumb",children:[Ce&&m.jsx("button",{className:"icon-button",title:"展开左侧栏","aria-label":"展开左侧栏",onClick:()=>Le(!1),children:m.jsx(Wh,{size:16})}),m.jsx(B_,{size:14}),m.jsx("span",{children:b?.name??"尚无重建结果"}),b&&m.jsxs("span",{className:`run-state ${b.status} ${Ic(b).startsWith("部分重建")?"partial":""}`,children:[m.jsx("i",{}),Ic(b)]}),qe&&m.jsx(jo,{size:12,className:"spin"})]}),m.jsxs("div",{className:"scene-actions",children:[m.jsxs("div",{className:"workspace-mode","aria-label":"工作区视图",children:[m.jsx("button",{className:oe==="scene"?"selected":"",onClick:()=>$("scene"),children:b?.source_kind==="posed_dataset"?"相机位姿场景":xi(b)?"源 SfM 场景":"三维场景"}),m.jsx("button",{className:oe==="rendering"?"selected":"",onClick:()=>$("rendering"),children:"训练 / 渲染"})]}),m.jsxs("label",{className:"snapshot-select",children:[m.jsx(H_,{size:13}),m.jsxs("select",{"aria-label":"选择场景快照",value:z,disabled:!Ee.length,onChange:j=>{O(j.target.value),A(null)},children:[m.jsxs("option",{value:"latest",children:["最新结果",b?.status==="running"?" · 实时":""]}),Ee.map(j=>m.jsx("option",{value:j.id,children:sv(j.label)},j.id))]})]}),m.jsx("button",{className:"icon-button","aria-label":Ye?"展开检查器":"收起检查器",onClick:()=>He(!Ye),children:m.jsx(mS,{size:15})})]})]}),ut&&m.jsxs("div",{className:"image-warning",children:[m.jsx(Wc,{size:12}),"此模型未关联原始照片；点云和相机位姿仍可查看。"]}),oe==="rendering"?m.jsx(yR,{runs:i,datasets:r,selectedDatasetId:g,run:b,scene:x,activeRun:fe,selectedCameraId:Z?.kind==="camera"?Z.id:null,onStarted:j=>{Ae(j),Pe(j),Y("log")},onError:Ie,onPrepareSfM:j=>{j&&tt(j),$("scene"),ge("images"),Le(!1)},onImportModel:()=>je.current?.click(),onImportDataset:()=>T(!0)}):m.jsx(dR,{scene:x,runId:S,options:I,setOptions:q,selection:Z,cameraViewRequest:w,onCameraViewChange:ne,onRenderCamera:xi(b)&&b?.status==="completed"?j=>void W(j):void 0,renderBusy:Re||!!fe,onSelect:j=>{A(j),j&&He(!1)}}),m.jsxs("section",{className:`bottom-panel ${zt?"expanded":""}`,children:[m.jsxs("div",{className:"bottom-heading",children:[m.jsxs("div",{className:"bottom-tabs",children:[m.jsxs("button",{className:L==="log"?"selected":"",onClick:()=>Y("log"),children:[m.jsx(SS,{size:13}),"运行日志",b?.status==="running"&&m.jsx("i",{className:"live-dot"})]}),m.jsxs("button",{className:L==="diagnostics"?"selected":"",onClick:()=>Y("diagnostics"),children:[m.jsx(z_,{size:13}),"质量与诊断"]})]}),m.jsxs("div",{className:"bottom-status",children:[b?.status==="running"&&m.jsxs("span",{className:"actual-progress","data-testid":"actual-progress",children:[Yc(b.stage),b.total!=null&&b.total>0?` ${b.completed??0} / ${b.total}`:""]}),Zt&&m.jsxs("span",{children:[m.jsx("i",{className:"live-dot"}),Zt]}),m.jsxs("span",{children:[m.jsx(H_,{size:12}),ER(b?.elapsed_seconds)]}),m.jsx("button",{className:"icon-button",title:zt?"收起日志区":"展开日志区","aria-label":"调整日志区域",onClick:()=>Qe(!zt),children:m.jsx(Bc,{size:14,style:{transform:zt?"none":"rotate(180deg)"}})})]})]}),L==="log"?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"phase-strip",children:(xi(b)?[["preparing","准备数据"],["training","训练"],["evaluation","验证"],["export","导出"]]:Xh).map(([j,ye],mt)=>{const gt=j==="bundle_adjustment"&&b?.status==="completed"&&!U?.ba,Tt=xi(b)?["preparing","training","evaluation","export"].indexOf(b?.stage??""):Ke,pt=!gt&&(b?.status==="completed"||Tt>mt);return m.jsxs("div",{className:`${b?.status==="running"&&mt===Tt?"current":""} ${pt?"complete":""}`,title:gt?"本次未启用最终 BA":ye,children:[m.jsx("span",{children:pt?m.jsx(F_,{size:10}):gt?"—":String(mt+1).padStart(2,"0")}),ye,mt<Xh.length-1&&m.jsx(Wh,{size:10})]},j)})}),m.jsxs("div",{className:"log-scroll",role:"log","aria-label":"算法运行日志",children:[!ue.length&&m.jsxs("div",{className:"log-line",children:[m.jsx("time",{children:"—"}),m.jsx("span",{className:"log-tag",children:"SYSTEM"}),m.jsx("span",{children:b?.status==="running"?"正在连接实际运行事件…":b?`已加载本地结果：${b.name}。${b.status==="imported"?"此模型由文件导入。":"完整诊断与原始文件可在“质量与诊断”和“导出”中查看。"}`:"就绪。选择数据集并开始重建。"})]}),ue.map((j,ye)=>m.jsxs("div",{className:`log-line ${j.kind==="warning"||j.kind==="error"?"warning":""}`,children:[m.jsx("time",{children:j.time}),m.jsx("span",{className:"log-tag",children:j.kind.toUpperCase()}),m.jsx("span",{children:j.text})]},ye)),b?.error&&m.jsxs("div",{className:"log-line warning",children:[m.jsx("time",{children:"ERROR"}),m.jsx("span",{children:b.error})]}),b?.warnings?.map((j,ye)=>m.jsxs("div",{className:"log-line warning",children:[m.jsx("time",{children:"WARN"}),m.jsx("span",{children:j})]},`w${ye}`)),m.jsx("div",{ref:Oe})]})]}):m.jsxs("div",{className:"diagnostics-scroll",children:[m.jsxs("div",{className:"metric-strip",children:[m.jsxs("div",{children:[m.jsx("span",{children:"注册相机"}),m.jsxs("strong",{children:[ke," / ",we]})]}),m.jsxs("div",{children:[m.jsx("span",{children:"三维点"}),m.jsx("strong",{children:Jt(Ne?.point_count,0)})]}),m.jsxs("div",{children:[m.jsx("span",{children:"有效观测"}),m.jsx("strong",{children:Jt(Ne?.observation_count,0)})]}),m.jsxs("div",{children:[m.jsx("span",{children:"中位误差"}),m.jsxs("strong",{children:[Jt(Ne?.median_reprojection_error_px)," ",m.jsx("small",{children:"px"})]})]}),m.jsxs("div",{children:[m.jsx("span",{children:"P95 误差"}),m.jsxs("strong",{children:[Jt(Ne?.p95_reprojection_error_px)," ",m.jsx("small",{children:"px"})]})]}),m.jsxs("div",{children:[m.jsx("span",{children:"正深度比例"}),m.jsx("strong",{children:Ne?.positive_depth_ratio==null?"—":`${Jt(Ne.positive_depth_ratio*100,1)}%`})]})]}),U?.ba&&m.jsxs("div",{className:`ba-notice ${U.ba.solver_success?"converged":""}`,"data-testid":"ba-status",children:[m.jsx(z_,{size:15}),m.jsx("strong",{children:U.ba.accepted?"BA 候选已接受":"BA 候选未接受"}),m.jsx("span",{children:U.ba.solver_success?"求解器已收敛":"求解器尚未收敛"}),m.jsxs("span",{children:[U.ba.nfev," 次评估"]}),m.jsxs("span",{children:[Jt(U.ba.before_mean_px)," → ",Jt(U.ba.candidate_mean_px)," ","px"]}),m.jsx("p",{children:U.ba.rejection_reason??U.ba.message})]}),U?.timings&&m.jsx(_R,{timing:U.timings}),b&&Ic(b).startsWith("部分重建")&&m.jsxs("div",{className:"info-note",children:["流程完成，但仅 ",b.registered_images,"/",b.image_count," ","张图像成功注册。请检查未注册照片与匹配质量。"]}),m.jsx("div",{className:"report-disclosures",children:["pairs","initialization"].map(j=>m.jsxs("details",{children:[m.jsxs("summary",{children:[j==="pairs"?"图像对匹配与几何验证":"初始化候选与筛选诊断",m.jsx(Bc,{size:12})]}),m.jsx("pre",{children:U?.[j]?JSON.stringify(U[j],null,2):"暂无该阶段报告。"})]},j))}),V.some(j=>/\.(png|jpe?g)$/i.test(j.name))&&m.jsxs("details",{className:"match-previews",children:[m.jsx("summary",{children:"查看真实匹配预览"}),m.jsx("div",{children:V.filter(j=>/\.(png|jpe?g)$/i.test(j.name)).map(j=>m.jsxs("a",{href:j.url,target:"_blank",rel:"noreferrer",children:[m.jsx("img",{src:j.url,loading:"lazy",alt:j.name}),m.jsx("span",{children:j.name})]},j.url))})]})]})]})]}),!Ye&&oe==="scene"&&m.jsx(gR,{scene:x,inputDataset:_,runId:S,snapshot:x?.snapshot_id??z,selection:Z,onSelect:A,onViewCamera:j=>H(ye=>({imageId:j,version:(ye?.version??0)+1})),viewCameraId:te})]}),m.jsxs("footer",{className:"statusbar",children:[m.jsxs("span",{children:[m.jsx("span",{className:"status-dot good"}),"本地工作台 ",m.jsx("i",{}),"127.0.0.1"]}),m.jsxs("span",{children:[b?.status==="running"?Yc(b.stage):"只呈现算法计算结果",m.jsx("i",{}),"React + Three.js · Python"]})]}),ie&&m.jsxs("div",{className:"boot-overlay",children:[m.jsx(jo,{size:26,className:"spin"}),m.jsx("span",{children:"正在连接本地重建引擎…"})]}),We&&m.jsx(vR,{onClose:()=>T(!1),onImported:j=>{e(ye=>[j,...ye.filter(mt=>mt.id!==j.id)]),tt(j.id),oe==="rendering"&&$("rendering"),y(j),ge("images"),Ie(`已导入 ${j.image_count} 张图像。${(j.pose_count??0)>=2?`已保留 ${j.pose_count} 台真实相机位姿，可直接训练 NeRF。`:"尚无相机位姿；可先估计位姿或导入含位姿的清单。"}`,!1)}}),ht&&m.jsx("div",{className:"modal-backdrop",onMouseDown:j=>{j.target===j.currentTarget&&Ht(!1)},children:m.jsxs("section",{className:"modal help-modal",role:"dialog","aria-modal":"true","aria-label":"工作台操作说明",children:[m.jsxs("div",{className:"modal-heading",children:[m.jsxs("div",{children:[m.jsx("span",{className:"eyebrow",children:"WORKBENCH GUIDE"}),m.jsx("h2",{children:"从照片到稀疏重建"})]}),m.jsx("button",{className:"icon-button",onClick:()=>Ht(!1),"aria-label":"关闭操作说明",children:m.jsx(qh,{size:18})})]}),m.jsxs("ol",{children:[m.jsxs("li",{children:[m.jsx("strong",{children:"选择或导入数据"}),m.jsx("p",{children:"使用项目数据集，或导入已去畸变照片与真实内参。"})]}),m.jsxs("li",{children:[m.jsx("strong",{children:"检查参数并运行"}),m.jsx("p",{children:"“参数”中的配置直接交给现有 Python 算法，实际进度在底部更新。"})]}),m.jsxs("li",{children:[m.jsx("strong",{children:"拖拽检查三维结果"}),m.jsx("p",{children:"左键旋转、右键平移、滚轮缩放；点击相机或点查看原始信息。Esc 清除选择。"})]}),m.jsxs("li",{children:[m.jsx("strong",{children:"对照快照与质量"}),m.jsx("p",{children:"切换初始化、增量建图和 BA 前后快照。BA 接受与求解器收敛分别展示。"})]}),m.jsxs("li",{children:[m.jsx("strong",{children:"导出真实结果"}),m.jsx("p",{children:"右上角下载模型、PLY 和其他实际生成的文件。视图调整不修改地图。"})]})]})]})})]})}tS.createRoot(document.getElementById("root")).render(m.jsx(qy.StrictMode,{children:m.jsx(bR,{})}));
