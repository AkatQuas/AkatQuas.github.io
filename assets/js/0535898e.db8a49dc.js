"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5011],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Writing a interpreter in JavaScript",sidebar_position:1,tags:["javascript","interpreter"]},o=void 0,s={unversionedId:"interpreter-in-js/index",id:"interpreter-in-js/index",title:"Writing a interpreter in JavaScript",description:'Writing a parser is, depending on the language, a moderately complex task. In essence, it must transform a piece of code (which we inspect by looking at the characters) into an abstract syntax tree (AST). The AST is a structured in-memory representation of the program, and it\'s "abstract" in the sense that it does not care exactly what characters is the source code made of, but it faithfully represents the semantics of it.',source:"@site/docs/interpreter-in-js/index.md",sourceDirName:"interpreter-in-js",slug:"/interpreter-in-js/",permalink:"/docs/interpreter-in-js/",draft:!1,tags:[{label:"javascript",permalink:"/docs/tags/javascript"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:1,frontMatter:{title:"Writing a interpreter in JavaScript",sidebar_position:1,tags:["javascript","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"Recursive Description of Patterns \u6a21\u5f0f\u7684\u9012\u5f52\u63cf\u8ff0",permalink:"/docs/compiler/recursive-description-of-patterns"},next:{title:"The character input stream",permalink:"/docs/interpreter-in-js/character-input-stream"}},p={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Writing a parser is, depending on the language, a moderately complex task. In essence, it must transform a piece of code (which we inspect by looking at the characters) into an ",(0,a.kt)("strong",{parentName:"p"},"abstract syntax tree"),' (AST). The AST is a structured in-memory representation of the program, and it\'s "abstract" in the sense that it does not care exactly what characters is the source code made of, but it faithfully represents the semantics of it.'),(0,a.kt)("p",null,"For example, for the following program text:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"sum = lambda(a, b) {\n  a + b;\n};\nprint(sum(1, 2));\n")),(0,a.kt)("p",null,"Our parser will generate the following AST:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "prog",\n  "prog": [\n    // first line:\n    {\n      "type": "assign",\n      "operator": "=",\n      "left": { "type": "var", "value": "sum" },\n      "right": {\n        "type": "lambda",\n        "vars": ["a", "b"],\n        "body": {\n          // the body should be a "prog", but because\n          // it contains a single expression, our parser\n          // reduces it to the expression itself.\n          "type": "binary",\n          "operator": "+",\n          "left": { "type": "var", "value": "a" },\n          "right": { "type": "var", "value": "b" }\n        }\n      }\n    },\n    // second line:\n    {\n      "type": "call",\n      "func": { "type": "var", "value": "print" },\n      "args": [\n        {\n          "type": "call",\n          "func": { "type": "var", "value": "sum" },\n          "args": [\n            { "type": "num", "value": 1 },\n            { "type": "num", "value": 2 }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The main difficulty in writing a parser consists in a failure to properly organize the code. The parser should operate at a higher level than reading characters from a string. Some advices on how to keep complexity manageable:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Write many functions and keep them small. In every function, do one thing and do it well.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Do not try to use regexps for parsing. They don't work. Regexps can be helpful in the lexer though, but I suggest limiting them to very simple things.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Don't attempt to guess. When unsure how to parse something, throw an error and make sure the message contains the error location (line/column)."))),(0,a.kt)("p",null,"To keep it simple I've split my code in three parts, which are further divided into many small functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interpreter-in-js/character-input-stream"},"The character input stream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interpreter-in-js/token-input-stream"},"The token input stream (lexer)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interpreter-in-js/parser"},"The parser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/interpreter-in-js/interpreter"},"The interpreter"))))}u.isMDXComponent=!0}}]);