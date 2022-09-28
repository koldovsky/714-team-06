(function() {

    const brandSlides = [
        '<div><img src="img/applaws.png" alt="Applaws logo"></div>',
        '<div><img src="img/docas.png" alt="Docas logo"></div>',
        '<div><img src="img/felix.png" alt="Felix logo"></div>',
        '<div><img src="img/gourmet.png" alt="Gourmet logo"></div>',
        '<div><img src="img/purizon.png" alt="Purizon logo"></div>',
        '<div><img src="img/rocco.png" alt="Rocco logo"></div>',
        '<div><img src="img/tigerino.png" alt="Tigerino logo"></div>',
    ];

    let currentBrandSlideIdx = 0;

    const brandSlideContainer = document.querySelector('.brands .brand-carousel-slides');

    function renderBrandSlide() {
        brandSlideContainer.innerHTML = brandSlides[currentBrandSlideIdx];
    }

    function nextBrandSlide() {
        currentBrandSlideIdx = currentBrandSlideIdx + 1 >= brandSlides.length ? 0 : currentBrandSlideIdx + 1;
        renderBrandSlide()
    }
    
   renderBrandSlide() 

/*
    setInterval(nextBrandSlide, 1000);*/

    const brandBtnNext = document.querySelector('.brands .brand-btn-next');
    brandBtnNext.addEventListener('click', nextBrandSlide)

})();