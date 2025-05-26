// Scrollanimation til eventCards og billeder
      function handleScrollAnimations() {
        document.querySelectorAll(".eventCard").forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            card.style.animationPlayState = "running";
          }
        });

        document.querySelectorAll(".fade-in").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", handleScrollAnimations);
      window.addEventListener("load", handleScrollAnimations);