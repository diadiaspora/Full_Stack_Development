// constants________________________________________________

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculator = document.querySelector(".calculator");

const display = document.querySelector(".display");

/*-------------------------------- Variables --------------------------------*/

let num1 = "";
let num2 = "";
let oper = "";
let result = null;
let clear = "";

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  num1 = "";
  num2 = "";
  oper = "";
  result = null;
  clear = "";
  display.innerText = "0";
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
    case "+":
      result = nums1 * nums2;
      break;
  }

  display.innerText = result;
}
