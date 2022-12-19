"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={title:"the Kubernetes Scheduler",sidebar_position:4},r=void 0,s={unversionedId:"kubernetes/scheduler",id:"kubernetes/scheduler",title:"the Kubernetes Scheduler",description:"There is a dedicated binary in the Kubernetes, which is called the Kubernetes scheduler, to schedule containers to work nodes in the cluster of machines.",source:"@site/docs/kubernetes/scheduler.md",sourceDirName:"kubernetes",slug:"/kubernetes/scheduler",permalink:"/docs/kubernetes/scheduler",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"the Kubernetes Scheduler",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"the Kubernetes API Server",permalink:"/docs/kubernetes/api-server"},next:{title:"Kubernetes Constructs",permalink:"/docs/kubernetes/constructs"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Scheduling Process",id:"scheduling-process",level:2},{value:"Predicates",id:"predicates",level:3},{value:"Priorites",id:"priorites",level:3},{value:"High-Level algorithm",id:"high-level-algorithm",level:3},{value:"Conflicts",id:"conflicts",level:2},{value:"Controlling Scheduling with Labels, Affinity, Taints, and Tolerations",id:"controlling-scheduling-with-labels-affinity-taints-and-tolerations",level:2},{value:"Node Selector",id:"node-selector",level:3},{value:"Node Affinity",id:"node-affinity",level:3},{value:"Taints and Tolerations",id:"taints-and-tolerations",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There is a dedicated binary in the Kubernetes, which is called the Kubernetes scheduler, to schedule containers to work nodes in the cluster of machines."),(0,o.kt)("p",null,"Kubernetes can handle a wide variety of work\u2010 loads, from stateless web serving to stateful applications, big data batch jobs, or machine learning on GPUs. The key to ensuring that all of these very different applications can operate in harmony on the same cluster lies in the application of ",(0,o.kt)("em",{parentName:"p"},"job scheduling"),", which ensures that each container is placed onto the worker node best suited to it."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"When a Pod is first created, it generally doesn't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," field. The ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," indicates the node on which the Pod should execute."),(0,o.kt)("p",null,"The Kubernetes scheduler is constantly scanning the API server (via a ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")," request) for Pods that don't have a ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName"),"; these are Pods that are eligible for scheduling."),(0,o.kt)("p",null,"The scheduler then selects an appropriate node for the Pod and updates the Pod definition with the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," that the scheduler selected. After the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," is set, the kubelet running on that node is notified about the Pod\u2019s existence (again, via a ",(0,o.kt)("inlineCode",{parentName:"p"},"watch")," request) and it begins to actually execute that Pod on that node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to skip the scheduler, you can always set the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeName")," yourself on a Pod. This direct schedules a Pod onto a specific node. This is how the ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSet")," controller schedules a single Pod onto each node in the cluster.")),(0,o.kt)("h2",{id:"scheduling-process"},"Scheduling Process"),(0,o.kt)("p",null,"When the scheduler discovers a Pod that hasn't been assigned to a node, it needs to determine which node to schedule the Pod onto. In general, the scheduler is trying to optimize a variety of different criteria to find the node that is best for the particular Pod."),(0,o.kt)("h3",{id:"predicates"},"Predicates"),(0,o.kt)("p",null,"Simply stated, a ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," indicates whether a Pod fits onto a particular node. Predicates are hard constraints, which, if violated, lead to a Pod not operating correctly (or at all) on that node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An example of a predicate is a node-selector label query specified by the user. In this case, the user has requested that a Pod only run on certain machines as indicated by the node labels. The predicate is false if a node does not have the required label.")),(0,o.kt)("h3",{id:"priorites"},"Priorites"),(0,o.kt)("p",null,"There is a generic interface used by the scheduler to determine preference for one node over another. These preferences are expressed as ",(0,o.kt)("inlineCode",{parentName:"p"},"priorities")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"priority functions"),". The role of a priority function is to score the relative value of scheduling a Pod onto a particular node."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As an example, a priority function would weight nodes where the image has already been pulled. Therefore, the container would start faster than nodes where the image is not present and would have to be pulled, delaying Pod startup.")),(0,o.kt)("p",null,"One important priority function is the ",(0,o.kt)("inlineCode",{parentName:"p"},"spreading")," function. This function is responsible for prioritizing nodes where Pods that are members of the same Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," are not present. It is used to ensure reliability, since it reduces the chances that a machine failure will disable all containers in a particular Service."),(0,o.kt)("h3",{id:"high-level-algorithm"},"High-Level algorithm"),(0,o.kt)("p",null,"For every Pod that needs scheduling, the scheduling algorithm is run. At a high level, the algorithm looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"schedule(pod): string\n  nodes := getAllHealthyNodes()\n  viableNodes := []\n  for node in nodes:\n    for predicate in predicates:\n      if predicate(node, pod):\n        viableNodes.append(node)\n  scoredNodes := PriorityQueue<score, Node[]>\n  priorities := GetPriorityFunctions()\n  for node in viableNodes:\n    score = CalculateCombinedPriority(node, pod, priorities)\n    scoredNodes[score].push(node)\n\n  bestScore := scoredNodes.top().score\n  selectedNodes := []\n  while scoredNodes.top().score == bestScore:\n    selectedNodes.append(scoredNodes.pop())\n\n  node := selectAtRandom(selectedNodes) // RoundRobin selection\n  return node.Name\n")),(0,o.kt)("h2",{id:"conflicts"},"Conflicts"),(0,o.kt)("p",null,"Because there is lag time between when a Pod is scheduled (time ",(0,o.kt)("inlineCode",{parentName:"p"},"T_1"),") and when the container actually executes (time ",(0,o.kt)("inlineCode",{parentName:"p"},"T_N"),"), the scheduling decision may become invalid, due to other actions during the time interval between scheduling and execution."),(0,o.kt)("p",null,"In general, these sorts of soft-constraint conflicts aren't that important and they normalize in the aggregate. These conflicts are thus ignored by Kubernetes. ",(0,o.kt)("em",{parentName:"p"},"Scheduling decisions are only optimal for a single moment in time"),"\u2014they can always become worse when time passes and the cluster changes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should always run Pods (even singletons) via a ReplicaSet or Deployment.")),(0,o.kt)("h2",{id:"controlling-scheduling-with-labels-affinity-taints-and-tolerations"},"Controlling Scheduling with Labels, Affinity, Taints, and Tolerations"),(0,o.kt)("h3",{id:"node-selector"},"Node Selector"),(0,o.kt)("p",null,"Every object in Kubernetes has an associated set of ",(0,o.kt)("inlineCode",{parentName:"p"},"labels"),". Labels provide identifying metadata for Kubernetes objects, and ",(0,o.kt)("inlineCode",{parentName:"p"},"label selectors")," are often used to dynamically identify sets of API objects for various operations."),(0,o.kt)("p",null,"Label selectors can also be used to identify a subset of the nodes in a Kubernetes cluster that should be used for scheduling a particular Pod. By default, all nodes in the cluster are potential candidates for scheduling, but by filling in the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.nodeSelector")," field in a Pod or PodTemplate, the initial set of nodes can be reduced to a subset."),(0,o.kt)("p",null,"Kubernetes has a default predicate that requires every node to match the ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," label query, if it is present."),(0,o.kt)("h3",{id:"node-affinity"},"Node Affinity"),(0,o.kt)("p",null,"Node selectors provide a simple way to guarantee that a Pod lands on a particular node, but they lack flexibility."),(0,o.kt)("p",null,"Affinity is a more complicated structure to understand, but it is significantly more flexible if you want to express more complicated scheduling policies."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/assign-pods-nodes-using-node-affinity/"},"More on here")),(0,o.kt)("h3",{id:"taints-and-tolerations"},"Taints and Tolerations"),(0,o.kt)("p",null,"A node taint is exactly what it sounds like. When a taint is applied to a node, the node is considered tainted and will be excluded by default from scheduling. Any tainted node will fail a predicate check at the time of scheduling."),(0,o.kt)("p",null,"This toleration enables the scheduling predicate to pass and thus allows for the node to schedule onto the tainted machine."),(0,o.kt)("p",null,"It is important to note that, although a toleration for a taint enables a Pod to run on a tainted machine, it does not require that the Pod runs on the tainted machine."),(0,o.kt)("p",null,"Indeed, all priorities run just as before and, thus, all machines in the cluster are available to execute on."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Forcing a Pod onto a particular machine is a use case for nodeSelectors or affinity as described earlier.")))}u.isMDXComponent=!0}}]);