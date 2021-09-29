let hamburguer = document.querySelector(".nav-links-wrapper");
let menuOptions = document.querySelector(".list-links");
let openMenuBtn = document.querySelector("#mobile-menu-cta");
let closeMenuBtn = document.querySelector(".mobile-menu-close");

function toggleMenu() {
  document.querySelector("#mobile-menu-cta").style.display = "none";
  document.querySelector(".nav-links-wrapper").style.display = "block";
}

function closeMenu() {
  document.querySelector("#mobile-menu-cta").style.display = "block";
  document.querySelector(".nav-links-wrapper").style.display = "none";
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", closeMenu);
