### constants

```javascript


```

### variables

```javascript



```

### event listeners
```javascript

numbers.forEach(item) => {
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

operator.forEach(item) => {
    item.addEventListener('click', (event)) => {
    const value = event.target.innerText;
    if (oper === '') {
        oper = value;
        display.innerText += oper;
    } else {
        return;
    }
        
    });S
    
});

clearButton = addEventListener('click', init);
equalsButton = addEventListener('click', operate);




```
### functions

```javascript




```