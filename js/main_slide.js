// 문서를 전부 읽은 후 실행
document.addEventListener('DOMContentLoaded', function() {

    // 변수
    var sliderContainer = document.getElementsByClassName('main_slider_container'),
        slides = document.getElementsByClassName('slide'),
        navPrev = document.getElementById('prev'),
        navNext = document.getElementById('next'),
        slideCount = slides.length,
        currentIndex = 0;

    // 슬라이더가 있으면 가로로 배열하기
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = i * 100 + '%';
    }

    // 다음,이전 버튼 누르면 할 일
    function goTo(idx) {
        sliderContainer[0].classList.add('animated');
        sliderContainer[0].style.left = -100 * idx + '%';
        currentIndex = idx;
    }
    // 이전 버튼
    navPrev.addEventListener('click', function(ev) {
        ev.preventDefault();
        
        if (currentIndex > 0) {
            goTo(currentIndex - 1);
        } else {
            goTo(slideCount - 1);
        }
    });
    // 다음 버튼
    navNext.addEventListener('click', function(ev) {
        ev.preventDefault();

        if (currentIndex < slideCount - 1) {
            goTo(currentIndex + 1);
        } else {
            goTo(0);
        }
    });

    function startAutoSlide() {
        var timer = setInterval(function() {
            var nextIdx = (currentIndex + 1) % slideCount;

            goTo(nextIdx);
        }, 4000);
    }

    startAutoSlide()




});//DOMContentLoaded


