'use strict';

//Menu filter-move
const filterBody = document.querySelector('.catalog__filter');
const btnFilterPush = document.querySelector('.catalog__main-filter-move');
const btnFilterClose = document.querySelector('.catalog__filter-close');
if(btnFilterPush) {
  btnFilterPush.addEventListener('click', function() {
    filterBody.classList.toggle('_active');
  });
}
if(btnFilterClose) {
  btnFilterClose.addEventListener('click', function() {
    filterBody.classList.toggle('_active');
  });
}
