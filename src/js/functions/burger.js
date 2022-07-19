(function () {
  const burger = document?.querySelector('.header__burger');
  const menu = document?.querySelector('[data-menu]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger__header--active');
    menu?.classList.toggle('menu--active');
  });
})();
