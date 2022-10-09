(async function () {
  await fetch("../api/new-arrivals-products.json")
    .then((res) => res.json())
    .then((data) => renderProducts(data));

  function renderProducts(products) {
    const productsContainer = document.querySelector(
      ".arrivals_cards_container"
    );
    productsContainer.innerHTML = " ";
    for (const product of products) {
      // let productURL = new URL(`${product.url}`);
      productsContainer.innerHTML += `    
  <article class="arrivals_cards">
      <a href=product.html><img class="new_arrivals_photos" 
              src=${product.img} alt="${product.title}" width="329"></a>
      <a href="product.html"  class="arrivals_cards_name">${product.title}</a>
      <p class="price">$${product.price}</p>
      <button class="button" type="submit">Add to Card</button>
  </article>`;
    }
  }

  const slidesContainer = document.querySelector(".arrivals_cards_container");
  const btnPrev = document.querySelector(".btn-previous-caroussel");
  const btnNext = document.querySelector(".btn-next-caroussel");
  const item = document.querySelector(".arrivals_cards");
  const itemWidth = item.getBoundingClientRect().width + 60;

  btnPrev.addEventListener("click", prevMove);
  btnNext.addEventListener("click", nextMove);

  function prevMove() {
    slidesContainer.scrollLeft -= itemWidth;
  }

  function nextMove() {
    slidesContainer.scrollLeft += itemWidth;
  }
})();
