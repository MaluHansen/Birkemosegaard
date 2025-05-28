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
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isActive = button.classList.contains("active");

    button.classList.toggle("active");
    button.setAttribute("aria-pressed", (!isActive).toString());

    const img = button.querySelector("img");

    img.src = !isActive
      ? "./assets/icons/Roodhjerte.png"
      : "./assets/icons/Hvidhjerte.png";

    img.classList.remove("animate-pop");
    void img.offsetWidth;
    img.classList.add("animate-pop");

    if (isActive) {
      const card = button.closest(".produktCard-favoritter");
      if (card) card.remove();
    }
  });
});


