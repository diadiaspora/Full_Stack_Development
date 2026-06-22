// constants________________________________________________

calculator = document.querySelector('#calculator');
display = document.querySelector('.display');
button = document.querySelector('.button');
number = document.querySelector('.number');
operator = document.querySelector('.operator');

/*-------------------------------- Variables --------------------------------*/

num1 = "";
num2 = "";
oper = "";
clear = "";
result = null;

/*----------------------------- Event Listeners -----------------------------*/


/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  num1 = "";
  num2 = "";
  oper = "";
  clear = "";
  result = null;
  display.innerText = "0";
  
}

function operation() {
  const nums1 = parseFloat.(num1);
  const nums2 = parseFloat.(num2);

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
