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

# __`Function declarations vs Function expressions vs Arrow Functions`__
This difference is hoisting. 
___

1. What JavaScript does before it runs your code

    Before JavaScript executes your program, it does a setup phase (often called the creation phase).

    During this phase:

    __JavaScript scans the entire file.__

    Registers declarations in memory

    How it registers them depends on the syntax.

2. __Function declarations__ are hoisted with their body

Example
```javascript

sayHello();

function sayHello() {
  console.log("Hello");
}
```


JavaScript does this internally:

```javscript

function sayHello() {
  console.log("Hello");
}

```

The entire function (name + body) is placed in memory __before any code runs.__

So when execution reaches:

```javascript
sayHello();
```

The function already exists.

3. __Function expressions are NOT hoisted__ the same way

Example (this fails)

```javscript
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

What happens internally

During setup:

* JavaScript sees const sayHello

* It reserves the name sayHello

* But it does not assign the function yet

So at runtime:

* sayHello exists

* But it is uninitialized

__Calling it throws an error__

4. __Arrow functions__ behave the same as function expressions

```javascript
sayHello();

const sayHello = () => {
  console.log("Hello");
};

```
❌ Same error, same reason.

5. Visual comparison (memory setup)


__Function declaration__

```javscript
function greet() {}
```

Setup phase:

greet → function reference

__Function expression__

```javscript
const greet = () => {}
```

Setup phase:

greet → uninitialized


Assignment happens only when execution reaches that line.

6. Why var behaves differently (and why it’s bad)

```javscript
sayHello();

var sayHello = function () {
  console.log("Hello");
};
```

This gives:

TypeError: sayHello is not a function


Because:

var is hoisted as undefined

You’re trying to call undefined

This is one reason var is discouraged.

7. Rule you can memorize

Function declarations are hoisted with their body.
Function expressions are hoisted without their value.

8. Why JavaScript was designed this way

Function declarations come from older JS

They support flexible program structure

Function expressions behave like variables

Arrow functions follow variable rules

9. When to use each
Need	Use
Call function anywhere	Function declaration
Assign function to variable	Function expression
Pass functions as values	Function expression
Modern React code	Arrow functions
One-sentence takeaway

Function declarations are fully available before execution; function expressions only exist after their assignment runs.

If you want, I can also:

Diagram this visually

Show how hoisting affects variables

Explain why React avoids function declarations

## Advanced Arrow Functions
___

### Implicit Return
Implicit return is best when the function is simple, predictable, and purely about returning a value.
___

Arrow functions composed of a single expression (something resolves to a single value) will automatically evaluate and return that expression without requiring us to write the return keyword. Just leave off the curly braces, and the rest happens automatically.

```javascript
const multiply = (numA, numB) => numA * numB;

console.log(multiply(3, 4));
// Prints: 12
```

### Single Parameters
When working with a single parameter, we can omit the parentheses entirely:
___

```javascript
// note the lack of () around the num parameter!
const addTwo = num => {
  console.log(num + 2);
}

addOne(2);
```

__Here’s an example combining both of the above concepts and using them in a single function:__

```javascript
const double = num => num * 2;
```


_Arrow Functions have a unique way of binding the this keyword, which makes them unsuitable for use as object methods or constructors_

### Default Parameters
Any expression can be provided as a default, including objects, functions, etc.
___

JavaScript has the option to specify default parameters. By specifying a default, name will always equal 'friend' unless an argument is supplied! This overrides the default behavior of name being undefined unless an argument is passed.

```javascript
const sayHi = (name = 'friend') => {
  console.log(`Hi ${name}!`);
}

sayHi();
// Prints: 'Hi friend!'

sayHi('Joe');
// Prints: 'Hi Joe!'
```

### Default parameters
if your function requires certain arguments, and you want to provide a default value for the parameter if an argument is not supplied when the function is invoked.
___

By specifying a default, name will always equal 'friend' unless an argument is supplied! This overrides the default behavior of name being undefined unless an argument is passed.

```javascript

const sayHi = (name = 'friend') => {
  console.log(`Hi ${name}!`);
}

sayHi();
// Prints: 'Hi friend!'


