"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Class Component ?= Function Component &plus; Hooks",categories:["frontend","javascript","reactjs"],tags:["reactjs"]},i=void 0,l={permalink:"/blog/2020/02/15/class-fc-hooks",source:"@site/blog/2020-02-15-class-fc-hooks.md",title:"Class Component ?= Function Component &plus; Hooks",description:"Disclaimer",date:"2020-02-15T00:00:00.000Z",formattedDate:"February 15, 2020",tags:[{label:"reactjs",permalink:"/blog/tags/reactjs"}],readingTime:7.94,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Class Component ?= Function Component &plus; Hooks",categories:["frontend","javascript","reactjs"],tags:["reactjs"]},prevItem:{title:"Fullstack Starter Project Boilerplate",permalink:"/blog/2020/04/01/fullstack-starter"},nextItem:{title:"\u4e00\u4e2a\u7b80\u5355\u7684QueryBuilder\u8bbe\u8ba1",permalink:"/blog/2020/02/13/simple-querybuilder"}},s={authorsImageUrls:[]},p=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Main Content",id:"main-content",level:2},{value:"In the end",id:"in-the-end",level:2},{value:"Useful Reference",id:"useful-reference",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"I haven't read all the source code of React as well as understand its functionality very well, so there may be some wrong understandings, feel free to point out and rectify them."),(0,o.kt)("h2",{id:"main-content"},"Main Content"),(0,o.kt)("p",null,"Long time ago, I came across to ",(0,o.kt)("a",{parentName:"p",href:"https://blog.webf.zone/contemporary-front-end-architectures-fb5b500b0231"},"this awesome article")," about several architectures used in front end from the beginning of PC."),(0,o.kt)("a",{id:"concerns"}),"In summary, what the front end mainly concerns are the following things:",(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The current data, also known as state,")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The current view, which is user interface,")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Reaction to the user action, such as mutating data, animating the view, even side effects,")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Rendering the view according to the current data, in another phrase, synchronizing the view to the data."))),(0,o.kt)("p",null,"In React, we mainly write two kinds of component: ",(0,o.kt)("em",{parentName:"p"},"stateful")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Class component")," and ",(0,o.kt)("em",{parentName:"p"},"stateless")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Function component"),". The differences between these two are not only the ",(0,o.kt)("em",{parentName:"p"},"state")," maintained by the component, but also the lifecycle events. So what are the lifecycle events?"),(0,o.kt)("p",null,"Before talking about the lifecycle events, we need to understand some basic concepts in React."),(0,o.kt)("p",null,"When it comes to rendering, there are three concepts we need to keep in mind, ",(0,o.kt)("strong",{parentName:"p"},"Component"),", ",(0,o.kt)("strong",{parentName:"p"},"Elements"),", ",(0,o.kt)("strong",{parentName:"p"},"Instances"),". ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html"},"here is the official explanation on their differences"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An ",(0,o.kt)("strong",{parentName:"p"},"element")," is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other elements in their props. Creating a React element is cheap. ",(0,o.kt)("em",{parentName:"p"},"Once an element is created, it is never mutated."))),(0,o.kt)("p",null,"So we have to re-create a new element, (indeed, every time when the render function is invoked) if we need to update the DOM nodes. The React helps us to differ elements and patch the differences to the DOM nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A ",(0,o.kt)("strong",{parentName:"p"},"component")," can be declared in different ways. It can be a class with a ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," method. Alternatively, in simple cases, it can be defined as a function. ",(0,o.kt)("em",{parentName:"p"},"In either case, it takes props as an input, and returns an element tree as the output"),".")),(0,o.kt)("p",null,"A component tells React how to create the elements using props and states, if necessary. But we cannot use the component directly, we need to instantize it."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"An ",(0,o.kt)("strong",{parentName:"p"},"instance")," is what you refer to as ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," in the component class you write. ",(0,o.kt)("em",{parentName:"p"},"It is useful for storing local state, (local property/method) and reacting to the lifecycle events.")),(0,o.kt)("p",{parentName:"blockquote"},"Function components don't have instances at all."),(0,o.kt)("p",{parentName:"blockquote"},"Class components have instances, but you never need to create a component instance directly\u2014React takes care of this.")),(0,o.kt)("p",null,"Why we have to instantize the Class component?"),(0,o.kt)("p",null,"The function components don't need instances because all the data, which used to create elements, can be accessed directly from the function invocation arguments. ",(0,o.kt)("em",{parentName:"p"},"It means we don't need to create closure to preserve the references.")),(0,o.kt)("p",null,"However, we need the references to the local state, local property/method when using Class components. We have to instantize an instance of a Class component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," function is one of the local property/method belongs to this instance. So it can access to ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," instance easily."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyComponent extends Component {\n  constructor(props, context) {\n    super(props, context);\n    this.state = {};\n    this.nonStateProperty = 'non state property';\n    this.methodA = this.methodA.bind(this);\n  }\n  methodA() {}\n\n  render() {}\n}\n")),(0,o.kt)("p",null,"The above codes show how we to bind the local method to the specific instance. The bind statement is necessary in React for that JavaScript has the ",(0,o.kt)("em",{parentName:"p"},"magic")," ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),". It's implicit the instance is encapsulated as ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," during the runtime. ",(0,o.kt)("strong",{parentName:"p"},"Believe it or not, it is a special case of closure.")),(0,o.kt)("p",null,"Besides, local state, the Class components have the lifecycle events."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"lifecycle events")," are those you can override to run code at particular times in the process.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-component.html#the-component-lifecycle"},"Summary from the official document")," indicates that when something changes, the lifecycle events would be triggered."),(0,o.kt)("p",null,"Here is list of the types of change and the according lifecycle method, which would help you to understand when the certain lifecycle events will be invoked:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"element patched to DOM nodes:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", which is invoked immediately after a component is mounted (inserted into the tree), aka, ",(0,o.kt)("em",{parentName:"p"},"null -> new node"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),", which is invoked immediately after updating occurs. This method is not called for the initial render, aka, ",(0,o.kt)("em",{parentName:"p"},"old node -> new node"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"componentWillUnmount"),", which is invoked immediately before a component is unmounted and destroyed, aka, ",(0,o.kt)("em",{parentName:"p"},"old node -> null"),".")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"props/state updates:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"static")," ",(0,o.kt)("inlineCode",{parentName:"p"},"getDerivedStateFromProps"),", synchronized function which should return an object to update the state, or null to update nothing.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},"deprecated")," ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),", Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate"),", after the render function called to create the possible new elements, it will be invoked after updating occurs."))))),(0,o.kt)("p",null,"By using the name ",(0,o.kt)("em",{parentName:"p"},"lifecycle"),", we could imagine that the instances of Class components has a ",(0,o.kt)("em",{parentName:"p"},"lifetime")," to span. But, how about Function components, what do they have if they don't have lifecycle events?"),(0,o.kt)("p",null,"Actually, Function components have ",(0,o.kt)("em",{parentName:"p"},"lifecycle")," as well. To understand this saying, we have to rethink what the ",(0,o.kt)("em",{parentName:"p"},"lifecycle")," really is."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Lifecycle methods are the response action to certain changes and events"),"."),(0,o.kt)("p",null,"In simple words, when the state/props changes, we have to re-create elements. But, we could make some actions before, during and after the re-rendering process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const FunctionComponent = (props) => {\n  // doing side effects\n  return <ComponentTree />;\n};\n")),(0,o.kt)("p",null,"Before hooks come out, we can only make the actions before the re-rendering process. The equivalent lifecycle method is ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),". There is not much we can do after the re-rendering process."),(0,o.kt)("p",null,"Here comes the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," to rescue. This article, written by Dan, ",(0,o.kt)("a",{parentName:"p",href:"https://overreacted.io/a-complete-guide-to-useeffect/"},(0,o.kt)("inlineCode",{parentName:"a"},"A complete guide to useEffect")),", shows how ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," works, specifically, staring from ",(0,o.kt)("a",{parentName:"p",href:"https://overreacted.io/a-complete-guide-to-useeffect/#each-render-has-its-own-effects"},"here"),";"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Counter() {\n  const [count, setCount] = useState(0);\n\n  const increment = useCallback(() => {\n    setCount((c) => c + 1);\n  }, []);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={increment}>Click me</button>\n    </div>\n  );\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": Give me the UI when the state is 0.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The component"),":"),(0,o.kt)("p",{parentName:"li"},"Here\u2019s the render result: ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>You clicked 0 times</p>"),". Also remember to run this ",(0,o.kt)("em",{parentName:"p"},"effect")," after you\u2019re done: ",(0,o.kt)("inlineCode",{parentName:"p"},"() => { document.title = 'You clicked 0 times' }"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": Sure. Updating the UI. Hey browser, I\u2019m adding some stuff to the DOM.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Browser"),": Cool, I painted it to the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": OK, now I\u2019m going to run the ",(0,o.kt)("em",{parentName:"p"},"effect")," you gave me."),(0,o.kt)("p",{parentName:"li"},"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"() => { document.title = 'You clicked 0 times' }"),"."))),(0,o.kt)("p",null,"Now we click the button:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The component"),": Hey React, set my state to 1.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": Give me the UI for when the state is 1.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"The component"),":"))),(0,o.kt)("p",null,"Here\u2019s the render result: ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>You clicked 1 times</p>"),". Also remember to run this ",(0,o.kt)("em",{parentName:"p"},"effect")," after you\u2019re done: () => { document.title = 'You clicked 1 times' }."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": Sure. Updating the UI. Hey browser, I\u2019ve changed the DOM.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Browser"),": Cool, I painted your changes to the screen.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"React"),": OK, now I\u2019ll run the ",(0,o.kt)("em",{parentName:"p"},"effect")," that belongs to the render I just did."),(0,o.kt)("p",{parentName:"li"},"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"() => { document.title = 'You clicked 1 times' }"),"."))),(0,o.kt)("p",null,"The function defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," is different on every render, because no dependency is specified."),(0,o.kt)("p",null,"More generally, effects could:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"run after every render, because it's specified by the rendering mechanism")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"are conceptually a part of the component output, because it can do some side effects after rendering element.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u201csee\u201d the props and state from that particular render, because it creates a closure when creating the effect function."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"React synchronizes the DOM according to our current props and state"),', it just creates/re-creates elements according to our jsx code. There is no distinction between a "mount" or an "update" when rendering.'),(0,o.kt)("p",null,"Whilst, ",(0,o.kt)("strong",{parentName:"p"},"useEffect lets you synchronize things outside of the React tree according to our props and state"),". When looking back at, take ",(0,o.kt)("inlineCode",{parentName:"p"},"componentWillReceiveProps"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidUpdate")," as examples, we used to do these synchronizations in these lifecycle events."),(0,o.kt)("p",null,"So ",(0,o.kt)("inlineCode",{parentName:"p"},"useEffect")," is not something that replicate the lifecycle events such as ",(0,o.kt)("inlineCode",{parentName:"p"},"componentDidMount"),", and their mental model is closer to implementing synchronization than to responding to lifecycle events. Trying to find effects exact equivalents with lifecycle events may confuse you more than help."),(0,o.kt)("p",null,"In Class component, we can access to the state by referring to ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," in a instance, ",(0,o.kt)("em",{parentName:"p"},"implicit closure"),"."),(0,o.kt)("p",null,"By using ",(0,o.kt)("inlineCode",{parentName:"p"},"useState")," in Function components, we also create a closure to encapsulate the state. Also, React ensures the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," function stable for the render, still with the help of closure. (So does the ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"useReducer")," as long as the reducer stable.)"),(0,o.kt)("p",null,"The instance methods are bound to ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," instance. Whilst hooks provide us with ",(0,o.kt)("inlineCode",{parentName:"p"},"useCallback"),", which also would create closures to encapsulate the props/state it can access to in the scope."),(0,o.kt)("p",null,"Conceptually, the instances of the Class components implicitly create closures for us to keep the reference to the methods, props, state. Whilst, hooks have to do the closure encapsulating since there's no instance in Function components."),(0,o.kt)("h2",{id:"in-the-end"},"In the end"),(0,o.kt)("p",null,"Is Class component the combination of Function component and hooks?"),(0,o.kt)("p",null,"The answer is no. They both could work very well with their own pros and cons. They are just two means of tackling the above ",(0,o.kt)("a",{parentName:"p",href:"#concerns"},"concerns"),"."),(0,o.kt)("p",null,"It's fine to use either of them, as long as it meets your requirements."),(0,o.kt)("h2",{id:"useful-reference"},"Useful Reference"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://overreacted.io/a-complete-guide-to-useeffect/"},"A complete guide to useEffect"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://blog.webf.zone/contemporary-front-end-architectures-fb5b500b0231"},"Contemporary front end architectures"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://leewarrick.com/blog/react-use-effect-explained/"},"React's useEffect and useRef Explained for Mortals")))))}m.isMDXComponent=!0}}]);