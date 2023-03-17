(function ($) {
    $.fn.raiseToast = function (options) {
        var settings = $.extend(
            {
                color: "#000",
                background: "#fff",
                position: "top-center",
                closeIcon: true,
                checkout: true,
                timed: true,
                timer: "5000",
            },
            options
        );

        this.parent().addClass("added_to_cart_notice");
        this.addClass("cog-toast");
        this.css("background", settings.background);
        this.css("color", settings.color);
        this.slideDown("slow");
        this.find("a").css("color", settings.background);
        this.find("a").css("background", settings.color);

        let time = settings.timer;
        let timed = settings.timed;

        let position = settings.position;
        switch (position) {
            case "top-center":
                this.addClass("top-center");

                break;
            case "top-right":
                this.addClass("top-right");

                break;
            case "top-left":
                this.addClass("top-left");

                break;
            case "bottom-left":
                this.addClass("bottom-left");

                break;
            case "bottom-center":
                this.addClass("bottom-center");

                break;
            case "bottom-right":
                this.addClass("bottom-right");
                break;
        }

        if (timed) {
            setTimeout(() => {
                this.slideUp("slow");
            }, time);
        }
        return this;
    };

    $(".cog__woo_toast").raiseToast({
        background: "#222222",
        color: "#fff",
        position: "bottom-right",
        timed: false,
    });
})(jQuery);
