// Add active class to checkout payment method
window.addEventListener("load", (event) => {
    const radioButton = document.querySelectorAll(
        'input[name="payment_method"]'
    );
    var i;

    // setTimeout(function(){
    $(document).ajaxComplete(function () {
        for (i = 0; i < radioButton.length; i++) {
            radioButton[i].addEventListener("click", function () {
                if (this.checked) {
                    this.parentNode.classList.add("active");
                } else if (!this.checked) {
                    this.parentNode.classList.remove("active");
                }
            });
            if (radioButton[i].checked) {
                radioButton[i].parentNode.classList.add("active");
            }
        }
    });
    // },10000);
});