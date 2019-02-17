// add a point, line and polygon
function addPointLinePoly() {
	// add a point
	L.marker([51.5, -0.09]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

	// add a circle
	L.circle([51.508, -0.11], 500, {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	// add a polygon with 3 end points (i.e. a triangle)
	var myPolygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
		],{
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
		}).addTo(mymap).bindPopup("I am a polygon.");
}
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
	userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>You were here</b>");
	document.getElementById('showLocation').innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
function trackAndCircle() {
	addPointLinePoly();
	trackLocation();
}
function startup() {
	document.addEventListener('DOMContentLoaded', function() {
		trackAndCircle ();
	}, false);
}