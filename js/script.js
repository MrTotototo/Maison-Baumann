document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("heroVideo");
  const button = document.getElementById("enableSound");

  if (video && button) {
    button.addEventListener("click", () => {
      video.muted = false;
      button.classList.add("hidden"); // Fait disparaître en fondu
    });
  }
});
