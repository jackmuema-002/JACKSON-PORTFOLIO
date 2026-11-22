
// =================================
// JACKSON MUEMA PORTFOLIO
// JAVASCRIPT
// =================================

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}

// ANIMATED PROFESSIONAL TITLES

const typingText = document.getElementById("typing-text");

const titles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Python Developer",
    "Quantitative Researcher"
];

let titleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentTitle = titles[titleIndex];

    if (deleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent = currentTitle.substring(
        0,
        characterIndex
    );

    let speed = deleting ? 45 : 90;

    if (!deleting && characterIndex === currentTitle.length) {

        deleting = true;
        speed = 1600;

    } else if (deleting && characterIndex === 0) {

        deleting = false;

        titleIndex = (titleIndex + 1) % titles.length;

        speed = 400;

    }

    setTimeout(typeEffect, speed);

}

if (typingText) {
    setTimeout(typeEffect, 1200);
}
