document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  mobileMenu.addEventListener("click", function () {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      this.reset();
    });
  }

  // Search form submission
  const searchForm = document.querySelector(".search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const searchInput = this.querySelector('input[type="text"]');
      alert(`Searching for: ${searchInput.value}`);
      searchInput.value = "";
    });
  }

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".post-card, .post, .sidebar-widget"
    );

    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 150 * index);
      }
    });
  };

  // Set initial state for animated elements
  document
    .querySelectorAll(".post-card, .post, .sidebar-widget")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease";
    });

  // Run once on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});
