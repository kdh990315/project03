var scroll_item = document.getElementsByClassName('img1');
function scrollmove(){
        if(window.scrollY > scroll_item.offsetTop-700){
            scroll_item.style.opacity = '1';
            scroll_item.style.marginTop = '100px';
            scroll_item.style.transition = 'all 0.4s ease';
        } else if(window.innerHeight < scroll_item[i].offsetTop){
            scroll_item.style.opacity = '0';
            scroll_item.style.marginTop = '300px';
            scroll_item.style.transition = 'all 0.4s ease';
        }
}
window.addEventListener('scroll',scrollmove);