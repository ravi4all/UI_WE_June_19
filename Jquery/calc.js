$(document).ready(function() {
    $("button").click(function() {
        var f_num = parseInt($("#box_1").val());
        var s_num = parseInt($("#box_2").val());
        var opr = $(this).html();
        // console.log(this);
        var expression = f_num + opr + s_num;
        var result = eval(expression);
        $("#res").html(result);
    });
});