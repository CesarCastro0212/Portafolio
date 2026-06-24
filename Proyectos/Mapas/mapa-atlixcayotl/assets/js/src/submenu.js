var button;
var activoGral = false;
var submenuCHS = false;
var submenuEA = false;
var submenuDEPENDENCIAS = false;
var submenuMULTIAULAS = false;
var submenuACCESOS = false;

function submenu(areaName){
    
    switch(areaName){
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuCSH").appendChild(button);
                }
                submenuCHS = true;
                document.getElementById("submenuEA").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
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
                                    layer._popup.setLatLng(layer._latlng).openOn(map);
                                }                            
                            }
                        })
                    })
                    document.getElementById("submenuEA").appendChild(button);
                }
                submenuEA = true;
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
                document.getElementById("submenuMULTIAULAS").innerHTML = "";
                document.getElementById("submenuACCESOS").innerHTML = "";
            }
            else{
                document.getElementById("submenuEA").innerHTML = "";
                submenuEA = false;
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
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
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
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
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
                document.getElementById("submenuCSH").innerHTML = "";
                document.getElementById("submenuEA").innerHTML = "";
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