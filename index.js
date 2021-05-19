// nav-list and hamburger menu

const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".site-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  siteNav.classList.toggle("open");
});

// projects details overlay

const overlay = document.querySelector(".details-overlay");
const projects = document.querySelectorAll(".project");
const details = document.querySelectorAll(".details-container");

projects.forEach((project, i) => {
  project.addEventListener("click", () => {
    overlay.classList.add("open");
    details[i].classList.add("open");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("open");
  details.forEach((detail) => {
    detail.classList.remove("open");
  });
});
