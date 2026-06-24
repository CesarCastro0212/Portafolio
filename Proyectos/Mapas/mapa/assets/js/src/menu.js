var menuAct = false;

function menu_visibility(){
    console.log("muestrate");
    if(menuAct == false){
        document.getElementById("control-overlay").className = "menu-visible";
        menuAct = true;
        console.log("visible");
    }else{
        document.getElementById("control-overlay").className = "menu-hidden";
        menuAct = false;
        console.log("hidden");
        document.getElementById("submenuCNS").innerHTML = "";
        document.getElementById("submenuCSH").innerHTML = "";
        document.getElementById("submenuEA").innerHTML = "";
        document.getElementById("submenuICE").innerHTML = "";
        document.getElementById("submenuDEPENDENCIAS").innerHTML = "";
        document.getElementById("submenuMULTIAULAS").innerHTML = "";
        document.getElementById("submenuINSTITUTOS").innerHTML = "";
        document.getElementById("submenuACCESOS").innerHTML = "";
    }
    
}
