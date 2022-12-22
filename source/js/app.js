'use strict';

const btnMenu = document.querySelector('.main-header__toggle'),
      header = document.querySelector('.main-header'),
      menu = document.querySelector('.main-header__nav');

header.classList.remove('main-header--nojs');

btnMenu.addEventListener('click', (e) => {
  if (menu.classList.contains('main-header__nav--closed')) {
    menu.classList.remove('main-header__nav--closed');
    menu.classList.add('main-header__nav--opened');
  } else {
    menu.classList.add('main-header__nav--closed');
    menu.classList.remove('main-header__nav--opened');
  }
});
