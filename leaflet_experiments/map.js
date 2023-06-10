var map = L.map('map').setView([0, -85], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const locations = ["Amambay, Paraguay", "Roraima, Brazil",
                   "Capital District, Venezuela", "Colima, Mexico",
                   "Esmeraldas, Ecuador"];
const lats = [-23, 2.135138, 10.474938, 19.166667, 0.7343619];
const longs = [-56, -61.3631922, -66.9704223, -104, -79.3858867];
const hrs = [70, 72, 78, 110, 81];

var circleMarker = [
    {pos: [lats[0], longs[0]], popup: locations[0] + "<br>Homicide Rate: " + hrs[0], radius: hrs[0] / 2},
    {pos: [lats[1], longs[1]], popup: locations[1] + "<br>Homicide Rate: " + hrs[1], radius: hrs[1] / 2},
    {pos: [lats[2], longs[2]], popup: locations[2] + "<br>Homicide Rate: " + hrs[2], radius: hrs[2] / 2},
    {pos: [lats[3], longs[3]], popup: locations[3] + "<br>Homicide Rate: " + hrs[3], radius: hrs[3] / 2},
    {pos: [lats[4], longs[4]], popup: locations[4] + "<br>Homicide Rate: " + hrs[4], radius: hrs[4] / 2}];
    circleMarker.forEach(function (obj) {
    var m = L.circleMarker(obj.pos, {
        color: '#B70039',
        fillColor: '#B70039',
        fillOpacity: 0.5,
        radius: obj.radius
    }).addTo(map),
        p = new L.tooltip()
                .setContent(obj.popup)
                .setLatLng(obj.pos);
    m.bindTooltip(p);
});

var osm2 = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 13, attribution: osmAttrib});
var miniMap = new L.Control.MiniMap(osm2).addTo(map);