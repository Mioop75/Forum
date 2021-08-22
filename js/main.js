const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const button = document.querySelector(".footer__button");
const input = document.querySelector(".footer__email");
const body = document.body;

burger.addEventListener("click", function() {
   menu.classList.toggle("show");
   body.classList.toggle("hide");
});

burger.addEventListener('click', function(){
  document.querySelector('.header__burger span').classList.toggle('active');
})
button.addEventListener("click", function() {
   if(input.value == "") {
      alert("Вы ничего не написали");
   } else if(!input.value.includes("@")) {
      alert("Вы ввели не почту");   
   } else {
      alert(input.value);   
   }
})