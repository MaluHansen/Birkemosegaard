document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".progress-breadcrumb");
  const steps = progress.querySelectorAll(".step");
  const activeStep = parseInt(progress.dataset.step, 10);

  steps.forEach((step, index) => {
    if (index < activeStep) {
      step.classList.add("done");
    }
  });
});