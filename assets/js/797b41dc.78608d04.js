"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[286],{8469:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=o(4848),t=o(8453);const s={sidebar_position:60},i="Error handling",c={id:"sponsor-only/errors",title:"Error handling",description:"Error codes",source:"@site/docs/sponsor-only/errors.md",sourceDirName:"sponsor-only",slug:"/sponsor-only/errors",permalink:"/docs/sponsor-only/errors",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"guidesSidebar",previous:{title:"Jest module mocks",permalink:"/docs/sponsor-only/jest-mocks"},next:{title:"License",permalink:"/docs/sponsor-only/license"}},d={},a=[{value:"Error codes",id:"error-codes",level:3},{value:"<code>isErrorWithCode(value)</code>",id:"iserrorwithcodevalue",level:3}];function l(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"error-handling",children:"Error handling"}),"\n",(0,n.jsx)(r.h3,{id:"error-codes",children:"Error codes"}),"\n",(0,n.jsxs)(r.p,{children:["Both ",(0,n.jsx)(r.code,{children:"picker"})," and ",(0,n.jsx)(r.code,{children:"viewer"})," expose a ",(0,n.jsx)(r.code,{children:"errorCodes"})," object which contains an object of possible error codes that can be returned by the native module."]}),"\n",(0,n.jsx)(r.p,{children:"Error codes are useful when determining which kind of error has occurred during the picking or viewing process."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Error Code Key"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"IN_PROGRESS"})}),(0,n.jsxs)(r.td,{children:["This is rather a warning, that happens when you invoke an operation (e.g. ",(0,n.jsx)(r.code,{children:"pick"}),") while a previous one has not finished yet. For example: if you call ",(0,n.jsx)(r.code,{children:"pick()"})," quickly twice in a row, 2 calls to ",(0,n.jsx)(r.code,{children:"pick()"})," in the native module will be done. The first call will open the native document picker and user action will be expected. The promise from the second call to ",(0,n.jsx)(r.code,{children:"pick"}),' will be rejected with this error. Later, the first promise will resolve (or reject) with the actual files that the user has selected. Only one document picker window will be presented to the user. The reason the module explicitely rejects "duplicated" calls is to avoid memory leaks.']})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"UNABLE_TO_OPEN_FILE_TYPE"})}),(0,n.jsxs)(r.td,{children:["When you try to open picker or viewer using a configuration that system cannot comply with. On Android, this is corresponds to ",(0,n.jsx)(r.a,{href:"https://developer.android.com/reference/android/content/ActivityNotFoundException",children:"ActivityNotFoundException"}),". On iOS this only happens in the Viewer module when you attempt to preview a file that's not suppored by the ",(0,n.jsx)(r.a,{href:"https://developer.apple.com/documentation/quicklook",children:"QuickLook framework"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"OPERATION_CANCELED"})}),(0,n.jsx)(r.td,{children:"When user cancels the operation"})]})]})]}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsxs)(r.p,{children:["In a future release, ",(0,n.jsx)(r.code,{children:"OPERATION_CANCELED"})," will be replaced with a more streamlined cancellation handling. We're keeping it now to make ",(0,n.jsx)(r.a,{href:"/docs/sponsor-only/migration",children:"migration"})," easier."]})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",metastring:'title="error-handling.ts"',children:"import { errorCodes } from '@react-native-documents/picker'\n// or\nimport { errorCodes } from '@react-native-documents/viewer'\n\nconst handleError = (err: unknown) => {\n  if (isErrorWithCode(err)) {\n    switch (err.code) {\n      case errorCodes.IN_PROGRESS:\n        console.warn('user attempted to present a picker, but a previous one was already presented')\n        break\n      case errorCodes.UNABLE_TO_OPEN_FILE_TYPE:\n        setError('unable to open file type')\n        break\n      case errorCodes.OPERATION_CANCELED:\n        // ignore\n        break\n      default:\n        setError(String(err))\n        console.error(err)\n    }\n  } else {\n    setError(String(err))\n  }\n}\n"})}),"\n",(0,n.jsx)(r.h3,{id:"iserrorwithcodevalue",children:(0,n.jsx)(r.code,{children:"isErrorWithCode(value)"})}),"\n",(0,n.jsxs)(r.p,{children:["TypeScript helper to check if the passed parameter is an instance of ",(0,n.jsx)(r.code,{children:"Error"})," which has the ",(0,n.jsx)(r.code,{children:"code"})," property. All errors thrown by the picker and viewer modules have the ",(0,n.jsx)(r.code,{children:"code"})," property, which contains a value from ",(0,n.jsx)(r.a,{href:"#error-codes",children:(0,n.jsx)(r.code,{children:"errorCodes"})})," or some other string for the less-usual errors."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"isErrorWithCode"})," can be used to avoid ",(0,n.jsx)(r.code,{children:"as"})," casting when you want to access the ",(0,n.jsx)(r.code,{children:"code"})," property on errors returned by the module."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import { pick, isErrorWithCode } from '@react-native-documents/picker'\n\ntry {\n  const [pickResult] = await pick()\n  // do something with pickResult\n} catch (error) {\n  if (isErrorWithCode(error)) {\n    // here you can safely read `error.code` and TypeScript will know that it has a value\n  } else {\n    // this error does not have a `code`, and does not come from the native module\n  }\n}\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>c});var n=o(6540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);