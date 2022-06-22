"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9427],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(r),f=i,y=l["".concat(c,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var m=2;m<o;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1720:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={},c=void 0,m={unversionedId:"Properties/is_symmetric",id:"Properties/is_symmetric",title:"is_symmetric",description:"is_symmetric(input: any[])",source:"@site/math/Properties/is_symmetric.mdx",sourceDirName:"Properties",slug:"/Properties/is_symmetric",permalink:"/math/Properties/is_symmetric",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"is_number",permalink:"/math/Properties/is_number"},next:{title:"is_tril",permalink:"/math/Properties/is_tril"}},u={},p=[{value:"<code>is_symmetric(input: any[])</code>",id:"is_symmetricinput-any",level:4}],l={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"is_symmetricinput-any"},(0,o.kt)("inlineCode",{parentName:"h4"},"is_symmetric(input: any[])")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Any matrix, two-dimensional and square, to test if it's symmetric or not"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: boolean")," - True if it is symmetric (recall symmetric means the rows and columns being interchanged doesn't affect the matrix), false otherwise"),(0,o.kt)("p",null,"This function tests if a square 2d matrix is symmetric or not. One way to visually check is look at the diagonal - if the elements are symmetric across that, it is symmetric. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/is_symmetric_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);