"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7209],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,y=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4087:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],u={},s=void 0,c={unversionedId:"Basic Operations/sum",id:"Basic Operations/sum",title:"sum",description:"sum(input: any[] | Mat | Tensor | number)",source:"@site/math/Basic Operations/sum.mdx",sourceDirName:"Basic Operations",slug:"/Basic Operations/sum",permalink:"/math/Basic Operations/sum",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"factorial",permalink:"/math/Basic Operations/factorial"},next:{title:"cholesky",permalink:"/math/Decompositions/cholesky"}},p={},l=[{value:"<code>sum(input: any[] | Mat | Tensor | number)</code>",id:"suminput-any--mat--tensor--number",level:4}],m={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"suminput-any--mat--tensor--number"},(0,a.kt)("inlineCode",{parentName:"h4"},"sum(input: any[] | Mat | Tensor | number)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"param")," ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," the list, vector, matrix, javascript array, or tensor, or even number to sum up the elements of"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returns: number")," - A number which is the sum of all the elements of each entry in the structure ",(0,a.kt)("inlineCode",{parentName:"p"},"input")),(0,a.kt)("p",null,"This function simply adds up, or sums all elements of a given structure and returns that sum: "),(0,a.kt)("iframe",{src:"https://hlab.app/s/docs/sum_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);