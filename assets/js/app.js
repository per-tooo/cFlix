//* Dropdown
let dropdown_toggles = document.querySelectorAll(
  '[data-function="dropdown-toggle"]'
);
let dropdown_contents = document.querySelectorAll(".dropdown-content");

dropdown_toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    let target = document.querySelector(
      `[data-element=${toggle.getAttribute("data-target")}]`
    );

    if (target.style.display === "block") target.style.display = "none";
    else target.style.display = "block";
  });
});

window.addEventListener("click", (event) => {
  if (!event.target.matches('[data-function="dropdown-toggle"]')) {
    dropdown_contents.forEach((content) => {
      if (content.style.display === "block") content.style.display = "none";
    });
  }
});
