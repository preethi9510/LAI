CT.commonTrackers=(function(){var b=function(e,c){var d=document.createElement(e);_.each(c,function(g,f){d.setAttribute(f,g)});return d};var a=function(c){};return{home:[function(){},function(){},function(){},function(){CT.utils.helperFunctions.paidChannelTracker();CT.utils.helperFunctions.paidAffiliateTracker(_.deserialize(window.location.search.substr(1)))},a.bind("homepage")],results:[function(){},function(){},function(){},function(){CT.utils.helperFunctions.paidChannelTracker();CT.utils.helperFunctions.paidAffiliateTracker()},a.bind("flight search")]}})();