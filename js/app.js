const menu = document.querySelector('.nav__menu');
const toggleBtn = document.querySelector('.nav__toggle');
const closeBtn = document.querySelector('.nav__close');

toggleBtn.addEventListener('click', () => {
  menu.classList.add('show__menu');
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show__menu');
})