//tealium universal tag - utag.1269 ut4.0.201901091947, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){u.initialized=true;obApi('track','PAGE_VIEW');if(utag.data.loadRules.dnaConfirmationPage&&utag.data.flow_type.indexOf('dna')!=-1){obApi('track','DNA Purchase')};if(utag.data.loadRules.FtHoConfirmation&&(utag.data.flow_type.indexOf('free')!=-1||utag.data.flow_type.indexOf('offer')!=-1)){obApi('track','ACOMSignup')};};if(!u.initialized){!function(_window,_document){var OB_ADV_ID='007ba87ad80b2e3ee0b7b8afa1c89e6085';if(_window.obApi){var toArray=function(object){return Object.prototype.toString.call(object)==='[object Array]'?object:[object];};_window.obApi.marketerId=toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));return;}
var api=_window.obApi=function(){api.dispatch?api.dispatch.apply(api,arguments):api.queue.push(arguments);};api.version='1.1';api.loaded=true;api.marketerId=OB_ADV_ID;api.queue=[];var tag=_document.createElement('script');tag.async=true;tag.src='//amplify.outbrain.com/cp/obtp.js';tag.type='text/javascript';var script=_document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag,script);}(window,document);u.loader_cb();}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("1269","ancestry.main");}catch(error){utag.DB(error);}
