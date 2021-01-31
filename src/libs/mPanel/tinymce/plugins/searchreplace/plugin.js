!function(){"use strict";var e,t,n,r,o,i=function(e){var t=e;return{get:function(){return t},set:function(e){t=e}}},a=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e){return function(){return e}},l=c(!1),s=c(!0),f=c("[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"),d=function(){return m},m=(e=function(e){return e.isNone()},{fold:function(e,t){return e()},is:l,isSome:l,isNone:s,getOr:n=function(e){return e},getOrThunk:t=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:c(null),getOrUndefined:c(void 0),or:n,orThunk:t,map:d,each:function(){},bind:d,exists:l,forall:s,filter:d,equals:e,equals_:e,toArray:function(){return[]},toString:c("none()")}),h=function(e){var t=c(e),n=function(){return o},r=function(t){return t(e)},o={fold:function(t,n){return n(e)},is:function(t){return e===t},isSome:s,isNone:l,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:n,orThunk:n,map:function(t){return h(t(e))},each:function(t){t(e)},bind:r,exists:r,forall:r,filter:function(t){return t(e)?o:m},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(t){return t.is(e)},equals_:function(t,n){return t.fold(l,(function(t){return n(e,t)}))}};return o},g={some:h,none:d,from:function(e){return null==e?m:h(e)}},p=f,v=tinymce.util.Tools.resolve("tinymce.util.Tools"),y=function(e){return function(t){return r=typeof(n=t),(null===n?"null":"object"===r&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"===r&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":r)===e;var n,r}},x=function(e){return function(t){return typeof t===e}},b=y("string"),w=y("array"),O=x("boolean"),C=x("number"),k=Array.prototype.slice,E=Array.prototype.push,N=function(e,t){for(var n=e.length,r=new Array(n),o=0;o<n;o++){var i=e[o];r[o]=t(i,o)}return r},T=function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n)},S=function(e,t){for(var n=e.length-1;n>=0;n--)t(e[n],n)},A=function(e,t){return function(e){for(var t=[],n=0,r=e.length;n<r;++n){if(!w(e[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+e);E.apply(t,e[n])}return t}(N(e,t))},B=Object.hasOwnProperty,I=function(e,t){return B.call(e,t)},M=("undefined"!=typeof window?window:Function("return this;")(),3,function(e){return 3===function(e){return e.dom.nodeType}(e)}),F=function(e){if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},P=F,R=function(e,t){return{element:e,offset:t}},D=function(e,t){(function(e,t){(function(e){return g.from(e.dom.parentNode).map(P)})(e).each((function(n){n.dom.insertBefore(t.dom,e.dom)}))})(e,t),function(e,t){e.dom.appendChild(t.dom)}(t,e)},W=(r=M,"text",{get:function(e){if(!r(e))throw new Error("Can only get text value of a text node");return o(e).getOr("")},getOption:o=function(e){return r(e)?g.from(e.dom.nodeValue):g.none()},set:function(e,t){if(!r(e))throw new Error("Can only set raw text value of a text node");e.dom.nodeValue=t}}),j=function(e){return W.get(e)},q=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker"),V=function(e,t){return e.isBlock(t)||I(e.schema.getShortEndedElements(),t.nodeName)},_=function(e,t){return"false"===e.getContentEditable(t)},U=function(e,t){return!e.isBlock(t)&&I(e.schema.getWhiteSpaceElements(),t.nodeName)},$=function(e,t){return function(e,t){var n=function(e){return N(e.dom.childNodes,P)}(e);return n.length>0&&t<n.length?R(n[t],0):R(e,t)}(P(e),t)},z=function(e,t,n,r,o,i){void 0===i&&(i=!0);for(var a=i?t(!1):n;a;){var u=_(e,a);if(u||U(e,a)){if(u?r.cef(a):r.boundary(a))break;a=t(!0)}else{if(V(e,a)){if(r.boundary(a))break}else 3===a.nodeType&&r.text(a);if(a===o)break;a=t(!1)}}},G=function(e,t,n,r,o){if(!function(e,t){return V(e,t)||_(e,t)||U(e,t)||function(e,t){return"true"===e.getContentEditable(t)&&"false"===e.getContentEditableParent(t.parentNode)}(e,t)}(e,n)){var i=e.getParent(r,e.isBlock),a=new q(n,i),u=o?a.next:a.prev;z(e,u,n,{boundary:s,cef:s,text:function(e){o?t.fOffset+=e.length:t.sOffset+=e.length,t.elements.push(P(e))}})}},K=function(e,t,n,r,o,i){void 0===i&&(i=!0);var a=new q(n,t),u=[],c={sOffset:0,fOffset:0,elements:[]};G(e,c,n,t,!1);var l=function(){return c.elements.length>0&&(u.push(c),c={sOffset:0,fOffset:0,elements:[]}),!1};return z(e,a.next,n,{boundary:l,cef:function(e){return l(),o&&u.push.apply(u,o.cef(e)),!1},text:function(e){c.elements.push(P(e)),o&&o.text(e,c)}},r,i),r&&G(e,c,r,t,!0),l(),u},H=function(e,t){var n=$(t.startContainer,t.startOffset),r=n.element.dom,o=$(t.endContainer,t.endOffset),i=o.element.dom;return K(e,t.commonAncestorContainer,r,i,{text:function(e,t){e===i?t.fOffset+=e.length-o.offset:e===r&&(t.sOffset+=n.offset)},cef:function(t){var n,r,o,i;return n=A((i=P(t),function(e,t){var n,r=void 0===t?document:t.dom;return 1!==(n=r).nodeType&&9!==n.nodeType&&11!==n.nodeType||0===n.childElementCount?[]:N(r.querySelectorAll(e),P)}("*[contenteditable=true]",i)),(function(t){var n=t.dom;return K(e,n,n)})),r=function(e,t){return function(e,t){return function(e,t,n){return 0!=(e.compareDocumentPosition(t)&n)}(e,t,Node.DOCUMENT_POSITION_PRECEDING)}(e.elements[0].dom,t.elements[0].dom)?1:-1},(o=k.call(n,0)).sort(r),o}},!1)},J=function(e,t){return t.collapsed?[]:H(e,t)},L=function(e,t){var n=e.createRng();return n.selectNode(t),J(e,n)},Q=function(e,t){return A(t,(function(t){var n=t.elements,r=N(n,j).join("");return function(e,t){var n,r,o;return function(e,t){if(0===e.length)return[];for(var n=t(e[0]),r=[],o=[],i=0,a=e.length;i<a;i++){var u=e[i],c=t(u);c!==n&&(r.push(o),o=[]),n=c,o.push(u)}return 0!==o.length&&r.push(o),r}((n=e,r=function(e,n){var r=j(n),o=e.last,i=o+r.length,a=A(t,(function(e,t){return e.start<i&&e.finish>o?[{element:n,start:Math.max(o,e.start)-o,finish:Math.min(i,e.finish)-o,matchId:t}]:[]}));return{results:e.results.concat(a),last:i}},o={results:[],last:0},T(n,(function(e){o=r(o,e)})),o).results,(function(e){return e.matchId}))}(n,function(e,t,n,r){void 0===n&&(n=0),void 0===r&&(r=e.length);var o=t.regex;o.lastIndex=n;for(var i,a=[];i=o.exec(e);){var u=i[t.matchIndex],c=i.index+i[0].indexOf(u),l=c+u.length;if(l>r)break;a.push({start:c,finish:l}),o.lastIndex=l}return a}(r,e,t.sOffset,r.length-t.fOffset))}))},X=function(e,t){S(e,(function(e,n){S(e,(function(e){var r,o,i=P(t.cloneNode(!1));r="data-mce-index",o=n,function(e,t,n){if(!(b(n)||O(n)||C(n)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",n,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,n+"")}(i.dom,r,o);var a=e.element.dom;if(a.length===e.finish&&0===e.start)D(e.element,i);else{a.length!==e.finish&&a.splitText(e.finish);var u=a.splitText(e.start);D(P(u),i)}}))}))},Y=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},Z=function(e,t,n,r){var o=e.dom.create("span",{"data-mce-bogus":1});o.className="mce-match-marker";var i=e.getBody();return le(e,t,!1),r?function(e,t,n,r){var o=n.getBookmark(),i=e.select("td[data-mce-selected],th[data-mce-selected]"),a=i.length>0?function(e,t){return A(t,(function(t){return L(e,t)}))}(e,i):J(e,n.getRng()),u=Q(t,a);return X(u,r),n.moveToBookmark(o),u.length}(e.dom,n,e.selection,o):function(e,t,n,r){var o=L(e,n),i=Q(t,o);return X(i,r),i.length}(e.dom,n,i,o)},ee=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},te=function(e,t){var n=[],r=v.toArray(e.getBody().getElementsByTagName("span"));if(r.length)for(var o=0;o<r.length;o++){var i=Y(r[o]);null!==i&&i.length&&i===t.toString()&&n.push(r[o])}return n},ne=function(e,t,n){var r=t.get(),o=r.index,i=e.dom;(n=!1!==n)?o+1===r.count?o=0:o++:o-1==-1?o=r.count-1:o--,i.removeClass(te(e,r.index),"mce-match-marker-selected");var a=te(e,o);return a.length?(i.addClass(te(e,o),"mce-match-marker-selected"),e.selection.scrollIntoView(a[0]),o):-1},re=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},oe=function(e,t,n,r,o,i){var a=function(e,t){var n="("+e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(/\s/g,"[^\\S\\r\\n\\uFEFF]")+")";return t?"(?:^|\\s|"+p()+")"+n+"(?=$|\\s|"+p()+")":n}(n,o),u={regex:new RegExp(a,r?"g":"gi"),matchIndex:1},c=Z(e,t,u,i);if(c){var l=ne(e,t,!0);t.set({index:l,count:c,text:n,matchCase:r,wholeWord:o,inSelection:i})}return c},ie=function(e,t){var n=ne(e,t,!0);t.set(u(u({},t.get()),{index:n}))},ae=function(e,t){var n=ne(e,t,!1);t.set(u(u({},t.get()),{index:n}))},ue=function(e){var t=Y(e);return null!==t&&t.length>0},ce=function(e,t,n,r,o){var i,a=t.get(),c=a.index,l=c;r=!1!==r;for(var s=e.getBody(),f=v.grep(v.toArray(s.getElementsByTagName("span")),ue),d=0;d<f.length;d++){var m=Y(f[d]),h=i=parseInt(m,10);if(o||h===a.index){for(n.length?(f[d].firstChild.nodeValue=n,ee(f[d])):re(e.dom,f[d]);f[++d];){if((h=parseInt(Y(f[d]),10))!==i){d--;break}re(e.dom,f[d])}r&&l--}else i>c&&f[d].setAttribute("data-mce-index",String(i-1))}return t.set(u(u({},a),{count:o?0:a.count-1,index:l})),r?ie(e,t):ae(e,t),!o&&t.get().count>0},le=function(e,t,n){var r,o,i,a=t.get(),c=v.toArray(e.getBody().getElementsByTagName("span"));for(r=0;r<c.length;r++){var l=Y(c[r]);null!==l&&l.length&&(l===a.index.toString()&&(o||(o=c[r].firstChild),i=c[r].firstChild),ee(c[r]))}if(t.set(u(u({},a),{index:-1,count:0,text:""})),o&&i){var s=e.dom.createRng();return s.setStart(o,0),s.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(s),s}},se=tinymce.util.Tools.resolve("tinymce.Env"),fe=function(e,t){var n,r=(n=i(g.none()),{clear:function(){return n.set(g.none())},set:function(e){return n.set(g.some(e))},isSet:function(){return n.get().isSome()},on:function(e){return n.get().each(e)}});e.undoManager.add();var o=v.trim(e.selection.getContent({format:"text"}));function a(e){(!function(e,t){return t.get().count>1}(0,t)?e.disable:e.enable)("next"),(function(e,t){return t.get().count>1}(0,t)?e.enable:e.disable)("prev")}var c=function(e,t){var n=t?e.disable:e.enable;T(["replace","replaceall","prev","next"],n)},l=function(e,t){se.browser.isSafari()&&se.deviceType.isTouch()&&("find"===t||"replace"===t||"replaceall"===t)&&e.focus(t)},s=function(n){le(e,t,!1),c(n,!0),a(n)},f=function(n){var r=n.getData(),o=t.get();if(r.findtext.length){if(o.text===r.findtext&&o.matchCase===r.matchcase&&o.wholeWord===r.wholewords)ie(e,t);else{var i=oe(e,t,r.findtext,r.matchcase,r.wholewords,r.inselection);i<=0&&function(t){e.windowManager.alert("Could not find the specified string.",(function(){t.focus("findtext")}))}(n),c(n,0===i)}a(n)}else s(n)},d=t.get(),m={title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"bar",items:[{type:"input",name:"findtext",placeholder:"Find",maximized:!0,inputMode:"search"},{type:"button",name:"prev",text:"Previous",icon:"action-prev",disabled:!0,borderless:!0},{type:"button",name:"next",text:"Next",icon:"action-next",disabled:!0,borderless:!0}]},{type:"input",name:"replacetext",placeholder:"Replace with",inputMode:"search"}]},buttons:[{type:"menu",name:"options",icon:"preferences",tooltip:"Preferences",align:"start",items:[{type:"togglemenuitem",name:"matchcase",text:"Match case"},{type:"togglemenuitem",name:"wholewords",text:"Find whole words only"},{type:"togglemenuitem",name:"inselection",text:"Find in selection"}]},{type:"custom",name:"find",text:"Find",primary:!0},{type:"custom",name:"replace",text:"Replace",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",disabled:!0}],initialData:{findtext:o,replacetext:"",wholewords:d.wholeWord,matchcase:d.matchCase,inselection:d.inSelection},onChange:function(e,n){"findtext"===n.name&&t.get().count>0&&s(e)},onAction:function(n,r){var o=n.getData();switch(r.name){case"find":f(n);break;case"replace":ce(e,t,o.replacetext)?a(n):s(n);break;case"replaceall":ce(e,t,o.replacetext,!0,!0),s(n);break;case"prev":ae(e,t),a(n);break;case"next":ie(e,t),a(n);break;case"matchcase":case"wholewords":case"inselection":!function(e){var n=e.getData(),r=t.get();t.set(u(u({},r),{matchCase:n.matchcase,wholeWord:n.wholewords,inSelection:n.inselection}))}(n),s(n)}l(n,r.name)},onSubmit:function(e){f(e),l(e,"find")},onClose:function(){e.focus(),le(e,t),e.undoManager.add()}};r.set(e.windowManager.open(m,{inline:"toolbar"}))},de=function(e,t){return function(){fe(e,t)}};a.add("searchreplace",(function(e){var t=i({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1,inSelection:!1});return function(e,t){e.addCommand("SearchReplace",(function(){fe(e,t)}))}(e,t),function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:de(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:de(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",de(e,t))}(e,t),function(e,t){return{done:function(n){return le(e,t,n)},find:function(n,r,o,i){return void 0===i&&(i=!1),oe(e,t,n,r,o,i)},next:function(){return ie(e,t)},prev:function(){return ae(e,t)},replace:function(n,r,o){return ce(e,t,n,r,o)}}}(e,t)}))}();