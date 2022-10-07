(async function () {
    await fetch("../api/index-product.json")
    .then ( res => res.json())
    .then (data => renderProducts(data));


    function renderProducts(products) {
      const productsContainer = document.querySelector(
        ".main-info_product_container"
      );
      productsContainer.innerHTML = " ";
      for (const product of products) {
        if(product.product_code === 45){
        
            productsContainer.innerHTML = `    
        <div class="img_product_container">
        <div class="product_main_photo_nav">
            <svg class="arrow" width="14" height="26" viewBox="0 0 14 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 2L1.5 13L12.5 24" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="square"></path>
            </svg>
            <img src="${product.img}" alt="${product.title}" class="product_big_img">

            <svg class="arrow" width="14" height="26" viewBox="0 0 14 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 24L12.5 13L1.5 2" stroke="#464C5C" stroke-width="2" stroke-miterlimit="10"
                    stroke-linecap="square"></path>
            </svg>
        </div>

        <img src="${product.img}" alt="${product.title}" class="product_small_img">
    </div>

    <div class="product_info_and_price_container">
        <div class="product_info">
            <h2 class="status">${product.inStock}</h2>
            <div class="product_name">
                <h1>${product.title}(2321)</h1>
            </div>
            <span class="product_code">Product code ${product.product_code}</span>
            <p class="price_product-page">$${product.price}</p>
        </div>
        <hr>
        <div class="order_line">
            <div class="quantity_inner">
                <input class="change_number quantity" type="text" value="1">
                <button class="bt_plus">
                    <svg viewBox="0 0 24 24">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </button>
                <button class="bt_minus">
                    <svg viewBox="0 0 24 24">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
            </div>
            <button class="add_to_card_btn">Add to card</button>
        </div>
        <div class="product_description">
            <button class="tablink">DESCRIPTION</button>
            <hr>
            <p class="description_product_text">${product.description}</p>
        </div>
    </div>`;
}}}


        const btnPlus = document.querySelector(".bt_plus");
        const btnMinus = document.querySelector(".bt_minus");
        const inpt = document.querySelector(".quantity");
        
        function funcAdd() {
          inpt.value = +inpt.value + 1;
        }
        
        function funcExstr() {
          const value = parseInt(inpt.value);
        
          if (value > 0) {
            inpt.value = +inpt.value - 1;
          }
        }
        
        btnPlus.addEventListener("click", funcAdd);
        btnMinus.addEventListener("click", funcExstr);     

}
    )();