var modal = document.getElementById("myModal");
var modalLevel = document.getElementById("modal-level");
var modalAcces = document.getElementById("modal-acces");
var modalCloseBtnImg = document.getElementsByClassName("modal-close")[0];
var modalCloseBtnAcces = document.getElementsByClassName("modal-close-acces")[0];
var div = document.querySelector(".btn");
var urlInfo;
var urlRecorrido;
var img;
var btn;

function levels(featureProperties) {
  var srcImgLevel = featureProperties.botones[0]["nivel"];
  urlInfo      = featureProperties.info;
  urlRuta      = featureProperties.ruta;
  urlRecorrido = featureProperties.recorrido;

  // Rellena el nombre del edificio en el header azul marino
  document.querySelector(".modal-title").innerText = featureProperties.name;

  // Muestra el modal y carga la imagen de niveles
  document.getElementById("level").src = srcImgLevel;
  document.getElementById("modal-level").style.display = "block";
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

function createButton(featureProperties){
  for(const button of featureProperties.botones){
    btn = document.createElement("button");
    var nivelSrc = button["nivel"];
    btn.setAttribute("class", "button-modal")
    btn.src = nivelSrc;
    btn.style.left = button["left"];
    btn.style.top = button["top"];
    btn.addEventListener("click", function(e){
    levels(button["nivel"]);
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


/*Close modal image*/
modalCloseBtnImg.addEventListener("click", function(evt) {
  modalLevel.style.display = "none";  
});
/*Close modal acces*/
modalCloseBtnAcces.addEventListener("click", function(evt) {
  modalAcces.style.display = "none";
});

/*Close modal*/
// modalCloseBtn.addEventListener("click", function(evt) {
//   modal.style.display = "none";
//   document.getElementById("modal-img-container").removeChild(img);  
//   document.getElementById("modal-img-minimap").innerHTML = "";  
// });

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