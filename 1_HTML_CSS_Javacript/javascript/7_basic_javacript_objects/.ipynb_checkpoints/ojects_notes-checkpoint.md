[Objects PDF](https://drive.google.com/drive/folders/1vhfUwkUznV8sX2a5KQ7C6oYpiYR8blMg?usp=drive_link)

# Objects
A container that holds related data and functions.
___

 __Objects are a collection of zero or more properties. A property consists of a key: value pair.__

 * The key acts as an identifier and must be a string or symbol. If any other type is used as a key, it will be coerced into a string.

* The value is a JavaScript expression that evaluates to a single value or thing. This encompasses simple data types like strings, numbers, or booleans. A value can also be an object or a function. When a function is bound to an object, it is called a method.

```javascript
{
    name: "Ben Manly"'
    birthday: "January 1, 2025"
}
```

__`Object literal notation`__

[Also known as an <u>Object initializer</u>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

Object Literal notation consists of a set of opening and closing curly braces, {}

```javascript
const music = {};
console.log(typeof music); // 'object'

//this creates an empty object named music. the type was checked and produced "object"

```
Adding a property:

```javascript
const music = { currentTrack: 'Just Ken' };
console.log(music);
```
properties are seperated by commas.

```javascript
const music = {
  currentTrack: 'Just Ken',
  volume: 70
};
```
[<u>Trailing commas</u>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are permitted:
```javascript
const music = {
  currentTrack: 'Just Ken',
  volume: 70, // <-----trailing comma
};
```

__`Dot Notaion`__
The primary way to access, add, or modify an existing object’s properties is dot notation.

```javascript
music.currentPlaylist = ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'];

```

__`Changing an object’s properties`__

To update a property in a JavaScript object, you assign a new value to one of its keys (which is like a label or name for that property):

```javascript
// const music = {
//   currentTrack: 'Just Ken',
//   currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
//   volume: 70, 
// }

// Let's lower the volume: 
music.volume = 60;

console.log(music.volume) // 60

```
When using the assignment operator, if a property doesn’t exist, it is created; otherwise, it’s updated.

__`Deleting an object’s properties`__
To completely remove a property from an object, we use the delete operator:

```javascript
const music = {
  currentTrack: 'Just Ken',
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70, 
}

// Let's remove our current playlist: 
delete music.currentPlaylist

console.log(music)
// { currentTrack: 'Just Ken', volume: 70 }

```

### __`Methods`__

A method is a function that is a property of an object. When a property holds a function, we commonly refer to it as a method of the object.

Methods are used to define actions or behaviors for an object.

```javascript
const music = {
  currentTrack: 'Just Ken',
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  // add the following:
  mute() {
    music.volume = 0;
  },
};

// You could also use dot notation assignment to define the same method if an object already exists:

music.mute = function () {
  music.volume = 0;
};

```


__For clarity...__
`mute` is a property of the `music` object whose value is a function.
Other properties in the music object are: 

* `currentTrack` → holds a string

* `volume` → holds a number

* `mute` → holds a function

Rewrite it like this to make it clear: 

```javascript

const music = {
  currentTrack: 'Just Ken',        // string
  currentPlaylist: [...],          // array
  volume: 70,                      // number
  mute: function () {              // function
    music.volume = 0;
  },
};

```

| Property name   | Value type |
| --------------- | ---------- |
| currentTrack    | string     |
| currentPlaylist | array      |
| volume          | number     |
| mute            | function   |

when you call mute():

```javascript

music.mute();

```

1. Go to the music object

2. Find the mute property

3. See that its value is a function

4. Execute that function


__`Calling object methods`__

In JavaScript, calling (or invoking) a method is similar to calling a function, but with an important difference: a method is called on an object and it only exists within that object’s context.

```javascript
music.mute();
// works!

```

When a function is part of an object (a method), you need to specify the object it belongs to.

```javascript
mute();
// reference error

```
__Adding a next() method to the music object__

This method will allow us to move to the next track in our currentPlaylist.

```javascript
const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
};
```

With trackIdx, we can dynamically find the current track from currentPlaylist array using square brackets []:

Here this is a console log that identifies the current playlist and then has a bracket that has a number in it that is the track id. in this case that would print just ken because just ken is the first on the current playlist array. 

```javascript
console.log(music.currentPlaylist[music.trackIdx]); // 'Just Ken'

```

build our next() method. This method should simply increment the trackIdx by 1:

the music next function incriments the number plus one.

```javascript
music.next = function () {
  music.trackIdx += 1;
};
```
so when you invoke it. without being seen it changes the value of trackIdx to 1. 
so when you console the same thing it has a differnent value and prints the second element of the array. 

```javascript
// invoke the method
music.next();

console.log(music.currentPlaylist[music.trackIdx]); // 'Hey Blondie'

```

```javascript
const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute() {
    music.volume = 0;
  },
  next() {
    music.trackIdx += 1;
  },
};

```

current music object:

```javascript
const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute(){
    music.volume = 0
  },
  next(){
    music.trackIdx += 1
    music.currentTrack = music.currentPlaylist[music.trackIdx]
  },
}

```

__If we adopted that structure for each song, then our currentPlaylist array would resemble something like this, an array of objects:__

```javascript

music.currentPlaylist = [
  {
    title: 'Just Ken',
    artist: 'Ryan Gosling',
    album: 'Barbie The Album',
    length: '3:43',
  }, {
    title: 'Hey Blondie',
    artist: 'Dominic Fike',
    album: 'Barbie The Album',
    length: '2:21',
  }, {
    title: 'What Was I Made For',
    artist: 'Billie Eilish',
    album: 'Barbie The Album',
    length: '3:42',
  }, {
    title: 'Dance The Night',
    artist: 'Dua Lipa',
    album: 'Barbie The Album',
    length: '2:56',
  }
];

```

```javascript
console.log(music.currentPlaylist[music.trackIdx]);

// { title: 'Just Ken', artist: 'Ryan Gosling', album: 'Barbie The Album',length: '3:43' }

console.log(music.currentPlaylist[music.trackIdx].title); // 'Just Ken'
console.log(music.currentPlaylist[music.trackIdx].artist); // 'Ryan Gosling'


```

__`this`__
a special keyword that refers to the object that is currently executing the code. When you use this inside a method, it allows you to access other properties and methods of the same object.


without this:

```javascript
const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute() {
    music.volume = 0; // we must reference the object by name
  },
  next() {
    music.trackIdx += 1; // we must reference the object by name
  },
};

// Calling methods
music.mute();
console.log(music.volume);  // Output: 0

music.next();
console.log(music.currentPlaylist[music.trackIdx]);  // Output: 'Hey Blondie'

```

with this:
```javascript

const music = {
  currentTrack: 'Just Ken',
  trackIdx: 0,
  currentPlaylist: ['Just Ken', 'Hey Blondie', 'What Was I Made For', 'Dance The Night'],
  volume: 70,
  mute() {
    this.volume = 0;  // 'this' is referring to the music obj
  },
  next() {
    this.trackIdx += 1; 
    this.currentTrack = this.currentPlaylist[this.trackIdx];
  },
};

// Calling methods
music.mute();
console.log(music.volume);  // Output: 0

music.next();
console.log(music.currentTrack);  // Output: 'Hey Blondie'


```

By using this, we avoid hardcoding the object name within its methods, making the code easier to maintain and reuse. As you continue learning about JavaScript, understanding this will be essential, especially when you start working with classes and more complex objects.

__`Getters`__

* A getter is used to access the value of an object’s property.
  
* It’s defined using the get keyword.

* A getter does not take any arguments and is used like a property, not a function call.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

// used like a property, not a function call
console.log(person.fullName); // 'John Doe'
```
__`Setters`__

* A setter is used to set the value of an object’s property.
  
* It’s defined using the set keyword.

* A setter takes a single argument and is used to assign a value.

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  }
};

// takes a single argument and is used to assign a value
person.fullName = 'Jane Smith';
console.log(person.firstName); // 'Jane'
console.log(person.lastName); // 'Smith'
```
__`Iterating Through Properties`__

```javascript
const student = {
  name: 'Ashley',
  email: 'student@email.com',
  enrolled: true,
}

```

We can iterate over the keys of the properties using a `for...in` loop:

```javascript

for (let key in student) {
  console.log(`The value of the ${key} property is ${student[key]}`)
}

// Output
// The value of the name property is 'Ashley'
// The value of the email property is 'student@email.com'
// The value of the enrolled property is true

```

There’s a couple of nifty ES2017 methods that can be used to iterate over an object’s own keys or values:

`Object.keys(obj)`
`Object.values(obj)`
`Object.entries(obj)`

```javascript
Object.values(student).forEach(function(val) {
  console.log(val)
})

// Output
// 'Ashley'
// 'student@email.com'
// true

```

__`Property Shorthand Syntax`__

manually assigning each variable to a property in the book object, even though the property names are the same as the variable names.
```const title = "To Kill a Mockingbird";
const author = "Harper Lee";
const yearPublished = 1960;

const book = {
  title: title,
  author: author,
  yearPublished: yearPublished
};

console.log(book);

// Output: 
// { 
//   title: "To Kill a Mockingbird", 
//   author: "Harper Lee", 
//   yearPublished: 1960 
// }
```

Simplify this by omitting the property names when they match the variable names:


```javascript
const title = "To Kill a Mockingbird";
const author = "Harper Lee";
const yearPublished = 1960;

const book = {
  title,
  author,
  yearPublished
};

console.log(book);

// Output: 
// { 
//   title: "To Kill a Mockingbird", 
//   author: "Harper Lee", 
//   yearPublished: 1960 
// }
```

__How Variables Reference Objects__
Variables are slots in memory that hold a value. All non-object data types are known as primitive or value types because they hold a single value.

```javascript
SCOPE TABLE            var | value/ref
                      -----------------
let x = 25        -->   x  |  25
var msg = 'hello' -->  msg | 'hello'
const y = x       -->   y  |  25

```

Objects are complex/reference types because they can hold multiple pieces of data.

Objects, including Arrays, Functions, etc., are stored in a separate part of memory known as the heap. A variable for an object has as its value a “reference” (think pointer):

```javascript
SCOPE TABLE             var | value/ref
                       -----------------
let x = 25         -->   x  |  25
var msg = 'hello'  -->  msg | 'hello'        HEAP 
const obj = {a: 1} -->  obj |  ref1   --->  {a: 1} <--|
let arr = [1,2]    -->  arr |  ref2   --->  [1,2]     |
let obj2 = obj     -->  obj2|  ref1   -----------------

```

Variables don’t “contain” the object — they point to it.

In this example array one and array two are not equal because even though they have identical values they point to two different arrays.

```javascript
const arr1 = []
const arr2 = []
const arr3 = arr1
arr1 === arr2  // false!
arr3 === arr1 // true!
```

__Square Bracket Notation__

We use square bracket notation instead of dot notation when we’re writing code where we don’t know which property needs to be accessed. 

__Prototyping and Inheritance__