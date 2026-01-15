# `Control Flow (Javascript)`
Different code paths executing according to the evaluation of conditional expressions.
___

__Sequence:__

Statements execute one at a time in succession. This is the default behavior.

__Branching:__ 

Different code paths are executed based on a conditional expression.

__Looping:__

The code in the loop repeatedly executes while a condition is truthy.



## `Boolean`
___

### Equality Operators
___

* === - Strict Equality (Best Practice)
* == - Loose Equality (Performs Type Conversion)

__Strict equality__ === avoids confusion and errors in code by ensuring that not only the values are equal but also their types.

```javascript
3 === 3   // true
3 === 4   // false
3 === '3' // false 

3 == '3' // loose equality true, but dangerous

```

### Relational Operators

___

* \<  Less than
* \> Greater than
* \<= Less than or equal to
* \>= Greater than or equal to

```javascript
3 < 4       // true
3 > 4       // false
10 >= 5 + 5 // true
```

### Logical Operators

Help evaluate multiple conditions simultaneously. Allow you to check conditions but also provide some powerful behaviors that can make your code more concise and expressive.

___
* OR (||) operator evaluates multiple conditions. If any of the conditions evaluate to true,
  then the operator resolves to true.

* AND (&&) operator also evaluates multiple conditions. Every condition must evaluate to true
  for the operator to resolve to true.

__With || it checks if either or any of the values are true.__

```javascript
true || true   // true
true || false  // true
false || false // false

'sandwich' === 'sandwich' || 2 === 2 // true
'hotdog' === 'sandwich' || 2 === 2   // true
'hotdog' === 'sandwich' || 4 === 5   // false

true || true || true    // true
true || true || false   // true
true || false || false  // true
false || false || false // false
```

__With || it checks if both/all of the values are true.__

```javascript
true && true   // true
true && false  // false
false && false // false

'sandwich' === 'sandwich' && 2 === 2 // true
'hotdog' === 'sandwich' && 2 === 2   // false
'hotdog' === 'sandwich' && 4 === 5   // false

true && true && true    // true
true && true && false   // false
true && false && false  // false
false && false && false // false

```
### The Not Operator
bang operator, flips a true expression to the boolean value of false, and vice-versa. Its like "opposite day"
___

```javascript
!false  // true
!true   // false
```

__used in conjunction with the equality operators__

```javascript
3 !== 4   // true, 3 isn't equal to 4
3 !== 3   // false, 3 is equal to 3
```
## `Branching`

A type of control flow that allows for different code paths to be executed based on specific conditions.
___

__`if`__
__Single Path__

To execute a statement or statements conditionally, use the if statement. Conditional expressions must be surrounded by parenthesis.

__The if statement checks a condition  (it’s like asking a yes-or-no question).__

  1. If the answer is ‘yes’ (which in coding terms means the condition is true), then the code
  inside the if block will run. 

  3. If the answer is ‘no’ (false), the code inside the block will be skipped.

```javascript
const val = 1;

// Ask: Is val exactly equal to 1?
if (val === 1) {
  console.log('This code runs because val is 1');
}
// Since val is 1, the answer is 'yes', so the code inside the if block runs.

```
___
__`if else`__
__Dual Path__

When using an if...else statement, the code inside the if block will be executed if the condition evaluates to true. If the condition evaluates to false, then the code inside the else block will be executed.

Think of if...else like a fork in the road. If the condition in the if part is true, take the first path. Otherwise, take the else path.

```javascript
const val = 2;

// If path
if (val === 1) {
  console.log('val is one');
// Else path
} else {
  console.log('val is not one');
  // Since val is not 1, the else path is taken, printing 'val is not one'.
}
```
___
__`if...else if...else`__
__Three or more paths__

If you have three or more code paths, use if with as many else if statements as necessary and optionally a final else.

When you have several conditions to check, think of if...else if...else like multiple doors to choose from. Only one door can be entered, based on which condition is true.