```

### Hoisting
function declarations are hoisted to the top of their scope and may be invoked even if defined later in the code.
___

When your code is run, JavaScript takes a first pass at it to identify all the variables and function declarations. Variables are set up but not assigned their values during this first pass, and entire function declarations are moved to the top. This is referred to as hoisting.

```javascript
// This works!
declarationAdd(5, 10);

// This breaks!
expressionAdd(5, 10);

function declarationAdd(a, b) {
  return a + b;
}

const expressionAdd = function(a, b) {
  return a + b;
}

```

__If fewer arguments are passed than parameters defined, the parameter variables without a matching argument would be undefined.__

```javascript
const add = (numA, numB, numC) => {
  return numA + numB + numC;
}

console.log(add(5, 2));
// Prints: NaN
```

### Rest Parameter
[rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
___

The rest parameter syntax allows a function to accept any number of arguments as a named array. The syntax is identical to the spread operator. While the spread operator expands an array into its elements, the rest syntax does the opposite, taking multiple arguments and condensing them into a single array.

```javascript
// Each argument is condensed into a single array called scores
function calculateAverage(...scores){
  let total = 0;
  // Loop over the scores array to tally up the total
  for(let i = 0; i < scores.length; i++) {
    total = total + score[i]
  }
  // Divide the total by the length of the array to find the average
  return total / scores.length;
}

calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // returns 5.5
```
The loop starts i at 0, keeps running while i is less than the number of scores, and each time it adds the current score (scores[i]) to total, then moves to the next score by increasing i by 1.

__1. What ...scores means (rest parameter)__

```javascript
function calculateAverage(...scores) {
```

This is the rest parameter.

 * It collects all arguments passed to the function.

 * It puts them into a single array called scores.

So this call:

```javascript
calculateAverage(1, 2, 3, 4, 5);

```
Becomes:

```javascript
scores = [1, 2, 3, 4, 5];

```

allowing the function to accept any number of arguments.

__2. Initializing a total__

```javascript

let total = 0;


```
0 is the base starting number. 

this sets up an accumulator to sum all values.

An accumulator is a variable that:

* Starts with an initial value

* Gets updated repeatedly

* Accumulates (adds up) results over time

This means:

* total starts at 0

* Each loop iteration adds something to it

* By the end, it holds the sum of all values

__3. Looping over the scores array__

```javascript
for (let i = 0; i < scores.length; i++) {

```
i starts at 0

Loop runs once per score

scores.length is the number of arguments passed


One way to stop our code from affecting the global scope is by using something called an Immediately Invoked Function Expression, or IIFE (pronounced “iffy”). This is a special kind of function that runs as soon as it is defined.

```javascript
(() => {
  'use strict';

  // your code here
})();

```

The function is wrapped in parentheses to turn it into a complete expression. This is called a grouping operator.

After that, the final () at the end immediately calls the function. This means the code inside the function runs right away, without waiting for us to call it later.

### Spread Operator

---
```javascript
const numbers = [1, 2, 3];
const copy = [...numbers];

console.log(copy); // [1, 2, 3]


// combining arrays
const a = [1, 2];
const b = [3, 4];

const combined = [...a, ...b];
console.log(combined); // [1, 2, 3, 4]

//adding items 
const arr = [2, 3];
const newArr = [1, ...arr, 4];

console.log(newArr); // [1, 2, 3, 4]

// copying objects

const user = { name: "Dia", age: 30 };
const copy = { ...user };

console.log(copy); // { name: "Dia", age: 30 }

// merging objects
const defaults = { a: 1, b: 2 };
const overrides = { b: 3, c: 4 };

const merged = { ...defaults, ...overrides };
console.log(merged); // { a: 1, b: 3, c: 4 }

// spread with strings
const letters = [..."hello"];
console.log(letters); // ['h', 'e', 'l', 'l', 'o']

```




### Nesting Functions
___

An outer function may need a helper function relevant only to a given function. It would be good programming practice to hide that function from the rest of the program by nesting it within the function that needs it.

```javascript
const title = 'This is the title of my cool book';

const toTitleCase = (string) =>{
  const capitalize = (word) => {
    return word.slice(0,1).toUpperCase() + word.slice(1);
  }

  let strArr = string.split(' ');
  strArr.forEach((el, i) => strArr[i] = capitalize(el));
  return strArr.join(' ');
}

toTitleCase(title); // This Is The Title Of My Cool Book

```
