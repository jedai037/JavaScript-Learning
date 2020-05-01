const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu-nav');
const link = document.querySelectorAll('.menu-nav__link');
const box = document.querySelector('.box');
menu.addEventListener('click', function(event) {
  event.preventDefault();
  menu.classList.toggle('menu-btn_active');
  nav.classList.toggle('menu-nav__active');
});

link.forEach(function(item) {
  item.addEventListener('click', function() {
    link.forEach(i => i.classList.remove('menu-nav__link-red'));
    item.classList.add('menu-nav__link-red');
  });
});

document.addEventListener('click', e => {
  let target = e.target;
  let itsMenu = target == nav || nav.contains(target);
  let field = target == menu;
  let menuIsActive = nav.classList.contains('menu-nav__active');
  
  if (!itsMenu && !field && menuIsActive) {
    menu.classList.toggle('menu-btn_active');
    nav.classList.toggle('menu-nav__active');
  }
  
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    menu.classList.remove('menu-btn_active');
    nav.classList.remove('menu-nav__active');
  }
});
                          
document.addEventListener('keydown', (event) => {
  let i = box.getBoundingClientRect();
  console.log(i);
  if (event.keyCode === 37) {
      box.style.transform += 'rotate(45deg)';
      box.style.left = 200 + 'px';
  } else if (event.keyCode === 38) {
      box.style.transform += 'rotate(45deg)';
      box.style.top = 400 + 'px';
  } else if (event.keyCode === 39) {
      box.style.transform += 'rotate(45deg)';
      box.style.left = 300 + 'px';
  } else if (event.keyCode === 40) { 
      box.style.transform += 'rotate(45deg)';
      box.style.top = 500 + 'px';
  }
})

  

