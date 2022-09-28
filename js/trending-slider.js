const productContainer = document.querySelector('.trending-products__items'); 
const itemWidth = document.querySelector('.trending-products__item').getBoundingClientRect().width;
const nxtBtn = document.querySelector('.trending-products__arrow-img-right');
const preBtn = document.querySelector('.trending-products__arrow-img-left');
const nxtBtnSmall = document.querySelector('.trending-products__sm-arrow-right');
const preBtnSmall = document.querySelector('.trending-products__sm-arrow-left');

nxtBtnSmall.addEventListener('click', () => {
    productContainer.scrollLeft += itemWidth + 30;
});
preBtnSmall.addEventListener('click', () => {
    productContainer.scrollLeft -= itemWidth + 30;
});
nxtBtn.addEventListener('click', () => {
    productContainer.scrollLeft += itemWidth + 30;
});
preBtn.addEventListener('click', () => {
    productContainer.scrollLeft -= itemWidth + 30;
});

