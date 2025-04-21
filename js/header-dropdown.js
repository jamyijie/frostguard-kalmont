let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");
menuToggle.onclick = function () {
  header.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const submenuParents = document.querySelectorAll(".has-submenu > a");

  submenuParents.forEach((parent) => {
    parent.addEventListener("click", function (e) {
      e.preventDefault(); // prevent navigation
      const listItem = this.parentElement;
      listItem.classList.toggle("open");
    });
  });
});
