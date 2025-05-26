  // Scrollanimation til billeder
      function handleScrollAnimations() {
        document.querySelectorAll(".fade-in").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", handleScrollAnimations);
      window.addEventListener("load", handleScrollAnimations);