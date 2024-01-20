function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelector(".toggle input").addEventListener("change", (evt) => {
  document.documentElement.dataset.mode = evt.currentTarget.checked ? "dark" : "light";
});