(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var fh={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function ry(){if(Gv)return Do;Gv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Do.Fragment=t,Do.jsx=i,Do.jsxs=i,Do}var Vv;function sy(){return Vv||(Vv=1,fh.exports=ry()),fh.exports}var le=sy(),hh={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function oy(){if(kv)return ot;kv=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function _(O,ie,Me){this.props=O,this.context=ie,this.refs=M,this.updater=Me||b}_.prototype.isReactComponent={},_.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=_.prototype;function N(O,ie,Me){this.props=O,this.context=ie,this.refs=M,this.updater=Me||b}var w=N.prototype=new L;w.constructor=N,A(w,_.prototype),w.isPureReactComponent=!0;var G=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function D(O,ie,Me){var Ce=Me.ref;return{$$typeof:s,type:O,key:ie,ref:Ce!==void 0?Ce:null,props:Me}}function C(O,ie){return D(O.type,ie,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function te(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Me){return ie[Me]})}var de=/\/+/g;function pe(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?te(""+O.key):ie.toString(36)}function ge(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,ie,Me,Ce,Ne){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(ae){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case s:case t:fe=!0;break;case g:return fe=O._init,P(fe(O._payload),ie,Me,Ce,Ne)}}if(fe)return Ne=Ne(O),fe=Ce===""?"."+pe(O,0):Ce,G(Ne)?(Me="",fe!=null&&(Me=fe.replace(de,"$&/")+"/"),P(Ne,ie,Me,"",function(je){return je})):Ne!=null&&(V(Ne)&&(Ne=C(Ne,Me+(Ne.key==null||O&&O.key===Ne.key?"":(""+Ne.key).replace(de,"$&/")+"/")+fe)),ie.push(Ne)),1;fe=0;var De=Ce===""?".":Ce+":";if(G(O))for(var Ie=0;Ie<O.length;Ie++)Ce=O[Ie],ae=De+pe(Ce,Ie),fe+=P(Ce,ie,Me,ae,Ne);else if(Ie=E(O),typeof Ie=="function")for(O=Ie.call(O),Ie=0;!(Ce=O.next()).done;)Ce=Ce.value,ae=De+pe(Ce,Ie++),fe+=P(Ce,ie,Me,ae,Ne);else if(ae==="object"){if(typeof O.then=="function")return P(ge(O),ie,Me,Ce,Ne);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return fe}function K(O,ie,Me){if(O==null)return O;var Ce=[],Ne=0;return P(O,Ce,"","",function(ae){return ie.call(Me,ae,Ne++)}),Ce}function W(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Me){(O._status===0||O._status===-1)&&(O._status=1,O._result=Me)},function(Me){(O._status===0||O._status===-1)&&(O._status=2,O._result=Me)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ye=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},be={map:K,forEach:function(O,ie,Me){K(O,function(){ie.apply(this,arguments)},Me)},count:function(O){var ie=0;return K(O,function(){ie++}),ie},toArray:function(O){return K(O,function(ie){return ie})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return ot.Activity=v,ot.Children=be,ot.Component=_,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=N,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},ot.cache=function(O){return function(){return O.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(O,ie,Me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ce=A({},O.props),Ne=O.key;if(ie!=null)for(ae in ie.key!==void 0&&(Ne=""+ie.key),ie)!j.call(ie,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ie.ref===void 0||(Ce[ae]=ie[ae]);var ae=arguments.length-2;if(ae===1)Ce.children=Me;else if(1<ae){for(var fe=Array(ae),De=0;De<ae;De++)fe[De]=arguments[De+2];Ce.children=fe}return D(O.type,Ne,Ce)},ot.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ot.createElement=function(O,ie,Me){var Ce,Ne={},ae=null;if(ie!=null)for(Ce in ie.key!==void 0&&(ae=""+ie.key),ie)j.call(ie,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Ne[Ce]=ie[Ce]);var fe=arguments.length-2;if(fe===1)Ne.children=Me;else if(1<fe){for(var De=Array(fe),Ie=0;Ie<fe;Ie++)De[Ie]=arguments[Ie+2];Ne.children=De}if(O&&O.defaultProps)for(Ce in fe=O.defaultProps,fe)Ne[Ce]===void 0&&(Ne[Ce]=fe[Ce]);return D(O,ae,Ne)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(O){return{$$typeof:d,render:O}},ot.isValidElement=V,ot.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:W}},ot.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},ot.startTransition=function(O){var ie=z.T,Me={};z.T=Me;try{var Ce=O(),Ne=z.S;Ne!==null&&Ne(Me,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(H,ye)}catch(ae){ye(ae)}finally{ie!==null&&Me.types!==null&&(ie.types=Me.types),z.T=ie}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(O){return z.H.use(O)},ot.useActionState=function(O,ie,Me){return z.H.useActionState(O,ie,Me)},ot.useCallback=function(O,ie){return z.H.useCallback(O,ie)},ot.useContext=function(O){return z.H.useContext(O)},ot.useDebugValue=function(){},ot.useDeferredValue=function(O,ie){return z.H.useDeferredValue(O,ie)},ot.useEffect=function(O,ie){return z.H.useEffect(O,ie)},ot.useEffectEvent=function(O){return z.H.useEffectEvent(O)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(O,ie,Me){return z.H.useImperativeHandle(O,ie,Me)},ot.useInsertionEffect=function(O,ie){return z.H.useInsertionEffect(O,ie)},ot.useLayoutEffect=function(O,ie){return z.H.useLayoutEffect(O,ie)},ot.useMemo=function(O,ie){return z.H.useMemo(O,ie)},ot.useOptimistic=function(O,ie){return z.H.useOptimistic(O,ie)},ot.useReducer=function(O,ie,Me){return z.H.useReducer(O,ie,Me)},ot.useRef=function(O){return z.H.useRef(O)},ot.useState=function(O){return z.H.useState(O)},ot.useSyncExternalStore=function(O,ie,Me){return z.H.useSyncExternalStore(O,ie,Me)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.0",ot}var Xv;function Wd(){return Xv||(Xv=1,hh.exports=oy()),hh.exports}var ce=Wd(),dh={exports:{}},Uo={},ph={exports:{}},mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function ly(){return Wv||(Wv=1,(function(s){function t(P,K){var W=P.length;P.push(K);e:for(;0<W;){var ye=W-1>>>1,be=P[ye];if(0<l(be,K))P[ye]=K,P[W]=be,W=ye;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],W=P.pop();if(W!==K){P[0]=W;e:for(var ye=0,be=P.length,O=be>>>1;ye<O;){var ie=2*(ye+1)-1,Me=P[ie],Ce=ie+1,Ne=P[Ce];if(0>l(Me,W))Ce<be&&0>l(Ne,Me)?(P[ye]=Ne,P[Ce]=W,ye=Ce):(P[ye]=Me,P[ie]=W,ye=ie);else if(Ce<be&&0>l(Ne,W))P[ye]=Ne,P[Ce]=W,ye=Ce;else break e}}return K}function l(P,K){var W=P.sortIndex-K.sortIndex;return W!==0?W:P.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,v=null,y=3,E=!1,b=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=P)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function G(P){if(A=!1,w(P),!b)if(i(m)!==null)b=!0,H||(H=!0,te());else{var K=i(p);K!==null&&ge(G,K.startTime-P)}}var H=!1,z=-1,j=5,D=-1;function C(){return M?!0:!(s.unstable_now()-D<j)}function V(){if(M=!1,H){var P=s.unstable_now();D=P;var K=!0;try{e:{b=!1,A&&(A=!1,L(z),z=-1),E=!0;var W=y;try{t:{for(w(P),v=i(m);v!==null&&!(v.expirationTime>P&&C());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,y=v.priorityLevel;var be=ye(v.expirationTime<=P);if(P=s.unstable_now(),typeof be=="function"){v.callback=be,w(P),K=!0;break t}v===i(m)&&r(m),w(P)}else r(m);v=i(m)}if(v!==null)K=!0;else{var O=i(p);O!==null&&ge(G,O.startTime-P),K=!1}}break e}finally{v=null,y=W,E=!1}K=void 0}}finally{K?te():H=!1}}}var te;if(typeof N=="function")te=function(){N(V)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=V,te=function(){pe.postMessage(null)}}else te=function(){_(V,0)};function ge(P,K){z=_(function(){P(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var W=y;y=K;try{return P()}finally{y=W}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=y;y=P;try{return K()}finally{y=W}},s.unstable_scheduleCallback=function(P,K,W){var ye=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ye+W:ye):W=ye,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=W+be,P={id:g++,callback:K,priorityLevel:P,startTime:W,expirationTime:be,sortIndex:-1},W>ye?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(A?(L(z),z=-1):A=!0,ge(G,W-ye))):(P.sortIndex=be,t(m,P),b||E||(b=!0,H||(H=!0,te()))),P},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(P){var K=y;return function(){var W=y;y=K;try{return P.apply(this,arguments)}finally{y=W}}}})(mh)),mh}var qv;function uy(){return qv||(qv=1,ph.exports=ly()),ph.exports}var gh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function cy(){if(Yv)return An;Yv=1;var s=Wd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},An.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},An.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},An.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},An.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},An.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},An.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},An.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},An.requestFormReset=function(m){r.d.r(m)},An.unstable_batchedUpdates=function(m,p){return m(p)},An.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},An.useFormStatus=function(){return h.H.useHostTransitionStatus()},An.version="19.2.0",An}var jv;function fy(){if(jv)return gh.exports;jv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),gh.exports=cy(),gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function hy(){if(Zv)return Uo;Zv=1;var s=uy(),t=Wd(),i=fy();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===o)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,T=c.child;T;){if(T===a){S=!0,a=c,o=f;break}if(T===o){S=!0,o=c,a=f;break}T=T.sibling}if(!S){for(T=f.child;T;){if(T===a){S=!0,a=f,o=c;break}if(T===o){S=!0,o=f,a=c;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),N=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var de=Symbol.for("react.client.reference");function pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case G:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:pe(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return pe(e(n))}catch{}}return null}var ge=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function O(e){return{current:e}}function ie(e){0>be||(e.current=ye[be],ye[be]=null,be--)}function Me(e,n){be++,ye[be]=e.current,e.current=n}var Ce=O(null),Ne=O(null),ae=O(null),fe=O(null);function De(e,n){switch(Me(ae,n),Me(Ne,e),Me(Ce,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cv(n),e=fv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ie(Ce),Me(Ce,e)}function Ie(){ie(Ce),ie(Ne),ie(ae)}function je(e){e.memoizedState!==null&&Me(fe,e);var n=Ce.current,a=fv(n,e.type);n!==a&&(Me(Ne,e),Me(Ce,a))}function ft(e){Ne.current===e&&(ie(Ce),ie(Ne)),fe.current===e&&(ie(fe),Ao._currentValue=W)}var Qt,F;function Tt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+F}var at=!1;function tt(e,n){if(!e||at)return"";at=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ue){var ne=ue}Reflect.construct(e,[],_e)}else{try{_e.call()}catch(ue){ne=ue}e.call(_e.prototype)}}else{try{throw Error()}catch(ue){ne=ue}(_e=e())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ue){if(ue&&ne&&typeof ue.stack=="string")return[ue.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],T=f[1];if(S&&T){var B=S.split(`
`),$=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===$.length)for(o=B.length-1,c=$.length-1;1<=o&&0<=c&&B[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==$[c]){var me=`
`+B[o].replace(" at new "," at ");return e.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",e.displayName)),me}while(1<=o&&0<=c);break}}}finally{at=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Tt(a):""}function Ze(e,n){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return tt(e.type,!1);case 11:return tt(e.type.render,!1);case 1:return tt(e.type,!0);case 31:return Tt("Activity");default:return""}}function Mt(e){try{var n="",a=null;do n+=Ze(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,rt=s.unstable_scheduleCallback,qt=s.unstable_cancelCallback,Xt=s.unstable_shouldYield,U=s.unstable_requestPaint,x=s.unstable_now,I=s.unstable_getCurrentPriorityLevel,Q=s.unstable_ImmediatePriority,he=s.unstable_UserBlockingPriority,ee=s.unstable_NormalPriority,Le=s.unstable_LowPriority,Re=s.unstable_IdlePriority,He=s.log,Xe=s.unstable_setDisableYieldValue,Te=null,we=null;function Qe(e){if(typeof He=="function"&&Xe(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Te,e)}catch{}}var Fe=Math.clz32?Math.clz32:X,Oe=Math.log,lt=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Oe(e)/lt|0)|0}var Ae=256,Ue=262144,Ge=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?c=Ee(o):(S&=T,S!==0?c=Ee(S):a||(a=T&~e,a!==0&&(c=Ee(a))))):(T=o&~f,T!==0?c=Ee(T):S!==0?c=Ee(S):a||(a=o&~e,a!==0&&(c=Ee(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ke(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function st(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ti(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var me=31-Fe(a),_e=1<<me;T[me]=0,B[me]=-1;var ne=$[me];if(ne!==null)for($[me]=null,me=0;me<ne.length;me++){var ue=ne[me];ue!==null&&(ue.lane&=-536870913)}a&=~_e}o!==0&&Is(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Is(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Fe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Fe(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Dr(e,n){var a=n&-n;return a=(a&42)!==0?1:Ur(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ur(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ja(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Ov(e.type))}function Hs(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,xn="__reactProps$"+Xn,ma="__reactContainer$"+Xn,Gs="__reactEvents$"+Xn,ac="__reactListeners$"+Xn,rc="__reactHandles$"+Xn,il="__reactResources$"+Xn,$a="__reactMarker$"+Xn;function R(e){delete e[rn],delete e[xn],delete e[Gs],delete e[ac],delete e[rc]}function q(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ma]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_v(e);e!==null;){if(a=e[rn])return a;e=_v(e)}return n}e=a,a=e.parentNode}return null}function re(e){if(e=e[rn]||e[ma]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function oe(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Z(e){var n=e[il];return n||(n=e[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Se(e){e[$a]=!0}var Pe=new Set,qe={};function Be(e,n){Je(e,n),Je(e+"Capture",n)}function Je(e,n){for(qe[e]=n,e=0;e<n.length;e++)Pe.add(n[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},mt={};function Nt(e){return Ve.call(mt,e)?!0:Ve.call($e,e)?!1:it.test(e)?mt[e]=!0:($e[e]=!0,!1)}function Vt(e,n,a){if(Nt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ot(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function gt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ye(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rt(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sn(e){if(!e._valueTracker){var n=Wt(e)?"checked":"value";e._valueTracker=Rt(e,n,""+e[n])}}function zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Wt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var er=/[\n"\\]/g;function xt(e){return e.replace(er,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(e,n,a,o,c,f,S,T){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ye(n)):e.value!==""+Ye(n)&&(e.value=""+Ye(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?hn(e,S,Ye(n)):a!=null?hn(e,S,Ye(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ye(T):e.removeAttribute("name")}function Dn(e,n,a,o,c,f,S,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(e);return}a=a!=null?""+Ye(a):"",n=n!=null?""+Ye(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Sn(e)}function hn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ye(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Nr(e,n,a){if(n!=null&&(n=""+Ye(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ye(a):""}function Ai(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ge(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ye(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Sn(e)}function Or(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ex=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function op(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ex.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function lp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&op(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&op(e,f,n[f])}function sc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return nx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var oc=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,zr=null;function up(e){var n=re(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Tn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[xn]||null;if(!c)throw Error(r(90));Tn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&zi(o)}break e;case"textarea":Nr(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var uc=!1;function cp(e,n,a){if(uc)return e(n,a);uc=!0;try{var o=e(n);return o}finally{if(uc=!1,(Pr!==null||zr!==null)&&(Wl(),Pr&&(n=Pr,e=zr,zr=Pr=null,up(n),e)))for(n=0;n<e.length;n++)up(e[n])}}function Vs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(Fi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){cc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{cc=!1}var ga=null,fc=null,rl=null;function fp(){if(rl)return rl;var e,n=fc,a=n.length,o,c="value"in ga?ga.value:ga.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return rl=c.slice(e,1<o?1-o:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function hp(){return!1}function On(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:hp,this.isPropagationStopped=hp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=On(tr),Xs=v({},tr,{view:0,detail:0}),ix=On(Xs),hc,dc,Ws,ul=v({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(hc=e.screenX-Ws.screenX,dc=e.screenY-Ws.screenY):dc=hc=0,Ws=e),hc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),dp=On(ul),ax=v({},ul,{dataTransfer:0}),rx=On(ax),sx=v({},Xs,{relatedTarget:0}),pc=On(sx),ox=v({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),lx=On(ox),ux=v({},tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cx=On(ux),fx=v({},tr,{data:0}),pp=On(fx),hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=px[e])?!!n[e]:!1}function mc(){return mx}var gx=v({},Xs,{key:function(e){if(e.key){var n=hx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vx=On(gx),_x=v({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=On(_x),xx=v({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),Sx=On(xx),yx=v({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=On(yx),Ex=v({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=On(Ex),Tx=v({},tr,{newState:0,oldState:0}),Ax=On(Tx),Rx=[9,13,27,32],gc=Fi&&"CompositionEvent"in window,qs=null;Fi&&"documentMode"in document&&(qs=document.documentMode);var Cx=Fi&&"TextEvent"in window&&!qs,gp=Fi&&(!gc||qs&&8<qs&&11>=qs),vp=" ",_p=!1;function xp(e,n){switch(e){case"keyup":return Rx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function wx(e,n){switch(e){case"compositionend":return Sp(n);case"keypress":return n.which!==32?null:(_p=!0,vp);case"textInput":return e=n.data,e===vp&&_p?null:e;default:return null}}function Dx(e,n){if(Br)return e==="compositionend"||!gc&&xp(e,n)?(e=fp(),rl=fc=ga=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var Ux={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ux[e.type]:n==="textarea"}function Mp(e,n,a,o){Pr?zr?zr.push(o):zr=[o]:Pr=o,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ys=null,js=null;function Lx(e){av(e,0)}function cl(e){var n=oe(e);if(zi(n))return e}function Ep(e,n){if(e==="change")return n}var bp=!1;if(Fi){var vc;if(Fi){var _c="oninput"in document;if(!_c){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),_c=typeof Tp.oninput=="function"}vc=_c}else vc=!1;bp=vc&&(!document.documentMode||9<document.documentMode)}function Ap(){Ys&&(Ys.detachEvent("onpropertychange",Rp),js=Ys=null)}function Rp(e){if(e.propertyName==="value"&&cl(js)){var n=[];Mp(n,js,e,lc(e)),cp(Lx,n)}}function Nx(e,n,a){e==="focusin"?(Ap(),Ys=n,js=a,Ys.attachEvent("onpropertychange",Rp)):e==="focusout"&&Ap()}function Ox(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(js)}function Px(e,n){if(e==="click")return cl(n)}function zx(e,n){if(e==="input"||e==="change")return cl(n)}function Bx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Bx;function Zs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Ve.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Cp(a)}}function Dp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function xc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Fx=Fi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Sc=null,Ks=null,yc=!1;function Lp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||Fr==null||Fr!==gn(o)||(o=Fr,"selectionStart"in o&&xc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=Jl(Sc,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Mc={},Np={};Fi&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ir(e){if(Mc[e])return Mc[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Np)return Mc[e]=n[a];return e}var Op=ir("animationend"),Pp=ir("animationiteration"),zp=ir("animationstart"),Ix=ir("transitionrun"),Hx=ir("transitionstart"),Gx=ir("transitioncancel"),Bp=ir("transitionend"),Fp=new Map,Ec="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ec.push("scrollEnd");function pi(e,n){Fp.set(e,n),Be(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Hr=0,bc=0;function hl(){for(var e=Hr,n=bc=Hr=0;n<e;){var a=ni[n];ni[n++]=null;var o=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&Ip(a,c,f)}}function dl(e,n,a,o){ni[Hr++]=e,ni[Hr++]=n,ni[Hr++]=a,ni[Hr++]=o,bc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tc(e,n,a,o){return dl(e,n,a,o),pl(e)}function ar(e,n){return dl(e,null,null,n),pl(e)}function Ip(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Fe(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<xo)throw xo=0,Pf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Vx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Vx(e,n,a,o)}function Ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")Ac(e)&&(S=1);else if(typeof e=="string")S=YS(e,a,Ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=qn(31,a,n,c),e.elementType=D,e.lanes=f,e;case A:return rr(a.children,c,f,n);case M:S=8,c|=24;break;case _:return e=qn(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case G:return e=qn(13,a,n,c),e.elementType=G,e.lanes=f,e;case H:return e=qn(19,a,n,c),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:S=10;break e;case L:S=9;break e;case w:S=11;break e;case z:S=14;break e;case j:S=16,o=null;break e}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function rr(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function Rc(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Gp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function Cc(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Mt(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:Mt(n)}}var Vr=[],kr=0,gl=null,Qs=0,ai=[],ri=0,va=null,Ri=1,Ci="";function Hi(e,n){Vr[kr++]=Qs,Vr[kr++]=gl,gl=e,Qs=n}function kp(e,n,a){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=va,va=e;var o=Ri;e=Ci;var c=32-Fe(o)-1;o&=~(1<<c),a+=1;var f=32-Fe(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Ri=1<<32-Fe(n)+c|a<<c|o,Ci=f+e}else Ri=1<<f|a<<c|o,Ci=e}function wc(e){e.return!==null&&(Hi(e,1),kp(e,1,0))}function Dc(e){for(;e===gl;)gl=Vr[--kr],Vr[kr]=null,Qs=Vr[--kr],Vr[kr]=null;for(;e===va;)va=ai[--ri],ai[ri]=null,Ci=ai[--ri],ai[ri]=null,Ri=ai[--ri],ai[ri]=null}function Xp(e,n){ai[ri++]=Ri,ai[ri++]=Ci,ai[ri++]=va,Ri=n.id,Ci=n.overflow,va=e}var yn=null,Yt=null,Et=!1,_a=null,si=!1,Uc=Error(r(519));function xa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Js(ii(n,e)),Uc}function Wp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[xn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)_t(yo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||lv(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||xa(e,!0)}function qp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:yn=yn.return}}function Xr(e){if(e!==yn)return!1;if(!Et)return qp(e),Et=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Yt&&xa(e),qp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=vv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Yt=vv(e)}else n===27?(n=Yt,Na(e.type)?(e=th,th=null,Yt=e):Yt=n):Yt=yn?li(e.stateNode.nextSibling):null;return!0}function sr(){Yt=yn=null,Et=!1}function Lc(){var e=_a;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),_a=null),e}function Js(e){_a===null?_a=[e]:_a.push(e)}var Nc=O(null),or=null,Gi=null;function Sa(e,n,a){Me(Nc,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=Nc.current,ie(Nc)}function Oc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Oc(f.return,a,e),o||(S=null);break e}f=T.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Oc(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Wr(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=c.type;Wn(c.pendingProps.value,S.value)||(e!==null?e.push(T):e=[T])}}else if(c===fe.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}c=c.return}e!==null&&Pc(n,e,a,o),n.flags|=262144}function vl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function lr(e){or=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Yp(or,e)}function _l(e,n){return or===null&&lr(e),Yp(e,n)}function Yp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var kx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Xx=s.unstable_scheduleCallback,Wx=s.unstable_NormalPriority,sn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zc(){return{controller:new kx,data:new Map,refCount:0}}function $s(e){e.refCount--,e.refCount===0&&Xx(Wx,function(){e.controller.abort()})}var eo=null,Bc=0,qr=0,Yr=null;function qx(e,n){if(eo===null){var a=eo=[];Bc=0,qr=Gf(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Bc++,n.then(jp,jp),n}function jp(){if(--Bc===0&&eo!==null){Yr!==null&&(Yr.status="fulfilled");var e=eo;eo=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Yx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Zp=P.S;P.S=function(e,n){Lg=x(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qx(e,n),Zp!==null&&Zp(e,n)};var ur=O(null);function Fc(){var e=ur.current;return e!==null?e:kt.pooledCache}function xl(e,n){n===null?Me(ur,ur.current):Me(ur,n.pool)}function Kp(){var e=Fc();return e===null?null:{parent:sn._currentValue,pool:e}}var jr=Error(r(460)),Ic=Error(r(474)),Sl=Error(r(542)),yl={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=kt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e}throw fr=n,jr}}function cr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fr=a,jr):a}}var fr=null;function $p(){if(fr===null)throw Error(r(459));var e=fr;return fr=null,e}function em(e){if(e===jr||e===Sl)throw Error(r(483))}var Zr=null,to=0;function Ml(e){var n=to;return to+=1,Zr===null&&(Zr=[]),Jp(Zr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function El(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tm(e){function n(Y,k){if(e){var J=Y.deletions;J===null?(Y.deletions=[k],Y.flags|=16):J.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function c(Y,k){return Y=Ii(Y,k),Y.index=0,Y.sibling=null,Y}function f(Y,k,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<k?(Y.flags|=67108866,k):J):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,k,J,ve){return k===null||k.tag!==6?(k=Rc(J,Y.mode,ve),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function B(Y,k,J,ve){var et=J.type;return et===A?me(Y,k,J.props.children,ve,J.key):k!==null&&(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&cr(et)===k.type)?(k=c(k,J.props),no(k,J),k.return=Y,k):(k=ml(J.type,J.key,J.props,null,Y.mode,ve),no(k,J),k.return=Y,k)}function $(Y,k,J,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==J.containerInfo||k.stateNode.implementation!==J.implementation?(k=Cc(J,Y.mode,ve),k.return=Y,k):(k=c(k,J.children||[]),k.return=Y,k)}function me(Y,k,J,ve,et){return k===null||k.tag!==7?(k=rr(J,Y.mode,ve,et),k.return=Y,k):(k=c(k,J),k.return=Y,k)}function _e(Y,k,J){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Rc(""+k,Y.mode,J),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return J=ml(k.type,k.key,k.props,null,Y.mode,J),no(J,k),J.return=Y,J;case b:return k=Cc(k,Y.mode,J),k.return=Y,k;case j:return k=cr(k),_e(Y,k,J)}if(ge(k)||te(k))return k=rr(k,Y.mode,J,null),k.return=Y,k;if(typeof k.then=="function")return _e(Y,Ml(k),J);if(k.$$typeof===N)return _e(Y,_l(Y,k),J);El(Y,k)}return null}function ne(Y,k,J,ve){var et=k!==null?k.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return et!==null?null:T(Y,k,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case E:return J.key===et?B(Y,k,J,ve):null;case b:return J.key===et?$(Y,k,J,ve):null;case j:return J=cr(J),ne(Y,k,J,ve)}if(ge(J)||te(J))return et!==null?null:me(Y,k,J,ve,null);if(typeof J.then=="function")return ne(Y,k,Ml(J),ve);if(J.$$typeof===N)return ne(Y,k,_l(Y,J),ve);El(Y,J)}return null}function ue(Y,k,J,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Y=Y.get(J)||null,T(k,Y,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return Y=Y.get(ve.key===null?J:ve.key)||null,B(k,Y,ve,et);case b:return Y=Y.get(ve.key===null?J:ve.key)||null,$(k,Y,ve,et);case j:return ve=cr(ve),ue(Y,k,J,ve,et)}if(ge(ve)||te(ve))return Y=Y.get(J)||null,me(k,Y,ve,et,null);if(typeof ve.then=="function")return ue(Y,k,J,Ml(ve),et);if(ve.$$typeof===N)return ue(Y,k,J,_l(k,ve),et);El(k,ve)}return null}function We(Y,k,J,ve){for(var et=null,Ct=null,Ke=k,ht=k=0,yt=null;Ke!==null&&ht<J.length;ht++){Ke.index>ht?(yt=Ke,Ke=null):yt=Ke.sibling;var wt=ne(Y,Ke,J[ht],ve);if(wt===null){Ke===null&&(Ke=yt);break}e&&Ke&&wt.alternate===null&&n(Y,Ke),k=f(wt,k,ht),Ct===null?et=wt:Ct.sibling=wt,Ct=wt,Ke=yt}if(ht===J.length)return a(Y,Ke),Et&&Hi(Y,ht),et;if(Ke===null){for(;ht<J.length;ht++)Ke=_e(Y,J[ht],ve),Ke!==null&&(k=f(Ke,k,ht),Ct===null?et=Ke:Ct.sibling=Ke,Ct=Ke);return Et&&Hi(Y,ht),et}for(Ke=o(Ke);ht<J.length;ht++)yt=ue(Ke,Y,ht,J[ht],ve),yt!==null&&(e&&yt.alternate!==null&&Ke.delete(yt.key===null?ht:yt.key),k=f(yt,k,ht),Ct===null?et=yt:Ct.sibling=yt,Ct=yt);return e&&Ke.forEach(function(Fa){return n(Y,Fa)}),Et&&Hi(Y,ht),et}function nt(Y,k,J,ve){if(J==null)throw Error(r(151));for(var et=null,Ct=null,Ke=k,ht=k=0,yt=null,wt=J.next();Ke!==null&&!wt.done;ht++,wt=J.next()){Ke.index>ht?(yt=Ke,Ke=null):yt=Ke.sibling;var Fa=ne(Y,Ke,wt.value,ve);if(Fa===null){Ke===null&&(Ke=yt);break}e&&Ke&&Fa.alternate===null&&n(Y,Ke),k=f(Fa,k,ht),Ct===null?et=Fa:Ct.sibling=Fa,Ct=Fa,Ke=yt}if(wt.done)return a(Y,Ke),Et&&Hi(Y,ht),et;if(Ke===null){for(;!wt.done;ht++,wt=J.next())wt=_e(Y,wt.value,ve),wt!==null&&(k=f(wt,k,ht),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return Et&&Hi(Y,ht),et}for(Ke=o(Ke);!wt.done;ht++,wt=J.next())wt=ue(Ke,Y,ht,wt.value,ve),wt!==null&&(e&&wt.alternate!==null&&Ke.delete(wt.key===null?ht:wt.key),k=f(wt,k,ht),Ct===null?et=wt:Ct.sibling=wt,Ct=wt);return e&&Ke.forEach(function(ay){return n(Y,ay)}),Et&&Hi(Y,ht),et}function Ht(Y,k,J,ve){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case E:e:{for(var et=J.key;k!==null;){if(k.key===et){if(et=J.type,et===A){if(k.tag===7){a(Y,k.sibling),ve=c(k,J.props.children),ve.return=Y,Y=ve;break e}}else if(k.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===j&&cr(et)===k.type){a(Y,k.sibling),ve=c(k,J.props),no(ve,J),ve.return=Y,Y=ve;break e}a(Y,k);break}else n(Y,k);k=k.sibling}J.type===A?(ve=rr(J.props.children,Y.mode,ve,J.key),ve.return=Y,Y=ve):(ve=ml(J.type,J.key,J.props,null,Y.mode,ve),no(ve,J),ve.return=Y,Y=ve)}return S(Y);case b:e:{for(et=J.key;k!==null;){if(k.key===et)if(k.tag===4&&k.stateNode.containerInfo===J.containerInfo&&k.stateNode.implementation===J.implementation){a(Y,k.sibling),ve=c(k,J.children||[]),ve.return=Y,Y=ve;break e}else{a(Y,k);break}else n(Y,k);k=k.sibling}ve=Cc(J,Y.mode,ve),ve.return=Y,Y=ve}return S(Y);case j:return J=cr(J),Ht(Y,k,J,ve)}if(ge(J))return We(Y,k,J,ve);if(te(J)){if(et=te(J),typeof et!="function")throw Error(r(150));return J=et.call(J),nt(Y,k,J,ve)}if(typeof J.then=="function")return Ht(Y,k,Ml(J),ve);if(J.$$typeof===N)return Ht(Y,k,_l(Y,J),ve);El(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,k!==null&&k.tag===6?(a(Y,k.sibling),ve=c(k,J),ve.return=Y,Y=ve):(a(Y,k),ve=Rc(J,Y.mode,ve),ve.return=Y,Y=ve),S(Y)):a(Y,k)}return function(Y,k,J,ve){try{to=0;var et=Ht(Y,k,J,ve);return Zr=null,et}catch(Ke){if(Ke===jr||Ke===Sl)throw Ke;var Ct=qn(29,Ke,null,Y.mode);return Ct.lanes=ve,Ct.return=Y,Ct}finally{}}}var hr=tm(!0),nm=tm(!1),ya=!1;function Hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=pl(e),Ip(e,null,a),n}return dl(e,o,n,a),pl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}function Vc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var kc=!1;function ao(){if(kc){var e=Yr;if(e!==null)throw e}}function ro(e,n,a,o){kc=!1;var c=e.updateQueue;ya=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,$=B.next;B.next=null,S===null?f=$:S.next=$,S=B;var me=e.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==S&&(T===null?me.firstBaseUpdate=$:T.next=$,me.lastBaseUpdate=B))}if(f!==null){var _e=c.baseState;S=0,me=$=B=null,T=f;do{var ne=T.lane&-536870913,ue=ne!==T.lane;if(ue?(St&ne)===ne:(o&ne)===ne){ne!==0&&ne===qr&&(kc=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var We=e,nt=T;ne=n;var Ht=a;switch(nt.tag){case 1:if(We=nt.payload,typeof We=="function"){_e=We.call(Ht,_e,ne);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=nt.payload,ne=typeof We=="function"?We.call(Ht,_e,ne):We,ne==null)break e;_e=v({},_e,ne);break e;case 2:ya=!0}}ne=T.callback,ne!==null&&(e.flags|=64,ue&&(e.flags|=8192),ue=c.callbacks,ue===null?c.callbacks=[ne]:ue.push(ne))}else ue={lane:ne,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?($=me=ue,B=_e):me=me.next=ue,S|=ne;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ue=T,T=ue.next,ue.next=null,c.lastBaseUpdate=ue,c.shared.pending=null}}while(!0);me===null&&(B=_e),c.baseState=B,c.firstBaseUpdate=$,c.lastBaseUpdate=me,f===null&&(c.shared.lanes=0),Ca|=S,e.lanes=S,e.memoizedState=_e}}function im(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)im(a[e],n)}var Kr=O(null),bl=O(0);function rm(e,n){e=Qi,Me(bl,e),Me(Kr,n),Qi=e|n.baseLanes}function Xc(){Me(bl,Qi),Me(Kr,Kr.current)}function Wc(){Qi=bl.current,ie(Kr),ie(bl)}var Yn=O(null),oi=null;function ba(e){var n=e.alternate;Me(nn,nn.current&1),Me(Yn,e),oi===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(oi=e)}function qc(e){Me(nn,nn.current),Me(Yn,e),oi===null&&(oi=e)}function sm(e){e.tag===22?(Me(nn,nn.current),Me(Yn,e),oi===null&&(oi=e)):Ta()}function Ta(){Me(nn,nn.current),Me(Yn,Yn.current)}function jn(e){ie(Yn),oi===e&&(oi=null),ie(nn)}var nn=O(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||eh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,ct=null,Ft=null,on=null,Al=!1,Qr=!1,dr=!1,Rl=0,so=0,Jr=null,jx=0;function Jt(){throw Error(r(321))}function Yc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function jc(e,n,a,o,c,f){return ki=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?km:cf,dr=!1,f=a(o,c),dr=!1,Qr&&(f=lm(n,a,o,c)),om(e),f}function om(e){P.H=uo;var n=Ft!==null&&Ft.next!==null;if(ki=0,on=Ft=ct=null,Al=!1,so=0,Jr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&vl(e)&&(ln=!0))}function lm(e,n,a,o){ct=e;var c=0;do{if(Qr&&(Jr=null),so=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Xm,f=n(a,o)}while(Qr);return f}function Zx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(ct.flags|=1024),n}function Zc(){var e=Rl!==0;return Rl=0,e}function Kc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qc(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}ki=0,on=Ft=ct=null,Qr=!1,so=Rl=0,Jr=null}function Un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?ct.memoizedState=on=e:on=on.next=e,on}function an(){if(Ft===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?ct.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?ct.memoizedState=on=e:on=on.next=e}return on}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=so;return so+=1,Jr===null&&(Jr=[]),e=Jp(Jr,e,n),n=ct,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?km:cf),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===N)return Mn(e)}throw Error(r(438,String(e)))}function Jc(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=an();return $c(n,Ft,e)}function $c(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=S=null,B=null,$=n,me=!1;do{var _e=$.lane&-536870913;if(_e!==$.lane?(St&_e)===_e:(ki&_e)===_e){var ne=$.revertLane;if(ne===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_e===qr&&(me=!0);else if((ki&ne)===ne){$=$.next,ne===qr&&(me=!0);continue}else _e={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=_e,S=f):B=B.next=_e,ct.lanes|=ne,Ca|=ne;_e=$.action,dr&&a(f,_e),f=$.hasEagerState?$.eagerState:a(f,_e)}else ne={lane:_e,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ne,S=f):B=B.next=ne,ct.lanes|=_e,Ca|=_e;$=$.next}while($!==null&&$!==n);if(B===null?S=f:B.next=T,!Wn(f,e.memoizedState)&&(ln=!0,me&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ef(e){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function um(e,n,a){var o=ct,c=an(),f=Et;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Wn((Ft||c).memoizedState,a);if(S&&(c.memoizedState=a,ln=!0),c=c.queue,af(hm.bind(null,o,c,e),[e]),c.getSnapshot!==n||S||on!==null&&on.memoizedState.tag&1){if(o.flags|=2048,$r(9,{destroy:void 0},fm.bind(null,o,c,a,n),null),kt===null)throw Error(r(349));f||(ki&127)!==0||cm(o,n,a)}return a}function cm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Cl(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function pm(e){var n=ar(e,2);n!==null&&In(n,e,2)}function tf(e){var n=Un();if(typeof e=="function"){var a=e;if(e=a(),dr){Qe(!0);try{a()}finally{Qe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,$c(e,Ft,typeof o=="function"?o:Xi)}function Kx(e,n,a,o,c){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var T=a(c,o),B=P.S;B!==null&&B(S,T),vm(e,n,T)}catch($){nf(e,n,$)}finally{f!==null&&S.types!==null&&(f.types=S.types),P.T=f}}else try{f=a(c,o),vm(e,n,f)}catch($){nf(e,n,$)}}function vm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_m(e,n,o)},function(o){return nf(e,n,o)}):_m(e,n,a)}function _m(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function nf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Sm(e,n){return n}function ym(e,n){if(Et){var a=kt.formState;if(a!==null){e:{var o=ct;if(Et){if(Yt){t:{for(var c=Yt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Yt=li(c.nextSibling),o=c.data==="F!";break e}}xa(o)}o=!1}o&&(n=a[0])}}return a=Un(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sm,lastRenderedState:n},a.queue=o,a=Hm.bind(null,ct,o),o.dispatch=a,o=tf(!1),f=uf.bind(null,ct,!1,o.queue),o=Un(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Kx.bind(null,ct,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=an();return Em(n,Ft,e)}function Em(e,n,a){if(n=$c(e,n,Sm)[0],e=Dl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(S){throw S===jr?Sl:S}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,$r(9,{destroy:void 0},Qx.bind(null,c,a),null)),[o,f,e]}function Qx(e,n){e.action=n}function bm(e){var n=an(),a=Ft;if(a!==null)return Em(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function $r(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Cl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Tm(){return an().memoizedState}function Ul(e,n,a,o){var c=Un();ct.flags|=e,c.memoizedState=$r(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ll(e,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Ft!==null&&o!==null&&Yc(o,Ft.memoizedState.deps)?c.memoizedState=$r(n,f,a,o):(ct.flags|=e,c.memoizedState=$r(1|n,f,a,o))}function Am(e,n){Ul(8390656,8,e,n)}function af(e,n){Ll(2048,8,e,n)}function Jx(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Cl(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Rm(e){var n=an().memoizedState;return Jx({ref:n,nextImpl:e}),function(){if((Ut&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Cm(e,n){return Ll(4,2,e,n)}function wm(e,n){return Ll(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,Dm.bind(null,n,e),a)}function rf(){}function Lm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yc(n,o[1]))return o[0];if(o=e(),dr){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[o,n],o}function sf(e,n,a){return a===void 0||(ki&1073741824)!==0&&(St&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Og(),ct.lanes|=e,Ca|=e,a)}function Om(e,n,a,o){return Wn(a,n)?a:Kr.current!==null?(e=sf(e,a,o),Wn(e,n)||(ln=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(St&261930)===0?(ln=!0,e.memoizedState=a):(e=Og(),ct.lanes|=e,Ca|=e,n)}function Pm(e,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var S=P.T,T={};P.T=T,uf(e,!1,n,a);try{var B=c(),$=P.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var me=Yx(B,o);lo(e,n,me,Qn(e))}else lo(e,n,o,Qn(e))}catch(_e){lo(e,n,{then:function(){},status:"rejected",reason:_e},Qn())}finally{K.p=f,S!==null&&T.types!==null&&(S.types=T.types),P.T=S}}function $x(){}function of(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=zm(e).queue;Pm(e,c,n,W,a===null?$x:function(){return Bm(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bm(e){var n=zm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},Qn())}function lf(){return Mn(Ao)}function Fm(){return an().memoizedState}function Im(){return an().memoizedState}function eS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Ma(a);var o=Ea(n,e,a);o!==null&&(In(o,n,a),io(o,n,a)),n={cache:zc()},e.payload=n;return}n=n.return}}function tS(e,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Gm(n,a):(a=Tc(e,n,a,o),a!==null&&(In(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=Qn();lo(e,n,a,o)}function lo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Gm(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,T=f(S,a);if(c.hasEagerState=!0,c.eagerState=T,Wn(T,S))return dl(e,n,c,0),kt===null&&hl(),!1}catch{}finally{}if(a=Tc(e,n,c,o),a!==null)return In(a,e,o),Vm(a,n,o),!0}return!1}function uf(e,n,a,o){if(o={lane:2,revertLane:Gf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Tc(e,a,o,2),n!==null&&In(n,e,2)}function Nl(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function Gm(e,n){Qr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}var uo={readContext:Mn,use:wl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};uo.useEffectEvent=Jt;var km={readContext:Mn,use:wl,useCallback:function(e,n){return Un().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Un();n=n===void 0?null:n;var o=e();if(dr){Qe(!0);try{e()}finally{Qe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Un();if(a!==void 0){var c=a(n);if(dr){Qe(!0);try{a(n)}finally{Qe(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=tS.bind(null,ct,e),[o.memoizedState,e]},useRef:function(e){var n=Un();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Hm.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=Un();return sf(a,e,n)},useTransition:function(){var e=tf(!1);return e=Pm.bind(null,ct,e.queue,!0,!1),Un().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ct,c=Un();if(Et){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&127)!==0||cm(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Am(hm.bind(null,o,f,e),[e]),o.flags|=2048,$r(9,{destroy:void 0},fm.bind(null,o,f,a,n),null),a},useId:function(){var e=Un(),n=kt.identifierPrefix;if(Et){var a=Ci,o=Ri;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=jx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:ym,useActionState:ym,useOptimistic:function(e){var n=Un();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Jc,useCacheRefresh:function(){return Un().memoizedState=eS.bind(null,ct)},useEffectEvent:function(e){var n=Un(),a={impl:e};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},cf={readContext:Mn,use:wl,useCallback:Lm,useContext:Mn,useEffect:af,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:Dl,useRef:Tm,useState:function(){return Dl(Xi)},useDebugValue:rf,useDeferredValue:function(e,n){var a=an();return Om(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Dl(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:lf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=an();return mm(a,Ft,e,n)},useMemoCache:Jc,useCacheRefresh:Im};cf.useEffectEvent=Rm;var Xm={readContext:Mn,use:wl,useCallback:Lm,useContext:Mn,useEffect:af,useImperativeHandle:Um,useInsertionEffect:Cm,useLayoutEffect:wm,useMemo:Nm,useReducer:ef,useRef:Tm,useState:function(){return ef(Xi)},useDebugValue:rf,useDeferredValue:function(e,n){var a=an();return Ft===null?sf(a,e,n):Om(a,Ft.memoizedState,e,n)},useTransition:function(){var e=ef(Xi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:um,useId:Fm,useHostTransitionStatus:lf,useFormState:bm,useActionState:bm,useOptimistic:function(e,n){var a=an();return Ft!==null?mm(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:Im};Xm.useEffectEvent=Rm;function ff(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var hf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Ma(o);c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(In(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),c=Ma(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ea(e,c,o),n!==null&&(In(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Ma(a);o.tag=2,n!=null&&(o.callback=n),n=Ea(e,o,a),n!==null&&(In(n,e,a),io(n,e,a))}};function Wm(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,o)||!Zs(c,f):!0}function qm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&hf.enqueueReplaceState(n,n.state,null)}function pr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Ym(e){fl(e)}function jm(e){console.error(e)}function Zm(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Km(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function df(e,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Qm(e){return e=Ma(e),e.tag=3,e}function Jm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Km(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Km(n,a,o),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function nS(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?ql():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ff(e,o,c)),!1;case 22:return a.flags|=65536,o===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ff(e,o,c)),!1}throw Error(r(435,a.tag))}return Ff(e,o,c),ql(),!1}if(Et)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Uc&&(e=Error(r(422),{cause:o}),Js(ii(e,a)))):(o!==Uc&&(n=Error(r(423),{cause:o}),Js(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=ii(o,a),c=df(e.stateNode,o,c),Vc(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:o});if(f=ii(f,a),_o===null?_o=[f]:_o.push(f),$t!==4&&($t=2),n===null)return!0;o=ii(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=df(a.stateNode,o,e),Vc(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Qm(c),Jm(c,e,a,o),Vc(a,c),!1}a=a.return}while(a!==null);return!1}var pf=Error(r(461)),ln=!1;function En(e,n,a,o){n.child=e===null?nm(n,null,a,o):hr(n,e.child,a,o)}function $m(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return lr(n),o=jc(e,n,a,S,f,c),T=Zc(),e!==null&&!ln?(Kc(e,n,c),Wi(e,n,c)):(Et&&T&&wc(n),n.flags|=1,En(e,n,o,c),n.child)}function eg(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!Ac(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tg(e,n,f,o,c)):(e=ml(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mf(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(S,o)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=Ii(f,o),e.ref=n.ref,e.return=n,n.child=e}function tg(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(Zs(f,o)&&e.ref===n.ref)if(ln=!1,n.pendingProps=o=f,Mf(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return mf(e,n,a,o,c)}function ng(e,n,a,o){var c=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return ig(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):Xc(),sm(n);else return o=n.lanes=536870912,ig(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(xl(n,f.cachePool),rm(n,f),Ta(),n.memoizedState=null):(e!==null&&xl(n,null),Xc(),Ta());return En(e,n,c,a),n.child}function co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(e,n,a,o,c){var f=Fc();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&xl(n,null),Xc(),sm(n),e!==null&&Wr(e,n,o,!0),n.childLanes=c,null}function Pl(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ag(e,n,a){return hr(n,e.child,null,a),e=Pl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function iS(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Et){if(o.mode==="hidden")return e=Pl(n,o),n.lanes=536870912,co(null,e);if(qc(n),(e=Yt)?(e=gv(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,yn=n,Yt=null)):e=null,e===null)throw xa(n);return n.lanes=536870912,null}return Pl(n,o)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(qc(n),c)if(n.flags&256)n.flags&=-257,n=ag(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Wr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(o=kt,o!==null&&(S=Dr(o,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,ar(e,S),In(o,e,S),pf;ql(),n=ag(e,n,a)}else e=f.treeContext,Yt=li(S.nextSibling),yn=n,Et=!0,_a=null,si=!1,e!==null&&Xp(n,e),n=Pl(n,o),n.flags|=4096;return n}return e=Ii(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,o,c){return lr(n),a=jc(e,n,a,o,void 0,c),o=Zc(),e!==null&&!ln?(Kc(e,n,c),Wi(e,n,c)):(Et&&o&&wc(n),n.flags|=1,En(e,n,a,c),n.child)}function rg(e,n,a,o,c,f){return lr(n),n.updateQueue=null,a=lm(n,o,a,c),om(e),o=Zc(),e!==null&&!ln?(Kc(e,n,f),Wi(e,n,f)):(Et&&o&&wc(n),n.flags|=1,En(e,n,a,f),n.child)}function sg(e,n,a,o,c){if(lr(n),n.stateNode===null){var f=Gr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Mn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=hf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Hc(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Mn(S):Gr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(ff(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&hf.enqueueReplaceState(f,f.state,null),ro(n,o,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=pr(a,T);f.props=B;var $=f.context,me=a.contextType;S=Gr,typeof me=="object"&&me!==null&&(S=Mn(me));var _e=a.getDerivedStateFromProps;me=typeof _e=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==S)&&qm(n,f,o,S),ya=!1;var ne=n.memoizedState;f.state=ne,ro(n,o,f,c),ao(),$=n.memoizedState,T||ne!==$||ya?(typeof _e=="function"&&(ff(n,a,_e,o),$=n.memoizedState),(B=ya||Wm(n,a,B,o,ne,$,S))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=S,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Gc(e,n),S=n.memoizedProps,me=pr(a,S),f.props=me,_e=n.pendingProps,ne=f.context,$=a.contextType,B=Gr,typeof $=="object"&&$!==null&&(B=Mn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==_e||ne!==B)&&qm(n,f,o,B),ya=!1,ne=n.memoizedState,f.state=ne,ro(n,o,f,c),ao();var ue=n.memoizedState;S!==_e||ne!==ue||ya||e!==null&&e.dependencies!==null&&vl(e.dependencies)?(typeof T=="function"&&(ff(n,a,T,o),ue=n.memoizedState),(me=ya||Wm(n,a,me,o,ne,ue,B)||e!==null&&e.dependencies!==null&&vl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ue,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ue,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),f.props=o,f.state=ue,f.context=B,o=me):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ne===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,zl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=hr(n,e.child,null,c),n.child=hr(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Wi(e,n,c),e}function og(e,n,a,o){return sr(),n.flags|=256,En(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:Kp()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function lg(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Et){if(c?ba(n):Ta(),(e=Yt)?(e=gv(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Gp(e),a.return=n,n.child=a,yn=n,Yt=null)):e=null,e===null)throw xa(n);return eh(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(Ta(),c=n.mode,T=Bl({mode:"hidden",children:T},c),o=rr(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=vf(a),o.childLanes=_f(e,S,a),n.memoizedState=gf,co(null,o)):(ba(n),xf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(ba(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),T=o.fallback,c=n.mode,o=Bl({mode:"visible",children:o.children},c),T=rr(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,hr(n,e.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=_f(e,S,a),n.memoizedState=gf,n=co(null,o));else if(ba(n),eh(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var $=S.dgst;S=$,o=Error(r(419)),o.stack="",o.digest=S,Js({value:o,source:null,stack:null}),n=Sf(e,n,a)}else if(ln||Wr(e,n,a,!1),S=(a&e.childLanes)!==0,ln||S){if(S=kt,S!==null&&(o=Dr(S,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ar(e,o),In(S,e,o),pf;$f(T)||ql(),n=Sf(e,n,a)}else $f(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Yt=li(T.nextSibling),yn=n,Et=!0,_a=null,si=!1,e!==null&&Xp(n,e),n=xf(n,o.children),n.flags|=4096);return n}return c?(Ta(),T=o.fallback,c=n.mode,B=e.child,$=B.sibling,o=Ii(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Ii($,T):(T=rr(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,co(null,o),o=n.child,T=e.child.memoizedState,T===null?T=vf(a):(c=T.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Kp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=_f(e,S,a),n.memoizedState=gf,co(e.child,o)):(ba(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function xf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return hr(n,e.child,null,a),e=xf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ug(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Oc(e.return,n,a)}function yf(e,n,a,o,c,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=f)}function cg(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var S=nn.current,T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,Me(nn,S),En(e,n,o,a),o=Et?Qs:0,!T&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ug(e,a,n);else if(e.tag===19)ug(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),yf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Tl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}yf(n,!0,a,null,f,o);break;case"together":yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vl(e)))}function aS(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Sa(n,sn,e.memoizedState.cache),sr();break;case 27:case 5:je(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(e,n,a):(ba(n),e=Wi(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Wr(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return cg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(nn,nn.current),o)break;return null;case 22:return n.lanes=0,ng(e,n,a,n.pendingProps);case 24:Sa(n,sn,e.memoizedState.cache)}return Wi(e,n,a)}function fg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!Mf(e,a)&&(n.flags&128)===0)return ln=!1,aS(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,Et&&(n.flags&1048576)!==0&&kp(n,Qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=cr(n.elementType),n.type=e,typeof e=="function")Ac(e)?(o=pr(e,o),n.tag=1,n=sg(null,n,e,o,a)):(n.tag=0,n=mf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===w){n.tag=11,n=$m(null,n,e,o,a);break e}else if(c===z){n.tag=14,n=eg(null,n,e,o,a);break e}}throw n=pe(e)||e,Error(r(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=pr(o,n.pendingProps),sg(e,n,o,c,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Gc(e,n),ro(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Sa(n,sn,o),o!==f.cache&&Pc(n,[sn],a,!0),ao(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(e,n,o,a);break e}else if(o!==c){c=ii(Error(r(424)),n),Js(c),n=og(e,n,o,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Yt=li(e.firstChild),yn=n,Et=!0,_a=null,si=!0,a=nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sr(),o===c){n=Wi(e,n,a);break e}En(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=Mv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,e=n.pendingProps,o=$l(ae.current).createElement(a),o[rn]=n,o[xn]=e,bn(o,a,e),Se(o),n.stateNode=o):n.memoizedState=Mv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return je(n),e===null&&Et&&(o=n.stateNode=xv(n.type,n.pendingProps,ae.current),yn=n,si=!0,c=Yt,Na(n.type)?(th=c,Yt=li(o.firstChild)):Yt=c),En(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Et&&((c=o=Yt)&&(o=OS(o,n.type,n.pendingProps,si),o!==null?(n.stateNode=o,yn=n,Yt=li(o.firstChild),si=!1,c=!0):c=!1),c||xa(n)),je(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Kf(c,f)?o=null:S!==null&&Kf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=jc(e,n,Zx,null,null,a),Ao._currentValue=c),zl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&Et&&((e=a=Yt)&&(a=PS(a,n.pendingProps,si),a!==null?(n.stateNode=a,yn=n,Yt=null,e=!0):e=!1),e||xa(n)),null;case 13:return lg(e,n,a);case 4:return De(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=hr(n,null,o,a):En(e,n,o,a),n.child;case 11:return $m(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Sa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,lr(n),c=Mn(c),o=o(c),n.flags|=1,En(e,n,o,a),n.child;case 14:return eg(e,n,n.type,n.pendingProps,a);case 15:return tg(e,n,n.type,n.pendingProps,a);case 19:return cg(e,n,a);case 31:return iS(e,n,a);case 22:return ng(e,n,a,n.pendingProps);case 24:return lr(n),o=Mn(sn),e===null?(c=Fc(),c===null&&(c=kt,f=zc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},Hc(n),Sa(n,sn,c)):((e.lanes&a)!==0&&(Gc(e,n),ro(n,null,null,a),ao()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,sn,o)):(o=f.cache,Sa(n,sn,o),o!==c.cache&&Pc(n,[sn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function Ef(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Fg())e.flags|=8192;else throw fr=yl,Ic}else e.flags&=-16777217}function hg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rv(n))if(Fg())e.flags|=8192;else throw fr=yl,Ic}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,is|=n)}function fo(e,n){if(!Et)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function rS(e,n,a){var o=n.pendingProps;switch(Dc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Vi(sn),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Xr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lc())),jt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(qi(n),f!==null?(jt(n),hg(n,f)):(jt(n),Ef(n,c,null,o,a))):f?f!==e.memoizedState?(qi(n),jt(n),hg(n,f)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&qi(n),jt(n),Ef(n,c,e,o,a)),null;case 27:if(ft(n),a=ae.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}e=Ce.current,Xr(n)?Wp(n):(e=xv(c,o,a),n.stateNode=e,qi(n))}return jt(n),null;case 5:if(ft(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return jt(n),null}if(f=Ce.current,Xr(n))Wp(n);else{var S=$l(ae.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}f[rn]=n,f[xn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(bn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&qi(n)}}return jt(n),Ef(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=ae.current,Xr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||lv(e.nodeValue,a)),e||xa(n,!0)}else e=$l(e).createTextNode(o),e[rn]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Xr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return jt(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else sr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),c=!1}else c=Lc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),jt(n),null);case 4:return Ie(),e===null&&Wf(n.stateNode.containerInfo),jt(n),null;case 10:return Vi(n.type),jt(n),null;case 19:if(ie(nn),o=n.memoizedState,o===null)return jt(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)fo(o,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,fo(o,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Hp(a,e),a=a.sibling;return Me(nn,nn.current&1|2),Et&&Hi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&x()>kl&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Tl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Et)return jt(n),null}else 2*x()-o.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=x(),e.sibling=null,a=nn.current,Me(nn,c?a&1|2:a&1),Et&&Hi(n,o.treeForkCount),e):(jt(n),null);case 22:case 23:return jn(n),Wc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ie(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(sn),jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sS(e,n){switch(Dc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(sn),Ie(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ie(nn),null;case 4:return Ie(),null;case 10:return Vi(n.type),null;case 22:case 23:return jn(n),Wc(),e!==null&&ie(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(sn),null;case 25:return null;default:return null}}function dg(e,n){switch(Dc(n),n.tag){case 3:Vi(sn),Ie();break;case 26:case 27:case 5:ft(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:ie(nn);break;case 10:Vi(n.type);break;case 22:case 23:jn(n),Wc(),e!==null&&ie(ur);break;case 24:Vi(sn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(T){Bt(n,n.return,T)}}function Aa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,c=n;var B=a,$=T;try{$()}catch(me){Bt(c,B,me)}}}o=o.next}while(o!==f)}}catch(me){Bt(n,n.return,me)}}function pg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{am(n,a)}catch(o){Bt(e,e.return,o)}}}function mg(e,n,a){a.props=pr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Bt(e,n,c)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function gg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function bf(e,n,a){try{var o=e.stateNode;CS(o,e.type,a,n),o[xn]=n}catch(c){Bt(e,e.return,c)}}function vg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Il(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function _g(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);bn(n,o,a),n[rn]=e,n[xn]=a}catch(f){Bt(e,e.return,f)}}var Yi=!1,un=!1,Rf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function oS(e,n){if(e=e.containerInfo,jf=su,e=Up(e),xc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var S=0,T=-1,B=-1,$=0,me=0,_e=e,ne=null;t:for(;;){for(var ue;_e!==a||c!==0&&_e.nodeType!==3||(T=S+c),_e!==f||o!==0&&_e.nodeType!==3||(B=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(ue=_e.firstChild)!==null;)ne=_e,_e=ue;for(;;){if(_e===e)break t;if(ne===a&&++$===c&&(T=S),ne===f&&++me===o&&(B=S),(ue=_e.nextSibling)!==null)break;_e=ne,ne=_e.parentNode}_e=ue}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:e,selectionRange:a},su=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var We=pr(a.type,c);e=o.getSnapshotBeforeUpdate(We,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function Sg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),o&4&&ho(5,a);break;case 1:if(Zi(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var c=pr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&pg(a),o&512&&po(a,a.return);break;case 3:if(Zi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(e,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&_g(a);case 26:case 5:Zi(e,a),n===null&&o&4&&gg(a),o&512&&po(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),o&4&&Eg(e,a);break;case 13:Zi(e,a),o&4&&bg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gS.bind(null,a),zS(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){n=n!==null&&n.memoizedState!==null||un,c=Yi;var f=un;Yi=o,(un=n)&&!f?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),Yi=c,un=f}break;case 30:break;default:Zi(e,a)}}function yg(e){var n=e.alternate;n!==null&&(e.alternate=null,yg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,Pn=!1;function ji(e,n,a){for(a=a.child;a!==null;)Mg(e,n,a),a=a.sibling}function Mg(e,n,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:un||wi(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||wi(a,n);var o=Zt,c=Pn;Na(a.type)&&(Zt=a.stateNode,Pn=!1),ji(e,n,a),Eo(a.stateNode),Zt=o,Pn=c;break;case 5:un||wi(a,n);case 6:if(o=Zt,c=Pn,Zt=null,ji(e,n,a),Zt=o,Pn=c,Zt!==null)if(Pn)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Zt!==null&&(Pn?(e=Zt,pv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fs(e)):pv(Zt,a.stateNode));break;case 4:o=Zt,c=Pn,Zt=a.stateNode.containerInfo,Pn=!0,ji(e,n,a),Zt=o,Pn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),ji(e,n,a);break;case 1:un||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mg(a,n,o)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,ji(e,n,a),un=o;break;default:ji(e,n,a)}}function Eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fs(e)}catch(a){Bt(n,n.return,a)}}}function bg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fs(e)}catch(a){Bt(n,n.return,a)}}function lS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xg),n;default:throw Error(r(435,e.tag))}}function Hl(e,n){var a=lS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=vS.bind(null,e,o);o.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(Na(T.type)){Zt=T.stateNode,Pn=!1;break e}break;case 5:Zt=T.stateNode,Pn=!1;break e;case 3:case 4:Zt=T.stateNode.containerInfo,Pn=!0;break e}T=T.return}if(Zt===null)throw Error(r(160));Mg(f,S,c),Zt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,e),n=n.sibling}var mi=null;function Tg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Bn(e),o&4&&(Aa(3,e,e.return),ho(3,e),Aa(5,e,e.return));break;case 1:zn(n,e),Bn(e),o&512&&(un||a===null||wi(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=mi;if(zn(n,e),Bn(e),o&512&&(un||a===null||wi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[$a]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),bn(f,o,a),f[rn]=e,Se(f),o=f;break e;case"link":var S=Tv("link","href",c).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(f=S[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=Tv("meta","content",c).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(f=S[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}f=c.createElement(o),bn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[rn]=e,Se(f),o=f}e.stateNode=o}else Av(c,e.type,e.stateNode);else e.stateNode=bv(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Av(c,e.type,e.stateNode):bv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Bn(e),o&512&&(un||a===null||wi(a,a.return)),a!==null&&o&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Bn(e),o&512&&(un||a===null||wi(a,a.return)),e.flags&32){c=e.stateNode;try{Or(c,"")}catch(We){Bt(e,e.return,We)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,bf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Rf=!0);break;case 6:if(zn(n,e),Bn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(We){Bt(e,e.return,We)}}break;case 3:if(nu=null,c=mi,mi=eu(n.containerInfo),zn(n,e),mi=c,Bn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(We){Bt(e,e.return,We)}Rf&&(Rf=!1,Ag(e));break;case 4:o=mi,mi=eu(e.stateNode.containerInfo),zn(n,e),Bn(e),mi=o;break;case 12:zn(n,e),Bn(e);break;case 31:zn(n,e),Bn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hl(e,o)));break;case 13:zn(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=x()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hl(e,o)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Yi,me=un;if(Yi=$||c,un=me||B,zn(n,e),un=me,Yi=$,Bn(e),o&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Yi||un||mr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=B.stateNode;var _e=B.memoizedProps.style,ne=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(We){Bt(B,B.return,We)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(We){Bt(B,B.return,We)}}}else if(n.tag===18){if(a===null){B=n;try{var ue=B.stateNode;c?mv(ue,!0):mv(B.stateNode,!1)}catch(We){Bt(B,B.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Hl(e,a))));break;case 19:zn(n,e),Bn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Hl(e,o)));break;case 30:break;case 21:break;default:zn(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(vg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Tf(e);Il(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(Or(S,""),a.flags&=-33);var T=Tf(e);Il(e,T,S);break;case 3:case 4:var B=a.stateNode.containerInfo,$=Tf(e);Af(e,$,B);break;default:throw Error(r(161))}}catch(me){Bt(e,e.return,me)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sg(e,n.alternate,n),n=n.sibling}function mr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),mr(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),mr(n);break;case 27:Eo(n.stateNode);case 26:case 5:wi(n,n.return),mr(n);break;case 22:n.memoizedState===null&&mr(n);break;case 30:mr(n);break;default:mr(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),ho(4,f);break;case 1:if(Ki(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Bt(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)im(B[c],T)}catch($){Bt(o,o.return,$)}}a&&S&64&&pg(f),po(f,f.return);break;case 27:_g(f);case 26:case 5:Ki(c,f,a),a&&o===null&&S&4&&gg(f),po(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&S&4&&Eg(c,f);break;case 13:Ki(c,f,a),a&&S&4&&bg(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),po(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$s(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e))}function gi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(e,n,a,o),n=n.sibling}function Rg(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,o),c&2048&&ho(9,n);break;case 1:gi(e,n,a,o);break;case 3:gi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$s(e)));break;case 12:if(c&2048){gi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,T=f.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Bt(n,n.return,B)}}else gi(e,n,a,o);break;case 31:gi(e,n,a,o);break;case 13:gi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,o):mo(e,n):f._visibility&2?gi(e,n,a,o):(f._visibility|=2,es(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Cf(S,n);break;case 24:gi(e,n,a,o),c&2048&&wf(n.alternate,n);break;default:gi(e,n,a,o)}}function es(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,T=a,B=o,$=S.flags;switch(S.tag){case 0:case 11:case 15:es(f,S,T,B,c),ho(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?es(f,S,T,B,c):mo(f,S):(me._visibility|=2,es(f,S,T,B,c)),c&&$&2048&&Cf(S.alternate,S);break;case 24:es(f,S,T,B,c),c&&$&2048&&wf(S.alternate,S);break;default:es(f,S,T,B,c)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:mo(a,o),c&2048&&Cf(o.alternate,o);break;case 24:mo(a,o),c&2048&&wf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function ts(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)Cg(e,n,a),e=e.sibling}function Cg(e,n,a){switch(e.tag){case 26:ts(e,n,a),e.flags&go&&e.memoizedState!==null&&jS(a,mi,e.memoizedState,e.memoizedProps);break;case 5:ts(e,n,a);break;case 3:case 4:var o=mi;mi=eu(e.stateNode.containerInfo),ts(e,n,a),mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=go,go=16777216,ts(e,n,a),go=o):ts(e,n,a));break;default:ts(e,n,a)}}function wg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ug(o,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dg(e),e=e.sibling}function Dg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):vo(e);break;default:vo(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,Ug(o,e)}wg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function Ug(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$s(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else e:for(a=e;vn!==null;){o=vn;var c=o.sibling,f=o.return;if(yg(o),o===a){vn=null;break e}if(c!==null){c.return=f,vn=c;break e}vn=f}}}var uS={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},cS=typeof WeakMap=="function"?WeakMap:Map,Ut=0,kt=null,vt=null,St=0,zt=0,Zn=null,Ra=!1,ns=!1,Df=!1,Qi=0,$t=0,Ca=0,gr=0,Uf=0,Kn=0,is=0,_o=null,Fn=null,Lf=!1,Vl=0,Lg=0,kl=1/0,Xl=null,wa=null,dn=0,Da=null,as=null,Ji=0,Nf=0,Of=null,Ng=null,xo=0,Pf=null;function Qn(){return(Ut&2)!==0&&St!==0?St&-St:P.T!==null?Gf():Ja()}function Og(){if(Kn===0)if((St&536870912)===0||Et){var e=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function In(e,n,a){(e===kt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Ua(e,St,Kn,!1)),wn(e,a),((Ut&2)===0||e!==kt)&&(e===kt&&((Ut&2)===0&&(gr|=a),$t===4&&Ua(e,St,Kn,!1)),Di(e))}function Pg(e,n,a){if((Ut&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ke(e,n),c=o?dS(e,n):Bf(e,n,!0),f=o;do{if(c===0){ns&&!o&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!fS(a)){c=Bf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=e;c=_o;var B=T.current.memoizedState.isDehydrated;if(B&&(rs(T,S).flags|=256),S=Bf(T,S,!1),S!==2){if(Df&&!B){T.errorRecoveryDisabledLanes|=f,gr|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){rs(e,0),Ua(e,n,0,!0);break}e:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(o,n,Kn,!Ra);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Vl+300-x(),10<c)){if(Ua(o,n,Kn,!Ra),xe(o,0,!0)!==0)break e;Ji=n,o.timeoutHandle=hv(zg.bind(null,o,a,Fn,Xl,Lf,n,Kn,gr,is,Ra,f,"Throttled",-0,0),c);break e}zg(o,a,Fn,Xl,Lf,n,Kn,gr,is,Ra,f,null,-0,0)}}break}while(!0);Di(e)}function zg(e,n,a,o,c,f,S,T,B,$,me,_e,ne,ue){if(e.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Cg(n,f,_e);var We=(f&62914560)===f?Vl-x():(f&4194048)===f?Lg-x():0;if(We=ZS(_e,We),We!==null){Ji=f,e.cancelPendingCommit=We(Xg.bind(null,e,n,f,a,o,c,S,T,B,me,_e,null,ne,ue)),Ua(e,f,S,!$);return}}Xg(e,n,f,a,o,c,S,T,B)}function fS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,o){n&=~Uf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Fe(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&Is(e,a,n)}function Wl(){return(Ut&6)===0?(So(0),!1):!0}function zf(){if(vt!==null){if(zt===0)var e=vt.return;else e=vt,Gi=or=null,Qc(e),Zr=null,to=0,e=vt;for(;e!==null;)dg(e.alternate,e),e=e.return;vt=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,US(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,zf(),kt=e,vt=a=Ii(e.current,null),St=n,zt=0,Zn=null,Ra=!1,ns=ke(e,n),Df=!1,is=Kn=Uf=gr=Ca=$t=0,Fn=_o=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Fe(o),f=1<<c;n|=e[c],o&=~f}return Qi=n,hl(),a}function Bg(e,n){ct=null,P.H=uo,n===jr||n===Sl?(n=$p(),zt=3):n===Ic?(n=$p(),zt=4):zt=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,vt===null&&($t=1,Ol(e,ii(n,e.current)))}function Fg(){var e=Yn.current;return e===null?!0:(St&4194048)===St?oi===null:(St&62914560)===St||(St&536870912)!==0?e===oi:!1}function Ig(){var e=P.H;return P.H=uo,e===null?uo:e}function Hg(){var e=P.A;return P.A=uS,e}function ql(){$t=4,Ra||(St&4194048)!==St&&Yn.current!==null||(ns=!0),(Ca&134217727)===0&&(gr&134217727)===0||kt===null||Ua(kt,St,Kn,!1)}function Bf(e,n,a){var o=Ut;Ut|=2;var c=Ig(),f=Hg();(kt!==e||St!==n)&&(Xl=null,rs(e,n)),n=!1;var S=$t;e:do try{if(zt!==0&&vt!==null){var T=vt,B=Zn;switch(zt){case 8:zf(),S=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=zt;if(zt=0,Zn=null,ss(e,T,B,$),a&&ns){S=0;break e}break;default:$=zt,zt=0,Zn=null,ss(e,T,B,$)}}hS(),S=$t;break}catch(me){Bg(e,me)}while(!0);return n&&e.shellSuspendCounter++,Gi=or=null,Ut=o,P.H=c,P.A=f,vt===null&&(kt=null,St=0,hl()),S}function hS(){for(;vt!==null;)Gg(vt)}function dS(e,n){var a=Ut;Ut|=2;var o=Ig(),c=Hg();kt!==e||St!==n?(Xl=null,kl=x()+500,rs(e,n)):ns=ke(e,n);e:do try{if(zt!==0&&vt!==null){n=vt;var f=Zn;t:switch(zt){case 1:zt=0,Zn=null,ss(e,n,f,1);break;case 2:case 9:if(Qp(f)){zt=0,Zn=null,Vg(n);break}n=function(){zt!==2&&zt!==9||kt!==e||(zt=7),Di(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Qp(f)?(zt=0,Zn=null,Vg(n)):(zt=0,Zn=null,ss(e,n,f,7));break;case 5:var S=null;switch(vt.tag){case 26:S=vt.memoizedState;case 5:case 27:var T=vt;if(S?Rv(S):T.stateNode.complete){zt=0,Zn=null;var B=T.sibling;if(B!==null)vt=B;else{var $=T.return;$!==null?(vt=$,Yl($)):vt=null}break t}}zt=0,Zn=null,ss(e,n,f,5);break;case 6:zt=0,Zn=null,ss(e,n,f,6);break;case 8:zf(),$t=6;break e;default:throw Error(r(462))}}pS();break}catch(me){Bg(e,me)}while(!0);return Gi=or=null,P.H=o,P.A=c,Ut=a,vt!==null?0:(kt=null,St=0,hl(),$t)}function pS(){for(;vt!==null&&!Xt();)Gg(vt)}function Gg(e){var n=fg(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Yl(e):vt=n}function Vg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=rg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=rg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Qc(n);default:dg(a,n),n=vt=Hp(n,Qi),n=fg(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Yl(e):vt=n}function ss(e,n,a,o){Gi=or=null,Qc(n),Zr=null,to=0;var c=n.return;try{if(nS(e,c,n,a,St)){$t=1,Ol(e,ii(a,e.current)),vt=null;return}}catch(f){if(c!==null)throw vt=c,f;$t=1,Ol(e,ii(a,e.current)),vt=null;return}n.flags&32768?(Et||o===1?e=!0:ns||(St&536870912)!==0?e=!1:(Ra=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),kg(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){kg(n,Ra);return}e=n.return;var a=rS(n.alternate,n,Qi);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=e}while(n!==null);$t===0&&($t=5)}function kg(e,n){do{var a=sS(e.alternate,e);if(a!==null){a.flags&=32767,vt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){vt=e;return}vt=e=a}while(e!==null);$t=6,vt=null}function Xg(e,n,a,o,c,f,S,T,B){e.cancelPendingCommit=null;do jl();while(dn!==0);if((Ut&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=bc,ti(e,a,f,S,T,B),e===kt&&(vt=kt=null,St=0),as=n,Da=e,Ji=a,Nf=f,Of=c,Ng=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_S(ee,function(){return Zg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=K.p,K.p=2,S=Ut,Ut|=4;try{oS(e,n,a)}finally{Ut=S,K.p=c,P.T=o}}dn=1,Wg(),qg(),Yg()}}function Wg(){if(dn===1){dn=0;var e=Da,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var c=Ut;Ut|=4;try{Tg(n,e);var f=Zf,S=Up(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(S!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(B!==null&&xc(T)){var $=B.start,me=B.end;if(me===void 0&&(me=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(me,T.value.length);else{var _e=T.ownerDocument||document,ne=_e&&_e.defaultView||window;if(ne.getSelection){var ue=ne.getSelection(),We=T.textContent.length,nt=Math.min(B.start,We),Ht=B.end===void 0?nt:Math.min(B.end,We);!ue.extend&&nt>Ht&&(S=Ht,Ht=nt,nt=S);var Y=wp(T,nt),k=wp(T,Ht);if(Y&&k&&(ue.rangeCount!==1||ue.anchorNode!==Y.node||ue.anchorOffset!==Y.offset||ue.focusNode!==k.node||ue.focusOffset!==k.offset)){var J=_e.createRange();J.setStart(Y.node,Y.offset),ue.removeAllRanges(),nt>Ht?(ue.addRange(J),ue.extend(k.node,k.offset)):(J.setEnd(k.node,k.offset),ue.addRange(J))}}}}for(_e=[],ue=T;ue=ue.parentNode;)ue.nodeType===1&&_e.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ve=_e[T];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}su=!!jf,Zf=jf=null}finally{Ut=c,K.p=o,P.T=a}}e.current=n,dn=2}}function qg(){if(dn===2){dn=0;var e=Da,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=K.p;K.p=2;var c=Ut;Ut|=4;try{Sg(e,n.alternate,n)}finally{Ut=c,K.p=o,P.T=a}}dn=3}}function Yg(){if(dn===4||dn===3){dn=0,U();var e=Da,n=as,a=Ji,o=Ng;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,as=Da=null,jg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Lr(a),n=n.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=K.p,K.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var T=o[S];f(T.value,{componentStack:T.stack})}}finally{P.T=n,K.p=c}}(Ji&3)!==0&&jl(),Di(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Pf?xo++:(xo=0,Pf=e):xo=0,So(0)}}function jg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$s(n)))}function jl(){return Wg(),qg(),Yg(),Zg()}function Zg(){if(dn!==5)return!1;var e=Da,n=Nf;Nf=0;var a=Lr(Ji),o=P.T,c=K.p;try{K.p=32>a?32:a,P.T=null,a=Of,Of=null;var f=Da,S=Ji;if(dn=0,as=Da=null,Ji=0,(Ut&6)!==0)throw Error(r(331));var T=Ut;if(Ut|=4,Dg(f.current),Rg(f,f.current,S,a),Ut=T,So(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{K.p=c,P.T=o,jg(e,n)}}function Kg(e,n,a){n=ii(a,n),n=df(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(wn(e,2),Di(e))}function Bt(e,n,a){if(e.tag===3)Kg(e,e,a);else for(;n!==null;){if(n.tag===3){Kg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(wa===null||!wa.has(o))){e=ii(a,e),a=Qm(2),o=Ea(n,a,2),o!==null&&(Jm(a,o,n,e),wn(o,2),Di(o));break}}n=n.return}}function Ff(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new cS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Df=!0,c.add(a),e=mS.bind(null,e,n,a),n.then(e,e))}function mS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,kt===e&&(St&a)===a&&($t===4||$t===3&&(St&62914560)===St&&300>x()-Vl?(Ut&2)===0&&rs(e,0):Uf|=a,is===St&&(is=0)),Di(e)}function Qg(e,n){n===0&&(n=Pt()),e=ar(e,n),e!==null&&(wn(e,n),Di(e))}function gS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(e,a)}function vS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Qg(e,a)}function _S(e,n){return rt(e,n)}var Zl=null,os=null,If=!1,Kl=!1,Hf=!1,La=0;function Di(e){e!==os&&e.next===null&&(os===null?Zl=os=e:os=os.next=e),Kl=!0,If||(If=!0,SS())}function So(e,n){if(!Hf&&Kl){Hf=!0;do for(var a=!1,o=Zl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Fe(42|e)+1)-1,f&=c&~(S&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tv(o,f))}else f=St,f=xe(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||ke(o,f)||(a=!0,tv(o,f));o=o.next}while(a);Hf=!1}}function xS(){Jg()}function Jg(){Kl=If=!1;var e=0;La!==0&&DS()&&(e=La);for(var n=x(),a=null,o=Zl;o!==null;){var c=o.next,f=$g(o,n);f===0?(o.next=null,a===null?Zl=c:a.next=c,c===null&&(os=a)):(a=o,(e!==0||(f&3)!==0)&&(Kl=!0)),o=c}dn!==0&&dn!==5||So(e),La!==0&&(La=0)}function $g(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Fe(f),T=1<<S,B=c[S];B===-1?((T&a)===0||(T&o)!==0)&&(c[S]=st(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=kt,a=St,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ke(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&qt(o),Lr(a)){case 2:case 8:a=he;break;case 32:a=ee;break;case 268435456:a=Re;break;default:a=ee}return o=ev.bind(null,e),a=rt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&qt(o),e.callbackPriority=2,e.callbackNode=null,2}function ev(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var o=St;return o=xe(e,e===kt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Pg(e,o,n),$g(e,x()),e.callbackNode!=null&&e.callbackNode===a?ev.bind(null,e):null)}function tv(e,n){if(jl())return null;Pg(e,n,!0)}function SS(){LS(function(){(Ut&6)!==0?rt(Q,xS):Jg()})}function Gf(){if(La===0){var e=qr;e===0&&(e=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),La=e}return La}function nv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function iv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function yS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=nv((c[xn]||null).action),S=o.submitter;S&&(n=(n=S[xn]||null)?nv(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var T=new ll("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(La!==0){var B=S?iv(c,S):new FormData(c);of(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=S?iv(c,S):new FormData(c),of(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Vf=0;Vf<Ec.length;Vf++){var kf=Ec[Vf],MS=kf.toLowerCase(),ES=kf[0].toUpperCase()+kf.slice(1);pi(MS,"on"+ES)}pi(Op,"onAnimationEnd"),pi(Pp,"onAnimationIteration"),pi(zp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(Ix,"onTransitionRun"),pi(Hx,"onTransitionStart"),pi(Gx,"onTransitionCancel"),pi(Bp,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function av(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(me){fl(me)}c.currentTarget=null,f=B}else for(S=0;S<o.length;S++){if(T=o[S],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&c.isPropagationStopped())break e;f=T,c.currentTarget=$;try{f(c)}catch(me){fl(me)}c.currentTarget=null,f=B}}}}function _t(e,n){var a=n[Gs];a===void 0&&(a=n[Gs]=new Set);var o=e+"__bubble";a.has(o)||(rv(n,e,2,!1),a.add(o))}function Xf(e,n,a){var o=0;n&&(o|=4),rv(a,e,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[Ql]){e[Ql]=!0,Pe.forEach(function(a){a!=="selectionchange"&&(bS.has(a)||Xf(a,!1,e),Xf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Xf("selectionchange",!1,n))}}function rv(e,n,a,o){switch(Ov(n)){case 2:var c=JS;break;case 8:c=$S;break;default:c=sh}a=c.bind(null,n,a,e),c=void 0,!cc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function qf(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;T!==null;){if(S=q(T),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=f=S;continue e}T=T.parentNode}}o=o.return}cp(function(){var $=f,me=lc(a),_e=[];e:{var ne=Fp.get(e);if(ne!==void 0){var ue=ll,We=e;switch(e){case"keypress":if(sl(a)===0)break e;case"keydown":case"keyup":ue=vx;break;case"focusin":We="focus",ue=pc;break;case"focusout":We="blur",ue=pc;break;case"beforeblur":case"afterblur":ue=pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=Sx;break;case Op:case Pp:case zp:ue=lx;break;case Bp:ue=Mx;break;case"scroll":case"scrollend":ue=ix;break;case"wheel":ue=bx;break;case"copy":case"cut":case"paste":ue=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=mp;break;case"toggle":case"beforetoggle":ue=Ax}var nt=(n&4)!==0,Ht=!nt&&(e==="scroll"||e==="scrollend"),Y=nt?ne!==null?ne+"Capture":null:ne;nt=[];for(var k=$,J;k!==null;){var ve=k;if(J=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||J===null||Y===null||(ve=Vs(k,Y),ve!=null&&nt.push(Mo(k,ve,J))),Ht)break;k=k.return}0<nt.length&&(ne=new ue(ne,We,null,a,me),_e.push({event:ne,listeners:nt}))}}if((n&7)===0){e:{if(ne=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",ne&&a!==oc&&(We=a.relatedTarget||a.fromElement)&&(q(We)||We[ma]))break e;if((ue||ne)&&(ne=me.window===me?me:(ne=me.ownerDocument)?ne.defaultView||ne.parentWindow:window,ue?(We=a.relatedTarget||a.toElement,ue=$,We=We?q(We):null,We!==null&&(Ht=u(We),nt=We.tag,We!==Ht||nt!==5&&nt!==27&&nt!==6)&&(We=null)):(ue=null,We=$),ue!==We)){if(nt=dp,ve="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(nt=mp,ve="onPointerLeave",Y="onPointerEnter",k="pointer"),Ht=ue==null?ne:oe(ue),J=We==null?ne:oe(We),ne=new nt(ve,k+"leave",ue,a,me),ne.target=Ht,ne.relatedTarget=J,ve=null,q(me)===$&&(nt=new nt(Y,k+"enter",We,a,me),nt.target=J,nt.relatedTarget=Ht,ve=nt),Ht=ve,ue&&We)t:{for(nt=TS,Y=ue,k=We,J=0,ve=Y;ve;ve=nt(ve))J++;ve=0;for(var et=k;et;et=nt(et))ve++;for(;0<J-ve;)Y=nt(Y),J--;for(;0<ve-J;)k=nt(k),ve--;for(;J--;){if(Y===k||k!==null&&Y===k.alternate){nt=Y;break t}Y=nt(Y),k=nt(k)}nt=null}else nt=null;ue!==null&&sv(_e,ne,ue,nt,!1),We!==null&&Ht!==null&&sv(_e,Ht,We,nt,!0)}}e:{if(ne=$?oe($):window,ue=ne.nodeName&&ne.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ne.type==="file")var Ct=Ep;else if(yp(ne))if(bp)Ct=zx;else{Ct=Ox;var Ke=Nx}else ue=ne.nodeName,!ue||ue.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&sc($.elementType)&&(Ct=Ep):Ct=Px;if(Ct&&(Ct=Ct(e,$))){Mp(_e,Ct,a,me);break e}Ke&&Ke(e,ne,$),e==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&hn(ne,"number",ne.value)}switch(Ke=$?oe($):window,e){case"focusin":(yp(Ke)||Ke.contentEditable==="true")&&(Fr=Ke,Sc=$,Ks=null);break;case"focusout":Ks=Sc=Fr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,Lp(_e,a,me);break;case"selectionchange":if(Fx)break;case"keydown":case"keyup":Lp(_e,a,me)}var ht;if(gc)e:{switch(e){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Br?xp(e,a)&&(yt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(gp&&a.locale!=="ko"&&(Br||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Br&&(ht=fp()):(ga=me,fc="value"in ga?ga.value:ga.textContent,Br=!0)),Ke=Jl($,yt),0<Ke.length&&(yt=new pp(yt,e,null,a,me),_e.push({event:yt,listeners:Ke}),ht?yt.data=ht:(ht=Sp(a),ht!==null&&(yt.data=ht)))),(ht=Cx?wx(e,a):Dx(e,a))&&(yt=Jl($,"onBeforeInput"),0<yt.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,me),_e.push({event:Ke,listeners:yt}),Ke.data=ht)),yS(_e,e,$,a,me)}av(_e,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vs(e,a),c!=null&&o.unshift(Mo(e,c,f)),c=Vs(e,n),c!=null&&o.push(Mo(e,c,f))),e.tag===3)return o;e=e.return}return[]}function TS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sv(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,c?($=Vs(a,f),$!=null&&S.unshift(Mo(a,$,B))):c||($=Vs(a,f),$!=null&&S.push(Mo(a,$,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var AS=/\r\n?/g,RS=/\u0000|\uFFFD/g;function ov(e){return(typeof e=="string"?e:""+e).replace(AS,`
`).replace(RS,"")}function lv(e,n){return n=ov(n),ov(e)===n}function It(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Or(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Or(e,""+o);break;case"className":Ot(e,"class",o);break;case"tabIndex":Ot(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ot(e,a,o);break;case"style":lp(e,o,f);break;case"data":if(n!=="object"){Ot(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=al(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=al(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":_t("beforetoggle",e),_t("toggle",e),Vt(e,"popover",o);break;case"xlinkActuate":gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":gt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":gt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":gt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":gt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Vt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=tx.get(a)||a,Vt(e,a,o))}}function Yf(e,n,a,o,c,f){switch(a){case"style":lp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Or(e,o):(typeof o=="number"||typeof o=="bigint")&&Or(e,""+o);break;case"onScroll":o!=null&&_t("scroll",e);break;case"onScrollEnd":o!=null&&_t("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Vt(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,S,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),o&&It(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var T=f=S=c=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var me=a[o];if(me!=null)switch(o){case"name":c=me;break;case"type":S=me;break;case"checked":B=me;break;case"defaultChecked":$=me;break;case"value":f=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:It(e,n,o,me,a,null)}}Dn(e,f,T,B,$,S,c,!1);return;case"select":_t("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:It(e,n,c,T,a,null)}n=f,a=S,e.multiple=!!o,n!=null?tn(e,!!o,n,!1):a!=null&&tn(e,!!o,a,!0);return;case"textarea":_t("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:It(e,n,S,T,a,null)}Ai(e,o,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:It(e,n,B,o,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(o=0;o<yo.length;o++)_t(yo[o],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,$,o,a,null)}return;default:if(sc(n)){for(me in a)a.hasOwnProperty(me)&&(o=a[me],o!==void 0&&Yf(e,n,me,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&It(e,n,T,o,a,null))}function CS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,T=null,B=null,$=null,me=null;for(ue in a){var _e=a[ue];if(a.hasOwnProperty(ue)&&_e!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":B=_e;default:o.hasOwnProperty(ue)||It(e,n,ue,null,o,_e)}}for(var ne in o){var ue=o[ne];if(_e=a[ne],o.hasOwnProperty(ne)&&(ue!=null||_e!=null))switch(ne){case"type":f=ue;break;case"name":c=ue;break;case"checked":$=ue;break;case"defaultChecked":me=ue;break;case"value":S=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==_e&&It(e,n,ne,ue,o,_e)}}Tn(e,S,T,B,$,me,f,c);return;case"select":ue=S=T=ne=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ue=B;default:o.hasOwnProperty(f)||It(e,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":ne=f;break;case"defaultValue":T=f;break;case"multiple":S=f;default:f!==B&&It(e,n,c,f,o,B)}n=T,a=S,o=ue,ne!=null?tn(e,!!a,ne,!1):!!o!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ue=ne=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:It(e,n,T,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":ne=c;break;case"defaultValue":ue=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,S,c,o,f)}Nr(e,ne,ue);return;case"option":for(var We in a)if(ne=a[We],a.hasOwnProperty(We)&&ne!=null&&!o.hasOwnProperty(We))switch(We){case"selected":e.selected=!1;break;default:It(e,n,We,null,o,ne)}for(B in o)if(ne=o[B],ue=a[B],o.hasOwnProperty(B)&&ne!==ue&&(ne!=null||ue!=null))switch(B){case"selected":e.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:It(e,n,B,ne,o,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ne=a[nt],a.hasOwnProperty(nt)&&ne!=null&&!o.hasOwnProperty(nt)&&It(e,n,nt,null,o,ne);for($ in o)if(ne=o[$],ue=a[$],o.hasOwnProperty($)&&ne!==ue&&(ne!=null||ue!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:It(e,n,$,ne,o,ue)}return;default:if(sc(n)){for(var Ht in a)ne=a[Ht],a.hasOwnProperty(Ht)&&ne!==void 0&&!o.hasOwnProperty(Ht)&&Yf(e,n,Ht,void 0,o,ne);for(me in o)ne=o[me],ue=a[me],!o.hasOwnProperty(me)||ne===ue||ne===void 0&&ue===void 0||Yf(e,n,me,ne,o,ue);return}}for(var Y in a)ne=a[Y],a.hasOwnProperty(Y)&&ne!=null&&!o.hasOwnProperty(Y)&&It(e,n,Y,null,o,ne);for(_e in o)ne=o[_e],ue=a[_e],!o.hasOwnProperty(_e)||ne===ue||ne==null&&ue==null||It(e,n,_e,ne,o,ue)}function uv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,S=c.initiatorType,T=c.duration;if(f&&T&&uv(S)){for(S=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>T)break;var me=B.transferSize,_e=B.initiatorType;me&&uv(_e)&&(B=B.responseEnd,S+=me*(B<T?1:(T-$)/(B-$)))}if(--o,n+=8*(f+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Zf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function cv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function DS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var hv=typeof setTimeout=="function"?setTimeout:void 0,US=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,LS=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(e){return dv.resolve(null).then(e).catch(NS)}:hv;function NS(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function pv(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),fs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,T=f.nodeName;f[$a]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Eo(e.ownerDocument.body);a=c}while(a);fs(n)}function mv(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function OS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[$a])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function PS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function gv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function eh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var th=null;function vv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function _v(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function xv(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var ui=new Map,Sv=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=K.d;K.d={f:BS,r:FS,D:IS,C:HS,L:GS,m:VS,X:XS,S:kS,M:WS};function BS(){var e=$i.f(),n=Wl();return e||n}function FS(e){var n=re(e);n!==null&&n.tag===5&&n.type==="form"?Bm(n):$i.r(e)}var ls=typeof document>"u"?null:document;function yv(e,n,a){var o=ls;if(o&&typeof n=="string"&&n){var c=xt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Sv.has(c)||(Sv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),bn(n,"link",e),Se(n),o.head.appendChild(n)))}}function IS(e){$i.D(e),yv("dns-prefetch",e,null)}function HS(e,n){$i.C(e,n),yv("preconnect",e,n)}function GS(e,n,a){$i.L(e,n,a);var o=ls;if(o&&e&&n){var c='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xt(a.imageSizes)+'"]')):c+='[href="'+xt(e)+'"]';var f=c;switch(n){case"style":f=us(e);break;case"script":f=cs(e)}ui.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(bo(f))||n==="script"&&o.querySelector(To(f))||(n=o.createElement("link"),bn(n,"link",e),Se(n),o.head.appendChild(n)))}}function VS(e,n){$i.m(e,n);var a=ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xt(o)+'"][href="'+xt(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cs(e)}if(!ui.has(f)&&(e=v({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}o=a.createElement("link"),bn(o,"link",e),Se(o),a.head.appendChild(o)}}}function kS(e,n,a){$i.S(e,n,a);var o=ls;if(o&&e){var c=Z(o).hoistableStyles,f=us(e);n=n||"default";var S=c.get(f);if(!S){var T={loading:0,preload:null};if(S=o.querySelector(bo(f)))T.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&nh(e,a);var B=S=o.createElement("link");Se(B),bn(B,"link",e),B._p=new Promise(function($,me){B.onload=$,B.onerror=me}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,tu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},c.set(f,S)}}}function XS(e,n){$i.X(e,n);var a=ls;if(a&&e){var o=Z(a).hoistableScripts,c=cs(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=v({src:e,async:!0},n),(n=ui.get(c))&&ih(e,n),f=a.createElement("script"),Se(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function WS(e,n){$i.M(e,n);var a=ls;if(a&&e){var o=Z(a).hoistableScripts,c=cs(e),f=o.get(c);f||(f=a.querySelector(To(c)),f||(e=v({src:e,async:!0,type:"module"},n),(n=ui.get(c))&&ih(e,n),f=a.createElement("script"),Se(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function Mv(e,n,a,o){var c=(c=ae.current)?eu(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=Z(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=Z(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(bo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||qS(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cs(a),a=Z(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+xt(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function Ev(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function qS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),Se(n),e.head.appendChild(n))}function cs(e){return'[src="'+xt(e)+'"]'}function To(e){return"script[async]"+e}function bv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(o)return n.instance=o,Se(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Se(o),bn(o,"style",c),tu(o,a.precedence,e),n.instance=o;case"stylesheet":c=us(a.href);var f=e.querySelector(bo(c));if(f)return n.state.loading|=4,n.instance=f,Se(f),f;o=Ev(a),(c=ui.get(c))&&nh(o,c),f=(e.ownerDocument||e).createElement("link"),Se(f);var S=f;return S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),bn(f,"link",o),n.state.loading|=4,tu(f,a.precedence,e),n.instance=f;case"script":return f=cs(a.src),(c=e.querySelector(To(f)))?(n.instance=c,Se(c),c):(o=a,(c=ui.get(f))&&(o=v({},a),ih(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Se(c),bn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,tu(o,a.precedence,e));return n.instance}function tu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ih(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nu=null;function Tv(e,n,a){if(nu===null){var o=new Map,c=nu=new Map;c.set(a,o)}else c=nu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[$a]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var T=o.get(S);T?T.push(f):o.set(S,[f])}}return o}function Av(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function YS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=us(o.href),f=n.querySelector(bo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=iu.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Se(f);return}f=n.ownerDocument||n,o=Ev(o),(c=ui.get(c))&&nh(o,c),f=f.createElement("link"),Se(f);var S=f;S._p=new Promise(function(T,B){S.onload=T,S.onerror=B}),bn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=iu.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ah=0;function ZS(e,n){return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ah===0&&(ah=62500*wS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ah?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function iu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var au=null;function ru(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,au=new Map,n.forEach(KS,e),au=null,iu.call(e))}function KS(e,n){if(!(n.state.loading&4)){var a=au.get(e);if(a)var o=a.get(null);else{a=new Map,au.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=iu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:N,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function QS(e,n,a,o,c,f,S,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Cv(e,n,a,o,c,f,S,T,B,$,me,_e){return e=new QS(e,n,a,S,B,$,me,_e,T),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=zc(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Hc(f),e}function wv(e){return e?(e=Gr,e):Gr}function Dv(e,n,a,o,c,f){c=wv(c),o.context===null?o.context=c:o.pendingContext=c,o=Ma(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ea(e,o,n),a!==null&&(In(a,e,n),io(a,e,n))}function Uv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rh(e,n){Uv(e,n),(e=e.alternate)&&Uv(e,n)}function Lv(e){if(e.tag===13||e.tag===31){var n=ar(e,67108864);n!==null&&In(n,e,67108864),rh(e,67108864)}}function Nv(e){if(e.tag===13||e.tag===31){var n=Qn();n=Ur(n);var a=ar(e,n);a!==null&&In(a,e,n),rh(e,n)}}var su=!0;function JS(e,n,a,o){var c=P.T;P.T=null;var f=K.p;try{K.p=2,sh(e,n,a,o)}finally{K.p=f,P.T=c}}function $S(e,n,a,o){var c=P.T;P.T=null;var f=K.p;try{K.p=8,sh(e,n,a,o)}finally{K.p=f,P.T=c}}function sh(e,n,a,o){if(su){var c=oh(o);if(c===null)qf(e,n,o,ou,a),Pv(e,o);else if(ty(c,e,n,a,o))o.stopPropagation();else if(Pv(e,o),n&4&&-1<ey.indexOf(e)){for(;c!==null;){var f=re(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ee(f.pendingLanes);if(S!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var B=1<<31-Fe(S);T.entanglements[1]|=B,S&=~B}Di(f),(Ut&6)===0&&(kl=x()+500,So(0))}}break;case 31:case 13:T=ar(f,2),T!==null&&In(T,f,2),Wl(),rh(f,2)}if(f=oh(o),f===null&&qf(e,n,o,ou,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else qf(e,n,o,null,a)}}function oh(e){return e=lc(e),lh(e)}var ou=null;function lh(e){if(ou=null,e=q(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ou=e,null}function Ov(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case Q:return 2;case he:return 8;case ee:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var uh=!1,Oa=null,Pa=null,za=null,Ro=new Map,Co=new Map,Ba=[],ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=re(n),n!==null&&Lv(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function ty(e,n,a,o,c){switch(n){case"focusin":return Oa=wo(Oa,e,n,a,o,c),!0;case"dragenter":return Pa=wo(Pa,e,n,a,o,c),!0;case"mouseover":return za=wo(za,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,o,c)),!0}return!1}function zv(e){var n=q(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){Nv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){Nv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=oh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);oc=o,a.target.dispatchEvent(o),oc=null}else return n=re(a),n!==null&&Lv(n),e.blockedOn=a,!1;n.shift()}return!0}function Bv(e,n,a){lu(e)&&a.delete(n)}function ny(){uh=!1,Oa!==null&&lu(Oa)&&(Oa=null),Pa!==null&&lu(Pa)&&(Pa=null),za!==null&&lu(za)&&(za=null),Ro.forEach(Bv),Co.forEach(Bv)}function uu(e,n){e.blockedOn===n&&(e.blockedOn=null,uh||(uh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ny)))}var cu=null;function Fv(e){cu!==e&&(cu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){cu===e&&(cu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(lh(o||a)===null)continue;break}var f=re(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function fs(e){function n(B){return uu(B,e)}Oa!==null&&uu(Oa,e),Pa!==null&&uu(Pa,e),za!==null&&uu(za,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)zv(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[xn]||null;if(typeof f=="function")S||Fv(a);else if(S){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[xn]||null)T=S.formAction;else if(lh(c)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Fv(a)}}}function Iv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ch(e){this._internalRoot=e}fu.prototype.render=ch.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();Dv(a,o,e,n,null,null)},fu.prototype.unmount=ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Dv(e.current,2,null,e,null,null),Wl(),n[ma]=null}};function fu(e){this._internalRoot=e}fu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ja();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&zv(e)}};var Hv=t.version;if(Hv!=="19.2.0")throw Error(r(527,Hv,"19.2.0"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var iy={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hu.isDisabled&&hu.supportsFiber)try{Te=hu.inject(iy),we=hu}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Ym,f=jm,S=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Cv(e,1,!1,null,null,a,o,null,c,f,S,Iv),e[ma]=n.current,Wf(e),new ch(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=Ym,S=jm,T=Zm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Cv(e,1,!0,n,a??null,o,c,B,f,S,T,Iv),n.context=wv(null),a=n.current,o=Qn(),o=Ur(o),c=Ma(o),c.callback=null,Ea(a,c,o),a=o,n.current.lanes=a,wn(n,a),Di(n),e[ma]=n.current,Wf(e),new fu(n)},Uo.version="19.2.0",Uo}var Kv;function dy(){if(Kv)return dh.exports;Kv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=hy(),dh.exports}var py=dy();/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qv="popstate";function my(s={}){function t(r,l){let{pathname:u,search:h,hash:d}=r.location;return Qh("",{pathname:u,search:h,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:ko(l)}return vy(t,i,null,s)}function Kt(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function bi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gy(){return Math.random().toString(36).substring(2,10)}function Jv(s,t){return{usr:s.state,key:s.key,idx:t}}function Qh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Os(t):t,state:i,key:t&&t.key||r||gy()}}function ko({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Os(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function vy(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,h=l.history,d="POP",m=null,p=g();p==null&&(p=0,h.replaceState({...h.state,idx:p},""));function g(){return(h.state||{idx:null}).idx}function v(){d="POP";let M=g(),_=M==null?null:M-p;p=M,m&&m({action:d,location:A.location,delta:_})}function y(M,_){d="PUSH";let L=Qh(A.location,M,_);p=g()+1;let N=Jv(L,p),w=A.createHref(L);try{h.pushState(N,"",w)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(w)}u&&m&&m({action:d,location:A.location,delta:1})}function E(M,_){d="REPLACE";let L=Qh(A.location,M,_);p=g();let N=Jv(L,p),w=A.createHref(L);h.replaceState(N,"",w),u&&m&&m({action:d,location:A.location,delta:0})}function b(M){return _y(M)}let A={get action(){return d},get location(){return s(l,h)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(Qv,v),m=M,()=>{l.removeEventListener(Qv,v),m=null}},createHref(M){return t(l,M)},createURL:b,encodeLocation(M){let _=b(M);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(M){return h.go(M)}};return A}function _y(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Kt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:ko(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function a0(s,t,i="/"){return xy(s,t,i,!1)}function xy(s,t,i,r){let l=typeof t=="string"?Os(t):t,u=ca(l.pathname||"/",i);if(u==null)return null;let h=r0(s);Sy(h);let d=null;for(let m=0;d==null&&m<h.length;++m){let p=Uy(u);d=wy(h[m],p,r)}return d}function r0(s,t=[],i=[],r="",l=!1){let u=(h,d,m=l,p)=>{let g={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Kt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=oa([r,g.relativePath]),y=i.concat(g);h.children&&h.children.length>0&&(Kt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),r0(h.children,t,y,v,m)),!(h.path==null&&!h.index)&&t.push({path:v,score:Ry(v,h.index),routesMeta:y})};return s.forEach((h,d)=>{if(h.path===""||!h.path?.includes("?"))u(h,d);else for(let m of s0(h.path))u(h,d,!0,m)}),t}function s0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let h=s0(r.join("/")),d=[];return d.push(...h.map(m=>m===""?u:[u,m].join("/"))),l&&d.push(...h),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function Sy(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:Cy(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var yy=/^:[\w-]+$/,My=3,Ey=2,by=1,Ty=10,Ay=-2,$v=s=>s==="*";function Ry(s,t){let i=s.split("/"),r=i.length;return i.some($v)&&(r+=Ay),t&&(r+=Ey),i.filter(l=>!$v(l)).reduce((l,u)=>l+(yy.test(u)?My:u===""?by:Ty),r)}function Cy(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function wy(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",h=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=qu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),y=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=qu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),h.push({params:l,pathname:oa([u,v.pathname]),pathnameBase:Py(oa([u,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(u=oa([u,v.pathnameBase]))}return h}function qu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Dy(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],h=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=d[y]||"";h=u.slice(0,u.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[y];return v&&!E?p[g]=void 0:p[g]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:h,pattern:s}}function Dy(s,t=!1,i=!0){bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Uy(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ca(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function Ly(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Os(s):s;return{pathname:i?i.startsWith("/")?i:Ny(i,t):t,search:zy(r),hash:By(l)}}function Ny(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function vh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oy(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function o0(s){let t=Oy(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function l0(s,t,i,r=!1){let l;typeof s=="string"?l=Os(s):(l={...s},Kt(!l.pathname||!l.pathname.includes("?"),vh("?","pathname","search",l)),Kt(!l.pathname||!l.pathname.includes("#"),vh("#","pathname","hash",l)),Kt(!l.search||!l.search.includes("#"),vh("#","search","hash",l)));let u=s===""||l.pathname==="",h=u?"/":l.pathname,d;if(h==null)d=i;else{let v=t.length-1;if(!r&&h.startsWith("..")){let y=h.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?t[v]:"/"}let m=Ly(l,d),p=h&&h!=="/"&&h.endsWith("/"),g=(u||h===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var oa=s=>s.join("/").replace(/\/\/+/g,"/"),Py=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),zy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,By=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Fy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var u0=["POST","PUT","PATCH","DELETE"];new Set(u0);var Iy=["GET",...u0];new Set(Iy);var Ps=ce.createContext(null);Ps.displayName="DataRouter";var $u=ce.createContext(null);$u.displayName="DataRouterState";ce.createContext(!1);var c0=ce.createContext({isTransitioning:!1});c0.displayName="ViewTransition";var Hy=ce.createContext(new Map);Hy.displayName="Fetchers";var Gy=ce.createContext(null);Gy.displayName="Await";var Oi=ce.createContext(null);Oi.displayName="Navigation";var Zo=ce.createContext(null);Zo.displayName="Location";var Pi=ce.createContext({outlet:null,matches:[],isDataRoute:!1});Pi.displayName="Route";var qd=ce.createContext(null);qd.displayName="RouteError";function Vy(s,{relative:t}={}){Kt(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ce.useContext(Oi),{hash:l,pathname:u,search:h}=Qo(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:oa([i,u])),r.createHref({pathname:d,search:h,hash:l})}function Ko(){return ce.useContext(Zo)!=null}function Ka(){return Kt(Ko(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(Zo).location}var f0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function h0(s){ce.useContext(Oi).static||ce.useLayoutEffect(s)}function Yd(){let{isDataRoute:s}=ce.useContext(Pi);return s?nM():ky()}function ky(){Kt(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let s=ce.useContext(Ps),{basename:t,navigator:i}=ce.useContext(Oi),{matches:r}=ce.useContext(Pi),{pathname:l}=Ka(),u=JSON.stringify(o0(r)),h=ce.useRef(!1);return h0(()=>{h.current=!0}),ce.useCallback((m,p={})=>{if(bi(h.current,f0),!h.current)return;if(typeof m=="number"){i.go(m);return}let g=l0(m,JSON.parse(u),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:oa([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,u,l,s])}ce.createContext(null);function Xy(){let{matches:s}=ce.useContext(Pi),t=s[s.length-1];return t?t.params:{}}function Qo(s,{relative:t}={}){let{matches:i}=ce.useContext(Pi),{pathname:r}=Ka(),l=JSON.stringify(o0(i));return ce.useMemo(()=>l0(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function Wy(s,t){return d0(s,t)}function d0(s,t,i,r,l){Kt(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=ce.useContext(Oi),{matches:h}=ce.useContext(Pi),d=h[h.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let L=v&&v.path||"";p0(p,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=Ka(),E;if(t){let L=typeof t=="string"?Os(t):t;Kt(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),E=L}else E=y;let b=E.pathname||"/",A=b;if(g!=="/"){let L=g.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(L.length).join("/")}let M=a0(s,{pathname:A});bi(v||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),bi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Ky(M&&M.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:oa([g,u.encodeLocation?u.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:oa([g,u.encodeLocation?u.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),h,i,r,l);return t&&_?ce.createElement(Zo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function qy(){let s=tM(),t=Fy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},h=null;return console.error("Error handled by React Router default ErrorBoundary:",s),h=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:u},"ErrorBoundary")," or"," ",ce.createElement("code",{style:u},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},t),i?ce.createElement("pre",{style:l},i):null,h)}var Yy=ce.createElement(qy,null),jy=class extends ce.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.unstable_onError?this.props.unstable_onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?ce.createElement(Pi.Provider,{value:this.props.routeContext},ce.createElement(qd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Zy({routeContext:s,match:t,children:i}){let r=ce.useContext(Ps);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ce.createElement(Pi.Provider,{value:s},i)}function Ky(s,t=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let u=s,h=i?.errors;if(h!=null){let p=u.findIndex(g=>g.route.id&&h?.[g.route.id]!==void 0);Kt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let d=!1,m=-1;if(i)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:y}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||E){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let y,E=!1,b=null,A=null;i&&(y=h&&g.route.id?h[g.route.id]:void 0,b=g.route.errorElement||Yy,d&&(m<0&&v===0?(p0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,A=null):m===v&&(E=!0,A=g.route.hydrateFallbackElement||null)));let M=t.concat(u.slice(0,v+1)),_=()=>{let L;return y?L=b:E?L=A:g.route.Component?L=ce.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,ce.createElement(Zy,{match:g,routeContext:{outlet:p,matches:M,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?ce.createElement(jy,{location:i.location,revalidation:i.revalidation,component:b,error:y,children:_(),routeContext:{outlet:null,matches:M,isDataRoute:!0},unstable_onError:r}):_()},null)}function jd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qy(s){let t=ce.useContext(Ps);return Kt(t,jd(s)),t}function Jy(s){let t=ce.useContext($u);return Kt(t,jd(s)),t}function $y(s){let t=ce.useContext(Pi);return Kt(t,jd(s)),t}function Zd(s){let t=$y(s),i=t.matches[t.matches.length-1];return Kt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function eM(){return Zd("useRouteId")}function tM(){let s=ce.useContext(qd),t=Jy("useRouteError"),i=Zd("useRouteError");return s!==void 0?s:t.errors?.[i]}function nM(){let{router:s}=Qy("useNavigate"),t=Zd("useNavigate"),i=ce.useRef(!1);return h0(()=>{i.current=!0}),ce.useCallback(async(l,u={})=>{bi(i.current,f0),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var e_={};function p0(s,t,i){!t&&!e_[s]&&(e_[s]=!0,bi(!1,i))}ce.memo(iM);function iM({routes:s,future:t,state:i,unstable_onError:r}){return d0(s,void 0,i,r,t)}function Jh(s){Kt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aM({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Kt(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),d=ce.useMemo(()=>({basename:h,navigator:l,static:u,future:{}}),[h,l,u]);typeof i=="string"&&(i=Os(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:y="default"}=i,E=ce.useMemo(()=>{let b=ca(m,h);return b==null?null:{location:{pathname:b,search:p,hash:g,state:v,key:y},navigationType:r}},[h,m,p,g,v,y,r]);return bi(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ce.createElement(Oi.Provider,{value:d},ce.createElement(Zo.Provider,{children:t,value:E}))}function rM({children:s,location:t}){return Wy($h(s),t)}function $h(s,t=[]){let i=[];return ce.Children.forEach(s,(r,l)=>{if(!ce.isValidElement(r))return;let u=[...t,l];if(r.type===ce.Fragment){i.push.apply(i,$h(r.props.children,u));return}Kt(r.type===Jh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Kt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let h={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(h.children=$h(r.props.children,u)),i.push(h)}),i}var Iu="get",Hu="application/x-www-form-urlencoded";function ec(s){return s!=null&&typeof s.tagName=="string"}function sM(s){return ec(s)&&s.tagName.toLowerCase()==="button"}function oM(s){return ec(s)&&s.tagName.toLowerCase()==="form"}function lM(s){return ec(s)&&s.tagName.toLowerCase()==="input"}function uM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function cM(s,t){return s.button===0&&(!t||t==="_self")&&!uM(s)}function ed(s=""){return new URLSearchParams(typeof s=="string"||Array.isArray(s)||s instanceof URLSearchParams?s:Object.keys(s).reduce((t,i)=>{let r=s[i];return t.concat(Array.isArray(r)?r.map(l=>[i,l]):[[i,r]])},[]))}function fM(s,t){let i=ed(s);return t&&t.forEach((r,l)=>{i.has(l)||t.getAll(l).forEach(u=>{i.append(l,u)})}),i}var du=null;function hM(){if(du===null)try{new FormData(document.createElement("form"),0),du=!1}catch{du=!0}return du}var dM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _h(s){return s!=null&&!dM.has(s)?(bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hu}"`),null):s}function pM(s,t){let i,r,l,u,h;if(oM(s)){let d=s.getAttribute("action");r=d?ca(d,t):null,i=s.getAttribute("method")||Iu,l=_h(s.getAttribute("enctype"))||Hu,u=new FormData(s)}else if(sM(s)||lM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ca(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Iu,l=_h(s.getAttribute("formenctype"))||_h(d.getAttribute("enctype"))||Hu,u=new FormData(d,s),!hM()){let{name:p,type:g,value:v}=s;if(g==="image"){let y=p?`${p}.`:"";u.append(`${y}x`,"0"),u.append(`${y}y`,"0")}else p&&u.append(p,v)}}else{if(ec(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Iu,r=null,l=Hu,h=s}return u&&l==="text/plain"&&(h=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function mM(s,t,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:t&&ca(r.pathname,t)==="/"?r.pathname=`${t.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function gM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function _M(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let h=await gM(u,i);return h.links?h.links():[]}return[]}));return MM(r.flat(1).filter(vM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function t_(s,t,i,r,l,u){let h=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?t.filter((m,p)=>h(m,p)||d(m,p)):u==="data"?t.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(h(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function xM(s,t,{includeHydrateFallback:i}={}){return SM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function SM(s){return[...new Set(s)]}function yM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function MM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(yM(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function m0(){let s=ce.useContext(Ps);return Kd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function EM(){let s=ce.useContext($u);return Kd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Qd=ce.createContext(void 0);Qd.displayName="FrameworkContext";function g0(){let s=ce.useContext(Qd);return Kd(s,"You must render this element inside a <HydratedRouter> element"),s}function bM(s,t){let i=ce.useContext(Qd),[r,l]=ce.useState(!1),[u,h]=ce.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,y=ce.useRef(null);ce.useEffect(()=>{if(s==="render"&&h(!0),s==="viewport"){let A=_=>{_.forEach(L=>{h(L.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return y.current&&M.observe(y.current),()=>{M.disconnect()}}},[s]),ce.useEffect(()=>{if(r){let A=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(A)}}},[r]);let E=()=>{l(!0)},b=()=>{l(!1),h(!1)};return i?s!=="intent"?[u,y,{}]:[u,y,{onFocus:Lo(d,E),onBlur:Lo(m,b),onMouseEnter:Lo(p,E),onMouseLeave:Lo(g,b),onTouchStart:Lo(v,E)}]:[!1,y,{}]}function Lo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function TM({page:s,...t}){let{router:i}=m0(),r=ce.useMemo(()=>a0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ce.createElement(RM,{page:s,matches:r,...t}):null}function AM(s){let{manifest:t,routeModules:i}=g0(),[r,l]=ce.useState([]);return ce.useEffect(()=>{let u=!1;return _M(s,t,i).then(h=>{u||l(h)}),()=>{u=!0}},[s,t,i]),r}function RM({page:s,matches:t,...i}){let r=Ka(),{manifest:l,routeModules:u}=g0(),{basename:h}=m0(),{loaderData:d,matches:m}=EM(),p=ce.useMemo(()=>t_(s,t,m,l,r,"data"),[s,t,m,l,r]),g=ce.useMemo(()=>t_(s,t,m,l,r,"assets"),[s,t,m,l,r]),v=ce.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,A=!1;if(t.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(N=>N.route.id===_.route.id)&&_.route.id in d&&u[_.route.id]?.shouldRevalidate||L.hasClientLoader?A=!0:b.add(_.route.id))}),b.size===0)return[];let M=mM(s,h,"data");return A&&b.size>0&&M.searchParams.set("_routes",t.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[M.pathname+M.search]},[h,d,r,l,p,t,s,u]),y=ce.useMemo(()=>xM(g,l),[g,l]),E=AM(g);return ce.createElement(ce.Fragment,null,v.map(b=>ce.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>ce.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:A})=>ce.createElement("link",{key:b,nonce:i.nonce,...A})))}function CM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.9.3")}catch{}function wM({basename:s,children:t,window:i}){let r=ce.useRef();r.current==null&&(r.current=my({window:i,v5Compat:!0}));let l=r.current,[u,h]=ce.useState({action:l.action,location:l.location}),d=ce.useCallback(m=>{ce.startTransition(()=>h(m))},[h]);return ce.useLayoutEffect(()=>l.listen(d),[l,d]),ce.createElement(aM,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var _0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,x0=ce.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:h,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...y},E){let{basename:b}=ce.useContext(Oi),A=typeof p=="string"&&_0.test(p),M,_=!1;if(typeof p=="string"&&A&&(M=p,v0))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),V=ca(C.pathname,b);C.origin===D.origin&&V!=null?p=V+C.search+C.hash:_=!0}catch{bi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=Vy(p,{relative:l}),[N,w,G]=bM(r,y),H=NM(p,{replace:h,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(D){t&&t(D),D.defaultPrevented||H(D)}let j=ce.createElement("a",{...y,...G,href:M||L,onClick:_||u?t:z,ref:CM(E,w),target:m,"data-discover":!A&&i==="render"?"true":void 0});return N&&!A?ce.createElement(ce.Fragment,null,j,ce.createElement(TM,{page:L})):j});x0.displayName="Link";var DM=ce.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:h,viewTransition:d,children:m,...p},g){let v=Qo(h,{relative:p.relative}),y=Ka(),E=ce.useContext($u),{navigator:b,basename:A}=ce.useContext(Oi),M=E!=null&&IM(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,L=y.pathname,N=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(L=L.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&A&&(N=ca(N,A)||N);const w=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=L===_||!l&&L.startsWith(_)&&L.charAt(w)==="/",H=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:G,isPending:H,isTransitioning:M},j=G?t:void 0,D;typeof r=="function"?D=r(z):D=[r,G?"active":null,H?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return ce.createElement(x0,{...p,"aria-current":j,className:D,ref:g,style:C,to:h,viewTransition:d},typeof m=="function"?m(z):m)});DM.displayName="NavLink";var UM=ce.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:h=Iu,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...y},E)=>{let b=BM(),A=FM(d,{relative:p}),M=h.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&_0.test(d),L=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let w=N.nativeEvent.submitter,G=w?.getAttribute("formmethod")||h;b(w||N.currentTarget,{fetcherKey:t,method:G,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return ce.createElement("form",{ref:E,method:M,action:A,onSubmit:r?m:L,...y,"data-discover":!_&&s==="render"?"true":void 0})});UM.displayName="Form";function LM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function S0(s){let t=ce.useContext(Ps);return Kt(t,LM(s)),t}function NM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:h}={}){let d=Yd(),m=Ka(),p=Qo(s,{relative:u});return ce.useCallback(g=>{if(cM(g,t)){g.preventDefault();let v=i!==void 0?i:ko(m)===ko(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:h})}},[m,d,p,i,r,t,s,l,u,h])}function OM(s){bi(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=ce.useRef(ed(s)),i=ce.useRef(!1),r=Ka(),l=ce.useMemo(()=>fM(r.search,i.current?null:t.current),[r.search]),u=Yd(),h=ce.useCallback((d,m)=>{const p=ed(typeof d=="function"?d(new URLSearchParams(l)):d);i.current=!0,u("?"+p,m)},[u,l]);return[l,h]}var PM=0,zM=()=>`__${String(++PM)}__`;function BM(){let{router:s}=S0("useSubmit"),{basename:t}=ce.useContext(Oi),i=eM();return ce.useCallback(async(r,l={})=>{let{action:u,method:h,encType:d,formData:m,body:p}=pM(r,t);if(l.navigate===!1){let g=l.fetcherKey||zM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||h,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function FM(s,{relative:t}={}){let{basename:i}=ce.useContext(Oi),r=ce.useContext(Pi);Kt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Qo(s||".",{relative:t})},h=Ka();if(s==null){u.search=h.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:oa([i,u.pathname])),ko(u)}function IM(s,{relative:t}={}){let i=ce.useContext(c0);Kt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=S0("useViewTransitionState"),l=Qo(s,{relative:t});if(!i.isTransitioning)return!1;let u=ca(i.currentLocation.pathname,r)||i.currentLocation.pathname,h=ca(i.nextLocation.pathname,r)||i.nextLocation.pathname;return qu(l.pathname,h)!=null||qu(l.pathname,u)!=null}/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),n_=s=>{const t=GM(s);return t.charAt(0).toUpperCase()+t.slice(1)},y0=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),VM=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=ce.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>ce.createElement("svg",{ref:m,...kM,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:y0("lucide",l),...!u&&!VM(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>ce.createElement(p,g)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=(s,t)=>{const i=ce.forwardRef(({className:r,...l},u)=>ce.createElement(XM,{ref:u,iconNode:t,className:y0(`lucide-${HM(n_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=n_(s),i};/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],M0=Qa("arrow-right",WM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],YM=Qa("github",qM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],i_=Qa("globe",jM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],KM=Qa("instagram",ZM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],JM=Qa("linkedin",QM);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],eE=Qa("menu",$M);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],nE=Qa("twitter",tE);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],aE=Qa("x",iE),rE="/assets/logo-Cy0teAWW.svg",E0=({size:s="md"})=>{const t={sm:"h-8 w-8",md:"h-10 w-10",lg:"h-12 w-12"};return le.jsx("img",{src:rE,alt:"Empario",style:{height:"100%",width:"100%"},className:`rounded-full ring-border/60 object-cover ${t[s]}`})},a_=[{href:"#about",label:"About Us"},{href:"#community",label:"Community"},{href:"#github",label:"Github"},{href:"#help",label:"Help"}],sE=()=>{const[s,t]=ce.useState(!1);return le.jsxs("header",{className:"top-0 w-full",children:[le.jsxs("nav",{className:"relative mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8",style:{height:"150px"},children:[le.jsx("div",{className:" h-full",style:{width:"190px"},children:le.jsx("a",{className:"flex",href:"#home",style:{height:"100%",width:"100%"},children:le.jsx(E0,{size:"md"})})}),le.jsx("div",{children:le.jsxs("ul",{className:`
    pointer-events-auto
     left-1/2 hidden  sm:flex
    items-center gap-10 text-white font-serif text-xl
  `,children:[a_.map(i=>le.jsx("li",{children:le.jsx("a",{href:i.href,className:"transition-colors hover:text-white/90",children:i.label})},i.href)),le.jsx("li",{children:le.jsx("a",{href:"#language","aria-label":"Change language",className:"inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/20 hover:bg-white/10",children:le.jsx(i_,{className:"h-4 w-4 text-white"})})})]})}),le.jsx("button",{className:`
    sm:hidden inline-flex items-center justify-center
    rounded-xl border border-white/20 bg-black/30 p-2 text-white
    focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
  `,"aria-label":"Toggle menu",onClick:()=>t(i=>!i),children:s?le.jsx(aE,{className:"h-5 w-5"}):le.jsx(eE,{className:"h-5 w-5"})})]}),s&&le.jsx("div",{className:"md:hidden border-t border-white/10 bg-[#130015]/95 backdrop-blur",children:le.jsxs("ul",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-1 text-white font-serif text-lg",children:[a_.map(i=>le.jsx("li",{children:le.jsx("a",{href:i.href,className:"block rounded-lg px-3 py-2 hover:bg-white/5",onClick:()=>t(!1),children:i.label})},i.href)),le.jsx("li",{children:le.jsxs("a",{href:"#language",className:"flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/5",onClick:()=>t(!1),children:[le.jsx(i_,{className:"h-4 w-4"}),"Language"]})})]})})]})},oE=()=>{const[s,t]=ce.useState(""),i=r=>{r.preventDefault(),console.log("subscribe:",s)};return le.jsx("footer",{className:"mt-16",children:le.jsxs("div",{className:"relative bg-black opacity-70",children:[le.jsxs("div",{className:"pointer-events-none absolute inset-0 -z-10 opacity-60",children:[le.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#140018] via-[#0b0012] to-[#08000e]"}),le.jsx("div",{className:"absolute inset-0",style:{backgroundImage:"radial-gradient(600px 180px at 30% 0%, rgba(209, 0, 255, .12), transparent 60%), radial-gradient(600px 180px at 70% 0%, rgba(255, 0, 153, .1), transparent 60%)"}})]}),le.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:le.jsxs("div",{className:"rounded-2xl backdrop-blur-md p-6 sm:p-8",children:[le.jsxs("div",{className:"grid gap-8 md:grid-cols-3",children:[le.jsxs("div",{children:[le.jsxs("div",{className:"flex items-center gap-3 h-30 w-30",children:[le.jsx(E0,{size:"sm"}),le.jsx("div",{className:"font-semibold text-white",children:"Euphoria"})]}),le.jsx("p",{className:"mt-4 text-sm text-white/70 max-w-xs",children:"Multiple AI ChatBots made for Mental and Emotional Support"}),le.jsx("p",{className:"mt-4 text-sm text-white/70",children:"Join our community"}),le.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[le.jsx("a",{href:"#","aria-label":"Twitter",className:"grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10",children:le.jsx(nE,{className:"h-4 w-4"})}),le.jsx("a",{href:"#","aria-label":"Instagram",className:"grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10",children:le.jsx(KM,{className:"h-4 w-4"})}),le.jsx("a",{href:"#","aria-label":"Github",className:"grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10",children:le.jsx(YM,{className:"h-4 w-4"})}),le.jsx("a",{href:"#","aria-label":"LinkedIn",className:"grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:bg-white/10",children:le.jsx(JM,{className:"h-4 w-4"})})]})]}),le.jsxs("div",{className:"mt-10",children:[le.jsxs("h4",{className:"text-sm font-semibold tracking-wide text-white",children:["Explore our ChatBots",le.jsx(M0,{size:25,className:"ml-3 hidden text-white sm:inline-block"})]}),le.jsx("span",{}),le.jsxs("ul",{className:"mt-4 grid gap-2 text-sm text-white/80 ml-3 ",children:[le.jsx("li",{children:le.jsx("a",{href:"#",className:"hover:text-white",children:"ChatBot 1"})}),le.jsx("li",{children:le.jsx("a",{href:"#",className:"hover:text-white",children:"ChatBot 2"})}),le.jsx("li",{children:le.jsx("a",{href:"#",className:"hover:text-white",children:"ChatBot 3"})}),le.jsx("li",{children:le.jsx("a",{href:"#",className:"hover:text-white",children:"ChatBot 4"})}),le.jsx("li",{children:le.jsx("a",{href:"#",className:"hover:text-white",children:"ChatBot 5"})})]})]}),le.jsxs("div",{className:"mt-10",children:[le.jsx("h4",{className:"text-sm font-semibold tracking-wide text-white",children:"Join Our Weekly Digest"}),le.jsx("p",{className:"mt-4 text-sm text-white/70 max-w-sm",children:"Get exclusive promotions & updates straight to your inbox."}),le.jsxs("form",{onSubmit:i,className:"mt-4 flex gap-3 max-w-sm",children:[le.jsx("input",{type:"email",required:!0,value:s,onChange:r=>t(r.target.value),placeholder:"Enter your email here",className:`
                      w-full rounded-xl border border-white/15 bg-white/5
                      px-3 py-2 text-sm text-white placeholder-white/50
                      outline-none ring-0 focus:border-white/30
                    `}),le.jsx("button",{type:"submit",className:`
                      whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold
                      text-white shadow
                      bg-gradient-to-r from-fuchsia-600 to-violet-600
                      hover:from-fuchsia-500 hover:to-violet-500
                    `,children:"Subscribe"})]})]})]}),le.jsx("div",{className:"mt-6 border-t border-white/10 pt-4 text-xs text-white/60",children:"© NFT Market. Use this template freely."})]})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="180",lE=0,r_=1,uE=2,b0=1,cE=2,ra=3,ja=0,Vn=1,sa=2,qa=0,Rs=1,td=2,s_=3,o_=4,fE=5,Tr=100,hE=101,dE=102,pE=103,mE=104,gE=200,vE=201,_E=202,xE=203,nd=204,id=205,SE=206,yE=207,ME=208,EE=209,bE=210,TE=211,AE=212,RE=213,CE=214,ad=0,rd=1,sd=2,ws=3,od=4,ld=5,ud=6,cd=7,T0=0,wE=1,DE=2,Ya=0,UE=1,LE=2,NE=3,OE=4,PE=5,zE=6,BE=7,A0=300,Ds=301,Us=302,fd=303,hd=304,tc=306,dd=1e3,Mi=1001,pd=1002,ei=1003,FE=1004,pu=1005,Gn=1006,xh=1007,Rr=1008,fa=1009,R0=1010,C0=1011,Xo=1012,$d=1013,wr=1014,Li=1015,zs=1016,ep=1017,tp=1018,Wo=1020,w0=35902,D0=35899,U0=1021,L0=1022,hi=1023,qo=1026,Yo=1027,N0=1028,np=1029,O0=1030,ip=1031,ap=1033,Gu=33776,Vu=33777,ku=33778,Xu=33779,md=35840,gd=35841,vd=35842,_d=35843,xd=36196,Sd=37492,yd=37496,Md=37808,Ed=37809,bd=37810,Td=37811,Ad=37812,Rd=37813,Cd=37814,wd=37815,Dd=37816,Ud=37817,Ld=37818,Nd=37819,Od=37820,Pd=37821,zd=36492,Bd=36494,Fd=36495,Id=36283,Hd=36284,Gd=36285,Vd=36286,IE=3200,HE=3201,GE=0,VE=1,Wa="",fi="srgb",Ls="srgb-linear",Yu="linear",Gt="srgb",hs=7680,l_=519,kE=512,XE=513,WE=514,P0=515,qE=516,YE=517,jE=518,ZE=519,u_=35044,c_="300 es",Ni=2e3,ju=2001;class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sh=Math.PI/180,kd=180/Math.PI;function Jo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function bt(s,t,i){return Math.max(t,Math.min(i,s))}function KE(s,t){return(s%t+t)%t}function yh(s,t,i){return(1-i)*s+i*t}function No(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Hn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,i=0){ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const y=u[h+0],E=u[h+1],b=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=E,t[i+2]=b,t[i+3]=A;return}if(v!==A||m!==y||p!==E||g!==b){let M=1-d;const _=m*y+p*E+g*b+v*A,L=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const G=Math.sqrt(N),H=Math.atan2(G,_*L);M=Math.sin(M*H)/G,d=Math.sin(d*H)/G}const w=d*L;if(m=m*M+y*w,p=p*M+E*w,g=g*M+b*w,v=v*M+A*w,M===1-d){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[h],y=u[h+1],E=u[h+2],b=u[h+3];return t[i]=d*b+g*v+m*E-p*y,t[i+1]=m*b+g*y+p*v-d*E,t[i+2]=p*b+g*E+d*y-m*v,t[i+3]=g*b-d*v-m*y-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(u/2),y=m(r/2),E=m(l/2),b=m(u/2);switch(h){case"XYZ":this._x=y*g*v+p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v-y*E*b;break;case"YXZ":this._x=y*g*v+p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v+y*E*b;break;case"ZXY":this._x=y*g*v-p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v-y*E*b;break;case"ZYX":this._x=y*g*v-p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v+y*E*b;break;case"YZX":this._x=y*g*v+p*E*b,this._y=p*E*v+y*g*b,this._z=p*g*b-y*E*v,this._w=p*g*v-y*E*b;break;case"XZY":this._x=y*g*v-p*E*b,this._y=p*E*v-y*g*b,this._z=p*g*b+y*E*v,this._w=p*g*v+y*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=r+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(h-l)*E}else if(r>d&&r>v){const E=2*Math.sqrt(1+r-d-v);this._w=(g-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(u+p)/E}else if(d>v){const E=2*Math.sqrt(1+d-r-v);this._w=(u-p)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+v-r-d);this._w=(h-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const E=1-i;return this._w=E*h+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=u*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(t=0,i=0,r=0){se.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(f_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(f_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),v=2*(u*r-h*i);return this.x=i+m*p+h*v-d*g,this.y=r+m*g+d*p-u*v,this.z=l+m*v+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Mh.copy(this).projectOnVector(t),this.sub(Mh)}reflect(t){return this.sub(Mh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(bt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new se,f_=new $o;class dt{constructor(t,i,r,l,u,h,d,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],y=r[2],E=r[5],b=r[8],A=l[0],M=l[3],_=l[6],L=l[1],N=l[4],w=l[7],G=l[2],H=l[5],z=l[8];return u[0]=h*A+d*L+m*G,u[3]=h*M+d*N+m*H,u[6]=h*_+d*w+m*z,u[1]=p*A+g*L+v*G,u[4]=p*M+g*N+v*H,u[7]=p*_+g*w+v*z,u[2]=y*A+E*L+b*G,u[5]=y*M+E*N+b*H,u[8]=y*_+E*w+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*h-d*p,y=d*m-g*u,E=p*u-h*m,b=i*v+r*y+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=v*A,t[1]=(l*p-g*r)*A,t[2]=(d*r-l*h)*A,t[3]=y*A,t[4]=(g*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=E*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Eh.makeScale(t,i)),this}rotate(t){return this.premultiply(Eh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Eh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Eh=new dt;function z0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function QE(){const s=Zu("canvas");return s.style.display="block",s}const h_={};function jo(s){s in h_||(h_[s]=!0,console.warn(s))}function JE(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const d_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),p_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $E(){const s={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Gt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=Cs(l.r),l.g=Cs(l.g),l.b=Cs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return jo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return jo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ls]:{primaries:t,whitePoint:r,transfer:Yu,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:d_,fromXYZ:p_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Dt=$E();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class eb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ds===void 0&&(ds=Zu("canvas")),ds.width=t.width,ds.height=t.height;const l=ds.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=la(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tb=0;class rp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(bh(l[h].image)):u.push(bh(l[h]))}else u=bh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function bh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nb=0;const Th=new se;class Nn extends Bs{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=Mi,l=Mi,u=Gn,h=Rr,d=hi,m=fa,p=Nn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Jo(),this.name="",this.source=new rp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dd:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dd:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=A0;Nn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],v=m[8],y=m[1],E=m[5],b=m[9],A=m[2],M=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(b+M)<.1&&Math.abs(p+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,w=(E+1)/2,G=(_+1)/2,H=(g+y)/4,z=(v+A)/4,j=(b+M)/4;return N>w&&N>G?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=H/r,u=z/r):w>G?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=H/l,u=j/l):G<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(G),r=z/u,l=j/u),this.set(r,l,u,i),this}let L=Math.sqrt((M-b)*(M-b)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(M-b)/L,this.y=(v-A)/L,this.z=(y-g)/L,this.w=Math.acos((p+E+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=bt(this.x,t.x,i.x),this.y=bt(this.y,t.y,i.y),this.z=bt(this.z,t.z,i.z),this.w=bt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=bt(this.x,t,i),this.y=bt(this.y,t,i),this.z=bt(this.z,t,i),this.w=bt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ib extends Bs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new rp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends ib{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class B0 extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ab extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(t=new se(1/0,1/0,1/0),i=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,vi):vi.fromBufferAttribute(u,h),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),mu.copy(r.boundingBox)),mu.applyMatrix4(t.matrixWorld),this.union(mu)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),gu.subVectors(this.max,Oo),ps.subVectors(t.a,Oo),ms.subVectors(t.b,Oo),gs.subVectors(t.c,Oo),Ia.subVectors(ms,ps),Ha.subVectors(gs,ms),vr.subVectors(ps,gs);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-vr.z,vr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,vr.z,0,-vr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-vr.y,vr.x,0];return!Ah(i,ps,ms,gs,gu)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,ps,ms,gs,gu))?!1:(vu.crossVectors(Ia,Ha),i=[vu.x,vu.y,vu.z],Ah(i,ps,ms,gs,gu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new se,new se,new se,new se,new se,new se,new se,new se],vi=new se,mu=new el,ps=new se,ms=new se,gs=new se,Ia=new se,Ha=new se,vr=new se,Oo=new se,gu=new se,vu=new se,_r=new se;function Ah(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){_r.fromArray(s,u);const d=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=t.dot(_r),p=i.dot(_r),g=r.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const rb=new el,Po=new se,Rh=new se;class nc{constructor(t=new se,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):rb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Po,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Rh)),this.expandByPoint(Po.copy(t.center).sub(Rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new se,Ch=new se,_u=new se,Ga=new se,wh=new se,xu=new se,Dh=new se;class F0{constructor(t=new se,i=new se(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ch.copy(t).add(i).multiplyScalar(.5),_u.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(Ch);const u=t.distanceTo(i)*.5,h=-this.direction.dot(_u),d=Ga.dot(this.direction),m=-Ga.dot(_u),p=Ga.lengthSq(),g=Math.abs(1-h*h);let v,y,E,b;if(g>0)if(v=h*m-d,y=h*d-m,b=u*g,v>=0)if(y>=-b)if(y<=b){const A=1/g;v*=A,y*=A,E=v*(v+h*y+2*d)+y*(h*v+y+2*m)+p}else y=u,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;else y=-u,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;else y<=-b?(v=Math.max(0,-(-h*u+d)),y=v>0?-u:Math.min(Math.max(-u,-m),u),E=-v*v+y*(y+2*m)+p):y<=b?(v=0,y=Math.min(Math.max(-u,-m),u),E=y*(y+2*m)+p):(v=Math.max(0,-(h*u+d)),y=v>0?u:Math.min(Math.max(-u,-m),u),E=-v*v+y*(y+2*m)+p);else y=h>0?-u:u,v=Math.max(0,-(h*y+d)),E=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ch).addScaledVector(_u,y),E}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(u=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(u=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){wh.subVectors(i,t),xu.subVectors(r,t),Dh.crossVectors(wh,xu);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ga.subVectors(this.origin,t);const m=d*this.direction.dot(xu.crossVectors(Ga,xu));if(m<0)return null;const p=d*this.direction.dot(wh.cross(Ga));if(p<0||m+p>h)return null;const g=-d*Ga.dot(Dh);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(t,i,r,l,u,h,d,m,p,g,v,y,E,b,A,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,v,y,E,b,A,M)}set(t,i,r,l,u,h,d,m,p,g,v,y,E,b,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=E,_[7]=b,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),u=1/vs.setFromMatrixColumn(t,1).length(),h=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const y=h*g,E=h*v,b=d*g,A=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=E+b*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=b+E*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,E=m*v,b=p*g,A=p*v;i[0]=y+A*d,i[4]=b*d-E,i[8]=h*p,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=E*d-b,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,E=m*v,b=p*g,A=p*v;i[0]=y-A*d,i[4]=-h*v,i[8]=b+E*d,i[1]=E+b*d,i[5]=h*g,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,E=h*v,b=d*g,A=d*v;i[0]=m*g,i[4]=b*p-E,i[8]=y*p+A,i[1]=m*v,i[5]=A*p+y,i[9]=E*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,E=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=A-y*v,i[8]=b*v+E,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=E*v+b,i[10]=y-A*v}else if(t.order==="XZY"){const y=h*m,E=h*p,b=d*m,A=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+A,i[5]=h*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=d*g,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sb,t,ob)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(r,Jn),Va.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(r,Jn)),Va.normalize(),Su.crossVectors(Jn,Va),l[0]=Va.x,l[4]=Su.x,l[8]=Jn.x,l[1]=Va.y,l[5]=Su.y,l[9]=Jn.y,l[2]=Va.z,l[6]=Su.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],y=r[9],E=r[13],b=r[2],A=r[6],M=r[10],_=r[14],L=r[3],N=r[7],w=r[11],G=r[15],H=l[0],z=l[4],j=l[8],D=l[12],C=l[1],V=l[5],te=l[9],de=l[13],pe=l[2],ge=l[6],P=l[10],K=l[14],W=l[3],ye=l[7],be=l[11],O=l[15];return u[0]=h*H+d*C+m*pe+p*W,u[4]=h*z+d*V+m*ge+p*ye,u[8]=h*j+d*te+m*P+p*be,u[12]=h*D+d*de+m*K+p*O,u[1]=g*H+v*C+y*pe+E*W,u[5]=g*z+v*V+y*ge+E*ye,u[9]=g*j+v*te+y*P+E*be,u[13]=g*D+v*de+y*K+E*O,u[2]=b*H+A*C+M*pe+_*W,u[6]=b*z+A*V+M*ge+_*ye,u[10]=b*j+A*te+M*P+_*be,u[14]=b*D+A*de+M*K+_*O,u[3]=L*H+N*C+w*pe+G*W,u[7]=L*z+N*V+w*ge+G*ye,u[11]=L*j+N*te+w*P+G*be,u[15]=L*D+N*de+w*K+G*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],y=t[10],E=t[14],b=t[3],A=t[7],M=t[11],_=t[15];return b*(+u*m*v-l*p*v-u*d*y+r*p*y+l*d*E-r*m*E)+A*(+i*m*E-i*p*y+u*h*y-l*h*E+l*p*g-u*m*g)+M*(+i*p*v-i*d*E-u*h*v+r*h*E+u*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*h*v-r*h*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],y=t[10],E=t[11],b=t[12],A=t[13],M=t[14],_=t[15],L=v*M*p-A*y*p+A*m*E-d*M*E-v*m*_+d*y*_,N=b*y*p-g*M*p-b*m*E+h*M*E+g*m*_-h*y*_,w=g*A*p-b*v*p+b*d*E-h*A*E-g*d*_+h*v*_,G=b*v*m-g*A*m-b*d*y+h*A*y+g*d*M-h*v*M,H=i*L+r*N+l*w+u*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=L*z,t[1]=(A*y*u-v*M*u-A*l*E+r*M*E+v*l*_-r*y*_)*z,t[2]=(d*M*u-A*m*u+A*l*p-r*M*p-d*l*_+r*m*_)*z,t[3]=(v*m*u-d*y*u-v*l*p+r*y*p+d*l*E-r*m*E)*z,t[4]=N*z,t[5]=(g*M*u-b*y*u+b*l*E-i*M*E-g*l*_+i*y*_)*z,t[6]=(b*m*u-h*M*u-b*l*p+i*M*p+h*l*_-i*m*_)*z,t[7]=(h*y*u-g*m*u+g*l*p-i*y*p-h*l*E+i*m*E)*z,t[8]=w*z,t[9]=(b*v*u-g*A*u-b*r*E+i*A*E+g*r*_-i*v*_)*z,t[10]=(h*A*u-b*d*u+b*r*p-i*A*p-h*r*_+i*d*_)*z,t[11]=(g*d*u-h*v*u-g*r*p+i*v*p+h*r*E-i*d*E)*z,t[12]=G*z,t[13]=(g*A*l-b*v*l+b*r*y-i*A*y-g*r*M+i*v*M)*z,t[14]=(b*d*l-h*A*l-b*r*m+i*A*m+h*r*M-i*d*M)*z,t[15]=(h*v*l-g*d*l+g*r*m-i*v*m-h*r*y+i*d*y)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,v=d+d,y=u*p,E=u*g,b=u*v,A=h*g,M=h*v,_=d*v,L=m*p,N=m*g,w=m*v,G=r.x,H=r.y,z=r.z;return l[0]=(1-(A+_))*G,l[1]=(E+w)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(E-w)*H,l[5]=(1-(y+_))*H,l[6]=(M+L)*H,l[7]=0,l[8]=(b+N)*z,l[9]=(M-L)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=vs.set(l[0],l[1],l[2]).length();const h=vs.set(l[4],l[5],l[6]).length(),d=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,g=1/h,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=Ni,m=!1){const p=this.elements,g=2*u/(i-t),v=2*u/(r-l),y=(i+t)/(i-t),E=(r+l)/(r-l);let b,A;if(m)b=u/(h-u),A=h*u/(h-u);else if(d===Ni)b=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===ju)b=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=Ni,m=!1){const p=this.elements,g=2/(i-t),v=2/(r-l),y=-(i+t)/(i-t),E=-(r+l)/(r-l);let b,A;if(m)b=1/(h-u),A=h/(h-u);else if(d===Ni)b=-2/(h-u),A=-(h+u)/(h-u);else if(d===ju)b=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=b,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new se,_i=new fn,sb=new se(0,0,0),ob=new se(1,1,1),Va=new se,Su=new se,Jn=new se,m_=new fn,g_=new $o;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return m_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(m_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return g_.setFromEuler(this),this.setFromQuaternion(g_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lb=0;const v_=new se,_s=new $o,na=new fn,yu=new se,zo=new se,ub=new se,cb=new $o,__=new se(1,0,0),x_=new se(0,1,0),S_=new se(0,0,1),y_={type:"added"},fb={type:"removed"},xs={type:"childadded",child:null},Uh={type:"childremoved",child:null};class kn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new se,i=new ha,r=new $o,l=new se(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new dt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(x_,t)}rotateZ(t){return this.rotateOnAxis(S_,t)}translateOnAxis(t,i){return v_.copy(t).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(x_,t)}translateZ(t){return this.translateOnAxis(S_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?yu.copy(t):yu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(zo,yu,this.up):na.lookAt(yu,zo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(na),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(y_),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(fb),Uh.child=t,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(y_),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,t,ub),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,cb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(t.shapes,v)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),v=h(t.shapes),y=h(t.skeletons),E=h(t.animations),b=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),E.length>0&&(r.animations=E),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}kn.DEFAULT_UP=new se(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new se,ia=new se,Lh=new se,aa=new se,Ss=new se,ys=new se,M_=new se,Nh=new se,Oh=new se,Ph=new se,zh=new en,Bh=new en,Fh=new en;class yi{constructor(t=new se,i=new se,r=new se){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),xi.subVectors(t,i),l.cross(xi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){xi.subVectors(l,i),ia.subVectors(r,i),Lh.subVectors(t,i);const h=xi.dot(xi),d=xi.dot(ia),m=xi.dot(Lh),p=ia.dot(ia),g=ia.dot(Lh),v=h*p-d*d;if(v===0)return u.set(0,0,0),null;const y=1/v,E=(p*m-d*g)*y,b=(h*g-d*m)*y;return u.set(1-E-b,b,E)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return zh.setScalar(0),Bh.setScalar(0),Fh.setScalar(0),zh.fromBufferAttribute(t,i),Bh.fromBufferAttribute(t,r),Fh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(zh,u.x),h.addScaledVector(Bh,u.y),h.addScaledVector(Fh,u.z),h}static isFrontFacing(t,i,r,l){return xi.subVectors(r,i),ia.subVectors(t,i),xi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),xi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;Ss.subVectors(l,r),ys.subVectors(u,r),Nh.subVectors(t,r);const m=Ss.dot(Nh),p=ys.dot(Nh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(t,l);const g=Ss.dot(Oh),v=ys.dot(Oh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Ss,h);Ph.subVectors(t,u);const E=Ss.dot(Ph),b=ys.dot(Ph);if(b>=0&&E<=b)return i.copy(u);const A=E*p-m*b;if(A<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(ys,d);const M=g*b-E*v;if(M<=0&&v-g>=0&&E-b>=0)return M_.subVectors(u,l),d=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector(M_,d);const _=1/(M+A+y);return h=A*_,d=y*_,i.copy(r).addScaledVector(Ss,h).addScaledVector(ys,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function Ih(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Lt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=KE(t,1),i=bt(i,0,1),r=bt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=Ih(h,u,t+1/3),this.g=Ih(h,u,t),this.b=Ih(h,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=H0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Dt.workingToColorSpace(Cn.copy(this),t),Math.round(bt(Cn.r*255,0,255))*65536+Math.round(bt(Cn.g*255,0,255))*256+Math.round(bt(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=g<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Dt.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(Mu);const r=yh(ka.h,Mu.h,i),l=yh(ka.s,Mu.s,i),u=yh(ka.l,Mu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Lt;Lt.NAMES=H0;let hb=0;class tl extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Jo(),this.name="",this.type="Material",this.blending=Rs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==nd&&(r.blendSrc=this.blendSrc),this.blendDst!==id&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class G0 extends tl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new se,Eu=new ut;let db=0;class Ei{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=u_,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Eu.fromBufferAttribute(this,i),Eu.applyMatrix3(t),this.setXY(i,Eu.x,Eu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=No(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=No(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=No(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=No(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=No(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u_&&(t.usage=this.usage),t}}class V0 extends Ei{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class k0 extends Ei{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ua extends Ei{constructor(t,i,r){super(new Float32Array(t),i,r)}}let pb=0;const ci=new fn,Hh=new kn,Ms=new se,$n=new el,Bo=new el,_n=new se;class pa extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z0(t)?k0:V0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new dt().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Hh.lookAt(t),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ua(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new se,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors($n.min,Bo.min),$n.expandByPoint(_n),_n.addVectors($n.max,Bo.max),$n.expandByPoint(_n)):($n.expandByPoint(Bo.min),$n.expandByPoint(Bo.max))}$n.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(Ms.fromBufferAttribute(t,p),_n.add(Ms)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new se,m[j]=new se;const p=new se,g=new se,v=new se,y=new ut,E=new ut,b=new ut,A=new se,M=new se;function _(j,D,C){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,D),v.fromBufferAttribute(r,C),y.fromBufferAttribute(u,j),E.fromBufferAttribute(u,D),b.fromBufferAttribute(u,C),g.sub(p),v.sub(p),E.sub(y),b.sub(y);const V=1/(E.x*b.y-b.x*E.y);isFinite(V)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(V),M.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(V),d[j].add(A),d[D].add(A),d[C].add(A),m[j].add(M),m[D].add(M),m[C].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let j=0,D=L.length;j<D;++j){const C=L[j],V=C.start,te=C.count;for(let de=V,pe=V+te;de<pe;de+=3)_(t.getX(de+0),t.getX(de+1),t.getX(de+2))}const N=new se,w=new se,G=new se,H=new se;function z(j){G.fromBufferAttribute(l,j),H.copy(G);const D=d[j];N.copy(D),N.sub(G.multiplyScalar(G.dot(D))).normalize(),w.crossVectors(H,D);const V=w.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,V)}for(let j=0,D=L.length;j<D;++j){const C=L[j],V=C.start,te=C.count;for(let de=V,pe=V+te;de<pe;de+=3)z(t.getX(de+0)),z(t.getX(de+1)),z(t.getX(de+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,E=r.count;y<E;y++)r.setXYZ(y,0,0,0);const l=new se,u=new se,h=new se,d=new se,m=new se,p=new se,g=new se,v=new se;if(t)for(let y=0,E=t.count;y<E;y+=3){const b=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,u),v.subVectors(l,u),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let E=0,b=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?E=m[A]*d.data.stride+d.offset:E=m[A]*g;for(let _=0;_<g;_++)y[b++]=p[E++]}return new Ei(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pa,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],E=t(y,r);m.push(E)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const E=p[v];g.push(E.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],v=u[p];for(let y=0,E=v.length;y<E;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const E_=new fn,xr=new F0,bu=new nc,b_=new se,Tu=new se,Au=new se,Ru=new se,Gh=new se,Cu=new se,T_=new se,wu=new se;class di extends kn{constructor(t=new pa,i=new G0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Cu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],v=u[m];g!==0&&(Gh.fromBufferAttribute(v,t),h?Cu.addScaledVector(Gh,g):Cu.addScaledVector(Gh.sub(i),g))}i.add(Cu)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(u),xr.copy(t.ray).recast(t.near),!(bu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(bu,b_)===null||xr.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(E_.copy(u).invert(),xr.copy(t.ray).applyMatrix4(E_),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,y=u.groups,E=u.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=h[M.materialIndex],L=Math.max(M.start,E.start),N=Math.min(d.count,Math.min(M.start+M.count,E.start+E.count));for(let w=L,G=N;w<G;w+=3){const H=d.getX(w),z=d.getX(w+1),j=d.getX(w+2);l=Du(this,_,t,r,p,g,v,H,z,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let M=b,_=A;M<_;M+=3){const L=d.getX(M),N=d.getX(M+1),w=d.getX(M+2);l=Du(this,h,t,r,p,g,v,L,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,A=y.length;b<A;b++){const M=y[b],_=h[M.materialIndex],L=Math.max(M.start,E.start),N=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let w=L,G=N;w<G;w+=3){const H=w,z=w+1,j=w+2;l=Du(this,_,t,r,p,g,v,H,z,j),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(m.count,E.start+E.count);for(let M=b,_=A;M<_;M+=3){const L=M,N=M+1,w=M+2;l=Du(this,h,t,r,p,g,v,L,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function mb(s,t,i,r,l,u,h,d){let m;if(t.side===Vn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===ja,d),m===null)return null;wu.copy(d),wu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(wu);return p<i.near||p>i.far?null:{distance:p,point:wu.clone(),object:s}}function Du(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,Tu),s.getVertexPosition(m,Au),s.getVertexPosition(p,Ru);const g=mb(s,t,i,r,Tu,Au,Ru,T_);if(g){const v=new se;yi.getBarycoord(T_,Tu,Au,Ru,v),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new ut)),u&&(g.uv1=yi.getInterpolatedAttribute(u,d,m,p,v,new ut)),h&&(g.normal=yi.getInterpolatedAttribute(h,d,m,p,v,new se),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new se,materialIndex:0};yi.getNormal(Tu,Au,Ru,y.normal),g.face=y,g.barycoord=v}return g}class nl extends pa{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],v=[];let y=0,E=0;b("z","y","x",-1,-1,r,i,t,h,u,0),b("z","y","x",1,-1,r,i,-t,h,u,1),b("x","z","y",1,1,t,r,i,l,h,2),b("x","z","y",1,-1,t,r,-i,l,h,3),b("x","y","z",1,-1,t,i,r,l,u,4),b("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new ua(p,3)),this.setAttribute("normal",new ua(g,3)),this.setAttribute("uv",new ua(v,2));function b(A,M,_,L,N,w,G,H,z,j,D){const C=w/z,V=G/j,te=w/2,de=G/2,pe=H/2,ge=z+1,P=j+1;let K=0,W=0;const ye=new se;for(let be=0;be<P;be++){const O=be*V-de;for(let ie=0;ie<ge;ie++){const Me=ie*C-te;ye[A]=Me*L,ye[M]=O*N,ye[_]=pe,p.push(ye.x,ye.y,ye.z),ye[A]=0,ye[M]=0,ye[_]=H>0?1:-1,g.push(ye.x,ye.y,ye.z),v.push(ie/z),v.push(1-be/j),K+=1}}for(let be=0;be<j;be++)for(let O=0;O<z;O++){const ie=y+O+ge*be,Me=y+O+ge*(be+1),Ce=y+(O+1)+ge*(be+1),Ne=y+(O+1)+ge*be;m.push(ie,Me,Ne),m.push(Me,Ce,Ne),W+=6}d.addGroup(E,W,D),E+=W,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Ln(s){const t={};for(let i=0;i<s.length;i++){const r=Ns(s[i]);for(const l in r)t[l]=r[l]}return t}function gb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function X0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const vb={clone:Ns,merge:Ln};var _b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class da extends tl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_b,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=gb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ku extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new se,A_=new ut,R_=new ut;class Si extends Ku{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kd*2*Math.atan(Math.tan(Sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,A_,R_),i.subVectors(R_,A_)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class Sb extends kn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(Es,bs,t,i);l.layers=this.layers,this.add(l);const u=new Si(Es,bs,t,i);u.layers=this.layers,this.add(u);const h=new Si(Es,bs,t,i);h.layers=this.layers,this.add(h);const d=new Si(Es,bs,t,i);d.layers=this.layers,this.add(d);const m=new Si(Es,bs,t,i);m.layers=this.layers,this.add(m);const p=new Si(Es,bs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ju)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,y,E),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class W0 extends Nn{constructor(t=[],i=Ds,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yb extends Za{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new W0(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),u=new da({name:"CubemapFromEquirect",uniforms:Ns(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:qa});u.uniforms.tEquirect.value=i;const h=new di(l,u),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Gn),new Sb(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Uu extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mb={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,r),_=this._getHandJoint(p,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),E=.02,b=.005;p.inputState.pinching&&y>E+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=E-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Mb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Uu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class C_ extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Eb extends Nn{constructor(t=null,i=1,r=1,l,u,h,d,m,p=ei,g=ei,v,y){super(null,h,d,m,p,g,l,u,v,y),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new se,bb=new se,Tb=new dt;class Er{constructor(t=new se(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=kh.subVectors(r,i).cross(bb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(kh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Tb.getNormalMatrix(t),l=this.coplanarPoint(kh).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new nc,Ab=new ut(.5,.5),Lu=new se;class q0{constructor(t=new Er,i=new Er,r=new Er,l=new Er,u=new Er,h=new Er){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ni,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],v=u[5],y=u[6],E=u[7],b=u[8],A=u[9],M=u[10],_=u[11],L=u[12],N=u[13],w=u[14],G=u[15];if(l[0].setComponents(p-h,E-g,_-b,G-L).normalize(),l[1].setComponents(p+h,E+g,_+b,G+L).normalize(),l[2].setComponents(p+d,E+v,_+A,G+N).normalize(),l[3].setComponents(p-d,E-v,_-A,G-N).normalize(),r)l[4].setComponents(m,y,M,w).normalize(),l[5].setComponents(p-m,E-y,_-M,G-w).normalize();else if(l[4].setComponents(p-m,E-y,_-M,G-w).normalize(),i===Ni)l[5].setComponents(p+m,E+y,_+M,G+w).normalize();else if(i===ju)l[5].setComponents(m,y,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){Sr.center.set(0,0,0);const i=Ab.distanceTo(t.center);return Sr.radius=.7071067811865476+i,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lu.x=l.normal.x>0?t.max.x:t.min.x,Lu.y=l.normal.y>0?t.max.y:t.min.y,Lu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rb extends tl{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qu=new se,Ju=new se,w_=new fn,Fo=new F0,Nu=new nc,Xh=new se,D_=new se;class Cb extends kn{constructor(t=new pa,i=new Rb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Qu.fromBufferAttribute(i,l-1),Ju.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Qu.distanceTo(Ju);t.setAttribute("lineDistance",new ua(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Nu.copy(r.boundingSphere),Nu.applyMatrix4(l),Nu.radius+=u,t.ray.intersectsSphere(Nu)===!1)return;w_.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(w_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,y=r.attributes.position;if(g!==null){const E=Math.max(0,h.start),b=Math.min(g.count,h.start+h.count);for(let A=E,M=b-1;A<M;A+=p){const _=g.getX(A),L=g.getX(A+1),N=Ou(this,t,Fo,m,_,L,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(b-1),M=g.getX(E),_=Ou(this,t,Fo,m,A,M,b-1);_&&i.push(_)}}else{const E=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let A=E,M=b-1;A<M;A+=p){const _=Ou(this,t,Fo,m,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Ou(this,t,Fo,m,b-1,E,b-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ou(s,t,i,r,l,u,h){const d=s.geometry.attributes.position;if(Qu.fromBufferAttribute(d,l),Ju.fromBufferAttribute(d,u),i.distanceSqToSegment(Qu,Ju,Xh,D_)>r)return;Xh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Xh);if(!(p<t.near||p>t.far))return{distance:p,point:D_.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const U_=new se,L_=new se;class wb extends Cb{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)U_.fromBufferAttribute(i,l),L_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+U_.distanceTo(L_);t.setAttribute("lineDistance",new ua(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Nn{constructor(t,i,r=wr,l,u,h,d=ei,m=ei,p,g=qo,v=1){if(g!==qo&&g!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:v};super(y,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class j0 extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cr extends pa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,y=i/m,E=[],b=[],A=[],M=[];for(let _=0;_<g;_++){const L=_*y-h;for(let N=0;N<p;N++){const w=N*v-u;b.push(w,-L,0),A.push(0,0,1),M.push(N/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const N=L+p*_,w=L+p*(_+1),G=L+1+p*(_+1),H=L+1+p*_;E.push(N,w,H),E.push(w,G,H)}this.setIndex(E),this.setAttribute("position",new ua(b,3)),this.setAttribute("normal",new ua(A,3)),this.setAttribute("uv",new ua(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pu extends da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Db extends tl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ub extends tl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lb extends Ku{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Nb extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ob{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function N_(s,t,i,r){const l=Pb(r);switch(i){case U0:return s*t;case N0:return s*t/l.components*l.byteLength;case np:return s*t/l.components*l.byteLength;case O0:return s*t*2/l.components*l.byteLength;case ip:return s*t*2/l.components*l.byteLength;case L0:return s*t*3/l.components*l.byteLength;case hi:return s*t*4/l.components*l.byteLength;case ap:return s*t*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ku:case Xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:case _d:return Math.max(s,16)*Math.max(t,8)/4;case md:case vd:return Math.max(s,8)*Math.max(t,8)/2;case xd:case Sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case zd:case Bd:case Fd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Id:case Hd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Gd:case Vd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Pb(s){switch(s){case fa:case R0:return{byteLength:1,components:1};case Xo:case C0:case zs:return{byteLength:2,components:1};case ep:case tp:return{byteLength:2,components:4};case wr:case $d:case Li:return{byteLength:4,components:1};case w0:case D0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z0(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function zb(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),d.onUploadCallback();let E;if(p instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=s.SHORT;else if(p instanceof Uint32Array)E=s.UNSIGNED_INT;else if(p instanceof Int32Array)E=s.INT;else if(p instanceof Int8Array)E=s.BYTE;else if(p instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((E,b)=>E.start-b.start);let y=0;for(let E=1;E<v.length;E++){const b=v[y],A=v[E];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,v[y]=A)}v.length=y+1;for(let E=0,b=v.length;E<b;E++){const A=v[E];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
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
#endif`,Ib=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
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
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
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
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Qb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sT=`#define PI 3.141592653589793
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
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lT=`vec3 transformedNormal = objectNormal;
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
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",pT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mT=`#ifdef USE_ENVMAP
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
#endif`,gT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xT=`#ifdef USE_ENVMAP
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
#endif`,ST=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
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
}`,TT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CT=`uniform bool receiveShadow;
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
#endif`,wT=`#ifdef USE_ENVMAP
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
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OT=`PhysicalMaterial material;
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
#endif`,PT=`struct PhysicalMaterial {
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
}`,zT=`
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
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
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qT=`#if defined( USE_POINTS_UV )
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
#endif`,YT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JT=`#ifdef USE_MORPHTARGETS
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
#endif`,$T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
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
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
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
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B1=`uniform sampler2D t2D;
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
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
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
}`,k1=`#if DEPTH_PACKING == 3200
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
}`,X1=`#define DISTANCE
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
}`,W1=`#define DISTANCE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,K1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,J1=`#define LAMBERT
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
}`,$1=`#define LAMBERT
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
}`,eA=`#define MATCAP
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
}`,tA=`#define MATCAP
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
}`,nA=`#define NORMAL
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
}`,iA=`#define NORMAL
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
}`,aA=`#define PHONG
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
}`,rA=`#define PHONG
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
}`,sA=`#define STANDARD
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
}`,oA=`#define STANDARD
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
}`,lA=`#define TOON
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
}`,uA=`#define TOON
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
}`,cA=`uniform float size;
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
}`,fA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,dA=`uniform vec3 color;
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
}`,pA=`uniform float rotation;
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
}`,mA=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Bb,alphahash_pars_fragment:Fb,alphamap_fragment:Ib,alphamap_pars_fragment:Hb,alphatest_fragment:Gb,alphatest_pars_fragment:Vb,aomap_fragment:kb,aomap_pars_fragment:Xb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Yb,beginnormal_vertex:jb,bsdfs:Zb,iridescence_fragment:Kb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:eT,clipping_planes_vertex:tT,color_fragment:nT,color_pars_fragment:iT,color_pars_vertex:aT,color_vertex:rT,common:sT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:lT,displacementmap_pars_vertex:uT,displacementmap_vertex:cT,emissivemap_fragment:fT,emissivemap_pars_fragment:hT,colorspace_fragment:dT,colorspace_pars_fragment:pT,envmap_fragment:mT,envmap_common_pars_fragment:gT,envmap_pars_fragment:vT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:wT,envmap_vertex:xT,fog_vertex:ST,fog_pars_vertex:yT,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:bT,lightmap_pars_fragment:TT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:RT,lights_pars_begin:CT,lights_toon_fragment:DT,lights_toon_pars_fragment:UT,lights_phong_fragment:LT,lights_phong_pars_fragment:NT,lights_physical_fragment:OT,lights_physical_pars_fragment:PT,lights_fragment_begin:zT,lights_fragment_maps:BT,lights_fragment_end:FT,logdepthbuf_fragment:IT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:GT,logdepthbuf_vertex:VT,map_fragment:kT,map_pars_fragment:XT,map_particle_fragment:WT,map_particle_pars_fragment:qT,metalnessmap_fragment:YT,metalnessmap_pars_fragment:jT,morphinstance_vertex:ZT,morphcolor_vertex:KT,morphnormal_vertex:QT,morphtarget_pars_vertex:JT,morphtarget_vertex:$T,normal_fragment_begin:e1,normal_fragment_maps:t1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:u1,opaque_fragment:c1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:d1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:S1,shadowmask_pars_fragment:y1,skinbase_vertex:M1,skinning_pars_vertex:E1,skinning_vertex:b1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:R1,tonemapping_fragment:C1,tonemapping_pars_fragment:w1,transmission_fragment:D1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:N1,uv_vertex:O1,worldpos_vertex:P1,background_vert:z1,background_frag:B1,backgroundCube_vert:F1,backgroundCube_frag:I1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distanceRGBA_vert:X1,distanceRGBA_frag:W1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:j1,linedashed_frag:Z1,meshbasic_vert:K1,meshbasic_frag:Q1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:eA,meshmatcap_frag:tA,meshnormal_vert:nA,meshnormal_frag:iA,meshphong_vert:aA,meshphong_frag:rA,meshphysical_vert:sA,meshphysical_frag:oA,meshtoon_vert:lA,meshtoon_frag:uA,points_vert:cA,points_frag:fA,shadow_vert:hA,shadow_frag:dA,sprite_vert:pA,sprite_frag:mA},ze={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ui={basic:{uniforms:Ln([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Lt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Lt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([ze.points,ze.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([ze.common,ze.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([ze.sprite,ze.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Ln([ze.common,ze.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Ln([ze.lights,ze.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ui.physical={uniforms:Ln([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const zu={r:0,b:0,g:0},yr=new ha,gA=new fn;function vA(s,t,i,r,l,u,h){const d=new Lt(0);let m=u===!0?0:1,p,g,v=null,y=0,E=null;function b(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:t).get(w)),w}function A(N){let w=!1;const G=b(N);G===null?_(d,m):G&&G.isColor&&(_(G,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,w){const G=b(w);G&&(G.isCubeTexture||G.mapping===tc)?(g===void 0&&(g=new di(new nl(1,1,1),new da({name:"BackgroundCubeMaterial",uniforms:Ns(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),yr.copy(w.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(gA.makeRotationFromEuler(yr)),g.material.toneMapped=Dt.getTransfer(G.colorSpace)!==Gt,(v!==G||y!==G.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=G,y=G.version,E=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new di(new Cr(2,2),new da({name:"BackgroundMaterial",uniforms:Ns(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(G.colorSpace)!==Gt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||y!==G.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,v=G,y=G.version,E=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,w){N.getRGB(zu,X0(s)),r.buffers.color.setClear(zu.r,zu.g,zu.b,w,h)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:A,addToRenderList:M,dispose:L}}function _A(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let u=l,h=!1;function d(C,V,te,de,pe){let ge=!1;const P=v(de,te,V);u!==P&&(u=P,p(u.object)),ge=E(C,de,te,pe),ge&&b(C,de,te,pe),pe!==null&&t.update(pe,s.ELEMENT_ARRAY_BUFFER),(ge||h)&&(h=!1,w(C,V,te,de),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(pe).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,V,te){const de=te.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let ge=pe[V.id];ge===void 0&&(ge={},pe[V.id]=ge);let P=ge[de];return P===void 0&&(P=y(m()),ge[de]=P),P}function y(C){const V=[],te=[],de=[];for(let pe=0;pe<i;pe++)V[pe]=0,te[pe]=0,de[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:de,object:C,attributes:{},index:null}}function E(C,V,te,de){const pe=u.attributes,ge=V.attributes;let P=0;const K=te.getAttributes();for(const W in K)if(K[W].location>=0){const be=pe[W];let O=ge[W];if(O===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),be===void 0||be.attribute!==O||O&&be.data!==O.data)return!0;P++}return u.attributesNum!==P||u.index!==de}function b(C,V,te,de){const pe={},ge=V.attributes;let P=0;const K=te.getAttributes();for(const W in K)if(K[W].location>=0){let be=ge[W];be===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const O={};O.attribute=be,be&&be.data&&(O.data=be.data),pe[W]=O,P++}u.attributes=pe,u.attributesNum=P,u.index=de}function A(){const C=u.newAttributes;for(let V=0,te=C.length;V<te;V++)C[V]=0}function M(C){_(C,0)}function _(C,V){const te=u.newAttributes,de=u.enabledAttributes,pe=u.attributeDivisors;te[C]=1,de[C]===0&&(s.enableVertexAttribArray(C),de[C]=1),pe[C]!==V&&(s.vertexAttribDivisor(C,V),pe[C]=V)}function L(){const C=u.newAttributes,V=u.enabledAttributes;for(let te=0,de=V.length;te<de;te++)V[te]!==C[te]&&(s.disableVertexAttribArray(te),V[te]=0)}function N(C,V,te,de,pe,ge,P){P===!0?s.vertexAttribIPointer(C,V,te,pe,ge):s.vertexAttribPointer(C,V,te,de,pe,ge)}function w(C,V,te,de){A();const pe=de.attributes,ge=te.getAttributes(),P=V.defaultAttributeValues;for(const K in ge){const W=ge[K];if(W.location>=0){let ye=pe[K];if(ye===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ye=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ye=C.instanceColor)),ye!==void 0){const be=ye.normalized,O=ye.itemSize,ie=t.get(ye);if(ie===void 0)continue;const Me=ie.buffer,Ce=ie.type,Ne=ie.bytesPerElement,ae=Ce===s.INT||Ce===s.UNSIGNED_INT||ye.gpuType===$d;if(ye.isInterleavedBufferAttribute){const fe=ye.data,De=fe.stride,Ie=ye.offset;if(fe.isInstancedInterleavedBuffer){for(let je=0;je<W.locationSize;je++)_(W.location+je,fe.meshPerAttribute);C.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let je=0;je<W.locationSize;je++)M(W.location+je);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let je=0;je<W.locationSize;je++)N(W.location+je,O/W.locationSize,Ce,be,De*Ne,(Ie+O/W.locationSize*je)*Ne,ae)}else{if(ye.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)_(W.location+fe,ye.meshPerAttribute);C.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let fe=0;fe<W.locationSize;fe++)M(W.location+fe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let fe=0;fe<W.locationSize;fe++)N(W.location+fe,O/W.locationSize,Ce,be,O*Ne,O/W.locationSize*fe*Ne,ae)}}else if(P!==void 0){const be=P[K];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv(W.location,be);break;case 3:s.vertexAttrib3fv(W.location,be);break;case 4:s.vertexAttrib4fv(W.location,be);break;default:s.vertexAttrib1fv(W.location,be)}}}}L()}function G(){j();for(const C in r){const V=r[C];for(const te in V){const de=V[te];for(const pe in de)g(de[pe].object),delete de[pe];delete V[te]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const te in V){const de=V[te];for(const pe in de)g(de[pe].object),delete de[pe];delete V[te]}delete r[C.id]}function z(C){for(const V in r){const te=r[V];if(te[C.id]===void 0)continue;const de=te[C.id];for(const pe in de)g(de[pe].object),delete de[pe];delete te[C.id]}}function j(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:M,disableUnusedAttributes:L}}function xA(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,r,1)}function m(p,g,v,y){if(v===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<p.length;b++)h(p[b],g[b],y[b]);else{E.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let b=0;for(let A=0;A<v;A++)b+=g[A]*y[A];i.update(b,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function SA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==hi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const j=z===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==fa&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Li&&!j)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:G,maxSamples:H}}function yA(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new Er,d=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||r!==0||l;return l=y,r=v.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,E){const b=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||u&&!M)u?g(null):p();else{const L=u?0:r,N=L*4;let w=_.clippingState||null;m.value=w,w=g(b,y,N,E);for(let G=0;G!==N;++G)w[G]=i[G];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,y,E,b){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=m.value,b!==!0||M===null){const _=E+A*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,w=E;N!==A;++N,w+=4)h.copy(v[N]).applyMatrix4(L,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function MA(s){let t=new WeakMap;function i(h,d){return d===fd?h.mapping=Ds:d===hd&&(h.mapping=Us),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===fd||d===hd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new yb(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const As=4,O_=[.125,.215,.35,.446,.526,.582],Ar=20,Wh=new Lb,P_=new Lt;let qh=null,Yh=0,jh=0,Zh=!1;const br=(1+Math.sqrt(5))/2,Ts=1/br,z_=[new se(-br,Ts,0),new se(br,Ts,0),new se(-Ts,0,br),new se(Ts,0,br),new se(0,br,-Ts),new se(0,br,Ts),new se(-1,1,-1),new se(1,1,-1),new se(-1,1,1),new se(1,1,1)],EA=new se;class B_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=EA}=u;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=H_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Yh,jh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,Bu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:zs,format:hi,colorSpace:Ls,depthBuffer:!1},l=F_(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bA(u)),this._blurMaterial=TA(u,t,i)}return l}_compileMaterial(t){const i=new di(this._lodPlanes[0],t);this._renderer.compile(i,Wh)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,E=v.toneMapping;v.getClearColor(P_),v.toneMapping=Ya,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new G0({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new di(new nl,A);let _=!1;const L=t.background;L?L.isColor&&(A.color.copy(L),t.background=null,_=!0):(A.color.copy(P_),_=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[N],u.y,u.z)):w===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[N]));const G=this._cubeSize;Bu(l,w*G,N>2?G:0,G,G),v.setRenderTarget(l),_&&v.render(M,m),v.render(t,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=E,v.autoClear=y,t.background=L}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ds||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=H_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new di(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Bu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=z_[(l-u-1)%z_.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new di(this._lodPlanes[l],p),y=p.uniforms,E=this._sizeLods[r]-1,b=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*Ar-1),A=u/b,M=isFinite(u)?1+Math.floor(g*A):Ar;M>Ar&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ar}`);const _=[];let L=0;for(let z=0;z<Ar;++z){const j=z/A,D=Math.exp(-j*j/2);_.push(D),z===0?L+=D:z<M&&(L+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=b,y.mipInt.value=N-r;const w=this._sizeLods[l],G=3*w*(l>N-As?l-N+As:0),H=4*(this._cubeSize-w);Bu(i,G,H,3*w,2*w),m.setRenderTarget(i),m.render(v,Wh)}}function bA(s){const t=[],i=[],r=[];let l=s;const u=s-As+1+O_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-As?m=O_[h-s+As-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,A=3,M=2,_=1,L=new Float32Array(A*b*E),N=new Float32Array(M*b*E),w=new Float32Array(_*b*E);for(let H=0;H<E;H++){const z=H%3*2/3-1,j=H>2?0:-1,D=[z,j,0,z+2/3,j,0,z+2/3,j+1,0,z,j,0,z+2/3,j+1,0,z,j+1,0];L.set(D,A*b*H),N.set(y,M*b*H);const C=[H,H,H,H,H,H];w.set(C,_*b*H)}const G=new pa;G.setAttribute("position",new Ei(L,A)),G.setAttribute("uv",new Ei(N,M)),G.setAttribute("faceIndex",new Ei(w,_)),t.push(G),l>As&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function F_(s,t,i){const r=new Za(s,t,i);return r.texture.mapping=tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function TA(s,t,i){const r=new Float32Array(Ar),l=new se(0,1,0);return new da({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sp(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function I_(){return new da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:qa,depthTest:!1,depthWrite:!1})}function H_(){return new da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qa,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function AA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===fd||m===hd,g=m===Ds||m===Us;if(p||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new B_(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new B_(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function RA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function CA(s,t,i,r){const l={},u=new WeakMap;function h(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const E=u.get(y);E&&(t.remove(E),u.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const E in y)t.update(y[E],s.ARRAY_BUFFER)}function p(v){const y=[],E=v.index,b=v.attributes.position;let A=0;if(E!==null){const L=E.array;A=E.version;for(let N=0,w=L.length;N<w;N+=3){const G=L[N+0],H=L[N+1],z=L[N+2];y.push(G,H,H,z,z,G)}}else if(b!==void 0){const L=b.array;A=b.version;for(let N=0,w=L.length/3-1;N<w;N+=3){const G=N+0,H=N+1,z=N+2;y.push(G,H,H,z,z,G)}}else return;const M=new(z0(y)?k0:V0)(y,1);M.version=A;const _=u.get(v);_&&t.remove(_),u.set(v,M)}function g(v){const y=u.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&p(v)}else p(v);return u.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function wA(s,t,i){let r;function l(y){r=y}let u,h;function d(y){u=y.type,h=y.bytesPerElement}function m(y,E){s.drawElements(r,E,u,y*h),i.update(E,r,1)}function p(y,E,b){b!==0&&(s.drawElementsInstanced(r,E,u,y*h,b),i.update(E,r,b))}function g(y,E,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,u,y,0,b);let M=0;for(let _=0;_<b;_++)M+=E[_];i.update(M,r,1)}function v(y,E,b,A){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)p(y[_]/h,E[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,u,y,0,A,0,b);let _=0;for(let L=0;L<b;L++)_+=E[L]*A[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function DA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function UA(s,t,i){const r=new WeakMap,l=new en;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var E=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),A===!0&&(w=2),M===!0&&(w=3);let G=d.attributes.position.count*w,H=1;G>t.maxTextureSize&&(H=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*H*4*v),j=new B0(z,G,H,v);j.type=Li,j.needsUpdate=!0;const D=w*4;for(let V=0;V<v;V++){const te=_[V],de=L[V],pe=N[V],ge=G*H*4*V;for(let P=0;P<te.count;P++){const K=P*D;b===!0&&(l.fromBufferAttribute(te,P),z[ge+K+0]=l.x,z[ge+K+1]=l.y,z[ge+K+2]=l.z,z[ge+K+3]=0),A===!0&&(l.fromBufferAttribute(de,P),z[ge+K+4]=l.x,z[ge+K+5]=l.y,z[ge+K+6]=l.z,z[ge+K+7]=0),M===!0&&(l.fromBufferAttribute(pe,P),z[ge+K+8]=l.x,z[ge+K+9]=l.y,z[ge+K+10]=l.z,z[ge+K+11]=pe.itemSize===4?l.w:1)}}y={count:v,texture:j,size:new ut(G,H)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const A=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:u}}function LA(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const K0=new Nn,G_=new Y0(1,1),Q0=new B0,J0=new ab,$0=new W0,V_=[],k_=[],X_=new Float32Array(16),W_=new Float32Array(9),q_=new Float32Array(4);function Fs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=V_[l];if(u===void 0&&(u=new Float32Array(l),V_[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function pn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ic(s,t){let i=k_[t];i===void 0&&(i=new Int32Array(t),k_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function NA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function OA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2fv(this.addr,t),mn(i,t)}}function PA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;s.uniform3fv(this.addr,t),mn(i,t)}}function zA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4fv(this.addr,t),mn(i,t)}}function BA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;q_.set(r),s.uniformMatrix2fv(this.addr,!1,q_),mn(i,r)}}function FA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;W_.set(r),s.uniformMatrix3fv(this.addr,!1,W_),mn(i,r)}}function IA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;X_.set(r),s.uniformMatrix4fv(this.addr,!1,X_),mn(i,r)}}function HA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2iv(this.addr,t),mn(i,t)}}function VA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3iv(this.addr,t),mn(i,t)}}function kA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4iv(this.addr,t),mn(i,t)}}function XA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2uiv(this.addr,t),mn(i,t)}}function qA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3uiv(this.addr,t),mn(i,t)}}function YA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4uiv(this.addr,t),mn(i,t)}}function jA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(G_.compareFunction=P0,u=G_):u=K0,i.setTexture2D(t||u,l)}function ZA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||J0,l)}function KA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||$0,l)}function QA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Q0,l)}function JA(s){switch(s){case 5126:return NA;case 35664:return OA;case 35665:return PA;case 35666:return zA;case 35674:return BA;case 35675:return FA;case 35676:return IA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return kA;case 5125:return XA;case 36294:return WA;case 36295:return qA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}function $A(s,t){s.uniform1fv(this.addr,t)}function eR(s,t){const i=Fs(t,this.size,2);s.uniform2fv(this.addr,i)}function tR(s,t){const i=Fs(t,this.size,3);s.uniform3fv(this.addr,i)}function nR(s,t){const i=Fs(t,this.size,4);s.uniform4fv(this.addr,i)}function iR(s,t){const i=Fs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function aR(s,t){const i=Fs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function rR(s,t){const i=Fs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function sR(s,t){s.uniform1iv(this.addr,t)}function oR(s,t){s.uniform2iv(this.addr,t)}function lR(s,t){s.uniform3iv(this.addr,t)}function uR(s,t){s.uniform4iv(this.addr,t)}function cR(s,t){s.uniform1uiv(this.addr,t)}function fR(s,t){s.uniform2uiv(this.addr,t)}function hR(s,t){s.uniform3uiv(this.addr,t)}function dR(s,t){s.uniform4uiv(this.addr,t)}function pR(s,t,i){const r=this.cache,l=t.length,u=ic(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||K0,u[h])}function mR(s,t,i){const r=this.cache,l=t.length,u=ic(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||J0,u[h])}function gR(s,t,i){const r=this.cache,l=t.length,u=ic(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||$0,u[h])}function vR(s,t,i){const r=this.cache,l=t.length,u=ic(i,l);pn(r,u)||(s.uniform1iv(this.addr,u),mn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Q0,u[h])}function _R(s){switch(s){case 5126:return $A;case 35664:return eR;case 35665:return tR;case 35666:return nR;case 35674:return iR;case 35675:return aR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return lR;case 35669:case 35673:return uR;case 5125:return cR;case 36294:return fR;case 36295:return hR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return pR;case 35679:case 36299:case 36307:return mR;case 35680:case 36300:case 36308:case 36293:return gR;case 36289:case 36303:case 36311:case 36292:return vR}}class xR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=JA(i.type)}}class SR{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_R(i.type)}}class yR{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function Y_(s,t){s.seq.push(t),s.map[t.id]=t}function MR(s,t,i){const r=s.name,l=r.length;for(Kh.lastIndex=0;;){const u=Kh.exec(r),h=Kh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Y_(i,p===void 0?new xR(d,s,t):new SR(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new yR(d),Y_(i,v)),i=v}}}class Wu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);MR(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function j_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const ER=37297;let bR=0;function TR(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Z_=new dt;function AR(s){Dt._getMatrix(Z_,Dt.workingColorSpace,s);const t=`mat3( ${Z_.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Yu:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function K_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+TR(s.getShaderSource(t),d)}else return u}function RR(s,t){const i=AR(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function CR(s,t){let i;switch(t){case UE:i="Linear";break;case LE:i="Reinhard";break;case NE:i="Cineon";break;case OE:i="ACESFilmic";break;case zE:i="AgX";break;case BE:i="Neutral";break;case PE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Fu=new se;function wR(){Dt.getLuminanceCoefficients(Fu);const s=Fu.x.toFixed(4),t=Fu.y.toFixed(4),i=Fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function UR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function LR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function Vo(s){return s!==""}function Q_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function J_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(NR,PR)}const OR=new Map;function PR(s,t){let i=pt[t];if(i===void 0){const r=OR.get(t);if(r!==void 0)i=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xd(i)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(s){return s.replace(zR,BR)}function BR(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function e0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function FR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===b0?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===cE?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function IR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case tc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function GR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case T0:t="ENVMAP_BLENDING_MULTIPLY";break;case wE:t="ENVMAP_BLENDING_MIX";break;case DE:t="ENVMAP_BLENDING_ADD";break}return t}function VR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function kR(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=FR(i),p=IR(i),g=HR(i),v=GR(i),y=VR(i),E=DR(i),b=UR(u),A=l.createProgram();let M,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),_.length>0&&(_+=`
`)):(M=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),_=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ya?CR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,RR("linearToOutputTexel",i.outputColorSpace),wR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),h=Xd(h),h=Q_(h,i),h=J_(h,i),d=Xd(d),d=Q_(d,i),d=J_(d,i),h=$_(h),d=$_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=L+M+h,w=L+_+d,G=j_(l,l.VERTEX_SHADER,N),H=j_(l,l.FRAGMENT_SHADER,w);l.attachShader(A,G),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(V){if(s.debug.checkShaderErrors){const te=l.getProgramInfoLog(A)||"",de=l.getShaderInfoLog(G)||"",pe=l.getShaderInfoLog(H)||"",ge=te.trim(),P=de.trim(),K=pe.trim();let W=!0,ye=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,H);else{const be=K_(l,G,"vertex"),O=K_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ge+`
`+be+`
`+O)}else ge!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ge):(P===""||K==="")&&(ye=!1);ye&&(V.diagnostics={runnable:W,programLog:ge,vertexShader:{log:P,prefix:M},fragmentShader:{log:K,prefix:_}})}l.deleteShader(G),l.deleteShader(H),j=new Wu(l,A),D=LR(l,A)}let j;this.getUniforms=function(){return j===void 0&&z(this),j};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,ER)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=bR++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=H,this}let XR=0;class WR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new qR(t),i.set(t,r)),r}}class qR{constructor(t){this.id=XR++,this.code=t,this.usedTimes=0}}function YR(s,t,i,r,l,u,h){const d=new I0,m=new WR,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,V,te,de){const pe=te.fog,ge=de.geometry,P=D.isMeshStandardMaterial?te.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),W=K&&K.mapping===tc?K.image.height:null,ye=b[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const be=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,O=be!==void 0?be.length:0;let ie=0;ge.morphAttributes.position!==void 0&&(ie=1),ge.morphAttributes.normal!==void 0&&(ie=2),ge.morphAttributes.color!==void 0&&(ie=3);let Me,Ce,Ne,ae;if(ye){const At=Ui[ye];Me=At.vertexShader,Ce=At.fragmentShader}else Me=D.vertexShader,Ce=D.fragmentShader,m.update(D),Ne=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const fe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Ie=de.isInstancedMesh===!0,je=de.isBatchedMesh===!0,ft=!!D.map,Qt=!!D.matcap,F=!!K,Tt=!!D.aoMap,at=!!D.lightMap,tt=!!D.bumpMap,Ze=!!D.normalMap,Mt=!!D.displacementMap,Ve=!!D.emissiveMap,rt=!!D.metalnessMap,qt=!!D.roughnessMap,Xt=D.anisotropy>0,U=D.clearcoat>0,x=D.dispersion>0,I=D.iridescence>0,Q=D.sheen>0,he=D.transmission>0,ee=Xt&&!!D.anisotropyMap,Le=U&&!!D.clearcoatMap,Re=U&&!!D.clearcoatNormalMap,He=U&&!!D.clearcoatRoughnessMap,Xe=I&&!!D.iridescenceMap,Te=I&&!!D.iridescenceThicknessMap,we=Q&&!!D.sheenColorMap,Qe=Q&&!!D.sheenRoughnessMap,Fe=!!D.specularMap,Oe=!!D.specularColorMap,lt=!!D.specularIntensityMap,X=he&&!!D.transmissionMap,Ae=he&&!!D.thicknessMap,Ue=!!D.gradientMap,Ge=!!D.alphaMap,Ee=D.alphaTest>0,xe=!!D.alphaHash,ke=!!D.extensions;let st=Ya;D.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(st=s.toneMapping);const Pt={shaderID:ye,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:Ce,defines:D.defines,customVertexShaderID:Ne,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:je,batchingColor:je&&de._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&de.instanceColor!==null,instancingMorph:Ie&&de.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ls,alphaToCoverage:!!D.alphaToCoverage,map:ft,matcap:Qt,envMap:F,envMapMode:F&&K.mapping,envMapCubeUVHeight:W,aoMap:Tt,lightMap:at,bumpMap:tt,normalMap:Ze,displacementMap:y&&Mt,emissiveMap:Ve,normalMapObjectSpace:Ze&&D.normalMapType===VE,normalMapTangentSpace:Ze&&D.normalMapType===GE,metalnessMap:rt,roughnessMap:qt,anisotropy:Xt,anisotropyMap:ee,clearcoat:U,clearcoatMap:Le,clearcoatNormalMap:Re,clearcoatRoughnessMap:He,dispersion:x,iridescence:I,iridescenceMap:Xe,iridescenceThicknessMap:Te,sheen:Q,sheenColorMap:we,sheenRoughnessMap:Qe,specularMap:Fe,specularColorMap:Oe,specularIntensityMap:lt,transmission:he,transmissionMap:X,thicknessMap:Ae,gradientMap:Ue,opaque:D.transparent===!1&&D.blending===Rs&&D.alphaToCoverage===!1,alphaMap:Ge,alphaTest:Ee,alphaHash:xe,combine:D.combine,mapUv:ft&&A(D.map.channel),aoMapUv:Tt&&A(D.aoMap.channel),lightMapUv:at&&A(D.lightMap.channel),bumpMapUv:tt&&A(D.bumpMap.channel),normalMapUv:Ze&&A(D.normalMap.channel),displacementMapUv:Mt&&A(D.displacementMap.channel),emissiveMapUv:Ve&&A(D.emissiveMap.channel),metalnessMapUv:rt&&A(D.metalnessMap.channel),roughnessMapUv:qt&&A(D.roughnessMap.channel),anisotropyMapUv:ee&&A(D.anisotropyMap.channel),clearcoatMapUv:Le&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&A(D.sheenRoughnessMap.channel),specularMapUv:Fe&&A(D.specularMap.channel),specularColorMapUv:Oe&&A(D.specularColorMap.channel),specularIntensityMapUv:lt&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Ae&&A(D.thicknessMap.channel),alphaMapUv:Ge&&A(D.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&(Ze||Xt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:de.isPoints===!0&&!!ge.attributes.uv&&(ft||Ge),fog:!!pe,useFog:D.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:De,skinning:de.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:st,decodeVideoTexture:ft&&D.map.isVideoTexture===!0&&Dt.getTransfer(D.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(D.emissiveMap.colorSpace)===Gt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===sa,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ke&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&D.extensions.multiDraw===!0||je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pt.vertexUv1s=p.has(1),Pt.vertexUv2s=p.has(2),Pt.vertexUv3s=p.has(3),p.clear(),Pt}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(L(C,D),N(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let V;if(C){const te=Ui[C];V=vb.clone(te.uniforms)}else V=D.uniforms;return V}function G(D,C){let V;for(let te=0,de=g.length;te<de;te++){const pe=g[te];if(pe.cacheKey===C){V=pe,++V.usedTimes;break}}return V===void 0&&(V=new kR(s,C,D,u),g.push(V)),V}function H(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function z(D){m.remove(D)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:w,acquireProgram:G,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:j}}function jR(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function ZR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function t0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function n0(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(v,y,E,b,A,M){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:E,groupOrder:b,renderOrder:v.renderOrder,z:A,group:M},s[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=A,_.group=M),t++,_}function d(v,y,E,b,A,M){const _=h(v,y,E,b,A,M);E.transmission>0?r.push(_):E.transparent===!0?l.push(_):i.push(_)}function m(v,y,E,b,A,M){const _=h(v,y,E,b,A,M);E.transmission>0?r.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||ZR),r.length>1&&r.sort(y||t0),l.length>1&&l.sort(y||t0)}function g(){for(let v=t,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function KR(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new n0,s.set(r,[h])):l>=u.length?(h=new n0,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function QR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new se,color:new Lt};break;case"SpotLight":i={position:new se,direction:new se,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new se,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new se,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":i={color:new Lt,position:new se,halfWidth:new se,halfHeight:new se};break}return s[t.id]=i,i}}}function JR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let $R=0;function e2(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function t2(s){const t=new QR,i=JR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new se);const l=new se,u=new fn,h=new fn;function d(p){let g=0,v=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let E=0,b=0,A=0,M=0,_=0,L=0,N=0,w=0,G=0,H=0,z=0;p.sort(e2);for(let D=0,C=p.length;D<C;D++){const V=p[D],te=V.color,de=V.intensity,pe=V.distance,ge=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=te.r*de,v+=te.g*de,y+=te.b*de;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],de);z++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const K=V.shadow,W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,r.directionalShadow[E]=W,r.directionalShadowMap[E]=ge,r.directionalShadowMatrix[E]=V.shadow.matrix,L++}r.directional[E]=P,E++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(te).multiplyScalar(de),P.distance=pe,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[A]=P;const K=V.shadow;if(V.map&&(r.spotLightMap[G]=V.map,G++,K.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[A]=K.matrix,V.castShadow){const W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,r.spotShadow[A]=W,r.spotShadowMap[A]=ge,w++}A++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(te).multiplyScalar(de),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=P,M++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const K=V.shadow,W=i.get(V);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,r.pointShadow[b]=W,r.pointShadowMap[b]=ge,r.pointShadowMatrix[b]=V.shadow.matrix,N++}r.point[b]=P,b++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(de),P.groundColor.copy(V.groundColor).multiplyScalar(de),r.hemi[_]=P,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==E||j.pointLength!==b||j.spotLength!==A||j.rectAreaLength!==M||j.hemiLength!==_||j.numDirectionalShadows!==L||j.numPointShadows!==N||j.numSpotShadows!==w||j.numSpotMaps!==G||j.numLightProbes!==z)&&(r.directional.length=E,r.spot.length=A,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=w+G-H,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,j.directionalLength=E,j.pointLength=b,j.spotLength=A,j.rectAreaLength=M,j.hemiLength=_,j.numDirectionalShadows=L,j.numPointShadows=N,j.numSpotShadows=w,j.numSpotMaps=G,j.numLightProbes=z,r.version=$R++)}function m(p,g){let v=0,y=0,E=0,b=0,A=0;const M=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const N=p[_];if(N.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),v++}else if(N.isSpotLight){const w=r.spot[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),E++}else if(N.isRectAreaLight){const w=r.rectArea[b];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),h.identity(),u.copy(N.matrixWorld),u.premultiply(M),h.extractRotation(u),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const w=r.point[y];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:r}}function i0(s){const t=new t2(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function n2(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new i0(s),t.set(l,[d])):u>=h.length?(d=new i0(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
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
}`;function r2(s,t,i){let r=new q0;const l=new ut,u=new ut,h=new en,d=new Db({depthPacking:HE}),m=new Ub,p={},g=i.maxTextureSize,v={[ja]:Vn,[Vn]:ja,[sa]:sa},y=new da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:i2,fragmentShader:a2}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const b=new pa;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new di(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let _=this.type;this.render=function(H,z,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),te=s.state;te.setBlending(qa),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const de=_!==ra&&this.type===ra,pe=_===ra&&this.type!==ra;for(let ge=0,P=H.length;ge<P;ge++){const K=H[ge],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const ye=W.getFrameExtents();if(l.multiply(ye),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ye.x),l.x=u.x*ye.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ye.y),l.y=u.y*ye.y,W.mapSize.y=u.y)),W.map===null||de===!0||pe===!0){const O=this.type!==ra?{minFilter:ei,magFilter:ei}:{};W.map!==null&&W.map.dispose(),W.map=new Za(l.x,l.y,O),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const be=W.getViewportCount();for(let O=0;O<be;O++){const ie=W.getViewport(O);h.set(u.x*ie.x,u.y*ie.y,u.x*ie.z,u.y*ie.w),te.viewport(h),W.updateMatrices(K,O),r=W.getFrustum(),w(z,j,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===ra&&L(W,j),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(D,C,V)};function L(H,z){const j=t.update(A);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Za(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(z,null,j,y,A,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(z,null,j,E,A,null)}function N(H,z,j,D){let C=null;const V=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=j.isPointLight===!0?m:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const te=C.uuid,de=z.uuid;let pe=p[te];pe===void 0&&(pe={},p[te]=pe);let ge=pe[de];ge===void 0&&(ge=C.clone(),pe[de]=ge,z.addEventListener("dispose",G)),C=ge}if(C.visible=z.visible,C.wireframe=z.wireframe,D===ra?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const te=s.properties.get(C);te.light=j}return C}function w(H,z,j,D,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ra)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const de=t.update(H),pe=H.material;if(Array.isArray(pe)){const ge=de.groups;for(let P=0,K=ge.length;P<K;P++){const W=ge[P],ye=pe[W.materialIndex];if(ye&&ye.visible){const be=N(H,ye,D,C);H.onBeforeShadow(s,H,z,j,de,be,W),s.renderBufferDirect(j,null,de,be,H,W),H.onAfterShadow(s,H,z,j,de,be,W)}}}else if(pe.visible){const ge=N(H,pe,D,C);H.onBeforeShadow(s,H,z,j,de,ge,null),s.renderBufferDirect(j,null,de,ge,H,null),H.onAfterShadow(s,H,z,j,de,ge,null)}}const te=H.children;for(let de=0,pe=te.length;de<pe;de++)w(te[de],z,j,D,C)}function G(H){H.target.removeEventListener("dispose",G);for(const j in p){const D=p[j],C=H.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const s2={[ad]:rd,[sd]:ud,[od]:cd,[ws]:ld,[rd]:ad,[ud]:sd,[cd]:od,[ld]:ws};function o2(s,t){function i(){let X=!1;const Ae=new en;let Ue=null;const Ge=new en(0,0,0,0);return{setMask:function(Ee){Ue!==Ee&&!X&&(s.colorMask(Ee,Ee,Ee,Ee),Ue=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,xe,ke,st,Pt){Pt===!0&&(Ee*=st,xe*=st,ke*=st),Ae.set(Ee,xe,ke,st),Ge.equals(Ae)===!1&&(s.clearColor(Ee,xe,ke,st),Ge.copy(Ae))},reset:function(){X=!1,Ue=null,Ge.set(-1,0,0,0)}}}function r(){let X=!1,Ae=!1,Ue=null,Ge=null,Ee=null;return{setReversed:function(xe){if(Ae!==xe){const ke=t.get("EXT_clip_control");xe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ae=xe;const st=Ee;Ee=null,this.setClear(st)}},getReversed:function(){return Ae},setTest:function(xe){xe?fe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(xe){Ue!==xe&&!X&&(s.depthMask(xe),Ue=xe)},setFunc:function(xe){if(Ae&&(xe=s2[xe]),Ge!==xe){switch(xe){case ad:s.depthFunc(s.NEVER);break;case rd:s.depthFunc(s.ALWAYS);break;case sd:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case od:s.depthFunc(s.EQUAL);break;case ld:s.depthFunc(s.GEQUAL);break;case ud:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=xe}},setLocked:function(xe){X=xe},setClear:function(xe){Ee!==xe&&(Ae&&(xe=1-xe),s.clearDepth(xe),Ee=xe)},reset:function(){X=!1,Ue=null,Ge=null,Ee=null,Ae=!1}}}function l(){let X=!1,Ae=null,Ue=null,Ge=null,Ee=null,xe=null,ke=null,st=null,Pt=null;return{setTest:function(At){X||(At?fe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(At){Ae!==At&&!X&&(s.stencilMask(At),Ae=At)},setFunc:function(At,wn,ti){(Ue!==At||Ge!==wn||Ee!==ti)&&(s.stencilFunc(At,wn,ti),Ue=At,Ge=wn,Ee=ti)},setOp:function(At,wn,ti){(xe!==At||ke!==wn||st!==ti)&&(s.stencilOp(At,wn,ti),xe=At,ke=wn,st=ti)},setLocked:function(At){X=At},setClear:function(At){Pt!==At&&(s.clearStencil(At),Pt=At)},reset:function(){X=!1,Ae=null,Ue=null,Ge=null,Ee=null,xe=null,ke=null,st=null,Pt=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,E=[],b=null,A=!1,M=null,_=null,L=null,N=null,w=null,G=null,H=null,z=new Lt(0,0,0),j=0,D=!1,C=null,V=null,te=null,de=null,pe=null;const ge=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,K=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=K>=2);let ye=null,be={};const O=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Me=new en().fromArray(O),Ce=new en().fromArray(ie);function Ne(X,Ae,Ue,Ge){const Ee=new Uint8Array(4),xe=s.createTexture();s.bindTexture(X,xe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<Ue;ke++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(Ae+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return xe}const ae={};ae[s.TEXTURE_2D]=Ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ae[s.TEXTURE_CUBE_MAP]=Ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[s.TEXTURE_2D_ARRAY]=Ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ae[s.TEXTURE_3D]=Ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),h.setFunc(ws),tt(!1),Ze(r_),fe(s.CULL_FACE),Tt(qa);function fe(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function De(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Ie(X,Ae){return v[X]!==Ae?(s.bindFramebuffer(X,Ae),v[X]=Ae,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ae),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(X,Ae){let Ue=E,Ge=!1;if(X){Ue=y.get(Ae),Ue===void 0&&(Ue=[],y.set(Ae,Ue));const Ee=X.textures;if(Ue.length!==Ee.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,ke=Ee.length;xe<ke;xe++)Ue[xe]=s.COLOR_ATTACHMENT0+xe;Ue.length=Ee.length,Ge=!0}}else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(Ue)}function ft(X){return b!==X?(s.useProgram(X),b=X,!0):!1}const Qt={[Tr]:s.FUNC_ADD,[hE]:s.FUNC_SUBTRACT,[dE]:s.FUNC_REVERSE_SUBTRACT};Qt[pE]=s.MIN,Qt[mE]=s.MAX;const F={[gE]:s.ZERO,[vE]:s.ONE,[_E]:s.SRC_COLOR,[nd]:s.SRC_ALPHA,[bE]:s.SRC_ALPHA_SATURATE,[ME]:s.DST_COLOR,[SE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[id]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[yE]:s.ONE_MINUS_DST_ALPHA,[TE]:s.CONSTANT_COLOR,[AE]:s.ONE_MINUS_CONSTANT_COLOR,[RE]:s.CONSTANT_ALPHA,[CE]:s.ONE_MINUS_CONSTANT_ALPHA};function Tt(X,Ae,Ue,Ge,Ee,xe,ke,st,Pt,At){if(X===qa){A===!0&&(De(s.BLEND),A=!1);return}if(A===!1&&(fe(s.BLEND),A=!0),X!==fE){if(X!==M||At!==D){if((_!==Tr||w!==Tr)&&(s.blendEquation(s.FUNC_ADD),_=Tr,w=Tr),At)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFunc(s.ONE,s.ONE);break;case s_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case o_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case td:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case s_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case o_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,N=null,G=null,H=null,z.set(0,0,0),j=0,M=X,D=At}return}Ee=Ee||Ae,xe=xe||Ue,ke=ke||Ge,(Ae!==_||Ee!==w)&&(s.blendEquationSeparate(Qt[Ae],Qt[Ee]),_=Ae,w=Ee),(Ue!==L||Ge!==N||xe!==G||ke!==H)&&(s.blendFuncSeparate(F[Ue],F[Ge],F[xe],F[ke]),L=Ue,N=Ge,G=xe,H=ke),(st.equals(z)===!1||Pt!==j)&&(s.blendColor(st.r,st.g,st.b,Pt),z.copy(st),j=Pt),M=X,D=!1}function at(X,Ae){X.side===sa?De(s.CULL_FACE):fe(s.CULL_FACE);let Ue=X.side===Vn;Ae&&(Ue=!Ue),tt(Ue),X.blending===Rs&&X.transparent===!1?Tt(qa):Tt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),u.setMask(X.colorWrite);const Ge=X.stencilWrite;d.setTest(Ge),Ge&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ve(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function tt(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function Ze(X){X!==lE?(fe(s.CULL_FACE),X!==V&&(X===r_?s.cullFace(s.BACK):X===uE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),V=X}function Mt(X){X!==te&&(P&&s.lineWidth(X),te=X)}function Ve(X,Ae,Ue){X?(fe(s.POLYGON_OFFSET_FILL),(de!==Ae||pe!==Ue)&&(s.polygonOffset(Ae,Ue),de=Ae,pe=Ue)):De(s.POLYGON_OFFSET_FILL)}function rt(X){X?fe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function qt(X){X===void 0&&(X=s.TEXTURE0+ge-1),ye!==X&&(s.activeTexture(X),ye=X)}function Xt(X,Ae,Ue){Ue===void 0&&(ye===null?Ue=s.TEXTURE0+ge-1:Ue=ye);let Ge=be[Ue];Ge===void 0&&(Ge={type:void 0,texture:void 0},be[Ue]=Ge),(Ge.type!==X||Ge.texture!==Ae)&&(ye!==Ue&&(s.activeTexture(Ue),ye=Ue),s.bindTexture(X,Ae||ae[X]),Ge.type=X,Ge.texture=Ae)}function U(){const X=be[ye];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function x(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Xe(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(X){Me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function Qe(X){Ce.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ce.copy(X))}function Fe(X,Ae){let Ue=p.get(Ae);Ue===void 0&&(Ue=new WeakMap,p.set(Ae,Ue));let Ge=Ue.get(X);Ge===void 0&&(Ge=s.getUniformBlockIndex(Ae,X.name),Ue.set(X,Ge))}function Oe(X,Ae){const Ge=p.get(Ae).get(X);m.get(Ae)!==Ge&&(s.uniformBlockBinding(Ae,Ge,X.__bindingPointIndex),m.set(Ae,Ge))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ye=null,be={},v={},y=new WeakMap,E=[],b=null,A=!1,M=null,_=null,L=null,N=null,w=null,G=null,H=null,z=new Lt(0,0,0),j=0,D=!1,C=null,V=null,te=null,de=null,pe=null,Me.set(0,0,s.canvas.width,s.canvas.height),Ce.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:fe,disable:De,bindFramebuffer:Ie,drawBuffers:je,useProgram:ft,setBlending:Tt,setMaterial:at,setFlipSided:tt,setCullFace:Ze,setLineWidth:Mt,setPolygonOffset:Ve,setScissorTest:rt,activeTexture:qt,bindTexture:Xt,unbindTexture:U,compressedTexImage2D:x,compressedTexImage3D:I,texImage2D:Xe,texImage3D:Te,updateUBOMapping:Fe,uniformBlockBinding:Oe,texStorage2D:Re,texStorage3D:He,texSubImage2D:Q,texSubImage3D:he,compressedTexSubImage2D:ee,compressedTexSubImage3D:Le,scissor:we,viewport:Qe,reset:lt}}function l2(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,g=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,x){return E?new OffscreenCanvas(U,x):Zu("canvas")}function A(U,x,I){let Q=1;const he=Xt(U);if((he.width>I||he.height>I)&&(Q=I/Math.max(he.width,he.height)),Q<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ee=Math.floor(Q*he.width),Le=Math.floor(Q*he.height);v===void 0&&(v=b(ee,Le));const Re=x?b(ee,Le):v;return Re.width=ee,Re.height=Le,Re.getContext("2d").drawImage(U,0,0,ee,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ee+"x"+Le+")."),Re}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(U,x,I,Q,he=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ee=x;if(x===s.RED&&(I===s.FLOAT&&(ee=s.R32F),I===s.HALF_FLOAT&&(ee=s.R16F),I===s.UNSIGNED_BYTE&&(ee=s.R8)),x===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(ee=s.R8UI),I===s.UNSIGNED_SHORT&&(ee=s.R16UI),I===s.UNSIGNED_INT&&(ee=s.R32UI),I===s.BYTE&&(ee=s.R8I),I===s.SHORT&&(ee=s.R16I),I===s.INT&&(ee=s.R32I)),x===s.RG&&(I===s.FLOAT&&(ee=s.RG32F),I===s.HALF_FLOAT&&(ee=s.RG16F),I===s.UNSIGNED_BYTE&&(ee=s.RG8)),x===s.RG_INTEGER&&(I===s.UNSIGNED_BYTE&&(ee=s.RG8UI),I===s.UNSIGNED_SHORT&&(ee=s.RG16UI),I===s.UNSIGNED_INT&&(ee=s.RG32UI),I===s.BYTE&&(ee=s.RG8I),I===s.SHORT&&(ee=s.RG16I),I===s.INT&&(ee=s.RG32I)),x===s.RGB_INTEGER&&(I===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),I===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),I===s.UNSIGNED_INT&&(ee=s.RGB32UI),I===s.BYTE&&(ee=s.RGB8I),I===s.SHORT&&(ee=s.RGB16I),I===s.INT&&(ee=s.RGB32I)),x===s.RGBA_INTEGER&&(I===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),I===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),I===s.UNSIGNED_INT&&(ee=s.RGBA32UI),I===s.BYTE&&(ee=s.RGBA8I),I===s.SHORT&&(ee=s.RGBA16I),I===s.INT&&(ee=s.RGBA32I)),x===s.RGB&&(I===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),I===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),x===s.RGBA){const Le=he?Yu:Dt.getTransfer(Q);I===s.FLOAT&&(ee=s.RGBA32F),I===s.HALF_FLOAT&&(ee=s.RGBA16F),I===s.UNSIGNED_BYTE&&(ee=Le===Gt?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ee}function w(U,x){let I;return U?x===null||x===wr||x===Wo?I=s.DEPTH24_STENCIL8:x===Li?I=s.DEPTH32F_STENCIL8:x===Xo&&(I=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wr||x===Wo?I=s.DEPTH_COMPONENT24:x===Li?I=s.DEPTH_COMPONENT32F:x===Xo&&(I=s.DEPTH_COMPONENT16),I}function G(U,x){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ei&&U.minFilter!==Gn?Math.log2(Math.max(x.width,x.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?x.mipmaps.length:1}function H(U){const x=U.target;x.removeEventListener("dispose",H),j(x),x.isVideoTexture&&g.delete(x)}function z(U){const x=U.target;x.removeEventListener("dispose",z),C(x)}function j(U){const x=r.get(U);if(x.__webglInit===void 0)return;const I=U.source,Q=y.get(I);if(Q){const he=Q[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&D(U),Object.keys(Q).length===0&&y.delete(I)}r.remove(U)}function D(U){const x=r.get(U);s.deleteTexture(x.__webglTexture);const I=U.source,Q=y.get(I);delete Q[x.__cacheKey],h.memory.textures--}function C(U){const x=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let he=0;he<x.__webglFramebuffer[Q].length;he++)s.deleteFramebuffer(x.__webglFramebuffer[Q][he]);else s.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)s.deleteFramebuffer(x.__webglFramebuffer[Q]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=U.textures;for(let Q=0,he=I.length;Q<he;Q++){const ee=r.get(I[Q]);ee.__webglTexture&&(s.deleteTexture(ee.__webglTexture),h.memory.textures--),r.remove(I[Q])}r.remove(U)}let V=0;function te(){V=0}function de(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function pe(U){const x=[];return x.push(U.wrapS),x.push(U.wrapT),x.push(U.wrapR||0),x.push(U.magFilter),x.push(U.minFilter),x.push(U.anisotropy),x.push(U.internalFormat),x.push(U.format),x.push(U.type),x.push(U.generateMipmaps),x.push(U.premultiplyAlpha),x.push(U.flipY),x.push(U.unpackAlignment),x.push(U.colorSpace),x.join()}function ge(U,x){const I=r.get(U);if(U.isVideoTexture&&rt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&I.__version!==U.version){const Q=U.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,U,x);return}}else U.isExternalTexture&&(I.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+x)}function P(U,x){const I=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&I.__version!==U.version){ae(I,U,x);return}i.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+x)}function K(U,x){const I=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&I.__version!==U.version){ae(I,U,x);return}i.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+x)}function W(U,x){const I=r.get(U);if(U.version>0&&I.__version!==U.version){fe(I,U,x);return}i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+x)}const ye={[dd]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[pd]:s.MIRRORED_REPEAT},be={[ei]:s.NEAREST,[FE]:s.NEAREST_MIPMAP_NEAREST,[pu]:s.NEAREST_MIPMAP_LINEAR,[Gn]:s.LINEAR,[xh]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},O={[kE]:s.NEVER,[ZE]:s.ALWAYS,[XE]:s.LESS,[P0]:s.LEQUAL,[WE]:s.EQUAL,[jE]:s.GEQUAL,[qE]:s.GREATER,[YE]:s.NOTEQUAL};function ie(U,x){if(x.type===Li&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Gn||x.magFilter===xh||x.magFilter===pu||x.magFilter===Rr||x.minFilter===Gn||x.minFilter===xh||x.minFilter===pu||x.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ye[x.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ye[x.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ye[x.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,be[x.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,O[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ei||x.minFilter!==pu&&x.minFilter!==Rr||x.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||r.get(x).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),r.get(x).__currentAnisotropy=x.anisotropy}}}function Me(U,x){let I=!1;U.__webglInit===void 0&&(U.__webglInit=!0,x.addEventListener("dispose",H));const Q=x.source;let he=y.get(Q);he===void 0&&(he={},y.set(Q,he));const ee=pe(x);if(ee!==U.__cacheKey){he[ee]===void 0&&(he[ee]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,I=!0),he[ee].usedTimes++;const Le=he[U.__cacheKey];Le!==void 0&&(he[U.__cacheKey].usedTimes--,Le.usedTimes===0&&D(x)),U.__cacheKey=ee,U.__webglTexture=he[ee].texture}return I}function Ce(U,x,I){return Math.floor(Math.floor(U/I)/x)}function Ne(U,x,I,Q){const ee=U.updateRanges;if(ee.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,x.width,x.height,I,Q,x.data);else{ee.sort((Te,we)=>Te.start-we.start);let Le=0;for(let Te=1;Te<ee.length;Te++){const we=ee[Le],Qe=ee[Te],Fe=we.start+we.count,Oe=Ce(Qe.start,x.width,4),lt=Ce(we.start,x.width,4);Qe.start<=Fe+1&&Oe===lt&&Ce(Qe.start+Qe.count-1,x.width,4)===Oe?we.count=Math.max(we.count,Qe.start+Qe.count-we.start):(++Le,ee[Le]=Qe)}ee.length=Le+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),Xe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,x.width);for(let Te=0,we=ee.length;Te<we;Te++){const Qe=ee[Te],Fe=Math.floor(Qe.start/4),Oe=Math.ceil(Qe.count/4),lt=Fe%x.width,X=Math.floor(Fe/x.width),Ae=Oe,Ue=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,lt,X,Ae,Ue,I,Q,x.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,Xe)}}function ae(U,x,I){let Q=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=s.TEXTURE_3D);const he=Me(U,x),ee=x.source;i.bindTexture(Q,U.__webglTexture,s.TEXTURE0+I);const Le=r.get(ee);if(ee.version!==Le.__version||he===!0){i.activeTexture(s.TEXTURE0+I);const Re=Dt.getPrimaries(Dt.workingColorSpace),He=x.colorSpace===Wa?null:Dt.getPrimaries(x.colorSpace),Xe=x.colorSpace===Wa||Re===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Te=A(x.image,!1,l.maxTextureSize);Te=qt(x,Te);const we=u.convert(x.format,x.colorSpace),Qe=u.convert(x.type);let Fe=N(x.internalFormat,we,Qe,x.colorSpace,x.isVideoTexture);ie(Q,x);let Oe;const lt=x.mipmaps,X=x.isVideoTexture!==!0,Ae=Le.__version===void 0||he===!0,Ue=ee.dataReady,Ge=G(x,Te);if(x.isDepthTexture)Fe=w(x.format===Yo,x.type),Ae&&(X?i.texStorage2D(s.TEXTURE_2D,1,Fe,Te.width,Te.height):i.texImage2D(s.TEXTURE_2D,0,Fe,Te.width,Te.height,0,we,Qe,null));else if(x.isDataTexture)if(lt.length>0){X&&Ae&&i.texStorage2D(s.TEXTURE_2D,Ge,Fe,lt[0].width,lt[0].height);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Qe,Oe.data):i.texImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,we,Qe,Oe.data);x.generateMipmaps=!1}else X?(Ae&&i.texStorage2D(s.TEXTURE_2D,Ge,Fe,Te.width,Te.height),Ue&&Ne(x,Te,we,Qe)):i.texImage2D(s.TEXTURE_2D,0,Fe,Te.width,Te.height,0,we,Qe,Te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){X&&Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Fe,lt[0].width,lt[0].height,Te.depth);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)if(Oe=lt[Ee],x.format!==hi)if(we!==null)if(X){if(Ue)if(x.layerUpdates.size>0){const ke=N_(Oe.width,Oe.height,x.format,x.type);for(const st of x.layerUpdates){const Pt=Oe.data.subarray(st*ke/Oe.data.BYTES_PER_ELEMENT,(st+1)*ke/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,st,Oe.width,Oe.height,1,we,Pt)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Te.depth,we,Oe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,Oe.width,Oe.height,Te.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ue&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,Te.depth,we,Qe,Oe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Fe,Oe.width,Oe.height,Te.depth,0,we,Qe,Oe.data)}else{X&&Ae&&i.texStorage2D(s.TEXTURE_2D,Ge,Fe,lt[0].width,lt[0].height);for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],x.format!==hi?we!==null?X?Ue&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Oe.data):i.compressedTexImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,we,Qe,Oe.data):i.texImage2D(s.TEXTURE_2D,Ee,Fe,Oe.width,Oe.height,0,we,Qe,Oe.data)}else if(x.isDataArrayTexture)if(X){if(Ae&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Fe,Te.width,Te.height,Te.depth),Ue)if(x.layerUpdates.size>0){const Ee=N_(Te.width,Te.height,x.format,x.type);for(const xe of x.layerUpdates){const ke=Te.data.subarray(xe*Ee/Te.data.BYTES_PER_ELEMENT,(xe+1)*Ee/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,xe,Te.width,Te.height,1,we,Qe,ke)}x.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,we,Qe,Te.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,Te.width,Te.height,Te.depth,0,we,Qe,Te.data);else if(x.isData3DTexture)X?(Ae&&i.texStorage3D(s.TEXTURE_3D,Ge,Fe,Te.width,Te.height,Te.depth),Ue&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,we,Qe,Te.data)):i.texImage3D(s.TEXTURE_3D,0,Fe,Te.width,Te.height,Te.depth,0,we,Qe,Te.data);else if(x.isFramebufferTexture){if(Ae)if(X)i.texStorage2D(s.TEXTURE_2D,Ge,Fe,Te.width,Te.height);else{let Ee=Te.width,xe=Te.height;for(let ke=0;ke<Ge;ke++)i.texImage2D(s.TEXTURE_2D,ke,Fe,Ee,xe,0,we,Qe,null),Ee>>=1,xe>>=1}}else if(lt.length>0){if(X&&Ae){const Ee=Xt(lt[0]);i.texStorage2D(s.TEXTURE_2D,Ge,Fe,Ee.width,Ee.height)}for(let Ee=0,xe=lt.length;Ee<xe;Ee++)Oe=lt[Ee],X?Ue&&i.texSubImage2D(s.TEXTURE_2D,Ee,0,0,we,Qe,Oe):i.texImage2D(s.TEXTURE_2D,Ee,Fe,we,Qe,Oe);x.generateMipmaps=!1}else if(X){if(Ae){const Ee=Xt(Te);i.texStorage2D(s.TEXTURE_2D,Ge,Fe,Ee.width,Ee.height)}Ue&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,we,Qe,Te)}else i.texImage2D(s.TEXTURE_2D,0,Fe,we,Qe,Te);M(x)&&_(Q),Le.__version=ee.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version}function fe(U,x,I){if(x.image.length!==6)return;const Q=Me(U,x),he=x.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+I);const ee=r.get(he);if(he.version!==ee.__version||Q===!0){i.activeTexture(s.TEXTURE0+I);const Le=Dt.getPrimaries(Dt.workingColorSpace),Re=x.colorSpace===Wa?null:Dt.getPrimaries(x.colorSpace),He=x.colorSpace===Wa||Le===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Xe=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,we=[];for(let xe=0;xe<6;xe++)!Xe&&!Te?we[xe]=A(x.image[xe],!0,l.maxCubemapSize):we[xe]=Te?x.image[xe].image:x.image[xe],we[xe]=qt(x,we[xe]);const Qe=we[0],Fe=u.convert(x.format,x.colorSpace),Oe=u.convert(x.type),lt=N(x.internalFormat,Fe,Oe,x.colorSpace),X=x.isVideoTexture!==!0,Ae=ee.__version===void 0||Q===!0,Ue=he.dataReady;let Ge=G(x,Qe);ie(s.TEXTURE_CUBE_MAP,x);let Ee;if(Xe){X&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,lt,Qe.width,Qe.height);for(let xe=0;xe<6;xe++){Ee=we[xe].mipmaps;for(let ke=0;ke<Ee.length;ke++){const st=Ee[ke];x.format!==hi?Fe!==null?X?Ue&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,st.width,st.height,Fe,st.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,lt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,0,0,st.width,st.height,Fe,Oe,st.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke,lt,st.width,st.height,0,Fe,Oe,st.data)}}}else{if(Ee=x.mipmaps,X&&Ae){Ee.length>0&&Ge++;const xe=Xt(we[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Te){X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,we[xe].width,we[xe].height,Fe,Oe,we[xe].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,we[xe].width,we[xe].height,0,Fe,Oe,we[xe].data);for(let ke=0;ke<Ee.length;ke++){const Pt=Ee[ke].image[xe].image;X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,Pt.width,Pt.height,Fe,Oe,Pt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,lt,Pt.width,Pt.height,0,Fe,Oe,Pt.data)}}else{X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Fe,Oe,we[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Fe,Oe,we[xe]);for(let ke=0;ke<Ee.length;ke++){const st=Ee[ke];X?Ue&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,0,0,Fe,Oe,st.image[xe]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ke+1,lt,Fe,Oe,st.image[xe])}}}M(x)&&_(s.TEXTURE_CUBE_MAP),ee.__version=he.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version}function De(U,x,I,Q,he,ee){const Le=u.convert(I.format,I.colorSpace),Re=u.convert(I.type),He=N(I.internalFormat,Le,Re,I.colorSpace),Xe=r.get(x),Te=r.get(I);if(Te.__renderTarget=x,!Xe.__hasExternalTextures){const we=Math.max(1,x.width>>ee),Qe=Math.max(1,x.height>>ee);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?i.texImage3D(he,ee,He,we,Qe,x.depth,0,Le,Re,null):i.texImage2D(he,ee,He,we,Qe,0,Le,Re,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,he,Te.__webglTexture,0,Mt(x)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,he,Te.__webglTexture,ee),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(U,x,I){if(s.bindRenderbuffer(s.RENDERBUFFER,U),x.depthBuffer){const Q=x.depthTexture,he=Q&&Q.isDepthTexture?Q.type:null,ee=w(x.stencilBuffer,he),Le=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=Mt(x);Ve(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,ee,x.width,x.height):I?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,ee,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,ee,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,U)}else{const Q=x.textures;for(let he=0;he<Q.length;he++){const ee=Q[he],Le=u.convert(ee.format,ee.colorSpace),Re=u.convert(ee.type),He=N(ee.internalFormat,Le,Re,ee.colorSpace),Xe=Mt(x);I&&Ve(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,He,x.width,x.height):Ve(x)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,He,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,He,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function je(U,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=r.get(x.depthTexture);Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ge(x.depthTexture,0);const he=Q.__webglTexture,ee=Mt(x);if(x.depthTexture.format===qo)Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(x.depthTexture.format===Yo)Ve(x)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function ft(U){const x=r.get(U),I=U.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==U.depthTexture){const Q=U.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Q){const he=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Q.removeEventListener("dispose",he)};Q.addEventListener("dispose",he),x.__depthDisposeCallback=he}x.__boundDepthTexture=Q}if(U.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const Q=U.texture.mipmaps;Q&&Q.length>0?je(x.__webglFramebuffer[0],U):je(x.__webglFramebuffer,U)}else if(I){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]===void 0)x.__webglDepthbuffer[Q]=s.createRenderbuffer(),Ie(x.__webglDepthbuffer[Q],U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ee)}}else{const Q=U.texture.mipmaps;if(Q&&Q.length>0?i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ie(x.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ee)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(U,x,I){const Q=r.get(U);x!==void 0&&De(Q.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&ft(U)}function F(U){const x=U.texture,I=r.get(U),Q=r.get(x);U.addEventListener("dispose",z);const he=U.textures,ee=U.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=x.version,h.memory.textures++),ee){I.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[Re]=[];for(let He=0;He<x.mipmaps.length;He++)I.__webglFramebuffer[Re][He]=s.createFramebuffer()}else I.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let Re=0;Re<x.mipmaps.length;Re++)I.__webglFramebuffer[Re]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(Le)for(let Re=0,He=he.length;Re<He;Re++){const Xe=r.get(he[Re]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),h.memory.textures++)}if(U.samples>0&&Ve(U)===!1){I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Re=0;Re<he.length;Re++){const He=he[Re];I.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[Re]);const Xe=u.convert(He.format,He.colorSpace),Te=u.convert(He.type),we=N(He.internalFormat,Xe,Te,He.colorSpace,U.isXRRenderTarget===!0),Qe=Mt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,we,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,I.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(I.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){i.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(s.TEXTURE_CUBE_MAP,x);for(let Re=0;Re<6;Re++)if(x.mipmaps&&x.mipmaps.length>0)for(let He=0;He<x.mipmaps.length;He++)De(I.__webglFramebuffer[Re][He],U,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,He);else De(I.__webglFramebuffer[Re],U,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);M(x)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let Re=0,He=he.length;Re<He;Re++){const Xe=he[Re],Te=r.get(Xe);let we=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,Te.__webglTexture),ie(we,Xe),De(I.__webglFramebuffer,U,Xe,s.COLOR_ATTACHMENT0+Re,we,0),M(Xe)&&_(we)}i.unbindTexture()}else{let Re=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Re,Q.__webglTexture),ie(Re,x),x.mipmaps&&x.mipmaps.length>0)for(let He=0;He<x.mipmaps.length;He++)De(I.__webglFramebuffer[He],U,x,s.COLOR_ATTACHMENT0,Re,He);else De(I.__webglFramebuffer,U,x,s.COLOR_ATTACHMENT0,Re,0);M(x)&&_(Re),i.unbindTexture()}U.depthBuffer&&ft(U)}function Tt(U){const x=U.textures;for(let I=0,Q=x.length;I<Q;I++){const he=x[I];if(M(he)){const ee=L(U),Le=r.get(he).__webglTexture;i.bindTexture(ee,Le),_(ee),i.unbindTexture()}}}const at=[],tt=[];function Ze(U){if(U.samples>0){if(Ve(U)===!1){const x=U.textures,I=U.width,Q=U.height;let he=s.COLOR_BUFFER_BIT;const ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=r.get(U),Re=x.length>1;if(Re)for(let Xe=0;Xe<x.length;Xe++)i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const He=U.texture.mipmaps;He&&He.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Xe=0;Xe<x.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);const Te=r.get(x[Xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,I,Q,0,0,I,Q,he,s.NEAREST),m===!0&&(at.length=0,tt.length=0,at.push(s.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(at.push(ee),tt.push(ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Xe=0;Xe<x.length;Xe++){i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Xe]);const Te=r.get(x[Xe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xe,s.TEXTURE_2D,Te,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const x=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function Mt(U){return Math.min(l.maxSamples,U.samples)}function Ve(U){const x=r.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(U){const x=h.render.frame;g.get(U)!==x&&(g.set(U,x),U.update())}function qt(U,x){const I=U.colorSpace,Q=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||I!==Ls&&I!==Wa&&(Dt.getTransfer(I)===Gt?(Q!==hi||he!==fa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=de,this.resetTextureUnits=te,this.setTexture2D=ge,this.setTexture2DArray=P,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Qt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}function u2(s,t){function i(r,l=Wa){let u;const h=Dt.getTransfer(l);if(r===fa)return s.UNSIGNED_BYTE;if(r===ep)return s.UNSIGNED_SHORT_4_4_4_4;if(r===tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===w0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===D0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===R0)return s.BYTE;if(r===C0)return s.SHORT;if(r===Xo)return s.UNSIGNED_SHORT;if(r===$d)return s.INT;if(r===wr)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===zs)return s.HALF_FLOAT;if(r===U0)return s.ALPHA;if(r===L0)return s.RGB;if(r===hi)return s.RGBA;if(r===qo)return s.DEPTH_COMPONENT;if(r===Yo)return s.DEPTH_STENCIL;if(r===N0)return s.RED;if(r===np)return s.RED_INTEGER;if(r===O0)return s.RG;if(r===ip)return s.RG_INTEGER;if(r===ap)return s.RGBA_INTEGER;if(r===Gu||r===Vu||r===ku||r===Xu)if(h===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===md||r===gd||r===vd||r===_d)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===md)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xd||r===Sd||r===yd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===xd||r===Sd)return h===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd||r===Cd||r===wd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od||r===Pd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Md)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ed)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Cd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pd)return h===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zd||r===Bd||r===Fd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===zd)return h===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Hd||r===Gd||r===Vd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Id)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const c2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f2=`
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

}`;class h2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new j0(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new da({vertexShader:c2,fragmentShader:f2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Cr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d2 extends Bs{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,E=null,b=null;const A=typeof XRWebGLBinding<"u",M=new h2,_={},L=i.getContextAttributes();let N=null,w=null;const G=[],H=[],z=new ut;let j=null;const D=new Si;D.viewport=new en;const C=new Si;C.viewport=new en;const V=[D,C],te=new Nb;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=G[ae];return fe===void 0&&(fe=new Vh,G[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=G[ae];return fe===void 0&&(fe=new Vh,G[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=G[ae];return fe===void 0&&(fe=new Vh,G[ae]=fe),fe.getHandSpace()};function ge(ae){const fe=H.indexOf(ae.inputSource);if(fe===-1)return;const De=G[fe];De!==void 0&&(De.update(ae.inputSource,ae.frame,p||h),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){l.removeEventListener("select",ge),l.removeEventListener("selectstart",ge),l.removeEventListener("selectend",ge),l.removeEventListener("squeeze",ge),l.removeEventListener("squeezestart",ge),l.removeEventListener("squeezeend",ge),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",K);for(let ae=0;ae<G.length;ae++){const fe=H[ae];fe!==null&&(H[ae]=null,G[ae].disconnect(fe))}de=null,pe=null,M.reset();for(const ae in _)delete _[ae];t.setRenderTarget(N),E=null,y=null,v=null,l=null,w=null,Ne.stop(),r.isPresenting=!1,t.setPixelRatio(j),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){u=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ge),l.addEventListener("selectstart",ge),l.addEventListener("selectend",ge),l.addEventListener("squeeze",ge),l.addEventListener("squeezestart",ge),l.addEventListener("squeezeend",ge),l.addEventListener("end",P),l.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await i.makeXRCompatible(),j=t.getPixelRatio(),t.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Ie=null,je=null;L.depth&&(je=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=L.stencil?Yo:qo,Ie=L.stencil?Wo:wr);const ft={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:u};v=this.getBinding(),y=v.createProjectionLayer(ft),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),w=new Za(y.textureWidth,y.textureHeight,{format:hi,type:fa,depthTexture:new Y0(y.textureWidth,y.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const De={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new Za(E.framebufferWidth,E.framebufferHeight,{format:hi,type:fa,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ne.setContext(l),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(ae){for(let fe=0;fe<ae.removed.length;fe++){const De=ae.removed[fe],Ie=H.indexOf(De);Ie>=0&&(H[Ie]=null,G[Ie].disconnect(De))}for(let fe=0;fe<ae.added.length;fe++){const De=ae.added[fe];let Ie=H.indexOf(De);if(Ie===-1){for(let ft=0;ft<G.length;ft++)if(ft>=H.length){H.push(De),Ie=ft;break}else if(H[ft]===null){H[ft]=De,Ie=ft;break}if(Ie===-1)break}const je=G[Ie];je&&je.connect(De)}}const W=new se,ye=new se;function be(ae,fe,De){W.setFromMatrixPosition(fe.matrixWorld),ye.setFromMatrixPosition(De.matrixWorld);const Ie=W.distanceTo(ye),je=fe.projectionMatrix.elements,ft=De.projectionMatrix.elements,Qt=je[14]/(je[10]-1),F=je[14]/(je[10]+1),Tt=(je[9]+1)/je[5],at=(je[9]-1)/je[5],tt=(je[8]-1)/je[0],Ze=(ft[8]+1)/ft[0],Mt=Qt*tt,Ve=Qt*Ze,rt=Ie/(-tt+Ze),qt=rt*-tt;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(qt),ae.translateZ(rt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),je[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Xt=Qt+rt,U=F+rt,x=Mt-qt,I=Ve+(Ie-qt),Q=Tt*F/U*Xt,he=at*F/U*Xt;ae.projectionMatrix.makePerspective(x,I,Q,he,Xt,U),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let fe=ae.near,De=ae.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(De=M.depthFar)),te.near=C.near=D.near=fe,te.far=C.far=D.far=De,(de!==te.near||pe!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),de=te.near,pe=te.far),te.layers.mask=ae.layers.mask|6,D.layers.mask=te.layers.mask&3,C.layers.mask=te.layers.mask&5;const Ie=ae.parent,je=te.cameras;O(te,Ie);for(let ft=0;ft<je.length;ft++)O(je[ft],Ie);je.length===2?be(te,D,C):te.projectionMatrix.copy(D.projectionMatrix),ie(ae,te,Ie)};function ie(ae,fe,De){De===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=kd*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(y===null&&E===null))return m},this.setFoveation=function(ae){m=ae,y!==null&&(y.fixedFoveation=ae),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(te)},this.getCameraTexture=function(ae){return _[ae]};let Me=null;function Ce(ae,fe){if(g=fe.getViewerPose(p||h),b=fe,g!==null){const De=g.views;E!==null&&(t.setRenderTargetFramebuffer(w,E.framebuffer),t.setRenderTarget(w));let Ie=!1;De.length!==te.cameras.length&&(te.cameras.length=0,Ie=!0);for(let F=0;F<De.length;F++){const Tt=De[F];let at=null;if(E!==null)at=E.getViewport(Tt);else{const Ze=v.getViewSubImage(y,Tt);at=Ze.viewport,F===0&&(t.setRenderTargetTextures(w,Ze.colorTexture,Ze.depthStencilTexture),t.setRenderTarget(w))}let tt=V[F];tt===void 0&&(tt=new Si,tt.layers.enable(F),tt.viewport=new en,V[F]=tt),tt.matrix.fromArray(Tt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(Tt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(at.x,at.y,at.width,at.height),F===0&&(te.matrix.copy(tt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ie===!0&&te.cameras.push(tt)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const F=v.getDepthInformation(De[0]);F&&F.isValid&&F.texture&&M.init(F,l.renderState)}if(je&&je.includes("camera-access")&&A){t.state.unbindTexture(),v=r.getBinding();for(let F=0;F<De.length;F++){const Tt=De[F].camera;if(Tt){let at=_[Tt];at||(at=new j0,_[Tt]=at);const tt=v.getCameraImage(Tt);at.sourceTexture=tt}}}}for(let De=0;De<G.length;De++){const Ie=H[De],je=G[De];Ie!==null&&je!==void 0&&je.update(Ie,fe,p||h)}Me&&Me(ae,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),b=null}const Ne=new Z0;Ne.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){Me=ae},this.dispose=function(){}}}const Mr=new ha,p2=new fn;function m2(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,X0(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,L,N,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),v(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&E(M,_,w)):_.isMeshMatcapMaterial?(u(M,_),b(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),A(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,L,N):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Vn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Vn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=t.get(_),N=L.envMap,w=L.envMapRotation;N&&(M.envMap.value=N,Mr.copy(w),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),M.envMapRotation.value.setFromMatrix4(p2.makeRotationFromEuler(Mr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,L,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=N*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function E(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const L=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function g2(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,N){const w=N.program;r.uniformBlockBinding(L,w)}function p(L,N){let w=l[L.id];w===void 0&&(b(L),w=g(L),l[L.id]=w,L.addEventListener("dispose",M));const G=N.program;r.updateUBOMapping(L,G);const H=t.render.frame;u[L.id]!==H&&(y(L),u[L.id]=H)}function g(L){const N=v();L.__bindingPointIndex=N;const w=s.createBuffer(),G=L.__size,H=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,G,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,w),w}function v(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const N=l[L.id],w=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let H=0,z=w.length;H<z;H++){const j=Array.isArray(w[H])?w[H]:[w[H]];for(let D=0,C=j.length;D<C;D++){const V=j[D];if(E(V,H,D,G)===!0){const te=V.__offset,de=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let ge=0;ge<de.length;ge++){const P=de[ge],K=A(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,te+pe,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,pe),pe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(L,N,w,G){const H=L.value,z=N+"_"+w;if(G[z]===void 0)return typeof H=="number"||typeof H=="boolean"?G[z]=H:G[z]=H.clone(),!0;{const j=G[z];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return G[z]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function b(L){const N=L.uniforms;let w=0;const G=16;for(let z=0,j=N.length;z<j;z++){const D=Array.isArray(N[z])?N[z]:[N[z]];for(let C=0,V=D.length;C<V;C++){const te=D[C],de=Array.isArray(te.value)?te.value:[te.value];for(let pe=0,ge=de.length;pe<ge;pe++){const P=de[pe],K=A(P),W=w%G,ye=W%K.boundary,be=W+ye;w+=ye,be!==0&&G-be<K.storage&&(w+=G-be),te.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=w,w+=K.storage}}}const H=w%G;return H>0&&(w+=G-H),L.__size=w,L.__cache={},this}function A(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function M(L){const N=L.target;N.removeEventListener("dispose",M);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class v2{constructor(t={}){const{canvas:i=QE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const b=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const L=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let G=!1;this._outputColorSpace=fi;let H=0,z=0,j=null,D=-1,C=null;const V=new en,te=new en;let de=null;const pe=new Lt(0);let ge=0,P=i.width,K=i.height,W=1,ye=null,be=null;const O=new en(0,0,P,K),ie=new en(0,0,P,K);let Me=!1;const Ce=new q0;let Ne=!1,ae=!1;const fe=new fn,De=new se,Ie=new en,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Qt(){return j===null?W:1}let F=r;function Tt(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jd}`),i.addEventListener("webglcontextlost",Ue,!1),i.addEventListener("webglcontextrestored",Ge,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),F===null){const q="webgl2";if(F=Tt(q,R),F===null)throw Tt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,tt,Ze,Mt,Ve,rt,qt,Xt,U,x,I,Q,he,ee,Le,Re,He,Xe,Te,we,Qe,Fe,Oe,lt;function X(){at=new RA(F),at.init(),Fe=new u2(F,at),tt=new SA(F,at,t,Fe),Ze=new o2(F,at),tt.reversedDepthBuffer&&y&&Ze.buffers.depth.setReversed(!0),Mt=new DA(F),Ve=new jR,rt=new l2(F,at,Ze,Ve,tt,Fe,Mt),qt=new MA(w),Xt=new AA(w),U=new zb(F),Oe=new _A(F,U),x=new CA(F,U,Mt,Oe),I=new LA(F,x,U,Mt),Te=new UA(F,tt,rt),Re=new yA(Ve),Q=new YR(w,qt,Xt,at,tt,Oe,Re),he=new m2(w,Ve),ee=new KR,Le=new n2(at),Xe=new vA(w,qt,Xt,Ze,I,E,m),He=new r2(w,I,tt),lt=new g2(F,Mt,tt,Ze),we=new xA(F,at,Mt),Qe=new wA(F,at,Mt),Mt.programs=Q.programs,w.capabilities=tt,w.extensions=at,w.properties=Ve,w.renderLists=ee,w.shadowMap=He,w.state=Ze,w.info=Mt}X();const Ae=new d2(w,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(P,K,!1))},this.getSize=function(R){return R.set(P,K)},this.setSize=function(R,q,re=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,K=q,i.width=Math.floor(R*W),i.height=Math.floor(q*W),re===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*W,K*W).floor()},this.setDrawingBufferSize=function(R,q,re){P=R,K=q,W=re,i.width=Math.floor(R*re),i.height=Math.floor(q*re),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy(O)},this.setViewport=function(R,q,re,oe){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,q,re,oe),Ze.viewport(V.copy(O).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,q,re,oe){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,q,re,oe),Ze.scissor(te.copy(ie).multiplyScalar(W).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Ze.setScissorTest(Me=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){be=R},this.getClearColor=function(R){return R.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,re=!0){let oe=0;if(R){let Z=!1;if(j!==null){const Se=j.texture.format;Z=Se===ap||Se===ip||Se===np}if(Z){const Se=j.texture.type,Pe=Se===fa||Se===wr||Se===Xo||Se===Wo||Se===ep||Se===tp,qe=Xe.getClearColor(),Be=Xe.getClearAlpha(),Je=qe.r,it=qe.g,$e=qe.b;Pe?(b[0]=Je,b[1]=it,b[2]=$e,b[3]=Be,F.clearBufferuiv(F.COLOR,0,b)):(A[0]=Je,A[1]=it,A[2]=$e,A[3]=Be,F.clearBufferiv(F.COLOR,0,A))}else oe|=F.COLOR_BUFFER_BIT}q&&(oe|=F.DEPTH_BUFFER_BIT),re&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ue,!1),i.removeEventListener("webglcontextrestored",Ge,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),Xe.dispose(),ee.dispose(),Le.dispose(),Ve.dispose(),qt.dispose(),Xt.dispose(),I.dispose(),Oe.dispose(),lt.dispose(),Q.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ti),Ae.removeEventListener("sessionend",Is),Ti.stop()};function Ue(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Mt.autoReset,q=He.enabled,re=He.autoUpdate,oe=He.needsUpdate,Z=He.type;X(),Mt.autoReset=R,He.enabled=q,He.autoUpdate=re,He.needsUpdate=oe,He.type=Z}function Ee(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xe(R){const q=R.target;q.removeEventListener("dispose",xe),ke(q)}function ke(R){st(R),Ve.remove(R)}function st(R){const q=Ve.get(R).programs;q!==void 0&&(q.forEach(function(re){Q.releaseProgram(re)}),R.isShaderMaterial&&Q.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,re,oe,Z,Se){q===null&&(q=je);const Pe=Z.isMesh&&Z.matrixWorld.determinant()<0,qe=ma(R,q,re,oe,Z);Ze.setMaterial(oe,Pe);let Be=re.index,Je=1;if(oe.wireframe===!0){if(Be=x.getWireframeAttribute(re),Be===void 0)return;Je=2}const it=re.drawRange,$e=re.attributes.position;let mt=it.start*Je,Nt=(it.start+it.count)*Je;Se!==null&&(mt=Math.max(mt,Se.start*Je),Nt=Math.min(Nt,(Se.start+Se.count)*Je)),Be!==null?(mt=Math.max(mt,0),Nt=Math.min(Nt,Be.count)):$e!=null&&(mt=Math.max(mt,0),Nt=Math.min(Nt,$e.count));const Vt=Nt-mt;if(Vt<0||Vt===1/0)return;Oe.setup(Z,oe,qe,re,Be);let Ot,gt=we;if(Be!==null&&(Ot=U.get(Be),gt=Qe,gt.setIndex(Ot)),Z.isMesh)oe.wireframe===!0?(Ze.setLineWidth(oe.wireframeLinewidth*Qt()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(Z.isLine){let Ye=oe.linewidth;Ye===void 0&&(Ye=1),Ze.setLineWidth(Ye*Qt()),Z.isLineSegments?gt.setMode(F.LINES):Z.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else Z.isPoints?gt.setMode(F.POINTS):Z.isSprite&&gt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))gt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,Wt=Z._multiDrawCounts,Rt=Z._multiDrawCount,Sn=Be?U.get(Be).bytesPerElement:1,zi=Ve.get(oe).currentProgram.getUniforms();for(let gn=0;gn<Rt;gn++)zi.setValue(F,"_gl_DrawID",gn),gt.render(Ye[gn]/Sn,Wt[gn])}else if(Z.isInstancedMesh)gt.renderInstances(mt,Vt,Z.count);else if(re.isInstancedBufferGeometry){const Ye=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Wt=Math.min(re.instanceCount,Ye);gt.renderInstances(mt,Vt,Wt)}else gt.render(mt,Vt)};function Pt(R,q,re){R.transparent===!0&&R.side===sa&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,Xn(R,q,re),R.side=ja,R.needsUpdate=!0,Xn(R,q,re),R.side=sa):Xn(R,q,re)}this.compile=function(R,q,re=null){re===null&&(re=R),_=Le.get(re),_.init(q),N.push(_),re.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==re&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const oe=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Se=Z.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const qe=Se[Pe];Pt(qe,re,Z),oe.add(qe)}else Pt(Se,re,Z),oe.add(Se)}),_=N.pop(),oe},this.compileAsync=function(R,q,re=null){const oe=this.compile(R,q,re);return new Promise(Z=>{function Se(){if(oe.forEach(function(Pe){Ve.get(Pe).currentProgram.isReady()&&oe.delete(Pe)}),oe.size===0){Z(R);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let At=null;function wn(R){At&&At(R)}function ti(){Ti.stop()}function Is(){Ti.start()}const Ti=new Z0;Ti.setAnimationLoop(wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(R){At=R,Ae.setAnimationLoop(R),R===null?Ti.stop():Ti.start()},Ae.addEventListener("sessionstart",ti),Ae.addEventListener("sessionend",Is),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(q),q=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,j),_=Le.get(R,N.length),_.init(q),N.push(_),fe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ce.setFromProjectionMatrix(fe,Ni,q.reversedDepth),ae=this.localClippingEnabled,Ne=Re.init(this.clippingPlanes,ae),M=ee.get(R,L.length),M.init(),L.push(M),Ae.enabled===!0&&Ae.isPresenting===!0){const Se=w.xr.getDepthSensingMesh();Se!==null&&Dr(Se,q,-1/0,w.sortObjects)}Dr(R,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ye,be),ft=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ft&&Xe.addToRenderList(M,R),this.info.render.frame++,Ne===!0&&Re.beginShadows();const re=_.state.shadowsArray;He.render(re,R,q),Ne===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset();const oe=M.opaque,Z=M.transmissive;if(_.setupLights(),q.isArrayCamera){const Se=q.cameras;if(Z.length>0)for(let Pe=0,qe=Se.length;Pe<qe;Pe++){const Be=Se[Pe];Lr(oe,Z,R,Be)}ft&&Xe.render(R);for(let Pe=0,qe=Se.length;Pe<qe;Pe++){const Be=Se[Pe];Ur(M,R,Be,Be.viewport)}}else Z.length>0&&Lr(oe,Z,R,q),ft&&Xe.render(R),Ur(M,R,q);j!==null&&z===0&&(rt.updateMultisampleRenderTarget(j),rt.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(w,R,q),Oe.resetDefaultState(),D=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],Ne===!0&&Re.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Dr(R,q,re,oe){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ce.intersectsSprite(R)){oe&&Ie.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const Pe=I.update(R),qe=R.material;qe.visible&&M.push(R,Pe,qe,re,Ie.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ce.intersectsObject(R))){const Pe=I.update(R),qe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ie.copy(R.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ie.copy(Pe.boundingSphere.center)),Ie.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(qe)){const Be=Pe.groups;for(let Je=0,it=Be.length;Je<it;Je++){const $e=Be[Je],mt=qe[$e.materialIndex];mt&&mt.visible&&M.push(R,Pe,mt,re,Ie.z,$e)}}else qe.visible&&M.push(R,Pe,qe,re,Ie.z,null)}}const Se=R.children;for(let Pe=0,qe=Se.length;Pe<qe;Pe++)Dr(Se[Pe],q,re,oe)}function Ur(R,q,re,oe){const Z=R.opaque,Se=R.transmissive,Pe=R.transparent;_.setupLightsView(re),Ne===!0&&Re.setGlobalState(w.clippingPlanes,re),oe&&Ze.viewport(V.copy(oe)),Z.length>0&&Ja(Z,q,re),Se.length>0&&Ja(Se,q,re),Pe.length>0&&Ja(Pe,q,re),Ze.buffers.depth.setTest(!0),Ze.buffers.depth.setMask(!0),Ze.buffers.color.setMask(!0),Ze.setPolygonOffset(!1)}function Lr(R,q,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new Za(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?zs:fa,minFilter:Rr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Se=_.state.transmissionRenderTarget[oe.id],Pe=oe.viewport||V;Se.setSize(Pe.z*w.transmissionResolutionScale,Pe.w*w.transmissionResolutionScale);const qe=w.getRenderTarget(),Be=w.getActiveCubeFace(),Je=w.getActiveMipmapLevel();w.setRenderTarget(Se),w.getClearColor(pe),ge=w.getClearAlpha(),ge<1&&w.setClearColor(16777215,.5),w.clear(),ft&&Xe.render(re);const it=w.toneMapping;w.toneMapping=Ya;const $e=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),Ne===!0&&Re.setGlobalState(w.clippingPlanes,oe),Ja(R,re,oe),rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Nt=0,Vt=q.length;Nt<Vt;Nt++){const Ot=q[Nt],gt=Ot.object,Ye=Ot.geometry,Wt=Ot.material,Rt=Ot.group;if(Wt.side===sa&&gt.layers.test(oe.layers)){const Sn=Wt.side;Wt.side=Vn,Wt.needsUpdate=!0,Hs(gt,re,oe,Ye,Wt,Rt),Wt.side=Sn,Wt.needsUpdate=!0,mt=!0}}mt===!0&&(rt.updateMultisampleRenderTarget(Se),rt.updateRenderTargetMipmap(Se))}w.setRenderTarget(qe,Be,Je),w.setClearColor(pe,ge),$e!==void 0&&(oe.viewport=$e),w.toneMapping=it}function Ja(R,q,re){const oe=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Se=R.length;Z<Se;Z++){const Pe=R[Z],qe=Pe.object,Be=Pe.geometry,Je=Pe.group;let it=Pe.material;it.allowOverride===!0&&oe!==null&&(it=oe),qe.layers.test(re.layers)&&Hs(qe,q,re,Be,it,Je)}}function Hs(R,q,re,oe,Z,Se){R.onBeforeRender(w,q,re,oe,Z,Se),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,q,re,oe,R,Se),Z.transparent===!0&&Z.side===sa&&Z.forceSinglePass===!1?(Z.side=Vn,Z.needsUpdate=!0,w.renderBufferDirect(re,q,oe,Z,R,Se),Z.side=ja,Z.needsUpdate=!0,w.renderBufferDirect(re,q,oe,Z,R,Se),Z.side=sa):w.renderBufferDirect(re,q,oe,Z,R,Se),R.onAfterRender(w,q,re,oe,Z,Se)}function Xn(R,q,re){q.isScene!==!0&&(q=je);const oe=Ve.get(R),Z=_.state.lights,Se=_.state.shadowsArray,Pe=Z.state.version,qe=Q.getParameters(R,Z.state,Se,q,re),Be=Q.getProgramCacheKey(qe);let Je=oe.programs;oe.environment=R.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(R.isMeshStandardMaterial?Xt:qt).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",xe),Je=new Map,oe.programs=Je);let it=Je.get(Be);if(it!==void 0){if(oe.currentProgram===it&&oe.lightsStateVersion===Pe)return xn(R,qe),it}else qe.uniforms=Q.getUniforms(R),R.onBeforeCompile(qe,w),it=Q.acquireProgram(qe,Be),Je.set(Be,it),oe.uniforms=qe.uniforms;const $e=oe.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($e.clippingPlanes=Re.uniform),xn(R,qe),oe.needsLights=ac(R),oe.lightsStateVersion=Pe,oe.needsLights&&($e.ambientLightColor.value=Z.state.ambient,$e.lightProbe.value=Z.state.probe,$e.directionalLights.value=Z.state.directional,$e.directionalLightShadows.value=Z.state.directionalShadow,$e.spotLights.value=Z.state.spot,$e.spotLightShadows.value=Z.state.spotShadow,$e.rectAreaLights.value=Z.state.rectArea,$e.ltc_1.value=Z.state.rectAreaLTC1,$e.ltc_2.value=Z.state.rectAreaLTC2,$e.pointLights.value=Z.state.point,$e.pointLightShadows.value=Z.state.pointShadow,$e.hemisphereLights.value=Z.state.hemi,$e.directionalShadowMap.value=Z.state.directionalShadowMap,$e.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$e.spotShadowMap.value=Z.state.spotShadowMap,$e.spotLightMatrix.value=Z.state.spotLightMatrix,$e.spotLightMap.value=Z.state.spotLightMap,$e.pointShadowMap.value=Z.state.pointShadowMap,$e.pointShadowMatrix.value=Z.state.pointShadowMatrix),oe.currentProgram=it,oe.uniformsList=null,it}function rn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Wu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function xn(R,q){const re=Ve.get(R);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function ma(R,q,re,oe,Z){q.isScene!==!0&&(q=je),rt.resetTextureUnits();const Se=q.fog,Pe=oe.isMeshStandardMaterial?q.environment:null,qe=j===null?w.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ls,Be=(oe.isMeshStandardMaterial?Xt:qt).get(oe.envMap||Pe),Je=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,it=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),$e=!!re.morphAttributes.position,mt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let Vt=Ya;oe.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Vt=w.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gt=Ot!==void 0?Ot.length:0,Ye=Ve.get(oe),Wt=_.state.lights;if(Ne===!0&&(ae===!0||R!==C)){const hn=R===C&&oe.id===D;Re.setState(oe,R,hn)}let Rt=!1;oe.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Wt.state.version||Ye.outputColorSpace!==qe||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Be||oe.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Re.numPlanes||Ye.numIntersection!==Re.numIntersection)||Ye.vertexAlphas!==Je||Ye.vertexTangents!==it||Ye.morphTargets!==$e||Ye.morphNormals!==mt||Ye.morphColors!==Nt||Ye.toneMapping!==Vt||Ye.morphTargetsCount!==gt)&&(Rt=!0):(Rt=!0,Ye.__version=oe.version);let Sn=Ye.currentProgram;Rt===!0&&(Sn=Xn(oe,q,Z));let zi=!1,gn=!1,er=!1;const xt=Sn.getUniforms(),Tn=Ye.uniforms;if(Ze.useProgram(Sn.program)&&(zi=!0,gn=!0,er=!0),oe.id!==D&&(D=oe.id,gn=!0),zi||C!==R){Ze.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xt.setValue(F,"projectionMatrix",R.projectionMatrix),xt.setValue(F,"viewMatrix",R.matrixWorldInverse);const tn=xt.map.cameraPosition;tn!==void 0&&tn.setValue(F,De.setFromMatrixPosition(R.matrixWorld)),tt.logarithmicDepthBuffer&&xt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&xt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,gn=!0,er=!0)}if(Z.isSkinnedMesh){xt.setOptional(F,Z,"bindMatrix"),xt.setOptional(F,Z,"bindMatrixInverse");const hn=Z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),xt.setValue(F,"boneTexture",hn.boneTexture,rt))}Z.isBatchedMesh&&(xt.setOptional(F,Z,"batchingTexture"),xt.setValue(F,"batchingTexture",Z._matricesTexture,rt),xt.setOptional(F,Z,"batchingIdTexture"),xt.setValue(F,"batchingIdTexture",Z._indirectTexture,rt),xt.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xt.setValue(F,"batchingColorTexture",Z._colorsTexture,rt));const Dn=re.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Te.update(Z,re,Sn),(gn||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,xt.setValue(F,"receiveShadow",Z.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Tn.envMap.value=Be,Tn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),gn&&(xt.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&Gs(Tn,er),Se&&oe.fog===!0&&he.refreshFogUniforms(Tn,Se),he.refreshMaterialUniforms(Tn,oe,W,K,_.state.transmissionRenderTarget[R.id]),Wu.upload(F,rn(Ye),Tn,rt)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Wu.upload(F,rn(Ye),Tn,rt),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&xt.setValue(F,"center",Z.center),xt.setValue(F,"modelViewMatrix",Z.modelViewMatrix),xt.setValue(F,"normalMatrix",Z.normalMatrix),xt.setValue(F,"modelMatrix",Z.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const hn=oe.uniformsGroups;for(let tn=0,Nr=hn.length;tn<Nr;tn++){const Ai=hn[tn];lt.update(Ai,Sn),lt.bind(Ai,Sn)}}return Sn}function Gs(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function ac(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,q,re){const oe=Ve.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=q,Ve.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const re=Ve.get(R);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0};const rc=F.createFramebuffer();this.setRenderTarget=function(R,q=0,re=0){j=R,H=q,z=re;let oe=!0,Z=null,Se=!1,Pe=!1;if(R){const Be=Ve.get(R);if(Be.__useDefaultFramebuffer!==void 0)Ze.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1;else if(Be.__webglFramebuffer===void 0)rt.setupRenderTarget(R);else if(Be.__hasExternalTextures)rt.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(Be.__boundDepthTexture!==$e){if($e!==null&&Ve.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(R)}}const Je=R.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Pe=!0);const it=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(it[q])?Z=it[q][re]:Z=it[q],Se=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(it)?Z=it[re]:Z=it,V.copy(R.viewport),te.copy(R.scissor),de=R.scissorTest}else V.copy(O).multiplyScalar(W).floor(),te.copy(ie).multiplyScalar(W).floor(),de=Me;if(re!==0&&(Z=rc),Ze.bindFramebuffer(F.FRAMEBUFFER,Z)&&oe&&Ze.drawBuffers(R,Z),Ze.viewport(V),Ze.scissor(te),Ze.setScissorTest(de),Se){const Be=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,re)}else if(Pe){const Be=q;for(let Je=0;Je<R.textures.length;Je++){const it=Ve.get(R.textures[Je]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Je,it.__webglTexture,re,Be)}}else if(R!==null&&re!==0){const Be=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,re)}D=-1},this.readRenderTargetPixels=function(R,q,re,oe,Z,Se,Pe,qe=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be){Ze.bindFramebuffer(F.FRAMEBUFFER,Be);try{const Je=R.textures[qe],it=Je.format,$e=Je.type;if(!tt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-oe&&re>=0&&re<=R.height-Z&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+qe),F.readPixels(q,re,oe,Z,Fe.convert(it),Fe.convert($e),Se))}finally{const Je=j!==null?Ve.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(F.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,q,re,oe,Z,Se,Pe,qe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(Be=Be[Pe]),Be)if(q>=0&&q<=R.width-oe&&re>=0&&re<=R.height-Z){Ze.bindFramebuffer(F.FRAMEBUFFER,Be);const Je=R.textures[qe],it=Je.format,$e=Je.type;if(!tt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+qe),F.readPixels(q,re,oe,Z,Fe.convert(it),Fe.convert($e),0);const Nt=j!==null?Ve.get(j).__webglFramebuffer:null;Ze.bindFramebuffer(F.FRAMEBUFFER,Nt);const Vt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await JE(F,Vt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(mt),F.deleteSync(Vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,re=0){const oe=Math.pow(2,-re),Z=Math.floor(R.image.width*oe),Se=Math.floor(R.image.height*oe),Pe=q!==null?q.x:0,qe=q!==null?q.y:0;rt.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,Pe,qe,Z,Se),Ze.unbindTexture()};const il=F.createFramebuffer(),$a=F.createFramebuffer();this.copyTextureToTexture=function(R,q,re=null,oe=null,Z=0,Se=null){Se===null&&(Z!==0?(jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=Z,Z=0):Se=0);let Pe,qe,Be,Je,it,$e,mt,Nt,Vt;const Ot=R.isCompressedTexture?R.mipmaps[Se]:R.image;if(re!==null)Pe=re.max.x-re.min.x,qe=re.max.y-re.min.y,Be=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,it=re.min.y,$e=re.isBox3?re.min.z:0;else{const Dn=Math.pow(2,-Z);Pe=Math.floor(Ot.width*Dn),qe=Math.floor(Ot.height*Dn),R.isDataArrayTexture?Be=Ot.depth:R.isData3DTexture?Be=Math.floor(Ot.depth*Dn):Be=1,Je=0,it=0,$e=0}oe!==null?(mt=oe.x,Nt=oe.y,Vt=oe.z):(mt=0,Nt=0,Vt=0);const gt=Fe.convert(q.format),Ye=Fe.convert(q.type);let Wt;q.isData3DTexture?(rt.setTexture3D(q,0),Wt=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(rt.setTexture2DArray(q,0),Wt=F.TEXTURE_2D_ARRAY):(rt.setTexture2D(q,0),Wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Rt=F.getParameter(F.UNPACK_ROW_LENGTH),Sn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zi=F.getParameter(F.UNPACK_SKIP_PIXELS),gn=F.getParameter(F.UNPACK_SKIP_ROWS),er=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(F.UNPACK_SKIP_ROWS,it),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const xt=R.isDataArrayTexture||R.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Dn=Ve.get(R),hn=Ve.get(q),tn=Ve.get(Dn.__renderTarget),Nr=Ve.get(hn.__renderTarget);Ze.bindFramebuffer(F.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Ai=0;Ai<Be;Ai++)xt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,$e+Ai),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(q).__webglTexture,Se,Vt+Ai)),F.blitFramebuffer(Je,it,Pe,qe,mt,Nt,Pe,qe,F.DEPTH_BUFFER_BIT,F.NEAREST);Ze.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const Dn=Ve.get(R),hn=Ve.get(q);Ze.bindFramebuffer(F.READ_FRAMEBUFFER,il),Ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,$a);for(let tn=0;tn<Be;tn++)xt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dn.__webglTexture,Z,$e+tn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dn.__webglTexture,Z),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,Se,Vt+tn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,Se),Z!==0?F.blitFramebuffer(Je,it,Pe,qe,mt,Nt,Pe,qe,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(Wt,Se,mt,Nt,Vt+tn,Je,it,Pe,qe):F.copyTexSubImage2D(Wt,Se,mt,Nt,Je,it,Pe,qe);Ze.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ze.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Wt,Se,mt,Nt,Vt,Pe,qe,Be,gt,Ye,Ot.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(Wt,Se,mt,Nt,Vt,Pe,qe,Be,gt,Ot.data):F.texSubImage3D(Wt,Se,mt,Nt,Vt,Pe,qe,Be,gt,Ye,Ot):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,mt,Nt,Pe,qe,gt,Ye,Ot.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,mt,Nt,Ot.width,Ot.height,gt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,Se,mt,Nt,Pe,qe,gt,Ye,Ot);F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Sn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zi),F.pixelStorei(F.UNPACK_SKIP_ROWS,gn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,er),Se===0&&q.generateMipmaps&&F.generateMipmap(Wt),Ze.unbindTexture()},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&rt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Ze.unbindTexture()},this.resetState=function(){H=0,z=0,j=null,Ze.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const _2=["#5227FF","#FF9FFC","#B19EEF"];function x2({mouseForce:s=20,cursorSize:t=100,isViscous:i=!1,viscous:r=30,iterationsViscous:l=32,iterationsPoisson:u=32,dt:h=.014,BFECC:d=!0,resolution:m=.5,isBounce:p=!1,colors:g=_2,style:v={},className:y="",autoDemo:E=!0,autoSpeed:b=.5,autoIntensity:A=2.2,takeoverDuration:M=.25,autoResumeDelay:_=1e3,autoRampDuration:L=.6}){const N=ce.useRef(null),w=ce.useRef(null),G=ce.useRef(null),H=ce.useRef(null),z=ce.useRef(null),j=ce.useRef(!0),D=ce.useRef(null);return ce.useEffect(()=>{if(!N.current)return;function C(U){let x;Array.isArray(U)&&U.length>0?x=U.length===1?[U[0],U[0]]:U:x=["#ffffff","#ffffff"];const I=x.length,Q=new Uint8Array(I*4);for(let ee=0;ee<I;ee++){const Le=new Lt(x[ee]);Q[ee*4+0]=Math.round(Le.r*255),Q[ee*4+1]=Math.round(Le.g*255),Q[ee*4+2]=Math.round(Le.b*255),Q[ee*4+3]=255}const he=new Eb(Q,I,1,hi);return he.magFilter=Gn,he.minFilter=Gn,he.wrapS=Mi,he.wrapT=Mi,he.generateMipmaps=!1,he.needsUpdate=!0,he}const V=C(g),te=new en(0,0,0,0);class de{width=0;height=0;aspect=1;pixelRatio=1;isMobile=!1;breakpoint=768;fboWidth=null;fboHeight=null;time=0;delta=0;container=null;renderer=null;clock=null;init(x){this.container=x,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new v2({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Lt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const I=this.renderer.domElement;I.style.width="100%",I.style.height="100%",I.style.display="block",this.clock=new Ob,this.clock.start()}resize(){if(!this.container)return;const x=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(x.width)),this.height=Math.max(1,Math.floor(x.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const pe=new de;class ge{mouseMoved=!1;coords=new ut;coords_old=new ut;diff=new ut;timer=null;container=null;isHoverInside=!1;hasUserControl=!1;isAutoActive=!1;autoIntensity=2;takeoverActive=!1;takeoverStartTime=0;takeoverDuration=.25;takeoverFrom=new ut;takeoverTo=new ut;onInteract=null;_onMouseMove=this.onDocumentMouseMove.bind(this);_onTouchStart=this.onDocumentTouchStart.bind(this);_onTouchMove=this.onDocumentTouchMove.bind(this);_onMouseEnter=this.onMouseEnter.bind(this);_onMouseLeave=this.onMouseLeave.bind(this);_onTouchEnd=this.onTouchEnd.bind(this);init(x){this.container=x,x.addEventListener("mousemove",this._onMouseMove),x.addEventListener("touchstart",this._onTouchStart,{passive:!0}),x.addEventListener("touchmove",this._onTouchMove,{passive:!0}),x.addEventListener("mouseenter",this._onMouseEnter),x.addEventListener("mouseleave",this._onMouseLeave),x.addEventListener("touchend",this._onTouchEnd)}dispose(){const x=this.container;x&&(x.removeEventListener("mousemove",this._onMouseMove),x.removeEventListener("touchstart",this._onTouchStart),x.removeEventListener("touchmove",this._onTouchMove),x.removeEventListener("mouseenter",this._onMouseEnter),x.removeEventListener("mouseleave",this._onMouseLeave),x.removeEventListener("touchend",this._onTouchEnd))}setCoords(x,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Q=this.container.getBoundingClientRect(),he=(x-Q.left)/Q.width,ee=(I-Q.top)/Q.height;this.coords.set(he*2-1,-(ee*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(x,I){this.coords.set(x,I),this.mouseMoved=!0}onDocumentMouseMove(x){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect(),Q=(x.clientX-I.left)/I.width,he=(x.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(he*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(x.clientX,x.clientY),this.hasUserControl=!0}onDocumentTouchStart(x){if(x.touches.length===1){const I=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY),this.hasUserControl=!0}}onDocumentTouchMove(x){if(x.touches.length===1){const I=x.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const x=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(x>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=x*x*(3-2*x);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const P=new ge;class K{mouse;manager;enabled;speed;resumeDelay;rampDurationMs;active=!1;current=new ut(0,0);target=new ut;lastTime=performance.now();activationTime=0;margin=.2;_tmpDir=new ut;constructor(x,I,Q){this.mouse=x,this.manager=I,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const x=Math.random;this.target.set((x()*2-1)*(1-this.margin),(x()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const x=performance.now();if(x-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=x,this.activationTime=x),!this.active)return;this.mouse.isAutoActive=!0;let Q=(x-this.lastTime)/1e3;this.lastTime=x,Q>.2&&(Q=.016);const he=this._tmpDir.subVectors(this.target,this.current),ee=he.length();if(ee<.01){this.pickNewTarget();return}he.normalize();let Le=1;if(this.rampDurationMs>0){const Xe=Math.min(1,(x-this.activationTime)/this.rampDurationMs);Le=Xe*Xe*(3-2*Xe)}const Re=this.speed*Q*Le,He=Math.min(Re,ee);this.current.addScaledVector(he,He),this.mouse.setNormalized(this.current.x,this.current.y)}}const W=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,ye=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,be=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,O=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,ie=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,Me=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,Ce=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ne=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,ae=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,fe=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class De{props;uniforms;scene=null;camera=null;material=null;geometry=null;plane=null;constructor(x){this.props=x||{},this.uniforms=this.props.material?.uniforms}init(...x){this.scene=new C_,this.camera=new Ku,this.uniforms&&(this.material=new Pu(this.props.material),this.geometry=new Cr(2,2),this.plane=new di(this.geometry,this.material),this.scene.add(this.plane))}update(...x){!pe.renderer||!this.scene||!this.camera||(pe.renderer.setRenderTarget(this.props.output||null),pe.renderer.render(this.scene,this.camera),pe.renderer.setRenderTarget(null))}}class Ie extends De{line;constructor(x){super({material:{vertexShader:W,fragmentShader:O,uniforms:{boundarySpace:{value:x.cellScale},px:{value:x.cellScale},fboSize:{value:x.fboSize},velocity:{value:x.src.texture},dt:{value:x.dt},isBFECC:{value:!0}}},output:x.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const x=new pa,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);x.setAttribute("position",new Ei(I,3));const Q=new Pu({vertexShader:ye,fragmentShader:O,uniforms:this.uniforms});this.line=new wb(x,Q),this.scene.add(this.line)}update(...x){const{dt:I,isBounce:Q,BFECC:he}=x[0]||{};this.uniforms&&(typeof I=="number"&&(this.uniforms.dt.value=I),typeof Q=="boolean"&&(this.line.visible=Q),typeof he=="boolean"&&(this.uniforms.isBFECC.value=he),super.update())}}class je extends De{mouse;constructor(x){super({output:x.dst}),this.init(x)}init(x){super.init();const I=new Cr(1,1),Q=new Pu({vertexShader:be,fragmentShader:Ce,blending:td,depthWrite:!1,uniforms:{px:{value:x.cellScale},force:{value:new ut(0,0)},center:{value:new ut(0,0)},scale:{value:new ut(x.cursor_size,x.cursor_size)}}});this.mouse=new di(I,Q),this.scene.add(this.mouse)}update(...x){const I=x[0]||{},Q=P.diff.x/2*(I.mouse_force||0),he=P.diff.y/2*(I.mouse_force||0),ee=I.cellScale||{x:1,y:1},Le=I.cursor_size||0,Re=Le*ee.x,He=Le*ee.y,Xe=Math.min(Math.max(P.coords.x,-1+Re+ee.x*2),1-Re-ee.x*2),Te=Math.min(Math.max(P.coords.y,-1+He+ee.y*2),1-He-ee.y*2),we=this.mouse.material.uniforms;we.force.value.set(Q,he),we.center.value.set(Xe,Te),we.scale.value.set(Le,Le),super.update()}}class ft extends De{constructor(x){super({material:{vertexShader:W,fragmentShader:fe,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},velocity_new:{value:x.dst_.texture},v:{value:x.viscous},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update(...x){const{viscous:I,iterations:Q,dt:he}=x[0]||{};if(!this.uniforms)return;let ee,Le;typeof I=="number"&&(this.uniforms.v.value=I);const Re=Q??0;for(let He=0;He<Re;He++)He%2===0?(ee=this.props.output0,Le=this.props.output1):(ee=this.props.output1,Le=this.props.output0),this.uniforms.velocity_new.value=ee.texture,this.props.output=Le,typeof he=="number"&&(this.uniforms.dt.value=he),super.update();return Le}}class Qt extends De{constructor(x){super({material:{vertexShader:W,fragmentShader:Me,uniforms:{boundarySpace:{value:x.boundarySpace},velocity:{value:x.src.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update(...x){const{vel:I}=x[0]||{};this.uniforms&&I&&(this.uniforms.velocity.value=I.texture),super.update()}}class F extends De{constructor(x){super({material:{vertexShader:W,fragmentShader:Ne,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.dst_.texture},divergence:{value:x.src.texture},px:{value:x.cellScale}}},output:x.dst,output0:x.dst_,output1:x.dst}),this.init()}update(...x){const{iterations:I}=x[0]||{};let Q,he;const ee=I??0;for(let Le=0;Le<ee;Le++)Le%2===0?(Q=this.props.output0,he=this.props.output1):(Q=this.props.output1,he=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=Q.texture),this.props.output=he,super.update();return he}}class Tt extends De{constructor(x){super({material:{vertexShader:W,fragmentShader:ae,uniforms:{boundarySpace:{value:x.boundarySpace},pressure:{value:x.src_p.texture},velocity:{value:x.src_v.texture},px:{value:x.cellScale},dt:{value:x.dt}}},output:x.dst}),this.init()}update(...x){const{vel:I,pressure:Q}=x[0]||{};this.uniforms&&I&&Q&&(this.uniforms.velocity.value=I.texture,this.uniforms.pressure.value=Q.texture),super.update()}}class at{options;fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null};fboSize=new ut;cellScale=new ut;boundarySpace=new ut;advection;externalForce;viscous;divergence;poisson;pressure;constructor(x){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...x},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?zs:Li}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Gn,magFilter:Gn,wrapS:Mi,wrapT:Mi};for(const Q in this.fbos)this.fbos[Q]=new Za(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new Ie({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new je({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new ft({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Qt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new F({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Tt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const x=Math.max(1,Math.round(this.options.resolution*pe.width)),I=Math.max(1,Math.round(this.options.resolution*pe.height));this.cellScale.set(1/x,1/I),this.fboSize.set(x,I)}resize(){this.calcSize();for(const x in this.fbos)this.fbos[x].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let x=this.fbos.vel_1;this.options.isViscous&&(x=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:x});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:x,pressure:I})}}class tt{simulation;scene;camera;output;constructor(){this.simulation=new at,this.scene=new C_,this.camera=new Ku,this.output=new di(new Cr(2,2),new Pu({vertexShader:W,fragmentShader:ie,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ut},palette:{value:V},bgColor:{value:te}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){pe.renderer&&(pe.renderer.setRenderTarget(null),pe.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class Ze{props;output;autoDriver;lastUserInteraction=performance.now();running=!1;_loop=this.loop.bind(this);_resize=this.resize.bind(this);_onVisibility;constructor(x){this.props=x,pe.init(x.$wrapper),P.init(x.$wrapper),P.autoIntensity=x.autoIntensity,P.takeoverDuration=x.takeoverDuration,P.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new K(P,this,{enabled:x.autoDemo,speed:x.autoSpeed,resumeDelay:x.autoResumeDelay,rampDuration:x.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():j.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){pe.renderer&&(this.props.$wrapper.prepend(pe.renderer.domElement),this.output=new tt)}resize(){pe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),P.update(),pe.update(),this.output.update()}loop(){this.running&&(this.render(),H.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,H.current&&(cancelAnimationFrame(H.current),H.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),P.dispose(),pe.renderer){const x=pe.renderer.domElement;x&&x.parentNode&&x.parentNode.removeChild(x),pe.renderer.dispose()}}catch{}}}const Mt=N.current;Mt.style.position=Mt.style.position||"relative",Mt.style.overflow=Mt.style.overflow||"hidden";const Ve=new Ze({$wrapper:Mt,autoDemo:E,autoSpeed:b,autoIntensity:A,takeoverDuration:M,autoResumeDelay:_,autoRampDuration:L});w.current=Ve,(()=>{if(!w.current)return;const U=w.current.output?.simulation;if(!U)return;const x=U.options.resolution;Object.assign(U.options,{mouse_force:s,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),m!==x&&U.resize()})(),Ve.start();const qt=new IntersectionObserver(U=>{const x=U[0],I=x.isIntersecting&&x.intersectionRatio>0;j.current=I,w.current&&(I&&!document.hidden?w.current.start():w.current.pause())},{threshold:[0,.01,.1]});qt.observe(Mt),z.current=qt;const Xt=new ResizeObserver(()=>{w.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{w.current&&w.current.resize()}))});return Xt.observe(Mt),G.current=Xt,()=>{if(H.current&&cancelAnimationFrame(H.current),G.current)try{G.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}w.current&&w.current.dispose(),w.current=null}},[d,t,h,p,i,u,l,s,m,r,g,E,b,A,M,_,L]),ce.useEffect(()=>{const C=w.current;if(!C)return;const V=C.output?.simulation;if(!V)return;const te=V.options.resolution;Object.assign(V.options,{mouse_force:s,cursor_size:t,isViscous:i,viscous:r,iterations_viscous:l,iterations_poisson:u,dt:h,BFECC:d,resolution:m,isBounce:p}),C.autoDriver&&(C.autoDriver.enabled=E,C.autoDriver.speed=b,C.autoDriver.resumeDelay=_,C.autoDriver.rampDurationMs=L*1e3,C.autoDriver.mouse&&(C.autoDriver.mouse.autoIntensity=A,C.autoDriver.mouse.takeoverDuration=M)),m!==te&&V.resize()},[s,t,i,r,l,u,h,d,m,p,E,b,A,M,_,L]),le.jsx("div",{ref:N,className:`liquid-ether-container ${y||""}`,style:v})}const Io=({name:s,description:t,imageSrc:i,onClick:r})=>le.jsxs("button",{type:"button",onClick:r,"aria-label":`Select ${s}`,className:`
        group relative overflow-hidden rounded-2xl
        bg-background/40 ring-1 ring-border/60
        shadow-[0_10px_30px_var(--shadow-md,rgba(0,0,0,0.35))]
        transition-transform duration-200 hover:-translate-y-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-ring
        text-left
      `,style:{width:"270px",height:"40vh"},children:[le.jsx("div",{className:"aspect-[4/5] w-full h-full overflow-hidden",children:le.jsx("img",{src:i,alt:s,className:"h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"})}),le.jsx("div",{className:"absolute inset-x-0 bottom-0 p-3 z-10",children:le.jsx("div",{className:`
            inline-block rounded-lg bg-black/40 px-2.5 py-1.5
            text-white text-sm font-semibold ring-1 ring-white/20 backdrop-blur
          `,children:s})}),le.jsx("div",{className:`
          absolute inset-x-0 bottom-0 z-0 h-full
          translate-y-full opacity-0
          transition-all duration-300 ease-out
          group-hover:translate-y-0 group-hover:opacity-100
          bg-gradient-to-t from-black/80 via-black/50 to-transparent
          backdrop-blur-sm
          px-3 pb-3 pt-16
        `,children:le.jsx("p",{className:"text-[12px] leading-snug text-white/90",children:t})})]}),S2=({children:s,className:t=""})=>le.jsxs("div",{className:`relative max-w-7xl mx-auto mb-6 flex w-full items-end ${t}`,children:[le.jsx("h2",{className:`
          relative text-center w-full sm:text-start sm:w-auto
          text-4xl sm:text-5xl md:text-6xl
          text-white tracking-tight
        `,children:s}),le.jsx("div",{className:`
          pointer-events-none absolute -bottom-2 h-[3px] w-[220px]
          rounded-full text-white
          opacity-70 blur-[1px]
        `}),le.jsx(M0,{size:50,className:"ml-3 w-20 hidden text-white sm:inline-block"})]}),Ho="/assets/9006.jpg_wh860-ccOkGVsZ.jpg",y2="/assets/give%20a%20good%20anime%20background%20which%20is%20subjected%20to%20no%20copyright-BKyAViZM.jpg",M2="/assets/Milo_bg-VRfpL7LM.jpg",E2="/assets/Sophie_bg-CH_r8qJk.jpg",b2="/assets/Kai_bg-GyWUdVQO.jpg",T2="/assets/Luna_bg-CkybW_DK.jpg";function Go(s,t){const i=new URLSearchParams;t&&i.set("image",t);const r=i.toString();return`/chat/${encodeURIComponent(s)}${r?`?${r}`:""}`}const A2=()=>le.jsxs("section",{id:"home",className:"relative isolate",children:[le.jsxs("div",{className:"pointer-events-none absolute inset-0 -z-10",children:[le.jsx("div",{className:"absolute inset-0"}),le.jsx("div",{className:"absolute inset-0 opacity-80 mix-blend-screen"})]}),le.jsxs("div",{className:"mx-auto max-w-7xl px-6 py-12 text-center",children:[le.jsxs("h1",{className:"font-bold tracking-tight text-6xl text-white sm:text-7xl md:text-7xl lg:text-8xl",children:["Welcome to the world",le.jsx("br",{className:"hidden sm:block"}),le.jsx("span",{className:"block mt-3 bg-clip-text text-white drop-shadow",children:"of Euphoria"})]}),le.jsxs("h4",{className:"text-white text-3xl px-6 py-12 gap-3 opacity-70 flex flex-col ",children:[le.jsx("span",{children:"Choose your very own personal character"}),le.jsx("span",{children:"which will help you get over your problems."})]})]})]}),R2=()=>{const s=Yd();return le.jsxs("div",{className:"min-h-screen text-foreground",style:{backgroundColor:"#040026"},children:[le.jsx("div",{className:"pointer-events-none fixed inset-0 ",children:le.jsx(x2,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:1,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:100,autoRampDuration:.6})}),le.jsx(sE,{}),le.jsxs("main",{children:[le.jsx(A2,{}),le.jsx(S2,{children:"Choose your Character"}),le.jsxs("div",{className:"flex max-w-7xl flex-wrap mx-auto  justify-center",style:{rowGap:"50px",columnGap:"100px",marginTop:"70px"},children:[le.jsx(Io,{name:"Helena",description:"She is good",imageSrc:Ho,onClick:()=>{s(Go("Helena",y2))}}),le.jsx(Io,{name:"Milo",description:"He is good ",imageSrc:Ho,onClick:()=>{s(Go("Milo",M2))}}),le.jsx(Io,{name:"Kai",description:"She is good ",imageSrc:Ho,onClick:()=>{s(Go("Kai",b2))}}),le.jsx(Io,{name:"Sophie",description:"She is good ",imageSrc:Ho,onClick:()=>{s(Go("Sophie",E2))}}),le.jsx(Io,{name:"Luna",description:"She is good ",imageSrc:Ho,onClick:()=>{s(Go("Luna",T2))}})]})]}),le.jsx(oE,{})]})};function C2(){const{name:s=""}=Xy(),[t]=OM(),i=t.get("bg")??t.get("image")??void 0,[r,l]=ce.useState(""),[u,h]=ce.useState(""),[d,m]=ce.useState(""),[p,g]=ce.useState(!1),v=ce.useRef(null),y=ce.useRef(null),E=ce.useRef(null);ce.useEffect(()=>{const L=window.SpeechRecognition||window.webkitSpeechRecognition;if(L){const N=new L;N.lang="en-US",N.interimResults=!1,N.maxAlternatives=1,N.onresult=w=>{const G=w?.results?.[0]?.[0]?.transcript??"";G&&(l(G),setTimeout(()=>A(G),0))},v.current=N}},[]),ce.useEffect(()=>{E.current?.scrollIntoView({behavior:"smooth",block:"end"})},[u,d]);function b(){if(!v.current){alert("Voice input not supported in this browser.");return}try{v.current.start()}catch{}}async function A(L){if(p)return;const N=(L??r).trim();if(N){y.current?.abort(),y.current=new AbortController,h(N),l(""),m("…"),g(!0);try{const w=await fetch(`/adk/agents/${s}/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:N}),signal:y.current.signal}),H=(w.headers.get("content-type")||"").includes("application/json");if(!w.ok){const j=H?await w.json():void 0,D=j?.error??(H?JSON.stringify(j):await w.text());throw new Error(`/${s}/ask ${w.status}: ${D}`)}const z=H?await w.json():{reply:await w.text()};m(String(z.reply??""))}catch(w){w?.name!=="AbortError"&&m(`⚠️ ${w?.message??String(w)}`)}finally{g(!1)}}}function M(L){L.preventDefault(),A()}function _(){h(""),m(""),l("")}return le.jsxs("div",{className:"min-h-screen w-full relative",style:i?{backgroundImage:`url(${i})`,backgroundSize:"cover",backgroundPosition:"center"}:void 0,children:[le.jsx("div",{className:"absolute inset-0 bg-black/30"}),le.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-10",children:le.jsxs("div",{className:"px-5 py-2 rounded-2xl border border-white/20 bg-black/45 backdrop-blur-xl text-white shadow-lg",children:[le.jsx("span",{className:"opacity-80",children:"Chatting with"})," ",le.jsxs("span",{className:"font-semibold",children:["“",s||"AI","”"]})]})}),le.jsx("main",{className:"relative z-0 flex justify-center ",children:le.jsx("div",{className:"w-full max-w-3xl px-4 sm:px-6",children:le.jsxs("div",{className:`
              
     mt-20 h-[calc(100vh-168px)]
    overflow-y-auto pr-1 pb-4
    no-scrollbar
  
            `,children:[u&&le.jsx("div",{className:"flex justify-end mb-3",children:le.jsxs("div",{className:"max-w-[50%] rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl shadow-xl text-white px-4 py-3",children:[le.jsx("div",{className:"text-[11px] opacity-70 mb-1 text-right",children:"You"}),le.jsx("p",{className:"whitespace-pre-wrap leading-relaxed text-right",children:u})]})}),d&&le.jsx("div",{className:"flex justify-start",children:le.jsxs("div",{className:"max-w-[50%] rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl text-white px-6 py-4 bg-gradient-to-br from-white/20 via-white/10 to-transparent",children:[le.jsxs("div",{className:"text-xs opacity-70 mb-2",children:["AI — ",s||"Assistant"]}),le.jsx("p",{className:"whitespace-pre-wrap leading-relaxed",children:d})]})}),le.jsx("div",{ref:E})]})})}),le.jsx("form",{onSubmit:M,className:"fixed bottom-3 left-0 right-0 z-10 px-4 sm:px-6",children:le.jsx("div",{className:"mx-auto max-w-3xl rounded-2xl border border-white/20 bg-black/55 backdrop-blur-xl shadow-2xl px-3 py-2",children:le.jsxs("div",{className:"flex items-center gap-2",children:[le.jsx("button",{type:"button",onClick:b,className:"shrink-0 rounded-xl px-3 py-2 border border-white/25 text-white hover:bg-white/10 transition",title:"Voice input","aria-label":"Voice input",children:le.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-90",children:[le.jsx("path",{d:"M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"}),le.jsx("path",{d:"M19 11a7 7 0 0 1-14 0M12 18v4"})]})}),le.jsx("input",{type:"text",value:r,onChange:L=>l(L.target.value),placeholder:`Message ${s||"AI"}…`,className:"flex-1 bg-transparent text-white placeholder-white/60 outline-none text-base px-2 py-2",disabled:p}),le.jsx("button",{type:"submit",disabled:p||!r.trim(),className:"shrink-0 rounded-xl px-4 py-2 border border-white/25 text-white hover:bg-white/10 transition disabled:opacity-50","aria-label":"Send",title:"Send",children:le.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",className:"opacity-90",children:le.jsx("path",{d:"M2 21l21-9L2 3v7l15 2-15 2v7z"})})}),(u||d)&&le.jsx("button",{type:"button",onClick:_,className:"ml-1 shrink-0 rounded-xl px-3 py-2 border border-white/20 text-white/90 hover:bg-white/10 transition",title:"New turn",children:"New"})]})})})]})}function w2(){return le.jsxs(rM,{children:[le.jsx(Jh,{path:"/",element:le.jsx(R2,{})}),le.jsx(Jh,{path:"/chat/:name",element:le.jsx(C2,{})})]})}py.createRoot(document.getElementById("root")).render(le.jsx(ce.StrictMode,{children:le.jsx(wM,{children:le.jsx(w2,{})})}));
