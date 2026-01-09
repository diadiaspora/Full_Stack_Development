# Arrays
An ordered list of data
___

* Arrays can contain zero or more elements in a <u>specific order</u> (similar to lists in python).

* Can hold any data type - strings, numbers, objects, functions, or even other arrays.

```javascript
const nums= [2,4,18];
```

1. The const keyword. Arrays should be declared using const.
2. The name of the array should be plural.
3. Opening and closing square brackets indicate an array.
4. The array’s elements are placed inside the square brackets. A comma separates each element,
   meaning the above array has been initialized with three elements. You don’t have to include
   elements when initializing an array; use a set of empty square brackets - [].

__The name of an array should always be plural because it holds a collection of items. The array above is named nums because it holds numbers inside of it.__

### Accessing elements 
___

Array elements are accessed using square bracket notation along with the element’s index (position) within the array.

```javascript
const movies = ['Barbie', 'Interstellar', 'Get Out'];

const firstMovie = movies[0];
// firstMovie is 'Barbie'
```

### The `length` property


```javascript
console.log(movies.length);
// `3` is logged to the console
```

__Using length to access the last element of an array__

```javascript
const lastMovie = movies[movies.length - 1];
// lastMovie is 'Get Out'
```

This works because the code movies.length - 1 will resolve to the number 2, and the item held in the 2 index of the movies array is 'Get Out'.

### Updating Elements

```javascript
// recall that movies is ['Barbie', 'Interstellar', 'Get Out']

// let's update the 2nd movie (index of 1)
movies[1] = 'Arrival';
// movies is now ['Barbie', 'Arrival', 'Get Out']

```

```javascript
// attempting to change the movies constant to a string
movies = 'Barbie and Arrival';
// attempting to change the movies constant to a different array (even if the contents of that array are identical)

You’re trying to make movies point to a string instead of the array.
    
movies = ['Barbie', 'Arrival', 'Get Out'];

Error because this is a different array object in memory.
```

### Adding or removing elements at the start or end of an array

__`push()`__
add one or more elements to the end of an array using the push() method:

```javascript

movies.push('Parasite', 'Dune');
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite', 'Dune']
```
__`pop()`__
remove a single element from the end of an array using the pop() method:

```javascript
movies.pop();
// movies is ['Barbie', 'Arrival', 'Get Out', 'Parasite"]

```
`pop()` doesn’t take any arguments and returns the element that was removed from the array:

```javascript
const removedMovie = movies.pop();
// movies is ['Barbie', 'Arrival', 'Get Out']
// removedMovie is 'Parasite'
```

## Iteration
the process of repeatedly executing a set of instructions or looping through a collection of items (like an array or string) one by one until a specific condition is met or until no more items are left to process.
___

### __`for` loop__ 

A standard for loop can iterate through an array. Initialize the loop with idx set to 0 - the index of the first element. End iteration at the index of the last element:

```javascript
// as a reminder, movies is ['Barbie', 'Arrival', 'Get Out', 'Coco']

for (let idx = 0; idx < movies.length; idx++) {
  console.log(movies[idx]);
}

```

Inside the loop, idx serves as the index to retrieve elements from the movies array. It increments by 1 after the code inside of the { } has been executed until the condition statement (idx < movies.length) is no longer true.

We use the length property of movies to ensure that this loop is dynamic to the size of the array - as elements are added or removed, this same loop will still function.

For our ['Barbie', 'Arrival', 'Get Out', 'Coco'] array, this will result in the following output:

```javascript
Barbie
Arrival
Get Out
Coco

```

number each item:

```javascript
for (let idx = 0; idx < movies.length; idx++) {
  console.log(`${idx + 1}. ${movies[idx]}`);
}


1. Barbie
2. Arrival
3. Get Out
4. Coco

```

### __`for...of` loop__

The for...of statement is a declarative approach that provides a more concise way to iterate over arrays (and other iterable structures like strings):

```javascript 
for (let movie of movies) {
  console.log(movie);
}

Barbie
Arrival
Get Out
Coco

```

When using imperative programming, you instruct the computer how to achieve a specific outcome step by step. When using declarative programming, you tell the computer the desired outcome, omitting the finer details. A mnemonic may be helpful to remember this:

Imperative programming requires instructions to carry out a task.
Declarative programming is a decree unconcerned with how the result happens, just that it does.

### __`for...in` loop__

(research this)

### __`for...each` __

Declarative approach that provides a more readable way to iterate over all array elements. This method clearly communicates a developer’s intention to process each item and perform an action on each.

movies.forEach(callbackFunction);