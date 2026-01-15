
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));





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
console.log("Exercise 4:");

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