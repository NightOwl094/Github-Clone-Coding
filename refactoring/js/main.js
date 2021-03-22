(function (window, document) {
  "use strict";

  const $toggleList = document.querySelectorAll(".toggle");
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", () => {
    toggleElements();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      offElements();
      console.log("test");
    }
  });

  function toggleElements() {
    $toggleList.forEach((toggle) => {
      toggle.classList.toggle("on");
    });
  }

  function offElements() {
    $toggleList.forEach((toggle) => {
      toggle.classList.remove("on");
    });
  }
})(window, document);
