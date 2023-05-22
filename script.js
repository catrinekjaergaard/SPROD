// Burger menu

const burger = document.querySelector(".fa-bars");
const overlay = document.querySelector(".mobil-menu");
const x = document.querySelector(".fa-x");

burger.addEventListener("click", () => {
  overlay.style.height = "100%";
});

x.addEventListener("click", () => {
  overlay.style.height = "0";
});

//Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slideshow"); 
}
