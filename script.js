// Accessible navigation, active section tracking and lightweight motion.
const menuToggle = document.getElementById("menuToggle");
const primaryNav = document.getElementById("primaryNav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function closeMenu() {
  if (!menuToggle || !primaryNav) return;
  primaryNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle?.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  primaryNav?.classList.toggle("open", open);
});

navLinks.forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeMenu();
});

// Typewriter headline. Reduced-motion users receive a stable title.
const typingText = document.getElementById("typingText");
const roles = ["AI Engineer", "Intelligent Systems Developer", "AI Product Builder", "Entrepreneur"];
if (typingText && !reduceMotion) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;
  function typeRole() {
    const role = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typingText.textContent = role.slice(0, charIndex);
    let delay = deleting ? 34 : 72;
    if (!deleting && charIndex === role.length) {
      deleting = true;
      delay = 1450;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 280;
    }
    window.setTimeout(typeRole, delay);
  }
  window.setTimeout(typeRole, 700);
}

// Reveal elements as they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("visible"));
}

// Highlight the navigation item for the section in view.
const pageSections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        const active = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  pageSections.forEach(section => sectionObserver.observe(section));
}

// Subtle pointer tilt for project cards; disabled on touch and reduced-motion devices.
const finePointer = window.matchMedia("(pointer: fine)").matches;
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.transform = "translateY(-3px) rotateX(" + (-y * 1.8) + "deg) rotateY(" + (x * 1.8) + "deg)";
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// Current year in footer.
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Close the mobile menu when the viewport returns to desktop width.
window.addEventListener("resize", () => {
  if (window.innerWidth > 760) closeMenu();
});
