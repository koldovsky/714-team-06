const productContainers = [...document.querySelectorAll('.trending-products__items')];
const nxtBtn = [...document.querySelectorAll('.trending-products__arrow-img-right')];
const preBtn = [...document.querySelectorAll('.trending-products__arrow-img-left')];
const nxtBtnSmall = [...document.querySelectorAll('.trending-products__sm-arrow-right')];
const preBtnSmall = [...document.querySelectorAll('.trending-products__sm-arrow-left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

    nxtBtnSmall[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnSmall[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})