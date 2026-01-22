//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


/*-------------------------------- Constants --------------------------------*/

// Store cached element references.

// a. In a constant called squareEls, store the nine elements representing the squares on the page.

// 💡 Notice how each square has a matching class name in your HTML to make this easier!

// b. In a constant called messageEl, store the element that displays the game’s status on the page.

// 🚨 Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!




const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

console.log(squareEls);
console.log(messageEl);
/*---------------------------- Variables (state) ----------------------------*/

// Define the required variables used to track the state of the game.

// 💡 None of these variables will need to hold a value when they are defined.

// a. Use a variable named board to represent the state of the squares on the board.

// b. Use a variable named turn to track whose turn it is.

// c. Use a variable named winner to represent if anyone has won yet.

// d. Use a variable named tie to represent if the game has ended in a tie.


let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



