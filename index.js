let currentSlide = 0;
const slides = document.querySelector('.slider');
const totalSlides = document.querySelectorAll('.slide').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateSlide() {
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
    updateSlide();
});

// // Optional: Auto slide every 3 seconds
// setInterval(() => {
//     currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
//     updateSlide();
// }, 3000);