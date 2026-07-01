/* 
Identify State variables for connect four:

BOARD:
Array of arrays,where the nested arrays will represent the columns.

Values that the elements contains

* 1/-1 -> player
* null -> cell is empty

WINNER:
Values:
* null -> no winner or tie, game is in progress
* 1/-1 -> the player that one
* 'Tie' -> the game is tied

TURN:
* 1/-1 -> which player

*/

/*----- constants -----*/

//look up data structure



const COLORS = {
    '1': 'red', 
    '-1': 'orange',
    'null': 'white',
    
};

/*----- state variables -----*/
// define but do not assign to (initialize)
let board; // 2D array / 1/-1 -> player value; -> cell is empty
let winner; // null -> no winner or tie, game id in progress; 1/-1 -> the player that won ; 'Tie' -> the game has tied
let turn; // the player whose turn it is.

/*----- cached elements  -----*/
const msgEl = document.querySelector('h1');
const playAgainBtn = document.getElementById('play');
const markerEls = [...document.querySelectorAll('#markers > div')]; //convert the nodelist into an array

/*----- event listeners -----*/

document.getElementById('markers').addEventListener('click', handleDrop);

/*----- functions -----*/
//The init functions purpose is to initialize all state, tnen call render()

init();

function init() {
  // to visualize the mapping (connection) between
  // the board array and the cells/divs in the DOM.
    // "rotate" the board 90 degrees counter clockwise
    
  board = [
    [null, null, null, null, null, null], // column 0
    [null, null, null, null, null, null], // column 1
    [null, null, null, null, null, null], // column 2
    [null, null, null, null, null, null], // column 3
    [null, null, null, null, null, null], // column 4
    [null, null, null, null, null, null], // column 5
    [null, null, null, null, null, null], // column 6
  ];

  winner = null;
  turn = 1;
  render();
}

// in response to user interaction, update all impacted state, then call render()

function handleDrop(evt) {
    console.log(evt.target)
    // 1) Determine the index of the clicked column marker.
    
    const colIdx = markerEls.indexOf(evt.target);
    console.log(colIdx);
    // 2) If not a valid index, do nothing (return from function).
    if (colIdx === -1) return; 
    // 3) Create a shortcut variable to the clicked column array, e.g., `colArr`.
    const colArr = board[colIdx];
     console.log(colArr);
// 4) Determine the index of the first available "cell" (first `null` element in `colArr`).
    const rowIdx = colArr.indexOf(null);
    console.log(rowIdx);
    // 5) Update the "cell" in `colArr` with whose turn it is.
    
// 6) Compute and update the state of the game (winner?).
// 7) Update whose turn it is.
// 8) All state has been updated - call render()!

}

/* 
the purpose of the render() function is to transfer/visualize in the DOM */
function render() {
   renderBoard();
   renderMessage();
   renderControls();

}

function renderBoard() {
    board.forEach((colArr, colIdx) => { 
        // console.log(colArr);
        // console.log(colIdx);
        colArr.forEach((cellVal, rowIdx) => { 
            // console.log(cellVal);
            // console.log(rowIdx);

            const cellEl = document.getElementById(`c${colIdx}r${rowIdx}`);
            cellEl.style.background = COLORS[cellVal];
        });
    });
}

function renderMessage() {
    // msgEl.innerHTML = 'Player';
    if (winner === null) { 
        
        msgEl.innerHTML = `<span style ="color:${COLORS[turn]}"> ${COLORS[turn].toUpperCase()}</span>'s Turn`;
    } else if (winner === 'Tie') {
        msgEl.innerHTML = "Its a Tie";
    } else {
        // there is a winner
        msgEl.innerHTML = `<span style ="color:${COLORS[winner]}"> ${COLORS[winner].toUpperCase()}</span>' Wins!`;
    }
}

function renderControls() { 
    // ternary expression - use when you want to return one of two values
    //<conditional exp> ? <truthy exp> : <falsy exp>
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // TODO: conditionally render the markers
}
