"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51559:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Before start",tags:["lisp","interpreter"]},p=void 0,l={unversionedId:"lisp-interpreter-in-c/index",id:"lisp-interpreter-in-c/index",title:"Before start",description:"The whole online documents.",source:"@site/docs/lisp-interpreter-in-c/00-index.md",sourceDirName:"lisp-interpreter-in-c",slug:"/lisp-interpreter-in-c/index",permalink:"/docs/lisp-interpreter-in-c/index",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:0,frontMatter:{title:"Before start",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"The Interpreter",permalink:"/docs/interpreter-in-js/interpreter"},next:{title:"01 Basic features of C",permalink:"/docs/lisp-interpreter-in-c/basic-features"}},o={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The whole online ",(0,a.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/contents"},"documents"),"."),(0,a.kt)("p",null,"What I learned from this tutorial?"),(0,a.kt)("p",null,"It provides me a different perspective on thinking about programming language."),(0,a.kt)("p",null,"Evaluation is a big part of the interpreted language like JavaScript."),(0,a.kt)("p",null,"Many statements like ",(0,a.kt)("inlineCode",{parentName:"p"},"if () {} else {}")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"switch () {}")," are just builtin procedure rather than a language structure."),(0,a.kt)("p",null,"It's not a hard work to create a LISP of one's own."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/basic-features"},"basic features of C"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/interactive-prompt"},"interactive prompt"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/language-grammar"},"language and grammar"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/parsing"},"grammar and parsing"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/evaluation"},"evaluation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/error-handling"},"Error handling"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/s-expressions"},"S-Expressions"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/q-expressions"},"Q-Expressions"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/variables"},"Variables"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/functions"},"Functions"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/conditionals"},"Conditionals"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/strings"},"Strings")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bonus document")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/lisp-interpreter-in-c/standard-library"},"Standard Library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/chapter16_bonus_projects"},"Bonus Project")))))}u.isMDXComponent=!0}}]);