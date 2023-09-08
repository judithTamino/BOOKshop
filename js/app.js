const menu = document.querySelector('.nav__menu');
const toggle = document.querySelector('.nav__toggle');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show__menu');
})