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