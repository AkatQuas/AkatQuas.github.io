"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Mini Egg",categories:["web server"],tags:["nodejs","eggjs"]},i=void 0,l={permalink:"/blog/2019/05/20/mini-egg",source:"@site/blog/2019-05-20-mini-egg.md",title:"Mini Egg",description:"A mini node server boilerplate on top of Koa, aiming to shed light on how Egg works.",date:"2019-05-20T00:00:00.000Z",formattedDate:"May 20, 2019",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"},{label:"eggjs",permalink:"/blog/tags/eggjs"}],readingTime:1.515,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Mini Egg",categories:["web server"],tags:["nodejs","eggjs"]},prevItem:{title:"Lite store with Hooks",permalink:"/blog/2019/07/15/lite-store-with-hooks"},nextItem:{title:"Learn some GraphQL",permalink:"/blog/2019/05/05/graphql"}},s={authorsImageUrls:[]},p=[{value:"Features",id:"features",level:2},{value:"Under the hood",id:"under-the-hood",level:2},{value:"What&#39;s not included?",id:"whats-not-included",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A mini node server boilerplate on top of Koa, aiming to shed light on how ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eggjs/egg/"},"Egg")," works."),(0,a.kt)("p",null,"Slightly different on how are the ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," initialized and used."),(0,a.kt)("p",null,"You should take it more like a shadow project for egg, rather than a framework, though, this project is suitable for small backend node project. You'd better use something more robust in production."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Static sever supported, the path can be configured in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/config.js"),", which is relative to the directory ",(0,a.kt)("inlineCode",{parentName:"p"},"/app"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Session supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trentm/node-bunyan"},"bunyan")," as logger, however the logger config is ",(0,a.kt)("em",{parentName:"p"},"hardcoded"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Websocket, using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws"),". You have to set these variables (",(0,a.kt)("inlineCode",{parentName:"p"},"token")," for example) in the first connection in the url."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// client\nconst wsc = new WebSocket(\n  'ws://localhost:8081/path-for-specific-websocket-server-instance?token=lmKam8IMg52dHbyCTk0A&uuid=hoO0TNpcIac0q7iXM139oQ'\n);\n\n// server\nwss.on('connection', (ws, req) => {\n  ws.on('message', async (message) => {\n    console.log('In thunder receive message: %s', message);\n    console.log('[Thunder] got headers: %o ', req.headers);\n    const { query } = url.parse(req.url, true);\n    console.log(\n      '[Thunder] got token \"%s\", got uuid \"%s\" ',\n      query.token,\n      query.uuid\n    );\n\n    ws.send('We[thunder] have you '.concat(message));\n    ws.close();\n  });\n  ws.on('close', async () => {\n    console.log('thunder close');\n  });\n});\n")),(0,a.kt)("h2",{id:"under-the-hood"},"Under the hood"),(0,a.kt)("p",null,"The files in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AkatQuas/mini-egg/tree/master/app/loader"},(0,a.kt)("inlineCode",{parentName:"a"},"/app/loader"))," help you to manually register those functions or instances in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," fields, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"controller"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"logger")," etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const app = new Koa();\n\n// extend the context in app, mounting controller,\n// service, logger, database connection, model, etc\nloadLogger(app);\nloadController(app);\nloadService(app);\n\n// apply middleware, body, json, csrf, staticServer, etc\napp.use(sessionMiddle(app));\napp.use(bodyMiddle);\napp.use(staticMiddle);\n\n// add router to handle requests\napp.use(routerMiddle(app));\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In some degree, these ",(0,a.kt)("inlineCode",{parentName:"p"},"loader")," functions play the role of the ",(0,a.kt)("inlineCode",{parentName:"p"},"plugin")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"extensions"),".")),(0,a.kt)("h2",{id:"whats-not-included"},"What's not included?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Server side rendering Engine.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Process daemon such as ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",null,"Agent/Worker mode for robust.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Plugin extensions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Testing Case.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Error Monitor.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Event trace."))))}u.isMDXComponent=!0}}]);