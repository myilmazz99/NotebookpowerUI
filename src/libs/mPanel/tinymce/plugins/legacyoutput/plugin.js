!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=tinymce.util.Tools.resolve("tinymce.util.Tools");e.add("legacyoutput",(function(e){!function(e){!function(e){!function(e,t){e.settings.inline_styles=!1}(e),function(e){return e.getParam("fontsize_formats")}(e)||function(e,t){e.settings.fontsize_formats="8pt=1 10pt=2 12pt=3 14pt=4 18pt=5 24pt=6 36pt=7"}(e),function(e){return e.getParam("font_formats")}(e)||function(e,t){e.settings.font_formats="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"}(e)}(e),e.on("PreInit",(function(){return function(e){var i="p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table",n=t.explode(function(e){return e.getParam("font_size_style_values","xx-small,x-small,small,medium,large,x-large,xx-large")}(e)),a=e.schema;e.formatter.register({alignleft:{selector:i,attributes:{align:"left"}},aligncenter:{selector:i,attributes:{align:"center"}},alignright:{selector:i,attributes:{align:"right"}},alignjustify:{selector:i,attributes:{align:"justify"}},bold:[{inline:"b",remove:"all",preserve_attributes:["class","style"]},{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}}],italic:[{inline:"i",remove:"all",preserve_attributes:["class","style"]},{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}}],underline:[{inline:"u",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{textDecoration:"underline"},exact:!0}],strikethrough:[{inline:"strike",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{textDecoration:"line-through"},exact:!0}],fontname:{inline:"font",toggle:!1,attributes:{face:"%value"}},fontsize:{inline:"font",toggle:!1,attributes:{size:function(e){return String(t.inArray(n,e.value)+1)}}},forecolor:{inline:"font",attributes:{color:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0},hilitecolor:{inline:"font",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0,clear_child_styles:!0}}),t.each("b,i,u,strike".split(","),(function(e){a.addValidElements(e+"[*]")})),a.getElementRule("font")||a.addValidElements("font[face|size|color|style]"),t.each(i.split(","),(function(e){var t=a.getElementRule(e);t&&(t.attributes.align||(t.attributes.align={},t.attributesOrder.push("align")))}))}(e)}))}(e)}))}();