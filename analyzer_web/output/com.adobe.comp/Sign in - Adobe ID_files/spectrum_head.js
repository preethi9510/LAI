Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(void 0===this||null===this)throw new TypeError;var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError;for(var a=[],r=arguments.length>=2?arguments[1]:void 0,o=0;o<n;o++)if(o in t){var i=t[o];e.call(r,i,o,t)&&a.push(i)}return a}),Array.prototype.forEach||(Array.prototype.forEach=function(e){var t,n;if(null==this)throw new TypeError("this is null or not defined");var a=Object(this),r=a.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=0;n<r;){var o;n in a&&(o=a[n],e.call(t,o,n,a)),n++}}),Array.prototype.map||(Array.prototype.map=function(e){var t,n,a;if(null==this)throw new TypeError("this is null or not defined");var r=Object(this),o=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(arguments.length>1&&(t=arguments[1]),n=new Array(o),a=0;a<o;){var i,s;a in r&&(i=r[a],s=e.call(t,i,a,r),n[a]=s),a++}return n}),Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,a=new Array(n);n--;)a[n]=[t[n],e[t[n]]];return a}),function(e,t,n){function a(e,t){return typeof e===t}function r(){var e,t,n,r,o,i,s;for(var l in _)if(_.hasOwnProperty(l)){if(e=[],t=_[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?b[s[0]]=r:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=r),w.push((r?"":"no-")+s.join("-"))}}function o(e){var t=C.className,n=b._config.classPrefix||"";if(D&&(t=t.baseVal),b._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),D?C.className.baseVal=t:C.className=t)}function i(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):D?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var r;for(var o in e)if(e[o]in t)return n===!1?e[o]:(r=t[e[o]],a(r,"function")?c(r,n||t):r);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,a){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,t,n);var o=e.console;if(null!==r)a&&(r=r.getPropertyValue(a));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!n&&t.currentStyle&&t.currentStyle[a];return r}function p(){var e=t.body;return e||(e=s(D?"svg":"body"),e.fake=!0),e}function g(e,n,a,r){var o,i,l,c,u="modernizr",f=s("div"),d=p();if(parseInt(a,10))for(;a--;)l=s("div"),l.id=r?r[a]:u+(a+1),f.appendChild(l);return o=s("style"),o.type="text/css",o.id="s"+u,(d.fake?d:f).appendChild(o),d.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,d.fake&&(d.style.background="",d.style.overflow="hidden",c=C.style.overflow,C.style.overflow="hidden",C.appendChild(d)),i=n(f,e),d.fake?(d.parentNode.removeChild(d),C.style.overflow=c,C.offsetHeight):f.parentNode.removeChild(f),!!i}function v(t,a){var r=t.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(f(t[r]),a))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+f(t[r])+":"+a+")");return o=o.join(" or "),g("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function y(e,t,r,o){function c(){f&&(delete A.style,delete A.modElem)}if(o=!a(o,"undefined")&&o,!a(r,"undefined")){var u=v(e,r);if(!a(u,"undefined"))return u}for(var f,d,p,g,y,m=["modernizr","tspan","samp"];!A.style&&m.length;)f=!0,A.modElem=s(m.shift()),A.style=A.modElem.style;for(p=e.length,d=0;d<p;d++)if(g=e[d],y=A.style[g],i(g,"-")&&(g=l(g)),A.style[g]!==n){if(o||a(r,"undefined"))return c(),"pfx"!=t||g;try{A.style[g]=r}catch(h){}if(A.style[g]!=y)return c(),"pfx"!=t||g}return c(),!1}function m(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(i+" ")+i).split(" ");return a(t,"string")||a(t,"undefined")?y(s,t,r,o):(s=(e+" "+P.join(i+" ")+i).split(" "),u(s,t,n))}function h(e,t,a){return m(e,n,n,t,a)}var w=[],_=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){_.push({name:e,fn:t,options:n})},addAsyncTest:function(e){_.push({name:null,fn:e})}},b=function(){};b.prototype=S,b=new b,b.addTest("history",function(){var t=navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1||"file:"===location.protocol)&&(e.history&&"pushState"in e.history)}),b.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var C=t.documentElement,D="svg"===C.nodeName.toLowerCase(),E="Moz O ms Webkit",P=S._config.usePrefixes?E.toLowerCase().split(" "):[];S._domPrefixes=P;var k=S._config.usePrefixes?E.split(" "):[];S._cssomPrefixes=k;var I={elem:s("modernizr")};b._q.push(function(){delete I.elem});var A={style:I.elem.style};b._q.unshift(function(){delete A.style});S.testProp=function(e,t,a){return y([e],n,t,a)};S.testAllProps=m,S.testAllProps=h,b.addTest("cssanimations",h("animationName","a",!0)),r(),o(w),delete S.addTest,delete S.addAsyncTest;for(var O=0;O<b._q.length;O++)b._q[O]();e.Modernizr=b}(window,document),function(){function e(e){for(var t,n=[["SocialV2:Delegated","SocialV2Delegated"],["SocialV2:onLoad_Fallback","SocialV2Fallback"],["onLoad_SignInForm","SignIn"],["onLoad_SignUpForm","SignUp"],["Incremental:onLoad_CompleteAccountUIForm","SignUp"],["Incremental:onLoad_CompleteAccountEmailForm","SignUp"],["onLoad_ForgotPasswordForm","ForgotPassword"],["onLoad_ForgotPasswordChooseMethodPage","ForgotPassword"],["SignUp:onLoad_AdditionalPrivacyPolicyFormSK","AdditionalPrivacyPolicySK"],["SignIn:onLoad_PPSecondaryEmailForm","ProgressiveProfile"],["SignIn:PhoneFormBlocked","PPPhone"],["onLoad_TermsOfUse","TermsOfUse"],["SignIn:onLoad_UpdateDateOfBirthForm","UpdateDateOfBirth"],["SignIn:onLoad_UpdateEmailType2Migration","UpdateEmail"],["SignIn:onLoad_UpdatePassword","UpdatePassword"],["onLoad_VerifiyEmailAddressPage","VerifyEmail"],["PPSecondaryEmail:onLoad_VerifySecondaryEmailForm","VerifyEmail"]],a=0;a<n.length;a++)if(t=n[a],e.indexOf(t[0])>=0)return t[1];var r=e.split(":");return r.length>1?r[0]:null}function t(e){return e.indexOf("onLoad_TermsOfUse")>=0&&(e+=":"+window.launchConfig.touaName),e}function n(e){digitalData._set("digitalData.page.pageInfo.pageName","Account:IMS:"+t(e))}function a(t){digitalData._set("digitalData.adobe.experienceCloud.analytics.account",t.analyticsAccount),digitalData._set("digitalData.ims.client.appCodeValue",t.appCodeValue),digitalData._set("digitalData.page.pageInfo.language",t.locale),digitalData._set("digitalData.page.pageInfo.location.hostname","services.adobe.com"),digitalData._set("digitalData.page.pageInfo.siteSection","IMS"),digitalData._set("digitalData.ims.client.clientID",t.clientId),"Denied"!==t.pageName&&(n(t.pageName),digitalData._set("digitalData.form.primary.formInfo.name",e(t.pageName)))}function r(){try{_satellite.track("pageload",{digitalData:digitalData._snapshot()})}catch(e){console.warn("Page load tracking error: "+e)}}function o(e,t,a){t=t||{};var r="state",o={eVar13:"digitalData.form.primary.formInfo.name",eVar94:"digitalData.form.primary.formInfo.enteredDomain",eVar95:"digitalData.form.primary.formInfo.suggestedDomain",eVar115:"digitalData.ims.authProvider"},i=Object.entries(t).filter(function(e){return o.hasOwnProperty(e[0])}).map(function(e){return{key:o[e[0]],value:e[1]}}),s=a&&"A"===a.nodeName;a&&(r="event",i.push({key:"digitalData.primaryEvent.eventInfo.target",value:!s||a})),n(e),p(r,i)}function i(e,t){var n={chatConversationId:e["event.context_guid"],chatConversationSessionId:e["event.session_guid"],chatWorkflow:e["event.workflow"],chatCategory:e["event.category"],chatSubcategory:e["event.subcategory"],chatType:e["event.type"],chatSubtye:e["event.subtype"],chatUserguid:e["event.user_guid"],chatLanguage:e["event.language"],chatPagename:e["event.pagename"],chatVisitorguid:e["event.visitor_guid"],chatUrl:e["event.url"],chatOrgguid:e["event.org_guid"],chatReferrer:e["event.referrer"],chatClientId:e["source.client_id"],chatSourceName:e["source.name"],chatPlatform:e["source.platform"],chatContentName:e["content.name"],chatEnv:e["env.com.name"]};l(e)?(n.chatErrorCode=e["event.error_code"],n.chatErrorDescription=e["event.error_desc"],n.chatErrorType=e["event.error_type"]):(u(e)||c(e))&&(n.chatConversationOpen=u(e),n.chatConversationUnread="unread"===e["content.name"]);var a=Object.entries(n).map(function(e){return{key:"digitalData.chat.chatInfo."+e[0],value:e[1]}});s(a,e),p("event",a)}function s(e,t){var n,a;l(t)?(n=f("chat",t["event.workflow"],t["event.subtype"],t["event.type"],"error"),a=f(t["event.subcategory"],t["event.subtype"],t["event.type"],"error")):u(t)?(n=f("chat",t["event.workflow"],t["event.subcategory"],t["event.subtype"],t["event.type"]),a=f(t["event.workflow"],t["event.subtype"],t["event.type"])):c(t)?(n=f("chat",t["event.workflow"],t["event.subcategory"],t["event.subtype"],t["content.name"],t["event.type"]),a=f(t["event.subcategory"],t["content.name"],t["event.type"])):(n=f("chat",t["event.workflow"],t["content.name"],t["event.subtype"],t["event.type"]),a=f(t["event.subcategory"],t["content.name"],t["event.subtype"],t["event.type"])),e.push({key:"digitalData.primaryEvent.eventInfo.eventName",value:n},{key:"digitalData.primaryEvent.eventInfo.eventAction",value:a})}function l(e){return e["event.error_code"]}function c(e){return/init/i.test(e["event.workflow"])&&/launch/i.test(e["event.subcategory"])&&(/render/i.test(e["event.type"])||/click/i.test(e["event.type"]))}function u(e){return/chat/i.test(e["event.workflow"])&&/component/i.test(e["event.subcategory"])&&/render/i.test(e["event.type"])&&/window/i.test(e["event.subtype"])}function f(e,t,n,a,r,o){var i=(e?e+":":"")+(t?t+":":"")+(n?n+":":"")+(a?a+":":"")+(r?r+":":"")+(o?o+":":"");return i.length>0?i.substring(0,i.length-1):""}function d(e){var t=[{key:"digitalData.primaryEvent.eventInfo.eventName",value:e}];p("event",t)}function p(e,t){t.forEach(function(e){digitalData._set(e.key,e.value)});try{_satellite.track(e,{digitalData:digitalData._snapshot()})}catch(n){console.warn("Event tracking error: "+n)}t.forEach(function(e){digitalData._delete(e.key,e.value)})}window.launchConfig&&(window.scReport=o,window.scJarvisReport=i,window.scUserInteractionEvent=d,a(window.launchConfig),r())}();