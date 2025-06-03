const burgerToggle = document.getElementById("burger-toggle");
const globalMenu = document.querySelector(".global-menu");

burgerToggle.addEventListener("click", () => {
  globalMenu.classList.toggle("active");

  // Skift ikon
  if (burgerToggle.textContent === "menu") {
    burgerToggle.textContent = "close";
  } else {
    burgerToggle.textContent = "menu";
  }
});
