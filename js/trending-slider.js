function sliderTrending() {
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
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            }
        ]
    });
}

