//MARCADORES
// var marker = L.marker([20.159098, -61.242676], {
//   draggable: true,
// }).addTo(map);

//CIENCIAS SOCIALES Y HUMANIDADES
var cshGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Artes Plásticas y Audiovisuales - ARPA1",
      "popupContent": '<b>Artes Plásticas y Audiovisuales</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ARPA1.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ARPA/ARPA1.jpg",
      "info": "https://plantafisica.buap.mx/content/escuela-de-artes-pl%C3%A1sticas-y-audiovisuales",
      "ruta": "https://maps.app.goo.gl/gRZEamfxhEtayj1z9",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "ARPA1",
          "left": "65.5%",
          "top": "53%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ARPA/ARPA1.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "ARPA1BICI1",
          "left": "16%",
          "top": "21%",
          "url": "",
          "size": "2",
        },
        {
          "name": "ARPA1BICI2",
          "left": "55%",
          "top": "49%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-44.824219, 20.612186]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Artes Plásticas y Audiovisuales - ARPA2",
      "popupContent": '<b>Artes Plásticas y Audiovisuales</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ARPA2.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ARPA/ARPA2.jpg",
      "info": "https://plantafisica.buap.mx/content/escuela-de-artes-pl%C3%A1sticas-y-audiovisuales",
      "ruta": "https://maps.app.goo.gl/UZxiZ3NufYCV8zGMA",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "ARPA2",
          "left": "60%",
          "top": "42%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ARPA/ARPA2.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "CPSBICI1",
          "left": "53%",
          "top": "39%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [7.053223, -6.118427]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Artes Plásticas y Audiovisuales - ARPA3",
      "popupContent": '<b>Artes Plásticas y Audiovisuales</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ARPA3.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ARPA/ARPA3.jpg",
      "info": "https://plantafisica.buap.mx/content/escuela-de-artes-pl%C3%A1sticas-y-audiovisuales",
      "ruta": "https://maps.app.goo.gl/i3gtcanGc6yCgcAd7",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "ARPA3",
          "left": "29%",
          "top": "58%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ARPA/ARPA3.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "ARPA3BICI1",
          "left": "26.5%",
          "top": "40%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [65.544434, -37.561969]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Artes",
      "popupContent": '<b>Facultad de Artes</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ART.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ART/ART.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-artes-0",
      "ruta": "https://maps.app.goo.gl/K2rWCLTMv9tNjjdd6",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "ART1",
          "left": "35%",
          "top": "37%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ART/ART1.jpg",
        },
        {
          "name": "ART2",
          "left": "31%",
          "top": "46%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ART/ART2.jpg",
        },
        {
          "name": "ART3",
          "left": "49%",
          "top": "45%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ART/ART3.jpg",
        },
        {
          "name": "ART4",
          "left": "31%",
          "top": "54%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/ART/ART4.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "CPSBICI1",
          "left": "26.5%",
          "top": "40%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [70.224609, -21.452104]
    }
  },
];

var eaGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Comunicación - COM",
      "popupContent": '<b>Comunicación - COM</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/COM.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/COM/COM.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-comunicaci%C3%B3n",
      "ruta": "https://maps.app.goo.gl/sCncQL8jYG23jmRg8",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "COM1",
          "left": "47%",
          "top": "41%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/COM/COM_1.jpg",
        },
        {
          "name": "COM2",
          "left": "36%",
          "top": "29%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/COM/COM_2.jpg",
        },
        {
          "name": "COM3",
          "left": "48%",
          "top": "27.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/COM/COM_3.jpg",
        },
        {
          "name": "COM4",
          "left": "60%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/COM/COM_4.jpg",
        },
        {
          "name": "COM5",
          "left": "42%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/COM/COM_5.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "COMBICI1",
          "left": "25%",
          "top": "32%",
          "url": "",
          "size": "2",
        },
        {
          "name": "COMBICI2 ",
          "left": "67.5%",
          "top": "62%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-63.720703, 39.437176]
    }
  },
];

var dependenciasGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Complejo Cultural Universitario - CCU1-7",
      "popupContent": '<b>Complejo Cultural Universitario</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CCU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CCU/CCU.jpg",
      "info": "https://plantafisica.buap.mx/content/complejo-cultural-universitario",
      "ruta": "https://maps.app.goo.gl/J9rFYGAYNtC452LT9",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "CCU1",
          "left": "27%",
          "top": "30.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU1.jpg",        
        },
        {
          "name": "CCU2",
          "left": "20%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU2.jpg",        
        },
        {
          "name": "CCU3",
          "left": "37.5%",
          "top": "36%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU3.jpg",        
        },
        {
          "name": "CCU4",
          "left": "32%",
          "top": "45.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU4.jpg",        
        },
        {
          "name": "CCU5",
          "left": "43.5%",
          "top": "52%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU5.jpg",        
        },
        {
          "name": "CCU6",
          "left": "56%",
          "top": "56.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU6.jpg",        
        },
        {
          "name": "CCU7",
          "left": "63%",
          "top": "68%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CCU/CCU7.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CCUBICI1",
          "left": "29%",
          "top": "22%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "1",
        },
        {
          "name": "CCUBICI2",
          "left": "50%",
          "top": "36.5%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "1",
        },
        {
          "name": "CCUBICI3",
          "left": "83%",
          "top": "55%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-66.005859, 12.644662]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias de Gobierno y Desarrollo Estratégico - ICG",
      "popupContent": '<b>Instituto de Ciencias de Gobierno y Desarrollo Estratégico</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/ICG.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/ICG/ICG.jpg",
      "info": "https://plantafisica.buap.mx/content/icgde-instituto-de-ciencias-de-gobierno-y-desarrollo-estrat%C3%A9gico",
      "ruta": "https://maps.app.goo.gl/ChnrRnRUQ3Lfsv4y8",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "ICG1",
          "left": "60%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ICG/ICG.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "RECBICI1",
          "left": "43.5%",
          "top": "56%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-42.363281, 27.289961]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Parque del Ajedrez",
      "popupContent": '<b>Parque del Ajedrez</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/PA.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/PA/PA.jpg",
      "info": "https://plantafisica.buap.mx/content/parque-del-ajedrez",
      "ruta": "https://maps.app.goo.gl/4p8LinpDNePnWhEF6",
      "recorrido": "https://recorridosvirtuales.buap.mx/ccu/",
      "botones":[
        {
          "name": "PA1",
          "left": "27%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA1.jpg",        
        },
        {
          "name": "PA2",
          "left": "33%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA2.jpg",        
        },
        {
          "name": "PA3",
          "left": "47%",
          "top": "64.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA3.jpg",        
        },
        {
          "name": "PA4",
          "left": "45%",
          "top": "54.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA4.jpg",        
        },
        {
          "name": "PA5",
          "left": "46%",
          "top": "47%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA5.jpg",        
        },
        {
          "name": "PA6",
          "left": "51%",
          "top": "55.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA6.jpg",        
        },
        {
          "name": "PA7",
          "left": "57%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA7.jpg",        
        },
        {
          "name": "PA8",
          "left": "22%",
          "top": "74.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PA8.jpg",        
        },
        {
          "name": "PAy",
          "left": "43%",
          "top": "61.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PAy.jpg",
        },
        {
          "name": "PAz",
          "left": "24%",
          "top": "42%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PAz.jpg",
        },
        {
          "name": "PAz1",
          "left": "67%",
          "top": "19.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/PA/PAz1.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "CCUBICI1",
          "left": "59%",
          "top": "26.5%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-6.855469, -18.062267]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Rectoria",
      "popupContent": '<b>Rectoria</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/REC.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/REC/REC.jpg",
      "info": "https://plantafisica.buap.mx/content/rector%C3%ADa-0",
      "ruta": "https://maps.app.goo.gl/zC6Tq3aqTZgwR9H99",
      "botones":[
        {
          "name": "REC",
          "left": "49%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/REC/REC.jpg",        
        },
        {
          "name": "REC1",
          "left": "60.5%",
          "top": "52%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/REC/REC1.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "RECBICI1",
          "left": "13%",
          "top": "29.5%",
          "url": "",
          "size": "2",
        },
        {
          "name": "RECBICI2",
          "left": "63.5%",
          "top": "64.5%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-57.832031, 29.224201]
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
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA/EMA1.jpg",
      "info": "https://plantafisica.buap.mx/content/ema1-multiaulas",
      "ruta": "https://maps.app.goo.gl/hpBXPaN2bVRHoJFM7",
      "botones":[
        {
          "name": "EMA1",
          "left": "41%",
          "top": "62.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICOS/EMAS/EMA1.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "EMABICI1",
          "left": "26.5%",
          "top": "40%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [73.059082, -35.639345]
    }
  },
];

var accesosGeoJson = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 1 - Portico",
      "popupContent": '<b>Puerta 1 - Portico</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/JYbVoWse2sAqhM5u6",
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
      "coordinates": [-107.578125, 51.385971]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 2",
      "popupContent": '<b>Puerta 2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/gzoF3c8ZnhWXobxY7",
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
      "coordinates": [-72.333984, 49.780929]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 3",
      "popupContent": '<b>Puerta 3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/PkNdom1WABVjkRiUA",
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
      "coordinates": [-51.459961, 43.722163]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 4",
      "popupContent": '<b>Puerta 4</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/SfhFLTZAZAxTnYQ47",
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
      "coordinates": [-36.628418, 38.134038]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 5",
      "popupContent": '<b>Puerta 5</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/tgz6RaTTxVBv1RK49",
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
      "coordinates": [-4.768066, 13.58215]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 6",
      "popupContent": '<b>Puerta 6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/JYThTCG75SLaoPz76",
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
      "coordinates": [12.392578, 4.65604]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 7",
      "popupContent": '<b>Puerta 7</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/BrACMzQGdMHzqub8A",
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
      "coordinates": [87.561035, -21.207667]
    }
  },
];

// marker.bindPopup('LatLng Marker').openPopup();
// marker.on('dragend', function (e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });