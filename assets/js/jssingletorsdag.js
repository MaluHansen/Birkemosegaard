document.addEventListener("DOMContentLoaded", () => {
  // For hvide hjerter
  document.querySelectorAll(".wishlist").forEach((button) => {
    button.addEventListener("click", () => {
      const isPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", (!isPressed).toString());

      const img = button.querySelector("img");
      img.src = !isPressed
        ? "./assets/icons/Roodhjerte.png"
        : "./assets/icons/Hvidhjerte.png";

      img.classList.remove("animate-pop");
      void img.offsetWidth;
      img.classList.add("animate-pop");
    });
  });

  // For grønne hjerter
  document.querySelectorAll(".wishlist-torsdag").forEach((button) => {
    button.addEventListener("click", () => {
      const isPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", (!isPressed).toString());

      const img = button.querySelector("img");
      img.src = !isPressed
        ? "/assets/icons/Roodhjerte.png"
        : "/assets/icons/Graanhjerte.png";

      img.classList.remove("animate-pop");
      void img.offsetWidth;
      img.classList.add("animate-pop");
    });
  });
});
