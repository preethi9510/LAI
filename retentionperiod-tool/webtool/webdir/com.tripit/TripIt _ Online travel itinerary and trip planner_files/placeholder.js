var polyfill=window.TRIPIT.polyfill||{},$document=$document||$(document);!function(){"use strict";var l,e="[placeholder]";polyfill.placeholder={hidePlaceholder:function(l){l.val()===l.attr("placeholder")+" "&&(l.val(""),l.removeClass("placeholder"))},removePlaceholder:function(l){l.find(e).each(function(){var l=$(this);l.val()===l.attr("placeholder")+" "&&l.val("")})},showPlaceholder:function(l){l.val()||(l.val(l.attr("placeholder")+" "),l.addClass("placeholder"))},bind:function(){Modernizr.input.placeholder||($document.on("focus",e,function(){l.hidePlaceholder($(this))}),$document.on("blur",e,function(){l.showPlaceholder($(this))}),$document.on("submit","form",function(){l.removePlaceholder($(this))}),$document.on("click","input[type=submit], button[type=submit]",function(){l.removePlaceholder($(this).closest("form"))}),$(e).blur())}},$document.ready(function(){l=polyfill.placeholder,polyfill.placeholder.bind()})}();