document.addEventListener ('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
  })
})


const swiper = new Swiper('.swiper-container', {
  // Цикличность
  loop: true,
  // Пагинация
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  a11y: {
      paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

new Accordion('.accordion');
