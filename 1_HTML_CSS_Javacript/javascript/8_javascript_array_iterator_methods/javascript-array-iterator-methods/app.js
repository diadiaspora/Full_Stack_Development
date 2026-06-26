// Array Iterator Methods

/* 
- All array iterator methods accept a callback function as its argument

focus on learning the big picture/purpose and best case scenario of each method.
- Iterate

The callback function has the same signiture except for reduce

array.map(element, index, array) => {}


array.find((element) => {
    
    });
 */

// the array.forEach methods purpose is whatever you need to do with the elements (render data to dom)

// the array.maps methods purpose is to transform the array into a new array.
// the new array is always the same sixe as the source array.

// whatever the cd function returns is what is put in the new

//  Array.map((element, index, array) => {

//  });

const array = ["apple", "banana", "orange"];

const mappedArray = array.map((element, index, array) => {
  return `element is ${element}, index is ${index}, array is ${array}`;
});

// It is considered best practice to choose a clear, singular name for the element parameter. If dealing with an array called students ,
//     then the singular student is a logical choice.

console.log(mappedArray);

const students = [];
let mappedStudent = students.map((student) => {});

// So, what use is the index parameter? Often, we won’t need it. It’s very common to leave both the index and array parameters off
// the signature entirely.

// Let’s say we wanted to filter an array so that only the odd indexed elements were kept in our new array. With only the current animal
// element this would be a bit tricky, but with the index supplied it’s a relatively light task:

const animals = ["chicken", "goat", "pig", "sheep", "cow"];
const oddAnimals = animals.filter((animal, index) => {
  if (index % 2) return animal;
});

console.log(oddAnimals);

// MAP()
// PURPOSE: Create a new array from a source array, usually “transforming” its values.
// The returned array is always the same length as the source array.

const nums = [1, 2, 3];
const squared = nums.map((num) => {
  return num * num;
});

console.log(squared);

// -------

const instructors = ["Beryl", "Hunter", "Joe", "Jurgen", "Ben", "David"];

const awesome = instructors.map((instructor) => {
  return `${instructor} is awesome.`;
});

console.log(awesome);

// filter()
/* 
Select specific elements from a source array, based on defined criteria

Its callback function requires a conditional statement that will either resolve to truthy or falsy when returned, and filter() uses that
value to decide if it should “keep” the element or not. If the condition is falsy, the element is excluded (or “discarded”) from the new array.
The new array will thus have only “true” elements, based on the criteria provided.
*/

const arr = [true, false, true, false, true];

const filteredArr = arr.filter((element) => {
  return element;
});

console.log(filteredArr);

/* 
_______________________________________________
 */

const arr1 = [true, false, 0, "string", "", null, undefined, 42];

const filteredArray = arr1.filter((element) => {
  return element;
});

console.log(filteredArray);

const numbs = [100, 2, 5, 42, 99];

const numsOver50 = numbs.filter((num) => {
  return num > 50;
});

console.log(numsOver50);

/* __________________________________________ */

const odds = numbs.filter((num) => {
  return num % 2;
});

console.log(odds);

/* __________________________________________ */

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];

const notJerks = people.filter((person) => {
  return person !== "jerks";
});

console.log(notJerks);

/* 
find

PURPOSE: Find an element within an array.
find() will return the first element that satisfies the provided testing 
function, and returns undefined if no match is found.
*/

const cars = [
  { color: "red", make: "BMW", year: 2001 },
  { color: "white", make: "Toyota", year: 2013 },
  { color: "blue", make: "Ford", year: 2014 },
  { color: "white", make: "Tesla", year: 2016 },
];

const firstWhiteCar = cars.find((car) => {
  return car.color === "white";
});

const luxuryCar = cars.find((car) => {
  return car.make === "Tesla";
});

const missingCar = cars.find((car) => {
  return car.color === "black";
});

console.log(firstWhiteCar, luxuryCar, missingCar);

/* 
PURPOSE: Like find() , but returns the found element’s index.
findIndex() is VERY similar to find, except it will return a numeric 
index value instead of the element itself. Instead of undefined , if
no match is found findIndex() returns -1 .

*/

const firstWhiteCarIdx = cars.findIndex((car) => {
return car.color === 'white';
});

// firstWhiteCarIdx equals 1

