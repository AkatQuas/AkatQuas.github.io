"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1225],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>d});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var k=n.createContext({}),i=function(t){var e=n.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},o=function(t){var e=i(t.components);return n.createElement(k.Provider,{value:e},t.children)},c="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,k=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),c=i(a),u=r,d=c["".concat(k,".").concat(u)]||c[u]||N[u]||p;return a?n.createElement(d,l(l({ref:e},o),{},{components:a})):n.createElement(d,l({ref:e},o))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,l=new Array(p);l[0]=u;var m={};for(var k in e)hasOwnProperty.call(e,k)&&(m[k]=e[k]);m.originalType=t,m[c]="string"==typeof t?t:r,l[1]=m;for(var i=2;i<p;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52445:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const p={title:"Chapter 02 - \u8bcd\u6cd5\u5206\u6790",tags:["compiler"]},l=void 0,m={unversionedId:"compiler/in-c-ch02",id:"compiler/in-c-ch02",title:"Chapter 02 - \u8bcd\u6cd5\u5206\u6790",description:"\u4e3a\u4e86\u5c06\u4e00\u4e2a\u7a0b\u5e8f\u4ece\u4e00\u79cd\u8bed\u8a00\u7ffb\u8bd1\u6210\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u7f16\u8bd1\u5668\u5fc5\u987b\u9996\u5148\u628a\u7a0b\u5e8f\u7684\u5404\u79cd\u6210\u5206\u62c6\u5f00\uff0c\u5e76\u641e\u6e05\u5176\u7ed3\u6784\u548c\u542b\u4e49\uff0c\u4e4b\u540e\u518d\u7528\u53e6\u4e00\u79cd\u65b9\u5f0f\u628a\u8fd9\u4e9b\u6210\u5206\u7ec4\u5408\u8d77\u6765\u3002\u7f16\u8bd1\u5668\u7684\u524d\u7aef\u6267\u884c\u5206\u6790\uff0c\u540e\u7aef\u8fdb\u884c\u5408\u6210\u3002",source:"@site/docs/compiler/in-c-ch02.md",sourceDirName:"compiler",slug:"/compiler/in-c-ch02",permalink:"/docs/compiler/in-c-ch02",draft:!1,tags:[{label:"compiler",permalink:"/docs/tags/compiler"}],version:"current",frontMatter:{title:"Chapter 02 - \u8bcd\u6cd5\u5206\u6790",tags:["compiler"]},sidebar:"tutorialSidebar",previous:{title:"Chapter 01 - \u7eea\u8bba",permalink:"/docs/compiler/in-c-ch01"},next:{title:"Chapter 06 -  \u6d3b\u52a8\u8bb0\u5f55",permalink:"/docs/compiler/in-c-ch06"}},k={},i=[{value:"\u8bcd\u6cd5\u5355\u8bcd",id:"\u8bcd\u6cd5\u5355\u8bcd",level:2},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f",id:"\u6b63\u5219\u8868\u8fbe\u5f0f",level:2},{value:"\u6709\u9650\u81ea\u52a8\u673a",id:"\u6709\u9650\u81ea\u52a8\u673a",level:2},{value:"\u8bc6\u522b\u6700\u957f\u7684\u5339\u914d",id:"\u8bc6\u522b\u6700\u957f\u7684\u5339\u914d",level:3},{value:"\u975e\u786e\u5b9a\u6709\u9650\u81ea\u52a8\u673a",id:"\u975e\u786e\u5b9a\u6709\u9650\u81ea\u52a8\u673a",level:2}],o={toc:i};function c(t){let{components:e,...p}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,p,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4e3a\u4e86\u5c06\u4e00\u4e2a\u7a0b\u5e8f\u4ece\u4e00\u79cd\u8bed\u8a00\u7ffb\u8bd1\u6210\u53e6\u4e00\u79cd\u8bed\u8a00\uff0c\u7f16\u8bd1\u5668\u5fc5\u987b\u9996\u5148\u628a\u7a0b\u5e8f\u7684\u5404\u79cd\u6210\u5206\u62c6\u5f00\uff0c\u5e76\u641e\u6e05\u5176\u7ed3\u6784\u548c\u542b\u4e49\uff0c\u4e4b\u540e\u518d\u7528\u53e6\u4e00\u79cd\u65b9\u5f0f\u628a\u8fd9\u4e9b\u6210\u5206\u7ec4\u5408\u8d77\u6765\u3002\u7f16\u8bd1\u5668\u7684\u524d\u7aef\u6267\u884c\u5206\u6790\uff0c\u540e\u7aef\u8fdb\u884c\u5408\u6210\u3002"),(0,r.kt)("p",null,"\u5206\u6790\u4e00\u822c\u5206 3 \u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bcd\u6cd5\u5206\u6790\uff1a\u5c06\u8f93\u5165\u5206\u89e3\u6210\u4e00\u4e2a\u4e2a\u72ec\u7acb\u7684\u8bcd\u6cd5\u7b26\u53f7\uff0c\u5373\u201c\u5355\u8bcd\u7b26\u53f7\u201dtoken\uff0c\u7b80\u79f0\u5355\u8bcd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u5206\u6790\uff1a\u5206\u6790\u7a0b\u5e8f\u7684\u77ed\u8bed\u7ed3\u6784\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bed\u4e49\u5206\u6790\uff1a\u63a8\u7b97\u7a0b\u5e8f\u7684\u542b\u4e49\u3002")),(0,r.kt)("p",null,"\u8bed\u6cd5\u5206\u6790\u5668\u4ee5\u5b57\u7b26\u6d41\u4f5c\u4e3a\u8f93\u5165\uff0c\u751f\u6210\u4e00\u7cfb\u5217\u7684\u540d\u5b57\u3001\u5173\u952e\u5b57\u548c\u6807\u70b9\u7b26\u53f7\uff0c\u540c\u65f6\u629b\u5f03\u5355\u8bcd\u4e4b\u95f4\u7684\u7a7a\u767d\u7b26\u548c\u6ce8\u91ca\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u8ba9\u8bed\u6cd5\u5206\u6790\u5668\u6765\u5904\u7406\u7a0b\u5e8f\u4e2d\u4efb\u610f\u4f4d\u7f6e\u90fd\u53ef\u80fd\u51fa\u73b0\u7684\u7a7a\u767d\u7b26\u548c\u6ce8\u91ca\u4f1a\u8ba9\u8bed\u6cd5\u5206\u6790\u53d8\u5f97\u8fc7\u4e8e\u590d\u6742\uff0c\u56e0\u6b64\u5c06\u8bcd\u6cd5\u5206\u6790\u4ece\u8bed\u6cd5\u5206\u6790\u4e2d\u5206\u79bb\u51fa\u6765\u3002")),(0,r.kt)("h2",{id:"\u8bcd\u6cd5\u5355\u8bcd"},"\u8bcd\u6cd5\u5355\u8bcd"),(0,r.kt)("p",null,"\u8bcd\u6cd5\u5355\u8bcd\u662f\u5b57\u7b26\u7ec4\u6210\u7684\u5e8f\u5217\uff0c\u662f\u7a0b\u5e8f\u8bbe\u8ba1\u8bed\u8a00\u7684\u6587\u6cd5\u5355\u4f4d\uff0c\u53ef\u5f52\u7c7b\u4e3a\u6709\u9650\u7684\u51e0\u7ec4\u5355\u8bcd\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"|\u7c7b\u578b|\u4f8b\u5b50| |:-:||:-:| |ID|foo n14 last| |NUM| 73 0 00 515 082| |REAL|66.1 .5 10. 1e67 5.5e-10| |IF|if| |COMMA|,| |NOTEQ|!=| |LPAREN|(| |RPAREN|)|"),(0,r.kt)("p",null,"IF\u3001VOID\u3001RETURN \u7b49\u4fdd\u7559\u5b57\u662f\u4e0d\u80fd\u4f5c\u4e3a\u6807\u8bc6\u7b26\u4f7f\u7528\u7684\u3002"),(0,r.kt)("p",null,"\u975e\u5355\u8bcd\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u91ca /",(0,r.kt)("em",{parentName:"li"}," try again "),"/"),(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u547d\u4ee4 #include","<","stdio.h",">"),(0,r.kt)("li",{parentName:"ul"},"\u9884\u5904\u7406\u547d\u4ee4 #define NUMS 5, 6"),(0,r.kt)("li",{parentName:"ul"},"\u5b8f NUMS"),(0,r.kt)("li",{parentName:"ul"},"\u7a7a\u683c\u7b26\u53f7\u3001\u5236\u8868\u7b26\u3001\u6362\u884c\u7b26 \\s \\t \\n")),(0,r.kt)("p",null,"\u5bf9 C \u6216 Java \u4e2d\u6807\u8bc6\u7b26\u7684\u4e00\u79cd\u63cf\u8ff0\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6807\u8bc6\u7b26\u662f\u5b57\u6bcd\u548c\u6570\u5b57\u7ec4\u6210\u7684\u5e8f\u5217\uff0c\u7b2c\u4e00\u4e2a\u5b57\u7b26\u5fc5\u987b\u662f\u5b57\u6bcd\u3002\u4e0b\u5212\u7ebf",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\u89c6\u4e3a\u5b57\u6bcd\u3002\u5927\u5c0f\u5199\u5b57\u6bcd\u4e0d\u540c\u3002\u5982\u679c\u7ecf\u8fc7\u82e5\u5e72\u5355\u8bcd\u5206\u6790\u540e\u8f93\u5165\u6d41\u5df2\u5230\u8fbe\u4e00\u4e2a\u7ed9\u5b9a\u7684\u5b57\u7b26\uff0c\u5219\u4e0b\u4e00\u4e2a\u5355\u8bcd\u5c06\u7531\u6709\u53ef\u80fd\u7ec4\u6210\u4e00\u4e2a\u5355\u8bcd\u7684\u6700\u957f\u5b57\u7b26\u4e32\u6240\u7ec4\u6210\u3002\u5176\u4e2d\u7684\u7a7a\u683c\u7b26\u3001\u5236\u8868\u7b26\u3001\u6362\u884c\u7b26\u548c\u6ce8\u91ca\u90fd\u5c06\u88ab\u5ffd\u7565\u3002\u53e6\u5916\u8fd8\u9700\u8981\u6709\u67d0\u79cd\u7a7a\u767d\u7b26\u6765\u5206\u9694\u76f8\u90bb\u7684\u6807\u8bc6\u7b26\u3001\u5173\u952e\u5b57\u548c\u5e38\u6570\u3002")),(0,r.kt)("p",null,"\u5c06\u7528",(0,r.kt)("strong",{parentName:"p"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),"\u7684\u5f62\u5f0f\u8bed\u8a00\u6765\u6307\u660e",(0,r.kt)("strong",{parentName:"p"},"\u8bcd\u6cd5\u5355\u8bcd"),"\uff0c\u7528",(0,r.kt)("strong",{parentName:"p"},"\u786e\u5b9a\u7684\u6709\u9650\u81ea\u52a8\u673a"),"\u6765\u5b9e\u73b0",(0,r.kt)("strong",{parentName:"p"},"\u8bcd\u6cd5\u5206\u6790\u5668"),"\uff0c\u5e76\u7528\u6570\u5b66\u65b9\u6cd5\u5c06\u4e24\u8005\u8054\u7cfb\u8d77\u6765\u5f97\u5230\u4e00\u4e2a\u7b80\u5355\u4e14\u53ef\u8bfb\u6027\u66f4\u597d\u7684\u8bcd\u6cd5\u5206\u6790\u5668\u3002"),(0,r.kt)("h2",{id:"\u6b63\u5219\u8868\u8fbe\u5f0f"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bed\u8a00 language"),"\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32 string"),"\u7ec4\u6210\u7684\u96c6\u5408\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32"),"\u662f",(0,r.kt)("strong",{parentName:"p"},"\u7b26\u53f7 symbol"),"\u7684\u6709\u9650\u5e8f\u5217\u3002",(0,r.kt)("strong",{parentName:"p"},"\u7b26\u53f7"),"\u672c\u8eab\u6765\u81ea\u6709\u9650",(0,r.kt)("strong",{parentName:"p"},"\u5b57\u6bcd\u8868 alphabet"),"\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u7528\u6709\u9650\u7684\u63cf\u8ff0\u6765\u6307\u660e\u8fd9\u7c7b\uff08\u53ef\u80fd\u662f\u65e0\u9650\uff09\u7684\u8bed\u8a00\uff0c\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8868\u793a\u6cd5\uff0c\u6bcf\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u4ee3\u8868\u4e00\u4e2a\u5b57\u7b26\u4e32\u96c6\u5408\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b26\u53f7"),"\u3002\u5bf9\u4e8e\u8bed\u8a00\u5b57\u6bcd\u8868\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.kt)("em",{parentName:"p"},"a")," \u8868\u793a\u4ec5\u5305\u542b\u5b57\u7b26\u4e32",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"\u7684\u8bed\u8a00\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9009\uff08\u5e76\u96c6\uff09"),"\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u4e24\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.kt)("em",{parentName:"p"},"M")," \u548c ",(0,r.kt)("em",{parentName:"p"},"N")," \uff0c\u53ef\u9009\u64cd\u4f5c\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," \u5f62\u6210\u4e00\u4e2a\u65b0\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c ",(0,r.kt)("em",{parentName:"p"},"M|N")," \u3002\u5982\u679c\u4e00\u4e2a\u5b57\u7b26\u4e32\u5c5e\u4e8e\u8bed\u8a00 ",(0,r.kt)("em",{parentName:"p"},"M")," \u6216\u5c5e\u4e8e ",(0,r.kt)("em",{parentName:"p"},"N"),"\uff0c\u5219\u5b83\u5c5e\u4e8e ",(0,r.kt)("em",{parentName:"p"},"M|N")," \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8054\u7ed3\uff08\u4e32\u63a5\uff09"),"\u3002\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u4e24\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.kt)("em",{parentName:"p"},"M")," \u548c ",(0,r.kt)("em",{parentName:"p"},"N")," \uff0c\u8054\u7ed3\u64cd\u4f5c\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"\xb7"),"\u5f62\u6210\u4e00\u4e2a\u9192\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c ",(0,r.kt)("em",{parentName:"p"},"M\xb7N")," \u3002\u5982\u679c\u4e00\u4e2a\u5b57\u7b26\u4e32\u7531\u4efb\u610f\u4e24\u4e2a\u5b57\u7b26\u4e32 \u03b1 \u548c \u03b2 \u7684\u8054\u7ed3\uff0c\u4e14 \u03b1 \u5c5e\u4e8e\u8bed\u8a00 ",(0,r.kt)("em",{parentName:"p"},"M")," \uff0c\u03b2 \u5c5e\u4e8e ",(0,r.kt)("em",{parentName:"p"},"N")," \uff0c\u5219\u8be5\u5b57\u7b26\u4e32\u5c5e\u4e8e ",(0,r.kt)("em",{parentName:"p"},"M\xb7N")," \u7ec4\u6210\u7684\u8bed\u8a00\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u03f5"),"\u3002\u6b63\u5219\u8868\u8fbe\u5f0f ",(0,r.kt)("em",{parentName:"p"},"\u03f5")," \u8868\u793a\u4ec5\u542b\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u7684\u8bed\u8a00\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u91cd\u590d\uff08\u95ed\u5305\uff09"),"\u3002\u5bf9\u7ed9\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5176\u514b\u6797\u95ed\u5305\u662f\uff0f M",(0,r.kt)("em",{parentName:"p"}," \uff0f\u3002\u5982\u679c\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u7531 "),"M",(0,r.kt)("em",{parentName:"p"}," \u4e2d\u7684\u5b57\u7b26\u4e32\u7ecf\u8fc7 0 \u6b21\u81f3\u591a\u6b21\u8054\u7ed3\u8fd0\u7b97\u7684\u7ed3\u679c\uff0c\u5219\u8be5\u5b57\u7b26\u4e32\u5c5e\u4e8e\uff0f M")," \uff0f\u3002"))),(0,r.kt)("p",null,"\u4f7f\u7528\u65f6\uff0c\u4f1a\u7701\u7565\u8054\u7ed3\u64cd\u4f5c\u7b26\u6216 \u03f5 \u7b26\u53f7\u3002\u5e76\u5047\u5b9a\u4f18\u5148\u7ea7\u4e0a \u514b\u6797\u95ed\u5305 -> \u8054\u7ed3\u8fd0\u7b97 -> \u53ef\u9009\u8fd0\u7b97\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6b63\u5219"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u610f\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"a"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e00\u4e2a\u8868\u793a\u5b57\u7b26\u672c\u8eab\u7684\u539f\u59cb\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u03f5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u5b57\u7b26\u4e32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7a7a\u7a7a\u5b57\u7b26\u4e32\u7684\u53e6\u4e00\u79cd\u5199\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"M","|","N")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u53ef\u9009\uff0c\u5728 M \u548c N \u4e4b\u95f4\u9009\u62e9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"MN")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8054\u7ed3\uff0cM \u4e4b\u540e\u8ddf\u968f N")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("em",{parentName:"td"},"M\xb7N")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8054\u7ed3\u7684\u53e6\u4e00\u79cd\u5199\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"M",(0,r.kt)("sup",null,"*")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u590d 0 \u6b21\u53ca\u4ee5\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"M",(0,r.kt)("sup",null,"+")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u590d 1 \u6b21\u53ca\u4ee5\u4e0a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"M?"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u9009\u62e9\uff0cM \u51fa\u73b0 0 \u6b21\u6216 1 \u6b21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[a-zA-Z]"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b57\u7b26\u96c6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u53e5\u70b9\u8868\u793a\u9664\u6362\u884c\u7b26\u4ee5\u5916\u7684\u4efb\u610f\u5355\u4e2a\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},'" a. + ',"*",' "'),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5f15\u53f7\u4e2d\u7684\u5b57\u7b26\u4e32\u8868\u793a\u6587\u5b57\u5b57\u7b26\u4e32\u672c\u8eab")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u95ee\u9898\uff0c\u5bf9\u4e8e\u5f62\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"if8"),"\u8fd9\u6837\u4ee5\u4fdd\u7559\u5b57\u5f00\u5934\u7684\u5b57\u7b26\u4e32\u770b\u4f5c\u4ec0\u4e48\uff1f"),(0,r.kt)("p",{parentName:"blockquote"},"\u6d88\u9664\u4e8c\u4e49\u6027\u7684\u89c4\u5219\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u957f\u5339\u914d\uff1a\u521d\u59cb\u8f93\u5165\u5b50\u4e32\u4e2d\uff0c\u53d6\u53ef\u4e0e\u4efb\u4f55\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u90a3\u4e2a\u6700\u957f\u7684\u5b57\u7b26\u4e32\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u5355\u8bcd"),(0,r.kt)("li",{parentName:"ul"},"\u89c4\u5219\u6709\u9650\uff1a\u5bf9\u4e8e\u4e00\u4e2a\u7279\u5b9a\u7684\u6700\u957f\u521d\u59cb\u5b50\u4e32\uff0c\u7b2c\u4e00\u4e2a\u4e0e\u4e4b\u5339\u914d\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u51b3\u5b9a\u4e86\u8fd9\u4e2a\u5b50\u4e32\u7684\u5355\u8bcd\u7c7b\u578b\u3002\u610f\u5473\u7740\uff0c\u6b63\u5219\u8868\u8fbe\u5f0f\u89c4\u5219\u7684\u4e66\u5199\u987a\u5e8f\u6709\u610f\u4e49\u3002"))),(0,r.kt)("h2",{id:"\u6709\u9650\u81ea\u52a8\u673a"},"\u6709\u9650\u81ea\u52a8\u673a"),(0,r.kt)("p",null,"\u7528",(0,r.kt)("em",{parentName:"p"},"\u6b63\u5219\u8868\u8fbe\u5f0f"),"\u53ef\u4ee5\u65b9\u4fbf\u7684\u6307\u660e\u8bcd\u6cd5\u5355\u8bcd\u3002\u7528",(0,r.kt)("em",{parentName:"p"},"\u6709\u9650\u81ea\u52a8\u673a"),"\u53ef\u4ee5\u5b9e\u73b0\u5f62\u5f0f\u5316\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u6709\u9650\u81ea\u52a8\u673a\u6709\u4e00\u4e2a\u6709\u9650",(0,r.kt)("em",{parentName:"p"},"\u72b6\u6001"),"\u5408\u96c6\u548c\u4e00\u4e9b\u4ece\u4e00\u4e2a\u72b6\u6001\u901a\u5411\u53e6\u4e00\u4e2a\u72b6\u6001\u7684",(0,r.kt)("em",{parentName:"p"},"\u8fb9"),"\uff0c\u6bcf\u6761\u8fb9\u4e0a\u6807\u8bb0\u6709\u4e00\u4e2a",(0,r.kt)("em",{parentName:"p"},"\u7b26\u53f7"),"\uff1b\u5176\u4e2d\u4e00\u4e2a\u72b6\u6001\u662f",(0,r.kt)("em",{parentName:"p"},"\u521d\u6001"),"\uff0c\u67d0\u4e9b\u72b6\u6001\u662f",(0,r.kt)("em",{parentName:"p"},"\u7ec8\u6001"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6b63\u5219"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u610f\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"if"),(0,r.kt)("td",{parentName:"tr",align:"center"},"{return IF;}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[a-z][a-z0-9]","*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"{return ID;}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"[1-9][0-9]","*"),(0,r.kt)("td",{parentName:"tr",align:"center"},"{return NUM;}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"(","[0-9]",'+"."',"[0-9]",(0,r.kt)("em",{parentName:"td"}," ) ","|"," (","[0-9]"),'"."',"[0-9]","+)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"{return REAL;}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},'("--"',"[a-z]","*",' "\\n") ',"|",' (" "',"|",'"\\n"',"|",'"\\t" )'),(0,r.kt)("td",{parentName:"tr",align:"center"},"{ /",(0,r.kt)("em",{parentName:"td"}," do nothing, space "),"/}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"{error();}")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(72643).Z,width:"775",height:"399"})),(0,r.kt)("p",null,"\u5728",(0,r.kt)("em",{parentName:"p"},"\u786e\u5b9a\u7684"),"\u6709\u9650\u81ea\u52a8\u673a\u4e2d\uff0c\u4e0d\u4f1a\u6709\u540c\u4e00\u72b6\u6001\u51fa\u53d1\u7684\u4e24\u6761\u8fb9\u6807\u8bb0\u6709\u76f8\u540c\u7684\u7b26\u53f7\u3002"),(0,r.kt)("p",null,"DFA \u4ee5\u5982\u4e0b\u65b9\u5f0f",(0,r.kt)("em",{parentName:"p"},"\u63a5\u53d7"),"\u6216",(0,r.kt)("em",{parentName:"p"},"\u62d2\u7edd"),"\u4e00\u4e2a\u5b57\u7b26\u4e32\uff1a\u4ece\u521d\u59cb\u72b6\u6001\u51fa\u53d1\uff0c\u5bf9\u4e8e\u8f93\u5165\u5b57\u7b26\u4e32\u4e2d\u7684\u6bcf\u4e2a\u5b57\u7b26\uff0c\u81ea\u52a8\u673a\u90fd\u5c06\u6cbf\u7740\u4e00\u6761\u8fb9\u5230\u8fbe\u53e6\u4e00\u72b6\u6001\uff0c\u8fd9\u6761\u8fb9\u5fc5\u987b\u662f\u6807\u6709\u8f93\u5165\u5b57\u7b26\u7684\u8fb9\u3002\u5bf9 n \u4e2a\u5b57\u7b26\u7684\u5b57\u7b26\u4e32\u8fdb\u884c\u4e86 n \u6b21\u72b6\u6001\u8f6c\u6362\u540e\uff0c\u5982\u679c\u81ea\u52a8\u673a\u5230\u8fbe\u4e86\u4e00\u4e2a\u7ec8\u6001\uff0c\u90a3\u4e48\u81ea\u52a8\u673a\u5c06\u63a5\u53d7\u8fd9\u4e2a\u5b57\u7b26\u4e32\u3002\u82e5\u5230\u8fbe\u7684\u4e0d\u662f\u7ec8\u6001\uff0c\u6216\u8005\u627e\u4e0d\u5230\u4e0e\u8f93\u5165\u5b57\u7b26\u76f8\u5339\u914d\u7684\u8fb9\uff0c\u81ea\u52a8\u673a\u5c06\u62d2\u7edd\u8fd9\u4e2a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"\u7531\u4e00\u4e2a\u81ea\u52a8\u673a\u8bc6\u522b\u7684",(0,r.kt)("em",{parentName:"p"},"\u8bed\u8a00"),"\u662f\u8be5\u81ea\u52a8\u673a\u63a5\u53d7\u7684\u5b57\u7b26\u4e32\u96c6\u5408\u3002"),(0,r.kt)("p",null,"\u5c06\u4e0a\u9762\u7684\u516d\u4e2a\u81ea\u52a8\u673a\u5408\u5e76\u540e\u53ef\u4ee5\u5f97\u5230\u4e0b\u56fe\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(79450).Z,width:"613",height:"324"})),(0,r.kt)("h3",{id:"\u8bc6\u522b\u6700\u957f\u7684\u5339\u914d"},"\u8bc6\u522b\u6700\u957f\u7684\u5339\u914d"),(0,r.kt)("p",null,"\u8bcd\u6cd5\u5206\u6790\u5668\u7684\u4efb\u52a1\u662f\u8981\u627e\u5230\u6700\u957f\u7684\u5339\u914d\uff0c\u56e0\u4e3a\u8f93\u5165\u4e2d\u6700\u957f\u7684\u521d\u59cb\u5b50\u4e32\u624d\u662f\u5408\u6cd5\u7684\u5355\u8bcd\u3002\u5728\u8fdb\u884c\u8f6c\u6362\u7684\u8fc7\u7a0b\u4e2d\uff0c\u8bcd\u6cd5\u5206\u6790\u5668\u8981\u4e00\u76f4\u8ffd\u8e2a\u5230\u8fc4\u4eca\u89c1\u5230\u7684\u6700\u957f\u5339\u914d\u4ee5\u53ca\u8fd9\u4e2a\u6700\u957f\u5339\u914d\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8ffd\u8e2a\u6700\u957f\u5339\u914d\u4e00\u4f4d\u7f6e\u9700\u8981\u7528\u4e24\u4e2a\u53d8\u91cf Last_Final(\u6700\u8fd1\u9047\u5230\u7684\u7ec8\u6001\u7684\u7f16\u53f7) \u548c Input_Position_at_Last_Final \u6765\u8bb0\u4f4f\u81ea\u52a8\u673a\u6700\u540e\u4e00\u6b21\u5904\u4e8e\u7ec8\u6001\u65f6\u7684\u65f6\u673a\u3002\u6bcf\u6b21\u8fdb\u5165\u4e00\u4e2a\u7ec8\u6001\u65f6\uff0c\u8bcd\u6cd5\u5206\u6790\u5668\u90fd\u8981\u66f4\u65b0\u8fd9\u4e24\u4e2a\u53d8\u91cf\uff1b\u5f53\u5230\u8fbe\u505c\u6ede\u72b6\u6001(\u65e0\u51fa\u53e3\u8f6c\u6362\u7684\u975e\u7ec8\u6001\u72b6\u6001)\u65f6\uff0c\u4ece\u8fd9\u4e24\u4e2a\u53d8\u91cf\u5c31\u80fd\u5f97\u77e5\u6240\u5339\u914d\u7684\u5355\u8bcd\u548c\u5b83\u7684\u7ed3\u675f\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86\u4e00\u4e2a\u8bcd\u6cd5\u5206\u6790\u5668\u8bc6\u522b\u6700\u957f\u5339\u914d\u7684\u64cd\u4f5c\u8fc7\u7a0b\u3002\u6ce8\u610f\uff0c\u5f53\u524d\u8f93\u5165\u4f4d\u7f6e\u53ef\u80fd\u76f8\u8ddd\u8bc6\u522b\u5668\u6700\u8fd1\u5230\u8fbe\u7ec8\u6001\u65f6\u7684\u4f4d\u7f6e\u5df2\u5f88\u8fdc\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(46809).Z,width:"800",height:"462"})),(0,r.kt)("h2",{id:"\u975e\u786e\u5b9a\u6709\u9650\u81ea\u52a8\u673a"},"\u975e\u786e\u5b9a\u6709\u9650\u81ea\u52a8\u673a"),(0,r.kt)("p",null,"\u975e\u786e\u5b9a\u6709\u9650\u81ea\u52a8\u673a\u662f\u4e00\u79cd\u9700\u8981\u5bf9\u4ece\u4e00\u4e2a\u72b6\u6001\u51fa\u53d1\u7684\u591a\u6761\u6807\u6709\u76f8\u540c\u7b26\u53f7\u7684\u8fb9\u8fdb\u884c\u9009\u62e9\u7684\u81ea\u52a8\u673a\u3002\u5b83\u53ef\u80fd\u5b58\u5728\u6807\u6709 \u03f5 \u7684\u8fb9\uff0c\u8868\u793a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("p",null,"// todo"))}c.isMDXComponent=!0},72643:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/in-c-ch02f01-fdf1d86c93c39ce38a76ecbcf72cac61.png"},79450:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/in-c-ch02f02-5e8090d060fd621139cc483a61fa134a.png"},46809:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/in-c-ch02f03-3369055bef9e193c4589378eb05ac39c.png"}}]);