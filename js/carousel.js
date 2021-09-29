const tracker = document.querySelector(".carousel__tracker");
const slides = Array.from(tracker.children);
const leftButton = document.querySelector(".carousel__button--left");
const rightButton = document.querySelector(".carousel__button--right");
const carouselNav = document.querySelector(".carousel__nav");
const navDots = Array.from(carouselNav.children);

// Get the width from slides picking just one of the slides
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange every slide next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

const moveSlidesTo = (tracker, currentSlide, targetSlide) => {
  tracker.style.transform = `translateX(-${targetSlide.style.left})`;

  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const showHideArrowsNav = (slides, leftButton, rightButton, targetIndex) => {
  if (targetIndex === 0) {
    leftButton.classList.add("is-hidden");
    rightButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    leftButton.classList.remove("is-hidden");
    rightButton.classList.add("is-hidden");
  } else {
    leftButton.classList.remove("is-hidden");
    rightButton.classList.remove("is-hidden");
  }
};

// When click the right button move slides to the left

rightButton.addEventListener("click", (evt) => {
  const currentSlide = tracker.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = carouselNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveSlidesTo(tracker, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);

  showHideArrowsNav(slides, leftButton, rightButton, nextIndex);
});

// When click the left button move slides to the right

leftButton.addEventListener("click", (evt) => {
  const currentSlide = tracker.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;
  const currentDot = carouselNav.querySelector(".current-slide");
  const previousDot = currentDot.previousElementSibling;
  const previousIndex = slides.findIndex((slide) => slide === previousSlide);

  moveSlidesTo(tracker, currentSlide, previousSlide);
  updateDots(currentDot, previousDot);

  showHideArrowsNav(slides, leftButton, rightButton, previousIndex);
});

// When click de dot slide indicator move slides to that
// position

carouselNav.addEventListener("click", (evt) => {
  const targetDot = evt.target.closest("button");

  if (!targetDot) {
    return undefined;
  }

  const currentSlide = tracker.querySelector(".current-slide");
  const currentDot = carouselNav.querySelector(".current-slide");
  const targetIndex = navDots.findIndex((navDot) => navDot === targetDot);
  const targetSlide = slides[targetIndex];

  moveSlidesTo(tracker, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  showHideArrowsNav(slides, leftButton, rightButton, targetIndex);
});
