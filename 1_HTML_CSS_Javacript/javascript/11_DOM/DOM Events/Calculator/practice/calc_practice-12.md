### constants

```javascript
const calculator = querySelect('#calculator');
const display = querySelect('.display');
const numbers = querySelectAll('.number');
const operators = querySelectAll('.operator');
const clearButton = querySelect('.clear');
const equalsButton = querySelect('.equal');

```

### variables

```javascript
let num1 = '';
let num2 = '';
let oper = '';
let result = '';
let clear = ''; 



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



clearButton.addEvenListener('click', init);
equalsButton.addEvenListener('click', operate);


```
### functions

```javascript
init();

function init() => {
     num1 = '';
     num2 = '';
     oper = '';
     result = '';
     clear = ''; 
};

function operate () => {
    const nums1 = parseFloat(num1);
    const nums2 = parseFloat(num2);

    switch (oper) {
    case '+':
        result = nums1 + nums2;
        break;
    case '-':
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