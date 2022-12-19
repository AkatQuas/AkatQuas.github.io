"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9878],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>k});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=l.createContext({}),s=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=s(e.components);return l.createElement(i.Provider,{value:n},e.children)},c="mdxType",L={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,k=c["".concat(i,".").concat(m)]||c[m]||L[m]||a;return t?l.createElement(k,u(u({ref:n},o),{},{components:t})):l.createElement(k,u({ref:n},o))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:r,u[1]=p;for(var s=2;s<a;s++)u[s]=t[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81027:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var l=t(87462),r=(t(67294),t(3905));const a={title:"list \u8868",sidebar_position:3},u=void 0,p={unversionedId:"data-structure/list",id:"data-structure/list",title:"list \u8868",description:"(a1, a2,...,an)",source:"@site/docs/data-structure/list.md",sourceDirName:"data-structure",slug:"/data-structure/list",permalink:"/docs/data-structure/list",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"list \u8868",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Vector \u5bb9\u5668",permalink:"/docs/data-structure/vector"},next:{title:"Set and Map \u96c6\u5408",permalink:"/docs/data-structure/set-n-map"}},i={},s=[{value:"\u957f\u5ea6\u4e3a 1 \u7684\u8868\uff0c",id:"\u957f\u5ea6\u4e3a-1-\u7684\u8868",level:3},{value:"\u5b50\u8868",id:"\u5b50\u8868",level:3},{value:"\u5b50\u5e8f\u5217",id:"\u5b50\u5e8f\u5217",level:3},{value:"\u524d\u7f00\u4e0e\u540e\u7f00",id:"\u524d\u7f00\u4e0e\u540e\u7f00",level:3},{value:"\u5143\u7d20\u7684\u4f4d\u7f6e",id:"\u5143\u7d20\u7684\u4f4d\u7f6e",level:3},{value:"\u57fa\u672c\u64cd\u4f5c\u6709\uff1a",id:"\u57fa\u672c\u64cd\u4f5c\u6709",level:3},{value:"\u94fe\u8868\u7684\u67e5\u627e",id:"\u94fe\u8868\u7684\u67e5\u627e",level:3},{value:"\u94fe\u8868\u7684\u5220\u9664",id:"\u94fe\u8868\u7684\u5220\u9664",level:3},{value:"\u94fe\u8868\u7684\u672b\u5c3e\u63d2\u5165",id:"\u94fe\u8868\u7684\u672b\u5c3e\u63d2\u5165",level:3},{value:"\u53cc\u5411\u94fe\u8868",id:"\u53cc\u5411\u94fe\u8868",level:3},{value:"\u6808\u7684\u6570\u7ec4\u5b9e\u73b0",id:"\u6808\u7684\u6570\u7ec4\u5b9e\u73b0",level:2},{value:"\u6808\u7684\u94fe\u8868\u5b9e\u73b0",id:"\u6808\u7684\u94fe\u8868\u5b9e\u73b0",level:2}],o={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"(a",(0,r.kt)("sub",null,"1"),", a",(0,r.kt)("sub",null,"2"),",...,a",(0,r.kt)("sub",null,"n"),")"),(0,r.kt)("h3",{id:"\u957f\u5ea6\u4e3a-1-\u7684\u8868"},"\u957f\u5ea6\u4e3a 1 \u7684\u8868\uff0c"),(0,r.kt)("p",null,"(a)"),(0,r.kt)("h3",{id:"\u5b50\u8868"},"\u5b50\u8868"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u8868 L = (a",(0,r.kt)("sub",null,"1"),", a",(0,r.kt)("sub",null,"2"),",...,a",(0,r.kt)("sub",null,"n"),")\uff0c \u5bf9\u6ee1\u8db3 1<=i<=j<=n \u7684 i \u548c j \u6765\u8bf4\uff0c(a",(0,r.kt)("sub",null,"i"),", a",(0,r.kt)("sub",null,"i+1"),",...,a",(0,r.kt)("sub",null,"j"),")\u662f L \u7684\u5b50\u8868\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b50\u8868\u662f\u7531\u4ece\u67d0\u4e2a\u4f4d\u7f6e i \u5f00\u59cb\u5230\u67d0\u4e2a\u4f4d\u7f6e j \u7ed3\u675f\u7684\u6240\u6709\u5143\u7d20\u7ec4\u6210\u7684\u3002\u8fd8\u53ef\u4ee5\u8bf4\u7a7a\u8868 e \u662f\u4efb\u610f\u8868\u7684\u5b50\u8868\u3002"),(0,r.kt)("h3",{id:"\u5b50\u5e8f\u5217"},"\u5b50\u5e8f\u5217"),(0,r.kt)("p",null,"\u8868 L = (a",(0,r.kt)("sub",null,"1"),", a",(0,r.kt)("sub",null,"2"),",...,a",(0,r.kt)("sub",null,"n"),") \u7684\u5b50\u5e8f\u5217\u662f\u6307\u4ece L \u4e2d\u5254\u9664 0 \u4e2a\u6216\u591a\u4e2a\u5143\u7d20\u540e\u5f62\u6210\u7684\u8868\u3002\u5269\u4e0b\u7684\u8fd9\u4e9b\u5143\u7d20\uff0c\u4e5f\u5c31\u662f\u6784\u6210\u5b50\u5e8f\u5217\u7684\u8fd9\u4e9b\u5143\u7d20\uff0c\u5fc5\u987b\u6309\u7167\u4e0e\u51fa\u73b0\u5728 L \u4e2d\u76f8\u540c\u7684\u987a\u5e8f\u6392\u5217\uff0c\u4e0d\u8fc7\u5b50\u5e8f\u5217\u7684\u5143\u7d20\u5728 L \u4e2d\u4e0d\u4e00\u5b9a\u662f\u8fde\u7eed\u7684\u3002\u8bf7\u6ce8\u610f\uff0c\u7a7a\u8868 e \u548c\u8868 L \u672c\u8eab\u603b\u662f L \u7684\u5b50\u5e8f\u5217\uff0c\u800c\u4e14 L \u7684\u5b50\u8868\u4e5f\u662f L \u7684\u5b50\u5e8f\u5217\u3002"),(0,r.kt)("h3",{id:"\u524d\u7f00\u4e0e\u540e\u7f00"},"\u524d\u7f00\u4e0e\u540e\u7f00"),(0,r.kt)("p",null,"\u8868\u524d\u7f00\u662f\u6307\u4ece\u8868\u7684\u5f00\u5934\u5f00\u59cb\u7684\u4efb\u610f\u5b50\u8868\u3002\u8868\u540e\u7f00\u662f\u4ee5\u8868\u7684\u7ed3\u5c3e\u4e3a\u672b\u5c3e\u7684\u5b50\u8868\u3002 \u8868 e \u662f\u79cd\u7279\u6b8a\u60c5\u51b5\uff0c\u5b83\u662f\u4efb\u610f\u8868\u7684\u524d\u7f00\u548c\u540e\u7f00\u3002"),(0,r.kt)("h3",{id:"\u5143\u7d20\u7684\u4f4d\u7f6e"},"\u5143\u7d20\u7684\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u8868\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u4e0e\u4e4b\u5173\u8054\u7684\u4f4d\u7f6e\u3002\u5982\u679c\u6709\u8868(a",(0,r.kt)("sub",null,"1"),", a",(0,r.kt)("sub",null,"2"),",...,a",(0,r.kt)("sub",null,"n"),")\uff0c\u800c\u4e14 n>=1\uff0ca",(0,r.kt)("sub",null,"1"),"\u5c31\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0ca",(0,r.kt)("sub",null,"2"),"\u5c31\u662f\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff0c\u800c a",(0,r.kt)("sub",null,"n"),"\u662f\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002\u8fd8\u53ef\u4ee5\u8bf4 ai \u51fa\u73b0\u5728\u4f4d\u7f6e i\u3002\u9664\u6b64\u4e4b\u5916\uff0ca",(0,r.kt)("sub",null,"i"),"\u662f a",(0,r.kt)("sub",null,"i-1"),"\uff0c a",(0,r.kt)("sub",null,"i+1")," \u524d\u3002\u800c\u5b58\u653e\u5143\u7d20 a \u7684\u4f4d\u7f6e\u79f0\u4f5c a \u7684\u51fa\u73b0\u3002"),(0,r.kt)("p",null,"\u8868\u4e2d\u4f4d\u7f6e\u7684\u6570\u91cf\u5c31\u7b49\u4e8e\u8868\u7684\u957f\u5ea6\u3002\u540c\u4e00\u5143\u7d20\u662f\u6709\u53ef\u80fd\u51fa\u73b0\u5728\u4e24\u4e2a\u6216\u591a\u4e2a\u4f4d\u7f6e\u7684\uff0c\u56e0\u6b64\u4e0d\u8981\u628a\u4f4d\u7f6e\u548c\u51fa\u73b0\u5728\u8be5\u4f4d\u7f6e\u7684\u5143\u7d20\u4e86\u5f04\u6df7\u4e86\u3002"),(0,r.kt)("h3",{id:"\u57fa\u672c\u64cd\u4f5c\u6709"},"\u57fa\u672c\u64cd\u4f5c\u6709\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u63d2\u5165"),(0,r.kt)("li",{parentName:"ul"},"\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u4e32\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u8868\u5934"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u4f4d\u7f6e i \u7684\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"\u53d6\u957f\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u8be2\u95ee\u662f\u5426\u4e3a\u7a7a")),(0,r.kt)("h1",{id:"\u94fe\u8868"},"\u94fe\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"typedef struct CELL *LIST;\nstruct CELL {\n    int element;\n    LIST next\n}\n")),(0,r.kt)("h3",{id:"\u94fe\u8868\u7684\u67e5\u627e"},"\u94fe\u8868\u7684\u67e5\u627e"),(0,r.kt)("p",null,"\u82b1\u8d39\u65f6\u95f4 O(n), \u5e73\u5747\u67e5\u627e\u6b21\u6570 (n+1)/2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"BOOLEAN lookup(int x, LIST L)\n{\n    if ( L == NULL )\n        return FALSE;\n    else if ( x == L->element )\n        return TRUE;\n    else\n        return lookup(x, L->next);\n}\n")),(0,r.kt)("h3",{id:"\u94fe\u8868\u7684\u5220\u9664"},"\u94fe\u8868\u7684\u5220\u9664"),(0,r.kt)("p",null,"\u82b1\u8d39\u65f6\u95f4 O(n), \u5e73\u5747\u67e5\u627e\u6b21\u6570 (n+1)/2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"void delete(int x, LIST *pL)\n{\n    if ((*pL) != NULL)\n        if (x == (*pL)->element)\n            (*pL) = (*pL)->next;\n        else\n            delete(x, &((*pL)->next));\n}\n")),(0,r.kt)("h3",{id:"\u94fe\u8868\u7684\u672b\u5c3e\u63d2\u5165"},"\u94fe\u8868\u7684\u672b\u5c3e\u63d2\u5165"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"void insertLast(int x, LIST *pL)\n{\n    if ( (*pL) === NULL ){\n        (*pL) = (LIST) malloc(sizeof(struct CELL));\n        (*pL)->element = x;\n        (*pL)->next = NULL;\n    } else if ( x != (*pL)->element )\n        insertLast(x, &((*pL)->next));\n}\n")),(0,r.kt)("h3",{id:"\u53cc\u5411\u94fe\u8868"},"\u53cc\u5411\u94fe\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"typedef struct CELL *LIST;\nstruct CELL {\n    LIST previous;\n    int element;\n    LIST next;\n}\n")),(0,r.kt)("h1",{id:"\u6808"},"\u6808"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"LIFO"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u8c03\u7528\u7684\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u64cd\u4f5c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"clear, \u6e05\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"isEmpty, \u662f\u5426\u4e3a\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"isFull, \u662f\u5426\u6ee1\u4e86\uff0c\u6ee1\u4e86\u4e0d\u80fd\u518d",(0,r.kt)("inlineCode",{parentName:"li"},"push")),(0,r.kt)("li",{parentName:"ul"},"pop, \u975e\u7a7a\u6808\u65f6\u5220\u9664\u5e76\u8fd4\u56de\u6808\u9876\u5143\u7d20"),(0,r.kt)("li",{parentName:"ul"},"push, \u5c06\u5143\u7d20\u538b\u5165\u975e\u6ee1\u6808")))),(0,r.kt)("h2",{id:"\u6808\u7684\u6570\u7ec4\u5b9e\u73b0"},"\u6808\u7684\u6570\u7ec4\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"typedef struct {\n    int A[MAX];\n    int top;\n} STACK;\n\nvoid clear(STACK *pS)\n{\n    pS->top = -1;\n}\n\nBOOLEAN isEmpty(STACK *pS)\n{\n    return (pS->top < 0);\n}\n\nBOOLEAN isFull(STACK *pS)\n{\n    return (pS->top >= MAX -1);\n}\n\nBOOLEAN pop(STACK *pS, int *px)\n{\n    if (isEmpty(pS))\n        return FALSE;\n    else {\n        (*px) = pS->A[(pS->top)--];\n        return TRUE;\n    }\n}\n\nBOOLEAN push(int x, STACK *pS)\n{\n    if (isull(pS))\n        return FALSE;\n    else {\n        pS->A[++(pS->top)] = x;\n        return TRUE\n    }\n}\n")),(0,r.kt)("h2",{id:"\u6808\u7684\u94fe\u8868\u5b9e\u73b0"},"\u6808\u7684\u94fe\u8868\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"DefCell (int, CELL, STACK);\ntypedef struct CELL *STACK;\nstruct CELL {\n    int element;\n    STACK next\n};\n\nvoid clear(STACK *pS)\n{\n    (*pS) = NULL;\n}\nBOOLEAN isEmpty(STACK *pS)\n{\n    return ((*pS) == NULL);\n}\nBOOLEAN isFull(STACK *pS)\n{\n    return FALSE;\n}\nBOOLEAN pop(STACK *pS, int *px)\n{\n    if (isEmpty(pS))\n        return FALSE;\n    else {\n        (*px) = (*pS)->element;\n        (*pS) = (*pS)->next;\n        return TRUE;\n    }\n}\nBOOLEAN push(int x, STACK *pS)\n{\n    STACK newCell;\n    newCell = (STACK) malloc(sizeof(struct CELL));\n    newCell->element = x;\n    newCell->next = (*pS);\n    (*pS) = newCell;\n    return TRUE;\n}\n")),(0,r.kt)("h1",{id:"\u961f\u5217"},"\u961f\u5217"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FIFO"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u672c\u64cd\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"clear, \u6e05\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"dequeue, \u51fa\u961f"),(0,r.kt)("li",{parentName:"ul"},"enqueue, \u5165\u961f"),(0,r.kt)("li",{parentName:"ul"},"isEmpty, \u662f\u5426\u4e3a\u7a7a"),(0,r.kt)("li",{parentName:"ul"},"isFull, \u662f\u5426\u5df2\u6ee1")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},"DefCell(int, CELL, LIST);\ntypedef struct {\n    LIST front, rear;\n} QUEUE;\nvoid clear(QUEUE *pQ)\n{\n    pQ->front = NULL;\n}\nBOOLEAN isEmpty(QUEUE *pQ)\n{\n    return (pQ->front == NULL);\n}\nBOOLEAN isFull(QUEUE *pQ)\n{\n    return FALSE;\n}\nBOOLEAN dequeue(QUEUE *pQ, int *px)\n{\n    if (isEmpty(pQ))\n        return FALSE;\n    else {\n        (*px) = pQ->front->element;\n        pQ->front = pQ->front->next;\n        return TRUE;\n    }\n}\nBOOLEAN enqueue(int x, QUEUE *pQ)\n{\n    if (isEmpty(pQ)) {\n        pQ->front = (LIST) malloc(sizeof(struct CELL));\n        pQ->rear = pQ->front;\n    }\n    else {\n        pQ->rear->next = (LIST) malloc(sizeof(struct CELL));\n        pQ->rear = pQ->rear->next;\n    }\n    pQ->rear->element = x;\n    pQ->rear->next = NULL;\n    return TRUE;\n}\n")),(0,r.kt)("h1",{id:"\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217longest-common-subsequence-lcs"},"\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217(Longest Common Subsequence, LCS)"),(0,r.kt)("p",null,"\u52a8\u6001\u89c4\u5212\u7b97\u6cd5\uff0camazing!"))}c.isMDXComponent=!0}}]);