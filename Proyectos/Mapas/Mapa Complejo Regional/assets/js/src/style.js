var map = new maplibregl.Map({
  container: 'map',
  style: {
    "version": 8,
    "name": "Mi estilo básico",
    "sources": {},
    "sprite": "https://demotiles.maplibre.org/styles/osm-bright/sprite", 
    "glyphs": "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "paint": { "background-color": "#ffffff" }
      }
    ]
  },
  center: [-98.2, 19.0],
  zoom: 6
});
