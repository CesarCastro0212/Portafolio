var map = L.map('map').setView([0, 0], 0);

L.tileLayer('assets/images/imgs/map/tiles2/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,
  minZoom: 2,
  maxZoom: 6,
}).addTo(map);