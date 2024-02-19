const menuButton = document.getElementById("menu-button")
const mobileMenu = document.getElementById("mobile-menu")
let menuState = false

menuButton.addEventListener("click", () => {
    if (menuState == false) {
        mobileMenu.classList.add("active")
        menuState = true
    } else {
        mobileMenu.classList.remove("active")
        menuState = false
    }
})
