var dom01=(function(){
    
    var arrayNodeP=document.getElementsByTagName("p");
    console.log(arrayNodeP);
    var nodeP=arrayNodeP[0];
    nodeP.innerHTML="Hola <b>mon</b>";
    var nodeB=document.querySelector("b");
    nodeB.innerHTML="PAU";
    var nodeP1=document.getElementById("p1");
    nodeP1.innerHTML="Adios ";
    
    var nodeP2=document.querySelector("p:last-of-type");
    nodeP2.outerHTML="<b>ya no lo soy</b>";
    
    nodeP1.addEventListener("click",function(){
        alert("Hola");
    });
    var nodeP3=document.getElementById("p2");
    nodeP3.onclick = miAlert;
    
    function miAlert(e){
        alert("Has fet click sobre " + e.target.nodeName);
    };
    
    nodeP.onclick=function(e){
        miAlert2("NASS!!!!!",e);
        
    };
    function miAlert2(missatge,e){
        alert(missatge + " " + e.target.nodeName);
    };
})();

