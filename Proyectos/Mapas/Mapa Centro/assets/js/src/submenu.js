var button;
var activoGral = false;
var submenuICSH = false;
var submenuART = false;
var submenuFL = false;
var submenuPSI = false;
var submenuZAP = false;
var submenuDEPENDENCIAS = false;

function submenu(areaName){
    switch(areaName){
        case "Instituto de Ciencias Sociales y Humanidades":
            if(submenuICSH == false){
                for(const facult of icshGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuPink");
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
                    document.getElementById("submenuICSH").appendChild(button);
                }
                submenuICSH = true;
                document.getElementById("submenuART").innerHTML = "";
                document.getElementById("submenuFL").innerHTML = "";
                document.getElementById("submenuPSI").innerHTML = "";
                document.getElementById("submenuZAP").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuICSH").innerHTML = "";
                submenuICSH = false;
            }
        break;
        case "Facultad de Artes":
            if(submenuART == false){
                for(const facult of artGeoJSON){
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuART").appendChild(button);
                }
                submenuART = true;
                document.getElementById("submenuICSH").innerHTML = "";
                document.getElementById("submenuFL").innerHTML = "";
                document.getElementById("submenuPSI").innerHTML = "";
                document.getElementById("submenuZAP").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuART").innerHTML = "";
                submenuART = false;
            }
        break;
        case "Facultad de Filosofía y Letras":
            if(submenuFL == false){
                for(const facult of flGeoJSON){
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuFL").appendChild(button);
                }
                submenuFL = true;
                document.getElementById("submenuICSH").innerHTML = "";
                document.getElementById("submenuART").innerHTML = "";
                document.getElementById("submenuPSI").innerHTML = "";
                document.getElementById("submenuZAP").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuFL").innerHTML = "";
                submenuFL = false;
            }
        break;
        case "Facultad de Psicología":
            if(submenuPSI == false){
                for(const facult of psiGeoJSON){
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuPSI").appendChild(button);
                }
                submenuPSI = true;
                document.getElementById("submenuICSH").innerHTML = "";
                document.getElementById("submenuART").innerHTML = "";
                document.getElementById("submenuFL").innerHTML = "";
                document.getElementById("submenuZAP").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuPSI").innerHTML = "";
                submenuPSI = false;
            }
        break;
        case "Preparatoria Emiliano Zapata":
            if(submenuZAP == false){
                for(const facult of zapGeoJSON){
                    button = document.createElement("button");
                    button.setAttribute("class","subMenuBlue");
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
                    document.getElementById("submenuZAP").appendChild(button);
                }
                submenuZAP = true;
                document.getElementById("submenuICSH").innerHTML = "";
                document.getElementById("submenuART").innerHTML = "";
                document.getElementById("submenuFL").innerHTML = "";
                document.getElementById("submenuPSI").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
            }
            else{
                document.getElementById("submenuZAP").innerHTML = "";
                submenuZAP = false;
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
                document.getElementById("submenuICSH").innerHTML = "";
                document.getElementById("submenuART").innerHTML = "";
                document.getElementById("submenuFL").innerHTML = "";
                document.getElementById("submenuPSI").innerHTML = "";
                document.getElementById("submenuZAP").innerHTML = "";
            }
            else{
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                submenuDEPENDENCIAS = false;
            }
        break;
    }    
}