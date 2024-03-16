var swiper = new Swiper('.home-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
});