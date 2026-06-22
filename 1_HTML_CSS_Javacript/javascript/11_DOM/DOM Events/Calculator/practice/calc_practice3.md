### constants

```javascript

calculator = document.querySelect('#calculator');
display = document.querySelect('.display');
equalsButton = document.querySelect('.equal');
clearButton = document.querySelect('.clear');
numbers = document.querySelect('.number');
operators = document.querySelect('.operator');


```

### variables

```javascript
let num1 = '';
let num2 = '';
let oper = '';
let clear = '';
let display = null;


```

### event listeners
```javascript



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
    display.innerText = "0"
    
}

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

        default: 'invalid';
    }
}

    display.innerText = result;




```