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