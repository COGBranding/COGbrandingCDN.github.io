console.log("diviCart loaded and working");

// Prepend Account/ Cart Icon
let div = document.createElement("li");
div.classList.add("menu-item", "account-icon");
let accountIcon = '<a href="/my-account"></a>';
div.innerHTML = accountIcon;

//menuCart(980, 1, 67715231);
function menuCart(site_width = 980, loadPhone = "", phone_num = "") {
    // For tablets and smaller devices, add the account and cart icons
    if (window.innerWidth <= site_width) {
        $("#et_mobile_nav_menu").prepend($(".menu-cart-info").parent().html()) +
            $(".menu-cart-info").before(div);
    } else {
        // Add the account icon to the end of the desktop menu
        let lastMenuItem = document.getElementById("top-menu").lastChild;
        // lastMenuItem.classList.add("myAccount");
        lastMenuItem.before(div);
    }
    if (loadPhone) {
        menuPhone(phone_num);
    }
    $(".menu-cart-info").parent().addClass("cart-icon");
}

// // Load Cart Icon Only
function menuDiviCart() {
    $("#et_mobile_nav_menu").prepend($(".menu-cart-info").parent().html()) +
        $(".menu-cart-info").before(div);
    $(".menu-cart-info").parent().addClass("cart-icon");
}
