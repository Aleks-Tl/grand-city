import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

document.addEventListener("DOMContentLoaded", function () {
  transformAddressHeader();
});

if (document.querySelectorAll('.main-filter') > 0) {

  function stickyFilter() {
    const filterSticky = document.querySelector('.main-filter');

    if (document.body.scrollTop > document.documentElement.scrollHeight - 1300 || document.documentElement.scrollTop > document.documentElement.scrollHeight - 1300) {
      filterSticky.classList.add('static');
    } else {
      filterSticky.classList.remove('static');
    }
  }

  window.onscroll = function () {
    stickyFilter();
  };
}

window.onscroll = function () {
  scrollFunction();

};


window.onresize = function () {
  transformAddressHeader();
}


function scrollFunction() {
  let clientWidth = document.documentElement.clientWidth;
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('.header__logo').classList.add('scroll');
    document.querySelector('.header__logo-scroll').classList.add('scroll');
    document.querySelector('header').classList.add('fixedMenu');
    if (clientWidth >= 1200) {
      document.querySelector('.languages').classList.add('scrolloc');
      document.querySelector('.header__contacts address').classList.add('scrolloc');
    }
  } else {
    document.querySelector('.header__logo').classList.remove('scroll');
    document.querySelector('.header__logo-scroll').classList.remove('scroll');
    document.querySelector('header').classList.remove('fixedMenu');
    if (clientWidth >= 1200) {
      document.querySelector('.languages').classList.remove('scrolloc');
      document.querySelector('.header__contacts address').classList.remove('scrolloc');
    }
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

if (document.querySelectorAll('.main-filter').length > 0) {
  $(".js-select2").select2({
    closeOnSelect: false,
    placeholder: "City Projects",
    allowHtml: true,
    allowClear: true
  });

  $(".js-select3").select2({
    closeOnSelect: false,
    placeholder: "Project Class",
    allowHtml: true,
    allowClear: true
  });

  $(".js-select4").select2({
    closeOnSelect: false,
    placeholder: "Region",
    allowHtml: true,
    allowClear: true
  });
}

if (document.querySelectorAll('.btn-searh') > 0) {
  const btnSearch = document.querySelector('.btn-search'),
    inputSearch = document.querySelector('.main-search-wr'),
    mainSearch = document.querySelector('.main-search');


  btnSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('show');
  })
}


// Sticky filter


function transformAddressHeader() {
  const headerNav = document.querySelector('.header__nav'),
    headerContacts = document.querySelector('.header__contacts'),
    headerBurg = document.querySelector('.header__burg'),
    clientWidth = document.documentElement.clientWidth;


  if (clientWidth <= 1200) {
    headerNav.append(document.querySelector('.header__location'));
  } else {
    headerContacts.prepend(document.querySelector('.header__location'));
  }

  if (clientWidth <= 1200) {
    headerNav.append(document.querySelector('.languages'));
  } else {
    headerBurg.append(document.querySelector('.languages'));
  }
}


// ?????????? ???????????????????? ????????
$('.button').click(function () {
  $('.overlay').fadeIn();
});

// ???????????????? ???????? ???? ??????????????
$('.close-popup').click(function () {
  $('.overlay').fadeOut();
});

// ???????????????? ???????? ???? ????????
$(document).mouseup(function (e) {
  var popup = $('.popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.overlay').fadeOut();
  }
});

