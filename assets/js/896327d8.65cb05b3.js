"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3245],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Redux \u6e90\u7801\u8bfb\u540e\u611f",categories:["frontend","javascript","reactjs"],tags:["reactjs","redux"]},i=void 0,c={permalink:"/blog/2020/02/10/redux-source-code-impression",source:"@site/blog/2020-02-10-redux-source-code-impression.md",title:"Redux \u6e90\u7801\u8bfb\u540e\u611f",description:"redux version is 4.0.5.",date:"2020-02-10T00:00:00.000Z",formattedDate:"February 10, 2020",tags:[{label:"reactjs",permalink:"/blog/tags/reactjs"},{label:"redux",permalink:"/blog/tags/redux"}],readingTime:15.68,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Redux \u6e90\u7801\u8bfb\u540e\u611f",categories:["frontend","javascript","reactjs"],tags:["reactjs","redux"]},prevItem:{title:"\u4e00\u4e2a\u7b80\u5355\u7684QueryBuilder\u8bbe\u8ba1",permalink:"/blog/2020/02/13/simple-querybuilder"},nextItem:{title:"Depth in Event loop",permalink:"/blog/2019/12/11/depth-in-event-loop"}},s={authorsImageUrls:[]},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"redux version is 4.0.5.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"redux")," \u672c\u8eab\u7684\u8bbe\u8ba1\u5f88\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u901a\u8fc7 ",(0,a.kt)("em",{parentName:"p"},"pure function")," \u6765\u6539\u53d8 ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u91cc\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/blob/v4.0.5/src/createStore.js"},"source code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6bcf\u4e00\u6b21\u5728\u7ec4\u4ef6\u5c42\u9762\u6216\u8005 store \u76f4\u63a5\u8c03\u7528 `dispatch`\n// \u7ecf\u8fc7\u76f8\u5173\u4e2d\u95f4\u4ef6\u7684\u6267\u884c\u4e4b\u540e\uff0c\u6700\u540e\u7684\u51fd\u6570\u4f1a\u5230\u8fd9\u91cc\nfunction dispatch(action) {\n  // \u4e00\u4e9b\u9519\u8bef\u5224\u65ad\uff0c\u9884\u9632\u673a\u5236\n  if (!isPlainObject(action)) {\n    throw new Error(\n      'Actions must be plain objects. ' +\n        'Use custom middleware for async actions.'\n    );\n  }\n\n  if (typeof action.type === 'undefined') {\n    throw new Error(\n      'Actions may not have an undefined \"type\" property. ' +\n        'Have you misspelled a constant?'\n    );\n  }\n\n  if (isDispatching) {\n    throw new Error('Reducers may not dispatch actions.');\n  }\n\n  try {\n    isDispatching = true;\n    // pure function \u66f4\u65b0 state\n    currentState = currentReducer(currentState, action);\n  } finally {\n    isDispatching = false;\n  }\n\n  // subscribed \u7684\u56de\u8c03\u5728\u8fd9\u91cc\u89e6\u53d1\n  // ...\n\n  return action;\n}\n")))}u.isMDXComponent=!0}}]);