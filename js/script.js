const navOpenButton = document.querySelector(".menu");
navOpenButton.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("close");
});

const navCloseButton = document.querySelector(".nav__close");
navCloseButton.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.add("close");
});

const collapseButtons = document.querySelectorAll(".collapse");
collapseButtons.forEach(collapseButton => {
  collapseButton.addEventListener("click", () => {
    collapseButton.classList.toggle("collapsed");
    const cardSection = collapseButton.parentElement.nextElementSibling;
    cardSection.classList.toggle("hidden");
  });
});

const nav = document.querySelector(".nav");
let touchStart;
nav.addEventListener("touchmove", (e) => {
  touchStart = touchStart ?? e.touches[0].clientX;
  touchLength = touchStart - e.touches[0].clientX;
  if (touchLength > 70) nav.classList.add("close");
});

nav.addEventListener("touchend", () => touchStart = null);