console.log('');
console.log('');
console.log("\x1b[1m%s\x1b[0m","Exercise: 1");

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

console.log("\x1b[1m%s\x1b[0m","Exercise: 2");

function isAdult(age){
    if (age >= 18)
        return "Adult"
    else
        return "Minor"
}

console.log('Exercise 2 Result:', isAdult(21));

console.log('');
console.log('');

const isAdult_2 = function(age){
    
    return age >= 18 ? "adult" : "minor";
    
}
console.log('Exercise 2 Result:', isAdult_2(17));

console.log('');
console.log('');

const isAdult_3 = age => {
    
      if (age >= 18)
        return "Adult"
    else
        return "Minor"
}

console.log('Exercise 2 Result:', isAdult_3(35));

console.log('');
console.log('');
/*
This is not a function. 

It starts by declaring a variable that will run immedietly when the code reaches it. Then assigns a value to it. 

A function however does not run until you call it, produces the value via "return", and can be reused. 
*/

let age = 20; 
let result;

if (age >= 18) {
  result = "adult";
} else {
  result = "minor";
}

console.log('Exercise 2 Result:',result);

console.log('');
console.log('');

console.log("\x1b[1m%s\x1b[0m","Exercise: 3");

function isCharAVowel(char) {

    vowels =["a","e","i","o","u"]
    letter = char.toUpperCase();

    for(let x = 0; x < vowels.length; x++) {
        
        if (letter = "A" || "E" || "I" || "O" || "U")
            return `${char} is a vowel`
        else
            return `${char} is a consonant`
    }
    
}

console.log('Exercise 3 Result:', isCharAVowel("i"));

console.log('');
console.log('');

const isCharAVowel_2 = function(char) {
    
    vowels =["A","E","I","O","U"]
    letter = char.toUpperCase();

      
         if (vowels.includes(letter)) {
              return `${char} is a vowel`
         }
        else {
            return `${char} is a consonant`
        }
     
}

console.log('Exercise 3 Result:', isCharAVowel_2("B"));

console.log('');
console.log('');



const isCharAVowel_3 = char => {
    
    const vowels =["A","E","I","O","U"]
    const letter = char.toUpperCase();
      
         if (vowels.some(vowel => vowel === letter)) {
              return `${char} is a vowel`
         }
        else {
            return `${char} is a consonant`
        }
}

console.log('Exercise 3 Result:', isCharAVowel_3("E"));

console.log('');
console.log('');

console.log('');
console.log('');
console.log('');
console.log('');

console.log("\x1b[1m%s\x1b[0m","Exercise: 4");

function generateEmail(name, domain) {
    return name + "@" + domain
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

const generateEmail_2 = function(name, domain) {

    return `${name}@${domain}`
}

console.log('Exercise 4 Result:', generateEmail_2("johnsmith", "example.com"));

const generateEmail_3 = (name, domain) => {
        return name + "@" + domain
}

console.log('Exercise 4 Result:', generateEmail_3("johnsmith", "example.com"));

console.log("\x1b[1m%s\x1b[0m","Exercise: 5");

function greetUser(name, time){
    
    return `Good ${time}, ${name}`
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

const greetUser_2 = function(name, time){
    return "Good " + time + "," + name + "!"
}
console.log('Exercise 5 Result:', greetUser_2("Sam", "morning"));

const greetUser_3 = (name, time) => {
    return `Good ${time}, ${name}`
}

console.log('Exercise 5 Result:', greetUser_3("Sam", "morning"));

console.log("\x1b[1m%s\x1b[0m","Exercise: 6");

function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

const maxOfThree_2 = function(num1, num2, num3){
    
}

const maxOfThree_3 = (num1, num2, num3) => {
    
}

console.log("\x1b[1m%s\x1b[0m","Exercise: 7");

function calculateTip(bill, tip){
    tip_amount = bill*(tip/100)
    return tip_amount
}

console.log('Exercise 7 Result:', calculateTip(50, 20));

const calculateTip_2 = function(bill, tip) {
    
}

const calculateTip_3 = (bill, tip) => {
    
}

console.log("\x1b[1m%s\x1b[0m","Exercise: 8");

console.log("\x1b[1m%s\x1b[0m","Exercise: 9");