$(() => {
	const $memeDiv = $('#memes');
	// $.ajax({url:'https://api.imgflip.com/get_memes'})
	// .then(result => result.json())
	// .then(items => data.push(items.memes))
	$.ajax({
		url: `https://api.imgflip.com/get_memes`,
	}).then(
		result => {
			// result var is holding the json object from the api
			console.log(result.data.memes);
			// display result
			render(result.data.memes);
		},
		error => {
			// display error message
			console.log(error);
		},
	);
      // result.data.memes is the arg -> data is the param for it
	function render(data) {
        const $ul = $('<ul></ul>')
		data.forEach(item => {
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


