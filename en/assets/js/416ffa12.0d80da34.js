"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[2925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="3.2 \u6362\u884c\u3001\u884c\u5bbd\u548c\u5bf9\u9f50",u={unversionedId:"LanguageAndLayoutReq/3-2_",id:"version-1.5.4/LanguageAndLayoutReq/3-2_",title:"3.2 \u6362\u884c\u3001\u884c\u5bbd\u548c\u5bf9\u9f50",description:"Gettext PO \u6587\u4ef6\u672c\u8eab\u5bf9\u6362\u884c\u4e0d\u654f\u611f\uff0c\u4ee5\u4e0b\u8fd9\u51e0\u79cd\u5f62\u5f0f\u90fd\u662f\u4e00\u6837\u7684\uff1a",source:"@site/versioned_docs/version-1.5.4/3_LanguageAndLayoutReq/3-2_.md",sourceDirName:"3_LanguageAndLayoutReq",slug:"/LanguageAndLayoutReq/3-2_",permalink:"/l10n4zh-cookbook/en/docs/LanguageAndLayoutReq/3-2_",draft:!1,editUrl:"https://github.com/aosc-dev/l10n4zh-cookbook/blob/master/versioned_docs/version-1.5.4/3_LanguageAndLayoutReq/3-2_.md",tags:[],version:"1.5.4",lastUpdatedBy:"LWanTao",lastUpdatedAt:1735228747,formattedLastUpdatedAt:"Dec 26, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3.1 \u6807\u70b9\u7b26\u53f7",permalink:"/l10n4zh-cookbook/en/docs/LanguageAndLayoutReq/3-1_Punctuation"},next:{title:"3.3 \u65f6\u95f4\u683c\u5f0f",permalink:"/l10n4zh-cookbook/en/docs/LanguageAndLayoutReq/3-3_"}},l={},c=[],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"32-\u6362\u884c\u884c\u5bbd\u548c\u5bf9\u9f50"},"3.2 \u6362\u884c\u3001\u884c\u5bbd\u548c\u5bf9\u9f50"),(0,o.kt)("p",null,"Gettext PO \u6587\u4ef6\u672c\u8eab\u5bf9\u6362\u884c\u4e0d\u654f\u611f\uff0c\u4ee5\u4e0b\u8fd9\u51e0\u79cd\u5f62\u5f0f\u90fd\u662f\u4e00\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gettext"},'msgid ""\n"wut?"\nmsgstr ""\n"\u86e4\uff1f"\n\nmsgid "wut?"\nmsgstr "\u86e4\uff1f"\n\n# \u56e0\u4e3a\u4f1a\u62fc\u63a5\uff0c\u5176\u5b9e\u8fde\u8fd9\u6837\u90fd\u884c\uff1a\nmsgid "wu"\n "t?"\n')),(0,o.kt)("p",null,"\u4e0d\u8fc7 Unix \u7ec8\u7aef\u673a\u4e16\u754c\u4e2d\u5b58\u5728\u4e00\u884c 80 \u5217\u5bbd\u7684\u4f20\u7edf\u3002\u518d\u53bb\u6389 diff \u5360\u7528\u7684\u4e00\u884c\uff0c\u5c31\u5f97\u5230\u4e86 79 \u5217\u7684\u5e38\u89c1\u6807\u51c6\u3002"),(0,o.kt)("p",null,"\u65e2\u7136 CLI \u4e0b\u8fdb\u884c\u6587\u6863\u7f16\u8f91\u65f6\u9700\u8981\u6362\u884c\uff0c\u90a3\u4e48 CLI \u4e0b\u7684\u7a0b\u5e8f\u7ffb\u8bd1\u4e5f\u9700\u8981\u76f8\u5e94\u6362\u884c\u3002\u5c06 79 \u9664\u4ee5\u6bcf\u6c49\u5b57\u4e8c\u5217\u5bbd\u7684\u6570\u503c\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u5927\u81f4\u6bcf\u884c 39 \u4e2a\u6c49\u5b57\u5c31\u5e94\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"\\n")," \u6362\u884c\u3002\u5728\u7ffb\u8bd1 GUI \u7a0b\u5e8f\u65f6\uff0c\u5982\u679c\u770b\u5230\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"\\n")," \u4e14\u53d1\u73b0\u884c\u5c3e\u957f\u5ea6\u76f8\u8fd1\uff0c\u4e5f\u53ef\u80fd\u662f\u63d0\u793a\u9700\u8981\u624b\u52a8\u8003\u8651\u884c\u5bbd\u5ea6\u8fdb\u884c\u6362\u884c\u3002\u5982\u679c\u4f7f\u7528\u666e\u901a\u6587\u672c\u7f16\u8f91\u5668\uff0c\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"\\n")," \u6362\u884c\u65f6\u5efa\u8bae\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"PO"),"\n\u4ee3\u7801\u76f8\u5e94\u4f4d\u7f6e\u6362\u884c\u4ee5\u4fdd\u8bc1\u53ef\u8bfb\u6027\u3002\u65e7\u7248\u672c\u7684\u672c\u6587\u4ef6\u8fd8\u63d0\u793a\u5728 HTML \u4e2d\u505a\u7c7b\u4f3c\u5904\u7406\uff0c\u7136\u800c\u5b9e\u9645\u4e0a\u5e94\u8be5\u548c GUI \u60c5\u51b5\u7c7b\u4f3c\u2014\u2014\u4e00\u822c\u4e0d\u5927\u63a8\u8350 ",(0,o.kt)("inlineCode",{parentName:"p"},"<br/>")," \u5f3a\u884c\u6362\u884c\u3002"),(0,o.kt)("p",null,"CLI \u4e0b\u8fd8\u9700\u8981\u6ce8\u610f\u5bf9\u9f50\u60c5\u51b5\u3002\u4e00\u822c\u800c\u8a00\uff0cTAB \u662f\u6700\u7a33\u59a5\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u6709\u4e9b\u7a0b\u5e8f\uff08\u4f8b\u5982 minicom\uff09\u53ef\u80fd\u4f1a\u88ab TAB \u641e\u51fa\u8ba1\u7b97\u9519\u8bef\uff0c\u6b64\u65f6\u5c31\u5fc5\u987b\u624b\u5de5\u4f7f\u7528\u7a7a\u683c\u5bf9\u9f50\u3002\u624b\u5de5\u5bf9\u9f50\u65f6\uff0c\u8981\u4fdd\u8bc1\u81ea\u5df1\u7684\u7f16\u8f91\u5668\u5b57\u4f53\u7b49\u5bbd\u4e14\u6ee1\u8db3\u6bcf\u6c49\u5b57\u4e8c\u5217\u7684\u4e60\u60ef\u6570\u503c\uff08\u63d2\u5165\u5e7f\u544a\uff1a\u53ef\u4ee5\u8bd5\u8bd5 ",(0,o.kt)("a",{parentName:"p",href:"https://be5invis.github.io/Iosevka/inziu.html"},"Inziu Iosevka SC"),"\uff09\u3002"),(0,o.kt)("p",null,"\u6c38\u8fdc\u4e0d\u8981\u5728 GUI \u7a0b\u5e8f\u4e2d\u5c1d\u8bd5\u589e\u52a0\u539f\u6587\u6ca1\u6709\u7684\u5bf9\u9f50\uff0c\u5c24\u5176\u662f\u4e0d\u8981\u5728\u4e2d\u6587\u8bcd\u5f53\u4e2d\u52a0\u7a7a\u683c\uff08\u5982 \u554a  \u554a\uff09\u3002\u5982\u679c\u771f\u7684\u60f3\u8981\u5bf9\u9f50\u7684\u8bdd\uff0c\u90a3\u5c31\u5c1d\u8bd5\u8c03\u6574\u7528\u8bcd\u8fbe\u6210\u4e00\u81f4\uff08",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AOSC-Dev/translations/issues/16#issuecomment-178979834"},"\u4f8b"),"\uff09\u3002\u5982\u679c\u8981\u7528\u7a7a\u683c\u7684\u8bdd\uff0c\u90a3\u4e48\u53ea\u6709\u5bbd\u5ea6\u4e25\u683c\u5df2\u77e5\u7684\u7a7a\u683c\u6709\u610f\u4e49\uff0c\u5982\u5168\u89d2\u7a7a\u683c (U+3000)\u3002"))}d.isMDXComponent=!0}}]);