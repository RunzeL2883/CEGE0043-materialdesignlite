function trackLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.watchPosition(showPosition);
	}
	else {
		document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
	}
 }
L.marker([position.coords.latitude, position.coords.longitude]).addTo(userMarker).bindPopup("<b>You were here</b>");
var userMarker;
if (userMarker){
mymap.removeLayer(userMarker);
}