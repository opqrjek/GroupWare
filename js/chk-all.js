$(function () {
    $("#chk-parent").click(function () {
        if ($("input:checkbox[id='chk-parent']").prop("checked")) {
            $(".chk-child").prop("checked", true)
        } else {
            $(".chk-child").prop("checked", false)
        }
    });
});