"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[406],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=i,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],p={},s=void 0,u={unversionedId:"Basic Operations/dot_divide",id:"Basic Operations/dot_divide",title:"dot_divide",description:"dot_divide(input1 any[] | Mat | Tensor) : any[] | Mat | Tensor",source:"@site/math/Basic Operations/dot_divide.mdx",sourceDirName:"Basic Operations",slug:"/Basic Operations/dot_divide",permalink:"/math/Basic Operations/dot_divide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math Intro",permalink:"/math/intro-math"},next:{title:"dot_multiply",permalink:"/math/Basic Operations/dot_multiply"}},c={},d=[{value:"<code>dot_divide(input1: any[] | Mat | Tensor, input2: any[] | Mat | Tensor) : any[] | Mat | Tensor</code>",id:"dot_divideinput1-any--mat--tensor-input2-any--mat--tensor--any--mat--tensor",level:5}],l={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h5",{id:"dot_divideinput1-any--mat--tensor-input2-any--mat--tensor--any--mat--tensor"},(0,o.kt)("inlineCode",{parentName:"h5"},"dot_divide(input1: any[] | Mat | Tensor, input2: any[] | Mat | Tensor) : any[] | Mat | Tensor")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input1")," first input, the numerator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input2")," second input, the denominator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"any[] | Mat | Tensor")," - A copy of the resulting structure of element-wise divided values."),(0,o.kt)("p",null,"This function takes two structures matrices, arrays, vectors, tensors of the same size and divides them element wise : "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/dot_divide",width:"100%",height:"500px"}))}m.isMDXComponent=!0}}]);