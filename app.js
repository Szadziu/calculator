// zmienna z wyświetlaczem
const screen = document.querySelector(".screenPanel");
// zmienna z klawiaturą - rodzic
const keyboard = document.querySelector(".numericKeyboard");

const keys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  ".",
  "C",
  "=",
];

// funkcja tworząca przyciski
const createButtons = () => {
  keys.forEach((element, index) => {
    let button = document.createElement("button");
    button.innerHTML = element;
    button.addEventListener("click", calculate);
    if (element === "=") {
      button.classList.add("sum");
    }

    keyboard.appendChild(button);
  });
};

createButtons();

let result = `0`;

// function that handles button click
const calculate = (event) => {
  switch (event.target.innerHTML) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      result += event.target.innerHTML;
      break;

    default:
      break;
  }
};
