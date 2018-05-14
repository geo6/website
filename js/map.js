$(document).ready(function () {
  var map = L.map('map').setView([0, 0], 2);

  L.tileLayer('https://tile.geo6.be/osmbe/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Tiles courtesy of <a href="https://geo6.be/">GEO-6</a>.',
      maxZoom: 18
  }).addTo(map);

  var marker1 = L.circleMarker([50.897945, 4.363015], {});
  var marker2 = L.circleMarker([50.896349, 4.360590], {});
  var markers = L.featureGroup([
    marker1,
    marker2
  ]).addTo(map);

  map.fitBounds(markers.getBounds());
});
