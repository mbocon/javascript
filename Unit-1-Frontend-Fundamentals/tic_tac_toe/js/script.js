/*----- constants -----*/

const PLAYERS = {
	1: 'X',
	'-1': 'O',
	null: '',
};

const COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

/*----- app's state (variables) -----*/

let winner, turn, gameboard;

/*----- cached element references -----*/

const $squareEls = $('.square');
const $messageEl = $('h2');
const $buttonEl = $('button');
const $gameboardEl = $('#gameboard');

/*----- event listeners -----*/

$buttonEl.click(init); // click to reset game
$gameboardEl.on('click', '.square', handleClick);

/*----- functions -----*/

init(); // initial load of game

function init() {
	winner = false;
	turn = 1;
	gameboard = new Array(9).fill(null);
	render();
}

function getWinner() {
	for (let i = 0; i < COMBOS.length; i++) {
		if (Math.abs(gameboard[COMBOS[i][0]] + gameboard[COMBOS[i][1]] + gameboard[COMBOS[i][2]]) === 3)
			return gameboard[COMBOS[i][0]];
	}
	if (gameboard.includes(null)) return false;
	return 'T';
}

function handleClick(evt) {
	const position = evt.target.dataset.index;
	if (gameboard[position] || winner) return; // exit function immediately!
	gameboard[position] = turn;
	turn *= -1;
	winner = getWinner();
	render();
}

function render() {
	gameboard.forEach(function (value, index) {
		$squareEls.eq(index).text(PLAYERS[value]);
	});
	if (!winner) {
		$messageEl.text(`${PLAYERS[turn]}'s Turn`);
	} else if (winner === 'T') {
		$messageEl.text('Tie Game');
	} else {
		$messageEl.text(`${PLAYERS[winner]} Wins!`);
	}
}
