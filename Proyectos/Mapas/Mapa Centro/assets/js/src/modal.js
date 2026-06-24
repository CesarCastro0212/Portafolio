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
  urlRuta = featureProperties.ruta;
  modalTitle.innerText = featureProperties.name;
  modalAcces.style.display = "block";
  nivelImgSrc.src = srcImgAcces;
}
/*Close modal image*/
modalCloseBtnImg.addEventListener("click", function(evt) {
  modalLevel.style.display = "none";  
});

function buttonInformation(){  
  window.open(urlInfo,"_self");
}
function buttonRuta(){  
  window.open(urlRuta);return false;
}
window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none";
  }
}
function buttonRecorrido(){  
  window.open(urlRecorrido,"_self");
}