"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),k=l,d=m["".concat(i,".").concat(k)]||m[k]||s[k]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const o={title:"\u67b6\u6784\u8bbe\u8ba1\u7684\u4e00\u4e9b\u54f2\u5b66\u7ecf\u9a8c",tags:["architecture","philosophy"]},a=void 0,p={permalink:"/blog/2022/05/30/architecture-design-imo",source:"@site/blog/2022-05-30-architecture-design-imo.md",title:"\u67b6\u6784\u8bbe\u8ba1\u7684\u4e00\u4e9b\u54f2\u5b66\u7ecf\u9a8c",description:"\u7ecf\u8fc7\u591a\u4e2a\u9879\u76ee\u7684\u6d17\u793c\uff0c\u5f97\u5230\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u67b6\u6784\u8bbe\u8ba1\u7ecf\u9a8c\uff0c\u4e0b\u9762\u7684\u5185\u5bb9\u4ece\u7a0b\u5e8f\u89d2\u5ea6\u6765\u5c55\u5f00\uff0c\u4e0d\u6d89\u53ca\u4ea7\u54c1\u5c42\u9762\u7684\u529f\u80fd\u8bbe\u8ba1\u3002",date:"2022-05-30T00:00:00.000Z",formattedDate:"May 30, 2022",tags:[{label:"architecture",permalink:"/blog/tags/architecture"},{label:"philosophy",permalink:"/blog/tags/philosophy"}],readingTime:4.555,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u67b6\u6784\u8bbe\u8ba1\u7684\u4e00\u4e9b\u54f2\u5b66\u7ecf\u9a8c",tags:["architecture","philosophy"]},prevItem:{title:"\u8bbe\u8ba1\u4e00\u4e2a CLI \u5de5\u5177",permalink:"/blog/2022/06/11/design-a-cli-tool"},nextItem:{title:"Electron \u5e94\u7528\u7684\u7406\u60f3\u67b6\u6784\u8bbe\u8ba1",permalink:"/blog/2022/05/09/electron-application-architecture"}},i={authorsImageUrls:[]},c=[{value:"\u6a21\u5757\u5212\u5206 Module Boundary",id:"\u6a21\u5757\u5212\u5206-module-boundary",level:2},{value:"\u6a21\u5757\u8054\u7cfb Module Connection",id:"\u6a21\u5757\u8054\u7cfb-module-connection",level:2},{value:"\u54f2\u5b66\u601d\u8003",id:"\u54f2\u5b66\u601d\u8003",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u7ecf\u8fc7\u591a\u4e2a\u9879\u76ee\u7684\u6d17\u793c\uff0c\u5f97\u5230\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u67b6\u6784\u8bbe\u8ba1\u7ecf\u9a8c\uff0c\u4e0b\u9762\u7684\u5185\u5bb9\u4ece\u7a0b\u5e8f\u89d2\u5ea6\u6765\u5c55\u5f00\uff0c\u4e0d\u6d89\u53ca\u4ea7\u54c1\u5c42\u9762\u7684\u529f\u80fd\u8bbe\u8ba1\u3002"),(0,l.kt)("p",null,"\u6240\u8c13\u67b6\u6784\u8bbe\u8ba1\uff0c\u6838\u5fc3\u8981\u70b9\u5c31\u4e24\u4e2a\u95ee\u9898"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6a21\u5757\u5212\u5206\uff0c\u5212\u5206\u4f9d\u636e\u662f\u4ec0\u4e48")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6a21\u5757\u8054\u7cfb\uff0c\u8054\u7cfb\u5a92\u4ecb\u662f\u4ec0\u4e48"))),(0,l.kt)("h2",{id:"\u6a21\u5757\u5212\u5206-module-boundary"},"\u6a21\u5757\u5212\u5206 Module Boundary"),(0,l.kt)("p",null,"\u5212\u5206\u6a21\u5757\uff0c\u80cc\u540e\u7684\u610f\u4e49\u5c31\u662f\u5c01\u88c5\uff0c\u5404\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u7684\u539f\u5219\u5747\u6709\u6307\u5bfc\uff0c\u968f\u4fbf\u5217\u51e0\u4e2a\uff0c ",(0,l.kt)("em",{parentName:"p"},"\u5355\u4e00\u804c\u8d23\u539f\u5219\uff08Single Responsibility Principle\uff09")," \uff0c ",(0,l.kt)("em",{parentName:"p"},"\u5f00\u95ed\u539f\u5219\uff08Open-Close Principle\uff09")," \uff0c ",(0,l.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u5012\u7f6e\u539f\u5219\uff08Dependence Inversion Principle\uff09")," \u3002"),(0,l.kt)("p",null,"\u5212\u5206\u6a21\u5757\u7684\u597d\u5904\u592a\u591a\u4e86\uff0c\u590d\u7528\u3001\u5355\u6d4b\u3001\u66ff\u6362\u3001\u5c01\u88c5\uff0c\u4e0d\u4e00\u800c\u8db3\u3002"),(0,l.kt)("p",null,"\u4e0a\u5347\u5230\u5e94\u7528\u5c42\u9762\uff0c\u6a21\u5757\u6709\u65f6\u5019\u4e5f\u88ab\u79f0\u4e3a\u7ec4\u4ef6\u3002\u5404\u4e2a\u7ec4\u4ef6\u6309\u7167\u67d0\u79cd\u5212\u5206\uff0c\u5904\u7406\u81ea\u8eab\u5173\u5fc3\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u901a\u8fc7\u67d0\u79cd\u901a\u4fe1\u673a\u5236\uff0c\u4e0e\u5176\u4ed6\u6a21\u5757\u8054\u7cfb\u3002"),(0,l.kt)("h2",{id:"\u6a21\u5757\u8054\u7cfb-module-connection"},"\u6a21\u5757\u8054\u7cfb Module Connection"),(0,l.kt)("p",null,"\u6a21\u5757\u4e4b\u95f4\u7684\u8054\u7cfb\uff0c\u662f\u67b6\u6784\u7684\u6838\u5fc3\u6240\u5728\uff0c\u4e5f\u662f\u5404\u79cd\u4e0d\u540c\u67b6\u6784\u6a21\u578b\u7684\u7279\u70b9\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982 SpringBoot \u4e2d\u7684 ",(0,l.kt)("em",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165")," \u65b9\u5f0f\uff0c\u5c06\u5404\u4e2a Service \u8054\u7cfb\u8d77\u6765\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.eggjs.org/"},"Egg.js")," \u4f5c\u4e3a\u4e00\u4e2a\u5c01\u88c5 Koa \u7684 NodeJS \u670d\u52a1\u7aef\u6846\u67b6\uff0cApplication / Context \u5bf9\u8c61\u4e2d\u4f1a\u6302\u8f7d\u591a\u4e2a\u5b9e\u4f8b\u3002\u8fd9\u4e9b\u5b9e\u4f8b\u5176\u5b9e\u5df2\u7ecf\u6709\u53d8\u76f8\u7684 \u201c\u4f9d\u8d56\u6ce8\u5165\u201d \uff08injection\uff09 \u610f\u5473\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u4f9d\u8d56\u6ce8\u5165\u4e0b\uff0c\u6a21\u5757\u4e4b\u95f4\u76f4\u63a5\u4f9d\u8d56\uff08\u5f15\u7528\uff09\u4e4b\u5916\uff0c\u8fd8\u6709 ",(0,l.kt)("em",{parentName:"p"},"\u4e8b\u4ef6\u9a71\u52a8\uff08Event-Driven\uff09")," \uff0c\u901a\u8fc7\u67d0\u4e2a\u5168\u5c40\u6216\u5355\u4f8b\u7684\u4e8b\u4ef6\u89e6\u53d1\uff0c\u5c06\u5404\u4e2a\u6a21\u5757\u8054\u7cfb\u8d77\u6765\u3002"),(0,l.kt)("p",null,"VS Code \u7684\u547d\u4ee4\u7cfb\u7edf\u5c31\u662f\u5982\u6b64\u3002\u5168\u5c40\u62e5\u6709\u4e00\u4e2a Command \u7cfb\u7edf\uff0c\u4e0d\u540c\u7684\u6a21\u5757\u5411 Command \u6ce8\u518c\u547d\u4ee4\uff0c\u56de\u8c03\u51fd\u6570\u3002\u5176\u4ed6\u6a21\u5757\u8c03\u7528 \u547d\u4ee4\uff0c\u4f20\u5165\u53c2\u6570\uff0c\u7b49\u5f85\u6267\u884c\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4e8b\u4ef6\u9a71\u52a8\u6709\u5f88\u591a\u79cd\u53d8\u5f62\uff0c\u5982 ",(0,l.kt)("em",{parentName:"p"},"\u6d88\u606f\u961f\u5217")," \uff0c ",(0,l.kt)("em",{parentName:"p"},"\u53d1\u5e03-\u8ba2\u9605")," \uff0c ",(0,l.kt)("em",{parentName:"p"},"\u751f\u4ea7\u8005-\u6d88\u8d39\u8005")," \u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u4e0a\u5347\u5230\u8de8\u8fdb\u7a0b\u3001\u8de8\u5e94\u7528\u7684\u5c42\u9762\uff0c\u4ea7\u751f\u4e86 socket\uff0cIPC \u548c \u7f51\u7edc \u7b49\u8054\u7cfb\u5a92\u4ecb\u3002\u6b64\u65f6\uff0c\u8003\u8651\u7684\u67b6\u6784\u4e3b\u4f53\u53d1\u751f\u4e86\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u6bd4\u65b9\u8bf4\uff0c\u5f53\u8bbe\u8ba1\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u5e94\u7528\u89c6\u4f5c\u6a21\u5757\uff0c\u5404\u81ea\u642c\u7816\uff0c\u5e94\u7528\u4e4b\u95f4\u8054\u7cfb\u5219\u53ef\u4ee5\u901a\u8fc7 socket \u901a\u4fe1\uff08\u5f53\u7136\u8fd8\u6709\u5176\u4ed6\u7684\u65b9\u5f0f\uff09\u3002"),(0,l.kt)("p",null,"\u6bd4\u65b9\u8bf4\uff0c\u8bbe\u8ba1 kubernetes \u7684\u65f6\u5019\uff0c\u4e0d\u540c\u90fd Service \u5e94\u7528\u89c6\u4f5c\u6a21\u5757\uff0c\u901a\u8fc7 Ingress \u8fdb\u884c\u8054\u7cfb\uff08\u6b64\u5904\u5c4f\u853d\u4e86\u5f88\u591a\u7ec6\u8282\uff0c\u4e0d\u505a\u8fc7\u591a\u5c55\u5f00\uff09\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5199\u8fd9\u4e24\u5c0f\u8282\u65f6\uff0c\u6211\u8111\u4e2d\u7a81\u7136\u60f3\u8d77\u4e86 Structure and Interpretation of Computer Programs \u8fd9\u672c\u4e66\u3002\u8be5\u4e66\u5728\u89e3\u91ca\u8ba1\u7b97\u673a\u7a0b\u5e8f\u6267\u884c\u3001\u5b9e\u73b0\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u89e3\u91ca\u4e86\u7a0b\u5e8f\u8bbe\u8ba1\u7684\u4e00\u4e9b\u539f\u5219\u3002\u6781\u529b\u63a8\u8350\u3002")),(0,l.kt)("h2",{id:"\u54f2\u5b66\u601d\u8003"},"\u54f2\u5b66\u601d\u8003"),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u8bbe\u8ba1\u6a21\u5f0f\u4e66\u7c4d\u901a\u5e38\u4f1a\u7ed9\u51fa\u4e00\u4e9b\u5b9e\u9645\u4f8b\u5b50\uff0c\u89e3\u91ca\u8bbe\u8ba1\uff0c\u987a\u5e26\u7ed9\u51fa\u4e00\u4e9b\u8bbe\u8ba1\u539f\u5219\u3002\u4f46\u662f\u9003\u4e0d\u5f00\u4e0a\u9762\u4e24\u70b9\u8003\u91cf\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u628a\u4e0a\u8ff0\u8bbe\u8ba1\u601d\u8def\u63a8\u5e7f\u5230\u516c\u53f8\u67b6\u6784\u8bbe\u8ba1\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a\u516c\u53f8\u9700\u8981\u5404\u4e2a\u90e8\u95e8\uff0c\u5982\u91c7\u8d2d\u3001\u751f\u4ea7\u3001\u4ed3\u50a8\u3001\u8fd0\u8425\u3001\u5e02\u573a\u3001\u9500\u552e\u3001\u5ba2\u670d\u3001\u7814\u53d1\u3001\u884c\u653f\u3001GP \u7b49\u7b49\uff0c\u89e3\u51b3\u516c\u53f8\u5b58\u7eed\u3001\u53d1\u5c55\u65f6\u7684\u5404\u79cd\u4e8b\u60c5\u3002\u8fd9\u5c31\u662f\u6a21\u5757\u5212\u5206\u3002"),(0,l.kt)("p",null,"\u5404\u4e2a\u90e8\u95e8\u4e4b\u95f4\u901a\u8fc7\u529e\u516c\u534f\u540c\u8f6f\u4ef6\u6c9f\u901a\u3001\u5bf9\u9f50\u76ee\u6807\u3001\u540c\u6b65\u4fe1\u606f\u3001\u4efb\u52a1\u6d3e\u53d1\u4e0e\u63a8\u8fdb\u3002\u8fd9\u5c31\u662f\u6a21\u5757\u8054\u7cfb\u3002"),(0,l.kt)("p",null,"\u518d\u5f80\u4e0a\uff0c\u53ef\u4ee5\u63a8\u5e7f\u5230\u5404\u79cd\u793e\u4f1a\u7ec4\u7ec7\uff0c\u6211\u5c31\u4e0d\u4e3e\u4f8b\u4e86\uff08\u624b\u52a8\u72d7\u5934\uff09\u3002"),(0,l.kt)("p",null,"\u76f4\u63a5\u5230\u6700\u9ad8\u5883\u754c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u5212\u5206\uff0c\u5c31\u662f\u5c06\u6574\u4f53\u62c6\u89e3\u5230\u5c40\u90e8\uff0c\u5206\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u5757\u8054\u7cfb\uff0c\u5c31\u662f\u5c40\u90e8\u91cd\u65b0\u7ec4\u6210\u6574\u4f53\uff0c\u5408\u3002")),(0,l.kt)("p",null,"\u6536\u56de\u5230\u8fd9\u7bc7\u6587\u7ae0\uff0c\u5404\u4e2a\u5c0f\u8282\u5206\u522b\u5c55\u793a\u89c2\u70b9\uff0c\u8fd9\u5c31\u662f\u5206\uff0c\u6240\u6709\u5c0f\u8282\u7684\u4e3b\u7ebf\u5c31\u662f\u4e3a\u4e86\u8bf4\u660e\u67b6\u6784\u8bbe\u8ba1\uff0c\u8fd9\u5c31\u662f\u5408\u3002"),(0,l.kt)("p",null,"Q.E.D"))}m.isMDXComponent=!0}}]);