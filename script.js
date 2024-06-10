let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

function updateSlide() {
    const slideWidth = slider.clientWidth;
    const offset = currentSlide * slideWidth;
    slider.scrollTo({ left: offset, behavior: 'smooth' });
}

function nextSlide() {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateSlide();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateSlide();
}

function autoSlide() {
    nextSlide();
}

// Set interval for automatic slide change every 10 seconds
setInterval(autoSlide, 10000);
