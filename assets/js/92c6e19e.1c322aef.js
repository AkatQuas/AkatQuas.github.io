"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1042],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"07 S-Expressions",tags:["lisp","interpreter"]},o=void 0,l={unversionedId:"lisp-interpreter-in-c/s-expressions",id:"lisp-interpreter-in-c/s-expressions",title:"07 S-Expressions",description:"document",source:"@site/docs/lisp-interpreter-in-c/07-s-expressions.md",sourceDirName:"lisp-interpreter-in-c",slug:"/lisp-interpreter-in-c/s-expressions",permalink:"/docs/lisp-interpreter-in-c/s-expressions",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:7,frontMatter:{title:"07 S-Expressions",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"06 Error Handling",permalink:"/docs/lisp-interpreter-in-c/error-handling"},next:{title:"08 Q-Expressions",permalink:"/docs/lisp-interpreter-in-c/q-expressions"}},s={},p=[{value:"Lists and Lisps",id:"lists-and-lisps",level:2},{value:"Pointers",id:"pointers",level:2},{value:"The Stack &amp; The Heap",id:"the-stack--the-heap",level:2},{value:"The Stack",id:"the-stack",level:3},{value:"The Heap",id:"the-heap",level:3},{value:"Parsing Expressions",id:"parsing-expressions",level:2},{value:"Expression Structure",id:"expression-structure",level:2},{value:"Constructors &amp;&amp; Destructors",id:"constructors--destructors",level:2},{value:"Reading Expressions",id:"reading-expressions",level:2},{value:"Printing Expressions",id:"printing-expressions",level:2},{value:"Evaluating Expressions",id:"evaluating-expressions",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/chapter9_s_expressions"},"document")),(0,r.kt)("p",null,"codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(59698).Z},"s-expressions"))),(0,r.kt)("h2",{id:"lists-and-lisps"},"Lists and Lisps"),(0,r.kt)("p",null,"Lisps are famous for having little distinction between data and code. They use the same structures to represent both. This allows them to do many powerful things which other languages cannot do. If we want this power for our programming language we're going to have to separate out the process of ",(0,r.kt)("strong",{parentName:"p"},"reading")," input, and ",(0,r.kt)("strong",{parentName:"p"},"evaluating")," the input we have stored."),(0,r.kt)("p",null,"To store the program we will need to create an internal list structure that is built up recursively of numbers, symbols, and other lists. In Lisp, this structure is commonly called an S-Expression standing for ",(0,r.kt)("strong",{parentName:"p"},"Symbolic Expression"),". We will extend our ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," structure to be able to represent it. The evaluation behaviour of S-Expressions is the behaviour typical of Lisps, that we are used to so far. To evaluate an S-Expression we look at the first item in the list, and take this to be the operator. We then look at all the other items in the list, and take these as operands to get the result."),(0,r.kt)("p",null,"By introducing S-Expressions we'll finally be entering the world of Lisp."),(0,r.kt)("h2",{id:"pointers"},"Pointers"),(0,r.kt)("p",null,"In C no concept of lists can be explored without dealing properly with pointers. Pointers are a famously misunderstood aspect of C. They are difficult to teach because while being conceptually very simple, they come with a lot of new terminology, and often no clear use-case. This makes them appear far more monstrous than they are. Luckily for us, we have a couple of ideal use-cases, both of which are extremely typical in C, and will likely end up being how you use pointers 90% of the time."),(0,r.kt)("p",null,"The reason we need pointers in C is because of how function calling works. When you call a function in C the arguments are always passed ",(0,r.kt)("strong",{parentName:"p"},"by value"),". This means ",(0,r.kt)("strong",{parentName:"p"},"a copy")," of them is passed to the function you call. This is true for ",(0,r.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"long"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"char"),", and user-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),". Most of the time this is great but occasionally it can cause issues."),(0,r.kt)("p",null,"A common problem occurs when we have a large struct containing many other sub structs we wish to pass around. Every time we call a function we must create another copy of it. Suddenly the amount of data that needs to be copied around just to call a function can become huge!"),(0,r.kt)("p",null,"A second problem is that when we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct"),", it is always a fixed size. It has a limited number of fields, and each field is itself a fixed size. If F want to call a function with just ",(0,r.kt)("strong",{parentName:"p"},"a list of things"),", where the number of ",(0,r.kt)("strong",{parentName:"p"},"things")," varies from call to call, clearly I can't use a ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," to do this."),(0,r.kt)("p",null,"To get around these issues the developers of C came up with a clever idea. They imagined computer memory as a single huge list of bytes. In this list each byte can be given a global index, or position. A bit like a house number. The first byte is numbered ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the second is ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", etc."),(0,r.kt)("p",null,"In this case, all the data in the computer, including the structs and variables used in currently running program, start at some index in this huge list. If, rather than copying the data itself to a function, we instead copy a number representing the ",(0,r.kt)("strong",{parentName:"p"},"index")," at where this data starts, the function being called can look up any amount data it wants."),(0,r.kt)("p",null,"By using ",(0,r.kt)("strong",{parentName:"p"},"address")," instead of the actual data, we can allow a function to access and modify some location in memory without having to copy any data. Functions can also use pointers to do other stuff, like output data to some address given as input."),(0,r.kt)("p",null,"Because the total size of computer memory is fixed, the number of bytes needed to represent an address is always the same. But if we keep track of it, the number of bytes the address points to can grow and shrink. This means we can create a variable sized data-structure and still ",(0,r.kt)("strong",{parentName:"p"},"pass")," it to a function, which can inspect and modify it."),(0,r.kt)("p",null,"So a pointer is just a number. A number representing the starting index of some data in memory. The type of the pointer hints to us, and the compiler, what type of data might be accessible at this location."),(0,r.kt)("p",null,"We can declare pointer types by suffixing existing ones with the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," character. We've seen some examples of this already with ",(0,r.kt)("inlineCode",{parentName:"p"},"mpc_parser_t*"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mpc_ast_t*"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"char*"),"."),(0,r.kt)("p",null,"To create a pointer to some data, we need to get its index, or ",(0,r.kt)("strong",{parentName:"p"},"address"),". To get the address of some data we use the ",(0,r.kt)("strong",{parentName:"p"},"address of operator")," ",(0,r.kt)("inlineCode",{parentName:"p"},"&"),"."),(0,r.kt)("p",null,"Finally, to get the data at an address, called ",(0,r.kt)("strong",{parentName:"p"},"dereferencing"),", we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," operator on the left-hand side of a variable. To get the data at the field of a pointer to a struct we use the arrow ",(0,r.kt)("inlineCode",{parentName:"p"},"->"),"."),(0,r.kt)("h2",{id:"the-stack--the-heap"},"The Stack & The Heap"),(0,r.kt)("p",null,"The memory can be visualised of as one long list of bytes. Actually it is better to imagine it split into two sections. These sections are called ",(0,r.kt)("strong",{parentName:"p"},"The Stack")," and ",(0,r.kt)("strong",{parentName:"p"},"The Heap"),"."),(0,r.kt)("p",null,"In essence, they are just two sections of memory used for two different tasks."),(0,r.kt)("h3",{id:"the-stack"},"The Stack"),(0,r.kt)("p",null,"The Stack is the memory where your program lives. It is where all of your temporary variables and data structures exist as you manipulate and edit them. Every time you call a function a new area of the stack is put aside for it to use. Into this area are put local variables, copies of any arguments passed to the function, as well as some bookkeeping data such as whom the caller was, and what to do when finished. When the function is done the area is used is unallocated, ready for use again by someone else."),(0,r.kt)("h3",{id:"the-heap"},"The Heap"),(0,r.kt)("p",null,"The Heap is a section of memory put aside for storage of objects with a longer lifespan. Memory in this area has to be manually allocated and deallocated. To allocate new memory the ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc")," function is used. This function takes as input the number of bytes required, and returns a pointer to a new black of memory with that many bytes set aside."),(0,r.kt)("p",null,"When done with the memory at that location it must be released again. To do this the pointer received from ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc")," should be passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"free")," function. Using the Heap is trickier than the Stack because it requires the programmer to remember to call ",(0,r.kt)("inlineCode",{parentName:"p"},"free")," and to call it correctly. If not, the program may continuously allocate more and more memory. This is called a ",(0,r.kt)("strong",{parentName:"p"},"memory leak"),". An easy rule to avoid this is to ensure for each ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc")," there is a corresponding (and only one corresponding) ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),"."),(0,r.kt)("h2",{id:"parsing-expressions"},"Parsing Expressions"),(0,r.kt)("p",null,"We need to update our parser to make it suitable for S-Expressions. The syntax for S-Expressions is simple. It is just a number of other Expressions between parentheses, where an Expression can be a Number, Operator, or other S-Expression. We can modify our existing parse rules to reflect this. We also are going to rename our ",(0,r.kt)("inlineCode",{parentName:"p"},"operator")," rule to ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),". This is in anticipation of adding more operators, variables and functions later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"mpc_parser_t* Number = mpc_new(\"number\");\nmpc_parser_t* Symbol = mpc_new(\"symbor\");\nmpc_parser_t* Sexpr = mpc_new(\"sexpr\");\nmpc_parser_t* Expr = mpc_new(\"expr\");\nmpc_parser_t* Lispy = mpc_new(\"lispy\");\n\nmpca_lang(MPCA_LANG_DEFAULT,\n    \"\\\n    number : /-?[0-9]+/;\\\n    symbol :  '+' | '-' | '*' | '/' ;\\\n    sexpr : '(' <expr>* ')' ;\\\n    expr : <number> | <symbol> | <sexpr> ; \\\n    lispy: /^/ <expr>* /$/; \\\n    \",\n    Number, Symbol, Sexpr, Expr, Lispy);\n\n...\n\nmpc_cleanup(5, Number, Symbol, Sexpr, Expr, Lispy);\n")),(0,r.kt)("h2",{id:"expression-structure"},"Expression Structure"),(0,r.kt)("p",null,"We need a way to store S-Expressions as ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),". This means we'll also need to store ",(0,r.kt)("strong",{parentName:"p"},"Symbols")," and ",(0,r.kt)("strong",{parentName:"p"},"Numbers"),". We're going to add two new ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," types to the ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),". The first is ",(0,r.kt)("inlineCode",{parentName:"p"},"LVAL_SYM"),", which we're going to use represent operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"+"),". The second new type is ",(0,r.kt)("inlineCode",{parentName:"p"},"LVAL_SEXPR")," which is going to be used to represent S-Expressions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"enum { LVAL_ERR, LVAL_NUM, LVAL_SYM, LVAL_SEXPR };\n")),(0,r.kt)("p",null,"S-Expressions are variable length ",(0,r.kt)("strong",{parentName:"p"},"lists")," of values. We are going to create a pointer field ",(0,r.kt)("inlineCode",{parentName:"p"},"cell")," which points to a location where we store a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*"),". More specifically pointers to the other individual ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),". Our field should therefore be a double pointer type ",(0,r.kt)("inlineCode",{parentName:"p"},"lval**"),". A pointer to ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," pointers. We will also need to keep track of how many ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," are in this list, so we add an extra field ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," to record this."),(0,r.kt)("p",null,"To represent symbols we're going to use a string. We're also going to change the representation of errors to a string. This means we can store a unique error message rather than just an error code. This will make our error reporting better and more flexible, and we can get rid of the original error ",(0,r.kt)("inlineCode",{parentName:"p"},"enum"),". The updated ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," struct looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct lval {\n    int type;\n    long num;\n    char* err;\n    char* sym;\n    int count;\n    struct lval** cell;\n} lval;\n")),(0,r.kt)("p",null,"The new definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," needs to contain a reference to itself. This means we have to slightly change tow it is defined. Before we open the curly brackets we can put the name of the struct, and then refer to this inside the definition using ",(0,r.kt)("inlineCode",{parentName:"p"},"struct lval"),". Even though a struct can refer to its own type, it must only contain pointers to its own type, not its own type directly. Otherwise the size of the struct would refer to itself, and grow infinite in size when you tried to calculate it!"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Are there ever pointers to pointers to pointers?"),(0,r.kt)("p",{parentName:"blockquote"},"There is an old programming joke which says you can rate C programmers by how many stars are on their pointers."),(0,r.kt)("p",{parentName:"blockquote"},"Beginner's programs might only use ",(0,r.kt)("inlineCode",{parentName:"p"},"char*")," or the odd ",(0,r.kt)("inlineCode",{parentName:"p"},"int*"),", so they were called ",(0,r.kt)("strong",{parentName:"p"},"one-star programmers"),". Most intermediate programs contain double pointer types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"lval**"),". These programmers are therefore called ",(0,r.kt)("strong",{parentName:"p"},"two-star programmers"),". To spot a triple pointer is something special. You would be viewing the work of someone grand and terrible, writing code not meant to be read with mortal eyes. As such being called ",(0,r.kt)("strong",{parentName:"p"},"three-star programmer")," is rarely a compliment.")),(0,r.kt)("h2",{id:"constructors--destructors"},"Constructors && Destructors"),(0,r.kt)("p",null,"We can change our ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," construction functions to return pointers to an ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),", rather than one directly. This will make keeping track of ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," variables easier. For this we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"sizeof")," function to allocate enough space for the ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," struct, and then to fill in the fields with the relevant information using the arrow operator ",(0,r.kt)("inlineCode",{parentName:"p"},"->"),"."),(0,r.kt)("p",null,"When we construct ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," its fields may contain pointers to other things that have been allocated on the heap. This means we need to be careful. Whenever we are finished with an ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," we also need to delete the things in points to on the heap. We'll have to make a rule for ourselves. Whenever we free the memory allocated for an ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),", we also free all the things it points to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"/* Construct a pointer to a new Number lval */\nlval* lval_num(long x) {\n    lval* v = malloc(sizeof(lval));\n    v->type = LVAL_NUM;\n    v->num = x;\n    return v;\n}\n\n/* Construct a pointer to a new Error lval */\nlval* lval_err(char* m) {\n    lval* v = malloc(sizeof(lval));\n    v->type = LVAL_ERR;\n    v->err = malloc(strlen(m)+1);\n    strcpy(v->err, m);\n    return v;\n}\n\n/* Construct a pointer to a new Symbol lval */\nlval* lval_sym(char *s) {\n    lval* v = malloc(sizeof(lval));\n    v->type = LVAL_SYM;\n    v->sym = malloc(strlen(s)+1);\n    strcpy(v->sym, s);\n    return v;\n}\n\n/* A pointer to a new empty Sexpr lval */\nlval* lval_sexpr(void) {\n    lval* v = malloc(sizeof(lval));\n    v->type = LVAL_SEXPR;\n    v->count = 0;\n    v->cell = NULL;\n    return v;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," is a special constant that points to memory location ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". In many places it is used as a convention to signify some non-value or empty data. Above we use it to specify that we have a data pointer, but that is doesn't point to any number of data items."),(0,r.kt)("p",{parentName:"blockquote"},"What about the ",(0,r.kt)("inlineCode",{parentName:"p"},"strlen(s)+1"),"? In C strings are ",(0,r.kt)("strong",{parentName:"p"},"null terminated"),". This means that the final character of them is always the zero character ",(0,r.kt)("inlineCode",{parentName:"p"},"\\0"),". This is a convention in C to signal the end of a string. It is important that all strings are stored this way otherwise programs will break in nasty ways. The ",(0,r.kt)("inlineCode",{parentName:"p"},"strlen")," function only returns the number of bytes in a string ",(0,r.kt)("inlineCode",{parentName:"p"},"excluding")," the null terminator. This is why we need to add one, to ensure there is enough allocated space for it all!")),(0,r.kt)("p",null,"We now need a special function to delete ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*"),". This should call ",(0,r.kt)("inlineCode",{parentName:"p"},"free")," on the pointer itself to release the memory acquired from ",(0,r.kt)("inlineCode",{parentName:"p"},"malloc"),", but more importantly it should inspect the type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"lval"),", and release any memory pointed to by its ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_del")," we can ensure we will get no memory leaks."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void lval_del(lval* v) {\n    switch (v->type) {\n        /* Do nothing special for number type */\n        case LVAL_NUM: break;\n\n        /* For Err or Sym free the string data */\n        case LVAL_ERR: free(v->err); break;\n        case LVAL_SYM: free(v->sym); break;\n\n        /* If Sexpr then delete all elements inside */\n        case LVAL_SEXPR:\n            for (int i = 0; i < v->count; i++) {\n                lval_del(v->cell[i]);\n            }\n            free(v->cell); break;\n    }\n    free(v);\n}\n")),(0,r.kt)("h2",{id:"reading-expressions"},"Reading Expressions"),(0,r.kt)("p",null,"First we are going to ",(0,r.kt)("strong",{parentName:"p"},"read")," in the program and construct an ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," that represents it all. Then we are going to ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate")," this ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," to get the result of our program. This first stage should convert the ",(0,r.kt)("strong",{parentName:"p"},"abstract syntax tree")," into an S-Expression, and the second stage should evaluate this S-Expression using our normal Lisp rules."),(0,r.kt)("p",null,"To complete the first stage we can recursively look at each node of the tree, and construct different ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," types depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contents")," fields of the node."),(0,r.kt)("p",null,"If the given node is tagged as a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),", then we use our constructors to return an ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," directly for those types. If the given node is the ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),", or an ",(0,r.kt)("inlineCode",{parentName:"p"},"expr"),", then we create an empty S-Expression ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," and slowly add each valid sub-expression contained in the tree."),(0,r.kt)("p",null,"To add an element to an S-Expression we can create a function ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_add"),". This function increases the count of the Expression list by one, and then uses ",(0,r.kt)("inlineCode",{parentName:"p"},"realloc")," to reallocate the amount of space required by ",(0,r.kt)("inlineCode",{parentName:"p"},"v->cell"),". This new space can be used to store the extra ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," required. Using this new space it sets the final value of the list with ",(0,r.kt)("inlineCode",{parentName:"p"},"v->cell[v->count-1]")," to the value ",(0,r.kt)("inlineCode",{parentName:"p"},"lval* x")," passed in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'lval* lval_read_num(mpc_ast_t* t) {\n    errno = 0;\n    long x = strtol(t->contents, NULL, 10);\n    return errno != ERANGE ? lval_num(x) : lval_err("Invalid number");\n}\n\nlval* lval_read(mpc_ast_t* t) {\n    /* If symbol or number return conversion to that type */\n    if (strstr(t->tag, "number")) { return lval_read_num(t); }\n    if (strstr(t->tag, "symbol")) { return lval_sym(t->contents); }\n\n    /* If root (>) or sexpr then create empty list */\n    lval* x = NULL;\n    if (strcmp(t->tag, ">") == 0) { x = lval_sexpr(); }\n    if (strstr(t->tag, "sexpr")) { x = lval_sexpr(); }\n\n    /* Fill this list with any valid expression contained within */\n    for (int i = 0; i < t->children_num; i++ ) {\n        if (strcmp(t->children[i]->contents, "(") == 0) { continue; }\n        if (strcmp(t->children[i]->contents, ")") == 0) { continue; }\n        if (strcmp(t->children[i]->tag, "regex") == 0) { continue; }\n\n        x = lval_add(x, lval_read(t->children[i]));\n    }\n\n    return x;\n}\n\nlval* lval_add(lval* v, lval* x) {\n    v->count++;\n    v->cell = realloc(v->cell, sizeof(lval*) * v->count);\n    v->cell[v->count - 1] = x;\n    return v;\n}\n')),(0,r.kt)("h2",{id:"printing-expressions"},"Printing Expressions"),(0,r.kt)("p",null,"We are now so close to trying out all ouf our new changes. We need to modify our print function to print out S-Expressions types. Using this we can double check the ",(0,r.kt)("strong",{parentName:"p"},"reading")," phase is working correctly by printing out the S-Expressions we read in and verifying they match those we input."),(0,r.kt)("p",null,"To print out S-Expressions we can create another function that loops over all the sub-expressions of an expressions and prints these individually separated by spaces, in the same way they are input."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void lval_expr_print(lval* v, char open, char close) {\n    putchar(open);\n    for (int i = 0; i < v->count; i++) {\n        /* Print value contained within */\n        lval_print(v->cell[i]);\n\n        /* Don't print trailing space if last element */\n        if (i != (v->count - 1 ) {\n            putchar(' ');\n        }\n    }\n    putchar(close);\n}\n\nvoid lval_print(lval* v) {\n    switch (v->type) {\n        case LVAL_NUM: printf(\"%li\", v->num); break;\n        case LVAL_ERR: printf(\"ERROR: %s\", v->err); break;\n        case LVAL_SYM: printf(\"%s\", v->sym); break;\n        case LVAL_SEXPR: lval_expr_print(v, '(', ')'); break;\n    }\n}\n\nvoid lval_println(lval* v) { lval_print(v); putchar('\\n'); }\n")),(0,r.kt)("p",null,"In the main loop, we can remove the evaluation for now, and instead try reading in the result and printing out what we have read."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"lval* x = lval_read(r.output);\nlval_println(x);\nlval_del(x);\n")),(0,r.kt)("h2",{id:"evaluating-expressions"},"Evaluating Expressions"),(0,r.kt)("p",null,"The behaviour of the evaluation function is largely the same as before. we need to adapt it to deal with ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," and our more relaxed definition of what constitutes an expression. We can think of our evaluation function as a kind of transformer. It takes in some ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," and transforms it in some way to some new ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*"),". In some cases it can just return exactly the same thing. In other cases it may modify the input ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," and return it. In many cases, it will delete the input, and return something completely different. If we are going to return something new we must always remember to delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," we get as input."),(0,r.kt)("p",null,"For S-Expressions we first evaluate all teh children of the S-Expression. If any of these children are errors we return the first error we encounter using a function we'll define later called ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_take"),"."),(0,r.kt)("p",null,"If the S-Expression has no children we just return it directly. This corresponds to the empty expressions, denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"()"),". We also check for single expressions. These are expressions with only one child such as ",(0,r.kt)("inlineCode",{parentName:"p"},"(5)"),". In this case we return the single expression contained within the parenthesis."),(0,r.kt)("p",null,"If neither of these are the case we know have a valid expression with more than one child. In this case we separate the first element of the expression using a function we'll define later called ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_pop"),". we then check this is a ",(0,r.kt)("strong",{parentName:"p"},"symbol")," and not anything else. If it is a symbol we check what symbol it is, and pass it, and the arguments, to a function ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin_op")," which does our calculations. If the first element is not a symbol we delete it, and the values passed into the evaluation function, returning an error."),(0,r.kt)("p",null,"To evaluate all other types we just return them directly back."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'lval* lval_eval_sexpr(lval* v) {\n    /* Evaluate Children */\n    for (int i = 0; i < v->count; i++ ) {\n        v->cell[i] = lval_eval(v->cell[i]);\n    }\n\n    /* Error Checking */\n    for (int i = 0; i < v-> count; i++ ) {\n        if (v->cell[i]->type == LVAL_ERR) { return lval_take(v, i); }\n    }\n\n    /* Empty Expression */\n    if (v->count == 0) { return v; }\n\n    /* Single Expression */\n    if (v->count == 1) { return lval_take(v, 0); }\n\n    /* Ensure First Element is Symbol */\n    lval* f = lval_pop(v, 0);\n    if (f->type != LVAL_SYM) {\n        lval_del(f);\n        lval_del(v);\n        return lval_err("S-expression does not start with symbol!");\n    }\n\n    /* Call builtin with operator */\n    lval* result = builtin_op(v, f->sym);\n    lval_del(f);\n    return result;\n}\n\nlval* lval_eval(lval* v) {\n    /* Evaluate Sexpressions */\n    if (v->type = LVAL_SEXPR) { return lval_eval_sexpr(v); }\n\n    /* All other lval types remain the same */\n    return v;\n}\n')),(0,r.kt)("p",null,"There are two functions we've used and not defined in the above code. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_pop")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_take"),". These are general purpose functions for manipulating S-Expression ",(0,r.kt)("inlineCode",{parentName:"p"},"lval")," types which we'll make use of here and in the future."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_pop")," function extracts a single element from an S-Expression at index ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," and shifts the rest of the list backward so that it no longer contains that ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*"),". It then returns the extracted value. Notice that it doesn't delete the input list. It is like taking an element from a list and popping it out, leaving what remains. This means both the element popped and the old list need to be deleted at some point with ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_del"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_take")," function is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_pop")," but it deletes the list it has extracted the element from. This is like taking an element from the list and deleting the rest. It is a slight variation on lval_pop but it makes our code easier to read in some places. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_pop"),", only the expression you take from the list needs to be deleted by ",(0,r.kt)("inlineCode",{parentName:"p"},"lval_del"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'lval* lval_pop(lval* v, int i) {\n    /* Find the item at "i" */\n    lval* x = v->cell[i];\n\n    /* Shift memory after the item at "i" over the top */\n    memmove(&v->cell[i], &v->cell[i+1], sizeof(lval*) * (v->count-i-1);\n\n    /* Decrease the count of items in the list */\n    v->count--;\n\n    /* Reallocate the memory used */\n    v->cell = realloc(v->cell, sizeof(lval*) * v->count);\n\n    return x;\n}\n\nlval* lval_take(lval* v, int i) {\n    lval* x = lval_pop(v, i);\n    lval_del(v);\n    return x;\n}\n')),(0,r.kt)("p",null,"We also need to define the evaluation function ",(0,r.kt)("inlineCode",{parentName:"p"},"builtin_op"),". This is like the ",(0,r.kt)("inlineCode",{parentName:"p"},"eval_op")," function used in our previous chapter but modified to take a single ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," representing a list of all the arguments to operate on. It needs to do some more rigorous error checking. If any of the inputs are a non-number ",(0,r.kt)("inlineCode",{parentName:"p"},"lval*")," we need to return an error."),(0,r.kt)("p",null,"First it checks that all the arguments input are numbers. It then pops the first argument to start. If there are no more sub-expressions and the operator is subtraction it performs unary negation on this first number. This makes expressions such as ",(0,r.kt)("inlineCode",{parentName:"p"},"(- 5)")," evaluate correctly."),(0,r.kt)("p",null,"If there are more arguments it constantly pops the next one from the list and performs arithmetic depending on which operator we're meant to be using. If a zero is encountered on division it deletes the temporary ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", and the argument list ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", and returns an error."),(0,r.kt)("p",null,"If there have been no errors the input arguments are deleted and then new expression returned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'lval* builtin_op(lval* a, char* op) {\n    /* Ensure all arguments are numbers */\n    for (int i = 0; i < a->count; i++ ) {\n        if (a->cell[i]->type != LVAL_NUM) {\n            lval_del(a);\n            return lval_err("Cannot operator on non-number!");\n        }\n    }\n\n    /* Pop the first element */\n    lval* x = lval_pop(a, 0);\n\n    /* If no arguments and sub then perform unary negation */\n    if (strcmp(op,  "-") == 0 && a->count == 0 ) {\n        x->num = -x->num;\n    }\n\n    /* While there are still elements remaining */\n    while (a->count > 0) {\n        /* Pop the next element */\n        lval* y = lval_pop(a, 0);\n        if (strcmp(op, "+") == 0) { x->num += y->num; }\n        if (strcmp(op, "-") == 0) { x->num -= y->num; }\n        if (strcmp(op, "*") == 0) { x->num *= y->num; }\n        if (strcmp(op, "/") == 0) {\n            if (y->num == 0) {\n            lval_del(x); lval_del(y);\n            x = lval_err("Division By Zero!"); break;\n            }\n            x->num /= y->num;\n        }\n\n        lval_del(y);\n    }\n    lval_del(a);\n    return x;\n}\n')),(0,r.kt)("p",null,"This completes our evaluation functions. We just need to change ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," again so it passes the input through this evaluation before printing it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"lval* x = lval_eval(lval_read(r.output));\nlval_println(x);\nlval_del(x);\n")))}c.isMDXComponent=!0},59698:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/s-expressions-26238ab859e6ddbc284d4dfa71432397.c"}}]);