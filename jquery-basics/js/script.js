// add your solution here
$('#addHome').removeClass('btn-danger').addClass('btn-success');
$('h1.jumbotron').addClass('text-center');

const $newLink = $('<br><br><a id="zillowLink" href="https://www.zillow.com">Visit Zillow.com</a>');

$('body').append($newLink);

$('#zillowLink').attr('target', '_blank');

// $('#addHome').click(function(evt) {
//     console.log(evt);
// });

$('#homes > tbody').on('click', 'button', function (evt) {
	$(this)
		.closest('tr')
		.fadeOut(2000, function () {
			$(this).remove();
		});
});

var newHomes = [
	{ address: '27569 Cedarwood Drive', sf: '2,535', bedrooms: 3, baths: 2.5, price: '$496,500' },
	{ address: '316 Annandale Drive', sf: '1,326', bedrooms: 4, baths: 2, price: '$275,000' },
	{ address: '251 Grandview Road', sf: '3,800', bedrooms: 3, baths: 2, price: '$699,900' },
	{ address: '28571 Manitoba', sf: '2,960', bedrooms: 4, baths: 3.5, price: '$775,000' },
];

// attach  an  event listener to the button with addHome id
$('#addHome').on('click', function (evt) {
	// remove an object from the array inside the event handler
	const homeObj = newHomes.shift();
    // edge  case
    if(newHomes.length === 0) {
        $(this).attr('disabled', true);
        return; // prevents  code below from running
    };
	// create  a  jQuery object/elemtn with the objects data
	const $tr = $(`
    <tr>
        <td>${homeObj.address}</td>
        <td>${homeObj.sf}</td>
        <td>${homeObj.bedrooms}</td>
        <td>${homeObj.baths}</td>
        <td>${homeObj.price}</td>
        <td><button class="btn btn-xs btn-danger">Remove</button></td>
    </tr>
    `);
    // append the created jQuery object to the table
    $('tbody').append($tr);
});
