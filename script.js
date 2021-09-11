
$(function () {

    $(window).on('scroll', function () {
         var scrollPosition = $(window).scrollTop();
        //  if (scrollPosition > 0) {
        //      $('#header').addClass('stickyHeader')
        //  } else {
        //      $('#header').removeClass('stickyHeader')
        // }
        if (scrollPosition > 600) {
            $('#backToTop').fadeIn(1000);
        } else {
            $('#backToTop').fadeOut(1000);
        }
    })
        $('#backToTop').on('click',function(){
            $('html,body').animate({
                scrollTop:0
            },2000)               
    })

    $(window).on('load',function(){
        $('#preloader_container').fadeOut(1000)
    })
    
    $('a').on('click', function(e){
        e.preventDefault();

        if(this.hash != "") {
            var hash = $(this.hash)
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            },2000)
        }
    })

    var typed = new typed('#typed', {
        stringsElement: '#typed-strings'
      });

})
