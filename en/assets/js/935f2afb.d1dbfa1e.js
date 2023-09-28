"use strict";(self.webpackChunkl_10_n_4_zh_cookbook=self.webpackChunkl_10_n_4_zh_cookbook||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Canary \ud83d\udea7","banner":"unreleased","badge":true,"noIndex":false,"className":"docs-version-current","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u5c01\u9762","href":"/l10n4zh-cookbook/en/docs/next/intro","docId":"intro"},{"type":"category","label":"1 \u5de5\u4f5c\u6d41\u7a0b","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"1.1 \u51c6\u5907","href":"/l10n4zh-cookbook/en/docs/next/Workflow/1-1_Preparation","docId":"Workflow/1-1_Preparation"},{"type":"link","label":"1.2 \u534f\u8c03","href":"/l10n4zh-cookbook/en/docs/next/Workflow/1-2_Coordination","docId":"Workflow/1-2_Coordination"},{"type":"link","label":"1.3 \u7ffb\u8bd1","href":"/l10n4zh-cookbook/en/docs/next/Workflow/1-3_Translation","docId":"Workflow/1-3_Translation"},{"type":"link","label":"1.4 \u63d0\u4ea4","href":"/l10n4zh-cookbook/en/docs/next/Workflow/1-4_Submit","docId":"Workflow/1-4_Submit"}],"href":"/l10n4zh-cookbook/en/docs/next/Workflow/overview"},{"type":"category","label":"2 PO \u6587\u4ef6\u683c\u5f0f\u548c\u76f8\u5173\u8981\u6c42","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"2.1 \u57fa\u7840\u4fe1\u606f","href":"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/2-1_BasicInfo","docId":"AboutPOFiles/2-1_BasicInfo"},{"type":"link","label":"2.2 \u6587\u4ef6\u5934","href":"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/2-2_HeadOfFile","docId":"AboutPOFiles/2-2_HeadOfFile"},{"type":"link","label":"2.3 \u5b57\u7b26\u8f6c\u4e49\u548c\u683c\u5f0f","href":"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/2-3_","docId":"AboutPOFiles/2-3_"},{"type":"link","label":"2.4 \u6ce8\u91ca\u548c\u5b57\u7b26\u4e32\u5c5e\u6027","href":"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/2-4_","docId":"AboutPOFiles/2-4_"}],"href":"/l10n4zh-cookbook/en/docs/next/AboutPOFiles/overview"},{"type":"category","label":"3 \u8bed\u8a00\u548c\u6392\u7248\u8981\u6c42","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"3.1 \u6807\u70b9\u7b26\u53f7","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-1_Punctuation","docId":"LanguageAndLayoutReq/3-1_Punctuation"},{"type":"link","label":"3.2 \u6362\u884c\u3001\u884c\u5bbd\u548c\u5bf9\u9f50","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-2_","docId":"LanguageAndLayoutReq/3-2_"},{"type":"link","label":"3.3 \u65f6\u95f4\u683c\u5f0f","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-3_","docId":"LanguageAndLayoutReq/3-3_"},{"type":"link","label":"3.4 \u547d\u4ee4\u884c\u7a0b\u5e8f\u5e2e\u52a9\u6d88\u606f","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-4_","docId":"LanguageAndLayoutReq/3-4_"},{"type":"link","label":"3.5 \u684c\u9762\u6587\u4ef6","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-5_","docId":"LanguageAndLayoutReq/3-5_"},{"type":"link","label":"3.6 \u5176\u4ed6\u7ec6\u8282","href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/3-6_","docId":"LanguageAndLayoutReq/3-6_"}],"href":"/l10n4zh-cookbook/en/docs/next/LanguageAndLayoutReq/overview"},{"type":"category","label":"4 \u5de5\u5177\u4f7f\u7528\u901f\u67e5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"4.1 Gettext","href":"/l10n4zh-cookbook/en/docs/next/ToolsManual/4-1_Gettext","docId":"ToolsManual/4-1_Gettext"},{"type":"link","label":"4.2 Intltool","href":"/l10n4zh-cookbook/en/docs/next/ToolsManual/4-2_Intltool","docId":"ToolsManual/4-2_Intltool"}],"href":"/l10n4zh-cookbook/en/docs/next/ToolsManual/overview"},{"type":"link","label":"\u540e\u8bb0","href":"/l10n4zh-cookbook/en/docs/next/Postscript","docId":"Postscript"}]},"docs":{"AboutPOFiles/2-1_BasicInfo":{"id":"AboutPOFiles/2-1_BasicInfo","title":"2.1 \u57fa\u7840\u4fe1\u606f","description":"PO \u6587\u4ef6\u4e3b\u8981\u662f msgid \u548c msgstr \u4e00\u4e00\u5bf9\u5e94\u7684\u5e8f\u5217\uff0c\u5916\u52a0\u4e00\u4e9b\u5355\u590d\u6570\u60c5\u51b5\u3002","sidebar":"tutorialSidebar"},"AboutPOFiles/2-2_HeadOfFile":{"id":"AboutPOFiles/2-2_HeadOfFile","title":"2.2 \u6587\u4ef6\u5934","description":"PO\u6587\u4ef6\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7amsgid\u7684\u5bf9\u5e94\u503c\u4ee5\u5b58\u50a8\u6587\u4ef6\u5934\u7684\u6570\u636e\uff0c\u5e76\u4e14\u5176\u4e2d\u6709\u591a\u4e2a\u5fc5\u987b\u9879\u3002\u540c\u65f6\uff0cPO\u6587\u4ef6\u5934","sidebar":"tutorialSidebar"},"AboutPOFiles/2-3_":{"id":"AboutPOFiles/2-3_","title":"2.3 \u5b57\u7b26\u8f6c\u4e49\u548c\u683c\u5f0f","description":"\u5728\u7ffb\u8bd1\u8fc7\u7a0b\u4e2d\u4f60\u4f1a\u9047\u5230\u4e0d\u5c11\u7279\u6b8a\u542b\u4e49\u7684\u5b57\u7b26\u3002\u6709\u4e9b\u4f1a\u88ab\u4f60\u7684\u7f16\u8f91\u5668\u7a81\u51fa\u663e\u793a\uff0c\u4f46\u4f60\u8fd8\u662f\u5f97\u77e5\u9053\u542b\u4e49\u3002","sidebar":"tutorialSidebar"},"AboutPOFiles/2-4_":{"id":"AboutPOFiles/2-4_","title":"2.4 \u6ce8\u91ca\u548c\u5b57\u7b26\u4e32\u5c5e\u6027","description":"Gettext PO \u5b57\u7b26\u4e32\u6ce8\u91ca\u8fd8\u63d0\u4f9b\u591a\u79cd\u5c5e\u6027\u3002","sidebar":"tutorialSidebar"},"AboutPOFiles/overview":{"id":"AboutPOFiles/overview","title":"2 PO \u6587\u4ef6\u683c\u5f0f\u548c\u76f8\u5173\u8981\u6c42","description":"GNU gettext \u662f GNU \u7684\u672c\u5730\u5316\u6846\u67b6\uff0c\u4e3b\u8981\u5185\u5bb9\u662f\u4e00\u4e2a\u5582\u8fdb\u53bb\u82f1\u6587\u5410\u51fa\u6765\u7ffb\u8bd1\u6587\u4ef6\u4e2d\u7684\u5bf9\u5e94\u503c\u7684\u4e00\u7ec4 C \u51fd\u6570\u548c\u5904\u7406\u7ffb\u8bd1\u6587\u4ef6\u7684\u8bf8\u591a\u5de5\u5177\u3002","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u5c01\u9762","description":"\u7248\u672c\u4fe1\u606f","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-1_Punctuation":{"id":"LanguageAndLayoutReq/3-1_Punctuation","title":"3.1 \u6807\u70b9\u7b26\u53f7","description":"\u57fa\u672c\u4e0a\uff0c\u9664\u4e86\u5706\u62ec\u53f7\u548c\u7701\u7565\u53f7\u4fdd\u6301\u4e0d\u53d8\u5916\uff0c\u90fd\u8be5\u6539\u6210\u7b26\u5408\u6c49\u8bed\u98ce\u683c\u7684\u5168\u89d2\u6807\u70b9\u3002\u897f\u6587\u6392\u5370\u65f6\u4e00\u822c\u5728\u53e5\u8bfb\u540e\u52a0\u4e00\u7a7a\u683c\u6765\u4fdd\u8bc1\u95f4\u9699\u6b63\u5e38\uff0c\u6362\u5230\u4e2d\u6587\u4e2d\u81ea\u7136\u8981\u53bb\u6389\u3002\u6807\u70b9\u7684\u5b8c\u6574\u7528\u6cd5\u5b9e\u9645\u4e0a\u5e94\u53c2\u7167\u300a\u73b0\u4ee3\u6c49\u8bed\u8bcd\u5178\u300b\u6216\u8005\u300a\u65b0\u534e\u5b57\u5178\u300b\u9644\u5f55\u7684\u90a3\u5f20\u300a\u6807\u70b9\u7b26\u53f7\u7528\u6cd5\u300b\u3002\u4e00\u822c\u9f13\u52b1\u4f7f\u7528 Unicode \u901a\u7528\u6807\u70b9 (General Punctuation)\u3002","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-2_":{"id":"LanguageAndLayoutReq/3-2_","title":"3.2 \u6362\u884c\u3001\u884c\u5bbd\u548c\u5bf9\u9f50","description":"Gettext PO \u6587\u4ef6\u672c\u8eab\u5bf9\u6362\u884c\u4e0d\u654f\u611f\uff0c\u4ee5\u4e0b\u8fd9\u51e0\u79cd\u5f62\u5f0f\u90fd\u662f\u4e00\u6837\u7684\uff1a","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-3_":{"id":"LanguageAndLayoutReq/3-3_","title":"3.3 \u65f6\u95f4\u683c\u5f0f","description":"\u9274\u4e8e\u5173\u4e8e\u65e5\u671f\u548c\u65f6\u95f4\u7684\u8bd1\u6cd5\u5341\u5206\u590d\u6742\uff0c\u73b0\u5728\u5c06\u56fd\u5bb6\u6807\u51c620\u4e2d\u6709\u5173\u89c4\u5b9a\u7b80\u8981\u4ecb\u7ecd\u4e00\u4e0b\uff0c\u5e76\u7ed9\u51fa\u63a8\u8350\u8bd1\u6cd5\u3002\u4ee5\u4e0b\u662f\u6700\u9700\u8981\u6ce8\u610f\u7684\u51e0\u4e2a\u8981\u70b9\uff1a","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-4_":{"id":"LanguageAndLayoutReq/3-4_","title":"3.4 \u547d\u4ee4\u884c\u7a0b\u5e8f\u5e2e\u52a9\u6d88\u606f","description":"\u547d\u4ee4\u884c\u7a0b\u5e8f\u4e2d\u5e2e\u52a9\u6d88\u606f\u7684\u4f8b\u5b50\u8bcd\uff0c\u5982 NAME \u4e00\u822c\u90fd\u5e94\u8fdb\u884c\u7ffb\u8bd1\u3002\u5728\u63a5\u4e0b\u6765\u7684\u6587\u5b57\u4e2d\u4f7f\u7528 \u67d0\u67d0  \u67d0\u67d0 \u6765\u8fdb\u884c\u6307\u4ee3\uff1b\u5bf9\u4e8e\u8001\u7ffb\u8bd1\u53ef\u4ee5\u5c06 =FILENAME \u66ff\u6362\u4e3a =\u6587\u4ef6\u540d\uff0c\u7136\u540e\u518d\u5bf9 FILENAME \u6309\u7167\u4e24\u8fb9\u52a0\u7a7a\u683c\u3001\u4e00\u8fb9\u52a0\u548c\u4e0d\u52a0\u4e09\u79cd\u60c5\u51b5\u66ff\u6362\u4e3a `` \u4ee5\u4fbf\u5feb\u901f\u64cd\u4f5c\u3002\u8981\u7279\u522b\u5c0f\u5fc3\u5e2e\u52a9\u6d88\u606f\u7684\u5bf9\u9f50\u3002","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-5_":{"id":"LanguageAndLayoutReq/3-5_","title":"3.5 \u684c\u9762\u6587\u4ef6","description":"\u7ffb\u8bd1\u684c\u9762\u6587\u4ef6\uff08\u901a\u5e38\u4e3a .desktop \u540e\u7f00\uff09\u7684\u7ffb\u8bd1\u5305\u542b\u56db\u4e2a\u90e8\u5206\uff1a","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/3-6_":{"id":"LanguageAndLayoutReq/3-6_","title":"3.6 \u5176\u4ed6\u7ec6\u8282","description":"\u4ee5\u4e0b\u6700\u65e9\u662f csslayer \u5bf9\u4e8e\u4e00\u4e9b\u7528\u8bcd\u7684\u5efa\u8bae\uff1a","sidebar":"tutorialSidebar"},"LanguageAndLayoutReq/overview":{"id":"LanguageAndLayoutReq/overview","title":"3 \u8bed\u8a00\u548c\u6392\u7248\u8981\u6c42","description":"\u8bed\u8a00\u57fa\u672c\u8981\u6c42\u57fa\u672c\u4e0a\u5c31\u53ea\u6709\u8fd9\u51e0\u70b9\uff1a","sidebar":"tutorialSidebar"},"Postscript":{"id":"Postscript","title":"\u540e\u8bb0","description":"\u672c\u7ad9\u70b9\u524d\u8eab\u4e3a\u53d1\u884c\u81ea\u5b89\u540c\u5f00\u6e90\u793e\u533a (AOSC) \u7684\u300a\u5927\u9646\u7b80\u4e2d\u81ea\u7531\u8f6f\u4ef6\u672c\u5730\u5316\u5de5\u4f5c\u6307\u5357\u300b\uff08PDF \u7248\u672c\uff09\uff0c\u5b83\u662f\u4e00\u4efd\u4ee5 KDE \u4e2d\u56fd\u7ad9\u70b9\u4e0a\u520a\u8f7d\u7684 I18N/L10N \u5de5\u4f5c\u6d41\u7a0b\u4e3a\u84dd\u672c\u6240\u4fee\u8ba2\u7684\u5de5\u4f5c\u6307\u5357\uff0c\u8fc7\u7a0b\u4e2d\u53c2\u8003\u4e86 i18n- zh \u4ee5\u53ca GNOME Live \u4e0a\u7684\u4e00\u4e9b\u6587\u7ae0\uff0c\u8fd8\u5305\u542b\u4e86 iKDE \u4e0a csslayer \u7684\u5982\u4f55\u7ffb\u8bd1 KDE \u4e2d\u7684\u90e8\u5206\u5185\u5bb9\uff0c\u540e\u6765\u53c8\u8865\u5145\u4e86\u5728\u7e41\u4f53\u4e2d\u6587\u5206\u652f\u4e2d\u505a\u51fa\u7684\u4e00\u4e9b\u6539\u52a8\u3002","sidebar":"tutorialSidebar"},"ToolsManual/4-1_Gettext":{"id":"ToolsManual/4-1_Gettext","title":"4.1 Gettext","description":"- \u901a\u7528\u53c2\u6570  -o \u8f93\u51fa\u6587\u4ef6\u540d [-w \u884c\u5bbd\u5ea6|--no-wrap]","sidebar":"tutorialSidebar"},"ToolsManual/4-2_Intltool":{"id":"ToolsManual/4-2_Intltool","title":"4.2 Intltool","description":"intltool \u5de5\u5177\u96c6\u5b9e\u9645\u4e0a\u662f\u4e00\u7ec4\u811a\u672c\uff0c\u7528\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u5e38\u89c4\u7684\u7ffb\u8bd1\u6587\u4ef6\u7ef4\u62a4\u548c\u4e0e\u76ee\u6807 XML \u6587\u4ef6\u7684\u4ea4\u4e92\u3002\u6b64\u8f6f\u4ef6","sidebar":"tutorialSidebar"},"ToolsManual/overview":{"id":"ToolsManual/overview","title":"4 \u5de5\u5177\u4f7f\u7528\u901f\u67e5","description":"Gettext \u662f\u4f60\u51e0\u4e4e\u4e0d\u53ef\u80fd\u907f\u514d\u4f7f\u7528\u7684\u5de5\u5177\uff0cInittools \u53c8\u662f GNOME \u7ffb\u8bd1\u7684\u91cd\u5934\u620f\u3002\u9664\u4e86\u8fd9\u4e9b\u4e4b\u5916\uff0c\u4f60\u4e5f\u5e94\u8be5\u77e5\u9053 Translate Toolkit \u7684\u51e0\u4e2a\u9ed1\u79d1\u6280\u5de5\u5177\uff08\u4f8b\u5982 pofilter \u67e5\u9519\uff09\uff0c\u4ee5\u53ca\u4e0d\u5c11 pot \u662f\u7528 po4a \u8f6c\u6362\u6765\u7684\u8fd9\u4ef6\u4e8b\u3002","sidebar":"tutorialSidebar"},"Workflow/1-1_Preparation":{"id":"Workflow/1-1_Preparation","title":"1.1 \u51c6\u5907","description":"\u4e3a\u4fdd\u8bc1\u7ffb\u8bd1\u7684\u8d28\u91cf\uff0c\u8bf7\u5728\u7ffb\u8bd1\u524d\u505a\u597d\u5982\u4e0b\u51c6\u5907\uff1a","sidebar":"tutorialSidebar"},"Workflow/1-2_Coordination":{"id":"Workflow/1-2_Coordination","title":"1.2 \u534f\u8c03","description":"\u534f\u8c03\u5de5\u4f5c\u7684\u76ee\u7684\u662f\u4e3a\u4e86\u9632\u6b62\u7ffb\u8bd1\u4e0a\u7684\u51b2\u7a81\uff0c\u4e5f\u5c31\u662f\u91cd\u590d\u7ffb\u8bd1\u7684\u60c5\u51b5\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0d\u4f46\u9020\u6210\u91cd\u590d\u52b3\u52a8\uff0c\u8fd8\u4f1a\u9020\u6210\u5408\u5e76\u56f0\u96be\uff0c\u53ef\u8c13\u4e8b\u500d\u529f\u534a\u3002","sidebar":"tutorialSidebar"},"Workflow/1-3_Translation":{"id":"Workflow/1-3_Translation","title":"1.3 \u7ffb\u8bd1","description":"\u672c\u7ae0\u8282\u63cf\u8ff0 Gettext PO \u6587\u4ef6\u7684\u7ffb\u8bd1\u65b9\u5f0f\u3002\u5982\u679c\u4f60\u4f7f\u7528\u522b\u7684\u7ffb\u8bd1\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8003\u8651\u8df3\u8fc7\u3002","sidebar":"tutorialSidebar"},"Workflow/1-4_Submit":{"id":"Workflow/1-4_Submit","title":"1.4 \u63d0\u4ea4","description":"\u4e0d\u540c\u9879\u76ee\u63d0\u4ea4\u7ffb\u8bd1\u7684\u65b9\u5f0f\u4e0d\u5b8c\u5168\u76f8\u540c\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u901a\u8fc7\u7ffb\u8bd1\u5c0f\u7ec4\u7684\u90ae\u4ef6\u5217\u8868\u8fdb\u884c\u63d0\u4ea4\uff0c\u5982\u679c\u4f60\u6709\u76f8\u5173\u9879\u76ee\u7684 DVCS \u5e10\u53f7\u5219\u8bf7\u76f4\u63a5\u63d0\u4ea4\u3002\u5982\u679c\u6ca1\u6709\u8d1f\u8d23\u7684\u5c0f\u7ec4\u4e5f\u6ca1\u6709\u76f8\u5173\u7684\u5e10\u53f7\uff0c\u8bf7\u628a\u4f60\u7684\u7ffb\u8bd1\u53d1\u9001\u5230\u5bf9\u5e94\u9879\u76ee\u7684\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\uff08\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c xxx-translators/i18n/intl/l10n\uff1b\u82e5\u6ca1\u6709\u7ffb\u8bd1\u8005\u90ae\u4ef6\u5217\u8868\u5219\u53d1\u9001\u5230\u6587\u6863\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u7c7b\u4f3c\u4e3a xxx-doc\uff1b\u82e5\u8fd8\u662f\u6ca1\u6709\u5219\u53d1\u9001\u5230\u5f00\u53d1\u8005\u90ae\u4ef6\u5217\u8868\uff0c\u4e00\u822c\u540d\u79f0\u4e3a xxx-dev/devel/developer\uff09\uff0c\u6216\u8005\u901a\u8fc7\u586b\u5199\u4e00\u4e2a Bug \u7684\u65b9\u5f0f\u8fdb\u884c\u63d0\u4ea4\u3002","sidebar":"tutorialSidebar"},"Workflow/overview":{"id":"Workflow/overview","title":"1 \u5de5\u4f5c\u6d41\u7a0b","description":"\u81ea\u7531\u8f6f\u4ef6\u7ffb\u8bd1\u7684\u5de5\u4f5c\u6d41\u7a0b\u57fa\u672c\u5206\u4e3a\u51c6\u5907\u3001\u534f\u8c03\u3001\u7ffb\u8bd1\u3001\u63d0\u4ea4\u56db\u6b65\uff0c\u4e0d\u540c\u9879\u76ee\u5404\u6709\u4e0d\u540c\u3002","sidebar":"tutorialSidebar"}}}')}}]);