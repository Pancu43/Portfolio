const bigCard = document.querySelectorAll('.dashboard__big-card');

const bigCardSocial = document.querySelectorAll('.big-card__social');

const bigCardFollowers = document.querySelectorAll('.big-card__followers');

const smallCard = document.querySelectorAll('.small-card');

const smallCardDescr = document.querySelectorAll('.small-card__descr');

const smallCardFollowers = document.querySelectorAll('.small-card__followers');

document.addEventListener( 'DOMContentLoaded', (e) => {
  document.getElementById('mode').addEventListener('click', function() {
    document.querySelector('body').classList.toggle('body-white');

    document.querySelector('.slider').classList.toggle('slider-white');

    document.querySelector('.dashboard').classList.toggle('dashboard-white');

    document.querySelector('.dashboard__background').classList.toggle('dashboard__background-white');

    document.querySelector('.dasboard__title').classList.toggle('dasboard__title-white');

    document.querySelector('.dasboard__followers').classList.toggle('dasboard__followers-white');

    document.querySelector('.mode__descr').classList.toggle('mode__descr-white');

    document.querySelector('.dashboard__title-today').classList.toggle('dashboard__title-today-white');

    bigCard.forEach(el => {
      el.classList.toggle('dashboard__big-card-white')
    });

    bigCardSocial.forEach(el => {
      el.classList.toggle('big-card__social-white')
    });

    bigCardFollowers.forEach(el => {
      el.classList.toggle('big-card__followers-white')
    });

    smallCard.forEach(el => {
      el.classList.toggle('small-card-white')
    });

    smallCardDescr.forEach(el => {
      el.classList.toggle('small-card__descr-white')
    });

    smallCardFollowers.forEach(el => {
      el.classList.toggle('small-card__followers-white')
    });
  });
});
