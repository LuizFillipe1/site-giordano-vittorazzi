document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000, // Tempo em milissegundos entre as transições
            disableOnInteraction: false // Permite que a reprodução automática continue mesmo se o usuário interagir com o carrossel
        },
        loop: true,
        effect: 'fade', // Adiciona um efeito de fade
        fadeEffect: {
            crossFade: true // Ativa a transição de fade
        }
    });
});

// Obtém o tamanho da tela
var larguraTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var alturaTela = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// Exibe o tamanho da tela no console
console.log('Largura da tela: ' + larguraTela + ' pixels');
console.log('Altura da tela: ' + alturaTela + ' pixels');

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-depoimentos-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000, // Tempo em milissegundos entre as transições
            disableOnInteraction: false // Permite que a reprodução automática continue mesmo se o usuário interagir com o carrossel
        },
        // loop: true,

        effect: 'fade', // Adiciona um efeito de fade
        fadeEffect: {
            crossFade: true // Ativa a transição de fade
        }
    });
});
