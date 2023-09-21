const tabsBtns = document.querySelectorAll(".tabs-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".tabs-content-inner");
const images = document.querySelectorAll(".img");

about.addEventListener("click", function (e) {
  const dataId = e.target.dataset.id; // data-id

  if (dataId) {
    // Buttons active state
    tabsBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // Content active state
    content.forEach(function (text) {
      text.classList.remove("active");
      if (text.id === dataId) {
        text.classList.add("active");
      }
    });

    // Images active state
    images.forEach(function (img) {
      img.classList.remove("active");
      if (img.id === dataId) {
        img.classList.add("active");
      }
    });
  }
});
