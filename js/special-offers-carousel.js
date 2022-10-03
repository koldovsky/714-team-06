(function() {

    const brandSlides = [
        '<div class="brand_img_container"><img class="brand_img" src="img/applaws.png" alt="Applaws logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/docas.png" alt="Docas logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/felix.png" alt="Felix logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/gourmet.png" alt="Gourmet logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/purizon.png" alt="Purizon logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/rocco.png" alt="Rocco logo"></div>',
        '<div class="brand_img_container"><img class="brand_img" src="img/tigerino.png" alt="Tigerino logo"></div>',
    ];

    let currentBrandSlideIdx = 0;

    const brandSlideContainer = document.querySelector('.brands .brand-carousel-slides');

    function renderBrandSlide() {
        brandSlideContainer.innerHTML = brandSlides[currentBrandSlideIdx];
            if (window.innerWidth > 768) {
                const secondBrandSlideIdx = currentBrandSlideIdx + 1 >= brandSlides.length ? 0 : currentBrandSlideIdx + 1 >= brandSlides.length ? 0 : currentBrandSlideIdx + 1;
                brandSlideContainer.innerHTML += brandSlides[secondBrandSlideIdx];
                const thirdBrandSlideIdx = secondBrandSlideIdx + 1 >= brandSlides.length ? 0: secondBrandSlideIdx + 1 >= brandSlides.length ? 0 : secondBrandSlideIdx + 1;
                brandSlideContainer.innerHTML += brandSlides[thirdBrandSlideIdx];
                if (window.innerWidth > 900) {
                    const fourthBrandSlideIdx = thirdBrandSlideIdx + 1 >= brandSlides.length ? 0: thirdBrandSlideIdx + 1 >= brandSlides.length ? 0 : thirdBrandSlideIdx + 1;
                    brandSlideContainer.innerHTML += brandSlides[fourthBrandSlideIdx]; 
                    const fifthBrandSlideIdx = fourthBrandSlideIdx + 1 >= brandSlides.length ? 0: fourthBrandSlideIdx + 1 >= brandSlides.length ? 0 : fourthBrandSlideIdx + 1;
                    brandSlideContainer.innerHTML += brandSlides[fifthBrandSlideIdx]; 
                    const sixthBrandSlideIdx = fifthBrandSlideIdx + 1 >= brandSlides.length ? 0: fifthBrandSlideIdx + 1 >= brandSlides.length ? 0 : fifthBrandSlideIdx + 1;
                    brandSlideContainer.innerHTML += brandSlides[sixthBrandSlideIdx]; 
                }
            }
        }


    function nextBrandSlide() {
        currentBrandSlideIdx = currentBrandSlideIdx + 1 >= brandSlides.length ? 0 : currentBrandSlideIdx + 1;
        renderBrandSlide();
    }

    function previousBrandSlide() {
        currentBrandSlideIdx = currentBrandSlideIdx - 1 <0 ? brandSlides.length - 1 : currentBrandSlideIdx - 1;
        renderBrandSlide();
    }
    
   renderBrandSlide() 

    const brandBtnNext = document.querySelector('.brands .brand-btn-next');
    brandBtnNext.addEventListener('click', nextBrandSlide);
    
    const brandBtnPrevious = document.querySelector('.brands .brand-btn-previous');
    brandBtnPrevious.addEventListener('click', previousBrandSlide);

})();