var client;
// create the code to get the Earthquakes data using an XMLHttpRequest
function getEarthquakes() {
	client = new XMLHttpRequest();
	client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
	client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work 
	client.send();
}
function loadEarthquakeData() {
    // call the getEarthquakes code
    // keep the alert message so that we know something is happening
    alert("Loading Earthquakes");
    getEarthquakes();
}
function earthquakeResponse() {
    // this function listens out for the server to say that the data is ready - i.e. has state 4
    if (client.readyState == 4) {
    // once the data is ready, process the data
    var earthquakedata = client.responseText;
    loadEarthquakelayer(earthquakedata);
}
}