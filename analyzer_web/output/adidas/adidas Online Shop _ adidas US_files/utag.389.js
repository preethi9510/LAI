//tealium universal tag - utag.389 ut4.0.201909131341, Copyright 2019 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}
if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}
if(o.id){b.id=o.id;}
if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}
l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"live_agent_widgetUrl":"base_url","country":"countryCode","language":"languageCode","site_name":"brandName"};u.extend=[function(a,b){try{if(b['environment'].toString().indexOf('STAGING')>-1||b['environment'].toString().indexOf('PRODUCTION')>-1){b['live_agent_base_url']='https://adidas.my.salesforce.com';b['live_agent_orgId']='00D20000000mJS8';b['live_agent_initURL']='https://d.la1-c1-cdg.salesforceliveagent.com/chat';b['live_agent_contentURL']='https://c.la1-c1-cdg.salesforceliveagent.com/content'}}catch(e){utag.DB(e)}},function(a,b){try{if(b['environment'].toString().indexOf('STAGING')>-1||b['environment'].toString().indexOf('PRODUCTION')>-1){if(b.country=='US'){b.live_agent_siteURL='https://www.contactus.adidas.com/adidasUSContact';}else if(b.country=='NZ'||b.country=='AU'){b.live_agent_siteURL='https://www.contactus.adidas.com/APAC';}else if(b.country=='AR'||b.country=='MX'||b.country=='PE'||b.country=='CL'||b.country=='CO'){b.live_agent_siteURL='https://www.contactus.adidas.com/LAM';}else if(b.country=='RU'){b.live_agent_siteURL='https://www.contactus.adidas.com/adidasContact';}else if(b.country=='TR'){b.live_agent_siteURL='https://www.contactus.adidas.com/TR';}else if(b.country=='MY'||b.country=='PH'||b.country=='SG'||b.country=='TH'){b.live_agent_siteURL='https://www.contactus.adidas.com/SEA';}else{b.live_agent_siteURL='https://www.contactus.adidas.com/EMEA';}
var d=new Date();var n=d.getDate().toString()+d.getMonth().toString();b.live_agent_widgetUrl='https://www.contactus.adidas.com/adidasContact/servlet/servlet.FileDownload?file=0150O00000453b2&v='+n;var sales_button_pages=['HOME','PDP','PLP','CLP','SEARCH:SEARCH RESULTS','SHOPPING CART','GLP','BRAND|GLP'];var default_buttonId={'UK':'5730O0000000JEi','FR':'5730O0000000JMg','NL':'5730O0000000JLe','US':'5730O0000000JEk','DE':'5730O0000000JEa','IT':'5730O0000000JEe','ES':'5730O0000000JEc','AR':'5730O0000000JLO','CL':'5730O000000g5bw','CO':'5730O000000g5by','MX':'5730O0000000JLa','PE':'5730O0000000JLi','RU':'5730O0000000JLk','AU':'5730O0000000JMe','NZ':'5730O0000000JMh','MY':'5730O000000g5Ze','PH':'5730O000000g5ZP','SG':'5730O000000g5ZU','TH':'5730O000000g5aw','TR':'5730O000000g5a8','PL':'5730O000000g5dM','PT':'5730O0000008QMb','GR':'5730O0000008QMX','BE':b.language=='EN'?'5730O000000g5dG':'5730O000000g5dI','CH':b.language=='EN'?'5730O0000008QMJ':(b.language=='DE'?'5730O0000008QMN':(b.language=='FR'?'5730O0000008QML':'5730O0000008QMP')),'DK':'5730O0000008QMT','SE':'5730O0000008QMf','AT':'5730O0000008QOR','CZ':'5730O0000008QOV','FI':'5730O0000008QOZ','IE':'5730O0000008QOd','NO':'5730O0000008QOh','SK':'5730O0000008QOl'}
var pages_buttonId_dictionary={'UK':['5730O0000000JEh',default_buttonId[b.country]],'FR':['5730O0000000JMf',default_buttonId[b.country]],'NL':['5730O0000000JLd',default_buttonId[b.country]],'US':['5730O0000000JEj',default_buttonId[b.country]],'DE':['5730O0000000JEZ',default_buttonId[b.country]],'IT':['5730O0000000JEd',default_buttonId[b.country]],'ES':['5730O0000000JEb',default_buttonId[b.country]],'AR':['5730O0000000JLN',default_buttonId[b.country]],'CL':['5730O000000g5bv',default_buttonId[b.country]],'CO':['5730O000000g5bx',default_buttonId[b.country]],'MX':['5730O0000000JLZ',default_buttonId[b.country]],'PE':['5730O0000000JLh',default_buttonId[b.country]],'RU':['5730O0000000JLj',default_buttonId[b.country]],'AU':['5730O0000000JMd',default_buttonId[b.country]],'NZ':['5730O0000000JMj',default_buttonId[b.country]],'MY':['5730O000000g5bB',default_buttonId[b.country]],'PH':['5730O000000g5aI',default_buttonId[b.country]],'SG':['5730O000000g5aN',default_buttonId[b.country]],'TH':['5730O000000g5b1',default_buttonId[b.country]],'TR':['5730O000000g5aS',default_buttonId[b.country]],'PL':['5730O000000g5dL',default_buttonId[b.country]],'PT':['5730O0000008QMa',default_buttonId[b.country]],'GR':['5730O0000008QMW',default_buttonId[b.country]],'BE':[b.language=='EN'?'5730O000000g5dF':'5730O000000g5dH',default_buttonId[b.country]],'CH':[b.language=='EN'?'5730O0000008QMI':(b.language=='DE'?'5730O0000008QMM':(b.language=='FR'?'5730O0000008QMK':'5730O0000008QMO')),default_buttonId[b.country]],'DK':['5730O0000008QMS',default_buttonId[b.country]],'SE':['5730O0000008QMe',default_buttonId[b.country]],'AT':['5730O0000008QOQ',default_buttonId[b.country]],'CZ':['5730O0000008QOU',default_buttonId[b.country]],'FI':['5730O0000008QOY',default_buttonId[b.country]],'IE':['5730O0000008QOc',default_buttonId[b.country]],'NO':['5730O0000008QOg',default_buttonId[b.country]],'SK':['5730O0000008QOk',default_buttonId[b.country]]}
var pages_liveAgentId={'UK':['EmbeddedServiceLiveAgent_Parent04I0O000000GnNRUA0_16222c26bd6','EmbeddedServiceLiveAgent_Parent04I0O000000GnNWUA0_16222c48de1'],'FR':['EmbeddedServiceLiveAgent_Parent04I0O000000GnUSUA0_16343476512','EmbeddedServiceLiveAgent_Parent04I0O000000GnUXUA0_1634350a133'],'NL':['EmbeddedServiceLiveAgent_Parent04I0O000000GnQuUAK_162b2cb03d9','EmbeddedServiceLiveAgent_Parent04I0O000000GnR9UAK_162b2cef841'],'US':['EmbeddedServiceLiveAgent_Parent04I0O000000GnMnUAK_16222aeb069','EmbeddedServiceLiveAgent_Parent04I0O000000GnMsUAK_16222b678e1'],'DE':['EmbeddedServiceLiveAgent_Parent04I0O000000GnO0UAK_16222c8c987','EmbeddedServiceLiveAgent_Parent04I0O000000GnOFUA0_16222cd7499'],'IT':['EmbeddedServiceLiveAgent_Parent04I0O000000GnPIUA0_1628a030c55','EmbeddedServiceLiveAgent_Parent04I0O000000GnPNUA0_1628a046bbd'],'ES':['EmbeddedServiceLiveAgent_Parent04I0O000000GnNbUAK_16222c542d0','EmbeddedServiceLiveAgent_Parent04I0O000000GnNvUAK_16222c7f290'],'AR':['EmbeddedServiceLiveAgent_Parent04I0O000000GnS3UAK_162b2ded5aa','EmbeddedServiceLiveAgent_Parent04I0O000000GnS2UAK_162b2dd90e6'],'CL':['EmbeddedServiceLiveAgent_Parent04I0O000000TNTIUA4_1677cd2928b','EmbeddedServiceLiveAgent_Parent04I0O000000TNTJUA4_1677cd013f0'],'CO':['EmbeddedServiceLiveAgent_Parent04I0O000000TNTKUA4_1677ccdab39','EmbeddedServiceLiveAgent_Parent04I0O000000TNTLUA4_1677ccb8fcc'],'MX':['EmbeddedServiceLiveAgent_Parent04I0O000000GnRsUAK_162b2da4337','EmbeddedServiceLiveAgent_Parent04I0O000000GnRxUAK_162b2db8155'],'PE':['EmbeddedServiceLiveAgent_Parent04I0O000000GnSRUA0_162b2e52362','EmbeddedServiceLiveAgent_Parent04I0O000000GnSWUA0_162b2e8d48a'],'RU':['EmbeddedServiceLiveAgent_Parent04I0O000000GnQpUAK_162b2c89cfd','EmbeddedServiceLiveAgent_Parent04I0O000000GnQkUAK_162b2c76963'],'AU':['EmbeddedServiceLiveAgent_Parent04I0O000000GnTeUAK_16342ff5169','EmbeddedServiceLiveAgent_Parent04I0O000000GnTjUAK_16343055725'],'NZ':['EmbeddedServiceLiveAgent_Parent04I0O000000GnTyUAK_16343137052','EmbeddedServiceLiveAgent_Parent04I0O000000GnU3UAK_1634316bbfd'],'MY':['EmbeddedServiceLiveAgent_Parent04I0O000000TNRkUAO_1669ae0dd78','EmbeddedServiceLiveAgent_Parent04I0O000000TNRBUA4_16685c11f60'],'PH':['EmbeddedServiceLiveAgent_Parent04I0O000000TNRpUAO_1669ae69862','EmbeddedServiceLiveAgent_Parent04I0O000000TNQwUAO_16681adbfce'],'SG':['EmbeddedServiceLiveAgent_Parent04I0O000000TNRuUAO_1669aec04f8','EmbeddedServiceLiveAgent_Parent04I0O000000TNR1UAO_16681b373bd'],'TH':['EmbeddedServiceLiveAgent_Parent04I0O000000TNSOUA4_166c54f27f4','EmbeddedServiceLiveAgent_Parent04I0O000000TNSJUA4_166c54e1cbe'],'TR':['EmbeddedServiceLiveAgent_Parent04I0O000000TNRzUAO_1669b27e4e7','EmbeddedServiceLiveAgent_Parent04I0O000000TNRaUAO_16685f9cb37'],'PL':['EmbeddedServiceLiveAgent_Parent04I0O000000TNUYUA4_1687aa1216d','EmbeddedServiceLiveAgent_Parent04I0O000000TNUZUA4_1687a9ad2ad'],'PT':['EmbeddedServiceLiveAgent_Parent04I0O000000k9emUAA_16909008af5','EmbeddedServiceLiveAgent_Parent04I0O000000k9enUAA_1690902f526'],'GR':['EmbeddedServiceLiveAgent_Parent04I0O000000k9eiUAA_169090b691f','EmbeddedServiceLiveAgent_Parent04I0O000000k9ejUAA_169090b82dd'],'BE':[b.language=='EN'?'EmbeddedServiceLiveAgent_Parent04I0O000000TNUSUA4_1687ad26212':'EmbeddedServiceLiveAgent_Parent04I0O000000TNUUUA4_1687ad9c6c1',b.language=='EN'?'EmbeddedServiceLiveAgent_Parent04I0O000000TNUTUA4_1687acbcac7':'EmbeddedServiceLiveAgent_Parent04I0O000000TNUVUA4_1687ad858c2'],'CH':[b.language=='EN'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eUUAQ_16909244bb5':(b.language=='DE'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eYUAQ_169092ced40':(b.language=='FR'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eWUAQ_16909172abe':'EmbeddedServiceLiveAgent_Parent04I0O000000k9eaUAA_169093355a6')),b.language=='EN'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eVUAQ_1690923cd5f':(b.language=='DE'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eZUAQ_169092c4a3c':(b.language=='FR'?'EmbeddedServiceLiveAgent_Parent04I0O000000k9eXUAQ_1690916d990':'EmbeddedServiceLiveAgent_Parent04I0O000000k9ebUAA_169093314c5'))],'DK':['EmbeddedServiceLiveAgent_Parent04I0O000000k9eeUAA_169091d5744','EmbeddedServiceLiveAgent_Parent04I0O000000k9efUAA_169091c96ad'],'SE':['EmbeddedServiceLiveAgent_Parent04I0O000000k9eqUAA_169090b7a16','EmbeddedServiceLiveAgent_Parent04I0O000000k9erUAA_16909072d12'],'AT':['EmbeddedServiceLiveAgent_Parent04I0O000000k9g5UAA_169dd2950e1','EmbeddedServiceLiveAgent_Parent04I0O000000k9g6UAA_169dd1c39cd'],'CZ':['EmbeddedServiceLiveAgent_Parent04I0O000000k9g9UAA_169dd2df261','EmbeddedServiceLiveAgent_Parent04I0O000000k9gAUAQ_169dd2c13bb'],'FI':['EmbeddedServiceLiveAgent_Parent04I0O000000k9gDUAQ_1699926ef4c','EmbeddedServiceLiveAgent_Parent04I0O000000k9gEUAQ_169991cb167'],'IE':['EmbeddedServiceLiveAgent_Parent04I0O000000k9gHUAQ_169993887e5','EmbeddedServiceLiveAgent_Parent04I0O000000k9gIUAQ_16999383fb3'],'NO':['EmbeddedServiceLiveAgent_Parent04I0O000000k9gLUAQ_169992473ae','EmbeddedServiceLiveAgent_Parent04I0O000000k9gMUAQ_1699921460b'],'SK':['EmbeddedServiceLiveAgent_Parent04I0O000000k9gPUAQ_169dd424038','EmbeddedServiceLiveAgent_Parent04I0O000000k9gQUAQ_169dd3febe9']}
var page_type_aux=b.page_type=='SEARCH'?b.page_type+':'+b.page_name:b.page_type;b.chatType=sales_button_pages.indexOf(page_type_aux)>-1?'Sticky Sales Chat':'Sticky Service Chat';b.language_deploymentName={'EN':'Eng','FR':'French','NL':'Dutch','DE':'Ger','IT':'Italian','ES':'Spanish','RU':'Russia','TH':'Thai','TR':'Turkish','PL':'Poland','PT':'Portugal','GR':'Greece','EL':'Greece','DA':'Danish','SV':'Swedish','CS':'Czech','NO':'Norwegian','SK':'Slovak'};b.language_deploymentName=b.language_deploymentName[b.language];var deployment_id_dictionary={'UK':'57220000000Gogu','FR':'57220000000GohJ','NL':'57220000000Gogu','US':'57220000000Gohs','DE':'57220000000Gogp','IT':'5720O000000bm03','ES':'57220000000GohE','AR':'5720O0000000JdO','CL':'5720O0000000JdO','CO':'5720O0000000JdO','MX':'5720O0000000JdO','PE':'5720O0000000JdO','RU':'5720O000000bm0I','AU':'5720O000000bm0N','NZ':'5720O000000bm0N','MY':'5720O0000000AlX','PH':'5720O0000000JX5','SG':'5720O0000000JdR','TH':'5720O0000000Jfj','TR':'5720O000000g5fw','PL':'5720O000000bm0r','PT':'5720O0000008Prx','GR':'5720O0000008Prw','BE':b.language=='EN'?'57220000000GogG':'5720O000000blzZ','CH':b.language=='EN'?'57220000000Gogu':(b.language=='DE'?'57220000000Gogp':(b.language=='FR'?'5720O0000008PXM':'5720O0000008PXN')),'DK':'5720O000000bm0q','SE':'5720O000000bm0s','AT':'57220000000Gogk','CZ':'5720O000000bm0p','FI':'5720O0000008PsT','IE':'5720O000000blzt','NO':'5720O0000008PsU','SK':'5720O000000bm0m'}
b.live_agent_deploymentId=deployment_id_dictionary[b.country];if(b.chatType=='Sticky Sales Chat'){b.buttonId=pages_buttonId_dictionary[b.country][0];b.deploymentName='Sticky_'+b.country+'adi_'+b.language_deploymentName+'_Snapins_Sales_D';b.embeddedServiceLiveAgentId=pages_liveAgentId[b.country][0];}else{b.buttonId=pages_buttonId_dictionary[b.country][1];b.deploymentName='Sticky_'+b.country+'adi_'+b.language_deploymentName+'_Snapins_Service_D';b.embeddedServiceLiveAgentId=pages_liveAgentId[b.country][1];}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b.languageCode=b.language.toLowerCase(),b.brandName=b.site_name.toLowerCase();b.countryCode=b.country.replace(/UK/gi,'GB');u.load_snapins=function(){var max_attemps=10;var snapins_timer=setInterval(function(){if(typeof sf_snapins_widget!='undefined'&&typeof(embedded_svc)!=undefined){sf_snapins_widget.loadWidget({organisationId:b.live_agent_orgId,deploymentId:b.live_agent_deploymentId,buttonId:b.buttonId,initURL:b.live_agent_initURL,baseURL:b.live_agent_base_url,contentURL:b.live_agent_contentURL,siteURL:b.live_agent_siteURL,brandName:b.brandName,countryCode:b.countryCode,languageCode:b.languageCode,snapinsVersion:'2.0',deploymentVersion:'40.0',deploymentName:b.deploymentName,embeddedServiceLiveAgentId:b.embeddedServiceLiveAgentId,duration:0,chatType:b.chatType});clearInterval(snapins_timer);}
if(max_attemps<=0){clearInterval(snapins_timer);}
max_attemps--;},300);}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(){if(typeof(u.load_snapins)=='function'&&!u.initialized){u.load_snapins();}
u.initialized=true;};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_389'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("389","adidas.adidasglobal");}catch(error){utag.DB(error);}
