var menuAct = false

function menu_visibility(){
    if(menuAct == false){
        document.getElementById("control-overlay").className = "menu-visible";
        menuAct = true;
    }else{
        document.getElementById("control-overlay").className = "menu-hidden";
        menuAct = false;
    }
    
}
