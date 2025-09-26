export const initPageHeader = () => {

  const container = document.querySelector('.main-header');
  if (!container) return;

  const burger = container.querySelector('.main-header__burger');
  const iconOpen = container.querySelector('.main-header__icon-open');
  const iconClose = container.querySelector('.main-header__icon-close');
  const nav = container.querySelector('.main-header__nav');
  const logo = container.querySelector('.main-header__logo');

  const open = () => {
    nav.classList.add('main-header__nav--active');
    iconClose.classList.add('main-header__burger--open');
    iconOpen.classList.add('main-header__burger--close');
    logo.classList.add('main-header__burger--close');
    console.log('hello');
  }

  const close = () => {
    nav.classList.remove('main-header__nav--active');
    iconClose.classList.remove('main-header__burger--open');
    iconOpen.classList.remove('main-header__burger--close');
    logo.classList.remove('main-header__burger--close');
    console.log('hello');
  }

  const isOpen = () => {
    return nav.classList.contains('main-header__nav--active')
  }

  const handleBurgerClick = () => {
    isOpen() ? close() : open();
  }

  burger.addEventListener('click', handleBurgerClick);

  // () => {

  //   // 

  //   nav.classList.toggle('active');
  //   burgerClose.classList.toggle('active');
  //   burgerOpen.classList.toggle('display-none');
  //   logo.classList.toggle('display-none');
  //   console.log('hello');
  // }
}