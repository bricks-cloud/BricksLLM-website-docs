"use strict";(self.webpackChunkbricks_llm_docs=self.webpackChunkbricks_llm_docs||[]).push([[858],{8798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(5893),n=r(1151),s=r(4866),u=r(5162);const o={sidebar_position:3},i="Attach User ID to requests",l={id:"basic-features/user-id",title:"Attach User ID to requests",description:"Unlike a custom ID, which is primarily used for debugging purposes, a user ID allows you to control a user's access in a manner similar to a proxy secret key.",source:"@site/docs/basic-features/user-id.md",sourceDirName:"basic-features",slug:"/basic-features/user-id",permalink:"/docs/basic-features/user-id",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basic-features/user-id.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Attach Custom ID to requests",permalink:"/docs/basic-features/custom-id"},next:{title:"Configure your organization",permalink:"/docs/basic-features/configure-organization"}},c={},d=[{value:"Create a user",id:"create-a-user",level:2},{value:"Attach user ID to requests",id:"attach-user-id-to-requests-1",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"attach-user-id-to-requests",children:"Attach User ID to requests"}),"\n",(0,a.jsx)(t.p,{children:"Unlike a custom ID, which is primarily used for debugging purposes, a user ID allows you to control a user's access in a manner similar to a proxy secret key."}),"\n",(0,a.jsx)(t.p,{children:"This feature is useful when you want to impose limits specific to each user, in addition to the general limits applied through your proxy secret key."}),"\n",(0,a.jsx)(t.h2,{id:"create-a-user",children:"Create a user"}),"\n",(0,a.jsx)(t.p,{children:'To create a user, go to the Users page. Click "Create a new user", fill in all information, then click "Create". You can supply your own user ID, or if you don\'t, we will generate one for you.'}),"\n",(0,a.jsx)(t.h2,{id:"attach-user-id-to-requests-1",children:"Attach user ID to requests"}),"\n",(0,a.jsx)(t.p,{children:"To include a user ID in a request, add the user field to your request body. For example:"}),"\n",(0,a.jsx)(s.Z,{children:(0,a.jsx)(u.Z,{value:"curl",label:"curl",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl --request POST \\\n  --url https://api.trybricks.ai/api/providers/openai/v1/chat/completions \\\n  --header \'Authorization: Bearer your-bricks-secret-key\' \\\n  --header \'Content-Type: application/json\' \\\n  --data \'{\n    "model": "gpt-3.5-turbo",\n    # highlight-next-line\n    "user": "user-123",\n    "messages": [\n      {\n        "role": "system",\n        "content": "You are a helpful assistant."\n      },\n      {\n        "role": "user",\n        "content": "hi"\n      }\n    ]\n  }\'\n'})})})}),"\n",(0,a.jsx)(t.p,{children:"This ID will be included in the logs, and you can use it to track a user's requests in your system."})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>u});r(7294);var a=r(512);const n={tabItem:"tabItem_Ymn6"};var s=r(5893);function u(e){let{children:t,hidden:r,className:u}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,u),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(7294),n=r(512),s=r(2466),u=r(6550),o=r(469),i=r(1980),l=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[u,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=f({queryString:r,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),g=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function y(e){let{className:t,block:r,selectedValue:a,selectValue:u,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(l(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function k(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>u});var a=r(7294);const n={},s=a.createContext(n);function u(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:u(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);