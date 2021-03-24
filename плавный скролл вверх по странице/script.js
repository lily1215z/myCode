'use strict';

//т.к. оно все в функции то не будит конфликта с классами когда всунуть его в другой проект
    //можно функцию обернуть прочто скобками.
       //не раб когда оборачиваю в function() {}


{ 
    const scrollLinks = document.querySelectorAll('a.scroll-link');
    
    for(let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', function(e) {
          e.preventDefault();
          const id = scrollLinks[i].getAttribute('href');  //получаем атрибут href, это #body
          //нужно найти эл до котого нужно докрутить. Его не пишем в переменную, т.к. не будим боьше использовать
          //scrollIntoView() - метод кот написан в JS
          document.querySelector(id).scrollIntoView({
             //scrollIntoView принимает параметры, одни из них
             behavior: 'smooth',
             block: 'start' //до куда будим крутить
          });
       });
    }
}