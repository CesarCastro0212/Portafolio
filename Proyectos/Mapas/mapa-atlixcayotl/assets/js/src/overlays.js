function generatePopupContent(featureProperties) {  
  featuresAsString = JSON.stringify(featureProperties)
  return `<b>${featureProperties.name}</b> 
          <div>
            <button 
              type="button" 
              onclick='markerOnClick(${featuresAsString})' 
              class="btn-marker"
            >
              DETALLES
            </button> 
          </div>`;
}
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

// Grupos de marcadores, ahora con GeoJSON

// Hay que copiar esta parte para todas las áreas y cambiar los datos pertinentes,
// como los íconos.
var csh = L.geoJSON(cshGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCSH})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var ea = L.geoJSON(eaGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconEA})
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
  "Ciencias Sociales y Humanidades": csh,
  "Economico Administrativo": ea,
  "Dependencias": dependencias,
  "Edificios Multiaulas": emas,
  "Accesos": accesos,
}

var controlLayers = L.control.layers(null, overlays)
controlLayers.addTo(map);
