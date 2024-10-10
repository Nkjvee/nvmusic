function toggleMenu() {
  var menu = document.querySelector(".menu-items");
  var icon = document.querySelector(".icon");
  var header = document.querySelector("header");
  var logo = document.querySelector(".nav-item");
  var navItem = document.querySelector("nav-item");

  // Toggle the 'active' class to show/hide menu
  menu.classList.toggle("active");

  // Hide the hamburger icon and logo when the menu is active, show them when inactive
  if (menu.classList.contains("active")) {
    icon.style.display = "none"; // Hide icon when menu is open
    logo.style.display = "none";
  } else {
    icon.style.display = "block"; // Show icon when menu is closed
  }
}

function reqSubmit() {
  alert("Your contact request has been submitted successfully.");
}
