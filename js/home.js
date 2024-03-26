var swiper = new Swiper('.home-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
});

