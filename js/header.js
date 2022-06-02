$(document).ready(function() {
    $('.toggle').click(function () {
        $('.main_menu').slideToggle();
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
           $('.main_menu').show(); 
        } else {
            $('.main_menu').hide(); 
        }
    });
});

document.addEventListener('scroll', function() {
    var $header = $('header');

    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }

    });
});

// 
//     var header = document.getElementsByName('header'),
//         topscroll = document.documentElement;

//     if (topscroll.scrollTop > 0 ) {
//         header.addClass('sticky');
//     } else {
//         header.removeClass('sticky');
//     }

// });