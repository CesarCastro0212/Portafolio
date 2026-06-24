//MARCADORES
// var marker = L.marker([20.159098, -61.242676], {
//   draggable: true,
// }).addTo(map);

// Se debe repetir esta parte para cada área.
var icshGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ICS1",
      "popupContent": '<b>ICS1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/instituto-de-ciencias-sociales-y-humanidades",
      "ruta": "https://maps.app.goo.gl/WA4rSqUacfefLQjPA",
      "recorrido": "https://recorridosvirtuales.buap.mx/icsyh/",
      "botones":[
        {
          "name": "ICS1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICS/ICS1.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-26.542969, 0.008107]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ICS2",
      "popupContent": '<b>ICS2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/instituto-de-ciencias-sociales-y-humanidades",
      "ruta": "https://maps.app.goo.gl/YqhEJQmXTMePt2ZJ8",
      "recorrido": "https://recorridosvirtuales.buap.mx/icsyh/",
      "botones":[
        {
          "name": "ICS2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICS/ICS2.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [99.492188, 5.968496]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ICS3",
      "popupContent": '<b>ICS3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/instituto-de-ciencias-sociales-y-humanidades",
      "ruta": "https://maps.app.goo.gl/NbZkVMi9kAjptFcAA",
      "recorrido": "https://recorridosvirtuales.buap.mx/icsyh/",
      "botones":[
        {
          "name": "ICS3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICS/ICS3.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-15.46875, -34.735493]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ICS4",
      "popupContent": '<b>ICS4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/instituto-de-ciencias-sociales-y-humanidades",
      "ruta": "https://maps.app.goo.gl/mFJJEaFh1Woy8LXS8",
      "recorrido": "https://recorridosvirtuales.buap.mx/icsyh/",
      "botones":[
        {
          "name": "ICS4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICS/ICS4.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [0.615234,-30.099228]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ICS5",
      "popupContent": '<b>ICS5</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/instituto-de-ciencias-sociales-y-humanidades",
      "ruta": "https://maps.app.goo.gl/J6UFECpCVet5L4fJ9",
      "recorrido": "https://recorridosvirtuales.buap.mx/icsyh/",
      "botones":[
        {
          "name": "ICS5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICS/ICS5.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [31.860352, 3.78098]
    }
  },
];
var artGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ART1",
      "popupContent": '<b>ART1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-artes",
      "ruta": "https://maps.app.goo.gl/tEyyPFbqFaTrVMua8",
      "recorrido": "https://recorridosvirtuales.buap.mx/artes-centro/",
      "botones":[
        {
          "name": "ART1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ART/ART1.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [54.755859, -28.606466]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ART2",
      "popupContent": '<b>ART2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-artes",
      "ruta": "https://maps.app.goo.gl/JymGpDDdA3Ni4aJL7",
      "recorrido": "https://recorridosvirtuales.buap.mx/artes-centro/",
      "botones":[
        {
          "name": "ART2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ART/ART2.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [75.498047, -35.096516]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ART3",
      "popupContent": '<b>ART3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-artes",
      "ruta": "https://maps.app.goo.gl/5YL5i4jBMdz6Nods7",
      "recorrido": "https://recorridosvirtuales.buap.mx/artes-centro/",
      "botones":[
        {
          "name": "ART3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ART/ART3.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [22.324219, -33.979633]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ART4",
      "popupContent": '<b>ART4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-artes",
      "ruta": "https://maps.app.goo.gl/TTFzVeRdCW418eE57",
      "recorrido": "https://recorridosvirtuales.buap.mx/artes-centro/",
      "botones":[
        {
          "name": "ART4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ART/ART4.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [22.016602, -28.0104]
    }
  },
];

var flGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL1",
      "popupContent": '<b>FIL1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/L1PhSudYjRRYTRyC8",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL1.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-27.026367, -34.792084]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL2",
      "popupContent": '<b>FIL2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/Wk9RGB3w3TWeDx2P9",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL2.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-40.03418, -1.317041]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL3",
      "popupContent": '<b>FIL3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/p9vxLVhVWfRgVDkr5",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL3.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-39.990234, 4.048457]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL4",
      "popupContent": '<b>FIL4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/S3Q2Ajpfu2ueG9D17",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL4.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-52.272949, -4.738902]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL5",
      "popupContent": '<b>FIL5</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/8DwPQMovPVW34Yn98",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL5.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-51.328125, 7.6173]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL6",
      "popupContent": '<b>FIL6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/eC6y4MJigx577Ear8",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL6",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL6.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-28.015137, -4.452038]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FIL7",
      "popupContent": '<b>FIL7</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-letras",
      "ruta": "https://maps.app.goo.gl/hvUnm5EwiZ5kapFaA",
      "recorrido": "https://recorridosvirtuales.buap.mx/filosofia/",
      "botones":[
        {
          "name": "FIL7",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL7.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-52.668457, 1.757207]
    }
  },
];
var psiGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "PSI1",
      "popupContent": '<b>PSI1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-psicolog%C3%ADa",
      "ruta": "https://maps.app.goo.gl/HfkRpHezxRrPu4xq9",
      "recorrido": "https://recorridosvirtuales.buap.mx/psicologia/",
      "botones":[
        {
          "name": "PSI1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/PSI/PSI1.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-53.151855, -76.578151]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "PSI2",
      "popupContent": '<b>PSI2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-psicolog%C3%ADa",
      "ruta": "https://maps.app.goo.gl/zrFqEQ7uvptZQavP6",
      "recorrido": "https://recorridosvirtuales.buap.mx/psicologia/",
      "botones":[
        {
          "name": "PSI2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/PSI/PSI2.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-51.833496, -77.655406]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "PSI3",
      "popupContent": '<b>PSI3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-psicolog%C3%ADa",
      "ruta": "https://maps.app.goo.gl/dnVQjN67SpURj4HT9",
      "recorrido": "https://recorridosvirtuales.buap.mx/psicologia/",
      "botones":[
        {
          "name": "PSI3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/PSI/PSI3.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-62.753906, -32.045662]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "PSI4",
      "popupContent": '<b>PSI4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-psicolog%C3%ADa",
      "ruta": "https://maps.app.goo.gl/c3Yy8nDAcEAUskcg7",
      "recorrido": "https://recorridosvirtuales.buap.mx/psicologia/",
      "botones":[
        {
          "name": "PSI4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/PSI/PSI4.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-64.511719, -27.125078]
    }
  },
];

var zapGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ZAP1",
      "popupContent": '<b>ZAP1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/preparatoria-emiliano-zapata",
      "ruta": "https://maps.app.goo.gl/TXnwFAwbM7CLTKDD8",
      "recorrido": "https://recorridosvirtuales.buap.mx/emiliano-zapata",
      "botones":[
        {
          "name": "ZAP1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ZAP/ZAP1.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-15.996094, -16.953355]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ZAP2",
      "popupContent": '<b>ZAP2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/preparatoria-emiliano-zapata",
      "ruta": "https://maps.app.goo.gl/FfbBG2oQj4U3DRuf6",
      "recorrido": "https://recorridosvirtuales.buap.mx/emiliano-zapata",
      "botones":[
        {
          "name": "ZAP2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ZAP/ZAP2.jpg",
        },
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-27.949219, -29.570444]
    }
  },
];

var dependenciasGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Edificio Carolino",
      "popupContent": '<b>Edificio Carolino"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/edificio-carolino",
      "ruta": "https://maps.app.goo.gl/fNuXWgJUjCNF4eUj8",
      "recorrido": "https://recorridosvirtuales.buap.mx/edificio-carolino/",
      "botones":[
        {
          "name": "CAR",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CAR/CAR.jpg",
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-49.130859, -30.445748]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Infraestructura Educativa - DIE",
      "popupContent": '<b>Dirección de Infraestructura Educativa - DIE"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-infraestructura-educativa",
      "ruta": "https://maps.app.goo.gl/Ai3mZkkN2htrxDTr8",
      "recorrido": "https://recorridosvirtuales.buap.mx/die/",
      "botones":[
        {
          "name": "DIE",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DIE/DIE.jpg",
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [73.674316, -1.953314]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Contraloría General - CG",
      "popupContent": '<b>Contraloría General - CG"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/contralor%C3%ADa-general",
      "ruta": "https://maps.app.goo.gl/HaD4SzzEQVZKP5Ts8",
      "recorrido": "https://recorridosvirtuales.buap.mx/contraloria-general/",
      "botones":[
        {
          "name": "CG",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CG/CG.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-144.052955, 77.350939]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Archivo Histórito Universitario - AH",
      "popupContent": '<b>Archivo Histórito Universitario - AH"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/archivo-hist%C3%B3rico",
      "ruta": "https://maps.app.goo.gl/vV7W1T514BMfgUSE7",
      "recorrido": "https://recorridosvirtuales.buap.mx/archivo-historico/",
      "botones":[
        {
          "name": "AH",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/AH/AH.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-39.375, 51.930898]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Casa de las Bóvedas - CB",
      "popupContent": '<b>Casa de las Bóvedas - CB"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-de-las-b%C3%B3vedas",
      "ruta": "https://maps.app.goo.gl/7DuwwsvMS4jDYDVc7",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-de-la-boveda/",
      "botones":[
        {
          "name": "CB",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CB/CB.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-25.136719, -25.935158]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Casa de Don Melchor de Covarrubias - MDC",
      "popupContent": '<b>Casa de Don Melchor de Covarrubias - MDC"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-de-don-melchor-de-covarrubias",
      "ruta": "https://maps.app.goo.gl/wgmEHaAtD9ZfdANz8",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-melchor-de-covarrubias/",
      "botones":[
        {
          "name": "MDC",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/MDC/MDC.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-63.105469, -18.812093]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Casa del Estudiante de Hombres Serrano - CHS",
      "popupContent": '<b>Casa del Estudiante de Hombres Serrano - CHS"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-estudiantes-serrano-hombres",
      "ruta": "https://maps.app.goo.gl/nSNY7UHEaxDY5Z1C6",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-del-estudiante/",
      "botones":[
        {
          "name": "CHS",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CHS/CHS.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-86.660156, 42.413018]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Casa del Estudiante de Mujeres Serdán  - CMS",
      "popupContent": '<b>Casa del Estudiante de Mujeres Serdán  - CMS"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-estudiantes-serrano-mujeres",
      "ruta": "https://maps.app.goo.gl/mKoptaiCMAdKeE567",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-del-estudiante/",
      "botones":[
        {
          "name": "CMS",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CMS/CMS.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-74.091797, 45.448624]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Casa de la Reina - REI",
      "popupContent": '<b>Casa de la Reina - REI"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-de-la-reina",
      "ruta": "https://maps.app.goo.gl/VMbCXHHdwZDruPFr9",
      "recorrido": "https://recorridosvirtuales.buap.mx/archivo-historico/",
      "botones":[
        {
          "name": "REI",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/REI/REI.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-38.847656, 65.425108]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Contabilidad General - DCG",
      "popupContent": '<b>Dirección de Contabilidad General - DCG"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-contabilidad-general",
      "ruta": "https://maps.app.goo.gl/yu8RCih4dQ5fzwEQ8",
      "recorrido": "https://recorridosvirtuales.buap.mx/contabilidad-general/",
      "botones":[
        {
          "name": "DCG",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCG/DCG.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-124.189453, 77.654832]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Contabilidad General - DCG1",
      "popupContent": '<b>Dirección de Contabilidad General - DCG1"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-contabilidad-general",
      "ruta": "https://maps.app.goo.gl/yu8RCih4dQ5fzwEQ8",
      "recorrido": "https://recorridosvirtuales.buap.mx/contabilidad-general/",
      "botones":[
        {
          "name": "DCG1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCG/DCG1.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-131.484375, 77.617214]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Edificio Arronte Biblioteca José Revueltas - ARRON",
      "popupContent": '<b>Edificio Arronte Biblioteca José Revueltas - ARRON"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/edificio-arronte-biblioteca-jos%C3%A9-revueltas",
      "ruta": "https://maps.app.goo.gl/YuHxHXTWrG2sgyAv9",
      "recorrido": "https://recorridosvirtuales.buap.mx/arronte/",
      "botones":[
        {
          "name": "ARRON",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ARRON/ARRON.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-40.78125, 8.239768]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Edificio la Palma - PAL",
      "popupContent": '<b>Edificio la Palma - PAL"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/edificio-la-palma",
      "ruta": "https://maps.app.goo.gl/e4dKdZSxjsoU3jfQ7",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-de-la-palma/",
      "botones":[
        {
          "name": "PAL",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PAL/PAL.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-66.445313, -6.650001]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Edificio María Fernanda - MF",
      "popupContent": '<b>Edificio María Fernanda - MF"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/edificio-mar%C3%ADa-fernanda",
      "ruta": "https://maps.app.goo.gl/D8V2gvG4yaHMnUkNA",
      "recorrido": "https://recorridosvirtuales.buap.mx/edificio-maria-fernanda/",
      "botones":[
        {
          "name": "MF",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/MF/MF.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-69.082031, 6.401852]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Espacio 14 - E14",
      "popupContent": '<b>Espacio 14 - E14"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/espacio-14",
      "ruta": "https://maps.app.goo.gl/VQZpmZN1kQWeYRSb7",
      "recorrido": "https://recorridosvirtuales.buap.mx/espacio14/",
      "botones":[
        {
          "name": "E14",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/E14/E14.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [143.349609, 7.972618]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Fundación BUAP - FB",
      "popupContent": '<b>Fundación BUAP - FB"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/fundaci%C3%B3n-buap",
      "ruta": "https://maps.app.goo.gl/WwnFw3WmwgusFuNZ7",
      "recorrido": "https://recorridosvirtuales.buap.mx/fundacion-buap/",
      "botones":[
        {
          "name": "FB",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/FB/FB.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [147.216797, -55.127895]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Museo de la Memoria Histórica Universitaria - MMU",
      "popupContent": '<b>Museo de la Memoria Histórica Universitaria - MMU"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/museo-de-la-memoria-hist%C3%B3rica-universitaria",
      "ruta": "https://maps.app.goo.gl/QjpwkhYR8sXXwKCG8",
      "recorrido": "https://recorridosvirtuales.buap.mx/museo-memoria-historica/",
      "botones":[
        {
          "name": "CM",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/MMU/MMU.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-44.714355, -70.459182]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Museo Casa de los Muñecos - CM",
      "popupContent": '<b>Museo Casa de los Muñecos - CM"</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/casa-de-los-mu%C3%B1ecos",
      "ruta": "https://maps.app.goo.gl/DkoNmsEiWFBDd6p67",
      "recorrido": "https://recorridosvirtuales.buap.mx/casa-de-los-munecos/",
      "botones":[
        {
          "name": "CM",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CM/CM.jpg",  
        }
      ],
      "botonesBici":[],
      "botonesBus":[],
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-22.148438, 13.072633]
    }
  },
];

// marker.bindPopup('LatLng Marker').openPopup();
// marker.on('dragend', function (e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });