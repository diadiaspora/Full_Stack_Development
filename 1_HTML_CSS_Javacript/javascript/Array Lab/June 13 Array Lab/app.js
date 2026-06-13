/*
Exercise 1: Define an empty array
1) Create an empty array and assign it to a variable called `foods`.
Exercise 1 has been completed for you:
*/
const foods = [];
console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array
1) Add 'pizza' and 'cheeseburger' to the `foods` array.
Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.
Complete Exercise 2 in the space below:
*/

foods.push('pizza','cheeseburger');

console.log('Exercise 2 result:', foods);

/*
Exercise 3: Insert at the beginning
1) Insert the string 'taco' at the beginning of the `foods` array.
Complete Exercise 3 in the space below:
*/

foods.unshift('taco');

console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element
1) Retrieve the 'pizza' string from the array based on its position (index) in
the array.
2) Assign it to a variable called `favFood`.
Complete Exercise 4 in the space below:
*/

favFood = foods[1];
console.log('Exercise 4 result:', favFood);

/*
Exercise 5: Insert an element between two others
1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu');

console.log('Exercise 5 result:', foods);
/*

Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.
Complete Exercise 6 in the space below:
*/

foods.splice(1,1,'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);

/*
Exercise 7: Using the `slice()` method
1) Use the `slice()` method to create a new array that contains 'sushi' and
'cupcake'.
2) Assign it to a variable named `yummy`.
Complete Exercise 7 in the space below:
*/

yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index
1) Using the `indexOf()` method, find the index of the string 'tofu' in the
`foods` array.
2) Assign it to a variable named `soyIdx`.
Complete Exercise 8 in the space below:
*/

soyIdx = foods.indexOf('tofu');

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements
1) Use the `join()` method to concatenate the strings in the `foods` array,
separated by ' -> '.
2) Assign the result to a variable called `allFoods`.
Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'
Complete Exercise 9 in the space below:
*/

allFoods = foods.join(' -> ');

console.log('Exercise 9 result:', allFoods);

/*
Exercise 10: Check for an element
1) Using the .includes() method, check if the `foods` array contains the string
'soup'.
2) Assign the result to a variable called `hasSoup``.
Complete Exercise 10 in the space below:
*/

hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);

/*
Exercise 11: Odd numbers from an array
1) Choose a method to iterate through the `nums` array.
2) Push each odd number to a new array named `odds`.
Hint: Initialize the `odds` variable to an empty array before the iteration.
Complete Exercise 11 in the space below:
*/
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

odds = [];

for (let idx = 0; idx < nums.length; idx++) {
  if (nums[idx] % 2 === 0) {
      odds.push(nums[idx]);
  }
}

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays
1) Choose a method to iterate through the `nums` array.

2. As you loop, sort the numbers into new arrays based on the following rules:
- Push any number evenly divisible by 3 to an array called `fizz`.
- Push any number evenly divisible by 5 to an array called `buzz`.
- Push any number that is evenly divisible by 3 and 5 to an array called
`fizzbuzz`.
Note: A single number may meet more than one of the above rules. If it does,
it should be placed in multiple arrays. For example, the number `15`
will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.
Complete Exercise 12 in the space below:
*/

fizz = [];
buzz = [];
fizzbuzz = [];

for (let idx = 0; idx < nums.length; idx++) {
  if (nums[idx] % 3 === 0) {
      fizz.push(nums[idx]);
  } if (nums[idx] % 5 === 0) {
      buzz.push(nums[idx]);
  } if (nums[idx] % 5 === 0 && nums[idx] % 3 === 0 ) {
      fizzbuzz.push(nums[idx]);
  }
}


console.log('Exercise 12 Results:');
console.log(' fizz:', fizz);
console.log(' buzz:', buzz);
console.log(' fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array
1) Assign the last nested array in the `numArrays` below to a variable named
`numList`. As you do this, also fulfill these goals:
- Assume you don't know how many nested arrays `numArrays` contains.
- Do not alter the original `numArrays` array.
Complete Exercise 13 in the space below:
*/
const numArrays = [
[100, 5, 23],
[15, 21, 72, 9],
[45, 66],
[7, 81, 90]
];

let numList = numArrays[numArrays.length -1]

console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays
1) Retrieve the number `66` from the `numArrays` array. As part of this process
do not alter the original `numArrays` array.
2) Assign it to a variable called `num`.
Complete Exercise 14 in the space below:
*/

num = numArrays[2][1];

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum
1) Use nested loops or `forEach()` methods to sum up all numbers within
`numArrays` nested arrays.
2) Assign the sum to a variable called `total`.
Hint: Be sure to declare and initialize the total variable before the iterations.
Complete Exercise 15 in the space below:
*/

let total = 0;

numArrays.forEach((numArray) => {
  numArray.forEach((num) => {
    total += num;
  });
});

console.log('Exercise 15 result:\n', total);

/*
Let's break it down line by line.

### Step 1: Create a variable to hold the total

```javascript
let total = 0;
```

This creates a variable named `total` and starts it at `0`.

Think of `total` as a running calculator display that keeps adding numbers.

---

### Step 2: Loop through each nested array

```javascript
numArrays.forEach((numArray) => {
```

Suppose `numArrays` looks like this:

```javascript
let numArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];
```

The outer `forEach()` visits each inner array one at a time.

#### First iteration

```javascript
numArray = [1, 2, 3]
```

#### Second iteration

```javascript
numArray = [4, 5]
```

#### Third iteration

```javascript
numArray = [6, 7]
```

---

### Step 3: Loop through the numbers inside each array

```javascript
numArray.forEach((num) => {
```

When `numArray` is:

```javascript
[1, 2, 3]
```

this inner `forEach()` visits:

```javascript
num = 1
num = 2
num = 3
```

One at a time.

---

### Step 4: Add each number to the total

```javascript
total += num;
```

This is shorthand for:

```javascript
total = total + num;
```

For example:

```javascript
total = 0
num = 1
```

becomes:

```javascript
total = 1
```

Then:

```javascript
total = 1
num = 2
```

becomes:

```javascript
total = 3
```

Then:

```javascript
total = 3
num = 3
```

becomes:

```javascript
total = 6
```

---

### Visual walkthrough

Starting array:

```javascript
let numArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7]
];
```

Process:

```text
total = 0

Outer loop: [1,2,3]
    num = 1 → total = 1
    num = 2 → total = 3
    num = 3 → total = 6

Outer loop: [4,5]
    num = 4 → total = 10
    num = 5 → total = 15

Outer loop: [6,7]
    num = 6 → total = 21
    num = 7 → total = 28
```

Final result:

```javascript
total === 28
```

---

### What the parentheses mean

```javascript
(numArray)
```

and

```javascript
(num)
```

are **parameters**.

They're temporary variable names that hold the current item being processed.

For example:

```javascript
numArrays.forEach((numArray) => {
```

could also be written as:

```javascript
numArrays.forEach((item) => {
```

or

```javascript
numArrays.forEach((banana) => {
```

JavaScript doesn't care about the name. We use `numArray` because it clearly describes what's being stored: one of the nested arrays.

Similarly:

```javascript
numArray.forEach((num) => {
```

uses `num` because each item is a number.

---

A useful way to read the whole thing in English is:

> "For each array inside `numArrays`, go through each number in that array and add it to `total`."


*/