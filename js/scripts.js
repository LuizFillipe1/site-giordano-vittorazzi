var swiper = new Swiper('.home-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 2500,
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


    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    loop: true,
});


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

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,

})