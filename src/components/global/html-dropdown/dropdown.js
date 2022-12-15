document.addEventListener("DOMContentLoaded", (event) => {
    $(".dropdown__field").each(function (index) {
        window.onclick = function (event) {
            console.log(event.target);
            if (!event.target.matches(".dropdown")) {
                if ($(".dropdown__items__list").hasClass("open")) {
                    $(".dropdown__items__list").removeClass("open");
                }
            }
        };
        $(this).on("click", function (event) {
            var hc = $(this)
                .parent()
                .find(".dropdown__items__list")
                .hasClass("open");
            console.log($(this).parent().find(".dropdown__items__list"));
            console.log(hc);
            $(".dropdown__items__list").removeClass("open");
            if (!hc) {
                $(this)
                    .parent()
                    .find(".dropdown__items__list")
                    .addClass("open");
            }
            event.stopPropagation();
        });
    });
});
