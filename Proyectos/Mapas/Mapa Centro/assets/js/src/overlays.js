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
var icsh = L.geoJSON(icshGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCSH})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var art = L.geoJSON(artGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCSH})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var fl = L.geoJSON(flGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCSH})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var psi = L.geoJSON(psiGeoJSON, {
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconCSH})
            .bindPopup(
              generatePopupContent(feature.properties)
            );
  }
});
var zap = L.geoJSON(zapGeoJSON,{
  pointToLayer: function(feature, latlng) { 
    return L.marker(latlng, {icon: iconPREPA})
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


//Marker ovelays
var overlays = {
  "Instituto de Ciencias Sociales y Humanidades": icsh,
  "Facultad de Artes": art,
  "Facultad de Filosofía y Letras": fl,
  "Facultad de Psicología": psi,
  "Preparatoria Emiliano Zapata": zap,
  "Dependencias": dependencias,
}

var controlLayers = L.control.layers(null, overlays)
controlLayers.addTo(map);
