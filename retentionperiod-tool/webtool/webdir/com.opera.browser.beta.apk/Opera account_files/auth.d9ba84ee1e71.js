!function(){var auth={};auth.addEvent=function(element,e,func){return element.attachEvent?element.attachEvent("on"+e,func):element.addEventListener(e,func,!1)},auth.placeholderSupport=function(){var element=document.createElement("input"),isOperaMini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);if("placeholder"in element&&!isOperaMini)for(var labelsFallbacks=document.getElementsByClassName("placeholder-fallback"),i=0,j=labelsFallbacks.length;i<j;i++)labelsFallbacks[i].className+=" is-visuallyhidden"},auth.initLanguageSwitcher=function(){for(var s=document.getElementsByClassName("hf--language-selector"),i=0;i<s.length;i++)s[i].onchange=function(){document.location=this.options[this.selectedIndex].value}},auth.init=function(){auth.placeholderSupport(),auth.initLanguageSwitcher()},auth.addEvent(window,"load",auth.init,!1)}(),function(){var scrollsToTop=document.getElementsByClassName("back-to-top");if(scrollsToTop){addEvent=function(obj,type,func,b){if(obj.addEventListener)return obj.addEventListener(type,func,b);if(obj.attachEvent){try{3!=(slash=(path=window.location.pathname).indexOf("/",1))&&6!=slash&&7!=slash||(path=path.substr(slash)),ga("send","event","Browser research","attachEvent",path+": "+navigator.userAgent,{nonInteraction:1})}catch(e){}return obj["e"+type+func]=func,obj[type+func]=function(){obj["e"+type+func](obj.event)},obj.attachEvent("on"+type,obj[type+func])}try{var path=window.location.pathname,slash=path.indexOf("/",1);3!=slash&&6!=slash&&7!=slash||(path=path.substr(slash)),ga("send","event","Browser research","on"+type,path+": "+navigator.userAgent,{nonInteraction:1})}catch(e){}return obj["on"+type]=func,!0};for(var i=0;i<scrollsToTop.length;i++)addEvent(scrollsToTop[i],"click",function(){var scrollStep=-window.pageYOffset/15,scrollInterval=setInterval(function(){0!=window.pageYOffset?window.scrollBy(0,scrollStep):clearInterval(scrollInterval)},15)},!1)}}();
//# sourceMappingURL=auth.js.map