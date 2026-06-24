var menuAct = false;

function menu_visibility(){
    if(menuAct == false){
        document.getElementById("control-overlay").className = "menu-visible";
        menuAct = true;
    }else{
        document.getElementById("control-overlay").className = "menu-hidden";
        menuAct = false;
        document.getElementById("submenuICSH").innerHTML = "";
        document.getElementById("submenuART").innerHTML = "";
        document.getElementById("submenuFL").innerHTML = "";
        document.getElementById("submenuPSI").innerHTML = "";
        document.getElementById("submenuZAP").innerHTML = "";
        document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
    }
    
}
