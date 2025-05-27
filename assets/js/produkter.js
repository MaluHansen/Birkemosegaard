document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".wishlist").forEach((button) => {
    button.addEventListener("click", () => {
      const isPressed = button.getAttribute("aria-pressed") === "true";
      button.setAttribute("aria-pressed", (!isPressed).toString());

      const img = button.querySelector("img");

      // Skift ikon
      img.src = !isPressed
        ? "./assets/icons/rodHjerteProdukter.jpg"
        : "./assets/icons/hvidHjerteProdukter.jpg";

      // ✨ Tilføj animation
      img.classList.remove("animate-pop"); // Reset hvis den allerede er der
      void img.offsetWidth; // Tving browseren til at reflow'e (trick)
      img.classList.add("animate-pop");
    });
  });
});


// Filter
const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const rangeMin = document.getElementById('range-min');
  const rangeMax = document.getElementById('range-max');

  function syncInputs() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);

    if (min >= max) {
      rangeMin.value = max - 10;
    }

    minPriceInput.value = rangeMin.value;
    maxPriceInput.value = rangeMax.value;
  }

  rangeMin.addEventListener('input', syncInputs);
  rangeMax.addEventListener('input', syncInputs);

  minPriceInput.addEventListener('input', () => {
    rangeMin.value = minPriceInput.value;
    syncInputs();
  });

  maxPriceInput.addEventListener('input', () => {
    rangeMax.value = maxPriceInput.value;
    syncInputs();
  });

  syncInputs();