// $(function () {
    // $('#dowebok').fullpage({
    //     //sectionsColor: ['', 'rgba(255,255,255,.5)', 'rgba(0,0,0,.5)', 'rgba(255,255,255,.5)', ''],
    //     'css3': true,
    //     navigation: true,
    //     navigationPosition: 'right',
    //     easing: 'easeInQuart',
    //     'slidesNavigation': true,
    //     'slidesNavPosition': 'bottom',
    //     'afterLoad': function (anchorLink, index) {
    //         if (index == 2) {
    //             $('#section1 .blog').addClass('showblog');
    //             $('#section1 .pic').addClass('showblog_pic');
    //             $('#section1 .about').addClass('about_move');
    //         }
    //         if (index == 3) {
    //             $('#section2 .blog').addClass('showblog');
    //             $('#section2 .pic').addClass('showblog_pic');
    //             $('#section2 .word').addClass('showword');
    //         }
    //         if (index == 4) {
    //             $('#section3 .inner').addClass('showlinks');
    //         }
    //     }
    // });
    // var $window = $(window), win_height_padded = $window.height() * 1.1, isTouch = Modernizr.touch;
    // $window.on('scroll', revealOnScroll);
    // function revealOnScroll() {
    //     var scrolled = $window.scrollTop();
    //     $(".revealOnScroll:not(.animated)").each(function () {
    //       var $this     = $(this),
    //           offsetTop = $this.offset().top;
    //         if (scrolled + win_height_padded > offsetTop) {
    //             if ($this.data('timeout')) {
    //               window.setTimeout(function(){
    //                 $this.addClass('animated ' + $this.data('animation'));
    //               }, parseInt($this.data('timeout'),10));
    //             } else {
    //               $this.addClass('animated ' + $this.data('animation'));
    //             }
    //         }
    //     });
    // }
    
// });
layui.use(['jquery','util'], function(){
    var $ = layui.jquery,
        util = layui.util;
    util.fixbar();;
    new WOW().init();
    $('.next').click(function(){
      $('html,body').animate({
        scrollTop: $('#section1').outerHeight()+1
      },600);
    });
    $('#menu').on('click', function () {
        var mark = $(this).attr('data-mark');
        if (mark === 'false') {
            $(this).removeClass('menu_open').addClass('menu_close');
            //open
            $('#navgation').removeClass('navgation_close').addClass('navgation_open');
            $(this).attr({ 'data-mark': "true" });
        } else {
            $(this).removeClass('menu_close').addClass('menu_open');
            //close
            $('#navgation').removeClass('navgation_open').addClass('navgation_close');
            $(this).attr({ 'data-mark': "false" });
        }
    });

});