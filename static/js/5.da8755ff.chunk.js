(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[5],{101:function(e,t,a){"use strict";t.a=function(e){return new Intl.NumberFormat(void 0,{style:"currency",currency:"TRY"}).format(e)}},102:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"k",(function(){return d})),a.d(t,"c",(function(){return m})),a.d(t,"g",(function(){return f})),a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return v})),a.d(t,"h",(function(){return g})),a.d(t,"f",(function(){return y})),a.d(t,"i",(function(){return h})),a.d(t,"j",(function(){return E})),a.d(t,"a",(function(){return j}));var n=a(4),r=a.n(n),c=a(1),u=a(108),i=a(13),o=a(2),s=a(12),l=a(8),p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n,i,p,d,m,f;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new FormData,e.productImages){i=Object(u.a)(e.productImages);try{for(i.s();!(p=i.n()).done;)d=p.value,n.append("productImages",d)}catch(r){i.e(r)}finally{i.f()}}return delete e.productImages,t.next=6,l.a.post("api/products/add",e);case 6:return m=t.sent,n.append("productId",parseInt(m.data)),t.next=10,l.a.post("api/products/addImages",n);case 10:a({type:o.b,payload:Object(c.a)(Object(c.a)({},e),{},{id:m.data})}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla eklendi."),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),f=JSON.parse(t.t0.response.data.ErrorMessage),a({type:o.K,payload:f}),Object(s.a)(a,!1,"\xdcr\xfcn eklenemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 19:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n,c,i,p,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=new FormData,e.productImages.length>0){c=Object(u.a)(e.productImages);try{for(c.s();!(i=c.n()).done;)p=i.value,n.append("productImages",p)}catch(r){c.e(r)}finally{c.f()}delete e.productImages}return t.next=5,l.a.put("api/products",e);case 5:return n.append("productId",parseInt(e.id)),t.next=8,l.a.post("api/products/addImages",n);case 8:a({type:o.N,payload:e}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla g\xfcncellendi."),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),t.t0.response.data.ErrorType.toLowerCase().includes("validation")?(d=JSON.parse(t.t0.response.data.ErrorMessage),a({type:o.K,payload:d})):Object(s.a)(a,!1,"\xdcr\xfcn g\xfcncellenemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.delete("api/products/".concat(e));case 3:a({type:o.l,payload:e}),Object(s.a)(a,!0,"\xdcr\xfcn ba\u015far\u0131yla silindi."),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(s.a)(a,!1,"\xdcr\xfcn silinemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/products");case 3:a=e.sent,t({type:o.m,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},b=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/products/bestseller");case 3:a=e.sent,t({type:o.n,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},v=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/products/dailydeals");case 3:a=e.sent,t({type:o.q,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("api/products/similiar/".concat(e));case 3:n=t.sent,a({type:o.y,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.get("api/products/".concat(e));case 3:if(""!==(c=a.sent).data){a.next=6;break}throw new Error;case 6:n({type:o.x,payload:c.data}),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0),t.push("/notfound");case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},h=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/products/specifications");case 3:a=e.sent,t({type:o.z,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},E=function(e,t){return function(){var a=Object(i.a)(r.a.mark((function a(n){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("api/products/".concat(e,"/").concat(t));case 3:n({type:o.F,payload:t}),Object(s.a)(n,!0,"\xd6zellik ba\u015far\u0131yla silindi."),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),Object(s.a)(n,!1,"\xd6zellik silinemedi. L\xfctfen daha sonra tekrar deneyin veya yaz\u0131l\u0131m ekibimizle irtibata ge\xe7in.");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},j=function(e,t,a,n){return function(){var c=Object(i.a)(r.a.mark((function c(u){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l.a.post("api/comments/add",{productId:e,userId:t,rating:n.rating,commentText:n.commentText,username:a});case 3:u({type:o.a,payload:{productId:e,userId:t,rating:n.rating,commentText:n.commentText,username:a}}),Object(s.a)(u,!0,"Yorumunuz ba\u015far\u0131yla eklendi."),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),Object(s.a)(u,!0,"Yorumunuz eklenemedi. L\xfctfen daha sonra tekrar deneyiniz.");case 10:case"end":return r.stop()}}),c,null,[[0,7]])})));return function(e){return c.apply(this,arguments)}}()}},103:function(e,t,a){"use strict";t.a=function(e){return e.length>32?e.slice(0,32)+"...":e}},104:function(e,t,a){"use strict";var n=a(6),r=a(25),c=a(0),u=a.n(c),i=a(9);t.a=function(e){var t=e.comments,a=Object(c.useState)(0),o=Object(r.a)(a,2),s=o[0],l=o[1],p=Object(c.useState)(0),d=Object(r.a)(p,2),m=d[0],f=d[1],b=Object(c.useState)([]),v=Object(r.a)(b,2),g=v[0],y=v[1];return Object(c.useEffect)((function(){t&&t.length>0&&(l(t.length),f(Math.floor(t.map((function(e){return e.rating})).reduce((function(e,t){return e+t}))/t.length)))}),[t]),Object(c.useEffect)((function(){y(Array(m).fill(u.a.createElement(i.a,{icon:"star"}))),0!==m&&m<5&&y((function(e){return[].concat(Object(n.a)(e),Object(n.a)(Array(5-m).fill(u.a.createElement(i.a,{icon:["far","star"]}))))}))}),[m]),u.a.createElement("section",{className:"product-rating"},g.length>0?u.a.createElement(u.a.Fragment,null,g.map((function(e){return e}))):null," ",u.a.createElement("span",{className:"review-count"},s," yorum"))}},105:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r),u=a(9),i=a(14),o=a(10),s=a(22);t.a=Object(i.b)((function(e){return{userState:e.userReducer}}),(function(e){return{add:Object(o.b)(s.a,e),remove:Object(o.b)(s.g,e)}}))((function(e){var t=e.productId,a=e.add,i=e.remove,o=e.userState,s=o.favorites,l=o.userCredentials.userId,p=Object(r.useState)(["far","heart"]),d=Object(n.a)(p,2),m=d[0],f=d[1];Object(r.useEffect)((function(){t&&l&&s.find((function(e){return e.userId===l&&e.productId===Number(t)}))&&f("heart")}),[s,t,l]);return c.a.createElement(u.a,{icon:m,onClick:function(){return function(e,t){"heart"!==m?(f("heart"),a(e,t)):(f(["far","heart"]),i(e,t))}(t,l)}})}))},106:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r),u=a(107),i=a(14),o=a(10),s=a(32);t.a=Object(i.b)((function(e){return{cartId:e.cartReducer.cartId,cartItems:e.cartReducer.cartItems,authenticated:e.userReducer.authenticated}}),(function(e){return{add:Object(o.b)(s.a,e)}}))((function(e){var t=e.add,a=e.productId,i=e.cartId,o=e.cartItems,s=e.authenticated,l=Object(r.useState)(0),p=Object(n.a)(l,2),d=p[0],m=p[1];return c.a.createElement(c.a.Fragment,null,s?c.a.createElement("form",{className:"add-to-cart",onSubmit:function(e){e.preventDefault();var n=!!o.find((function(e){return e.productId===a}));t(i,a,Number(d),n)}},c.a.createElement(u.a,{handleQuantity:function(e){m(e)}}),c.a.createElement("input",{type:"submit",value:"Sepete Ekle"})):c.a.createElement("p",{style:{color:"gray",fontSize:"0.8rem",marginTop:"0.4rem"}},"Sepet ve Sipari\u015f i\u015flemleri i\xe7in giri\u015f yapmal\u0131s\u0131n\u0131z."))}))},107:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r);t.a=function(e){var t=e.defValue,a=e.handleQuantity,u=Object(r.useState)(t||1),i=Object(n.a)(u,2),o=i[0],s=i[1];Object(r.useEffect)((function(){a&&a(o)}),[o]),Object(r.useEffect)((function(){l(t)}),[t]);var l=function(e){e&&s("number"===typeof e?e:e.target.value)};return c.a.createElement("span",{className:"custom-number-input"},c.a.createElement("span",{className:"decrement",onClick:function(e){return t=e,void(Number(t.target.nextSibling.value)<=1||l(Number(t.target.nextSibling.value)-1));var t}},"-"),c.a.createElement("input",{name:"custom-number-input",className:"order-count",type:"text",onChange:l,value:o}),c.a.createElement("span",{className:"increment",onClick:function(e){return function(e){l(Number(e.target.previousSibling.value)+1)}(e)}},"+"))}},109:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(116),u=a(110);t.a=function(e){var t=e.container,a=e.products,i=e.isCarousel;return Object(n.useEffect)((function(){if(a&&a.length>0||"symbol"===typeof a.type)if(i)var e=Object(c.a)({container:"."+t,items:1,mouseDrag:!0,controlsText:["<",">"],loop:!0,navAsThumbnails:!0,navContainer:"#customize-thumbnails"});else var n=Object(c.a)({container:"."+t,items:1.2,mouseDrag:!0,controlsText:["<",">"],responsive:{768:{items:2.2},992:{items:3.2},1200:{items:4.2}},loop:!1});return function(){n&&n.destroy(),e&&e.destroy()}}),[a]),i?a:r.a.createElement(u.a,{container:t,products:a})}},110:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(7),u=a(104),i=a(105),o=a(14),s=a(106),l=a(101),p=a(103);t.a=Object(o.b)((function(e){return{userState:e.userReducer}}))((function(e){var t=e.container,a=e.products,n=e.userState,o=n.authenticated,d=n.userCredentials.userId;return r.a.createElement("div",{className:"product-preview-list ".concat(t||"")},a&&0!==a.length?a.map((function(e){return r.a.createElement("div",{key:e.id,className:"product-preview-wrapper"},r.a.createElement("div",{className:"product-preview"},r.a.createElement("img",{className:"preview-image",src:"https://notebookpowerapi.azurewebsites.net/"+e.productImages[0].imageUrl,alt:e.productName}),r.a.createElement(c.b,{to:"/product/"+e.id},r.a.createElement("div",{className:"preview-product-details"},r.a.createElement("h3",{className:"preview-product-name"},Object(p.a)(e.productName)),r.a.createElement(u.a,{comments:e.comments}),r.a.createElement("div",{className:"preview-product-price"},r.a.createElement("span",{className:"old-price"},Object(l.a)(e.oldPrice)),r.a.createElement("span",{className:"new-price"},Object(l.a)(e.newPrice))))),r.a.createElement("div",{className:"product-menu"},r.a.createElement(s.a,{productId:e.id,userId:d})),r.a.createElement("div",{className:"add-to-fav"},o?r.a.createElement(i.a,{productId:e.id}):null)))})):r.a.createElement("p",{className:"product-not-found"},"Arad\u0131\u011f\u0131n\u0131z kriterlerde \xfcr\xfcn bulunamad\u0131."))}))},113:function(e,t,a){"use strict";var n=a(25),r=a(0),c=a.n(r),u=a(109),i=a(14),o=a(10),s=a(102),l=a(42);t.a=Object(i.b)((function(e){return{bestseller:e.productReducer.bestseller}}),(function(e){return{getBestSeller:Object(o.b)(s.d,e)}}))((function(e){var t=e.bestseller,a=e.getBestSeller,i=Object(r.useState)(!0),o=Object(n.a)(i,2),s=o[0],p=o[1];return Object(r.useEffect)((function(){t&&0===t.length?a():p(!1)}),[t.length]),c.a.createElement(c.a.Fragment,null,s?c.a.createElement(l.a,null):c.a.createElement("div",{className:"best-selling-products"},c.a.createElement("h2",{className:"product-list-header"},"\xc7ok satanlar"),c.a.createElement(u.a,{container:"best-selling-slider",products:t})))}))},120:function(e,t,a){e.exports=a.p+"static/media/promo1.8a1ba30a.png"},121:function(e,t,a){e.exports=a.p+"static/media/promo2.ef516dff.png"},122:function(e,t,a){e.exports=a.p+"static/media/promo3.0ee52ce3.png"},123:function(e,t,a){e.exports=a.p+"static/media/category_gaming.09ac2de5.jpg"},124:function(e,t,a){e.exports=a.p+"static/media/category_casual.1d18e0a7.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/category_accessories.1be6b7fb.jpg"},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(147),u=a(120),i=a.n(u),o=a(121),s=a.n(o),l=a(122),p=a.n(l),d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(c.a.Item,null,r.a.createElement("img",{src:i.a,alt:"First slide"})),r.a.createElement(c.a.Item,null,r.a.createElement("img",{src:s.a,alt:"Third slide"})),r.a.createElement(c.a.Item,null,r.a.createElement("img",{src:p.a,alt:"Third slide"}))))},m=a(123),f=a.n(m),b=a(124),v=a.n(b),g=a(125),y=a.n(g),h=a(7),E=a(14),j=a(10),O=a(46),x=Object(E.b)((function(e){return{categories:e.categoryReducer.categories}}),(function(e){return{getCategories:Object(j.b)(O.a,e)}}))((function(e){var t=e.getCategories,a=e.categories,c=[f.a,v.a,y.a];return Object(n.useEffect)((function(){a&&0===a.length&&t()}),[]),r.a.createElement("ul",{className:"category-cards-container"},a&&a.map((function(e,t){return r.a.createElement("li",{key:t,className:"category-card"},r.a.createElement(h.b,{to:"/products?category=".concat(e.categoryName)},r.a.createElement("img",{className:"category-card-image",src:c[t],alt:"gaming notebook category"})),r.a.createElement("div",{className:"category-tag"},e.categoryName))})))})),k=a(113),w=a(25),N=a(109),I=a(102),S=a(42),z=Object(E.b)((function(e){return{dailydeals:e.productReducer.dailydeals}}),(function(e){return{getDailyDeals:Object(j.b)(I.e,e)}}))((function(e){var t=e.dailydeals,a=e.getDailyDeals,c=Object(n.useState)(!0),u=Object(w.a)(c,2),i=u[0],o=u[1];return Object(n.useEffect)((function(){0===t.length?a():o(!1)}),[t.length]),r.a.createElement(r.a.Fragment,null,i?r.a.createElement(S.a,null):r.a.createElement("div",{className:"daily-deal-products"},r.a.createElement("h2",{className:"product-list-header"},"G\xfcn\xfcn F\u0131rsatlar\u0131"),r.a.createElement(N.a,{container:"daily-deal-slider",products:t})))})),C=a(29),T=a(1),F=a(44),D=Object(E.b)(null,(function(e){return{addEmail:Object(j.b)(F.a,e)}}))((function(e){var t=e.addEmail,a=Object(n.useState)({}),c=Object(w.a)(a,2),u=c[0],i=c[1];return r.a.createElement("div",{className:"mailing"},r.a.createElement("h2",null,"Yeni \xfcr\xfcnlerde veya ",r.a.createElement("br",null)," indirimlerde size haber verelim!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.email&&t(u)}},r.a.createElement("input",{type:"text",name:"email",placeholder:"E-mail",onChange:function(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(T.a)(Object(T.a)({},e),{},Object(C.a)({},a,n))}))}}),r.a.createElement("input",{type:"submit",value:"G\xf6nder"})))}));t.default=function(){return r.a.createElement("main",{id:"home"},r.a.createElement(d,null),r.a.createElement(x,null),r.a.createElement(k.a,null),r.a.createElement(D,null),r.a.createElement(z,null))}}}]);
//# sourceMappingURL=5.da8755ff.chunk.js.map