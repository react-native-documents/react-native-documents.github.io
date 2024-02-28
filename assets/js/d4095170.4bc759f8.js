"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[269],{433:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var i=n(6905);const l={tabItem:"tabItem_Ymn6"};var r=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(l.tabItem,s),hidden:n,children:t})}},2808:(e,t,n)=>{n.d(t,{Z:()=>k});var i=n(7294),l=n(6905),r=n(3735),s=n(6550),o=n(613),c=n(4423),d=n(636),a=n(9200);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:l}}=e;return{value:t,label:n,attributes:i,default:l}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=u(e),[s,c]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[d,h]=x({queryString:n,groupId:l}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,a.Nk)(n);return[l,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),j=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=n(5730);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),a=e=>{const t=e.currentTarget,n=c.indexOf(t),l=o[n].value;l!==i&&(d(t),s(l))},h=e=>{let t=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>c.push(e),onKeyDown:h,onClick:a,...r,className:(0,l.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function v(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,l.Z)("tabs-container",j.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(b,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(t))}},1691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var i=n(5893),l=n(1151),r=n(2808),s=n(433);const o={sidebar_position:1},c="Import mode",d={id:"picker/import-mode",title:"Import mode",description:"Use import mode when you want to pick a file from the user's device and keep your own copy of it. That means if the original file changes, the copy you have will not change.",source:"@site/docs/picker/import-mode.mdx",sourceDirName:"picker",slug:"/picker/import-mode",permalink:"/docs/picker/import-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Picker module",permalink:"/docs/category/picker-module"},next:{title:"Open mode",permalink:"/docs/picker/open-mode"}},a={},h=[{value:"How it works",id:"how-it-works",level:3},{value:"Import Options",id:"import-options",level:3},{value:"Import result",id:"import-result",level:3},{value:"Keeping a local copy of the picked files",id:"keepLocalCopy",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"import-mode",children:"Import mode"}),"\n",(0,i.jsx)(t.p,{children:"Use import mode when you want to pick a file from the user's device and keep your own copy of it. That means if the original file changes, the copy you have will not change."}),"\n",(0,i.jsxs)(t.p,{children:["If you instead want to pick a file and keep a reference to the original file, use the ",(0,i.jsx)(t.a,{href:"/docs/picker/open-mode",children:"open mode"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Import mode is the default way to use the module, as in the example below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="Example.tsx"',children:"import { pick } from '@react-native-documents/picker'\nreturn (\n  <Button\n    title=\"single file import\"\n    onPress={async () => {\n      try {\n        const [pickResult] = await pick()\n        // const [pickResult] = await pick({mode:'import'}) // equivalent\n        // do something with the picked file\n      } catch (err: unknown) {\n        // see error handling\n      }\n    }}\n  />\n)\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"pick()"}),", when it resolves, always returns at least one picked document, and TypeScript won't complain about ",(0,i.jsx)(t.code,{children:"pickedFile"})," being ",(0,i.jsx)(t.code,{children:"undefined"})," due to the array destructuring, even with ",(0,i.jsx)(t.code,{children:"noUncheckedIndexedAccess: true"})," in your ",(0,i.jsx)(t.code,{children:"tsconfig.json"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"how-it-works",children:"How it works"}),"\n","\n","\n",(0,i.jsxs)(r.Z,{queryString:"current-os",className:"unique-tabs",children:[(0,i.jsxs)(s.Z,{value:"android",label:"Android",children:[(0,i.jsxs)(t.p,{children:["Import mode uses ",(0,i.jsx)(t.a,{href:"https://developer.android.com/reference/android/content/Intent#ACTION_GET_CONTENT",children:(0,i.jsx)(t.code,{children:"Intent.ACTION_GET_CONTENT"})})," internally."]}),(0,i.jsxs)(t.p,{children:["In import mode, the returned uris are file references transient to your activity's current lifecycle. If you want to access a file later you must import a copy that you can read later, using ",(0,i.jsx)(t.a,{href:"#keepLocalCopy",children:(0,i.jsx)(t.code,{children:"keepLocalCopy"})}),", or use the ",(0,i.jsx)(t.a,{href:"/docs/picker/open-mode",children:"open mode"})," instead."]})]}),(0,i.jsxs)(s.Z,{value:"ios",label:"iOS",children:[(0,i.jsxs)(t.p,{children:["Import mode uses ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/3566733-init",children:"UIDocumentPickerViewController init(forOpeningContentTypes:asCopy:)"})," with ",(0,i.jsx)(t.code,{children:"asCopy"})," parameter being ",(0,i.jsx)(t.code,{children:"true"}),"."]}),(0,i.jsxs)(t.p,{children:["In import mode, the picker will give you access to a local copy of the documents. The picked documents are temporary files. ",(0,i.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uidocumentpickerdelegate/2902364-documentpicker",children:"They remain available only until your application terminates"}),"."]}),(0,i.jsxs)(t.p,{children:["If you want to access a file permanently, you must import a copy that you can read later using ",(0,i.jsx)(t.a,{href:"#keepLocalCopy",children:(0,i.jsx)(t.code,{children:"keepLocalCopy"})}),", or use the ",(0,i.jsx)(t.a,{href:"/docs/picker/open-mode",children:"open mode"})," instead."]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"import-options",children:"Import Options"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"type?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.a,{href:"/docs/doc-picker-api#predefinedfiletypes",children:(0,i.jsx)(t.code,{children:"PredefinedFileTypes"})})," | (",(0,i.jsx)(t.a,{href:"/docs/doc-picker-api#predefinedfiletypes",children:(0,i.jsx)(t.code,{children:"PredefinedFileTypes"})})," | ",(0,i.jsx)(t.code,{children:"string"}),")[]"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["specify file type(s) that you want to pick. Use ",(0,i.jsx)(t.code,{children:"types"})," for some predefined values."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"allowMultiSelection?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to allow multiple files to be picked"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"allowVirtualFiles?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"boolean"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Android only - Whether to allow ",(0,i.jsx)(t.a,{href:"/docs/picker/virtual-files",children:"virtual files"})," (such as Google docs or sheets) to be picked. False by default."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"presentationStyle?"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"ModalPropsIOS"}),"[",(0,i.jsx)(t.code,{children:'"presentationStyle"'}),"]"]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["iOS only - Controls how the picker is presented, e.g. on an iPad you may want to present it fullscreen. Defaults to ",(0,i.jsx)(t.code,{children:"pageSheet"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"transitionStyle?"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.a,{href:"/docs/doc-picker-api#transitionstyle",children:(0,i.jsx)(t.code,{children:"TransitionStyle"})})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"iOS only - Configures the transition style of the picker. Defaults to coverVertical, when the picker is presented, its view slides up from the bottom of the screen."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"import-result",children:"Import result"}),"\n",(0,i.jsxs)(t.p,{children:["The result of the ",(0,i.jsx)(t.code,{children:"pick"})," function is an array of picked files (the result is the same for both ",(0,i.jsx)(t.code,{children:"open"})," and ",(0,i.jsx)(t.code,{children:"import"})," modes). The array will have a length of 1 if ",(0,i.jsx)(t.code,{children:"allowMultiSelection"})," is ",(0,i.jsx)(t.code,{children:"false"})," (the default), and 1 or more if ",(0,i.jsx)(t.code,{children:"allowMultiSelection"})," is ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Many of the fields are nullable because the file metadata might not be available in some cases - especially on Android if a user picks file from a ",(0,i.jsx)(t.a,{href:"https://developer.android.com/guide/topics/providers/create-document-provider",children:"Document Provider"})," that doesn't make the information available."]})}),"\n",(0,i.jsx)(t.p,{children:"Each picked file is represented by an object with the following properties."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"uri"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"string"})}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The URI of the picked file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["The name of the picked file, including the extension. It's very unlikely that it'd be ",(0,i.jsx)(t.code,{children:"null"})," but in theory, it can happen."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"size"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"number"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The size of the picked file in bytes."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"The MIME type of the picked file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Error in case the file metadata could not be obtained."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"isVirtual"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"boolean"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Android-only: Whether the file is a virtual file (such as Google docs or sheets). Will be ",(0,i.jsx)(t.code,{children:"null"})," on pre-Android 7.0 devices."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"convertibleToMimeTypes"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"}),"[] | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Android-only: The target types the virtual file can be converted to. Useful for ",(0,i.jsx)(t.code,{children:"keepLocalCopy"}),". This field is only present if ",(0,i.jsx)(t.code,{children:"isVirtual"})," is true, and only on Android 7.0+."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"nativeType"})}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,i.jsx)(t.code,{children:"string"})," | ",(0,i.jsx)(t.code,{children:"null"})]}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'The "native" type of the picked file: on Android, this is the MIME type. On iOS, it is the UTType identifier.'})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Please note that you might need to use ",(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent",children:"decodeURIComponent"})," in order to get the URI in the format you need for further processing, e.g. when using ",(0,i.jsx)(t.code,{children:"react-native-fs"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"keepLocalCopy",children:"Keeping a local copy of the picked files"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"keepLocalCopy"})," makes the file available in the app's storage. The behavior is different on iOS and Android:"]}),"\n",(0,i.jsxs)(t.p,{children:["On iOS, the picked file is already temporarily available (until the app quits) in a location in the app's sandbox.\n",(0,i.jsx)(t.code,{children:"keepLocalCopy"})," is useful if you need to prevent the file from being deleted by the system."]}),"\n",(0,i.jsxs)(t.p,{children:["To do that, call ",(0,i.jsx)(t.code,{children:"keepLocalCopy()"})," and pass ",(0,i.jsx)(t.code,{children:'destination: "documentDirectory"'}),".\nThis moves (the file is moved, not copied, to prevent unnecessary duplicities) the file from the temporary location it is in when it is picked, into Documents directory, where the file lives until the app is uninstalled."]}),"\n",(0,i.jsxs)(t.p,{children:["On Android, this method opens an ",(0,i.jsx)(t.code,{children:"InputStream"})," pointing to the picked ",(0,i.jsx)(t.code,{children:"content://"})," uri and stores its bytes into a file. This file's location is determined by the ",(0,i.jsx)(t.code,{children:"destination"})," parameter."]}),"\n",(0,i.jsxs)(t.p,{children:['On Android, it can be used to "convert" a ',(0,i.jsx)(t.code,{children:"content://"}),' Uri into a local file. It also "converts" ',(0,i.jsx)(t.a,{href:"/docs/picker/virtual-files",children:"virtual files"})," (such as Google docs or sheets) into local files."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["For each call of ",(0,i.jsx)(t.code,{children:"keepLocalCopy"}),", a new unique directory is created in the app's storage, and the files are placed into it."]}),(0,i.jsxs)(t.p,{children:["This way, the files are isolated and subsequent calls to ",(0,i.jsx)(t.code,{children:"keepLocalCopy"})," with the same file names will not overwrite the previous files."]}),(0,i.jsxs)(t.p,{children:["When writing to the filesystem, ",(0,i.jsx)(t.a,{href:"https://owasp.org/www-community/attacks/Path_Traversal",children:"path traversal vulnerability"})," is prevented. Writing files outside the intended destination will error."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Also note that for some common use cases, such as uploading the picked file to a server, you may not need to call ",(0,i.jsx)(t.code,{children:"keepLocalCopy"}),". This will be clarified in a later docs update."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"import { pick, keepLocalCopy } from '@react-native-documents/picker'\nreturn (\n  <Button\n    title=\"single file import, and ensure it is available in the local storage\"\n    onPress={async () => {\n      try {\n        const [{ name, uri }] = await pick()\n\n        const [copyResult] = await keepLocalCopy({\n          files: [\n            {\n              uri,\n              fileName: name ?? 'fallback-name',\n            },\n          ],\n          destination: 'documentDirectory',\n        })\n        if (copyResult.status === 'success') {\n          // do something\n        }\n      } catch (err) {\n        // see error handling\n      }\n    }}\n  />\n)\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(7294);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);