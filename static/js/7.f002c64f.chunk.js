(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[7],{101:function(e,t,a){"use strict";t.a=function(e){return new Intl.NumberFormat(void 0,{style:"currency",currency:"TRY"}).format(e)}},102:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"k",(function(){return p})),a.d(t,"c",(function(){return d})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return v})),a.d(t,"e",(function(){return b})),a.d(t,"h",(function(){return E})),a.d(t,"f",(function(){return g})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return y})),a.d(t,"a",(function(){return N}));var n=a(4),r=a.n(n),c=a(1),u=a(108),i=a(13),l=a(2),s=a(12),o=a(8),m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n,i,m,p,d,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new FormData,e.productImages){i=Object(u.a)(e.productImages);try{for(i.s();!(m=i.n()).done;)p=m.value,n.append("productImages",p)}catch(r){i.e(r)}finally{i.f()}}return delete e.productImages,t.next=6,o.a.post("api/products/add",e);case 6:return d=t.sent,n.append("productId",parseInt(d.data)),t.next=10,o.a.post("api/products/addImages",n);case 10:a({type:l.b,payload:Object(c.a)(Object(c.a)({},e),{},{id:d.data})}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla eklendi."),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),f=JSON.parse(t.t0.response.data.ErrorMessage),a({type:l.K,payload:f}),Object(s.a)(a,!1,"\xdcr\xfcn eklenemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n,c,i,m,p;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new FormData,e.productImages.length>0){c=Object(u.a)(e.productImages);try{for(c.s();!(i=c.n()).done;)m=i.value,n.append("productImages",m)}catch(r){c.e(r)}finally{c.f()}delete e.productImages}return t.next=5,o.a.put("api/products",e);case 5:return n.append("productId",parseInt(e.id)),t.next=8,o.a.post("api/products/addImages",n);case 8:a({type:l.N,payload:e}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla g\xfcncellendi."),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),t.t0.response.data.ErrorType.toLowerCase().includes("validation")?(p=JSON.parse(t.t0.response.data.ErrorMessage),a({type:l.K,payload:p})):Object(s.a)(a,!1,"\xdcr\xfcn g\xfcncellenemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.delete("api/products/".concat(e));case 3:a({type:l.l,payload:e}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla silindi."),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(s.a)(a,!1,"\xdcr\xfcn silinemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/products");case 3:a=e.sent,t({type:l.m,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/products/bestseller");case 3:a=e.sent,t({type:l.n,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/products/dailydeals");case 3:a=e.sent,t({type:l.q,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.get("api/products/similiar/".concat(e));case 3:n=t.sent,a({type:l.y,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.get("api/products/".concat(e));case 3:if(""!==(c=a.sent).data){a.next=6;break}throw new Error;case 6:n({type:l.x,payload:c.data}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0),t.push("/notfound");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},h=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/products/specifications");case 3:a=e.sent,t({type:l.z,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},y=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o.a.delete("api/products/".concat(e,"/").concat(t));case 3:n({type:l.F,payload:t}),Object(s.a)(n,!0,"\xd6zellik ba\u015far\u0131yla silindi."),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),Object(s.a)(n,!1,"\xd6zellik silinemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},N=function(e,t,a,n){return function(){var c=Object(i.a)(r.a.mark((function c(u){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.a.post("api/comments/add",{productId:e,userId:t,rating:n.rating,commentText:n.commentText,username:a});case 3:u({type:l.a,payload:{productId:e,userId:t,rating:n.rating,commentText:n.commentText,username:a}}),Object(s.a)(u,!0,"Yorumunuz ba\u015far\u0131yla eklendi."),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),Object(s.a)(u,!0,"Yorumunuz eklenemedi. L\xfctfen daha sonra tekrar deneyiniz.");case 10:case"end":return r.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}},103:function(e,t,a){"use strict";t.a=function(e){return e.length>32?e.slice(0,32)+"...":e}},104:function(e,t,a){"use strict";var n=a(6),r=a(25),c=a(0),u=a.n(c),i=a(9);t.a=function(e){var t=e.comments,a=Object(c.useState)(0),l=Object(r.a)(a,2),s=l[0],o=l[1],m=Object(c.useState)(0),p=Object(r.a)(m,2),d=p[0],f=p[1],v=Object(c.useState)([]),b=Object(r.a)(v,2),E=b[0],g=b[1];return Object(c.useEffect)((function(){t&&t.length>0&&(o(t.length),f(Math.floor(t.map((function(e){return e.rating})).reduce((function(e,t){return e+t}))/t.length)))}),[t]),Object(c.useEffect)((function(){g(Array(d).fill(u.a.createElement(i.a,{icon:"star"}))),0!==d&&d<5&&g((function(e){return[].concat(Object(n.a)(e),Object(n.a)(Array(5-d).fill(u.a.createElement(i.a,{icon:["far","star"]}))))}))}),[d]),u.a.createElement("section",{className:"product-rating"},E.length>0?u.a.createElement(u.a.Fragment,null,E.map((function(e){return e}))):null," ",u.a.createElement("span",{className:"review-count"},s," yorum"))}},105:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r),u=a(9),i=a(14),l=a(10),s=a(22);t.a=Object(i.b)((function(e){return{userState:e.userReducer}}),(function(e){return{add:Object(l.b)(s.a,e),remove:Object(l.b)(s.g,e)}}))((function(e){var t=e.productId,a=e.add,i=e.remove,l=e.userState,s=l.favorites,o=l.userCredentials.userId,m=Object(r.useState)(["far","heart"]),p=Object(n.a)(m,2),d=p[0],f=p[1];Object(r.useEffect)((function(){t&&o&&s.find((function(e){return e.userId===o&&e.productId===Number(t)}))&&f("heart")}),[s,t,o]);return c.a.createElement(u.a,{icon:d,onClick:function(){return function(e,t){"heart"!==d?(f("heart"),a(e,t)):(f(["far","heart"]),i(e,t))}(t,o)}})}))},106:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r),u=a(107),i=a(14),l=a(10),s=a(32);t.a=Object(i.b)((function(e){return{cartId:e.cartReducer.cartId,cartItems:e.cartReducer.cartItems,authenticated:e.userReducer.authenticated}}),(function(e){return{add:Object(l.b)(s.a,e)}}))((function(e){var t=e.add,a=e.productId,i=e.cartId,l=e.cartItems,s=e.authenticated,o=Object(r.useState)(0),m=Object(n.a)(o,2),p=m[0],d=m[1];return c.a.createElement(c.a.Fragment,null,s?c.a.createElement("form",{className:"add-to-cart",onSubmit:function(e){e.preventDefault();var n=!!l.find((function(e){return e.productId===a}));t(i,a,Number(p),n)}},c.a.createElement(u.a,{handleQuantity:function(e){d(e)}}),c.a.createElement("input",{type:"submit",value:"Sepete Ekle"})):c.a.createElement("p",{style:{color:"gray",fontSize:"0.8rem",marginTop:"0.4rem"}},"Sepet ve Sipari\u015f i\u015flemleri i\xe7in giri\u015f yapmal\u0131s\u0131n\u0131z."))}))},107:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r);t.a=function(e){var t=e.defValue,a=e.handleQuantity,u=Object(r.useState)(t||1),i=Object(n.a)(u,2),l=i[0],s=i[1];Object(r.useEffect)((function(){a&&a(l)}),[l]),Object(r.useEffect)((function(){o(t)}),[t]);var o=function(e){e&&s("number"===typeof e?e:e.target.value)};return c.a.createElement("span",{className:"custom-number-input"},c.a.createElement("span",{className:"decrement",onClick:function(e){return t=e,void(Number(t.target.nextSibling.value)<=1||o(Number(t.target.nextSibling.value)-1));var t}},"-"),c.a.createElement("input",{name:"custom-number-input",className:"order-count",type:"text",onChange:o,value:l}),c.a.createElement("span",{className:"increment",onClick:function(e){return function(e){o(Number(e.target.previousSibling.value)+1)}(e)}},"+"))}},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(116),u=a(110);t.a=function(e){var t=e.container,a=e.products,i=e.isCarousel;return Object(n.useEffect)((function(){if(a&&a.length>0||"symbol"===typeof a.type)if(i)var e=Object(c.a)({container:"."+t,items:1,mouseDrag:!0,controlsText:["<",">"],loop:!0,navAsThumbnails:!0,navContainer:"#customize-thumbnails"});else var n=Object(c.a)({container:"."+t,items:1.2,mouseDrag:!0,controlsText:["<",">"],responsive:{768:{items:2.2},992:{items:3.2},1200:{items:4.2}},loop:!1});return function(){n&&n.destroy(),e&&e.destroy()}}),[a]),i?a:r.a.createElement(u.a,{container:t,products:a})}},110:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(7),u=a(104),i=a(105),l=a(14),s=a(106),o=a(101),m=a(103);t.a=Object(l.b)((function(e){return{userState:e.userReducer}}))((function(e){var t=e.container,a=e.products,n=e.userState,l=n.authenticated,p=n.userCredentials.userId;return r.a.createElement("div",{className:"product-preview-list ".concat(t||"")},a&&0!==a.length?a.map((function(e){return r.a.createElement("div",{key:e.id,className:"product-preview-wrapper"},r.a.createElement("div",{className:"product-preview"},r.a.createElement("img",{className:"preview-image",src:"https://notebookpowerapi.azurewebsites.net/"+e.productImages[0].imageUrl,alt:e.productName}),r.a.createElement(c.b,{to:"/product/"+e.id},r.a.createElement("div",{className:"preview-product-details"},r.a.createElement("h3",{className:"preview-product-name"},Object(m.a)(e.productName)),r.a.createElement(u.a,{comments:e.comments}),r.a.createElement("div",{className:"preview-product-price"},r.a.createElement("span",{className:"old-price"},Object(o.a)(e.oldPrice)),r.a.createElement("span",{className:"new-price"},Object(o.a)(e.newPrice))))),r.a.createElement("div",{className:"product-menu"},r.a.createElement(s.a,{productId:e.id,userId:p})),r.a.createElement("div",{className:"add-to-fav"},l?r.a.createElement(i.a,{productId:e.id}):null)))})):r.a.createElement("p",{className:"product-not-found"},"Arad\u0131\u011f\u0131n\u0131z kriterlerde \xfcr\xfcn bulunamad\u0131."))}))},126:function(e,t,a){e.exports=a.p+"static/media/safe-payment.ca5b131d.png"},127:function(e,t){e.exports="data:image/png;base64,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"},150:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),c=a.n(r),u=a(9),i=a(126),l=a.n(i),s=a(127),o=a.n(s),m=a(106),p=a(45),d=a(109),f=a(14),v=a(102),b=a(10),E=a(42),g=Object(f.b)((function(e){return{similiarProducts:e.productReducer.similiar}}),(function(e){return{getSimiliar:Object(b.b)(v.h,e)}}))((function(e){var t=e.similiarProducts,a=e.getSimiliar,u=Object(r.useState)(!0),i=Object(n.a)(u,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){t&&0===t.length?a(1):s(!1)}),[t.length]),c.a.createElement(c.a.Fragment,null,l?c.a.createElement(E.a,null):c.a.createElement("div",{className:"similiar-products"},c.a.createElement("h2",{className:"product-list-header"},"Benzer \xdcr\xfcnler"),c.a.createElement(d.a,{container:"similiar-products-slider",products:t})))})),h=a(104),y=function(e){var t=e.specifications;return c.a.createElement("dl",{className:"specification-list"},t&&t.map((function(e,t){return c.a.createElement(r.Fragment,{key:e.specificationName},c.a.createElement("dt",null,e.specificationName),c.a.createElement("dd",null,e.specificationValue))})))},N=a(105),k=a(11),x=a(47),O=a(27),j=function(e){var t={};return e.rating||(t.rating="Puan se\xe7mek zorunludur."),e.commentText||(t.commentText="Yorum alan\u0131n\u0131 doldurmak zorunludur."),t},w=Object(f.b)((function(e){return{userReducer:e.userReducer}}),(function(e){return{addComment:Object(b.b)(v.a,e)}}))((function(e){var t=e.addComment,a=e.userReducer,i=a.authenticated,l=a.userCredentials,s=e.productId,o=e.comments,m=Object(r.useState)(!1),p=Object(n.a)(m,2),d=p[0],f=p[1],v=Object(O.a)((function(){g.rating=parseInt(g.rating),s=parseInt(s),t(s,l.userId,l.fullname,g)}),j),b=v.handleChange,E=v.handleSubmit,g=v.values,h=v.errors;return Object(r.useEffect)((function(){o&&o.find((function(e){return e.userId===l.userId}))?f(!0):f(!1)}),[o,s]),c.a.createElement("section",{className:"comments"},i&&!d?c.a.createElement("form",{onSubmit:E},c.a.createElement("ul",{className:"ratings"},c.a.createElement("li",null,c.a.createElement("input",{type:"radio",name:"rating",value:"1",onChange:b}),c.a.createElement(u.a,{icon:"star"})),c.a.createElement("li",null,c.a.createElement("input",{type:"radio",name:"rating",value:"2",onChange:b}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"})),c.a.createElement("li",null,c.a.createElement("input",{type:"radio",name:"rating",value:"3",onChange:b}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"})),c.a.createElement("li",null,c.a.createElement("input",{type:"radio",name:"rating",value:"4",onChange:b}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"})),c.a.createElement("li",null,c.a.createElement("input",{type:"radio",name:"rating",value:"5",onChange:b}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"}),c.a.createElement(u.a,{icon:"star"})),c.a.createElement("small",{style:{color:"red"}},h.rating&&h.rating)),c.a.createElement("div",null,c.a.createElement(x.a,{placeholder:"Yorumunuz...",name:"commentText",handleChange:b,error:h.commentText,value:g.commentText}),c.a.createElement("button",null,"G\xf6nder"))):i?null:c.a.createElement("p",null,"Yorum yapabilmek i\xe7in \xfcye olmal\u0131s\u0131n\u0131z."),c.a.createElement("ul",{className:"comment-list"},o&&o.map((function(e){return c.a.createElement("li",{key:e.userId,className:"comment"},c.a.createElement("p",{className:"username"},e.username),c.a.createElement("time",null,"02.02.2020"),c.a.createElement("p",{className:"rating"},c.a.createElement(c.a.Fragment,null,Array(e.rating).fill(c.a.createElement(u.a,{icon:"star"})),Array(5-e.rating).fill(c.a.createElement(u.a,{icon:["far","star"]})))),c.a.createElement("p",{className:"comment-text"},e.commentText))}))))})),C=a(101),I=function(){return c.a.createElement("div",{className:"skeleton full-line"})},H=function(){return c.a.createElement("div",{className:"skeleton image-skeleton"})},P=function(){return c.a.createElement("div",{className:"skeleton small-line"})},S=function(){return c.a.createElement("div",{className:"skeleton skeleton-block"})},z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-slider"},c.a.createElement(H,null)),c.a.createElement("div",{className:"product-details"},c.a.createElement(P,null),c.a.createElement(P,null),c.a.createElement(I,null),c.a.createElement(I,null),c.a.createElement(I,null),c.a.createElement(S,null)),c.a.createElement(p.a,{tabName:"product-tab",tabs:[{"A\xe7\u0131klama":c.a.createElement(c.a.Fragment,null,c.a.createElement(I,null),c.a.createElement(I,null),c.a.createElement(I,null))},{Yorumlar:c.a.createElement(c.a.Fragment,null,c.a.createElement(I,null),c.a.createElement(I,null),c.a.createElement(I,null))}]}))};t.default=Object(f.b)((function(e){return{products:e.productReducer.products,authenticated:e.userReducer.authenticated}}),(function(e){return{getProduct:Object(b.b)(v.f,e)}}))((function(e){var t=e.products,a=e.getProduct,i=e.authenticated,s=Object(k.h)().productId,f=Object(k.f)(),v=Object(r.useState)({}),b=Object(n.a)(v,2),E=b[0],x=b[1];return Object(r.useEffect)((function(){var e=t.find((function(e){return Number(e.id)===Number(s)}));e||a(s,f),x(e)}),[t,s]),c.a.createElement("main",{id:"product-page"},E&&Object.keys(E).length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-slider"},c.a.createElement("div",{className:"product-slider-container"},c.a.createElement(d.a,{container:"product-slider-wrapper",isCarousel:!0,products:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"product-slider-wrapper"},E.productImages.map((function(e,t){return c.a.createElement("div",{key:t,className:"product-slider-img-container"},c.a.createElement("img",{src:"https://notebookpowerapi.azurewebsites.net/"+e.imageUrl,alt:E.productName}))}))),c.a.createElement("ul",{className:"thumbnails",id:"customize-thumbnails"},E.productImages.map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("img",{src:"https://notebookpowerapi.azurewebsites.net/"+e.imageUrl,alt:E.productName}))}))))}))),c.a.createElement("div",{className:"product-details"},c.a.createElement("h1",null,c.a.createElement("span",null,E.productName)," ",i?c.a.createElement(N.a,{productId:E.id}):null),10>E.stock?c.a.createElement("div",{className:"low-stock-number"},"Son ",E.stock," \xfcr\xfcn!"):"",c.a.createElement("div",{className:"price-and-rating"},c.a.createElement(h.a,{comments:E.comments}),c.a.createElement("div",{className:"product-price"},c.a.createElement("span",{className:"discount-amount"},c.a.createElement("span",null,"%"+Math.floor(100*(E.oldPrice-E.newPrice)/E.oldPrice)),c.a.createElement("span",null,"indirim")),c.a.createElement("div",{className:"prices"},c.a.createElement("div",{className:"old-price"},Object(C.a)(E.oldPrice)," ",c.a.createElement(u.a,{icon:"lira-sign"})),c.a.createElement("div",{className:"new-price"},Object(C.a)(E.newPrice)," ",c.a.createElement(u.a,{icon:"lira-sign"}))))),c.a.createElement(m.a,{productId:E.id}),c.a.createElement("div",{className:"trust-imgs"},c.a.createElement("img",{src:o.a,alt:""}),c.a.createElement("img",{src:l.a,alt:""}))),c.a.createElement(p.a,{tabName:"product-tab",tabs:[{"A\xe7\u0131klama":E.productDescription},{Yorumlar:c.a.createElement(w,{productId:s,comments:E.comments})}]}),c.a.createElement(y,{specifications:E.specifications})):c.a.createElement(z,null),c.a.createElement(g,null))}))}}]);
//# sourceMappingURL=7.f002c64f.chunk.js.map