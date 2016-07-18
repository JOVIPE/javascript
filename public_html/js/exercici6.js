var galeria = (function(){
    var nodesGaleria, nodesArrow, nodeFinestra, nodeFinestraFons;
    var posicioActual, escala;
    
    function initApp(){
        posicioActual = 0;
        escala = 0.9;
        nodesGaleria  =document.querySelectorAll("#galeria figure");
        nodesArrow = document.querySelectorAll("#galeria ul li");
        
        // esdeveniment moure galeria
        var i;
        for( i = 0; i < nodesArrow.length; i++ ){
            nodesArrow[i].addEventListener("click", moureGaleria, false);
            nodesArrow[i].addEventListener("keypress", moureGaleria, false);
        }
        
        // esdeveniment obrir nodeFinestra
        var nodesImg = document.querySelectorAll("#galeria img");
        for( i =0; i < nodesGaleria.length; i++){
            nodesImg[i].addEventListener("click", mostrarImatgeGaleria, false);
            nodesImg[i].addEventListener("keypress", mostrarImatgeGaleria, false);
        }
    };
    
    function moureGaleria(e){
        var tecla = e.currentTarget.innerHTML;
        var sentit = (tecla === "&gt;" ? 1: -1);
        nodesGaleria[posicioActual].style.display = "none";
        posicioActual += sentit;
        if(posicioActual === nodesGaleria.length) posicioActual = 0;
        else if(posicioActual < 0) posicioActual = nodesGaleria.length-1;
        nodesGaleria[posicioActual].style.display = "block";
    }
    
    function mostrarImatgeGaleria(e){
        var imatge = JSON.parse(e.currentTarget.getAttribute("data-imgGran"));
        var pantalla ={
            width: window.innerWidth,
            height: window.innerHeight
        };
        var mides;
        // càlcul de les mides
        if (pantalla.width > imatge.width && pantalla.height > imatge.height) {
            // imatge més petita que viewport
            mides = { 
                width: imatge.width,
                height: imatge.height
            };
        } else if (pantalla.width >= imatge.width && pantalla.height <= imatge.height) {
            mides = { 
                width: imatge.width * pantalla.height * escala / imatge.height,
                height: pantalla.height * escala
            };
        } else if (pantalla.width <= imatge.width && pantalla.height >= imatge.height) {
            mides = { 
                width: pantalla.width * escala,
                height: imatge.height * pantalla.width * escala / imatge.width
            };            
        } else {
            var dw, dh;
            dw = imatge.width - pantalla.width;
            dh = imatge.height - pantalla.height;
            if (dw >= dh) {
                mides = { 
                    width: pantalla.width * escala,
                    height: imatge.height * pantalla.width * escala / imatge.width
                };            
            } else {
                mides = {
                    width: imatge.width * pantalla.height * escala / imatge.height,
                    height: pantalla.height * escala
                };
            }
        }        
        
        if(!nodeFinestra){
            // crees capa amb imatge
            nodeFinestra = document.createElement("div");
            nodeFinestra.setAttribute("id", "finestra");
            nodeFinestra.innerHTML = "<img src=\"" + imatge.src + "\" alt=\"Imatge en gran\" width=\"" + mides.width + "\" height=\"" + mides.height + "\" />";
            document.body.appendChild(nodeFinestra);
            nodeFinestraFons = document.createElement("div");
            nodeFinestraFons.setAttribute("id", "finestraFons");
            document.body.appendChild(nodeFinestraFons);
        } else {
            // canvi d'imatge
            var nodeImg = nodeFinestra.querySelector("img");
            nodeImg.setAttribute("src", imatge.src);
            nodeImg.setAttribute("width",mides.width);
            nodeImg.setAttribute("height",mides.height);
        }
        // posició
        nodeFinestra.style.top = (pantalla.height - mides.height)/2 + "px";
        nodeFinestra.style.left = (pantalla.width - mides.width)/2 + "px";       
        
        nodeFinestraFons.style.display = "block";
        nodeFinestra.style.display = "block";
        nodeFinestra.addEventListener("click", amagarImatgeGaleria, false);
        nodeFinestra.addEventListener("keypress", amagarImatgeGaleria, false);
        nodeFinestraFons.addEventListener("click", amagarImatgeGaleria, false);
        nodeFinestraFons.addEventListener("keypress", amagarImatgeGaleria, false);
    }
    
    function amagarImatgeGaleria(){
        nodeFinestra.style.display = "none";
        nodeFinestraFons.style.display = "none";
    }
    
    return {
        initApp: initApp
    };
})();

window.addEventListener("load",galeria.initApp, false);