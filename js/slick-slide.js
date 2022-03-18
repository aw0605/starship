//WORK
$(function(){
  $('.work-slider').slick({
    centerMode: true,
    autoplay: true,
    loop: true,
    arrows: false,
    centerPadding: '40px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

//MULTIMEDIA
$(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    centerPadding: 10,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    centerMode: true
  });
})