"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[5486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="1.4 \u63d0\u4ea4",l={unversionedId:"Workflow/1-4_Submit",id:"Workflow/1-4_Submit",title:"1.4 \u63d0\u4ea4",description:"\u4e0d\u540c\u9879\u76ee\u63d0\u4ea4\u7ffb\u8bd1\u7684\u65b9\u5f0f\u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u7ffb\u8bd1\u5c0f\u7ec4\u7684\u90ae\u4ef6\u5217\u8868\u8fdb\u884c\u63d0\u4ea4\uff0c\u5982\u679c\u4f60\u6709\u76f8\u5173\u9879\u76ee\u7684 DVCS \u5e10\u53f7\u5219\u8bf7\u76f4\u63a5\u63d0\u4ea4\u3002\u5982\u679c\u6ca1\u6709\u8d1f\u8d23\u7684\u5c0f\u7ec4\u4e5f\u6ca1\u6709\u76f8\u5173\u7684\u5e10\u53f7\uff0c\u8bf7\u628a\u4f60\u7684\u7ffb\u8bd1\u53d1\u9001\u5230\u5bf9\u5e94\u9879\u76ee\u7684\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\uff08\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c xxx-translators/i18n/intl/l10n\uff1b\u82e5\u6ca1\u6709\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\u5219\u53d1\u9001\u5230\u6587\u6863\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c\u4e3a xxx-doc\uff1b\u82e5\u8fd8\u662f\u6ca1\u6709\u5219\u53d1\u9001\u5230\u5f00\u53d1\u8005\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u4e3a xxx-dev/devel/developer\uff09\uff0c\u6216\u8005\u901a\u8fc7\u586b\u5199\u4e00\u4e2a Bug \u7684\u65b9\u5f0f\u8fdb\u884c\u63d0\u4ea4\u3002",source:"@site/docs/1_Workflow/1-4_Submit.md",sourceDirName:"1_Workflow",slug:"/Workflow/1-4_Submit",permalink:"/l10n4zh-cookbook/en/docs/next/Workflow/1-4_Submit",draft:!1,editUrl:"https://github.com/aosc-dev/l10n4zh-cookbook/blob/master/docs/1_Workflow/1-4_Submit.md",tags:[],version:"current",lastUpdatedBy:"Vantao",lastUpdatedAt:1695906272,formattedLastUpdatedAt:"Sep 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"1.3 \u7ffb\u8bd1",permalink:"/l10n4zh-cookbook/en/docs/next/Workflow/1-3_Translation"},next:{title:"2 PO \u6587\u4ef6\u683c\u5f0f\u548c\u76f8\u5173\u8981\u6c42",permalink:"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/overview"}},c={},p=[],s={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"14-\u63d0\u4ea4"},"1.4 \u63d0\u4ea4"),(0,o.kt)("p",null,"\u4e0d\u540c\u9879\u76ee\u63d0\u4ea4\u7ffb\u8bd1\u7684\u65b9\u5f0f\u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u7ffb\u8bd1\u5c0f\u7ec4\u7684\u90ae\u4ef6\u5217\u8868\u8fdb\u884c\u63d0\u4ea4\uff0c\u5982\u679c\u4f60\u6709\u76f8\u5173\u9879\u76ee\u7684 DVCS \u5e10\u53f7\u5219\u8bf7\u76f4\u63a5\u63d0\u4ea4\u3002\u5982\u679c\u6ca1\u6709\u8d1f\u8d23\u7684\u5c0f\u7ec4\u4e5f\u6ca1\u6709\u76f8\u5173\u7684\u5e10\u53f7\uff0c\u8bf7\u628a\u4f60\u7684\u7ffb\u8bd1\u53d1\u9001\u5230\u5bf9\u5e94\u9879\u76ee\u7684\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\uff08\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c xxx-translators/i18n/intl/l10n\uff1b\u82e5\u6ca1\u6709\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\u5219\u53d1\u9001\u5230\u6587\u6863\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c\u4e3a xxx-doc\uff1b\u82e5\u8fd8\u662f\u6ca1\u6709\u5219\u53d1\u9001\u5230\u5f00\u53d1\u8005\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u4e3a xxx-dev/devel/developer\uff09\uff0c\u6216\u8005\u901a\u8fc7\u586b\u5199\u4e00\u4e2a Bug \u7684\u65b9\u5f0f\u8fdb\u884c\u63d0\u4ea4\u3002"),(0,o.kt)("p",null,"\u4e00\u4e9b\u9879\u76ee\u53ef\u80fd\u8981\u6c42\u4f60\u63d0\u4ea4 patch\uff0c\u6b64\u65f6\u4f60\u5e94\u8be5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"diff -Nau old.po new.po")," \u7684\u5f62\u5f0f\u751f\u6210 patch\uff0c\u7136\u540e\u89c6\u60c5\u51b5\u624b\u52a8\u4fee\u6539\u5934\u90e8\u7684\u6587\u4ef6\u8def\u5f84\u3002"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u8bf7\u522b\u4eba\u4ee3\u4e3a\u63d0\u4ea4\u5230 TP \u9879\u76ee\u65f6 Last-translator \u4e0d\u4f1a\u662f\u4f60\uff0c\u56e0\u4e3a TP \u8981\u6c42\u8fd9\u9879\u9700\u8981\u662f\u63d0\u4ea4\u8005\u7684\u540d\u5b57\u548c\u90ae\u4ef6\u5730\u5740\uff0c\u4f60\u7684\u4fe1\u606f\u5c06\u4f1a\u51fa\u73b0\u5728\u6587\u4ef6\u5934\u6ce8\u91ca\u57df\u7684\u7248\u6743\u884c\u4e2d\u3002")),(0,o.kt)("p",null,"\u63d0\u4ea4\u540e\u8bf7\u6839\u636e\u60c5\u51b5\u518d\u53d1\u9001\u4e00\u5c01\u90ae\u4ef6\u6765\u53d6\u6d88\u539f\u6765\u534f\u8c03\u7ffb\u8bd1\u65f6\u7684\u5360\u7528\u58f0\u660e\u3002"))}d.isMDXComponent=!0}}]);