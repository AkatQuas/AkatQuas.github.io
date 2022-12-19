"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Introduction on Concurrency and Parallelism",sidebar_position:2},i=void 0,s={unversionedId:"concurrency-in-go/introduction",id:"concurrency-in-go/introduction",title:"Introduction on Concurrency and Parallelism",description:"Why is Concurrency hard?",source:"@site/docs/concurrency-in-go/introduction.md",sourceDirName:"concurrency-in-go",slug:"/concurrency-in-go/introduction",permalink:"/docs/concurrency-in-go/introduction",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Introduction on Concurrency and Parallelism",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Go Concurrency Again",permalink:"/docs/concurrency-in-go/"},next:{title:"Concurrency Primitives",permalink:"/docs/concurrency-in-go/primitives"}},l={},c=[{value:"Why is Concurrency hard?",id:"why-is-concurrency-hard",level:2},{value:"The Difference Between Concurrency and Parallelism",id:"the-difference-between-concurrency-and-parallelism",level:2},{value:"Communicating Sequential Processes",id:"communicating-sequential-processes",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"why-is-concurrency-hard"},"Why is Concurrency hard?"),(0,r.kt)("p",null,"It brings us"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"race condition")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"atomicity loss")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"memory access synchronization failure")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"deadlocks, livelocks, and starvation."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In fact, there\u2019s a name for a section of your program that needs exclusive access to a shared resource. This is called a ",(0,r.kt)("em",{parentName:"p"},"critical section"),".")),(0,r.kt)("p",null,"When interfacing with some concurrency-like code, these code should come with important comment that covers these aspects:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Who is responsible for the concurrency?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"How is the problem space mapped onto concurrency primitives?")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Who is responsible for the synchronization?"))),(0,r.kt)("p",null,"Go\u2019s runtime does most of the heavy lifting and provides the foundation for most of Go\u2019s concurrency niceties. For example, you would write a function and then prepend its invocation with the ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," keyword to start the thread. The runtime handles everything else we discussed automatically."),(0,r.kt)("p",null,"Go\u2019s runtime also automatically handles multiplexing concurrent operations onto operating system threads."),(0,r.kt)("p",null,"The low-latency garbage collector in Go is implemented through concurrency."),(0,r.kt)("h2",{id:"the-difference-between-concurrency-and-parallelism"},"The Difference Between Concurrency and Parallelism"),(0,r.kt)("p",null,"In conversations, the two terms are often used interchangeably to mean ",(0,r.kt)("em",{parentName:"p"},"something that runs at the same time as something else.")," Sometimes using the word ",(0,r.kt)("em",{parentName:"p"},"parallel")," in this context is correct, but usually if we are discussing code, we really ought to be using the word ",(0,r.kt)("em",{parentName:"p"},"concurrent"),"."),(0,r.kt)("p",null,"The difference between ",(0,r.kt)("em",{parentName:"p"},"concurrency")," and ",(0,r.kt)("em",{parentName:"p"},"parallelism")," turns out to be a very powerful abstraction when modeling your code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Concurrency is a property of the code; parallelism is a property of the running program.")),(0,r.kt)("p",null,"The chunks of our program code may appear to be running in parallel, but really they\u2019re executing in a sequential manner ",(0,r.kt)("em",{parentName:"p"},"faster than is distinguishable"),". If we were to run the same binary on a machine with two cores, the program\u2019s chunks might actually be running in parallel. This reveals a few interesting and important things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first is that ",(0,r.kt)("em",{parentName:"p"},"we do not write parallel code"),", ",(0,r.kt)("strong",{parentName:"p"},"only concurrent code that we hope will be run in parallel"),". Once again, parallelism is a property of the runtime of our program, not the code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The second interesting thing is that we see it is possible\u2014maybe even desirable\u2014to ",(0,r.kt)("strong",{parentName:"p"},"be ignorant of")," whether our concurrent code is actually running in parallel, which is only made possible by the layers of abstraction that lie beneath our program\u2019s model: the concurrency primitives, the program\u2019s runtime, the operating system, the platform the operating system runs on (in the case of hypervisors, containers, and virtual machines), and ultimately the CPUs.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The third and final interesting thing is that parallelism is a function of time, or context. This context is defined as the bounds by which two or more operations could be considered parallel. For example, if our context was a space of five seconds, and we ran two operations that each took a second to run, we would consider the operations to have run in parallel. If our context was one second, we would consider the operations to have run sequentially."))),(0,r.kt)("p",null,"It's obvious that most concurrent logic in our industry is written at one of the highest levels of abstraction: OS threads. If you wanted to write concurrent code, you would model your program in terms of threads and synchronize the access to the memory between them. If you had a lot of things you had to model concurrently and your machine couldn't handle that many threads, you created a thread pool and multiplexed your operations onto the thread pool."),(0,r.kt)("p",null,"However, Go has added another link in that chain: the ",(0,r.kt)("inlineCode",{parentName:"p"},"goroutine"),". In addition, Go has borrowed several concepts from the work of famed computer scientist Tony Hoare, and introduced new primitives for us to use, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"channels"),"."),(0,r.kt)("p",null,"To be further, ",(0,r.kt)("inlineCode",{parentName:"p"},"goroutine")," doesn't really added another layer of abstraction on top of OS threads, it has just supplanted them. Threads are still there, of course, but the developers find that they rarely have to think about our problem space in terms of OS threads. Instead, they model things in ",(0,r.kt)("inlineCode",{parentName:"p"},"goroutines")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"channels"),", and ",(0,r.kt)("em",{parentName:"p"},"occasionally shared memory"),"."),(0,r.kt)("h2",{id:"communicating-sequential-processes"},"Communicating Sequential Processes"),(0,r.kt)("p",null,"In a CSP programming language, inputs and outputs needed to be considered language primitives. This primitive can model input and output, or ",(0,r.kt)("em",{parentName:"p"},"communication"),", ",(0,r.kt)("em",{parentName:"p"},"between processes")," correctly."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Just because there is a framework available for a language that abstracts the concerns of parallelism away for you, doesn't mean this natural way of modeling concurrent problems does not matter! Someone has to write the framework, and your code will be sitting on top of whatever complexity the author(s) had to deal with. Just because the complexity is hidden from you doesn't mean it\u2019s not there, and complexity breeds bugs. In the case of Go, the language was designed around concurrency, so the language is not incongruent with the concurrency primitives it provides. This means less friction and fewer bugs!")),(0,r.kt)("p",null,"Go\u2019s runtime multiplexes goroutines onto OS threads automatically and manages their scheduling for us. This means that optimizations to the runtime can be made without us having to change how we\u2019ve modeled our problem; this is classic separation of concerns. As advancements in parallelism are made, Go\u2019s runtime will improve, as will the performance of your program."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"channels"),", for instance, are inherently composable with other channels. This makes writing large systems simpler because you can coordinate the input from multiple subsystems by easily composing the output together. You can combine input channels with timeouts, cancellations, or messages to other subsystems. Coordinating mutexes is a much more difficult proposition."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statement is the ",(0,r.kt)("em",{parentName:"p"},"complement")," to Go\u2019s channels and is what enables all the difficult bits of composing channels. ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statements allow you to efficiently wait for events, select a message from competing channels in a uniform random way, continue on if there are no messages waiting, and more."),(0,r.kt)("p",null,"CSP was and is a large part of what Go was designed around; however, Go also supports more traditional means of writing concurrent code through memory access synchronization and the primitives that follow that technique. Structs and methods in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sync")," and other packages allow you to perform ",(0,r.kt)("em",{parentName:"p"},"locks"),", create ",(0,r.kt)("em",{parentName:"p"},"pools of resources"),", preempt ",(0,r.kt)("em",{parentName:"p"},"goroutines"),", and more."),(0,r.kt)("p",null,"One of Go\u2019s mottos is ",(0,r.kt)("strong",{parentName:"p"},"Share memory by communicating, don't communicate by sharing memory"),"."),(0,r.kt)("p",null,"That said, Go does provide traditional locking mechanisms in the sync package. Most locking issues can be solved using either channels or traditional locks."),(0,r.kt)("p",null,"So which should you use? Use whichever is most expressive and/or most simple."),(0,r.kt)("img",{src:"./decision-tree.png",alt:"Primitives or Channel"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Are you trying to transfer ownership of data?"),(0,r.kt)("p",{parentName:"li"},"If you have a bit of code that produces a result and wants to share that result with another bit of code, what you\u2019re really doing is transferring ownership of that data. If you\u2019re familiar with the concept of memory-ownership in languages that don't support garbage collection, this is the same idea: data has an owner, and one way to make concurrent programs safe is to ensure only one concurrent context has ownership of data at a time. Channels help us communicate this concept by encoding that intent into the channel\u2019s type."),(0,r.kt)("p",{parentName:"li"},"One large benefit of doing so is you can create buffered channels to implement a cheap in-memory queue and thus decouple your producer from your consumer. Another is that by using channels, you\u2019ve implicitly made your concurrent code ",(0,r.kt)("em",{parentName:"p"},"composable")," with other concurrent code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Are you trying to guard internal state of a struct?"),(0,r.kt)("p",{parentName:"li"},"This is a great candidate for memory access synchronization primitives, and a pretty strong indicator that you shouldn't use channels. By using memory access synchronization primitives, you can hide the implementation detail of locking your critical section from your callers. Here\u2019s a small example of a type that is thread-safe, but doesn't expose that complexity to its callers:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Counter struct {\n  mu sync.Mutex\n  value int\n}\n\nfunc (c *Counter) Increment() {\n  c.mu.Lock()\n  defer c.mu.Unlock()\n  c.value++\n}\n")),(0,r.kt)("p",{parentName:"li"},"If you recall the concept of atomicity, we can say that what we\u2019ve done here is defined the scope of atomicity for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Counter")," type. Calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"Increment")," can be considered ",(0,r.kt)("em",{parentName:"p"},"atomic"),"."),(0,r.kt)("p",{parentName:"li"},"Remember the key word here is ",(0,r.kt)("em",{parentName:"p"},"internal"),". If you find yourself exposing locks beyond a type, this should raise a red flag. Try to keep the locks constrained to a small lexical scope.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Are you trying to coordinate multiple pieces of logic?"),(0,r.kt)("p",{parentName:"li"},"Remember that channels are inherently more composable than memory access synchronization primitives. Having locks scattered throughout your object-graph sounds like a nightmare, but having channels everywhere is expected and encouraged! I can compose channels, but I can't easily compose locks or methods that return values."),(0,r.kt)("p",{parentName:"li"},"You will find it much easier to control the emergent complexity that arises in your software if you use channels because of Go\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statement, and their ability to serve as queues and be safely passed around. If you find yourself struggling to understand how your concurrent code works, why a deadlock or race is occurring, and you\u2019re using primitives, this is probably a good indicator that you should switch to channels.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Is it a performance-critical section?"),(0,r.kt)("p",{parentName:"li"},"This absolutely does not mean, \u201cI want my program to be performant, therefore I will only use mutexes.\u201d Rather, if you have a section of your program that you have profiled, and it turns out to be a major bottleneck that is orders of magnitude slower than the rest of the program, using memory access synchronization primitives may help this critical section perform under load. This is because channels use memory access synchronization to operate, therefore they can only be slower. Before we even consider this, however, a performance-critical section might be hinting that we need to restructure our program."))),(0,r.kt)("p",null,"Stick to modeling your problem space with goroutines, use them to represent the concurrent parts of your workflow, and don't be afraid to be liberal when starting them. Go\u2019s philosophy on concurrency can be summed up like this: aim for simplicity, use channels when possible, and treat goroutines like a free resource."))}p.isMDXComponent=!0}}]);