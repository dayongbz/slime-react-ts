(this["webpackJsonpslime-react-ts"]=this["webpackJsonpslime-react-ts"]||[]).push([[0],{175:function(e,t,n){e.exports=n(377)},374:function(e,t,n){},375:function(e,t,n){},376:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);n(176),n(185);var a=n(2),r=n.n(a),c=n(174),i=n.n(c),o=(n(374),n(50)),s=n(82),u=n(81),m=n(17),h=(n(375),n(376),Object(a.memo)((function(e){var t=e.ctx,n=e.size,c=e.name,i=e.wrapperSize,s=Object(a.useState)([]),u=Object(o.a)(s,2),m=u[0],d=u[1],l=Object(a.useRef)(null),f=function(e){var t=l.current;t&&t.clientWidth>=10&&l.current&&(l.current.classList.remove("dot"),l.current.classList.add("wrapper"),d([1,2,3,4]))};return Object(a.useEffect)((function(){if(l.current&&t&&i){var e=l.current,n=e.offsetLeft+e.offsetWidth/2,a=e.offsetTop+e.offsetHeight/2;n=n<0?0:n>i[0]?i[0]-1:n,a=a<0?0:a>i[1]?i[1]-1:a;var r=t.getImageData(n,a,1,1).data;e.style.backgroundColor="rgb(".concat(r[0],",").concat(r[1],",").concat(r[2],")")}}),[t,c,i]),r.a.createElement("div",{ref:l,className:"dot",style:{width:n,height:n},onMouseEnter:f,onTouchStart:f},m.map((function(e){return r.a.createElement(h,{size:n/2,key:e.toString(),ctx:t,name:c,wrapperSize:i})})))}))),d=h,l=function(e,t){var n=e.width,a=e.height,r=Object(o.a)(t,2),c=r[0],i=r[1],s=n>=a?n/a:a/n,u={width:0,height:0};return c-=20,i=i-20-125,n>=a?(u.width=c,u.height=c/s,u.height>i&&(u.width=c-(u.height-i)*s,u.height=i)):(u.width=i/s,u.height=i,u.width>c&&(u.height=i-(u.width-c)*s,u.width=c)),u},f=Object(a.memo)((function(e){var t=e.name,n=e.screenSize,c=e.dispatch,i=Object(a.useRef)(null),o=Object(a.useRef)(null),s=function(e,t,n,a){var r=e.getContext("2d");return e.width=n,e.height=a,r.drawImage(t,0,0,n,a),r};return Object(a.useEffect)((function(){if(i.current&&o.current){var e=i.current,a=o.current,r=l(a,n),u=s(e,a,r.width,r.height);c({type:"SET_IMG_CTX",name:t,ctx:u,img:a})}}),[n,t]),r.a.createElement("div",{className:"".concat(t,"-wrapper")},r.a.createElement("img",{ref:o,onLoad:function(e){if(i.current&&e.target){var a=i.current,r=e.target,o=l(r,n),u=s(a,r,o.width,o.height);c({type:"SET_IMG_CTX",name:t,ctx:u,img:r})}},className:t,alt:t,src:"./img/".concat(t,".jpg")}),r.a.createElement("canvas",{ref:i,className:t}))})),p=Object(a.memo)((function(e){var t=e.member,n=e.screenSize,a=e.dispatch;return r.a.createElement("div",{id:"canvas-wrapper"},t.map((function(e){return r.a.createElement(f,{name:e,key:e,screenSize:n,dispatch:a})})))})),g=Object(a.memo)((function(e){var t=e.name,n=e.dispatch,a=e.select;return r.a.createElement("div",{onClick:function(e){n({type:"SET_NAME",name:t})},className:a?"profile selected":"profile",style:{backgroundImage:"url(./img/".concat(t,".jpg)")}})})),E=Object(a.memo)((function(e){var t=e.member,n=e.dispatch,a=e.name;return r.a.createElement("div",{id:"profile-wrapper"},r.a.createElement("div",{id:"profile-slide"},t.map((function(e){return r.a.createElement(g,{name:e,key:e,dispatch:n,select:e===a})}))))})),w=function(e,t){var n=e.height;return 2*Math.ceil(n/t)},b={name:"kimchaewon",imgCtx:{},dotSize:0,screenSize:[0,0],dotWrapperSize:[0,0],initDotsCount:[]},S=function(e,t){switch(t.type){case"SET_NAME":return Object(m.a)(Object(m.a)({},e),{},{name:t.name});case"SET_IMG_CTX":return Object(m.a)(Object(m.a)({},e),{},{imgCtx:Object(m.a)(Object(m.a)({},e.imgCtx),{},Object(u.a)({},t.name,{ctx:t.ctx,img:t.img}))});case"SET_DOT_SIZE":return Object(m.a)(Object(m.a)({},e),{},{dotSize:t.dotSize});case"SET_SCREEN_SIZE":return Object(m.a)(Object(m.a)({},e),{},{screenSize:Object(s.a)(t.size)});case"SET_DOT_WRAPPER_SIZE":return Object(m.a)(Object(m.a)({},e),{},{dotWrapperSize:Object(s.a)(t.size)});case"SET_INIT_DOTS_COUNT":return Object(m.a)(Object(m.a)({},e),{},{initDotsCount:Object(s.a)(t.initDotsCount)});default:return e}},O=Object(a.memo)((function(){var e=Object(a.useReducer)(S,b),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useRef)(["kwoneunbi","sakura","kanghyewon","choiyena","leechaeyeon","kimchaewon","kimminju","nako","hitomi","joyuri","anyujin","jangwonyoung"]),s=Object(a.useRef)(null),u=function(){c({type:"SET_SCREEN_SIZE",size:[window.innerWidth,window.innerHeight]})};return Object(a.useEffect)((function(){if(n.imgCtx[n.name]){var e=n.imgCtx[n.name].img,t=l(e,n.screenSize),a=w(t,t.width/2);c({type:"SET_DOT_SIZE",dotSize:t.width/2}),function(e,t){if(s.current){var n=s.current;n.style.width="".concat(e,"px"),n.style.height="".concat(t,"px"),c({type:"SET_DOT_WRAPPER_SIZE",size:[e,t]})}}(t.width,t.height),function(e){for(var t=[],n=0;n<e;n++)t.push(n);c({type:"SET_INIT_DOTS_COUNT",initDotsCount:t})}(a)}}),[n.imgCtx[n.name],n.name,n.screenSize]),Object(a.useEffect)((function(){u(),window.addEventListener("resize",u)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{member:i.current,screenSize:n.screenSize,dispatch:c}),r.a.createElement("div",{id:"main-wrapper",style:{height:"".concat(window.innerHeight-125,"px")}},r.a.createElement("div",{ref:s,className:"wrapper",id:"dot-wrapper"},n.initDotsCount.map((function(e){return r.a.createElement(d,{size:n.dotSize,ctx:n.imgCtx[n.name].ctx,key:e.toString(),name:n.name,wrapperSize:n.dotWrapperSize})})))),r.a.createElement(E,{member:i.current,dispatch:c,name:n.name}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.3e80f338.chunk.js.map