!function(e){function n(n){for(var r,o,u=n[0],c=n[1],s=n[2],f=0,d=[];f<u.length;f++)o=u[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(l&&l(n);d.length;)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={1:0},a={1:0},i=[];var u={0:"sha384-0F9Zdw5/7/ufUoqrQsC/lNVKE0lVcfDhrRTO6/bJ4vft8baaeESQAj1sWCrGmxdW",2:"sha384-vAwDobxg4kENkFwjiNfwCFSfmsZktfypuCITcQjw5yeu0qBPwnt8iasWKSgy0qCx",3:"sha384-WZzITDd6Risr0VPWEWFOR74QdOICAmqAChLwt4/r86fNkgR5vMTtDSZ3Y5Xozhsr",4:"sha384-xBb4m9qw+pvYOCGbjI77bWfC1A5fes1EzzXn/0LmYoHoOGoYhP7C3J6YQQwvrFSU",5:"sha384-WCa+quZNJBUv8LOtU+p+dIjT6LXeJgBl20ay/iIjNewKnkMknWdvllQtMxXO27wC",7:"sha384-+cZVwz4dsWbk9T5420MvLgue84b5UZAl3wt6Z2ONga4upfCUhamF7ezkT4n786Mc",8:"sha384-odOWyvAtDIvkzj9LR+c6PSW+GAYnqmFIvleORYjUAZ3Ag2ByX2yKXcBThR5bXEXG",9:"sha384-P6gsfqqvzZ6VKLJn4KQ6hTQjysOS9SheeAMF1C975mKYU+Wl6U30o+45X2jUeE+K",10:"sha384-EHClEtJiGl5AuG7bVf1q5c08+N6o+JgWLVSBHHrvL1CdyiaH9Qcx+AeyTWRZQpza"};function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[];o[e]?n.push(o[e]):0!==o[e]&&{2:1}[e]&&n.push(o[e]=new Promise((function(n,t){for(var r=e+".3a90e215ef.css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=(d=i[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){var d;if((s=(d=f[u]).getAttribute("data-href"))===r||s===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],l.parentNode.removeChild(l),t(i)},l.href=a,0!==l.href.indexOf(window.location.origin+"/")&&(l.crossOrigin="anonymous"),document.getElementsByTagName("head")[0].appendChild(l)})).then((function(){o[e]=0})));var t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+""+({0:"appLazy.module",2:"vendor2Lazy.module",3:"vendorEncoder.module",4:"vendorLazy.module",5:"vendors~appLazy.module",7:"vendors~vendor2Lazy.module",8:"vendors~vendorLazy.module"}[e]||e)+"."+{0:"ead794a201",2:"22d11156f6",3:"192c1343a7",4:"8082c3a07d",5:"08cc1befa9",7:"418806611d",8:"780a80e1a7",9:"90a15fa574",10:"766f6a94f6"}[e]+".chunk.js"}(e),0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),i=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,s.integrity=u[e],s.crossOrigin="anonymous",document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=f;i.push([0,6]),t()}({"+wUL":function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),o=t.n(r),a=t("J4zp"),i=t.n(a),u=t("yXPU"),c=t.n(u),s=(t("dE+T"),t("bHtr"),t("dRSK"),t("INYr"),t("6VaU"),t("HEwt"),t("Z2Ku"),t("yt8O"),t("6AQ9"),t("0E+W"),t("yM4b"),t("IXt9"),t("f3/d"),t("9AAn"),t("fyVe"),t("U2t9"),t("2atp"),t("+auO"),t("MtdB"),t("Jcmo"),t("nzyx"),t("BC7C"),t("x8ZO"),t("9P93"),t("BJ/l"),t("eHKK"),t("pp/T"),t("CyHz"),t("bBoP"),t("x8Yj"),t("hLT2"),t("xfY5"),t("Ljet"),t("/KAi"),t("fN96"),t("7h0T"),t("sbF8"),t("h/M4"),t("knhD"),t("XfKG"),t("BP8U"),t("91GP"),t("RQRG"),t("/uf1"),t("/8Fb"),t("DW2E"),t("mYba"),t("jm62"),t("JduL"),t("5Pf0"),t("uaHG"),t("ZNX/"),t("mura"),t("Btvt"),t("25dN"),t("Zshi"),t("V/DX"),t("FlsD"),t("RW0V"),t("z2o2"),t("hhXQ"),t("VRzm"),t("CX2u"),t("3xty"),t("I5cv"),t("iMoV"),t("uhZd"),t("0YWM"),t("694e"),t("LTTk"),t("9rMk"),t("IlFx"),t("xpiv"),t("oZ/O"),t("klPD"),t("knU9"),t("Oyvg"),t("OEbY"),t("SRfc"),t("pIFo"),t("KKXr"),t("OG14"),t("a1Th"),t("T39b"),t("ioFf"),t("rE2o"),t("hEkN"),t("nIY7"),t("+oPb"),t("SMB2"),t("oDIu"),t("rvZc"),t("0mN4"),t("bDcW"),t("nsiH"),t("VpUO"),t("L9s1"),t("0LDn"),t("XfO3"),t("tUrg"),t("9XZr"),t("7VC1"),t("eI33"),t("FLlr"),t("84bF"),t("9VmF"),t("FEjr"),t("Zz4T"),t("JCqj"),t("I74W"),t("fA63"),t("xm80"),t("sFw1"),t("NO8f"),t("aqI/"),t("Faw5"),t("r1bV"),t("tuSo"),t("nCnK"),t("Y9lz"),t("Tdpu"),t("EK0E"),t("wCsR"),t("R5XZ"),t("Ew+T"),t("rGqo"),t("ls82"),t("eefC"),t("btMZ")),f=t("p1RS"),d=t("dG5C"),l=function(){var e=c()(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=URL.createObjectURL(new Blob([n],{type:"text/javascript"})),e.next=3,Object(s.m)(t);case 3:URL.revokeObjectURL(t),Object(f.a)(window.openpgp);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=c()(o.a.mark((function e(n,t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=URL.createObjectURL(new Blob(["self.window = self;",n,t],{type:"text/javascript"})),e.next=3,Object(d.f)({path:r});case 3:URL.revokeObjectURL(r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=t("cDf5"),h=t.n(m),b=function(){return!1===navigator.cookieEnabled?"Cookies are required to use ProtonMail. Please enable cookies in your browser.":"undefined"==typeof Storage?"sessionStorage is required to use ProtonMail. Please enable sessionStorage in your browser.":"undefined"!=typeof window&&window.crypto&&window.crypto.getRandomValues||"undefined"!=typeof window&&"object"===h()(window.msCrypto)&&"function"==typeof window.msCrypto.getRandomValues?void 0:"A browser that has a Pseudo Random Number Generator is required to use ProtonMail. Please update your browser."},v=(t("IMnL"),{filepath:"openpgp.min.5b073d61cb4b2de37db6a4a528bc0137a90b821f.js",integrity:"sha384-Y30HgcudZZNgdz+jIC/qf5wAUlGbAaP3xl3WYjunpHRhKOks614DbusUh7xwolxY"}),y={filepath:"openpgp.min.compat.1c93e4fc329f25f80ba2cf494d540db8687bfe79.js",integrity:"sha384-ViRm/5aWVZqCnH0qYJhMczUsgnjtzD265zyIQ71IOpp2cXeXoFxTXrg8KEoMURhF"},g={filepath:"openpgp.worker.min.484287ac73bd4f4dc1852a6a7c38cdf092c13972.js",integrity:"sha384-aKvLzp/7N5P0lWrEobTZixrPRXJZEwdrVNHjJ3hPLv1ge7gaiV/Fjj5PxMEF5Ooj"},w=function(e){var n=e.filepath,t=e.integrity;return fetch(n,{integrity:t,credentials:"same-origin"}).then((function(e){return e.text()}))};c()(o.a.mark((function e(){var n,r,a,u,c,f,d,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j=void 0,!(j=b())||(alert(j),0)){e.next=2;break}return e.abrupt("return",void(window.location="https://protonmail.com/compatibility"));case 2:return n=Promise.all([t.e(9),t.e(10)]).then(t.bind(null,"fxPf")),r=!Object(s.d)(),u=w(a=r?y:v).catch((function(){return w(a)})),c=w(g).catch((function(){return w(g)})),e.next=9,u;case 9:return f=e.sent,e.next=12,Promise.all([n,l(f)]);case 12:if(d=e.sent,m=i()(d,1),m[0].default(),!r&&(o=void 0,h=void 0,O=void 0,o=Object(s.c)(),h=o.name,O=o.version,"ios"!==h.toLowerCase()||11!==parseInt(O,10))){e.next=18;break}return e.abrupt("return");case 18:return e.t0=p,e.t1=f,e.next=22,c;case 22:return e.t2=e.sent,e.next=25,(0,e.t0)(e.t1,e.t2);case 25:case"end":return e.stop()}var o,h,O,j}),e)})))()},0:function(e,n,t){e.exports=t("+wUL")},IMnL:function(e,n,t){},btMZ:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"b",(function(){return i})),t.d(n,"k",(function(){return u})),t.d(n,"c",(function(){return c})),t.d(n,"l",(function(){return s})),t.d(n,"i",(function(){return f})),t.d(n,"f",(function(){return d})),t.d(n,"h",(function(){return l})),t.d(n,"j",(function(){return p})),t.d(n,"e",(function(){return m})),t.d(n,"d",(function(){return h})),t.d(n,"g",(function(){return b})),t.d(n,"n",(function(){return v})),t.d(n,"o",(function(){return g})),t.d(n,"m",(function(){return w}));var r=t("J4zp"),o=t.n(r),a=(t("cDf5"),function(){return $.ua.browser}),i=function(){return $.ua.device},u=function(){return"mobile"===i().type},c=function(){var e=$.ua.os,n=e.name,t=void 0===n?"other":n,r=e.version;return{name:t,version:void 0===r?"":r}},s=function(){return["Safari","Mobile Safari"].includes($.ua.browser.name)},f=function(){return"IE"===$.ua.browser.name&&"11"===$.ua.browser.major},d=function(){return"Edge"===$.ua.browser.name},l=function(){return"Firefox"===$.ua.browser.name},p=function(){return"Mac OS"===c().name},m="ontouchstart"in document.documentElement,h=function(){return"noModule"in document.createElement("script")},b=function(){return"download"in document.createElement("a")||navigator.msSaveOrOpenBlob};function v(e){if(f()||l()){var n=window.open();return n.opener=null,void(n.location=e)}var t=document.createElement("A");return t.setAttribute("rel","noreferrer nofollow noopener"),t.setAttribute("target","_blank"),t.href=e,t.click()}var y=function(e,n){try{var t=new URL(e);return Array.from(t.searchParams.entries()).reduce((function(e,n){var t=o()(n,2),r=t[0],a=t[1],i=void 0===a?"":a,u="body"===r;return e[r]=u?i:i.replace(/\n/g,""),e}),{})}catch(r){return n.search.replace(/\?/g,"").split("&").reduce((function(e,n){var t=n.split("="),r=o()(t,2),a=r[0],i=r[1],u=void 0===i?"":i,c="body"===a;return e[a]=c?u:u.replace(/\n/g,""),e}),{})}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=document.createElement("A");return n.href=e,{protocol:n.protocol,host:n.host,hostname:n.hostname,port:n.port,pathname:n.pathname,search:n.search,searchObject:y(e,n),hash:n.hash}},w=function(e,n){return new Promise((function(t,r){!function(e,n){var t=e.path,r=e.integrity,o=document.createElement("script");o.src=t,r&&(o.integrity=r),o.onload=function(e){return n(e)},o.onerror=function(e){return n(void 0,e)},document.head.appendChild(o)}({path:e,integrity:n},(function(e,n){return n?r(n):t()}))}))}}});
//# sourceMappingURL=index.2a9f6673bc.js.map