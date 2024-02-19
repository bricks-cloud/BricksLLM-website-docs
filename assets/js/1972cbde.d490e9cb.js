"use strict";(self.webpackChunkbricks_llm_docs=self.webpackChunkbricks_llm_docs||[]).push([[764],{4564:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(5893),s=t(1151);const r={sidebar_position:3},o="API Endpoints",a={id:"api-endpoints",title:"API Endpoints",description:"Authorization",source:"@site/docs/api-endpoints.mdx",sourceDirName:".",slug:"/api-endpoints",permalink:"/docs/api-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-endpoints.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configure your organization",permalink:"/docs/basic-features/configure-organization"}},d={},c=[{value:"Authorization",id:"authorization",level:2},{value:"Providers",id:"providers",level:2},{value:"List Providers",id:"list-providers",level:3},{value:"Response",id:"response",level:4},{value:"Proxy Secret Keys",id:"proxy-secret-keys",level:2},{value:"List Proxy Secret Keys",id:"list-proxy-secret-keys",level:3},{value:"Response",id:"response-1",level:4},{value:"Create a Proxy Secret Key",id:"create-a-proxy-secret-key",level:3},{value:"Request body",id:"request-body",level:4},{value:"Response",id:"response-2",level:4},{value:"Update a Proxy Secret Key",id:"update-a-proxy-secret-key",level:3},{value:"Request body",id:"request-body-1",level:4},{value:"Response",id:"response-3",level:4}];function l(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,n.jsx)(i.h2,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsxs)(i.p,{children:["To authorize your requests, you need to include your BricksAI secret key in the ",(0,n.jsx)(i.code,{children:"Authorization"})," header. You can find your BricksAI secret key by navigating to the ",(0,n.jsx)(i.strong,{children:"[Settings]"}),' page. Under "Developer access", click "Enable". Then you will see your BricksAI secret key.']}),"\n",(0,n.jsx)(i.h2,{id:"providers",children:"Providers"}),"\n",(0,n.jsx)(i.h3,{id:"list-providers",children:"List Providers"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"GET https://trybricks.ai/api/v1/providers\n"})}),"\n",(0,n.jsx)(i.h4,{id:"response",children:"Response"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'[\n  {\n    "name": "Some descriptive name for the provider",\n    "id": "some-provider-id",\n    "createdAt": 1707864319,\n    "updatedAt": 1707864319,\n    "provider": "openai",\n    "allowedModels": [] // Not used yet, can be ignored\n  }\n]\n'})}),"\n",(0,n.jsx)(i.h2,{id:"proxy-secret-keys",children:"Proxy Secret Keys"}),"\n",(0,n.jsx)(i.h3,{id:"list-proxy-secret-keys",children:"List Proxy Secret Keys"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"GET https://trybricks.ai/api/v1/secret-keys\n"})}),"\n",(0,n.jsx)(i.h4,{id:"response-1",children:"Response"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'[\n  {\n    "name": "Some descriptive name for the key",\n    "keyId": "some-key-id", // Unique identifier of the key\n    "tags": ["clskya3uu0005ye8ggt5bp775"], // Organization ID\n    "key": "hashed-version-of-the-key", // Hashed value of the proxy secret key, can be ignored\n    "createdAt": 1708065781,\n    "updatedAt": 1708065781,\n    "revoked": false,\n    "revokedReason": "",\n    "costLimitInUsd": 100, // Cost limit over lifetime\n    "costLimitInUsdOverTime": 100, // Cost limit per time unit\n    "costLimitInUsdUnit": "mo", // Cost limit time unit\n    "rateLimitOverTime": 10, // Rate limit per time unit\n    "rateLimitUnit": "h", // Rate limit time unit\n    "ttl": "1h", // Time to live\n    "settingId": "", // Deprecated, can be ignored\n    "settingIds": ["some-provider-id"]\n  }\n]\n'})}),"\n",(0,n.jsx)(i.h3,{id:"create-a-proxy-secret-key",children:"Create a Proxy Secret Key"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"POST https://trybricks.ai/api/v1/secret-keys\n"})}),"\n",(0,n.jsx)(i.h4,{id:"request-body",children:"Request body"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "name": "Some name", // Required, some descriptive name for the key\n  "providerSettingIds": ["some-provider-id"], // Required, provider ID\n  "ttl": "1h", // Optional, time to live, must be a positive integer followed by s, m, or h\n  "rateLimitOverTime": 10, // Optional, rate limit per time unit, as specified in "rateLimitUnit"\n  "rateLimitUnit": "h", // Optional, rate limit time unit, must be s, m, or h\n  "costLimitInUsdPerMonth": 100, // Optional, cost limit per month\n  "costLimitInUsdLifetime": 100 // Optional, cost limit over lifetime\n}\n'})}),"\n",(0,n.jsx)(i.h4,{id:"response-2",children:"Response"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "id": "some-key-id", // Unique identifier of the key\n  "name": "Some name",\n  "organizationId": "some-organization-id",\n  "key": "some-proxy-secret-key" // Proxy secret key, make sure to store it securely as you won\'t see it again\n}\n'})}),"\n",(0,n.jsx)(i.h3,{id:"update-a-proxy-secret-key",children:"Update a Proxy Secret Key"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsx)(i.p,{children:"Updates are not immedately effective. It may take a few seconds for the changes to take effect."})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"PATCH https://trybricks.ai/api/v1/secret-keys/[keyId]\n"})}),"\n",(0,n.jsx)(i.h4,{id:"request-body-1",children:"Request body"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:'{\n  "name": "Some name", // Optional, some descriptive name for the key\n  "settingIds": ["some-provider-id"], // Optional, provider ID\n  "revoked": true // Optional, whether the key is revoked\n  "rateLimitOverTime": 10, // Optional, rate limit per time unit, as specified in "rateLimitUnit"\n  "rateLimitUnit": "h", // Optional, rate limit time unit, must be s, m, or h\n  "costLimitInUsdPerMonth": 100, // Optional, cost limit per month\n  "costLimitInUsdLifetime": 100 // Optional, cost limit over lifetime\n}\n'})}),"\n",(0,n.jsx)(i.h4,{id:"response-3",children:"Response"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-txt",children:"success\n"})})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>o});var n=t(7294);const s={},r=n.createContext(s);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);