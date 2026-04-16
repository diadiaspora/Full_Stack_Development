/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

//this is written as a arrow function  because it starts with const funstion name = () => {}

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// as an expression:

const maxoftwo = function(x,y) {
      if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// as a basic function :

function maxofTwo(x,y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
    
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
console.log('Exercise 1 Expression:', maxoftwo(3, 9));
console.log('Exercise 1 basic:', maxofTwo(1, 1));

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (x) => {
    if (x >= 18 ) {
        return "Adult"
    } else {
        return "minor"
    }
}

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel = (char) => {
  const vowels = 'aeiou';
  return vowels.includes(char.toLowerCase());
};

console.log('Exercise 3 Result:', isCharAVowel("a"));


