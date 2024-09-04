document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelector('.photo-album-images');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let index = 0;

    function updateTransform() {
        images.style.transform = `translateX(${-index * 131}%)`;
    }

    rightArrow.addEventListener('click', function() {
        if (index < images.children.length - 1) {
            index++;
            updateTransform();
        }
    });

    leftArrow.addEventListener('click', function() {
        if (index > 0) {
            index--;
            updateTransform();
        }
    });
});