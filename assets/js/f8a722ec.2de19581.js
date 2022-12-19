"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7809],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Read input from command line in node",categories:["command line"],tags:["nodejs"]},i=void 0,c={permalink:"/blog/2019/10/28/read-from-terminal-in-node",source:"@site/blog/2019-10-28-read-from-terminal-in-node.md",title:"Read input from command line in node",description:"usage example",date:"2019-10-28T00:00:00.000Z",formattedDate:"October 28, 2019",tags:[{label:"nodejs",permalink:"/blog/tags/nodejs"}],readingTime:.225,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Read input from command line in node",categories:["command line"],tags:["nodejs"]},prevItem:{title:"Zero-width space",permalink:"/blog/2019/11/01/zero-width-space"},nextItem:{title:"Traverse directories in nodejs",permalink:"/blog/2019/09/24/traverse-directories-in-node"}},l={authorsImageUrls:[]},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// read-from-terminal.js\nprocess.stdin.resume();\nprocess.stdin.setEncoding('ascii'); // 'utf-8' also supported\n\nlet _input = '';\n\nprocess.stdin.on('data', function (data) {\n  _input += data;\n});\n\nprocess.stdin.on('end', function () {\n  process.stdout.write(_input);\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"usage example")),(0,o.kt)("p",null,"you need to create a ReadStream using pipeline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <file> | node read-from-terminal.js\n")))}u.isMDXComponent=!0}}]);