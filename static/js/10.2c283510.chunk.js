(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[10],{101:function(e,t,a){"use strict";t.a=function(e){return new Intl.NumberFormat(void 0,{style:"currency",currency:"TRY"}).format(e)}},103:function(e,t,a){"use strict";t.a=function(e){return e.length>50?e.slice(0,50)+"...":e}},110:function(e,t,a){"use strict";t.a=function(e){switch(e){case 0:return"Tamamland\u0131";case 1:return"Kargoda";case 2:return"Onay Bekliyor"}}},148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(9),c=a(7),u=a(15),i=a(10),s=a(22),m=a(103),o=Object(u.b)((function(e){return{userId:e.userReducer.userCredentials.userId,favorites:e.userReducer.favorites}}),(function(e){return{remove:Object(i.b)(s.g,e)}}))((function(e){var t=e.userId,a=e.favorites,r=e.remove;return n.a.createElement("section",{className:"fav-product-list"},n.a.createElement("h1",null,n.a.createElement(l.a,{icon:"heart"})," Favorilerim"),n.a.createElement("ul",null,a&&0!==a.length?a.map((function(e){return n.a.createElement("li",{className:"list-item"},n.a.createElement("figure",null,n.a.createElement("img",{src:"notebookpowerapi.myyilmaz.tech/"+e.product.productImages[0].imageUrl,alt:""})),n.a.createElement("div",{className:"product-details"},n.a.createElement(c.b,{to:"/product/".concat(e.productId)},n.a.createElement("h2",null,Object(m.a)(e.product.productName)),n.a.createElement("div",{className:"price"},e.product.newPrice," ",n.a.createElement(l.a,{icon:"lira-sign"}))),n.a.createElement("small",{onClick:function(){return a=e.productId,void r(a,t);var a}},"Favorilerden \xe7\u0131kar")))})):n.a.createElement("li",null,"Hen\xfcz favorilere ald\u0131\u011f\u0131n\u0131z bir \xfcr\xfcn yok."," ",n.a.createElement(c.b,{to:"/products",className:"link-default"},"Buraya t\u0131klayarak \xfcr\xfcnlerimizi inceleyebilirsiniz."))))})),d=a(11),E=a(110),f=a(101),p=Object(u.b)((function(e){return{userState:e.userReducer}}),(function(e){return{getOrdersByUserId:Object(i.b)(s.c,e)}}))((function(e){var t=e.userState,a=t.userCredentials,l=t.orders,u=e.getOrdersByUserId;return Object(r.useEffect)((function(){0===l.length&&a.userId&&u(a.userId)}),[a.userId]),n.a.createElement("section",{className:"order-history"},n.a.createElement("h1",null,"Sipari\u015flerim"),n.a.createElement("ul",null,l&&0!==l.length?l.map((function(e){return n.a.createElement("li",{className:"list-item"},n.a.createElement("ul",null,e.orderItems.map((function(e){return n.a.createElement("li",{className:"inner-list-item"},n.a.createElement("div",{className:"product-details"},n.a.createElement("h4",null,e.productName),n.a.createElement("dl",null,n.a.createElement("dt",null,"Adet:"),n.a.createElement("dd",null,e.productQuantity),n.a.createElement("dt",null,"Fiyat:"),n.a.createElement("dd",null,Object(f.a)(e.productQuantity*e.productPrice)," "))))}))),n.a.createElement("div",{className:"order-sum"},n.a.createElement("dl",null,n.a.createElement("dt",null,"Adres:"),n.a.createElement("dd",null,e.city+" - "+e.state+" - "+e.addressDescription),n.a.createElement("dt",null,"Tarih:"),n.a.createElement("dd",null,e.shortDate),n.a.createElement("dt",null,"Durum:"),n.a.createElement("dd",null,Object(E.a)(e.status)),n.a.createElement("dt",null,"Tutar:"),n.a.createElement("dd",null,Object(f.a)(e.totalPrice)))))})):n.a.createElement("li",null,"Hen\xfcz hi\xe7 sipari\u015finiz yok."," ",n.a.createElement(c.b,{to:"/products",className:"link-default"},"Buraya t\u0131klayarak \xfcr\xfcnlerimizi inceleyebilirsiniz."))))}));t.default=Object(u.b)((function(e){return{authenticated:e.userReducer.authenticated}}))((function(e){var t=e.authenticated,a=Object(d.f)();return Object(r.useEffect)((function(){!1===t&&a.push("/404")}),[]),n.a.createElement("main",{id:"user-page"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/user/favorites",component:o}),n.a.createElement(d.a,{exact:!0,path:"/user/orders",component:p})),n.a.createElement("ul",{className:"user-nav"},n.a.createElement("li",null,n.a.createElement(c.b,{to:"/user/favorites"},"Favorilerim")),n.a.createElement("li",null,n.a.createElement(c.b,{to:"/user/orders"},"Sipari\u015flerim"))))}))}}]);
//# sourceMappingURL=10.2c283510.chunk.js.map