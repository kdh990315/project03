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