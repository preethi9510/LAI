Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=this,c=Array.from(arguments).slice(1),d=function(){},e=function(){return b.apply(this instanceof d?this:a,c.concat(Array.from(arguments)))};d.prototype=this.prototype;e.prototype=new d;return e});
Array.prototype.filter||(Array.prototype.filter=function(a,b){if(null==this)throw new TypeError;var c=Object(this),d=c.length>>>0;if("function"!=typeof a)throw new TypeError;for(var e=[],f=0;f<d;f++)if(f in c){var g=c[f];a.call(b,g,f,c)&&e.push(g)}return e});Array.prototype.some||(Array.prototype.some=function(a,b){if(null==this)throw new TypeError;var c=Object(this),d=c.length>>>0;if("function"!=typeof a)throw new TypeError;for(var e=0;e<d;e++)if(e in c&&a.call(b,c[e],e,c))return!0;return!1});dojo.provide("idealista.comun");
dojo.require("dojo.parser");dojo.require("idealista.string");dojo.require("idealista.widget.dropdown");dojo.requireLocalization("idealista.i18n","messages");var i18nComun=dojo.i18n.getLocalization("idealista.i18n","messages");dojo._loadUri(djConfig.baseUrl.split("/").slice(0,3).join("/")+"/static/common/js/ext/sessvars.js");sessvars.moreCriteriaDisplayed=sessvars.moreCriteriaDisplayed||!1;sessvars.subscribeRSSDisplayed=sessvars.subscribeRSSDisplayed||!1;
sessvars.searchFriendDisplayed=sessvars.searchFriendDisplayed||!1;sessvars.searchSendSmsDisplayed=sessvars.searchSendSmsDisplayed||!1;sessvars.listMoreFiltersDisplayed=sessvars.listMoreFiltersDisplayed||!1;
idealista.comun.iniciar=function(){dojo.require("idealista.widget.dropdown");idealista.comun.initBreadcrumbGeoWidget();dojo.query(".d@link-params").forEach(function(a){a.href+=a.getAttribute("params");dojo.removeClass(a,"d@link-params")});dojo.byId("no-search")&&(dojo.query("#no-search div[dt\x3didealista.widget.dropdown]").forEach(function(a){a.setAttribute("dojoType","idealista.widget.dropdown")}),dojo.parser.parse(dojo.byId("no-search")));dojo.query(".pager")&&0<dojo.query(".pager").length&&dojo.connect(document,
"onkeydown",function(a){!a&&event&&(a=event);var b=a.keyCode||a.which;a=a.srcElement||a.target;"TEXTAREA"!=a.tagName.toUpperCase()&&("INPUT"!=a.tagName.toUpperCase()||"INPUT"==a.tagName.toUpperCase()&&a.getAttribute("type")&&"TEXT"!=a.getAttribute("type").toUpperCase()&&a.getAttribute("type")&&"RADIO"!=a.getAttribute("type").toUpperCase()&&"PASSWORD"!=a.getAttribute("type").toUpperCase())&&(dojo.query(".pager .previous a")&&0<dojo.query(".pager .previous a").length&&b==dojo.keys.LEFT_ARROW&&(document.location.href=
dojo.query(".pager .previous a")[0].href),dojo.query(".pager .next a")&&0<dojo.query(".pager .next a").length&&b==dojo.keys.RIGHT_ARROW&&(document.location.href=dojo.query(".pager .next a")[0].href))})};idealista.comun.resetStatusMsg=function(){dojo.query("input[type\x3dsubmit]").onmouseover(function(){window.status=" "});dojo.query("input[type\x3dsubmit]").onmousemove(function(){window.status=" "});dojo.query("input[type\x3dsubmit]").onmouseout(function(){window.status=" "})};
idealista.comun.handleServicesDropdown=function(){var a=dojo.byId("utilidades-carga"),b=dojo.byId("hipotecas-drop"),c=dojo.query("a",a)[0];a&&b&&c&&(dojo.connect(a,"onmouseover",function(){dojo.addClass(a,"open");dojo.addClass(c,"open");dojo.style(b,"display","block")}),dojo.connect(a,"onmouseout",function(){dojo.removeClass(a,"open");dojo.removeClass(c,"open");dojo.style(b,"display","none")}))};
idealista.comun.resetTabs=function(a){dojo.query("li[id]",a).forEach(function(a){"selected"==a.className&&dojo.removeClass(a,"selected")})};
idealista.comun.manageTabs=function(a){if(dojo.isFF&&dojo.byId("no-search")&&dojo.byId("breadcrumb")){var b=dojo.getComputedStyle(dojo.byId("nav_1")).zIndex;dojo.style(dojo.byId("breadcrumb"),"zIndex",b+1)}dojo.query(".tab-handler",a).onclick(function(){if(!this.parentNode.className||"selected"!=this.parentNode.className){var b=dojo.byId(a);idealista.comun.resetTabs(b);dojo.addClass(this.parentNode,"selected");dojo.byId("no-search")&&("no-chose"==this.parentNode.parentNode.className&&dojo.removeClass(this.parentNode.parentNode,
"no-chose"),idealista.comun.noSearchLinkBuilder(this.firstChild.nodeValue))}})};idealista.comun.noSearchLinkBuilder=function(a){};window.scrambleString="j4Klo3m5c7 8 Aw8 7 inqwjh R62q";idealista.comun._scramble=function(a,b){for(var c="",d=scrambleString.length,e=0;e<a.length;++e){var f=a.charCodeAt(e),g=scrambleString.charCodeAt(e%d);b&&(g=260-g);var k=f;46==f?k=64:64==f?k=46:65<=f&&90>=f?k=(f-65+g)%26+65:97<=f&&122>=f&&(k=(f-97+g)%26+97);c+=String.fromCharCode(k)}return c};
idealista.comun.descrambleText=function(a){return idealista.comun._scramble(a,!0)};idealista.comun.writeMailToWithScrambledDisplayText=function(a,b,c,d){if(null==d||""!=d)d=!0;document.open();document.write('\x3ca href\x3d"mailto:'+idealista.comun.descrambleText(a)+'"');null!=c&&""!=c&&document.write(' class\x3d"'+c+'" ');d?document.write("\x3e"+idealista.comun.descrambleText(b)+"\x3c/a\x3e"):document.write("\x3e"+i18nComun[b]+"\x3c/a\x3e");document.close()};
idealista.comun.writeMailTo=function(a){idealista.comun.writeMailToWithScrambledDisplayText(a,a)};(function(){function a(a){return'\x3ca href\x3d"mailto:'+idealista.comun.descrambleText(a)+'"\x3e'+idealista.comun.descrambleText(a)+"\x3c/a\x3e"}$(document).ready(function(){$("[data-scramble]").each(function(){$(this).html(a($(this).data("scramble")))})})})();
idealista.comun.switchDisplay=function(a,b){var c="none"==dojo.getComputedStyle(dojo.byId(b)).display?"block":"none",d="none"==c?"open":"close";dojo.style(dojo.byId(b),"display",c);a&&(a.className&&("close"==a.className?dojo.removeClass(a,"close"):dojo.removeClass(a,"open")),dojo.addClass(a,d))};idealista.comun.openLayer=function(a,b){"none"==dojo.getComputedStyle(dojo.byId(b)).display&&dojo.style(dojo.byId(b),"display","block");"close"==a.className&&dojo.removeClass(a,"open")};
idealista.comun.showCharLeft=function(a,b){var c=a.getAttribute("maxlength"),d=c-a.value.length;dojo.byId(b).firstChild.nodeValue=0<=d?d:0;a.value.length>=c&&(a.value=a.value.slice(0,c))};
idealista.comun.limitarTexto=idealista.comun.limitText=function(a,b){var c=Number(a.getAttribute("maxlength")||a.getAttributeNode("maxlength").value),d=i18nComun["generic.textarea.characters.limit"],e=i18nComun["generic.textarea.characters.limit.exceed"];a.value.length>=c?(a.value=a.value.slice(0,c),b&&(b.innerHTML=e,dojo.addClass(b,"red"))):(c=c-a.value.length+"",b&&(dojo.removeClass(b,"red"),b.innerHTML=d.localize(c.formatAsThousands())))};
idealista.comun.rewriteSwf=function(){0<dojo.query("object").length&&dojo.query("object").forEach(function(a){for(var b=0,c=a.parentNode.childNodes,d=0;d<c.length;d++)c[d]==a&&(b=d);c=a.firstChild.cloneNode(!1);a.appendChild(c);c.setAttribute("name","wmode");c.setAttribute("value","opaque");0<dojo.query("embed",a).length&&dojo.query("embed",a)[0].setAttribute("wmode","opaque");c=dojo.clone(a);dojo.place(c,a.parentNode,b);a.parentNode.removeChild(a)})};
idealista.comun.resizeIframe=function(a){docHeight=containerifrm.document.body.scrollHeight;a.style.height=docHeight+"px"};
idealista.comun.openNewWin=function(a,b,c,d,e){a=a||event;a=a.target||a.srcElement;b=b||600;c=c||550;d=d||a.href;e=e||"win";screenWidth=screen.width;screenHeight=screen.height;sLeft=((parseInt(screenWidth)-parseInt(b))/2).toString();sTop=((parseInt(screenHeight)-parseInt(c))/2).toString();oNewWin=open(d,e,"dependent\x3dyes,toolbar\x3dyes,location\x3dno,directory\x3dno,status\x3dno,menubar\x3dyes,scrollbars\x3dyes,resizable\x3dyes,top\x3d"+sTop+",left\x3d"+sLeft+",width\x3d"+b+",height\x3d"+c);oNewWin.focus()};
idealista.comun.goTo=function(a,b){var c=document.frmHtml||dojo.byId("frmHtml");b&&""!=b&&(c.paginahtml.value=b);c.action=a;c.submit()};idealista.comun.getSibling=function(a,b){if("next"==a)for(;(b=b.nextSibling)&&1!=b.nodeType;);else for(;(b=b.previousSibling)&&1!=b.nodeType;);return b};idealista.comun.wrapElement=function(a,b){var c=document.createElement("DIV");a.parentNode.insertBefore(c,a);c.appendChild(a);b&&dojo.mixin(c,b);return c};
idealista.comun.highlightNode=function(a){dojo.fx.chain([dojo.animateProperty({node:a,duration:800,properties:{backgroundColor:{start:"#ffffbb",end:"#ffff99"}}}),dojo.animateProperty({node:a,duration:800,properties:{backgroundColor:{start:"#ffff99",end:"#ffffff"}}})]).play()};idealista.comun.formatValueFriendlyNumbersFields=function(){dojo.query("._frNumber").forEach(function(a){a.value=idealista.comun.formatFriendlyNumbers(a.value)})};
idealista.comun.unFormatValueFriendlyNumbersFields=function(){dojo.query("._frNumber").forEach(function(a){a.value=idealista.comun.unFormatFriendlyNumbers(a.value)})};idealista.comun.formatFriendlyNumbers=function(a){for(var b=/(\d+)(\d{3})/;b.test(a);)a=a.replace(b,"$1.$2");return a};idealista.comun.unFormatFriendlyNumbers=function(a){for(var b=/\./;b.test(a);)a=a.replace(b,"");return a};
idealista.comun.initBreadcrumbGeoWidget=function(){dojo.byId("w_bc_dropDown")&&new idealista.widget.dropdown({id:"w_bc_dropDown",title:dojo.byId("w_bc_dropDown").getAttribute("title")},dojo.byId("w_bc_dropDown"))};idealista.comun.throwError=function(a,b){var c=Error();c.name=a;c.message=b;throw c;};
idealista.comun.fillSelectFromArray=function(a,b,c,d){var e,f,g,k=!1,h;for(e=a.options.length;0<=e;e--)a.options[e]=null;f=1;a.options[0]=new Option(js_select);a.options[0].value="";-1!=d.indexOf(".")&&(k=!0,h=d.split("."));if(null!=b){for(e=0;e<b.length;e++){var l=b[e][c];if(4<arguments.length)for(g=4;g<arguments.length;g++)l=l+" "+b[e][arguments[g]];a.options[f]=new Option(l);!0==k?2==h.length?a.options[f].value=b[e][h[0]][h[1]]:3==h.length?a.options[f].value=b[e][h[0]][h[1]][h[2]]:4==h.length&&
(a.options[f].value=b[e][h[0]][h[1]][h[2]][h[3]]):a.options[f].value=b[e][d];f++}a.options[0].selected=!0}};idealista.comun.fillSelectFromJson=function(a,b,c,d){var e;c&&(e=document.createElement("option"),c=document.createTextNode(c),e.appendChild(c),d&&e.setAttribute("value",d),dojo.byId(a).appendChild(e));for(d=0;d<b.options.length;d++)e=document.createElement("option"),c=document.createTextNode(b.options[d].text),e.appendChild(c),e.setAttribute("value",b.options[d].value),dojo.byId(a).appendChild(e)};
idealista.comun.clearSelect=function(a,b,c){for(var d=a.options.length;0<=d;d--)a.options[d]=null;b&&(a.options[0]=new Option(b),a.options[0].pValue=""==c||c?c:b)};idealista.comun.showWarningWindow=function(a){var b=document.createElement("div");b.setAttribute("id","cWarning");document.body.appendChild(b);new idealista.widget.warning({texto:a},dojo.byId("cWarning"));dijit.byId("cWarning").show();dojo.connect(dojo.byId("iBotonAviso"),"onclick",function(){idealista.comun.hideWarningWindow()})};
idealista.comun.hideWarningWindow=function(){dijit.byId("cWarning").destroy()};idealista.comun.isCookiesEnabled=function(){var a=navigator.cookieEnabled?!0:!1;"undefined"!=typeof navigator.cookieEnabled||a||(document.cookie="testcookie",a=-1!=document.cookie.indexOf("testcookie")?!0:!1);return a};
idealista.comun.getCookie=function(a){var b=document.cookie.indexOf(a+"\x3d"),c=b+a.length+1,d=document.cookie.indexOf(";",c);if(!b&&a!=document.cookie.substring(0,a.length)||-1==b)return null;-1==d&&(d=document.cookie.length);return unescape(document.cookie.substring(c,d))};idealista.comun.deleteCookie=function(a,b,c){idealista.comun.getCookie(a)&&(document.cookie=a+"\x3d"+(b?";path\x3d"+b:"")+(c?";domain\x3d"+c:"")+";expires\x3dThu, 01-Jan-1970 00:00:01 GMT")};idealista.comun.isDevice=function(){return!!navigator.userAgent.toLowerCase().match(/android|iphone|ipad|ipod|blackberry|symbianos/i)};
idealista.comun.showInformationAnimated=function(a){};idealista.comun.URLencode=function(a){return window.escape(a)};
idealista.comun.serializeForm=function(a){var b=dojo.query("input[type\x3dtext],input[type\x3dpassword],input[type\x3dradio],input[type\x3dcheckbox],input[type\x3dhidden],textarea,select",a),c="";dojo.forEach(b,function(a,e){var f=dojo.trim(a.value);0!=f.length&&("checkbox"!=a.getAttribute("type")&&"radio"!=a.getAttribute("type")||a.checked)?(c+=a.name+"\x3d"+idealista.comun.URLencode(f),e<b.length-1&&(c+="\x26")):c+=""});return c};
idealista.comun.getAncestorByClassName=function(a,b){for(var c=a.parentNode;c;){if(dojo.hasClass(c,b))return c;c=c.parentNode}};idealista.comun.getAncestorByTagName=function(a,b){for(var c=a.parentNode;c;){if(c.tagName==b)return c;c=c.parentNode}};
idealista.comun.setContainerHTML=function(a,b){dojo.byId(a).innerHTML=b;for(var c=dojo.query("script",dojo.byId(a)),d=0;d<c.length;d++){var e=c[d],f=document.createElement("script");f.setAttribute("type","text/javascript");null!=e.getAttribute("src")&&0<e.getAttribute("src").length&&f.setAttribute("src",e.getAttribute("src"));var g=document.createTextNode(e.innerHTML);f.appendChild(g);e.parentNode.replaceChild(f,e)}};
idealista.comun.enabledButtonFormChange=function(a,b){dojo.query("select",a).forEach(function(a){dojo.connect(a,"onchange",function(){dojo.attr(dojo.byId(b),"disabled",!1)})});dojo.query('input[type\x3d"checkbox"], input[type\x3d"radio"]',a).forEach(function(a){dojo.connect(a,"onclick",function(){dojo.attr(dojo.byId(b),"disabled",!1)})});dojo.query('input[type\x3d"text"], input[type\x3d"password"], textarea',a).forEach(function(a){function d(){a.value!==e&&dojo.attr(dojo.byId(b),"disabled",!1)}var e=
a.value;dojo.connect(a,"onkeyup",d);dojo.connect(a,"onblur",d);dojo.connect(a,"onfocus",d);dojo.connect(a,"onchange",d)})};idealista.comun.blockScreen=function(a){var b=dojo.byId("block-layer")||null;a?(b||(b=dojo.create("div",{id:"block-layer"},dojo.body()),dojo.addClass(b,"is-hidden")),dojo.style(b,"height",dojo.position(dojo.body()).h+"px"),dojo.removeClass(b,"is-hidden")):b&&dojo.addClass(b,"is-hidden")};
idealista.comun.goToAnchor=function(a,b,c){dojo.require("dojox.fx");dojo.require("dojox.fx.scroll");dojo.require("dojox.fx.easing");a=dojo.query(a);1==a.length?dojo.connect(a[0],"onclick",function(a){dojo.stopEvent(a);dojox.fx.smoothScroll({node:b,win:window,duration:c,easing:dojox.fx.easing.circOut}).play()}):a.forEach(function(a){dojo.connect(a,"onclick",function(a){dojo.stopEvent(a);dojox.fx.smoothScroll({node:b,win:window,duration:c,easing:dojox.fx.easing.circOut}).play()})})};
idealista.comun.initLoginInPlaceWidget=function(){var a=dojo.query("div[dt\x3didealista.widget.loginbox]");0<a.length&&(dojo.require("idealista.widget.loginbox"),dojo.extend(idealista.widget.loginbox,{postCreate:function(){var a=this;dojo.connect(this.oBtSubmit,"onclick",function(c){c.preventDefault();dojo.byId("id_apuntadoF")&&dojo.byId("id_apuntadoF").checked?a.sendNoUser():a.send()});this.inherited("postCreate",arguments)}}),a.forEach(function(a){a.setAttribute("dojoType","idealista.widget.loginbox")}),
dojo.parser.parse(dojo.byId("login-boxes")))};
idealista.comun.modalPopUp=function(a,b){var c=dojo.byId("overlay-layer"),d=dojo.byId("modalPopUp"),e=dojo.query(".closeModalPopUP");"big"==b?dojo.addClass(d,"modalBig"):"small"==b&&dojo.addClass(d,"modalSmall");c&&dojo.removeClass(c,"is-hidden");dojo.removeClass(d,"is-hidden");var f=dojo.style(d,"height");dojo.style(d,{width:a+"px",top:"50%",left:"50%",margin:"-"+f/2+"px 0 0 -"+a/2+"px"});e.forEach(function(a){dojo.connect(a,"onclick",function(a){a.preventDefault();c&&dojo.addClass(c,"is-hidden");
dojo.addClass(d,"is-hidden")})})};idealista.comun.highlightNode=function(a,b,c,d){b||(b="#ffffbb");c||(c="#ffff99");d||(d="#ffffff");dojo.fx.chain([dojo.animateProperty({node:a,duration:800,properties:{backgroundColor:{start:b,end:c}}}),dojo.animateProperty({node:a,duration:800,properties:{backgroundColor:{start:c,end:d}}})]).play()};
idealista.comun.utilitiesButtom=function(){dojo.byId("iUtilities")&&(dojo.extend(idealista.widget.dropdown,{postCreate:function(){6==dojo.isIE&&(this.hoverClassName=this.domNode.className+"_hover",this.openClassName=this.domNode.className+"_open");"right"==this.orientation&&dojo.addClass(this.domNode,"rightOrientation");this.noLink&&dojo.addClass(dojo.query("#"+this.domNode.id+" .dropdown")[0],"no_link");this.loadWithAjax&&dojo.addClass(dojo.query("#"+this.domNode.id+" .c_dropdown_inner")[0],"loadingAjax");
this._onClickListener=dojo.connect(dojo.query("#"+this.domNode.id+" .dropdown")[0],"onclick",this,"_onClick");dojo.query(".switchButton",this.domNode)[0]&&(this._onButtonClickListener=dojo.connect(dojo.query("#"+this.domNode.id+" .switchButton")[0],"onclick",this,"_onClick"));this._onAMouseoverListener=dojo.connect(dojo.query("#"+this.domNode.id+" .dropdown")[0],"onmouseover",this,"_onAMouseover");this._onButtonMouseoverListener=dojo.connect(dojo.query("#"+this.domNode.id+" .switchButton")[0],"onmouseover",
this,"_onButtonMouseover");this._onAMouseoutListener=dojo.connect(dojo.query("#"+this.domNode.id+" .dropdown")[0],"onmouseout",this,"_onAMouseout");this._onButtonMouseoutListener=dojo.connect(dojo.query("#"+this.domNode.id+" .switchButton")[0],"onmouseout",this,"_onButtonMouseout");dojo.hasClass(this.domNode,"idealista_dropdown")&&(this._onContentMouseoutListener=dojo.connect(this.domNode,"onmouseout",this,"_onContentMouseout"));22<this.domNode.title.length&&(dojo.query("#"+this.domNode.id+" .dropdown span")[0]?
dojo.query("#"+this.domNode.id+" .dropdown span")[0].innerHTML=this.domNode.title.substring(0,19)+"...":dojo.query("#"+this.domNode.id+" .dropdown")[0].innerHTML=this.domNode.title.substring(0,19)+"...");dojo.style(dojo.byId("utilidades-carga"),"display","none");this.inherited("postCreate",arguments)},_onAMouseover:function(){dojo.addClass(this.domNode,this.hoverClassName);dojo.query(".switchButton",this.domNode)[0]&&dojo.addClass(dojo.query(".switchButton",this.domNode)[0],this.buttonHoverClassName);
dojo.hasClass(this.domNode,"idealista_dropdown")&&this._show()},_onAMouseout:function(){dojo.removeClass(this.domNode,this.hoverClassName);dojo.query(".switchButton",this.domNode)[0]&&dojo.removeClass(dojo.query(".switchButton",this.domNode)[0],this.buttonHoverClassName)}}),new idealista.widget.dropdown({id:"iUtilities",title:dojo.byId("iUtilities").getAttribute("title")},dojo.byId("iUtilities")));dojo.byId("iLanguage")&&new idealista.widget.dropdown({id:"iLanguage",title:dojo.byId("iLanguage").getAttribute("title")},
dojo.byId("iLanguage"))};
idealista.comun.manageEmailConfirm=function(){if($){var a=$("#email-checking");if(0<a.length){var b=$("p",a),c=$(".i-container",a),d=function(d){a.addClass("ok");c.removeClass("icon-feedbk-alert");c.addClass("icon-feedbk-ok");b.text(d.message);a.find("a").remove()},e=function(b){a.addClass("error");c.removeClass("icon-feedbk-ok");c.addClass("icon-feedbk-ko")};$("a",a).on("click",function(b){b.preventDefault();a.addClass("loading");$.ajax({url:"/confirm-email-send-message-ajax",type:"POST"}).always(function(b){a.removeClass("loading")}).done(function(a){switch(a.status){case "SENT":d(a);
break;case "NOTSENT":d(a);break;case "ERROR":e(a)}}).fail(function(a){e(a)})})}}};idealista.comun.manageXitiClicks=function(a){a&&a.xtpage&&window.xt_med&&xt_med("C",null,a.xtpage,"A")};
idealista.comun.manageXitiPrimaryConversionsAjax=function(a){var b="0.00000001",c="defaultTransaction";if(a&&a.xtpage&&0<a.xtpage.length){var d=a.xtpage;for(i=0;i<d.length;i++){if(a.roimt&&0<a.roimt.length){var e=a.roimt;e.length>i&&(b=e[i])}a.xtncom&&0<a.xtncom.length&&(e=a.xtncom,e.length>i&&(c=e[i]));this.sendXitiInfo(null,d[i],b,c)}}};
idealista.comun.manageXitiSecondaryConversionsAjax=function(a){if(a&&a.xtpage&&0<a.xtpage.length)for(a=a.xtpage,i=0;i<a.length;i++)idealista.comun.sendXitiInfo(null,a[i])};
idealista.comun.manageXitiPrimaryConversions=function(){var a="0.00000001",b="defaultTransaction";if("undefined"!==typeof xt_requestXtPage&&0<xt_requestXtPage.length){var c=xt_requestXtPage;for(i=0;i<c.length;i++){var d=c[i];"undefined"!==typeof xt_requestRoimt&&0<xt_requestRoimt.length&&(a=xt_requestRoimt,a=a.length>i?a[i]:"0.00000001");"undefined"!==typeof xt_requestXtncom&&0<xt_requestXtncom.length&&(b=xt_requestXtncom,b=b.length>i?b[i]:"defaultTransaction");idealista.comun.sendXitiInfo(null,d,
a,b)}}};idealista.comun.manageXitiSecondaryConversions=function(){if("undefined"!==typeof xt_requestXtPage&&0<xt_requestXtPage.length){var a=xt_requestXtPage;for(i=0;i<a.length;i++)idealista.comun.sendXitiInfo(null,a[i])}};idealista.comun.manageXitiPageMarkerLink=function(a){if(a&&a.length)for(a=a.split(","),i=0;i<a.length;i++)idealista.comun.sendXitiInfo(null,a[i])};
idealista.comun.manageXitiClicksLink=function(a,b){if(a&&0<a.length){var c=a.split(",");for(i=0;i<c.length;i++)window.xt_med&&xt_med("C",b,a,"A")}};idealista.comun.manageXitiNavigationLink=function(a,b,c){};idealista.comun.manageXitiAutopromoLink=function(a,b){};idealista.comun.manageXitiSubmit=function(a,b,c){};
idealista.comun.sendXitiInfo=function(a,b,c,d){b&&""!==b?window.xt_med&&(null!=c&&null!=d?xt_conversion(this,"F","",b+"\x26roimt\x3d"+c+"\x26cmd\x3d"+d):window.xt_med&&xt_med("F","",b)):a.xtpage&&""!==a.xtpage&&window.xt_med&&(null!=a.roimt&&null!=a.xtncom?(a=a.xtpage+"\x26roimt\x3d"+a.roimt+"\x26cmd\x3d"+a.xtncom,xt_conversion(this,"F","",a)):xt_med("F","",a.xtpage))};
idealista.test={running:!1,time:new Date,logTime:function(a){idealista.test.time=new Date;console.log("["+idealista.test.time.toLocaleTimeString()+"."+idealista.test.time.getMilliseconds()+"]",a)},errorTime:function(a){idealista.test.time=new Date;console.error("["+idealista.test.time.toLocaleTimeString()+"."+idealista.test.time.getMilliseconds()+"]",a)},infoTime:function(a){idealista.test.time=new Date;console.info("["+idealista.test.time.toLocaleTimeString()+"."+idealista.test.time.getMilliseconds()+
"]",a)}};dojo.isIE&&5<dojo.isIE?document.attachEvent("onreadystatechange",function(a){"complete"==document.readyState&&(idealista.comun.iniciar(),idealista.comun.resetStatusMsg(),idealista.comun.handleServicesDropdown())}):(dojo.connect(document,"DOMContentLoaded",function(a){idealista.comun.iniciar()}),dojo.connect(document,"DOMContentLoaded",function(a){idealista.comun.handleServicesDropdown()}));
Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=this.length,d=b||window,e=0;e<c;e++)a.call(d,this[e],e,this)});Array.prototype.indexOf||(Array.prototype.indexOf=function(a){for(var b=this.length;b--;)if(this[b]===a)return b;return-1});Array.from||(Array.from=function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d]=a[d];return c});var Ilc={nameSpace:function(a,b){var c=a.split(".");b=b||window;for(var d=c.length,e=0;e<d;e++)b[c[e]]=b[c[e]]||{},b=b[c[e]];return b}};Ilc.nameSpace("Ilc.Dom");
Ilc.Dom.Commons={query:function(a){try{return Array.prototype.slice.call(document.querySelectorAll(a))}catch(b){return dojo.query(a)}}};
Ilc.Dom.Text={_defaultText:function(){Ilc.Dom.Commons.query("input[type\x3dtext][data-default-text], textarea[data-default-text]").forEach(function(a){var b=dojo.attr(a,"data-default-text");dojo.attr(a,"autocomplete","off");if(document.activeElement!=a&&""===dojo.trim(a.value)||a.value===b)dojo.addClass(a,"defaultText"),a.value=b;dojo.connect(a,"onfocus",function(){dojo.hasClass(a,"defaultText")&&(dojo.removeClass(a,"defaultText"),a.value="")});dojo.connect(a,"onblur",function(){""===a.value&&(dojo.addClass(a,
"defaultText"),a.value=b)})})},_charsLeft:function(){},initialize:function(){this._defaultText()}};Ilc.Dom.Number={_friendlyInput:function(){}};
Ilc.Dom.Xiti={_click:function(){Ilc.Dom.Commons.query("[data-xiti-click]").forEach(function(a){dojo.connect(a,"click",function(b){b=dojo.attr(a,"data-xiti-click");var c=dojo.attr(a,"data-xiti-shared-n2")?xtn2:"";idealista.comun.manageXitiClicksLink(b,c)})})},_page:function(){Ilc.Dom.Commons.query("[data-xiti-page]").forEach(function(a){dojo.connect(a,"click",function(b){b=dojo.attr(a,"data-xiti-page");var c=dojo.attr(a,"data-xiti-shared-n2")?xtn2:"";idealista.comun.manageXitiPageMarkerLink(b,c)})})},
_navigation:function(){Ilc.Dom.Commons.query("[data-xiti-navigation]").forEach(function(a){dojo.connect(a,"click",function(b){b.preventDefault();b=dojo.attr(a,"data-xiti-navigation");var c=dojo.attr(a,"data-xiti-shared-n2")?xtn2:"";idealista.comun.manageXitiNavigationLink(this,b,c)})})},_autopromo:function(){Ilc.Dom.Commons.query("[data-xiti-autopromo]").forEach(function(a){dojo.connect(a,"click",function(b){b=dojo.attr(a,"data-xiti-autopromo");idealista.comun.manageXitiAutopromoLink(this,b)})})},
_submit:function(){Ilc.Dom.Commons.query("[data-xiti-submit]").forEach(function(a){dojo.connect(a,"submit",function(b){b.preventDefault();b=dojo.attr(a,"data-xiti-submit");var c=dojo.attr(a,"data-xiti-shared-n2")?xtn2:"";idealista.comun.manageXitiSubmit(this,b,c)})})},_page_conversion:function(){Ilc.Dom.Commons.query("[page-xiti-conversion]").forEach(function(a){var b=dojo.attr(a,"page-xiti-conversion");a=dojo.attr(a,"data-xiti-shared-n2")?xtn2:"";idealista.comun.manageXitiPageMarkerLink(b,a)})},
initialize:function(){this._click();this._page();this._navigation();this._autopromo();this._submit();this._page_conversion()}};dojo.addOnLoad(function(){idealista.comun.manageTabs("nav_1");idealista.comun.utilitiesButtom();Ilc.Dom.Text.initialize();modules&&modules.Xiti||Ilc.Dom.Xiti.initialize()});dojo.addOnLoad(function(){idealista.comun.manageEmailConfirm()});var dds=[];$(function(){$("select.dropdown").each(function(){dds.push(new modules.dropdown({$el:this}))})});