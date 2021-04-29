$(() => {
	const $memeDiv = $('#memes');
	// $.ajax({url:'https://api.imgflip.com/get_memes'})
	// .then(result => result.json())
	// .then(items => data.push(items.memes))
	$.ajax({
		url: `https://api.imgflip.com/get_memes`,
	}).then(
		result => {
			// data is holding the json object from open weather api
			// display data
			console.log(result.data.memes);
			render(result.data.memes);
		},
		error => {
			// display error message
			console.log(error);
		},
	);

	function render(data) {
        const $ul = $('<ul></ul>')
		data.forEach(item => {
			console.log(item.url, 'to append');
			const $img = $('<img />', {
				src: item.url,
				alt: item.name,
			});
            const $li = $('<li></li>')
            $li.append($img)
            $ul.append($li)
			$memeDiv.append($ul);
		});
	}
});
