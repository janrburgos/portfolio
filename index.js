// nav-list and hamburger menu
const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".site-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  siteNav.classList.toggle("open");
});

// nav-bar to change color when scrolled
const navbar = document.querySelector(".navbar");
const scrollRef = document.querySelector("header");
let distanceToTop = 0;

window.addEventListener("scroll", () => {
  var distanceToTop = scrollRef.getBoundingClientRect().top;
  distanceToTop < 0
    ? (navbar.classList.add("scrolled"), siteNav.classList.add("scrolled"))
    : (navbar.classList.remove("scrolled"),
      siteNav.classList.remove("scrolled"));
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
