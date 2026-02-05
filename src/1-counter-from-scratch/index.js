let count = 0;

const countHeading = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");

incrementButton.addEventListener("click", () => {
  count++;
  countHeading.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  countHeading.textContent = count;
});
