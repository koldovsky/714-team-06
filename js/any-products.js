/*$(document).ready(function() {
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
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkButtons();
    });

    btnPrev.click (function() {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkButtons();
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        }); 
    };
   /*const checkButtons = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop(
           'disabled', 
            position <= -(itemsCount - slidesToShow) * itemWidth
        );
    };*/

   /* $('.slider-track').slick({
      
      slidesToShow: 4,
      slidesToScroll: 1,
      });
    checkButtons();
});*/

$('.sliders-track').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
  });