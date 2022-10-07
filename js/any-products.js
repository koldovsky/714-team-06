$(document).ready(function() {
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const carousel = $('.carousel_cards');
    const track = $('.slider-track');
    const hamster = $('.hamster_card');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemWidth = carousel.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    hamster.each(function(index, hamster){
        $(hamster).css({
            minWidth: itemWidth,
        });
    });
    

   
    btnNext.click (function() {
        position -= movePosition
    

    track.css({
        transform: `translateX(${position}px)`
    });
    });

    btnPrev.click (function() {
        position += movePosition
    

    track.css({
        transform: `translateX(${position}px)`
    });
    });
});