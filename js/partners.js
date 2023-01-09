const cardsRestaurant = document.querySelector(".cards-restaurants");

const renderItems = (data) => {
  data.forEach((item) => {
    const {image, kitchen, name, price, products, stars, time_of_delivery} = item;
    const a = document.createElement('a');
    a.setAttribute("href", "/restaurant.html");
    a.classList.add("card");
    a.classList.add("wow");
    a.classList.add("fadeInUp");

    a.dataset.products = products;

    a.innerHTML = `
      <img src="${image}" alt="Image" class="card-image" />
      <div class="card-text">
        <div class="card-heading">
          <h3 class="card-title">${name}</h3>
          <span class="card-tag tag">${time_of_delivery} мин</span>
        </div>
        <div class="card-info">
          <div class="rating">
            <img
              src="img/rating.svg"
              alt="Rating"
              class="rating-star"
            />
            ${stars}
          </div>
          <div class="price">От ${price} ₽</div>
          <div class="category">${kitchen}</div>
        </div>
      </div>
    `;

    a.addEventListener('click', (event) => {
      event.preventDefault();
      const link = a.dataset.products;

      localStorage.setItem('restaurant', JSON.stringify(item));

      window.location.href = '/restaurant.html'
    })
    cardsRestaurant.append(a);
  });
};

fetch(`https://test-ef01d-default-rtdb.firebaseio.com/db/partners.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
