const sliderButtons = document.querySelectorAll(".slider__arrow");
const slider = document.querySelector(".slider");
const removingSliderPicture = document.querySelector(".slider_picture");

sliderButtons.forEach(element => element.addEventListener("click", () => {
slider.classList.toggle("slider-active");
removingSliderPicture.classList.toggle("slider_picture");
}));
