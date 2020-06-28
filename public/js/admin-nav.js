const admintoggleNav = document.querySelector("#dashboard-main .toggle-nav2")
const adminnav = document.querySelector(".nav")
const toggleClose = document.querySelector(".toggle-close")


admintoggleNav.addEventListener("click", function () {
    adminnav.style.display = "block"
})

toggleClose.addEventListener("click", function () {
    adminnav.style.display = "none"
})
