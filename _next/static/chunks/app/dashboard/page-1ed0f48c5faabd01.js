(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{9384:function(e,t,a){Promise.resolve().then(a.bind(a,6429))},6429:function(e,t,a){"use strict";let n,s;a.r(t),a.d(t,{default:function(){return H}});var r=a(7437),l=a(1910),i=a(851),o=a(5429),c=a(6432),d=a(2265),m=a(3320);let u=e=>{let{navItems:t,isOpen:a,setIsOpen:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("button",{onClick:()=>n(!a),className:"hamburger-menu ".concat(a?"open hamburger-menu-open":""),children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{})]}),(0,r.jsx)("nav",{className:"mobile-menu ".concat(a?"open":""),children:(0,r.jsx)("ul",{children:t.map((e,t)=>{let{href:a,title:n}=e;return"ALLES \xdcBER UNS"===n?(0,r.jsx)("li",{className:"sub-menu",children:(0,r.jsx)("div",{children:n})},t):(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:a,children:n})},t)})})})]})};var h=a(5614),x=a(2182);a(194),a(9591),a(6606),a(4141),a(3522),a(2768),a(5804);var p=a(8782),j=a(8489),f=a(7818),g=a(3340);a(8866);var b=a(9109).Buffer;async function k(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.n,n=[b.from("stake-entry","utf-8"),t.toBytes(),e.toBytes()];return await m.rV.PublicKey.findProgramAddress(n,a)}function v(e){return e.toNumber()/1e6}a(9109).Buffer,a(8171);let y={tokenAAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),tokenBAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),stakePoolAddress:new m.rV.PublicKey("BFCbiFLZUCWESpgdZf9zmsgzhaWSCbdWVJtDRYvnWo4T"),connection:new m.rV.Connection("https://rpc.shyft.to?api_key=6qgEDmJbmOqBsbXq")};var w=a(9198),N=a(1644);let B={tokenAAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),tokenBAddress:new m.rV.PublicKey("AdaEUjSPakTbCMDZeyBw76qBrod8YGUad3t4dVmkmGHz"),stakePoolAddress:new m.rV.PublicKey("BFCbiFLZUCWESpgdZf9zmsgzhaWSCbdWVJtDRYvnWo4T"),connection:new m.rV.Connection("https://rpc.shyft.to?api_key=6qgEDmJbmOqBsbXq")};async function C(){await A(),await E(),await T(),await S()}async function E(){if(null==s?void 0:s.publicKey){let e=await D(B.tokenAAddress,null==s?void 0:s.publicKey);e&&(B.tokenABalance={tokenSymbol:"WMP",balance:Number(e.amount)/1e6})}}async function T(){if(null==s?void 0:s.publicKey){let e=await D(B.tokenBAddress,s.publicKey);e&&(B.tokenBBalance={tokenSymbol:"xWMP",balance:Number(e.amount)/1e6})}}async function A(){let e=await n.account.stakePool.fetchNullable(B.stakePoolAddress);e&&(B.stakePoolData={xWmpEscrow:null==e?void 0:e.escrowB,balance:e.balance.toNumber()/1e6,timestamp:new Date(1e3*e.lastUpdateTimestamp.toNumber())})}async function S(){if(console.log("debug fetchStakeEntryData",B),null==s?void 0:s.publicKey){let[e,t]=await k(s.publicKey,B.stakePoolAddress),a=await n.account.stakeEntry.fetchNullable(e);console.log("debug stakeEntryData::",null==a?void 0:a.rewardsPerTokenPaid.toNumber()),null!=a&&(B.stakeEntryAddress=e,console.log("debug:claimedreward",a.claimed.toString()),B.stakeEntryData={stakeBalance:a.balance.toNumber()/1e6,rewards:a.rewards.toNumber()/1e6,rewardsPerTokenPaid:a.rewardsPerTokenPaid.toNumber()/1e6,claimedReward:a.claimed.toNumber()/1e6},console.log(B.stakeEntryData))}}async function D(e,t){let a=await (0,w.Am)(e,t);try{return await (0,N.D0)(B.connection,a)}catch(e){}return null}async function P(){console.log("debug app AppState.adapter",B.adapter),await C(),console.log("debug after loadState"),console.log("debug renderInternal 1  "),document.querySelector("#wallet-connected").style.display="block",console.log("debug stakeEntryData",B.stakeEntryData),B.stakeEntryData&&(document.querySelector("#stake-amount").textContent=B.stakeEntryData.stakeBalance.toFixed(2)+" ",document.querySelector("#claimed-rewards").textContent=B.stakeEntryData.claimedReward.toFixed(2)+" "),B.tokenABalance&&(document.querySelector("#a-amount").textContent=B.tokenABalance.balance.toFixed(2)+"  "),B.stakeEntryData.stakeBalance>0&&(setInterval(async()=>{let e=await F();document.querySelector("#estimated-rewards").textContent=(null==e?void 0:e.toFixed(2))+" "},5e3),function(){if(B.stakeEntryData.stakeBalance){var e;document.querySelector("#monthly-a-amount").textContent=((null!==(e=B.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.1196).toFixed(2)+"  "}}(),function(){if(B.stakeEntryData.stakeBalance){var e;document.querySelector("#daily-a-amount").textContent=((null!==(e=B.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.00398).toFixed(2)+"  "}}(),function(){if(B.stakeEntryData.stakeBalance){var e;document.querySelector("#weekly-a-amount").textContent=((null!==(e=B.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.0279).toFixed(2)+"  "}}(),function(){if(B.stakeEntryData.stakeBalance){var e;document.querySelector("#yearly-a-amount").textContent=((null!==(e=B.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*1.4511).toFixed(2)+"  "}}(),function(){if(B.tokenABalance){var e;document.querySelector("#estimated-rewards-24h").textContent=((null!==(e=B.stakeEntryData.stakeBalance)&&void 0!==e?e:0)*.00398).toFixed(2)+"  "}}())}async function F(){let e=await n.account.stakePool.fetchNullable(B.stakePoolAddress),t=await n.account.stakeEntry.fetchNullable(B.stakeEntryAddress);if(console.log("debug:rewardperToken",null==t?void 0:t.rewardsPerTokenPaid.toString()),e&&t){let a=Date.now()/1e3-e.lastUpdateTimestamp.toNumber(),n=v(e.rewardsPerTokenStored)+461419*a/1e5/1e8;return v(t.rewards)+(n-v(t.rewardsPerTokenPaid))*v(t.balance)}}var q=a(3580),K=a(8135),L=a(2273);a(5438);let I=(0,f.default)(async()=>(await a.e(746).then(a.bind(a,7746))).WalletMultiButton,{loadableGenerated:{webpack:()=>[null]},ssr:!1});function W(){var e,t,a,l,i,c,f;let{publicKey:b,connected:k}=(0,p.O)(),[v,N]=(0,d.useState)(0),[B,C]=(0,d.useState)(0),[E,T]=(0,d.useState)(),[A,S]=(0,d.useState)(!1),[D,F]=(0,d.useState)(),[W,R]=(0,d.useState)(0),U=(0,j.z)(),M=(0,j.z)();(0,d.useEffect)(()=>{k&&(n=function(e){let{wallet:t}=e,a=new m.Y7(y.connection,t,{});return new m.$r(x.x,g.n,a)}({wallet:U}),s=M,console.log("debug set adapter",M),P())},[k]);let[z,Z]=(0,d.useState)(!1),_=async()=>{try{if(!U){q.Am.error("Please connect wallet");return}if(U){let e=await (0,L.dK)(U,v);if(!e)return;e.feePayer=U.publicKey,e.recentBlockhash=(await K.Z.getLatestBlockhash()).blockhash;let t=await U.signTransaction(e),a=await (0,o.sendAndConfirmRawTransaction)(K.Z,t.serialize());q.Am.success("Tokens Staked"),console.log("signature",a),S(!A)}}catch(t){console.log(t);let e=(0,L.jg)(t.message);q.Am.error(e)}},V=async()=>{try{if(!U){q.Am.error("Please connect wallet");return}if(U){let e=await (0,L.Sk)(U,B);if(!e)return;e.feePayer=U.publicKey,e.recentBlockhash=(await K.Z.getLatestBlockhash()).blockhash;let t=await U.signTransaction(e),a=await (0,o.sendAndConfirmRawTransaction)(K.Z,t.serialize());q.Am.success("Tokens unstaked"),console.log("signature",a),S(!A)}}catch(t){console.log(t);let e=(0,L.jg)(t.message);q.Am.error(e)}},O=async()=>{try{if(!U){q.Am.error("Please connect wallet");return}if(U){let e=await (0,L.SZ)(U);if(!e)return;e.feePayer=U.publicKey,e.recentBlockhash=(await K.Z.getLatestBlockhash()).blockhash;let t=await U.signTransaction(e),a=await (0,o.sendAndConfirmRawTransaction)(K.Z,t.serialize());q.Am.success("Tokens Claimed"),console.log("signature",a)}}catch(t){console.log(t);let e=(0,L.jg)(t.message);q.Am.error(e)}};function H(e,t){return .0019933*e*Math.floor((Math.floor(Date.now()/1e3)-t)/43200)}(0,d.useEffect)(()=>{document.querySelectorAll(".mobile-menu a").forEach(e=>{e.addEventListener("click",()=>{Z(!1)})})},[]);let G=(0,d.useRef)(null);return(0,d.useEffect)(()=>{function e(e){!G.current||e.target.matches(".hamburger-menu")||e.target.matches(".mobile-menu a")||e.target.matches(".mobile-menu")||e.target.matches(".hamburger-menu-open")||Z(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,d.useEffect)(()=>{(async()=>{U&&T((await (0,L.eL)(U))[0])})()},[U,A]),(0,d.useEffect)(()=>{(async()=>{if(!E||!U)return;let e=await K.Z.getSignaturesForAddress(null==E?void 0:E.publicKey,{limit:10}),t=(null==e?void 0:e.filter(e=>!e.err)).map(e=>e.signature),a=await K.Z.getTransactions(t),n=[];a.forEach(e=>{var t,a,s,r;let l=null==e?void 0:null===(a=e.meta)||void 0===a?void 0:null===(t=a.preTokenBalances)||void 0===t?void 0:t.filter(e=>e.owner==U.publicKey.toString())[0].uiTokenAmount.uiAmount,i=null==e?void 0:null===(r=e.meta)||void 0===r?void 0:null===(s=r.postTokenBalances)||void 0===s?void 0:s.filter(e=>e.owner==U.publicKey.toString())[0].uiTokenAmount.uiAmount,o={timestamp:null==e?void 0:e.blockTime,type:l>i?"Stake":"unstake",amount:i-l};n.push(o)}),F(n)})()},[E]),(0,d.useEffect)(()=>{(async()=>{if(!U)return;let e=await (0,w.Am)(L.LW,U.publicKey);if(await K.Z.getAccountInfo(e)){var t;let a=await K.Z.getTokenAccountBalance(e);R(null==a?void 0:null===(t=a.value)||void 0===t?void 0:t.uiAmount)}})()},[U,A]),(0,r.jsxs)("div",{id:"wrapper",className:"clearfix",children:[(0,r.jsxs)(h.Z,{children:[(0,r.jsx)("meta",{httpEquiv:"content-type",content:"text/html; charset=utf-8"}),(0,r.jsx)("meta",{name:"author",content:"BRT"}),(0,r.jsx)("meta",{name:"description",content:"Developed to represent all of BlackChain's financial instruments in cryptocurrencies and to make them seamlessly accessible to every crypto user."}),(0,r.jsx)("link",{rel:"shortcut icon",href:"favicon.ico",type:"image/x-icon"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/bootstrap.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/style.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/dark.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/font-icons.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"one-page/css/et-line.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/animate.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/magnific-popup.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",type:"text/css",href:"demos/photographer/css/menu.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/responsive.css",type:"text/css"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"stylesheet",href:"demos/photographer/photographer.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"dashboardstyle.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"demos/photographer/css/fonts.css",type:"text/css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"css/colors.php?color=e41c34",type:"text/css"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/web3.js@latest/dist/web3.min.js"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/wallet-adapter-wallets@latest/dist/wallet-adapter-wallets.umd.js"}),(0,r.jsx)("script",{src:"https://unpkg.com/@solana/wallet-adapter-base@latest/dist/wallet-adapter-base.umd.js"}),(0,r.jsx)("title",{children:"BlackChain Token"})]}),(0,r.jsxs)("div",{id:"wrapper",className:"clearfix",children:[(0,r.jsxs)("header",{id:"header",className:"floating-header header-size-md",children:[(0,r.jsxs)("div",{id:"header-wrap",children:[(0,r.jsx)("div",{ref:G,children:(0,r.jsx)(u,{navItems:[{href:"/index.html",title:"BCT TOKEN"},{href:"#",title:"ALLES \xdcBER UNS"},{href:"/index.html#socialmedia",title:"\xa0\xa0\xa0\xa0Unsere sozialen Medien"},{href:"/roadmap.html#tokenomicsrmpage",title:"\xa0\xa0\xa0\xa0Tokenomics"},{href:"/wallet.html#walletpart",title:"\xa0\xa0\xa0\xa0Wallets"},{href:"/WPBCT.pdf",title:"\xa0\xa0\xa0\xa0Unser Whitepaper"},{href:"/index.html#airdrops",title:"\xa0\xa0\xa0\xa0Airdrops"},{href:"/wallet.html",title:"\xa0\xa0\xa0\xa0BCT Token staken"},{href:"/roadmap.html#roadmaprmpage",title:"ROADMAP"},{href:"/index.html#faqBCT",title:"FAQS"},{href:"contact.html",title:"KONTAKT"}],isOpen:z,setIsOpen:Z})}),(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"header-row",children:[(0,r.jsx)("div",{id:"logo",children:(0,r.jsxs)("a",{href:"/index.html/",style:{color:"#000"},children:[" ","BlackChain Token"," "]})}),(0,r.jsx)("div",{className:"header-misc",children:(0,r.jsx)("div",{className:"wallet-info",children:(0,r.jsx)(I,{})})}),(0,r.jsx)("nav",{className:"primary-menu with-arrows",children:(0,r.jsxs)("ul",{className:"menu-container",children:[(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"index.html",children:(0,r.jsx)("div",{children:"BCT Token"})})}),(0,r.jsxs)("li",{className:"menu-item mega-menu current",children:[(0,r.jsx)("div",{className:"menu-link",children:(0,r.jsx)("div",{children:"Alles \xfcber uns"})}),(0,r.jsx)("div",{className:"mega-menu-content mega-menu-style-2 px-0",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("a",{href:"index.html#socialmedia",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/seo.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Unsere sozialen Medien"}),(0,r.jsx)("p",{children:"Hier findest du unsere sozialen Medien."})]})]})}),(0,r.jsx)("a",{href:"roadmap.html#tokenomicsrmpage",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/social.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Tokenomics"}),(0,r.jsx)("p",{children:"Hier findest du unsere Tokenomics."})]})]})}),(0,r.jsx)("a",{href:"wallet.html#walletpart",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/adword.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Wallets"}),(0,r.jsx)("p",{children:"Entdecke hier eine Liste an n Wallets."})]})]})}),(0,r.jsx)("a",{href:"WPBCT.pdf",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/experience.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Unser Whitepaper"}),(0,r.jsx)("p",{children:"Hier kannst du das Whitepaper downloaden und lesen."})]})]})}),(0,r.jsx)("a",{href:"index.html#airdrops",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/analysis.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"Airdrops"}),(0,r.jsx)("p",{children:"Berechne wie viel du durch Airdrops verdienen kannst."})]})]})}),(0,r.jsx)("a",{href:"wallet.html",className:"mega-menu-column sub-menu-container col-lg-4 border-bottom h-bg-light py-4",children:(0,r.jsxs)("div",{className:"feature-box",children:[(0,r.jsx)("div",{className:"fbox-icon mb-2",children:(0,r.jsx)("img",{src:"demos/seo/images/icons/content_marketing.svg",alt:"Feature Icon",className:"bg-transparent rounded-0"})}),(0,r.jsxs)("div",{className:"fbox-content",children:[(0,r.jsx)("h3",{className:"text-transform-none ls-0",children:"BCT Token staken"}),(0,r.jsx)("p",{children:"Entdecke das Stakingdashboard und nimm hier einfach \xfcber unsere Website am Staking teil."})]})]})})]})})})]}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"roadmap.html#roadmaprmpage",children:(0,r.jsx)("div",{children:"Roadmap"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"index.html#faqBCT",children:(0,r.jsx)("div",{children:"FAQs"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)("a",{className:"menu-link",href:"contact.html",children:(0,r.jsx)("div",{children:"Kontakt"})})})]})}),(0,r.jsx)("form",{className:"top-search-form",action:"search.html",method:"get",children:(0,r.jsx)("input",{type:"text",name:"q",className:"form-control",value:"",placeholder:"Wonach suchst du?",autoComplete:"off"})})]})})]}),(0,r.jsx)("div",{className:"header-wrap-clone"})]}),(0,r.jsx)("section",{id:"slider",className:"slider-element full-screen clearfix",style:{background:"url('demos/photographer/images/dots-1.png') 100% 0 no-repeat",backgroundSize:"60% auto"},children:(0,r.jsxs)("div",{className:"main-content",id:"wallet-connected",children:[(0,r.jsxs)("div",{className:"stats",children:[(0,r.jsxs)("div",{className:"stat-item",id:"stake-entry-data",children:[(0,r.jsx)("p",{children:"Total staked"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"stake-amount"})," ",E?Number(null==E?void 0:null===(e=E.account)||void 0===e?void 0:e.amount)/L.ou:0," BCT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"Available"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"estimated-rewards"})," ",E?Number(null==E?void 0:null===(t=E.account)||void 0===t?void 0:t.rewards)/L.ou:0," BCT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"Total rewards"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"claimed-rewards"})," ",E?(Number(null==E?void 0:null===(a=E.account)||void 0===a?void 0:a.rewards)+H(Number(null==E?void 0:null===(l=E.account)||void 0===l?void 0:l.amount),Number(null==E?void 0:null===(i=E.account)||void 0===i?void 0:i.lastStakedAt)))/L.ou:0," BCT"]})]}),(0,r.jsxs)("div",{className:"stat-item",children:[(0,r.jsx)("p",{children:"24h Rewards"}),(0,r.jsxs)("h3",{children:[(0,r.jsx)("span",{id:"estimated-rewards-24h"})," ",E?H(Number(null==E?void 0:null===(c=E.account)||void 0===c?void 0:c.amount),Number(null==E?void 0:null===(f=E.account)||void 0===f?void 0:f.lastStakedAt))/L.ou:0,"BCT"]})]})]}),(0,r.jsxs)("div",{className:"action-buttons",children:[(0,r.jsxs)("div",{className:"action-button-wrap",children:[(0,r.jsx)("input",{type:"number",id:"stake_input",value:v,onChange:e=>{N(parseFloat(e.target.value))}}),(0,r.jsx)("button",{className:"stake-button",id:"stake",onClick:_,children:"Stake"})]}),(0,r.jsxs)("div",{className:"action-button-wrap",children:[(0,r.jsx)("input",{type:"number",id:"unstake_input",value:B,onChange:e=>{C(parseFloat(e.target.value))}}),(0,r.jsx)("button",{className:"unstake-button",id:"unstake",onClick:V,children:"Unstake"})]}),(0,r.jsx)("div",{className:"action-button-wrap",children:(0,r.jsx)("button",{className:"stake-button",id:"claimrewards",onClick:O,children:"Rewards auszahlen"})})]}),(0,r.jsxs)("div",{className:"wallet-info",children:[(0,r.jsx)("div",{className:"chart-container",children:(0,r.jsxs)("div",{className:"statistics-container",children:[(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"Momentane monatliche Returns"}),(0,r.jsxs)("p",{id:"current-monthly-return",children:["11.96% | ",(0,r.jsx)("span",{id:"monthly-a-amount"})," BCT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche t\xe4gliche Returns"}),(0,r.jsxs)("p",{id:"expected-daily-return",children:["0.398% | ",(0,r.jsx)("span",{id:"daily-a-amount"})," BCT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche w\xf6chentliche Returns"}),(0,r.jsxs)("p",{id:"expected-weekly-return",children:["2.79% | ",(0,r.jsx)("span",{id:"weekly-a-amount"})," BCT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"voraussichtliche j\xe4hrliche Returns"}),(0,r.jsxs)("p",{id:"expected-yearly-return",children:["145.11% | ",(0,r.jsx)("span",{id:"yearly-a-amount"})," BCT"]})]}),(0,r.jsxs)("div",{className:"statitem",id:"token-a-data",children:[(0,r.jsx)("h3",{children:"verf\xfcgbare Token in deiner Wallet"}),(0,r.jsxs)("p",{id:"expected-monthly-return",children:[(0,r.jsx)("span",{id:"a-amount"})," ",W," BCT"]})]}),(0,r.jsxs)("div",{className:"statitem",children:[(0,r.jsx)("h3",{children:"automatisiertes Restake"}),(0,r.jsx)("p",{id:"expected-monthly-return",children:"not activated"})]})]})}),(0,r.jsxs)("div",{className:"transaction-history",children:[(0,r.jsx)("h3",{children:"Transaktionshistorie"}),(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Datum"}),(0,r.jsx)("th",{children:"Typ"}),(0,r.jsx)("th",{children:"Betrag"})]})}),(0,r.jsx)("tbody",{children:D?D.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"date",children:new Date(1e3*e.timestamp).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})}),(0,r.jsx)("td",{children:e.type}),(0,r.jsx)("td",{children:e.amount})]},t)):null})]})]})]})]})}),(0,r.jsx)("footer",{id:"footer",className:"no-border clearfix",children:(0,r.jsx)("div",{id:"copyrights",style:{background:"#111"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"w-100 text-center mt-4",children:[(0,r.jsx)("p",{className:"mb-3",style:{color:"#fff"},children:"2024. All Rights Reserved."}),(0,r.jsxs)("a",{href:"https://twitter.com/TokenBlack80107",target:"_blank",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-x-twitter",children:[(0,r.jsx)("i",{className:"fa-brands fa-x-twitter"}),(0,r.jsx)("i",{className:"fa-brands fa-x-twitter"})]}),(0,r.jsxs)("a",{href:"https://www.instagram.com/BlackChaintoken",target:"_blank",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-instagram",children:[(0,r.jsx)("i",{className:"bi-instagram"}),(0,r.jsx)("i",{className:"bi-instagram"})]}),(0,r.jsxs)("a",{href:"mailto:info@BlackChain-token.io",className:"social-icon inline-block si-small border-0 text-white-50 rounded-circle h-bg-google",children:[(0,r.jsx)("i",{className:"bi-envelope"}),(0,r.jsx)("i",{className:"bi-envelope"})]})]})})})})]}),(0,r.jsx)("div",{id:"gotoTop",className:"icon-angle-up bgcolor"})," ",(0,r.jsx)("script",{src:"js/jquery.js"}),(0,r.jsx)("script",{src:"js/plugins.js"}),(0,r.jsx)("script",{src:"demos/writer/js/hover3d.js"}),(0,r.jsx)("script",{src:"demos/photographer/js/menu-easing.js"}),(0,r.jsx)("script",{src:"js/functions.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:'\n                  // Hover Script\n                  jQuery(".img-hover-wrap").hover3d({\n                    selector: ".img-hover-card",\n                    shine: false,\n                  });\n                '}}),(0,r.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n                  !SEMICOLON.Mobile.any() && skrollr.init({forceHeight: false});\n                "}}),(0,r.jsx)("script",{src:"js/jquery.hotspot.js"}),(0,r.jsx)("script",{src:"js/components/rangeslider.min.js"}),(0,r.jsx)("script",{src:"js/plugins.min.js"}),(0,r.jsx)("script",{src:"js/chart.js"}),(0,r.jsx)("script",{src:"js/chart-utils.js"}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:"jQuery(document).ready(function() {\n                  document.addEventListener(\"DOMContentLoaded\", function() {\n                  var config = {\n                    type: 'doughnut',\n                    data: {\n                      datasets: [\n                        {\n                          data: [20, 55, 10, 15],\n                          backgroundColor: [\n                            window.chartColors.red,\n                            window.chartColors.yellow,\n                            window.chartColors.green,\n                            window.chartColors.blue,\n                          ],\n                          label: 'Dataset 1',\n                        },\n                      ],\n                      labels: ['Airdrops', 'Verkauf', 'Stakingrewards', 'Team'],\n                    },\n                    options: {\n                      responsive: true,\n                      legend: {\n                        position: 'top',\n                      },\n                      title: {\n                        display: true,\n                        text: '',\n                      },\n                      animation: {\n                        animateScale: true,\n                        animateRotate: true,\n                      },\n                    },\n                  };\n\n                  window.onload = function () {\n                    var ctx = document.getElementById('chart-0').getContext('2d');\n                    window.myDoughnut = new Chart(ctx, config);\n                  };\n\n                  document\n                    .getElementById('randomizeData')\n                    .addEventListener('click', function () {\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data = dataset.data.map(function () {\n                          return randomScalingFactor();\n                        });\n                      });\n\n                      window.myDoughnut.update();\n                    });\n\n                  var colorNames = Object.keys(window.chartColors);\n                  document\n                    .getElementById('addDataset')\n                    .addEventListener('click', function () {\n                      var newDataset = {\n                        backgroundColor: [],\n                        data: [],\n                        label: 'New dataset ' + config.data.datasets.length,\n                      };\n\n                      for (var index = 0; index < config.data.labels.length; ++index) {\n                        newDataset.data.push(randomScalingFactor());\n\n                        var colorName = colorNames[index % colorNames.length];\n                        var newColor = window.chartColors[colorName];\n                        newDataset.backgroundColor.push(newColor);\n                      }\n\n                      config.data.datasets.push(newDataset);\n                      window.myDoughnut.update();\n                    });\n\n                  document.getElementById('addData').addEventListener('click', function () {\n                    if (config.data.datasets.length > 0) {\n                      config.data.labels.push('data #' + config.data.labels.length);\n\n                      var colorName =\n                        colorNames[config.data.datasets[0].data.length % colorNames.length];\n                      var newColor = window.chartColors[colorName];\n\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data.push(randomScalingFactor());\n                        dataset.backgroundColor.push(newColor);\n                      });\n\n                      window.myDoughnut.update();\n                    }\n                  });\n\n                  document\n                    .getElementById('removeDataset')\n                    .addEventListener('click', function () {\n                      config.data.datasets.splice(0, 1);\n                      window.myDoughnut.update();\n                    });\n\n                  document\n                    .getElementById('removeData')\n                    .addEventListener('click', function () {\n                      config.data.labels.splice(-1, 1); // remove the label first\n\n                      config.data.datasets.forEach(function (dataset) {\n                        dataset.data.pop();\n                        dataset.backgroundColor.pop();\n                      });\n\n                      window.myDoughnut.update();\n                    });\n                  })\n                })\n                "}})]})}let R=(0,d.createContext)({});var U=a(5442),M=a(3870),z=a(660),Z=a(5538),_=a(3494),V=a(9062);a(5438);let O=e=>{let{children:t}=e,{autoConnect:a}=(0,d.useContext)(R),n=U.Q.Devnet,s=(0,d.useMemo)(()=>o.clusterApiUrl(n),[n]),m=(0,d.useMemo)(()=>[new Z.O,new _.e,new V.H,new M.U],[n]);return(0,d.useCallback)(async e=>{if(!("signIn"in e))return!0;let t={domain:window.location.host,address:e.publicKey?e.publicKey.toBase58():void 0,statement:"Please sign in."},a=await e.signIn(t);if(!(0,z.HS)(t,a))throw Error("Sign In verification failed!");return!1},[]),(0,r.jsx)(l.U,{endpoint:s,children:(0,r.jsx)(i.n,{wallets:m,autoConnect:!0,children:(0,r.jsx)(c.s,{children:t})})})};function H(){return(0,r.jsx)(O,{children:(0,r.jsx)(W,{})})}}},function(e){e.O(0,[818,46,97,929,429,164,814,761,125,335,580,384,995,783,971,23,744],function(){return e(e.s=9384)}),_N_E=e.O()}]);