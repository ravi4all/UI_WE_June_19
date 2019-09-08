window.addEventListener("load", initEvents);

var username;
var pwd;
var email;
var cpwd;

function initEvents() {
    username = document.querySelector("#box_1");
    email = document.querySelector("#box_2");
    pwd = document.querySelector("#box_3");
    cpwd = document.querySelector("#box_4");
    span = document.querySelectorAll("span");
    username.addEventListener("blur", blankCheck);
    email.addEventListener("keyup", validateEmail);
    pwd.addEventListener("keyup", validatePwd);
}

function blankCheck() {
    var str = username.value;
    if (str) {
        span[0].innerHTML = "";
    } else {
        span[0].innerHTML = "Please Fill this field";
    }
}

function validateEmail() {
    var str = email.value;
    var pattern = /([a-z|0-9]\w+[@]{1}\w+[.]{1}[a-z]{2,3})/;
    if (pattern.test(str)) {
        span[1].innerHTML = "Valid";
    } else {
        span[1].innerHTML = "InValid";
    }
}

function validatePwd() {
    var str = pwd.value;
    var pwdLen = str.length;
    var progress = document.querySelector("#progress");
    console.log(pwdLen);
    if (!pwdLen) {
        span[2].innerHTML = "Invalid Password";
        progress.className = "";
    } else if (pwdLen > 0 && pwdLen <= 5) {
        span[2].innerHTML = "Weak Password";
        progress.className = "weak";
    } else if (pwdLen > 5 && pwdLen <= 8) {
        span[2].innerHTML = "Average Password";
        progress.className = "avg";
    } else if (pwdLen > 8) {
        span[2].innerHTML = "Strong Password";
        progress.className = "strong";
    } else {
        span[2].innerHTML = "Please Enter Password";
        progress.className = "";
    }

}