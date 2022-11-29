document.addEventListener("DOMContentLoaded", (event) => {
    // Pricing table
    let pricingToggle = document.getElementById("pricing__toggle");
    let standardPrice = document.getElementById("standard-price");
    let plusPrice = document.getElementById("plus-price");
    let proPrice = document.getElementById("pro-price");
    let enterprisePrice = document.getElementById("enterprise-price");

    function setupPriceLoop(price) {
        let setupPrice = document.getElementsByClassName("price-setup");
        for (let i = 0; i < setupPrice.length; i++) {
            setupPrice[i].innerHTML = price;
        }
    }

    standardPrice.innerHTML = "$99 ";
    plusPrice.innerHTML = "$199 ";
    proPrice.innerHTML = "$299 ";
    enterprisePrice.innerHTML = "$499";
    setupPriceLoop("$999 ");

    pricingToggle.addEventListener("click", (event) => {
        if (pricingToggle.checked == true) {
            standardPrice.innerHTML = "$199 ";
            plusPrice.innerHTML = "$299 ";
            proPrice.innerHTML = "$399 ";
            enterprisePrice.innerHTML = "$599";
            setupPriceLoop("$4995 ");
        } else {
            standardPrice.innerHTML = "$99 ";
            plusPrice.innerHTML = "$199 ";
            proPrice.innerHTML = "$299 ";
            enterprisePrice.innerHTML = "$499";
            setupPriceLoop("$999 ");
        }
    });

    let userRange = document.getElementById("pricing__range");

    userRange.addEventListener("change", (event) => {
        activePricingCard = document.getElementById("plan-" + userRange.value);
        let pricingCard = document.getElementsByClassName("pricing__card");
        for (let i = 0; i < pricingCard.length; i++) {
            pricingCard[i].classList.remove("active");
        }
        activePricingCard.classList.add("active");
    });
    activePricingCards = document.getElementById("plan-" + userRange.value);
    activePricingCards.classList.add("active");

    const rangeInputs = document.querySelectorAll('input[type="range"]');

    function handleInputChange(e) {
        let target = e.target;
        if (e.target.type !== "range") {
            target = document.getElementById("range");
        }
        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize =
            ((val - min) * 100) / (max - min) + "% 100%";
    }

    rangeInputs.forEach((input) => {
        input.addEventListener("input", handleInputChange);
    });
});
