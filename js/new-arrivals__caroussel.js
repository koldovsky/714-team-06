  
    (function() {

    const slidesContainer = document.querySelector('.arrivals_cards_container');
    const item  = document.querySelector('.arrivals_cards');
    const btnPrev = document.querySelector('.btn-previous-caroussel');
    const btnNext = document.querySelector('.btn-next-caroussel');
    const itemWidth = item.getBoundingClientRect().width + 60;

    btnPrev.addEventListener('click', prevMove);
    btnNext.addEventListener('click', nextMove);

    function prevMove(){
        slidesContainer.scrollLeft -= itemWidth; 
    }
    
    function nextMove(){
        slidesContainer.scrollLeft += itemWidth;
    }
})();