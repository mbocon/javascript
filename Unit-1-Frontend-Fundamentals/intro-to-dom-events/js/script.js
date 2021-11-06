// cached elements
const button = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// event listeners

button.addEventListener('click', handleClick);
ul.addEventListener('click', handleLiClick);

// functions
function handleClick(evt) {
	// create new li tag
	const li = document.createElement('li');
	// capture user input
	li.textContent = input.value;
	// append to list
	ul.appendChild(li);
	// clear the input
	input.value = '';
}

function handleLiClick(evt) {
	console.log(evt.target);
	console.log(this);
	evt.target.style.color = 'red';
	evt.target.style.textDecoration = 'line-through';
}
