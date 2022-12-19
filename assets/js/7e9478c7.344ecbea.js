"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,y=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(y,l(l({ref:t},u),{},{components:r})):n.createElement(y,l({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[f]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u91cd\u6784 Electron \u5e94\u7528\u4e4b\u540e\u7684\u611f\u609f",tags:["methodology","architecture"]},l=void 0,c={permalink:"/blog/2022/03/25/refactor-an-application",source:"@site/blog/2022-03-25-refactor-an-application.md",title:"\u91cd\u6784 Electron \u5e94\u7528\u4e4b\u540e\u7684\u611f\u609f",description:"\u81ea\u4ece\u8f6c\u5c97\u4ee5\u6765\uff0c\u57fa\u4e8e Electron \u5f00\u53d1\u7f16\u8f91\u5668\u5e94\u7528\u5df2\u7ecf\u5feb\u534a\u5e74\u4e86\uff0c\u4e3b\u8981\u8f7d\u4f53\u662f VS Code \u3002",date:"2022-03-25T00:00:00.000Z",formattedDate:"March 25, 2022",tags:[{label:"methodology",permalink:"/blog/tags/methodology"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:3.205,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u91cd\u6784 Electron \u5e94\u7528\u4e4b\u540e\u7684\u611f\u609f",tags:["methodology","architecture"]},prevItem:{title:"Type vs Interface",permalink:"/blog/2022/04/04/type-vs-interface"},nextItem:{title:"\u4eca\u5929\u7ed9\u6469\u6258\u8f66\u4e0a\u724c\u5566\uff5e",permalink:"/blog/2021/12/08/motobike"}},i={authorsImageUrls:[]},p=[],u={toc:p};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u81ea\u4ece\u8f6c\u5c97\u4ee5\u6765\uff0c\u57fa\u4e8e Electron \u5f00\u53d1\u7f16\u8f91\u5668\u5e94\u7528\u5df2\u7ecf\u5feb\u534a\u5e74\u4e86\uff0c\u4e3b\u8981\u8f7d\u4f53\u662f VS Code \u3002"),(0,o.kt)("p",null,"\u73b0\u884c\u7684\u67b6\u6784\u4e3b\u8981\u662f\u5229\u7528 VS Code \u63d0\u4f9b\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u6ce8\u5165\u76f8\u5e94\u7684\u4e1a\u52a1\u5b9e\u73b0\u3002\u8be5\u65b9\u6848\u6709\u5f88\u5927\u7684\u6027\u80fd\u95ee\u9898\uff0c\u662f\u4e1a\u52a1\u7ec4\u4ef6\u53ea\u80fd VS Code \u7f16\u8f91\u5668\u542f\u52a8\u4e4b\u540e\uff0c\u624d\u80fd\u521d\u59cb\u5316\u3001\u5b9e\u4f8b\u5316\uff0c\u6027\u80fd\u6709\u5f88\u5927\u5f71\u54cd\u3002\u53e6\u5916\uff0c\u9274\u4e8e\u4e1a\u52a1\u5b9e\u73b0\u90fd\u8dd1\u5728 VSC \u7684\u63d2\u4ef6\u8fdb\u7a0b\u7cfb\u7edf\uff0c\u901a\u4fe1\u663e\u7136\u4f1a\u6210\u4e3a\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5f53\u4e1a\u52a1\u590d\u6742\u5ea6\u4e0a\u5347\u4e4b\u540e\uff0c\u5f53\u524d\u7684\u8bbe\u8ba1\u65b9\u6848\u4f1a\u6210\u4e3a\u4e00\u4e2a\u74f6\u9888\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2a\u6708\u521a\u597d\u8d76\u4e0a\u4e86\u91cd\u6784\uff0c\u4e3b\u8981\u601d\u8def\u5c31\u662f\u5c06\u7ec4\u4ef6\u6a21\u5757\u5316\uff0c VSC \u53d8\u6210\u5e94\u7528\u7684\u4e00\u4e2a\u6a21\u5757\uff0c\u4ea6\u5373\u7f16\u8f91\u533a\uff0c\u539f\u5148\u7684\u63d2\u4ef6\u5f0f\u7ec4\u4ef6\uff0c\u5347\u7ea7\u6210\u4e3a\u4e0e VSC \u540c\u7b49\u7ea7\u7684\u6a21\u5757\u3002\u6709\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u5e94\u7528\u7684\u6a2a\u5411\u6269\u5c55\u6027\u3001\u6a21\u5757\u95f4\u7684\u8054\u7cfb\u6027\u90fd\u80fd\u5f97\u5230\u5f88\u5927\u7684\u63d0\u5347\u3002"))}f.isMDXComponent=!0}}]);