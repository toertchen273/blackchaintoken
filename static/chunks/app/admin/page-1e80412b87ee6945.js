(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{9919:(e,t,a)=>{Promise.resolve().then(a.bind(a,7348))},7348:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var s=a(5155),n=a(2115),l=a(22),o=a(1336),r=a(1929),i=a(8116),c=a(7369),u=a(2551);let d=()=>{var e,t,a,d,h,x,p,b;let f=(0,o.M)(),{publicKey:g,signAllTransactions:m}=(0,r.v)(),[F,w]=(0,n.useState)(0),[v,y]=(0,n.useState)(),[k,j]=(0,n.useState)(""),[B,T]=(0,n.useState)(0),[N,S]=(0,n.useState)(0),[R,P]=(0,n.useState)(0),[C,A]=(0,n.useState)(),E=async()=>{try{if(!f){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(f){let e=await (0,l.Vo)(f,F);e.feePayer=f.publicKey,e.recentBlockhash=(await i.F.getLatestBlockhash()).blockhash;let t=await f.signTransaction(e),a=await (0,c.sendAndConfirmRawTransaction)(i.F,t.serialize());u.oR.success("Pool initialisiert"),console.log("signature",a)}}catch(e){console.log(e),(0,l.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},K=async()=>{try{if(!f){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(f){let e=await (0,l.HP)(f,B);e.feePayer=f.publicKey,e.recentBlockhash=(await i.F.getLatestBlockhash()).blockhash;let t=await f.signTransaction(e),a=await (0,c.sendAndConfirmRawTransaction)(i.F,t.serialize());u.oR.success("Pool initialisiert"),console.log("signature",a)}}catch(e){console.log(e),(0,l.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},O=async()=>{try{if(!f){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(f){let e=await (0,l.Sp)(f,N);e.feePayer=f.publicKey,e.recentBlockhash=(await i.F.getLatestBlockhash()).blockhash;let t=await f.signTransaction(e),a=await (0,c.sendAndConfirmRawTransaction)(i.F,t.serialize());u.oR.success("Pool initialisiert"),console.log("signature",a)}}catch(e){console.log(e),(0,l.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},_=async()=>{try{if(!f){u.oR.error("Bitte Wallet anschlie\xdfen");return}if(f){let e=await (0,l.H3)(f,new c.PublicKey(k));e.feePayer=f.publicKey,e.recentBlockhash=(await i.F.getLatestBlockhash()).blockhash;let t=await f.signTransaction(e),a=await (0,c.sendAndConfirmRawTransaction)(i.F,t.serialize());u.oR.success("Pool initialisiert"),console.log("signature",a)}}catch(e){console.log(e),(0,l.BZ)(e.message),u.oR.error("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut")}},z=async()=>{try{if(!g)return;let e=await fetch("https://mainnet.helius-rpc.com/?api-key=611b8650-18b4-4948-91d9-5c3492144251",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({jsonrpc:"2.0",method:"getTokenAccounts",id:"helius-test",params:{page:1,limit:1e3,displayOptions:{},mint:"BCTJnXmpYpmnozJb2eYykzPnVnV8cSABXXd71iJN8s7t"}})}),t=(await e.json()).result.token_accounts,a=[],s=new Transaction,n=0;for(let e of t){let l=await getAssociatedTokenAddress(TOKEN_ADDRESS,g),o=new c.PublicKey(e.address),r=Math.floor(e.amount*(R/100));s.add(createTransferCheckedInstruction(l,TOKEN_ADDRESS,o,g,r,6)),n++,(20===n||e===t[t.length-1])&&(s.feePayer=g,s.recentBlockhash=(await i.F.getLatestBlockhash("confirmed")).blockhash,a.push(s),s=new Transaction,n=0)}for(let e of(console.log("allTxns",a),await m(a))){let t=await i.F.sendRawTransaction(e.serialize());console.log(t)}}catch(e){console.log(e)}},L=async()=>{try{if(!f){u.oR.error("Please connect wallet");return}if(!C){u.oR.error("Please Enter new owner");return}let e=new c.PublicKey(C);if(!c.PublicKey.isOnCurve(e.toBytes())){u.oR.error("Please Enter a valid pubkey");return}if(f){let t=await updateOwner(f,e);if(!t)return;t.feePayer=f.publicKey,t.recentBlockhash=(await i.F.getLatestBlockhash()).blockhash;let a=await f.signTransaction(t),s=await (0,c.sendAndConfirmRawTransaction)(i.F,a.serialize());u.oR.success("Owner Update Succesful"),console.log("signature",s),setRefetch(!refetch)}}catch(t){console.log(t);let e=(0,l.BZ)(t.message);u.oR.error(e)}};return(0,n.useEffect)(()=>{(async()=>{f&&y((await (0,l.TL)(f))[0])})()},[f]),console.log(v),(0,s.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Pool Data"}),v?(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{children:["Authority: ",null==v?void 0:null===(t=v.account)||void 0===t?void 0:null===(e=t.authority)||void 0===e?void 0:e.toString()]}),(0,s.jsxs)("p",{children:["Fee Wallet: ",null==v?void 0:null===(d=v.account)||void 0===d?void 0:null===(a=d.escrowFee)||void 0===a?void 0:a.toString()]}),(0,s.jsxs)("p",{children:["Token Address: ",null==v?void 0:null===(x=v.account)||void 0===x?void 0:null===(h=x.mint)||void 0===h?void 0:h.toString()]}),(0,s.jsxs)("p",{children:["Total Stake: ",Number(null==v?void 0:null===(p=v.account)||void 0===p?void 0:p.totalStaked)/l.VQ]}),(0,s.jsxs)("p",{children:["Total Stakers: ",null==v?void 0:null===(b=v.account)||void 0===b?void 0:b.totalStakers]})]}):null]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:F,onChange:e=>w(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:E,children:"Create Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:B,onChange:e=>T(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:K,children:"withdraw Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"number",value:N,onChange:e=>S(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:O,children:"deposite Pool"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:k,onChange:e=>j(e.target.value),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:_,children:"Transfer Back"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:C,onChange:e=>A(e.target.value),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:L,children:"Transfer Owner"})]}),(0,s.jsxs)("div",{className:"flex flex-col mb-4",children:[(0,s.jsx)("input",{type:"text",value:R,onChange:e=>P(parseFloat(e.target.value)),className:"text-[#FFFFFF] h-[40px] text-[50px] mt-4 mb-3 bg-transparent border-b-2 border-[#858585] text-center focus:outline-none"}),(0,s.jsx)("button",{className:"text-sm w-full bg-[#e41e34] px-4 py-2 rounded",onClick:z,children:"Airdrop Tokens"})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[956,33,919,363,394,433,441,517,358],()=>t(9919)),_N_E=e.O()}]);