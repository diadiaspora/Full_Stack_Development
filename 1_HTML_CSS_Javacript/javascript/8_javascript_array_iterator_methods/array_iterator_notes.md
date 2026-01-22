[Array Iterator PDF](https://drive.google.com/drive/folders/1tveSSA48VcfSV42TIECkBWJ8Rli8o2i9?usp=drive_link)

# Array Iterator Methods
These methods make use of callback functions to execute code for each iteration.
___

Array iterator methods allow you to write more declarative/functional code as opposed to imperative code.

```javascript
// find an element in an array:

array.find((element) => {
  // search criteria 
});

```

### __`.map()`__

```javascript
// callback function parameters
array.map((element, index, array) => {

});
```

1. element - The current element
2. index - The index of the current element (optional)
3. array - The array the iterator method was called upon (optional, and you probably won’t ever use it)

the callback function we write will be called once for each element in the array. Under the hood, the engine will be passing arguments for each of these three parameters once for every iteration through the array.

```javascript
const array = ['apple','banana','orange'];

const mappedArray = array.map((element, index, array) => {
  return `element is: ${element}, index is: ${index}, array is ${array}`;
});

console.log(mappedArray)
// [ 'element is: apple, index is: 0, array is apple,banana,orange',
//   'element is: banana, index is: 1, array is apple,banana,orange',
//   'element is: orange, index is: 2, array is apple,banana,orange' ]

```

As we loop through the array, element is being supplied different values as an argument. The index is also changing as we move through the array. The array itself is static, as it always references the array itself!

__It is considered best practice to choose a clear, singular name for the element parameter. If dealing with an array called students, then the singular student is a logical choice.__

```javascript
const students = [];

let mappedArray = students.map((student) => {
  
});

```

__`index`__
It’s very common to leave both the index and array parameters off the signature entirely.


```javascript
const animals = ['chicken', 'goat', 'pig', 'sheep', 'cow'];

const oddAnimals = animals.filter((animal, index) => {
  if(index % 2) return animal;
});

console.log(oddAnimals);

```

### __`filter()`__
__Selects certain elements from an array, returning a new array with only those elements.__


Its callback function requires a conditional statement that will either resolve to truthy or falsy when returned, and filter() uses that value to decide if it should “keep” the element or not. If the condition is falsy, the element is excluded (or “discarded”) from the new array. The new array will thus have only “true” elements, based on the criteria provided.

```javascript
const arr = [true, false, true, false, false, true]

const filteredArr = arr.filter((element) => {
  return element;
});

console.log(filteredArr); // [true, true, true]

```
```javascript

const arr = [true, false, 0, 'string', '', null, undefined, 42]

const filteredArr = arr.filter((element) => {
  return element;
});

console.log(filteredArr); // [true, 'string', 42]


```

filter() will make use of some sort of comparison or equality operator:

Obtain all numbers over 50:

```javascript
const nums = [100, 2, 5, 42, 99]

const numsOver50 = nums.filter((num) => {
  return num > 50;
});

console.log(numsOver50); // [100, 99]

```

Obtain just the odd numbers:

```javascript
const nums = [100, 2, 5, 42, 99]

const odds = nums.filter((num) => {
  return num % 2;
});

console.log(odds);
```


### __`.find()`__

Returns the first element that satisfies the provided testing function, and returns undefined if no match is found.

```javascript
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCar = cars.find((car) => {
  return car.color === 'white';
})
// firstWhiteCar is {color: 'white', make: 'Toyota', year: 2013}

const missingCar = cars.find((car) => {
  return car.color === 'black';
});
// missingCar = undefined

```

### __`findIndex()`__

Similar to find, except it will return a numeric index value instead of the element itself. Instead of undefined, if no match is found findIndex() returns -1.

```javascript
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCarIdx = cars.findIndex((car) => {           
  return car.color === 'white';
});
// firstWhiteCarIdx equals 1

const missingCarIdx = cars.findIndex((car) => {
  return car.color === 'black';
});
// missingCarIdx = -1

```

### __`.some()`__ 

Checks if an array has at least one element that meets a specific condition.

```javascript
const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const hasFord = cars.some((car) => {
  return car.make === 'Ford';
});
// hasFord is true

```


### __`.every()`__

Check if every element in an array meets a certain condition.

```javascript

const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'blue', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const everyCarIsBlue = cars.every((car) => {
  return car.color === 'blue'
});

// everyCarIsBlue is false

```

### __`.reduce()`__
Reduce an array into a single value. Note that the “single value” can be a single object, array, or string.

The function is called with the following arguments:

1. accumulator - The value returned from the previous callback function. On the first call, this value is set to initialValue. The accumulator argument is crucial - it is how reduce() is able to keep track of a value throughout the entire iteration process.

2. currentValue - The value of the current element. This operates the same as the element argument in other array iterator methods like map and filter.

3. currentIndex (optional) - The index position of the currentValue.

4. array (optional) - The array reduce() was called on.

```javascript
const nums = [25, 5, 100, 10];

let sum = nums.reduce(function(accumulator, num) {
  return accumulator + num
}, 0);

// sum equals 140

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num, 0);

```
```javascript
let votes = ['Yes', 'No', 'Yes', 'Yes', 'No'];

let tally = votes.reduce(function(acc, vote){
  if(acc[vote]){
    acc[vote] = acc[vote] + 1;
  } else {
    acc[vote] = 1;
  }
  return acc;
}, {});

// tally is { 'Yes': 3, 'No': 2 }

```

Let’s break this example down together.

1. reduce() is called on the votes array.
2. takes two arguments: acc (the accumulator) and vote (the current array element).
acc starts as {} and eventually becomes the tally object.
3. he function checks if acc[vote] exists. acc[vote] refers to the property of acc whose key is the current vote (‘Yes’ or ‘No’).
4. If acc[vote] exists, it means this vote type has been encountered before, so the function increments the count: acc[vote] = acc[vote] + 1.
5. If acc[vote] does not exist (which is true the first time a particular vote type is encountered), it sets acc[vote] = 1.
6. After modifying acc, the function returns it. This returned value becomes the acc for the next iteration.
7. After reduce() has processed all elements in the votes array, the final value of acc is assigned to tally.
tally is an object that contains the count of each vote type: { ‘Yes’: 3, ‘No’: 2 }.
8. While it is true that reduce COULD be used to handle the same tasks as almost all of the other examples you’ve seen in this module, best practice is to stay focused on what reduce truly excels at, which is reducing an array down to a single value - an object, a number, a string, etc.

