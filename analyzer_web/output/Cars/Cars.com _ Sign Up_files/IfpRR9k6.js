



/* ControlTag Loader for Cars.com f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.41.3","schema_version":3},"confid":"IfpRR9k6","context_terms":[{"id":"J63eHQW-","value":"Blind Spot Detection"},{"id":"J63eHR6y","value":"Rearview Camera"},{"id":"LM_V3uhF","value":"﻿trailer hitch"},{"id":"J63eHTZy","value":"Parking Assist"},{"id":"J63eHQjQ","value":"Backup Warning"},{"id":"J63eHPhk","value":"Cross Traffic Alert"},{"id":"KI0zIJxD","value":"cargo"},{"id":"J63eHS_1","value":"Side Assist"},{"id":"J63eHNpx","value":"Collision Avoidance"},{"id":"LM_V3vAP","value":"tow hitch"},{"id":"J63eHO0x","value":"Automatic Crash Response"},{"id":"J63eHReO","value":"Backup Camera"},{"id":"KAhWywiX","value":"auto show"},{"id":"J63eHSuw","value":"Sideview Assist"},{"id":"J63eHQ3k","value":"Adaptive Cruise Control"},{"id":"J63eHT65","value":"Emergency Brake Assist"},{"id":"J63eHNEQ","value":"Collision Alert"},{"id":"J63eHROE","value":"Adaptive Headlights"},{"id":"J63eHOPR","value":"Collision Warning"},{"id":"J63eHSOJ","value":"Backup Sensors"},{"id":"J63eHP-2","value":"Blind Spot Monitor"},{"id":"J63eHTrL","value":"Autonomous Breaking"},{"id":"J63eHMwn","value":"Lane Departure Warning"}],"publisher":{"name":"Cars.com","active":true,"uuid":"f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e","version_bucket":"stable","id":1495},"params":{"first_party_dmp_managed":true,"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"false","consent_active":true,"use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":true,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"no_pii":false,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":true,"optout_button_id":"kx-optout-button","user_id_cookie":"kppid","dfp_premium":true},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e","consent_set":"https://consumer.krxd.net/consent/set/f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/f1c061b9-c7fc-4dd4-8a51-39acb1f4a41e","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"Cars.com","cap":3,"id":18150,"organization_id":1495,"uid":"IfpRR9k6"},"tags":[{"id":29909,"name":"Krux DTC Custom - Cars.com Cookie IDs","content":"<script>\n(function() {\n\t// Scrape cookie value using Control Tag API\n\tvar cString = Krux('scrape.cookie', 'CarsVisitor')\n\n\t// Split into array and loop through searching for values\n\tif (cString) {\n\t\t// Split into array and loop through searching for values\n\t\tif (cString) {\n\t\t\ttry {\n\t\t\t\t// Split into array\n\t\t\t\tvar cArray = cString.split(',');\n\t\t\t\tfor (var i = 0; i < cArray.length; i++) {\n\t\t\t\t\tif (cArray[i].indexOf('pcid') >= 0) {\n\t\t\t\t\t\t// If PCID is found, parse out value and set key-value pair in CT API\n\t\t\t\t\t\tvar pcid = cArray[i].split(':')[1].replace(/[^A-Za-z0-9-]/g, \"\");\n\t\t\t\t\t\tKrux('set', {\n\t\t\t\t\t\t\t'user_attr_pcid': pcid\n\t\t\t\t\t\t});\n\t\t\t\t\t} else if (cArray[i].indexOf('pdid') >= 0) {\n\t\t\t\t\t\t// If PDID is found, parse out value and set key-value pair in CT API\n\t\t\t\t\t\tvar pdid = cArray[i].split(':')[1].replace(/[^A-Za-z0-9-]/g, \"\");\n\t\t\t\t\t\tKrux('set', {\n\t\t\t\t\t\t\t'user_attr_pdid': pdid\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\t// Do Nothing\n\t\t\t}\n\t\t}\n\t}\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":6792,"name":"Krux Track Social","content":"<script type=\"text/javascript\">Krux('social.init');</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":6793,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]],"collects_data":true},{"id":6794,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]],"collects_data":true},{"id":6795,"name":"Data Transfer Code","content":"<script>\nKrux('scrape', { \"page_attr_url_path_1\": {url_path: \"1\"}});\nKrux('scrape', { \"page_attr_url_path_2\": {url_path: \"2\"}});\n\nKrux('scrape', { \"page_attr_s_clven.eVar1\": {js_global: \"s_dtm.eVar1\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar12\": {js_global: \"s_dtm.eVar12\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar13\": {js_global: \"s_dtm.eVar13\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar14\": {js_global: \"s_dtm.eVar14\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar15\": {js_global: \"s_dtm.eVar15\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar20\": {js_global: \"s_dtm.eVar20\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar60\": {js_global: \"s_dtm.eVar60\"}});\nKrux('scrape', { \"page_attr_s_clven.eVar73\": {js_global: \"s_dtm.eVar73\"}});\nKrux('scrape', { \"page_attr_s_clven.state\": {js_global: \"s_dtm.state\"}});\nKrux('scrape', { \"page_attr_s_clven.zip\": {js_global: \"s_dtm.zip\"}});\n\nKrux('scrape', { \"page_attr_s_clven.pageName\": {js_global: \"s_dtm.pageName\"}});\nKrux('scrape', { \"page_attr_s_clven.channel\": {js_global: \"s_dtm.channel\"}});\nKrux('scrape', { \"page_attr_s_clven.prop11\": {js_global: \"s_dtm.prop11\"}});\nKrux('scrape', { \"page_attr_s_clven.prop15\": {js_global: \"s_dtm.prop15\"}});\nKrux('scrape', { \"page_attr_s_clven.prop48\": {js_global: \"s_dtm.prop48\"}});\nKrux('scrape', { \"page_attr_s_clven.prop49\": {js_global: \"s_dtm.prop49\"}});\nKrux('scrape', { \"page_attr_s_clven.prop50\": {js_global: \"s_dtm.prop50\"}});\n\nKrux('scrape', { \"page_attr_btData.category\": {js_global: \"btData.category\"}});\nKrux('scrape', { \"page_attr_btData.make\": {js_global: \"btData.make\"}});\nKrux('scrape', { \"page_attr_btData.model\": {js_global: \"btData.model\"}});\nKrux('scrape', { \"page_attr_btData.zip\": {js_global: \"btData.zip\"}});\nKrux('scrape', { \"page_attr_btData.lzone\": {js_global: \"btData.lzone\"}});\nKrux('scrape', { \"page_attr_btData.aff\": {js_global: \"btData.aff\"}});\nKrux('scrape', { \"page_attr_btData.section\": {js_global: \"btData.section\"}});\nKrux('scrape', { \"page_attr_btData.year\": {js_global: \"btData.year\"}});\nKrux('scrape', { \"page_attr_btData.stock\": {js_global: \"btData.stock\"}});\nKrux('scrape', { \"page_attr_btData.price\": {js_global: \"btData.price\"}});\nKrux('scrape', { \"page_attr_btData.miles\": {js_global: \"btData.miles\"}});\nKrux('scrape', { \"page_attr_btData.dlid\": {js_global: \"btData.dlid\"}});\nKrux('scrape', { \"page_attr_btData.listing\": {js_global: \"btData.listing\"}});\n\n\n\nKrux('scrape', { \"user_attr_visitor_id\": {cookie: \"s_vi\"}} );\n\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":6801,"name":"Krux Section Setup","content":"<script>\r\nvar krux_section = Krux('get','page_attr_url_path_1');\r\n\r\nif (krux_section == 'research' || krux_section == 'sell' || krux_section == 'for-sale' || krux_section == 'finance' || krux_section == 'advice' || krux_section == 'auto-repair') {\r\n //Krux('set', 'section', {javascript: 'krux_section'});\r\n Krux('scrape', { section: { javascript: 'krux_section'}});\r\n}\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":40765,"name":"Cars Whitelist DTC btData object","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'btData');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('bodyStyle,certified,minPriceRange,maxPriceRange,trim'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'true' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('text', 'btData',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":40766,"name":"Cars.com Whiltelist DTC CARS object","content":"<script>\n(function() {\n    /* Selective Attribute DataLayer Library Tag */\n    var _, allAttr, allowedList, attr, attributes, dataLayerIngester, dataObj,\n        isAllowed, keepCase, libUtil, omitKeys, pageAttr, prefix, toSet, trim,\n        userAttr, util, value,\n        hasProp = {}.hasOwnProperty;\n    _ = Krux('require:underscore');\n    util = Krux('require:util');\n    libUtil = Krux('require:util.library-tag');\n    dataLayerIngester = Krux('require:scrape').ingestDataLayer;\n\n    /* Safe copy of dataLayer object */\n    dataObj = Krux('scrape.javascript', 'CARS');\n\n    /* String trimming helper function */\n    trim = function(attr) {\n        return (\"\" + attr).replace(/^\\s+|\\s+$/g, '');\n    };\n\n    /* Attribute configs */\n    pageAttr = _.map('pageNum,radius'.split(','), trim);\n    userAttr = _.map('undefined'.split(','), trim);\n\n    /* Create a array of attributes striping any empty strings */\n    allAttr = _.without(pageAttr.concat(userAttr), '');\n\n    /* Configuration settings */\n    keepCase = 'false' === 'true';\n    omitKeys = 'undefined'.split(',');\n\n    /* Resolve Prefix */\n    prefix = libUtil.resolvePrefix('text', 'CARS',\n        'undefined');\n\n    /* Function to varify if attribute should be used */\n    isAllowed = function(value, whitelist) {\n        var i, len, str, x;\n        str = \"\" + value;\n        if (!((value != null) && str.length > 0)) {\n            return false;\n        }\n        for (i = 0, len = whitelist.length; i < len; i++) {\n            x = whitelist[i];\n            if (value.match(x) != null) {\n                return true;\n            }\n        }\n        return false;\n    };\n\n    /* Get a full list of attributes usting the dataLayer tool */\n    attributes = dataLayerIngester(dataObj, {\n        omitKeys: libUtil.removeFalsyStrings(omitKeys.concat(libUtil.EXCLUDE_KEYS_CONFIG)),\n        omitValues: libUtil.EXCLUDE_VALUES_CONFIG,\n        caseSensitive: keepCase,\n        useFullPath: 'false' === 'true',\n        useLastValue: 'false' === 'true',\n        customDelimited: [/./],\n        altDelimiter: ',',\n        userKeys: _.map(userAttr, function(exp) {\n            return new RegExp(\"(^|\\\\.)\" + exp + \"$\");\n        }),\n        optimizeNames: true\n    });\n\n    /* Only set Attributes in the allowed list */\n    allowedList = _.map(allAttr, function(name) {\n        return new RegExp(\"(_attr_|_attr_\" + prefix + \"|\\\\.)\" + (keepCase ?\n            name : libUtil.normalizeAttrName(name, {\n                removeDot: false\n            })) + \"$\");\n    });\n    toSet = {};\n    for (attr in attributes) {\n        if (!hasProp.call(attributes, attr)) continue;\n        value = attributes[attr];\n        if (isAllowed(attr, allowedList)) {\n            toSet[attr] = value;\n        }\n    }\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true},{"id":40787,"name":"Cars.com prop8 DTC","content":"<script>\n(function() {\n    /* Generic Scrape Tag - Configurable Data Collection */\n    var _, filterValues, libUtil, prefix, scrapeConfig, toSet;\n    _ = Krux('require:underscore');\n    libUtil = Krux('require:util.library-tag');\n    toSet = {};\n    filterValues = function(val) {\n        var i, item, len, ref, str, x;\n        if (_.isArray(val)) {\n            return _.compact((function() {\n                var i, len, results;\n                results = [];\n                for (i = 0, len = val.length; i < len; i++) {\n                    item = val[i];\n                    results.push(filterValues(item));\n                }\n                return results;\n            })());\n        }\n        str = \"\" + val;\n        if (!((val != null) && str.length > 0)) {\n            return;\n        }\n        ref = libUtil.EXCLUDE_VALUES_CONFIG;\n        for (i = 0, len = ref.length; i < len; i++) {\n            x = ref[i];\n            if (str.match(x) != null) {\n                return;\n            }\n        }\n        return val;\n    };\n    scrapeConfig = function(config, type) {\n        var attr, i, len, parts, ref, results, value;\n        ref = libUtil.removeFalsyStrings(config);\n        results = [];\n        for (i = 0, len = ref.length; i < len; i++) {\n            attr = ref[i];\n            parts = attr.split('|');\n            if (parts.length === 1 && 'javascript'.match(/(dom|javascript)/)) {\n                continue;\n            }\n            if (parts.length === 1) {\n                parts.unshift(libUtil.normalizeAttrName(parts[0]));\n            }\n            switch ('javascript') {\n                case 'get':\n                    value = filterValues(Krux('get', parts[1]));\n                    break;\n                default:\n                    value = filterValues(Krux('scrape.javascript', parts[1]));\n            }\n            if (value) {\n                results.push(toSet[type + \"_attr_\" + parts[0]] = value);\n            } else {\n                results.push(void 0);\n            }\n        }\n        return results;\n    };\n    scrapeConfig('s_dtm.prop8|s_dtm.prop8', 'page');\n    scrapeConfig('undefined', 'user');\n    prefix = libUtil.resolvePrefix('none', 'undefined',\n        'undefined');\n    toSet = Krux('prefix:attr', toSet, prefix);\n    Krux('set', toSet);\n}).call();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[],"collects_data":true}],"usermatch_tags":[{"id":5,"name":"DataXu User Match","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = location.protocol;\r\n        if (kuid) {\r\n           var dxu_url = '//pm.w55c.net/ping_match.gif?st=Krux&rurl=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=dataxu&uid=_wfivefivec_';\r\n           var i = new Image();\r\n           i.src = dxu_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\r\n(function(){\r\nvar kuid = Krux('get', 'user');\r\nvar consent = Krux('iab:urlParams');\r\nif (kuid) {\r\nif(!consent){\r\nconsent = \"\";\r\n}\r\nvar p = location.protocol == 'https:' ? 'https:' : 'http:';\r\nvar purl = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1';\r\n(new Image()).src  = p + purl + consent; \r\n}\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":23,"name":"BlueKai S2S","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var bk_prefix = location.protocol == 'https:' ? \"stags\" : \"tags\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&partner=bluekai&bk_uuid=$_BK_UUID\");\r\n            var kurl = prefix + \"//beacon.krxd.net/usermatch.gif?\" + kurl_params;\r\n            var bk_params = 'id=' + kuid;\r\n            var bk_url = '//' + bk_prefix + '.bluekai.com/site/26357?' + bk_params + '&redir=' + kurl;\r\n            var i = new Image();\r\n            i.src = bk_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":25,"name":"eXelate Media","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n    Krux('require:http').pixel({\r\n      url: \"//loadm.exelator.com/load\",\r\n      data: {\r\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\r\n          buid: kuid,\r\n          p: '204',\r\n          g: '270',\r\n          j: '0'\r\n      }});\r\n  }\r\n  })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":45,"name":"TubeMogul user match","content":"<script>\r\n    (function() {\r\n        new Image().src = location.protocol + '//sync-tm.everesttech.net/upi/pid/NC4WTmcy?redir=' + encodeURIComponent('https://beacon.krxd.net/usermatch.gif?partner_id=cb276571-e0d9-4438-9fd4-80a1ff034b01&puid=${TM_USER_ID}');\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":71,"name":"AppNexus Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":77,"name":"MediaMath User Match","content":"<script>\r\n\r\n(function(){\r\n\tvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n\tvar url = prefix + '//sync.mathtag.com/sync/img?redir=' + prefix + '%2F%2Fbeacon.krxd.net%2Fusermatch.gif%3Fpartner%3Dmediamath%26mmuuid%3D%5BMM_UUID%5D';\r\n\t(new Image()).src = url;\r\n})();\r\n\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":9,"name":"RocketFuel User Match","content":"<script>\r\n(function() {\r\n    var i = new Image();\r\n    i.src = '//p.rfihub.com/cm?in=1&pub=6919';\r\n})();\r\n\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":16,"name":"Turn S2S User Match","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      (new Image()).src='//d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjg0OTE3NDgvdC8y/dpuid/' + kuid;\r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":20,"name":"Yahoo! DataX User Match","content":"<script>\r\n(function(){\r\n    var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = 'https:';\r\n            var rurl = prefix + '//cms.analytics.yahoo.com/cms?partner_id=KRUX';\r\n            var i = new Image();\r\n            i.src = rurl;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":29,"name":"Nativo User Match","content":"<script>\r\n(function() {\r\n    var kuid = Krux('get', 'user');\r\n    var prefix = location.protocol;\r\n    if (kuid) {\r\n        var nativo_url = prefix + '//jadserve.postrelease.com/dmp/5?vk=KRUX_USER_ID&ntv_r=' + prefix + '//beacon.krxd.net/usermatch.gif?partner=nativo&partner_uid=NTV_USER_ID';\r\n        var i = new Image();\r\n        i.src = nativo_url;\r\n    }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":54,"name":"Survata User Match","content":"<script>\n(function(){\n        var kuid = Krux('get', 'user');\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n        if (kuid) {\n           var url = prefix + '//px.surveywall-api.survata.com/k';\n           (new Image()).src = url;\n        }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":96,"name":"Signal User Match","content":"<script>\r\n(function(){\r\n\r\n  var kuid = Krux('get', 'user');\r\n  var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n\r\n  if (kuid) {\r\n    new Image().src = prefix + '//s.thebrighttag.com/cs?tp=nC1b0SU&uid=' + kuid;\r\n  }\r\n  \r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":73,"name":"DataLogix - (Kelloggs)","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=d7158cb7-a851-4e3c-b7ab-cc9e815b2399&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gwjn34gwjnh86&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":92,"name":"DataLogix ABI","content":"<script>\n    (function() {\n        var allowUserMatch = function() {\n            var GDN_SITE_ID = '1282650';\n \n            if (Krux('get', 'config').params.client_type === 'marketer') {\n                try {\n                    var params = Krux('require:marketer').getParams(\n                            Krux('require:sizzle').find('script[src*=\"' + Krux('get', 'confid') + '\"]')\n                    );\n                    return GDN_SITE_ID !== (params.siteid || params.kxsiteid);\n                }\n                catch (e) {\n                    // In case we don't find the script tag or the URL parser fails, just allow matching.\n                }\n            }\n            return true;\n        };\n         \n        var kuid = Krux('get', 'user');\n        if (allowUserMatch() && kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=afae52b8-1e27-4650-bd6a-ed7d982f5a6a&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=iqbg41iqbgj68&ru=' + kurl;\n            new Image().src = dlx_url;\n          \n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true},{"id":104,"name":"mPlatform","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\r\n        if (kuid) {\r\n           var url = prefix + '//odr.mookie1.com/t/v2?tagid=V2_300755';\r\n           new Image().src = url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[],"collects_data":true}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.05f9d0dad02f8a1b0b028b868bc3a3e2', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
