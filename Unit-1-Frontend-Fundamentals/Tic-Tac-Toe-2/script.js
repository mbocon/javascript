/*----- constants -----*/
// Data that doesn't change -> Players -> Winning Combos -> Rules

const players = {
    '1': 'X',
    '-1': 'O',
    'null': ''
};

const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];




/*----- app's state (variables) -----*/
// Data that does change -> turn, winner, gameboard

let turn;
let winner;
let gameboard;

/*----- cached element references -----*/
// squares, reset button, gameboard

const $squares = $('.square');
const $resetBtn = $('button');
const $gameboardElement = $('section');
const $messageEl = $('h2');

/*----- event listeners -----*/
// squares (gameboard), reset button
$gameboardElement.on('click', '.square', handleClick)
$resetBtn.on('click', handleStart);

/*----- functions -----*/
handleStart();
// handle a reset button click
function handleStart() {
    // set the turn value to a default X or O
    turn = 1;
    // set the winner to false
    winner = false;
    // set the gameboard to a starting state - all spaces are available
    gameboard = [null, null, null, 
                 null, null, null, 
                 null, null, null];
    // an alternate way to define an Array
    // gameboard = new Array(9).fill(null)
    render();
}


function handleClick() {
   // capture user selection
    const userSelection = this.dataset.index;
    if(gameboard[userSelection] === null || !winner) {     // [1, null, -1, null, null, null, null, null, null];
        // place value in corresponding position
       gameboard[userSelection] = turn;
       // check for winner
       winner = checkWinner(); // we're hoping to get back the winner: 1 or -1, or we get false or T
       // toggle turn
       turn *= -1;
       render();
    } else {
        alert('Sorry, that square is taken!');
    }
}
// handle square click
//   1) first identify which square was clicked
//   2) check if that square is available




// check for winner
function checkWinner() {
    // combos array -> for checking if we have a winning combination
    // gameboard array -> for checking which positions are occupied
    // if we can find matching value in the positions that equal a win in the winning combos array
    // we can return the winner
    for(let i = 0; i < combos.length; i++) {
        // do we have three matching values in the gameboard array that also match a winning combo
        if(Math.abs(gameboard[combos[i][0]] + gameboard[combos[i][1]] + gameboard[combos[i][2]]) === 3) {
            return turn; // return the winning turn
        }
    }
    // what if we've checked all the winning combos, found no match, there are still available positions
    if(gameboard.includes(null)) return false; // no winner, but there still spaces available
    // Keep Playing!!
    return 'T';
}

// update the dom whenever a square is clicked

// [null, 1, null, -1, null ...]
function render() {
    gameboard.forEach(function(key, index) {
        $squares[index].textContent = players[key] // X, O ,'' 
    });

    // we can update our message element here
    if(!winner) { // winner can be false, 1, -1, T
        $messageEl.text(`${players[turn]}'s Turn`);
    } else if (winner === 'T') {
        $messageEl.text(`Cats Game!`);
    } else {
        $messageEl.text(`Player ${players[winner]} Wins!`);
    }
}
