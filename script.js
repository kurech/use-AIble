let currentSlide = 0;
const totalSlides = 3;
let autoSlideInterval;

function moveSlider(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slideWidth = 100 / totalSlides;
    document.querySelector('.keys-slider').style.setProperty('--slide', currentSlide * slideWidth);
}

function startAutoSlide(interval = 5000) {
    autoSlideInterval = setInterval(() => {
        moveSlider(1);
    }, interval);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

document.querySelector('.keys-slider').addEventListener('mouseenter', stopAutoSlide);

document.querySelector('.keys-slider').addEventListener('mouseleave', () => startAutoSlide());