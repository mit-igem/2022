(self.webpackChunkmit_igem_2022_wiki=self.webpackChunkmit_igem_2022_wiki||[]).push([[464],{1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function s(e){return function(t){return n.createElement(u,l({attr:l({},e.attr)},t),i(e.child))}}function u(e){var t=function(t){var r,o=e.attr,a=e.size,i=e.title,s=c(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(861),o=r(3515),a=r(8416),l=r(7071),c=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=r(7294),p=r(4983).mdx,m=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),i=m(t),f=u.useMemo((function(){if(!r)return null;var e=s({React:u,mdx:p},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return u.createElement(f,s({},a))}},6880:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),o=function(){return n.createElement("footer",null,n.createElement("p",null,"© 2022 - Content on this site is licensed under a"," ",n.createElement("a",{class:"subfoot",href:"https://creativecommons.org/licenses/by/4.0/",rel:"license"},"Creative Commons Attribution 4.0 International license"),"."),n.createElement("p",null,"The repository used to create this website is available at"," ",n.createElement("a",{href:"https://gitlab.igem.org/2022/mit"},"gitlab.igem.org/2022/mit"),"."))},a=r(1279),l="Dropdown-module--icon--z3940",c="Dropdown-module--label--GwNZH",i=function(e){var t,r=e.label,o=e.children,i=(0,n.useRef)(),s=(0,n.useState)(!1),u=s[0],p=s[1],m=function(e){p(!0)},f={position:"absolute",left:null===(t=i.current)||void 0===t?void 0:t.offsetLeft,top:60,zIndex:10};return u?n.createElement("p",{ref:i,onMouseOver:m,onMouseLeave:function(e){p(!1)}},n.createElement("div",{className:c},r," ",n.createElement(a.i0B,{className:l})),n.createElement("div",{className:"Dropdown-module--dropdown--++grW",style:f},o)):n.createElement("p",{ref:i,onMouseOver:m,className:c},r," ",n.createElement(a.i0B,{className:l}))},s=r(1597),u=function(){return n.createElement("header",{className:"Header-module--header--8eixD"},n.createElement("div",{className:"Header-module--contentLimit--5kw0r"},n.createElement(s.rU,{to:"/"},n.createElement("h1",{className:"Header-module--logo--RlwY7"},"MIT iGEM 2022")),n.createElement("nav",{className:"Header-module--nav--V93Ca"},n.createElement(i,{label:"Team"},n.createElement(s.rU,{to:"/team"},"Team"),n.createElement(s.rU,{to:"/attributions"},"Attributions"),n.createElement(s.rU,{to:"/collaborations"},"Collaboration")),n.createElement(i,{label:"Project"},n.createElement(s.rU,{to:"/communication"},"Communication"),n.createElement(s.rU,{to:"/contribution"},"Contribution"),n.createElement(s.rU,{to:"/description"},"Description"),n.createElement(s.rU,{to:"/engineering"},"Engineering"),n.createElement(s.rU,{to:"/experiments"},"Experiments"),n.createElement(s.rU,{to:"/implementation"},"Implementation"),n.createElement(s.rU,{to:"/notebook"},"Notebook"),n.createElement(s.rU,{to:"/proof-of-concept"},"Proof of concept"),n.createElement(s.rU,{to:"/results"},"Results")),n.createElement(i,{label:"Parts"},n.createElement(s.rU,{to:"/parts"},"Parts"),n.createElement(s.rU,{to:"/improve"},"Improvement")),n.createElement(s.rU,{to:"/safety"},"Safety"),n.createElement(s.rU,{to:"/human-practices"},"Human Practices"),n.createElement(i,{label:"Awards"},n.createElement(s.rU,{to:"/education"},"Education"),n.createElement(s.rU,{to:"/entrepreneurship"},"Entrepreneurship"),n.createElement(s.rU,{to:"/hardware"},"Hardware"),n.createElement(s.rU,{to:"/model"},"Model"),n.createElement(s.rU,{to:"/software"},"Software")))))},p=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(u,null),t,n.createElement(o,null))}},6727:function(e,t,r){"use strict";var n=r(7294),o=r(4983),a=r(2102);t.Z=function(e){var t=e.body;return n.createElement(o.MDXProvider,{components:{}},n.createElement(a.MDXRenderer,null,t))}},6097:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(6880),a=r(6727);r(5604);t.default=function(e){var t=e.data;return n.createElement(o.Z,null,n.createElement("main",null,n.createElement("h1",null,"Lab notebook"),n.createElement(a.Z,{body:t.mdx.body})))}},5604:function(e,t,r){"use strict";r.r(t)},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,r){var n=r(6015),o=r(9617);function a(t,r,l){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},7071:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),l=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,r){var n=r(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);