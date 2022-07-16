"use strict";(self.webpackChunkcapri_website=self.webpackChunkcapri_website||[]).push([[103],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="Usage",l={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"Usage",description:"Make sure you have a C compiler installed. On Linux, it's highly recommended to use gcc, on Windows tcc works well, and on macOS clang should already be available.",source:"@site/docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/capri-website/getting-started/usage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/capri-website/getting-started/installation"},next:{title:"Basic Concepts",permalink:"/capri-website/category/basic-concepts"}},p={},c=[{value:"Source directory",id:"source-directory",level:2},{value:"Standard library",id:"standard-library",level:2},{value:"C Compiler",id:"c-compiler",level:2},{value:"Output path",id:"output-path",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Make sure you have a C compiler installed. On Linux, it's highly recommended to use ",(0,n.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"gcc")),", on Windows ",(0,n.kt)("a",{parentName:"p",href:"https://bellard.org/tcc/"},(0,n.kt)("inlineCode",{parentName:"a"},"tcc"))," works well, and on macOS ",(0,n.kt)("a",{parentName:"p",href:"https://clang.llvm.org/"},(0,n.kt)("inlineCode",{parentName:"a"},"clang"))," should already be available."),(0,n.kt)("h2",{id:"source-directory"},"Source directory"),(0,n.kt)("p",null,"Running the compiler without any arguments will treat the current directory as the project source directory (i.e. where all of your ",(0,n.kt)("inlineCode",{parentName:"p"},".cpr")," files are). To manually specify the source directory, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-d")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--dir"),") option as shown:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"capri -d path/to/dir/\n")),(0,n.kt)("h2",{id:"standard-library"},"Standard library"),(0,n.kt)("p",null,"By default, the compiler will look for the ",(0,n.kt)("inlineCode",{parentName:"p"},"CAPRI_STL")," environment variable to search for the standard library directory. To avoid this, you can manually specify the path (",(0,n.kt)("inlineCode",{parentName:"p"},"--stl"),"), or ask the compiler to not include the standard library at all (",(0,n.kt)("inlineCode",{parentName:"p"},"--no-stl"),")."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"capri --stl path/to/stl/dir/\n\ncapri --no-stl\n")),(0,n.kt)("h2",{id:"c-compiler"},"C Compiler"),(0,n.kt)("p",null,"The default C compiler Capri invokes is ",(0,n.kt)("inlineCode",{parentName:"p"},"gcc"),". To change this, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-c")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--cc"),") option. For example, to use ",(0,n.kt)("inlineCode",{parentName:"p"},"tcc")," instead:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"capri -c tcc\n")),(0,n.kt)("h2",{id:"output-path"},"Output path"),(0,n.kt)("p",null,"To specify the output path, use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-o")," (",(0,n.kt)("inlineCode",{parentName:"p"},"--out"),") option."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"capri -o path/to/a.out\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-h")," flag for a list of all command line options."))}u.isMDXComponent=!0}}]);