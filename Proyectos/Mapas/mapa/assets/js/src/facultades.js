const grupoFacultades = L.layerGroup([dep, cns, ice, ea, csh]);
let visibles = false;

// Botón para mostrar/ocultar todas las facultades
const boton = document.getElementById("toggle-facultades");

boton.addEventListener("click", () => {
  if (map.hasLayer(grupoFacultades)) {
    map.removeLayer(grupoFacultades);
  } else {
    map.addLayer(grupoFacultades);
  }
});

// generatePopupContent(grupoFacultades)