"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2783],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=i,d=l["".concat(s,".").concat(f)]||l[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},9310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={},s=void 0,p={unversionedId:"Properties/ndim",id:"Properties/ndim",title:"ndim",description:"ndim(input: any[] | Mat | Tensor | number)",source:"@site/math/Properties/ndim.mdx",sourceDirName:"Properties",slug:"/Properties/ndim",permalink:"/math/Properties/ndim",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"is_triu",permalink:"/math/Properties/is_triu"},next:{title:"trace",permalink:"/math/Properties/trace"}},c={},m=[{value:"<code>ndim(input: any[] | Mat | Tensor | number)</code>",id:"ndiminput-any--mat--tensor--number",level:4}],l={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"ndiminput-any--mat--tensor--number"},(0,o.kt)("inlineCode",{parentName:"h4"},"ndim(input: any[] | Mat | Tensor | number)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Any JavaScript array, Mat, Tensor or even a number"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: number")," - The dimension of the structure. "),(0,o.kt)("p",null,"This function, while small, is quite useful. It determines the dimension of a structure. For example, a vector is 1-dimensional. A 2-d array is 2-dimensional. A 3-d array or 3d tensor is of dimension 3 and so on. A number has dimension 0. Very useful for splitting cases based on dimension type."),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/ndim_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);