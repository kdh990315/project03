$(function() {

    var $main_info_box1 = $('.main_info_box1');
    var $box2_left_img_box = $('.box2_left_img_box');
    var $box2_rigth_img_box = $('.box2_rigth_img_box');
    var $contents = $('.contents');
    var $test_drive_box = $('.test_drive_box');

    $(window).scroll(function() {
        if ($(this).scrollTop() > $main_info_box1.offset().top - 800) {
            $main_info_box1.find('img').addClass('animate');
            $main_info_box1.find('.main_info_box1_text').addClass('animate');
        }

        if ($(this).scrollTop() > $box2_left_img_box.offset().top - 800) {
            $box2_left_img_box.addClass('animate1');
        }

        if ($(this).scrollTop() > $box2_rigth_img_box.offset().top - 800) {
            $box2_rigth_img_box.addClass('animate2')
        }

        if ($(this).scrollTop() > $contents.offset().top - 800) {
            $contents.addClass('animate3')
        }

        if ($(this).scrollTop() > $('.box1').offset().top - 800) {
            $('.box1').addClass('animate4')
        }

        if ($(this).scrollTop() > $('.box2').offset().top - 800) {
            $('.box2').addClass('animate5')
        }

        if ($(this).scrollTop() > $('.box3').offset().top - 800) {
            $('.box3').addClass('animate6')
        }

        if ($(this).scrollTop() > $('.box4').offset().top - 800) {
            $('.box4').addClass('animate7')
        }

        if ($(this).scrollTop() > $('.box5').offset().top - 800) {
            $('.box5').addClass('animate8')
        }

        if ($(this).scrollTop() > $('.box6').offset().top - 800) {
            $('.box6').addClass('animate9')
        }

        if ($(this).scrollTop() > $test_drive_box.offset().top - 600) {
            $test_drive_box.addClass('animate10')
        }

    });
});