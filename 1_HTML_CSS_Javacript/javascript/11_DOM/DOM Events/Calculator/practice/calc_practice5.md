### constants

```javascript

const calculator = document.querySelect('#calculator');
const display = document.querySelect('.display');
const numbers = document.querySelectAll('.number');
const operators = document.querySelectAll('.operator');
const clearButton = document.querySelect('.clear');
const equalsButton = document.querySelect('.equal');


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

numbers.forEach((item) => 
    item.addEventListener('click', (event)) => {
    const value = event.target.innerText;

    if (oper === '') {
        num1 += value;
        display.innerText  num1;
    } else {
        num2 += value;
        display.innerText = value;
    }
  )};
});

operators.forEach((item) =>
    item.addEventListener('click', (event)) => {
        const value = event.target.innerText;
    if (oper === '') {
         oper = value;
        display.innerText += oper;
    } else {
        return;
    }
      )};
    )};


clearButton = addEventListener('click', init);
equalsButton = addEventListener('click', operate);

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
   display.innerText = '0';
}

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
          result = nums1 - nums2;
          break;
        case: '/';
          result = nums1 - nums2;
          break;
        default:
          result = "invalid";
}

    display.innerText = result;

```

| Variable | Purpose                            | Initial Value |
| -------- | ---------------------------------- | ------------- |
| `num1`   | Stores digits the user types       | `''`          |
| `num2`   | Stores digits the user types       | `''`          |
| `oper`   | Stores `+`, `-`, `*`, `/`          | `''`          |
| `result` | Stores the answer to a calculation | `null`        |
