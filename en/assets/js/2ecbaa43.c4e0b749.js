"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[7589],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>k});var n=o(7294);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){l(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(null==t)return{};var o,n,l=function(t,e){if(null==t)return{};var o,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(l[o]=t[o]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(l[o]=t[o])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(o),m=l,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return o?n.createElement(k,a(a({ref:e},c),{},{components:o})):n.createElement(k,a({ref:e},c))}));function k(t,e){var o=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:l,a[1]=i;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9192:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=o(7462),l=(o(7294),o(3905));const r={sidebar_position:2},a="4.2 Intltool",i={unversionedId:"ToolsManual/4-2_Intltool",id:"version-1.5.4/ToolsManual/4-2_Intltool",title:"4.2 Intltool",description:"intltool \u5de5\u5177\u96c6\u5b9e\u9645\u4e0a\u662f\u4e00\u7ec4\u811a\u672c\uff0c\u7528\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u5e38\u89c4\u7684\u7ffb\u8bd1\u6587\u4ef6\u7ef4\u62a4\u548c\u4e0e\u76ee\u6807 XML \u6587\u4ef6\u7684\u4ea4\u4e92\u3002\u6b64\u8f6f\u4ef6",source:"@site/versioned_docs/version-1.5.4/4_ToolsManual/4-2_Intltool.md",sourceDirName:"4_ToolsManual",slug:"/ToolsManual/4-2_Intltool",permalink:"/l10n4zh-cookbook/en/docs/ToolsManual/4-2_Intltool",draft:!1,editUrl:"https://github.com/aosc-dev/l10n4zh-cookbook/blob/master/versioned_docs/version-1.5.4/4_ToolsManual/4-2_Intltool.md",tags:[],version:"1.5.4",lastUpdatedBy:"LWanTao",lastUpdatedAt:1735228747,formattedLastUpdatedAt:"Dec 26, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"4.1 Gettext",permalink:"/l10n4zh-cookbook/en/docs/ToolsManual/4-1_Gettext"},next:{title:"\u540e\u8bb0",permalink:"/l10n4zh-cookbook/en/docs/Postscript"}},p={},u=[{value:"4.2.1 intltool-update\uff1a\u66f4\u65b0 POT \u5e76\u4e0e PO \u5408\u5e76",id:"421-intltool-update\u66f4\u65b0-pot-\u5e76\u4e0e-po-\u5408\u5e76",level:2},{value:"4.2.2 intltool-merge\uff1a\u4ea4\u53c9\u5408\u5e76 PO \u548c Gtk XML",id:"422-intltool-merge\u4ea4\u53c9\u5408\u5e76-po-\u548c-gtk-xml",level:2},{value:"4.2.3 xml2po\uff1a\u53cc\u5411\u8f6c\u6362 Gtk XML \u548c PO",id:"423-xml2po\u53cc\u5411\u8f6c\u6362-gtk-xml-\u548c-po",level:2}],c={toc:u},s="wrapper";function d(t){let{components:e,...o}=t;return(0,l.kt)(s,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"42-intltool"},"4.2 Intltool"),(0,l.kt)("p",null,"intltool \u5de5\u5177\u96c6\u5b9e\u9645\u4e0a\u662f\u4e00\u7ec4\u811a\u672c\uff0c\u7528\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u5e38\u89c4\u7684\u7ffb\u8bd1\u6587\u4ef6\u7ef4\u62a4\u548c\u4e0e\u76ee\u6807 XML \u6587\u4ef6\u7684\u4ea4\u4e92\u3002\u6b64\u8f6f\u4ef6\n\u5305\u4e00\u5171\u542b\u4e94\u4e2a\u547d\u4ee4\uff0c\u5bf9\u4e8e\u7ffb\u8bd1\u8005\u6765\u8bf4\u6bd4\u8f83\u5e38\u7528\u7684\u662f intltool-update \u548c intltool-merge\u3002\u8fd9\u7ec4\u5de5\u5177\u591a\u6570\u9700\u8981\n\u5728\u5b8c\u6574\u7684\u6e90\u4ee3\u7801\u6811\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"po/")," \u5b50\u76ee\u5f55\u4e0b\u8fd0\u884c\u3002\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8e intltool \u5de5\u5177\u7684\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb\u5176\u624b\u518c\u9875\u3002"),(0,l.kt)("h2",{id:"421-intltool-update\u66f4\u65b0-pot-\u5e76\u4e0e-po-\u5408\u5e76"},"4.2.1 intltool-update\uff1a\u66f4\u65b0 POT \u5e76\u4e0e PO \u5408\u5e76"),(0,l.kt)("p",null,"\u901a\u5e38\u4f7f\u7528\u5b83\u751f\u6210 POT \u6587\u4ef6\u65f6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"intltool-update -p")," \u751f\u6210\u4e00\u4e2a POT \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528\u5b83\u66f4\u65b0\u539f\u6709\u7684 PO \u6587\u4ef6\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"intltool-update zh_CN"),"\u3002\u8fd9\u6837\u5c06\u4f1a\u81ea\u52a8\u751f\u6210\u65b0\u7684 POT \u6587\u4ef6\u5e76\n\u66f4\u65b0 zh_CN.po\uff0c\u6700\u540e\u5f97\u5230\u7684\u6587\u4ef6\u662f\u66f4\u65b0\u540e\u7684 zh_CN.po\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-o")," \u9009\u9879\u6765\u5b9a\u4e49\u8f93\u51fa\u5230\u6307\u5b9a\u6587\u4ef6\u800c\u975e\u66f4\u65b0\n\u539f\u6765\u7684 PO \u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u67e5\u770b\u6e90\u4ee3\u7801\u4e2d\u7684 POTFILES \u6587\u4ef6\u662f\u5426\u88ab\u6b63\u786e\u7ef4\u62a4\uff0c\u901a\u5e38\u7ffb\u8bd1\u8005\u4e0d\u9700\u8981\u505a\u8fd9\u9879\u5de5\u4f5c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"intltool-update -m"),"\u3002\u5982\u679c\u8f93\u51fa\u4e3a\u7a7a\u5219\u4ee3\u8868\u4e00\u5207\u6b63\u5e38\uff0c\u5426\u5219\u5c06\u6709\u8be6\u7ec6\u63d0\u793a\u3002"),(0,l.kt)("h2",{id:"422-intltool-merge\u4ea4\u53c9\u5408\u5e76-po-\u548c-gtk-xml"},"4.2.2 intltool-merge\uff1a\u4ea4\u53c9\u5408\u5e76 PO \u548c Gtk XML"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"intltool-merge --utf8 PO_DIR INPUT OUTPUT")," \u5176\u4f5c\u7528\u4e3a\u5c06\u6307\u5b9a\u7684 PO_DIR \u76ee\u5f55\u4e2d\u7684\u6240\u6709 PO \u6587\u4ef6\n\u540c INPUT \u6587\u4ef6\u5408\u5e76\uff0c\u5e76\u5c06\u8f93\u51fa\u5199\u5165\u5230 OUTPUT \u6587\u4ef6\uff0cOUTPUT \u6587\u4ef6\u4e2d\u5305\u542b\u4e86 INPUT \u6587\u4ef6\u4e2d\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u548c\n\u5176\u4ed6 PO \u6587\u4ef6\u4e2d\u7684\u5df2\u7ffb\u8bd1\u5b57\u7b26\u4e32\u3002\u5728\u8fdb\u884c\u5408\u5e76\u524d\u4f1a\u628a\u6240\u6709\u6587\u4ef6\u90fd\u81ea\u52a8\u8f6c\u6362\u4e3a UTF-8 \u7f16\u7801\u3002"),(0,l.kt)("p",null,"\u5f53 INPUT \u4e3a\u4e00\u4e2a XML \u6587\u4ef6\u65f6\uff0c\u8f93\u51fa\u7684 OUTPUT \u6587\u4ef6\u4e5f\u5c06\u662f XML\uff0cPO \u6587\u4ef6\u4e2d\u7ffb\u8bd1\u7684\u5b57\u7b26\u4e32\u5c06\u4f5c\u4e3a\nxml:lang \u5c5e\u6027\u63d2\u5165\u5230\u539f XML \u4e2d\u4e00\u5e76\u5199\u5165 OUTPUT \u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"423-xml2po\u53cc\u5411\u8f6c\u6362-gtk-xml-\u548c-po"},"4.2.3 xml2po\uff1a\u53cc\u5411\u8f6c\u6362 Gtk XML \u548c PO"),(0,l.kt)("p",null,"xml2po \u662fgnome-doc-utils \u4e2d\u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u4e3b\u8981\u7528\u9014\u662f\u5728 XML \u548c PO \u6587\u4ef6\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\u548c\u5408\u5e76\u3002"),(0,l.kt)("p",null,"\u4ece XML \u6587\u4ef6\u751f\u6210 POT \u6587\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"xml2po -e -o book.pot book.xml")),(0,l.kt)("p",null,"\u5c06\u5df2\u7ffb\u8bd1\u7684 zh_CN.po \u5408\u5e76\u56de\u539f\u6765\u7684 XML \u6587\u4ef6\u4e2d\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/usr/bin/xml2po -e -p zh_CN.po -o book.zh_CN.xml book.xml")))}d.isMDXComponent=!0}}]);