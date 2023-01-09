const restaurant = 'tanuki'

const renderItems = (data) => {
  console.log(data);
}

fetch(`https://test-ef01d-default-rtdb.firebaseio.com/db/${restaurant}.json`)
  .then((response) => response.json())
  .then((data) => {
    renderItems(data);
  })
  .catch((error) => {
    console.log(error);
  });
