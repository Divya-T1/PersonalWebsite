function toggleMenu() {
    const side = document.querySelector(".side-menu");
    const icon = document.querySelector(".hamburger-icon");
    side.classList.toggle("open");
    icon.classList.toggle("open");
}