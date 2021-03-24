'use strict';


  // Слайдер, в котором стрелки делаются в scss, в js  только прописать функцию

  $('.sales-slider').slick({
    dots:true,
    arrows:true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
   });



    // <!-- Слайдер, в котором стрелки делаются через js -->
    // в html под всеми item пропиcать <div class="sale-slider__pagination"></div>

    $('.sale__inner').slick({
      dots:true,
      arrows:true,
      slidesToShow: 1,

   //  когда в слайдере есть дотсы и стрелки

      appendDots: '.sale-slider__pagination', 
      appendArrows: '.sale-slider__pagination', 
      nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.png" alt=""></button>', 
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.png" alt=""></button>',
  });

