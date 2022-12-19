"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"05 Evaluation",tags:["lisp","interpreter"]},o=void 0,s={unversionedId:"lisp-interpreter-in-c/evaluation",id:"lisp-interpreter-in-c/evaluation",title:"05 Evaluation",description:"document",source:"@site/docs/lisp-interpreter-in-c/05-evaluation.md",sourceDirName:"lisp-interpreter-in-c",slug:"/lisp-interpreter-in-c/evaluation",permalink:"/docs/lisp-interpreter-in-c/evaluation",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:5,frontMatter:{title:"05 Evaluation",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"04 Parsing",permalink:"/docs/lisp-interpreter-in-c/parsing"},next:{title:"06 Error Handling",permalink:"/docs/lisp-interpreter-in-c/error-handling"}},l={},p=[{value:"Tree",id:"tree",level:2},{value:"Recursion",id:"recursion",level:2},{value:"Evaluation",id:"evaluation",level:2},{value:"Printing",id:"printing",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/chapter7_evaluation"},"document")),(0,a.kt)("p",null,"codes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:n(95932).Z},"parsing evaluation.md"))),(0,a.kt)("h2",{id:"tree"},"Tree"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"mpc"),", we can read input, and we have it structured internally, but we are still unable to evaluate it. We are going to add some code to evaluate its structure and actually performs the computations encoded within."),(0,a.kt)("p",null,"This internal structure is what we saw printed out by the programme in the previous chapter. It is called an ",(0,a.kt)("strong",{parentName:"p"},"Abstract Syntax Tree"),", and it represents the structure of the program based on the input entered by the user. At the leaves of this tree are numbers and operators - the actual data to be processed. At the branches are the rules used to produce this part of the tree - the information on how to traverse and evaluate it."),(0,a.kt)("p",null,"Before working out exactly how we are going to do this traversal, let's see exactly how this structure is defined internally. If we peek inside ",(0,a.kt)("inlineCode",{parentName:"p"},"mpc.h")," we can have a look at the definition of ",(0,a.kt)("inlineCode",{parentName:"p"},"mpc_ast_t"),", which is the data structure we got from the parse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct mpc_ast_t {\n    char* tag;\n    char* contents;\n    mpc_state_t state;\n    int children_num;\n    struct mpc_ast_t** children;\n} mpc_ast_t;\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"struct")," has a number of fields we can access. Let's take a look at them one by one."),(0,a.kt)("p",null,"The first field is ",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),". When we printed out the tree this was the information that preceded the contents of the node. It was a string containing a list of all the rules used to parse that particular item. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"expr|number|regex"),"."),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," field is going to be important as it lets us see what parse rules have been used to create the node."),(0,a.kt)("p",null,"The second field is ",(0,a.kt)("inlineCode",{parentName:"p"},"contents"),". This will contain the actual contents of the node such as ",(0,a.kt)("inlineCode",{parentName:"p"},"'*'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'('")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"'5'"),". You'll notice for branches this is empty, but for leaves we can use it to find the operator or number to use."),(0,a.kt)("p",null,"The next field is ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),". This contains information about what state the parser was in when it found this node, such as the line and column number. We won't make use of this in our program."),(0,a.kt)("p",null,"Finally, we see two fields that are going to help us traverse the tree. These are ",(0,a.kt)("inlineCode",{parentName:"p"},"children_num")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"children"),". The first field tells us how many children a node has, and the second is an array of these children."),(0,a.kt)("p",null,"The type of the ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," field is ",(0,a.kt)("inlineCode",{parentName:"p"},"mpc_ast_t**"),". This is a double pointer type. It isn't as scary as it looks and will be explained in greater detail in later chapters. For now, you can think of it as a list of the child nodes of this tree."),(0,a.kt)("p",null,"We can access a child node by accessing this field using array notation. This is done by writing the field name ",(0,a.kt)("inlineCode",{parentName:"p"},"children")," and suffixing it with square brackets containing the index of the child to access. For example to access the first child of the node we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"children[0]"),"."),(0,a.kt)("p",null,"Because the type ",(0,a.kt)("inlineCode",{parentName:"p"},"mpc_ast_t*")," is a ",(0,a.kt)("strong",{parentName:"p"},"pointer")," to a struct, there is a slightly different syntax to access its fields. We need to use an arrow ",(0,a.kt)("inlineCode",{parentName:"p"},"->")," instead of a dot ",(0,a.kt)("inlineCode",{parentName:"p"},"."),". There is no fundamental reason for this switch in operators, so for now just remember that field access of pointer types uses an arrow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'/* Load AST from output */\nmpc_ast_t* a = r.output;\nprintf("Tag: %s\\n", a->tag);\nprintf("Contents: %s\\n", a->contents);\nprintf("Number of children: %i\\n", a->children_num);\n\n/* Get first Child */\nmpc_ast_t* c0 = a->children[0];\nprintf("First child tag: %s\\n", c0->tag);\nprintf("First child contents: %s\\n", c0->contents);\nprintf("First child number of children: %i\\n", c0->children_num);\n')),(0,a.kt)("h2",{id:"recursion"},"Recursion"),(0,a.kt)("p",null,"There is an odd thing about this tree structure. It refers to itself. Each of its children are themselves trees again, and the children of those children are trees yet again. Just like our languages and re-write rules, data in this structure contains repeated substructures that resemble their parents."),(0,a.kt)("p",null,"This pattern of repeated substructures could go on and on. Clearly if we want a function which can work on all possible trees we can't look just a couple of nodes down, we have to define it to work on trees of any depth."),(0,a.kt)("p",null,"Luckily we can do this, by exploiting the nature of how these substructures repeat and using a technique called ",(0,a.kt)("strong",{parentName:"p"},"recursion"),"."),(0,a.kt)("p",null,"Put simply a ",(0,a.kt)("strong",{parentName:"p"},"recursive function")," is one that calls itself as some part of its calculation."),(0,a.kt)("p",null,"It sounds weird for a function to be defined in terms of itself. Consider that functions can give different outputs when supplied with different inputs. If we give changed, or different inputs to a recursive call to the same function, and provide a way for this function to not call itself again under certain conditions, we can be more confident this ",(0,a.kt)("strong",{parentName:"p"},"recursive function")," is doing something useful."),(0,a.kt)("p",null,"As an example we can write a recursive function which will count the number of nodes in our tree structure."),(0,a.kt)("p",null,"To begin we work out how it will act in simplest case - if the input tree has no children. In this case we know the result is simply one. Now we can go on to define the more complex case - if the tree has one or more children. In this case the result will be one (for the node itself), plus the number of nodes in all of those children."),(0,a.kt)("p",null,"ut how do we find the number of nodes in all children? Well we can use the function we are in the process of defining! Yeah, ",(0,a.kt)("strong",{parentName:"p"},"Recursion"),"."),(0,a.kt)("p",null,"In C we might write something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int number_of_nodes(mpc_ast_t* t) {\n    if ( t->children_num == 0) { return 1; }\n    if ( t->children_num > 1 ) {\n        int total = 1;\n        for (int i = 0; i < t->children_num; i++ ) {\n            total = total + number_of_nodes(t->children[i]);\n        }\n        return total;\n    }\n    return 0;\n}\n")),(0,a.kt)("p",null,"Recursive functions are weird because they require an odd leap of faith. First we have to assume we have a function which does something correctly already, and then we have to go about using this function, to write the initial function we assumed we had!"),(0,a.kt)("p",null,"Like most things, recursive functions almost always end up following a similar pattern. First a base case is defined. This is the case that ends the recursion, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"t->children_num == 0")," in our previous example. After this the recursive case is defined, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"t->children_num >= 1")," in our previous example, which breaks down a computation into smaller parts, and calls itself recursively to compute those parts, before combining them together."),(0,a.kt)("h2",{id:"evaluation"},"Evaluation"),(0,a.kt)("p",null,"To evaluate the parse tree we are going to write a recursive function. But before we get started, let us try and see what observations we can make about the structure of the tree we get as input. Try printing out some expressions using your program from the previous chapter. What do you notice?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"lispy> * 10 (+ 1 51)\n>\n  regex\n  operator|char:1:1 '*'\n  expr|number|regex:1:3 '10'\n  expr|>\n    char:1:6 '('\n    operator|char:1:7 '+'\n    expr|number|regex:1:9 '1'\n    expr|number|regex:1:11 '51'\n    char:1:13 ')'\n  regex\n")),(0,a.kt)("p",null,"One observation is that if a node is tagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," it is always a number, has no children, and we can just convert the contents to an integer. This will act as the ",(0,a.kt)("strong",{parentName:"p"},"base case")," in our recursion."),(0,a.kt)("p",null,"If a node is tagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"expr"),", and is not a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", we need to look at its second child (the first child is always ",(0,a.kt)("inlineCode",{parentName:"p"},"'('"),") and see which operator it is. Then we need to apply this operator to the evaluation of the remaining children, excluding the final child which is always ",(0,a.kt)("inlineCode",{parentName:"p"},"')'"),". This is our ",(0,a.kt)("strong",{parentName:"p"},"recursive case"),". This also needs to be done for the root node."),(0,a.kt)("p",null,"When we evaluate our tree, just like when counting the nodes, we'll need to accumulate the result. To represent this result we'll use the C type ",(0,a.kt)("inlineCode",{parentName:"p"},"long")," which means a ",(0,a.kt)("strong",{parentName:"p"},"long integer"),"."),(0,a.kt)("p",null,"To detect the tag of a node, or to get a number from a node, we will need to make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"contents")," fields. These are ",(0,a.kt)("strong",{parentName:"p"},"string")," fields, so we are going to have to learn a couple of string functions first."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"-"),(0,a.kt)("th",{parentName:"tr",align:"left"},"-"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"atoi")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Converts a ",(0,a.kt)("inlineCode",{parentName:"td"},"char*")," to an ",(0,a.kt)("inlineCode",{parentName:"td"},"int"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"strcmp")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Takes as input two ",(0,a.kt)("inlineCode",{parentName:"td"},"char*")," and if they are equal it returns ",(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"strstr")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Takes as input tow ",(0,a.kt)("inlineCode",{parentName:"td"},"char*")," and returns a pointer to the location of the second in the first, or ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," if the second is not a sub-string of the first")))),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"strcmp")," to check which operator to use, and ",(0,a.kt)("inlineCode",{parentName:"p"},"strstr")," to check if a tag contains some substring. Altogether our recursive evaluation function looks like this. And we can define the ",(0,a.kt)("inlineCode",{parentName:"p"},"eval_op")," function as follows. It takes in a number, an operator string, and another number. It tests for which operator is passed in, and performs the corresponding C operation on the inputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'long eval_op(long x, char* op, long y) {\n    if (strcmp(op, "+") == 0) { return x + y; }\n    if (strcmp(op, "-") == 0) { return x - y; }\n    if (strcmp(op, "*") == 0) { return x * y; }\n    if (strcmp(op, "/") == 0) { return x / y; }\n    return 0;\n}\n\n\nlong eval(mpc_ast_t* t) {\n    /* If tagged as number return it directly */\n    if (strstr(t->tag, "number")) {\n        return atoi(t->contents);\n    }\n\n    /* The operator is always second child */\n    char* op = t->children[1]->contents;\n\n    /* we store the third child in `x` */\n    long x = eval(t->children[2]);\n\n    /* Iterate the remaining children and combining */\n    int i = 3;\n    while (strstr(t->children[i]-tag, "expr")) {\n        x = eval_op(x, op, eval(t->children[i])0;\n        i++\n    }\n\n    return x;\n}\n')),(0,a.kt)("h2",{id:"printing"},"Printing"),(0,a.kt)("p",null,"Instead of printing the tree, we now want to print the result of the evaluation. Therefore, we need to pass the tree into our ",(0,a.kt)("inlineCode",{parentName:"p"},"eval")," function, and print the result we get using ",(0,a.kt)("inlineCode",{parentName:"p"},"printf")," and the specifier ",(0,a.kt)("inlineCode",{parentName:"p"},"%li"),", which is used for ",(0,a.kt)("inlineCode",{parentName:"p"},"long")," type."),(0,a.kt)("p",null,"We also need to remember to delete the output tree after we are done evaluating it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'long result = eval(r.output);\nprintf("%li\\n", result);\nmpc_ast_delete(r.output);\n')))}u.isMDXComponent=!0},95932:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/parsing-evaluation-9a8fd500a175f7861b45f7b3567bea95.c"}}]);