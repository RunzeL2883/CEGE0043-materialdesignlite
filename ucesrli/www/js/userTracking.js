function trackLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	}
	else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
	}
}
var userMarker;
function showPosition(position) {
	if (userMarker){
		mymap.removeLayer(userMarker);
	}
	L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
	document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}