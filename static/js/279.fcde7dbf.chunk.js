"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[279],{1279:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,i,o,s,c,p=t(9439),u=t(2791),l=t(1087),f=t(3283),d=t(9014),x=t(6355),g=t(168),h=t(4934),b=h.Z.form(r||(r=(0,g.Z)(["\n      margin-top: 30px;\n      text-align: center;\n"]))),m=h.Z.input(a||(a=(0,g.Z)(["\n    width: 300px;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    border-bottom: 2px solid #efe1e1;\n    color: white;\n    font-size: 18px;\n\n    &::placeholder{\n      color: white;\n      font-size: 18px;\n\n    }\n"]))),v=h.Z.button(i||(i=(0,g.Z)(['\n/* display: flex;\nalign-items: center;\njustify-content: center; */\nfont-weight: 600;\n  padding: 0.6em 2em;\n  border: none;\n  outline: none;\n  color: rgb(255, 255, 255);\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px;\n  user-select: none;\n  touch-action: manipulation;\n\n&:before {\n  content: "";\n  background: linear-gradient(\n    45deg,\n    #ff0000,\n    #ff7300,\n \n    #ff00c8,\n    #ff0000\n  );\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  filter: blur(5px);\n  -webkit-filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  animation: glowing-button-85 20s linear infinite;\n  transition: opacity 0.3s ease-in-out;\n  border-radius: 10px;\n}\n\n@keyframes glowing-button-85 {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 400% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n&:after {\n  z-index: -1;\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  left: 0;\n  top: 0;\n  border-radius: 10px;\n}\n']))),w=(h.Z.ul(o||(o=(0,g.Z)(["\n      display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n"]))),h.Z.ul(s||(s=(0,g.Z)(["\n    list-style: none;\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n"])))),y=(h.Z.li(c||(c=(0,g.Z)(["\nwidth: 300px;\n    display: flex;\n    gap: 10px;\n    flex-direction: column;\n    font-size: 20px;\n    font-weight: bold;\n    align-items: center;\n\n"]))),t(4146)),Z=t(1454),k=t(184),j=function(){var n=(0,u.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(!1),i=(0,p.Z)(a,2),o=i[0],s=i[1],c=(0,l.lr)(),g=(0,p.Z)(c,2),h=g[0],j=g[1],_=h.get("query")||"",z=t.filter((function(n){return n.title.toLowerCase().includes(_.toLowerCase())}));return(0,u.useEffect)((function(){""!==_&&(s(!0),(0,f.Pt)(_).then((function(n){return r(n.results)})),s(!1))}),[_]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault();var e=n.target,t=e.search.value;if(""===t)return d.ZP.error("Enter movie name");j({query:t}),e.reset()},children:[(0,k.jsx)(m,{type:"text",name:"search",placeholder:"Find a movie"}),(0,k.jsxs)(v,{type:"submit",children:[(0,k.jsx)(x.U41,{})," Let`s go"]})]}),o&&(0,k.jsx)(Z.a,{}),t&&(0,k.jsx)(w,{children:z.map((function(n){return(0,k.jsx)(y.e,{movie:n},n.id)}))})]})},_=function(){return(0,k.jsx)(j,{})}},3283:function(n,e,t){t.d(e,{Pt:function(){return p},TP:function(){return l},_L:function(){return c},tx:function(){return g},zv:function(){return d}});var r=t(5861),a=t(4687),i=t.n(a),o=t(7179);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f983fc840eb543faba07dcbe6db19b0b",c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function p(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"),{params:{api_key:"f983fc840eb543faba07dcbe6db19b0b",language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function g(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"),{params:{api_key:s,language:"en-US"}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},1454:function(n,e,t){t.d(e,{a:function(){return u}});var r,a,i=t(168),o=t(4934),s=o.Z.div(r||(r=(0,i.Z)(["\n   position:absolute;\n  top:50%;\n  left:50%;\n  transform:translate(-50%,-50%);\n  width:150px;\n  height:150px;\n  background:transparent;\n  border:3px solid #3c3c3c;\n  border-radius:50%;\n  text-align:center;\n  line-height:150px;\n  font-family:sans-serif;\n  font-size:20px;\n  color:red;\n  letter-spacing:4px;\n  text-transform:uppercase;\n  text-shadow:0 0 10px #ef3f3f;\n  box-shadow:0 0 20px rgba(0,0,0,.5);  \n\n  &:before\n{\n  content:'';\n  position:absolute;\n  top:-3px;\n  left:-3px;\n  width:100%;\n  height:100%;\n  border:3px solid transparent;\n  border-top:3px solid red;\n  border-right:3px solid #c93b22;\n  border-radius:50%;\n  animation:animateC 2s linear infinite;\n}\n"]))),c=o.Z.span(a||(a=(0,i.Z)(["\n    display:block;\n  position:absolute;\n  top:calc(50% - 2px);\n  left:50%;\n  width:50%;\n  height:4px;\n  background:transparent;\n  transform-origin:left;\n  animation:animate 2s linear infinite;\n  &:before\n{\n  content:'';\n  position:absolute;\n  width:16px;\n  height:16px;\n  border-radius:50%;\n  background:#fa0505;\n  top:-6px;\n  right:-8px;\n  box-shadow:0 0 20px #fdfdfb;\n  @keyframes animateC\n{\n  0%\n  {\n    transform:rotate(0deg);\n  }\n  100%\n  {\n    transform:rotate(360deg);\n  }\n}\n@keyframes animate\n{\n  0%\n  {\n    transform:rotate(45deg);\n  }\n  100%\n  {\n    transform:rotate(405deg);\n  }\n}\n}\n"]))),p=t(184),u=function(){return(0,p.jsxs)(s,{className:"ring",children:["Loading",(0,p.jsx)(c,{})]})}},4146:function(n,e,t){t.d(e,{e:function(){return f}});t(2791);var r,a,i=t(1087),o=t(7689),s=t(168),c=t(4934),p=(c.Z.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  padding: 0;\n  padding-left: 25px;\n  margin: 0;\n"]))),c.Z.li(a||(a=(0,s.Z)(["\n  flex-basis: calc((100% - 100px) / 4);\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  font-size: 20px;\n  font-weight: bold;\n  align-items: center;\n  transform: scale(1);\n  transition: all 200ms;\n  &:hover {\n    transform: scale(1.05);\n  }\n"])))),u=t(7468),l=t(184),f=function(n){var e=n.movie,t=(0,o.TH)();return(0,l.jsxs)(p,{children:[(0,l.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:t},children:(0,l.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):u,alt:e.title,width:"300px",height:450})}),e.original_title]},null===e||void 0===e?void 0:e.id)}},7468:function(n,e,t){n.exports=t.p+"static/media/defaultMovie.f56fe8e1ce7bd975ef91.png"}}]);
//# sourceMappingURL=279.fcde7dbf.chunk.js.map