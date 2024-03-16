var swiper = new Swiper('.swiper-depoimentos-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1220: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
});
