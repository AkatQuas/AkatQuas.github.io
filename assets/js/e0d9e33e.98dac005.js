"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={title:"Fullstack Starter Project Boilerplate",categories:["frontend"],tags:["fullstack","angular","nest"]},o=void 0,p={permalink:"/blog/2020/04/01/fullstack-starter",source:"@site/blog/2020-04-01-fullstack-starter.md",title:"Fullstack Starter Project Boilerplate",description:"\u9879\u76ee\u505a\u7684\u591a\u4e86\uff0c\u6240\u4ee5\u5c31\u62bd\u79bb\u51fa\u6765\u4e00\u4e2a\u5168\u6808\u9879\u76ee\u6a21\u677f\uff0c\u524d\u7aef\u4f7f\u7528 Angualr ( UI \u5e93 \u4f7f\u7528 Ng-Zorro ) \uff0c\u540e\u7aef\u4f7f\u7528 Nest \u3002Project on GitHub.",date:"2020-04-01T00:00:00.000Z",formattedDate:"April 1, 2020",tags:[{label:"fullstack",permalink:"/blog/tags/fullstack"},{label:"angular",permalink:"/blog/tags/angular"},{label:"nest",permalink:"/blog/tags/nest"}],readingTime:.64,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Fullstack Starter Project Boilerplate",categories:["frontend"],tags:["fullstack","angular","nest"]},prevItem:{title:"Learn some Golang",permalink:"/blog/2020/09/24/golang"},nextItem:{title:"Class Component ?= Function Component &plus; Hooks",permalink:"/blog/2020/02/15/class-fc-hooks"}},i={authorsImageUrls:[]},s=[{value:"Foundation",id:"foundation",level:2},{value:"Setup",id:"setup",level:2},{value:"Development",id:"development",level:2},{value:"Build or Deployment",id:"build-or-deployment",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9879\u76ee\u505a\u7684\u591a\u4e86\uff0c\u6240\u4ee5\u5c31\u62bd\u79bb\u51fa\u6765\u4e00\u4e2a\u5168\u6808\u9879\u76ee\u6a21\u677f\uff0c\u524d\u7aef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Angualr")," ( UI \u5e93 \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ng-Zorro")," ) \uff0c\u540e\u7aef\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Nest")," \u3002",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AkatQuas/kiddo-plays/tree/master/fullstack-starter"},"Project on GitHub"),"."),(0,a.kt)("p",null,"\u6709\u4e00\u4e9b\u597d\u7528\u7684\u811a\u672c\u6765\u5e2e\u52a9\u9879\u76ee\u7684\u8d77\u6b65\u3001\u5f00\u53d1\u3001\u90e8\u7f72\u3002"),(0,a.kt)("h2",{id:"foundation"},"Foundation"),(0,a.kt)("p",null,"This boilerplate is build on ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/"},"Angular"),", ",(0,a.kt)("a",{parentName:"p",href:"https://ng.ant.design/docs/introduce/en"},"Ng-Zorro-Antd")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"Nest"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setup_all.sh")," helps to set the development environment up, including:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/commitizen/cz-cli"},"commitizen")," for git commit message")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://nginx.org/en/download.html"},"nginx")," for universal gateway")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unitech/pm2"},"pm2")," for develop convenience")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/rofl0r/proxychains-ng"},"proxychains4")," for proxy"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./setup_all.sh\n")),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev_all.sh")," to develop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./dev_all.sh\n")),(0,a.kt)("h2",{id:"build-or-deployment"},"Build or Deployment"),(0,a.kt)("p",null,"Use docker for build. Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/AkatQuas/kiddo-plays/blob/master/fullstack-starter/deploy/server/Dockerfile"},"DockerFile"),"."))}u.isMDXComponent=!0}}]);