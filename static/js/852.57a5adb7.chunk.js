"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{283:function(e,n,t){t.d(n,{Pt:function(){return o},TP:function(){return f},_L:function(){return s},tx:function(){return v},zv:function(){return h}});var r=t(861),a=t(687),c=t.n(a),u=t(912);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="f983fc840eb543faba07dcbe6db19b0b",s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/credits"),{params:{api_key:"f983fc840eb543faba07dcbe6db19b0b",language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("movie/".concat(n,"/reviews"),{params:{api_key:i,language:"en-US"}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},852:function(e,n,t){t.r(n),t.d(n,{Cast:function(){return k}});var r,a,c,u,i=t(861),s=t(439),o=t(687),p=t.n(o),f=t(791),l=t(689),h=t(168),d=t(934),v=d.Z.ul(r||(r=(0,h.Z)(["\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 15px;\n    padding: 0;\n"]))),g=d.Z.li(a||(a=(0,h.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 100%;\n    gap: 4px;\n    \n"]))),m=d.Z.h2(c||(c=(0,h.Z)(["\n    font-size: 16px;\n    margin: 0;\n    text-align: center;\n"]))),x=d.Z.p(u||(u=(0,h.Z)(["\n   margin: 0;  \n   text-align: center;\n"]))),b=t(162),y=t(454),w=t(283),Z=t(184),k=function(){var e=(0,f.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,f.useState)(!1),c=(0,s.Z)(a,2),u=c[0],o=c[1],h=(0,l.UO)().id;return(0,f.useEffect)((function(){function e(){return e=(0,i.Z)(p().mark((function e(n){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,w.zv)(n);case 3:t=e.sent,r(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,o(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])}))),e.apply(this,arguments)}!function(n){e.apply(this,arguments)}(h)}),[h]),(0,Z.jsxs)(Z.Fragment,{children:[u&&(0,Z.jsx)(y.a,{}),(0,Z.jsx)(v,{children:t.map((function(e){return(0,Z.jsxs)(g,{children:[(0,Z.jsx)("img",{src:e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):b,alt:e.name,width:120,height:180}),(0,Z.jsx)(m,{children:e.name}),(0,Z.jsx)(x,{children:e.character})]},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())}))})]})}},162:function(e,n,t){e.exports=t.p+"static/media/defaultCast.424cdc4208fea0b5eebb.png"}}]);
//# sourceMappingURL=852.57a5adb7.chunk.js.map