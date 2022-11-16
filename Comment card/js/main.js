document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('social-share').addEventListener('click', (e) => {
    document.getElementById('social-open').classList.add('card-2__share-social--active')
  });

  // document.getElementById('social-share').addEventListener('click', (e) => {
  //   document.getElementById('social-open').classList.remove('card-2__share-social--active')
  // });
});