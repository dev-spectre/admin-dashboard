const navOpenButton = document.querySelector(".menu");
navOpenButton.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("close");
})

const navCloseButton = document.querySelector(".nav__close");
navCloseButton.addEventListener("click", () => {
  const nav = document.querySelector(".nav");
  nav.classList.add("close");
})