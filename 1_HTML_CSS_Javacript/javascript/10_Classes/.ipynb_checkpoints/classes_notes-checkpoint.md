# Classes
Classes act as blueprints for creating new objects. New objects are called instances of that class.
___

[OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)

![OOP](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-javascript-classes/concepts/assets/car-class-and-instances.png)

📚 An instance is an object produced by a class, containing all of the properties and behaviors defined by that class.

### Encapsulation in OOP

Classes provide a clear and structured way to encapsulate and manage related data and functionality. 

Encapsulation is a key principle of Object Oriented Programming. It is the concept of bundling data (properties/attributes) and related behavior (methods) within an object.

Let’s build on this idea using the cars in the example above. Consider the following three attributes:

1. make
2. model
3. color

On their own these attributes do not have much context. However, it makes sense to group (encapsulate) these attributes together to collectively describe characteristics of the same entity: a car.

```javascript
const myFirstCar = {
  make: 'Toyota',
  model: 'Corolla',
  color: 'black',
};

```

```javascript
const myFirstCar = {
  make: 'Toyota',
  model: 'Corolla',
  color: 'black',
  isRunning: false,
  start: function() {
    myFirstCar.isRunning = true;
    console.log('Running!');
  },
};

```

### Defining a class

[__Class__](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)

In JavaScript, we define a class using the class keyword:

Classes are typically written using PascalCase (capitalizing the first letter of each word), whereas functions are often written in camelCase (starting with a lowercase letter and capitalizing each subsequent word).

```javascript
class Car {
  // Code to define the class's properties and methods
};

```

### Instantiating a class

The term instantiation refers to the process of creating a new object from a class. This newly created object is known as an instance. When we instantiate a class, the instance we create inherits all the properties and behaviors defined in that class.

Instances are created using the new keyword, followed by the name of the class.

```javascript
const myCar = new Car();

```
If we try to view our new car object in the console, we’ll see that it doesn’t have any properties yet.

### The Constructor Method

When a class is instantiated, its constructor method is called automatically. The constructor is a special method defined within the class.

In the constructor method, you can define the initial values for the object’s properties. These properties are attached to the object using the this keyword:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    // return is not needed
    // because the new object is returned by default
  }
};

```

In this example, make and model are parameters passed to the constructor and are used to set the initial values of the make and model properties on each new Car instance.

Now when we create a new instance, we can define its initial values by passing arguments to the constructor:


```javascript
const myCar = new Car('Ford', 'Bronco');
console.log(myCar); // { make: "Ford", model: "Bronco" }

```

Not every property of a class requires a parameter in the constructor. If a property should have the same default value for every instance, you can directly assign it within the constructor.

For example, let’s make sure a car isn’t running when we build it:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.isRunning = false; // default to false
  }
};

```

What is `this`?
The word this in JavaScript might seem a bit confusing at first, but it’s actually very useful once you understand its function. Think of this as a special word that helps you access things inside the object you’re currently working with.

Imagine you’re inside a car. If you say, “Start this car,” you mean the car you’re in, right? Similarly, when you’re inside a JavaScript object (like a class), this refers to that object.

Key notes about this:

this is known as a keyword in JavaScript, available for use inside of functions or methods (like our constructor above).

The this keyword is a part of a function’s execution context, which includes the code and everything that aids in its execution.

this changes depending on which object is using the method.

All object-oriented programming languages use a keyword like this to:

Access an object’s own properties: Inside an object’s method , this lets you access other properties or methods of the same object. It’s like saying, “In this house, turn on this light.”

Reuse Code: Sometimes, you want to write a method that you can use in different objects. this helps these methods work correctly no matter which object uses them, because this will always refer to the object that’s currently using the method.

Lastly, the value of this is automatically set by the JavaScript engine when a function is invoked. The act of setting that value is known as binding and although we can change the value of this, doing so is not common.

Object Creation - behind the scenes
When you create an object from a class in JavaScript using the new keyword, several steps happen in the background:

JavaScript creates a shiny new empty object and assigns it to the this keyword.

The class’s constructor method is called automatically. The arguments you pass when creating a new object are fed into this constructor.

Inside the constructor, properties are assigned to the new object using this.

The class automatically returns the shiny new object.

