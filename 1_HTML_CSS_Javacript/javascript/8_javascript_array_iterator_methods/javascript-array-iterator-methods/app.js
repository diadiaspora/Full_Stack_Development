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
