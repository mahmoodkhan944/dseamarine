document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("mainMenu");
  const overlay = document.getElementById("menuOverlay");
  const servicesToggle = document.getElementById("servicesToggle");
  const servicesMenu = document.getElementById("servicesMenu");

  if (!hamburger || !menu || !overlay) return;

  function openMenu() {
    menu.classList.add("show");
    overlay.classList.add("show");
    hamburger.innerHTML = "✖";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.innerHTML = "☰";
    document.body.style.overflow = "";
    if (servicesMenu) servicesMenu.classList.remove("show");
  }

  /* Hamburger */
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.contains("show") ? closeMenu() : openMenu();
  });

  /* Overlay */
  overlay.addEventListener("click", closeMenu);

  /* ✅ Services Dropdown (STOP menu close) */
  if (servicesToggle && servicesMenu) {
    servicesToggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();              // 🔥 IMPORTANT
      servicesMenu.classList.toggle("show");
    });
  }

  /* ✅ Close menu ONLY on real navigation links */
  document.querySelectorAll(".menu > li > a").forEach(link => {
    if (link.id !== "servicesToggle") {
      link.addEventListener("click", closeMenu);
    }
  });
});
