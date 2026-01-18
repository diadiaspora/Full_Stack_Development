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

