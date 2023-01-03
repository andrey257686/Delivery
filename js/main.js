const cardButton = document.querySelector('#card-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

cardButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

function toggleModal () {
  modal.classList.toggle('is-open');
}

new WOW().init();