Although the constructor method appears unique because it’s called automatically, there’s nothing special about how it’s defined; other methods are defined the same way.

Grasping this can be challenging at first, but with practice and examples, it becomes clearer. For now, what’s most important to remember is this in a class constructor is a reference to the new object being created. It’s a placeholder for the object’s name, which isn’t known until the class creates the object.

### Class methods

Two types of methods can be added to a class - [Prototype methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#methods) and [Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields).

1. __Prototype methods__ are available on an instance of the class (object) - this is why they are called instance methods in other OOP languages. forEach is an example of a prototype method on an array:

```javascript
const nums = [1, 2, 3, 4, 5];
nums.forEach(num => console.log(num));

```

1. __Static methods__ are called on the class itself and are not available on instances. These are typically used to implement behavior that doesn’t pertain to a specific instance.

[Array.isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) is an example of a static method on Array:

```javascript
const nums = [1, 2, 3, 4, 5];
console.log(Array.isArray(nums)); // true

```

### Defining prototype methods in a class

Let’s add a prototype method called start to our Car class:

```javascript
class Car {
  // The constructor will always be called
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    console.log('Running!');
  }
};

```

Notice the usage of the this keyword in our start method. It is being used outside of the constructor in this scenario.

In our start method, the this keyword refers to the current object instance. When defining methods in a class, we don’t know the names of the future instances. Because we don’t know the name of the object being created ahead of time, we cannot specify its name within the start method. Even if we knew the object’s name, it wouldn’t be very useful because our start method would only work with that single object! this allows the method to function correctly in the context of a specific object instance.

If we define an object directly, we can reference the object by its name within its methods:

```javascript
const myFirstCar = {
  make: 'Toyota',
  model: 'Corolla',
  color: 'black',
  isRunning: false,
  start: function() {
    // Referencing the object by its name:
    myFirstCar.isRunning = true;
    console.log('Running!');
  },
};

```

### Static methods

Static methods are typically used to implement behavior that does not pertain to a particular instance. These are callable on the class itself - not on its instances. For example, we could design the Car class so that it tracks every car it creates. We could then write static methods that return how many cars have been created, search for them by their make, and more.

```javascript
class Car {
  // the constructor will always be called
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    console.log('Running!');
  }
  static about() {
    console.log('I\'m the Car class!');
  }
};

```

💡 Notice the use of the static keyword that prefaces the method’s name.

Next, let’s call upon the static about method:

```javascript
Car.about(); // I'm the Car class! 

```
If we attempt to call about on the mySubaru instance, we should get an error:

```javascript
mySubaru.about(); // Uncaught TypeError: mySubaru.about is not a function

```

### Inheritance

In object-oriented programming, inheritance is a concept where a new class (known as a child or derived class) acquires, or inherits, attributes and behaviors (properties and methods) from an existing class (known as a parent or base class). This allows the child to use and, if necessary, modify or extend the functionalities of the parent class.

The newly derived class can be specialized by:

* Adding additional properties.
* Adding additional methods.
* Overriding existing methods.
  
📚 The newly derived class is called a derived or subclass while the original class is called a base or superclass.

A subclass automatically inherits all of the superclass’s properties and methods - whether you want them all or not.

[](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-javascript-classes/inheritance/assets/insect-inheritance.png)

Above, the Insect superclass has the BumbleBee and Grasshopper subclasses derived from it.

We’re going to add a subclass called ElectricCar that will be derived from the Car superclass! Here’s a diagram showing the relationship we will create.

[](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-javascript-classes/inheritance/assets/car-inheritance.png)

### Using the `extends` keyword to create a subclass

```javascript
class ElectricCar extends Car {
  constructor(make, model, color, batteryCharge) {
    super(make, model, color);
    this.batteryCharge = batteryCharge;
  }
};

```

In a derived class, the super keyword represents the parent superclass and must be called before the this keyword can be used in the constructor. It can also be used to access properties of the superclass.

Additional properties like batteryCharge above can be initialized in the constructor. Instances of ElectricCar will have a batteryCharge property, while instances of Car will not. Let’s build an electric car!

```javascript
const myVolvo = new ElectricCar('Volvo', 'EX30', 'Gray', 100); // Fully charged!

```

Determining which classes in a hierarchy to attach properties and methods to is difficult work, full of pitfalls and gotchas. This is one of the biggest hurdles to overcome when you’re getting started with inheritance - it won’t always be as clear-cut as it is above!

### Overriding Methods

A derived class can also override methods defined on the parent superclass. Let’s use this principle to modify the inherited start method for the ElectricCar class:

```javascript
class ElectricCar extends Car {
  constructor(make, model, color, batteryCharge) {
    super(make, model, color);
    this.batteryCharge = batteryCharge;
  }
  start() {
    if (this.batteryCharge > 0) {
      this.isRunning = true;
      console.log('Your electric car is running!');
    } else {
      this.isRunning = false;
      console.log('Time to recharge!');
    };
  }
};

```

Next, we’ll start up the electric car, quickly deplete the battery, and try to restart it:

```javascript
myVolvo.start() // "Your electric car is running!"
myVolvo.batteryCharge = 0
myVolvo.start() // "Time to recharge!"

```
Overriding prototype methods
In JavaScript, inheritance is a bit different compared to traditional object-oriented programming languages like Java or Python. In JavaScript, inheritance is based on prototypes rather than class-based hierarchies.

However, with the introduction of the class syntax in modern JavaScript, understanding prototypes isn’t as crucial for this lesson.

At the root of JavaScript’s inheritance hierarchy is the Object class. Almost every object in JavaScript is an instance of Object and inherits methods from Object.prototype.

For instance, the [toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) method is a common method that every object inherits:

```javascript
const mySubaru = new Car('Subaru', 'Crosstrek', 'blue');

console.log(mySubaru.toString()); // "[object Object]"

```

This default toString method isn’t very descriptive, so often, you’ll want to override it to make it more useful.

For example, we can override Object’s implementation of toString by defining it in our Car class:


```javascript
class Car {
  // the constructor will always be called
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.isRunning = false;
  }
  start() {
    this.isRunning = true;
    console.log('Running!');
  }
  static about() {
    console.log('I\'m the Car class!');
  }
  // override a prototype method
  toString() {
    return `This car is a ${this.color} ${this.make} ${this.model}.`;
  }
};

```

Now when we call the toString() method on mySubaru, we should see the defined output:

```javascript
const mySubaru = new Car('Subaru', 'Crosstrek', 'blue');

console.log(mySubaru.toString()); // "This car is a blue Subaru Crosstrek"

```

### Class heirarchy 

In object-oriented Programming, it’s not uncommon to have several layers of inheritance. The term class hierarchy refers to the layered structure in which classes are arranged.

Imagine you were to create an Airplane class alongside Car. The two classes are likely to share several overlapping properties like make or model. This might warrant creating a new class (perhaps Vehicle) to be a superclass of both the Car and Airplane classes, so that shared properties can be inherited rather than being defined multiple times.

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-javascript-classes/class-hierarchy/assets/vehicle-hierarchy.png)

