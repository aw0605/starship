// //돋보기 버튼 제어
// const searchEl = document.querySelector('.search');
// const searchInputEl = searchEl.querySelector('input');

// //포커스가 들어가면 .focused 추가
// searchInputEl.addEventListener('focus',function(){
//     searchEl.classList.add('focused');
//     searchInputEl.setAttribute('placeholder',' Search...');
// });

// searchEl.addEventListener('click',function(){
//     searchInputEl.focus();
// });

// //포커스가 나가면 .focused 삭제
// searchInputEl.addEventListener('blur',function(){
//     searchEl.classList.remove('focused');
//     searchInputEl.setAttribute('placeholder','');
// });


// side menu - menu-toggle-btn
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    }else{
        menuToggleBtn.classList.remove('active');
        menuHide.classList.remove('show');
    }
});

//more
//MO&TAB&PC
var box = document.querySelectorAll('.container-TM .box');
        var btn = document.querySelector('.btn1');
        var currentimg = 4;
        btn.addEventListener('click', function(){
            for(var i = currentimg; i < currentimg +4; i++){
                if(box[i]){
                    box[i].style.display = 'block';
                }
            }
            currentimg += 4;
            if(currentimg >= box.length){
                event.target.style.display = 'none';
            }
        });


//Magic Scroll----------
// const spyEls = document.querySelectorAll("section.scroll-spy");
// spyEls.forEach(function (spyEl) {
//   new ScrollMagic.Scene({
//     triggerElement: spyEl,
//     triggerHook: 0.8,
//   })    
//     .setClassToggle(spyEl, "show")
//     .addTo(new ScrollMagic.Controller());
// });

