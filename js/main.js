$(function() {
    $('.fairy-tale__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });

    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-back.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});