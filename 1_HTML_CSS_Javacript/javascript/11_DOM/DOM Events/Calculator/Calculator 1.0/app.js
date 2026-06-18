//Psuedocode

// I want to be able to select numbers so that I can perform operations with them.

// I want to be able to add two numbers together.
//  I want to be able to multiply two numbers together.
//  I want to be able to subtract one number from another.
// I want to be able to divide one number by another.
//  I want to be able to see the output of the mathematical operation.
//  I want to be able to clear all operations and start from 0.

/*-------------------------------- Constants --------------------------------*/

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculator = document.querySelector("#calculator");

const display = document.querySelector(".display");


/*-------------------------------- Variables --------------------------------*/
// State Variables

let num1 = "";
let num2 = "";
let oper = "";
let result = null;
let clear = "";


/*----------------------------- Event Listeners -----------------------------*/


numbers.forEach((item) => {
  item.addEventListener("click", (eventWhenClicked) => {
    const value = eventWhenClicked.target.innerText;
    if (oper === "") {
      num1 += value;
      display.innerText = num1;
    } else {
      num2 += value;
      display.innerText += value;
    }
  });
});

operators.forEach((item) => {
  item.addEventListener("click", (eventWhenClicked) => {
    const value = eventWhenClicked.target.innerText;
    if (oper === "") {
      oper = value;
      display.innerText += oper;
    } else {
      return;
    }
  });
});

equalButton.addEventListener("click", operate);

clearButton.addEventListener("click", init);


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  num1 = "";
  num2 = "";
  oper = "";
  result = null;
  clear = "";
  display.innerText = "0"
}


function operate() {
  const nums1 = parseFloat(num1);
  const nums2 = parseFloat(num2);

  switch (oper) {
    case "+":
      result = nums1 + nums2;
      break;
    case "-":
      result = nums1 - nums2;
      break;
    case "*":
      result = nums1 * nums2;
      break;
    case "/":
      result = nums1 / nums2;
      break;

    default:
      result = "Invalid operator";
  }

  display.innerText = result;
}
