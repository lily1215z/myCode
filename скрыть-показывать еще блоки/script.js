'use strict';


//чтоб скрыть добавленные новые товары нужно к блоку/карточке товара добавить класс blogs__del
const more = document.querySelectorAll(".blogs__del");
const btnBlog = document.querySelector(".blogs__btn");
const loader = document.querySelector(".blogs__loader");

if(btnBlog) { //делала проверку т.к. код не работал с др кодом
  btnBlog.addEventListener("click", function() {
    more.forEach((el) => {
      if(el.style.display === "block") {
        el.style.display = "none";
        btnBlog.innerHTML="Загрузить еще 12"; 
        loader.style.display = "block";
    } else  {
        el.style.display = "block"; 
        btnBlog.innerHTML="Скрыть"; 
        loader.style.display = "none";
    }
  });
});
}  



// 2й вариант кода. можно несколько кнопок для нажатия прописать. И в стилях просать еще код
// .blogs__del.show {
//   display: block;
// }

// .blogs__del,
// .hide {
//   display: none;
// }
// const more = document.querySelectorAll(".blogs__del");
// const btnBlog = document.querySelectorAll(".blogs__btn");
// if(btnBlog) {
//   for(let i = 0; i < btnBlog.length; i++) {
//     btnBlog[i].addEventListener('click', function() {
//       more.forEach((el) => {
//           el.classList.toggle('show');
//         });

//         if(this.classList.toggle('show')) {
//           btnBlog[i].innerHTML = "Hidding";
//         } else {
//           btnBlog[i].innerHTML = "Загрузить еще 12";
//         }

//     });
//   }
// } 
//классно отрабатывает на одной кнопке , но если добавляю еще кнопки то "Hidding" меняется местами - не отрабатывает как надо
