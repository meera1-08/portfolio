// Typewriter Effect — One by One
const roles = ["Front-End Developer", "Back-End Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const typewriter = document.getElementById("typewriter");
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typewriter.textContent = currentRole.substring(0, charIndex--);
  } else {
    typewriter.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeWriter, 1500); // Pause before deleting
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeWriter, isDeleting ? 40 : 100);
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Start typewriter
  typeWriter();

  // 🌙 Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Optional: toggle button label
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
});

// ScrollReveal animations
ScrollReveal().reveal('.about-content, .skill-grid, .projects, .contact', {
  delay: 300,
  duration: 1000,
  origin: 'bottom',
  distance: '50px',
  reset: true
});

