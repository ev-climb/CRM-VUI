if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let u={};const o=e=>l(e,i),t={module:{uri:i},exports:u,require:o};s[i]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),u)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-crm"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.cd5e4f3f.css",revision:null},{url:"/index.html",revision:"f450a41ee0c5c8d7116d87187ba3b26f"},{url:"/js/112.165da2df.js",revision:null},{url:"/js/156.06fe481a.js",revision:null},{url:"/js/420.2b904b50.js",revision:null},{url:"/js/454.a8c5b46f.js",revision:null},{url:"/js/503.926946c2.js",revision:null},{url:"/js/883.65e86eab.js",revision:null},{url:"/js/899.daf276d5.js",revision:null},{url:"/js/933.1e915237.js",revision:null},{url:"/js/952.d89c7aa8.js",revision:null},{url:"/js/app.c80f11a5.js",revision:null},{url:"/js/chunk-vendors.f4af2264.js",revision:null},{url:"/manifest.json",revision:"6a8d2c9e18169fece64b94593566de0d"}],{})}));
//# sourceMappingURL=service-worker.js.map
