function generatePopupContentAcces(featureProperties) {  
  featuresAsString = JSON.stringify(featureProperties)
  return `<b>${featureProperties.name}</b> 
          <div>
            <button 
              type="button" 
              onclick='acces(${featuresAsString})' 
              class="btn-marker"
            >
              DETALLES
            </button> 
          </div>`;
}
function generatePopupContent(featureProperties) {  
  featuresAsString = JSON.stringify(featureProperties)
  return `<b>${featureProperties.name}</b> 
          <div>
            <button 
              type="button" 
              onclick='levels(${featuresAsString})' 
              class="btn-marker"
            >
              DETALLES
            </button> 
          </div>`;
}

// Grupos de marcadores, ahora con GeoJSON
// Hay que copiar esta parte para todas las áreas y cambiar los datos pertinentes,
// como los íconos.
var enf = L.geoJSON(enfGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCNS})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var est = L.geoJSON(estGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCNS})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var med = L.geoJSON(medGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCNS})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var dependencias = L.geoJSON(dependenciasGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconINST})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var emas = L.geoJSON(emasGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconINST})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});

var accesos = L.geoJSON(accesosGeoJson, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconINST})
            .bindPopup(
              generatePopupContentAcces(feature.properties)
            );
  }
});

//Marker ovelays
var overlays = {
  "Enfermería": enf,
  "Estomatología": est,
  "Medicina": med,
  "Dependencias": dependencias,
  "Edificios Multiaulas": emas,
  "Accesos": accesos,
}

var controlLayers = L.control.layers(null, overlays)
controlLayers.addTo(map);
