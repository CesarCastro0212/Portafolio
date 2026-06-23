var marker = L.marker([20.159098, -61.242676], {
  draggable: true,
}).addTo(map);

marker.bindPopup('LatLng Marker').openPopup();
marker.on('dragend', function (e) {
  marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
});