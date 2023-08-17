//create a element with  id reading-progress.
function progressBar(){
	const scrollline = document.querySelector('#reading-progress');

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);
}

//creates a element with  class "mouse-follow-circle" to create a follower.
function mouse_follower(){
    $('html').prepend('<div class="mouse-follow-circle"></div>');
    $(document).on("click mousemove","body",function(e){ 
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x ;
        var newposY = y; $(".mouse-follow-circle" ).css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    });

}