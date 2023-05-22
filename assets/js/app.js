// (A) SMOOTH SCROLL TO TOP
const totop = () => window.scroll({
    top: 0, left: 0, behavior: "smooth"
});

// (B) SHOW/HIDE BUTTON
const togtop = () => { if (window.scrollY >= 100) {
    document.getElementById("backtop").classList.add("show");
} else {
    document.getElementById("backtop").classList.remove("show");
}};
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);