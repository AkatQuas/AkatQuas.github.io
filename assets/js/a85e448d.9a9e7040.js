"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const l={title:"Deployments, Jobs, and DaemonSets",sidebar_position:9},r=void 0,s={unversionedId:"kubernetes/workloads",id:"kubernetes/workloads",title:"Deployments, Jobs, and DaemonSets",description:"Kubernetes supports various types of workloads:",source:"@site/docs/kubernetes/workloads.md",sourceDirName:"kubernetes",slug:"/kubernetes/workloads",permalink:"/docs/kubernetes/workloads",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Deployments, Jobs, and DaemonSets",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Updates, Gradual Rollouts, AutoScaling",permalink:"/docs/kubernetes/scaling"},next:{title:"ConfigMap and Secret",permalink:"/docs/kubernetes/configmap-secret"}},i={},p=[{value:"Deployments",id:"deployments",level:2},{value:"Jobs",id:"jobs",level:2},{value:"Job Patterns",id:"job-patterns",level:3},{value:"CronJob",id:"cronjob",level:3},{value:"DaemonSets",id:"daemonsets",level:2},{value:"Updating DaemonSet",id:"updating-daemonset",level:3},{value:"Node Selection",id:"node-selection",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes supports various types of workloads:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deployments: regularly updated and long-running applications"),(0,o.kt)("li",{parentName:"ul"},"Jobs: short-running tasks"),(0,o.kt)("li",{parentName:"ul"},"DaemonSets: programs to be run every node")),(0,o.kt)("h2",{id:"deployments"},"Deployments"),(0,o.kt)("p",null,"Pods and ReplicaSets are expected to be tied to specific container images that don't change."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," object was added to the Kubernetes API to represent this sort of ",(0,o.kt)("em",{parentName:"p"},"safe rollout")," from one version to another. A Deployment can hold pointers to multiple ReplicaSets, (e.g. v1 and v2), and it can control the slow and safe migration from one ReplicaSet to another."),(0,o.kt)("p",null,"Deployments allow us to pause and resume application rollouts. Additionally, it keeps a history of past deployments and allows the user to easily rollback to previous versions."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Just as that ReplicaSets manage Pods, deployments manage ReplicaSets. ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/#when-to-use-a-replicaset"},"And It's not recommended to use Deployments instead of directly using ReplicaSets."))),(0,o.kt)("p",null,"Deployments feature large number of different knobs that can be tuned to provide a safe rollout for the specific details of an application. Indeed, in most modern clusters, users exclusively use Deployment objects and don't manage ReplicaSets directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Deployment\nmetadata:\n  annotations:\n    deployment.kubernetes.io/revision: '1'\n  creationTimestamp: null\n  name: node-js-deploy\n  labels:\n    name: node-js-deploy\n  selfLink: /apis/extensions/v1beta1/namespaces/default/deployments/node-js-deploy\nspec:\n  # the deployment must wait for 60 seconds after\n  # seeing a Pod become healthy before moving on to updating the next Pod.\n  minReadySeconds: 60\n  # progress deadline\n  # if any particular stage in the rollout fails (such as deadlocks immediately) to progress,\n  # wait at most 2147483647 seconds, then the deployment is marked as failed,\n  # all attempts to move the deployment forward are halted\n  progressDeadlineSeconds: 2147483647\n  replicas: 2\n  # We do daily rollouts, limit the revision history\n  # to 10 releases as we don't expect to roll back beyond that.\n  revisionHistoryLimit: 10\n  selector:\n    matchLabels:\n      name: node-js-deploy\n  # rollout strategy, Recreate or RollingUpdate\n  strategy:\n    rollingUpdate:\n      # how many extra resources can be created to achieve a rollout\n      # absolute number (1,3,5) or percentage (20%)\n      maxSurge: 1\n\n      # set the maximum number of Pods that can be unavailable,\n      # absolute number (1,3,5) or percentage (20%)\n      maxUnavailable: 1\n    type: RollingUpdate\n  template:\n    metadata:\n      # useful for updating annotation\n      annotations:\n        kubernetes.io/change-cause: \"Update to green kuard\"\n      creationTimestamp: null\n      labels:\n        name: node-js-deploy\n    spec:\n      containers:\n        - name: node-js-deploy\n          image: pod-scaling\n          imagePullPolicy: IfNotPresent\n          resources: {}\n          terminationMessagePath: /dev/termination-log terminationMessagePolicy: File\n          ports:\n            - containerPort: 80\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n      schedulerName: default-scheduler\n      securityContext: {}\n      terminationGracePeriodSeconds: 30\nstatus: {}\n\n# Service\napiVersion: v1\nkind: Service\nmetadata:\n  name: node-js-deploy\n  labels:\n    name: node-js-deploy\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 80\n  sessionAffinity: ClientIP\n  selector:\n    name: node-js-deploy\n")),(0,o.kt)("p",null,"Two of the most important pieces of information in the output from command ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl describe deployment <deployment-name>")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"OldReplicaSets")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NewReplicaSet"),". These fields point to the ReplicaSet objects this deployment is currently managing. If a deployment is in the middle of a rollout, both fields will be set to a value. If a rollout is complete, ",(0,o.kt)("inlineCode",{parentName:"p"},"OldReplicaSets")," will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"<none>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# flag --record\n# the creation of the deployment is recorded in the rollout history\nkubectl apply -f /path/to/node-js-deploy.yaml --record\n\n# manual scaling\nkubectl scale deployment node-js-deploy --replicas 3\n\n# manual update and rollout\nkubectl set image deployment/node-js-deploy node-js-deploy=pod-scaling:0.2\nkubectl rollout status deployment/node-js-deploy\n")),(0,o.kt)("p",null,"Kubernetes has ",(0,o.kt)("em",{parentName:"p"},"rolled out")," a new version for us:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"It basically creates a new replica set with the new version. Once this pod is online and healthy it kills one of the older versions. It continues this behavior, scaling out the new version and scaling down the old versions, until only the new pods are left.\n")),(0,o.kt)("p",null,"We could set the ",(0,o.kt)("inlineCode",{parentName:"p"},"strategy.type")," field, which is default to ",(0,o.kt)("inlineCode",{parentName:"p"},"RollingUpdate"),", to other values, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Recreate"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Recreate")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Recreate")," will kill the old pods first before creating the new versions.")),(0,o.kt)("p",null,"It simply ",(0,o.kt)("em",{parentName:"p"},"updates the ReplicaSet it manages to use the new image")," and ",(0,o.kt)("em",{parentName:"p"},"terminates all Pods associated with the deployment"),". The ReplicaSet notices that it no longer has any replicas, and re-creates all Pods using the new image. Once the Pods are re-created, they are running the new version."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RollingUpdate")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"RollingUpdate")," will create new pods to replace the old pods.")),(0,o.kt)("p",null,"The RollingUpdate strategy works by ",(0,o.kt)("em",{parentName:"p"},"updating a few Pods")," at a time, ",(0,o.kt)("em",{parentName:"p"},"moving incrementally")," until all Pods are running the new version of your software."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# rollback\nkubectl set image deployment/node-js-deploy node-js-deploy=pod-scaling:0.2\nkubectl rollout history deployment/node-js-deploy\n\n# something goes wrong, we need to rollback\nkubectl rollout undo deployment/node-js-deploy\n\n# chec kout the rollout status\nkubectl rollout status deployment/node-js-deploy\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# autoscaling yaml configuration\napiVersion: extensions/v1beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: node-js-deploy\nspec:\n  minReplicas: 3\n  maxReplicas: 6\n  scaleTargetRef:\n    apiVersion: v1\n    kind: Deployment\n    name: node-js-deploy\n  targetCPUUtilizationPercentage: 10\n# kubectl apply -f /path/to/deploy-hpa.yaml\n")),(0,o.kt)("p",null,"Deployments and Replication Controllers are a great way to ensure long running applications are always up and able to tolerate a wide array of infrastructure failures."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rollout History")),(0,o.kt)("p",null,"Kubernetes deployments maintain a history of rollouts, which can be useful both for understanding the previous state of the deployment and to roll back to a specific version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl rollout history deployment <deployment-name>\n\nkubectl rollout history deployment <deployment-name> --revision=2\n\nkubectl rollout undo deployment <deployment-name>\n\nkubectl rollout undo deployment <deployment-name> --to-revision=3\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you roll back to a previous revision, the deployment simply reuses the template and renumbers it so that it is the latest revision.")),(0,o.kt)("h2",{id:"jobs"},"Jobs"),(0,o.kt)("p",null,"Sometimes, we need the tasks to run until completion, but then terminate and start again at the next scheduled interval."),(0,o.kt)("p",null,"Kubernetes has added a ",(0,o.kt)("em",{parentName:"p"},"Batch API"),", which includes the ",(0,o.kt)("strong",{parentName:"p"},"Job")," type. This type will create 1 to n pods and ensure that they all run to completion with a successful exit."),(0,o.kt)("p",null,"A Job contains the definition of the Pods it creates, the number of times the Job should be run, and the maximum number of Pods to create in parallel."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A job creates Pods that run until successful termination (i.e., exit with 0). In contrast, a regular Pod will continually restart regardless of its exit code.")),(0,o.kt)("p",null,"Based on ",(0,o.kt)("inlineCode",{parentName:"p"},"restartPolicy"),", we can either allow pods to simply fail without retry (",(0,o.kt)("inlineCode",{parentName:"p"},"restartPolicy: Never"),") or retry when a pods exits without successful completion (",(0,o.kt)("inlineCode",{parentName:"p"},"restartPolicy: OnFailure"),")."),(0,o.kt)("p",null,"If the Pod fails before a successful termination, the job controller will create a new Pod based on the Pod template in the job specification. Given that Pods have to be scheduled, there is a chance that your job will not execute if the required resources are not found by the scheduler."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# longtask Job\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: long-task\nspec:\n  template:\n    metadata:\n      name: long-task\n    spec:\n      containers:\n        - name: long-task\n          image: docker/whalesay\n          command: ['cowsay', 'Finishing that task in a jiffy']\n      restartPolicy: OnFailure\n# kubectl apply -f /path/to/longtask.yaml\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"After the job has completed, the Job object and related Pod are still around. You may need to delete them manually?")),(0,o.kt)("h3",{id:"job-patterns"},"Job Patterns"),(0,o.kt)("p",null,"By default, each job runs a single Pod once until successful termination."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Use case"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Behavior"),(0,o.kt)("th",{parentName:"tr",align:"left"},"completions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"parallelism"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"One shot"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Database migrations"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A single Pod running once until successful termination"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Parallel fixed completions"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiple Pods processing a set of work in parallel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more Pods running one or more times until reaching a fixed completion count"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1+"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Work queue: parallel jobs"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Multiple Pods processing from a centralized work queue"),(0,o.kt)("td",{parentName:"tr",align:"left"},"One or more Pods running once until successful termination"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"2+")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"One Shot")),(0,o.kt)("p",null,"One-shot jobs provide a way to run a single Pod once until successful termination."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A Pod must be created and submitted to the Kubernetes API. This is done using a Pod template defined in the job configuration.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once a job is up and running, the Pod backing the job must be monitored for successful termination. The job controller is responsible for recreating the Pod until a successful termination occurs."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A job can fail for any number of reasons, including an application error, an uncaught exception during runtime, or a node failure before the job has a chance to complete.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"A one-shot Job example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: oneshot\nspec:\n  template:\n    spec:\n      containers:\n        - name: oneshot\n          image: docker/whalesay\n          imagePullPolicy: Always\n          args:\n            - '--keygen-enable'\n            - '--keygen-exit-on-complete'\n            - '--keygen-num-to-gen=10'\n      restartPolicy: OnFailure\n"))),(0,o.kt)("p",null,"In reality, batch work is often done in ",(0,o.kt)("strong",{parentName:"p"},"Parallel")," or as part of a regularly occurring task."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parallel jobs")),(0,o.kt)("p",null,"Using Parallel jobs, we may be grabbing tasks from an ongoing queue or simply running a set number of tasks that are not dependent on each other. ",(0,o.kt)("em",{parentName:"p"},"In the case of jobs pulling from a queue"),", our application must be aware of the dependencies and have the logic to decide how tasks are processed and what to work on next. Kubernetes is simply scheduling the jobs."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"A one-shot Job example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: parallel\n  labels:\n    chapter: jobs\nspec:\n  parallelism: 5\n  completions: 10\n  template:\n    metadata:\n      labels:\n        chapter: jobs\n    spec:\n      containers:\n        - name: oneshot\n          image: docker/whalesay\n          imagePullPolicy: Always\n          args:\n            - '--keygen-enable'\n            - '--keygen-exit-on-complete'\n            - '--keygen-num-to-gen=10'\n      restartPolicy: OnFailure\n"))),(0,o.kt)("h3",{id:"cronjob"},"CronJob"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scheduled jobs")),(0,o.kt)("p",null,"Kubernetes has also released a ",(0,o.kt)("strong",{parentName:"p"},"CronJob")," type for tasks that need to run periodically."),(0,o.kt)("p",null,"ScheduledJobs build on top of the Job object by adding a schedule to a Job. A ScheduledJob contains the definition of the Job object that you want to create, as well as the schedule on which that Job should be created."),(0,o.kt)("p",null,"As we might expect, this type of job uses the underlying ",(0,o.kt)("em",{parentName:"p"},"cron formatting")," to specify a schedule for the task we wish to run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# longtask in cron\napiVersion: batch/v2alpha1\nkind: CronJob\nmetadata:\n  name: long-task-cron\nspec:\n  schedule: '15 10 * * 5'\n  jobTemplate:\n    spec:\n      template:\n        spec:\n          containers:\n            - name: long-task\n              image: docker/whalesay\n              command: ['cowsay', 'Developers Task complete!']\n          restartPolicy: OnFailure\n# kubectl apply -f /path/to/longtask-cron.yaml\n")),(0,o.kt)("h2",{id:"daemonsets"},"DaemonSets"),(0,o.kt)("p",null,"While ReplicaSets and Deployments are great at making sure a specific number of application instances are running, they do so in the context of the best fit. ",(0,o.kt)("em",{parentName:"p"},"This means that the ",(0,o.kt)("strong",{parentName:"em"},"scheduler looks for nodes that meet resource requirements")," (available CPU, particular storage volumes, and so on) and tries to spread across the nodes and zones"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DaemonSet")," simply defines a pod to run on ",(0,o.kt)("strong",{parentName:"p"},"every single node")," in the cluster or a defined subset of those nodes. This can be very useful for a number of production-related activities, such as monitoring and logging agents, security agents, and file system daemons."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"DaemonSets share similar functionality with ReplicaSets; both create Pods that are expected to be ",(0,o.kt)("em",{parentName:"p"},"long-running services")," and ensure that the desired state and the observed state of the cluster match.")),(0,o.kt)("p",null,"ReplicaSets should be used when your application is completely decoupled from the node and you can run multiple copies on a given node without special consideration."),(0,o.kt)("p",null,"DaemonSets should be used when a single copy of your application must run on all or a subset of the nodes in the cluster."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Simple DaemonSet yaml listing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# DaemonSet, node problem detector\napiVersion: extensions/v1beta1\nkind: DaemonSet\nmetadata:\n  name: node-problem-detector-v1\n  namespace: kube-system\n  labels:\n    k8s-app: node-problem-detector\n    version: v1\n    kubernetes.io/cluster-service: 'true'\nspec:\n  template:\n    metadata:\n      labels:\n        k8s-app: node-problem-detector\n        version: v1\n        kubernetes.io/cluster-service: 'true'\n    spec:\n      hostNetwork: true\n      containers:\n        - name: node-problem-detector\n          image: node-problem-detector:v1\n          securityContext:\n            privileged: true\n          resources:\n            limits:\n              cpu: '200m'\n              memory: '100Mi'\n            requests:\n              cpu: '20m'\n              memory: '20Mi'\n          volumeMounts:\n            - name: log\n              mountPath: /log\n              readOnly: true\n      volumes:\n        - name: log\n          hostPath:\n            path: /var/log/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: DaemonSet\nmetadata:\n  # unique name across DaemonSets\n  name: fluentd\n  labels:\n    app: fluentd\nspec:\n  template:\n    metadata:\n      labels:\n        app: fluentd\n    spec:\n      containers:\n        - name: fluentd\n          image: fluent/fluentd:v0.14.10\n          resources:\n            limits:\n              memory: '200Mi'\n            requests:\n              cpu: '100m'\n              memory: '200Mi'\n          volumeMounts:\n            - name: varlog\n              mountPath: /var/log\n            - name: var_lib_docker_containers\n              mountPath: /var/lib/docker/containers\n              readOnly: true\n      terminationGracePeriodSeconds: 30\n      volumes:\n        - name: varlog\n          hostPath:\n            path: /var/log\n        - name: var_lib_docker_containers\n          hostPath:\n            path: /var/lib/docker/containers\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use labels to run DaemonSet Pods on specific nodes."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# add label to node\n# daemonset would find this using nodeSelector\nkubectl label node <node-name> ssd=true\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: DaemonSet\nmetadat:\n  labels:\n    app: nginx\n    ssd: 'true'\n  name: nginx-fast-storage\nspec:\n  template:\n    metadata:\n      labels: nginx\n      ssd: 'true'\n    spec:\n      nodeSelector:\n        ssd: 'true'\n      containers:\n        - name: nginx\n          image: nginx:1.10.0\n"))),(0,o.kt)("h3",{id:"updating-daemonset"},"Updating DaemonSet"),(0,o.kt)("p",null,"With the release of Kubernetes 1.6, DaemonSets gained an equivalent to the ",(0,o.kt)("em",{parentName:"p"},"Deployment object")," that manages a DaemonSet rollout inside the cluster."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"RollingUpdate")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spec.minReadySeconds"),": determines how long a Pod must be \u201cready\u201d before the rolling update proceeds to upgrade subsequent Pods."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spec.updateStrategy.rollingUpdate.maxUnavailable"),": indicates how many Pods may be simultaneously updated by the rolling update."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The DaemonSet provides its own controller and scheduler to ensure key services like monitoring agents are always up and running on the right nodes in your cluster.")),(0,o.kt)("h2",{id:"node-selection"},"Node Selection"),(0,o.kt)("p",null,"In order to schedule DaemonSets to run on a subset of nodes, we need the help of ",(0,o.kt)("strong",{parentName:"p"},"nodeSelector"),"."),(0,o.kt)("p",null,"It allows us to constrain the nodes a pods runs on, by looking for specific labels and metadata. They simple match key-value pairs on the labels for each node."),(0,o.kt)("p",null,"Actually, nodeSelectors work with Pod definitions as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# label some node\nkubectl label nodes <node-name> <label-key>=<label-value>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# longtask Job with nodeSelector\napiVersion: batch/v1\nkind: Job\nmetadata:\n  name: long-task-ns\nspec:\n  template:\n    metadata:\n      name: long-task-ns\n    spec:\n      containers:\n        - name: long-task-ns\n          image: docker/whalesay\n          command: ['cowsay', 'Finishing that task in a jiffy']\n      restartPolicy: OnFailure\n      nodeSelector:\n        <label-key>: <label-value>\n")))}u.isMDXComponent=!0}}]);