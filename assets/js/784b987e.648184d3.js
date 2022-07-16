"use strict";(self.webpackChunkcapri_website=self.webpackChunkcapri_website||[]).push([[740],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,y=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?i.createElement(y,a(a({ref:t},d),{},{components:n})):i.createElement(y,a({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},a="Module System",l={unversionedId:"module-system",id:"module-system",title:"Module System",description:"It's important for large codebases to be split apart and organized into different sections, each serving their own purpose. Capri provides a module system for this reason.",source:"@site/docs/module-system.md",sourceDirName:".",slug:"/module-system",permalink:"/capri-website/module-system",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pattern Matching Variants",permalink:"/capri-website/language-features/algebraic-data-types/pattern-matching-variants"},next:{title:"Miscellaneous",permalink:"/capri-website/category/miscellaneous"}},p={},s=[{value:"Creating and importing modules",id:"creating-and-importing-modules",level:2},{value:"Circular dependencies",id:"circular-dependencies",level:2},{value:"Controlling visibility with <code>pub</code>",id:"controlling-visibility-with-pub",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"module-system"},"Module System"),(0,r.kt)("p",null,"It's important for large codebases to be split apart and organized into different sections, each serving their own purpose. Capri provides a module system for this reason."),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},".capri")," file is a module (the name of the module does not necessarily have to be the name of the file). The path to it from the root project directory will be the module path. For example, if you have a project organized like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"someDirectory",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"test.capri (",(0,r.kt)("inlineCode",{parentName:"li"},"module test;"),")"))),(0,r.kt)("li",{parentName:"ul"},"main.capri (",(0,r.kt)("inlineCode",{parentName:"li"},"module main;"),")")))),(0,r.kt)("p",null,"The qualified name for the ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," module would be ",(0,r.kt)("inlineCode",{parentName:"p"},"someDirectory::test"),", and the qualified name for the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," module will just simply be ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),". The compiler requires a module named ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," to be at the very top level of the project (and it must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function)."),(0,r.kt)("h2",{id:"creating-and-importing-modules"},"Creating and importing modules"),(0,r.kt)("p",null,"Every ",(0,r.kt)("inlineCode",{parentName:"p"},".capri")," file is a module and therefore needs a module definition on the very first line. A module definition is simply ",(0,r.kt)("inlineCode",{parentName:"p"},"module <module name>;"),"."),(0,r.kt)("p",null,"To import a module, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," keyword (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"import someDirectory::test;"),"). The path to the imported module is always absolute (from the project root directory), and not relative to the module that's importing it."),(0,r.kt)("h2",{id:"circular-dependencies"},"Circular dependencies"),(0,r.kt)("p",null,"The compiler performs dependency checking and any circular dependencies will result in a compile time error. Well-organized code should not have to result to mutually recursive modules."),(0,r.kt)("h2",{id:"controlling-visibility-with-pub"},"Controlling visibility with ",(0,r.kt)("inlineCode",{parentName:"h2"},"pub")),(0,r.kt)("p",null,"By default, any imports and top-level definitions made in a module are not exported. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pub")," keyword to indicate that a certain top-level definition should be made public, or use it to indicate that imports should be 'passed down'. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"module example;\n\nimport abc::xyz;\npub import some::other::mod;\n\npub type MyType = {a: i64, b: bool};\n\nfn privateFunction() { ... };\npub fn publicFunction() { ... };\n")),(0,r.kt)("p",null,"Any module which imports ",(0,r.kt)("inlineCode",{parentName:"p"},"example")," will behave as if they also imported ",(0,r.kt)("inlineCode",{parentName:"p"},"some::other::mod"),", and they will also have access to ",(0,r.kt)("inlineCode",{parentName:"p"},"MyType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"publicFunction"),"."))}m.isMDXComponent=!0}}]);