'use strict';

const btnMenu = document.querySelector('.main-header__toggle'),
      header = document.querySelector('.main-header'),
      menu = document.querySelector('.main-header__nav'),
      iconOpen = document.querySelector('.main-header__icon-btn--open'),
      iconClose = document.querySelector('.main-header__icon-btn--close');

header.classList.remove('main-header--nojs');

btnMenu.addEventListener('click', (e) => {
  if (menu.classList.contains('main-header__nav--closed')) {
    menu.classList.remove('main-header__nav--closed');
    menu.classList.add('main-header__nav--opened');
  } else {
    menu.classList.add('main-header__nav--closed');
    menu.classList.remove('main-header__nav--opened');
  }

  if (menu.classList.contains('main-header__nav--closed')) {
    iconOpen.classList.remove('visually-hidden');
    iconClose.classList.add('visually-hidden');
  } else {
    iconOpen.classList.add('visually-hidden');
    iconClose.classList.remove('visually-hidden');
  }

});
