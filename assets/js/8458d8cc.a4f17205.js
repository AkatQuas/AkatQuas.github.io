"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8882],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,d=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return t?a.createElement(d,o(o({ref:n},u),{},{components:t})):a.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26413:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"The Interpreter",sidebar_position:5,tags:["interpreter"]},o=void 0,l={unversionedId:"interpreter-in-js/interpreter",id:"interpreter-in-js/interpreter",title:"The Interpreter",description:"So far we have wrote 3 functions",source:"@site/docs/interpreter-in-js/interpreter.md",sourceDirName:"interpreter-in-js",slug:"/interpreter-in-js/interpreter",permalink:"/docs/interpreter-in-js/interpreter",draft:!1,tags:[{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:5,frontMatter:{title:"The Interpreter",sidebar_position:5,tags:["interpreter"]},sidebar:"tutorialSidebar",previous:{title:"The AST",permalink:"/docs/interpreter-in-js/parser"},next:{title:"Before start",permalink:"/docs/lisp-interpreter-in-c/index"}},s={},p=[{value:"The environment",id:"the-environment",level:3},{value:"The <code>evaluate</code> function",id:"the-evaluate-function",level:2}],u={toc:p};function c(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far we have wrote 3 functions: ",(0,r.kt)("inlineCode",{parentName:"p"},"InputStream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenStream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"parse"),". To get an AST from a piece of code now we can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"var ast = parse(TokenStream(InputStream(code)));\n")),(0,r.kt)("p",null,"Writing an interpreter is easier tan the parser. We just have to walk the AST, executing expressions in their normal order."),(0,r.kt)("h3",{id:"the-environment"},"The environment"),(0,r.kt)("p",null,"The key to correct execution is to properly maintain the environment - a structure holding variable bindings. It will be passed as an argument to our ",(0,r.kt)("inlineCode",{parentName:"p"},"evaluate")," function. Each time we enter a ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," node we must extend the environment with new variables (function's arguments) and initialize them with values passed at run time. If an arguments shadows a variable from the outer scope ( ",(0,r.kt)("em",{parentName:"p"},"scope")," and ",(0,r.kt)("em",{parentName:"p"},"environment")," mean the same thing, execution context) we must be careful to restore the previous value when we leave the function."),(0,r.kt)("p",null,"The simplest way to implement this is using JavaScript's prototype inheritance. When we enter a function we'll create a new environment, set its prototype to the outer (parent) environment and evaluate the function body in the new one. This way when we exit we need not do anything -- the outer env will already contain any shadowed bindings."),(0,r.kt)("p",null,"Here's the definition of the Environment object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function Environment(parent) {\n  this.vars = Object.create(parent ? parent.vars : null);\n  this.parent = parent;\n}\nEnvironment.prototype = {\n  extend: function () {\n    return new Environment(this);\n  },\n  lookup: function (name) {\n    var scope = this;\n    while (scope) {\n      if (Object.prototype.hasOwnProperty.call(scope.vars, name)) {\n        return scope;\n      }\n      scope = scope.parent;\n    }\n  },\n  get: function (name) {\n    if (name in this.vars) {\n      return this.vars[name];\n    }\n    return new Error('Undefined variable ' + name);\n  },\n  set: function (name, value) {\n    var scope = this.lookup(name);\n    if (!scope && this.parent) {\n      throw new Error('Undefined variable ' + name);\n    }\n    return ((scope || this).vars[name] = value);\n  },\n  def: function (name, value) {\n    return (this.vars[name] = value);\n  },\n};\n")),(0,r.kt)("p",null,"An Environment object has a ",(0,r.kt)("inlineCode",{parentName:"p"},"parent"),", which points to the parent scope. The parent will be null for the global scope. And it has a ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," property which holds the variable bindings. This is initialized as ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.create(null)")," for the toplevel (global) scope, or ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.create(parent.vars)"),' for subscopes, in order to "see" the current bindings via prototypal inheritance.'),(0,r.kt)("p",null,"There are the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"extend() \u2014 to create a subscope."),(0,r.kt)("li",{parentName:"ul"},"lookup(name) \u2014 to find the scope where the variable with the given name is defined."),(0,r.kt)("li",{parentName:"ul"},"get(name) \u2014 to get the current value of a variable. Throws an error if the variable is not defined."),(0,r.kt)("li",{parentName:"ul"},"set(name, value) \u2014 to set the value of a variable. This needs to lookup the actual scope where the variable is defined. If it's not found and we're not in the global scope, throws an error."),(0,r.kt)("li",{parentName:"ul"},"def(name, value) \u2014 this creates (or shadows, or overwrites) a variable in the current scope.")),(0,r.kt)("h2",{id:"the-evaluate-function"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"evaluate")," function"),(0,r.kt)("p",null,"Now that we have the Environment we can jump to the main problem. This function will be a big ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," statement, dispatching by node type, containing logic for evaluating each kind of node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function evaluate(exp, env) {\n  switch (exp.type) {\n    // for constant nodes, just return their value\n    case 'num':\n    case 'str':\n    case 'bool':\n      return exp.value;\n\n    // variables are fetched from the environment\n    // \"var\" tokens contain the name in the `value` property\n    case 'var':\n      return env.get(exp.value);\n\n    // assignment, we need to check if the left side is a \"var\" token\n    // if not, throw an error; we don't support assignment to anythiny else for now\n    // Then we use `env.set` to set the value. Note that the value needs\n    // to be computed first by calling `evaluate` recursively\n    case 'assign':\n      if (exp.left.type != 'var')\n        throw new Error('Cannot assign to ' + JSON.stringfy(exp.left));\n      return env.set(exp.left.value, evaluate(exp.right, env));\n\n    // \"binary\" node needs to apply an operator to two operands.\n    // We'll write the `apply_op` function later, it's quite trivial.\n    // Again, we need to call the evaluator recursively to compute the `left`\n    // ande `right` operands\n    case 'binary':\n      return apply_op(\n        exp.operator,\n        evaluate(exp.left, env),\n        evaluate(exp.right, env)\n      );\n\n    // \"lambda\" node will actually result in a Javascript closure, so it\n    // will be callable from JavaScript just like an ordinary function.\n    case 'lambda':\n      return make_lambda(env, exp);\n\n    // Evaluating an \"if\" node is simple: first evaluate the condition.\n    // if it's not `false` then evaluate the \"then\" branck and return its value.\n    // Otherwise, evaluate the `else` branch, if present, or return `false`.\n    case 'if':\n      var cond = evaluate(exp.cond, env);\n      if (cond !== false) return evaluate(exp.then, env);\n      return exp.else ? evaluate(exp.else, env) : false;\n\n    // A \"prog\" is a squence of expressions. We just evaluate them in order and\n    // return the value of the last one. For an empty sequence, the return value\n    // is initialized to `false`\n    case 'prog':\n      var val = false;\n      exp.prog.forEach(function (exp) {\n        val = evaluate(exp, env);\n      });\n      return val;\n\n    // For a \"call\" node we need to call a function. First we evaluate the `func`,\n    // which should return a normal  JS function, then we evaluate the `args` and\n    // apply that function\n    case 'call':\n      var func = evaluate(exp.func, env);\n      return func.apply(\n        null,\n        exp.args.map(function (arg) {\n          return evaluate(arg, env);\n        })\n      );\n\n    // normally, we should never get here, but just in case we add new\n    // node types in the parser and we forget to update the evaluator,\n    // let's throw a clear error\n    default:\n      throw new Error('Unknown type for evaluating ' + exp.type);\n  }\n}\n")),(0,r.kt)("p",null,"That is the core of the evaluator and as you can see it's really simple. We still need to write two more functions, let's start with ",(0,r.kt)("inlineCode",{parentName:"p"},"apply_op")," as it's the easiest one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function apply_op(op, a, b) {\n  function num(x) {\n    if (typeof x != 'number') {\n      throw new Error('Eexpected number but got ' + x);\n    }\n    return x;\n  }\n  function div(x) {\n    if (num(x) == 0) {\n      throw new Error('Divide by zero');\n    }\n  }\n  switch (op) {\n    case '+':\n      return num(a) + num(b);\n    case '-':\n      return num(a) - num(b);\n    case '*':\n      return num(a) * num(b);\n    case '/':\n      return num(a) / div(b);\n    case '%':\n      return num(a) % div(b);\n    case '&&':\n      return a !== false && b;\n    case '||':\n      return a !== false ? a : b;\n    case '<':\n      return num(a) < num(b);\n    case '>':\n      return num(a) > num(b);\n    case '<=':\n      return num(a) <= num(b);\n    case '>=':\n      return num(a) >= num(b);\n    case '==':\n      return a === b;\n    case '!=':\n      return a !== b;\n  }\n  throw new Error('Cannot apply operator ' + op);\n}\n")),(0,r.kt)("p",null,"It receives the operator and the arguments. Just a boring switch to apply it. Unlike JavaScript, which applies any operator to any arguments and moves on whether that makes any sense or not, we require that the operands for numeric operators be numbers, and that a divisor is not zero, using the small helpers ",(0,r.kt)("inlineCode",{parentName:"p"},"num")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),". For strings, we'll define something else."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"make_lambda")," is a bit subtle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function make_lambda(env, exp) {\n  function lambda() {\n    var names = exp.vars;\n    var scope = env.extend();\n    for (var i = 0; i < names.length; ++i) {\n      scope.def(names[i], i < arguments.length ? arguments[i] : false);\n    }\n    return evaluate(exp.body, scope);\n  }\n  return lambda;\n}\n")),(0,r.kt)("p",null,"As you can see, it returns a plain JavaScript function that ",(0,r.kt)("em",{parentName:"p"},"encloses over the environment and the expression to evaluate"),". It's important to understand that nothing happens when this closure is created \u2014 but ",(0,r.kt)("em",{parentName:"p"},"when it's called"),", it will extend the environment that it saved at creation time with the new bindings of arguments/values (if fewer values are passed than the function's argument list, the missing ones will get the value ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"). And then it just evaluates the body in the new scope."),(0,r.kt)("p",null,"So far, we have a runnable ",(0,r.kt)("a",{target:"_blank",href:t(71621).Z},"compiler"),". It's runnable with NodeJS \u2014 just pass the code to evaluate at standard input, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo 'sum = lambda(x, y) x + y; println(sum(2, 3));' | node lambda-eval1.js\n")),(0,r.kt)("p",null,"Whilst, the tutorial is not finished. In the rest sections, we are going to ",(0,r.kt)("a",{parentName:"p",href:"http://lisperator.net/pltut/eval1/play"},"play a bit with our \u03bbanguage"),"."))}c.isMDXComponent=!0},71621:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/lambda-eval1-c97bf9e508ecd7170abfb76f3b121025.js"}}]);