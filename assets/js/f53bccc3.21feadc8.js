"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Garbage Collector in C",categories:["programming language","garbage collector"],tags:["garbage collector"]},i=void 0,l={permalink:"/blog/2018/11/14/garbage-collector-in-c",source:"@site/blog/2018-11-14-garbage-collector-in-c.md",title:"Garbage Collector in C",description:"This tutorial comes from here.",date:"2018-11-14T00:00:00.000Z",formattedDate:"November 14, 2018",tags:[{label:"garbage collector",permalink:"/blog/tags/garbage-collector"}],readingTime:10.895,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Garbage Collector in C",categories:["programming language","garbage collector"],tags:["garbage collector"]},prevItem:{title:"Simple Argv Parser for node",permalink:"/blog/2018/12/21/node-argv"},nextItem:{title:"Learn some jQuery",permalink:"/blog/2018/11/08/jquery"}},c={authorsImageUrls:[]},s=[{value:"reduce, reuse, recycle",id:"reduce-reuse-recycle",level:2},{value:"marking and sweeping",id:"marking-and-sweeping",level:2},{value:"a pair of objects",id:"a-pair-of-objects",level:2},{value:"a minimal virtual machine",id:"a-minimal-virtual-machine",level:2},{value:"marky mark",id:"marky-mark",level:2}],m={toc:s};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial comes from ",(0,r.kt)("a",{parentName:"p",href:"http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/"},"here"),"."),(0,r.kt)("p",null,"In this post, the author managed to whip up a basic ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Garbage_collection_(computer_science)#Na.C3.AFve_mark-and-sweep"},"mark-and-sweep")," collector."),(0,r.kt)("p",null,"Garbage collection is one of the more shark-infested waters of programming, but in this post, the author provide us a nice kiddie pool to paddle around in."),(0,r.kt)("h2",{id:"reduce-reuse-recycle"},"reduce, reuse, recycle"),(0,r.kt)("p",null,"The basic idea behind garbage collection is that the language appears to have access to infinite memory. The developer can just keep allocating and allocating and allocating and, as if by magic, it never fails."),(0,r.kt)("p",null,"Of course, machines don't have infinite memory. So the awy the implementation does this is that when it needs to allocate a bit of memory and realizes it's running low, it collects ",(0,r.kt)("em",{parentName:"p"},"garbage"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Garbage")," in this context means memory it previously allocated that is no longer being used. For the illusion of infinite memory to work, the language needs to be very safe about ",(0,r.kt)("em",{parentName:"p"},"no longer being used"),". It would be no fun if random objects just stared getting reclaimed while your program was trying to access them."),(0,r.kt)("p",null,"In order to be collectible, the language has to ensure there's no way for the program to use that object again. If it can't get a reference to object, then it obviously can't use it again. So the definition of ",(0,r.kt)("em",{parentName:"p"},"in use")," is actually pretty simple:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any object that's being referenced by a variable that's still in scope is in use.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Any object that's referenced by another object that's in use is in use."))),(0,r.kt)("p",null,"The second rule is the recursive one. If object A is referenced by a variable, and has some field that references object B, then B is in use since you can get to it through A."),(0,r.kt)("p",null,"The end result is a graph of ",(0,r.kt)("em",{parentName:"p"},"reachable")," objects - all the objects in the world you can get to by starting at a variable and traversing through objects. Any object ",(0,r.kt)("em",{parentName:"p"},"not")," in that graph of reachable objects is dead to the program and its memory is ripe for a reaping."),(0,r.kt)("h2",{id:"marking-and-sweeping"},"marking and sweeping"),(0,r.kt)("p",null,"There's a ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Garbage_collection_(computer_science)#Tracing_garbage_collectors"},"bunch of different")," ways you can implement the process of finding and reclaiming all the unused objects, but the simplest and first algorithm ever invented for it is called ",(0,r.kt)("strong",{parentName:"p"},"mark-sweep"),"."),(0,r.kt)("p",null,"It works almost exactly like our definition of reachability:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Starting at the roots, traverse the entire object graph. Every time you reach an object set a ",(0,r.kt)("em",{parentName:"p"},"mark")," bit on it to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once that's done, find all the objects whose mark bits are not set and delete them."))),(0,r.kt)("p",null,"That's it."),(0,r.kt)("h2",{id:"a-pair-of-objects"},"a pair of objects"),(0,r.kt)("p",null,"Before we can get to implementing those two steps, let's get a couple of preliminaries out of the way. We won't be actually implementing an interpreter for a language - no parser, bytecode, or any of that foolishness - but we do need some minimal amount of code to create some garbage to collect."),(0,r.kt)("p",null,"Let's play pretend we're writing an interpreter for a little language. It's dynamically typed, and has two types of objects: ",(0,r.kt)("strong",{parentName:"p"},"ints")," and ",(0,r.kt)("strong",{parentName:"p"},"pairs"),". Here's an enum to identify an object's type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef enum {\n    OBJ_INT,\n    OBJ_PAIR\n} ObjectType;\n")),(0,r.kt)("p",null,"A pair can be a pair of anything, two ints, an int and another pair, whatever. You can go surprisingly far with just that. Sine an object in the VM can be either of these, the typical way in C to implement it is with a ",(0,r.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Tagged_union"},"tagged union"),"."),(0,r.kt)("p",null,"We'll define it thus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct sObject {\n    ObjectType type;\n\n    union {\n        int value;\n\n        struct {\n            struct sObject* head;\n            struct sObject* tail;\n        };\n    };\n} Object;\n")),(0,r.kt)("p",null,"The main ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," struct has a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," field that identifies what kind of value it is - either an int or a pair. Then it has a union to hold the data for the int or pair. If your C is rusty, a union is a struct ",(0,r.kt)("em",{parentName:"p"},"where the fields overlap in memory"),". Since a given object can only be an int or a pair, there's no reason to have memory in a single object for all three fields at the same time. A union does that. Groovy."),(0,r.kt)("h2",{id:"a-minimal-virtual-machine"},"a minimal virtual machine"),(0,r.kt)("p",null,"Now we can wrap that in a little virtual machine structures. Its role in this story is to have a stack that stores the variables that are currently in scope. Most language VMs are either stack-based (like the JVM and CLR) or register-based (like Lua). In both cases, there is actually still a stack. It's used to store local variables and temporary variables needed in the middle of an expression."),(0,r.kt)("p",null,"We'll module that explicitly and simply like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define STACK_MAX 256\ntypedef struct {\n    Object* stack[STACK_MAX];\n    int stackSize;\n} VM;\n")),(0,r.kt)("p",null,"Now we've got our basic data structure in place, let' slap together a bit of code to create some stuff. First, let's write a function that creates and initializes a VM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"VM* newVM() {\n    VM* vm = malloc(sizeof(VM));\n    vm->stackSize = 0;\n    return vm;\n}\n")),(0,r.kt)("p",null,"Once we've got a VM, we need to be able to manipulate its stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void push(VM* vm, Object* value) {\n    assert(vm->stackSize < STACK_MAX, "Stack overflow!");\n    vm->stack[vm->stackSize++] = value;\n}\n\nObject* pop(VM* vm) {\n    assert(vm->stackSize > 0, "Stack underflow!");\n    return vm->stack[--vm->stackSize];\n}\n')),(0,r.kt)("p",null,"OK, now we can stick stuff in variables, we need to be able to actually create objects. First a little helper function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Object* newObject(VM* vm, ObjectType type) {\n    Object* object = malloc(sizeof(Object));\n    object->type = type;\n    return objcet;\n}\n")),(0,r.kt)("p",null,"That does the actual memory allocation and set the type tag. We'll be revisiting this in a bit. Using that, we can write functions to push each kind of object onto the VM's stack:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void pushInt(VM* vm, int intValue) {\n    Object* object = newObject(vm, OBJ_INT);\n    object->value = intVaule;\n    push(vm, object);\n}\n\nObject* pushPair(VM* vm) {\n    Object* object = newObject(vm, OBJ_PAIR);\n    object->tail = pop(vm);\n    object->head = pop(vm);\n\n    push(vm, object);\n    return object;\n}\n")),(0,r.kt)("p",null,"That's it for the little VM. If we had a parser, and an interpreter that called those functions, we'd have an honest to God language on our hands. And, if we had infinite memory, it would even be able to run real programs. Since we don't, let's start collecting some garbage."),(0,r.kt)("h2",{id:"marky-mark"},"marky mark"),(0,r.kt)("p",null,"The first phase is marking. We need to walk all the reachable objects and set their mark bit. The first thing we need then is to add a mark bit to ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct sObject {\n    unsigned char marked;\n    ObjectType type;\n\n    union {\n        int value;\n\n        struct {\n            struct sObject* head;\n            struct sObject* tail;\n        };\n    };\n} Object;\n")),(0,r.kt)("p",null,"When we create a new object, we'll modify ",(0,r.kt)("inlineCode",{parentName:"p"},"newObject()")," to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"marked")," to zero. To mark all the reachable objects, we start with the variables that are in memory, so that means walking the stack. That looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void mark(Object* object) {\n    object->marked = 1;\n}\n\nvoid markAll(VM* vm) {\n    for (int i = 0; i < vm->stackSize; i++) {\n        mark(vm->stack[i]);\n    }\n}\n")),(0,r.kt)("p",null,"This is the most important bit, literally. We've marked the object itself as reachable, but remember we also need to handle references in objects: reachability is ",(0,r.kt)("em",{parentName:"p"},"recursive"),". If the object is a pair, its two fields are reachable too. Handling that is simple, and we will do the checking for ",(0,r.kt)("em",{parentName:"p"},"cycles")," to avoid the loop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void mark(Object* object) {\n    if (object->marked) return;\n\n    object->marked = 1;\n\n    if (object->type == OBJ_PAIR) {\n        mark(object->head);\n        mark(object->tail);\n    }\n}\n")),(0,r.kt)("p",null,"Now we can call ",(0,r.kt)("inlineCode",{parentName:"p"},"markAll()")," and it will correctly mark every reachable object in memory."),(0,r.kt)("p",null,"*","*"," sweepy sweep"),(0,r.kt)("p",null,"The next phase is to sweep through all the objects we've allocated and free any of them that are not marked. But there's a problem here: all the unmarked objects are, by definition, unreachable!"),(0,r.kt)("p",null,"The VM has implemented the ",(0,r.kt)("em",{parentName:"p"},"language's")," semantics for objects references, so we're only storing pointers to objects in variables and the pair elements. As soon as an object is no longer pointed to by one of those, we've lost it entirely and actually leaked memory."),(0,r.kt)("p",null,"The trick to solve this is that the VM can have its ",(0,r.kt)("em",{parentName:"p"},"own")," references to objects that are distinct from the semantics that are visible the language user. In other words, we can keep track of them ourselves."),(0,r.kt)("p",null,"The simplest way to do this is to just maintain a linked list of every object we've ever allocated. We'll extend ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," itself to be a node in that list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct sObject {\n    /* the next object in the list of all objects */\n    struct sObject* next;\n\n    unsigned char marked;\n\n    ObjectType type;\n\n    union {\n        int value;\n\n        struct {\n            struct sObject* head;\n            struct sObject* tail;\n        };\n    };\n} Object;\n")),(0,r.kt)("p",null,"The VM will keep track of the head of that list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define STACK_MAX 256\n\ntypedef struct {\n    /* the first object in the list of all objects */\n    Object* firstObject;\n\n    Object* stack[STACK_MAX];\n    int stackSize;\n} VM;\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"newVM()")," we'll make sure to initialize ",(0,r.kt)("inlineCode",{parentName:"p"},"firstObject")," to NULL. Whenever we create an object, we add it to the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Object* newObject(VM* vm, ObjectType type) {\n    Object* object = malloc(sizeof(Object));\n    object->type = type;\n    object->marked = 0;\n\n    /* insert it into the list of allocated objcets */\n    object->next = vm->firstObject;\n    vm->firstObject = object;\n\n    return object;\n}\n")),(0,r.kt)("p",null,"This way, even if the ",(0,r.kt)("em",{parentName:"p"},"language")," can't find an object, the language ",(0,r.kt)("em",{parentName:"p"},"implementation")," still can. To sweep through and delete the unmarked objects, we just need to traverse the list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void sweep(VM* vm) {\n    Object** object = &vm->firstObject;\n\n    while(*object) {\n        if (!(*object)->marked) {\n            /* This object wasn't reached, so remove it from the list and free it. */\n            Object* unreached = *object;\n            *object = unreached->next;\n            free(unreached);\n        } else {\n            /* This object was reached, so unmarkd it (for the next GC) and move on to the next. */\n            (*object)->marked = 0;\n            object = &(*object)->next;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"That code is a bit tricky to read because of that pointer to a pointer, but if you walk through, you can see it's pretty straightforward. It just walks the entire linked list. Whenever it hits an object that isn't marked, it frees its memory and removes it from the list. When this is done, we will have deleted every unreachable object."),(0,r.kt)("p",null,"Congratulation! We have a garbage collector! There's just one missing piece: actually calling it. First let's wrap the two phases together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void gc(VM* vm) {\n    markAll(vm);\n    sweep(vm);\n}\n")),(0,r.kt)("p",null,'You couldn\'t ask for a more obvious mark-sweep implementation. The trickiest part is figuring out when to actually call this. What does "low on memory" even mean, especially on modern computers with near-infinite virtual memory?'),(0,r.kt)("p",null,"It turns out there's no precise right or wrong answer here. It really depends on what you're using the VM for and what kind of hardware it runs on."),(0,r.kt)("p",null,"We'll extend ",(0,r.kt)("inlineCode",{parentName:"p"},"VM")," to track how many we've created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"typedef struct {\n    /* The total number of currently allocated objects */\n    int numObjects;\n\n    /* The number of objects required to trigger a GC */\n    int maxObjects;\n\n    Object* firstObject;\n\n    Object* stack[STACK_MAX];\n    int stackSize;\n} VM;\n")),(0,r.kt)("p",null,"And then initialize them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"VM* newVM() {\n\n    VM* vm = malloc(sizeof(VM));\n    vm->stackSize = 0;\n\n    vm->numObjects = 0;\n    vm->maxObjects = INITIAL_GC_THRESHOLD;\n\n    return vm;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"INITIAL_GC_THRESHOLD")," will be the number of objects at which you kick off the ",(0,r.kt)("em",{parentName:"p"},"first")," GC. A smaller number is more conservative with memory, a large number spends less time on garbage collection."),(0,r.kt)("p",null,"Whenever we create an object, we increment ",(0,r.kt)("inlineCode",{parentName:"p"},"numObject")," and run a collection if it reaches the max:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"Object* newObject(VM* vm, ObjectType type) {\n    if (vm->numObjects == vm->maxObjects) gc(vm);\n\n    Object* object = malloc(sizeof(Object));\n    object->type = type;\n    object->marked = 0;\n\n    object->next = vm->firstObject;\n    vm->firstObject = object;\n\n    vm->numObjects++;\n    return object;\n}\n")),(0,r.kt)("p",null,"We\u2019ll also tweak ",(0,r.kt)("inlineCode",{parentName:"p"},"sweep()")," to decrement numObjects every time it frees one."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void sweep(VM* vm) {\n    Object** object = &vm->firstObject;\n\n    while(*object) {\n        if (!(*object)->marked) {\n            /* This object wasn't reached, so remove it from the list and free it. */\n            Object* unreached = *object;\n            *object = unreached->next;\n            free(unreached);\n            vm->numObjects--;\n        } else {\n            /* This object was reached, so unmarkd it (for the next GC) and move on to the next. */\n            (*object)->marked = 0;\n            object = &(*object)->next;\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Finally, we modify ",(0,r.kt)("inlineCode",{parentName:"p"},"gc()")," to adjust the max:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void gc(VM* vm) {\n    markAll(vm);\n    sweep(vm);\n\n    vm->maxObjects = vm->numObjects * 2;\n}\n")),(0,r.kt)("p",null,"After every collection, we update ",(0,r.kt)("inlineCode",{parentName:"p"},"maxObjects")," based on the number of ",(0,r.kt)("em",{parentName:"p"},"live")," objects left after the collection. The multiplier there lets our heap grow as the number of living objects increases. Likewise, it will shrink automatically if a bunch of objects end up being freed."),(0,r.kt)("p",null,"There are a ton of optimizations you can build on top of this (and in things like GC and programming languages, optimization is 90% of the effort), but the core code here is a legitimate real GC. It\u2019s very similar to the collectors that were in Ruby and Lua until recently. You can ship production code that uses something exactly like this. Now go build something awesome!"),(0,r.kt)("p",null,"As for the ",(0,r.kt)("a",{target:"_blank",href:n(51592).Z},"source code")," and the ",(0,r.kt)("a",{target:"_blank",href:n(29974).Z},"Makefile"),"."),(0,r.kt)("p",null,"Related ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/munificent/mark-sweep"},"git repo"),"."))}p.isMDXComponent=!0},29974:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Makefile-fbd4f1681498f5ed3737222ca468f1a9.txt"},51592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/main-82751ff00ff66348470c758f921c1af5.c"}}]);