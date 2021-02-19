// CREATING THE PLAYERS
const playerOne = 'O';
const playerTwo = 'X';

// GETTING RESTART BUTTON FROM DOM
let restartBtn = document.getElementById('restartBtn')

// PLAYER ONE GOES FIRST
let currentPlayer = playerOne;

// CREATING THE ARRAY TO HOLD TAKEN POSITION ON THE GAMEBOARD
const spaces = [null, null, null, null, null, null, null, null, null];

const boxClicked = id => {
	if (!spaces[id]) {
// IF THE SPACES ARRAY DOES NOT CONTAIN AN X OR O 
// THEN ASSIGN THAT SPACE TO THE CURRENT PLAYER
		spaces[id] = currentPlayer;
		let selected = document.getElementById(id);
		selected.append(currentPlayer);
// CHECK TO SEE IF A PLAYER HAS WON
		playerHasWon();
// ALTERNATE THE PLAYERS AFTER EACH TURN
		currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
	}
};

//  CHECK ALL POSSIBLE  WINNING COMBINATIONS
const playerHasWon = () => {
	if (spaces[0] === currentPlayer) {
		if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	}
	if (spaces[0] === currentPlayer) {
		if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	}
	if (spaces[0] === currentPlayer) {
		if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	} else if (spaces[8] === currentPlayer) {
		if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	} else if (spaces[8] === currentPlayer) {
		if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	} else if (spaces[2] === currentPlayer) {
		if (spaces[4] === currentPlayer && spaces[6] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	} else if (spaces[3] === currentPlayer) {
		if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	} else if (spaces[1] === currentPlayer) {
		if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
			console.log(`${currentPlayer} wins!`);
			let diplayWinner = document.getElementById('gameText');
			diplayWinner.append(`${currentPlayer} HAS WON!`);
		}
	}
};

// RESTART BUTTON
restartBtn.addEventListener('click', () => {
    window.location.reload()
})