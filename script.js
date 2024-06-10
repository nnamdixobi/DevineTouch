window.addEventListener('load', function() {
    // Ensure the slider starts at the first image when the page loads
    goToSlide(0);
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');

// Variables to track touch start and end positions
let touchStartX = 0;
let touchEndX = 0;

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

// Add event listeners for touch events
slider.addEventListener('touchstart', handleTouchStart, false);
slider.addEventListener('touchmove', handleTouchMove, false);

// Function to handle touch start event
function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

// Function to handle touch move event
function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

// Function to handle touch end event and determine swipe direction
slider.addEventListener('touchend', function (event) {
    if (touchStartX - touchEndX > 50) {
        // Swipe left, scroll to next slide
        nextSlide();
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right, scroll to previous slide
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
        updateSlide();
    }
});
