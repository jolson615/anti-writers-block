console.log("script running");

const fruitButtons = document.querySelectorAll("button.fruit-button");
const resultsSpan = document.querySelector("#results");

console.log(fruitButtons);

fruitButtons.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.toggle("is-selected");
    console.log(button.classList);
    updateResults();
  })
);

const updateResults = () => {
  let selectedFruits = document.querySelectorAll(".is-selected");
  console.log(selectedFruits);
  let description = [];
  selectedFruits.forEach((fruitButton) => {
    description.push(fruitButton.innerHTML.trim());
  });
  console.log(description);
  if (description.length > 1) {
    description[description.length - 1] =
      "and " + description[description.length - 1];
    if (description.length === 2) {
      description = description.join(" ");
    } else {
      description = description.join(", ");
    }
  }

  resultsSpan.innerHTML = description + " ";
};
