
[Javascript Scope PDF](https://drive.google.com/drive/folders/1C-04ocN6Onepk3UnivYgqij9jlPIE9A2?usp=drive_link)


# Scope
___
 Only certain tools are available for use in certain places, and are separated by physical barriers. 
 
In programming languages with lexical scope, like JavaScript, the location of your variables and functions within your code determines where they can be used.

In JavaScript, curly braces {} act like walls or dividers in the workshop. They create distinct areas or zones. Variables declared inside these braces belong to that specific area and can’t be accessed outside of it,

### Function & Block Scope
___

* __Function scope:__ When you declare a variable inside a function, it can only be accessed within that function. This includes the function’s parameters as well.
  
* __Block scope:__ Similarly, if you declare a variable inside a code block such as within an if statement or a for loop (including any variables defined inside the ( )), you can only use that variable within that specific block.

__If you declare a variable inside curly braces { }, whether it’s part of a function or a code block, that variable can only be used within those curly braces.__

```javascript
const addNums = (numA) => {
  // Inside the addNums function
  const numB = 10;

  console.log(numA + numB);
  // Output: 15
};

addNums(5);

// Outside the addNums function:
console.log(numB);
// ERROR: ReferenceError: numB is not defined
// numB is out of scope!

```

⬆️ numB isn’t available outside the addNums function.

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
  // Defining username inside the if block
  const username = 'Frisco';

  console.log(username); 
  // Output: 'Frisco'
}

// Outside the if block:
console.log(username); 
// ERROR: ReferenceError: username is not defined

```
⬆️ username isn’t available outside the block scope created by the if statement.


```javascript
const chooseDinner = () => {
  let isHungry = true;
  let mainDish;

  if (isHungry) {
    mainDish = 'meatloaf';
  } else {
    mainDish = 'corn';
  }
  // Note how variables that are part of the outer function scope
  // (created by the function) are available to blocks inside its scope!

  console.log(`Dinner tonight is ${mainDish}`);
  // Prints: 'Dinner tonight is Meatloaf'
}

chooseDinner();

// Outside of the function, the variables declared within are unavailable.
console.log(mainDish);
// ERROR: ReferenceError: mainDish is not defined

```

__Differences between function and block scope__

* Variables declared with the var keyword do not respect block scope. This means that var is generally less safe and can complicate scope. Therefore, its usage is frowned upon, so we don’t use it in our examples, and neither should you when you write code.

* Variables in a function’s scope only exist while the function executes unless the function creates a closure. Closures are a complex topic not covered here. For more info check out MDN Closures.

### Global Scope
Global scope in JavaScript refers to the outermost scope where variables and functions are accessible throughout the entire codebase.
___

__Variables and functions declared in the global scope can be accessed and modified by any part of the code.__

Global variables are powerful but also risky, as their values can be changed from any scope, potentially leading to unintended side effects or bugs.

__Any variable declared outside a function or block will live in the global scope.__

```javascript
let mainDish;

const chooseDinner = () => {
  let isHungry = true;

  if (isHungry) {
    // We are able to modify the global mainDish variable
    mainDish = 'meatloaf';
  } else {
    mainDish = 'corn';
  }
  // Note how variables in the global scope can be modified anywhere!

  console.log(`Dinner tonight is ${mainDish}`);
  // Prints: 'Dinner tonight is Meatloaf'
}

chooseDinner();

// Because mainDish was declared in the global scope, it is available.
console.log(mainDish);
// Prints: 'meatloaf'

```

### __Scope Chain__
The scope chain is a mechanism that allows JavaScript to find variables and functions when they are referenced in code. It’s a chain of scopes, where each scope is a collection of variables and functions accessible within that scope.

```javascript
// Global scope
let friendName = "Burt";

const greet = () => {
  // Function scope
  let message = "Hello, " + friendName + "!";
  console.log(message);
}

greet();

```

When this code is run, JavaScript will first look for the value of friendName in the greet() function, the scope where it is used. When it doesn’t find it there, JavaScript will look one level up in the global scope where it will find friendName declared and set to the value “Burt”.

In the example above, the friendName variable is defined in global scope, making it accessible from anywhere in the code. The message variable is declared in the function scope of the greet() function, so it’s only accessible inside of that function.

You can go up the scope chain but not down it!
A key takeaway is that functions have access to the set of variables and functions defined within their own scope AND in the outer scopes. When a line of code accesses a variable (or function), JS will traverse up the scope chain until it finds what it’s looking for.

This means we can access variables and functions declared in the global scope from within any function. However, we cannot access variables and functions declared inside a function from outside of that function.

If the JS runtime engine gets to the global scope (the top of the food chain in the scope hierarchy) and still can’t find what it’s looking for, our program ceases due to a ReferenceError.




![image](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/javascript-scope/scope-chain/assets/scope-chain.png)

__The var Keyword__

When JavaScript was created, var was the only way to define variables. It’s the least restrictive of the three keywords, and it allows us to redeclare variables and declare variables without intializing them.

This lack of restriction can cause a lot of confusion and unintended behavior in our code, and is one of the reasons we don’t use var

### References
___

Lesson references

[MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

Wikipedia - 

[Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)

[MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

[MDN - let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

[MDN - let - Temporal dead zone (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)

[MDN - var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

[MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

Online Resources

JavaScript scope is fundamental to the language, high-quality resources can help deepen your understanding.

Here are some recommended ones:

[MDN Web Docs (Mozilla Developer Network)](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

Description: Comprehensive reference for web technologies, including JavaScript.

[W3Schools](https://www.w3schools.com/js/js_scope.asp)

Description: Provides a simple and clear introduction to many web technologies, including JavaScript scope.
