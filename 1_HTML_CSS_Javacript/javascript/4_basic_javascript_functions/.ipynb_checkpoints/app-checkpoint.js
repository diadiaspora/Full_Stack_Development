
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


const isAdult = (age) => {
    if (age > 18) {
        return "adult"
    } else {
        return "minor"
    }
}

console.log('Exercise 2 Result:', isAdult(21));


function isAdultTwo (age){
    if (age >= 18) {
        return "adult"
    } else {
        return "minor"
    }
}

console.log('Exercise 2 Result:', isAdultTwo(18));