(function(){
  "use strict"; // Start of use strict

//Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);
        
        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

        //Common UX/UI
        if ( $( "#works-container" ).length ) {
            $( ".works-filter-wrap" ).fadeIn(3000);
        }
        var LinkPoster;
        $('.main-link').on('mouseenter', function(){
            LinkPoster = $(this).html();
            $('.link-show-poster h1').html(LinkPoster);
            $('.link-show-poster').show();
        });
        $('.main-link').on('mouseleave', function(){
            $('.link-show-poster h1').html(' ');
            $('.link-show-poster').hide();
        });


        //Mobile Only Navigation (SLIMMENU JS with multi level menu support)
                $('ul.slimmenu').slimmenu({
                    resizeWidth: '992',
                    collapserTitle: '',
                    easingEffect: 'easeInOutQuint',
                    animSpeed: 'medium',
                });

                $('.slimmenu li a:not(.sub-collapser)').on('click',function(){
                            $('ul.slimmenu').removeClass('expanded').slideUp();
                });
}