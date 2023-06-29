const swiper_product = new Swiper('.swiper-product',{
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay:2000,
        // pauseOnMouseEnter: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});