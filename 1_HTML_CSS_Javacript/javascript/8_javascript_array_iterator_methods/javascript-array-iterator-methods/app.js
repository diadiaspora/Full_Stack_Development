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