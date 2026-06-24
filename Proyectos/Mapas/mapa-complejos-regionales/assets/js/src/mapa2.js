// Colocar al inicio de mapa2.js
function normalizar(texto) {
    if (!texto) return "";
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toUpperCase();
}

var map = new maplibregl.Map({
  container: 'map',
  style: {
    "version": 8,
    "sources": {},
    "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": { "background-color": "#ffffff" }
      }
    ]
  },
  center: [-98, 19],  
  zoom: 0,  
  maxZoom: 5,
  renderWorldCopies: false
});
//-------------------------------------------------------------------------------------------------------------
map.on('style.load', function() {

//-------------------------------------------------------------------------------------------------------------

document.getElementById("cerrar-menu").addEventListener("click", (e) => {
    e.stopPropagation(); // 🔥 Esto evita que el mapa vuelva a abrir el menú.

    const menu = document.getElementById("menu-flotante");
    menu.classList.add("hidden");
    menu.classList.remove("scale-100", "opacity-100");
    menu.classList.add("scale-95", "opacity-0");

});



//-------------------------------------------------------------------------------------------------------------
  
  //PUEBLA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('puebla', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Puebla.geojson'
  });
  // Fill
  map.addLayer({
    id: 'puebla-fill',
    type: 'fill',
    source: 'puebla',
    paint: { 'fill-color': '#66c2a5', 'fill-opacity': 0.5 },
    minzoom: 0,     // 👈 visible desde zoom 0
    maxzoom: 2     // 👈 hasta zoom 10
  });
  // Bordes
  map.addLayer({
    id: 'puebla-borders',
    type: 'line',
    source: 'puebla',
    paint: { 'line-color': '#333', 'line-width': 1 }    
  });
  // Labels
  map.addLayer({
    id: 'puebla-labels',
    type: 'symbol',
    source: 'puebla',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,     // 👈 visible desde zoom 0
    maxzoom: 2     // 👈 hasta zoom 10
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Puebla.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
      map.fitBounds(bbox, { padding: 40 });
    });

  // ----------------------------------------------------------------------------------------------
  // ========================== C O M P L E J O S   R E G I O N A L E S ===========================
  //NORTE
  //LOAD
  map.addSource('norte', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Norte.geojson'
  });
  //FILL
  map.addLayer({
    id: 'norte-fill',
    type: 'fill',
    source: 'norte',
    paint: { 'fill-color': '#803030ff', 'fill-opacity': 0.5 },
    minzoom: 0,    
    maxzoom: 6    
  });
  //BORDERS
  map.addLayer({
    id: 'norte-borders',
    type: 'line',
    source: 'norte',
    paint: { 'line-color': '#333', 'line-width': 1 },
  });
  //LABELS
  map.addLayer({
    id: 'norte-labels',
    type: 'symbol',
    source: 'norte',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,   
    maxzoom: 3     
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Norte.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //NORORIENTAL
  //LOAD
  map.addSource('nororiental', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Nororiental.geojson'
  });
  //FILL
  map.addLayer({
    id: 'nororiental-fill',
    type: 'fill',
    source: 'nororiental',
    paint: { 'fill-color': '#7697ddff', 'fill-opacity': 0.5 },
    minzoom: 0,   
    maxzoom: 6    
  });
  //BORDERS
  map.addLayer({
    id: 'nororiental-borders',
    type: 'line',
    source: 'nororiental',
    paint: { 'line-color': '#333', 'line-width': 1 },
  });
  //LABELS
  map.addLayer({
    id: 'nororiental-labels',
    type: 'symbol',
    source: 'nororiental',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,  
    maxzoom: 3   
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Nororiental.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //CENTRO
  //LOAD
  map.addSource('centro', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Centro.geojson'
  });
  //FILL
  map.addLayer({
    id: 'centro-fill',
    type: 'fill',
    source: 'centro',
    paint: { 'fill-color': '#d371cbff', 'fill-opacity': 0.5 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'centro-borders',
    type: 'line',
    source: 'centro',
    paint: { 'line-color': '#333', 'line-width': 1 },
  });
  //LABELS
  map.addLayer({
    id: 'centro-labels',
    type: 'symbol',
    source: 'centro',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 3     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Centro.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //COMPLEJO REGIONAL SUR
  //LOAD
  map.addSource('sur', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Sur.geojson'
  });
  //FILL
  map.addLayer({
    id: 'sur-fill',
    type: 'fill',
    source: 'sur',
    paint: { 'fill-color': '#3ada5cff', 'fill-opacity': 0.5 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'sur-borders',
    type: 'line',
    source: 'sur',
    paint: { 'line-color': '#333', 'line-width': 1 },
  });
  //LABELS
  map.addLayer({
    id: 'sur-labels',
    type: 'symbol',
    source: 'sur',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 3     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Sur.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //COMPLEJO REGIONAL MIXTECA
  //LOAD
  map.addSource('mixteca', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Mixteca.geojson'
  });
  //FILL
  map.addLayer({
    id: 'mixteca-fill',
    type: 'fill',
    source: 'mixteca',
    paint: { 'fill-color': '#a73adaff', 'fill-opacity': 0.5 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'mixteca-borders',
    type: 'line',
    source: 'mixteca',
    paint: { 'line-color': '#333', 'line-width': 1 },
  });
  //LABELS
  map.addLayer({
    id: 'mixteca-labels',
    type: 'symbol',
    source: 'mixteca',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 0,    // 👈 visible desde zoom 10
    maxzoom: 3     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Mixteca.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


// =======================================================================================================
// MUNICIPIOS
// =======================================================================================================


  //CHIGNAHUAPAN
  //LOAD
  map.addSource('chignahuapan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Chignahuapan.geojson'
  });
  //FILL
  map.addLayer({
    id: 'chignahuapan-fill',
    type: 'fill',
    source: 'chignahuapan',
    paint: { 'fill-color': '#703c3cff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'chignahuapan-borders',
    type: 'line',
    source: 'chignahuapan',
    paint: { 'line-color': '#333', 'line-width': 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //LABELS
  map.addLayer({
    id: 'chignahuapan-labels',
    type: 'symbol',
    source: 'chignahuapan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Chignahuapan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //ZACATLAN
  //LOAD
  map.addSource('zacatlan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Zacatlan.geojson'
  });
  //FILL
  map.addLayer({
    id: 'zacatlan-fill',
    type: 'fill',
    source: 'zacatlan',
    paint: { 'fill-color': '#703c3cff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'zacatlan-borders',
    type: 'line',
    source: 'zacatlan',
    paint: { 'line-color': '#333', 'line-width': 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //LABELS
  map.addLayer({
    id: 'zacatlan-labels',
    type: 'symbol',
    source: 'zacatlan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Zacatlan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });
  

  //HUACHINANGO
  //LOAD
  map.addSource('huachinango', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Huachinango.geojson'
  });
  //FILL
  map.addLayer({
    id: 'huachinango-fill',
    type: 'fill',
    source: 'huachinango',
    paint: { 'fill-color': '#703c3cff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //BORDERS
  map.addLayer({
    id: 'huachinango-borders',
    type: 'line',
    source: 'huachinango',
    paint: { 'line-color': '#333', 'line-width': 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  //LABELS
  map.addLayer({
    id: 'huachinango-labels',
    type: 'symbol',
    source: 'huachinango',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Huachinango.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //VENUSTIANO CARRANZA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('venustiano', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Venustiano.geojson'
  });
  // Fill
  map.addLayer({
    id: 'venustiano-fill',
    type: 'fill',
    source: 'venustiano',
    paint: { 'fill-color': '#703c3cff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'venustiano-borders',
    type: 'line',
    source: 'venustiano',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'venustiano-labels',
    type: 'symbol',
    source: 'venustiano',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Venustiano.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //TETELA DE OCAMPO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tetela', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tetela.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tetela-fill',
    type: 'fill',
    source: 'tetela',
    paint: { 'fill-color': '#703c3cff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tetela-borders',
    type: 'line',
    source: 'tetela',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tetela-labels',
    type: 'symbol',
    source: 'tetela',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tetela.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //IXTEPEC
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('ixtepec', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Ixtepec.geojson'
  });
  // Fill
  map.addLayer({
    id: 'ixtepec-fill',
    type: 'fill',
    source: 'ixtepec',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'ixtepec-borders',
    type: 'line',
    source: 'ixtepec',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'ixtepec-labels',
    type: 'symbol',
    source: 'ixtepec',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Ixtepec.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  
  //ZACAPOAXTLA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('zacapoaxtla', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Zacapoaxtla.geojson'
  });
  // Fill
  map.addLayer({
    id: 'zacapoaxtla-fill',
    type: 'fill',
    source: 'zacapoaxtla',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'zacapoaxtla-borders',
    type: 'line',
    source: 'zacapoaxtla',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'zacapoaxtla-labels',
    type: 'symbol',
    source: 'zacapoaxtla',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Zacapoaxtla.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });



  //CUETZALA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('cuetzala', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Cuetzala.geojson'
  });
  // Fill
  map.addLayer({
    id: 'cuetzala-fill',
    type: 'fill',
    source: 'cuetzala',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'cuetzala-borders',
    type: 'line',
    source: 'cuetzala',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'cuetzala-labels',
    type: 'symbol',
    source: 'cuetzala',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Cuetzala.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  
  //TLATLAUQUITEPEC
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tlatlauquitepec', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tlatlauquitepec.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tlatlauquitepec-fill',
    type: 'fill',
    source: 'tlatlauquitepec',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tlatlauquitepec-borders',
    type: 'line',
    source: 'tlatlauquitepec',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tlatlauquitepec-labels',
    type: 'symbol',
    source: 'tlatlauquitepec',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tlatlauquitepec.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //TEZIUTLÁN
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('teziutlan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Teziutlan.geojson'
  });
  // Fill
  map.addLayer({
    id: 'teziutlan-fill',
    type: 'fill',
    source: 'teziutlan',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'teziutlan-borders',
    type: 'line',
    source: 'teziutlan',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'teziutlan-labels',
    type: 'symbol',
    source: 'teziutlan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Teziutlan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //LIBRES
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('libres', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Libres.geojson'
  });
  // Fill
  map.addLayer({
    id: 'libres-fill',
    type: 'fill',
    source: 'libres',
    paint: { 'fill-color': '#5284c5ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'libres-borders',
    type: 'line',
    source: 'libres',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'libres-labels',
    type: 'symbol',
    source: 'libres',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Libres.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //CIUDAD SERDÁN
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('ciudadserdan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/CiudadSerdan.geojson'
  });
  // Fill
  map.addLayer({
    id: 'ciudadserdan-fill',
    type: 'fill',
    source: 'ciudadserdan',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'ciudadserdan-borders',
    type: 'line',
    source: 'ciudadserdan',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'ciudadserdan-labels',
    type: 'symbol',
    source: 'ciudadserdan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/CiudadSerdan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //ACAJETE
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('acajete', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Acajete.geojson'
  });
  // Fill
  map.addLayer({
    id: 'acajete-fill',
    type: 'fill',
    source: 'acajete',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'acajete-borders',
    type: 'line',
    source: 'acajete',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'acajete-labels',
    type: 'symbol',
    source: 'acajete',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Acajete.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //SAN JOSÉ CHIAPA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('sanjosechiapa', {
    type: 'geojson',
    data: 'assets/js/src/geojson/SanJoseChiapa.geojson'
  });
  // Fill
  map.addLayer({
    id: 'sanjosechiapa-fill',
    type: 'fill',
    source: 'sanjosechiapa',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'sanjosechiapa-borders',
    type: 'line',
    source: 'sanjosechiapa',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'sanjosechiapa-labels',
    type: 'symbol',
    source: 'sanjosechiapa',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/SanJoseChiapa.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //TEPEACA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tepeaca', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tepeaca.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tepeaca-fill',
    type: 'fill',
    source: 'tepeaca',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tepeaca-borders',
    type: 'line',
    source: 'tepeaca',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tepeaca-labels',
    type: 'symbol',
    source: 'tepeaca',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tepeaca.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

  //ACATZINGO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('acatzingo', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Acatzingo.geojson'
  });
  // Fill
  map.addLayer({
    id: 'acatzingo-fill',
    type: 'fill',
    source: 'acatzingo',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'acatzingo-borders',
    type: 'line',
    source: 'acatzingo',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'acatzingo-labels',
    type: 'symbol',
    source: 'acatzingo',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Acatzingo.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //TECAMACHALCO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tecamachalco', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tecamachalco.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tecamachalco-fill',
    type: 'fill',
    source: 'tecamachalco',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tecamachalco-borders',
    type: 'line',
    source: 'tecamachalco',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tecamachalco-labels',
    type: 'symbol',
    source: 'tecamachalco',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tecamachalco.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //SAN SALVADOR EL SECO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('sansalvadorelseco', {
    type: 'geojson',
    data: 'assets/js/src/geojson/SanSalvadorelSeco.geojson'
  });
  // Fill
  map.addLayer({
    id: 'sansalvadorelseco-fill',
    type: 'fill',
    source: 'sansalvadorelseco',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'sansalvadorelseco-borders',
    type: 'line',
    source: 'sansalvadorelseco',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'sansalvadorelseco-labels',
    type: 'symbol',
    source: 'sansalvadorelseco',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/SanSalvadorelSeco.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //REYES DE JUÁREZ
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('reyesdejuarez', {
    type: 'geojson',
    data: 'assets/js/src/geojson/ReyesdeJuarez.geojson'
  });
  // Fill
  map.addLayer({
    id: 'reyesdejuarez-fill',
    type: 'fill',
    source: 'reyesdejuarez',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'reyesdejuarez-borders',
    type: 'line',
    source: 'reyesdejuarez',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'reyesdejuarez-labels',
    type: 'symbol',
    source: 'reyesdejuarez',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/ReyesdeJuarez.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //AMOZOC
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('amozoc', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Amozoc.geojson'
  });
  // Fill
  map.addLayer({
    id: 'amozoc-fill',
    type: 'fill',
    source: 'amozoc',
    paint: { 'fill-color': '#d44bc9ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'amozoc-borders',
    type: 'line',
    source: 'amozoc',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'amozoc-labels',
    type: 'symbol',
    source: 'amozoc',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Amozoc.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //TLACOTEPEC
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tlacotepec', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tlacotepec.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tlacotepec-fill',
    type: 'fill',
    source: 'tlacotepec',
    paint: { 'fill-color': '#18af39ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tlacotepec-borders',
    type: 'line',
    source: 'tlacotepec',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tlacotepec-labels',
    type: 'symbol',
    source: 'tlacotepec',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tlacotepec.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //TEHUACAN
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('tehuacan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Tehuacan.geojson'
  });
  // Fill
  map.addLayer({
    id: 'tehuacan-fill',
    type: 'fill',
    source: 'tehuacan',
    paint: { 'fill-color': '#18af39ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'tehuacan-borders',
    type: 'line',
    source: 'tehuacan',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'tehuacan-labels',
    type: 'symbol',
    source: 'tehuacan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Tehuacan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });



  //COYOMEAPAN
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('coyomeapan', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Coyomeapan.geojson'
  });
  // Fill
  map.addLayer({
    id: 'coyomeapan-fill',
    type: 'fill',
    source: 'coyomeapan',
    paint: { 'fill-color': '#18af39ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'coyomeapan-borders',
    type: 'line',
    source: 'coyomeapan',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'coyomeapan-labels',
    type: 'symbol',
    source: 'coyomeapan',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Coyomeapan.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });


  //VICENTE GUERRERO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('vicenteguerrero', {
    type: 'geojson',
    data: 'assets/js/src/geojson/VicenteGuerrero.geojson'
  });
  // Fill
  map.addLayer({
    id: 'vicenteguerrero-fill',
    type: 'fill',
    source: 'vicenteguerrero',
    paint: { 'fill-color': '#18af39ff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'vicenteguerrero-borders',
    type: 'line',
    source: 'vicenteguerrero',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'vicenteguerrero-labels',
    type: 'symbol',
    source: 'vicenteguerrero',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/VicenteGuerrero.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
  });


  
  //ATLIXCO
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('atlixco', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Atlixco.geojson'
  });
  // Fill
  map.addLayer({
    id: 'atlixco-fill',
    type: 'fill',
    source: 'atlixco',
    paint: { 'fill-color': '#980bdaff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'atlixco-borders',
    type: 'line',
    source: 'atlixco',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'atlixco-labels',
    type: 'symbol',
    source: 'atlixco',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Atlixco.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });



  //IZÚCAR
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('izucar', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Izucar.geojson'
  });
  // Fill
  map.addLayer({
    id: 'izucar-fill',
    type: 'fill',
    source: 'izucar',
    paint: { 'fill-color': '#980bdaff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'izucar-borders',
    type: 'line',
    source: 'izucar',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'izucar-labels',
    type: 'symbol',
    source: 'izucar',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Izucar.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });



    //CHIAUTLA
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('chiautla', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Chiautla.geojson'
  });
  // Fill
  map.addLayer({
    id: 'chiautla-fill',
    type: 'fill',
    source: 'chiautla',
    paint: { 'fill-color': '#980bdaff', 'fill-opacity': 0.5 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Bordes
  map.addLayer({
    id: 'chiautla-borders',
    type: 'line',
    source: 'chiautla',
    paint: { 'line-color': '#333', 'line-width': 1 },   
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Labels
  map.addLayer({
    id: 'chiautla-labels',
    type: 'symbol',
    source: 'chiautla',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 17 },
    paint: { 'text-color': '#000000',"text-halo-color": "#ffffffff",
  "text-halo-width": 1 },
    minzoom: 3,    // 👈 visible desde zoom 10
    maxzoom: 6     // 👈 hasta zoom máximo
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Chiautla.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data); // requiere turf.js
    });

// =====================================================================================

  //NORTE
  // 👉 Cargar GeoJSON solo una vez
  map.addSource('n', {
    type: 'geojson',
    data: 'assets/js/src/geojson/Nort.geojson'
  });
  // Fill
  map.addLayer({
    id: 'n-fill',
    type: 'fill',
    source: 'n',
    paint: { 'fill-color': 'rgba(255, 0, 0, 1)', 'fill-opacity': 1 }
  });
  // Bordes
  map.addLayer({
    id: 'n-borders',
    type: 'line',
    source: 'n',
    paint: { 'line-color': '#333', 'line-width': 1 }    
  });
  // Labels
  map.addLayer({
    id: 'n-labels',
    type: 'symbol',
    source: 'n',
    layout: { 'text-field': ['get', 'nombre'], 'text-size': 15,"text-allow-overlap": true},    
    paint: { 'text-color': '#ffffffff',  "text-halo-color": "#000000",
  "text-halo-width": 1}
  });
  // Ajustar vista automáticamente al GeoJSON
  fetch('assets/js/src/geojson/Nort.geojson')
    .then(res => res.json())
    .then(data => {
      var bbox = turf.bbox(data);
    });

});

// =================================================================================================================

// LISTA DE MUNICIPIOS
const municipios = ["chignahuapan", "zacatlan", "huachinango", "venustiano", "tetela", "ixtepec", 
  "zacapoaxtla", "cuetzala", "tlatlauquitepec", "teziutlan", "libres", "ciudadserdan", "acajete",
  "sanjosechiapa", "tepeaca", "acatzingo", "tecamachalco", "sansalvadorelseco", "reyesdejuarez",
  "amozoc", "tlacotepec", "tehuacan", "coyomeapan", "atlixco", "izucar", "chiautla", "vicenteguerrero"
]




municipios.forEach((nombre) =>{
  const layerID = `${nombre}-fill`;

  map.on('click', layerID, (e)=>{
    const props = e.features[0].properties;
    const municipio = 
      props.nombre || 
      props.NOMBRE || 
      props.Name || 
      props.Municipio || 
      props.mpio || 
      props.MPIO || 
      "";

    const municipioFinal = municipio.trim();
    mostrarMenuMunicipio(municipioFinal);

  });

  map.on('mouseenter', layerID, ()=>{
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', layerID, ()=>{
    map.getCanvas().style.cursor = '';
  });

});


// utilidad: asegura que la data esté lista antes de ejecutar callback
function whenInstitucionesReady(callback) {
  if (window.institucionesPorMunicipio) {
    callback();
    return;
  }
  // si todavía no existe, escuchar evento una sola vez
  function onLoad() {
    window.removeEventListener('institucionesLoaded', onLoad);
    callback();
  }
  window.addEventListener('institucionesLoaded', onLoad);
}

function cerrarTodosLosSubmenus() {
    document.querySelectorAll('[data-menu]').forEach(menu => {
        menu.classList.remove("open");
        // Forzamos el cierre visual inmediato
        menu.style.maxHeight = null; 
    });
}

// --- Función Principal Modificada ---
function mostrarMenuMunicipio(municipio) {
  
    const menu = document.getElementById("menu-flotante");

    // 1. Limpiar estado anterior
    cerrarTodosLosSubmenus(); 
    
    // 2. Mostrar menú principal
    menu.classList.remove("hidden", "scale-95", "opacity-0");
    menu.classList.add("scale-100", "opacity-100");

    // 3. Cargar datos
    whenInstitucionesReady(() => {
        actualizarMenu(municipio);
    });
}

function actualizarMenu(nombreMunicipio) {
    const claveBuscada = normalizar(nombreMunicipio);
    const data = window.institucionesPorMunicipio[claveBuscada];

    if (!data) {
      return;
    }

    document.getElementById("nombre-municipio").textContent = nombreMunicipio;

    // 1. Ocultar todos los botones/contenedores al inicio
    const menu = document.getElementById("menu-flotante");
    if (menu) {
        ['uni', 'prepa', 'campus'].forEach(tipo => {
            const btn = menu.querySelector(`[data-btn="${tipo}"]`);
            // El .closest('div') encuentra el <div> padre que contiene el botón y el submenú
            const parentDiv = btn ? btn.closest('div') : null;
            if (parentDiv) {
                // Aseguramos que todos estén ocultos para empezar
                parentDiv.classList.add('hidden'); 
            }
        });
    }

    // 2. Cargar listas. La función cargarLista solo hará visible el botón si hay datos.
    cargarLista("uni", data?.universidades || []);
    cargarLista("prepa", data?.preparatorias || []);
    cargarLista("campus", data?.campus || []);
}

function cargarLista(tipo, lista) {
    const menu = document.getElementById("menu-flotante");
    if (!menu) return;

    // 1. Obtener el contenedor principal (el div que engloba el botón y el submenú)
    const btn = menu.querySelector(`[data-btn="${tipo}"]`);
    const parentDiv = btn ? btn.closest('div') : null;

    if (!parentDiv) {
        return;
    }

    const contenedor = menu.querySelector(
        `[data-menu=\"${tipo}\"] .lista-instituciones`
    );
    
    // Limpiar el contenido del submenú
    if (contenedor) {
        contenedor.innerHTML = "";
    }


    if (!lista || lista.length === 0) {
        // 2. Si la lista está vacía, no hacemos nada.
        // El botón ya está oculto gracias a la lógica en mostrarMenuMunicipio().
        return;
    }

    // 3. Si hay datos: Hacemos visible el contenedor principal
    parentDiv.classList.remove('hidden');

    if (contenedor) {
        lista.forEach(item => {
            const a = document.createElement("a");
            a.href = item.web;
            a.className = "block px-4 py-2 hover:bg-gray-100 text-sm";
            a.textContent = item.nombre;
            contenedor.appendChild(a);
        });
    }
}


function esperarData(callback) {
    if (window.institucionesPorMunicipio) {
        callback();
    } else {
        setTimeout(() => esperarData(callback), 50);
    }
}

document.querySelectorAll("[data-btn]").forEach(btn => {
  btn.addEventListener("click", () => {
    const tipo = btn.dataset.btn;
    const menu = document.querySelector(`[data-menu="${tipo}"]`);

    menu.classList.toggle("open");
  });
});

