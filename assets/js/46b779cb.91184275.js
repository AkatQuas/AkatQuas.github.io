"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Authentication, User Management, Authorization and Admission Control",sidebar_position:6},o=void 0,s={unversionedId:"kubernetes/authentication-authorization",id:"kubernetes/authentication-authorization",title:"Authentication, User Management, Authorization and Admission Control",description:"As with any multitenant, distributed system, user management forms the basis for how Kubernetes ultimately authenticates identities, determines appropriate levels of access, enables self-service capabilities, and maintains auditability.",source:"@site/docs/kubernetes/authentication-authorization.md",sourceDirName:"kubernetes",slug:"/kubernetes/authentication-authorization",permalink:"/docs/kubernetes/authentication-authorization",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Authentication, User Management, Authorization and Admission Control",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Constructs",permalink:"/docs/kubernetes/constructs"},next:{title:"Networking, Load Balancers, Ingress",permalink:"/docs/kubernetes/networking"}},l={},u=[{value:"User",id:"user",level:2},{value:"Authentication",id:"authentication",level:2},{value:"kubeconfig",id:"kubeconfig",level:3},{value:"Service Accounts",id:"service-accounts",level:3},{value:"REST",id:"rest",level:2},{value:"Authorization",id:"authorization",level:2},{value:"Role-Based Access Control",id:"role-based-access-control",level:3},{value:"Admission Control",id:"admission-control",level:2},{value:"Common Controllers",id:"common-controllers",level:3},{value:"Dynamic Admission Controllers",id:"dynamic-admission-controllers",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As with any multitenant, distributed system, user management forms the basis for how Kubernetes ultimately authenticates identities, determines appropriate levels of access, enables self-service capabilities, and maintains auditability."),(0,i.kt)("p",null,"Before the server will accept (and subsequently act) on the request. Each of these tests falls into one of three groups: authentication, access control, and admission control."),(0,i.kt)("h2",{id:"user"},"User"),(0,i.kt)("p",null,"Every request that comes to Kubernetes is associated with some identity. Even a request with no identity is associated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"system:unauthenticated")," group."),(0,i.kt)("p",null,"The term ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," pertains to how you and I (and maybe even your continuous delivery tooling) connect and gain access to the Kubernetes API."),(0,i.kt)("p",null,"There are many kinds of access to the Kubernetes API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," command-line interface"),(0,i.kt)("li",{parentName:"ul"},"custom scripts"),(0,i.kt)("li",{parentName:"ul"},"static token files on the host"),(0,i.kt)("li",{parentName:"ul"},"controllers"),(0,i.kt)("li",{parentName:"ul"},"the web user interface"),(0,i.kt)("li",{parentName:"ul"},"authentication webhooks")),(0,i.kt)("p",null,"The users are not a top-level supported resource, which are not manipulated directly by way of the Kubernetes API, but are defined in an external user identity management system."),(0,i.kt)("p",null,"There is good reason for this\u2014it stands in support of good user management hygiene."),(0,i.kt)("p",null,"How you manage your users should remain consistent across your organization, regardless of the systems consuming it. Kubernetes supports this design tenet by providing the connectivity to leverage these existing systems, thus enabling consistent and effective user management across your infrastructure."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The absence of such systems does not mean that you won't be able to use Kubernetes. It may just mean you may need to leverage a different mechanism for authenticating users."),(0,i.kt)("p",null,"Just as with many well-designed REST-based APIs, there are multiple strategies that Kubernetes can employ for authenticating users. We can think about each of these strategies as belonging to one of three major groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Basic Authentication"),(0,i.kt)("li",{parentName:"ul"},"X.509 client certificates"),(0,i.kt)("li",{parentName:"ul"},"Bearer tokens")),(0,i.kt)("h3",{id:"kubeconfig"},"kubeconfig"),(0,i.kt)("p",null,"We need to craft a kubeconfig file that records the details of how we authenticate."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," uses this configuration file to determine where and how to issue requests to the API server. This file is typically located in your home directory under ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.kube/config")," but may also be specified explicitly on the command line with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--kubeconfig")," parameter or by way of the ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable."),(0,i.kt)("p",null,"For someone who may not be familiar with a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file, it is important to understand its three top-level structures: ",(0,i.kt)("inlineCode",{parentName:"p"},"users"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clusters"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"contexts"),". With ",(0,i.kt)("inlineCode",{parentName:"p"},"users")," we name a user and provide the mechanism by which he or she will authenticate to a cluster. The ",(0,i.kt)("inlineCode",{parentName:"p"},"clusters")," attribute provides all data necessary to connect to a cluster. This, minimally, includes the IP or fully qualified domain name for the API server but may also include items like the CA bundle for a ",(0,i.kt)("em",{parentName:"p"},"self-signed certificate"),". And ",(0,i.kt)("inlineCode",{parentName:"p"},"contexts")," is where we associate users with clusters as a single named entity. The ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," serves as the means by which ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," connects and authenticates to an API server."),(0,i.kt)("h3",{id:"service-accounts"},"Service Accounts"),(0,i.kt)("p",null,"There is another important use case to consider though, and this pertains to how the processes running inside a Pod access the API."),(0,i.kt)("p",null,"A Kubernetes cluster is a state machine made up of a collection of controllers. Each of these controllers is responsible for reconciling the state of the user-specified resources."),(0,i.kt)("p",null,"The way that Kubernetes handles these use cases is using the ServiceAccount resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create sa testsa\nkubectl get sa testsa -o yaml\n")),(0,i.kt)("p",null,"In the output above, note that when we created the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", a Secret named ",(0,i.kt)("inlineCode",{parentName:"p"},"testsa-token-<hash>")," was also created automatically. Just as with the end-user authentication we discussed earlier, this is the token that will be included as a bearer token on every API request. These credentials are mounted into the Pod in a well-known location that is accessible by the various Kubernetes clients."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# kubectl exec into some pod\nls -al /var/run/secrets\nls -al /var/run/secrets/kubernetes.io/serviceaccount\n")),(0,i.kt)("p",null,"Every Pod that is launched could have an associated ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: testpod\nspec:\n  serviceAccountName: testpod-sa\n")),(0,i.kt)("p",null,"If none is specified in the Pod manifest, a default ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is used. This default ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," is available on a namespace-wide basis and is automatically created when a namespace is."),(0,i.kt)("p",null,"Authentication is only the first challenge for a Kubernetes API request. There are two additional tests for every request: access control and admission control."),(0,i.kt)("h2",{id:"rest"},"REST"),(0,i.kt)("p",null,"The Kubernetes API is a RESTful API. The advantageous properties of a RESTful APIs are many (e.g., scalability and portability), but its simple structure is what enables us to determine levels of access within Kubernetes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -v=6 get pod <somepod>\n")),(0,i.kt)("p",null,"Just as with HTTP, these four verbs constitute the most basic elements of how we would interact with Kubernetes resources."),(0,i.kt)("p",null,"Within the Kubernetes API, in addition to ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"update"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"delete"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"patch"),", we also have access to the verbs ",(0,i.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"watch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"proxy"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"deletecollection"),", when dealing with resources."),(0,i.kt)("h2",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"Just because users are authenticated does not mean that we should give equal access rights to all of them."),(0,i.kt)("p",null,"Just as with authentication, authorization is the responsibility of the API server. The API server may be configured to implement various authorization modules using the aptly named ",(0,i.kt)("inlineCode",{parentName:"p"},"--authorization-mode")," argument to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," executable."),(0,i.kt)("p",null,"The API server passes each request to these modules in the order defined by the comma-delimited ",(0,i.kt)("inlineCode",{parentName:"p"},"--authorization-mode")," argument. Each module, in turn, may either weigh in on the decision-making process or choose to abstain."),(0,i.kt)("p",null,"In the case of abstinence, the API request simply moves on to the next module for evaluation. If, however, a module does make a decision, the authorization is terminated and reflects the decision of the authorizing module. If the module denies the request, the user receives an appropriate HTTP 403 (Forbidden) response, and if the request is allowed, the request makes its way to the final step of API flow: admission controller evaluation."),(0,i.kt)("h3",{id:"role-based-access-control"},"Role-Based Access Control"),(0,i.kt)("p",null,"The RBAC module, shorted for role-based access control, allows for the implementation of ",(0,i.kt)("em",{parentName:"p"},"dynamic access control")," polices at runtime."),(0,i.kt)("p",null,"Put succinctly, Kubernetes maps the attributes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"UserInfo")," object to the resources and verbs that the user should have access to."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"role")," is a set of abstract capabilities."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"role binding")," is an assignment of a role to one or more identities."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, the ",(0,i.kt)("em",{parentName:"p"},"appdev")," role might represent the ability to create Pods and services. Thus, binding the ",(0,i.kt)("em",{parentName:"p"},"appdev")," role to the user identity ",(0,i.kt)("em",{parentName:"p"},"alice")," indicates that Alice has the ability to create Pods and services.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Role and ClusterRole")),(0,i.kt)("p",null,"With the RBAC module, authorization to perform an action on a resource is defined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Role")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," resource types."),(0,i.kt)("p",null,"An implementation of the example, where a user has read-write access to ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployments")," but only read access to ",(0,i.kt)("inlineCode",{parentName:"p"},"Pods"),") might look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: web-rw-deployment\n  namespace: some-web-app-ns\nrules:\n  - apiGroups: ['']\n    resources: ['pods']\n    verbs: ['get', 'list', 'watch']\n  - apiGroups: ['extensions', 'apps']\n    resources: ['deployments']\n    verbs: ['get', 'list', 'watch', 'create', 'update', 'patch', 'delete']\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"apiGroups")," field of each rule simply indicates to the API server the namespace of the API that it should act on. (This reflects the API namespace defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiVersion")," field of your resource definition.)"),(0,i.kt)("p",null,"In the next two fields, ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"verbs"),", we encounter those REST constructs we discussed earlier. And, in the case of RBAC, we explicitly allow these types of API requests for a user with this ",(0,i.kt)("inlineCode",{parentName:"p"},"web-rw-deployment")," role. Since rules is an array, we may add as many combinations of permissions as are appropriate. All of these permissions are additive. With RBAC, we can only ",(0,i.kt)("inlineCode",{parentName:"p"},"grant")," actions, and this module otherwise denies by default."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Verb"),(0,i.kt)("th",{parentName:"tr",align:"left"},"HTTP method"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"create")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"POST")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Create a new resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"delete")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"DELETE")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Delete an existing resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"get")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Get a resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"list")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List a collection of resources")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"patch")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PATCH")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Modify an existing resource via partial change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"update")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PUT")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Modify an existing resource via a complete object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"watch")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Watch for streaming updates to a resource")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"proxy")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"GET")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connect to resource via a streaming WebSocket proxy")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Role")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," are identical in functionality and differ only in their scope. The previous example policy is bound to the resources in the ",(0,i.kt)("inlineCode",{parentName:"p"},"some-web-app-ns")," namespaces."),(0,i.kt)("p",null,"If we want to grant a permission that has cross-namespace capabilities, we use the ClusterRole resource. This resource, in the same manner, grants fine-grained control but on a cluster-wide basis."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," are typically employed for two primary use cases\u2014to easily grant cluster administrators a wide degree of freedom or to grant very specific permissions to a Kubernetes controller."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# built-in cluster roles\nkubectl get clusterroles\n\n# view cluster-role-bindings\nkubectl get clusterrolebindings\n")),(0,i.kt)("p",null,"While most of these built-in roles are for system utilities, four are designed for generic end users:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," role provides complete access to the entire cluster."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," role provides complete access to a complete namespace."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"edit")," role allows an end user to modify things in a namespace."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"view")," role allows for read-only access to a namespace.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: external-dns\nrules:\n  - apiGroups: ['']\n    resources: ['services']\n    verbs: ['get', 'watch', 'list']\n  - apiGroups: ['extensions']\n    resources: ['ingresses']\n    verbs: ['get', 'watch', 'list']\n")),(0,i.kt)("p",null,"When the Kubernetes API server starts up, it automatically installs a number of default ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," that are defined in the code of the API server itself. This means that if you modify any built-in cluster role, those modifications are ",(0,i.kt)("em",{parentName:"p"},"transient"),". Whenever the API server is restarted (e.g., for an upgrade) your changes will be overwritten."),(0,i.kt)("p",null,"To prevent this from happening, before you make any other modifications you need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"rbac.authorization.kubernetes.io/autoupdate")," annotation with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRole")," resource."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RoleBinding and ClusterRoleBinding")),(0,i.kt)("p",null,"To associate these policies with users, groups, or ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccounts"),", we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"RoleBinding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," resources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Associate the `web-rw-deployment` Role\n# in the `some-web-app-ns` namespace\n# to _joesmith@example.com`, as well as to a group `webdevs`.\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: web-rw-deployment\n  namespace: some-web-app-ns\nsubjects:\n  - kind: User\n    name: 'joesmith@example.com'\n    apiGroup: rbac.authorization.k8s.io\n  - kind: Group\n    name: 'webdevs'\n    apiGroup: rbac.authorization.k8s.io\n  - kind: ServiceAccount\n    name: testsa\n    namespace: some-web-app-ns\nroleRef:\n  kind: Role\n  name: web-rw-deployment\n  apiGroup: rbac.authorization.k8s.io\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1beta1\nkind: ClusterRoleBinding\nmetadata:\n  name: external-dns-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: external-dns\nsubjects:\n  - kind: ServiceAccount\n  name: external-dns\n  namespace: default\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Testing Authorization with can-i")),(0,i.kt)("p",null,"The first useful tool is the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth can-i")," command for ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl auth can-i create pod\n\n# subresourec flag\nkubectl auth can-i get pod --subresource=log\n")),(0,i.kt)("h2",{id:"admission-control"},"Admission Control"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Admission control")," is the third phase of API request onboarding."),(0,i.kt)("p",null,"By the time we have reached this phase of an API request life cycle, we have already determined that the request has come from a real, authenticated user and that the user is authorized to perform this request. What we care about now is whether ",(0,i.kt)("em",{parentName:"p"},"the request meets the criteria for what we consider to be a valid request"),"."),(0,i.kt)("p",null,"Enabling admission control is extremely simple. Since this is an API function, we add the ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-admission-plugins")," flag to the ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," runtime parameters. This is a comma-delimited list of the admission controllers that we want to enable."),(0,i.kt)("h3",{id:"common-controllers"},"Common Controllers"),(0,i.kt)("p",null,"Much of the functionality that users take for granted in Kubernetes actually happens by way of admission controllers."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For example, the ",(0,i.kt)("em",{parentName:"p"},"ServiceAccount admission controller")," automatically allocates ",(0,i.kt)("inlineCode",{parentName:"p"},"Pods")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),". Similarly, if you have tried to add new resources to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace")," that is currently in a terminating state, your request was likely rejected by the ",(0,i.kt)("em",{parentName:"p"},"NamespaceLifecycle controller"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PodSecurityPolicies")),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"PodSecurityPolicies")," controller, administrators can specify the constraints of the processes under Kubernetes\u2019 control."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ResourceQuota")),(0,i.kt)("p",null,"Generally speaking, it is good practice to enforce ",(0,i.kt)("em",{parentName:"p"},"quotas")," on your cluster. Quotas ensure that no one user is able to utilize more than she has been allocated and is a critical component in driving overall cluster utilization. If you intend to enforce user quotas, you should also enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"ResourceQuota")," controller."),(0,i.kt)("p",null,"This controller ensures that any newly declared Pods are first evaluated against the current quota utilization for the given namespace."),(0,i.kt)("p",null,"Note that when a quota is defined for a namespace, all Pod definitions (even if originating from another resource, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployments")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSets"),") are required to specify resource requests and limits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# quota.yaml\napiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: memoryquota\n  namespace: memoryexample\nspec:\n  hard:\n    requests.memory: 256Mi\n    limits.memory: 512Mi\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LimitRange")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"LimitRange")," allows you to place ",(0,i.kt)("em",{parentName:"p"},"default resource limits")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"Pods")," that are declared as a member of a particular ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: LimitRange\nmetadata:\n  name: default-mem\nspec:\n  limits:\n    - default:\n        memory: 1024Mi\n      defaultRequest:\n        memory: 512Mi\n      type: Container\n")),(0,i.kt)("h2",{id:"dynamic-admission-controllers"},"Dynamic Admission Controllers"),(0,i.kt)("p",null,"Dynamic admission control is the mechanism by which we inject custom business logic into the admission control pipeline."),(0,i.kt)("p",null,"There are two types of dynamic admission control: validating and mutating."),(0,i.kt)("p",null,"With ",(0,i.kt)("em",{parentName:"p"},"validating admission control"),", the business logic simply accepts or rejects a user\u2019s request, based upon our requirements. In the event of failure, an appropriate HTTP status code and reason for failure is returned to the user."),(0,i.kt)("p",null,"In the ",(0,i.kt)("em",{parentName:"p"},"mutating admission controller")," case, we are again evaluating requests against the API server, but in this case we are selectively changing the declaration to meet our objectives."),(0,i.kt)("p",null,"In both cases, this functionality is implemented using user-defined webhooks. These downstream webhooks are called by the API server when it sees that a qualifying request has been made."),(0,i.kt)("p",null,"The API server POSTs an ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionReview")," object to these webhooks. The body of this request includes the original request, the status of the object, and metadata about the requesting user."),(0,i.kt)("p",null,"In turn, the webhook provides a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"AdmissionResponse")," object. This object includes fields for whether this request is allowed, a reason and code for failure, and even a field for what a mutating patch would look like."),(0,i.kt)("p",null,"In order to utilize Dynamic Admission Controllers, you must first configure the API server with a change to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--enable-admission-plugins")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"--enable-admission-plugins=...,MutatingAdmissionWebhook,ValidatingAdmissionWebhook\n")))}c.isMDXComponent=!0}}]);