'use strict';


// GloAcademy
const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function() {
	modalCart.classList.add('show');   //show add in overlay. When they together: dispplay:flex
};

const closeModal = function() {
	modalCart.classList.remove('show'); //when show del - overlay is diplay:none
};
//при клике на врапер блок закроется
modalCart.addEventListener('click', (e) => {
	const target  = e.target;
	if(target.classList.contains('overlay') || target.classList.contains('modal-close')) {
		closeModal();
	}
});

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

/////// конец

// мой код
//При клике на кнопку - открыть карзину с врапером. При клике на крестик и врапер - закрыть
// const btnPush = document.querySelector(".push");
// const btnClose = document.querySelector(".basket__close");
// const popUp = document.querySelector(".basket");

// const wrapper2 = document.createElement('div');

// if(btnPush) {  //сделала проверку if т.к. ниже шел др код и не работало без проверки.
//    //была ошибка Cannot read property 'addEventListener' of null
//    //в нижнем коде тоже такую же проверку нужно делать. это связано с тем что интерпретатор 
//    //быстрее прочел чем стр загрузилась или наоборот.
//    //можно еще часть не раб кода писать в скрипте на той странице где он нужен, а не отдельно.
//    btnPush.addEventListener("click", function() {
//     popUp.style = "display: block";
//     wrapper2.className = 'wrapper1';
//     document.body.appendChild(wrapper2);
//   });
// }
 
// if(btnClose) {
//   btnClose.addEventListener("click", function() {
//     popUp.style = "display: none";
//     wrapper2.remove();
// });
// }

// if(wrapper2) {
//   wrapper2.addEventListener('click', () => {
//   popUp.style = "display: none";
//   wrapper2.remove();
// });
// }
