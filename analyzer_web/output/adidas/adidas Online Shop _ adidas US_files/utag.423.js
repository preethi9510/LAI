//tealium universal tag - utag.423 ut4.0.201909111219, Copyright 2019 Tealium.com Inc. All Rights Reserved.
window._da_=window._da_||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.map={"page_type":"Page Type","analytics_pagename":"Page Name","previous_page_name":"Previous Page Name","_cprod":"Product ID","customer_status":"Login Status","sort_applied":"Sort Applied","euci":"EUCI","filters_applied":"Filter List","form_error":"Form Error","form_name":"Form Name","site_promotion_id_decibel":"Promotion ID","navigation_element_decibel":"Navigation Element Name"};u.extend=[function(a,b){try{if(1){if(b.glass_version){function hookHistory(){utag.history=window.history||{};const history=utag.history;if(typeof history.pushState==="function"){history.pushState=(function(_pushState){return function(state,title,url){if(window.decibelInsight){decibelInsight('pauseRecording');}
return _pushState.apply(this,arguments);};})(history.pushState);}
if(typeof history.replaceState==="function"){history.replaceState=(function(_replaceState){return function(state,title,url){if(window.decibelInsight){decibelInsight('pauseRecording');}
return _replaceState.apply(this,arguments);};})(history.replaceState);}
if(typeof history.go==="function"){history.go=(function(_go){return function(index){if(window.decibelInsight){decibelInsight('pauseRecording');}
return _go.apply(this,arguments);};})(history.go);}
if(typeof history.back==="function"){history.back=(function(_back){return function(){if(window.decibelInsight){decibelInsight('pauseRecording');}
return _back.apply(this,arguments);};})(history.back);}
if(typeof history.forward==="function"){history.forward=(function(_forward){return function(){if(window.decibelInsight){decibelInsight('pauseRecording');}
return _forward.apply(this,arguments);};})(history.forward);}}
hookHistory()}
}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(a=='view'){if(b.page_name=='MINICART OVERLAY'){b.page_type=b.page_name;}
utag.data.di_page_type=b.page_type;}
function toTitleCase(str){return str.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();});}
u.decibel_insight_dimensions=function(){for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){decibelInsight('sendCustomDimension',e[f],b[d]);}}}
if(b.monetate_active_experiments){var monetate_active_experiments=b.monetate_active_experiments.split('|');for(var i=0;i<monetate_active_experiments.length;i++){var monetate_active_experiments_item=monetate_active_experiments[i].split('::');decibelInsight('sendIntegrationData','GenericIntegration',{id:monetate_active_experiments_item[0],name:monetate_active_experiments_item.splice(1).join('::')});}}
if(a=='view'&&b.page_type=='ERROR'){decibelInsight('sendHTTPError',b.page_name.replace(' ERROR','').trim());}
if(window.decibelInsight&&decibelInsight.sendPageGroup){decibelInsight.sendPageGroup(b.page_type,4);}};u.decibel_insight_dispatch_goals=function(goals){if(goals&&goals.length>0){for(var i=0;i<goals.length;i++){decibelInsight('sendGoal',goals[i].name,goals[i].value||'0');}}};u.decibel_insight_set_goals=function(){var goals=[];if(a=='view'){if(b.site_promotion_id_decibel&&b.site_promotion_id_decibel.length>0){if(b.site_promotion_id_decibel.indexOf('customer_info')>-1){goals.push({name:'Navigation - Customer Info Click'});}else{goals.push({name:'Promotion - Site Promotion Click'});}}
if(b.navigation_element_decibel&&b.navigation_element_decibel.length>0){if(b.navigation_element_decibel.indexOf('footer')>-1){goals.push({name:'Navigation - Footer Click'});}else if(b.navigation_element_decibel.indexOf('header')>-1){goals.push({name:'Navigation - Header Click'});}else if(b.navigation_element_decibel.indexOf('customer_info')>-1){goals.push({name:'Navigation - Customer Info Click'});}}
if(b['qp.pr']&&b.page_name!='MINICART OVERLAY'){goals.push({name:'Certona - Product Recommendations Click'});}
if(b.page_type=='PLP'){goals.push({name:'Ecommerce  - PLP View'});}else if(b.page_type=='SHOPPING CART'){if(b.page_name=='CART'){var value_eur=parseFloat(b.currency_code=='EUR'?b.order_subtotal:tealiumiq_currency.convert(b.order_subtotal,b.currency_code,'EUR'));goals.push({name:'Ecommerce  - Non Empty Cart View'
});}else if(b.page_name=='EMPTY CART'){goals.push({name:'Ecommerce  - Empty Cart View'});}
if(b.page_name!='MINICART OVERLAY'){goals.push({name:'Ecommerce  - Shopping Cart View'
});}}else if(b.page_type=='CHECKOUT'){var value_eur=0;if(b.order_id){value_eur=parseFloat(b.currency_code=='EUR'?b.order_subtotal:tealiumiq_currency.convert(b.order_subtotal,b.currency_code,'EUR'));b.analytics_pagename='ORDER';}
if(b.page_name.indexOf('VERIFY ADDRESS')>-1){b.page_name='VERIFY ADDRESS';}
if(b.page_name.indexOf('CONFIRM ORDER')>-1){b.page_name='CLICK AND COLLECT OVERLAY';}
var goal_name='';if(b.page_name.match(/VERIFY ADDRESS|SESSION/)!=null){goal_name=toTitleCase(b.page_type+' - '+b.page_name);}else{goal_name='Ecommerce - '+toTitleCase(b.analytics_pagename.replace(/\|/gi,' '));}
if(b.order_id&&value_eur>0){goals.push({name:goal_name,value:value_eur});}else{goals.push({name:goal_name});}}
if(b.search_term){goals.push({name:'Navigation - Search Applied'});}
if(b.page_type=='PRODUCT REVIEW'&&b.page_name=='REVIEW START'){goals.push({name:'Form - Product Review Start'});}}else if(a=='link'){if(b.signup_step&&b.signup_step=='SUCCESS'){goals.push({name:'Form - Newsletter Signup'});}else if(b.event_name){if(b.event_name.match(/CHAT BUTTON CLICKED|ADD TO CART|DELETE PRODUCT/i)!=null){goals.push({name:((b.event_name=='CHAT BUTTON CLICKED'?'Chat - ':'Ecommerce - ')+toTitleCase(b.event_name))});}else if(b.event_name.indexOf('ADD TO WISHLIST')>-1){goals.push({name:'Ecommerce - Add To Wishlist'});}
if(b.event_category=='PRODUCT REVIEW'&&b.event_name=='REVIEW COMPLETE'){goals.push({name:'Form - Product Review Complete'});}}}
if(b.form_error&&b.form_error.length>0){goals.push({name:'Form - Form Error'});}
u.decibel_insight_dispatch_goals(goals);}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var formTracking=document.querySelectorAll('form');for(var i=0;i<formTracking.length;i++){if(formTracking[i].id){formTracking[i].setAttribute("data-di-form-track","");formTracking[i].setAttribute("data-di-form-id",formTracking[i].id);if(formTracking[i].id.match(/dwfrm_profile|dwform_shipping|shippingForm|adyen-encrypted-form/gi)!=null){var inputs=formTracking[i].querySelectorAll('input');for(var j=0;j<inputs.length;j++){if(inputs[j].id){var current_id=inputs[j].id;if(formTracking[i].id=='dwform_shipping'||formTracking[i].id=='shippingForm'){current_id=current_id.split('_');if(current_id.length>=6){current_id.pop();}
inputs[j].setAttribute('data-di-field-id',current_id.join('_'));}else if(current_id.match(/ageconfirmation_|profile_customer_amf_|_adyenencrypted_|_email_emailAddress_/)!=null){current_id=current_id.split('_');if(current_id.length>2&&current_id[current_id.length-2]!='adyenencrypted'){current_id.pop();}
inputs[j].setAttribute('data-di-field-id',current_id.join('_'));}}else if(inputs[j].name){var current_name=inputs[j].name;if(formTracking[i].id=='dwform_shipping'||formTracking[i].id=='shippingForm'){current_name=current_name.split('_');if(current_name.length>=6){current_name.pop();}else if(current_name.join('_').match(/selectedDeliveryMethodID|selectedShippingType/)!=null){current_name.pop();}else if(current_name.indexOf('shiptopudo')>-1){if(current_name.join('_').match(/billingAddress_(country|city|firstName|lastName|phone|postalCode|pudoPostNumber)/)!=null){current_name.pop();}}
inputs[j].setAttribute('data-di-field-id',current_name.join('_'));}}}}}}
}}catch(e){utag.DB(e)}},function(a,b){if(b['analytics_pagename']=='CHECKOUT|CONFIRMATION'&&a=='view'){return false;}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"https://cdn.decibelinsight.net/i/##utag_account##/di.js","da_accountId":"13822","da_propertyId":"221118","di":"decibelInsight"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};if(!u.initialized){u.initialized=true;window._da_.oldErr=window.onerror;window._da_.err=[];window.onerror=function(){_da_.err.push(arguments);_da_.oldErr&&_da_.oldErr.apply(d,Array.prototype.slice.call(arguments));};_da_.noAutoPageTrack=_da_.noAutoPageTrack||true;window.DecibelInsight=u.data.di;window[u.data.di]=window[u.data.di]||function(){(window[u.data.di].q=window[u.data.di].q||[]).push(arguments);};}
u.callback=function(){if(a=='view'&&window.decibelInsight&&decibelInsight.trackPageView){decibelInsight.trackPageView();decibelInsight.resumeRecording();u.decibel_insight_dimensions();}
u.decibel_insight_set_goals();}
if(u.data.da_accountId&&!u.loaded){if(u.data.da_propertyId){u.data.base_url="https://cdn.decibelinsight.net/i/##utag_account##/##utag_property##/di.js";u.data.base_url=u.data.base_url.replace("##utag_property##",u.data.da_propertyId);}
u.data.base_url=u.data.base_url.replace("##utag_account##",u.data.da_accountId);u.loader({"type":"script","src":u.data.base_url,"cb":u.callback,"loc":"script","id":"utag_423"});u.loaded=true;}else if(u.loaded){u.callback();}else{utag.DB("Tag 423 - Missing Account ID");}
}};utag.o[loader].loader.LOAD(id);}("423","adidas.adidasglobal"));}catch(error){utag.DB(error);}
