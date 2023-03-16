(function ($) {
    $.fn.raiseToast = function (options) {
        var settings = $.extend(
            {
                // These are the defaults.
                color: "#556b2f",
                backgroundColor: "white",
                position: "center",
                closeIcon: true,
                timed: false,
                timer: "5000",
                showImage: false,
                class: "woo-toast-popup",
                action: "added_to_cart",
                title: "Added to cart",
            },
            options
        );

        var output = $(document.createElement("div"));
        output.addClass(settings.class);
        output.addClass("cog-toast");
        output.css("z-index", "99999");
        output.css("background", settings.backgroundColor);
        output.css("color", settings.color);
        output.css("position", "fixed");

        if (settings.position == "top-right") {
            output.css("top", "80px");
            output.css("right", "80px");
        } else if (settings.position == "top-left") {
            output.css("top", "80px");
            output.css("left", "80px");
        } else if (settings.position == "bottom-right") {
            output.css("bottom", "80px");
            output.css("right", "80px");
        } else if (settings.position == "bottom-left") {
            output.css("bottom", "80px");
            output.css("left", "80px");
        } else if (settings.position == "center") {
            output.css("top", "20%");
            output.css("left", "40%");
        } else {
            output.css("top", "50%");
            output.css("left", "50%");
        }

        if (settings.action == "added_to_cart") {
            $(document.body).on(
                "added_to_cart",
                function addedToCart(event, fragments, cart_hash, button) {
                    var parent = button.parent();
                    var title = parent
                        .find("h2.woocommerce-loop-product__title")
                        .text();
                    var price = parent.find(".price");
                    output.append(
                        `<div class="toast-title"><h2>${settings.title}</h2></div>`
                    );
                    if (settings.showImage == true) {
                        var image = parent
                            .find(".attachment-woocommerce_thumbnail")
                            .attr("src");
                        output.append(`<img src=${image}>`);
                    }
                    output.append(`<div class="price">${price.html()}</div>`);
                    output.append(`<div class="title">${title}</div>`);
                    output.append(
                        `<a href="/cart/" class="button wp-element-button add_to_cart_button ">Got to cart</a>`
                    );
                    // $("body").prepend(output);
                    output.hide().prependTo("body").fadeIn("slow");
                    output.show("slow");
                    if (settings.timed == true) {
                        setTimeout(function () {
                            // $(".cog-toast").remove();
                            // output.empty();
                            // console.log("time");
                        }, settings.timer);
                    }
                }
            );
        }
        if (settings.action == "removed_from_cart") {
            $(document.body).on(
                "removed_from_cart",
                function removed_from_cart(
                    event,
                    fragments,
                    cart_hash,
                    button
                ) {
                    $("body").prepend(output);
                    var parent = button.parent();
                    console.log("here");

                    if (settings.timed == true) {
                        setTimeout(function () {
                            $(".cog-toast").remove();
                            output.empty();
                            console.log("time");
                        }, settings.timer);
                    }
                }
            );
        }

        return output;
    };

    // $("body").raiseToast({
    //     color: "red",
    //     backgroundColor: "white",
    //     position: "center",
    //     closeIcon: true,
    //     timed: true,
    //     timer: "10000",
    //     showImage: true,
    //     class: "my-custom-class divbb",
    //     action: "added_to_cart",
    // });

    // $("body").raiseToast({
    //     color: "red",
    //     backgroundColor: "white",
    //     position: "center",
    //     closeIcon: true,
    //     timed: false,
    //     timer: "10000",
    //     showImage: true,
    //     class: "my-custom-class divdbb",
    //     action: "removed_from_cart",
    // });
})(jQuery);