```javascript
const val = 3;

if (val === 1) {
  console.log('val is one');
} else if (val === 2) {
  console.log('val is two');
} else if (val === 3) {
  console.log('val is three');
} else {
  console.log('not one, two, or three');
}

// val is 3, so 'val is three' will be printed.

```

### __`Nested Branching Statements`__
 if statements placed inside other if or else blocks, allowing for more complex decision-making.
___

 ```javascript
const dayOfTheWeek = 'Friday';
const isAfternoon = true;

if (dayOfTheWeek === 'Friday') {
  if (isAfternoon) {
    console.log('Almost the weekend!');
  } else {
    console.log('Happy Friday morning!');
  }
} else {
  console.log("It's not Friday.");
}

 ```

### __`Ternerary Operator`__
when you need to carry out one of two actions depending on a condition. 
___

It __is an if/else statement__ but,

<u>if/else:>/u>

```javascript

const num = 100;

if (num > 5) {
  console.log('num is larger than 5');
} else {
  console.log('num is 5 or less');
}

```

* Controls program flow

* Can execute multiple statements

* More readable for complex logic

<u>Ternirary operator:</u>

```javascript
num > 5 ? console.log('num is larger than 5') : console.log('num is 5 or less');
```

* Produces a value

* Must return one of two expressions

* Best for simple, direct choices

__Ternirary Syntax__

* num > 5 is our condition.
* The condition is followed by a ?.
* An expression to execute if the condition is true or truthy.
* A colon :.
* An expression to execute if the condition is false or falsy.
* 
```javascript
let message = num > 5 ? 'num is larger than 5' : 'num is 5 or less';

console.log(message);

/*
BTW this is not a function. this is top level code, executed immedietly when the file runs. 

There is no function wrapper, no parameters, no return value.

for it to be a function: 

function checkNumber(num) {
  if (num > 5) {
    console.log('num is larger than 5');
  } else {
    console.log('num is 5 or less');
  }
}

function expression:

const checkNumber = function (num) {
  if (num > 5) {
    console.log('num is larger than 5');
  } else {
    console.log('num is 5 or less');
  }
};

Arrow function:

const checkNumber = (num) => {
  if (num > 5) {
    console.log('num is larger than 5');
  } else {
    console.log('num is 5 or less');
  }
};


*\
```
vs

```javascript
let message;

if (num > 5) {
  message = 'num is larger than 5';
} else {
  message = 'num is 5 or less';
}

console.log(message)
```

