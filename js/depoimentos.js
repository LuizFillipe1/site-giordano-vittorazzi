var swiper = new Swiper('.swiper-depoimentos-container', {
    slidesPerView: 1,
    spaceBetween: 10,



    // centeredSlides: true,
    // autoplay: {
    //     delay: 2000,
    //     pauseOnMouseEnter: true,
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1450: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        945: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    }
    // loop: true,
});
