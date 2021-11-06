// cached elements
const startBtn = document.querySelector('#start-btn');
const input = document.querySelector('#input');
const minutesRemaining = document.querySelector('#mins');
const secondsRemaining = document.querySelector('#secs');
const timesUP = document.querySelector('#end');

// global vars
let minutes;
let seconds = 60;

startBtn.addEventListener('click', function () {
	minutes = input.value;
	input.value = '';

	minutesRemaining.innerHTML = `${minutes}m`;
	secondsRemaining.innerHTML = `${seconds}s`;
	timesUP.innerHTML = '';
	// Run timerFunction every second
	let timerFunction = setInterval(function () {
		seconds--;
		// Result is output to the specific element
		minutesRemaining.innerHTML = `${minutes}m`;
		secondsRemaining.innerHTML = `${seconds}s`;
		if (seconds === 0) {
			if (minutes === 0) {
				clearInterval(timerFunction);
				minutesRemaining.innerHTML = '';
				secondsRemaining.innerHTML = '';
				timesUP.innerHTML = 'TIMES UP!';
			}
			minutes--;
			seconds = 60;
			setInterval(timerFunction);
		}
	}, 1000);
});
