
// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (menuToggle && navMenu) {
    // Toggle menu on button click
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        // Only close menu, don't prevent default here
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInside =
        navMenu.contains(event.target) || menuToggle.contains(event.target);
      if (!isClickInside && navMenu.classList.contains("active")) {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }
});

// Add active state to nav links based on scroll position
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Function to update active nav link
  function updateActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveLink);

  // Handle nav link clicks - smooth scroll only
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

// Project Card Hover Effects

// Add interactive effects to project cards
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transition = "all 0.3s ease";
    });
  });
});

// Scroll Animation for Elements

// Add fade-in animation as elements come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all section titles and cards
document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll(
    ".section-title, .project-card, .skill-item",
  );

  elementsToObserve.forEach((element) => {
    element.style.opacity = "0";
    observer.observe(element);
  });
});

// Contact Links Handler

// Ensure contact links work properly
document.addEventListener("DOMContentLoaded", function () {
  const contactLinks = document.querySelectorAll(".contact-link");

  contactLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Let the default behavior handle href navigation
      // This is already working with <a> tags
    });
  });
});

// Scroll to Top Button (Optional)

// Create and manage scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  // Add scroll event listener to show/hide button
  window.addEventListener("scroll", function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    // Optional: Add subtle visual feedback during scroll
    const navbar = document.querySelector(".navbar");
    if (scrollPosition > 50) {
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    } else {
      navbar.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
    }
  });
});

// Form Validation Helper (for future contact form)

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Enhanced Project Card Interactions

document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    // Add click event for mobile users
    card.addEventListener("click", function (e) {
      // Allow links to work normally
      if (e.target.tagName === "A") {
        return;
      }
    });
  });
});

// Page Load Animation

window.addEventListener("load", function () {
  // Trigger animations after page loads
  const heroContent = document.querySelector(".hero-content");
  if (heroContent) {
    heroContent.style.animation = "fadeInUp 0.6s ease forwards";
  }
});

// Accessibility Enhancements

// Add keyboard navigation support
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    // Close any modals or overlays if they exist
    console.log("Escape key pressed");
  }
});
