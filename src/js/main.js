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

// Filter

const filterBox = document.querySelectorAll('.property__item');
const boxContent = document.querySelector('.property__content');
document.querySelector('.property__list').addEventListener('click', event => {
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
