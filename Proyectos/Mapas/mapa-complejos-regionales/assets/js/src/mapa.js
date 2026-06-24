var map = L.map('map').setView([0, 0], 1);

let puebla, regiones, prueba;

//PUEBLA
fetch("assets/js/src/puebla.geojson")
  .then(r => r.json())
  .then(data => {
    puebla = L.geoJson(data, {
      style: {
        color: "#333",
        weight: 1,
        fillColor: "#66c2a5",
        fillOpacity: 0.5
      },
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.nombre) {
          layer.bindTooltip(feature.properties.nombre, {
            permanent: true,
            direction: "center",
            className: "etiqueta"
          });
        }
      }
    }).addTo(map); // 👈 Al inicio solo cargamos regiones
  });

// REGIONES
fetch("assets/js/src/regiones.geojson")
  .then(r => r.json())
  .then(data => {
    regiones = L.geoJson(data, {
      style: {
        color: "#333",
        weight: 1,
        fillColor: "red",
        fillOpacity: 0.5
      },
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.nombre) {
          layer.bindTooltip(feature.properties.nombre, {
            permanent: true,
            direction: "center",
            className: "etiqueta"
          });
        }
      }
    });
  });

//LOCALIDAD
fetch("assets/js/src/norte/prueba.geojson")
  .then(r => r.json())
  .then(data => {
    prueba = L.geoJson(data, {
      style: {
        color: "#333",
        weight: 1,
        fillColor: "green",
        fillOpacity: 0.5
      },
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.nombre) {
          layer.bindTooltip(feature.properties.nombre, {
            permanent: true,
            direction: "center",
            className: "etiqueta"
          });
        }
      }
    }); // 👈 Al inicio solo cargamos regiones
  });

function actualizarVisibilidad() {
  let zoom = map.getZoom();

  // Regiones
  if (zoom < 2) {
    if (!map.hasLayer(puebla)) map.addLayer(puebla);
    if (map.hasLayer(regiones)) map.removeLayer(regiones);
    if (map.hasLayer(prueba)) map.removeLayer(prueba);
  }

  // Municipios
  if (zoom >= 2 && zoom < 3) {
    if (!map.hasLayer(regiones)) map.addLayer(regiones);
    if (map.hasLayer(puebla)) map.removeLayer(puebla);
    if (map.hasLayer(prueba)) map.removeLayer(prueba);
  }

  // Localidades
  if (zoom >= 3) {
    if (!map.hasLayer(prueba)) map.addLayer(prueba);
    if (map.hasLayer(regiones)) map.removeLayer(regiones);
    if (map.hasLayer(puebla)) map.removeLayer(puebla);
  }
}

let debounce;
function actualizarVisibilidadDebounced() {
  clearTimeout(debounce);
  debounce = setTimeout(actualizarVisibilidad, 100);
}

map.on("zoom", actualizarVisibilidadDebounced);
map.on("move", actualizarVisibilidadDebounced);