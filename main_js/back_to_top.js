var btt = document.getElementById('back-to-top'),
    docElem = document.documentElement, //html 문서 전체를 가져옴
    offset,  // 스크롤 아래쪽
    scrollPos, // 스크롤 양
    docElem;


// 문서 높이 계산하기
docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);  //scrollHeight, offsetHeight = 문서의 높이 (브라우져마다 다름) Math.max/min() => 둘중에 큰 값이나 작은 값을 사용함

if (docHeight != 'undefined') { // =docHeight가 값이 있다면  (undefined = 값이 지정되지 않음.)
    offset = docHeight / 5;
}
// 스크롤 이벤트 추가 콘솔에 스크롤 값이 실시간으로 찍힘
window.addEventListener('scroll', function () { //윈도우에 스크롤 이벤트가 생기면 할 일
    scrollPos = docElem.scrollTop; // 스크롤 값을 구함  console.log(scrollPos) 찍어볼것
    btt.className = (scrollPos > offset) ? 'visible' : '';     //@@@.className = @@@의 클래스 명을 바꿈.
});

// 클릭 이벤트 추가
btt.addEventListener('click', function (ev) { //btt에 클릭 이벤트가 생기면 할 일
    ev.preventDefault(); // btt의 링크 본연의 기능을 막음
    //docElem.scrollTop = 0;
    scrollToTop();
});

function scrollToTop() {
    //일정 시간마다 할 일 var scrollInterval = setInterval(할일, 시간); 이름을 지정해줘야 나중에 멈출 수 있음.
    // 0.0015s = 15
    // 할 일 = function() {실제로 할 일};
    // 실제로 할 일 : 윈도우 스크롤이 0이 아닐 때 window.scrollBy(0,-55) { window.scrollBy(x,y) }
    // 스크롤이 0이면 setInterval을 멈춰라. clearInterval(멈추려는 대상의 이름)
    var scrollInterval = setInterval(function () {
        if (scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
};