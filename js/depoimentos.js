var swiper = new Swiper('.swiper-depoimentos-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    initialSlide: 2,


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
        1500: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
    // loop: true,
});
