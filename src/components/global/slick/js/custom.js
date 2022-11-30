$(document).ready(function () {
    $(".statistics__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
