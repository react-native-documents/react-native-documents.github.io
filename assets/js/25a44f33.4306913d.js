"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[279],{7490:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=n(4848),s=n(8453);const t={sidebar_position:0},r="Introduction",a={id:"sponsor-only/intro",title:"Introduction",description:"Welcome to the documentation for @react-native-documents/picker and @react-native-documents/viewer packages available to sponsors. These packages provide a way to pick and view documents on the device's file system or remote locations.",source:"@site/docs/sponsor-only/intro.md",sourceDirName:"sponsor-only",slug:"/sponsor-only/intro",permalink:"/docs/sponsor-only/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"guidesSidebar",previous:{title:"Public document picker",permalink:"/docs/public/document-picker"},next:{title:"Migrating from the old document-picker",permalink:"/docs/sponsor-only/migration"}},d={},c=[{value:"What&#39;s new in the sponsor-only packages?",id:"whats-new-in-the-sponsor-only-packages",level:2},{value:"TypeScript",id:"typescript",level:3},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Windows",id:"windows",level:3},{value:"How do I know it works?",id:"how-do-i-know-it-works",level:3},{value:"Why do I ask for sponsorship?",id:"why-do-i-ask-for-sponsorship",level:2},{value:"Migrating from the old package",id:"migrating-from-the-old-package",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(o.p,{children:["Welcome to the documentation for ",(0,i.jsx)(o.code,{children:"@react-native-documents/picker"})," and ",(0,i.jsx)(o.code,{children:"@react-native-documents/viewer"})," packages available to ",(0,i.jsx)(o.a,{href:"/docs/install",children:"sponsors"}),". These packages provide a way to pick and view documents on the device's file system or remote locations."]}),"\n",(0,i.jsx)(o.h2,{id:"whats-new-in-the-sponsor-only-packages",children:"What's new in the sponsor-only packages?"}),"\n",(0,i.jsxs)(o.p,{children:["Firstly, there's the completely new ",(0,i.jsx)(o.code,{children:"@react-native-documents/viewer"})," package which is designed to work well together with the updated ",(0,i.jsx)(o.code,{children:"@react-native-documents/picker"}),". The updated Picker module has an api very similar to the ",(0,i.jsx)(o.a,{href:"https://github.com/rnmods/react-native-document-picker",children:"original"}),", and contains the following improvements:"]}),"\n",(0,i.jsx)(o.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["highly improved type definitions that make use of ",(0,i.jsx)(o.a,{href:"https://basarat.gitbook.io/typescript/type-system/discriminated-unions",children:"Discriminated Unions"})," and other goodies so that you don't try to read fields that are not there, and nullable fields are also reduced. (You can use vanilla JS too if you like.)."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"/docs/sponsor-only/jest-mocks",children:"mocks"})," for testing"]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"pickSingle"})," method was removed. You can instead use ",(0,i.jsx)(o.code,{children:"const [result] = pick()"})]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.code,{children:"releaseSecureAccess"})," was removed. I believe it's not necessary anymore because both the picker and the viewer module handle access in a way that does not require manual secure access management. Please open an issue if you need this method back."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"ios",children:"iOS"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["new: ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/limiting-selectable-files#isknowntype",children:(0,i.jsx)(o.code,{children:"isKnownType"})})," utility"]}),"\n",(0,i.jsxs)(o.li,{children:["new: support for long-term file access permissions - across app and even device reboots! (",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/open-mode",children:(0,i.jsx)(o.code,{children:"requestLongTermAccess"})}),")"]}),"\n",(0,i.jsxs)(o.li,{children:["new: ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/import-mode#keepLocalCopy",children:(0,i.jsx)(o.code,{children:"keepLocalCopy"})})," function that separates picking a file and copying it to a local directory. This makes your app more responsive: previously you'd use the ",(0,i.jsx)(o.code,{children:"copyTo"})," option and before the resulting ",(0,i.jsx)(o.code,{children:"Promise"})," resolved, you needed to wait not only for user to pick the file, but also for the file to be copied to your app's directory. For large files or with slow network, this could be a problem that you, as a dev don't see, but your users do."]}),"\n",(0,i.jsx)(o.li,{children:"improved: the majority of the code is now written in Swift. The code is more readable and safer."}),"\n",(0,i.jsxs)(o.li,{children:["improved: all the code on iOS would previously run on the main thread. Now, the suitable parts are handled on a background thread or using Swift's ",(0,i.jsx)(o.a,{href:"https://www.hackingwithswift.com/swift/5.5/async-await",children:"concurrency methods"}),". You don't want to do file I/O on the main thread."]}),"\n",(0,i.jsxs)(o.li,{children:["improved: using the new ",(0,i.jsx)(o.code,{children:"UIDocumentPickerViewController"})," apis instead of those deprecated in iOS 14"]}),"\n",(0,i.jsxs)(o.li,{children:["improved: instead of the old ",(0,i.jsx)(o.code,{children:"copyTo"})," parameter making unnecessary copies, the new ",(0,i.jsx)(o.code,{children:"keepLocalCopy"})," function just moves the imported file."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"android",children:"Android"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:["new: support for ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/open-mode",children:"open mode"})]}),"\n",(0,i.jsxs)(o.li,{children:["new: support for long-term file access permissions - across app and even device reboots! (",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/open-mode",children:(0,i.jsx)(o.code,{children:"requestLongTermAccess"})}),")"]}),"\n",(0,i.jsxs)(o.li,{children:["new: ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/import-mode#keepLocalCopy",children:(0,i.jsx)(o.code,{children:"keepLocalCopy"})})," function that separates picking a file and copying it to a local directory. This makes your app more responsive: previously you'd use the ",(0,i.jsx)(o.code,{children:"copyTo"})," option and before the resulting ",(0,i.jsx)(o.code,{children:"Promise"})," resolved, you needed to wait not only for user to pick the file, but also for the file to be copied to your app's directory. For large files or with slow network, this could be a problem that you, as a dev don't see, but your users do."]}),"\n",(0,i.jsxs)(o.li,{children:["new: support for ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/picker/virtual-files",children:"virtual files"})]}),"\n",(0,i.jsxs)(o.li,{children:["improved: I have removed the deprecated ",(0,i.jsx)(o.a,{href:"https://developer.android.com/reference/android/os/AsyncTask",children:"AsyncTask"})," usage and replaced it with Kotlin Coroutines."]}),"\n",(0,i.jsxs)(o.li,{children:["improved: the code is better at operating with I/O, for example ",(0,i.jsx)(o.a,{href:"https://github.com/rnmods/react-native-document-picker/blob/27fddb9d9a88fff09a41ce654f7008cfd33cb4c4/android/src/main/java/com/reactnativedocumentpicker/RNDocumentPickerModule.java#L337",children:"byte buffer use"})," is replaced with a potentially much more efficient alternative from ",(0,i.jsx)(o.code,{children:"java.nio"})]}),"\n",(0,i.jsxs)(o.li,{children:["improved: reading file metadata is more defensive and efficient because only the necessary columns are queried from ",(0,i.jsx)(o.a,{href:"https://developer.android.com/reference/android/content/ContentResolver#query(android.net.Uri,%20java.lang.String%5B%5D,%20android.os.Bundle,%20android.os.CancellationSignal)",children:"ContentResolver"}),". The native Android apis are full of calls that can return null or throw so extra care is taken to handle these cases."]}),"\n"]}),"\n",(0,i.jsx)(o.h3,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(o.p,{children:"Windows is not supported at the moment. While there is Windows-related code in the public module, it's not maintained and probably does not work."}),"\n",(0,i.jsx)(o.h3,{id:"how-do-i-know-it-works",children:"How do I know it works?"}),"\n",(0,i.jsx)(o.p,{children:"With so many changes, you might wonder if the new package is stable - especially with Android because... well, we know Android \ud83d\ude1c."}),"\n",(0,i.jsx)(o.p,{children:"To prove the new code is solid, I have written an e2e test suite using Appium that covers the majority of the features:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsx)(o.li,{children:"import mode"}),"\n",(0,i.jsx)(o.li,{children:"open mode"}),"\n",(0,i.jsx)(o.li,{children:"viewing files, including long-term permissions"}),"\n"]}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tE3WMA4nxGE?si=N8p535owAFnenBwz",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(o.p,{children:"The test suite focuses on Android, and was executed on real devices from Samsung, Google and Huawei, with Android versions ranging between 8 and 14. iOS tests were done manually on a real device with iOS 17."}),"\n",(0,i.jsx)(o.p,{children:"As a result, I have greater confidence in the new package than in the old one!"}),"\n",(0,i.jsx)(o.h2,{id:"why-do-i-ask-for-sponsorship",children:"Why do I ask for sponsorship?"}),"\n",(0,i.jsxs)(o.p,{children:["I (",(0,i.jsx)(o.a,{href:"https://github.com/vonovak",children:"vonovak"}),") have been maintaining the original ",(0,i.jsx)(o.a,{href:"https://github.com/rnmods/react-native-document-picker",children:(0,i.jsx)(o.code,{children:"react-native-document-picker"})})," package more or less since 2020. The package has been used by thousands of devs, but I could see that it had a lot of issues. The codebase was old and there was a lot to improve."]}),"\n",(0,i.jsxs)(o.p,{children:["on Nov 26, 2022 I opened an ",(0,i.jsx)(o.a,{href:"https://github.com/rnmods/react-native-document-picker/issues/603",children:"issue"})," on the original package, asking for sponsorships for new features and improvements, but I received very little support for this task - and I understand: why would a company or an individual spend money if they get ",(0,i.jsx)(o.strong,{children:"nothing but a vague promise in return"}),"? If you follow me on ",(0,i.jsx)(o.a,{href:"https://twitter.com/vonovak",children:"Twitter"}),", you know I occasionally rant about open source (un)sustainability."]}),"\n",(0,i.jsxs)(o.p,{children:["In January 2024 I decided to rewrite the package from scratch and make it better! The new package has a new name: ",(0,i.jsx)(o.code,{children:"@react-native-documents/picker"})," and is hosted on the ",(0,i.jsx)(o.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry",children:"Github packages npm registry"})," - not the ",(0,i.jsx)(o.a,{href:"https://www.npmjs.com/",children:"public npm registry"}),", and it is available to ",(0,i.jsx)(o.a,{href:"/docs/install",children:"sponsors"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["While I was at it, I also created a new ",(0,i.jsx)(o.code,{children:"viewer"})," package which is available to ",(0,i.jsx)(o.a,{href:"/docs/install",children:"sponsors"})," as well."]}),"\n",(0,i.jsx)(o.p,{children:"So how to make OSS sustainable? My take is this: rather than asking for support, I provide full-featured packages and ask for a fee in return. I believe that the new packages are worth it."}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["I'd like to thank my long-term GitHub sponsors ",(0,i.jsx)(o.a,{href:"https://www.litentry.com/",children:"Litentry"}),", ",(0,i.jsx)(o.a,{href:"https://www.callstack.com/",children:"Callstack"})," and ",(0,i.jsx)(o.a,{href:"https://expo.dev/",children:"Expo"}),"."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"migrating-from-the-old-package",children:"Migrating from the old package"}),"\n",(0,i.jsxs)(o.p,{children:["See ",(0,i.jsx)(o.a,{href:"/docs/sponsor-only/migration",children:"the migration guide"})," - it's not difficult!"]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>a});var i=n(6540);const s={},t=i.createContext(s);function r(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);