import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('header').classList.add('fixedMenu');
  } else {
    document.querySelector('header').classList.remove('fixedMenu');
  }
}



var swiperTwo = new Swiper(".mySwiper3", {
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-two-btn-next",
    prevEl: ".swiper-two-btn-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    769: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    993: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});
