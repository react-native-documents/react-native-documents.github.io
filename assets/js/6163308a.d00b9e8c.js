"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[809],{7345:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=i(4848),l=i(8453);const s={id:"index",title:"Document Viewer API",sidebar_label:"Document Viewer API",sidebar_position:900,custom_edit_url:null},d=void 0,r={id:"doc-viewer-api/index",title:"Document Viewer API",description:"Type Aliases",source:"@site/docs/doc-viewer-api/index.md",sourceDirName:"doc-viewer-api",slug:"/doc-viewer-api/",permalink:"/docs/doc-viewer-api/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:900,frontMatter:{id:"index",title:"Document Viewer API",sidebar_label:"Document Viewer API",sidebar_position:900,custom_edit_url:null},sidebar:"docViewerApiSidebar"},o={},c=[{value:"Type Aliases",id:"type-aliases",level:2},{value:"OptionsViewBookmark",id:"optionsviewbookmark",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"OptionsViewUri",id:"optionsviewuri",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"ViewDocumentOptions",id:"viewdocumentoptions",level:3},{value:"Functions",id:"functions",level:2},{value:"viewDocument",id:"viewdocument",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"type-aliases",children:"Type Aliases"}),"\n",(0,n.jsx)(t.h3,{id:"optionsviewbookmark",children:"OptionsViewBookmark"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"OptionsViewBookmark"}),": ",(0,n.jsx)(t.code,{children:"Object"})]}),"\n",(0,n.jsx)(t.h4,{id:"type-declaration",children:"Type declaration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"bookmark"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:['bookmark data from the DocumentPicker module. Obtain it using the "open" mode, with ',(0,n.jsx)(t.code,{children:"requestLongTermAccess"})," flag set to true. A bookmark allows a long-term permission to access a file."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"grantPermissions?"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:'"read"'})," | ",(0,n.jsx)(t.code,{children:'"write"'})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android only: The type of permission to grant to the receiving app that will open the document. NOTE: this is experimental and may not work as expected. The functionality will be improved in a future release."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"headerTitle?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS only: The title to display in the header of the document viewer if not provided, the filename will be used"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"mimeType?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional, but recommended: the mimetype of the document. This will help the Android OS to find the right app(s) to open the document."})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"optionsviewuri",children:"OptionsViewUri"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"OptionsViewUri"}),": ",(0,n.jsx)(t.code,{children:"Object"})]}),"\n",(0,n.jsx)(t.h4,{id:"type-declaration-1",children:"Type declaration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"grantPermissions?"})}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,n.jsx)(t.code,{children:'"read"'})," | ",(0,n.jsx)(t.code,{children:'"write"'})]}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Android only: The type of permission to grant to the receiving app that will open the document. NOTE: this is experimental and may not work as expected. The functionality will be improved in a future release."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"headerTitle?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"iOS only: The title to display in the header of the document viewer if not provided, the filename will be used"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"mimeType?"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Optional, but recommended: the mimetype of the document. This will help the Android OS to find the right app(s) to open the document."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"uri"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"string"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The uri of the document to view"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"viewdocumentoptions",children:"ViewDocumentOptions"}),"\n",(0,n.jsxs)(t.p,{children:["\u01ac ",(0,n.jsx)(t.strong,{children:"ViewDocumentOptions"}),": ",(0,n.jsx)(t.a,{href:"#optionsviewbookmark",children:(0,n.jsx)(t.code,{children:"OptionsViewBookmark"})})," | ",(0,n.jsx)(t.a,{href:"#optionsviewuri",children:(0,n.jsx)(t.code,{children:"OptionsViewUri"})})]}),"\n",(0,n.jsx)(t.p,{children:"options for viewing a document"}),"\n",(0,n.jsxs)(t.p,{children:["If you're trying to open a file that you have long-term permission to access, you should use the ",(0,n.jsx)(t.code,{children:"bookmark"})," option (provided by the DocumentPicker module)."]}),"\n",(0,n.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,n.jsx)(t.h3,{id:"viewdocument",children:"viewDocument"}),"\n",(0,n.jsxs)(t.p,{children:["\u25b8 ",(0,n.jsx)(t.strong,{children:"viewDocument"}),"(",(0,n.jsx)(t.code,{children:"data"}),"): ",(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"null"}),">"]}),"\n",(0,n.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.code,{children:"data"})}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:(0,n.jsx)(t.a,{href:"#viewdocumentoptions",children:(0,n.jsx)(t.code,{children:"ViewDocumentOptions"})})})]})})]}),"\n",(0,n.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Promise"}),"<",(0,n.jsx)(t.code,{children:"null"}),">"]})]})}function x(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>r});var n=i(6540);const l={},s=n.createContext(l);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);