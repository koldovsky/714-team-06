(function(){
  const productsForDogs = [
    {
      title: "DOGGY Fun Set",
      img: "img/doggy-fun-set.png",
      price: 6.00
    },
    {
      title: "DUNA Pillow Bed",
      img: "img/duna-pillow-bed.png",
      price: 10.00
    },
    {
      title: "AGA Retractable Leash",
      img: "img/aga-retractable-leash.png",
      price: 33.00
    },
    {
      title: "DOGGY 2-Bunch Toy",
      img: "img/doggy-two-bunch-toy.png",
      price: 5.00
    },
  ];

  function renderProductsForDogs(productsForDogs) {
    const productsForDogsContainer = document.querySelector('.products__for-dogs');
    productsForDogsContainer.innerHTML = '';
    for (const product of productsForDogs) {
      productsForDogsContainer.innerHTML += `
      <article class="product__item">
        <a href="#"><img class="product__img" src="${product.img}" alt="${product.title}"></a>
        <h3><a href="#">${product.title}</a></h3>
        <p class="price">$${product.price}</p>
        <button type="button" class="button">Add to Cart</button>
      </article>`;
    }
  }

  renderProductsForDogs(productsForDogs);
})();