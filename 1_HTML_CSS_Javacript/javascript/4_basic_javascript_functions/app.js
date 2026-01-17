console.log("Exercise 1:");
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}



console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 2:");

function isAdultTwo (age){
    if (age >= 18) {
        return "adult"
    } else {
        return "minor"
    }
}

console.log('Exercise 2 Function:', isAdultTwo(18));

const isAdult = (age) => {
    if (age > 18) {
        return "adult"
    } else {
        return "minor"
    }
}

console.log('Exercise 2 Function Expression:', isAdult(21));


function calculateAverage(...scores){
  let total = 0;
  // Loop over the scores array to tally up the total
  for(let i = 0; i < scores.length; i++) {
    total = total + scores[i]
  }
  // Divide the total by the length of the array to find the average
  return total / scores.length;
}

console.log(calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // returns 5.5

// Function Declaration:

console.log('');
console.log('');
console.log('');
console.log('');
console.log("Exercise 3:");

function isChar(char){
    if (char === "a" || "e" || "i" || "o" || "u")
        return "True"
    else
        return "False"
}
console.log('Exercise 3 Result:', isChar("a"));



function isCharAVowel(char){
    vowels = ["a","e","i","o","u"]
    return vowels.includes(char)

}

console.log('Function Declaration:', isCharAVowel("a"));

const isCharExp = function(char) {
  vowels = ["a","e","i","o","u"]
  return vowels.includes(char)
};

console.log('Function Expression:', isCharExp("a"));

const isCharFunct = (char) => {
     vowels = ["a","e","i","o","u"]
     return vowels.includes(char)
}

console.log('Arrow Function:', isCharFunct("x"));

function isCharVowel(char) {
    vowels = ["a","e","i","o","u"]
    for (let x = 0; x < vowels.length; x++)
        if (vowels[x] === char) {
            return true;
        } else {
            return false
        }
}

console.log('Function Expression:', isCharVowel("a"));

const isCharEx = function(char) {
       vowels = ["a","e","i","o","u"]
    for (let x = 0; x < vowels.length; x++)
        if (vowels[x] === char) {
            return true;
        } else {
            return false
        }
}
console.log('This is wrong come back to it:', isCharEx("o"));

const isCharArrow = (char) => {
       vowels = ["a","e","i","o","u"]
    for (let x = 0; x < vowels.length; x++) {
        if (vowels[x] === char) {
            return true;
        } 
        }
           return false    
}
console.log('Arrow Function:', isCharArrow("x"));


function isCharSome(char){
  vowels = ["a","e","i","o","u"]
    return vowels.some(item => item === char)
}
console.log("---")
console.log("\x1b[1m%s\x1b[0m", ".some() loops over each element in an array.\nIt runs a callback function for each element.\nIf any element returns true in the callback, .some() immediately returns true.\n If none return true, it returns false.")
console.log("Syntax: array.some(element => condition);")
console.log('Function Declaration using some:', isCharSome("g"));
console.log("---")

const isCharSomeExpression = function(char) {
    vowels = ["a","e","i","o","u"]
    return vowels.some(x => x === char)  
}

console.log('Function Expression using some:', isCharSomeExpression("g"));


const isCharSomeArrow = (char) => {
    vowels = ["a","e","i","o","u"]
    return vowels.some(x => x === char)  
}

console.log('Arrow Expression using some:', isCharSomeExpression("a"));
console.log("_____________________________________")
console.log("_____________________________________")

console.log('');
console.log('');
console.log('');
console.log('');
console.log("Exercise 4:");

function generateEmail(name, domain) {
    return name + "@" + domain
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

const generateEmailExpression = function(name, domain) {
    return name + "@" + domain
}

console.log('Exercise 4 Function Expression:', generateEmailExpression("jerry", "gmail.com"));

const generateEmailArrow = function(name, domain) {
    return name + "@" + domain
}

console.log('Exercise 4 Arrow Function :', generateEmailArrow("jaxson", "yahoo.com"));
console.log('');
console.log('');
console.log('');
console.log('');
console.log("Exercise 5:");



function greetUser2(name, time) {
    return `Good ${time} , ${name}!`
}

console.log('Exercise 5 Result:', greetUser2("Sam", "morning"));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 6:");

function maxOfThree(num1, num2, num3) {
    
    return Math.max(num1, num2, num3);
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

function maxOfThree3(num1, num2, num3) {

    const numbers = [num1, num2, num3];
    return Math.max(...numbers);
}

console.log('Exercise 6 Result:', maxOfThree3(5, 10, 8));

// function maxOfThreeLoop(num1, num2, num3) {

//     const numbers = [num1, num2, num3];
//     let largest = numbers[0];
    
//     for (let x = 0, if x < numbers.length, x++){
        
//     }
    
// }

// console.log('Exercise 6 Result:', maxOfThreeLoop(5, 10, 8));
console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 7:");

function calculateTip(bill, tip){
    return (bill) + bill * tip/100
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

console.log('');
console.log('');
console.log('');
console.log('');
console.log("Exercise 8:");

function convertTemperature(temp, scale){
    scale = scale.toUpperCase();
    
    if (scale === "C") {
        return (temp * 9 / 5) + 32
    } else {
        return (temp - 32) * 5 / 9;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "c"));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 9:");

function basicCalculator(num1, num2, oper) {
    switch (oper) {
     case 'add':
        return num1 + num2
        break;
     case 'subtract':
        return num1 - num2
        break;
     case 'multiply':
        return num1 * num2
        break;
     case 'divide':
        return num1 / num2
        break;
    }
    
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 10:");

function calculateGrade(score) {
    
    if (score >= 90) {
    return "A";
} else if (score >= 80) {
    return "B";
} else if (score >= 70) {
    return "C";
} else if (score >= 60) {
    return "D";
} else {
    return "F";
}
}

console.log('Exercise 10 Result:', calculateGrade(85));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 11:");

function createUsername(first, last){
    start = first.slice(0, 3)
    end = last.slice(0,3)
    num = first.length + last.length

    return start + end + num
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

console.log('');
console.log('');
console.log('');
console.log('');

console.log("Exercise 12:");

function numArgs(...tings) {
    array = (tings)
    return array.length
    
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));

/*
Function Expression
const isCharAVowel = function(char) {
    vowels = [a,e,i,o,u]
   
}

Arrow Function

const isCharAVowel = (char) => {
    vowel = [a,e,i,o,u]
}

     vowels.forEach((vowel, char) {
  if(char === a || e || i || o || u) console.log("True");
  console.log(isCharAVowel);
});

const seasonCheck = 'winter';

if (seasonCheck === 'summer') {
  console.log("It's summer!");
} else if (seasonCheck === 'fall') {
  console.log("It's fall now!");
} else if (seasonCheck === 'winter') {
  console.log('Brrr!');
} else if (seasonCheck === 'spring') {
  console.log("It's spring!");
} else {
  console.log('Invalid season');
}

*/