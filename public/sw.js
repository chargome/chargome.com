if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const o=e=>i(e,c),r={module:{uri:c},exports:t,require:o};a[c]=Promise.all(s.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/113-ad2017bcd53e8d46.js",revision:"ad2017bcd53e8d46"},{url:"/_next/static/chunks/1bfc9850-14e6c045f7ba886e.js",revision:"14e6c045f7ba886e"},{url:"/_next/static/chunks/882-bd7f2b920648f059.js",revision:"bd7f2b920648f059"},{url:"/_next/static/chunks/d0c16330-1ef48ce1ed35bc67.js",revision:"1ef48ce1ed35bc67"},{url:"/_next/static/chunks/d64684d8-51c8ba4658aee25c.js",revision:"51c8ba4658aee25c"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-b7722eee6611ceff.js",revision:"b7722eee6611ceff"},{url:"/_next/static/chunks/pages/_app-7aa0a4cd5da516ef.js",revision:"7aa0a4cd5da516ef"},{url:"/_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"a4ba2246ff8fb532"},{url:"/_next/static/chunks/pages/blog-ff207756a38ddc8b.js",revision:"ff207756a38ddc8b"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-0353fb6677476a3c.js",revision:"0353fb6677476a3c"},{url:"/_next/static/chunks/pages/index-ac85bc659fc6d7c8.js",revision:"ac85bc659fc6d7c8"},{url:"/_next/static/chunks/pages/project/kanban-f3835ac57c9e6f12.js",revision:"f3835ac57c9e6f12"},{url:"/_next/static/chunks/pages/project/meetingpoint-0bb74315c49abbb8.js",revision:"0bb74315c49abbb8"},{url:"/_next/static/chunks/pages/project/paketrechner-c4704d9bf8fc300d.js",revision:"c4704d9bf8fc300d"},{url:"/_next/static/chunks/pages/project/shuttle-4d2406397ac9b15f.js",revision:"4d2406397ac9b15f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d7b038a63b619762.js",revision:"d7b038a63b619762"},{url:"/_next/static/css/b32e7aa9a970ce00.css",revision:"b32e7aa9a970ce00"},{url:"/_next/static/media/open-sans-all-400-normal.52ada23a.woff",revision:"52ada23a"},{url:"/_next/static/media/open-sans-cyrillic-400-normal.b24677da.woff2",revision:"b24677da"},{url:"/_next/static/media/open-sans-cyrillic-ext-400-normal.813d185d.woff2",revision:"813d185d"},{url:"/_next/static/media/open-sans-greek-400-normal.ad3b150d.woff2",revision:"ad3b150d"},{url:"/_next/static/media/open-sans-greek-ext-400-normal.5fb1acd1.woff2",revision:"5fb1acd1"},{url:"/_next/static/media/open-sans-hebrew-400-normal.94d66927.woff2",revision:"94d66927"},{url:"/_next/static/media/open-sans-latin-400-normal.abd3eb12.woff2",revision:"abd3eb12"},{url:"/_next/static/media/open-sans-latin-ext-400-normal.47afa2bd.woff2",revision:"47afa2bd"},{url:"/_next/static/media/open-sans-vietnamese-400-normal.beeddf8e.woff2",revision:"beeddf8e"},{url:"/_next/static/media/roboto-mono-all-400-normal.7009585d.woff",revision:"7009585d"},{url:"/_next/static/media/roboto-mono-cyrillic-400-normal.699efb6e.woff2",revision:"699efb6e"},{url:"/_next/static/media/roboto-mono-cyrillic-ext-400-normal.c1ecc1bb.woff2",revision:"c1ecc1bb"},{url:"/_next/static/media/roboto-mono-greek-400-normal.2114bc3f.woff2",revision:"2114bc3f"},{url:"/_next/static/media/roboto-mono-latin-400-normal.aa44fca3.woff2",revision:"aa44fca3"},{url:"/_next/static/media/roboto-mono-latin-ext-400-normal.ba13a7b8.woff2",revision:"ba13a7b8"},{url:"/_next/static/media/roboto-mono-vietnamese-400-normal.17bb1e44.woff2",revision:"17bb1e44"},{url:"/_next/static/v_8KXPh1iyr8znMfHnyHt/_buildManifest.js",revision:"868ae2ecbdea96aef2ee6044a0ff4a4b"},{url:"/_next/static/v_8KXPh1iyr8znMfHnyHt/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/images/fago.gif",revision:"1457feec4b638a2f0d2ac672cee9b734"},{url:"/images/fago.mp4",revision:"13880ba25ee275b5b3809974b5e1c23d"},{url:"/images/fago.webm",revision:"b94ac956e1c325480ba1950622f5cc1c"},{url:"/images/gmz.jpg",revision:"f11352488064a5d22b76eaf2e5a698d7"},{url:"/images/gomez.jpg",revision:"72cb021195bf7ac56536c5a4a3feec2e"},{url:"/images/gomez_1.jpg",revision:"aa021f0b015746217bf0698cc549b49c"},{url:"/images/gomez_1.webp",revision:"ba7a502cf21817d69c7c7d2394f708b2"},{url:"/images/gomez_2.jpg",revision:"c02025fd9ce9cab9e1e3944fd0ee12ed"},{url:"/images/icons/icon-128x128.png",revision:"ed87792f531c9710588648d4129e1e89"},{url:"/images/icons/icon-144x144.png",revision:"42a6c0075c3087c8e0335aadb22da4a3"},{url:"/images/icons/icon-152x152.png",revision:"3a208f63197888eb95222b55c0570f06"},{url:"/images/icons/icon-192x192.png",revision:"6ec8050230ec0d1d5c410b0ff8899df9"},{url:"/images/icons/icon-384x384.png",revision:"ae8846acf9853ad06e1a7a6c31a2107b"},{url:"/images/icons/icon-512x512.png",revision:"5bb3adf5c0994ebf69f99b92ddf8c777"},{url:"/images/icons/icon-72x72.png",revision:"a83b710c835de1b942ae39115d2e5911"},{url:"/images/icons/icon-96x96.png",revision:"ead93d759f0982e33b2f9b3509754c42"},{url:"/images/kanban.gif",revision:"1ff3bcac63ea9f6a83aa04204f5dff55"},{url:"/images/kanban.mp4",revision:"d81c8445c2a7e6afac3386729335fa72"},{url:"/images/kanban.webm",revision:"08278718b55b3879b1f5dd7506db6fe1"},{url:"/images/leitold.gif",revision:"dc5ed892bc0d910a52d8e0050ac4d622"},{url:"/images/leitold.mp4",revision:"c02a6b55fc7ec8061885819e0e4a8fe7"},{url:"/images/leitold.webm",revision:"05964592e0431e7ca14661a2e4d45492"},{url:"/images/meetingpoint.gif",revision:"1a6185de327445a0f47ffa8ea4922d7e"},{url:"/images/paketrechner.gif",revision:"0fd81419fa3eddd9c0c1615053dad530"},{url:"/images/shuttle.gif",revision:"49eee39113452b6018bff6a2982d91c4"},{url:"/images/shuttle.mp4",revision:"a68a4b471b5109df9b5a0f3aa9b02335"},{url:"/images/shuttle.webm",revision:"4ad659ecc31747e5bcb51de92052d1b8"},{url:"/images/steffiglocker.gif",revision:"00d669f6eb71ec3cbf4a06dda14b36ec"},{url:"/images/steffiglocker.mp4",revision:"299c0a873ce7e0129cfe6076929c25f7"},{url:"/images/steffiglocker.webm",revision:"f4f56e3b444df02c64284b1055e7d600"},{url:"/images/textbase.png",revision:"169fc39eb9a4dcdf8f5546b0eec81836"},{url:"/images/wohlfuehlen.png",revision:"b8c64b27a46d57e68e44b1e8e8e2aaa0"},{url:"/manifest.json",revision:"3b2a9f64d3d215e99cddca34314d70d5"},{url:"/slapped.html",revision:"5acf05740d492510343db47b7eafa605"},{url:"/thephonesareworking.html",revision:"a2e7c5eb4f2c832a0277da51ce626c71"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
