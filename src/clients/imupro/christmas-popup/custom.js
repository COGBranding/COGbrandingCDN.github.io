//christmas and new year popup 

//only fire this code if the page is "Home", "Products", or Landing Pages
if(($('.page-id-16').length || $('.page-id-7312').length || $('.page-id-67').length || $('.page-id-18'))){
        
    //create christmas popup
    var christmasModal = '<div id="offerModal" class="modal"> <div class="modal-content"><span class="close">×</span> <div class="popup-content"> <img src="https://imupro.com.au/wp-content/uploads/2022/11/imupro-popup-img-400x400-1.jpg"> <div class="popup-content__div"> <p class="heading">PRE-ORDER!</p><p class="popup-content__text"> Be the first in line for our new year offer</p><div class="button-wrapper"> <span class="button-wrapper__heading">Get $50 - 100 off</span> <p>on selected tests</p><a class="btn btn--primary" href="/our-products">GET OFFER</a> </div></div></div></div></div>'

    //create new year popup
    var newyearModal = '<div id="offerModal" class="modal"> <div class="modal-content"><span class="close">×</span> <div class="popup-content"> <img src="https://imupro.com.au/wp-content/uploads/2022/11/imupro-popup-img-400x400-1.jpg"> <div class="popup-content__div"> <div class="button-wrapper"> <p class="heading">PRE-ORDER!</p><span class="button-wrapper__heading">Get $50 - 100 off</span> <p>on selected tests</p><a class="btn btn--primary" href="/our-products">GET OFFER</a> </div></div></div></div></div>';
    
    //create styles 
    var styles= '<style>div#offerModal{background-color: rgba(0, 0, 0, 0.1); border-radius: unset !important; overflow: hidden; z-index: 9999999999;}span.close{color: #DA1414; font-size: 32px; font-weight: 900; position: relative; top: 10px; padding: 0px 20px; z-index: 9999;}.modal .popup-content img{height: auto; width: 350px; object-fit: fill; max-width:50%; margin-top: -24px; border-radius: 20px 0 0 20px;}#offerModal .popup-content p.heading{font-family: "Helvetica-Neue" !important; font-size: 24px !important; color: #BCCF00 !important; font-weight: 700 !important; line-height: 160% !important; letter-spacing: -0.01em; padding-bottom: 10px !important;}p.popup-content__text{font-family: "Helvetica-Neue"; font-weight: 700; font-size: 22px; line-height: 130%; color: #30565F; padding-bottom: 40px !important; max-width: 330px; margin: auto;}.popup-content{background: #fff; display: flex; flex-direction: row; width: 100%; gap: 20px; border-radius: 20px;}@media(max-width: 767px){.popup-content{flex-direction: column; gap : unset;}.modal-content{margin-top: 30%; width: 100% !important; margin: 0; position: fixed; bottom: 0; border-radius: 20px 20px 0 0 !important;}.modal .popup-content img{max-width: 100%; border-radius: 20px 20px 0 0; height: 50vw; width: 100vw; object-fit: cover;}.popup-content__div{padding: 0 20px; text-align: center;}}#offerModal .modal-content{padding: 0px; border: unset; background-color: #ffffff; width: fit-content; height: auto; border-radius: 20px !important;}@media(max-width:767px){.popup-content__div{padding: 20px; max-width: 100% !important;}#offerModal a.btn.btn--primary{width: 100%;}}.popup-content__div{padding: 20px; max-width: 50%;}#offerModal a.btn.btn--secondary:hover{top: unset;}.button-wrapper{border: 2px dashed #30565F; border-radius: 28px; width: 100%; height: auto; text-align: center; display: flex; flex-direction: column; gap: 10px; padding: 30px 20px;}span.button-wrapper__heading{font-style: normal; font-weight: 700; font-size: 22px; line-height: 140%; /* identical to box height, or 31px */ text-align: center; letter-spacing: -0.02em; color: #30565F; font-family: "helvetica-neue";}#offerModal .button-wrapper p{font-size: 22px; color: #30565F; font-weight: 300; line-height: 140%; font-family: "Helvetica-Neue";}#offerModal a.btn.btn--primary:hover{top: 0;}.popup-content__div{padding-bottom: 24px;}</style>';

    //add in styles to popups
    christmasModal = christmasModal + styles;

    newyearModal = newyearModal + styles;

    //checks today's date
    var today = new Date();

    //christmas popup start and end date
    var christmas_start = new Date('12/25/2022');
    var christmas_end = new Date('12/26/2022');

    //new year popup start and end date
    var newyear_start = new Date('01/01/2023');
    var newyear_end = new Date('01/15/2023');

    //if clicked on close button, close popup
    jQuery('span.close').on('click', function () {
        jQuery('#offerModal').hide()
    });

    //display popup after 10seconds on the page
    if (today > christmas_start && today < christmas_end) {
        jQuery('body').append(christmasModal);
        setTimeout(() => {
            jQuery('#offerModal').show();
        }, 10000);
    }

    //display popup after 20seconds on the page
    if (today > newyear_start && today < newyear_end) {
        jQuery('body').append(newyearModal);
        setTimeout(() => {
            jQuery('#offerModal').show();
        }, 20000);
    }
}