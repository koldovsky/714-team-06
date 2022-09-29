(function (){
        
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;

    const slides_container = document.querySelectorAll('.arrivals_cards_container');
    const track = document.querySelector('.slider-track');
    const item  = document.querySelectorAll('.arrivals_cards');
    const btnPrev = document.querySelector('.btn-previous-caroussel');
    const btnNext = document.querySelector('.btn-next-caroussel');
    const itemWidth = slides_container.width / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    btnPrev.addEventListener('click', prevMove);
    btnNext.addEventListener('click', nextMove);

    function prevMove(){
        position--;
        track.css( {transform: `translateX(${position}px)`})
    };
    
    function nextMove(){
        position++;
        track.css( {transform: `translateX(${position}px)`})
    };
})()