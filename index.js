const hamburger = document.querySelector(".hamburger");
const siteNav = document.querySelector(".site-nav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  siteNav.classList.toggle("open");
});
