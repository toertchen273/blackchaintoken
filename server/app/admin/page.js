(()=>{var e={};e.id=698,e.ids=[698],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},12412:e=>{"use strict";e.exports=require("assert")},79428:e=>{"use strict";e.exports=require("buffer")},55511:e=>{"use strict";e.exports=require("crypto")},94735:e=>{"use strict";e.exports=require("events")},29021:e=>{"use strict";e.exports=require("fs")},81630:e=>{"use strict";e.exports=require("http")},55591:e=>{"use strict";e.exports=require("https")},91645:e=>{"use strict";e.exports=require("net")},21820:e=>{"use strict";e.exports=require("os")},33873:e=>{"use strict";e.exports=require("path")},19771:e=>{"use strict";e.exports=require("process")},11997:e=>{"use strict";e.exports=require("punycode")},27910:e=>{"use strict";e.exports=require("stream")},34631:e=>{"use strict";e.exports=require("tls")},79551:e=>{"use strict";e.exports=require("url")},28354:e=>{"use strict";e.exports=require("util")},74075:e=>{"use strict";e.exports=require("zlib")},77598:e=>{"use strict";e.exports=require("node:crypto")},73136:e=>{"use strict";e.exports=require("node:url")},10097:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>d,tree:()=>c});var s=r(70260),a=r(28203),n=r(25155),o=r.n(n),i=r(67292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,65354)),"C:\\Users\\fahad.ali\\Desktop\\bct main\\app\\admin\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3446)),"C:\\Users\\fahad.ali\\Desktop\\bct main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,19937,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,46055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\fahad.ali\\Desktop\\bct main\\app\\admin\\page.js"],p={require:r,loadChunk:()=>Promise.resolve()},d=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},61985:(e,t,r)=>{Promise.resolve().then(r.bind(r,65354))},75137:(e,t,r)=>{Promise.resolve().then(r.bind(r,78646))},78646:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var s=r(45512),a=r(58009),n=r(5265),o=r(44748),i=r(65821),l=r(60170),c=r(80554),u=r(48981);let p=()=>{let e=(0,o.M)(),{publicKey:t,signAllTransactions:r}=(0,i.v)(),[p,d]=(0,a.useState)(0),[h,x]=(0,a.useState)(),[m,f]=(0,a.useState)(""),[b,g]=(0,a.useState)(0),[w,y]=(0,a.useState)(0),[F,v]=(0,a.useState)(0),[k,j]=(0,a.useState)(),P=async()=>{try{if(!e){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(e){let t=await (0,n.Vo)(e,p);t.feePayer=e.publicKey,t.recentBlockhash=(await l.F.getLatestBlockhash()).blockhash;let r=await e.signTransaction(t),s=await (0,c.sendAndConfirmRawTransaction)(l.F,r.serialize());u.oR.success("Pool initialisiert"),console.log("signature",s)}}catch(e){console.log(e),(0,n.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},C=async()=>{try{if(!e){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(e){let t=await (0,n.HP)(e,b);t.feePayer=e.publicKey,t.recentBlockhash=(await l.F.getLatestBlockhash()).blockhash;let r=await e.signTransaction(t),s=await (0,c.sendAndConfirmRawTransaction)(l.F,r.serialize());u.oR.success("Pool initialisiert"),console.log("signature",s)}}catch(e){console.log(e),(0,n.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},T=async()=>{try{if(!e){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(e){let t=await (0,n.Sp)(e,w);t.feePayer=e.publicKey,t.recentBlockhash=(await l.F.getLatestBlockhash()).blockhash;let r=await e.signTransaction(t),s=await (0,c.sendAndConfirmRawTransaction)(l.F,r.serialize());u.oR.success("Pool initialisiert"),console.log("signature",s)}}catch(e){console.log(e),(0,n.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},B=async()=>{try{if(!e){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(e){let t=await (0,n.H3)(e,new c.PublicKey(m));t.feePayer=e.publicKey,t.recentBlockhash=(await l.F.getLatestBlockhash()).blockhash;let r=await e.signTransaction(t),s=await (0,c.sendAndConfirmRawTransaction)(l.F,r.serialize());u.oR.success("Pool initialisiert"),console.log("signature",s)}}catch(e){console.log(e),(0,n.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},R=async()=>{try{if(!t)return;let e=await fetch("https://mainnet.helius-rpc.com/?api-key=611b8650-18b4-4948-91d9-5c3492144251",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",method:"getTokenAccounts",id:"helius-test",params:{page:1,limit:1e3,displayOptions:{},mint:"BCTJnXmpYpmnozJb2eYykzPnVnV8cSABXXd71iJN8s7t"}})}),s=(await e.json()).result.token_accounts,a=[],n=new Transaction,o=0;for(let e of s){let r=await getAssociatedTokenAddress(TOKEN_ADDRESS,t),i=new c.PublicKey(e.address),u=Math.floor(e.amount*(F/100));n.add(createTransferCheckedInstruction(r,TOKEN_ADDRESS,i,t,u,6)),o++,(20===o||e===s[s.length-1])&&(n.feePayer=t,n.recentBlockhash=(await l.F.getLatestBlockhash("confirmed")).blockhash,a.push(n),n=new Transaction,o=0)}for(let e of(console.log("allTxns",a),await r(a))){let t=await l.F.sendRawTransaction(e.serialize());console.log(t)}}catch(e){console.log(e)}},S=async()=>{try{if(!e){u.oR.error("Please connect wallet");return}if(!k){u.oR.error("Please Enter new owner");return}let t=new c.PublicKey(k);if(!c.PublicKey.isOnCurve(t.toBytes())){u.oR.error("Please Enter a valid pubkey");return}if(e){let r=await updateOwner(e,t);if(!r)return;r.feePayer=e.publicKey,r.recentBlockhash=(await l.F.getLatestBlockhash()).blockhash;let s=await e.signTransaction(r),a=await (0,c.sendAndConfirmRawTransaction)(l.F,s.serialize());u.oR.success("Owner Update Succesful"),console.log("signature",a),setRefetch(!refetch)}}catch(t){console.log(t);let e=(0,n.BZ)(t.message);u.oR.error(e)}};return(0,a.useEffect)(()=>{(async()=>{e&&x((await (0,n.TL)(e))[0])})()},[e]),console.log(h),(0,s.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Pool Data"}),h?(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Authority: ",h?.account?.authority?.toString()]}),(0,s.jsxs)("p",{children:["Fee Wallet: ",h?.account?.escrowFee?.toString()]}),(0,s.jsxs)("p",{children:["Token Address: ",h?.account?.mint?.toString()]}),(0,s.jsxs)("p",{children:["Total Stake: ",Number(h?.account?.totalStaked)/n.VQ]}),(0,s.jsxs)("p",{children:["Total Stakers: ",h?.account?.totalStakers]})]}):null]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:p,onChange:e=>d(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:P,children:"Create Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:b,onChange:e=>g(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:C,children:"withdraw Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:w,onChange:e=>y(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:T,children:"deposite Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:m,onChange:e=>f(e.target.value),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:B,children:"Transfer Back"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:k,onChange:e=>j(e.target.value),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:S,children:"Transfer Owner"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:F,onChange:e=>v(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:R,children:"Airdrop Tokens"})]})]})}},65354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\fahad.ali\\\\Desktop\\\\bct main\\\\app\\\\admin\\\\page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\fahad.ali\\Desktop\\bct main\\app\\admin\\page.js","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[989,543,77,172,916,823],()=>r(10097));module.exports=s})();