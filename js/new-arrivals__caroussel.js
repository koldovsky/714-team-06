  
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;

    const slidesContainer = document.querySelectorAll('.arrivals_cards_container');
    const track = document.querySelector('.slider-track');
    const item  = document.querySelectorAll('.arrivals_cards');
    const btnPrev = document.querySelector('.btn-previous-caroussel');
    const btnNext = document.querySelector('.btn-next-caroussel');
    const movePosition = slidesToScroll * 30;

    btnPrev.addEventListener('click', prevMove);
    btnNext.addEventListener('click', nextMove);

    function prevMove(){
        slidesContainer.scrollRight += 30;
    };
    
    function nextMove(){
        slidesContainer.scrollLeft += 30;
    };