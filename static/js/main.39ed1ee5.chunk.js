(this["webpackJsonpslime-react-ts"]=this["webpackJsonpslime-react-ts"]||[]).push([[0],{175:function(e){e.exports=JSON.parse('{"names":["izone"],"izone":{"member":["kwoneunbi","sakura","kanghyewon","choiyena","leechaeyeon","kimchaewon","kimminju","nako","hitomi","joyuri","anyujin","jangwonyoung"],"imgs":{"kwoneunbi":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"sakura":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"kanghyewon":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"choiyena":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.png"],"leechaeyeon":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"kimchaewon":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"],"kimminju":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"nako":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"hitomi":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"joyuri":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"anyujin":["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],"jangwonyoung":["0.jpg","1.jpg","2.jpg","3.jpeg","4.jpg","5.jpg"]}}}')},176:function(e,t,a){e.exports=a(378)},375:function(e,t,a){},376:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){"use strict";a.r(t);a(177),a(186);var n=a(1),c=a.n(n),r=a(174),o=a.n(r),i=(a(375),a(43)),p=(a(376),a(377),Object(n.memo)((function(e){var t=e.ctx,a=e.wrapperSize,r=e.event,o=e.depth,s=e.maxDepth,u=Object(n.useState)([]),l=Object(i.a)(u,2),m=l[0],g=l[1],d=Object(n.useRef)(null),j=Object(n.useCallback)((function(){var e,t;null===(e=d.current)||void 0===e||e.classList.remove("dot"),null===(t=d.current)||void 0===t||t.classList.add("wrapper"),g([1,2,3,4])}),[]);return Object(n.useEffect)((function(){var e=d.current,t=null===e||void 0===e?void 0:e.classList.contains("dot");return e&&t&&o<s&&(e.addEventListener("mouseenter",j,{once:!0}),e.addEventListener("division",j,{once:!0})),function(){e&&t&&o<s&&(e.removeEventListener("mouseenter",j),e.removeEventListener("division",j))}}),[j,o,s]),Object(n.useEffect)((function(){var e=d.current;o>=s&&(null===e||void 0===e?void 0:e.classList.contains("wrapper"))&&(g([]),e.classList.add("dot"),e.classList.remove("wrapper"))}),[o,s]),Object(n.useEffect)((function(){if(d.current&&d.current.classList.contains("dot")&&t&&a){var e=d.current,n=e.offsetLeft+e.offsetWidth/2,c=e.offsetTop+e.offsetHeight/2;n=n<0?0:n>=a[0]?a[0]-1:n,c=c<0?0:c>=a[1]?a[1]-1:c;var r=t.getImageData(n,c,1,1).data;e.style.backgroundColor="rgb(".concat(r[0],",").concat(r[1],",").concat(r[2],")")}}),[t,a]),c.a.createElement("div",{ref:d,className:"dot"},m&&m.map((function(e){return c.a.createElement(p,{key:e.toString(),ctx:t,event:r,wrapperSize:a,depth:o+1,maxDepth:s})})))}))),s=p,u=function(e,t){var a=e.width,n=e.height,c=Object(i.a)(t,2),r=c[0],o=c[1],p=a>=n?a/n:n/a,s={width:0,height:0};return r-=20,o=o-20-(document.documentElement.clientWidth>600?125:80),a>=n?(s.width=r,s.height=r/p,s.height>o&&(s.width=r-(s.height-o)*p,s.height=o)):(s.width=o/p,s.height=o,s.width>r&&(s.height=o-(s.width-r)*p,s.width=r)),{width:Math.floor(s.width),height:Math.floor(s.height)}},l=function(e,t){var a=e.height;return 2*Math.ceil(a/t)},m=Object(n.memo)((function(e){var t=e.title,a=e.description,n=e.dispatch,r=function(){n({type:"CANCEL_MODAL_POPUP"})};return c.a.createElement("div",{id:"modal-popup-wrapper"},c.a.createElement("div",{className:"modal-popup"},c.a.createElement("div",{className:"title-wrapper"},c.a.createElement("p",{className:"title"},t)),c.a.createElement("div",{className:"description-wrapper"},c.a.createElement("p",{className:"sub"},a)),c.a.createElement("div",{className:"button-wrapper"},c.a.createElement("input",{type:"button",value:"\uc608",onClick:function(){n({type:"OK_MODAL_POPUP"})}}),c.a.createElement("input",{type:"button",value:"\uc544\ub2c8\uc624",onClick:r}))),c.a.createElement("div",{className:"background",onClick:r}))})),g=Object(n.memo)((function(e){var t=e.name,a=e.group,r=e.img,o=e.screenSize,i=e.dispatch,p=Object(n.useRef)(null),s=Object(n.useRef)(null),l=function(e,t,a,n){var c=e.getContext("2d");return e.width=a,e.height=n,c.drawImage(t,0,0,a,n),c};return Object(n.useEffect)((function(){if(p.current&&s.current){var e=p.current,n=s.current,c=u(n,o),m=l(e,n,c.width,c.height);i({type:"SET_IMG_CTX",name:"".concat(a,"/").concat(t,"/").concat(r),ctx:m,img:n})}}),[i,a,r,t,o]),c.a.createElement("div",{className:"".concat(t,"-wrapper")},c.a.createElement("img",{ref:s,onLoad:function(e){if(p.current&&e.target){var n=p.current,c=e.target,s=u(c,o),m=l(n,c,s.width,s.height);i({type:"SET_IMG_CTX_ARR",name:"".concat(a,"/").concat(t,"/").concat(r),ctx:m,img:c})}},className:"name/".concat(r," none"),alt:t,src:"./img/".concat(a,"/").concat(t,"/").concat(r)}),c.a.createElement("canvas",{ref:p,className:t}))})),d=Object(n.memo)((function(e){var t=e.name,a=e.dispatch,r=e.type,o=e.group,p=e.img,s=e.sub,u=e.depth,l=e.selected,m=Object(n.useState)(!1),g=Object(i.a)(m,2),d=g[0],j=g[1];return Object(n.useEffect)((function(){var e=new Image;e.onload=function(){j(!0)},e.src="home"===r?"./img/".concat(o,"/group/0.jpg"):"group"===r?"./img/".concat(o,"/").concat(t,"/0.jpg"):"./img/".concat(o,"/").concat(t,"/").concat(p)}),[r,o,t,p]),c.a.createElement(c.a.Fragment,null,"prev"===r?c.a.createElement("div",{className:"prev",onClick:function(){switch(a({type:"PREV_PROFILE"}),u){case 2:a({type:"SET_SELECTED_PROFILE",select:"group"});break;case 1:default:a({type:"SET_SELECTED_PROFILE",select:"home"})}}},c.a.createElement("img",{src:"./img/keyboard_arrow_left-white-18dp.svg",alt:"\uc774\uc804\uc73c\ub85c"})):d?c.a.createElement("div",{onClick:function(){"home"===r&&(a({type:"SET_SELECTED_PROFILE",select:"group"}),a({type:"SET_PROFILE",status:o})),"group"===r&&(a({type:"SET_SELECTED_PROFILE",select:"member"}),a({type:"SET_PROFILE",status:t})),"member"!==r||l||a({type:"SET_MODAL_POPUP",modalPopup:{title:"\uacbd\uace0",description:"\uc9c0\uae08\uae4c\uc9c0 \uc791\uc5c5\ud55c \ub0b4\uc6a9\ub4e4\uc774 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4.",functions:[a,a,a,a,a],args:[{type:"ADD_SELECTED_IMG",name:t,group:o,img:p},{type:"SET_INIT_DOTS_COUNT",initDotsCount:[]},{type:"SET_GROUP",group:o},{type:"SET_NAME",name:t},{type:"SET_IMG",img:p}]}})},className:"home"===r?"profile group":l?"profile selected":"profile"},l&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"icon"}),c.a.createElement("p",{className:"selectedText"},"selected")),c.a.createElement("div",{className:"background",style:"home"===r?{backgroundImage:"url(./img/".concat(o,"/group/0.jpg)")}:"group"===r?{backgroundImage:"url(./img/".concat(o,"/").concat(t,"/0.jpg)")}:{backgroundImage:"url(./img/".concat(o,"/").concat(t,"/").concat(p,")")}}),s&&c.a.createElement("p",{className:"sub"},s)):c.a.createElement("div",{className:"profile loading"},c.a.createElement("img",{src:"./img/loop-white-18dp.svg",alt:"loading"})))})),j={name:"group",dataJson:a(175),group:"izone",img:"0.jpg",selectedProfile:"home",profile:[],selectedImg:[{group:"izone",name:"group",img:"0.jpg"}],imgCtx:null,imgCtxArr:[],screenSize:[],dotWrapperSize:[],initDotsCount:[],modalPopup:[],maxDepth:6},E=a(82),f=a(33),h=a(4),O=function(e,t){switch(t.type){case"SET_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:[].concat(Object(f.a)(e.profile),[t.status])});case"PREV_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{profile:Object(f.a)(e.profile.slice(0,-1))});case"SET_NAME":return Object(h.a)(Object(h.a)({},e),{},{name:t.name});case"SET_GROUP":return Object(h.a)(Object(h.a)({},e),{},{group:t.group});case"SET_IMG":return Object(h.a)(Object(h.a)({},e),{},{img:t.img});case"SET_IMG_CTX_ARR":return Object(h.a)(Object(h.a)({},e),{},{imgCtx:{ctx:t.ctx,img:t.img},imgCtxARR:Object(h.a)(Object(h.a)({},e.imgCtx),{},Object(E.a)({},t.name,{ctx:t.ctx,img:t.img}))});case"SET_SCREEN_SIZE":return Object(h.a)(Object(h.a)({},e),{},{screenSize:Object(f.a)(t.size)});case"SET_DOT_WRAPPER_SIZE":return Object(h.a)(Object(h.a)({},e),{},{dotWrapperSize:Object(f.a)(t.size)});case"SET_INIT_DOTS_COUNT":return Object(h.a)(Object(h.a)({},e),{},{initDotsCount:Object(f.a)(t.initDotsCount)});case"SET_MODAL_POPUP":return Object(h.a)(Object(h.a)({},e),{},{modalPopup:[].concat(Object(f.a)(e.modalPopup),[Object(h.a)({},t.modalPopup)])});case"CANCEL_MODAL_POPUP":return Object(h.a)(Object(h.a)({},e),{},{modalPopup:Object(f.a)(e.modalPopup.slice(1))});case"OK_MODAL_POPUP":for(var a=0;a<e.modalPopup[0].functions.length;a++)e.modalPopup[0].functions[a](e.modalPopup[0].args[a]);return Object(h.a)(Object(h.a)({},e),{},{modalPopup:Object(f.a)(e.modalPopup.slice(1))});case"ADD_SELECTED_IMG":return Object(h.a)(Object(h.a)({},e),{},{selectedImg:[].concat(Object(f.a)(e.selectedImg),[{name:t.name,group:t.group,img:t.img}])});case"SET_MAX_DEPTH":return Object(h.a)(Object(h.a)({},e),{},{maxDepth:t.depth});case"SET_SELECTED_PROFILE":return Object(h.a)(Object(h.a)({},e),{},{selectedProfile:t.select});default:return e}},b=Object(n.memo)((function(){var e=Object(n.useReducer)(O,j),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useRef)(null),p=Object(n.useRef)(null),E=Object(n.useRef)(null),f=Object(n.useRef)(new CustomEvent("division")),h=Object(n.useRef)(0),b=function(){r({type:"SET_SCREEN_SIZE",size:[document.documentElement.clientWidth,document.documentElement.clientHeight]})},v=function(e){for(var t=[],a=0;a<e.touches.length;a++)t.push(document.elementFromPoint(e.touches[a].clientX,e.touches[a].clientY));for(var n=0;n<t.length;n++){var c=t[n];c&&c.classList.contains("dot")&&c.dispatchEvent(f.current)}};return Object(n.useEffect)((function(){a.dotWrapperSize[0]<600?r({type:"SET_MAX_DEPTH",depth:6}):a.dotWrapperSize[0]>=600&&r({type:"SET_MAX_DEPTH",depth:7})}),[a.dotWrapperSize]),Object(n.useEffect)((function(){if(a.imgCtx){var e=a.imgCtx.img,t=u(e,a.screenSize),n=l(t,t.width/2);!function(e,t){if(o.current&&p.current){var a=o.current,n=p.current;a.style.width="".concat(e,"px"),a.style.height="".concat(t,"px"),n.style.width="".concat(e,"px"),n.style.height="".concat(e,"px"),r({type:"SET_DOT_WRAPPER_SIZE",size:[e,t]})}}(t.width,t.height),function(e){for(var t=[],a=0;a<e;a++)t.push(a);r({type:"SET_INIT_DOTS_COUNT",initDotsCount:t})}(n)}}),[a.screenSize,a.imgCtx]),Object(n.useEffect)((function(){var e;null===(e=E.current)||void 0===e||e.scrollTo(0,0)}),[a.profile]),Object(n.useEffect)((function(){b();window.addEventListener("resize",(function(){h.current&&clearTimeout(h.current),h.current=setTimeout(b,300)})),window.addEventListener("touchmove",v)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"canvas-wrapper"},a.selectedImg.map((function(e){return c.a.createElement(g,{name:e.name,group:e.group,img:e.img,key:"".concat(e.group,"/").concat(e.name,"/").concat(e.img),screenSize:a.screenSize,dispatch:r})}))),c.a.createElement("div",{id:"main-wrapper",style:{height:"".concat(a.screenSize[1]-(a.screenSize[0]>600?125:80),"px")}},c.a.createElement("div",{ref:o,id:"dot-wrapper"},c.a.createElement("div",{ref:p,id:"dot-subwrapper"},a.initDotsCount.map((function(e,t){return c.a.createElement(s,{ctx:a.imgCtx.ctx,key:e.toString(),event:f.current,wrapperSize:a.dotWrapperSize,depth:1,maxDepth:a.maxDepth})}))))),c.a.createElement("div",{id:"profile-wrapper",ref:E},c.a.createElement("div",{id:"profile-slide"},"home"!==a.selectedProfile&&c.a.createElement(d,{type:"prev",dispatch:r,depth:a.profile.length}),"home"===a.selectedProfile?a.dataJson.names.map((function(e){return c.a.createElement(d,{group:e,key:e,type:"home",dispatch:r,sub:e})})):"group"===a.selectedProfile?a.dataJson[a.profile[0]].member.map((function(e){return c.a.createElement(d,{group:a.profile[0],name:e,key:e,type:"group",dispatch:r,imgs:a.dataJson[a.profile[0]].imgs[e],sub:e})})):a.dataJson[a.profile[0]].imgs[a.profile[1]].map((function(e){return c.a.createElement(d,{name:a.profile[1],img:e,group:a.profile[0],key:e,type:"member",selected:a.selectedImg[a.selectedImg.length-1].name===a.profile[1]&&a.selectedImg[a.selectedImg.length-1].group===a.profile[0]&&a.selectedImg[a.selectedImg.length-1].img===e,dispatch:r})})))),a.modalPopup?a.modalPopup.map((function(e,t){return c.a.createElement(m,{title:e.title,description:e.description,dispatch:r,key:e.title+t})})):null)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[176,1,2]]]);
//# sourceMappingURL=main.39ed1ee5.chunk.js.map