"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={title:"02 An Interactive Prompt",tags:["lisp","interpreter"]},o=void 0,s={unversionedId:"lisp-interpreter-in-c/interactive-prompt",id:"lisp-interpreter-in-c/interactive-prompt",title:"02 An Interactive Prompt",description:"document",source:"@site/docs/lisp-interpreter-in-c/02-interactive-prompt.md",sourceDirName:"lisp-interpreter-in-c",slug:"/lisp-interpreter-in-c/interactive-prompt",permalink:"/docs/lisp-interpreter-in-c/interactive-prompt",draft:!1,tags:[{label:"lisp",permalink:"/docs/tags/lisp"},{label:"interpreter",permalink:"/docs/tags/interpreter"}],version:"current",sidebarPosition:2,frontMatter:{title:"02 An Interactive Prompt",tags:["lisp","interpreter"]},sidebar:"tutorialSidebar",previous:{title:"01 Basic features of C",permalink:"/docs/lisp-interpreter-in-c/basic-features"},next:{title:"03 Language Grammar",permalink:"/docs/lisp-interpreter-in-c/language-grammar"}},p={},l=[{value:"Read, Evaluate, Print",id:"read-evaluate-print",level:2},{value:"An Interactive Prompt",id:"an-interactive-prompt",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.buildyourownlisp.com/chapter4_interactive_prompt"},"document")),(0,r.kt)("p",null,"codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(3209).Z},"simple prompt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:n(79544).Z},"editline prompt"))),(0,r.kt)("h2",{id:"read-evaluate-print"},"Read, Evaluate, Print"),(0,r.kt)("p",null,"As we build our programming language we'll need some way to interact with it. C uses a compiler, where you can change the program, recompile and run it. It'd be good if we could do something better, and interact with the language dynamically. Then we test its behaviour under a number of conditions very quickly. For this we can build something called an ",(0,r.kt)("strong",{parentName:"p"},"interactive prompt"),"."),(0,r.kt)("p",null,"This is a program that prompts the user for some input, and when supplied with it, replies back with some message. Using this will be the easiest way to test our programming language and see how it acts. This system is also called a ",(0,r.kt)("strong",{parentName:"p"},"REPL"),", which stands for ",(0,r.kt)("strong",{parentName:"p"},"read-evaluate-print loop"),"."),(0,r.kt)("h2",{id:"an-interactive-prompt"},"An Interactive Prompt"),(0,r.kt)("p",null,"For the basic setup we want to write a loop which repeatedly writes out a message, and then waits for some input. To get user input we can use a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets"),", which reads any input up until a new line. We need somewhere to store this user input. For this we can declare a constantly sized input buffer."),(0,r.kt)("p",null,"Once we have this user input stored we can then print it back to the user using a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"printf"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nstatic char input[2048];\n\nint main(int argc, char** argv) {\n\n    puts("Lispy Version 0.0.0.0.1");\n    puts("Press Ctrl+c to Exit\\n");\n\n    while(1) {\n        fputs("lispy> ", stdout);\n\n        fgets(input, 2048, stdin);\n\n        printf("Now you\'re a %s", input);\n    }\n\n    return 0;\n}\n')),(0,r.kt)("p",null,"The line ",(0,r.kt)("inlineCode",{parentName:"p"},"static char input[2048];")," declares a global array of 2048 characters. This is a reserved block of data we can access anywhere from our program. In it we are going to store the user input which is typed into the command line. The ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," keyword makes this variable local to this file, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"[2048]")," section is what declares the size."),(0,r.kt)("p",null,"We write an infinite loop using ",(0,r.kt)("inlineCode",{parentName:"p"},"while (1)"),". In a conditional block ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," always evaluates to true. Therefore, commands inside this loop will run forever."),(0,r.kt)("p",null,"To output our prompt we use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"fputs"),". This is a slight variation on puts which does not append a newline character. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets")," function for getting user input from the command line. Both of these functions require some file to write to, or read from. For this we supply the special variables ",(0,r.kt)("inlineCode",{parentName:"p"},"stdin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stdout"),". These are declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"<stdio.h>")," and are special file variables representing input to, and output from, the command line."),(0,r.kt)("p",null,"When passed this variable the ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets")," function will wait for a user to input a line of text, and when it has it will store it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," buffer, including the newline character. So that ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets")," does not read in too much data we also must also supply the size of the buffer ",(0,r.kt)("inlineCode",{parentName:"p"},"2048"),"."),(0,r.kt)("p",null,"To echo the message back to the user we use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"printf"),". This is a function that provides a way of printing messages consisting of several elements. It matches arguments to patterns in the given string. For example in our case we can see the ",(0,r.kt)("inlineCode",{parentName:"p"},"%s")," pattern in the given string. This means that it will be replaced by whatever argument is passed in next, interpreted as a string."),(0,r.kt)("p",null,"On MacOS, we need ",(0,r.kt)("inlineCode",{parentName:"p"},"editline")," to escape the arrow keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\n#include <editline/readline.h>\n\nint main(int argc, char** argv) {\n    puts("Lispy Version 0.0.0.0.1");\n    puts("Press Ctrl+c to Exit\\n");\n\n    while(1) {\n        char* input = readline("lispy> ");\n\n        add_history(input);\n\n        printf("Now you\'re a %s\\n", input);\n\n        free(input);\n    }\n    return 0;\n}\n')),(0,r.kt)("p",null,"We have included a few new headers. There is ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <stdlib.h>"),", which gives us access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"free")," function used later on in the code. We have also added ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <editline/readline.h>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <editline/history.h>")," which give us access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"editline")," functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add_history"),"."),(0,r.kt)("p",null,"Instead of prompting, and getting input with ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets"),", we do it in one go using ",(0,r.kt)("inlineCode",{parentName:"p"},"readline"),". The result of this we pass to ",(0,r.kt)("inlineCode",{parentName:"p"},"add_history")," to record it. Finally, we print it out as before using ",(0,r.kt)("inlineCode",{parentName:"p"},"printf"),"."),(0,r.kt)("p",null,"Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," function strips the trailing newline character from the input, so we need to add this to our ",(0,r.kt)("inlineCode",{parentName:"p"},"printf")," function. We also need to delete the input given to us by the ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," function using ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),". This is because unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"fgets"),", which writes to some existing buffer, the ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," function allocates new memory when it is called. When to free memory is something we cover in depth in later chapters."),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"cc -std=c99 -Wall path/to/editline-prompt.c -ledit -o prompt ")," to compile the code, And you are good to go."),(0,r.kt)("h1",{id:"the-c-preprocessor"},"The C Preprocessor"),(0,r.kt)("p",null,"For such a small project it might be okay that we have to program differently depending on what operating system we are using, but if I want to send my source code to a friend on different operating system to give me a hand with the programming, it is going to cause problems. In an ideal world I'd wish for my source code to be able to compile no matter where, or on what computer, it is being compiled. This is a general problem in C, and it is called ",(0,r.kt)("strong",{parentName:"p"},"portability"),". There is not always an easy or correct solution."),(0,r.kt)("p",null,"But C does provide a mechanism to help, called the ",(0,r.kt)("strong",{parentName:"p"},"preprocessor"),"."),(0,r.kt)("p",null,"The preprocessor is a program that runs before the compiler. It has a number of purposes, and we've been actually using it already without knowing. Any line that starts with octothorpe ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," character (hash to you and me) is a preprocessor command. We've been using it to ",(0,r.kt)("strong",{parentName:"p"},"include")," header files, giving us access to functions from the standard library and others."),(0,r.kt)("p",null,"Another use of the preprocessor is to detect which operating system the code is being compiled on, and to use this to emit different code."),(0,r.kt)("p",null,"This is exactly how we are going to use it. If we are running Windows we're going to let the preprocessor emit code with some fake ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"add_history")," functions I've prepared, otherwise we are going to include the headers from ",(0,r.kt)("inlineCode",{parentName:"p"},"editline")," and use these."),(0,r.kt)("p",null,"To declare what code the compiler should emit we can wrap it in ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"#else"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"#endif")," preprocessor statements. These are like an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," function that happens before the code is compiled. All the contents of the file from the first ",(0,r.kt)("inlineCode",{parentName:"p"},"#ifdef")," to the next ",(0,r.kt)("inlineCode",{parentName:"p"},"#else")," are used if the condition is true, otherwise all the contents from the ",(0,r.kt)("inlineCode",{parentName:"p"},"#else")," to the final ",(0,r.kt)("inlineCode",{parentName:"p"},"#endif")," are used instead. By putting these around our fake functions, and our editline headers, the code that is emitted should compile on Windows, Linux or Mac."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\n#ifdef _WIN32\n#include <string.h>\n\nstatic char buffer[2048];\n\n/* Polyfill readline function */\nchar* readline(char* prompt) {\n    fputs(prompt, stdout);\n    fgets(buffer, 2048, stdin);\n    char* cpy = malloc(strlen(buffer)+1);\n    strcpy(cpy, buffer);\n    cpy[strlen(cpy)-1] = \'\\0\';\n    return cpy;\n}\n\n/* Polyfill add_history funtion*/\nvoid add_history(char* unused) {}\n\n#else\n#include <editline/readline.h>\n#endif\n\nint main(int argc, char** argv) {\n    puts("Lispy Version 0.0.0.0.1");\n    puts("Press Ctrl+c to Exit\\n");\n\n    while(1) {\n        char* input = readline("lispy> ");\n        add_history(input);\n\n        printf("Now you\'re a %s\\n", input);\n        free(input);\n    }\n    return 0;\n}\n')))}d.isMDXComponent=!0},79544:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/editline-prompt-aa5b0704fa818e1aabe9c5eed4524c19.c"},3209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/simple-prompt-2372c2b98c86312263ea83f015df0cc7.c"}}]);