const cardButton = document.querySelector('#card-button');
const modalCard = document.querySelector('.modal-card');
const closeCardButton = document.querySelector('.close-card');

cardButton.addEventListener('click', toggleModalCard);
closeCardButton.addEventListener('click', toggleModalCard);

function toggleModalCard () {
  modalCard.classList.toggle('is-open');
}

// ------------------- Авторищация ---------------------------

const authButton = document.querySelector('#auth-button');
const modalAuth = document.querySelector('.modal-auth');
const closeAuthButton = document.querySelector('.close-auth');

authButton.addEventListener('click', toggleModalAuth);
closeAuthButton.addEventListener('click', toggleModalAuth);

function toggleModalAuth () {
  modalAuth.classList.toggle('is-open');
}



new WOW().init();