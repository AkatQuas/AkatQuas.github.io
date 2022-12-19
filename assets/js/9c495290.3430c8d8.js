"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Monitoring and Logging",sidebar_position:12},i=void 0,s={unversionedId:"kubernetes/monitoring-n-logging",id:"kubernetes/monitoring-n-logging",title:"Monitoring and Logging",description:"It's importance to not just monitor the cluster pieces but also monitor the cluster functionality that users require.",source:"@site/docs/kubernetes/monitoring-n-logging.md",sourceDirName:"kubernetes",slug:"/kubernetes/monitoring-n-logging",permalink:"/docs/kubernetes/monitoring-n-logging",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Monitoring and Logging",sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Storage and Running Stateful Applications",permalink:"/docs/kubernetes/pv-pvc"},next:{title:"Cheatsheet",permalink:"/docs/kubernetes/cheatsheet"}},l={},p=[{value:"Monitoring operations",id:"monitoring-operations",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's importance to not just monitor the cluster pieces but also monitor the cluster functionality that users require."),(0,a.kt)("p",null,"In this case, the best type of monitoring would be a blackbox monitor that continuously deploys a new Pod and Service and that validates that the Service discovery works as expected."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Differences Between Logging and Monitoring")),(0,a.kt)("p",null,"Though closely related, they are actually quite different and are used for different problems and often stored in different infrastructure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"logging records events (e.g., a Pod being created or an API call failing), which is discrete.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"monitoring records statistics (e.g., the latency of a particular request, the CPU used by a process, or the number of requests to a particular endpoint), which is a sampling of some continuous value."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"tech-stacks")),(0,a.kt)("p",null,"Prometheus, ElasticSearch, Logstash, Kibana, InfluxDB, Grafana, FluentD, Prometheus"),(0,a.kt)("h2",{id:"monitoring-operations"},"Monitoring operations"),(0,a.kt)("p",null,"Best practices in monitoring are to measure the performance and usage of core resources and watch for trends that stray from the normal baseline."),(0,a.kt)("p",null,"A key component to managing our Kubernetes cluster is having a clear view into ",(0,a.kt)("strong",{parentName:"p"},"performance and availability")," of the OS, network, system (CPU and memory), and storage resources across all nodes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"kubelet"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kublet"),", which runs on every node in the cluster, is the main interface for nodes to interact and update the API server."),(0,a.kt)("p",null,"One such update is the ",(0,a.kt)("em",{parentName:"p"},"metrics")," of the node resources. The actual reporting of the resource usage is performed by a program named ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/cadvisor"},(0,a.kt)("inlineCode",{parentName:"a"},"cAdvisor")),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cAdvisor")," is another open-source project from Google, which provides various metrics on container resource use. Metrics include CPU, memory, and network statistics."),(0,a.kt)("p",null,"There is no need to tell ",(0,a.kt)("inlineCode",{parentName:"p"},"cAdvisor")," about individual containers; it ",(0,a.kt)("em",{parentName:"p"},"collects the metrics for all containers on a node")," and reports this back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"kublet"),", which in turn reports to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-retired/heapster"},(0,a.kt)("inlineCode",{parentName:"a"},"Heapster")),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Heapster")," runs in a container on one of the minion nodes and aggregates the data from kubelet. A simple REST interface is provided to query the data."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"InfluxDB")," is based on a key store package and is perfect to store and query event\u2014or time-based statistics such as those provided by Heapster."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Grafana")," which provides a dashboard and graphing interface for the data stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"InfluxDB"),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Grafana"),", users can create a custom monitoring dashboard and get immediate visibility into the health of their Kubernetes cluster and therefore their entire container infrastructure."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"FluentD")," is a collector. It can be configured to have multiple sources to collect and tag logs, which are then sent to various output points for analysis, alerting, or archiving. We can even transform data using plugins before it is passed on to its destination."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prometheus")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A multi-dimensional ",(0,a.kt)("em",{parentName:"li"},"data model")," (time series identified by metric name and key/value pairs)"),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("em",{parentName:"li"},"flexible query language")," to leverage this dimensionality"),(0,a.kt)("li",{parentName:"ul"},"No reliance on distributed storage; single server nodes are autonomous"),(0,a.kt)("li",{parentName:"ul"},"Time series collection happens via a pull model over HTTP"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"pushing time series")," is supported via an intermediary gateway"),(0,a.kt)("li",{parentName:"ul"},"Targets are discovered via service discovery or static configuration"),(0,a.kt)("li",{parentName:"ul"},"Multiple modes of graphing and dashboard support")),(0,a.kt)("p",null,"To Be Continued"))}c.isMDXComponent=!0}}]);