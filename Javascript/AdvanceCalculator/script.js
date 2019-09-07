window.addEventListener("load", initEvent);

var box;
var temp;
var oprList;

function initEvent() {
    box = document.querySelector("#box");
    var num = document.querySelectorAll(".num");
    oprList = document.querySelectorAll(".opr");

    for (var i = 0; i < num.length; i++) {
        num[i].addEventListener("click", operands);
    }

    for (var i = 0; i < oprList.length; i++) {
        oprList[i].addEventListener("click", operators);
    }

    document.querySelector("#result").addEventListener("click", calc);

}

function operands() {
    var num = event.srcElement.innerHTML;
    box.value += num;
    temp = box.value;
}

function operators() {
    var opr = event.srcElement.innerHTML;
    var lastChar = box.value.charAt(box.value.length - 1);
    for (var i = 0; i < oprList.length; i++) {
        console.log(lastChar);
        if (oprList[i].innerHTML == lastChar) {
            console.log("Value is", oprList[i].innerHTML);
            break
        }
    }
    box.value = temp + opr;
}

function calc() {
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}