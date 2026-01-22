# Built-in classes and objects
___

__Classes__

In JavaScript, classes function as a blueprint to generate or “construct” objects. It defines the properties and methods that the objects created from this class will have. For instance, if you have a Car class, it might define properties like color and make, and methods like drive() or brake().

__Objects__

When you create a new object from a class, you are essentially using that class’s blueprint to build the object. Each object created from the class will have the properties and methods defined in the class. For example, if you create a new object from the Car class, that new car will have its own color, make, and the ability to perform actions like drive().

__Prototypes__

In JavaScript, objects have something called a prototype. A prototype is an object from which other objects inherit properties and methods. This is a core part of JavaScript’s prototype-based inheritance system. For instance, when you create an array in JavaScript, it inherits properties like length and methods like .join() from the Array prototype.

This is why, for example, a new array that you just created has access to a length property, or can use the .join() method:

```javascript
const anArray = [1,2,3,4,5];
console.log(anArray.length); // 5
console.log(anArray.join(‘’)); // 12345

```

### __`Built-In Objects`__
___

The `Math.` object in JavaScript is very useful for different tasks that require mathematics. For example, when you need random numbers for things like making unique IDs or shuffling items in a list.

__`.random()`__

This function gives you a random number between 0 (including 0) and 1 (but not reaching 1)

```javascript
Math.random() // you might get a result like: 0.5570349614485068
```

__`.floor()`__

Makes a number smaller to the nearest whole number:

```javascript
let num = 1.21
Math.floor(num) // gives you 1

```

This method has a return value of the largest integer less than or equal to the value of num. In other words, it removes or truncates everything after the decimal.

When combined, you can see how the built-in Math object can dramatically shorten code and make life easier. Without having to code out either method, we can create a function that gets a random integer from a maximum value:

```javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

```

### Built in Classes

The JavaScript Math object contains a lot of useful methods and values that we can reference. We don’t characterize the Math object as a class though, because we cannot use it to instantiate or create new objects. This makes sense because we don’t need new math objects to use its helpful properties. We have all the functionality we need baked into Math. We can just use this object directly.