//MARCADORES
// var marker = L.marker([28.700759, -38.847656], {
//   draggable: true,
// }).addTo(map);
// marker.bindPopup('LatLng Marker').openPopup();
// marker.on('dragend', function (e) {
//   marker.getPopup().setContent(marker.getLatLng().toString()).openOn(map);
// });

// Se debe repetir esta parte para cada área.
//CIENCIAS NATURALES Y DE SALUD
var cnsGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Centro de Detección Biomolecular",
      "popupContent": '<b>Centro de Detección Biomolecular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/CDB.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/CDB.jpg",
      "info": "https://plantafisica.buap.mx/content/centro-de-detecci%c3%b3n-biomolecular",
      "ruta": "https://maps.app.goo.gl/k1EYDxHNYYtkzE8H6",
      "recorrido": "https://recorridosvirtuales.buap.mx/caeto/",
      "botones":[
        {
          "name": "CDB",
          "left": "46%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/CDB/CDB.jpg",
          "rutaEdif": "https://maps.app.goo.gl/ipAmsHwQhFbHbbfJ9",
        }
      ],
      "botonesBici":[
        {
          "name": "CDBBICI1",
          "left": "30%",
          "top": "3.3%",
          "url": "https://plantafisica.buap.mx/content/centro-de-detecci%C3%B3n-biomolecular-lobobici",
          "size": "2",
        },
        {
          "name": "CDBBICI2",
          "left": "85%",
          "top": "19%",
          "url": "https://plantafisica.buap.mx/content/centro-de-detecci%C3%B3n-biomolecular-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "CDBBUS1",
          left: "25%",
          top: "74.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-detecci%C3%B3n-biomolecular-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-1.450195, -36.032075]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Biología - BIO",
      "popupContent": '<b>Facultad de Biología</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/BIO.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/BIO.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-biol%c3%b3gicas-bio",
      "ruta": "https://maps.app.goo.gl/AGrZGUTLC2emJyJY8",
      "rutaEdif": "https://maps.app.goo.gl/AGrZGUTLC2emJyJY8",
      "recorrido":"https://recorridosvirtuales.buap.mx/biologia/",
      "botones":[
        {
          "name": "BIO1",
          "left": "40%",
          "top": "55%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/BIO/BIO.jpg",          
        }
      ], 
      "botonesBici":[
        {
          "name": "BIOBICI1",
          "left": "64%",
          "top": "21%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-biol%C3%B3gicas-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "BIOBUS1",
          "left": "3%",
          "top": "20.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-biol%C3%B3gicas-lobobus",
          "size": "2",
        },
        {
          "name": "BIOBUS2",
          "left": "51%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-biol%C3%B3gicas-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-7.338867, 30.827509]
    }
  
},
  // Se debe repetir la misma estructura para cada facultad que esté dentro de 
  // esta área
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias Químicas - FCQ1-8",//FCQ 1-8
      "popupContent": '<b>Facultad de Ciencias Químicas</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCQ.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCQ.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%c3%admicas-fcq",
      "ruta": "https://maps.app.goo.gl/5DcFM9r2GbecJ2kV6",
      "recorrido":"https://recorridosvirtuales.buap.mx/computacion/",
      "botones":[
        {
          "name": "FCQ1",
          "left": "58.5%",
          "top": "62%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_1.jpg",          
        },
        {
          "name": "FCQ2",
          "left": "47.5%",
          "top": "58%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_2.jpg",
        },
        {
          "name": "FCQ3",
          "left": "55%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_3.jpg",
        },
        {
          "name": "FCQ4",
          "left": "73%",
          "top": "50%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_4.jpg",
        },
        {
          "name": "FCQ5",
          "left": "66%",
          "top": "42%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_5.jpg",
        },
        {
          "name": "FCQ6",
          "left": "68%",
          "top": "32%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_6.jpg",
        },
        {
          "name": "FCQ7",
          "left": "69%",
          "top": "23.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_7.jpg",
        },
        {
          "name": "FCQ8",
          "left": "75%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_8.jpg",
        }
      ],      
      "botonesBici":[
        {
          "name": "FCQ1BICI1",
          "left": "17.5%",
          "top": "49.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "2",
        },
        {
          "name": "FCQ1BICI2",
          "left": "25%",
          "top": "49.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "2",
        },
        {
          "name": "FCQ1BICI3",
          "left": "74%",
          "top": "20.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "2",
        },
        {
          "name": "FCQ1BICI4",
          "left": "81.5%",
          "top": "79.3%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCQ1BUS1",
          "left": "82.5%",
          "top": "37.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-68.818359, 50.007163]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias Químicas - FCQ9-11",//FCQ9-10
      "popupContent": '<b>Facultad de Ciencias Químicas</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCQ1.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCQ1.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%c3%admicas-fcq",
      "ruta": "https://maps.app.goo.gl/RoacTPCjxNa2RpQS7",
      "recorrido":"https://recorridosvirtuales.buap.mx/biologia/",
      "botones":[
        {
          "name": "FCQ9",
          "left": "45%",
          "top": "19%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_9.jpg",
        },
        {
          "name": "FCQ10",
          "left": "62%",
          "top": "21%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_10.jpg",
        },
        {
          "name": "FCQ11",
          "left": "65.5%",
          "top": "63%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_11.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FCQ9BICI1",
          "left": "76.5%",
          "top": "15.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "3",
        }
      ],
      "botonesBus":[
        {
          "name": "FCQ9BUS1",
          "left": "3%",
          "top": "15%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobus",
          "size": "3",
        },
        {
          "name": "FCQ9BUS2",
          "left": "56%",
          "top": "82%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobus",
          "size": "3",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-1.757813, 38.957503]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias Químicas - FCQ12",//FCQ12
      "popupContent": '<b>Facultad de Ciencias Químicas</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCQ12.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCQ2.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%c3%admicas-fcq",
      "ruta": "https://maps.app.goo.gl/fhSKQWH7Hc9q2udP8",
      "recorrido":"https://recorridosvirtuales.buap.mx/dasu/",
      "botones":[
        {
          "name": "FCQ12",
          "left": "46%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCQ/FCQ_12.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FCQ12BICI1",
          "left": "44%",
          "top": "26%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCQ12BUS1",
          "left": "6%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobus",
          "size": "2",
        },
        {
          "name": "FCQ12BUS2",
          "left": "68.5%",
          "top": "11%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-qu%C3%ADmicas-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [49.21875, -42.419473]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Cultura Física - FCF",
      "popupContent": '<b>Facultad de Cultura Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCF.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCF.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-cultura-f%c3%adsica-fcf",
      "ruta": "https://maps.app.goo.gl/LhY8sjHw1ELMCwfi9",
      "recorrido":"https://recorridosvirtuales.buap.mx/cultura-fisica/",
      "botones":[
        {
          "name": "FCF1",
          "left": "35.5%",
          "top": "27%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_1.jpg",
        },
        {
          "name": "FCF2",
          "left": "54.5%",
          "top": "32%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_2.jpg",
        },
        {
          "name": "FCF3",
          "left": "54%",
          "top": "45%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_3.jpg",
        },
        {
          "name": "FCF4",
          "left": "38%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_4.jpg",
        },
        {
          "name": "FCF5",
          "left": "30.5%",
          "top": "44%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_5.jpg",
        },
        {
          "name": "FCF6",
          "left": "13%",
          "top": "37%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_6.jpg",
        },
        {
          "name": "FCF7",
          "left": "63%",
          "top": "46%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCF_7.jpg",
        },
        {
          "name": "FCFy",
          "left": "32%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCF/FCFy.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FCFBICI1",
          "left": "37%",
          "top": "57.3%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-cultura-f%C3%ADsica-lobobici",
          "size": "2",
        },
        {
          "name": "FCFBICI2",
          "left": "69.5%",
          "top": "42.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-cultura-f%C3%ADsica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCFBUS1",
          "left": "51%",
          "top": "15%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-cultura-f%C3%ADsica-lobobus",
          "size": "2",
        },
        {
          "name": "FCFBUS2",
          "left": "29%",
          "top": "51%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-cultura-f%C3%ADsica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [80.859375, 53.641285]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Medicina Veterinaria y Zootecnia - MVZ",
      "popupContent": '<b>Facultad de Medicina Veterinaria y Zootcnia</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/MVZ.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/MVZ.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-medicina-veterinaria-y-zootecnia-hospital-veterinario-puebla-mvz",
      "ruta": "https://maps.app.goo.gl/DQ7kudGn6sFLM1uY6",
      "recorrido":"https://recorridosvirtuales.buap.mx/caeto/",
      "botones":[
        {
          "name": "MVZ1",
          "left": "24%",
          "top": "54%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/MVZ/MVZ.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "MVZBICI1",
          "left": "29%",
          "top": "3%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-medicina-veterinaria-y-zootecnia-hospital-veterinario-puebla-lobobici",
          "size": "2",
        },
        {
          "name": "MVZBICI2",
          "left": "84%",
          "top": "19%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-medicina-veterinaria-y-zootecnia-hospital-veterinario-puebla-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "MVZBUS1",
          "left": "25.5%",
          "top": "74.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-medicina-veterinaria-y-zootecnia-hospital-veterinario-puebla-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-4.96582, -32.508172]
    }
  },
];

//CIENCIAS SOCIALES Y HUMANIDADES
var cshGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias Políticas y Sociales - CPS",
      "popupContent": '<b>Facultad de Ciencias Políticas y Sociales</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/CPS.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/CPS.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-pol%C3%ADticas-y-ciencias-sociales-cps",
      "ruta": "https://maps.app.goo.gl/UsGyS4qWiBSFEzuo6",
      "recorrido":"https://recorridosvirtuales.buap.mx/derecho/",
      "botones":[
        {
          "name": "CPS1",
          "left": "48%",
          "top": "60%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/CPS/CPS1.jpg",
        },
        {
          "name": "CPS2",
          "left": "60%",
          "top": "76%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/CPS/CPS2.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "CPSBICI1",
          "left": "27%",
          "top": "87.7%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-pol%C3%ADticas-y-ciencias-sociales-lobobici",
          "size": "2",
        },
        {
          "name": "CPSBICI2",
          "left": "52%",
          "top": "27%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-pol%C3%ADticas-y-ciencias-sociales-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "CPSBUS1",
          "left": "4%",
          "top": "10.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-pol%C3%ADticas-y-ciencias-sociales-lobobus",
          "size": "2",
        },
        {
          "name": "CPSBUS2",
          "left": "45%",
          "top": "83%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-pol%C3%ADticas-y-ciencias-sociales-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [18.500977, 45.919227]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Derecho y Ciencias Sociales - DER",
      "popupContent": '<b>Facultad de Derecho y Ciencias Sociales</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/DER.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/DER.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-derecho-y-ciencias-sociales-der",
      "ruta": "https://maps.app.goo.gl/bHwFna9yv7kZVozs5",
      "recorrido":"https://recorridosvirtuales.buap.mx/derecho/",
      "botones":[
        {
          "name": "DER1",
          "left": "20%",
          "top": "26%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_1.jpg",
        },
        {
          "name": "DER2",
          "left": "20%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_2.jpg",
        },
        {
          "name": "DER3",
          "left": "42%",
          "top": "37%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_3.jpg",
        },
        {
          "name": "DER4",
          "left": "51%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_4.jpg",
        },
        {
          "name": "DER5",
          "left": "37%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_5.jpg",
        },
        {
          "name": "DER6",
          "left": "32%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_6.jpg",
        },
        {
          "name": "DER7",
          "left": "86%",
          "top": "61.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_7.jpg",
        },
        {
          "name": "DER8",
          "left": "74%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_8.jpg",
        },
        {
          "name": "DER9",
          "left": "76%",
          "top": "65.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/DER/DER_9.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "DERBICI1",
          "left": "26.5%",
          "top": "89%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-derecho-lobobici",
          "size": "2",
        },
        {
          "name": "DERBICI2",
          "left": "52%",
          "top": "24%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-derecho-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "DERBUS1",
          "left": "4%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-derecho-y-ciencias-sociales-lobobus",
          "size": "2",
        },
        {
          "name": "DERBUS2",
          "left": "43%",
          "top": "82.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-derecho-y-ciencias-sociales-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [14.238281, 51.890708]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Lenguas - LEN",
      "popupContent": '<b>Facultad de Lenguas</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/LEN.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/LEN.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-lenguas-len",
      "ruta": "https://maps.app.goo.gl/agcKncsUyqHo66Qj9",
      "recorrido":"https://recorridosvirtuales.buap.mx/caale/",
      "botones":[
        {
          "name": "LEN1",
          "left": "46%",
          "top": "31%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/LEN/LEN.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "LENBICI1",
          "left": "27%",
          "top": "60%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "LENBUS1",
          "left": "44.5%",
          "top": "8%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobus",
          "size": "2",
        },
        {
          "name": "LENBUS2",
          "left": "34.5%",
          "top": "61%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [55.019531, 55.265045]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Filosofía y Antropología - FIL",
      "popupContent": '<b>Facultad de Filosofía y Antropología</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FIL.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FIL.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-filosof%c3%ada-y-antropolog%c3%ada-fil",
      "ruta": "https://maps.app.goo.gl/kVdoqEzPKccqUk6A8",
      "recorrido":"https://recorridosvirtuales.buap.mx/stu/",
      "botones":[
        {
          "name": "FIL1",
          "left": "64%",
          "top": "50%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIL/FIL1.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FILBICI1",
          "left": "32%",
          "top": "69%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-antropolog%C3%ADa-lobobici",
          "size": "2",
        },
        {
          "name": "FILBICI2",
          "left": "58.5%",
          "top": "32%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-antropolog%C3%ADa-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FILBUS1",
          "left": "36.5%",
          "top": "38.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-antropolog%C3%ADa-lobobus",
          "size": "2",
        },
        {
          "name": "FILBUS2",
          "left": "51%",
          "top": "33%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-antropolog%C3%ADa-lobobus",
          "size": "2",
        },
        {
          "name": "FILBUS3",
          "left": "36.5%",
          "top": "88.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-filosof%C3%ADa-y-antropolog%C3%ADa-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [99.492188, 19.663225]
    }
  },
];

var eaGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Administración - ADM",
      "popupContent": '<b>Facultad de Filosofía y Antropología</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ADM.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ADM.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-administraci%c3%b3n-adm",
      "ruta": "https://maps.app.goo.gl/u66NrHJaG2Zc3pvT6",
      "recorrido":"https://recorridosvirtuales.buap.mx/administracion/",
      "botones":[
        {
          "name": "ADM1",
          "left": "38%",
          "top": "62%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM1.jpg",
        },
        {
          "name": "ADM2",
          "left": "21%",
          "top": "62.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_2.jpg",
        },
        {
          "name": "ADM3",
          "left": "30%",
          "top": "44%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_3.jpg",
        },
        {
          "name": "ADM4",
          "left": "44%",
          "top": "32.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_4.jpg",
        },
        {
          "name": "ADM5",
          "left": "46%",
          "top": "47%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_5.jpg",
        },
        {
          "name": "ADM6",
          "left": "56%",
          "top": "47%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_6.jpg",
        },
        {
          "name": "ADM7",
          "left": "58%",
          "top": "67%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_7.jpg",
        },
        {
          "name": "ADM8",
          "left": "79%",
          "top": "67%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ADM/ADM_8.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ADMBICI1",
          "left": "11%",
          "top": "18.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-administraci%C3%B3n-lobobici",
          "size": "2",
        },
        {
          "name": "ADMBICI2",
          "left": "61.5%",
          "top": "78.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-administraci%C3%B3n-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ADMBUS1",
          "left": "3%",
          "top": "77.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-administraci%C3%B3n-lobobus",
          "size": "2",
        },
        {
          "name": "ADMBUS2",
          "left": "40.5%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-administraci%C3%B3n-lobobus",
          "size": "2",
        },
        {
          "name": "ADMBUS3",
          "left": "78%",
          "top": "75.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-administraci%C3%B3n-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-0.878906, 51.127408]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Contaduría Pública - FCP",
      "popupContent": '<b>Facultad de Contaduría Pública</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCP.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCP.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-contadur%c3%ada-p%c3%bablica-fcp",
      "ruta": "https://maps.app.goo.gl/4ypruAHN9S5CmHr78",
      "recorrido":"https://recorridosvirtuales.buap.mx/contaduria/",
      "botones":[
        {
          "name": "FCP1",
          "left": "39%",
          "top": "21%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_1.jpg",
        },
        {
          "name": "FCP2",
          "left": "31%",
          "top": "36%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_2.jpg",
        },
        {
          "name": "FCP3",
          "left": "34%",
          "top": "43%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_3.jpg",
        },
        {
          "name": "FCP4",
          "left": "30%",
          "top": "48.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_4.jpg",
        },
        {
          "name": "FCP5",
          "left": "26%",
          "top": "59%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_5.jpg",
        },
        {
          "name": "FCP6",
          "left": "14.5%",
          "top": "66%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_6.jpg",
        },
        {
          "name": "FCP7",
          "left": "23%",
          "top": "70%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_7.jpg",
        },
        {
          "name": "FCP8",
          "left": "8%",
          "top": "80%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCP/FCP_8.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "FCPBICI1",
          "left": "81%",
          "top": "23.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-contadur%C3%ADa-p%C3%BAblica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCPBUS1",
          "left": "69%",
          "top": "10.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-contadur%C3%ADa-p%C3%BAblica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-49.833984, -24.767063]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Economía - ECO",
      "popupContent": '<b>Facultad de Economía</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ECO.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ECO.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-econom%c3%ada-eco",
      "ruta": "https://maps.app.goo.gl/p1W1j1yGJJ44ofHU6",
      "recorrido":"https://recorridosvirtuales.buap.mx/economia",
      "botones":[
        {
          "name": "ECO1",
          "left": "43%",
          "top": "40%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_1.jpg",
        },
        {
          "name": "ECO2",
          "left": "54%",
          "top": "47%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_2.jpg",
        },
        {
          "name": "ECO3",
          "left": "45%",
          "top": "53%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_3.jpg",
        },
        {
          "name": "ECO4",
          "left": "53%",
          "top": "66%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_4.jpg",
        },
        {
          "name": "ECO5",
          "left": "23%",
          "top": "64%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_5.jpg",
        },
        {
          "name": "ECO6",
          "left": "18%",
          "top": "43%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_6.jpg",
        },
        {
          "name": "ECO7",
          "left": "35%",
          "top": "64.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_7.jpg",
        },
        {
          "name": "ECOY",
          "left": "11%",
          "top": "52%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ECO/ECO_Y.jpg",
        }, 
      ],
      "botonesBici":[
        {
          "name": "ECOBICI1",
          "left": "74.5%",
          "top": "66.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-econom%C3%ADa-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ECOBUS1",
          "left": "83%",
          "top": "67%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-econom%C3%ADa-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [34.716797, 51.835312]
    }
  },
];

var iceGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Arquitectura - ARQ",
      "popupContent": '<b>Facultad de Arquitectura</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ARQ.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ARQ.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-arquitectura-arq",
      "ruta": "https://maps.app.goo.gl/j4NYMB8mSXXhrm1r6",
      "recorrido":"https://recorridosvirtuales.buap.mx/arquitectura",
      "botones":[
        {
          "name": "ARQ1",
          "left": "23%",
          "top": "56%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_1.jpg",
        },
        {
          "name": "ARQ2",
          "left": "39%",
          "top": "51.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_2.jpg",
        },
        {
          "name": "ARQ3",
          "left": "53%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_3.jpg",
        },
        {
          "name": "ARQ4",
          "left": "53%",
          "top": "42%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_4.jpg",
        },
        {
          "name": "ARQ5",
          "left": "39%",
          "top": "45%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_5.jpg",
        },
        {
          "name": "ARQ6",
          "left": "22%",
          "top": "46%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_6.jpg",
        },
        {
          "name": "ARQ7",
          "left": "23%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_7.jpg",
        },
        {
          "name": "ARQ8",
          "left": "38%",
          "top": "36%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_8.jpg",
        },
        {
          "name": "ARQ9",
          "left": "42%",
          "top": "26.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_9.jpg",
        },
        {
          "name": "ARQ10",
          "left": "27%",
          "top": "26%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_10.jpg",
        },
        {
          "name": "ARQ11",
          "left": "10%",
          "top": "26%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_11.jpg",
        },
        {
          "name": "ARQ12",
          "left": "50%",
          "top": "60%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ARQ/ARQ_12.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "ARQBICI1",
          "left": "15%",
          "top": "14%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-arquitectura-lobobici",
          "size": "2",
        },
        {
          "name": "ARQBICI2",
          "left": "61%",
          "top": "21.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-arquitectura-lobobici",
          "size": "2",
        },
        {
          "name": "ARQBICI3",
          "left": "75%",
          "top": "14%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-arquitectura-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ARQBUS1",
          "left": "59%",
          "top": "10.8%",
          "url": "https://plantafisica.buap.mx/?q=content/facultad-de-arquitectura-lobobus",
          "size": "2",
        },
        {
          "name": "ARQBUS2",
          "left": "83.5%",
          "top": "73.5%",
          "url": "https://plantafisica.buap.mx/?q=content/facultad-de-arquitectura-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-55.458984, 29.190553]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias de la Computación - FCC",
      "popupContent": '<b>Facultad de Ciencias de la Computación</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCC.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCC.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%c3%b3n-cco",
      "ruta": "https://maps.app.goo.gl/hKErbDbBwnpzKLLS9",
      "recorrido":"https://recorridosvirtuales.buap.mx/computacion/",
      "botones":[
        {
          "name": "FCC1",
          "left": "24%",
          "top": "42%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCC/FCC_1.jpg",
        },
        {
          "name": "FCC2",
          "left": "30.5%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCC/FCC_2.jpg",
        },
        {
          "name": "FCC3",
          "left": "29%",
          "top": "25%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCC/FCC_3.jpg",
        },
        {
          "name": "FCC4",
          "left": "43%",
          "top": "31%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCC/FCC_4.jpg",
        },
        {
          "name": "FCC5",
          "left": "41%",
          "top": "20.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCC/FCC_5.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FCCBICI1",
          "left": "18%",
          "top": "49%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%C3%B3n-lobobici",
          "size": "2",
        },
        {
          "name": "FCCBICI2",
          "left": "25.7%",
          "top": "49%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%C3%B3n-lobobici",
          "size": "2",
        },
        {
          "name": "FCCBICI3",
          "left": "74.5%",
          "top": "20.8%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%C3%B3n-lobobici",
          "size": "2",
        },
        {
          "name": "FCCBICI4",
          "left": "81.5%",
          "top": "77%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%C3%B3n-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCCBUS1",
          "left": "82.5%",
          "top": "37.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-computaci%C3%B3n-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-79.189453, 54.64559]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias de la Electrónica - FCE",
      "popupContent": '<b>Facultad de Ciencias de la Electrónica</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCE.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCE.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%c3%b3nica-fce",
      "ruta": "https://maps.app.goo.gl/gi6Fvg5SX4ubysJm7",
      "recorrido":"https://recorridosvirtuales.buap.mx/fisico-matematicas/",
      "botones":[
        {
          "name": "FCE1",
          "left": "30%",
          "top": "56%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_1.jpg",
        },
        {
          "name": "FCE2",
          "left": "49%",
          "top": "58%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_2.jpg",
        },
        {
          "name": "FCE3",
          "left": "71%",
          "top": "31%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_3.jpg",
        },
        {
          "name": "FCE4",
          "left": "71%",
          "top": "41%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_4.jpg",
        },
        {
          "name": "FCE5",
          "left": "43%",
          "top": "77%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_5.jpg",
        },
        {
          "name": "FCE6",
          "left": "22%",
          "top": "77%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_6.jpg",
        },
        {
          "name": "FCE7",
          "left": "39%",
          "top": "85%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_7.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FCEBICI1",
          "left": "34.5%",
          "top": "17.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobici",
          "size": "2",
        },
        {
          "name": "FCEBICI2",
          "left": "29%",
          "top": "74%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FCEBUS1",
          "left": "3.5%",
          "top": "72.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobus",
          "size": "2",
        },
        {
          "name": "FCEBUS2",
          "left": "82.5%",
          "top": "76%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-28.212891, 46.405793]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias de la Electrónica - FCE8",
      "popupContent": '<b>Facultad de Ciencias de la Electrónica - FCE8</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FCE8.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FCE8.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%c3%b3nica-fce",
      "ruta": "https://maps.app.goo.gl/scSutEZ38utPJker5",
      "recorrido":"https://recorridosvirtuales.buap.mx/fisico-matematicas/",
      "botones":[
        {
          "name": "FCE8",
          "left": "68%",
          "top": "53%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FCE/FCE_8.jpg",
        },
      ],
      "botonesBici":[
        {
          "name": "FCEBICI1",
          "left": "48%",
          "top": "42%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "FCEBUS1",
          "left": "23.5%",
          "top": "77.3%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobus",
          "size": "2",
        },
        {
          "name": "FCEBUS2",
          "left": "58%",
          "top": "31.3%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-de-la-electr%C3%B3nica-lobobus",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [58.161621, -39.131632]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ciencias Físico-Matemáticas - FM",
      "popupContent": '<b>Facultad de Ciencias Físico-Matemáticas</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FM.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FM.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ciencias-f%c3%adsico-matem%c3%a1ticas-fm",
      "ruta": "https://maps.app.goo.gl/PbbMunnrNrZ11zaTA",
      "recorrido":"https://recorridosvirtuales.buap.mx/fisico-matematicas/",
      "botones":[
        {
          "name": "FFM1",
          "left": "32%",
          "top": "63.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_1.jpg",
        },
        {
          "name": "FFM2",
          "left": "19%",
          "top": "61%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_2.jpg",
        },
        {
          "name": "FFM3",
          "left": "20%",
          "top": "55%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_3.jpg",
        },
        {
          "name": "FFM4",
          "left": "34%",
          "top": "57.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_4.jpg",
        },
        {
          "name": "FFM5",
          "left": "34%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_5.jpg",
        },
        {
          "name": "FFM6",
          "left": "51.5%",
          "top": "39%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_6.jpg",
        },
        {
          "name": "FFM7",
          "left": "34%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_7.jpg",
        },
        {
          "name": "FFM8",
          "left": "19%",
          "top": "35.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_8.jpg",
        },
        {
          "name": "FFM9",
          "left": "34%",
          "top": "27%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_9.jpg",
        },
        {
          "name": "FFM10",
          "left": "20%",
          "top": "24.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FM/FFM_10.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FMBICI1",
          "left": "42%",
          "top": "23%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-f%C3%ADsico-matem%C3%A1ticas-lobobici",
          "size": "2",
        },
        {
          "name": "FMBICI2",
          "left": "84%",
          "top": "77.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-f%C3%ADsico-matem%C3%A1ticas-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FMBUS1",
          "left": "28%",
          "top": "75%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-f%C3%ADsico-matem%C3%A1ticas-lobobus",
          "size": "2",
        },
        {
          "name": "FMBUS2",
          "left": "68.5%",
          "top": "10.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ciencias-f%C3%ADsico-matem%C3%A1ticas-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-14.677734, 50.064373]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ingeniería - ING",
      "popupContent": '<b>Facultad de Ingeniería</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ING.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ING.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ingenier%c3%ada-ing",
      "ruta": "https://maps.app.goo.gl/cwnjUC879QSFzvHE8",
      "recorrido":"https://recorridosvirtuales.buap.mx/ingenieria/",
      "botones":[
        {
          "name": "ING1",
          "left": "19.5%",
          "top": "69.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_1.jpg",
        },
        {
          "name": "ING2",
          "left": "20.5%",
          "top": "54%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_2.jpg",
        },
        {
          "name": "ING3",
          "left": "27%",
          "top": "59%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_3.jpg",
        },
        {
          "name": "ING4",
          "left": "38%",
          "top": "56.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_4.jpg",
        },
        {
          "name": "ING5",
          "left": "51%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_5.jpg",
        },
        {
          "name": "ING6",
          "left": "63%",
          "top": "52.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_6.jpg",
        },
        {
          "name": "ING7",
          "left": "65.5%",
          "top": "39%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_7.jpg",
        },
        {
          "name": "ING8",
          "left": "55%",
          "top": "38%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_8.jpg",
        },
        {
          "name": "ING9",
          "left": "36%",
          "top": "36%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ING/ING_9.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "INGBICI1",
          "left": "41%",
          "top": "11%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-lobobici",
          "size": "2",
        },
        {
          "name": "INGBICI2",
          "left": "24.3%",
          "top": "21%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-lobobici",
          "size": "2",
        },
        {
          "name": "INGBICI3",
          "left": "79.5%",
          "top": "82.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "INGBUS1",
          "left": "18%",
          "top": "7%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-lobobus",
          "size": "2",
        },
        {
          "name": "INGBUS2",
          "left": "61.5%",
          "top": "82.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-35.81543, 30.296123]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Facultad de Ingeniería Química - FIQ",
      "popupContent": '<b>Facultad de Ingeniería Química</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/FIQ.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/FIQ.jpg",
      "info": "https://plantafisica.buap.mx/content/facultad-de-ingenier%c3%ada-qu%c3%admica-fiq",
      "ruta": "https://maps.app.goo.gl/Q4Bu7evzjJE2DkgJ9",
      "recorrido":"https://recorridosvirtuales.buap.mx/ingenieria-quimica/",
      "botones":[
        {
          "name": "FIQ1",
          "left": "46%",
          "top": "48.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_1.jpg",
        },
        {
          "name": "FIQ2",
          "left": "39%",
          "top": "59%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_2.jpg",
        },
        {
          "name": "FIQ3",
          "left": "21%",
          "top": "68.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_3.jpg",
        },
        {
          "name": "FIQ4",
          "left": "22%",
          "top": "58.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_4.jpg",
        },
        {
          "name": "FIQ5",
          "left": "19%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_5.jpg",
        },
        {
          "name": "FIQ6",
          "left": "17%",
          "top": "41%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_6.jpg",
        },
        {
          "name": "FIQ7",
          "left": "29%",
          "top": "35.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_7.jpg",
        },
        {
          "name": "FIQ8",
          "left": "19.5%",
          "top": "25%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_8.jpg",
        },
        {
          "name": "FIQ9",
          "left": "13.5%",
          "top": "23%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/FIQ/FIQ_9.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "FIQBICI1",
          "left": "3%",
          "top": "20%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobici",
          "size": "2",
        },
        {
          "name": "FIQBICI2",
          "left": "8.5%",
          "top": "76%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobici",
          "size": "2",
        },
        {
          "name": "FIQBICI3",
          "left": "50%",
          "top": "83.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobici",
          "size": "2",
        },
        {
          "name": "FIQBICI4",
          "left": "63%",
          "top": "76%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobici",
          "size": "2",
        },
        {
          "name": "FIQBICI5",
          "left": "80%",
          "top": "26%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "FIQBUS1",
          "left": "9%",
          "top": "36%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobus",
          "size": "2",
        },
        {
          "name": "FIQBUS2",
          "left": "48%",
          "top": "73%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobus",
          "size": "2",
        },
        {
          "name": "FIQBUS3",
          "left": "57%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-ingenier%C3%ADa-qu%C3%ADmica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-55.722656, 49.994863]
    }
  },
];

var dependenciasGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Arena BUAP",
      "popupContent": '<b>Arena BUAP</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/ARENA.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/ARENA.jpg",
      "info": "https://plantafisica.buap.mx/content/arena-buap",
      "ruta": "https://maps.app.goo.gl/XgsUanAjBqjibMgb8",
      "recorrido": "https://recorridosvirtuales.buap.mx/caeto/",
      "botones":[
        {
          "name": "1",
          "left": "34%",
          "top": "47%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ARENA/AR2.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "ARENABICI1",
          "left": "40%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "2",
        },
        {
          "name": "ARENABICI2",
          "left": "56%",
          "top": "23%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "ARENABUS1",
          "left": "30%",
          "top": "70%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobus",
          "size": "2",
        },
        {
          "name": "ARENABUS2",
          "left": "42.5%",
          "top": "21.5%",
          "url": "https://plantafisica.buap.mx/content/arena-buap-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-34.321289, 1.713729]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Biblioteca Central",
      "popupContent": '<b>Biblioteca Central</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/BC.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/BC.jpg",
      "info": "https://plantafisica.buap.mx/content/biblioteca-central",
      "ruta": "https://maps.app.goo.gl/seJ49Qf2WAEXq9QU6",
      "botones":[
        {
          "name": "BL1",
          "left": "36%",
          "top": "41%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/BL/BC.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "BLBICI1",
          "left": "50%",
          "top": "25%",
          "url": "https://plantafisica.buap.mx/content/biblioteca-central-lobobici",
          "size": "1",
        },
        {
          "name": "BLBICI2",
          "left": "60%",
          "top": "39.5%",
          "url": "https://plantafisica.buap.mx/content/biblioteca-central-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "BLBUS1",
          "left": "56%",
          "top": "48.2%",
          "url": "https://plantafisica.buap.mx/content/biblioteca-central-lobobus",
          "size": "1",
        },
        {
          "name": "BLBUS2",
          "left": "69%",
          "top": "71.7%",
          "url": "https://plantafisica.buap.mx/content/biblioteca-central-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [17.490234, -45.58169]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Bioterio - BCB",
      "popupContent": '<b>Bioterio - BCB</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/BCB.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/BCB.jpg",
      "info": "https://plantafisica.buap.mx/content/bioterio",
      "ruta": "https://maps.app.goo.gl/LCto6j5L6X71MHYn9",
      "recorrido": "https://recorridosvirtuales.buap.mx/computacion/",
      "botones":[
        {
          "name": "BCB1",
          "left": "77%",
          "top": "65.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/Bioterio/BCB.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "BCBBICI1",
          "left": "18.5%",
          "top": "50.5%",
          "url": "https://plantafisica.buap.mx/content/bioterio-lobobici",
          "size": "2",
        },
        {
          "name": "BCBBICI2",
          "left": "26%",
          "top": "51%",
          "url": "https://plantafisica.buap.mx/content/bioterio-lobobici",
          "size": "2",
        },
        {
          "name": "BCBBICI3",
          "left": "77%",
          "top": "22%",
          "url": "https://plantafisica.buap.mx/content/bioterio-lobobici",
          "size": "2",
        },
        {
          "name": "BCBBICI4",
          "left": "84.5%",
          "top": "82%",
          "url": "https://plantafisica.buap.mx/content/bioterio-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "BCBBUS1",
          "left": "85%",
          "top": "38.5%",
          "url": "https://plantafisica.buap.mx/content/bioterio-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-66.489258, 45.890008]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Centro de Apoyo Emocional y Terapia Ocupacional - CAETO",
      "popupContent": '<b>Centro de Apoyo Emocional y Terapia Ocupacional - CAETO</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CAETO.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CAETO.jpg",
      "info": "https://plantafisica.buap.mx/content/centro-de-apoyo-emocional-y-terapia-ocupacional",
      "ruta": "https://maps.app.goo.gl/2K6CmS4tEn7QKS4v5",
      "recorrido": "https://recorridosvirtuales.buap.mx/caeto/",
      "botones":[
        {
          "name": "CAETO1",
          "left": "35%",
          "top": "54%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CAETO/CAETO.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CAETOBICI1",
          "left": "8%",
          "top": "36.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-apoyo-emocional-y-terapia-ocupacional-lobobici",
          "size": "1",
        },
        {
          "name": "CAETOBICI2",
          "left": "71%",
          "top": "57.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-apoyo-emocional-y-terapia-ocupacional-lobobici",
          "size": "1",
        },
        {
          "name": "CAETOBICI3",
          "left": "82%",
          "top": "74.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-apoyo-emocional-y-terapia-ocupacional-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "CAETOBUS1",
          "left": "38.5%",
          "top": "68.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-apoyo-emocional-y-terapia-ocupacional-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-13.754883, -28.150729]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Centro de Convenciones",
      "popupContent": '<b>Centro de Convenciones</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CC.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CC.jpg",
      "info": "https://plantafisica.buap.mx/content/centro-de-convenciones",
      "ruta": "https://maps.app.goo.gl/4XGdGU4wAVXHKbvz7",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "CC1",
          "left": "60%",
          "top": "21%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CC/CC.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CCBICI1",
          "left": "42.5%",
          "top": "27.5%",
          "url": "https://plantafisica.buap.mx/content/centro-de-convenciones-lobobici",
          "size": "1",
        },
        {
          "name": "CCBICI2",
          "left": "27.7%",
          "top": "79.4%",
          "url": "https://plantafisica.buap.mx/content/centro-de-convenciones-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "CCBUS1",
          "left": "18%",
          "top": "69.6%",
          "url": "https://plantafisica.buap.mx/content/centro-de-convenciones-lobobus",
          "size": "1",
        },
        {
          "name": "CCBUS2",
          "left": "30%",
          "top": "26.4%",
          "url": "https://plantafisica.buap.mx/content/centro-de-convenciones-lobobus",
          "size": "1",
        },
        {
          "name": "CCBUS3",
          "left": "86%",
          "top": "18.1%",
          "url": "https://plantafisica.buap.mx/content/centro-de-convenciones-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-12.963867, 16.467424]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Círculo Infantil - CI",
      "popupContent": '<b>Círculo Infantil - CI</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CI.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CI.jpg",
      "info": "https://plantafisica.buap.mx/content/circulo-infantil",
      "ruta": "https://maps.app.goo.gl/rzK3UeVdmHrRuxrJA",
      "botones":[
        {
          "name": "CI1",
          "left": "29%",
          "top": "66%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CI/CI.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CIBICI1",
          "left": "52.5%",
          "top": "26.5%",
          "url": "https://plantafisica.buap.mx/content/c%C3%ADrculo-infantil-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "CIBUS1",
          "left": "56.5%",
          "top": "45.5%",
          "url": "https://plantafisica.buap.mx/content/circulo-infantil-lobobus",
          "size": "1",
        },
        {
          "name": "CIBUS2",
          "left": "69.5%",
          "top": "71.6%",
          "url": "https://plantafisica.buap.mx/content/circulo-infantil-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [25.400391, -53.276014]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Concha Acústica - CA",
      "popupContent": '<b>Concha Acústica - CA</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUB.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CA.jpg",
      "info": "https://plantafisica.buap.mx/content/herbario-y-jard%C3%ADn-bot%C3%A1nico",
      "ruta": "https://maps.app.goo.gl/xxGTf1eCQkVbSdNQ9",
      "botones":[
        {
          "name": "CA1",
          "left": "43%",
          "top": "12%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUB/CA.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
        {
          "name": "CABUS1",
          "left": "45%",
          "top": "70%",
          "url": "",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [71.411133, 36.667171]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Contraloria General",
      "popupContent": '<b>Contraloria General</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CG.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CG.jpg",
      "info": "https://plantafisica.buap.mx/content/contralor%C3%ADa-general",
      "ruta": "https://maps.app.goo.gl/BX6DHnWpS2pcDkZ76",
      "botones":[
        {
          "name": "CG",
          "left": "50%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CG/CG.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CGBICI1",
          "left": "24.5%",
          "top": "64.5%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "CGBUS1",
          "left": "41.5%",
          "top": "13%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobus",
          "size": "2",
        },
        {
          "name": "CGBUS2",
          "left": "54%",
          "top": "57%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobus",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [55.041504, 53.186309]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Control Vehicular - DCV",
      "popupContent": '<b>Control Vehicular - DCV</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/CV.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/CV.jpg",
      "info": "https://plantafisica.buap.mx/content/control-vehicular",
      "ruta": "https://maps.app.goo.gl/w2CNZdcf1k6ms9Z79",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "CV1",
          "left": "48%",
          "top": "64%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/CV/DCV.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "CVBICI1",
          "left": "13%",
          "top": "47%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobici",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "CVBUS1",
          "left": "75.1%",
          "top": "58%",
          "url": "https://plantafisica.buap.mx/content/facultad-de-lenguas-lobobus",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [2.636719, 16.594104]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Coordinación General de Desarrollo Sustentable - STU",
      "popupContent": '<b>Coordinación General de Desarrollo Sustentable</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/STU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/STU.jpg",
      "info": "https://plantafisica.buap.mx/content/coordinaci%C3%B3n-general-de-desarrollo-sustentable",
      "ruta": "https://maps.app.goo.gl/h768eTAGW46HXJHDA",
      "recorrido": "https://recorridosvirtuales.buap.mx/stu/",
      "botones":[
        {
          "name": "STU",
          "left": "46%",
          "top": "62%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/STU/STU.jpg",        
        },
        {
          "name": "STU1",
          "left": "73%",
          "top": "57.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/STU/STU1.jpg",        
        },
        {
          "name": "LBS",
          "left": "59%",
          "top": "53%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/STU/LBS.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "STUBICI1",
          "left": "29.5%",
          "top": "60%",
          "url": "https://plantafisica.buap.mx/content/coordinaci%C3%B3n-de-desarrollo-sustentable-lobobici",
          "size": "1",
        },
        {
          "name": "STUBICI1",
          "left": "44%",
          "top": "22.5%",
          "url": "https://plantafisica.buap.mx/content/coordinaci%C3%B3n-de-desarrollo-sustentable-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "STUBUS1",
          "left": "29.5%",
          "top": "66.5%",
          "url": "https://plantafisica.buap.mx/content/coordinaci%C3%B3n-de-desarrollo-sustentable-lobobus",
          "size": "1",
        },
        {
          "name": "STUBUS2",
          "left": "44%",
          "top": "17.5%",
          "url": "https://plantafisica.buap.mx/content/coordinaci%C3%B3n-de-desarrollo-sustentable-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [97.624512, 3.973849]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Acompañamiento Universitario - DAU",
      "popupContent": '<b>Dirección de Acompañamiento Universitario - DAU</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DAU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DAU.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-acompa%C3%B1amiento-universitario",
      "ruta": "https://maps.app.goo.gl/LrFh5CWyYXUqyYAf9",
      "botones":[
        {
          "name": "DAU",
          "left": "12%",
          "top": "63%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DAU/DAU.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DAUBICI1",
          "left": "35%",
          "top": "19%",
          "url": "",
          "size": "2",
        },
        {
          "name": "DAUBICI2",
          "left": "28%",
          "top": "75%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "DAUBUS1",
          "left": "3.5%",
          "top": "74%",
          "url": "",
          "size": "2",
        },
        {
          "name": "DAUBUS2",
          "left": "83%",
          "top": "79%",
          "url": "",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-42.033691, 46.301577]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Acompañamiento Universitario - DAU1",
      "popupContent": '<b>Dirección de Acompañamiento Universitario - DAU1</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DAU1.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DAU1.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-acompa%C3%B1amiento-universitario",
      "ruta": "https://maps.app.goo.gl/RiSddXXUnHfYJBr96",
      "botones":[
        {
          "name": "DAU1",
          "left": "51%",
          "top": "12.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DAU/DAU1.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DAU1BICI1",
          "left": "52%",
          "top": "23.5%",
          "url": "",
          "size": "2",
        },
        {
          "name": "DAU1BICI2",
          "left": "26.5%",
          "top": "89%",
          "url": "",
          "size": "2",
        },
      ],
      "botonesBus":[
        {
          "name": "DAU1BUS1",
          "left": "4%",
          "top": "9.5%",
          "url": "",
          "size": "2",
        },
        {
          "name": "DAU1BUS2",
          "left": "43%",
          "top": "82%",
          "url": "",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [17.929688, 59.310768]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Administración Escolar - DAE",
      "popupContent": '<b>Dirección de Administración Escolar - DAE</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DAE.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DAE.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-administraci%C3%B3n-escolar",
      "ruta": "https://maps.app.goo.gl/KfoAx5sTZ7XmRu4P9",
      "recorrido": "https://recorridosvirtuales.buap.mx/stu/",
      "botones":[
        {
          "name": "DAE1",
          "left": "70%",
          "top": "79%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DAE/DAE.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DAEBICI1",
          "left": "34%",
          "top": "39.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-adminstracoi%C3%B3n-escolar-lobobici",
          "size": "1",
        },
        {
          "name": "DAEBICI2",
          "left": "58.5%",
          "top": "25%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-adminstracoi%C3%B3n-escolar-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DAEBUS1",
          "left": "34%",
          "top": "33%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-administraci%C3%B3n-escolar-lobobus",
          "size": "1",
        },
        {
          "name": "DAEBUS2",
          "left": "33%",
          "top": "7%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-administraci%C3%B3n-escolar-lobobus",
          "size": "1",
        },
        {
          "name": "DAEBUS3",
          "left": "62.5%",
          "top": "91.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-administraci%C3%B3n-escolar-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [99.931641, 31.800409]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Apoyo y Seguridad Universitaria - DASU",
      "popupContent": '<b>Dirección de Apoyo y Seguridad Universitaria - DASU</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DASU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DASU.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-apoyo-y-seguridad-universitaria",
      "ruta": "https://maps.app.goo.gl/XDtdmfj1DLGiWBRN6",
      "recorrido": "https://recorridosvirtuales.buap.mx/dasu/",
      "botones":[
        {
          "name": "DASU1",
          "left": "38%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DASU/DASU.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DASUBICI1",
          "left": "50%",
          "top": "38.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-apoyo-y-seguridad-universitaria-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "DASUBUS1",
          "left": "22.5%",
          "top": "78%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-apoyo-y-seguridad-universitaria-lobobus",
          "size": "2",
        },
        {
          "name": "DASUBUS2",
          "left": "63%",
          "top": "28%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-apoyo-y-seguridad-universitaria-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [44.736328, -38.065355]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Deporte y Cultura Física - DCF1",
      "popupContent": '<b>Dirección de Deporte y Cultura Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCF.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCF.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica",
      "ruta": "https://maps.app.goo.gl/xCR1PNZGXtA6zLuZ6",
      "botones":[
        {
          "name": "DCF",
          "left": "30%",
          "top": "65%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF.jpg",        
        },
        {
          "name": "DCF1",
          "left": "44%",
          "top": "76%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF1.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DCFBICI1",
          "left": "3%",
          "top": "43%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "DCFBUS1",
          "left": "84%",
          "top": "35%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-7.514648, 6.490077]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Deporte y Cultura Física - DCF2-6",
      "popupContent": '<b>Dirección de Deporte y Cultura Física - DCF2-6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCF2.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCF2.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica",
      "ruta": "https://maps.app.goo.gl/qkeaaJA4M7AZDW3RA",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "DCF2",
          "left": "12%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF2.jpg",        
        },
        {
          "name": "DCF3",
          "left": "14%",
          "top": "63%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF3.jpg",        
        },
        {
          "name": "DCF4",
          "left": "33%",
          "top": "60%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF4.jpg",        
        },
        {
          "name": "DCF5",
          "left": "44%",
          "top": "59%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF5.jpg",        
        },
        {
          "name": "DCF6",
          "left": "44%",
          "top": "43%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF6.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
        {
          "name": "DCF2BUS1",
          "left": "18%",
          "top": "33.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [24.169922, 13.321586]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Deporte y Cultura Física - DCF7",
      "popupContent": '<b>Dirección de Deporte y Cultura Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCF7.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCF7.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica",
      "ruta": "https://maps.app.goo.gl/GLvUW5KbbUixExZ77",
      "botones":[
        {
          "name": "DCF7",
          "left": "20%",
          "top": "26.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF7.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DCF7BICI1",
          "left": "77%",
          "top": "30%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "1",
        },
        {
          "name": "DCF7BICI2",
          "left": "86%",
          "top": "65%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DCF7BUS1",
          "left": "51%",
          "top": "23%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        },
        {
          "name": "DCF7BUS2",
          "left": "77%",
          "top": "19.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        },
        {
          "name": "DCF7BUS3",
          "left": "77%",
          "top": "43%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        },
        {
          "name": "DCF7BUS4",
          "left": "86%",
          "top": "15%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [52.382813, 17.432824]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Deporte y Cultura Física - DCF8",
      "popupContent": '<b>Dirección de Deporte y Cultura Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCF8.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCF8.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica",
      "ruta": "https://maps.app.goo.gl/Jc1htF2JjS6mM9Mu5",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "DCF8",
          "left": "41%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF8.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DCF8BICI1",
          "left": "64%",
          "top": "67.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DCF8BUS1",
          "left": "18%",
          "top": "87.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [37.441406, -16.216349]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Deporte y Cultura Física - DCF9-12",
      "popupContent": '<b>Dirección de Deporte y Cultura Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCF9.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCF9.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica",
      "ruta": "https://maps.app.goo.gl/H4ENgHnigBW7uT2f6",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "DCF9",
          "left": "68%",
          "top": "51%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF9.jpg",        
        },
        {
          "name": "DCF10",
          "left": "76%",
          "top": "29%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF10.jpg",        
        },
        {
          "name": "DCF11",
          "left": "52%",
          "top": "22%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF11.jpg",        
        },
        {
          "name": "DCF12",
          "left": "13%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCF/DCF12.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DCF9BICI1",
          "left": "50%",
          "top": "52.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "1",
        },
        {
          "name": "DCF9BICI2",
          "left": "64%",
          "top": "71.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DCF9BUS1",
          "left": "15%",
          "top": "66%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        },
        {
          "name": "DCF9BUS2",
          "left": "84%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-deporte-y-cultura-f%C3%ADsica-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-3.251953, -11.350335]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección de Innovación y Transferencia de Conocimiento",
      "popupContent": '<b>Dirección de Innovación y Transferencia de Conocimiento</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DITco.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DITco.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento",
      "ruta": "https://maps.app.goo.gl/4cLy1JEv5SVaEYoU9",
      "recorrido": "https://recorridosvirtuales.buap.mx/stu/",
      "botones":[
        {
          "name": "DITco",
          "left": "65%",
          "top": "72%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DITco/DITco.jpg",        
        },
        {
          "name": "DITco1",
          "left": "71%",
          "top": "70%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DITco/DITco1.jpg",        
        },
        {
          "name": "DITco2",
          "left": "85%",
          "top": "71%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DITco/DITco2.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DITcoBICI1",
          "left": "26.5%",
          "top": "39%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento-lobobici",
          "size": "1",
        },
        {
          "name": "DITcoBICI2",
          "left": "53%",
          "top": "23%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DITcoBUS1",
          "left": "27%",
          "top": "32.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento-lobobus",
          "size": "1",
        },
        {
          "name": "DITcoBUS2",
          "left": "26%",
          "top": "3.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento-lobobus",
          "size": "1",
        },
        {
          "name": "DITcoBUS3",
          "left": "58%",
          "top": "91.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-de-innovaci%C3%B3n-y-transferencia-de-conocimiento-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [102.304688, 37.265404]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones - DCyTIC",
      "popupContent": '<b>Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCyTIC1.png",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCyTIC1.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones",
      "ruta": "https://maps.app.goo.gl/LV29gvnc2yXQYoFj6",
      "botones":[
        {
          "name": "DCyTIC",
          "left": "75%",
          "top": "80%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCyTIC/DCyTIC.jpg",
        },
        {
          "name": "DCyTIC1",
          "left": "63%",
          "top": "78%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCyTIC/DCyTIC1.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "DCyTIC1BICI1",
          "left": "50%",
          "top": "25%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobici",
          "size": "1",
        },
        {
          "name": "DCyTIC1BICI2",
          "left": "60%",
          "top": "39%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "DCyTIC1BUS1",
          "left": "56%",
          "top": "48%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobus",
          "size": "1",
        },
        {
          "name": "DCyTIC1BUS2",
          "left": "69%",
          "top": "71.5%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [45.878906, -47.57624]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones - DCyTIC2",
      "popupContent": '<b>Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCyTIC2.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCyTIC2.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones",
      "ruta": "https://maps.app.goo.gl/UPYSPXb9cvfwdFem7",
      "botones":[
        {
          "name": "DCyTIC2",
          "left": "57%",
          "top": "25%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCyTIC/DCyTIC2.jpg",        
        },
      ],
      "botonesBici":[
        {
          "name": "DCyTIC2BICI1",
          "left": "37%",
          "top": "20%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobici",
          "size": "2",
        },
        {
          "name": "DCyTIC2BICI2",
          "left": "17%",
          "top": "73%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "DCyTIC2BUS1",
          "left": "3.5%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobus",
          "size": "2",
        },
        {
          "name": "DCyTIC2BUS2S",
          "left": "31.5%",
          "top": "70%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [25.136719, 54.998811]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones - DCyTIC3",
      "popupContent": '<b>Dirección General de Cómputo y Tecnologías  y de la Información y Comunicaciones</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/DCyTIC3.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/DCyTIC3.jpg",
      "info": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones",
      "ruta": "https://maps.app.goo.gl/6uMbJh1beXXtx8Y59",
      "botones":[
        {
          "name": "DCyTIC3",
          "left": "46%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/DCyTIC/DCyTIC3.jpg",        
        },
      ],
      "botonesBici":[
        {
          "name": "DCyTIC3BICI1",
          "left": "24%",
          "top": "42%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobici",
          "size": "1",
        },
      ],
      "botonesBus":[
        {
          "name": "DCyTIC3BUS1",
          "left": "68%",
          "top": "45%",
          "url": "https://plantafisica.buap.mx/content/direcci%C3%B3n-general-de-c%C3%B3mputo-y-tecnolog%C3%ADas-de-la-informaci%C3%B3n-y-comunicaciones-lobobus",
          "size": "1",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-23.203125, 37.052826]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Estación Universitaria - ESU",
      "popupContent": '<b>Estación Universitaria - ESU</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/ESU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/ESU.jpg",
      "info": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria",
      "ruta": "https://maps.app.goo.gl/i9tRTETFNRYSEyhA7",
      "recorrido": "https://recorridosvirtuales.buap.mx/esu/",
      "botones":[
        {
          "name": "ESU",
          "left": "71%",
          "top": "54%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ESU/ESU.jpg"
        },
        {
          "name": "ESU1",
          "left": "64%",
          "top": "64%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ESU/ESU1.jpg"
        },
        {
          "name": "ESU3",
          "left": "64%",
          "top": "46%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ESU/ESU2.jpg" 
        },
        {
          "name": "ESU5",
          "left": "64%",
          "top": "58%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/ESU/ESU5.jpg" 
        }
      ],
      "botonesBici":[
        {
          "name": "ESUBICI1",
          "left": "34%",
          "top": "39.5%",
          "url": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria-lobobici",
          "size": "1",
        },
        {
          "name": "ESUBICI1",
          "left": "58.5%",
          "top": "25%",
          "url": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "ESUBUS1",
          "left": "34%",
          "top": "33%",
          "url": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria-lobobus",
          "size": "1",
        },
        {
          "name": "ESUBUS2",
          "left": "33%",
          "top": "7%",
          "url": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria-lobobus",
          "size": "1",
        },
        {
          "name": "ESUBUS3",
          "left": "62.5%",
          "top": "91.5%",
          "url": "https://plantafisica.buap.mx/content/estaci%C3%B3n-de-servicio-universitaria-lobobus",
          "size": "1",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [100.371094, 42.552386]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Estadio Universitario - EU",
      "popupContent": '<b>Estadio Universitario - EU</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/EU.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/EU.jpg",
      "info": "https://plantafisica.buap.mx/content/estadio-universitario",
      "ruta": "https://maps.app.goo.gl/zeCth8Y7Ke96VwTK9",
      "recorrido": "https://recorridosvirtuales.buap.mx/didecufi/",
      "botones":[
        {
          "name": "EU",
          "left": "53%",
          "top": "56%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/EU/EU.jpg",        
        },
        {
          "name": "EU1",
          "left": "32%",
          "top": "57%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/EU/EU1.jpg",        
        },
        {
          "name": "EU2",
          "left": "34%",
          "top": "43%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/EU/EU2.jpg",        
        },
        {
          "name": "EU3",
          "left": "48%",
          "top": "28.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/EU/EU3.jpg",        
        },
        {
          "name": "EU4",
          "left": "4%",
          "top": "54.5%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/EU/EU4.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "EUBICI1",
          "left": "77%",
          "top": "39%",
          "url": "https://plantafisica.buap.mx/content/estadio-universitario-lobobici",
          "size": "1",
        },
        {
          "name": "EUBICI2",
          "left": "86%",
          "top": "60%",
          "url": "https://plantafisica.buap.mx/content/estadio-universitario-lobobici",
          "size": "1",
        },
      ],
      "botonesBus":[
        {
          "name": "EUBUS1",
          "left": "54%",
          "top": "20%",
          "url": "https://plantafisica.buap.mx/content/estadio-universitario-lobobus",
          "size": "1",
        },
        {
          "name": "EUBUS2",
          "left": "86%",
          "top": "13%",
          "url": "https://plantafisica.buap.mx/content/estadio-universitario-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [73.212891, -3.338801]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Herbario y Jardín Botánico - HJB",
      "popupContent": '<b>Herbario y Jardín Botánico - HJB</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/HUB.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/HJB.jpg",
      "info": "https://plantafisica.buap.mx/content/herbario-y-jard%C3%ADn-bot%C3%A1nico",
      "ruta": "https://maps.app.goo.gl/hfkd4csAgqowqVjU9",
      "recorrido": "https://recorridosvirtuales.buap.mx/jardin-botanico/",
      "botones":[
        {
          "name": "HUB1",
          "left": "54%",
          "top": "27%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/HUB/HJB.jpg",        
        },
      ],
      "botonesBici":[
      ],
      "botonesBus":[
        {
          "name": "HUBBUS1",
          "left": "44.5%",
          "top": "69%",
          "url": "https://plantafisica.buap.mx/content/herbario-y-jard%C3%ADn-bot%C3%A1nico-lobobus",
          "size": "2",
        },
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [76.640625, 31.988302]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Museo de la Computación",
      "popupContent": '<b>Museo de la Computación</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/MUSEO.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/MUSEO.jpg",
      "info": "https://plantafisica.buap.mx/content/museo-de-la-computaci%C3%B3n",
      "ruta": "https://maps.app.goo.gl/2eQkSSQE2iYfFcrdA",
      "botones":[
        {
          "name": "MUSEO1",
          "left": "62%",
          "top": "80%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/MUSEOC/MUSEO.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "MUSEOBICI1",
          "left": "50%",
          "top": "25%",
          "url": "https://plantafisica.buap.mx/content/museo-de-la-computaci%C3%B3n-lobobici",
          "size": "1",
        },
        {
          "name": "MUSEOBICI2",
          "left": "60%",
          "top": "39%",
          "url": "https://plantafisica.buap.mx/content/museo-de-la-computaci%C3%B3n-lobobici",
          "size": "1",
        }
      ],
      "botonesBus":[
        {
          "name": "MUSEOBUS1",
          "left": "56%",
          "top": "48.1%",
          "url": "https://plantafisica.buap.mx/content/museo-de-la-computaci%C3%B3n-lobobus",
          "size": "1",
        },
        {
          "name": "MUSEOBUS2",
          "left": "69%",
          "top": "71.9%",
          "url": "https://plantafisica.buap.mx/content/museo-de-la-computaci%C3%B3n-lobobus",
          "size": "1",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [40.253906, -52.133314]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Secretaría Administrativa - Tienda BUAP",
      "popupContent": '<b>Secrataría Administrativa - Tienda BUAP</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/TIENDA.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/TIENDA.jpg",
      "info": "https://plantafisica.buap.mx/content/secretar%C3%ADa-administrativa-tienda-buap",
      "ruta": "https://maps.app.goo.gl/VVqtcvT8RGcNmney5",
      "botones":[
        {
          "name": "TIENDA1",
          "left": "32%",
          "top": "58%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/TIENDA/TIENDA.jpg",        
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
        {
          "name": "TIENDABUS1",
          "left": "42.5%",
          "top": "46.5%",
          "url": "https://plantafisica.buap.mx/content/secretar%C3%ADa-administrativa-tienda-buap-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [69.125977, 14.944056]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Teatro al Aire Libre - TAL",
      "popupContent": '<b>Teatrio al Aire Libre - TAL</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/TAL.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/TAL.jpg",
      "info": "https://plantafisica.buap.mx/content/teatro-al-aire-libre",
      "ruta": "https://maps.app.goo.gl/LLdmmE7J1jdfwn7N9",
      "recorrido": "https://recorridosvirtuales.buap.mx/multiaulas-lago/",
      "botones":[
        {
          "name": "TAL1",
          "left": "30%",
          "top": "32%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/TAL/TAL.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "TALBICI1",
          "left": "44%",
          "top": "24.5%",
          "url": "https://plantafisica.buap.mx/content/teatro-al-aire-libre-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-53.151855, 34.324893]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Torre General Académica y Servicios Administrativos - TGA",
      "popupContent": '<b>Torre General Académica y Servicios Administrativos - TGA</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/TGA.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/TGA.jpg",
      "info": "https://plantafisica.buap.mx/content/torre-de-gesti%C3%B3n-acad%C3%A9mica-y-servicios-administrativos",
      "ruta": "https://maps.app.goo.gl/zgrUWdAsYuGkb42D7",
      "botones":[
        {
          "name": "TGA1",
          "left": "69.5%",
          "top": "48%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/TGA/TGA.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "TGABICI1",
          "left": "24%",
          "top": "17%",
          "url": "https://plantafisica.buap.mx/content/torre-de-gesti%C3%B3n-acad%C3%A9mica-y-servicios-administrativos-lobobici",
          "size": "3",
        },
        {
          "name": "TGABICI2",
          "left": "57%",
          "top": "78%",
          "url": "https://plantafisica.buap.mx/content/torre-de-gesti%C3%B3n-acad%C3%A9mica-y-servicios-administrativos-lobobici",
          "size": "3",
        }
      ],
      "botonesBus":[
        {
          "name": "TGABUS1",
          "left": "71%",
          "top": "17%",
          "url": "https://plantafisica.buap.mx/content/torre-de-gesti%C3%B3n-acad%C3%A9mica-y-servicios-administrativos-lobobus",
          "size": "3",
        },
        {
          "name": "TGABUS2",
          "left": "43%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/torre-de-gesti%C3%B3n-acad%C3%A9mica-y-servicios-administrativos-lobobus",
          "size": "3",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-16.259766, 28.76675]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Unidad de Seminarios - US",
      "popupContent": '<b>Unidad de Seminarios - US</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ADMINISTRATIVOS/US.jpg",
      "minimap": "assets/images/imgs/mapas/ADMINISTRATIVOS/US.jpg",
      "info": "https://plantafisica.buap.mx/content/unidad-de-seminarios",
      "ruta": "https://maps.app.goo.gl/gSekBYu1yjxTsepPA",
      "recorrido": "https://recorridosvirtuales.buap.mx/dasu/",
      "botones":[
        {
          "name": "US1",
          "left": "70%",
          "top": "40%",
          "nivel": "assets/images/imgs/niveles/ADMINISTRATIVOS/US/US.jpg",        
        }
      ],
      "botonesBici":[
        {
          "name": "USBICI1",
          "left": "48%",
          "top": "39%",
          "url": "https://plantafisica.buap.mx/content/unidad-de-seminarios-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "USBUS1",
          "left": "23.5%",
          "top": "77.5%",
          "url": "https://plantafisica.buap.mx/content/unidad-de-seminarios-lobobus",
          "size": "2",
        },
        {
          "name": "USBUS2",
          "left": "61%",
          "top": "27%",
          "url": "https://plantafisica.buap.mx/content/unidad-de-seminarios-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [57.128906, -34.885921]
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
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-0",
      "ruta": "https://maps.app.goo.gl/JTAR3vshtLp6o3QG9",
      "recorrido": "https://recorridosvirtuales.buap.mx/multiaulas-lago/",
      "botones":[
        {
          "name": "EMA1",
          "left": "24%",
          "top": "73.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA1.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMA1BICI1",
          "left": "9%",
          "top": "17%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobici",
          "size": "2",
        },
        {
          "name": "EMA1BICI2",
          "left": "14%",
          "top": "71%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobici",
          "size": "2",
        },
        {
          "name": "EMA1BICI3",
          "left": "54.5%",
          "top": "78%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobici",
          "size": "2",
        },
        {
          "name": "EMA1BICI4",
          "left": "67.5%",
          "top": "71%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobici",
          "size": "2",
        },
        {
          "name": "EMA1BICI5",
          "left": "84%",
          "top": "22%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "EMA1BUS1",
          "left": "14.7%",
          "top": "31%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobus",
          "size": "2",
        },
        {
          "name": "EMA1BUS2",
          "left": "52.5%",
          "top": "67.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobus",
          "size": "2",
        },
        {
          "name": "EMA1BUS3",
          "left": "61.5%",
          "top": "5.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema1-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-58.007813, 39.42691]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA2",
      "popupContent": '<b>EMA2</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMA2.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA2.jpg",
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema2-0",
      "ruta": "https://maps.app.goo.gl/xFjQdKQZUPnEH1KU9",
      "recorrido": "https://recorridosvirtuales.buap.mx/arquitectura",
      "botones":[
        {
          "name": "EMA2",
          "left": "62%",
          "top": "30%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA2.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMA2BICI1",
          "left": "22%",
          "top": "13.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema2-lobobici",
          "size": "2",
        },
        {
          "name": "EMA2BICI2",
          "left": "71%",
          "top": "21%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema2-lobobici",
          "size": "2",
        },
        {
          "name": "EMA2BICI3",
          "left": "85%",
          "top": "13.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema2-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "EMA2BUS1",
          "left": "67.5%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema2-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-46.40625, 34.734331]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA3",
      "popupContent": '<b>EMA3</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMA3.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA3.jpg",
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-0",
      "ruta": "https://maps.app.goo.gl/LXVFChSLc5LRZfT78",
      "recorrido": "https://recorridosvirtuales.buap.mx/fisico-matematicas/",
      "botones":[
        {
          "name": "EMA3",
          "left": "28%",
          "top": "52%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA3.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMA3BICI2",
          "left": "11%",
          "top": "88%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobici",
          "size": "2",
        },
        {
          "name": "EMA3BICI2",
          "left": "28%",
          "top": "79%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobici",
          "size": "2",
        },
        {
          "name": "EMA3BICI3",
          "left": "35%",
          "top": "28%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "EMA3BUS1",
          "left": "8.5%",
          "top": "12%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobus",
          "size": "2",
        },
        {
          "name": "EMA3BUS2",
          "left": "11%",
          "top": "77.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobus",
          "size": "2",
        },
        {
          "name": "EMA3BUS3",
          "left": "77.5%",
          "top": "82%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema3-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-35.947266, 50.174302]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA 4, 5  y 6",
      "popupContent": '<b>EMA 4, 5 y 6</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMAS.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMAS.jpg",
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema4-0",
      "ruta": "https://maps.app.goo.gl/H3hJSpT4imTBCBJKA",
      "recorrido": "https://recorridosvirtuales.buap.mx/caeto/",
      "botones":[
        {
          "name": "EMA4",
          "left": "36%",
          "top": "41.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA4.jpg",
        },
        {
          "name": "EMA5",
          "left": "37.5%",
          "top": "49%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA5.jpg",
        },
        {
          "name": "EMA6",
          "left": "34%",
          "top": "34%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA6.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMASBICI1",
          "left": "44%",
          "top": "36.5%",
          "url": "https://plantafisica.buap.mx/content/edificios-multiaulas-ema4-ema5-ema6-lobobici",
          "size": "2",
        },
        {
          "name": "EMASBICI2",
          "left": "55%",
          "top": "54%",
          "url": "https://plantafisica.buap.mx/content/edificios-multiaulas-ema4-ema5-ema6-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "EMASBUS1",
          "left": "12%",
          "top": "47%",
          "url": "https://plantafisica.buap.mx/content/edificios-multiaulas-ema4-ema5-ema6-lobobus",
          "size": "2",
        },
        {
          "name": "EMASBUS2",
          "left": "72%",
          "top": "61%",
          "url": "https://plantafisica.buap.mx/content/edificios-multiaulas-ema4-ema5-ema6-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [3.22998, -29.213004]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA7",
      "popupContent": '<b>EMA7</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMA7.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA7.jpg",
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema7",
      "ruta": "https://maps.app.goo.gl/S7gZ8Prx64BnvQ52A",
      "recorrido": "https://recorridosvirtuales.buap.mx/dasu/",
      "botones":[
        {
          "name": "EMA7",
          "left": "61%",
          "top": "50%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA7.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMA7BICI1",
          "left": "43.5%",
          "top": "25.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema7-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "EMA7BUS1",
          "left": "6%",
          "top": "80.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema7-lobobus",
          "size": "2",
        },
        {
          "name": "EMA7BUS2",
          "left": "69%",
          "top": "11%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema7-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [54.140625, -40.445781]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "EMA8",
      "popupContent": '<b>EMA8</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/EMA8.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/EMA8.jpg",
      "info": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema8-0",
      "ruta": "https://maps.app.goo.gl/QbhyoSKzpFmb9ZQr8",
      "recorrido": "https://recorridosvirtuales.buap.mx/administracion/",
      "botones":[
        {
          "name": "EMA8",
          "left": "37%",
          "top": "28%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/EMAS/EMA8.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "EMA8BICI1",
          "left": "3.5%",
          "top": "20%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema8-lobobici",
          "size": "3",
        },
        {
          "name": "EMA8BICI2",
          "left": "59.5%",
          "top": "88.5%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema8-lobobici",
          "size": "3",
        }
      ],
      "botonesBus":[
        {
          "name": "BUS1",
          "left": "36%",
          "top": "10%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema8-lobobus",
          "size": "3",
        },
        {
          "name": "BUS2",
          "left": "79%",
          "top": "85%",
          "url": "https://plantafisica.buap.mx/content/edificio-multiaulas-ema8-lobobus",
          "size": "3",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [0.351563, 56.38957]
    }
  },
];

var institutosGeoJSON = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias - ICUAP1-4",//ICUAP1-4
      "popupContent": '<b>Instituto de Ciencias</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ICUAP.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ICUAP.jpg",
      "info": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-ic",
      "ruta": "https://maps.app.goo.gl/PukDteTXARDn46gJ8",
      "recorrido": "https://recorridosvirtuales.buap.mx/icuap",
      "botones":[
        {
          "name": "ICUAP1",
          "left": "68%",
          "top": "35.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP1.jpg",
        },
        {
          "name": "ICUAP2",
          "left": "18%",
          "top": "24%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP2.jpg",
        },
        {
          "name": "ICUAP3",
          "left": "52%",
          "top": "17%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP3.jpg",
        },
        {
          "name": "ICUAP4",
          "left": "61%",
          "top": "23%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP4.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ICUAP1BICI1",
          "left": "82.5%",
          "top": "56%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "3",
        }
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-97.646484, 58.799143]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias - ICUAP5-6",//ICUAP5-6
      "popupContent": '<b>Instituto de Ciencias</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ICUAP5.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ICUAP5.jpg",
      "info": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-ic",
      "ruta": "https://maps.app.goo.gl/uZ1sC5fbBYX2yDP89",
      "recorrido": "https://recorridosvirtuales.buap.mx/computacion/",
      "botones":[
        {
          "name": "ICUAP5",
          "left": "46%",
          "top": "39%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP5.jpg",
        },
        {
          "name": "ICUAP6",
          "left": "39%",
          "top": "50%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP6.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ICUAP5BICI1",
          "left": "17.5%",
          "top": "49%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        },
        {
          "name": "ICUAP5BICI2",
          "left": "25%",
          "top": "49%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        },
        {
          "name": "ICUAP5BICI3",
          "left": "75%",
          "top": "21%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        },
        {
          "name": "ICUAP5BICI4",
          "left": "82%",
          "top": "76.5%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ICUAP5BUS1",
          "left": "82%",
          "top": "37.5%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-79.277344, 50.762336]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias - ICUAP7-10",//ICUAP7-10
      "popupContent": '<b>Instituto de Ciencias</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ICUAP2.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ICUAP2.jpg",
      "info": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-ic",
      "ruta": "https://maps.app.goo.gl/UMidvgY4EdWMVJtk6",
      "recorrido": "https://recorridosvirtuales.buap.mx/biologia/",
      "botones":[
        {
          "name": "ICUAP7",
          "left": "41%",
          "top": "34.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP7.jpg",
        },
        {
          "name": "ICUAP8",
          "left": "54.5%",
          "top": "35%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP8.jpg",
        },
        {
          "name": "ICUAP9",
          "left": "54%",
          "top": "44.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP9.jpg",
        },
        {
          "name": "ICUAP10",
          "left": "42%",
          "top": "44.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP10.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ICUAP7BICI1",
          "left": "68.5%",
          "top": "20.5%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ICUAP7BUS1",
          "left": "3.5%",
          "top": "21%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        },
        {
          "name": "ICUAP7BUS2",
          "left": "51%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-0.527344, 34.163456]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias - ICUAP12",//ICUAP12
      "popupContent": '<b>Instituto de Ciencias</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ICUAP12.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ICUAP12.jpg",
      "info": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-ic",
      "ruta": "https://maps.app.goo.gl/EA4CJcGZ7iMvUKbS6",
      "recorrido": "https://recorridosvirtuales.buap.mx/dasu/",
      "botones":[
        {
          "name": "ICUAP12",
          "left": "50%",
          "top": "41%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP12.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ICUAP12BICI1",
          "left": "44%",
          "top": "26%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ICUAP12BUS1",
          "left": "6%",
          "top": "81%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        },
        {
          "name": "ICUAP12BUS2",
          "left": "68.5%",
          "top": "11%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        }
      ],    
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [50.625, -37.998094]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Ciencias - ICUAP11 y 13",//ICUAP11Y13
      "popupContent": '<b>Instituto de Ciencias</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/ICUAP11.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/ICUAP11.jpg",
      "info": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-ic",
      "ruta": "https://maps.app.goo.gl/93QPT84wi626FryH7",
      "recorrido": "https://recorridosvirtuales.buap.mx/caale/",
      "botones":[
        {
          "name": "ICUAP11",
          "left": "56%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP11.jpg",
        },
        {
          "name": "ICUAP13",
          "left": "44%",
          "top": "20%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/ICUAP/ICUAP13.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "ICUAP11BICI1",
          "left": "4.2%",
          "top": "60%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "ICUAP11BUS1",
          "left": "22%",
          "top": "6%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        },
        {
          "name": "ICUAP11BUS2",
          "left": "12%",
          "top": "61%",
          "url": "https://plantafisica.buap.mx/content/icuap-instituto-de-ciencias-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [65.610352, 57.039025]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "IFUAP / Instituto de Física - IF",
      "popupContent": '<b>IFUAP / Instituto de Física</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/IF.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/IF.jpg",
      "info": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%c3%adsica-if",
      "ruta": "https://maps.app.goo.gl/HMHtqTQLeBj8M2xe6",
      "recorrido": "https://recorridosvirtuales.buap.mx/fisico-matematicas/",
      "botones":[
        {
          "name": "IF1",
          "left": "41%",
          "top": "33%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IF/IF_1.jpg",
        },
        {
          "name": "IF2",
          "left": "40%",
          "top": "46%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IF/IF_2.jpg",
        },
        {
          "name": "IF3",
          "left": "21%",
          "top": "30%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IF/IF_3.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "IFBICI1",
          "left": "22%",
          "top": "76%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobici",
          "size": "2",
        },
        {
          "name": "IFBICI2",
          "left": "27%",
          "top": "26%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobici",
          "size": "2",
        },
        {
          "name": "IFBICI3",
          "left": "83%",
          "top": "24%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobici",
          "size": "2",
        },
        {
          "name": "IFBICI4",
          "left": "5%",
          "top": "84%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobici",
          "size": "2",
        }
      ],
      "botonesBus":[
        {
          "name": "IFBUS1",
          "left": "4%",
          "top": "10.5%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobus",
          "size": "2",
        },
        {
          "name": "IFBUS2",
          "left": "5.5%",
          "top": "74%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobus",
          "size": "2",
        },
        {
          "name": "IFBUS3",
          "left": "70%",
          "top": "79%",
          "url": "https://plantafisica.buap.mx/content/ifuap-instituto-de-f%C3%ADsica-lobobus",
          "size": "2",
        }
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-27.421875, 51.968253]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Instituto de Fisiología - IFI",
      "popupContent": '<b>Instituto de Fisiología</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "assets/images/imgs/modal/ACADEMICOS/IFI.jpg",
      "minimap": "assets/images/imgs/mapas/ACADEMICOS/IFI.jpg",
      "info": "https://plantafisica.buap.mx/content/instituto-de-fisiolog%c3%ada-ifi",
      "ruta": "https://maps.app.goo.gl/PukDteTXARDn46gJ8",
      "recorrido": "https://recorridosvirtuales.buap.mx/icuap",
      "botones":[
        {
          "name": "IFI1",
          "left": "51%",
          "top": "31.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IFI/IFI1.jpg",
        },
        {
          "name": "IFI2",
          "left": "49%",
          "top": "37.5%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IFI/IFI2.jpg",
        },
        {
          "name": "IFI3",
          "left": "38.5%",
          "top": "28%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IFI/IFI3.jpg",
        },
        {
          "name": "IFI4",
          "left": "31.5%",
          "top": "17%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IFI/IFI4.jpg",
        },
        {
          "name": "IFI5",
          "left": "45.5%",
          "top": "17%",
          "nivel": "assets/images/imgs/niveles/ACADEMICO/IFI/IFI5.jpg",
        }
      ],
      "botonesBici":[
        {
          "name": "IFIBICI1",
          "left": "83%",
          "top": "56%",
          "url": "https://plantafisica.buap.mx/content/instituto-de-fisiolog%C3%ADa-lobobici",
          "size": "3",
        }
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-104.589844, 57.278304]
    }
  },
];

var accesosGeoJson = [
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 1",
      "popupContent": '<b>Puerta 1 - Entrada/Salida Peatonal y Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/nezwikouXCLGNYXm9",
      "botones":[
        {
          "name": "P1",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P1.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [92.988281, 56.318445]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 2",
      "popupContent": '<b>Puerta 2 - Entrada/Salida Peatonal y Vehicular de Universitarios Proveedores y Concesionarios</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/igrqCoTGhukAoWmg7",
      "botones":[
        {
          "name": "P2",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P2.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [92.175293, -14.498006]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 3",
      "popupContent": '<b>Puerta 3 - Entrada/Salida Peatonal y Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/eUGY8b7ZQ8q7ZTix9",
      "botones":[
        {
          "name": "P3",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P3.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-4.482422, -43.004578]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 4",
      "popupContent": '<b>Puerta 4 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/cbpQqY3AZK8iY5A9A",
      "botones":[
        {
          "name": "P4",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P4.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-33.75, -16.130534]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 5",
      "popupContent": '<b>Puerta 5 - Entrada/Salida Vehicular Universitarios</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/6v6EMjrPayUGenpk9",
      "botones":[
        {
          "name": "P5",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P5.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-57.854004, 12.769199]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 6",
      "popupContent": '<b>Puerta 6 - Entrada/Salida Vehicular Universitarios</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/43QV8x6tk7Yg8sVW7",
      "botones":[
        {
          "name": "P6",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P6.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-41.85791, 15.897931]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 7",
      "popupContent": '<b>Puerta 7 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/kmxSHxLsUqMUtCc67",
      "botones":[
        {
          "name": "P7",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P7.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-56.162109, 17.854524]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 9",
      "popupContent": '<b>Puerta 9 - Entrada/Salida Peatonal y Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/nc6X8dM3Wt69Z54g8",
      "botones":[
        {
          "name": "P9",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P9.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-96.437988, 50.289211]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 10",
      "popupContent": '<b>Puerta 10 - Entrada/Salida Peatonal y Salida Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/WqmV4KQuhQjPEvQh8",
      "botones":[
        {
          "name": "P10",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P10.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-92.592773, 59.442044]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 11",
      "popupContent": '<b>Puerta 11 - Entrada Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/brhrcZ3aeThHPKMT7",
      "botones":[
        {
          "name": "P11",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P11.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-92.504883, 61.773056]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 12",
      "popupContent": '<b>Puerta 12 - Entrada/Salida Peatonal y Entrada Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/toz24BwQ8Tk9fMGZA",
      "botones":[
        {
          "name": "P12",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P12.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-76.816406, 59.315218]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 13",
      "popupContent": '<b>Puerta 13 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/gP9j9cXpGq1JZ6bt5",
      "botones":[
        {
          "name": "P13",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P13.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-43.659668, 59.678877]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 14",
      "popupContent": '<b>Puerta 14 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/Ti9xN5bQ9QYYbKMN7",
      "botones":[
        {
          "name": "P14",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P14.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [2.768555, 59.855839]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 15",
      "popupContent": '<b>Puerta 15 - Salida Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/5RffZ5ubZjC4gWhr8",
      "botones":[
        {
          "name": "P15",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P15.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [44.230957, 59.712002]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 16",
      "popupContent": '<b>Puerta 16 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/wKJy8w4T763q7Khq9",
      "botones":[
        {
          "name": "P16",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P16.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [53.173828, 59.700782]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 17",
      "popupContent": '<b>Puerta 17 - Entrada/Salida Peatonal y Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/mftdnyYW1xYwXJZW7",
      "botones":[
        {
          "name": "P17",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P17.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [82.683105, 59.667979]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 18",
      "popupContent": '<b>Puerta 18 - Entrada/Salida Peatonal</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/i1VoyCfL8gkd9brq9",
      "botones":[
        {
          "name": "P18",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P18.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-41.638184, -15.538353]
    }
  },
  {
    "type": "Feature",
    "properties":{ // Datos extra sobre el lugar(bindPopup y modal)
      "name": "Puerta 19",
      "popupContent": '<b>Puerta 19 - Entrada/Salida Vehicular</b> <div><button type="button" onclick="markerOnClick()" class="btn-marker">DETALLES</button> </div>',
      "modal": "",
      "minimap": "",
      "info": "",
      "ruta": "https://maps.app.goo.gl/3L6BxMLv8xfj6YuN7",
      "botones":[
        {
          "name": "P19",
          "left": "",
          "top": "",
          "nivel": "assets/images/imgs/puertas/P19.jpg",
        }
      ],
      "botonesBici":[
      ],
      "botonesBus":[
      ],
    },
    "geometry": { //  Datos sobe el marcador, como posición.
      "type": "Point",
      "coordinates": [-59.282227, -35.116844]
    }
  },
];

