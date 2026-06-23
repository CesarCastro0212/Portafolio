
map.addLayer(regiones);
map.addLayer(municipios);

map.on("zoomend", function () {
  let zoom = map.getZoom();
  console.log("Zoom actual:", zoom);

  if (zoom < 7) {
    if (map.hasLayer(municipios)) map.removeLayer(municipios);
    if (!map.hasLayer(regiones)) map.addLayer(regiones);
  } else {
    if (map.hasLayer(regiones)) map.removeLayer(regiones);
    if (!map.hasLayer(municipios)) map.addLayer(municipios);
  }
});