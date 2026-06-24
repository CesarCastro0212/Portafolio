var button;
var activoGral = false;
var submenuENF = false;
var submenuEST = false;
var submenuMED = false;
var submenuICE = false;
var submenuDEPENDENCIAS = false;
var submenuMULTIAULAS = false;
var submenuINSTITUTOS = false;
var submenuACCESOS = false;

function submenu(areaName){
    switch(areaName){
        case "Enfermería":
            if(submenuENF == false){
                for(const facult of enfGeoJSON){
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuENF").appendChild(button);
                }
                submenuENF = true;
                document.getElementById("submenuEST").innerHTML = "";
                document.getElementById("submenuMED").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuENF").innerHTML = "";
                submenuENF = false;
            }
        break;
        case "Estomatología":
            if(submenuEST == false){
                for(const facult of estGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGreen");
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuEST").appendChild(button);
                }
                submenuEST = true;
                document.getElementById("submenuENF").innerHTML = "";
                document.getElementById("submenuMED").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuEST").innerHTML = "";
                submenuEST = false;
            }
        break;
        case "Medicina":
            if(submenuMED == false){
                for(const facult of medGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuGreen");
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuMED").appendChild(button);
                }
                submenuMED = true;
                document.getElementById("submenuENF").innerHTML = "";
                document.getElementById("submenuEST").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuMED").innerHTML = "";
                submenuMED = false;
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuDEPENDENCIAS").appendChild(button);
                }
                submenuDEPENDENCIAS = true;
                document.getElementById("submenuENF").innerHTML = "";
                document.getElementById("submenuEST").innerHTML = "";
                document.getElementById("submenuMED").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuMULTIAULAS").appendChild(button);
                }
                submenuMULTIAULAS = true;
                document.getElementById("submenuENF").innerHTML = "";
                document.getElementById("submenuEST").innerHTML = "";
                document.getElementById("submenuMED").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                submenuMULTIAULAS = false;
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuACCESOS").appendChild(button);
                }
                submenuACCESOS = true;
                document.getElementById("submenuENF").innerHTML = "";
                document.getElementById("submenuEST").innerHTML = "";
                document.getElementById("submenuMED").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuACCESOS").innerHTML = "";
                submenuACCESOS = false;
            }
        break;
    }
    
}