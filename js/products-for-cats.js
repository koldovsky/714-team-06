(async function(){
  const response = await fetch('api/products-for-cats.json');
  const productsForCats = await response.json();

  function renderProductsForCats(productsForCats) {
    const productsForCatsContainer = document.querySelector('.products__for-cats');
    productsForCatsContainer.innerHTML = '';
    for (const product of productsForCats) {
      productsForCatsContainer.innerHTML += `
      <article class="product__item">
        <a href="product.html?id=${product.id}"><img class="product__img" src="${product.img}" alt="${product.title}"></a>
        <h3><a href="#">${product.title}</a></h3>
        <p class="price">$${product.price}</p>
        <button type="button" class="button">Add to Cart</button>
      </article>`;
    }
  }

  renderProductsForCats(productsForCats);
})();