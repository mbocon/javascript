// constant variables - data that never changes
const BASE_URL = 'https://api.spacexdata.com/v3/launches';
// state variables - data that changes
let year = new Date();
$('.year').text(year.getFullYear());
let launches;
// cached element references - parts of the dom we need to touch
const $launches = $('#launches');
// event listeners - capture and respond to events i.e. user clicks on something
// functions - code that represents actions taken/carried out
init();
function init() {
	getData();
}
function getData() {
	$.ajax(BASE_URL + '?limit=12').then(
		function (data) {
			launches = data;
			render();
		},
		function (error) {
			console.log(error);
		},
	);
}
function render() {
	const html = launches.map(function (launch) {
		return `
            <article class="card">
                <h1>${launch.mission_name}</h1>
                <p>${launch.launch_year}</p>
            </article>
        `;
	});
	$launches.append(html);
}
