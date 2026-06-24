//MARCADORES
// var marker = L.marker([20.159098, -61.242676], {
//   draggable: true,
// }).addTo(map);



// Se debe repetir esta parte para cada área.
//CIENCIAS NATURALES Y DE SALUD
var enfGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ENF1",
      "popupContent": '<b>ENF1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-enfermer%C3%ADa",
      "ruta": "https://maps.app.goo.gl/DcCepxUC5fgK2YsT8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "ENF1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ENF/ENF_1.jpg",
        }
      ],
      "botonesBici":[ 
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [67.148438, 31.946243]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ENF2",
      "popupContent": '<b>ENF2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-enfermer%C3%ADa",
      "ruta": "https://maps.app.goo.gl/DcCepxUC5fgK2YsT8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "ENF2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ENF/ENF_2.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [85.385742, 53.1723]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ENF3",
      "popupContent": '<b>ENF3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-enfermer%C3%ADa",
      "ruta": "https://maps.app.goo.gl/DcCepxUC5fgK2YsT8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "ENF3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ENF/ENF_3.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [86.132813, 43.958001]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "ENF4",
      "popupContent": '<b>ENF4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-enfermer%C3%ADa",
      "ruta": "https://maps.app.goo.gl/DcCepxUC5fgK2YsT8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "ENF4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ENF/ENF_4.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [115.136719, 18.478268]
    }
  },
];

//ESTOMATOLOGIA
var estGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST1",
      "popupContent": '<b>EST1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/XzLx4GHxpMG5Uwsf9",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_1.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-106.523437, 55.876316]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST2",
      "popupContent": '<b>EST2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/TuaFmMfj4vcpPBXH8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_2.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-120.234375, 73.075463]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST3",
      "popupContent": '<b>EST3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/dpqS4VpzHHMoYkJf7",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_3.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-100.546875, 71.357277]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST4",
      "popupContent": '<b>EST4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/imdatE1ERLgVeLnF9",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_4.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-79.453125, 72.868236]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST5",
      "popupContent": '<b>EST5</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/V2M7fEzuQSToZnHKA",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_5.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-39.375, 73.175597]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST6",
      "popupContent": '<b>EST6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/BevCMmfZzQuS46YC6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST6",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_6.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-12.480469, 72.181457]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST7",
      "popupContent": '<b>EST7</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/zTWdE8xzjt41Rg8y8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST7",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_7.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [25.664063, 70.902978]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST8",
      "popupContent": '<b>EST8</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/ZEjtUQrm9P8sJWMVA",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST8",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_8.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-4.570313, 58.356273]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST9",
      "popupContent": '<b>EST9</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/jSnoGM3Ci5SyTdEh7",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST9",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_9.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-55.546875, 54.774367]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST10",
      "popupContent": '<b>EST10</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/dDQWrAPmwCgBYAtQ6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST10",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_10.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-71.015625, 41.383387]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EST11",
      "popupContent": '<b>EST11</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-estomatolog%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/oq6yDs8mbYMoXLxGA",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "EST11",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EST/EST_11.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-84.726563, 33.433487]
    }
  },
];

var medGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED1",
      "popupContent": '<b>MED1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/4t8QMAWyU3uhyHdr5",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_1.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-36.210938, -63.366684]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED2",
      "popupContent": '<b>MED2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/3VhnxpwBB6HaMP9Z8",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_2.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-24.785156, -71.85664]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED3",
      "popupContent": '<b>MED3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/DSevfSz6pXicJpmj6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_3.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-69.609375, -72.375052]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED4",
      "popupContent": '<b>MED4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/AHJBbMeDeu4BXL8RA",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_4.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-85.429688, 13.581371]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED5",
      "popupContent": '<b>MED5</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/PFKeKDHBNESs9LJx5",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_5.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-46.757813, -5.602007]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED6",
      "popupContent": '<b>MED6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/EkAnkUMamkjCt4hy7",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED6",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_6.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-46.230469, 27.838993]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED7",
      "popupContent": '<b>MED7</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/GCPEFKtdZ7K6rJc49",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED7",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_7.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-7.734375, 33.278]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED8",
      "popupContent": '<b>MED8</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/CAFeX7gBAei9hcqA6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED8",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_8.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-7.382813, 13.2438]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED9",
      "popupContent": '<b>MED9</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/e71NK4q7KfNo4NyR6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED9",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_9.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [77.695313, -77.600677]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "MED10",
      "popupContent": '<b>MED10</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina",
      "ruta": "https://maps.app.goo.gl/DXouGXjien4aoUnAA",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "MED10",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/MED/MED_10.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [17.050781, 21.615791]
    }
  },
];


var dependenciasGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Auditorio Julio Glockner - AJG",
      "popupContent": '<b>Auditorio Julio Glockner - AJG</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/AJG/AJG.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/AJG/AJG.jpg",
      "info": "https://plantafisica.buap.mx/content/auditorio-julio-glockner-ajg",
      "ruta": "https://maps.app.goo.gl/jwrMxZET3Z6y5grV7",
      "botones":[
        {
          "name": "AJG",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/AJG/AJG.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-9.755859, -22.796244]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección General de Control Patrimonial - DGCP",
      "popupContent": '<b>Dirección General de Control Patrimonial - DGCP</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DGCP/DGCP.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DGCP/DGCP.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/X2DgvAosAquFuNrC9",
      "botones":[
        {
          "name": "DGCP",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DGCP/DGCP.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-61.237793, -18.271903]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Hospital Universitario de Puebla - HUP",
      "popupContent": '<b>Hospital Universitario de Puebla - HUP</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUP/HUP.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HUP/HUP.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/1BKMRERmkepuNi8v6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "HUP",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUP/HUP.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [95.800951, -12.21022]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Hospital Universitario de Puebla - HUP1",
      "popupContent": '<b>Hospital Universitario de Puebla - HUP1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUP/HUP1.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HUP/HUP1.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/t3X2rRhPmUKxbAJf6",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "HUP1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUP/HUP1.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [115.3125, -44.59181]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Hospital Universitario de Puebla - HUP2",
      "popupContent": '<b>Hospital Universitario de Puebla - HUP2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUP/HUP2.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HUP/HUP2.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/XFEVZQzwSzWRsyt3A",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "HUP2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUP/HUP2.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [29.53125, -14.962818]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Hospital Universitario de Puebla - HUP3",
      "popupContent": '<b>Hospital Universitario de Puebla - HUP3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUP/HUP3.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HUP/HUP3.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/iLTWaiaAFytvr3CV9",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "HUP3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUP/HUP3.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-55.195313, -29.849311]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Hospital Universitario de Puebla - HUP4",
      "popupContent": '<b>Hospital Universitario de Puebla - HUP4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUP/HUP4.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HUP/HUP4.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/xH9gZdLxdQzgkA6m9",
      "recorrido": "https://recorridosvirtuales.buap.mx/salud",
      "botones":[
        {
          "name": "HUP4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUP/HUP4.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-85.693359, -9.274599]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "FAF2",
      "popupContent": '<b>FAF2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/FAF/FAF2.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/FAF/FAF2.jpg",
      "info": "https://plantafisica.buap.mx/content/hospital-universitario-de-puebla",
      "ruta": "https://maps.app.goo.gl/Y9qtsWDWDuZErUg3A",
      "botones":[
        {
          "name": "FAF2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/FAF/FAF2.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [23.90625, -47.737744]
    }
  },
];
var emasGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA1",
      "popupContent": '<b>EMA1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMA1.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA1.jpg",
      "info": "https://plantafisica.buap.mx/content/ema1-multiaulas-%C3%A1rea-de-la-salud",
      "ruta": "https://maps.app.goo.gl/jffZmb9ZDQmxLpZb7",
      "recorrido": "",
      "botones":[
        {
          "name": "EMA1",
          "left": "27%",
          "top": "72%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EMA/EMA1.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-118.827969, -44.339866]
    }
  },
];

var accesosGeoJson = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Peatonal Estomatología - Av. 31 Poniente",
      "popupContent": '<b>Acceso Peatonal Estomatología - Av. 31 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/HQkzTC8du7ntgEsa8",
      "botones":[
        {
          "name": "P1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P1.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-130.429688, 67.257251]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso 2 Peatonal Estomatología - Av. 31 Poniente",
      "popupContent": '<b>Acceso 2 Peatonal Estomatología - Av. 31 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/kggbM5UVecrvQNAW6",
      "botones":[
        {
          "name": "P2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P2.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-130.605469, 51.288404]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Salida Vehicular Estomatología - Av. 31 Poniente",
      "popupContent": '<b>Salida Vehicular Estomatología - Av. 31 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/JeKvnsHsPTbE4FjK7",
      "botones":[
        {
          "name": "P3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P3.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-129.375, 30.903438]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Peatonal Medicina - 13 Sur",
      "popupContent": '<b>Acceso Peatonal Medicina - 13 Sur</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/KQaennFK4hpq3GYG6",
      "botones":[
        {
          "name": "P4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P4.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-60.996094, -62.431685]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Peatonal - 13 Sur",
      "popupContent": '<b>Acceso Peatonal - 13 Sur</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/vwVf1B2EUetz9D1y6",
      "botones":[
        {
          "name": "P5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P5.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-32.34375, -56.159893]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Vehicular FAF2 - 13 Sur",
      "popupContent": '<b>Acceso Vehicular FAF2 - 13 Sur</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/hcchunTepdpanXUB7",
      "botones":[
        {
          "name": "P6",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P6.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-11.25, -56.211742]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Hospital Universitario de Puebla - 13 Sur",
      "popupContent": '<b>Acceso Hospital Universitario de Puebla - 13 Sur</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/M4sGDvqYGoT6NHfU8",
      "botones":[
        {
          "name": "P7",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P7.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [60.205078, -57.841076]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso FAF2 - 21 Poniente",
      "popupContent": '<b>Acceso FAF2 - 21 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/bG8s8bttj4BjLP2j8",
      "botones":[
        {
          "name": "P8",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P8.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [37.463379, -41.706036]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Peatonal Enfermería - Av. 25 Poniente",
      "popupContent": '<b>Acceso Peatonal Enfermería - Av. 25 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/rYAVVEoDKmeL7Q9M7",
      "botones":[
        {
          "name": "P9",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P9.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [129.023438, 30.30125]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Acceso Vehicular EROB - Av.27 Poniente",
      "popupContent": '<b>Acceso Vehicular EROB - Av.27 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/9K3CsemyeDSNo5Uv5",
      "botones":[
        {
          "name": "P10",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P10.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [36.386719, 53.329803]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Salida Vehicular Estomatología - Av.27 Poniente",
      "popupContent": '<b>Salida Vehicular Estomatología - Av.27 Poniente</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta":"https://maps.app.goo.gl/froeDAU7HDXutfLu8",
      "botones":[
        {
          "name": "P11",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PUERTAS/P11.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [37.529297, 68.560849]
    }
  },
];

// marker.bindPopup('LatLng Marker').openPopup();
// marker.on('dragend', function (e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });