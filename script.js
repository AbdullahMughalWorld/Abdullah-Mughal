// Mobile Navigation

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


// Typing Animation

const typingText = document.getElementById("typingText");

const roles = [
    "AI Student",
    "Python Developer",
    "Problem Solver",
    "AI & ML Learner",
    "Technology Enthusiast"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, characterIndex + 1);
        characterIndex++;

        if (characterIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1400);
            return;
        }

    } else {

        typingText.textContent = currentRole.substring(0, characterIndex - 1);
        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();


// Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// Active Navigation Link

const sections = document.querySelectorAll("main section");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


// Dynamic Footer Year

document.getElementById("year").textContent = new Date().getFullYear();
