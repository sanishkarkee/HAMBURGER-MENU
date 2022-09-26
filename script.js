const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

//--opening menu after clicking
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

//--closing menu after clicking anywhere
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
