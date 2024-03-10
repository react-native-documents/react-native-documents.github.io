"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[736],{9825:(e,t,n)=>{n.d(t,{Ay:()=>i});var l=n(4848),r=n(8453);function s(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.R)(),...e.components};return(0,l.jsx)(t.admonition,{type:"note",children:(0,l.jsxs)(t.p,{children:["Many of the fields are nullable because the file metadata might not be available in some cases. While it's unlikely, it can happen especially on Android if a user picks a file from a ",(0,l.jsx)(t.a,{href:"https://developer.android.com/guide/topics/providers/create-document-provider",children:"Document Provider"})," that doesn't make the information available."]})})}function i(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}},225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var l=n(4848),r=n(8453),s=n(1470),i=n(9365),o=n(9825);const c={sidebar_position:2},d="Open mode",a={id:"sponsor-only/picker/open-mode",title:"Open mode",description:"In open mode, the returned uris refer directly to the selected documents.",source:"@site/docs/sponsor-only/picker/open-mode.mdx",sourceDirName:"sponsor-only/picker",slug:"/sponsor-only/picker/open-mode",permalink:"/docs/sponsor-only/picker/open-mode",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Import mode",permalink:"/docs/sponsor-only/picker/import-mode"},next:{title:"Limiting selectable file types",permalink:"/docs/sponsor-only/picker/limiting-selectable-files"}},h={},u=[{value:"How it works",id:"how-it-works",level:3},{value:"Open Options",id:"open-options",level:3},{value:"Open result",id:"open-result",level:3},{value:"Long-term file access",id:"long-term-file-access",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"open-mode",children:"Open mode"}),"\n",(0,l.jsx)(t.p,{children:"In open mode, the returned uris refer directly to the selected documents."}),"\n",(0,l.jsxs)(t.p,{children:["This is particularly useful when you want to read an existing file without making a copy into your app or when you want to open and edit a file in-place (using the ",(0,l.jsx)(t.a,{href:"../viewer",children:(0,l.jsx)(t.code,{children:"Viewer module"})}),")."]}),"\n",(0,l.jsxs)(t.p,{children:["With ",(0,l.jsx)(t.code,{children:"requestLongTermAccess"}),", your app is granted long-term read access to the file, also possibly with write access (to be clarified in a later docs update)."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",metastring:'title="Example.tsx"',children:"import { pick } from '@react-native-documents/picker'\n\nreturn (\n  <Button\n    title=\"open file\"\n    onPress={async () => {\n      try {\n        const [result] = await pick({\n          mode: 'open',\n        })\n        console.log(result)\n      } catch (err) {\n        // see error handling\n      }\n    }}\n  />\n)\n"})}),"\n",(0,l.jsx)(t.h3,{id:"how-it-works",children:"How it works"}),"\n","\n",(0,l.jsxs)(s.A,{queryString:"current-os",className:"unique-tabs",children:[(0,l.jsx)(i.A,{value:"android",label:"Android",children:(0,l.jsxs)(t.p,{children:["Open mode uses ",(0,l.jsx)(t.a,{href:"https://developer.android.com/reference/android/content/Intent#ACTION_OPEN_DOCUMENT",children:(0,l.jsx)(t.code,{children:"Intent.ACTION_OPEN_DOCUMENT"})})," internally."]})}),(0,l.jsx)(i.A,{value:"ios",label:"iOS",children:(0,l.jsxs)(t.p,{children:["Open mode uses ",(0,l.jsx)(t.a,{href:"https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/3566733-init",children:"UIDocumentPickerViewController init(forOpeningContentTypes:asCopy:)"})," with ",(0,l.jsx)(t.code,{children:"asCopy"})," parameter being ",(0,l.jsx)(t.code,{children:"false"}),"."]})})]}),"\n",(0,l.jsx)(t.h3,{id:"open-options",children:"Open Options"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"mode"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"'open'"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'specify that you want the picker to function in the "open" mode.'})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"type?"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.a,{href:"/docs/doc-picker-api#predefinedfiletypes",children:(0,l.jsx)(t.code,{children:"PredefinedFileTypes"})})," | (",(0,l.jsx)(t.a,{href:"/docs/doc-picker-api#predefinedfiletypes",children:(0,l.jsx)(t.code,{children:"PredefinedFileTypes"})})," | ",(0,l.jsx)(t.code,{children:"string"}),")[]"]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["specify file type(s) that you want to pick. Use ",(0,l.jsx)(t.code,{children:"types"})," for some predefined values."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"requestLongTermAccess?"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to ask for long-term access permissions. False by default."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"allowMultiSelection?"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Whether to allow multiple files to be picked. False by default."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"allowVirtualFiles?"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"boolean"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Android only - Whether to allow ",(0,l.jsx)(t.a,{href:"/docs/sponsor-only/picker/virtual-files",children:"virtual files"})," (such as Google docs or sheets) to be picked. False by default."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"presentationStyle?"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/doc-picker-api#presentationstyle",children:(0,l.jsx)(t.code,{children:"PresentationStyle"})})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["iOS only - Controls how the picker is presented, e.g. on an iPad you may want to present it fullscreen. Defaults to ",(0,l.jsx)(t.code,{children:"pageSheet"}),"."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"transitionStyle?"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.a,{href:"/docs/doc-picker-api#transitionstyle",children:(0,l.jsx)(t.code,{children:"TransitionStyle"})})}),(0,l.jsx)(t.td,{style:{textAlign:"left"}})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"open-result",children:"Open result"}),"\n",(0,l.jsxs)(t.p,{children:["The result is the same for both ",(0,l.jsx)(t.code,{children:"open"})," and ",(0,l.jsx)(t.code,{children:"import"})," modes."]}),"\n","\n","\n",(0,l.jsx)(o.Ay,{}),"\n",(0,l.jsx)(t.p,{children:"Each picked file is an object with the following properties:"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"uri"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"string"})}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The URI of the picked file."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"name"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The name of the picked file, including the extension."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"size"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"number"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The size of the picked file in bytes."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"type"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"The MIME type of the picked file."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"error"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Error in case the file metadata could not be obtained."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"isVirtual"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"boolean"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"Android-only: Whether the file is a virtual file (such as Google docs or sheets)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"convertibleToMimeTypes"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"}),"[] | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:["Android-only: The target types the virtual file can be converted to. Useful for ",(0,l.jsx)(t.code,{children:"keepLocalCopy"}),". This field is only present if ",(0,l.jsx)(t.code,{children:"isVirtual"})," is true, and only on Android 7.0+."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:(0,l.jsx)(t.code,{children:"nativeType"})}),(0,l.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,l.jsx)(t.code,{children:"string"})," | ",(0,l.jsx)(t.code,{children:"null"})]}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:'The "native" type of the picked file: on Android, this is the MIME type. On iOS, it is the UTType identifier.'})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"long-term-file-access",children:"Long-term file access"}),"\n",(0,l.jsxs)(t.p,{children:["When ",(0,l.jsx)(t.code,{children:"requestLongTermAccess"})," is set to ",(0,l.jsx)(t.code,{children:"true"}),", your app will be able to access the file even after the app is closed and reopened."]}),"\n",(0,l.jsxs)(t.p,{children:["If you've requested long-term access to a directory or file, the response object will contain ",(0,l.jsx)(t.a,{href:"/docs/doc-picker-api#bookmarkingresponse",children:"BookmarkingResponse"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["In order to access the same directory or file in the future, you must check ",(0,l.jsx)(t.code,{children:"bookmarkStatus"})," and store the ",(0,l.jsx)(t.code,{children:"bookmark"})," opaque string.\nWhen you want to access the file again, you can use the ",(0,l.jsx)(t.code,{children:"bookmark"})," to resolve the file uri. See the Document viewer source on how to do it, if you need this (advanced use case)."]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",metastring:'title="Example.tsx"',children:"import { pick, types } from '@react-native-documents/picker'\n\nreturn (\n  <Button\n    title=\"open pdf file with requestLongTermAccess: true\"\n    onPress={async () => {\n      try {\n        const [result] = await pick({\n          mode: 'open',\n          requestLongTermAccess: true,\n          type: [types.pdf],\n        })\n        if (result.bookmarkStatus === 'success') {\n          const bookmarkToStore = {\n            fileName: result.name ?? 'unknown name',\n            bookmark: result.bookmark,\n          }\n          localStorage.set('bookmark', JSON.stringify(bookmarkToStore))\n        } else {\n          console.error(result)\n        }\n      } catch (err) {\n        // see error handling\n      }\n    }}\n  />\n)\n"})})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var l=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>v});var l=n(6540),r=n(4164),s=n(3104),i=n(6347),o=n(205),c=n(7485),d=n(1682),a=n(9466);function h(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=u(e),[i,c]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:s}))),[d,h]=x({queryString:n,groupId:r}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,a.Dv)(n);return[r,(0,l.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),y=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=n(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=n(4848);function g(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),a=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==l&&(d(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>c.push(e),onKeyDown:h,onClick:a,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=f(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,m.jsx)(g,{...e,...t}),(0,m.jsx)(b,{...e,...t})]})}function v(e){const t=(0,j.A)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var l=n(6540);const r={},s=l.createContext(r);function i(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);