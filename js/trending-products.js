(async function () {
    const response = await fetch('api/trending-products.json');
    const products = await response.json();

    function renderProducts() {
        const productsContainer = document.querySelector('.trending-products__items');
        productsContainer.innerHTML = "";
        for (const product of products) {
            productsContainer.innerHTML += `
        <article class="trending-products__item">
            <div class="trending-products__img-container">
                <a href="product.html" id ="${product.id}"><img class="trending-products__image" src="${product.img}"
                    alt="${product.title}"></a>
                <h3><a href="#">${product.title}</a></h3>
            </div>
            <p class="trending-products__price">${product.price}</p>
            <button class="trending-products__button button">Add to Cart</button>
        </article>
        `;
        }
    }
    renderProducts();

    $(document).ready(
        sliderTrending());    
})();