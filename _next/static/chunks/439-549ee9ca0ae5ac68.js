(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439],{1439:function(e,t,s){"use strict";s.d(t,{Z:function(){return j}});var a=s(7437),i=s(1396),l=s.n(i),r=s(6691),n=s.n(r),o={src:"/_next/static/media/x-logo.03ba81d9.svg",height:1227,width:1200,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/nostr.be08eaea.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42i2Nu0oDURgGf9BOsDHxAmIhVlqJiCAKPoBgp2/iK1hrYWMjysZz1t3gpU2lENIJWlkI7ovMiLspvmY+mInco0k9zH3Ii5jmsN6Hch3TPE205xL+g3IT8xqOr/BxG9MMRl6GFHg33U3g6BxfTnEQEA+B9SG+XeBHgT/v+D3CahdTYKRZrHbwa4ja7XeCt4HlFka5AfeB9UFn+Kzx9azr55VpYniEk2ssAp+OcXyJzyc4aBNBU+21BnK/g0VAXsW0QPMHM4O6QKBEDoIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},c={src:"/_next/static/media/instagram.e5e66b25.svg",height:512,width:512,blurWidth:0,blurHeight:0},p={src:"/_next/static/media/noise.a3b17585.svg",height:871,width:1727,blurWidth:0,blurHeight:0},x=s(2265);s(8380);class h extends x.Component{render(){let e="057b8b7fbaf04db052c1fc0ec264381f660378821119e92dcc1ee475299e43f26b!";return(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>this.copyToClipboard(e),className:"font-semibold text-white transition-all hover:text-blue-500 hover:underline",children:e})})}constructor(...e){super(...e),this.copyToClipboard=async e=>{try{await navigator.clipboard.writeText(e),console.log("Text copied to clipboard:",e)}catch(e){console.error("Error copying to clipboard:",e)}}}}function m(){return(0,a.jsx)("div",{className:"px-[20px] py-[10px] rounded-full bg-blue-500 shadow-[0_10px_40px_15px_rgba(59,130,246,0.4)]",children:(0,a.jsx)("p",{className:"text-white text-[20px] font-bold",children:"Copied to clipboard"})})}var u=e=>{let{mailto:t,label:s}=e;return(0,a.jsx)(l(),{href:"#",className:"font-semibold transition-all hover:text-blue-500 hover:underline",onClick:e=>{window.location.href=t,e.preventDefault()},children:s})},b={src:"/_next/static/media/protonmail.66a66030.svg",height:745,width:918,blurWidth:0,blurHeight:0},g={src:"/_next/static/media/session.6b243aa2.svg",height:40,width:40,blurWidth:0,blurHeight:0},f={src:"/_next/static/media/simplex.d6818186.svg",height:402,width:402,blurWidth:0,blurHeight:0};class v extends x.Component{componentDidUpdate(e,t){if(this.state.openCopiedToClipboard&&!t.openCopiedToClipboard){let e=setTimeout(()=>{this.setState({openCopiedToClipboard:!1})},5e3);return()=>{clearTimeout(e)}}}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"w-[500px]",children:(0,a.jsxs)("form",{action:"mailto:unknownuser0709@protonmail.com",method:"post",className:"flex flex-col items-center gap-[20px] w-full",children:[(0,a.jsxs)("div",{className:"floating-input relative w-full",children:[(0,a.jsx)("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange,className:"h-16 w-[500px] rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out",placeholder:"name@example.com",autoComplete:"off"}),(0,a.jsx)("label",{htmlFor:"email",className:"text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out",children:"Email (required)"})]}),(0,a.jsxs)("div",{className:"floating-input relative w-full",children:[(0,a.jsx)("input",{type:"subject",id:"subject",name:"",onChange:this.handleChange,className:"h-16 w-[500px] rounded-[15px] bg-transparent px-[20px] py-5 outline-none border-2 border-gray-800 hover:border-[#418DFF] focus:border-[#418DFF] transition-all duration-300 ease-in-out",placeholder:"name@example.com",autoComplete:"off"}),(0,a.jsx)("label",{htmlFor:"email",className:"text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out",children:"Subject"})]}),(0,a.jsxs)("div",{className:"floating-input relative w-full",children:[(0,a.jsx)("textarea",{name:"message",placeholder:"Message",className:"border-2 border-gray-800 hover:border-blue-500 focus:border-blue-500 min-h-[200px] bg-transparent outline-none px-[20px] py-5 rounded-xl w-full transition ease-in-out",value:this.state.message,onChange:this.handleChange,required:!0}),(0,a.jsx)("label",{htmlFor:"message",className:"text-gray-400 pointer-events-none absolute top-0 left-0 h-full origin-left transform px-[25px] py-5 transition-all duration-150 ease-in-out",children:"Message (required)"})]}),(0,a.jsx)("input",{type:"submit",className:"bg-blue-500 font-semibold text-[15px] px-[20px] py-[12px] rounded-md cursor-pointer mt-[10px] relative bottom-0 hover:drop-shadow-[0_10px_30px_rgba(59,130,246,0.75)] hover:bottom-[5px] transition-all ease-in-out disabled:cursor-not-allowed disabled:bg-[#418DFF]/20 disabled:shadow-none disabled:bottom-0",value:"SEND",disabled:!this.state.email||!this.state.message})]})}),(0,a.jsxs)("div",{className:"flex flex-col xl:flex-row gap-[20px] mt-[100px]",children:[(0,a.jsxs)("div",{className:"w-[350px] h-[100px] truncate flex items-center gap-[15px] px-[20px] py-[10px] rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200",children:[(0,a.jsx)("div",{className:"h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center",children:(0,a.jsx)(n(),{src:b,alt:"Email",className:"h-[20px]"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-white/40",children:"Email address"}),(0,a.jsx)(u,{label:"unknownuser0709@proton.me",mailto:"mailto:unknownuser0709@proton.me"})]})]}),(0,a.jsx)("div",{className:"w-[350px] h-[100px] flex items-center rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200",children:(0,a.jsxs)("div",{className:"flex gap-[15px] items-center mx-[20px] my-[10px] text-ellipsis overflow-hidden whitespace-nowrap",children:[(0,a.jsx)(n(),{src:g,alt:"Session Messenger",className:"h-[50px] w-[50px]"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-white/40",children:"Session"}),(0,a.jsx)("button",{onClick:this.handleContactButton,children:(0,a.jsx)(h,{})})]})]})}),(0,a.jsxs)("div",{className:"w-[350px] h-[100px] text-ellipsis flex items-center gap-[15px] px-[20px] py-[10px] rounded-[10px] hover:bg-white hover:bg-opacity-10 transition duration-200",children:[(0,a.jsx)("div",{className:"h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center",children:(0,a.jsx)(n(),{src:f,alt:"SimpleX Chat",className:"h-[50px] w-[50px]"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-white/40",children:"SimpleX"}),(0,a.jsx)(l(),{href:"https://simplex.chat/contact#/?v=1-2&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FT8hXg42LKJ0NS6irlr2dAZrGmFdcEkx-%23%2F%3Fv%3D1-2%26dh%3DMCowBQYDK2VuAyEAYbBGwUuV1VtUgRLXLrV0BZje8GW7zD8YK8Lm-XpNWwA%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion",target:"_blank",className:"font-semibold transition-all hover:text-blue-500 hover:underline",children:"Link to QR-code"})]})]})]}),(0,a.jsx)("div",{className:"fixed top-[110px] z-50 w-flex flex items-center transition ease-in-out duration-200 slide-in-out\n          ".concat(this.state.openCopiedToClipboard?"activeContactPopup":"inactiveContactPopup"),children:this.state.openCopiedToClipboard&&(0,a.jsx)(m,{})})]})}constructor(...e){super(...e),this.state={email:"",message:"",openCopiedToClipboard:!1},this.handleChange=e=>{let t=e.target,{name:s,value:a}=t;this.setState(e=>({...e,[s]:a}))},this.handleContactButton=()=>{this.setState(e=>({openCopiedToClipboard:!e.openCopiedToClipboard}))}}}s(5257);var j=e=>{let{contactVisibility:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{id:"contact",className:"relative",children:[(0,a.jsxs)("div",{className:"relative z-10 h-full flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center mt-[100px]",children:[(0,a.jsxs)("div",{className:t?"flex flex-col items-center":"hidden",children:[(0,a.jsx)("h1",{className:"text-[50px] font-bold mb-[50px]",children:"CONTACT"}),(0,a.jsx)(v,{})]}),(0,a.jsxs)("div",{className:"flex gap-[40px] mt-[100px]",children:[(0,a.jsx)(l(),{href:"https://x.com/frederikdiamond",target:"_blank",className:"rounded-full flex items-center justify-center hover:scale-150 transition-all duration-200 ease-in-out h-[60px] w-[60px]",children:(0,a.jsx)(n(),{src:o,alt:"Twitter",className:"h-[40px] w-[40px]"})}),(0,a.jsx)(l(),{href:"https://primal.net/p/npub1nj0crmtetu84a7j43yegy358mp8u0e4ye7ndkhtd8dg0edll4mpqn52gqz",target:"_blank",className:"rounded-full h-[60px] w-[60px]",children:(0,a.jsx)(n(),{src:d,alt:"Nostr",className:"rounded-full hover:scale-150 transition-all duration-200 ease-in-out"})}),(0,a.jsx)(l(),{href:"https://www.instagram.com/frederik_diamond/",target:"_blank",className:"rounded-full h-[60px] w-[60px]",children:(0,a.jsx)(n(),{src:c,alt:"Instagram",className:"rounded-full hover:scale-150 transition-all duration-200 ease-in-out"})})]}),(0,a.jsxs)("p",{className:"mt-[60px] text-center text-white/30",children:["This website is open-source.",(0,a.jsx)("br",{}),"Check the code here:"]}),(0,a.jsxs)(l(),{href:"https://github.com/frederikdiamond/frederikdiamond-personal_website",target:"_blank",className:"flex items-center gap-[5px] mt-[15px] px-[10px] py-[10px] border-solid border-white border-[3px] rounded-lg font-medium text-[17px] group hover:bg-white hover:drop-shadow-[0_5px_40px_rgba(255,255,255,0.35)] transition-all ease-in-out",children:[(0,a.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"h-[40px] fill-white group-hover:fill-black",children:(0,a.jsx)("path",{d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"})}),(0,a.jsx)("p",{className:"text-[20px] font-medium group-hover:text-black",children:"GitHub"})]})]}),(0,a.jsxs)("p",{className:"text-[15px] mt-[50px] mb-[20px]",children:["MADE WITH ❤️ BY"," ",(0,a.jsx)("span",{className:"font-semibold",children:"FREDERIK DIAMOND"})]})]}),(0,a.jsxs)("div",{className:"min-[1720px]:hidden",children:[(0,a.jsx)("div",{className:"footer-gradient"}),(0,a.jsx)(n(),{src:p,className:"absolute z-[-19] bottom-0 w-full h-full object-cover bg-no-repeat",alt:"Decoration"})]})]})})}},8380:function(){},5257:function(){}}]);