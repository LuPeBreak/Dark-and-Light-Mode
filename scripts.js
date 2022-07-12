let h1 = document.querySelector("#page-title");
let button = document.querySelector("#mode-selector");
let footer = document.querySelector("footer");
let body = document.querySelector("body");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  h1.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  if (button.classList.contains("dark-mode")) {
    button.textContent = "Light Mode";
    h1.textContent = "Dark Mode On";
    return;
  }
  button.textContent = "Dark Mode";
  h1.textContent = "Light Mode On";
});
