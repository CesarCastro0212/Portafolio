var modal = document.getElementById("myModal");
var modalLevel = document.getElementById("modal-level");
var modalAcces = document.getElementById("modal-acces");
var modalCloseBtn = document.getElementsByClassName("modal-close")[0];
var modalCloseBtnImg = document.getElementsByClassName("modal-close-img")[0];
var modalCloseBtnAcces = document.getElementsByClassName("modal-close-acces")[0];
var div = document.querySelector(".btn");
var urlInfo;
var urlRuta;
var urlRecorrido;
var img;
var imgMinimap;
var btn;
var btnBici;
var btnBus;

function markerOnClick(featureProperties) {
  // Con featureProperties.<propiedad> se obtiene el dato que se necesite, 
  // <propiedad> es el mismo nombre que se le dió en markers.js dentro de
  // properties.
  // No debería haber más de un modal en la página.
  // var modalContent = document.getElementsByClassName("modal-content")[0];
  var modalTitle = document.getElementsByClassName("modal-title")[0];
  img = document.createElement("img");
  imgMinimap = document.createElement("img");
  var imgSrc = featureProperties.modal;
  var imgSrcMinimap = featureProperties.minimap;
  
  img.src = imgSrc;
  imgMinimap.src = imgSrcMinimap;
  img.classList.add("modalimg");
  imgMinimap.classList.add("imgMinimapa");
  document.getElementById("modal-img-container").appendChild(img);
  document.getElementById("modal-img-minimap").appendChild(imgMinimap);
  urlInfo = featureProperties.info;
  urlRuta = featureProperties.ruta;
  urlRecorrido = featureProperties.recorrido;
  modalTitle.innerText = featureProperties.name;
  modal.style.display = "block";

  createButton(featureProperties);
  createButtonBici(featureProperties);
  createButtonBus(featureProperties);
  
}

function createButton(featureProperties){
  for(const button of featureProperties.botones){
    btn = document.createElement("button");
    var nivelSrc = button["nivel"];
    btn.setAttribute("class", "button-modal")
    btn.src = nivelSrc;
    btn.style.left = button["left"];
    btn.style.top = button["top"];
    btn.addEventListener("click", function(e){
    levels(button["nivel"]);// fn para crear modal img
    })
    div.appendChild(btn);
  }
}

function createButtonBici(featureProperties){
  for(const button of featureProperties.botonesBici){
    btnBici = document.createElement("button");    
    var biciSize = button["size"];

    switch(biciSize){
      case "1":
        btnBici.setAttribute("class","btnBICIChico");    
        break;
      case "2":
        btnBici.setAttribute("class","btnBICINormal");    
        break;
      case "3":
        btnBici.setAttribute("class","btnBICIGrande");    
        break;
    }
    btnBici.style.left = button["left"];
    btnBici.style.top = button["top"];
    btnBici.addEventListener("click", function(e){
      window.open(button["url"],"_self");
      })
    div.appendChild(btnBici);
  }
}
function createButtonBus(featureProperties){
  for(const button of featureProperties.botonesBus){
    btnBus = document.createElement("button");    
    var busSize = button["size"];

    switch(busSize){
      case "1":
        btnBus.setAttribute("class","btnBUSChico");    
        break;
      case "2":
        btnBus.setAttribute("class","btnBUSNormal");       
        break;
      case "3":
        btnBus.setAttribute("class","btnBUSGrande");    
        break;
    }
    btnBus.style.left = button["left"];
    btnBus.style.top = button["top"];
    btnBus.addEventListener("click", function(e){
      window.open(button["url"],"_self");
      })
    div.appendChild(btnBus);
  }
}

function levels(srcImgLevel){
  var nivelImgSrc = document.getElementById("level");
  modalLevel.style.display = "block";
  nivelImgSrc.src = srcImgLevel;
  console.log(nivelImgSrc);
}

function acces(featureProperties){
  var srcImgAcces = featureProperties.botones[0]["nivel"];
  urlRuta = featureProperties.ruta;
  var modalTitle = document.getElementsByClassName("title-acces")[0];  
  var nivelImgSrc = document.getElementById("acces");
  modalTitle.innerText = featureProperties.name;
  modalAcces.style.display = "block";
  nivelImgSrc.src = srcImgAcces;
}
/*Close modal image*/
modalCloseBtnImg.addEventListener("click", function(evt) {
  modalLevel.style.display = "none";
});
/*Close modal acces*/
modalCloseBtnAcces.addEventListener("click", function(evt) {
  modalAcces.style.display = "none";
});

/*Close modal*/
modalCloseBtn.addEventListener("click", function(evt) {
  modal.style.display = "none";
  document.getElementById("modal-img-container").removeChild(img);  
  document.getElementById("modal-img-minimap").innerHTML = "";  
});

function buttonInformation(){  
  window.open(urlInfo,"_self");
}
function buttonRuta(){  
  window.open(urlRuta);return false;
}
function buttonRecorrido(){  
  window.open(urlRecorrido,"_self");
}
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}