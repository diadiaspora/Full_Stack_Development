# Functions
A function is a reusable block of code written to perform a single purpose.  a block of code that can be called as needed and is designed to perform a specific task. A function may accept input and can return a result after completing its task.
___

```javascript
funtion name() {
    statement;
    return statement;
}
```

1. The function keyword.
2. The name of the function.
3. The body of the function is indicated by curly braces.
    * The statements that make up the function itself.
    * Optionally, a return statement.

### Declaring a function
Declaring/Defining a function does not execute it.
___

```javascript
function printBanner() {
  console.log('=======================');
  console.log('Insert Banner Text Here');
  console.log('=======================');
}
```

### Calling a function
A function must be called for it to run. calling/execute/invoke/run a function
___

```javascript
printBanner();

```

The beauty of functions is their reusability. If we wanted to log this text out twice, rather than having to type out each console log again, we can call the function twice.

## `Parameters & Arguments`

When writing a function, we can define placeholders to accept data that will be input to our function, and these placeholders are known as parameters.
___

```javascript
function name(parameter1, parameter2, ...parameterN) {
  statements;
  return statement;
}
```

`Parameters` are the named variables listed in a function’s definition that serve as placeholders for the values that will be passed to the function when it is called.

`Parameters` act like local variables within a function and can act as placeholders for any data.

```javascript
function sayHello(name) {
  console.log(`Hello ${name}`);
}

```

```javascript
sayHello();
```

__`Arguments` are the values supplied to a function when called, which are then assigned to the corresponding parameters within the function.__

```javascript
sayHello('Jim');   
// Prints: 'Hello Jim'
sayHello('Emily'); 
// Prints: 'Hello Emily'
sayHello('Joe');   
// Prints: 'Hello Joe'

```

Another example:

```javascript
function printBanner(text) {
  console.log('========================');
  console.log(text);
  console.log('========================');
}

printBanner('We can make this banner say anything!');

// Prints:
// ========================
// We can make this banner say anything!
// ========================

```

```javascript
const phrase = 'say anything!';

printBanner(phrase);

// Prints:
// ========================
// say anything!
// ========================

```


### Declare a function with multiple parameters
A function can take up to 255 parameters. When defining a function, parameters are added between parentheses and are comma-separated.
___

```javascript
function add(numA, numB) {
  return numA + numB;
}
```

```javascript
add(1, 5);
```

## `Return Values`
A return value is the output of a function. What a function gives back after it does its job.
___

### The Return Statement

```javascript
function addOne(num){
  return num + 1;
}

console.log(addOne(3));
// Prints: 4
```
We are returning the result of adding num and 1. 


```javascript
function addOne(num){
  return 'this is some text';
  return num + 1;
}

console.log(addOne(3)); 
// Prints: 'this is some text'

```
the first return statement blocks the remainder of the code from running! The function stops executing when the first return statement is reached.

```javascript
function addOne(num){
  num + 1;
  return;
}

console.log(addOne(3)); 
// Prints: undefined

```
 returning without an expression defaults to undefined.


```javascript
function addOne(num){
  num + 1;
}

console.log(addOne(3)); 
// Prints: undefined

```

### Storing and using the return value of a function
___

We can assign the return value of a function to a variable.

```javascript
function addOne(num){
  return num + 1;
}

// addOne(3) evaluates to 4
const incrementedNum = addOne(3);
// incremetedNum is 4

console.log(incrementedNum); 
// Prints: 4

```

We have a shopping cart that needs to calculate tax when the user is checking out. We can use a calculateTax() function to figure out the amount of tax due, then store the return value of that function in the variable taxAmount to do further calculations:

```javascript
function calculateTax(subtotal){
  // calculate a flat tax of 7%
  const taxDue = subtotal * (7 / 100);
  return taxDue;
}

function calculateTotal(){
  // normally, cartValue would be calculated elsewhere
  // we're hard coding it to simplify this example
  const cartValue = 45;
  // remember that we can pass variables like cartValue to functions

  // store the return value of the calculateTax function
  const taxAmount = calculateTax(cartValue);

  // we can return the cart total plus the required tax
  return cartValue + taxAmount;
}

console.log(calculateTotal()); 
// Prints: 48.15

```

<u>Helper functions</u> are functions that perform a part of the calculations of another function - calculateTax() above is a great example.

```javascript

function compileAndSend() {
  const sales = getSalesData();
  const labor = getLaborCosts();
  const budget = getBudget();
  const report = generateReport(sales, labor, budget);
  sendReport(report);
}

// Run the function
compileAndSend();

/*--- helper functions ---*/

function getSalesData() {
  // code to calculate sales
  return sales;
}

function getLaborCosts() {
  // code to calculate labor costs
  return labor;
}

function getBudget() {
  // code to calculate budget
  return budget;
}

function generateReport(sales, labor, budget) {
  // code to generate report
  return report;
}

function sendReport(report) {
  // code to send the report somewhere
}
```

## `Expressions`
___

```javascript
const name = function(params) {
    statements;
    return statements; 
}
```

A function expression syntax is a function created as part of an expression and stored in a variable, meaning it’s only usable after it’s defined, unlike a function declaration, which is hoisted and can be used before it appears in the code.

1. The const keyword. const should be used whenever a function expression is assigned to a variable.
2. The name of the function.
3. The function keyword.
4. Comma-separated parameters.
5. The body of the function is indicated by curly braces.
    * 5a. The statements that make up the function itself.
    * 5b. Optionally, a return statement.


function declaration:
```javscript 
function add(numA, numB){
  return numA + numB;
}

```

function expression:
```javascript
const add = function(numA, numB) {
  return numA + numB;
}
```




## `Arrow Functions`
Arrow function expression syntax is the most common and modern syntax.
___


__Arrow function expressions offer a more concise syntax compared to function expressions while using many of the same patterns.__
We can leave off the function keyword entirely when composing them.

1. The const keyword. const should be used whenever a function expression is assigned to a variable.
2. The name of the function.
3. Comma-separated parameters. Note that if there are no parameters, the () is required.
4. The arrow: =>. Note that this replaces the function keyword. This is the only required
   syntax change between function expressions and arrow function expressions.
5. The body of the function is indicated by curly braces.
    * 5a. The statements that make up the function itself.
    * 5b. Optionally, a return statement.

```javascript

const name = (params) => {
    statements;
    return statement;
}

```

 Function Expression:
```javascript
const add = function(numA, numB) {
  return numA + numB;
}
```

Arrow Function Expression:

```javascript
const add = (numA, numB) => {
  return numA + numB;
}

```

### Advanced Arrow Functions
___
