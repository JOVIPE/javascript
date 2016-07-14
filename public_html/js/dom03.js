// versió simple
/*
var dom03 = (function (){
    var bt1,bt2;
    
    function initApp(){
        bt1 = document.getElementById("css1");
        bt2 = document.getElementById("css2");
        
        bt1.addEventListener("click",function(e){
            canviCssSheet("dom03-css1");
        });
        bt2.addEventListener("click",function(e){
            canviCssSheet("dom03-css2");
        });
        
        function canviCssSheet(sheet){
            // 1. heavy mode
//            var newNode = document.createElement("link");
//            newNode.setAttribute("rel","stylesheet");
//            newNode.setAttribute("type","text/css");
//            newNode.setAttribute("href","css/"+sheet+".css");
//            var head = document.getElementsByTagName("head")[0];
////            document.head.appendChild(newNode);
//            head.appendChild(newNode);
            
            // 2. soft mode
            // ineficient
//            document.head.innerHTML += "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/"+sheet+".css\" />"; 
            // més eficient
            document.head.insertAdjacentHTML('beforeend', 
                "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/"+sheet+".css\" />");       
        }
        
    }
    
    return {
        initApp: initApp
    }
})();

window.addEventListener("load",dom03.initApp);
*/

// versió millorada
var dom03 = (function (){
    var bt1,bt2, nodeLink;
    
    function initApp(){
        bt1 = document.getElementById("css1");
        bt2 = document.getElementById("css2");
        
        bt1.addEventListener("click",function(e){
            canviCssSheet("dom03-css1");
        });
        bt2.addEventListener("click",function(e){
            canviCssSheet("dom03-css2");
        });
        
        function canviCssSheet(sheet){
            // miro si s'afegit alguna vegada l'etiqueta link amb el css
            if(!nodeLink){
                // no s'ha afegit mai -> el creo
//                document.head.insertAdjacentHTML('beforeend', 
//                "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/"+sheet+".css\" />");       
//                // en aquest cas funciona perquè només hi ha una etiqueta link
//                nodeLink = document.head.getElementByTagName("link")[0];
                // Alternativa. molt millor perquè tinc l'etiqueta dins un node i 
                // no importa que hi hagi altres <link>
                nodeLink = document.createElement("link");
                nodeLink.setAttribute("rel","stylesheet");
                nodeLink.setAttribute("type","text/css");
                nodeLink.setAttribute("href","css/"+sheet+".css");
                document.head.appendChild(nodeLink);               
            }else{
                nodeLink.setAttribute("href","css/"+sheet+".css");
            }
        }   
    }
    
    return {
        initApp: initApp
    }
})();

window.addEventListener("load",dom03.initApp);