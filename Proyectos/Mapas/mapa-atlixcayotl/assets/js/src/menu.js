var menuAct = false

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
    }
    
}
