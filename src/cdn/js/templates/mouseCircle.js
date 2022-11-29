//creates a element with  class "mouse-follow-circle" to create a follower.
function mouse_follower() {
    $("html").prepend('<div class="mouse-follow-circle"></div>');
    $(document).on("click mousemove", "body", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x;
        var newposY = y;
        $(".mouse-follow-circle").css(
            "transform",
            "translate3d(" + newposX + "px," + newposY + "px,0px)"
        );
    });
}
