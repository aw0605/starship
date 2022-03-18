//SLIDE
// MO
var swiper = new Swiper(".swiper-MO", {
    direction : 'horizontal', //방향
    loop : true, //무한반복
    autoplay : true, //자동시작
    slidesPerView : 1, //한번에 보여지는 슬라이드 개수
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
  // TAB&PC
  var swiper = new Swiper(".swiper-PC", {
    direction : 'horizontal', //방향
    loop : true, //무한반복
    autoplay : true, //자동시작
    slidesPerView : 1, //한번에 보여지는 슬라이드 개수
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });



  //NEW RELEASE
  //MO&TAB
  var swiper = new Swiper(".new-release .CDSwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 36,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
    //PC
    var swiper = new Swiper(".new-release-PC .CDSwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 20
    });