### __`Switch Statements`__
[switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

if you have more than three code paths, and your conditionals always check the same variable.
___

if..else..if..else:

```javascript
const seasonCheck = 'winter';

if (seasonCheck === 'summer') {
  console.log("It's summer!");
} else if (seasonCheck === 'fall') {
  console.log("It's fall now!");
} else if (seasonCheck === 'winter') {
  console.log('Brrr!');
} else if (seasonCheck === 'spring') {
  console.log("It's spring!");
} else {
  console.log('Invalid season');
}

```

__`switch`__

```javascript
const seasonCheck = 'winter';

switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

```

Fall-through is when a switch statement continues executing the next case because nothing stopped it.

```javascript
switch (seasonCheck) {
  case 'summer':
    console.log("It's summer!");
    break;
  case 'autumn':
  case 'fall':
    console.log("It's fall now!");
    break;
  case 'winter':
    console.log('Brrr!');
    break;
  case 'spring':
    console.log("It's spring!");
    break;
  default:
    console.log('Invalid season');
}

```

### __`while`__

loop when the number of iterations is unknown.
___

for loop

* Initialization, condition, and update are in one place

* Very readable for counting

Best for:

 * Arrays

 * Index-based iteration

 * Fixed or predictable loops
    

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

```

while loop:

* Only the condition is in the loop header

* Setup and update happen outside / inside

    Best for:

    * Unknown number of iterations

    * Waiting for a state to change

    * Event-driven or condition-driven loops
 
      
```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

```
Bad:

```javascript
let number = 1;

while (number <= 10) {
  console.log(number);
}

```
Nothing inside the loop changes number, so the condition never becomes false.

1. number starts at 1

2. Condition: number <= 10 → true

3. console.log(number) runs

4. Loop goes back to the top

5. number is still 1

6. Condition is still true

7. Repeat forever

__`do while`__
do…while loops are very similar to while loops, except they force the code block to execute at least once, regardless of the condition being truthy or falsy.
___

The code inside the do...while loop will execute once, even though 120 is not less than or equal to 10.
```javascript
let num = 120;

do {
  console.log(`${num} is even`);
  num += 2;
} while (num <= 10);

```


## `Looping`
 Looping repeats a set of actions. Typically code blocks that are repeated  either until a certain condition is no longer met (`while` the condition is `true`) or a specific number of times (`for` a certain number of iterations). 
___

__`for`__

A `for` loop repeats until a specific condition evaluates to `false`. `for` loops are commonly used to run a block of code a specified number of times. 

```javascript
    for (initialization; condition; afterthought) {
        statement;
    }
```

1. The __`for`__ keyword. This keyword starts a for loop, signaling the beginning of a block of code that will repeat a set of actions.
   
2. __`initialization`__ - An expression or variable declaration evaluated once before the loop begins. This is where you set up your loop counter. It is evaluated only once at the very start of the loop. For instance, `let i = 0`; initializes a counter variable `i to 0`. Variables declared here are local to the loop.

   
3. __`condition`__ - An expression to be evaluated before each loop iteration. Think of this as the ‘question’ the loop checks before each iteration. If this condition evaluates to `true`, the loop’s code block runs. If it evaluates to `false`, the loop stops. For example, `i < 10;` continues the loop as long as i is less than 10.

   
4. __`afterthought`__ - An expression to be evaluated at the end of each loop iteration. This part of the loop is for updating the loop counter and is evaluated after the code block has executed but before the next iteration’s condition check. Commonly, this involves incrementing the counter, like `i++`.

   
5. A __`code block`__ - The curly braces `{}` enclose the actions that you want to repeat in each loop iteration. This is where you put the code that does something, like printing values or modifying elements in an array.

    
6. __`Code to be executed`__ as long as the condition evaluates to true.


```javascript
for (let i = 1; i < 10; i++) {
  console.log(i);
}
```

__Step 1__
The `initialization` runs once before looping begins. It is used to declare and initialize a looping variable - in this example, a new variable named i is initialized with the value 1.

__Step 2__
The `condition` is evaluated. If `true`, the code block will execute. At the start of this loop, i was just initialized as 1, so i < 10 is true.

__Step 3__
The `statement` executes. It prints the current value of i to the console.

__Step 4__
The update expression `afterthought` is executed. In this example, i is incremented by 1.

__Step 5__
The loop control returns to Step 2.

__It’s common to see the variable `i` used as the loop counter. `i` is just a convention and not a requirement.__

```javascript
for (let number = 1; number < 10; number++) {
  console.log(number);
}
```

```javascript
for (let day = 1; day <= 7; day++) {
  console.log(`Day ${day} of the week`);
}
```

---

## `Truthy` & `Falsy`
___

Truthy and falsy are conceptual and attempt to treat non-boolean expressions as booleans (true or false)
___

__Falsy__

* null: Represents the intentional absence of any object value.

* `undefined:` Indicates that a variable has not been assigned a value.

* `false:` The boolean value of false.

* `0 (zero):` The number zero.

* `NaN (Not a Number):` Indicates a value that is not a valid number.

* `'' (An empty string):` Strings are falsy when they are empty. Note, a string with a value
   of a space (' ') is not empty and therefore is truthy.

__Truthy__

Everything else

### __`Single line if`__
for a simple condition that requires only a single action, write if statements in a more concise way. Best used for simple operations
___
Only one statement: The single-line if only allows for one statement to be executed.


```javascript
if (val === 1) console.log('This code will run only if val equals 1');

```
Curly braces are omitted.

As opposed to:

```javascript
if (val === 1) {
  console.log('This code will run only if val equals 1');
}
```

__`Loose Equality`__
___

Loose Equality:

```javascript
3 == '3'  // true
```

Strict Equality:

```javascript
3 === 3

```