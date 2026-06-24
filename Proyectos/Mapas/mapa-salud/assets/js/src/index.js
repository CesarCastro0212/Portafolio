var map = L.map('map').setView([0, 0], 0);

L.tileLayer('assets/images/imgs/map/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,
  minZoom: 1,
  maxZoom: 6,
}).addTo(map);