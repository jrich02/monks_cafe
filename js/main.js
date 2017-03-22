function initMap() {
	var monkLocation = {lat: 40.8054491, lng: -73.9654415	};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: monkLocation,
		zoom: 15,
		scrollwheel: false
	});

	var marker = new google.maps.Marker({
		position: monkLocation,
		map: map,
		title: 'Monk\'s'
	});
}

initMap();