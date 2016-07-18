 var calculadora = (function(){
    var botons, pantalla;
     
    function privateInitApp(){
        // carrego botons
        botons = document.getElementsByTagName("li");
        pantalla = document.getElementById("pantalla");
        
        for(var i=0; i<botons.length; i++){
            botons[i].addEventListener("click",premerTecla);
        }
    }
    
    function premerTecla(e){
        var tecla = e.currentTarget.innerHTML;
        pantalla.innerHTML = pantalla.innerHTML + tecla;
//        alert(tecla);
    }
     
    return {
        initApp: privateInitApp
    };
 })();

window.addEventListener("load", calculadora.initApp);
