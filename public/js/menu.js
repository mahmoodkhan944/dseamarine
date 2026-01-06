const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mainMenu");
const servicesToggle = document.getElementById("servicesToggel");
const servicesMenu = document.getElementById("servicesMenu");

/* HAMBURGER */
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* SERVICES CLICK */
servicesToggle.addEventListener("click", (e) => {
  e.preventDefault();
  servicesMenu.classList.toggle("show");
});

/* STICKY HEADER */
const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});
