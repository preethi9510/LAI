!function(r){"use strict";function i(t){if("string"==typeof t)try{t=r.parseJSON(t)}catch(t){throw"Could not parse JSON response from TripIt server: "+t.message}if(!t||!t.hasOwnProperty("status"))throw'Malformed JSON respose from TripIt server: No "status" property';switch(t.status){case"success":case"error":case"invalid_domain":void 0===n&&(n=window.opener),n.a2tSetAjaxPostStatus(JSON.stringify(t)),window.close();break;case"need_login":case"need_email_verification":break;default:throw"Unknown AJAX status: "+t.status}}var n,t=window.TRIPIT.pages;window.postData=function(t,a){n=t;var o=a.data,e=a.protocol+"//"+a.domain+"/uhp/addToTripIt?a2t_key="+a.a2t_key;r.post(e,{format:"json",json:o},i).fail(function(t){var a={status:"error",message:"Error during AJAX POST call: "+JSON.stringify(t)+". Try again."};i(a)})},t.account=t.account||{},t.account.create=t.account.login=function(){r(document).ready(function(){if("1"===r("form[data-is-logged-in]").attr("data-is-logged-in")){try{Typekit.load()}catch(t){}r("body").html('<div style="margin-top: 60px; text-align: center; font-size: 32pt; color: #666; font-weight: 600;">Sending to TripIt</div><img style="display: block; margin: 26px auto;" src="/images/uhp/addtotripit/atom.gif" alt="Sending to TripIt" />')}})}}(jQuery);