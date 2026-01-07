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


