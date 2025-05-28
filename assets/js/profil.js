document.querySelectorAll('.link').forEach(tab => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.getAttribute('data-tab');

      // Fjern active fra alle tabs
      document.querySelectorAll('.link').forEach(link => link.classList.remove('active'));
      tab.classList.add('active');

      // Skjul alle content-sektioner
      document.querySelectorAll('.content').forEach(section => {
        section.classList.remove('active');
        section.setAttribute('hidden', true);
      });

      // Vis den valgte sektion
      const activeContent = document.getElementById(selectedTab);
      if (activeContent) {
        activeContent.classList.add('active');
        activeContent.removeAttribute('hidden');
      }
    });
  });

  document.querySelectorAll(".wishlist").forEach((button) => {
    button.addEventListener("click", () => {
      const isPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", (!isPressed).toString());

      const img = button.querySelector("img");

      // Skift ikon
      img.src = !isPressed
        ? "./assets/icons/Roodhjerte.png"
        : "./assets/icons/Hvidhjerte.png";

      // ✨ Tilføj animation
      img.classList.remove("animate-pop"); // Reset hvis den allerede er der
      void img.offsetWidth; // Tving browseren til at reflow'e (trick)
      img.classList.add("animate-pop");
    });
  });
