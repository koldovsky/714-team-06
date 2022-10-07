$(document).ready(function() {
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const carousel = $('.carousel_cards');
    const track = $('.slider-track');
    const hamster = $('.hamster_card');
    const btnPrev = $('.btn-prev');
    const btnNext = $('.btn-next');
    const itemsCount = hamster.length;
    const itemWidth = carousel.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    hamster.each(function(index, hamster){
        $(hamster).css({
            minWidth: itemWidth,
        });
    });
    

   
    btnNext.click (function() {
        //const itemsLeft

        position -= movePosition
        setPosition();
        checkButtons();
    });

    btnPrev.click (function() {
        position += movePosition

        setPosition();
        checkButtons();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        }); 
    };
    const checkButtons = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
           'disabled', 
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };

    checkButtons();
});