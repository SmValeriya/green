import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".reviews__carousel", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 22
    }
  },

  navigation: {
    nextEl: ".reviews__carousel-nav--next",
    prevEl: ".reviews__carousel-nav--prev",
  },

});

const btn = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
