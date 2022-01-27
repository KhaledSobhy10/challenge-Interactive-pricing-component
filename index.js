const rangeElement = document.getElementById("myRange");
const rangeFilledElement = document.querySelector(".filled");

rangeElement.addEventListener("input", (e) => {
  rangeFilledElement.style.width = e.target.value + "%";
});
