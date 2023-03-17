const slider = document.getElementById("slider");
const slides = document.querySelector(".slides");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slideWidth = slider.clientWidth;

let currentSlide = 0;

function showSlide(slideIndex) {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = 2;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  if (currentSlide === 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
});