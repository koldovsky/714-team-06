(function() {

    const brandSlides = [
        '<div><img scr="img/applaws.png" alt="Applaws logo"></div>',
        '<div><img scr="img/docas.png" alt="Docas logo"></div>',
        '<div><img scr="img/felix.png" alt="Felix logo"></div>',
        '<div><img scr="img/gourmet.png" alt="Gourmet logo"></div>',
        '<div><img scr="img/purizon.png" alt="Purizon logo"></div>',
        '<div><img scr="img/rocco.png" alt="Rocco logo"></div>',
        '<div><img scr="img/tigerino.png" alt="Tigerino logo"></div>',
    ];

    let currentBrandSlideIdx = 0;

    const brandSlideContainer = document.querySelector('.brands .brand-carousel-slides');

    function renderBrandSlide() {
        brandSlideContainer.innerHTML = brandSlides[currentBrandSlideIdx];
    }

    renderBrandSlide();

})();