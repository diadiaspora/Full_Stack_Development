### constants

```javascript
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
const number = document.querySelector('.number');
const operator = document.querySelector('.operator');
const clearbutton = document.querySelector('.clear');
const equalbutton = document.querySelector('.equals');

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

function init(){
     num1 = '';
     num2 = '';
     oper = '';
     clear = '';
     results = null; 
    display.innerText = "0"
}

function operate() {
    const nums1 = parseFloat(num1);
    const nums2 = parseFloat(num2);

    switch {
        case (oper = '+';
            result = nums1 + nums2;
        break;
    }
}



```