You can start to see how class inheritance may play out in a larger application or system.

Below you can see a simplified class hierarchy for DOM elements:

![](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/intro-to-javascript-classes/class-hierarchy/assets/dom-class-hierarchy.png)

### Extending Built in Classes

It’s possible to use extends to subclass JavaScript’s built-in classes.

For example, it would be nice to have a last property on arrays that returns the last element of the array:

```javascript
class MyArray extends Array {
  get last() {
    return this[this.length - 1];
  }
}

```

You then would need to instantiate the MyArray class to create the specialized array:

```javascript
const nums = new MyArray(1, 2, 3, 4, 5);
console.log(nums.last); //-> 5

```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

### Constructor Functions

Before classes arrived via ES2015, constructor functions were used in place of classes. They accomplished the same task with a now outdated syntax.

Code written today will most likely use the class keyword, but you may encounter older code using constructor functions.

Let’s look at how the Car class can be written as a constructor function:

```javascript
function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.isRunning = false;  // default to false
};

Car.prototype.start = function() {
  this.isRunning = true;
  console.log('Running!');
};

// other prototype (instance) methods defined like above would go here
	
// Instantiation is identical
const car = new Car('Toyota', 'Camry', 'Green')

```

Static methods would be created directly on the constructor function:

```javascript
Car.about = function() {
  console.log('I\'m the Car class!');
};

```