$(document).ready(function(){
    $(".smallMenu").click(function () {
        f();
    });
    if ($(".smallMenuClick")){
        $(".menu__link").click(function () {
            f();
        })
    }
    function f() {
        $(".smallMenu").toggleClass("smallMenuClick");
        $(".menu").toggle();
        $("body").toggleClass("overflowHidden");
    }
});