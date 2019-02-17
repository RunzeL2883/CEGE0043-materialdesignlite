function trackAndCircle () {
	L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap).bindPopup("<b>Here's your position!</b>").openPopup();
}