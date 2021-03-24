'use strict';


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock'); //чтоб сайт за меню не скролился. В html если body._lock {overflow: hidden;}
    iconMenu.classList.toggle('_active');    //палочки возвращаются в бургер
    menuBody.classList.toggle('_active');    //само тело меню закрывается
  });
}