const missingCarIdx = cars.findIndex((car) => {
return car.color === 'black';
});
// missingCarIdx = -1

console.log(firstWhiteCarIdx, missingCarIdx);

/* 

some

PURPOSE: Check if an array has at least one 
element that meets a specific condition.
returns true or false

 */

const hasFord = cars.some((car) => {
  return car.make === "Ford";
});

// hasFord is true

const thingsInMyRoom = ['bed', 'lamp', 'table', 'random elephant', 'three tacos'];
const isARandomElephantInMyRoom = thingsInMyRoom.some((thing) => {
    return thing === "random elephant"; 
});

console.log(isARandomElephantInMyRoom);

/* 
every
PURPOSE: Check if every element in an array meets a certain condition.
 */

const everyCarIsBlue = cars.every((car) => {
  return car.color === "blue";
});

// everyCarIsBlue is false

const thingsInMyRoom2 = [
'random elephant',
'random elephant',
'random elephant',
'random elephant'
];

const isEverythingInMyRoomARandomElephant = thingsInMyRoom2.every((thing) => { 
    return thing === "random elephant";
});

console.log(isEverythingInMyRoomARandomElephant);

console.log("ARRAY ITERATOR LAB");

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const peoples = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const travelMethods = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const devs = [
  { name: "Alex", year: 1988 },
  { name: "Dani", year: 1986 },
  { name: "Matt", year: 1970 },
  { name: "Wes", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

/*
Exercise 1: Array.prototype.filter()
Filter the array of inventors into a new array containing only the inventors
born in the 1500's.
- You have an array of inventors, each with a birth year listed by the property
'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between
the years 1500 and 1599.
*/
let veryOldInventors = [];
// Complete the exercise in the space below:

veryOldInventors = inventors.filter((inventor) => { 
    min = 1500
    max = 1599
    
    return inventor.year >= min && inventor.year <= max; 
});

// Check your work:
console.log('Exercise 1 my result: ', veryOldInventors);
console.log('Exercise 1 correct result: ', [
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
]);

/*
Exercise 2: Array.prototype.map()
Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.
- For each inventor, return an object in this format:
{ first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an
inventor with only their first and last names.
Hint: Return a new object literal from the callback that looks like:
{ first: "First Name", last: "Last Name" }
*/
let inventorNames = [];
// Complete the exercise in the space below:

inventorNames = inventors.map((inventor) => {
    // return `first: ${inventor.first}, last: ${inventor.last}`;

    return {
        first: inventor.first,
        last: inventor.last
    }

    
});

console.log(inventorNames);
// Check your work:
console.log('Exercise 2 my result: ', inventorNames);
console.log('Exercise 2 correct result: ', [
{ first: 'Albert', last: 'Einstein' },
{ first: 'Isaac', last: 'Newton' },
{ first: 'Galileo', last: 'Galilei' },
{ first: 'Marie', last: 'Curie' },
{ first: 'Johannes', last: 'Kepler' },
{ first: 'Nicolaus', last: 'Copernicus' },
{ first: 'Max', last: 'Planck' },
{ first: 'Katherine', last: 'Blodgett' },
{ first: 'Ada', last: 'Lovelace' },
{ first: 'Sarah E.', last: 'Goode' },
{ first: 'Lise', last: 'Meitner' },
{ first: 'Hanna', last: 'Hammarström' },
]);

/*
Exercise 3: Array.prototype.sort()
Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/
let sortedByBirthYear = [];
// Complete the exercise in the space below:

sortedByBirthYear = inventors.sort((a,b) => {
    
    return a.year - b.year;
});

// Check your work:
console.log('Exercise 3 my result: ', sortedByBirthYear);
console.log('Exercise 3 correct result: ', [
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
]);

/*
Exercise 4: Array.prototype.find()
Use Array.prototype.find() to identify the inventor with the first name 'Ada'
from an array of inventor objects
- You have an array of objects, each representing an inventor with various
properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the
inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/
let inventorNamedAda = {};
// Complete the exercise in the space below:
// Check your work:
console.log('Exercise 4 my result: ', inventorNamedAda);
console.log('Exercise 4 correct result: ', {
first: 'Ada',
last: 'Lovelace',
year: 1815,
passed: 1852,
});