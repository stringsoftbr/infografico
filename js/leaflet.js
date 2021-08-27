var mymap = L.map('mapid').setView([-25.264568, -51.932373], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(mymap);
L.marker([-25.460508, -53.818149]).addTo(mymap)
    .bindPopup("<b>Parque Nacional do iguçu").openPopup();

L.marker([-25.781962, -49.695980]).addTo(mymap)
    .bindPopup("<b>Parque Estadual do Monge").openPopup();

L.marker([-25.789296, -48.527802]).addTo(mymap)
    .bindPopup("<b>Parque Estadual Rio da Onça").openPopup();

L.marker([-24.913483, -53.909966]).addTo(mymap)
    .bindPopup("<b>Parque Estadual Cabeça do Cachorro").openPopup();

L.marker([-25.245803, -50.020564
]).addTo(mymap)
    .bindPopup("<b>Parque Estadual de Vila Velha").openPopup();


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);