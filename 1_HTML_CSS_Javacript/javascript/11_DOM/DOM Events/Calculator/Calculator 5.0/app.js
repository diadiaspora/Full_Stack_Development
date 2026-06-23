// constants

const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

// Variables

let num1 = "";
let num2 = "";
let oper = "";
let result = null;
let clear = "";

//event listeners

numbers.forEach((item) => {
    item.addEventListener("click", (event) => {
        const value = event.target.innerText;
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
    item.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (oper === '') {
            oper = value;
            display.innerText += oper;
            
        } else {
            return;
        }
    });
});




clearButton.addEventListener('click', init);
equalsButton.addEventListener('click', operate);
//functions

init()

function init() {
  num1 = "";
  num2 = "";
  oper = "";
  result = null;
  clear = ""; 
 display.innerText = "0";
};

function operate () {
    const nums1 = parseFloat(num1);
    const nums2 = parseFloat(num2);
    
    switch (oper) {
      case '+':
        result = nums1 + nums2;
        break;
      case '-':
        result = nums1 - nums2;
        break;
      case '*':
        result = nums1 * nums2;
        break;
      case '/':
        result = nums1 / nums2;
        break; 
      default:
        result = "invalid";
    }

    display.innerText = result;
    
};

