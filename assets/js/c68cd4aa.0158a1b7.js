"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[6143],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),o=r(6010),a=r(2802),c=r(9960),i=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:a,description:c}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},r," ",a),c&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const c=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},1515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(2991);const c={title:"1 \u5de5\u4f5c\u6d41\u7a0b"},i=void 0,l={unversionedId:"Workflow/overview",id:"Workflow/overview",title:"1 \u5de5\u4f5c\u6d41\u7a0b",description:"\u81ea\u7531\u8f6f\u4ef6\u7ffb\u8bd1\u7684\u5de5\u4f5c\u6d41\u7a0b\u57fa\u672c\u5206\u4e3a\u51c6\u5907\u3001\u534f\u8c03\u3001\u7ffb\u8bd1\u3001\u63d0\u4ea4\u56db\u6b65\uff0c\u4e0d\u540c\u9879\u76ee\u5404\u6709\u4e0d\u540c\u3002",source:"@site/docs/1_Workflow/overview.mdx",sourceDirName:"1_Workflow",slug:"/Workflow/overview",permalink:"/l10n4zh-cookbook/docs/next/Workflow/overview",draft:!1,editUrl:"https://github.com/aosc-dev/l10n4zh-cookbook/blob/master/docs/1_Workflow/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Vantao",lastUpdatedAt:1695906272,formattedLastUpdatedAt:"2023\u5e749\u670828\u65e5",frontMatter:{title:"1 \u5de5\u4f5c\u6d41\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"\u5c01\u9762",permalink:"/l10n4zh-cookbook/docs/next/intro"},next:{title:"1.1 \u51c6\u5907",permalink:"/l10n4zh-cookbook/docs/next/Workflow/1-1_Preparation"}},s={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u81ea\u7531\u8f6f\u4ef6\u7ffb\u8bd1\u7684\u5de5\u4f5c\u6d41\u7a0b\u57fa\u672c\u5206\u4e3a\u51c6\u5907\u3001\u534f\u8c03\u3001\u7ffb\u8bd1\u3001\u63d0\u4ea4\u56db\u6b65\uff0c\u4e0d\u540c\u9879\u76ee\u5404\u6709\u4e0d\u540c\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u7ffb\u8bd1\u5e73\u53f0\uff0c\u5982 Launchpad\uff0cTransifex \u548c Crowdin\uff0c\u63d0\u4f9b\u57fa\u4e8e\u7f51\u9875\u7684\u63d0\u4ea4\u65b9\u5f0f\u3002\u8fd9\u79cd\u5e73\u53f0\u5728\u534f\u4f5c\u4e0a\u7684\u5206\u5757\u51b2\u7a81\u76f8\u5e94\u8f83\u5c11\uff0c\u4e14\u5e38\u63d0\u4f9b\u201c\u7ffb\u8bd1\u5efa\u8bae\u201d\u6682\u5b58\u533a\u7b49\u5f85\u5904\u7406\u3002\u8fd9\u79cd\u5e73\u53f0\u7684\u539f\u751f\u6570\u636e\u683c\u5f0f\u5e38\u4e3a XLIFF\u3002")),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);