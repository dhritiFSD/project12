let clock=document.querySelector<HTMLParagraphElement>("#clock")
setInterval(()=>{
    const now=new Date();
    clock.textContent=now.toLocaleTimeString();
},1000);