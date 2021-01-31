!function(){"use strict";var e,t,n,r=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},i=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(e){return function(){return e}},a=o(!1),u=o(!0),s=function(){return c},c=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:a,isSome:a,isNone:u,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o(null),getOrUndefined:o(void 0),or:n,orThunk:t,map:s,each:function(){},bind:s,exists:a,forall:u,filter:s,equals:e,equals_:e,toArray:function(){return[]},toString:o("none()")}),l=function(e){var t=o(e),n=function(){return i},r=function(t){return t(e)},i={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:u,isNone:a,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return l(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?i:c},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(a,(function(t){return n(e,t)}))}};return i},f={some:l,none:s,from:function(e){return null==e?c:l(e)}},d=function(e){return!function(e){return null==e}(e)},m=("function",function(e){return"function"==typeof e}),p=Array.prototype.slice,g=function(e,t){for(var n=0,r=e.length;n<r;n++)if(t(e[n],n))return!0;return!1},v=function(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++){var o=e[i];r[i]=t(o,i)}return r},h=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},y=m(Array.from)?Array.from:function(e){return p.call(e)},b=function(){var e=r(f.none());return{clear:function(){return e.set(f.none())},set:function(t){return e.set(f.some(t))},isSet:function(){return e.get().isSome()},on:function(t){return e.get().each(t)}}},x=function(e,t,n){return""===t||e.length>=t.length&&e.substr(n,n+t.length)===t},P=tinymce.util.Tools.resolve("tinymce.Env"),w=tinymce.util.Tools.resolve("tinymce.util.Delay"),_=tinymce.util.Tools.resolve("tinymce.util.Promise"),T=tinymce.util.Tools.resolve("tinymce.util.VK"),C=function(e,t){return e.fire("PastePlainTextToggle",{state:t})},D=tinymce.util.Tools.resolve("tinymce.util.Tools"),k=function(e){return e.getParam("paste_data_images",!1)},S=function(e){return e.getParam("paste_merge_formats",!0)},O=function(e){return e.getParam("paste_retain_style_properties")},j=function(e){return e.getParam("validate")},R=function(e){return e.getParam("allow_html_data_urls",!1,"boolean")},A=function(e){return e.getParam("paste_data_images",!1,"boolean")},I=function(e){return D.explode(e.getParam("images_file_types","jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp","string"))},F="\x3c!-- x-tinymce/html --\x3e",E=function(e){return-1!==e.indexOf(F)},M=tinymce.util.Tools.resolve("tinymce.html.Entities"),N=tinymce.util.Tools.resolve("tinymce.html.DomParser"),B=tinymce.util.Tools.resolve("tinymce.html.Serializer"),H=" ",L=tinymce.util.Tools.resolve("tinymce.html.Node"),$=tinymce.util.Tools.resolve("tinymce.html.Schema");function z(e,t){return D.each(t,(function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})),e}function U(e){return z(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,function(e,t,n){return t||n?H:" "}],/<br class="Apple-interchange-newline">/g,/<br>$/i])}function q(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}function V(e){var t;return e=e.replace(/^[\u00a0 ]+/,""),D.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/],(function(n){if(n.test(e))return t=!0,!1})),t}function K(e){var t,n,r=1;function i(e){var t="";if(3===e.type)return e.value;if(e=e.firstChild)do{t+=i(e)}while(e=e.next);return t}function o(e,t){if(3===e.type&&t.test(e.value))return e.value=e.value.replace(t,""),!1;if(e=e.firstChild)do{if(!o(e,t))return!1}while(e=e.next);return!0}function a(e){if(e._listIgnore)e.remove();else if(e=e.firstChild)do{a(e)}while(e=e.next)}function u(e,i,u){var s=e._listLevel||r;s!==r&&(s<r?t&&(t=t.parent.parent):(n=t,t=null)),t&&t.name===i?t.append(e):(n=n||t,t=new L(i,1),u>1&&t.attr("start",""+u),e.wrap(t)),e.name="li",s>r&&n&&n.lastChild.append(t),r=s,a(e),o(e,/^\u00a0+/),o(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/),o(e,/^\u00a0+/)}for(var s=[],c=e.firstChild;null!=c;)if(s.push(c),null!==(c=c.walk()))for(;void 0!==c&&c.parent!==e;)c=c.walk();for(var l=0;l<s.length;l++)if("p"===(e=s[l]).name&&e.firstChild){var f=i(e);if(/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(f)){u(e,"ul");continue}if(V(f)){var d=/([0-9]+)\./.exec(f),m=1;d&&(m=parseInt(d[1],10)),u(e,"ol",m);continue}if(e._listLevel){u(e,"ul",1);continue}t=null}else n=t,t=null}function X(e,t,n,r){var i,o={},a=e.dom.parseStyle(r);return D.each(a,(function(a,u){switch(u){case"mso-list":(i=/\w+ \w+([0-9]+)/i.exec(r))&&(n._listLevel=parseInt(i[1],10)),/Ignore/i.test(a)&&n.firstChild&&(n._listIgnore=!0,n.firstChild._listIgnore=!0);break;case"horiz-align":u="text-align";break;case"vert-align":u="vertical-align";break;case"font-color":case"mso-foreground":u="color";break;case"mso-background":case"mso-highlight":u="background";break;case"font-weight":case"font-style":return void("normal"!==a&&(o[u]=a));case"mso-element":if(/^(comment|comment-list)$/i.test(a))return void n.remove()}0!==u.indexOf("mso-comment")?0!==u.indexOf("mso-")&&("all"===O(e)||t&&t[u])&&(o[u]=a):n.remove()})),/(bold)/i.test(o["font-weight"])&&(delete o["font-weight"],n.wrap(new L("b",1))),/(italic)/i.test(o["font-style"])&&(delete o["font-style"],n.wrap(new L("i",1))),(o=e.dom.serializeStyle(o,n.name))||null}var W,Y=function(e,t){return{content:e,cancelled:t}},Z=function(e,t){return e.insertContent(t,{merge:S(e),paste:!0}),!0},G=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)},J=function(e,t){return G(t)&&g(I(e),(function(e){return x(n=t,r="."+e,n.length-r.length);var n,r}))},Q=function(e,t,n){return!(!1!==e.selection.isCollapsed()||!G(t))&&function(e,t,n){return e.undoManager.extra((function(){n(e,t)}),(function(){e.execCommand("mceInsertLink",!1,t)})),!0}(e,t,n)},ee=function(e,t,n){return!!J(e,t)&&function(e,t,n){return e.undoManager.extra((function(){n(e,t)}),(function(){e.insertContent('<img src="'+t+'">')})),!0}(e,t,n)},te=function(e){return"\n"===e||"\r"===e},ne=function(e,t,n,r){var i=function(e,t,n){var r=q(t),i=r?function(e,t){return function(e){return e.getParam("paste_enable_default_filters",!0)}(e)?function(e,t){var n,r=O(e);r&&(n=D.makeMap(r.split(/[, ]/))),t=z(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi,H],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(H):""}]]);var i=function(e){return e.getParam("paste_word_valid_elements","-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody")}(e),o=$({valid_elements:i,valid_children:"-li[p]"});D.each(o.elements,(function(e){e.attributes.class||(e.attributes.class={},e.attributesOrder.push("class")),e.attributes.style||(e.attributes.style={},e.attributesOrder.push("style"))}));var a=N({},o);a.addAttributeFilter("style",(function(t){for(var r,i=t.length;i--;)(r=t[i]).attr("style",X(e,n,r,r.attr("style"))),"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()})),a.addAttributeFilter("class",(function(e){for(var t,n,r=e.length;r--;)n=(t=e[r]).attr("class"),/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n)&&t.remove(),t.attr("class",null)})),a.addNodeFilter("del",(function(e){for(var t=e.length;t--;)e[t].remove()})),a.addNodeFilter("a",(function(e){for(var t,n,r,i=e.length;i--;)if(n=(t=e[i]).attr("href"),r=t.attr("name"),n&&-1!==n.indexOf("#_msocom_"))t.remove();else if(n&&0===n.indexOf("file://")&&(n=n.split("#")[1])&&(n="#"+n),n||r){if(r&&!/^_?(?:toc|edn|ftn)/i.test(r)){t.unwrap();continue}t.attr({href:n,name:r})}else t.unwrap()}));var u=a.parse(t);return function(e){return e.getParam("paste_convert_word_fake_lists",!0)}(e)&&K(u),B({validate:j(e)},o).serialize(u)}(e,t):t}(e,t):t;return function(e,t,n,r){var i=function(e,t,n,r){return e.fire("PastePreProcess",{content:t,internal:n,wordContent:r})}(e,t,n,r),o=function(e,t){var n=N({},e.schema);n.addNodeFilter("meta",(function(e){D.each(e,(function(e){e.remove()}))}));var r=n.parse(t,{forced_root_block:!1,isRootContent:!0});return B({validate:j(e)},e.schema).serialize(r)}(e,i.content);return e.hasEventListeners("PastePostProcess")&&!i.isDefaultPrevented()?function(e,t,n,r){var i=e.dom.create("div",{style:"display:none"},t),o=function(e,t,n,r){return e.fire("PastePostProcess",{node:t,internal:n,wordContent:r})}(e,i,n,r);return Y(o.node.innerHTML,o.isDefaultPrevented())}(e,o,n,r):Y(o,i.isDefaultPrevented())}(e,i,n,r)}(e,t,n);!1===i.cancelled&&function(e,t,n){n||!1===function(e){return e.getParam("smart_paste",!0)}(e)?Z(e,t):function(e,t){D.each([Q,ee,Z],(function(n){return!0!==n(e,t,Z)}))}(e,t)}(e,i.content,r)},re=function(e,t,n){var r=n||E(t);ne(e,function(e){return e.replace(F,"")}(t),r,!1)},ie=function(e,t){var n=e.dom.encode(t).replace(/\r\n/g,"\n"),r=function(e,t,n){return t?function(e,t,n){var r=e.split(/\n\n/),i=function(e,t){var n,r=[],i="<"+e;if("object"==typeof t){for(n in t)t.hasOwnProperty(n)&&r.push(n+'="'+M.encodeAllRaw(t[n])+'"');r.length&&(i+=" "+r.join(" "))}return i+">"}(t,n),o="</"+t+">",a=D.map(r,(function(e){return e.split(/\n/).join("<br />")}));return 1===a.length?a[0]:D.map(a,(function(e){return i+e+o})).join("")}(e,!0===t?"p":t,n):function(e){return e.replace(/\r?\n/g,"<br>")}(e)}(function(e,t){var n,r,i,o=(n=function(e){return e.getParam("paste_tab_spaces",4,"number")}(e))<=0?"":new Array(n+1).join(" "),a=t.replace(/\t/g,o);return(r=function(e,t){return function(e){return-1!==" \f\t\v".indexOf(e)}(t)||t===H?e.pcIsSpace||""===e.str||e.str.length===a.length-1||function(e,t){return t<e.length&&t>=0&&te(e[t])}(a,e.str.length+1)?{pcIsSpace:!1,str:e.str+H}:{pcIsSpace:!0,str:e.str+" "}:{pcIsSpace:te(t),str:e.str+t}},i={pcIsSpace:!1,str:""},h(a,(function(e){i=r(i,e)})),i).str}(e,n),function(e){return e.getParam("forced_root_block")}(e),function(e){return e.getParam("forced_root_block_attrs")}(e));ne(e,r,!1,!0)},oe=function(e){var t={};if(e){if(e.getData){var n=e.getData("Text");n&&n.length>0&&-1===n.indexOf("data:text/mce-internal,")&&(t["text/plain"]=n)}if(e.types)for(var r=0;r<e.types.length;r++){var i=e.types[r];try{t[i]=e.getData(i)}catch(e){t[i]=""}}}return t},ae=function(e,t){return t in e&&e[t].length>0},ue=function(e){return ae(e,"text/html")||ae(e,"text/plain")},se=("mceclip",W=0,function(){return"mceclip"+W++}),ce=function(e,t,n){var r,i="paste"===t.type?t.clipboardData:t.dataTransfer;if(A(e)&&i){var o=function(e,t){var n=t.items?v(y(t.items),(function(e){return e.getAsFile()})):[],r=t.files?y(t.files):[];return function(e,t){for(var n=[],r=0,i=e.length;r<i;r++){var o=e[r];t(o,r)&&n.push(o)}return n}(n.length>0?n:r,function(e){var t=I(e);return function(e){return n=e.type,x(n,"image/",0)&&g(t,(function(t){return n=t,r={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"},(D.hasOwn(r,n)?"image/"+r[n]:"image/"+n)===e.type;var n,r}));var n}}(e))}(e,i);if(o.length>0)return t.preventDefault(),(r=o,_.all(v(r,(function(e){return new _((function(t){var n=function(e){return d(e.getAsFile)}(e)?e.getAsFile():e,r=new window.FileReader;r.onload=function(){t({blob:n,uri:r.result})},r.readAsDataURL(n)}))})))).then((function(t){n&&e.selection.setRng(n),h(t,(function(t){!function(e,t){var n,r,i=(n=t.uri,(r=/data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(n))?{type:r[1],data:decodeURIComponent(r[2])}:{type:null,data:null}),o=i.data,a=i.type,u=se(),s=t.blob,c=new Image;if(c.src=t.uri,function(e,t){var n=function(e){return e.getParam("images_dataimg_filter")}(e);return!n||n(t)}(e,c)){var l=e.editorUpload.blobCache,f=void 0,m=l.getByData(o,a);if(m)f=m;else{var p=function(e){return e.getParam("images_reuse_filename")}(e)&&d(s.name),g=p?function(e,t){var n=t.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);return d(n)?e.dom.encode(n[1]):null}(e,s.name):u,v=p?s.name:void 0;f=l.create(u,s,o,g,v),l.add(f)}re(e,'<img src="'+f.blobUri()+'">',!1)}else re(e,'<img src="'+t.uri+'">',!1)}(e,t)}))})),!0}return!1},le=function(e){return T.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode},fe=function(e){return P.ie&&e.inline?document.body:e.getBody()},de=function(e){return e.dom.get("mcepastebin")},me=function(e,t){return t===e},pe=function(e,t){var n,r=de(e);return(n=r)&&"mcepastebin"===n.id&&me(t,r.innerHTML)},ge=function(e){var t=r(null),n="%MCEPASTEBIN%";return{create:function(){return function(e,t,n){var r=e.dom,i=e.getBody();t.set(e.selection.getRng());var o=e.dom.add(fe(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:!0,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},n);(P.ie||P.gecko)&&r.setStyle(o,"left","rtl"===r.getStyle(i,"direction",!0)?65535:-65535),r.bind(o,"beforedeactivate focusin focusout",(function(e){e.stopPropagation()})),function(e,t,n){(function(e){return fe(e)!==e.getBody()})(e)&&e.dom.bind(t,"paste keyup",(function(t){pe(e,n)||e.fire("paste")}))}(e,o,n),o.focus(),e.selection.select(o,!0)}(e,t,n)},remove:function(){return function(e,t){if(de(e)){for(var n=void 0,r=t.get();n=e.dom.get("mcepastebin");)e.dom.remove(n),e.dom.unbind(n);r&&e.selection.setRng(r)}t.set(null)}(e,t)},getEl:function(){return de(e)},getHtml:function(){return function(e){var t=function(t,n){t.appendChild(n),e.dom.remove(n,!0)},n=D.grep(fe(e).childNodes,(function(e){return"mcepastebin"===e.id})),r=n.shift();D.each(n,(function(e){t(r,e)}));for(var i=e.dom.select("div[id=mcepastebin]",r),o=i.length-1;o>=0;o--){var a=e.dom.create("div");r.insertBefore(a,i[o]),t(a,i[o])}return r?r.innerHTML:""}(e)},getLastRng:function(){return function(e){return e.get()}(t)},isDefault:function(){return pe(e,n)},isDefaultContent:function(e){return me(n,e)}}},ve=function(e,t){var n=ge(e);return e.on("PreInit",(function(){return function(e,t,n){var r;(function(e,t,n){var r,i=b(),o=b();function a(e,n,r,i,o){var a;ae(n,"text/html")?a=n["text/html"]:(a=t.getHtml(),o=o||E(a),t.isDefaultContent(a)&&(i=!0)),a=U(a),t.remove();var u,s,c,l,f,d,m,p=!1===o&&!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(a),g=J(e,a);(!a.length||p&&!g)&&(i=!0),(i||g)&&(a=ae(n,"text/plain")&&p?n["text/plain"]:(u=a,s=$(),c=N({},s),l="",f=s.getShortEndedElements(),d=D.makeMap("script noscript style textarea video audio iframe object"," "),m=s.getBlockElements(),u=z(u,[/<!\[[^\]]+\]>/g]),function e(t){var n=t.name,r=t;if("br"!==n){if("wbr"!==n)if(f[n]&&(l+=" "),d[n])l+=" ";else{if(3===t.type&&(l+=t.value),!t.shortEnded&&(t=t.firstChild))do{e(t)}while(t=t.next);m[n]&&r.next&&(l+="\n","p"===n&&(l+="\n"))}}else l+="\n"}(c.parse(u)),l)),t.isDefaultContent(a)?r||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents."):i?ie(e,a):re(e,a,o)}e.on("keyup",o.clear),e.on("keydown",(function(n){var a=function(e){le(e)&&!e.isDefaultPrevented()&&t.remove()};if(le(n)&&!n.isDefaultPrevented()){if((r=n.shiftKey&&86===n.keyCode)&&P.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return;if(n.stopImmediatePropagation(),i.set(n),o.set(!0),P.ie&&r)return n.preventDefault(),void function(e,t){e.fire("paste",{ieFake:!0})}(e);t.remove(),t.create(),e.once("keyup",a),e.once("paste",(function(){e.off("keyup",a)}))}})),e.on("paste",(function(u){var s=i.isSet()||o.isSet();s&&i.clear();var c=function(e,t){return oe(t.clipboardData||e.getDoc().dataTransfer)}(e,u),l="text"===n.get()||r,f=ae(c,"x-tinymce/html");r=!1,u.isDefaultPrevented()||function(e){var t=e.clipboardData;return-1!==navigator.userAgent.indexOf("Android")&&t&&t.items&&0===t.items.length}(u)?t.remove():ue(c)||!ce(e,u,t.getLastRng()||e.selection.getRng())?(s||u.preventDefault(),!P.ie||s&&!u.ieFake||ae(c,"text/html")||(t.create(),e.dom.bind(t.getEl(),"paste",(function(e){e.stopPropagation()})),e.getDoc().execCommand("Paste",!1,null),c["text/html"]=t.getHtml()),ae(c,"text/html")?(u.preventDefault(),f||(f=E(c["text/html"])),a(e,c,s,l,f)):w.setEditorTimeout(e,(function(){a(e,c,s,l,f)}),0)):t.remove()}))})(e,t,n),e.parser.addNodeFilter("img",(function(t,n,i){var o,a=function(e){return 0===e.indexOf("webkit-fake-url")},u=function(e){return 0===e.indexOf("data:")};if(!A(e)&&function(e){return e.data&&!0===e.data.paste}(i))for(var s=t.length;s--;)(r=t[s].attr("src"))&&(a(r)||!R(e)&&u(r))&&((o=t[s]).attr("data-mce-object")||r===P.transparentSrc||o.remove())}))}(e,n,t)})),{pasteFormat:t,pasteHtml:function(t,n){return re(e,t,n)},pasteText:function(t){return ie(e,t)},pasteImageData:function(t,n){return ce(e,t,n)},getDataTransferItems:oe,hasHtmlOrText:ue,hasContentType:ae}},he=function(e,t,n,r){!function(e,t,n){if(!function(e){return!1===P.iOS&&"function"==typeof(null==e?void 0:e.setData)}(e))return!1;try{return e.clearData(),e.setData("text/html",t),e.setData("text/plain",n),e.setData("x-tinymce/html",t),!0}catch(e){return!1}}(e.clipboardData,t.html,t.text)?n(t.html,r):(e.preventDefault(),r())},ye=function(e){return function(t,n){var r=function(e){return F+e}(t),i=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"}),o=e.dom.create("div",{contenteditable:"true"},r);e.dom.setStyles(i,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"}),i.appendChild(o),e.dom.add(e.getBody(),i);var a=e.selection.getRng();o.focus();var u=e.dom.createRng();u.selectNodeContents(o),e.selection.setRng(u),w.setTimeout((function(){e.selection.setRng(a),i.parentNode.removeChild(i),n()}),0)}},be=function(e){return{html:e.selection.getContent({contextual:!0}),text:e.selection.getContent({format:"text"})}},xe=function(e){return!e.selection.isCollapsed()||function(e){return!!e.dom.getParent(e.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",e.getBody())}(e)},Pe=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils"),we=function(e,t){return Pe.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())},_e=function(e,t){e.focus(),e.selection.setRng(t)};function Te(e,t){e.on("PastePreProcess",(function(n){n.content=t(e,n.content,n.internal,n.wordContent)}))}function Ce(e,t){if(!q(t))return t;var n=[];return D.each(e.schema.getBlockElements(),(function(e,t){n.push(t)})),t=z(t,[[new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+n.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g"),"$1"]]),z(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])}function De(e,t,n,r){if(r||n)return t;var i,o=function(e){return e.getParam("paste_webkit_styles")}(e);if(!1===function(e){return e.getParam("paste_remove_styles_if_webkit",!0)}(e)||"all"===o)return t;if(o&&(i=o.split(/[, ]/)),i){var a=e.dom,u=e.selection.getNode();t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,(function(e,t,n,r){var o=a.parseStyle(a.decode(n)),s={};if("none"===i)return t+r;for(var c=0;c<i.length;c++){var l=o[i[c]],f=a.getStyle(u,i[c],!0);/color/.test(i[c])&&(l=a.toHex(l),f=a.toHex(f)),f!==l&&(s[i[c]]=l)}return(s=a.serializeStyle(s,"span"))?t+' style="'+s+'"'+r:t+r}))}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");return t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,(function(e,t,n,r){return t+' style="'+n+'"'+r}))}function ke(e,t){e.$("a",t).find("font,u").each((function(t,n){e.dom.remove(n,!0)}))}var Se=function(e,t){return function(n){n.setActive("text"===t.pasteFormat.get());var r=function(e){return n.setActive(e.state)};return e.on("PastePlainTextToggle",r),function(){return e.off("PastePlainTextToggle",r)}}};i.add("paste",(function(e){if(!1===function(e){return!!e.hasPlugin("powerpaste",!0)&&(void 0!==window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option."),!0)}(e)){var t=r(!1),n=r(function(e){return e.getParam("paste_as_text",!1)}(e)?"text":"html"),i=ve(e,n),o=function(e){P.webkit&&Te(e,De),P.ie&&(Te(e,Ce),function(e,t){e.on("PastePostProcess",(function(n){t(e,n.node)}))}(e,ke))}(e);return function(e,t){e.ui.registry.addToggleButton("pastetext",{active:!1,icon:"paste-text",tooltip:"Paste as text",onAction:function(){return e.execCommand("mceTogglePlainTextPaste")},onSetup:Se(e,t)}),e.ui.registry.addToggleMenuItem("pastetext",{text:"Paste as text",icon:"paste-text",onAction:function(){return e.execCommand("mceTogglePlainTextPaste")},onSetup:Se(e,t)})}(e,i),function(e,t){e.addCommand("mceTogglePlainTextPaste",(function(){!function(e,t){"text"===t.pasteFormat.get()?(t.pasteFormat.set("html"),C(e,!1)):(t.pasteFormat.set("text"),C(e,!0)),e.focus()}(e,t)})),e.addCommand("mceInsertClipboardContent",(function(e,n){n.content&&t.pasteHtml(n.content,n.internal),n.text&&t.pasteText(n.text)}))}(e,i),function(e){var t=e.plugins.paste,n=function(e){return e.getParam("paste_preprocess")}(e);n&&e.on("PastePreProcess",(function(e){n.call(t,t,e)}));var r=function(e){return e.getParam("paste_postprocess")}(e);r&&e.on("PastePostProcess",(function(e){r.call(t,t,e)}))}(e),function(e){e.on("cut",function(e){return function(t){xe(e)&&he(t,be(e),ye(e),(function(){if(P.browser.isChrome()||P.browser.isFirefox()){var t=e.selection.getRng();w.setEditorTimeout(e,(function(){e.selection.setRng(t),e.execCommand("Delete")}),0)}else e.execCommand("Delete")}))}}(e)),e.on("copy",function(e){return function(t){xe(e)&&he(t,be(e),ye(e),(function(){}))}}(e))}(e),function(e,t,n){(function(e){return e.getParam("paste_block_drop",!1)})(e)&&e.on("dragend dragover draggesture dragdrop drop drag",(function(e){e.preventDefault(),e.stopPropagation()})),k(e)||e.on("drop",(function(e){var t=e.dataTransfer;t&&t.files&&t.files.length>0&&e.preventDefault()})),e.on("drop",(function(r){var i=we(e,r);if(!r.isDefaultPrevented()&&!n.get()){var o,a=t.getDataTransferItems(r.dataTransfer),u=t.hasContentType(a,"x-tinymce/html");if((t.hasHtmlOrText(a)&&(!(o=a["text/plain"])||0!==o.indexOf("file://"))||!t.pasteImageData(r,i))&&i&&function(e){return e.getParam("paste_filter_drop",!0)}(e)){var s=a["mce-internal"]||a["text/html"]||a["text/plain"];s&&(r.preventDefault(),w.setEditorTimeout(e,(function(){e.undoManager.transact((function(){a["mce-internal"]&&e.execCommand("Delete"),_e(e,i),s=U(s),a["text/html"]?t.pasteHtml(s,u):t.pasteText(s)}))})))}}})),e.on("dragstart",(function(e){n.set(!0)})),e.on("dragover dragend",(function(t){k(e)&&!1===n.get()&&(t.preventDefault(),_e(e,we(e,t))),"dragend"===t.type&&n.set(!1)}))}(e,i,t),function(e,t){return{clipboard:e,quirks:t}}(i,o)}}))}();