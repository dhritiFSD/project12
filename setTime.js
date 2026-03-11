var clock = document.querySelector("#clock");
setInterval(function () {
    var now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000);
