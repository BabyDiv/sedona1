const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
const nav = document.querySelector('.header__nav');
const logo = document.querySelector('.header__logo');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burgerClose.classList.toggle('active');
  burgerOpen.classList.toggle('display-none');
  logo.classList.toggle('display-none');
  console.log('hello');
});