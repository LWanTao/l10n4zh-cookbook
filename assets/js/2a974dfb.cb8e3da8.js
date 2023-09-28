"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[9461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),a=n(2802),i=n(9960),c=n(3919),l=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function p(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(d,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},4764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(2991);const i={title:"3 \u8bed\u8a00\u548c\u6392\u7248\u8981\u6c42"},c=void 0,l={unversionedId:"LanguageAndLayoutReq/overview",id:"LanguageAndLayoutReq/overview",title:"3 \u8bed\u8a00\u548c\u6392\u7248\u8981\u6c42",description:"\u8bed\u8a00\u57fa\u672c\u8981\u6c42\u57fa\u672c\u4e0a\u5c31\u53ea\u6709\u8fd9\u51e0\u70b9\uff1a",source:"@site/docs/3_LanguageAndLayoutReq/overview.mdx",sourceDirName:"3_LanguageAndLayoutReq",slug:"/LanguageAndLayoutReq/overview",permalink:"/l10n4zh-cookbook/docs/next/LanguageAndLayoutReq/overview",draft:!1,editUrl:"https://github.com/aosc-dev/l10n4zh-cookbook/blob/master/docs/3_LanguageAndLayoutReq/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Vantao",lastUpdatedAt:1695906272,formattedLastUpdatedAt:"2023\u5e749\u670828\u65e5",frontMatter:{title:"3 \u8bed\u8a00\u548c\u6392\u7248\u8981\u6c42"},sidebar:"tutorialSidebar",previous:{title:"2.4 \u6ce8\u91ca\u548c\u5b57\u7b26\u4e32\u5c5e\u6027",permalink:"/l10n4zh-cookbook/docs/next/AboutPOFiles/2-4_"},next:{title:"3.1 \u6807\u70b9\u7b26\u53f7",permalink:"/l10n4zh-cookbook/docs/next/LanguageAndLayoutReq/3-1_Punctuation"}},s={},u=[],p={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u8bed\u8a00\u57fa\u672c\u8981\u6c42\u57fa\u672c\u4e0a\u5c31\u53ea\u6709\u8fd9\u51e0\u70b9\uff1a"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"\u51c6\u786e\u8868\u8ff0\u539f\u6587\u542b\u4e49\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u6587\u5e94\u8be5\u610f\u601d\u6e05\u6670\u4e14\u7b26\u5408\u4e2d\u6587\u8868\u8fbe\u4e60\u60ef\uff1b\u81ea\u5df1\u7684\u7ffb\u8bd1\u591a\u8bfb\u51e0\u904d\u603b\u6ca1\u4ec0\u4e48\u574f\u5904\u3002",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u4ece\u5176\u4ed6\u4e2d\u6587\u8bed\u533a\u501f\u52a9 OpenCC \u7b49\u5de5\u5177\u8fdb\u884c\u5b57\u8bcd\u8f6c\u6362\u5bfc\u5165\uff0c\u8bf7\u6ce8\u610f\u4ed4\u7ec6\u68c0\u67e5\u8bed\u5e8f\u548c\u7528\u8bcd\u3002\u4e00\u822c\u800c\u8a00\uff0c\u8fd9\u4e9b\u6d88\u606f\u90fd\u8be5\u5148\u6807\u4e3a fuzzy \u518d\u5ba1\u9605\u4e00\u6b21\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u82f1\u6587\u5728\u8bed\u5e8f\u4e60\u60ef\u4e0a\u533a\u522b\u8f83\u5927\uff0c\u4f8b\u5982\u82f1\u6587\u5e38\u540e\u7f6e\u52a8\u8bcd7\u548c\u4f7f\u7528\u88ab\u52a8\u53e5\u3002\u4f8b\u5982 File is being saved\uff0c\u6309\u4e2d\u6587\u7684\u4e60\u60ef\u662f\u201c\u6b63\u5728\u4fdd\u5b58\u6587\u4ef6\u201d\u3002\u82f1\u6587\u4e2d\u5206\u8bcd\u7b49\u65f6\u6001\u7684\u4f7f\u7528\u4e5f\u8981\u5728\u7ffb\u8bd1\u4e2d\u7528\u201c\u6b63\uff08\u5728\uff09\u201d\u3001\u201c\u5df2\uff08\u7ecf\uff09\u201d\u3001\u201c\u4e86\u201d\u3001\u201c\u5b8c\u6210\u201d\u7b49\u4f53\u73b0\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u539f\u6587\u5982\u679c\u8868\u8fbe\u4e0d\u6e05\u6670\uff0c\u4e2d\u6587\u5e94\u8be5\u610f\u8bd1\uff0c\u5e76\u4e14\u5e94\u6839\u636e\u4e0a\u4e0b\u6587\u548c\u6ce8\u91ca\u8fdb\u884c\u63a8\u65ad\u5e76\u586b\u8865\u76f8\u5e94\u7684\u4fe1\u606f\u3002",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8fd9\u79cd\u60c5\u51b5\u4e0d\u80fd\u592a\u591a\uff0c\u4e0a\u4e0b\u6587\u5fc5\u987b\u770b\u660e\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u5bf9\u540c\u6837\u77ed\u8bed\u7684\u7ffb\u8bd1\uff0c\u524d\u540e\u5fc5\u987b\u4e00\u81f4\u3002\u5584\u7528\u6587\u672c\u7f16\u8f91\u5668\u7684\u641c\u7d22\u529f\u80fd\u548c msggrep\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6709\u4e00\u4e9b\u8bcd\u6c47\u4e0d\u8be5\u88ab\u7ffb\u8bd1\uff0c\u4f8b\u5982\u524d\u9762\u63d0\u5230\u7684\u7a0b\u5e8f\u5173\u952e\u8bcd\u3002")),(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u4e00\u81f4\u7684\u8bed\u8a00\u98ce\u683c\u5bf9\u4e8e\u7528\u6237\u4f53\u9a8c\u7684\u4e00\u81f4\u6027\u5f88\u91cd\u8981\u3002\u4e0d\u540c\u5927\u9879\u76ee\u4e2d\u201c\u4f60\u201d\u548c\u201c\u60a8\u201d\u7684\u504f\u597d\u8fd9\u79cd\u7ec6\u8282\u4e5f\u4f1a\u5728\u7ec6\u5fc3\u7684\u7528\u6237\u9762\u524d\u53d8\u5f97\u975e\u5e38\u660e\u663e\u3002")),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);