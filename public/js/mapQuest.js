function initMap() {
	// add your code here
	L.mapquest.key = '8c0493GlGjqi6RFdZo0aQYl3KlpaqMFM';

// 'map' refers to a <div> element with the ID map

var map = L.mapquest.map('map', {
  center: [32.88,-117.236],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12,
  zoomControl: false
});
	//add a marker to map
  L.marker([32.88,-117.236]).addTo(map);
}