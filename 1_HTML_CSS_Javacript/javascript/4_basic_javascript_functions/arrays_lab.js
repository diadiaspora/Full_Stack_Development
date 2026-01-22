console.log("hey!");

function firstFunction(name){
    return (`Hey there ${name}`);
}

// firstFunction("Dia");

console.log(firstFunction("Dia"));



function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello("Joe");

const firstFunction1 = function(numA, numB) {
    return numA + numB;
}

console.log(firstFunction1(5,8));

const firstFunction2 = (num) => {
    return num + 1;
    
} 

console.log(firstFunction2(8));


// Exercise 1: Define an empty array
// 1) Create an empty array and assign it to a variable called `foods`.
// Exercise 1 has been completed for you:

const foods = [];

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array
1) Add 'pizza' and 'cheeseburger' to the `foods` array.
Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.
Complete Exercise 2 in the space below:
*/


// foods = ["pizza", "cheesburger"];

foods.push("pizza", "cheeseburger");

console.log('Exercise 2 result:', foods);


const isAdult = (age) => {

    if (age >= 18)
        return "is Adult"
    else 
        return "is Minor"
    
}

console.log(isAdult(24));