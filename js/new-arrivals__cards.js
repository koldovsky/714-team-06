  (async function () {
    

    const response = await fetch('api/new-arrivals-products.json');
    const products=  await response.json();
    renderProducts(products);

    

  //   [
  //     {
  //        "id":1,
  //        "img":"img/img__new_arrivals/woven_toy.png",
  //        "title":"DUNA Woven Toy",
  //        "price":"1,50"
  //     },
  //     {
  //        "id":2,
  //        "img":"img/img__new_arrivals/butterfly_toy.png",
  //        "title":"DUNA EGO Butterfly Toy",
  //        "price":"8,00"
  //     },
  //     {
  //        "id":3,
  //        "img":"img/img__new_arrivals/plastic_bowl.png",
  //        "title":"OPTY Plastic Bowl",
  //        "price":"2,00"
  //     },
  //     {
  //        "id":4,
  //        "img":"img/img__new_arrivals/woven_leash.png",
  //        "title":"SERA Woven Leash",
  //        "price":"2,00"
  //     },
  //     {
  //        "id":5,
  //        "img":"img/img__new_arrivals/crunch_sticks_treat.png",
  //        "title":"VITALIFE Crunch Sticks Treat",
  //        "price":"5,00"
  //     }
  //  ];

    
    function renderProducts(products) {
     const productsContainer = document.querySelector(".arrivals_cards_container");
      productsContainer.innerHTML = " ";
      for (const product of products) {
        productsContainer.innerHTML += `    
      
  <article class="arrivals_cards">
      <a href="product.html"><img class="new_arrivals_photos"
              src=${product.img} alt="${product.title}" width="329"></a>
      <a href="product.html" class="arrivals_cards_name">${product.title}</a>
      <p class="price">$${product.price}</p>
      <button class="button" type="submit">Add to Card</button>
  </article>`;
      }
    }
     
  })();
  
  

  
  