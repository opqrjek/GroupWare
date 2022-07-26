/* 부모 체크박스 클릭 시 모든 자식 체크박스가 눌리는 기능입니다. */

$(function () {
    $("#chk-parent").click(function () {
        if ($("input:checkbox[id='chk-parent']").prop("checked")) {
            $(".chk-child").prop("checked", true)
        } else {
            $(".chk-child").prop("checked", false)
        }
    });
});