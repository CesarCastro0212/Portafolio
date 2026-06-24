var labelTextCollision = new L.LabelTextCollision({
  collisionFlg : true
});

var map = L.map('map',{
  renderer : labelTextCollision
}).setView([0, 0], 0);

L.tileLayer('assets/images/imgs/map/png/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,
  minZoom: 1,
  maxZoom: 7,
}).addTo(map);