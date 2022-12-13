'use strict';

const btnMenu = document.querySelector('.main-header__toggle'),
      menu = document.querySelector('.main-nav');

btnMenu.addEventListener('click', (e) => {
  menu.classList.toggle('visually-hidden');
});
