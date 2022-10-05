// (function () { 
// const productContainer = document.querySelector('.trending-products__items'); 
// const itemWidth = document.querySelector('.trending-products__item').getBoundingClientRect().width;
// const nxtBtn = document.querySelector('.trending-products__arrow-img-right');
// const preBtn = document.querySelector('.trending-products__arrow-img-left');
// const nxtBtnSmall = document.querySelector('.trending-products__sm-arrow-right');
// const preBtnSmall = document.querySelector('.trending-products__sm-arrow-left');

// nxtBtnSmall.addEventListener('click', () => {
//     productContainer.scrollLeft += itemWidth + 30;
// });
// preBtnSmall.addEventListener('click', () => {
//     productContainer.scrollLeft -= itemWidth + 30;
// });
// nxtBtn.addEventListener('click', () => {
//     productContainer.scrollLeft += itemWidth + 30;
// });
// preBtn.addEventListener('click', () => {
//     productContainer.scrollLeft -= itemWidth + 30;
// });
// })();

$(document).ready(function() {
    $('.trending-products__items').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        variableWidth: false,
        responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
        ]

    });
});