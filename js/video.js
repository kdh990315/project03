$(document).ready(function() {
    var currentUrl = $('iframe').attr('src');

    $('.video .icon').click(function(e) {
        e.preventDefault();
        $('#overlay').addClass('visible');
        var newStr = '?autoplay=1';
        var newUrl = currentUrl.concat(newStr);

        $('iframe').attr('src', newUrl);
    });

    $('.video .close').click(function(e) {
        e.preventDefault();
        currentUrl = $('iframe').attr('src');
        $('#overlay').removeClass('visible');
        var newUrl2 = currentUrl.replace('?autoplay=1','');
        $('iframe').attr('src', newUrl2);
    });

});//ready(function()