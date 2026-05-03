// Simple interaction: button click alert (can replace later)

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Products launching soon 🚀 Stay tuned!");
    });
  }
});
