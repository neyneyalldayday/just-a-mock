const map = L.map('map').setView([41.4901, -71.3128], 15);
const marker = L.marker([41.4901, -71.3128]).addTo(map);
const mapDiv = document.querySelector("#map")

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// function addMap(){
//     mapDiv.appendChild(map)
// }

// addMap()