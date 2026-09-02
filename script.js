const menuToggle = document.querySelector(".menu-toggle");
const topbar = document.querySelector(".topbar");
const yearEl = document.getElementById("year");
const contactForm = document.querySelector(".contact-form");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && topbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    button.textContent = "Mensagem enviada";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      contactForm.reset();
    }, 2200);
  });
}
