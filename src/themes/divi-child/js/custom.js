console.log(`
  ___  _____  ___    ____  ____    __    _  _  ____  ____  _  _  ___
 / __)(  _  )/ __)  (  _ \(  _ \  /__\  ( \( )(  _ \(_  _)( \( )/ __)
( (__  )(_)(( (_-.   ) _ < )   / /(__)\  )  (  )(_) )_)(_  )  (( (_-.
 \___)(_____)\___/  (____/(_)\_)(__)(__)(_)\_)(____/(____)(_)\_)\___/
 
                Designed & Developed by COG Branding
                    https://cogbranding.com.au`);

//repeat following code if multiple files needs to be called
// add the script location in the getScript("") function
$.getScript(
    "https://cogbranding.github.io/COGbrandingCDN.github.io/",
    function () {
        //call all the function required from that script in required order
        currentYear();
    }
);

// Uncomment the below to use with Slick, feel free to delete if your site is not using Slick!
// $(document).ready(function () {
//     $(".statistics__slider").slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: false,
//         dots: false,
//         responsive: [
//             {
//                 breakpoint: 767,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 479,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     });
// });
