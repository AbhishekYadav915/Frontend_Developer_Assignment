// fetch("https://api.tvmaze.com/search/shows?q=cars")
// // .then(res=>console.log(result))
// .then(res=>{
//   const data = res.shows
// })
// .catch(error=> console.log(error))


async function fetchShows() {
  try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=cars');
      const data = await response.json();
      displayShows(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

function displayShows(shows) {
  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = ''; // Clear any existing content

  shows.forEach(showData => {
      const show = showData.show;
      const oldPrice = 4999;
      const newPrice = Math.floor(Math.random() * 1000) + 3000; // Random new price between 3000 and 3999

      const cardHTML = `
          <div class="price-card">
              <h5>${show.name}</h5>
              <p>${show.genres.join(', ') || 'Genre not specified'}</p>
              <p class="old-price">Price: ${oldPrice}/-</p>
              <p class="new-price">${newPrice}/-</p>
              <button class="btn btn-primary card-1">Click</button>
          </div>
      `;

      cardContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
}

// Fetch data when the page loads
fetchShows();