### constants

```javascript
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

```

### variables

```javascript
let num1 = "";
let num2 = "";
let oper = "";
let result = null;
let clear = "";



```

### event listeners
```javascript

numbers.forEach(item) {
    item.addEventListener('click', (event)) => {
        const value = event.target.innerText;
        if (oper === '') {
            value += num1;
            display.innerText = value;
        } else {
            value += num2;
            display.innerText += value;
        }
    });
    
});

operators.forEach(item) {
    item.addEventListener('click', (event)) => {
        const value = event.target.innerText;
        if (oper === '') {
            oper = value;
            display.innerText += oper;
            
        } else {
            return;
        }
    });
});




clearButton = addEventListener('click', init);
equalsButton = addEventListener('click', operate);
```
### functions

```javascript
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
      case: '+';
        result = nums1 + nums2;
        break;
      case: '-';
        result = nums1 - nums2;
        break;
      case: '*';
        result = nums1 * nums2;
        break;
      case: '/';
        result = nums1 / nums2;
        break; 
      default:
        result = "invalid";
    }

    display.innerText = result;
    
};




```