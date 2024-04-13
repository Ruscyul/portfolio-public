const slides = document.querySelectorAll(".slider__slide");
const pagination = document.querySelector(".slider__pagination");
const paginationButtonTemplate = document.querySelector(
  "#pagination-button-template"
);
let paginationButtons = null;
const buttonPrevSlide = document.querySelector(".slider__arrow-button-prev");
const buttonNextSlide = document.querySelector(".slider__arrow-button-next");

const projectsSectionTop = document.querySelector("#projects");

let slideNumber = 0;
createPaginationButtons();

function createPaginationButtons() {
  slides.forEach((slide) => {
    let paginationButton = paginationButtonTemplate.content.cloneNode(true);
    pagination.append(paginationButton);
  });
  paginationButtons = document.querySelectorAll(".slider__pagination-button");
  paginationButtons.forEach((button, index) =>
    button.addEventListener("click", () => {
      showSlide(index)
      projectsSectionTop.scrollIntoView()
    })
  );
  paginationButtons[0].classList.add("slider__pagination-button-current");
}

function showSlide(number) {
  slides.forEach((slide) => (slide.style.display = "none"));

  paginationButtons.forEach((button) =>
    button.classList.remove("slider__pagination-button-current")
  );

  slides[number].style.display = "flex";
  paginationButtons[number].classList.add("slider__pagination-button-current");
}

function changeSlide(direction) {
  if (direction === "next") {
    slideNumber++;
    if (slideNumber >= slides.length) {
      slideNumber = 0;
    }
  } else if (direction === "prev") {
    slideNumber--;
    if (slideNumber < 0) {
      slideNumber = slides.length - 1;
    }
  }
  showSlide(slideNumber);
}

buttonPrevSlide.addEventListener("click", () => changeSlide("prev"));
buttonNextSlide.addEventListener("click", () => changeSlide("next"));

