function toggleMenu() {
  const menu = document.getElementById("menuDropdown");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Close menu when clicking outside
document.addEventListener("click", function(e) {
  const menu = document.getElementById("menuDropdown");
  const button = document.querySelector(".menu-btn");

  if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
    menu.style.display = "none";
  }
});
