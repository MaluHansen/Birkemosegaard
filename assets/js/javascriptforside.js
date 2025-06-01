document.addEventListener("DOMContentLoaded", () => {
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
});

window.onscroll = function () {
  const btn = document.getElementById("toTopBtn");
  if (window.scrollY > 200) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}