function n(n,r,t){return t.a=n,t.f=r,t}function r(r){return n(2,r,(function(n){return function(t){return r(n,t)}}))}function t(r){return n(3,r,(function(n){return function(t){return function(e){return r(n,t,e)}}}))}function e(r){return n(4,r,(function(n){return function(t){return function(e){return function(u){return r(n,t,e,u)}}}}))}function u(r){return n(5,r,(function(n){return function(t){return function(e){return function(u){return function(i){return r(n,t,e,u,i)}}}}}))}function i(r){return n(6,r,(function(n){return function(t){return function(e){return function(u){return function(i){return function(o){return r(n,t,e,u,i,o)}}}}}}))}function o(r){return n(7,r,(function(n){return function(t){return function(e){return function(u){return function(i){return function(o){return function(f){return r(n,t,e,u,i,o,f)}}}}}}}))}function f(r){return n(8,r,(function(n){return function(t){return function(e){return function(u){return function(i){return function(o){return function(f){return function(a){return r(n,t,e,u,i,o,f,a)}}}}}}}}))}function a(r){return n(9,r,(function(n){return function(t){return function(e){return function(u){return function(i){return function(o){return function(f){return function(a){return function(c){return r(n,t,e,u,i,o,f,a,c)}}}}}}}}}))}function c(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function v(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function s(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function l(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function b(n,r,t,e,u,i,o){return 6===n.a?n.f(r,t,e,u,i,o):n(r)(t)(e)(u)(i)(o)}function d(n,r){for(var t,e=[],u=h(n,r,0,e);u&&(t=e.pop());u=h(t.a,t.b,0,e));return u}function h(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&L(5),!1;if(t>100)return e.push($(n,r)),!0;for(var u in n.$<0&&(n=gr(n),r=gr(r)),n)if(!h(n[u],r[u],t+1,e))return!1;return!0}function g(n,r,t){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(t=g(n.a,r.a))||(t=g(n.b,r.b))?t:g(n.c,r.c);for(;n.b&&r.b&&!(t=g(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}r(d),r((function(n,r){return!d(n,r)})),r((function(n,r){return g(n,r)<0})),r((function(n,r){return g(n,r)<1})),r((function(n,r){return g(n,r)>0})),r((function(n,r){return g(n,r)>=0})),r((function(n,r){var t=g(n,r);return t<0?br:t?lr:sr}));function $(n,r){return{a:n,b:r}}function p(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}function m(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=w(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=w(n.a,r);return t}r(m);var y={$:0};function w(n,r){return{$:1,a:n,b:r}}var A=r(w);function j(n){for(var r=y,t=n.length;t--;)r=w(n[t],r);return r}function k(n){for(var r=[];n.b;n=n.b)r.push(n.a);return r}var _=t((function(n,r,t){for(var e=[];r.b&&t.b;r=r.b,t=t.b)e.push(c(n,r.a,t.a));return j(e)}));e((function(n,r,t,e){for(var u=[];r.b&&t.b&&e.b;r=r.b,t=t.b,e=e.b)u.push(v(n,r.a,t.a,e.a));return j(u)})),u((function(n,r,t,e,u){for(var i=[];r.b&&t.b&&e.b&&u.b;r=r.b,t=t.b,e=e.b,u=u.b)i.push(s(n,r.a,t.a,e.a,u.a));return j(i)})),i((function(n,r,t,e,u,i){for(var o=[];r.b&&t.b&&e.b&&u.b&&i.b;r=r.b,t=t.b,e=e.b,u=u.b,i=i.b)o.push(l(n,r.a,t.a,e.a,u.a,i.a));return j(o)})),r((function(n,r){return j(k(r).sort((function(r,t){return g(n(r),n(t))})))})),r((function(n,r){return j(k(r).sort((function(r,t){var e=c(n,r,t);return e===sr?0:e===br?-1:1})))}));var N=t((function(n,r,t){for(var e=new Array(n),u=0;u<n;u++)e[u]=t(r+u);return e})),C=r((function(n,r){for(var t=new Array(n),e=0;e<n&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,$(t,r)}));r((function(n,r){return r[n]})),t((function(n,r,t){for(var e=t.length,u=new Array(e),i=0;i<e;i++)u[i]=t[i];return u[n]=r,u})),r((function(n,r){for(var t=r.length,e=new Array(t+1),u=0;u<t;u++)e[u]=r[u];return e[t]=n,e})),t((function(n,r,t){for(var e=t.length,u=0;u<e;u++)r=c(n,t[u],r);return r}));var E=t((function(n,r,t){for(var e=t.length-1;e>=0;e--)r=c(n,t[e],r);return r}));function L(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}r((function(n,r){for(var t=r.length,e=new Array(t),u=0;u<t;u++)e[u]=n(r[u]);return e})),t((function(n,r,t){for(var e=t.length,u=new Array(e),i=0;i<e;i++)u[i]=c(n,r+i,t[i]);return u})),t((function(n,r,t){return t.slice(n,r)})),t((function(n,r,t){var e=r.length,u=n-e;u>t.length&&(u=t.length);for(var i=new Array(e+u),o=0;o<e;o++)i[o]=r[o];for(o=0;o<u;o++)i[o+e]=t[o];return i})),r((function(n,r){return r})),r((function(n,r){return console.log(n+": <internals>"),r})),r((function(n,r){return n+r})),r((function(n,r){return n-r})),r((function(n,r){return n*r})),r((function(n,r){return n/r})),r((function(n,r){return n/r|0})),r(Math.pow),r((function(n,r){return r%n})),r((function(n,r){var t=r%n;return 0===n?L(11):t>0&&n<0||t<0&&n>0?t+n:t})),r(Math.atan2);var O=Math.ceil,S=Math.floor,T=Math.log;r((function(n,r){return n&&r})),r((function(n,r){return n||r})),r((function(n,r){return n!==r})),r((function(n,r){return n+r})),r((function(n,r){return n+r})),r((function(n,r){for(var t=r.length,e=new Array(t),u=0;u<t;){var i=r.charCodeAt(u);55296<=i&&i<=56319?(e[u]=n(r[u]+r[u+1]),u+=2):(e[u]=n(r[u]),u++)}return e.join("")})),r((function(n,r){for(var t=[],e=r.length,u=0;u<e;){var i=r[u],o=r.charCodeAt(u);u++,55296<=o&&o<=56319&&(i+=r[u],u++),n(i)&&t.push(i)}return t.join("")})),t((function(n,r,t){for(var e=t.length,u=0;u<e;){var i=t[u],o=t.charCodeAt(u);u++,55296<=o&&o<=56319&&(i+=t[u],u++),r=c(n,i,r)}return r})),t((function(n,r,t){for(var e=t.length;e--;){var u=t[e],i=t.charCodeAt(e);56320<=i&&i<=57343&&(u=t[--e]+u),r=c(n,u,r)}return r}));var q=r((function(n,r){return r.split(n)})),x=r((function(n,r){return r.join(n)})),B=t((function(n,r,t){return t.slice(n,r)}));r((function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(56320<=u&&u<=57343&&(e=r[--t]+e),n(e))return!0}return!1}));var J=r((function(n,r){for(var t=r.length;t--;){var e=r[t],u=r.charCodeAt(t);if(56320<=u&&u<=57343&&(e=r[--t]+e),!n(e))return!1}return!0})),z=r((function(n,r){return r.indexOf(n)>-1}));r((function(n,r){return 0===r.indexOf(n)})),r((function(n,r){return r.length>=n.length&&r.lastIndexOf(n)===r.length-n.length}));var D=r((function(n,r){var t=n.length;if(t<1)return y;for(var e=0,u=[];(e=r.indexOf(n,e))>-1;)u.push(e),e+=t;return j(u)}));var F={$:2,b:function(n){return"string"==typeof n?Ar(n):n instanceof String?Ar(n+""):Y("a STRING",n)}},M=r((function(n,r){return{$:6,d:n,b:r}}));function R(n,r){return{$:9,f:n,g:r}}r((function(n,r){return{$:7,e:n,b:r}})),r((function(n,r){return{$:10,b:r,h:n}}));var P=r((function(n,r){return R(n,[r])})),W=t((function(n,r,t){return R(n,[r,t])}));e((function(n,r,t,e){return R(n,[r,t,e])})),u((function(n,r,t,e,u){return R(n,[r,t,e,u])})),i((function(n,r,t,e,u,i){return R(n,[r,t,e,u,i])})),o((function(n,r,t,e,u,i,o){return R(n,[r,t,e,u,i,o])})),f((function(n,r,t,e,u,i,o,f){return R(n,[r,t,e,u,i,o,f])})),a((function(n,r,t,e,u,i,o,f,a){return R(n,[r,t,e,u,i,o,f,a])})),r((function(n,r){try{return I(n,JSON.parse(r))}catch(t){return pr(c(mr,"This is not valid JSON! "+t.message,r))}}));var H=r((function(n,r){return I(n,r)}));function I(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Ar(n.c):Y("null",r);case 3:return G(r)?Z(n.b,r,j):Y("a LIST",r);case 4:return G(r)?Z(n.b,r,X):Y("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return Y("an OBJECT with a field named `"+t+"`",r);var e=I(n.b,r[t]);return vt(e)?e:pr(c(yr,t,e.a));case 7:var u=n.e;if(!G(r))return Y("an ARRAY",r);if(u>=r.length)return Y("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r);e=I(n.b,r[u]);return vt(e)?e:pr(c(wr,u,e.a));case 8:if("object"!=typeof r||null===r||G(r))return Y("an OBJECT",r);var i=y;for(var o in r)if(r.hasOwnProperty(o)){e=I(n.b,r[o]);if(!vt(e))return pr(c(yr,o,e.a));i=w($(o,e.a),i)}return Ar(Wr(i));case 9:for(var f=n.f,a=n.g,v=0;v<a.length;v++){e=I(a[v],r);if(!vt(e))return e;f=f(e.a)}return Ar(f);case 10:e=I(n.b,r);return vt(e)?I(n.h(e.a),r):e;case 11:for(var s=y,l=n.g;l.b;l=l.b){e=I(l.a,r);if(vt(e))return e;s=w(e.a,s)}return pr(jr(Wr(s)));case 1:return pr(c(mr,n.a,r));case 0:return Ar(n.a)}}function Z(n,r,t){for(var e=r.length,u=new Array(e),i=0;i<e;i++){var o=I(n,r[i]);if(!vt(o))return pr(c(wr,i,o.a));u[i]=o.a}return Ar(t(u))}function G(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function X(n){return c(ct,n.length,(function(r){return n[r]}))}function Y(n,r){return pr(c(mr,"Expecting "+n,r))}function K(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return K(n.b,r.b);case 6:return n.d===r.d&&K(n.b,r.b);case 7:return n.e===r.e&&K(n.b,r.b);case 9:return n.f===r.f&&Q(n.g,r.g);case 10:return n.h===r.h&&K(n.b,r.b);case 11:return Q(n.g,r.g)}}function Q(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;e<t;e++)if(!K(n[e],r[e]))return!1;return!0}var U=r((function(n,r){return JSON.stringify(r,null,n)+""}));function V(n){return n}function nn(n){return{$:0,a:n}}function rn(n){return{$:2,b:n,c:null}}t((function(n,r,t){return t[n]=r,t}));var tn=r((function(n,r){return{$:3,b:n,d:r}}));r((function(n,r){return{$:4,b:n,d:r}}));var en=0;function un(n){var r={$:0,e:en++,f:n,g:null,h:[]};return sn(r),r}function on(n){return rn((function(r){r(nn(un(n)))}))}function fn(n,r){n.h.push(r),sn(n)}var an=r((function(n,r){return rn((function(t){fn(n,r),t(nn(0))}))})),cn=!1,vn=[];function sn(n){if(vn.push(n),!cn){for(cn=!0;n=vn.shift();)ln(n);cn=!1}}function ln(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b((function(r){n.f=r,sn(n)})));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}function bn(n,r,t,e,u,i){var o=c(H,n,r?r.flags:void 0);vt(o)||L(2);var f={},a=t(o.a),v=a.a,s=i(b,v),l=function(n,r){var t;for(var e in dn){var u=dn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=hn(u,r)}return t}(f,b);function b(n,r){var t=c(e,n,v);s(v=t.a,r),wn(f,t.b,u(v))}return wn(f,a.b,u(v)),l?{ports:l}:{}}e((function(n,r,t,e){return bn(r,e,n.a4,n.bp,n.bl,(function(){return function(){}}))}));var dn={};function hn(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,o=n.f;return t.h=un(c(tn,(function n(r){return c(tn,n,{$:5,b:function(n){var f=n.a;return 0===n.$?v(u,t,f,r):i&&o?s(e,t,f.i,f.j,r):v(e,t,i?f.i:f.j,r)}})}),n.b))}var gn=r((function(n,r){return rn((function(t){n.g(r),t(nn(0))}))}));function $n(n){return{$:2,m:n}}r((function(n,r){return c(an,n.h,{$:0,a:r})})),r((function(n,r){return{$:3,n:n,o:r}}));var pn,mn=[],yn=!1;function wn(n,r,t){if(mn.push({p:n,q:r,r:t}),!yn){yn=!0;for(var e;e=mn.shift();)An(e.p,e.q,e.r);yn=!1}}function An(n,r,t){var e={};for(var u in jn(!0,r,e,null),jn(!1,t,e,null),n)fn(n[u],{$:"fx",a:e[u]||{i:y,j:y}})}function jn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,r,t,e){function u(n){for(var r=t;r;r=r.t)n=r.s(n);return n}return c(n?dn[r].e:dn[r].f,u,e)}(n,u,e,r.l);return void(t[u]=function(n,r,t){return t=t||{i:y,j:y},n?t.i=w(r,t.i):t.j=w(r,t.j),t}(n,i,t[u]));case 2:for(var o=r.m;o.b;o=o.b)jn(n,o.a,t,e);return;case 3:return void jn(n,r.o,t,{s:r.n,t:e})}}r((function(n,r){return r})),r((function(n,r){return function(t){return n(r(t))}}));var kn="undefined"!=typeof document?document:{};function _n(n,r){n.appendChild(r)}function Nn(n){return{$:0,a:n}}e((function(n,r,t,e){var u=e.node;return u.parentNode.replaceChild(zn(n,(function(){})),u),{}}));var Cn=r((function(n,t){return r((function(r,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b||0,u.push(o)}return i+=u.length,{$:1,c:t,d:Bn(r),e:u,f:n,b:i}}))}))(void 0);function En(n,r){return{$:5,l:n,m:r,k:void 0}}r((function(n,t){return r((function(r,e){for(var u=[],i=0;e.b;e=e.b){var o=e.a;i+=o.b.b||0,u.push(o)}return i+=u.length,{$:2,c:t,d:Bn(r),e:u,f:n,b:i}}))}))(void 0),r((function(n,r){return{$:4,j:n,k:r,b:1+(r.b||0)}})),r((function(n,r){return En([n,r],(function(){return n(r)}))})),t((function(n,r,t){return En([n,r,t],(function(){return c(n,r,t)}))})),e((function(n,r,t,e){return En([n,r,t,e],(function(){return v(n,r,t,e)}))})),u((function(n,r,t,e,u){return En([n,r,t,e,u],(function(){return s(n,r,t,e,u)}))})),i((function(n,r,t,e,u,i){return En([n,r,t,e,u,i],(function(){return l(n,r,t,e,u,i)}))})),o((function(n,r,t,e,u,i,o){return En([n,r,t,e,u,i,o],(function(){return b(n,r,t,e,u,i,o)}))})),f((function(n,r,t,e,u,i,o,f){return En([n,r,t,e,u,i,o,f],(function(){return function(n,r,t,e,u,i,o,f){return 7===n.a?n.f(r,t,e,u,i,o,f):n(r)(t)(e)(u)(i)(o)(f)}(n,r,t,e,u,i,o,f)}))})),a((function(n,r,t,e,u,i,o,f,a){return En([n,r,t,e,u,i,o,f,a],(function(){return function(n,r,t,e,u,i,o,f,a){return 8===n.a?n.f(r,t,e,u,i,o,f,a):n(r)(t)(e)(u)(i)(o)(f)(a)}(n,r,t,e,u,i,o,f,a)}))}));var Ln=r((function(n,r){return{$:"a0",n:n,o:r}}));r((function(n,r){return{$:"a1",n:n,o:r}}));var On=r((function(n,r){return{$:"a2",n:n,o:r}})),Sn=r((function(n,r){return{$:"a3",n:n,o:r}}));t((function(n,r,t){return{$:"a4",n:r,o:{f:n,o:t}}})),r((function(n,r){return"a0"===r.$?c(Ln,r.n,function(n,r){var t=dt(r);return{$:r.$,a:t?v(lt,t<3?qn:xn,bt(n),r.a):c(st,n,r.a)}}(n,r.o)):r}));var Tn,qn=r((function(n,r){return $(n(r.a),r.b)})),xn=r((function(n,r){return{u:n(r.u),Z:r.Z,W:r.W}}));function Bn(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var o=r[e]||(r[e]={});"a3"===e&&"class"===u?Jn(o,u,i):o[u]=i}else"className"===u?Jn(r,u,i):r[u]=i}return r}function Jn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function zn(n,r){var t=n.$;if(5===t)return zn(n.k||(n.k=n.m()),r);if(0===t)return kn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(o=zn(e,i)).elm_event_node_ref=i,o}if(3===t)return Dn(o=n.h(n.g),r,n.d),o;var o=n.f?kn.createElementNS(n.f,n.c):kn.createElement(n.c);pn&&"a"==n.c&&o.addEventListener("click",pn(o)),Dn(o,r,n.d);for(var f=n.e,a=0;a<f.length;a++)_n(o,zn(1===t?f[a]:f[a].b,r));return o}function Dn(n,r,t){for(var e in t){var u=t[e];"a1"===e?Fn(n,u):"a0"===e?Pn(n,r,u):"a3"===e?Mn(n,u):"a4"===e?Rn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function Fn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Mn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function Rn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;void 0!==i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function Pn(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],o=e[u];if(i){if(o){if(o.q.$===i.$){o.q=i;continue}n.removeEventListener(u,o)}o=Wn(r,i),n.addEventListener(u,o,Tn&&{passive:dt(i)<2}),e[u]=o}else n.removeEventListener(u,o),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Tn=!0}}))}catch(pe){}function Wn(n,r){function t(r){var e=t.q,u=I(e.a,r);if(vt(u)){for(var i,o=dt(e),f=u.a,a=o?o<3?f.a:f.u:f,c=1==o?f.b:3==o&&f.Z,v=(c&&r.stopPropagation(),(2==o?f.b:3==o&&f.W)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)a=i(a);else for(var s=i.length;s--;)a=i[s](a);v=v.p}v(a,c)}}return t.q=r,t}function Hn(n,r){return n.$==r.$&&K(n.a,r.a)}function In(n,r){var t=[];return Gn(n,r,t,0),t}function Zn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Gn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void Zn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=new Array(t),u=0;u<t;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var o=n.l,f=r.l,a=o.length,c=a===f.length;c&&a--;)c=o[a]===f[a];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Gn(n.k,r.k,v,0),void(v.length>0&&Zn(t,1,e,v));case 4:for(var s=n.j,l=r.j,b=!1,d=n.k;4===d.$;)b=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)b=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return b&&s.length!==l.length?void Zn(t,0,e,r):((b?function(n,r){for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(s,l):s===l)||Zn(t,2,e,l),void Gn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Zn(t,3,e,r.a));case 1:return void Xn(n,r,t,e,Kn);case 2:return void Xn(n,r,t,e,Qn);case 3:if(n.h!==r.h)return void Zn(t,0,e,r);var g=Yn(n.d,r.d);g&&Zn(t,4,e,g);var $=r.i(n.g,r.g);return void($&&Zn(t,5,e,$))}}}function Xn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=Yn(n.d,r.d);i&&Zn(t,4,e,i),u(n,r,t,e)}else Zn(t,0,e,r)}function Yn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],o=r[u];i===o&&"value"!==u&&"checked"!==u||"a0"===t&&Hn(i,o)||((e=e||{})[u]=o)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var f=Yn(n[u],r[u]||{},u);f&&((e=e||{})[u]=f)}for(var a in r)a in n||((e=e||{})[a]=r[a]);return e}function Kn(n,r,t,e){var u=n.e,i=r.e,o=u.length,f=i.length;o>f?Zn(t,6,e,{v:f,i:o-f}):o<f&&Zn(t,7,e,{v:o,e:i});for(var a=o<f?o:f,c=0;c<a;c++){var v=u[c];Gn(v,i[c],t,++e),e+=v.b||0}}function Qn(n,r,t,e){for(var u=[],i={},o=[],f=n.e,a=r.e,c=f.length,v=a.length,s=0,l=0,b=e;s<c&&l<v;){var d=f[s],h=a[l],g=d.a,$=h.a,p=d.b,m=h.b,y=void 0,w=void 0;if(g!==$){var A=f[s+1],j=a[l+1];if(A){var k=A.a,_=A.b;w=$===k}if(j){var N=j.a,C=j.b;y=g===N}if(y&&w)Gn(p,C,u,++b),Un(i,u,g,m,l,o),b+=p.b||0,Vn(i,u,g,_,++b),b+=_.b||0,s+=2,l+=2;else if(y)b++,Un(i,u,$,m,l,o),Gn(p,C,u,b),b+=p.b||0,s+=1,l+=2;else if(w)Vn(i,u,g,p,++b),b+=p.b||0,Gn(_,m,u,++b),b+=_.b||0,s+=2,l+=1;else{if(!A||k!==N)break;Vn(i,u,g,p,++b),Un(i,u,$,m,l,o),b+=p.b||0,Gn(_,C,u,++b),b+=_.b||0,s+=2,l+=2}}else Gn(p,m,u,++b),b+=p.b||0,s++,l++}for(;s<c;){b++;p=(d=f[s]).b;Vn(i,u,d.a,p,b),b+=p.b||0,s++}for(;l<v;){var E=E||[];Un(i,u,(h=a[l]).a,h.b,void 0,E),l++}(u.length>0||o.length>0||E)&&Zn(t,8,e,{w:u,x:o,y:E})}function Un(n,r,t,e,u,i){var o=n[t];if(!o)return o={c:0,z:e,r:u,s:void 0},i.push({r:u,A:o}),void(n[t]=o);if(1===o.c){i.push({r:u,A:o}),o.c=2;var f=[];return Gn(o.z,e,f,o.r),o.r=u,void(o.s.s={w:f,A:o})}Un(n,r,t+"_elmW6BL",e,u,i)}function Vn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var o=[];return Gn(e,i.z,o,u),void Zn(r,9,u,{w:o,A:i})}Vn(n,r,t+"_elmW6BL",e,u)}else{var f=Zn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:f}}}function nr(n,r,t,e){rr(n,r,t,0,0,r.b,e)}function rr(n,r,t,e,u,i,o){for(var f=t[e],a=f.r;a===u;){var c=f.$;if(1===c)nr(n,r.k,f.s,o);else if(8===c){f.t=n,f.u=o,(v=f.s.w).length>0&&rr(n,r,v,0,u,i,o)}else if(9===c){f.t=n,f.u=o;var v,s=f.s;if(s)s.A.s=n,(v=s.w).length>0&&rr(n,r,v,0,u,i,o)}else f.t=n,f.u=o;if(!(f=t[++e])||(a=f.r)>i)return e}var l=r.$;if(4===l){for(var b=r.k;4===b.$;)b=b.k;return rr(n,b,t,e,u+1,i,n.elm_event_node_ref)}for(var d=r.e,h=n.childNodes,g=0;g<d.length;g++){u++;var $=1===l?d[g]:d[g].b,p=u+($.b||0);if(u<=a&&a<=p&&(!(f=t[e=rr(h[g],$,t,e,u,p,o)])||(a=f.r)>i))return e;u=p}return e}function tr(n,r,t,e){return 0===t.length?n:(nr(n,r,t,e),er(n,t))}function er(n,r){for(var t=0;t<r.length;t++){var e=r[t],u=e.t,i=ur(u,e);u===n&&(n=i)}return n}function ur(n,r){switch(r.$){case 0:return function(n,r,t){var e=n.parentNode,u=zn(r,t);u.elm_event_node_ref||(u.elm_event_node_ref=n.elm_event_node_ref);e&&u!==n&&e.replaceChild(u,n);return u}(n,r.s,r.u);case 4:return Dn(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return er(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;e<t.i;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=(e=t.v,n.childNodes[e]);e<u.length;e++)n.insertBefore(zn(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var o=t.A;return void 0!==o.r&&n.parentNode.removeChild(n),o.s=er(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(!n)return;for(var t=kn.createDocumentFragment(),e=0;e<n.length;e++){var u=n[e].A;_n(t,2===u.c?u.s:zn(u.z,r.u))}return t}(t.y,r);n=er(n,t.w);for(var u=t.x,i=0;i<u.length;i++){var o=u[i],f=o.A,a=2===f.c?f.s:zn(f.z,r.u);n.insertBefore(a,n.childNodes[o.r])}e&&_n(n,e);return n}(n,r);case 5:return r.s(n);default:L(10)}}function ir(n){if(3===n.nodeType)return Nn(n.textContent);if(1!==n.nodeType)return Nn("");for(var r=y,t=n.attributes,e=t.length;e--;){var u=t[e],i=u.name,o=u.value;r=w(c(Sn,i,o),r)}var f=n.tagName.toLowerCase(),a=y,s=n.childNodes;for(e=s.length;e--;)a=w(ir(s[e]),a);return v(Cn,f,r,a)}var or=e((function(n,r,t,e){return bn(r,e,n.a4,n.bp,n.bl,(function(r,t){var u=n.bq,i=e.node,o=ir(i);return ar(t,(function(n){var t=u(n),e=In(o,t);i=tr(i,o,e,r),o=t}))}))}));e((function(n,r,t,e){return bn(r,e,n.a4,n.bp,n.bl,(function(r,t){var e=n.X&&n.X(r),u=n.bq,i=kn.title,o=kn.body,f=ir(o);return ar(t,(function(n){pn=e;var t=u(n),a=Cn("body")(y)(t.aS),c=In(f,a);o=tr(o,f,c,r),f=a,pn=0,i!==t.bo&&(kn.title=i=t.bo)}))}))}));var fr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function ar(n,r){r(n);var t=0;function e(){t=1===t?0:(fr(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&fr(e),t=2)}}r((function(n,r){return c(It,Lt,rn((function(){r&&history.go(r),n()})))})),r((function(n,r){return c(It,Lt,rn((function(){history.pushState({},"",r),n()})))})),r((function(n,r){return c(It,Lt,rn((function(){history.replaceState({},"",r),n()})))}));var cr="undefined"!=typeof window?window:{addEventListener:function(){},removeEventListener:function(){}};function vr(n,r){return rn((function(t){fr((function(){var e=document.getElementById(n);t(e?nn(r(e)):{$:1,a:ht(n)})}))}))}t((function(n,r,t){return on(rn((function(e){function u(n){un(t(n))}return n.addEventListener(r,u,Tn&&{passive:!0}),function(){n.removeEventListener(r,u)}})))})),r((function(n,r){var t=I(n,r);return vt(t)?kr(t.a):_r})),r((function(n,r){return vr(r,(function(r){return r[n](),0}))})),r((function(n,r){return t=function(){return cr.scroll(n,r),0},rn((function(n){fr((function(){n(nn(t()))}))}));var t})),t((function(n,r,t){return vr(n,(function(n){return n.scrollLeft=r,n.scrollTop=t,0}))}));var sr=1,lr=2,br=0,dr=A,hr=t((function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.b,u=t.c,i=t.d,o=t.e,f=n,a=v(n,e,u,v(hr,n,r,o));n=f,r=a,t=i}})),gr=function(n){return v(hr,t((function(n,r,t){return c(dr,$(n,r),t)})),y,n)},$r=E;t((function(n,t,e){var u=e.c,i=e.d,o=r((function(r,t){if(r.$){var e=r.a;return v($r,n,t,e)}var u=r.a;return v($r,o,t,u)}));return v($r,o,v($r,n,t,i),u)}));var pr=function(n){return{$:1,a:n}},mr=r((function(n,r){return{$:3,a:n,b:r}})),yr=r((function(n,r){return{$:0,a:n,b:r}})),wr=r((function(n,r){return{$:1,a:n,b:r}})),Ar=function(n){return{$:0,a:n}},jr=function(n){return{$:2,a:n}},kr=function(n){return{$:0,a:n}},_r={$:1},Nr=J,Cr=U,Er=function(n){return n+""},Lr=r((function(n,r){return c(x,n,k(r))})),Or=r((function(n,r){return j(c(q,n,r))})),Sr=function(n){return c(Lr,"\n    ",c(Or,"\n",n))},Tr=t((function(n,r,t){for(;;){if(!t.b)return r;var e=t.a,u=t.b,i=n,o=c(n,e,r);n=i,r=o,t=u}})),qr=function(n){return v(Tr,r((function(n,r){return r+1})),0,n)},xr=_,Br=t((function(n,r,t){for(;;){if(!(g(n,r)<1))return t;var e=n,u=r-1,i=c(dr,r,t);n=e,r=u,t=i}})),Jr=r((function(n,r){return v(Br,n,r,y)})),zr=r((function(n,r){return v(xr,n,c(Jr,0,qr(r)-1),r)})),Dr=function(n){var r=n.charCodeAt(0);return 55296<=r&&r<=56319?1024*(r-55296)+n.charCodeAt(1)-56320+65536:r},Fr=function(n){var r=Dr(n);return 97<=r&&r<=122},Mr=function(n){var r=Dr(n);return r<=90&&65<=r},Rr=function(n){return Fr(n)||Mr(n)},Pr=function(n){return Fr(n)||Mr(n)||function(n){var r=Dr(n);return r<=57&&48<=r}(n)},Wr=function(n){return v(Tr,dr,y,n)},Hr=function(n){var r=n.charCodeAt(0);return isNaN(r)?_r:kr(55296<=r&&r<=56319?$(n[0]+n[1],n.slice(2)):$(n[0],n.slice(1)))},Ir=r((function(n,r){return"\n\n("+Er(n+1)+") "+Sr(Zr(r))})),Zr=function(n){return c(Gr,n,y)},Gr=r((function(n,r){n:for(;;)switch(n.$){case 0:var t=n.a,e=n.b,u=function(){var n=Hr(t);if(1===n.$)return!1;var r=n.a,e=r.a,u=r.b;return Rr(e)&&c(Nr,Pr,u)}(),i=e,o=c(dr,u?"."+t:"['"+t+"']",r);n=i,r=o;continue n;case 1:var f=n.a,a=(e=n.b,"["+Er(f)+"]");i=e,o=c(dr,a,r);n=i,r=o;continue n;case 2:var v=n.a;if(v.b){if(v.b.b){var s=(r.b?"The Json.Decode.oneOf at json"+c(Lr,"",Wr(r)):"Json.Decode.oneOf")+" failed in the following "+Er(qr(v))+" ways:";return c(Lr,"\n\n",c(dr,s,c(zr,Ir,v)))}n=i=e=v.a,r=o=r;continue n}return"Ran into a Json.Decode.oneOf with no possibilities"+(r.b?" at json"+c(Lr,"",Wr(r)):"!");default:var l=n.a,b=n.b;return(s=r.b?"Problem with the value at json"+c(Lr,"",Wr(r))+":\n\n    ":"Problem with the given value:\n\n")+(Sr(c(Cr,4,b))+"\n\n")+l}})),Xr=e((function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}})),Yr=[],Kr=O,Qr=r((function(n,r){return T(r)/T(n)})),Ur=Kr(c(Qr,2,32)),Vr=s(Xr,0,Ur,Yr,Yr),nt=N;r((function(n,r){return n(r)})),r((function(n,r){return r(n)}));var rt=S,tt=function(n){return n.length},et=r((function(n,r){return g(n,r)>0?n:r})),ut=C,it=r((function(n,r){for(;;){var t=c(ut,32,n),e=t.a,u=t.b,i=c(dr,{$:0,a:e},r);if(!u.b)return Wr(i);n=u,r=i}})),ot=r((function(n,r){for(;;){var t=Kr(r/32);if(1===t)return c(ut,32,n).a;n=c(it,n,y),r=t}})),ft=r((function(n,r){if(r.b){var t=32*r.b,e=rt(c(Qr,32,t-1)),u=n?Wr(r.e):r.e,i=c(ot,u,r.b);return s(Xr,tt(r.d)+t,c(et,5,e*Ur),i,r.d)}return s(Xr,tt(r.d),Ur,Yr,r.d)})),at=u((function(n,r,t,e,u){for(;;){if(r<0)return c(ft,!1,{e:e,b:t/32|0,d:u});var i={$:1,a:v(nt,32,r,n)};n=n,r=r-32,t=t,e=c(dr,i,e),u=u}})),ct=r((function(n,r){if(n<=0)return Vr;var t=n%32,e=v(nt,t,n-t,r);return l(at,r,n-t-32,n,y,e)})),vt=function(n){return!n.$},st=P,lt=W,bt=function(n){return{$:0,a:n}},dt=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ht=function(n){return n},gt=i((function(n,r,t,e,u,i){return{aj:i,an:r,au:e,aw:t,az:n,aA:u}})),$t=z,pt=function(n){return n.length},mt=B,yt=r((function(n,r){return n<1?r:v(mt,n,pt(r),r)})),wt=D,At=function(n){return""===n},jt=r((function(n,r){return n<1?"":v(mt,0,n,r)})),kt=function(n){for(var r=0,t=n.charCodeAt(0),e=43==t||45==t?1:0,u=e;u<n.length;++u){var i=n.charCodeAt(u);if(i<48||57<i)return _r;r=10*r+i-48}return u==e?_r:kr(45==t?-r:r)},_t=u((function(n,r,t,e,u){if(At(u)||c($t,"@",u))return _r;var i=c(wt,":",u);if(i.b){if(i.b.b)return _r;var o=i.a,f=kt(c(yt,o+1,u));if(1===f.$)return _r;var a=f;return kr(b(gt,n,c(jt,o,u),a,r,t,e))}return kr(b(gt,n,u,_r,r,t,e))})),Nt=e((function(n,r,t,e){if(At(e))return _r;var u=c(wt,"/",e);if(u.b){var i=u.a;return l(_t,n,c(yt,i,e),r,t,c(jt,i,e))}return l(_t,n,"/",r,t,e)})),Ct=t((function(n,r,t){if(At(t))return _r;var e=c(wt,"?",t);if(e.b){var u=e.a;return s(Nt,n,kr(c(yt,u+1,t)),r,c(jt,u,t))}return s(Nt,n,_r,r,t)}));r((function(n,r){if(At(r))return _r;var t=c(wt,"#",r);if(t.b){var e=t.a;return v(Ct,n,kr(c(yt,e+1,r)),c(jt,e,r))}return v(Ct,n,_r,r)}));var Et,Lt=function(n){},Ot=nn,St=Ot(0),Tt=e((function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var o=i.a,f=i.b;if(f.b){var a=f.a,l=f.b;if(l.b){var b=l.a,d=l.b;return c(n,u,c(n,o,c(n,a,c(n,b,t>500?v(Tr,n,r,Wr(d)):s(Tt,n,r,t+1,d)))))}return c(n,u,c(n,o,c(n,a,r)))}return c(n,u,c(n,o,r))}return c(n,u,r)}return r})),qt=t((function(n,r,t){return s(Tt,n,r,0,t)})),xt=r((function(n,t){return v(qt,r((function(r,t){return c(dr,n(r),t)})),y,t)})),Bt=tn,Jt=r((function(n,r){return c(Bt,(function(r){return Ot(n(r))}),r)})),zt=t((function(n,r,t){return c(Bt,(function(r){return c(Bt,(function(t){return Ot(c(n,r,t))}),t)}),r)})),Dt=gn,Ft=r((function(n,r){var t=r;return on(c(Bt,Dt(n),t))})),Mt=t((function(n,r,t){return c(Jt,(function(n){return 0}),(e=c(xt,Ft(n),r),v(qt,zt(dr),Ot(y),e)));var e})),Rt=t((function(n,r,t){return Ot(0)})),Pt=r((function(n,r){return c(Jt,n,r)}));dn.Task={b:St,c:Mt,d:Rt,e:Pt,f:Et};var Wt,Ht=(Wt="Task",function(n){return{$:1,k:Wt,l:n}}),It=r((function(n,r){return Ht(c(Jt,n,r))})),Zt=or,Gt=$n(y),Xt=$n(y),Yt=r((function(n,r){return n.$?$(p(r,{B:"",H:m(r.H,j([r.B]))}),Gt):$(p(r,{B:n.a}),Gt)})),Kt=function(n){return{$:0,a:n}},Qt={$:1},Ut=Cn("button"),Vt=Cn("div"),ne=Cn("h1"),re=Cn("input"),te=Cn("li"),ee=Ln,ue=r((function(n,r){return c(ee,n,{$:0,a:r})})),ie=function(n){return $(n,!0)},oe=r((function(n,r){return c(ee,n,{$:1,a:r})})),fe=M,ae=F,ce=c(r((function(n,r){return v(qt,fe,r,n)})),j(["target","value"]),ae),ve=V,se=r((function(n,r){return c(On,n,ve(r))})),le=se("placeholder"),be=Nn,de=se("type"),he=Cn("ul"),ge=se("value");const $e={Main:{init:Zt({a4:function(n){return $({B:"",H:y},Gt)},bl:function(n){return Xt},bp:Yt,bq:function(n){return c(Vt,y,j([c(ne,y,j([be("Echo Chat")])),c(re,j([de("text"),le("Draft"),(t=Kt,c(oe,"input",c(st,ie,c(st,t,ce)))),ge(n.B)]),y),c(Ut,j([(r=Qt,c(ue,"click",bt(r)))]),j([be("Send")])),c(he,y,c(xt,(function(n){return c(te,y,j([be(n)]))}),n.H))]));var r,t}})(bt(0))(0)}};console.log("hello elm"),alert("hello elm"),$e.Main.init({node:document.querySelector("main")});