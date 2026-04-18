/*
Exercise 1: containsLetterA()

Create a function named containsLetterA.
It should take a single string as an argument.
Return true if the string contains the letter "a".
Otherwise, return false.
*/

const containsLetterA = (str) => {
     let letter = "a"
    return str.toLowerCase().includes(letter);
}

console.log('Exercise 1 Result:', containsLetterA("apple"));

/*
Exercise 2: containsWordJavaScript()

Create a function named containsWordJavaScript.
It should take a string as an argument.
Return true if the string contains the word "JavaScript".
Otherwise, return false.
*/

const containsWordJavaScript = (str) => {

    return str.includes("JavaScript");
}


 console.log('Exercise 2 Result:', containsWordJavaScript("I love JavaScript"));

/*
Exercise 3: isCharAVowel()

Create a function named isCharAVowel.
It should take a single character as an argument.
Return true if it is a vowel (a, e, i, o, u).
Return false otherwise.
*/

const isCharAVowel = (char) => {

    vowels = "aeiou"
    
    return vowels.includes(char);
}

 console.log('Exercise 3 Result:', isCharAVowel("a"));

/*
Exercise 4: hasNumber()

Create a function named hasNumber.
It should take a string as an argument.
Return true if the string contains any number (0–9).
Otherwise, return false.
*/
 const hasNumber = (str) => {

     numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8" , "9"]

     for (let num of numbers) {
     if (str.includes(num)){
         return true
         }
     } return false
     
 }


 console.log('Exercise 4 Result:', hasNumber("abcdef"));

/*
Exercise 5: hasSpace()

Create a function named hasSpace.
It should take a string as an argument.
Return true if the string contains a space.
Otherwise, return false.
*/

const hasSpace = (str) => {

    return str.includes(" ");
}

console.log('Exercise 5 Result:', hasSpace("hello world"));

/*
Exercise 6: hasBanana()

Create a function named hasBanana.
It should take an array of strings as an argument.
Return true if the array contains "banana".
Otherwise, return false.
*/
 const hasBanana = (array) => {
     return array.includes("banana");
 }


console.log('Exercise 6 Result:', hasBanana(["apple", "banana", "orange"]));



/*
Exercise 7: hasSpecialCharacter()

Create a function named hasSpecialCharacter.
It should take a string as an argument.
Return true if the string contains any of these characters: !@#$%^&*
Otherwise, return false.
*/

const hasSpecialCharacter = (str) => {
    characters = ["!", "@", "#", "$", "%", "^", "&", "*"]

    for ( let char of characters) {
        if (str.includes(char)) {
            return true
        }
    } return false
}

// console.log('Exercise 7 Result:', hasSpecialCharacter("hello!"));

/*
if (str.includes(char)) {
  return true;
} else {
  return false; // ❌ BAD
}

👉 This would stop on the first character only, which is wrong.

Example:

First char checked = "!" → not found
else runs → returns false ❌
You never check "@", "#", etc.
*/


/*
Exercise 8: containsBannedWord()

Create a function named containsBannedWord.
It should take a string as an argument.
Return true if the string contains any of these words:
"bad", "hate", "angry"
Otherwise, return false.
*/

const containsBannedWord = (str) => {

    words = ["bad", "hate", "angry"]

    for (let word of words) {
        if (str.toLowerCase().includes(word)) {
            return true
        }
    } return false
}

console.log('Exercise 8 Result:', containsBannedWord("I am hate"));

/*
Exercise 9: hasVowelInWord()

Create a function named hasVowelInWord.
It should take a string as an argument.
Return true if the word contains at least one vowel.
Otherwise, return false.
*/

const hasVowelInWord = (str) => {
    vowels = ["a", "e", "i", "o", "u"]

    for (let vowel of vowels) {
        if (str.toLowerCase().includes(vowel)){
            return true
            }
        } return false
  
}


console.log('Exercise 9 Result:', hasVowelInWord("skye"));

/*
Exercise 10: haveCommonLetter()

Create a function named haveCommonLetter.
It should take two strings as arguments.
Return true if the two strings share at least one letter.
Otherwise, return false.
*/

const haveCommonLetter = (str1, str2) => {

    for (let letter of str1) {
        if (str2.includes(letter)) {
            return true 
        }
    } return false
}





console.log('Exercise 10 Result:', haveCommonLetter("cat", "car"));





