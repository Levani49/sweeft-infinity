(this["webpackJsonpsweeft-infinity"]=this["webpackJsonpsweeft-infinity"]||[]).push([[0],{31:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(24),i=c.n(r),a=(c(31),c(8)),j=c(2),o=c(15),d=c.n(o),l=c(11),b=c(25),u=c(4),O=c(10),h=c.n(O),f=c(26),x=c.n(f),m=c(1);function p(e){var t=e.url,c=Object(n.useState)([]),s=Object(u.a)(c,2),r=s[0],i=s[1],j=Object(n.useState)(1),o=Object(u.a)(j,2),O=o[0],f=o[1],p=Object(n.useState)(!0),g=Object(u.a)(p,2),v=g[0],y=g[1],w=Object(n.useState)(!0),E=Object(u.a)(w,2),S=E[0],N=E[1],k=function e(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(f((function(e){return e+1})),document.removeEventListener("scroll",e))},T=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,h.a.get("".concat(t,"/").concat(O,"/16")).then((function(e){0===e.data.list.length?y(!1):i([].concat(Object(l.a)(r),Object(l.a)(e.data.list)))})).catch((function(e){}));case 3:N(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return v&&T(),function(){document.removeEventListener("scroll",k)}}),[O]),Object(n.useEffect)((function(){return document.addEventListener("scroll",k),function(){document.removeEventListener("scroll",k)}}),[r]),Object(n.useEffect)((function(){h.a.get("".concat(t,"/").concat(O,"/16")).then((function(e){i(e.data.list),N(!1)})).catch((function(e){}))}),[t]),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"card-cont",children:r.length>0&&r.map((function(e){var t=e.id,c=e.name,n=e.imageUrl,s=e.title;return Object(m.jsx)(a.b,{to:"/user/".concat(t),children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:n+"?v="+t,alt:c}),Object(m.jsx)("h2",{children:c}),Object(m.jsx)("p",{children:s})]})},t)}))}),S&&Object(m.jsx)(x.a,{type:"TailSpin",color:"#00bf33",height:160,width:160,style:{position:"absolute"}})]})}function g(){return Object(m.jsx)(p,{url:"http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user"})}function v(e){var t=e.userData;return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("img",{src:t.imageUrl+"?v="+t.id,alt:""}),Object(m.jsxs)("fieldset",{className:"info-field",children:[Object(m.jsx)("legend",{children:"info"}),Object(m.jsx)("h2",{children:t.name}),Object(m.jsx)("p",{style:{marginBottom:"1rem"},children:t.title}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email"}),": ",t.email]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Ip address:"})," ",t.ip]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Job Area:"})," ",t.jobArea]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Job Type:"})," ",t.jobType]})]}),Object(m.jsxs)("fieldset",{className:"address-field",children:[Object(m.jsx)("legend",{children:"Address"}),Object(m.jsxs)("h3",{children:[t.company.name," ",Object(m.jsx)("br",{}),t.company.suffix]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"City:"})," ",t.address.city]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Country:"})," ",t.address.country]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"State:"})," ",t.address.state]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Zip:"})," ",t.address.zipCode]})]})]})}function y(){var e=Object(j.g)(),t=Object(n.useState)({}),c=Object(u.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),d=o[0],b=o[1];return Object(n.useEffect)((function(){window.scrollTo(0,0),h.a.get("http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/".concat(e.id)).then((function(e){r(e.data)})).catch((function(e){}))}),[e]),Object(n.useEffect)((function(){void 0!==s.name&&b([].concat(Object(l.a)(d),[{name:s.name,id:s.id}]))}),[s.name]),Object(m.jsxs)("div",{children:[void 0!==s.id&&Object(m.jsx)(v,{userData:s}),Object(m.jsxs)("div",{className:"margin-left",children:[Object(m.jsx)("p",{children:d.length>0&&d.map((function(e,t){var c=e.id,n=e.name;return Object(m.jsx)(a.b,{to:"/user/".concat(c),children:"".concat(n).concat(t!==d.length-1?">":"")},t)}))}),Object(m.jsx)("h1",{children:"FRIENDS :"})]}),Object(m.jsx)(p,{url:"http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/".concat(e.id,"/friends")})]})}function w(){return Object(m.jsx)("h1",{className:"error",children:"404 not found"})}function E(){return Object(m.jsx)(a.a,{children:Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/",element:Object(m.jsx)(g,{})}),Object(m.jsx)(j.a,{path:"/user/:id",element:Object(m.jsx)(y,{})}),Object(m.jsx)(j.a,{path:"*",exact:!0,element:Object(m.jsx)(w,{})})]})})}i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.dab0a90d.chunk.js.map