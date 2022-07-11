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


var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-btn-next-a",
    prevEl: ".swiper-btn-prev-a",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Filter

if (document.querySelectorAll('.property__item').length > 0) {
  const filterBox = document.querySelectorAll('.property__item');
  const boxContent = document.querySelector('.property__content');
  const boxList = document.querySelector('.property__list');
  boxList.addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];
    filterBox.forEach(elem => {
      elem.classList.remove('hide');
      if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
        elem.classList.add('hide');
        if (elem.classList.contains('hide')) {
          boxContent.append(elem);
        }
      }
    })
  })

  // Activiti class for filter

  const btnContainer = document.querySelector('.property__list');

  let items = btnContainer.querySelectorAll('li');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (e) {
      if (!e.target.classList.contains('active')) {
        items.forEach((elem) => {
          elem.classList.remove('active');
        })
        e.target.classList.add('active');
      } else {
      }
    });
  }
}


var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    766: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    993: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Tabs

if (document.querySelectorAll('.object-info__header').length > 0) {
  let tabs = document.querySelector('.object-info__header'),
    tabsItem = document.querySelectorAll('.object-info__item'),
    tabsInfo = document.querySelectorAll('.object-info__box');

  tabs.addEventListener('click', fTabs);

  function fTabs(event) {
    if (event.target.className == "object-info__item") {
      //let dataTab = event.target.getAttribute('data-tab');
      let currentDataTab = event.target.dataset.tab;
      //console.log(currentDataTab);
      for (let i = 0; i < tabsItem.length; i++) {
        tabsItem[i].classList.remove('active');
      }
      event.target.classList.add('active');
      for (let i = 0; i < tabsInfo.length; i++) {
        if (currentDataTab == i) {
          tabsInfo[i].classList.add('active');
        } else {
          tabsInfo[i].classList.remove('active');
        }
      }
    }
  }

}
