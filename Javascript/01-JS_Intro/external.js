// event binding
// window.addEventListener("load", function() {
//     document.getElementById("btn").addEventListener("click", show);
// });

window.addEventListener("load", initEvent);

function initEvent() {
    document.getElementById("btn").addEventListener("click", show);
}

function show() {
    console.log("Show Called...");
    var box = document.getElementById("box_1");
    var username = box.value;
    // document.getElementById("output").innerHTML += username;
    document.getElementById("output").innerHTML = username;
}