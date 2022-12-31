let menu = document.querySelector(".menuBar");
let hamburger = document.querySelector(".hamburgerMenu");

menu.addEventListener("click", function () {
    hamburger.classList.toggle("pop");
});
