"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{9708:function(e,t,r){r.r(t);var s=r(7437),n=r(4044),a=r(4309);t.default=()=>(0,s.jsxs)(n.E.div,{className:"mt-[70px]",children:[(0,s.jsx)("h1",{children:"Pictures"}),(0,s.jsx)("p",{children:"\uD83D\uDEA7 UNDER CONSTRUCTION \uD83D\uDEA7"}),(0,s.jsx)(a.Z,{filterType:"image",activeSection:"pictures"})]})},4309:function(e,t,r){r.d(t,{Z:function(){return u}});var s=r(7437),n=r(1396),a=r.n(n),l=r(5002),i=r(2265);function c(){let[e,t]=(0,i.useState)(!1),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=e=>{var s;(null===(s=r.current)||void 0===s?void 0:s.contains(e.target))||(t(!1),console.log(r.current))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),(0,s.jsxs)("div",{ref:r,children:[(0,s.jsx)("button",{onClick:()=>{t(!e)},className:"p-[5px] rounded-full hover:bg-gray-700/40 cursor-pointer group transition ease-in-out",children:(0,s.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 128 128",fill:"#6B7280",xmlns:"http://www.w3.org/2000/svg",className:"group-hover:fill-white",children:(0,s.jsx)("path",{d:"M63.9999 21.3333C62.5854 21.3333 61.2289 21.8952 60.2287 22.8953C59.2285 23.8955 58.6666 25.2521 58.6666 26.6666C58.6666 28.0811 59.2285 29.4376 60.2287 30.4378C61.2289 31.438 62.5854 31.9999 63.9999 31.9999C65.4144 31.9999 66.771 31.438 67.7712 30.4378C68.7713 29.4376 69.3333 28.0811 69.3333 26.6666C69.3333 25.2521 68.7713 23.8955 67.7712 22.8954C66.771 21.8952 65.4144 21.3333 63.9999 21.3333ZM63.9999 58.6666C62.5854 58.6666 61.2289 59.2285 60.2287 60.2287C59.2285 61.2289 58.6666 62.5854 58.6666 63.9999C58.6666 65.4144 59.2285 66.771 60.2287 67.7712C61.2289 68.7713 62.5854 69.3333 63.9999 69.3333C65.4144 69.3333 66.771 68.7713 67.7712 67.7712C68.7713 66.771 69.3333 65.4144 69.3333 63.9999C69.3333 62.5854 68.7713 61.2289 67.7712 60.2287C66.771 59.2285 65.4144 58.6666 63.9999 58.6666ZM63.9999 95.9999C62.5854 95.9999 61.2289 96.5618 60.2287 97.562C59.2285 98.5622 58.6666 99.9188 58.6666 101.333C58.6666 102.748 59.2285 104.104 60.2287 105.104C61.2289 106.105 62.5854 106.667 63.9999 106.667C65.4144 106.667 66.771 106.105 67.7712 105.104C68.7713 104.104 69.3332 102.748 69.3332 101.333C69.3332 99.9188 68.7713 98.5622 67.7712 97.562C66.771 96.5618 65.4144 95.9999 63.9999 95.9999Z",stroke:"#6B7280",strokeWidth:15,strokeLinecap:"round",strokeLinejoin:"round",className:"group-hover:stroke-white transition ease-in-out"})})}),(0,s.jsx)("div",{className:"absolute z-20 mt-[10px] rounded-[10px] w-[200px] bg-black border border-darkPurple hover:border-selectedPurple transition ease-in-out duration-200 ".concat(e?"block":"hidden"),children:(0,s.jsx)(o,{})})]})}function o(){return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)(a(),{href:"#",className:"px-[20px] py-[10px] rounded-t-[9px] hover:bg-hoverGray transition ease-in-out duration-200",children:"View post"}),(0,s.jsx)(a(),{href:"#",className:"px-[20px] py-[10px] rounded-b-[9px] hover:bg-hoverGray transition ease-in-out duration-200",children:"Visit profile"})]})}var d=function(e){let t=/(#\w+)/g,r=e.split(/(\s+)/).flatMap(e=>e.split(t));return(0,s.jsx)(i.Fragment,{children:r.map((e,t)=>e.startsWith("#")?(0,s.jsx)("span",{className:"text-blue-500 font-bold",children:e},t):(0,s.jsx)("span",{children:e},t))})};let p=e=>{let{filterType:t,activeSection:r}=e,{events:n}=(0,l.sE)({filter:{authors:["9c9f81ed795f0f5efa558932824687d84fc7e6a4cfa6db5d6d3b50fcb7ffaec2"],since:0,kinds:[1]}}),{data:i}=(0,l.Un)({pubkey:"9c9f81ed795f0f5efa558932824687d84fc7e6a4cfa6db5d6d3b50fcb7ffaec2"}),o=e=>e.replace(/https:\/\/.*\.(jpg|png|mp4|avi)/gi,"");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex flex-col gap-[20px] items-center",children:n.filter(e=>{let r=/https:\/\/.*\.(jpg|png)/.test(e.content),s=/https:\/\/.*\.(mp4|avi|mov)/.test(e.content),n=/#article/i.test(e.content);return"articles"==t&&!!n||"image"===t&&!!r||"video"===t&&!!s||"text"===t&&!r&&!s||"all"===t}).slice(0,5).map(e=>{var t,r,n,l,p,u,x,h;return(0,s.jsx)("p",{children:(0,s.jsxs)("div",{className:"flex flex-col gap-[10px] w-[600px] border border-gray-900 hover:border-gray-800 transition duration-200 bg-black p-[15px] rounded-[15px]",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)(a(),{href:"https://primal.net/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz",className:"flex gap-[10px] group",children:[(0,s.jsx)("img",{src:null==i?void 0:i.picture,alt:"Frederik Diamond",width:40,height:40,className:"rounded-full h-[40px] w-[40px] object-cover"}),(0,s.jsxs)("div",{className:"flex flex-col gap-[1px]",children:[(0,s.jsx)("p",{className:"font-bold text-[13px] group-hover:text-blue-500",children:null==i?void 0:i.display_name}),(0,s.jsxs)("p",{className:"text-[13px] text-gray-500",children:["@",null==i?void 0:i.name]})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-[15px]",children:[(0,s.jsx)("p",{className:"text-[15px] text-right text-textGray",children:(r=(t=new Date(1e3*e.created_at)).getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),l=("0"+t.getDate()).slice(-2),u=p=t.getHours(),x=("0"+t.getMinutes()).slice(-2),h="AM",p>12?(u=p-12,h="PM"):12===p?(u=12,h="PM"):0==p&&(u=12),l+"-"+n+"-"+r+", "+u+":"+x+" "+h)}),(0,s.jsx)(c,{})]})]}),(0,s.jsx)("p",{className:"text-[15px] leading-normal overflow-x-hidden",children:d(o(e.content))}),(()=>{let t=e.content.match(/https:\/\/.*\.(jpg|png)/);return t?(0,s.jsx)("img",{src:t[0],alt:"This is an image uploaded by FREDERIK DIAMOND's profile.",className:"rounded-[10px]"}):null})(),(()=>{let t=e.content.match(/https:\/\/.*\.(mp4|avi|mov)/);return t?(0,s.jsx)("video",{src:t[0],className:"rounded-[10px]",width:"100%",controls:!0,autoPlay:!0,muted:!0}):null})()]})},e.id)})})})};var u=e=>{let{filterType:t,activeSection:r}=e;return(0,s.jsx)(l.gF,{relayUrls:["wss://relay.primal.net","wss://relay.damus.io"],debug:!0,children:(0,s.jsx)(p,{filterType:t,activeSection:r})})}}}]);