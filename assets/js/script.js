document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1000);
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });

        // Close mobile menu when clicking a link
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });

  // Back to Top Button
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("active");
      } else {
        backToTopButton.classList.remove("active");
      }
    });

    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Dark/Light Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-bs-theme");

      if (currentTheme === "dark") {
        html.removeAttribute("data-bs-theme");
        this.textContent = "Mode Gelap";
      } else {
        html.setAttribute("data-bs-theme", "dark");
        this.textContent = "Mode Terang";
      }

      // Save preference to localStorage
      localStorage.setItem("theme", currentTheme === "dark" ? "light" : "dark");
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      themeToggle.textContent = "Mode Terang";
    }
  }

  // Team Skills Modal
  const viewSkillsButtons = document.querySelectorAll(".view-skills");
  viewSkillsButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const member = this.getAttribute("data-member");
      const modal = new bootstrap.Modal(document.getElementById("skillsModal"));

      // Hide all skill sections first
      document.querySelectorAll(".skills-content").forEach((section) => {
        section.classList.add("d-none");
      });

      // Show the selected skill section
      document.getElementById(`${member}-skills`).classList.remove("d-none");

      // Update modal title
      document.getElementById("skillsModalLabel").textContent = `${
        this.closest(".card-body").querySelector(".card-title").textContent
      } - Skills`;

      modal.show();
    });
  });

  // Portfolio Project Modal
  const viewProjectButtons = document.querySelectorAll(".view-project");
  viewProjectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project");

      // Hide all project details first
      document.querySelectorAll(".project-details").forEach((section) => {
        section.classList.add("d-none");
      });

      // Show the selected project details
      document
        .getElementById(`project${projectId}-details`)
        .classList.remove("d-none");
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show an alert
      alert(
        `Terima kasih, ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`
      );

      // Reset form
      this.reset();
    });
  }

  // Testimonial Slider
  if (document.querySelector(".testimonial-slider")) {
    // Initialize testimonial slider using Bootstrap Carousel
    const testimonialSlider = new bootstrap.Carousel(
      document.querySelector(".testimonial-slider"),
      {
        interval: 5000,
        wrap: true,
        touch: true,
      }
    );
  }

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });

  // Initialize Particles.js
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }
});
