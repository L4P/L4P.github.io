new Swiper('.img-slider', {
    
    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewpoint: true,
    },

    slidesPerView: 'auto',

    spaceBetween: 50,

    centeredSlides: true,

    initialSlide: 1,

    loop: true,

    loopedSlides: 4,

    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 800,

    breakpoints: {
        645: {
            slidesPerView: 2
        },
        980: {
            slidesPerView: 3
        },
        1315: {
            slidesPerView: 4
        },
        1650: {
            slidesPerView: 5
        },
    },
});