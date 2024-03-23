"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[666],{4461:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=n(4848),t=n(8453);const r={sidebar_position:3},o="Limiting selectable file types",l={id:"sponsor-only/picker/limiting-selectable-files",title:"Limiting selectable file types",description:"Video introduction",source:"@site/docs/sponsor-only/picker/limiting-selectable-files.md",sourceDirName:"sponsor-only/picker",slug:"/sponsor-only/picker/limiting-selectable-files",permalink:"/docs/sponsor-only/picker/limiting-selectable-files",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Open mode",permalink:"/docs/sponsor-only/picker/open-mode"},next:{title:"Directory Picker",permalink:"/docs/sponsor-only/picker/directory-picker"}},d={},c=[{value:"isKnownType",id:"isknowntype",level:3},{value:"Predefined File Types",id:"predefined-file-types",level:3}];function p(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"limiting-selectable-file-types",children:"Limiting selectable file types"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{children:"Video introduction"}),(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CUNDpURFx4U?si=xr3jHKpWRDo3uFLi&start=206",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),"\n",(0,s.jsxs)(i.p,{children:["The default document picker allows any file to be selected (except ",(0,s.jsx)(i.a,{href:"/docs/sponsor-only/picker/virtual-files",children:"virtual files"}),"). Use the ",(0,s.jsx)(i.code,{children:"type"})," parameter of ",(0,s.jsx)(i.code,{children:"pick()"})," to restrict selectable file types."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["On iOS, these are Apple ",(0,s.jsx)(i.a,{href:"https://developer.apple.com/documentation/uniformtypeidentifiers/system-declared_uniform_type_identifiers",children:"Uniform Type Identifiers"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["On Android, these are MIME types such as ",(0,s.jsx)(i.code,{children:"text/plain"})," or partial MIME types such as ",(0,s.jsx)(i.code,{children:"image/*"}),". See ",(0,s.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types",children:"common MIME types"})," or a more comprehensive ",(0,s.jsx)(i.a,{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",children:"IANA Media Types listing"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Figuring out the correct MIME type or UTType identifier for a file type can be a bit of a hassle. To make it easy, the module exports the ",(0,s.jsx)(i.a,{href:"#isknowntype",children:(0,s.jsx)(i.code,{children:"isKnownType"})})," utility and several ",(0,s.jsx)(i.a,{href:"#predefined-file-types",children:"predefined file types"})," that you can use."]}),"\n",(0,s.jsxs)(i.admonition,{type:"warning",children:[(0,s.jsxs)(i.p,{children:["On Android, some ",(0,s.jsx)(i.a,{href:"https://developer.android.com/guide/topics/providers/content-provider-basics",children:"Document Providers"})," (this seems to be a problem especially in China) ignore the ",(0,s.jsx)(i.code,{children:"type"})," parameter and allow any file to be selected. This is a problem with the Document Provider, not this module."]}),(0,s.jsxs)(i.p,{children:["To detect this case, check the ",(0,s.jsx)(i.a,{href:"../../doc-picker-api#documentpickerresponse",children:(0,s.jsx)(i.code,{children:"hasRequestedType"})})," field and handle the situation in your app."]})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",metastring:'title="Example.tsx"',children:"import { pick, types } from '@react-native-documents/picker'\n\nreturn (\n  <Button\n    title=\"import multiple docx or pdf files\"\n    onPress={() => {\n      pick({\n        allowMultiSelection: true,\n        // highlight-next-line\n        type: [types.pdf, types.docx],\n      })\n        .then((res) => {\n          const allFilesArePdfOrDocx = res.every((file) => file.hasRequestedType)\n          if (!allFilesArePdfOrDocx) {\n            // tell the user they selected a file that is not a pdf or docx\n          }\n          addResult(res)\n        })\n        .catch(handleError)\n    }}\n  />\n)\n"})}),"\n",(0,s.jsx)(i.h3,{id:"isknowntype",children:"isKnownType"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"isKnownType"})," is a handy utility function that given one of:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"UTType identifier string"}),"\n",(0,s.jsx)(i.li,{children:"MIME type string"}),"\n",(0,s.jsx)(i.li,{children:"File extension string"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"tells you if the device recognizes it, and returns the corresponding MIME type, file extension, and UTType identifier."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import { isKnownType } from '@react-native-documents/picker'\n\nconst { isKnown, mime, preferredFilenameExtension } = isKnownType({\n  kind: 'extension',\n  value: 'pdf',\n})\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This is currently only implemented on iOS, but it's useful on Android too: If you know the file extension (or the MIME, or the UTType), then use ",(0,s.jsx)(i.code,{children:"isKnownType"})," to find the corresponding MIME type for Android or UTType for iOS. then pass the result to the ",(0,s.jsx)(i.code,{children:"type"})," parameter."]}),"\n",(0,s.jsx)(i.admonition,{type:"note",children:(0,s.jsx)(i.p,{children:"Different devices, based on the installed apps, may recognize different file types."})}),"\n",(0,s.jsx)(i.h3,{id:"predefined-file-types",children:"Predefined File Types"}),"\n",(0,s.jsxs)(i.p,{children:["These are the most common file types, and are available in the ",(0,s.jsx)(i.code,{children:"types"})," export. See the usage example above."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-ts",children:"import { types } from '@react-native-documents/picker'\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"types.allFiles"}),": All document types, on Android this is ",(0,s.jsx)(i.code,{children:"*/*"}),", on iOS it's ",(0,s.jsx)(i.code,{children:"public.item"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"types.images"}),": All image types"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"types.plainText"}),": Plain text files"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"types.audio"}),": All audio types"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.pdf"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.zip"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.csv"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.doc"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.docx"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.ppt"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.pptx"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.xls"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"types.xlsx"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var s=n(6540);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);