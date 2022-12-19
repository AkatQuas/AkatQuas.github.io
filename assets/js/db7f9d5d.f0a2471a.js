"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"React \u72b6\u6001\u5e93\u7684\u4f7f\u7528",categories:["frontend","javascript","reactjs"],tags:["reactjs"]},l=void 0,p={permalink:"/blog/2018/08/15/react-stores",source:"@site/blog/2018-08-15-react-stores.md",title:"React \u72b6\u6001\u5e93\u7684\u4f7f\u7528",description:"React \u6709\u4e00\u4e9b\u72b6\u6001\u7ba1\u7406\u7684\u5e93\u6765\u5e2e\u52a9\u5355\u9875\u9762\u5e94\u7528\u7ba1\u7406\u5168\u5c40\u6570\u636e\uff0c\u5982 redux\uff0cmobx\uff0cflux\u3002\u6240\u4ee5\u6211\u5c31\u5199\u4e86\u4e00\u4e2a\u5c0f\u9879\u76ee\uff0c\u7b80\u5355\u5730\u5b66\u4e86\u5b83\u4eec\u7684\u4f7f\u7528\u65b9\u5f0f\u3002\u9879\u76ee\u5730\u5740\u3002",date:"2018-08-15T00:00:00.000Z",formattedDate:"August 15, 2018",tags:[{label:"reactjs",permalink:"/blog/tags/reactjs"}],readingTime:1.9,hasTruncateMarker:!0,authors:[],frontMatter:{title:"React \u72b6\u6001\u5e93\u7684\u4f7f\u7528",categories:["frontend","javascript","reactjs"],tags:["reactjs"]},prevItem:{title:"Super tiny interpreter in JavaScript",permalink:"/blog/2018/08/23/super-tiny-interpreter"},nextItem:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u7684\u51e0\u4e2a\u5f00\u53d1\u6846\u67b6",permalink:"/blog/2018/07/18/wxma"}},i={authorsImageUrls:[]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"React \u6709\u4e00\u4e9b\u72b6\u6001\u7ba1\u7406\u7684\u5e93\u6765\u5e2e\u52a9\u5355\u9875\u9762\u5e94\u7528\u7ba1\u7406\u5168\u5c40\u6570\u636e\uff0c\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux"},"redux"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mobxjs/mobx"},"mobx"),"\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux"},"flux"),"\u3002\u6240\u4ee5\u6211\u5c31\u5199\u4e86\u4e00\u4e2a\u5c0f\u9879\u76ee\uff0c\u7b80\u5355\u5730\u5b66\u4e86\u5b83\u4eec\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AkatQuas/kiddo-plays/tree/master/react-stores"},"\u9879\u76ee\u5730\u5740"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e2a\u4eba\u4f53\u4f1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Redux \u662f\u4e2a\u597d\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u6848\uff0c\u4f7f\u7528\u65f6\u7684\u601d\u8def\u8ddf React \u672c\u8eab\u5f88\u7c7b\u4f3c\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," \u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"dispatch")," \uff0c\u5728\u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4f7f\u7528\u3002\u75db\u82e6\u7684\u5730\u65b9\u5728\u4e8e Redux \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"reducers")," \uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"action")," \uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"middleware")," \u7684\u4ee3\u7801\u6bd4\u8f83\u5206\u6563\uff0c\u4e0d\u6613\u7ba1\u7406\u3002\u521d\u6b21\u4f7f\u7528\u65f6\u8981\u8ba4\u6e05\u5404\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer")," \u7684\u53c2\u6570\u548c\u65b9\u6cd5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mobx \u76f8\u5bf9\u4e0e Redux \u6765\u8bf4\uff0c\u7075\u6d3b\u6027\u66f4\u597d\uff0c\u4ee5 \u7c7b\u5b9e\u4f8b \u7684\u65b9\u5f0f\uff0c\u76f4\u63a5\u8bfb\u53d6\u548c\u64cd\u4f5c\u6570\u636e\uff0c\u4e14\u8be5\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u5171\u4eab\u3002\u540c\u4e00\u4e2a\u5e94\u7528\u4e2d\u53ef\u4ee5\u6709\u82e5\u5e72\u72ec\u7acb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\u3002\u8fd9\u4e2a\u597d\u5904\u5c31\u662f\u5229\u4e8e\u5173\u6ce8\u5ea6\u63d0\u9ad8\uff0c\u4e14\u6709\u5229\u4e8e\u534f\u540c\u5f00\u53d1\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7406\u8bba\u4e0a\uff0c Redux \u4e5f\u53ef\u4ee5\u5b9e\u73b0\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"store"),"\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"combineReducers")," \u628a\u8fd9\u4e9b ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u7edf\u4e00\u5230\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"root store")," \u4e2d\uff0c\u5728\u5e94\u7528\u770b\u6765\uff0c\u53ea\u6709\u4e00\u4e2a\u5b9e\u4f8b\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flux \u662f\u8001\u6d3e\u7684\u72b6\u6001\u7ba1\u7406\u65b9\u6848\u4e86\uff0c\u5728\u901a\u8bfb\u4e86\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"getting-started")," \u90e8\u5206\u4e4b\u540e\uff0c\u6211\u9009\u62e9\u4e86\u4fdd\u7559\u6001\u5ea6\u3002\u6bd5\u7adf\u72b6\u6001\u7ba1\u7406\u662f\u4e00\u4e2a\u65b9\u6848\uff0c\u8981\u8ddf\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u7ed3\u5408\u8d77\u6765\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c flux \u7b49\u7528\u5230\u4e86\u7684\u65f6\u5019\u6211\u518d\u5b66\u5427\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5171\u6027\u8003\u8651")),(0,a.kt)("p",null,"\u72b6\u6001\u7ba1\u7406\u4e2d\u503c\u5f97\u6ce8\u610f\u7684\u5730\u65b9\u6709\u4e09\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u7684\u6570\u636e\u5982\u4f55\u6ce8\u5165\u7ec4\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5982\u4f55\u8c03\u7528\u65b9\u6cd5\u6765\u6539\u53d8",(0,a.kt)("inlineCode",{parentName:"li"},"store")),(0,a.kt)("li",{parentName:"ul"},"\u600e\u4e48\u5904\u7406\u5f02\u6b65\u903b\u8f91\u4e0b\u7684\u6570\u636e\u66f4\u6539")))}s.isMDXComponent=!0}}]);