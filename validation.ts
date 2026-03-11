// let form=document.querySelector('#form') as HTMLFormElement;
// form.addEventListener('submit',(event:Event)=>{event.preventDefault();}) 
// let  uname=document.querySelector<HTMLInputElement>("#uname");
// let  email=document.querySelector<HTMLInputElement>("#email");
// let  psw=document.querySelector<HTMLInputElement>("#password");
// const emailRegex:RegExp=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const pswRegex:RegExp= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// if(!emailRegex.test(email?.value||"")){
//     alert("Please enter email");
//     return;
// }
// console.log("line 11")
// if(!pswRegex.test(psw?.value||"")){
//     console.log(psw?.value);
//    return;
// }
// console.log(uname?.value,email?.value,psw?.value);
// alert("form submitted");
// });
let form = document.querySelector('#form') as HTMLFormElement;

let uname = document.querySelector<HTMLInputElement>("#uname");
let email = document.querySelector<HTMLInputElement>("#email");
let psw = document.querySelector<HTMLInputElement>("#password");

const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const pswRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    if (!emailRegex.test(email?.value || "")) {
        alert("Please enter a valid email");
        return;
    }

    console.log("line 11");

    if (!pswRegex.test(psw?.value || "")) {
        alert("Password must contain 8 characters, uppercase, lowercase and number");
        return;
    }

    console.log(uname?.value, email?.value, psw?.value);
    alert("Form submitted successfully");
});