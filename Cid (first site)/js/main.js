// бургер

document.addEventListener ('DOMContentLoaded', function() {
  document.getElementById('burger').addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
  })
})

// Swiper

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


// табы

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

// аккордион

new Accordion('.accordion');

// кнопка поиска

const searchPressSvg = document.querySelector( '.search-3__press-svg' );
const searchInput = document.querySelector( '.search-3__input' );
const searchBtn = document.querySelector( '.search-3__btn' );
const search = document.querySelector( '.search-3' );
const searchDiv = document.querySelector( '.search-3-div' );

searchPressSvg.addEventListener( 'click', function(el) {
  el.stopPropagation();
  this.classList.add( 'search-3__press-svg--active' );
  searchInput.classList.add( 'search-2__input--active' );
  searchBtn.classList.add( 'search-3__btn--active' );
  search.classList.add( 'search-3--active' );
  searchDiv.classList.add( 'search-3-div--active' );

} );
