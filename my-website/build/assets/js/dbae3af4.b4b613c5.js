"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8891],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,b=m["".concat(s,".").concat(f)]||m[f]||l[f]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={},s=void 0,p={unversionedId:"Properties/is_number",id:"Properties/is_number",title:"is_number",description:"is_number(input: any)",source:"@site/math/Properties/is_number.mdx",sourceDirName:"Properties",slug:"/Properties/is_number",permalink:"/math/Properties/is_number",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"det",permalink:"/math/Properties/det"},next:{title:"is_symmetric",permalink:"/math/Properties/is_symmetric"}},c={},l=[{value:"<code>is_number(input: any)</code>",id:"is_numberinput-any",level:4}],m={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"is_numberinput-any"},(0,o.kt)("inlineCode",{parentName:"h4"},"is_number(input: any)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"param")," ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," - Anything to test if it is a number or not"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"returns: boolean")," - True if it is a 'number' false otherwise. Infinity and NaN are defined to ",(0,o.kt)("strong",{parentName:"p"},"not")," be numbers in Hedgehog Lab. You can use hex and binary inputs as numbers - 0xfff0 etc. "),(0,o.kt)("p",null,"This function tests if the input is a number or not. It does not allow strings, infinity, NaN. It checks type too. "),(0,o.kt)("iframe",{src:"https://hlab.app/s/docs/isNumber_hbook",width:"100%",height:"500px"}))}f.isMDXComponent=!0}}]);