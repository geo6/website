$(document).ready(function() {
  var map = L.map("map").setView([0, 0], 2);

  L.tileLayer("https://tile.geo6.be/osmbe/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>.',
    maxZoom: 18
  }).addTo(map);

  L.marker([50.896349, 4.36059], {
    interactive: false
  }).addTo(map);

  map.setView([50.896349, 4.36059], 13);
});
