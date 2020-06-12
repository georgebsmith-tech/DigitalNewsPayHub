const menu = document.querySelector("#toggle-menu");
const primaryNav = document.querySelector("#primary-nav");

menu.addEventListener("click", function () {
    primaryNav.classList.remove("nav-close")
    primaryNav.classList.add("nav-open")

})