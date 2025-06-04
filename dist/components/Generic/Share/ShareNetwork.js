import{FaFacebookF as e,FaLinkedinIn as t,FaXTwitter as r,FaWhatsapp as o}from"react-icons/fa6";import{generateQueryString as s}from"../../../services/UrlService.js";export class ShareNetwork{constructor(e,t,r,o){this.name=e,this.icon=t,this.className=r,this.url=o}}export const networks={x:new ShareNetwork("X",r,"bg-neutral-950",({title:e,url:t})=>`https://x.com/intent/tweet${s({text:`${e}

`,url:t})}`),facebook:new ShareNetwork("Facebook",e,"bg-[#1374C8]",({url:e})=>`https://www.facebook.com/sharer/sharer.php${s({u:e})}`),linkedin:new ShareNetwork("LinkedIn",t,"bg-[#3F95E0]",({url:e})=>`https://www.linkedin.com/sharing/share-offsite${s({url:e})}`),whatsapp:new ShareNetwork("WhatsApp",o,"bg-[#00C04F]",({title:e,url:t})=>`https://api.whatsapp.com/send${s({text:""===e?t:`${e}

${t}`})}`)};