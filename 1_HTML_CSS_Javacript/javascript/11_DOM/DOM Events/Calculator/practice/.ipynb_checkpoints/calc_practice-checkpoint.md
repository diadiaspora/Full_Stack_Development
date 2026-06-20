### constants

```javascript
const calculator = document.querySelect('#calculator');
const numbers = document.querySelect('.numbers');
const operator = document.querySelect('.operator');
const equalsButton = document.querySelect('.equal');
const clearButton = document.querySelect('.clear');

```

### variables

```javascript
let num1 = '';
let num2 = '';
let oper = '';
let clear = '';
let results = null;



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
    results = null;
}

function operate() {
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
          result = 'invalid input'
    }

    display.innerText = result;
};




```