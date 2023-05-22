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
const slideshowImages = document.querySelectorAll(".billederslideshow"); //vælger alel billederne slideshow div

const nextImageDelay = 3000; //3sek mellem hvert skift af billeder const fordi det er den samme handling der ikke ændre sig
let imageCounter = 0; //let ændre sig

slideshowImages[imageCounter].style.display = "block"; //Blokere de billeder der ikke vises

setInterval(nextImage, nextImageDelay);

function nextImage() {
slideshowImages[imageCounter].style.display = "none";
imageCounter = (imageCounter + 1) % slideshowImages.length; //viser billede og lægger det næste ovn i og length gør at den bare fortsætter uden at stoppe
slideshowImages[imageCounter].style.display = "block";
}

