"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4896],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,b=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12594:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u5355\u5143\u6d4b\u8bd5\u7684\u5b9e\u8df5",tags:["unit test"]},l=void 0,i={permalink:"/blog/2022/11/23/excerpt-on-unit-test",source:"@site/blog/2022-11-23-excerpt-on-unit-test.md",title:"\u5355\u5143\u6d4b\u8bd5\u7684\u5b9e\u8df5",description:"\u6982\u8ff0",date:"2022-11-23T00:00:00.000Z",formattedDate:"November 23, 2022",tags:[{label:"unit test",permalink:"/blog/tags/unit-test"}],readingTime:5.595,hasTruncateMarker:!0,authors:[],frontMatter:{title:"\u5355\u5143\u6d4b\u8bd5\u7684\u5b9e\u8df5",tags:["unit test"]},nextItem:{title:"\u8bbe\u8ba1\u4e00\u4e2a CLI \u5de5\u5177",permalink:"/blog/2022/06/11/design-a-cli-tool"}},c={authorsImageUrls:[]},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/2019/11/23/tdd-n-bdd"},"\u4e4b\u524d")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/blog/2021/05/06/tdd-in-frontend"},"\u4e4b\u524d")," \u5bf9\u51e0\u4e2a\u6d4b\u8bd5\u6846\u67b6\u505a\u8fc7\u4e00\u4e9b\u6d45\u5c1d\u5219\u6b62\u7684\u7ec3\u4e60\uff0c\u4f46\u662f\u5bf9\u4e8e\u6d4b\u8bd5\u76ee\u7684\uff0c\u6d4b\u8bd5\u65b9\u5f0f\u4e0d\u751a\u7406\u89e3\u3002\u6700\u8fd1\u8bfb\u4e86\u4e00\u7bc7\u6587\u7ae0\u611f\u89c9\u9887\u6709\u542f\u53d1\uff0c\u7ed3\u5408\u4e00\u4e0b\u5176\u4ed6\u5b66\u4e60\u8d44\u6599\uff0c\u5728\u6b64\u62fe\u4eba\u7259\u6167\u3002"),(0,o.kt)("p",null,"\u8f6f\u4ef6\u5de5\u7a0b\u4e2d\u7684\u6d4b\u8bd5\uff0c\u6574\u4f53\u76ee\u6807\u662f\u4e3a\u4e86\u4fdd\u8bc1\u9879\u76ee\u4ee3\u7801\u7684\u53ef\u7528\u6027\uff0c\u7a33\u5b9a\u6027\uff0c\u529f\u80fd\u7b26\u5408\u9884\u671f\u3002\u4e3b\u8981\u662f\u901a\u8fc7\u81ea\u52a8\u5316\u7684\u624b\u6bb5\uff0c\u5bf9\u4ee3\u7801\u3001\u7ec4\u4ef6\u3001\u5e94\u7528\u8fdb\u884c\u6d4b\u8bd5\uff0c\u4ee5\u786e\u4fdd\u4ee3\u7801\u7684\u53ef\u7528\u6027\u4e0e\u7a33\u5b9a\u6027\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u8bb2\u7684\u662f\u5355\u5143\u6d4b\u8bd5\u7684\u5b9e\u8df5\u3002"))}s.isMDXComponent=!0}}]);