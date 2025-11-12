document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navCloseBtn = document.querySelector('.nav-close-btn');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to update navbar scrolled state on page scroll
    function handleScroll() {
        const scrollPosition = window.scrollY;
        const topThreshold = 50;

        if (scrollPosition > topThreshold) {
            navbar.classList.add("scrolled");
        } else {
            // Only remove "scrolled" if menu is not active
            if (!navMenu.classList.contains("active")) {
                navbar.classList.remove("scrolled");
            }
        }
    }

    // Scroll event to trigger navbar style update
    window.addEventListener("scroll", handleScroll);

    // Toggle mobile menu open/close
    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        // Always keep navbar scrolled if menu is open
        if (navMenu.classList.contains("active")) {
            navbar.classList.add("scrolled");
        } else if (window.scrollY < 50) {
            navbar.classList.remove("scrolled");
        }
    }

    hamburger.addEventListener("click", mobileMenu);

    // Close mobile menu when clicking close button (if exists)
    if (navCloseBtn) {
        navCloseBtn.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            // Remove scrolled only if scroll position is near top
            if (window.scrollY < 50) {
                navbar.classList.remove("scrolled");
            }
        });
    }

    // Close mobile menu when nav links clicked
    navLinks.forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        if (window.scrollY < 50) {
            navbar.classList.remove("scrolled");
        }
    }));
});
