const screen = document.querySelector(".screenPanel");
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

const createButtons = () => {
  keys.forEach((btn) => {
    let button = document.createElement("button");
    button.innerHTML = btn;
    button.classList.add('btn');
    button.addEventListener("click", calculate);
    if (btn === "=") {
      button.classList.add("sum");
    }

    keyboard.appendChild(button);
  });
};

let result = ``;

const calculate = (event) => {
  const signs = ["+", "-", "*", "/", ".", " "];

  switch (event.target.innerHTML) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      result += event.target.innerHTML;
      screen.innerHTML = result;
      break;

    case "+":
    case "-":
    case "*":
    case "/":
      if (screen.innerHTML === "0") {
        break;
      }

      if (signs.includes(result[result.length - 1])) {
        break;
      }

      result += ` ${event.target.innerHTML} `;
      screen.innerHTML = result;

      break;

    case ".":
      let templateArray = screen.innerHTML.split(" ");
      let containExpressionsArray = templateArray.filter((element) => {
        return !signs.includes(element);
      });
      if (signs.includes(result[result.length - 1])) {
        break;
      }
      if (
        containExpressionsArray[containExpressionsArray.length - 1].includes(
          "."
        )
      ) {
        break;
      }

      result += event.target.innerHTML;
      screen.innerHTML = result;
      break;

    case "C":
      result = "";
      screen.innerHTML = "0";
      break;

    case "=":
      if (result === "") {
        break;
      }
      result = eval(result);
      screen.innerHTML = result;
      break;

    default:
      break;
  }
};

createButtons();