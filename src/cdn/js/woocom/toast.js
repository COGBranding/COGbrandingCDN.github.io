(function ($) {
    $.fn.raiseToast = function (options) {
        var settings = $.extend(
            {
                position: "top-center",
                closeIcon: true,
                checkout: true,
                checkoutTheme: "invert",
                timed: true,
                timer: "5000",
                theme: "dark",
            },
            options
        );
        let time = settings.timer;
        let timed = settings.timed;
        let checkoutTheme = settings.checkoutTheme;
        let position = settings.position;
        let theme = settings.theme;

        this.parent().addClass("added_to_cart_notice");
        this.slideDown("slow");

        if (theme == "dark") {
            this.addClass("cog-toast-dark");
        } else if (theme == "light") {
            this.addClass("cog-toast-light");
        }

        switch (checkoutTheme) {
            case "invert":
                this.find("a").addClass("inverted");
                break;
            case "inherit":
                this.find("a").addClass("inherited");
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
