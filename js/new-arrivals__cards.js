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
      
      productsContainer.innerHTML += `    
  <article class="arrivals_cards">
      <a class ="link-products" href="product.html?id=${product.id}">  <img class="new_arrivals_photos" 
              src=${product.img} alt="${product.title}" width="329"></a>
      <a class ="link-products" href="product.html"  class="arrivals_cards_name">${product.title}</a>
      <p class="price">$${product.price}</p>
      <p class ="idForLink">${product.id}</p>
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

  // item.addEventListener('click', createURL);
    
  // function createURL(){
  //   const productId= document.querySelector('.idForLink');
  //   let URL = window.location.href;
  //   let myURL = new URL(productId, URL);
  //   console.log(myURL);
  // }

  

  
})();
