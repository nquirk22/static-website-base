const sidenav = document.getElementById('mobile-nav');
const menuBtn = document.getElementById('menu-btn');

function toggleNav() {
  sidenav.classList.toggle('open');
  menuBtn.classList.toggle('open');
  document.body.classList.toggle('fixed');
}

