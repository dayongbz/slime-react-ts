(this["webpackJsonpslime-react-ts"]=this["webpackJsonpslime-react-ts"]||[]).push([[0],{175:function(e,t,n){e.exports=n(377)},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);n(176),n(185);var a=n(2),c=n.n(a),r=n(174),i=n.n(r),o=(n(374),n(50)),m=n(82),u=n(81),s=n(17),h=(n(375),n(376),Object(a.memo)((function(e){var t=e.ctx,n=e.size,r=e.name,i=e.wrapperSize,m=Object(a.useState)([]),u=Object(o.a)(m,2),s=u[0],d=u[1],l=Object(a.useRef)(null),f=function(e){var t=l.current;t&&t.clientWidth>=10&&l.current&&(l.current.classList.remove("dot"),l.current.classList.add("wrapper"),d([1,2,3,4]))};return Object(a.useEffect)((function(){if(l.current&&t&&i){var e=l.current,n=e.offsetLeft+e.offsetWidth/2,a=e.offsetTop+e.offsetHeight/2;n=n<0?0:n>i[0]?i[0]-1:n,a=a<0?0:a>i[1]?i[1]-1:a;var c=t.getImageData(n,a,1,1).data;e.style.backgroundColor="rgb(".concat(c[0],",").concat(c[1],",").concat(c[2],")")}}),[t,r,i]),c.a.createElement("div",{ref:l,className:"dot",style:{width:n,height:n},onMouseEnter:f,onTouchStart:f},s.map((function(e){return c.a.createElement(h,{size:n/2,key:e.toString(),ctx:t,name:r,wrapperSize:i})})))}))),d=h,l=function(e,t){var n=e.width,a=e.height,c=Object(o.a)(t,2),r=c[0],i=c[1],m=n>=a?n/a:a/n,u={width:0,height:0};return r-=20,i=i-20-125,n>=a?(u.width=r,u.height=r/m,u.height>i&&(u.width=r-(u.height-i)*m,u.height=i)):(u.width=i/m,u.height=i,u.width>r&&(u.height=i-(u.width-r)*m,u.width=r)),u},f=Object(a.memo)((function(e){var t=e.name,n=e.screenSize,r=e.dispatch,i=Object(a.useRef)(null),o=Object(a.useRef)(null),m=function(e,t,n,a){var c=e.getContext("2d");return e.width=n,e.height=a,c.drawImage(t,0,0,n,a),c};return Object(a.useEffect)((function(){if(i.current&&o.current){var e=i.current,a=o.current,c=l(a,n),u=m(e,a,c.width,c.height);r({type:"SET_IMG_CTX",name:t,ctx:u,img:a})}}),[n,t]),c.a.createElement("div",{className:"".concat(t,"-wrapper")},c.a.createElement("img",{ref:o,onLoad:function(e){if(i.current&&e.target){var a=i.current,c=e.target,o=l(c,n),u=m(a,c,o.width,o.height);r({type:"SET_IMG_CTX",name:t,ctx:u,img:c})}},className:t,alt:t,src:"./img/".concat(t,".jpg")}),c.a.createElement("canvas",{ref:i,className:t}))})),p=Object(a.memo)((function(e){var t=e.member,n=e.screenSize,a=e.dispatch;return c.a.createElement("div",{id:"canvas-wrapper"},t.map((function(e){return c.a.createElement(f,{name:e,key:e,screenSize:n,dispatch:a})})))})),g=Object(a.memo)((function(e){var t=e.name,n=e.dispatch,a=e.select;return c.a.createElement("div",{onClick:function(e){n({type:"SET_NAME",name:t})},className:a?"profile selected":"profile",style:{backgroundImage:"url(./img/".concat(t,".jpg)")}})})),E=Object(a.memo)((function(e){var t=e.member,n=e.dispatch,a=e.name;return c.a.createElement("div",{id:"profile-wrapper"},c.a.createElement("div",{id:"profile-slide"},t.map((function(e){return c.a.createElement(g,{name:e,key:e,dispatch:n,select:e===a})}))))})),b=function(e,t){var n=e.height;return 2*Math.ceil(n/t)},S={name:"kimchaewon",imgCtx:{},dotSize:0,screenSize:[0,0],dotWrapperSize:[0,0],initDotsCount:[]},O=function(e,t){switch(t.type){case"SET_NAME":return Object(s.a)(Object(s.a)({},e),{},{name:t.name});case"SET_IMG_CTX":return Object(s.a)(Object(s.a)({},e),{},{imgCtx:Object(s.a)(Object(s.a)({},e.imgCtx),{},Object(u.a)({},t.name,{ctx:t.ctx,img:t.img}))});case"SET_DOT_SIZE":return Object(s.a)(Object(s.a)({},e),{},{dotSize:t.dotSize});case"SET_SCREEN_SIZE":return Object(s.a)(Object(s.a)({},e),{},{screenSize:Object(m.a)(t.size)});case"SET_DOT_WRAPPER_SIZE":return Object(s.a)(Object(s.a)({},e),{},{dotWrapperSize:Object(m.a)(t.size)});case"SET_INIT_DOTS_COUNT":return Object(s.a)(Object(s.a)({},e),{},{initDotsCount:Object(m.a)(t.initDotsCount)});default:return e}},j=Object(a.memo)((function(){var e=Object(a.useReducer)(O,S),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useRef)(["kwoneunbi","sakura","kanghyewon","choiyena","leechaeyeon","kimchaewon","kimminju","nako","hitomi","joyuri","anyujin","jangwonyoung"]),m=Object(a.useRef)(null),u=function(){r({type:"SET_SCREEN_SIZE",size:[document.documentElement.clientWidth,document.documentElement.clientHeight]})};return Object(a.useEffect)((function(){if(n.imgCtx[n.name]){var e=n.imgCtx[n.name].img,t=l(e,n.screenSize),a=b(t,t.width/2);r({type:"SET_DOT_SIZE",dotSize:t.width/2}),function(e,t){if(m.current){var n=m.current;n.style.width="".concat(e,"px"),n.style.height="".concat(t,"px"),r({type:"SET_DOT_WRAPPER_SIZE",size:[e,t]})}}(t.width,t.height),function(e){for(var t=[],n=0;n<e;n++)t.push(n);r({type:"SET_INIT_DOTS_COUNT",initDotsCount:t})}(a)}}),[n.imgCtx[n.name],n.name,n.screenSize]),Object(a.useEffect)((function(){u(),window.addEventListener("resize",u)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{member:i.current,screenSize:n.screenSize,dispatch:r}),c.a.createElement("div",{id:"main-wrapper",style:{height:"".concat(document.documentElement.clientHeight-125,"px")}},c.a.createElement("div",{ref:m,className:"wrapper",id:"dot-wrapper"},n.initDotsCount.map((function(e){return c.a.createElement(d,{size:n.dotSize,ctx:n.imgCtx[n.name].ctx,key:e.toString(),name:n.name,wrapperSize:n.dotWrapperSize})})))),c.a.createElement(E,{member:i.current,dispatch:r,name:n.name}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.d510a26b.chunk.js.map