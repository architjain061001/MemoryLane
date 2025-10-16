//     --primary: #FAF8F5;
//     --secondary: #3E4045;
//     --highlightB: #896B60;
//     --highlightG: #848A67;

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navMenu = document.querySelector(".nav-menu");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to handle scrolling
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const topThreshold = 50; // Change this value as needed

        if (scrollPosition > topThreshold) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Rest of your menu toggle logic
    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        if (navMenu.classList.contains("active")) {
            navbar.classList.add("scrolled");
        } else if (window.scrollY < 50) {
            navbar.classList.remove("scrolled");
        }
    }

    navLinks.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navbar.classList.remove("scrolled");
    }
});
