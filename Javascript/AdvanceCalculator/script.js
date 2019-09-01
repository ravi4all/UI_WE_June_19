window.addEventListener("load", initEvent);

var box;

function initEvent() {
    box = document.querySelector("#box");
    var num = document.querySelectorAll(".num");
    var opr = document.querySelectorAll(".opr");

    for (var i = 0; i < num.length; i++) {
        num[i].addEventListener("click", operands);
    }

    for (var i = 0; i < opr.length; i++) {
        opr[i].addEventListener("click", operators);
    }

    document.querySelector("#result").addEventListener("click", calc);

}

function operands() {
    var num = event.srcElement.innerHTML;
    box.value += num;
}

function operators() {
    var opr = event.srcElement.innerHTML;
    box.value += opr;
}

function calc() {
    var expression = box.value;
    var result = eval(expression);
    box.value = result;
}