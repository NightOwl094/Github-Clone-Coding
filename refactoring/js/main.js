(function (window, document) {
  "use strict";

  const toggleList = document.querySelectorAll(".toggle");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.addEventListener("click", () => {
    toggleElements();
  });

  function toggleElements() {
    toggleList.forEach((toggle) => {
      toggle.classList.toggle("on");
    });
  }
})(window, document);
