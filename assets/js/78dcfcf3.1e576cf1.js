"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1043],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[c]="string"==typeof e?e:i,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const l={title:"10 Functions",tags:["lisp","interpreter"]},o=void 0,r={unversionedId:"lisp-interpreter-in-c/functions",id:"lisp-interpreter-in-c/functions",title:"10 Functions",description:"document",source:"@site/docs/lisp-interpreter-in-c/10-functions.md",sourceDirName:"lisp-interpreter-in-c",slug:"/lisp-interpreter-in-c/functions",permalink:"/docs/lisp-interpreter-in-c/functions",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:10,frontMatter:{title:"10 Functions",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"09 Variables",permalink:"/docs/lisp-interpreter-in-c/variables"},next:{title:"11 Conditionals",permalink:"/docs/lisp-interpreter-in-c/conditionals"}},s={},u=[{value:"What is a Function ?",id:"what-is-a-function-",level:2},{value:"Function Type",id:"function-type",level:2},{value:"Lambda Function",id:"lambda-function",level:2},{value:"Parent Environment",id:"parent-environment",level:2},{value:"Function Calling",id:"function-calling",level:2},{value:"Variable Arguments",id:"variable-arguments",level:2},{value:"Interesting Functions",id:"interesting-functions",level:2},{value:"Function Definition",id:"function-definition",level:3},{value:"Currying",id:"currying",level:3}],p={toc:u};function c(e){let{components:n,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/chapter12_functions"},"document")),(0,i.kt)("p",null,"codes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:t(55778).Z},"functions"))),(0,i.kt)("h2",{id:"what-is-a-function-"},"What is a Function ?"),(0,i.kt)("p",null,"Functions are the essence of all programming. In the early days of computer science they represented a naive dream. The idea was that we could reduce computation into these smaller and smaller bits of re-usable code. Given enough time, and a proper structure for libraries, eventually we would have written code required for all computational needs. No longer would people have to write their own functions, and programming would consist of an easy job of stitching together components."),(0,i.kt)("p",null,"This dream hasn't come true yet, but it persists, no matter how flawed. Each new programming technique or paradigm that comes along shakes up this idea a little. They promise better re-use of code. Better abstractions, and an easier life for all."),(0,i.kt)("p",null,"In reality what each paradigm delivers is simply ",(0,i.kt)("em",{parentName:"p"},"different abstractions"),". There has always been a trade-off. For each higher level of thinking about programming, some piece is thrown away. And this means, no matter how well you decide what to keep and what to leave, occasionally someone will need that piece that has been lost. But through all of this, one way or the other, functions have always persisted, and have continually proven to be effective."),(0,i.kt)("p",null,"We've used functions in C, we know what they look like, but we don't know exactly what they are. Here are a few ways to think about them."),(0,i.kt)("p",null,'One way to think about functions is as description of some computation you want to be performed later. When you define a function it is like saying "when I use this name I want that sort of thing to happen". This is a very practical idea of a function. It is very intuitive, and metaphorical to language. This is the way you would command a human or animal. Another thing I like about this is that it captures the delayed nature of functions. Functions are defined once, but can be called on repeatedly after.'),(0,i.kt)("p",null,"Another way to think about functions is as a black box that takes some input and produces some output. This idea is subtly different from the former. It is more algebraic, and doesn't talk about ",(0,i.kt)("strong",{parentName:"p"},"computation")," or ",(0,i.kt)("strong",{parentName:"p"},"commands"),". This idea is a mathematical concept, and is not tied to some particular machine, or language. In some situations this idea is exceptionally useful. It allows us to think about functions without worrying about their internals, or how they are computed exactly. We can then combine and compose functions together without worry of something subtle going wrong. This is the core idea behind an abstraction, and is what allows layers of complexity to work together with each other rather than conflict. This idea's strength can also be its downfall. Because it does not mention anything about computation it does not deal with a number of real world concerns."),(0,i.kt)("p",null,"A third method is to think of functions as ",(0,i.kt)("strong",{parentName:"p"},"partial computations"),". Like the Mathematical model they can take some inputs. These values are required before the function can complete the computation. This is why it is called ",(0,i.kt)("strong",{parentName:"p"},"partial"),". But like the computational model, the body of the function consists of a computation specified in some language of commands. These inputs are called ",(0,i.kt)("strong",{parentName:"p"},"unbound variables"),", and to finish the computation one simply supplies them. The output of these partial computations is itself a variable with an unknown value. This output can be placed as input to a new function, and so one function relies on another."),(0,i.kt)("p",null,"An advantage of this idea over the mathematical model is that we recognize that functions ",(0,i.kt)("strong",{parentName:"p"},"contain computation"),". We see that when the computation runs, some physical process is going on in the machine. This means we recognize the fact that certain things take time to elapse, or that a function might change the program state, or do anything else we're not sure about."),(0,i.kt)("p",null,"All these ideas are explored in the study of functions, ",(0,i.kt)("strong",{parentName:"p"},"Lambda calculus"),". This is a field that combines logic, maths, and computer science. The name comes from the Greek letter Lambda, which is used in the representation of ",(0,i.kt)("strong",{parentName:"p"},"binding variables"),". Using Lambda calculus gives a way of defining, composing and building functions using a simple mathematical notation."),(0,i.kt)("p",null,"We are going to use all previous ideas to add user defined functions to our language. Lisp is already well suited to this sort of playing around and using these concepts, it won't take much work for us to implement functions."),(0,i.kt)("p",null,"The first step will be to write a builtin function that can create user defined functions. Here is one idea as to how it can be specified. The first argument could be a list of symbols, just like our ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," function. These symbols we call the formal arguments, also known as the ",(0,i.kt)("strong",{parentName:"p"},"unbound variables"),". They act as the inputs to our ",(0,i.kt)("strong",{parentName:"p"},"partial computation"),". The second argument could be another list. When running the function this is going to be evaluated with our builtin ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"def { add-together } ( \\ { x y } { + x y } )\n\nadd-together 10 20\n")),(0,i.kt)("h2",{id:"function-type"},"Function Type"),(0,i.kt)("p",null,"To store a function as an ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," we need to think exactly what it consists of."),(0,i.kt)("p",null,"Using the previous definition, a function should consist of three parts. First is the list of ",(0,i.kt)("strong",{parentName:"p"},"formal arguments"),", which we must bind before we can evaluate the function. The second part is a Q-Expression that represents the body of the function. Finally, we require a location to store the values assigned to the ",(0,i.kt)("strong",{parentName:"p"},"formal arguments"),". Luckily we already have a structure for storing variables, an ",(0,i.kt)("strong",{parentName:"p"},"environment"),"."),(0,i.kt)("p",null,"We will store our builtin functions and user defined functions under the same type ",(0,i.kt)("inlineCode",{parentName:"p"},"LVAL_FUN"),". This means we need a way internally to differentiate between them. To do this we can check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"lbuiltin")," function pointer is ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," or not. If it is not ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL")," we know the ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," is some builtin function, otherwise we know it is a user function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct lval {\n    int type;\n\n    long num;\n    char* err;\n    char* sym;\n\n    lbuiltin builtin;\n    lenv* env;\n    lval* formals;\n    lval* body;\n\n    int count;\n    lval** cell;\n};\n")),(0,i.kt)("p",null,"We've renamed the ",(0,i.kt)("inlineCode",{parentName:"p"},"lbuiltin")," field from ",(0,i.kt)("inlineCode",{parentName:"p"},"fun")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin"),". We should make sure to change this in all the places it is used in our code."),(0,i.kt)("p",null,"We also need to create a constructor for user defined ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," functions. Here we build a new environment for the function, and assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"formals")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," values to those passed in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"lval* lval_lambda(lval* formals, lval* body) {\n    lval* v = malloc(sizeof(lval));\n    v->type = LVAL_FUN;\n\n    v->builtin = NULL;\n\n    v->env = lenv_new();\n\n    v->formals = formals;\n\n    v->body = body;\n\n    return v;\n}\n")),(0,i.kt)("p",null,"As with whenever we change our ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," type we need to update the functions for ",(0,i.kt)("strong",{parentName:"p"},"deletion"),", ",(0,i.kt)("strong",{parentName:"p"},"copying")," and ",(0,i.kt)("strong",{parentName:"p"},"printing")," to deal with the changes. For evaluation, we'll need to look in greater depth."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"// for deletion\n\ncase LVAL_FUN:\n    if (!v->builtin) {\n        lenv_del(v->env);\n        lval_del(v->formals);\n        lval_del(v->body);\n    }\n    break;\n\n// for Copying\ncase LVAL_FUN:\n    if (v->builtin) {\n        x->builtin = v->builtin;\n    } else {\n        x->builtin = NULL;\n        x->env = lenv_copy(v->env);\n        x->formals = lval_copy(v->formals);\n        x->body = lval_copy(v->body);\n    }\n    break;\n\n// for Printing\ncase LVAL_FUN:\n    if (v->builtin) {\n        printf(\"<builtin>\");\n    } else {\n        printf(\"(\\\\ \"); lval_print(v->formals);\n        putchar(' '); lval_print(v->body); putchar(')');\n    }\n    break;\n\n")),(0,i.kt)("h2",{id:"lambda-function"},"Lambda Function"),(0,i.kt)("p",null,"We can now add a builtin for lambda function. We want it to take as input some list of symbols, and a list that represents the code. After that it should return a function ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," . We've defined a few of builtins now, and this one will follow the same format. Like in ",(0,i.kt)("inlineCode",{parentName:"p"},"def")," we do some error checking to ensure the argument types and count are correct. Then we just pop the first two arguments form the list and pass them to our previously defined function ",(0,i.kt)("inlineCode",{parentName:"p"},"lval_lambda"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lval* builtin_lambda(lenv* e, lval* a) {\n    LASSERT_NUM("\\\\", a, 2);\n    LASSERT_TYPE("\\\\", a, 0, LVAL_QEXPR);\n    LASSERT_TYPE("\\\\", a, 1, LVAL_QEXPR);\n\n    for (int i = 0; i < a->cell[0]->count; i++) {\n        LASSERT(a, (a->cell[0]->cell[i]->type == LVAL_SYM), "Cannot define non-symbol. Got %s, Expected %s.", ltype_name(a->cell[0]->cell[i]->type), ltype_name(LVAL_SYM));\n    }\n\n    lval* formals = lval_pop(a, 0);\n    lval* body = lval_pop(a,0);\n    lval_del(a);\n\n    return lval_lambda(formals, body);\n}\n')),(0,i.kt)("p",null,"We'll register this withe the other builtins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lenv_add_builtin(e, "\\\\", builtin_lambda);\n')),(0,i.kt)("h2",{id:"parent-environment"},"Parent Environment"),(0,i.kt)("p",null,"We've given functions their own environment. In this environment we will place the values that their formal arguments are set to. When we come to evaluate the body of the function we can do it in this environment and know that those variables will have the correct values."),(0,i.kt)("p",null,"But ideally we also want these functions to be able to access variables which are in the global environment, such as our builtin functions."),(0,i.kt)("p",null,"We can solve this problem by changing the definition of our environment to contain a reference to some ",(0,i.kt)("strong",{parentName:"p"},"parent environment"),". Then, when we want to evaluate a function, we can set this ",(0,i.kt)("strong",{parentName:"p"},"parent")," environment to our global environment, which has all of our builtins defined within."),(0,i.kt)("p",null,"When we add this to our ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv")," struct, conceptually it will be a ",(0,i.kt)("strong",{parentName:"p"},"reference")," to a parent environment, not some sub-environment or anything like that. Because of this we shouldn't ",(0,i.kt)("strong",{parentName:"p"},"delete")," it when our ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv")," gets deleted, or copy it when our ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv")," gets copied."),(0,i.kt)("p",null,"The way the ",(0,i.kt)("strong",{parentName:"p"},"parent environment")," works is simple. If someone calls ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv_get")," on the environment, and the symbol cannot be found. It will look then in any parent environment to see if the named value exists there, and repeat the process till either the variable is found or there are no more parents. To signify that an environment has no parent we set the reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,i.kt)("p",null,"The constructor function only require basic changes to allow for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"struct lenv {\n    lenv* par;\n    int count;\n    char** syms;\n    lval** vals;\n};\n\nlenv* lenv_new(void) {\n    lenv* e = malloc(sizeof(lenv));\n    e->par = NULL;\n    e->count = 0;\n    e->syms = NULL;\n    e->vals = NULL;\n    return e;\n}\n\nlval* lenv_get(lenv* e, lval* k) {\n    for (int i = 0; i < e->count; i++) {\n        if (strcmp(e->syms[i], k->sym) == 0) {\n            return lval_copy(e->vals[i]);\n        }\n    }\n\n    if (e->par) {\n        return lenv_get(e->par, k);\n    } else {\n        return lval_err(\"Unbound Symbol '%s'\", k->sym);\n    }\n}\n")),(0,i.kt)("p",null,"Because we have a new ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," type that has its own environment we need a function for copying environments, to use for when we copy ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," structs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"lenv* lenv_copy(lenv* e) {\n    lenv* n = malloc(sizeof(lenv));\n    n->par = e->par;\n    n->count = e->count;\n    n->syms = malloc(sizeof(char*) * n->count);\n    n->vals = malloc(sizeof(lval*) * n->count);\n    for (int i = 0; i < e->count; i++) {\n        n->syms[i] = malloc(strlen(e->syms[i]) + 1);\n        strcpy(n->syms[i], e->syms[i]);\n        n->vals[i] = lval_copy(e->vals[i]);\n    }\n\n    return n;\n}\n")),(0,i.kt)("p",null,"Having parent environments also changes our concept of ",(0,i.kt)("strong",{parentName:"p"},"defining")," a variable."),(0,i.kt)("p",null,"There are two ways we could define a variable now. Either we could define it in the local, innermost environment, or we could define it in the global, outermost environment. We will add functions to do both. We'll leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv_put")," method the same. It can be used for definition in the local environment. But we'll add a new function ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv_def")," for definition in the global environment. This works by simply following the parent chain up before using ",(0,i.kt)("inlineCode",{parentName:"p"},"lenv_put")," to define locally."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"void lenv_def(lenv* e, lval* k, lval* v) {\n    while (e->par) { e = e->par; }\n    lenv_put(e, k, v);\n}\n")),(0,i.kt)("p",null,"At the moment this distinction may seem useless, but later on we will use it to write partial results of calculations to local variables inside a function. We should add another builtin for ",(0,i.kt)("strong",{parentName:"p"},"local")," assignment. We'll call this ",(0,i.kt)("inlineCode",{parentName:"p"},"put")," in C, but give it the ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," symbol like in Lisp. We can adapt our ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin_def")," function and re-use the common code, just like we do with our mathematical operators."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lval* builtin_def(lenv* e, lval* a) {\n    return builtin_var(e, a, "def");\n}\n\nlval* builtin_var(lenv* e, lval* a, char* func) {\n    LASSERT_TYPE(func, a, 0, LVAL_QEXPR);\n\n    lval* syms = a->cell[0];\n    for (int i = 0; i < syms->count; i++) {\n        LASSERT(a, (syms->cell[i]->type == LVAL_SYM), "Function \'%s\' cannot define non-symbol. Got %s, Expected %s.", func, ltype_name(syms->cell[i]->type), ltype_name(LVAL_SYM));\n    }\n\n    LASSERT(a, (syms->count == a->count - 1 ), "Function \'%s\' passed too many arguments for symbols. Got %i, Expected %i.", func, syms->count, a->count - 1);\n\n\n    for (int i = 0; i < syms->count; i++) {\n        if (strcmp(func, "def") == 0) {\n            lenv_def(e, syms->cell[i], a->cell[i+1]);\n        }\n\n        if (strcmp(func, "=") == 0) {\n            lenv_put(e, syms->cell[i], a->cell[i+1]);\n        }\n    }\n\n    lval_del(a);\n    return lval_sexpr();\n}\n\nlval* builtin_put(lenv* e, lval* a) {\n    return builtin_var(e, a, "=");\n}\n\n\nlenv_add_builtin(e, "def", builtin_def);\nlenv_add_builtin(e, "=", builtin_put);\n\n')),(0,i.kt)("h2",{id:"function-calling"},"Function Calling"),(0,i.kt)("p",null,"We need to write the code that runs when an expression gets evaluated and a function ",(0,i.kt)("inlineCode",{parentName:"p"},"lval")," is called."),(0,i.kt)("p",null,"When this function type is a builtin we can call it as before, using the function pointer, but we need to do something separate for our user defined functions. We need to bind each of the arguments passed in, to each of the symbols in the ",(0,i.kt)("inlineCode",{parentName:"p"},"formals")," field. Once this is done we need to evaluate the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," field, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," field as an environment, and the calling environment as a parent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"lval* lval_call(lenv* e, lval* f, lval* a) {\n    if (f->builtin) { return f->builtin(e, a); }\n\n    for (int i = 0; i < a->count; i++) {\n        lenv_put(f->env, f->formals->cell[i], a->cell[i]);\n    }\n\n    lval_del(a);\n\n    f->env->par = e;\n\n    return builtin_eval(f->env, lval_add(lval_sexpr(), lval_copy(f->body));\n}\n")),(0,i.kt)("p",null,"But this doesn't act correctly when the number of arguments supplied, and the number of formal arguments differ. In this situation it will crash."),(0,i.kt)("p",null,"Actually this is an interesting case, and leaves us a couple of options. We could just throw an error when the argument count supplied is incorrect, but we can do something that is more fun. When too few arguments are supplied we could instead bind the first few formal arguments of the function and then return it, leaving the rest unbound."),(0,i.kt)("p",null,"This creates a function that has been partially evaluated and reflects our previous idea of a function being some kind of partial computation. If we start with a function that takes two arguments, and pass in a single argument, we can bind this first argument and return a new function with its first formal argument bound, and its second remaining empty."),(0,i.kt)("p",null,"This metaphor creates a cute image of how functions work. We can imagine a function at the front of an expression, repeatedly consuming inputs directly to its right. After consuming the first input to its right, if it is full (requires no more inputs), it evaluates and replaces itself with some new value. If instead, it is still it still requires more, it replaces itself with another, more complete function, with one of its variables bound. This process repeats until the final value for the program is created."),(0,i.kt)("p",null,"So you can imagine functions like a little Pac-Man, not consuming all inputs at once, but iteratively eating inputs to the right, getting bigger and bigger until it is full and explodes to create something new. This isn't actually how we're going to implement it in code, but it is still fun to imagine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lval* lval_call(lenv* e, lval* f, lval* a) {\n    if (f->builtin) { return f->builtin(e, a); }\n\n    int given = a->count;\n    int total = f->formals->count;\n\n    while (a->count) {\n        if (f->formals->count == 0) {\n            lval_del(a);\n            return lval_err("Function passed too many arguments. Got %i, Expected %i.", given, total);\n        }\n\n        lval* sym = lval_pop(f->formals, 0);\n\n        lval* val = lval_pop(a, 0);\n\n        lenv_put(f->env, sym, val);\n\n        lval_del(sym); lval_del(val);\n    }\n\n    lval_del(a);\n\n    if (f->formals->count == 0) {\n        f->env->par = e;\n        return builtin_eval(f->env, lval_add(lval_sexpr(), lval_copy(f->body)));\n    } else {\n        return lval_copy(f);\n    }\n}\n')),(0,i.kt)("p",null,"The above function does exactly as we explained, with correct error handling added in too. First it iterates over the passed in arguments attempting to place each one in the environment. Then it checks if the environment is full, and if so evaluates, otherwise returns a copy of itself with some arguments filled."),(0,i.kt)("p",null,"If we update our evaluation function ",(0,i.kt)("inlineCode",{parentName:"p"},"lval_eval_sexpr")," to call ",(0,i.kt)("inlineCode",{parentName:"p"},"lval_call"),", we can give our new system a spin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'lval* f = lval_pop(v, 0);\n\nif (f->type != LVAL_FUN) {\n    lval* err = lval_err("S-Expression starts with incorrect type. Got %s, Expected %s", ltype_name(f->type), ltype_name(LVAL_FUN));\n    lval_del(f); lval_del(v);\n    return err;\n}\n\nlval* result = lval_call(e, f, v);\n')),(0,i.kt)("h2",{id:"variable-arguments"},"Variable Arguments"),(0,i.kt)("p",null,"We've defined some of our builtin functions so they can take in a variable number of arguments. Functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"join")," can take any number of arguments, and operate on them logically. We should find a way to let user defined functions work on multiple arguments as well."),(0,i.kt)("p",null,"Unfortunately there isn't an elegant way for us to allow for this, without adding in some special syntax. So we're going to hard-code some system into our language using a special symbol ",(0,i.kt)("inlineCode",{parentName:"p"},"&"),"."),(0,i.kt)("p",null,"We are going to let users define formal arguments that look like ",(0,i.kt)("inlineCode",{parentName:"p"},"{ x & xs }"),", which means that a function will take in a single argument ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", followed by zero or more other arguments, joined together into a list called ",(0,i.kt)("inlineCode",{parentName:"p"},"xs"),". This is a bit like the ellipsis we used to declare variable arguments in C."),(0,i.kt)("p",null,"When assigning our formal arguments we're going to look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," symbol and if it exists take the next formal argument and assign it any remaining supplied arguments we've been passed. It's important we convert this argument list to a Q-Expression. We need to also remember to check that ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," is followed by a real symbol, and if it isn't we should throw an error."),(0,i.kt)("p",null,"Just after the first symbol is popped from the formals in the ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop of ",(0,i.kt)("inlineCode",{parentName:"p"},"lval_call")," we can add this special case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'if (strcmp(sym->sym, "&") == 0) {\n   if (f->formals->count != 1) {\n       lval_del(a);\n       return lval_err("Function format invalid. Symbol \'&\' not followed by single symbol.");\n   }\n\n   lval* nsym = lval_pop(f->formals, 0);\n   lenv_put(f->env, nsym, builtin_list(e, a));\n   lval_del(sym); lval_del(nsym);\n   break;\n}\n')),(0,i.kt)("p",null,"Suppose when calling the function the user doesn't supply any variable arguments, but only the first named ones. In this cae we need to set the symbol following ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," to the empty list. Just after we delete the argument list, and before we check to see if all the formals have been evaluated, add in this special case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'// If `&` remains in formal list bind to empty list\nif (f->formals->count > 0 && strcmp(f->formals->cell[0]->sym, "&") == 0) {\n\n    // Check to ensure that & is not passed invalidly\n    if (f->formals->count != 2) {\n        return  lval_err("Function format invalid. Symbol \'&\' not followed by single symbol.")\n    }\n\n\n    // pop and delete `&` symbol\n    lval_del(lval_pop(f->formals, 0));\n\n    // pop next symbol and create empty list\n    lval* sym = lval_pop(f->formals, 0);\n    lval* val = lval_qexpr();\n\n    // bind to environment and delete\n    lenv_put(f->env, sym, val);\n    lval_del(sym); lval_del(val);\n}\n')),(0,i.kt)("h2",{id:"interesting-functions"},"Interesting Functions"),(0,i.kt)("h3",{id:"function-definition"},"Function Definition"),(0,i.kt)("p",null,"Lambdas are clearly a simple and powerful way of defining functions. But the syntax is a little clumsy. There are a lot of brackets and symbols involved. Here is an interesting idea. We can try to write a function that defines a function itself, using some simpler syntax."),(0,i.kt)("p",null,"Essentially what we want is a function that can perform two steps at once. First it should create a new function, and then it should define it to some name. Here is the trick. We let the user supply the name and the formal arguments altogether in one list, and then separate these out for them, and use them in the definition. Here is a function that does that. It takes as input some arguments and somebody. It takes the head of the arguments to be the function name and the rest to be the formal arguments. It passes the body directly to a lambda."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\\ { args body } { def (head args) (\\ (tail args) body) }\n")),(0,i.kt)("p",null,"We can name this function something like ",(0,i.kt)("inlineCode",{parentName:"p"},"fun")," by passing it to def as usual."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"def { fun } (\\ { args body } { def (head args) (\\ (tail args) body) })\n")),(0,i.kt)("p",null,"This means that we can now define functions in a much simpler and nicer way. To define our previously mentioned ",(0,i.kt)("inlineCode",{parentName:"p"},"add-together")," we can do the following. Functions that can define functions. That is certainly something we could never do in C."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fun { add-together x y } { + x y }\n")),(0,i.kt)("h3",{id:"currying"},"Currying"),(0,i.kt)("p",null,"At the moment functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," take a variable number of arguments. In some situations that's great, but what if we had a list of arguments we wished to pass to it. In this situation it is rendered somewhat useless."),(0,i.kt)("p",null,"Again we can try to create a function to solve this problem. If we can create a list in the format we wish to use for our expression we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"eval")," to treat it as such. In the situation of ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," we could append this function to the front of the list and then perform the evaluation."),(0,i.kt)("p",null,"We can define a function ",(0,i.kt)("inlineCode",{parentName:"p"},"unpack")," that dose this. It takes as input some function and some list and appends the function to the front of the list, before evaluating it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fun { unpack f xs } { eval ( join ( list f) xs) }\n")),(0,i.kt)("p",null,"In some situations we might be faced with the opposite dilemma. We may have a function that takes as input some list, but we wish to call it using variable arguments. In this case the solution is even simpler. We use the fact that our ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," syntax for variable arguments packsup variable arguments into a list for us."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fun { pack f & xs } { f xs }\n")),(0,i.kt)("p",null,"In some languages this is called ",(0,i.kt)("strong",{parentName:"p"},"currying")," and ",(0,i.kt)("strong",{parentName:"p"},"uncurrying")," respectively. This is named after Haskell Curry and unfortunately has nothing to do with our favourite spicy food."),(0,i.kt)("p",null,"Because of the way our partial evaluation works we don't need to think of ",(0,i.kt)("strong",{parentName:"p"},"currying")," with a specific set of arguments. We can think of functions themselves being in ",(0,i.kt)("strong",{parentName:"p"},"curried")," or ",(0,i.kt)("strong",{parentName:"p"},"uncurried")," form."))}c.isMDXComponent=!0},55778:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/functions-1c27f8f68a3f0ba6b4a77662c47197e5.c"}}]);