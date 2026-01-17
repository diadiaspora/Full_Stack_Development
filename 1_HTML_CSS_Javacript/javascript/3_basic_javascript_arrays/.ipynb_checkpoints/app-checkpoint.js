console.log("Arrays");
console.log("Exercise 1");

const foods = [];  
let dessert = [];

console.log('Exercise 1 result:', foods, dessert);

console.log("Exercise 2");

foods.push("pizza", "burger");

dessert = ["ice cream", "cheesecake"];

console.log('Exercise 2 result:', foods, dessert);

console.log("Exercise 3");

foods.unshift("taco");

dessert.push("fruit", "creme broulette", "cookies", "churros");

console.log('Exercise 3 result:', foods, dessert);

console.log("Exercise 4");

favFood = foods[1];

dessert_menu = dessert.slice(1,4);

console.log('Exercise 4 result:', favFood, dessert_menu);

console.log("Exercise 5");

foods.splice(2, 0, "tofu");

console.log('Exercise 5 result:', foods);


foods.splice(1, 1, "sushi", "cupcake");

console.log('Exercise 6 result:', foods);

yummy = foods.slice(1,3);

console.log('Exercise 7 result:', yummy);

soyIdx = foods.indexOf("tofu");
    
console.log('Exercise 8 result:', soyIdx);

allFoods = foods.join(" 🍇 ")

console.log('Exercise 9 result:', allFoods);

hasSoup = foods.includes("soup");
console.log('Exercise 10 result:', hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
let odds = [];

for(let n = 0; n < nums.length; n++) {
    if (n % 2 !== 0) {
        odds.push(n)
    }
}

console.log('Exercise 11 result:', odds);

const numb = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let fizz = [];
let buzz = [];
let fizzbuzz = [];
for (const num of numb) {
  
    if (num % 3 !== 0) {
        fizz.push(num)
    } else if (num % 5 !== 0) {
        buzz.push(num)
    } else (num % 5 !== 0) && (num % 3 !== 0) 
        fizzbuzz.push(num)
    

}


console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);