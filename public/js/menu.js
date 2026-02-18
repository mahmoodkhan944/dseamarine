const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mainMenu");

const servicesToggle = document.getElementById("servicesToggle");
const servicesMenu = document.getElementById("servicesMenu");
const dropdown = servicesToggle.closest(".dropdown");

const header = document.getElementById("siteHeader");

/* ================= HAMBURGER ================= */
hamburger.addEventListener("click", function () {
  menu.classList.toggle("show");
});

/* ================= SERVICES CLICK ================= */
servicesToggle.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (servicesMenu.classList.contains("show")) {
    // Close manually
    servicesMenu.classList.remove("show");
    servicesMenu.classList.add("clicked");
  } else {
    // Open manually
    servicesMenu.classList.add("show");
    servicesMenu.classList.remove("clicked");
  }
});

/* ================= OUTSIDE CLICK ================= */
document.addEventListener("click", function (e) {

  if (!dropdown.contains(e.target)) {
    servicesMenu.classList.remove("show");
    servicesMenu.classList.remove("clicked");
  }

});

/* ================= MOBILE AUTO CLOSE ================= */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", function () {

    if (this.id !== "servicesToggle" && window.innerWidth <= 768) {
      menu.classList.remove("show");
      servicesMenu.classList.remove("show");
    }

  });
});

/* ================= STICKY HEADER ================= */
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});
