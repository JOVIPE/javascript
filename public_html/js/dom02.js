var dom02 = (function(){
    var nodeDiv01,nodeDiv02,nodeDiv03;
    
    function initModul(){
        
    nodeDiv01 = document.getElementById("div01");
    // como se puede cargar nodeDiv01 de distintas formas
    //nodeDiv01 = document.getElementByTagName("div")[0];
    //nodeDiv01 = document.QuerySelector("#div01");
    //nodeDiv01 = document.QuerySelector("div");
    //nodeDiv01 = document.QuerySelectorAll("div")[0];
    
    nodeDiv02 = document.getElementById("div02");
    nodeDiv03 = document.getElementById("div03");
    
    nodeDiv01.addEventListener("click",controlEsdeveniments);
    nodeDiv02.addEventListener("mouseover",controlEsdeveniments);
    nodeDiv03.addEventListener("click",controlEsdeveniments);
    } 
    function controlEsdeveniments(e){
        alert("hola");
    }
    // para evidar el defer="defer" que no está definido en la pagina html
    return{
        initModul:initModul
    };
})();

// para evidar el defer="defer" que no está definido en la pagina html

window.addEventListener("load",dom02.initModul);