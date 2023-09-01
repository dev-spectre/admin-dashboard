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