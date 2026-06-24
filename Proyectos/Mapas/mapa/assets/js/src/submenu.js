var button;
var activoGral = false;
var submenuCSN = false;
var submenuCHS = false;
var submenuEA = false;
var submenuICE = false;
var submenuDEPENDENCIAS = false;
var submenuMULTIAULAS = false;
var submenuINSTITUTOS = false;
var submenuACCESOS = false;

function submenu(areaName){
    
    console.log(areaName);
    switch(areaName){
        case "Ciencias Naturales y de la Salud":
            if(submenuCSN == false){
                for(const facult of cnsGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGreen");
                    button.classList.add("subMenu"); // Este atributo se pierde, para añadir clases usa button.classList.add("classname")
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuCNS").appendChild(button);
                }
                submenuCSN = true;
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuCNS").innerHTML = "";
                
                submenuCSN = false;
            }
        break;
        case "Ciencias Sociales y Humanidades":
            if(submenuCHS == false){
                for(const facult of cshGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuPink");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuCSH").appendChild(button);
                }
                submenuCHS = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuCSH").innerHTML = "";
                submenuCHS = false;
            }
        break;
        case "Economico Administrativo":
            if(submenuEA == false){
                for(const facult of eaGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuYellow");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuEA").appendChild(button);
                }
                submenuEA = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuEA").innerHTML = "";
                submenuEA = false;
            }
        break;
        case "Ingeniería y Ciencias Exactas":
            if(submenuICE == false){
                for(const facult of iceGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuOrange");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuICE").appendChild(button);
                }
                submenuICE = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuICE").innerHTML = "";
                submenuICE = false;
            }
        break;
        case "Dependencias":
            if(submenuDEPENDENCIAS == false){
                for(const facult of dependenciasGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGrey");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuDEPENDENCIAS").appendChild(button);
                }
                submenuDEPENDENCIAS = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                submenuDEPENDENCIAS = false;
            }
        break;
        case "Edificios Multiaulas":
            if(submenuMULTIAULAS == false){
                for(const facult of emasGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGrey");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuMULTIAULAS").appendChild(button);
                }
                submenuMULTIAULAS = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                submenuMULTIAULAS = false;
            }
        break;
        case "Institutos":
            if(submenuINSTITUTOS == false){
                for(const facult of institutosGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGrey");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuINSTITUTOS").appendChild(button);
                }
                submenuINSTITUTOS = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
                submenuINSTITUTOS = false;
            }
        break;
        case "Accesos":
            if(submenuACCESOS == false){
                for(const facult of accesosGeoJson){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGrey");
                    button.classList.add("subMenu");
                    let propiedades = facult["properties"];
                    button.innerText = propiedades["name"];
                    button.addEventListener("click",function(e){
                        map.eachLayer((layer) => {
                            if (layer._popup) {
                                popup_content = layer._popup._content;

                                // Si el contenido de los popup cambia, esto puede dejar de funcionar.
                                let name = popup_content.split("\n")[0];
                                name = name.substring(3, name.length - 5);

                                if(propiedades["name"] === name) {
                                    console.log(layer);
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuACCESOS").appendChild(button);
                }
                submenuACCESOS = true;
                document.getElementById("submenuCNS").innerHTML = "";
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuICE").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuINSTITUTOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuACCESOS").innerHTML = "";
                submenuACCESOS = false;
            }
        break;
    }
    
}

function prueba(nombre){
    console.log(nombre);
}