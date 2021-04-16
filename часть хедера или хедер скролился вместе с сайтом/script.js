'use strict';



// 200 - это расстояние вниз в пикселях от верха сайта. Т.е. после 200 пикселей
//появится доп липкий хедер и будит ездить со всем сайтом

$(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top > 200) $('.menu__wrapper-fix').addClass('active');
    else $('.menu__wrapper-fix').removeClass('active');
  });
  
  // и создаю отдельное подключение для бургера в зафиксированном хедере, чтоб
  //он так же откывал/закрывал меню
  
  //Menu burger фиксид
  const iconMenuF = document.querySelector('.menu__wrapper-fix .menu__icon');
  const menuBodyF = document.querySelector('.menu__wrapper-fix .menu__body');
  if(iconMenuF) {
    iconMenuF.addEventListener('click', function(e) {
      document.body.classList.toggle('_lock'); //чтоб сайт за меню не скролился. В html если body._lock {overflow: hidden;}
      iconMenuF.classList.toggle('_active');
      menuBodyF.classList.toggle('_active');
    });
  }