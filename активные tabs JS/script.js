
'use strict';

const tabs = document.querySelectorAll('.item'), 
    content = document.querySelectorAll('.content'),
    box = document.querySelector('.item__box'); //чтоб сделать делегирвоание

function hide() {     
    content.forEach(item => {
        item.classList.add('hide');  
        item.classList.remove('show', 'fade'); 
    });

    tabs.forEach(item => {
        item.classList.remove('active');
    });
}

function show(i = 0) {  //всегда первый эл будит активным
    content[i].classList.add('show', 'fade');
    content[i].classList.remove('hide');
    tabs[i].classList.add('active');
}

hide();
show(); 

box.addEventListener('click', (e) => {  //делегирование
    const target = e.target;
    if(target && target.classList.contains('item')) {  //если есть таргет и в таргете кликнули на класс item
        tabs.forEach((item, i) => {
            if(target == item) {  //и если этот клик равен item, то выполнить действия
                hide();
                show(i); 
            }
        });
    }
});