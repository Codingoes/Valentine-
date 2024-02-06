const carousel = document.querySelector('.carousel');
let counter = 0;
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;

function nextSlide() {
  counter++;
  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}

function prevSlide() {
  counter--;
  carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Add event listeners for next and previous buttons if needed
// Example:
// document.querySelector('.next-btn').addEventListener('click', nextSlide);
// document.querySelector('.prev-btn').addEventListener('click', prevSlide);
