(function() {

    const brandSlides = [
        '<div><img scr="/workspace/714-team-06/img/aquarium.png" alt="Applaws logo"></div>',
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

    function nextBrandSlide() {
        currentBrandSlideIdx = currentBrandSlideIdx + 1 >= brandSlides.length ? 0 : currentBrandSlideIdx + 1;
        renderBrandSlide()
    }
    


    setInterval(nextBrandSlide, 1000);

})();