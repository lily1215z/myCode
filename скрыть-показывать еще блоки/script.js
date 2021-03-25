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
