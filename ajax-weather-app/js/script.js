$(() => {
	const $input = $('input');
	const $location = $('#location');
	const $temp = $('#tempurature');
	const $feels = $('#feels');
	const $weather = $('#weather');

	$('form').on('submit', event => {
		event.preventDefault();
		//get input from form and store as variable
		let $search = $input.val();
		// clear the input form for the next search
		$input.val('');
		console.log($search);
		// ajax request
		$.ajax({
			url: `http://api.openweathermap.org/data/2.5/weather?q=${$search}&units=imperial&appid=be853936af64e10c7ae809463ba68499`,
		}).then(
			data => {
				// data is holding the json object from open weather api
                // display data
				render(data);
			},
			error => {
                // display error message
				renderError(error);
			},
		);
	});

	function render(data) {
		$location.text('Weather For : ' + data.name);
		$temp.text('Tempurature : ' + Math.round(data.main.temp) + ' F');
		$feels.text('Feels liks : ' + Math.round(data.main.feels_like) + ' F');
		$weather.text('Weather : ' + data.weather[0].description);
		console.log(data.name, data.main.feels_like, data.main.temp, data.weather[0].description);
	}

	function renderError(error) {
		$location.text('Sorry, ' + error.responseJSON.message);
	}
});
