const toggleNav = document.querySelector(".toggle-nav img");
const nav = document.querySelector(".primary-nav nav");
let count = 0;
toggleNav.addEventListener("click", function (e) {
    if (count % 2 === 0) {
        nav.style.display = "block";
        setTimeout(() => {
            nav.style.opacity = 1;
            nav.style.height = "fit-content";
            this.setAttribute("src", "../images/toggle-close1.png");
        }, 200)

        // this.style.width = "35px";
    } else {
        nav.style.height = 0;
        nav.style.opacity = 0;

        this.setAttribute("src", "../images/toggle1.png");
        // this.style.width = "initial";
    }
    count++

})

document.querySelectorAll("nav li").forEach(link => {
    link.addEventListener("click", function (e) {
        link.classList.add("active")
    })
})