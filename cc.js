// Toggle Fullscreen Menu
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const fullscreenMenu = document.getElementById("fullscreen-menu");

// Open the menu when the hamburger icon is clicked
menuIcon.addEventListener("click", () => {
  fullscreenMenu.classList.add("active");
});

// Close the menu when the close icon is clicked
closeIcon.addEventListener("click", () => {
  fullscreenMenu.classList.remove("active");
});
