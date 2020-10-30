const reloadPage = document.querySelector(".reload");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const guessForm = document.querySelector(".form");
const guessedNumList = document.querySelector(".guessed-numbers");
const selectedRange = document.querySelector(".range-select");
const btnChoose = document.querySelector(".set-selected-range");
const results = document.querySelector(".results");

let guessedNumbersArray = [];
let numRange = 10;
let randomNum;

reloadPage.addEventListener("click", () => {
  location.reload();
});

// For each button addEventLiistener + add value to display
buttons.forEach((button) => {
  button.addEventListener("click", (button) => {
    const num = button.target.getAttribute("data-num");
    display.value = display.value + num;
  });
});

guessForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(randomNum);
  if (!randomNum) {
    display.value = "";
    return alert("You must choose a number range first!");
  }
  if (display.value === "") return;
  else if (display.value == randomNum) congratFunk(display.value);
  guessedNumbersArray.push(display.value);
  addToList();
  display.value = "";
});

// Add guessed number to list
function addToList() {
  let guessedNumbers = guessedNumbersArray
    .map((num) => {
      return `<li>Your guess: ${num}</li>`;
    })
    .join("");
  guessedNumList.innerHTML = guessedNumbers;
}

btnChoose.addEventListener("click", () => {
  numRange = selectedRange.value;
  randomNum = Math.round(Math.random() * numRange);
});

// show congrate message
function congratFunk(input) {
  const h1 = document.createElement("h1");
  h1.textContent = `Congrats! the number was ${input}.`;
  h1.classList.add("congratMessage");
  results.appendChild(h1);
}
