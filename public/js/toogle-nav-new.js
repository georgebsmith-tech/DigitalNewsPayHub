(function () {
    const toggleNavHandler = document.querySelector(".toggle-nav-main")
    const toggleNav = document.querySelector(".primary-nav-mobile-container")
    const brand = document.querySelector(".logo-and-caption")
    gsap.set(".primary-nav-mobile-container", { y: "-340px", position: "absolute", zIndex: -20, backgroundColor: "white" })
    let tl = gsap.timeline()
    let toggleFlag = false
    // brand.style.marginTop = "0px"
    toggleNavHandler.addEventListener("click", function () {

        if (!toggleFlag) {
            // brand.style.marginTop = "220px";
            tl.to(".primary-nav-mobile-container", 1.2, { y: "-90", zIndex: 10 })
                .fromTo(".primary-nav-mobile>ul>li>a", 1, { x: "-120" }, { x: "0" }, 0.8)
                .to(".toggle-nav-main>div:nth-child(2)", 0.6, { opacity: 0 }, 0.6)
                .to(".toggle-nav-main>div:first-child", 0.6, { y: 5.5, rotation: 45 }, 0.6)
                .to(".toggle-nav-main>div:last-child", 0.6, { y: -5.5, rotation: -45 }, 0.6)
                .to(".logo-and-caption .brand-name", 1, { scale: 0.3, y: -120, x: -65, color: "white", position: "relative", zIndex: 120 }, 0)
            toggleFlag = !toggleFlag
        } else {
            tl.reverse()
            toggleFlag = !toggleFlag
            tl = gsap.timeline()
            subMenmenucategoriesuHandler.classList.add("hide")
            document.querySelector(".sub-menu-control i").classList.add("fa-caret-right")
            document.querySelector(".sub-menu-control i").classList.remove("fa-caret-down")
        }
        // console.log(toggleFlag)

    })

    const subMenuHandler = document.querySelector(".sub-menu-control")
    const subMenmenucategoriesuHandler = document.querySelector(".menu-categories")
    document.querySelector(".menu-categories ul").style.paddingLeft = "12px"
    // const categoryToggleFlag=false
    subMenuHandler.addEventListener("click", function () {
        document.querySelector(".sub-menu-control i").classList.toggle("fa-caret-right")
        document.querySelector(".sub-menu-control i").classList.toggle("fa-caret-down")
        subMenmenucategoriesuHandler.classList.toggle("hide")
        // if(!categoryToggleFlag){
        console.log("clicked!!")



        // }

    })

    const tl1 = gsap.timeline()
    tl1.fromTo(".dnpay", 1, { opacity: 0, scale: 0, }, { opacity: 1, scale: 2.5, })
        .to(".dnpay", 1.5, { y: "-60vh" })
        .to(".dnpay", { display: "none" })
        .to(".layer-1", { duration: 1, y: "-100vh" }, 1.5)
        .to(".layer-2", { duration: 1, y: "-100vh" }, 2)
        .to(".layer-3", { duration: 1, y: "-100vh" }, 2.5)
        .to(".overlay", { display: "none" })
})()




