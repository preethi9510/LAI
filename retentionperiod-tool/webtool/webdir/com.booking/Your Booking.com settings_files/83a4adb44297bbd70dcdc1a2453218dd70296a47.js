var _i_=this._i_||function(){},_r_=this._r_||function(e){return e},_sp_=this._sp_||function(e){B.et.customGoal("cDPPESHbfNFVTAYZSQDZET",1),B.reportError({message:"SPDR function called - "+e},"SPDR")};!function(o,e){"use strict";_i_("2de:1c23f085");var r=o.performance||o.mozPerformance||o.msPerformance||o.webkitPerformance||{},i=!(!r||!r.getEntriesByName),a=!(!i||!r.now),d={},s=booking.env.b_debug_dc_performance_metrics;function _(e){_i_("2de:d1f13b19");var t=new XMLHttpRequest;t.open("POST","https://cexp.booking.com/api/measurement",!0),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(e)),_r_()}var n=function(){if(_i_("2de:650cf3df"),0==d[this.uid])return s&&console.log("[SUCCESS] Skipping duplicate response for "+this.uid),_r_();var e;s&&console.log("[SUCCESS] Clearing timeout callback for "+this.uid),o.clearTimeout(d[this.uid]),d[this.uid]=!1;var t=function(e){if(_i_("2de:fe64cd66"),i){var t=r.getEntriesByName(e);if(t&&t.length)return _r_(t[0])}_r_()}(this.src);if(t)s&&console.log("Loading performance metrics for "+this.uid),e=parseInt(t.responseEnd-t.fetchStart,10),_({id:this.uid,ms:isNaN(e)?-1:e,connect_end:t.connectEnd,connect_start:t.connectStart,domain_lookup_end:t.domainLookupEnd,domain_lookup_start:t.domainLookupStart,dom_complete:t.domComplete,dom_content_loaded_event_end:t.domContentLoadedEventEnd,dom_content_loaded_event_start:t.domContentLoadedEventStart,dom_interactive:t.domInteractive,dom_loading:t.domLoading,fetch_start:t.fetchStart,load_event_end:t.loadEventEnd,load_event_start:t.loadEventStart,navigation_start:t.navigationStart,redirect_end:t.redirectEnd,redirect_start:t.redirectStart,request_start:t.requestStart,response_end:t.responseEnd,response_start:t.responseStart,secure_connection_start:t.secureConnectionStart,unload_event_end:t.unloadEventEnd,unload_event_start:t.unloadEventStart});else{s&&console.log("Calculating basic timing data for "+this.uid);var n=a?r.now():+new Date;e=parseInt(n-this.start_time,10),_({id:this.uid,ms:e>this.timeout?-1:e})}_r_()},c=function(){if(_i_("2de:462dd934"),0==d[this.uid])return s&&console.log("[SUCCESS] Skipping duplicate response for "+this.uid),_r_();s&&console.log("[ERROR] Clearing timeout callback for "+this.uid),o.clearTimeout(d[this.uid]),d[this.uid]=!1,_({id:this.uid,error:1}),_r_()},u=function(t){return _i_("2de:ca044cd2"),s&&console.log("Creating image object for: "+JSON.stringify(t)),_r_(function(){_i_("2de:c1ffed90");var e=new Image(1,1);e.uid=t.uid,e.timeout=1e3*t.timeout,e.onerror=c,e.onload=n,d[t.uid]=setTimeout(function(){_i_("2de:0bfd550a"),d[t.uid]=!1,_({id:t.uid,error:2}),_r_()},1e3*t.timeout),e.src=t.url,e.start_time=a?r.now():+new Date,_r_()})},t=function(){_i_("2de:aeb32e62");var n=new XMLHttpRequest;n.addEventListener("load",function(){if(_i_("2de:b8debf10"),null===n.responseText)return _r_(null);try{var e=JSON.parse(n.responseText);if(e&&"[object Array]"===Object.prototype.toString.call(e))for(var t=0;t<e.length;t++)o.setTimeout(u(e[t]))}catch(e){s&&console.log("Booking dc_performance callback error: "+e)}_r_()},!1),n.open("GET","https://cexp.booking.com/api/targets",!0),n.send(),_r_()},l=function(){_i_("2de:a9f95f21"),o.setTimeout(t,2e3),_r_()};o.addEventListener?o.addEventListener("load",l,!1):o.attachEvent&&o.attachEvent("onload",l),_r_()}(window,document);