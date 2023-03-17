(function ($) {
    $.fn.raiseToast = function (options) {
        var settings = $.extend(
            {
                color: "#000",
                background: "#fff",
                position: "top-center",
                closeIcon: true,
                checkout: true,
                checkoutTheme: "invert",
                timed: true,
                timer: "5000",
            },
            options
        );
        let time = settings.timer;
        let timed = settings.timed;
        let checkoutTheme = settings.checkoutTheme;
        let position = settings.position;
        let closeIcon = settings.closeIcon;

        this.parent().addClass("added_to_cart_notice");
        this.addClass("cog-toast");
        this.css("background", settings.background);
        this.css("color", settings.color);
        this.find("h2").css("color", settings.color);
        this.slideDown("slow");

        if (closeIcon) {
            this.find(".cog__woo_toast__close").css(
                "color",
                settings.background
            );
            this.find(".cog__woo_toast__close").css(
                "background",
                settings.color
            );
            this.find(".cog__woo_toast__close").css(
                "border-color",
                settings.background
            );
        }

        switch (checkoutTheme) {
            case "invert":
                this.find("a").addClass("inverted");
                this.find("a").css("background", settings.color);
                this.find("a").css("color", settings.background);
                break;
            case "inherit":
                this.find("a").addClass("inherited");
                this.find("a").css("color", settings.color);
                this.find("a").css("background", settings.background);
                break;
        }

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

        this.find("#close-popup").click(() => {
            this.slideUp("slow");
        });
        return this;
    };
})(jQuery);
