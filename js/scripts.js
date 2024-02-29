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
var swiper = new Swiper('.home-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,

    // autoplay: {
    //     delay: 2500,
    //     // pauseOnMouseEnter: true,
    // },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    crossFade: true,

    loop: true,
});

// const myCarouselElement = document.querySelector('#carousel')

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//     interval: 7,
// })

// Script depoimentos

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
    // loop: true,
});


// Projetos

const galleryItems = document.querySelectorAll('.gallery-items');

// Adiciona um ouvinte de eventos a cada elemento da galeria
galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Obtém o elemento filho com a classe 'hover-text' dentro do item da galeria
        const hoverText = item.querySelector('.hover-text');
        hoverText.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        const hoverText = item.querySelector('.hover-text');
        hoverText.style.display = 'none';
    });
});

