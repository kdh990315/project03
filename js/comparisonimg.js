$(function() {
    $('.car_color_pick:eq(1)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'});
    $('.car_color_pick:eq(3)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'});

    $('.car_color_pick:eq(0)').click(function () {
        $('.content-image:eq(1)').attr({'src' : "img/eximg.jpg"});
        $('.car_color_pick:eq(0)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
        $('.car_color_pick:eq(1)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(2)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
    });
    $('.car_color_pick:eq(1)').click(function () {
        $('.content-image:eq(1)').attr({'src' : "img/eximg2.jpeg"});
        $('.car_color_pick:eq(0)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(1)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
        $('.car_color_pick:eq(2)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
    });
    $('.car_color_pick:eq(2)').click(function () {
        $('.content-image:eq(1)').attr({'src' : "img/eximg3.jpg"});
        $('.car_color_pick:eq(0)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(1)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(2)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
    });

    $('.car_color_pick:eq(3)').click(function () {
        $('.content-image:eq(0)').attr({'src' : "img/eximg.jpg"});
        $('.car_color_pick:eq(3)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
        $('.car_color_pick:eq(4)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(5)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
    });
    $('.car_color_pick:eq(4)').click(function () {
        $('.content-image:eq(0)').attr({'src' : "img/eximg2.jpeg"});
        $('.car_color_pick:eq(3)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(4)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
        $('.car_color_pick:eq(5)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
    });
    $('.car_color_pick:eq(5)').click(function () {
        $('.content-image:eq(0)').attr({'src' : "img/eximg3.jpg"});
        $('.car_color_pick:eq(3)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(4)').css({'font-weight' : 'normal', 'background-color' : 'rgba(0, 0, 0, 0.5)'})
        $('.car_color_pick:eq(5)').css({'font-weight' : 'bold', 'background-color' : 'rgba(0, 0, 0, 0.8)'})
    });


});