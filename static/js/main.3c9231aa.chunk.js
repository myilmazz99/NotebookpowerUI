(this.webpackJsonpintro=this.webpackJsonpintro||[]).push([[1],{100:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(34),o=a.n(c),l=a(9),u=a(36),i=a.n(u),s=a(7),d=a(14),m=function(e){var t=e.onClose,a=e.data,r=e.modalName;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"modal-wrapper ".concat(r),onClick:function(e){return e.target.className.includes("modal-wrapper")?t(r):""}},n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-inner"},n.a.createElement("button",{onClick:function(){return t(r)},className:"close-modal-btn"},"\xd7"),"function"===typeof a?a():a))))},p=function(e){var t=document.querySelector("."+e);t&&("block"===t.style.display?t.style.display="none":t.style.display="block")},f=a(45),b=a(18),E=a(27),O=function(e){var t={};return e.fullName||(t.fullName="\u0130sim alan\u0131n\u0131 doldurmak zorunludur"),e.email||(t.email="Email alan\u0131n\u0131 doldurmak zorunludur"),e.password||(t.password="\u015eifre alan\u0131n\u0131 doldurmak zorunludur"),e.repassword!==e.password&&(t.repassword="\u015eifreleriniz uyu\u015fmuyor."),t},v=function(e){var t={};return e.email||(t.email="Email alan\u0131n\u0131 doldurmak zorunludur"),e.password||(t.password="\u015eifre alan\u0131n\u0131 doldurmak zorunludur"),t},h=a(10),y=a(22),j=Object(d.b)((function(e){return{userState:e.userReducer}}),(function(e){return{login:Object(h.b)(y.d,e)}}))((function(e){var t=e.login,a=e.userState.authError,c=Object(E.a)((function(){t(u)}),v),o=c.handleChange,l=c.handleSubmit,u=c.values,i=c.errors,s=c.updateErrors;return Object(r.useEffect)((function(){Object.keys(u).length>0&&s({authError:a})}),[a]),n.a.createElement("form",{className:"signUp-form",onSubmit:l},n.a.createElement("h4",null,"Giri\u015f Yap"),i.authError&&n.a.createElement("div",{style:{color:"red"}},"** ",i.authError),n.a.createElement(b.a,{name:"email",type:"text",placeholder:"E Mailiniz",handleChange:o,value:u.email,error:i.email}),n.a.createElement(b.a,{name:"password",type:"password",placeholder:"\u015eifre belirleyiniz",handleChange:o,value:u.password,error:i.password}),n.a.createElement(b.a,{type:"submit",value:"Giri\u015f Yap"}))})),g=a(43),S=a(11),k=Object(d.b)((function(e){return{userState:e.userReducer,validationErrors:e.userReducer.validationErrors}}),(function(e){return{register:Object(h.b)(y.f,e)}}))((function(e){var t=e.register,a=e.userState.authError,c=e.validationErrors,o=Object(S.f)(),l=Object(E.a)((function(){t(s,o)}),O),u=l.handleChange,i=l.handleSubmit,s=l.values,d=l.errors,m=l.updateErrors;return Object(r.useEffect)((function(){Object.keys(s).length>0&&m({authError:a})}),[a]),Object(r.useEffect)((function(){if(c.length>0){var e={};c.forEach((function(t){var a=Object(g.a)(t.PropertyName);e[a]=t.ErrorMessage})),m(e)}}),[c]),n.a.createElement("form",{className:"signUp-form",onSubmit:i},n.a.createElement("h4",null,"\xdcye Ol"),d.authError&&n.a.createElement("div",{style:{color:"red"}},"** ",d.authError),n.a.createElement(b.a,{name:"fullName",type:"text",placeholder:"Ad\u0131n\u0131z ve Soyad\u0131n\u0131z",handleChange:u,value:s.fullName,error:d.fullName}),n.a.createElement(b.a,{name:"email",type:"text",placeholder:"E Mailiniz",handleChange:u,value:s.email,error:d.email}),n.a.createElement(b.a,{name:"password",type:"password",placeholder:"\u015eifre belirleyiniz",handleChange:u,value:s.password,error:d.password}),n.a.createElement(b.a,{name:"repassword",type:"password",placeholder:"\u015eifre tekrar",handleChange:u,value:s.repassword,error:d.repassword}),n.a.createElement(b.a,{type:"submit",value:"Kay\u0131t Ol"}))})),C=Object(d.b)((function(e){return{userState:e.userReducer}}))((function(e){var t=e.userState,a=t.authenticated,c=t.userCredentials.userId;return Object(r.useEffect)((function(){a&&0!==c.length&&function(e){var t=document.querySelector("."+e);t&&(t.style.display="none")}("account-modal")}),[a,c]),n.a.createElement(m,{onClose:p,modalName:"account-modal",data:n.a.createElement(f.a,{tabName:"account-tab",tabs:[{"\xdcye Ol":n.a.createElement(k,null)},{"Giri\u015f Yap":n.a.createElement(j,null)}]})})})),w=a(46),N=a(25),_=function(e){var t=e.refs,a=e.closeSearchBar,c=Object(r.useState)(""),o=Object(N.a)(c,2),l=o[0],u=o[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"search-form",ref:t},n.a.createElement("input",{type:"text",name:"s",className:"search-input",onChange:function(e){var t=e.target.value;u(t)}}),n.a.createElement(s.b,{to:"/products?s=".concat(l),onClick:a},"Ara")))},R=Object(d.b)((function(e){return{cartItems:e.cartReducer.cartItems,userState:e.userReducer}}),(function(e){return{logout:Object(h.b)(y.e,e)}}))((function(e){var t=e.cartItems,a=e.userState,c=a.authenticated,o=a.userCredentials.role,u=e.logout,i=Object(r.useRef)(null),d=Object(r.useRef)(null),m=function(){i.current.classList.toggle("open")},f=function(){d.current.classList.toggle("form-visible")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"nav-user-actions"},c?n.a.createElement("li",{className:"user-action"},n.a.createElement(s.b,{to:"/cart"},n.a.createElement("span",{className:"cart-icon-wrapper"},n.a.createElement(l.a,{icon:"shopping-cart"}),n.a.createElement("small",{className:"cart-item-count"},t&&t.length||0)))):null,n.a.createElement("li",{className:"user-action"},n.a.createElement(l.a,{icon:"user-circle",onClick:function(){return c?m():p("account-modal")}}),c?n.a.createElement("ul",{className:"user-window",ref:i},n.a.createElement("li",{onClick:m},n.a.createElement(s.b,{to:"/user/favorites"},"Favorilerim")),n.a.createElement("li",{onClick:m},n.a.createElement(s.b,{to:"/user/orders"},"Sipari\u015flerim")),o.includes("admin")?n.a.createElement("li",{onClick:m},n.a.createElement(s.b,{to:"/admin"},"Y\xf6netici Paneli")):null,n.a.createElement("li",{onClick:function(){u(),m()}},n.a.createElement(s.b,{to:"/"},"\xc7\u0131k\u0131\u015f Yap"))):null),n.a.createElement("li",{className:"user-action"},n.a.createElement("button",{className:"search-btn",onClick:function(e){return function(e){e.preventDefault(),f()}(e)}},n.a.createElement(l.a,{icon:"search"})))),n.a.createElement(_,{refs:d,closeSearchBar:f}))})),x=function(){return n.a.createElement("div",{className:"contact"},n.a.createElement("div",{className:"brand-logo"},n.a.createElement("img",{src:i.a,alt:"notebook power logo"})),n.a.createElement("div",{className:"contact-detail-wrapper"},n.a.createElement("div",{className:"contact-detail"},n.a.createElement(l.a,{icon:"phone"}),n.a.createElement("span",null,"+90 531 283 61 99")),n.a.createElement("div",{className:"contact-detail"},n.a.createElement(l.a,{icon:["fab","whatsapp"]}),n.a.createElement("span",null,"+90 531 283 61 99")),n.a.createElement("div",{className:"contact-detail"},n.a.createElement(l.a,{icon:"envelope"}),n.a.createElement("span",null,"info@notebookpower.com")),n.a.createElement("div",{className:"social-media"},n.a.createElement(l.a,{icon:["fab","instagram"]}),n.a.createElement(l.a,{icon:["fab","twitter"]}),n.a.createElement(l.a,{icon:["fab","facebook"]}))))},I=function(e){var t=e.refe,a=e.toggleSideNav,r=e.categories,c=e.authenticated;return n.a.createElement("nav",{ref:t,className:"nav-expand-panel"},n.a.createElement("button",{className:"nav-shrink-btn",onClick:a},n.a.createElement(l.a,{icon:"times"})),n.a.createElement("ul",{className:"links"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/",className:"nav-link",onClick:a},"Ana Sayfa",n.a.createElement(l.a,{icon:"chevron-right",size:"xs"}))),r&&r.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(s.b,{to:"/products?category=".concat(e.categoryName),className:"nav-link",onClick:a},e.categoryName,n.a.createElement(l.a,{icon:"chevron-right",size:"xs"})))})),n.a.createElement("li",null,n.a.createElement(s.b,{to:"/products",className:"nav-link",onClick:a},"T\xfcm \xdcr\xfcnler",n.a.createElement(l.a,{icon:"chevron-right",size:"xs"})))),n.a.createElement("ul",{className:"account"},c?n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"account-link"},n.a.createElement(s.b,{to:"/cart",onClick:a},n.a.createElement(l.a,{icon:"shopping-cart"})," Sepetim")),n.a.createElement("li",{className:"account-link"},n.a.createElement(s.b,{to:"/user/favorites",onClick:a},n.a.createElement(l.a,{icon:"heart"})," Favorilerim")),n.a.createElement("li",{className:"account-link"},n.a.createElement(s.b,{to:"/user/orders",onClick:a},n.a.createElement(l.a,{icon:"dollar-sign"})," Sipari\u015flerim"))):n.a.createElement("li",{className:"account-link"},n.a.createElement("span",{onClick:function(){a(),p("account-modal")}},n.a.createElement(l.a,{icon:"user-circle"})," Giri\u015f Yap / \xdcye Ol"))),n.a.createElement("hr",null),n.a.createElement(x,null))},T=Object(d.b)((function(e){return{categories:e.categoryReducer.categories,authenticated:e.userReducer.authenticated}}),(function(e){return{getCategories:Object(h.b)(w.a,e)}}))((function(e){var t=e.categories,a=e.getCategories,c=e.authenticated,o=Object(r.useRef)(null);Object(r.useEffect)((function(){0===t.length&&a()}),[]);var u=function(){o.current.classList.toggle("expanded")};return n.a.createElement("header",null,n.a.createElement("nav",{className:"top-bar"},n.a.createElement("button",{className:"nav-expand-btn",onClick:u},n.a.createElement("div",{className:"line first-line"}),n.a.createElement("div",{className:"line second-line"}),n.a.createElement("div",{className:"line third-line"})),n.a.createElement(s.b,{to:"/",className:"home-btn"},n.a.createElement(l.a,{icon:"home"})),n.a.createElement("ul",{className:"nav-links"},t&&t.map((function(e){return n.a.createElement("li",{key:e.id,className:"nav-link"},n.a.createElement(s.b,{to:"/products?category=".concat(e.categoryName)},e.categoryName))}))),n.a.createElement("img",{src:i.a,alt:"notebookpower brand logo",className:"nav-brand"}),n.a.createElement(R,null)),n.a.createElement(I,{refe:o,categories:t,toggleSideNav:u,authenticated:c}),n.a.createElement(C,null))})),z=a(44),A=a(47),U=function(e){var t={};return e.feedbackText||(t.feedback="G\xf6r\xfc\u015f alan\u0131n\u0131 doldurmak zorunludur."),e.email||(t.email="Email alan\u0131n\u0131 doldurmak zorunludur."),e.name||(t.name="\u0130sim alan\u0131n\u0131 doldurmak zorunludur."),t},L=Object(d.b)(null,(function(e){return{addFeedback:Object(h.b)(z.b,e)}}))((function(e){var t=e.addFeedback,a=Object(E.a)(t,U),r=a.handleSubmit,c=a.handleChange,o=a.values,l=a.errors;return n.a.createElement("form",{className:"contact-form",onSubmit:r},n.a.createElement(b.a,{handleChange:c,type:"text",placeholder:"Ad\u0131n\u0131z ve Soyad\u0131n\u0131z",name:"name",value:o.name,error:l.name}),n.a.createElement(b.a,{handleChange:c,type:"email",placeholder:"E-mail",name:"email",value:o.email,error:l.email}),n.a.createElement(A.a,{handleChange:c,placeholder:"Bize g\xf6r\xfc\u015f\xfcn\xfcz\xfc bildirin...",name:"feedbackText",value:o.feedback,error:l.feedback}),n.a.createElement(b.a,{type:"submit",value:"G\xf6nder"}))})),D=function(){return n.a.createElement("footer",null,n.a.createElement("section",{className:"contact-ways"},n.a.createElement(L,null),n.a.createElement(x,null)),n.a.createElement("section",{className:"copyright"},"\xa9 2019 T\xfcm haklar\u0131 sakl\u0131d\u0131r. notebookpower.com ",n.a.createElement("br",null),"Web tasar\u0131m by myyilmaz.com"))},M=function(){var e=Object(S.g)(),t=e.pathname,a=e.search;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[t,a]),null},G=Object(d.b)((function(e){return{resultMessage:e.uiReducer.resultMessage,isError:e.uiReducer.isError,isSuccess:e.uiReducer.isSuccess}}))((function(e){var t=e.resultMessage,a=e.isError,c=e.isSuccess,o=Object(r.useRef)(void 0);return Object(r.useEffect)((function(){a&&(o.current.className="alert-wrapper alert-error alert-active"),a||(o.current.className="alert-wrapper")}),[a]),Object(r.useEffect)((function(){c&&(o.current.className="alert-wrapper alert-success alert-active"),c||(o.current.className="alert-wrapper")}),[c]),n.a.createElement("section",{className:"alert-wrapper",ref:o},n.a.createElement("p",{className:"alert"},t,t.length>1?n.a.createElement("span",{className:"alert-timer"}):null))})),P=a(60),F=a.n(P),B=a(37),V=function(){return n.a.createElement("section",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}},n.a.createElement(B.a,null,n.a.createElement("title",null,"Notebook Power - Sayfa bulunamad\u0131.")),n.a.createElement("img",{style:{display:"block",width:"50%",maxWidth:"500px"},src:F.a,alt:""}),n.a.createElement("p",{style:{marginTop:"2rem",color:"#e5e5e5"}},"Arad\u0131\u011f\u0131n\u0131z sayfay\u0131 bulamad\u0131k."," ",n.a.createElement(s.b,{style:{color:"yellow"},to:"/"},"Buradan anasayfa'ya d\xf6nerek,")," ","mevcut \xfcr\xfcnlerimizi inceleyebilirsiniz."))},J=a(42),Y=function(){return n.a.createElement("div",{style:{height:"100vh",width:"100wh",display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement(J.a,null))},q=a(23),H=Object(d.b)(null,(function(e){return{authenticate:Object(h.b)(y.b,e),logout:Object(h.b)(y.e,e)}}))((function(e){var t=e.logout,c=e.authenticate,o=Object(S.g)().pathname;Object(r.useEffect)((function(){var e=localStorage.getItem("token");if(e){var a=JSON.parse(e);Date.parse(a.expiration)<Date.now()?t():c()}}),[]);var l=Object(q.a)((function(){return a.e(8).then(a.bind(null,141))}),{fallback:n.a.createElement(Y,null)}),u=Object(q.a)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,143))}),{fallback:n.a.createElement(Y,null)}),i=Object(q.a)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,142))}),{fallback:n.a.createElement(Y,null)}),s=Object(q.a)((function(){return a.e(4).then(a.bind(null,144))}),{fallback:n.a.createElement(Y,null)}),d=Object(q.a)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,147))}),{fallback:n.a.createElement(Y,null)}),m=Object(q.a)((function(){return Promise.all([a.e(11),a.e(9)]).then(a.bind(null,145))}),{fallback:n.a.createElement(Y,null)}),p=Object(q.a)((function(){return a.e(10).then(a.bind(null,146))}),{fallback:n.a.createElement(Y,null)});return n.a.createElement(n.a.Fragment,null,n.a.createElement(B.a,null,n.a.createElement("title",null,"Notebook Power")),n.a.createElement(G,null),n.a.createElement(M,null),o.includes("admin")?n.a.createElement(S.c,null,n.a.createElement(S.a,{path:"/admin",component:l})):n.a.createElement(n.a.Fragment,null,n.a.createElement(T,null),n.a.createElement(S.c,null,n.a.createElement(S.a,{exact:!0,path:"/",component:u}),n.a.createElement(S.a,{path:"/user/:id",component:p}),n.a.createElement(S.a,{exact:!0,path:"/product/:productId",component:i}),n.a.createElement(S.a,{exact:!0,path:"/products",component:s}),n.a.createElement(S.a,{exact:!0,path:"/cart",component:d}),n.a.createElement(S.a,{exact:!0,path:"/order",component:m}),n.a.createElement(S.a,{component:V})),n.a.createElement(D,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(98),a(99);var K=a(30),W=a(15),X=a(65),Q=a(66),$=a(6),Z=a(1),ee=a(2),te={products:[],bestseller:[],dailydeals:[],similiar:[],specifications:[],errors:[]},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.m:return Object(Z.a)(Object(Z.a)({},e),{},{products:[].concat(Object($.a)(e.products.filter((function(e){return t.payload.every((function(t){return t.id!==e.id}))}))),Object($.a)(t.payload))});case ee.n:return Object(Z.a)(Object(Z.a)({},e),{},{products:[].concat(Object($.a)(e.products.filter((function(e){return t.payload.every((function(t){return t.id!==e.id}))}))),Object($.a)(t.payload)),bestseller:t.payload});case ee.q:return Object(Z.a)(Object(Z.a)({},e),{},{products:[].concat(Object($.a)(e.products.filter((function(e){return t.payload.every((function(t){return t.id!==e.id}))}))),Object($.a)(t.payload)),dailydeals:t.payload});case ee.y:return Object(Z.a)(Object(Z.a)({},e),{},{products:[].concat(Object($.a)(e.products.filter((function(e){return t.payload.every((function(t){return t.id!==e.id}))}))),Object($.a)(t.payload)),similiar:t.payload});case ee.x:return Object(Z.a)(Object(Z.a)({},e),{},{products:[].concat(Object($.a)(e.products),[t.payload])});case ee.z:return Object(Z.a)(Object(Z.a)({},e),{},{specifications:t.payload});case ee.b:return Object(Z.a)(Object(Z.a)({},e),{},{errors:[]});case ee.N:return Object(Z.a)(Object(Z.a)({},e),{},{errors:[],products:[].concat(Object($.a)(e.products.filter((function(e){return e.id!==t.payload.id}))),[t.payload])});case ee.F:return Object(Z.a)(Object(Z.a)({},e),{},{products:e.products.map((function(e){return e.specifications.filter((function(e){return e.id!==t.payload}))}))});case ee.l:return Object(Z.a)(Object(Z.a)({},e),{},{products:e.products.filter((function(e){return e.id!==t.payload}))});case ee.a:var a=e.products.find((function(e){return e.id===t.payload.productId})),r=e.products.map((function(e){return e.id===t.payload.productId?Object.assign({},a,{comments:[].concat(Object($.a)(a.comments),[t.payload])}):e}));return Object(Z.a)(Object(Z.a)({},e),{},{products:Object($.a)(r)});case ee.K:return Object(Z.a)(Object(Z.a)({},e),{},{errors:t.payload});default:return e}},re={categories:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.p:return Object(Z.a)(Object(Z.a)({},e),{},{categories:Object($.a)(t.payload)});default:return e}},ce={cartId:0,cartItems:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.k:case ee.o:return Object(Z.a)(Object(Z.a)({},e),{},{cartId:t.payload.id,cartItems:t.payload.cartItems});case ee.D:return Object(Z.a)(Object(Z.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});case ee.c:return t.payload.productExists?Object(Z.a)(Object(Z.a)({},e),{},{cartItems:[].concat(Object($.a)(e.cartItems.filter((function(e){return e.productId!==t.payload.productId}))),[t.payload])}):Object(Z.a)(Object(Z.a)({},e),{},{cartItems:[].concat(Object($.a)(e.cartItems),[t.payload])});case ee.h:var a=e.cartItems.find((function(e){return e.id===t.payload.cartItemId})),r=e.cartItems.map((function(e){return e.id===t.payload.cartItemId?Object.assign({},a,{productQuantity:t.payload.quantity}):e}));return Object(Z.a)(Object(Z.a)({},e),{},{cartItems:r});case ee.e:return Object(Z.a)(Object(Z.a)({},e),{},{cartItems:[]});default:return e}},le={authenticated:!1,userCredentials:{},favorites:[],orders:[],authError:"",validationErrors:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.A:return Object(Z.a)(Object(Z.a)({},e),{},{authenticated:!0,userCredentials:t.payload,authError:"",validationErrors:[]});case ee.C:return Object(Z.a)(Object(Z.a)({},e),{},{validationErrors:[],authError:""});case ee.B:return le;case ee.s:return Object(Z.a)(Object(Z.a)({},e),{},{favorites:t.payload});case ee.w:return Object(Z.a)(Object(Z.a)({},e),{},{orders:t.payload});case ee.d:return Object(Z.a)(Object(Z.a)({},e),{},{favorites:[].concat(Object($.a)(e.favorites),[t.payload])});case ee.E:return Object(Z.a)(Object(Z.a)({},e),{},{favorites:e.favorites.filter((function(e){return e.productId!==t.payload}))});case ee.G:return Object(Z.a)(Object(Z.a)({},e),{},{authError:t.payload});case ee.M:return Object(Z.a)(Object(Z.a)({},e),{},{validationErrors:t.payload});default:return e}},ie={feedbacks:[],emails:[]},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.t:return Object(Z.a)(Object(Z.a)({},e),{},{feedbacks:t.payload});case ee.r:return Object(Z.a)(Object(Z.a)({},e),{},{emails:t.payload});default:return e}},de={resultMessage:"",isSuccess:!1,isError:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.H:return Object(Z.a)(Object(Z.a)({},e),{},{isSuccess:!1,isError:!0,resultMessage:t.payload});case ee.f:return Object(Z.a)(Object(Z.a)({},e),{},{isError:!1,resultMessage:""});case ee.L:return Object(Z.a)(Object(Z.a)({},e),{},{isSuccess:!0,isError:!1,resultMessage:t.payload});case ee.g:return Object(Z.a)(Object(Z.a)({},e),{},{isSuccess:!1,resultMessage:""});default:return e}},pe={orders:[],errors:[],paymentError:""},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ee.I:return Object(Z.a)(Object(Z.a)({},e),{},{errors:t.payload});case ee.J:return Object(Z.a)(Object(Z.a)({},e),{},{paymentError:t.payload});case ee.i:return Object(Z.a)(Object(Z.a)({},e),{},{orders:[].concat(Object($.a)(e.orders),[t.payload]),paymentError:"",errors:[]});case ee.u:return Object(Z.a)(Object(Z.a)({},e),{},{orders:t.payload});case ee.v:return Object(Z.a)(Object(Z.a)({},e),{},{orders:[].concat(Object($.a)(e.orders),[t.payload])});case ee.j:return Object(Z.a)(Object(Z.a)({},e),{},{orders:[].concat(Object($.a)(e.orders.filter((function(e){return e.id!==t.payload.orderId}))),[t.payload])});default:return e}},be=Object(h.c)({productReducer:ae,categoryReducer:ne,cartReducer:oe,userReducer:ue,adminReducer:se,uiReducer:me,orderReducer:fe}),Ee=a(64),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,ve=function(){return Object(h.e)(be,Oe(Object(h.a)(Ee.a)))};K.b.add(W.a,W.k,W.c,W.p,W.q,W.g,W.e,W.j,X.a,Q.a,W.n,W.o,W.i,W.b,W.m,W.f,W.l,W.h,W.d);var he=ve();o.a.render(n.a.createElement(s.a,{basename:"/NotebookpowerUI"},n.a.createElement(d.a,{store:he},n.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},12:function(e,t,a){"use strict";var r=a(2);t.a=function(e,t,a){t?(e({type:r.L,payload:a}),setTimeout((function(){e({type:r.g})}),3e3)):(e({type:r.H,payload:a}),setTimeout((function(){e({type:r.f})}),3e3))}},18:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.value,a=e.handleChange,r=e.name,c=e.type,o=e.placeholder,l=e.error;return n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("input",{style:l&&{backgroundColor:"red",borderColor:"red"},type:c,name:r,placeholder:o,onChange:a,value:t||""}),l&&n.a.createElement("small",null,"** ",l))}},2:function(e,t,a){"use strict";a.d(t,"x",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"N",(function(){return c})),a.d(t,"m",(function(){return o})),a.d(t,"n",(function(){return l})),a.d(t,"q",(function(){return u})),a.d(t,"y",(function(){return i})),a.d(t,"z",(function(){return s})),a.d(t,"F",(function(){return d})),a.d(t,"l",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"K",(function(){return f})),a.d(t,"p",(function(){return b})),a.d(t,"k",(function(){return E})),a.d(t,"c",(function(){return O})),a.d(t,"o",(function(){return v})),a.d(t,"D",(function(){return h})),a.d(t,"h",(function(){return y})),a.d(t,"e",(function(){return j})),a.d(t,"C",(function(){return g})),a.d(t,"A",(function(){return S})),a.d(t,"B",(function(){return k})),a.d(t,"G",(function(){return C})),a.d(t,"M",(function(){return w})),a.d(t,"s",(function(){return N})),a.d(t,"d",(function(){return _})),a.d(t,"E",(function(){return R})),a.d(t,"w",(function(){return x})),a.d(t,"r",(function(){return I})),a.d(t,"t",(function(){return T})),a.d(t,"I",(function(){return z})),a.d(t,"J",(function(){return A})),a.d(t,"i",(function(){return U})),a.d(t,"u",(function(){return L})),a.d(t,"v",(function(){return D})),a.d(t,"j",(function(){return M})),a.d(t,"H",(function(){return G})),a.d(t,"f",(function(){return P})),a.d(t,"L",(function(){return F})),a.d(t,"g",(function(){return B}));var r="GET_PRODUCT_SUCCESS",n="GET_PRODUCTS_SUCCESS",c="UPDATE_PRODUCT_SUCCESS",o="GET_ALL_PRODUCTS_SUCCESS",l="GET_BEST_SELLER_SUCCESS",u="GET_DAILY_DEALS_SUCCESS",i="GET_SIMILIAR_SUCCESS",s="GET_SPECIFICATIONS_SUCCESS",d="REMOVE_SPECIFICATION_SUCCESS",m="DELETE_PRODUCT_SUCCESS",p="ADD_COMMENT_SUCCESS",f="SET_PRODUCT_VALIDATION_ERROR",b="GET_CATEGORIES.SUCCESS",E="CREATE_CART_SUCCESS",O="ADD_TO_CART_SUCCESS",v="GET_CART_SUCCESS",h="REMOVE_FROM_CART",y="COLLECT_CART_ITEM_PRICE",j="CLEAR_CART",g="REGISTER_SUCCESS",S="LOGIN_SUCCESS",k="LOGOUT_SUCCESS",C="SET_AUTH_ERROR",w="SET_USER_VALIDATION_ERROR",N="GET_FAVORITES_SUCCESS",_="ADD_TO_FAV_SUCCESS",R="REMOVE_FROM_FAV_SUCCESS",x="GET_PAST_ORDERS_SUCCESS",I="GET_EMAILS_SUCCESS",T="GET_FEEDBACKS_SUCCESS",z="SET_ORDER_ERROR",A="SET_PAYMENT_ERROR",U="COMPLETE_ORDER_SUCCESS",L="GET_ORDERS_SUCCESS",D="GET_ORDER_SUCCESS",M="CONFIRM_ORDER_SUCCESS",G="SET_ERROR",P="CLEAR_ERROR",F="SET_SUCCESS",B="CLEAR_SUCCESS"},22:function(e,t,a){"use strict";a.d(t,"f",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return v})),a.d(t,"g",(function(){return h})),a.d(t,"c",(function(){return y}));var r=a(4),n=a.n(r),c=a(13),o=a(2),l=a(8),u=a(59),i=a.n(u),s=a(12),d=a(35),m=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){var c,u,i,m,p,f,b,O;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.post("api/accounts/register",e);case 3:c=a.sent,r({type:o.C}),localStorage.setItem("token",JSON.stringify(c.data)),u=E(),console.log(u),r({type:o.A,payload:u}),r(Object(d.c)(u.userId)),Object(s.a)(r,!0,"Kullan\u0131c\u0131 kayd\u0131 ba\u015far\u0131l\u0131."),l.a.defaults.headers.common.Authorization="Bearer ".concat(c.data.token),t.push("/"),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(0),console.log(a.t0.response),i=a.t0.response,m=i.status,p=i.data,f=p.ErrorType,b=p.ErrorMessage,f&&a.t0.response.data.ErrorType.toLowerCase().includes("validation")?(O=JSON.parse(b),r({type:o.M,payload:O})):m&&500===m&&Object(s.a)(r,!1,"Kullan\u0131c\u0131 kay\u0131t edilirken bir hata olu\u015ftu. L\xfctfen daha sonra tekrar deneyiniz.");case 20:case"end":return a.stop()}}),a,null,[[0,15]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("api/accounts/login",e);case 3:r=t.sent,localStorage.setItem("token",JSON.stringify(r.data)),c=E(),a({type:o.A,payload:c}),l.a.defaults.headers.common.Authorization="Bearer ".concat(r.data.token),a(Object(d.d)(c.userId)),a(O(c.userId)),Object(s.a)(a,!0,"Giri\u015f ba\u015far\u0131l\u0131. Ho\u015fgeldin, "+c.fullname),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),t.t0.response&&401===t.t0.response.status&&a({type:o.G,payload:t.t0.response.data});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(e){localStorage.removeItem("token"),delete l.a.defaults.headers.common.Authorization,Object(s.a)(e,!0,"Oturum ba\u015far\u0131yla sonland\u0131r\u0131ld\u0131."),e({type:o.B})}},b=function(){return function(e){var t=E();Object(s.a)(e,!0,"Tekrar ho\u015fgeldin, ".concat(t.fullname,"! \u0130yi al\u0131\u015fveri\u015fler.")),e({type:o.A,payload:t});var a=localStorage.getItem("token"),r=JSON.parse(a);l.a.defaults.headers.common.Authorization="Bearer ".concat(r.token),e(Object(d.d)(t.userId)),e(O(t.userId))}},E=function(){var e=localStorage.getItem("token"),t=i()(e);return{email:t.email,fullname:t.fullname,role:t.role,userId:t.userId}},O=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("api/accounts/".concat(e,"/favorites"));case 3:r=t.sent,a({type:o.s,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){var c;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.post("api/accounts/addtofav",{productId:Number(e),userId:t});case 3:c=a.sent,r({type:o.d,payload:c.data}),Object(s.a)(r,!0,"\xdcr\xfcn ba\u015far\u0131yla favorilerine eklendi."),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.response),Object(s.a)(r,!0,"\xdcr\xfcn favorilerinize eklenemedi. L\xfctfen daha sonra tekrar deneyiniz.");case 12:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(c.a)(n.a.mark((function a(r){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("api/accounts/".concat(t,"/removefromfav/").concat(Number(e)));case 3:r({type:o.E,payload:Number(e)}),Object(s.a)(r,!0,"\xdcr\xfcn ba\u015far\u0131yla favorilerinizden \xe7\u0131kar\u0131ld\u0131."),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),Object(s.a)(r,!1,"\xdcr\xfcn favorilerinizden \xe7\u0131kar\u0131lamad\u0131. L\xfctfen daha sonra tekrar deneyiniz.");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},y=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("api/orders/".concat(e,"/orders"));case 3:r=t.sent,a({type:o.w,payload:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},27:function(e,t,a){"use strict";var r=a(6),n=a(29),c=a(1),o=a(25),l=a(0);t.a=function(e,t){var a=Object(l.useState)(!1),u=Object(o.a)(a,2),i=u[0],s=u[1],d=Object(l.useState)({}),m=Object(o.a)(d,2),p=m[0],f=m[1],b=Object(l.useState)({}),E=Object(o.a)(b,2),O=E[0],v=E[1];Object(l.useEffect)((function(){0===Object.keys(p).length&&i?(e(O),s(!1)):s(!1)}),[i]);return{values:O,handleSubmit:function(e){e&&e.preventDefault(),s(!0),f(t(O))},handleChange:function(e){var t=e.target,a=t.name,r=t.value;v((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(n.a)({},a,r))}))},handleUpload:function(e){var t=e.target,a=t.name,o=t.files;v((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(n.a)({},a,Object(r.a)(o)))}))},errors:p,updateValues:function(e){v(e)},updateErrors:function(e){f(e)}}}},35:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"d",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(4),n=a.n(r),c=a(1),o=a(13),l=a(8),u=a(2),i=a(12),s=function(e,t,a,r){return function(){var s=Object(o.a)(n.a.mark((function o(s){var d;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.put("api/carts",{productId:t,id:e,quantity:a,productExists:r});case 3:d=n.sent,s({type:u.c,payload:Object(c.a)(Object(c.a)({},d.data),{},{productExists:r})}),Object(i.a)(s,!0,"\xdcr\xfcn sepetinize eklendi."),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Object(i.a)(s,!1,"\xdcr\xfcn sepetinize eklenemedi. L\xfctfen daha sonra tekrar deneyin.");case 11:case"end":return n.stop()}}),o,null,[[0,8]])})));return function(e){return s.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.post("api/carts/create",{userId:e});case 3:r=t.sent,a({type:u.k,payload:r.data}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e,t){return function(){var a=Object(o.a)(n.a.mark((function a(r){return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.a.delete("api/carts/".concat(e,"/").concat(t));case 3:r({type:u.D,payload:t}),Object(i.a)(r,!1,"\xdcr\xfcn sepetinizden \xe7\u0131kar\u0131ld\u0131."),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),Object(i.a)(r,!1,"\xdcr\xfcn sepetinizden \xe7\u0131kar\u0131lamad\u0131. L\xfctfen daha sonra tekrar deneyin.");case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(a){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("api/carts/".concat(e));case 3:r=t.sent,a({type:u.o,payload:r.data}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return{type:u.h,payload:e}}},36:function(e,t,a){e.exports=a.p+"static/media/logo.0f27625d.png"},42:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(63),o=a.n(c),l={display:"block",width:"70px",margin:"0 auto"};t.a=function(){return n.a.createElement("img",{className:"loading-spinner",src:o.a,alt:"",style:l})}},43:function(e,t,a){"use strict";t.a=function(e){return e.charAt(0).toLowerCase()+e.slice(1)}},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return d})),a.d(t,"d",(function(){return m}));var r=a(4),n=a.n(r),c=a(13),o=a(8),l=a(2),u=a(12),i=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("api/admin/email",e);case 3:Object(u.a)(a,!0,"Mailiniz taraf\u0131m\u0131za iletilmi\u015ftir. \u0130yi al\u0131\u015fveri\u015fler dileriz."),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),Object(u.a)(a,!1,"Mailiniz g\xf6nderilemedi. L\xfctfen daha sonra tekrar deneyiniz.");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},s=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/admin/emails");case 3:a=e.sent,t({type:l.r,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(n.a.mark((function t(a){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("api/admin/feedback",e);case 3:Object(u.a)(a,!0,"G\xf6r\xfc\u015f\xfcn\xfcz taraf\u0131m\u0131za de\u011ferlendirilmek \xfczere iletilmi\u015ftir. \u0130yi al\u0131\u015fveri\u015fler dileriz."),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),Object(u.a)(a,!1,"G\xf6r\xfc\u015f\xfcn\xfcz taraf\u0131m\u0131za iletilemedi. L\xfctfen daha sonra tekrar deneyiniz."),console.log(t.t0.response);case 10:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("api/admin/feedbacks");case 3:a=e.sent,t({type:l.t,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},45:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.tabs,a=Object(r.useRef)(null),c=Object(r.useRef)(null);Object(r.useEffect)((function(){a.current.childNodes[0].classList.add("tab-active"),c.current.childNodes[0].classList.add("show")}),[]);return n.a.createElement("section",{className:"tabs"},n.a.createElement("ul",{ref:a,className:"tab-container",onClick:function(e){!function(e){for(var r=a.current.childNodes,n=c.current.childNodes,o=0;o<r.length;o++)r[o].className.includes("tab-active")&&(r[o].classList.remove("tab-active"),n[o].classList.remove("show")),e.target.innerText===Object.keys(t[o]).toString()&&(r[o].classList.add("tab-active"),n[o].classList.add("show"),Object.values(t[o]),e.target.classList.add("tab-active"))}(e)}},t.map((function(e,t){return n.a.createElement("li",{key:Object.getOwnPropertyNames(e)[0],className:"tab tab-".concat(t)},Object.getOwnPropertyNames(e))}))),n.a.createElement("div",{className:"tabs-data",ref:c},t&&t.map((function(e,t){return"string"===typeof Object.values(e)[0]?n.a.createElement("div",{key:Object.getOwnPropertyNames(e)[0]+t,dangerouslySetInnerHTML:{__html:Object.values(e)},className:"tab-data tab-".concat(t)}):n.a.createElement("div",{key:t,className:"tab-data tab-".concat(t)},Object.values(e))}))))}},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(4),n=a.n(r),c=a(13),o=a(2),l=a(8),u=function(){return function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("api/categories/get");case 3:a=e.sent,t({type:o.p,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log({error:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},47:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){var t=e.value,a=e.handleChange,r=e.name,c=e.placeholder,o=e.error;return n.a.createElement("div",{className:"input-wrapper"},n.a.createElement("textarea",{style:o&&{backgroundColor:"#ffcccc",borderColor:"red"},name:r,cols:"auto",rows:"auto",placeholder:c,onChange:a,value:t}),o&&n.a.createElement("small",null,"** ",o))}},60:function(e,t,a){e.exports=a.p+"static/media/Code404.3f9e2988.svg"},63:function(e,t,a){e.exports=a.p+"static/media/loadingSpinner.36c05682.gif"},67:function(e,t,a){e.exports=a(100)},8:function(e,t,a){"use strict";var r=a(58),n=a.n(r).a.create({baseURL:"https://notebookpowerapi.myyilmaz.tech/"});t.a=n},98:function(e,t,a){},99:function(e,t,a){}},[[67,2,3]]]);
//# sourceMappingURL=main.3c9231aa.chunk.js.map