### Variables
---
 __<u>variable:</u>__ a named container used to store and retrieve data.


__Identifiers in JS:__
* Are case-sensitive
* Cannot begin with a number
* Can contain letters, digits, underscores, and dollar signs
* Cannot contain spaces
* Cannot be reserved words or keywords


__The difference between let and const is that a const variable cannot be re-assigned.__
```javascript
let x = 25;
x = 100; // no problem
const z = 25;
z = 100; // Uncaught TypeError: Assignment to constant variable

```

### Primative Data Types
---
__<u>Primitive types </u>__ are data types that are stored directly in memory (on the stack) 

* __String__
* __Number__ there is no distinction between integer (15, 3, etc.) and floating-point/decimal types (17.24, 3.1416, etc.).
* __Boolean__ only has two possible values: true and false.
* __Undefined__ A variable that has not been assigned a value
* __Null__

These are immutable (cannot be changed). Operations on primitives create new values rather than modifying the old one.

```javascript
let str = "Hello";
let upperStr = str.toUpperCase();

console.log(str);      // "Hello"   ← original string unchanged
console.log(upperStr); // "HELLO"   ← new string created
```

__<u>Non Primitive types </u>__  Stores a reference to a value, not the value itself – the variable points to a location in memory (heap) where the actual data lives.

* Object { name: "Alice" }
* Array [1, 2, 3]
* Function () {}
* Date
* RegExp
* Basically, anything that is an object

``` javascript

// Reference
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same array
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4], changed
```

arr1 is a variable stored in memory (stack). The variable itself holds a reference to the array, but it does not contain the actual array. The array itself is a non-primitive value stored in the heap. arr2 can hold the same reference, so changes via arr2 affect the same array in the heap.

__String__

``` javascript 
let myString = 'Hello World';
let myOtherString = "Hello World again";
console.log(typeof myString);
// Prints: string

```

__Number__

``` javascript 

let myNumber = 15;
console.log(typeof myNumber);
// Prints: number


```

__Undefined__

``` javascript 

let cohort;
console.log(cohort);
// Prints: undefined

```

__Null__

``` javascript 

console.log(typeof null);
// Prints: object 

```

### Template Literals
---
__<u>interpolation</u>__ the process of inserting values into a string or expression using __template literals__ so the final result is dynamically constructed at runtime. They allow us to combine strings and place them anywhere we want in the template literal. 

__<u>template literals</u>__ a special type of string written using the backtick character: `

``` javascript 

let username = 'friend'; < string literal
let greeting = `Hello,`; < template literal without interpolation

```

``` javascript 

let greeting = `Hello, ${username}.`; < template literal with interpolation

```

``` javascript 

console.log(greeting);
// Prints: Hello, friend.

```

### Dynamically-typed Languages
---

__<u>Dynamically typed languages</u>__ allow variables to be assigned different types of data during runtime (as the program executes).The type of a variable can change at any time and is assigned a type based on whatever the variable’s value is at the time. 

* Javascript
* Python
* Ruby

``` javascript
// Declare a variable named data and initialize with a number
let data = 123;
// Reassigning a different type of data is allowed
data = 'Hello';

```

__<u>Statistically typed languages</u>__ once a variable is given a type, that type cannot change.

* Java
* C++

``` C++
// Declare a variable as an integer and initialize it with an int
int data = 123;
// Assigning anything other than an integer raises an error
data = "Hello"; 
// NOT ALLOWED
```

### Weakly Typed Languages
---

__<u>Weakly typed languages</u>__ allow implicit conversions between types, which can lead to interesting results. 

* Javascript

``` javascript
const num = 7;
const sentence = `A week is ${num} days.`;
console.log(sentence);
// Prints: A week is 7 days.
```

__<u>Strongly typed languages</u>__ Conversions between unrelated data types must be explicitly made 

* Python

``` python
num = 7
sentence = "A week is " + num + " days."
# Error! A string and an int cannot be concatenated!
```

``` python
num = 7
sentence = "A week is " + str(num) + " days." 
# This works!
print(sentence) 
# Prints: A week is 7 days.
```

### Type Conversion
---

__<u>Implicit type conversion</u>__ is the process of automatically converting one data type to another.

``` javascript 
13 == '13';
// true!
```
``` javascript 
13 === '13';
// false!
```  

__<u>Explicit type conversion</u>__ is the process of manually converting one data type to another. 

__`toString()`__ 
converts a value to a string. works with a specific value or object, not globally. Cannot be called on null or undefined (throws an error)

``` javascript 
let numOne = 123.456;
let strOne = numOne.toString(); // "123.456"
// false!
```


__`String()`__
Converts a value to a string. But unlike  `toString` it is its own independent function that can work globally.Works with null and undefined. Use String() when you want safe, guaranteed conversion

``` javascript 
let numTwo = 123.456;
let strTwo = String(numTwo); // "123.456"
```


__`toFixed()`__
converts a number to a string, rounding it to a specified number of decimal places.

``` javascript 
let numThree = 123.456;
let strThree = numThree.toFixed(2); // "123.46"
```

__`parseInt()`__ 
parses(converts) a string into an integer by reading from left to right and stopping when it hits a non-numeric character, ignoring any trailing non-numeric characters.

``` javascript 
let strFour = '1234.567';
let numFour = parseInt(strFour); // 1234

```

__`parseFloat()`__
reads a string from left to right and parses(converts) the leading numeric portion<u>including decimals</U> —into a number.

``` javascript 
let strFive = '1234.567';
let numFive = parseFloat(strFive); // 1234.567

```

__`Number()`__

converts a value into a number using JavaScript’s numeric conversion rules. returns a NaN if conversion fails.

``` javascript 
let strSix = '1234.567';
let numSix = Number(strSix); // 1234.567

```



