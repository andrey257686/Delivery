const menu = () => {
  const cardsMenu = document.querySelector(".cards-menu");

  const cartArray = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const changeTitle = ({ kitchen, name, price, stars }) => {
    const restaurantHeading = document.querySelector(".section-heading");
    restaurantHeading.innerHTML = `
      <h2 class="section-title">${name}</h2>
      <div class="card-info">
        <div class="rating">
          <img src="img/rating.svg" alt="Rating" class="rating-star" />
          ${stars}
        </div>
        <div class="price">От ${price} ₽</div>
        <div class="category">${kitchen}</div>
      </div>
    `;
  };
  ``;
  const addToCart = (cartItem) => {
    if (cartArray.some((item) => item.id === cartItem.id)) {
      cartArray.map((item) => {
        if (item.id === cartItem.id) {
          item.count++;
        }
        return item;
      });
    } else {
      cartArray.push(cartItem);
    }
    localStorage.setItem("cart", JSON.stringify(cartArray));
  };

  const renderItems = (data) => {
    data.forEach(({ description, id, image, name, price }) => {
      const card = document.createElement("div");

      card.classList.add("card");
      card.classList.add("wow");
      card.classList.add("fadeInUp");

      card.innerHTML = `
        <img
          src="${image}"
          alt="Image"
          class="card-image"
        />
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title card-title-reg">${name}</h3>
          </div>
          <div class="card-info">
            <div class="ingredients" title="${description}">
              ${description}
            </div>
          </div>
          <div class="card-buttons">
            <button class="button button-primary">
              <span class="button-card-text">В корзину</span>
              <img
                src="img/shopping-card-white.svg"
                alt="Shopping-card"
                class="button-card-image"
              />
            </button>
            <strong class="card-price-bold">${price} ₽</strong>
          </div>
        </div>
      `;

      card.querySelector(".button-card-text").addEventListener("click", () => {
        addToCart({ name, price, id, count: 1 });
      });
      cardsMenu.append(card);
    });
  };

  if (localStorage.getItem("restaurant")) {
    const restaurant = JSON.parse(localStorage.getItem("restaurant"));

    changeTitle(restaurant);

    fetch(
      `https://test-ef01d-default-rtdb.firebaseio.com/db/${restaurant.products}`
    )
      .then((response) => response.json())
      .then((data) => {
        renderItems(data);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    window.location.href = "/";
  }
};

menu();
