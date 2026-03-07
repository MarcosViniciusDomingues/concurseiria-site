
document.addEventListener("DOMContentLoaded", function () {
  const yearEls = document.querySelectorAll(".year");
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);
});
