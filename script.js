// Premium portfolio interactions — vanilla JS, no extra libraries

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Typing headline
const typingText = document.getElementById("typingText");
const roles = ["AI Student", "Python Developer", "Problem Solver", "AI & ML Learner", "Technology Enthusiast"];
let roleIndex = 0, characterIndex = 0, deleting = false;

function typeEffect() {
  if (!typingText) return;
  const role = roles[roleIndex];
  characterIndex += deleting ? -1 : 1;
  typingText.textContent = role.substring(0, characterIndex);

  if (!deleting && characterIndex === role.length) {
    deleting = true;
    window.setTimeout(typeEffect, 1350);
    return;
  }
  if (deleting && characterIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  window.setTimeout(typeEffect, deleting ? 42 : 82);
}
typeEffect();

// Reveal on scroll (fallback gracefully if IntersectionObserver is unavailable)
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => revealObserver.observe(el));
} else {
  revealElements.forEach(el => el.classList.add("visible"));
}

// Active navigation section
const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");
const updateActiveLink = () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });
  navigationLinks.forEach(link => {
    const active = link.getAttribute("href") === "#" + current;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
};
window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

// Subtle 3D tilt on the hero identity card (disabled for touch/reduced motion)
const heroVisual = document.querySelector(".hero-visual");
const profileCard = document.querySelector(".profile-card");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (heroVisual && profileCard && finePointer && !reduceMotion) {
  heroVisual.addEventListener("pointermove", event => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    profileCard.style.transform = `rotateY(${x * 18 - 8}deg) rotateX(${-y * 12 + 4}deg) translateZ(8px)`;
  });
  heroVisual.addEventListener("pointerleave", () => {
    profileCard.style.transform = "";
  });
}

// Gentle project-card tilt; only on mouse/trackpad devices
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const r = card.getBoundingClientRect();
      const x = (event.clientX - r.left) / r.width - 0.5;
      const y = (event.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-7px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Dynamic footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
