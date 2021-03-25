'use strict';

//////переместить один блок в другой блок и удалить тот что перемещала
//при бекпоинте 800

function move() {
    const sliderMove = document.querySelector('.slider-move'); //блок куда будим перемещать
    let cardItem = document.querySelector('.card__item');  //блок который будим перемещать
    if(window.innerWidth <= 800) {
      sliderMove.innerHTML = cardItem.innerHTML;
      cardItem.remove();
    }
  }
  move();
