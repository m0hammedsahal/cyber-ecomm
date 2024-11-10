$(document).ready(function () {
    var swiper3 = new Swiper(".mySwiper3", {
      centeredSlides: false,
      breakpoints: {
         1280: { slidesPerView: 6 },
          1024: { slidesPerView: 6 },
          640: { slidesPerView: 3 },
          480: { slidesPerView: 2 }
      },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    });
  });
  $(document).ready(function () {
    var swiper4 = new Swiper(".mySwiper4", {
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
      breakpoints: {
         
          1024: { slidesPerView: 4 },
          640: { slidesPerView: 3 },
          480: { slidesPerView: 1 }
      },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    
    
    });
  });