"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7107],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var o=r.createContext({}),h=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=h(n.components);return r.createElement(o.Provider,{value:e},n.children)},p="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=h(t),d=a,k=p["".concat(o,".").concat(d)]||p[d]||c[d]||i;return t?r.createElement(k,s(s({ref:e},u),{},{components:t})):r.createElement(k,s({ref:e},u))}));function k(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l[p]="string"==typeof n?n:a,s[1]=l;for(var h=2;h<i;h++)s[h]=t[h];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},130:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=t(87462),a=(t(67294),t(3905));const i={title:"Hash table \u6563\u5217\u8868",sidebar_position:5},s=void 0,l={unversionedId:"data-structure/hash-table",id:"data-structure/hash-table",title:"Hash table \u6563\u5217\u8868",description:"Overview",source:"@site/docs/data-structure/hash-table.md",sourceDirName:"data-structure",slug:"/data-structure/hash-table",permalink:"/docs/data-structure/hash-table",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Hash table \u6563\u5217\u8868",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set and Map \u96c6\u5408",permalink:"/docs/data-structure/set-n-map"},next:{title:"Priority Queue \u4f18\u5148\u961f\u5217",permalink:"/docs/data-structure/priority-queue"}},o={},h=[{value:"Overview",id:"overview",level:2},{value:"Basic Context",id:"basic-context",level:2},{value:"Hash Function",id:"hash-function",level:2},{value:"Load factor",id:"load-factor",level:2},{value:"Collision",id:"collision",level:2},{value:"\u5206\u79bb\u94fe\u63a5\u6cd5",id:"\u5206\u79bb\u94fe\u63a5\u6cd5",level:3},{value:"\u5f00\u653e\u5b9a\u5740\u6cd5",id:"\u5f00\u653e\u5b9a\u5740\u6cd5",level:3},{value:"\u63a2\u6d4b\u6563\u5217\u8868",id:"\u63a2\u6d4b\u6563\u5217\u8868",level:4},{value:"Rehash",id:"rehash",level:3}],u={toc:h};function p(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"\u6563\u5217\u8868\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Hash Table"),"\uff0c\u5b9e\u73b0\u79f0\u4e3a\u6563\u5217\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"hashing"),"\uff0c\u4e00\u79cd\u7528\u4e8e\u5e38\u6570\u5e73\u5747\u65f6\u95f4\u6267\u884c\u63d2\u5165\u3001\u5220\u9664\u548c\u67e5\u627e\u7684\u6280\u672f\uff0c\u4f46\u662f\u5143\u7d20\u95f4\u7684\u6392\u5e8f\u4fe1\u606f\u7684\u6811\u64cd\u4f5c\u5c06\u4e0d\u4f1a\u5f97\u5230\u6709\u6548\u7684\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"basic-context"},"Basic Context"),(0,a.kt)("p",null,"\u7406\u60f3\u7684\u6563\u5217\u8868\u6570\u636e\u7ed3\u6784\u662f\u4e00\u4e2a\u5305\u542b\u4e00\u4e9b\u9879\u7684\u5177\u6709\u56fa\u5b9a\u5927\u5c0f\u7684\u6570\u7ec4\u3002\u8868\u7684\u5927\u5c0f\u8bb0\u4f5c",(0,a.kt)("inlineCode",{parentName:"p"},"TableSize"),"\uff0c\u8fd9\u5c06\u7406\u89e3\u4e3a\u6563\u5217\u6570\u636e\u7ed3\u6784\u7684\u4e00\u90e8\u5206\uff0c\u800c\u4e0d\u662f\u4ec5\u4ec5\u662f\u6d6e\u52a8\u4e8e\u5168\u5c40\u7684\u67d0\u4e2a\u53d8\u91cf\u3002\u901a\u5e38\u7684\u4e60\u60ef\u662f\u8ba9\u8868\u4ece",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"TableSize-1"),"\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u5c06\u8868\u7684\u6bcf\u4e2a\u952e\u6620\u5c04\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"0 ~ TableSize - 1 "),"\u7684\u67d0\u4e2a\u6570\uff0c\u5e76\u5c06\u5176\u653e\u5230\u9002\u5f53\u7684\u5355\u5143\u4e2d\u3002\u79f0\u8fd9\u4e2a\u6620\u5c04\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u6563\u5217\u51fd\u6570(hash function)"),"\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u8be5\u51fd\u6570\u5e94\u8be5\u8fd0\u7b97\u7b80\u5355\u5e76\u4e14\u4fdd\u8bc1\u4efb\u610f\u4e24\u4e2a\u4e0d\u540c\u7684\u952e\u6620\u5c04\u5230\u4e0d\u540c\u7684\u5355\u5143\u3002"),(0,a.kt)("p",null,"\u8981\u8bbe\u8ba1\u597d\u7684\u6563\u5217\u8868\uff0c\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u9ad8\u6548\u7684\u51fd\u6570\uff0c\u5e76\u4e14\u6070\u5f53\u5904\u7406\u5f53\u4e24\u4e2a\u952e\u6563\u5217\u5230\u540c\u4e00\u4e2a\u503c\u65f6\u7684\u51b2\u7a81\uff0c\u4ee5\u53ca\u5982\u4f55\u786e\u5b9a\u6563\u5217\u8868\u7684\u5927\u5c0f\u3002"),(0,a.kt)("h2",{id:"hash-function"},"Hash Function"),(0,a.kt)("p",null,"\u4e00\u79cd\u8ba1\u7b97\u6563\u5217\u4e2d\u952e\u7684\u6570\u503c\u53ef\u4ee5\u7d2f\u52a0\u952e\u6bcf\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u5b57\u7b26\u7684 ASCII \u7801\uff0c\u7136\u540e\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"TablSize"),"\u53d6\u6a21\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"/*\n \u672c\u4f8b\u7a0b\u5bf9\u4e8e\u8868\u7684\u5206\u5e03\u800c\u8a00\u672a\u5fc5\u662f\u6700\u597d\u7684\uff0c\u4e0d\u8fc7\u7b80\u5355\u5feb\u6377\uff0c\u5982\u679c\u952e\u8fc7\u957f\u65f6\uff0c\u53ef\u4ee5\u9009\u62e9\u53ea\u8ba1\u7b97\u5947\u6570\u4f4d\u7f6e\u4e0a\u7684\u5b57\u7b26\uff0c\u8fd9\u4e2a\u505a\u6cd5\u5305\u542b\u201c\u7528\u8ba1\u7b97\u6563\u5217\u51fd\u6570\u8282\u7701\u4e0b\u7684\u65f6\u95f4\u6765\u8865\u507f\u7531\u6b64\u4ea7\u751f\u7684\u5bf9\u5747\u5300\u5206\u5e03\u51fd\u6570\u7684\u8f7b\u5fae\u5e72\u6270\u201d\u7684\u60f3\u6cd5\n*/\nint hash( const string & key, int tableSize )\n{\n    int hashVal = 0;\n\n    for ( int i = 0, l = key.length() ; i < l ; i++ )\n        hashVal = 37 * hashVal + key[ i ];\n\n    hashVal %= tableSize;\n    if (hashVal < 0 )\n        hashVal += tableSize;\n\n    return hashVal;\n}\n")),(0,a.kt)("h2",{id:"load-factor"},"Load factor"),(0,a.kt)("p",null,"\u88c5\u586b\u56e0\u5b50 \u03bb\uff0c\u4e3a\u6563\u5217\u8868\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u4e0e\u6563\u5217\u8868\u5927\u5c0f\u7684\u6bd4\u503c\u3002\u8868\u7684\u5e73\u5747\u957f\u5ea6\u4e3a \u03bb\u3002"),(0,a.kt)("h2",{id:"collision"},"Collision"),(0,a.kt)("p",null,"\u4e24\u4e2a\u952e\u7ecf\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"hash function"),"\u4e4b\u540e\u7684\u6307\u5411\u4e3a\u540c\u4e00\u4e2a\u503c\u65f6\uff0c\u8fd9\u79cd\u60c5\u51b5\u6210\u4e3a\u51b2\u7a81\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Collision"),"\u3002\u4e0b\u9762\u8ba8\u8bba\u5904\u7406\u51b2\u7a81\u7684\u6700\u7b80\u5355\u7684\u4e24\u79cd\u65b9\u6cd5\uff0c",(0,a.kt)("a",{parentName:"p",href:"#%E5%88%86%E7%A6%BB%E9%93%BE%E6%8E%A5%E6%B3%95"},"\u5206\u79bb\u94fe\u63a5\u6cd5")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"#%E5%BC%80%E6%94%BE%E5%AE%9A%E5%9D%80%E6%B3%95"},"\u5f00\u653e\u5b9a\u5740\u6cd5"),"\u3002"),(0,a.kt)("h3",{id:"\u5206\u79bb\u94fe\u63a5\u6cd5"},"\u5206\u79bb\u94fe\u63a5\u6cd5"),(0,a.kt)("p",null,"\u5206\u79bb\u94fe\u63a5\u6cd5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"separate chaining"),"\uff0c\u505a\u6cd5\u662f\u5c06\u6563\u5217\u5230\u540c\u4e00\u4e2a\u503c\u7684\u5143\u7d20\u4fdd\u7559\u5230\u4e00\u4e2a\u94fe\u8868\u4e2d\u3002\u8fd9\u4e2a\u94fe\u8868\u901a\u5e38\u662f\u53cc\u5411\u94fe\u8868\uff08\u7a7a\u95f4\u7d27\u5f20\u65f6\u53ef\u4ee5\u9009\u62e9\u5176\u4ed6\u5b9e\u73b0\u65b9\u5f0f\uff09\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c search \u7684\u65f6\u5019\uff0c\u4f7f\u7528 hash function \u6765\u786e\u5b9a\u9700\u8981\u88ab\u904d\u5386\u7684\u94fe\u8868\uff0c\u7136\u540e\u518d\u5728\u8be5\u94fe\u8868\u4e2d\u8fdb\u884c\u67e5\u8be2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c insert \u65f6\uff0c\u5148\u68c0\u67e5\u76f8\u5e94\u7684\u94fe\u8868\u4e2d\u662f\u5426\u6709\u91cd\u590d\u5143\uff08\u91cd\u590d\u5143\u7684\u8ba1\u6570\u52a0 1 \u5373\u53ef\uff09\uff0c\u65b0\u5143\u7d20\u5219\u63d2\u5165\u5230\u94fe\u8868\u7684\u524d\u7aef\u3002")),(0,a.kt)("p",null,"\u5728\u5206\u79bb\u94fe\u8868\u6cd5\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u03bb = 1.0"),"\u3002\u6267\u884c\u4e00\u6b21\u67e5\u627e\u6240\u9700\u7684\u5de5\u4f5c\u662f\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"p"},"hashValue"),"\u6240\u9700\u8981\u7684\u5e38\u6570\u65f6\u95f4\u52a0\u4e0a\u904d\u5386\u8868\u6240\u7528\u7684\u65f6\u95f4\u3002\u5728\u4e00\u6b21\u4e0d\u6210\u529f\u7684\u67e5\u627e\u4e2d\uff0c\u8981\u8003\u5bdf\u7684\u7ed3\u70b9\u6570\u5e73\u5747\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u03bb"),"\u3002\u6210\u529f\u7684\u67e5\u627e\u5219\u9700\u8981\u904d\u5386\u5927\u7ea6",(0,a.kt)("inlineCode",{parentName:"p"},"1 + (\u03bb/2)"),"\u4e2a\u94fe\u3002\u4ece\u4e0b\u9762\u7684\u5206\u6790\u53ef\u4ee5\u770b\u51fa\uff0c\u6563\u5217\u8868\u7684\u5b9e\u9645\u5927\u5c0f\u5e76\u4e0d\u91cd\u8981\uff0c\u88c5\u586b\u56e0\u5b50\u624d\u91cd\u8981\u3002\u5206\u79bb\u94fe\u8868\u6cd5\u4e00\u822c\u505a\u6cd5\u662f\u5c06\u8868\u7684\u5927\u5c0f\u5c3d\u91cf\u4e0e\u9884\u6599\u7684\u5143\u7d20\u4e2a\u6570\u5dee\u4e0d\u591a\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"\u03bb \u2248 1"),"\u3002\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"\u03bb > 1"),"\uff0c\u5c31\u8fdb\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"rehash"),"\u6765\u6269\u5145\u8868\u7684\u5927\u5c0f\u3002\u53e6\u5916\uff0c\u4f7f\u5f97\u8868\u7684\u5927\u5c0f\u662f\u7d20\u6570\u6765\u4fdd\u8bc1\u4e00\u4e2a\u597d\u7684\u5206\u5e03\u7684\u60f3\u6cd5\u662f\u5f88\u4e0d\u9519\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u9488\u5bf9( 1 + \u03bb/2 )\u7684\u5206\u6790\u5982\u4e0b\uff1a\n\u88ab\u641c\u7d22\u7684\u8868\u5305\u542b\u4e00\u4e2a\u5b58\u50a8\u5339\u914d\u7684\u7ed3\u70b9\u518d\u52a0\u4e0a0\u4e2a\u6216\u66f4\u591a\u5176\u4ed6\u7684\u7ed3\u70b9\u3002\n\u5728N\u4e2a\u5143\u7d20\u7684\u8868\u4ee5\u53caM\u4e2a\u94fe\u8868\u4e2d\u201c\u5176\u4ed6\u7ed3\u70b9\u201d\u7684\u671f\u671b\u4e2a\u6570\u4e3a(N-1)/M = \u03bb - 1/M\u3002\n\u4e00\u822c\u8ba4\u4e3aM\u5f88\u5927\uff0c\u6240\u4ee5\u5e73\u5747\u6765\u770b\uff0c\u4e00\u534a\u7684\u201c\u5176\u4ed6\u7ed3\u70b9\u201d\u88ab\u641c\u7d22\u5230\uff0c\u518d\u7ed3\u5408\u5339\u914d\u7ed3\u70b9\uff0c\n\u6700\u7ec8\u5f97\u5230\u7684\u5e73\u5747\u67e5\u627e\u5f00\u9500\u4e3a ( 1 + \u03bb/2 )\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"# \u6563\u5217\u8868\u7ed3\u6784\u5b58\u50a8\u4e00\u4e2a\u94fe\u8868\u6570\u7ec4\uff0c\u8fd9\u4e2a\u6570\u7ec4\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6307\u5b9a\n# \u4e0b\u9762\u662f\u5b9e\u73b0\u5206\u79bb\u94fe\u63a5\u6cd5\u6240\u9700\u7684\u7c7b\u63a5\u53e3\u53ca\u4f8b\u7a0b\n# theLists\u58f0\u660e\u4e2d\u4e24\u4e2a>\u4e4b\u95f4\u9700\u8981\u4e00\u4e2a\u7a7a\u683c\uff0c\u539f\u56e0\u662f>>\u662fC++\u7684\u4e00\u4e2a\u8fd0\u7b97\u7b26\uff0c\u907f\u514d\u7f16\u8bd1\u6b67\u4e49\uff0c\u6240\u4ee5\u591a\u52a0\u4e00\u4e2a\u7a7a\u683c\u3002\nclass HashTable\n{\n    public:\n        explicit HashTable( int size = 101 );\n        bool contains( const HashedObj & x ) const\n        {\n            const list<HashedObj> & whichList = theLists[ myhash( x )];\n            return find( whichList.begin( ), whichList.end( ), x ) != whichList.end( );\n        }\n\n        void makeEmpty( )\n        {\n            for ( int i = 0, l = theLists.size() ; i < l ; i++ )\n                thisLists[i].clear();\n        }\n\n        void insert( const HashedObj & x )\n        {\n            list<HashedObj> & whichList = theLists[ myhash( x ) ];\n            if ( find( whichList.begin( ), whicList.end( ), x ) != whichList.end( ) )\n                return false;\n\n            whichList.push_back( x );\n\n                // rehash;\n            if ( ++currentSize > theLists.size( ) )\n                rehash( );\n\n            return true;\n        }\n\n        void remove( const HashedObj & x )\n        {\n            list<HashedObj> & whichList = theLists[ myhash( x )];\n            list<HashedObj>::iterator itr = find(whichList.begin( ), whichList.end( ), x );\n\n            if ( itr == whichList.end( ) )\n                return false;\n\n            whichList.erase( itr );\n            --currentSize;\n            return true;\n        }\n\n    private:\n        vector<list<HashedObj> > theLists; // The array of Lists\n        int currentSize;\n\n        void rehash( );\n\n        # private function, \u5c06\u7ed3\u679c\u5206\u914d\u5230\u4e00\u4e2a\u5408\u9002\u7684\u6570\u7ec4\u7d22\u5f15\u4e2d\u3002\n        int myhash( const HashedObj & x ) const\n        {\n            int hashVal = hash( x );\n\n            hashVal %= theLists.size( );\n            if ( hashVal < 0 )\n                hashVal += theLists.size( );\n\n            return hashVal;\n        }\n};\nint hash( const string & key );\nint hash( int key );\n")),(0,a.kt)("p",null,"\u5206\u79bb\u94fe\u63a5\u6563\u5217\u7b97\u6cd5\u7684\u7f3a\u70b9\u662f\u4f7f\u7528\u4e86\u4e00\u4e9b\u94fe\u8868\uff0c\u7ed9\u65b0\u5355\u5143\u5206\u914d\u5730\u5740\u9700\u8981\u65f6\u95f4\uff0c\u6240\u4ee5\u4f1a\u51cf\u6162\u7b97\u6cd5\u7684\u901f\u5ea6\uff0c\u540c\u65f6\u8be5\u7b97\u6cd5\u8fd8\u8981\u6c42\u7b2c\u4e8c\u79cd\u6570\u636e\u7ed3\u6784\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u53e6\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u5373\u5728\u9047\u5230\u51b2\u7a81\u65f6\uff0c\u5c1d\u8bd5\u9009\u62e9\u53e6\u5916\u4e00\u4e2a\u5355\u5143\uff0c\u76f4\u5230\u627e\u5230\u7a7a\u7684\u5355\u5143\u3002"),(0,a.kt)("h3",{id:"\u5f00\u653e\u5b9a\u5740\u6cd5"},"\u5f00\u653e\u5b9a\u5740\u6cd5"),(0,a.kt)("h4",{id:"\u63a2\u6d4b\u6563\u5217\u8868"},"\u63a2\u6d4b\u6563\u5217\u8868"),(0,a.kt)("p",null,"\u5355\u5143 h",(0,a.kt)("sub",null,"0"),"(x), h",(0,a.kt)("sub",null,"1"),"(x), h",(0,a.kt)("sub",null,"2"),"(x), ...\u4f9d\u6b21\u8fdb\u884c\u8bd5\u9009\uff0c\u5176\u4e2d h",(0,a.kt)("sub",null,"i"),"(x) = ( hash(x) + f(i) ) mod TableSize, \u4e14 f(0) = 0, f \u662f\u51b2\u7a81\u89e3\u51b3\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u7b56\u7565\u9700\u8981\u5c06\u6240\u6709\u6570\u636e\u90fd\u7f6e\u5165\u8868\u5185\uff0c\u6240\u4ee5\u8868\u7684\u88c5\u586b\u56e0\u5b50\u5e94\u4f4e\u4e8e 0.5\uff0c\u8fd9\u6837\u7684\u8868\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u63a2\u6d4b\u6563\u5217\u8868(probing hash tables)"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ebf\u6027\u63a2\u6d4b")),(0,a.kt)("p",null,"\u7ebf\u6027\u63a2\u6d4b\u4e2d\uff0c\u51b2\u7a81\u89e3\u51b3\u51fd\u6570 f \u662f i \u7684\u7ebf\u6027\u51fd\u6570\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"f(i) = i"),"\u3002"),(0,a.kt)("p",null,"\u73b0\u884c\u63a2\u6d4b\u63d2\u5165\u7684\u8fc7\u7a0b\u4e2d\u6709",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u805a\u96c6(primary clustering)"),"\u7684\u73b0\u8c61\uff0c\u5373\u7279\u5b9a\u533a\u5757\u7684\u6570\u636e\u96c6\u4e2d\u5206\u5e03\u3002"),(0,a.kt)("p",null,"\u7ebf\u6027\u63a2\u6d4b\u7684\u9884\u671f\u63a2\u6d4b\u6b21\u6570\u5bf9\u4e8e\u63d2\u5165\u548c\u4e0d\u6210\u529f\u7684\u67e5\u627e\u5927\u7ea6\u4e3a \uff08 1 + 1/(1-\u03bb)",(0,a.kt)("sup",null,"2"),")/2\uff0c\u800c\u5bf9\u4e8e\u6210\u529f\u7684\u67e5\u627e\u5219\u662f(1 + 1/(1-\u03bb))/2\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u805a\u96c6\u4e0d\u662f\u95ee\u9898\uff0c\u5373 \u03bb \u6bd4\u8f83\u5c0f\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u8bc1\u660e\uff0c\u4e00\u6b21\u4e0d\u6210\u529f\u7684\u67e5\u627e\u4e2d\u671f\u671b\u7684\u63a2\u6d4b\u6b21\u6570\uff0c\u7b49\u4e8e\u627e\u5230\u4e00\u4e2a\u7a7a\u5355\u5143\u6240\u671f\u671b\u7684\u63a2\u6d4b\u6b64\u65f6\uff0c\u4ea6\u5373\uff0c\u53ef\u4ee5\u628a",(0,a.kt)("strong",{parentName:"p"},"\u63d2\u5165\u4e00\u4e2a\u65b0\u5143\u7d20"),"\u7684\u7ed3\u679c\u770b\u4f5c",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u4e0d\u6210\u529f\u67e5\u627e"),"\u7684\u7ed3\u679c\u3002\u53ef\u4ee5\u4f7f\u7528\u4e00\u6b21\u4e0d\u6210\u529f\u67e5\u627e\u7684\u5f00\u9500\u6765\u8ba1\u7b97\u4e00\u6b21\u6210\u529f\u67e5\u627e\u7684\u5e73\u5747\u5f00\u9500\u3002"),(0,a.kt)("p",null,"\u6570\u5b66\u8868\u660e\uff0c\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"\u03bb=0.5"),"\uff0c\u63d2\u5165\u7684\u64cd\u4f5c\u5e73\u5747\u53ea\u9700\u8981 2.5 \u6b21\u63a2\u6d4b\uff0c\u800c\u6210\u529f\u7684\u67e5\u627e\u5e73\u5747\u53ea\u8981 1.5 \u6b21\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5e73\u65b9\u63a2\u6d4b")),(0,a.kt)("p",null,"\u5e73\u65b9\u63a2\u6d4b\u4e2d\uff0c\u51b2\u7a81\u89e3\u51b3\u51fd\u6570 f \u662f i \u7684\u4e8c\u6b21\u51fd\u6570\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"f(i) = i^2"),"\u3002"),(0,a.kt)("p",null,"\u5e73\u65b9\u63a2\u6d4b\u80fd\u591f\u6d88\u9664\u7ebf\u6027\u63a2\u6d4b\u4e2d",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u805a\u96c6"),"\u7684\u95ee\u9898\u3002\u5728\u5e73\u65b9\u63a2\u6d4b\u4e2d\uff0c\u5982\u679c\u8868\u6709\u81f3\u5c11\u4e00\u534a\u662f\u7a7a\u7684\u4e14\u8868\u5927\u5c0f\u4e3a\u7d20\u6570\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u603b\u80fd\u591f\u63d2\u5165\u4e00\u4e2a\u65b0\u7684\u5143\u7d20\u3002\u8fd9\u610f\u5473\u7740\uff0c\u54ea\u6015\u8868\u6709\u6bd4\u4e00\u534a\u591a\u4e00\u4e2a\u4f4d\u7f6e\u88ab\u586b\u6ee1\uff0c\u63d2\u5165\u90fd\u6709\u53ef\u80fd\u5931\u8d25\uff08\u53ef\u80fd\u6027\u867d\u5c0f\u4f46\u5b58\u5728\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"#\u5e73\u65b9\u63a2\u6d4b\u7684\u8868\u7684\u7c7b\u63a5\u53e3\u4ee5\u4f8b\u7a0b\uff0c\u5305\u62ec\u5d4c\u5957\u7684HashEntry\u7c7b\n\nclass HashTable\n{\n    public:\n        explicit HashTable( int size = 101 );\n\n        bool contains( const HashedObj & x ) const\n            { return isActive( findPos( x ) ); }\n\n        void makeEmpty( )\n        {\n            currentSize = 0;\n            for ( int i = 0; i < array.size( ) ; i++ )\n            array[i].info = EMPTY;\n        }\n\n        bool insert( const HashedObj & x )\n        {\n            int currentPos = findPos( x );\n            if ( isActive( currentPos ) )\n                return false;\n\n            array[ currentPos ] = HashEntry( x, ACTIVE );\n\n            if ( ++currentSize > array.size( ) / 2 )\n                rehash( );\n\n            return true;\n        }\n\n        bool remove( cosnt HashedObj & x )\n        {\n            int currentPos = findPos( x );\n            if( !isActive( currentPos ) )\n                return false;\n\n            array[ currentPos ].info = DELETED;\n            return true;\n        }\n\n        enum EntryType { ACTIVE, EMPTY, DELETED };\n\n    private:\n        struct HashEntry\n        {\n            HashedObj element;\n            EntryType info;\n\n            HashEntry( const HashedObj & e = HashedObj( ), EntryType i = EMPTY ): element( e ), info( i ) { }\n        };\n\n        vector<HashEntry> array;\n        int currentSize;\n\n        bool isActive( int currentPos ) const\n            { return array[ currentPos ].info == ACTIVE; }\n\n        int findPos( const HashedObj & x ) const\n        {\n            int offset = 1;\n            int currentPos = myhash( x );\n\n            while( array[ currentPost ].info != EMPTY && array[ currentPos ].element != x )\n            {\n                currentPos += offset;\n                offset += 2;\n                if ( currentPos >= array.size( ) )\n                    currentPos -= array.size( );\n            }\n\n            return currentPos;\n        }\n\n        void rehash( );\n        int myhash( const HashedObj & x ) const;\n}\n")),(0,a.kt)("p",null,"\u5e73\u65b9\u63a2\u6d4b\u6392\u9664\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u6b21\u805a\u96c6"),"\uff0c\u4f46\u662f\u6563\u5217\u5230\u540c\u4e00\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u5143\u7d20\u5c06\u63a2\u6d4b\u76f8\u540c\u7684\u5907\u9009\u5355\u5143\uff0c\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u4e8c\u6b21\u805a\u96c6(secondary clustering)"),"\u3002\u6a21\u62df\u7ed3\u679c\u6307\u51fa\uff0c\u5bf9\u6bcf\u6b21\u67e5\u627e\uff0c\u4e00\u822c\u8981\u5f15\u8d77\u53e6\u5916\u7684\u5c11\u4e8e\u4e00\u534a\u7684\u63a2\u6d4b\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u53cc\u6563\u5217"),"\u6765\u6d88\u9664\u8fd9\u4e2a\u7406\u8bba\u4e0a\u7684\u7f3a\u61be\uff0c\u4ee3\u4ef7\u5219\u662f\u8ba1\u7b97\u989d\u5916\u7684\u6563\u5217\u51fd\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53cc\u6563\u5217")),(0,a.kt)("p",null,"\u53cc\u6563\u5217\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"double hashing"),"\uff0c\u4e00\u79cd\u6d41\u884c\u7684\u9009\u62e9\u662f f(i) = i ",(0,a.kt)("em",{parentName:"p"}," hash",(0,a.kt)("sub",null,"2"),"(x)\uff0c\u610f\u5373\u5c06\u7b2c\u4e8c\u4e2a\u6563\u5217\u51fd\u6570\u5e94\u7528\u5230 x \u5e76\u5728\u8ddd\u79bb hash",(0,a.kt)("sub",null,"2"),"(x), 2 ")," hash",(0,a.kt)("sub",null,"2"),"(x), ... \u8fdb\u884c\u7b49\u8ddd\u63a2\u6d4b\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u6bd4\u8f83\u597d\u7684\u4e8c\u6b21\u6563\u5217\u51fd\u6570\u662f hash",(0,a.kt)("sub",null,"2"),"(x) = R - ( x mod R )\uff0cR \u4e3a\u5c0f\u4e8e TableSize \u7684\u7d20\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"summary on \u63a2\u6d4b\u6563\u5217\u8868")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8868\u7684\u5927\u5c0f\u4e3a\u7d20\u6570\u662f\u91cd\u8981\u7684\uff0c\u5982\u679c\u4e0d\u662f\u7d20\u6570\uff0c\u5907\u9009\u5355\u5143\u53ef\u80fd\u88ab\u63d0\u524d\u7528\u5b8c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53cc\u6563\u5217\u80fd\u591f\u6b63\u786e\u5b9e\u73b0\u7684\u65f6\u5019\uff0c\u9884\u6d4b\u7684\u63a2\u6d4b\u6b21\u6570\u51e0\u4e4e\u548c\u968f\u673a\u51b2\u7a81\u89e3\u51b3\u65b9\u6cd5\u7684\u60c5\u5f62\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5e73\u65b9\u63a2\u6d4b\u4e0d\u9700\u8981\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u6563\u5217\u51fd\u6570\uff0c\u5728\u5b9e\u8df5\u4e2d\u53ef\u4ee5\u66f4\u5feb\u66f4\u7b80\u5355\u3002\u5f53\u952e\u4e3a\u5b57\u7b26\u4e32\u65f6\uff0c\u5176\u6563\u5217\u51fd\u6570\u7684\u8ba1\u7b97\u66f4\u52a0\u8017\u65f6\u3002")),(0,a.kt)("h3",{id:"rehash"},"Rehash"),(0,a.kt)("p",null,"\u5982\u679c\u8868\u7684\u5143\u7d20\u586b\u7684\u592a\u6ee1\uff0c\u64cd\u4f5c\u7684\u8fd0\u884c\u65f6\u95f4\u5c06\u5f00\u59cb\u53d8\u957f\uff0c\u4e14\u63d2\u5165\u64cd\u4f5c\u53ef\u80fd\u5931\u8d25\uff01\u4e00\u4e2a\u89e3\u51b3\u529e\u6cd5\u5c31\u662f\u5efa\u7acb\u53e6\u5916\u4e00\u4e2a\u5927\u7ea6\u4e24\u500d\u5927\u7684\u8868\uff08\u4f7f\u7528\u65b0\u7684\u6563\u5217\u51fd\u6570\uff09\uff0c\u626b\u63cf\u6574\u4e2a\u539f\u59cb\u6563\u5217\u8868\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u6709\u6548\u7684\u5143\u7d20\u7684\u65b0\u6563\u5217\u503c\uff0c\u8fdb\u884c\u63d2\u5165\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u64cd\u4f5c\u79f0\u4e3a\u518d\u6563\u5217\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"rehashing"),"\uff0c\u8fd9\u79cd\u64cd\u4f5c\u662f\u975e\u5e38\u6602\u8d35\u7684\uff0c\u8fd0\u884c\u65f6\u95f4\u4e3a O(N)\uff0c\u4e0d\u8fc7\u56e0\u4e3a\u4e0d\u662f\u7ecf\u5e38\u53d1\u751f\uff0c\u6240\u4ee5\u5b9e\u9645\u6548\u679c\u8fd8\u597d\uff0c\u7279\u522b\u7684\uff0c\u5728 rehash \u540e\u7684\u8868\u4e2d\u5df2\u7ecf\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"N/2"),"\u6b21\u63d2\u5165\uff0c\u6dfb\u52a0\u5230\u6bcf\u4e2a\u63d2\u5165\u4e0a\u7684\u82b1\u8d39\u57fa\u672c\u4e0a\u662f\u4e00\u4e2a\u5e38\u6570\u5f00\u9500\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u79cd\u6570\u636e\u7ed3\u6784\u662f\u7a0b\u5e8f\u7684\u4e00\u90e8\u5206\uff0c\u90a3\u4e48\u5176\u5f71\u89c6\u4e0d\u660e\u663e\u7684\uff0c\u5982\u679c rehash \u4f5c\u4e3a\u4ea4\u4e92\u7cfb\u7edf\u7684\u4e00\u90e8\u5206\u8fd0\u884c\uff0c\u90a3\u4e48\u5176\u63d2\u5165\u5f15\u8d77\u7684 rehash \u4f1a\u8ba9\u4e25\u91cd\u51cf\u6162\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"rehash \u53ef\u4ee5\u501f\u52a9\u5e73\u65b9\u63a2\u6d4b\u4ee5\u591a\u79cd\u7b56\u7565\u5b9e\u73b0\u3002\u53ef\u4ee5\u9884\u89c1\u7684\u662f\u88c5\u586b\u56e0\u5b50\u589e\u52a0\u4f1a\u5bfc\u81f4\u8868\u7684\u6027\u80fd\u4e0b\u964d\uff0c\u56e0\u6b64\u4ee5\u597d\u7684\u622a\u6b62\u70b9\u6765\u5b9e\u73b0\u7b2c\u4e09\u79cd\u7b56\u7565\uff0c\u6536\u76ca\u76f8\u5bf9\u6700\u5927\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8868\u6ee1\u5230\u4e00\u534a\u540e\uff0crehash"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u8868\u51fa\u73b0\u8fc7\u63d2\u5165\u5931\u8d25\u65f6\uff0crehash"),(0,a.kt)("li",{parentName:"ul"},"\u9014\u4e2d\u7b56\u7565\uff1a \u5982\u679c\u8868\u5230\u8fbe\u67d0\u4e00\u4e2a\u88c5\u586b\u56e0\u5b50\u65f6\uff0crehash")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C#"},"# Rehashing for quadratic probing hash table\n\nvoid rehash ( )\n{\n    vector<HashEntry> oldArray = array;\n\n    array.resize( nextPrim( 2 * oldArray.size( ) ) );\n    for ( int j = 0; j < array.size( ) ; j++ )\n        array[ j ].info = EMPTY;\n\n    currentSize = 0\n    for ( int i = 0; i < oldArray.size( ); i++ )\n        if ( oldArray[ i ].info == ACTIVE )\n            insert( oldArray[ i ].element );\n}\n\n# Rehashing for separate chaining hash table\n\nvoid rehash ( )\n{\n    vector<list<HasheObj> > oldLists = theLists;\n    theLists.resize( nextPrime( 2 * theLists.size( ) ) );\n    for ( int j = 0; j < theLists.size( ); j++ )\n        theLists[ j ].clear( );\n\n    currentSize = 0;\n    for ( int i = 0; i < oldLists.size( ); i++ )\n    {\n        list<HashedObj>::iterator itr = oldLists[ i ].begin( );\n        while( itr != oldLists[ i ].end( ) )\n            insert( *itr++ );\n    }\n}\n")))}p.isMDXComponent=!0}}]);