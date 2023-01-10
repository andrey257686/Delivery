const cart = () => {
  const cardButton = document.querySelector("#card-button");
  const modalCard = document.querySelector(".modal-card");
  const closeCardButton = modalCard.querySelector(".close");
  const body = modalCard.querySelector(".modal-body");
  const buttonSend = modalCard.querySelector('.button-primary');

  const resetCart = () => {
    body.innerHTML = '';
    localStorage.removeItem('cart');
    modalCard.classList.remove('is-open');
  }

  const incrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const decrementCount = (id) => {
    const cartArray = JSON.parse(localStorage.getItem("cart"));

    cartArray.map((item) => {
      if (item.id === id) {
        item.count = item.count > 0 ? item.count- 1 : 0;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cartArray));
    renderItems(cartArray);
  };

  const renderItems = (data) => {
    body.innerHTML = "";
    data.forEach(({ name, price, id, count }) => {
      const cartElem = document.createElement("div");
      cartElem.classList.add("food-row");
      cartElem.innerHTML = `
        <span class="food-name">${name}</span>
        <strong class="food-price">${price} ₽</strong>
        <div class="food-counter">
          <button class="counter-button btn-dec" data-index="${id}">-</button>
          <span class="counter">${count}</span>
          <button class="counter-button btn-inc" data-index="${id}">+</button>
        </div>
      `;

      body.append(cartElem);
    });
  };
  // https://jsonplaceholder.typicode.com/posts
  body.addEventListener('click', (e) => {
    e.preventDefault()

    if (e.target.classList.contains('btn-inc')) {
      incrementCount(e.target.dataset.index)
    } else if (e.target.classList.contains('btn-dec')) {
      decrementCount(e.target.dataset.index)
    }
  })

  buttonSend.addEventListener('click', () => {
    const cartArray = localStorage.getItem("cart");

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: cartArray
    })
    .then(response => {
      if (response.ok) {
        resetCart();
      }
    })
    .catch(e => {
      console.error(e);
    })
  })

  cardButton.addEventListener("click", () => {
    if (localStorage.getItem("cart")) {
      renderItems(JSON.parse(localStorage.getItem("cart")));
    }
    toggleModalCard();
  });
  closeCardButton.addEventListener("click", toggleModalCard);

  function toggleModalCard() {
    modalCard.classList.toggle("is-open");
  }
};

cart();
