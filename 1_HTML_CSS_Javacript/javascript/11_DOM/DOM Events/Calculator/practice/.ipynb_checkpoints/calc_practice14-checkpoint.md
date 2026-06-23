### constants

```javascript
const caculator = document.querySelect('#calculator');
const display = document.querySelect('.display');
const numbers = document.querySelect('.number');
const operators = document.querySelect('.operator');
const equalsButton = document.querySelect('.equals');
const clearButton = document.querySelect('.clear');


```

### variables

```javascript
let num1 = '';
let num2 = '';
let oper = '';
let clear = '';
let result = null;
```

### event listeners
```javascript

numbers.forEach((item) => {
    item.addEventListener('click', (event) => {
        const value = event.target.innerText;
        if (oper === '') {
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
            return
        }
    });
});




clearButton.addEventListener('click', init);
equalsButton.addEventListener('click', operate);


```
### functions

```javascript
init()

function init() {
    num1 = '';
    num2 = '';
    oper = '';
    clear = '';
    result = null;
    display.innerText = "0";
    
}

function operation() {
    const nums1 = parseFloat(num1);
    const nums2 = parseFloat(num2);

    switch (oper) {
        case '+':
          result = nums1 + nums1;
          break;
        case '-':
          result = nums1 - nums1;
          break;
        case '*':
          result = nums1 * nums1;
          break;
        case '/':
          result = nums1 / nums1;
          break;
        default:
            result = "invalid"
    }

    display.innerText = result;
}

```