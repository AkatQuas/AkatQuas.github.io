"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=i(n),b=a,f=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},46287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"Wander in webpack",categories:["frontend","javascript","webpack"],tags:["webpack"]},l=void 0,p={permalink:"/blog/2020/12/06/wander-in-webpack",source:"@site/blog/2020-12-06-wander-in-webpack.md",title:"Wander in webpack",description:"Setup the project",date:"2020-12-06T00:00:00.000Z",formattedDate:"December 6, 2020",tags:[{label:"webpack",permalink:"/blog/tags/webpack"}],readingTime:6.37,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Wander in webpack",categories:["frontend","javascript","webpack"],tags:["webpack"]},prevItem:{title:"Quick learning on Shells",permalink:"/blog/2020/12/25/shells"},nextItem:{title:"Learn some Golang",permalink:"/blog/2020/09/24/golang"}},c={authorsImageUrls:[]},i=[{value:"Setup the project",id:"setup-the-project",level:2}],u={toc:i};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setup-the-project"},"Setup the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/webpack/webpack.git && cd webpack\n\n# maybe switch to some branch/tag\n\n# manually\nnpm install -g yarn\nyarn\nyarn link\nyarn link webpack\n\n# automatically\nnpm run setup\n# or\nyarn setup\n")),(0,a.kt)("p",null,"At webpack, ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," is preferred."),(0,a.kt)("p",null,"If you already have ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," installed, do: ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn setup"),". This will complete all required steps."),(0,a.kt)("p",null,"If not, do: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run setup"),", the setup will also install ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," for you."),(0,a.kt)("p",null,"And you are good to go."))}s.isMDXComponent=!0}}]);