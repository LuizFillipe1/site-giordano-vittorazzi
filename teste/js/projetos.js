const galleryItems = document.querySelectorAll('.gallery-items');

galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const hoverText = item.querySelector('.hover-text');
        hoverText.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        const hoverText = item.querySelector('.hover-text');
        hoverText.style.display = 'none';
    });
});