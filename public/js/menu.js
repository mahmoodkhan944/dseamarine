const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("mainMenu");
const servicesToggle = document.getElementById("servicesToggle");
const servicesMenu = document.getElementById("servicesMenu");
const header = document.getElementById("siteHeader");

/* Hamburger */
hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* Services dropdown click */
servicesToggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  servicesMenu.classList.toggle("show");
});

/* Click outside close */
document.addEventListener("click", (e) => {
  if (
    !servicesToggle.contains(e.target) &&
    !servicesMenu.contains(e.target)
  ) {
    servicesMenu.classList.remove("show");
  }
});

/* Auto close menu */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {

    // Services toggle par menu close nahi hoga
    if (link.id !== "servicesToggle") {
      menu.classList.remove("show");
      servicesMenu.classList.remove("show");
    }

  });
});


/* Sticky header */
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});
