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
var form = document.querySelector('#form');
var uname = document.querySelector("#uname");
var email = document.querySelector("#email");
var psw = document.querySelector("#password");
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var pswRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!emailRegex.test((email === null || email === void 0 ? void 0 : email.value) || "")) {
        alert("Please enter a valid email");
        return;
    }
    console.log("line 11");
    if (!pswRegex.test((psw === null || psw === void 0 ? void 0 : psw.value) || "")) {
        alert("Password must contain 8 characters, uppercase, lowercase and number");
        return;
    }
    console.log(uname === null || uname === void 0 ? void 0 : uname.value, email === null || email === void 0 ? void 0 : email.value, psw === null || psw === void 0 ? void 0 : psw.value);
    alert("Form submitted successfully");
});
