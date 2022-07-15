"use strict";(self.webpackChunkcapri_website=self.webpackChunkcapri_website||[]).push([[827],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={},a="Functions",c={unversionedId:"basic-concepts/functions/functions",id:"basic-concepts/functions/functions",title:"Functions",description:"Functions are a cruicial aspect of programming - any decent programming language should support defining functions and procedures. Capri in particular puts a strong emphasis on functional programming: to build up complexity through the composition of simpler functions.",source:"@site/docs/basic-concepts/03-functions/03-functions.md",sourceDirName:"basic-concepts/03-functions",slug:"/basic-concepts/functions/",permalink:"/capri-website/basic-concepts/functions/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mutability",permalink:"/capri-website/basic-concepts/variables/mutability"},next:{title:"Recursion",permalink:"/capri-website/basic-concepts/functions/recursion"}},p={},s=[{value:"Defining functions",id:"defining-functions",level:2},{value:"Calling functions",id:"calling-functions",level:2}],u={toc:s};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("p",null,"Functions are a cruicial aspect of programming - any decent programming language should support defining functions and procedures. Capri in particular puts a strong emphasis on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Functional_programming"},"functional programming"),": to build up complexity through the composition of simpler functions."),(0,i.kt)("h2",{id:"defining-functions"},"Defining functions"),(0,i.kt)("p",null,"Functions can be defined with the ",(0,i.kt)("inlineCode",{parentName:"p"},"fn")," keyword.\nType annotations are optional as the compiler supports type inference.\n(However, until parametric polymorphism is implemented, you may have to add some type annotations to prevent the compiler from inferring a polymorphic function)."),(0,i.kt)("p",null,"All functions evaluate to a single expression if there is no ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'fn example()\n    123;\n\nfn addFive(n)\n    n + 5;\n\nfn greet(name: str): unit {\n    print("Hello, ");\n    print(name);\n};\n\nfn factorial(n) {\n    if n == 0 { return 1; };\n    // ...\n};\n')),(0,i.kt)("h2",{id:"calling-functions"},"Calling functions"),(0,i.kt)("p",null,"Functions are invoked as one would normally expect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"greet(\"Capri\"); // Outputs 'Hello, Capri'\naddFive(example()); // Evaluates to 128\n")))}l.isMDXComponent=!0}}]);