// script.js
let slideIndex = 0;
let slideInterval;

const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    const slidesCount = document.querySelectorAll('.slides img').length;
    if (index >= slidesCount) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slidesCount - 1;
    } else {
        slideIndex = index;
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
    updateIndicators();
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === slideIndex);
    });
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4000);
}

function pauseSlider() {
    clearInterval(slideInterval);
}

document.querySelector('.slider').addEventListener('mouseenter', pauseSlider);
document.querySelector('.slider').addEventListener('mouseleave', startSlider);

function currentSlide(index) {
    showSlide(index);
}

startSlider();
