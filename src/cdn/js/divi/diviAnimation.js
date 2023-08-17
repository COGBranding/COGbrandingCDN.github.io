function animate(animation, speed, justOnce = '') {
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
        // IE Fallback
        function(callback) {
            window.setTimeout(callback, 1000 / 60)
        };
    var elementsToShow = document.querySelectorAll('.animatethis');

    function loop() {

        Array.prototype.forEach.call(elementsToShow, function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('animate__animated');
                element.classList.add(speed);
                element.classList.add(animation);
            } else {
                if(!justOnce){
                    element.classList.remove(animation);
                }
            }
        });

        scroll(loop);
    }

    // Call the loop for the first time
    loop();

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {

        var top = el.offsetTop;
        var left = el.offsetLeft;
        var width = el.offsetWidth;
        var height = el.offsetHeight;

        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }

        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        );
    }
}