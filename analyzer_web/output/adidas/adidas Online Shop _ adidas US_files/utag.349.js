//tealium universal tag - utag.349 ut4.0.201907241358, Copyright 2019 Tealium.com Inc. All Rights Reserved.
var monetateT=new Date().getTime();try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.map={"tag_id":"domain","page_type":"page_type","breadcrumb":"breadcrumb","environment":"environment"};u.extend=[function(a,b){try{if(1){try{b['tag_id']="adidas."+b.country.toLowerCase()+(b.environment!='PRODUCTION'?'.test':'')}catch(e){};try{b['environment']=b.environment!='PRODUCTION'?'d':'p'}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['page_type'].toString().toLowerCase()=='SHOPPING CART'.toLowerCase()){try{b['page_type']=b.page_name.indexOf('MINICART')>-1?'MINICART':'CART'}catch(e){}}}catch(e){utag.DB(e)}},function(a,b){if(b['analytics_pagename']=='CHECKOUT|CONFIRMATION'&&a=='view'){return false;}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){u.data={"account":"a-24f48522","domain":"adidas.us","number":873205,"environment":"p","event_data":[]}
for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)
return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.order_id||b._corder||"";u.data.sku=u.data.sku||(typeof b._csku!="undefined"?b._csku.slice(0):[]);u.data.prod=u.data.prod||(typeof b._cprod!="undefined"?b._cprod.slice(0):[]);for(var i=0;i<u.data.prod.length;i++){u.data.prod[i]=u.data.prod[i].replace(/^[^!-~]+$/,"");}
u.data.price=u.data.price||(typeof b._cprice!="undefined"?b._cprice.slice(0):[]);u.data.quan=u.data.quan||(typeof b._cquan!="undefined"?b._cquan.slice(0):[]);u.data.currency=b._ccurrency||'';window.monetateQ=window.monetateQ||[];window.monetateQ.push(["setPageType",u.data.page_type]);if(u.data.breadcrumb){window.monetateQ.push(['addBreadcrumbs',u.data.breadcrumb]);}
if(u.data.order_id){var cartList=[];for(var i=0;i<u.data.prod.length;i++){cartList.push({"productId":u.data.prod[i],"quantity":u.data.quan[i]||'1',"unitPrice":u.data.price[i]||'0.00',"sku":u.data.sku[i]||'',"purchaseId":u.data.order_id,"currency":u.data.currency});}
window.monetateQ.push(['addPurchaseRows',cartList]);}else if(u.data.page_type=='PLP'||u.data.page_type=='SEARCH'){window.monetateQ.push(['addProducts',u.data.prod]);}else if(u.data.page_type=='PDP'){window.monetateQ.push(['addProductDetails',u.data.prod]);}else if(u.data.page_type=='CART'||u.data.page_type=='MINICART'){if(!u.data.breadcrumb&&utag.data.breadcrumb){window.monetateQ.push(['addBreadcrumbs',utag.data.breadcrumb]);}
var cartList=[];for(var i=0;i<u.data.prod.length;i++){cartList.push({"productId":u.data.prod[i],"quantity":u.data.quan[i]||'1',"unitPrice":u.data.price[i]||'0.00',"currency":u.data.currency});}
window.monetateQ.push(['addCartRows',cartList]);}
window.monetateQ.push(["trackData"]);if(!utag.data.glass_version){var elem=document.createElement('div');elem.id='monetateTrigger';document.body.appendChild(elem)}
if(!u.initialized&&!utag.data.monetate_loaded){u.base_url=((location.protocol=="https:")?"https://s":"http://")+"e.monetate.net/js/2/"+u.data.account+"/"+u.data.environment+"/"+u.data.domain+"/custom.js";u.s=document.getElementsByTagName("script")[0];u.scr=document.createElement("script");u.scr.type="text/javascript";u.scr.src=u.base_url;u.s.parentNode.insertBefore(u.scr,u.s);u.initialized=true;}}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('349','adidas.adidasglobal');}catch(e){}