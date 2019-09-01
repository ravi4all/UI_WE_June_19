window.addEventListener("load", initEvent);
var f_num;
var s_num;

function initEvent() {
    f_num = document.getElementById("box_1");
    s_num = document.getElementById("box_2");

    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    var e = event.srcElement;
    var opr = e.innerHTML;
    // console.log(opr);
    var expression = f_num.value + opr + s_num.value;
    // console.log(expression);
    var result = eval(expression); // evaluate
    document.getElementById("result").innerHTML = result;
}