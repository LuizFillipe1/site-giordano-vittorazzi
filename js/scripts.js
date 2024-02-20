// Script home

// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 3,
//         spaceBetween: 10,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         },
//         autoplay: {
//             delay: 3000, // Tempo em milissegundos entre as transições
//             disableOnInteraction: false // Permite que a reprodução automática continue mesmo se o usuário interagir com o carrossel
//         },
//         loop: true,
//         effect: 'fade', // Adiciona um efeito de fade
//         fadeEffect: {
//             crossFade: true // Ativa a transição de fade
//         }
//     });
// });
var swiper = new Swiper('.swiper-home-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        // pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
    loop: true,
});





// Script depoimentos

var swiper = new Swiper('.swiper-depoimentos-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 20,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
