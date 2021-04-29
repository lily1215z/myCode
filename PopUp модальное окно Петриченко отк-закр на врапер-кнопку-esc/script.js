'use strict';

const modalTrigger = document.querySelectorAll('[data-modal]'), //кнопкам на кот будм жать добавили data-modal чтоб их найти по этому атрибуту
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show');
        document.body.style.overflow = 'hidden'; //когда я открываю модалку то появляется стиль кот не позволяет прокручивать стр
        //и не забыть при закрытии восстановить прокрутку стр
    });
});

function closeModal() {  //если код повторяется то нужно выносить его в отдельную функцию
    modal.classList.add('hide');
    modal.classList.remove('show');
    // modal.classList.toggle('show');
    document.body.style.overflow = '';
}

//при клике на крестик - модалка закроется
modalCloseBtn.addEventListener('click', closeModal);

//при клике на обл вокруг - модалка закроется
modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal(); //здесь ее візіваем т.к. если условие. условие віполнилось и тогда она должна заработать
    }
});

//при клике на кнопку Esc - модалка закроется
//есть события кот назыв KeyDown оно срабатывает тогда когда нажимается кнопка
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
    //нужно чтоб наше модальное окно реагировало на клавишу Esc только когда оно открыто поэтому 
    //добавляем эту проверку modal.classList.contains('show')

});