"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{3283:function(n,e,t){t.d(e,{Pt:function(){return u},TP:function(){return f},_L:function(){return c},tx:function(){return x},zv:function(){return d}});var r=t(5861),a=t(4687),i=t.n(a),o=t(7179);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f983fc840eb543faba07dcbe6db19b0b",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"f983fc840eb543faba07dcbe6db19b0b",language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},1454:function(n,e,t){t.d(e,{a:function(){return p}});var r,a,i=t(168),o=t(4934),s=o.Z.div(r||(r=(0,i.Z)(["\n   position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  width:150px;\n  height:150px;\n  background:transparent;\n  border:3px solid #3c3c3c;\n  border-radius:50%;\n  text-align:center;\n  line-height:150px;\n  font-family:sans-serif;\n  font-size:20px;\n  color:red;\n  letter-spacing:4px;\n  text-transform:uppercase;\n  text-shadow:0 0 10px #ef3f3f;\n  box-shadow:0 0 20px rgba(0,0,0,.5);  \n\n  &:before\n{\n  content:'';\n  position:absolute;\n  top:-3px;\n  left:-3px;\n  width:100%;\n  height:100%;\n  border:3px solid transparent;\n  border-top:3px solid red;\n  border-right:3px solid #c93b22;\n  border-radius:50%;\n  animation:animateC 2s linear infinite;\n}\n"]))),c=o.Z.span(a||(a=(0,i.Z)(["\n    display:block;\n  position:absolute;\n  top:calc(50% - 2px);\n  left:50%;\n  width:50%;\n  height:4px;\n  background:transparent;\n  transform-origin:left;\n  animation:animate 2s linear infinite;\n  &:before\n{\n  content:'';\n  position:absolute;\n  width:16px;\n  height:16px;\n  border-radius:50%;\n  background:#fa0505;\n  top:-6px;\n  right:-8px;\n  box-shadow:0 0 20px #fdfdfb;\n  @keyframes animateC\n{\n  0%\n  {\n    transform:rotate(0deg);\n  }\n  100%\n  {\n    transform:rotate(360deg);\n  }\n}\n@keyframes animate\n{\n  0%\n  {\n    transform:rotate(45deg);\n  }\n  100%\n  {\n    transform:rotate(405deg);\n  }\n}\n}\n"]))),u=t(184),p=function(){return(0,u.jsxs)(s,{className:"ring",children:["Loading",(0,u.jsx)(c,{})]})}},4885:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,i,o=t(5861),s=t(9439),c=t(4687),u=t.n(c),p=t(2791),f=t(7689),l=t(9126),d=t(3283),h=t(1454),x=t(168),b=t(4934),v=b.Z.ul(r||(r=(0,x.Z)(["\n    list-style: none;\n"]))),m=b.Z.b(a||(a=(0,x.Z)(["\n        font-size: 18px;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n\n"]))),g=b.Z.p(i||(i=(0,x.Z)(["\n    line-height: 1.2;\n"]))),w=t(184),Z=function(){var n=(0,p.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(null),i=(0,s.Z)(a,2)[1],c=(0,p.useState)(!1),x=(0,s.Z)(c,2),b=x[0],Z=x[1],k=(0,f.UO)().id;return(0,p.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.tx)(k);case 3:(e=n.sent)||i("We don`t have reviews for this movie"),r(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,Z(!1),i(null),n.finish(11);case 15:case"end":return n.stop()}}),n,null,[[0,8,11,15]])})))).apply(this,arguments)}Z(!0),function(){n.apply(this,arguments)}()}),[k]),(0,w.jsxs)(w.Fragment,{children:[b&&(0,w.jsx)(h.a,{}),t.length?(0,w.jsx)(v,{children:t.map((function(n){return(0,w.jsxs)("li",{children:[(0,w.jsxs)(m,{children:[(0,w.jsx)(l.HHm,{})," ",n.author]}),(0,w.jsx)(g,{children:n.content})]},n.id)}))}):(0,w.jsx)("p",{children:"We don`t have reviews for this movie"})]})}}}]);
//# sourceMappingURL=885.a7e232d2.chunk.js.map