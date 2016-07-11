// Exercici 02

// 1
var ex01 = (function (){
    var paller="La figura 4a divideix un heptàgon de dues maneres diferents.";
    var agulla= /[aà]/gi;
    var substitut = "A";
    var resultat = paller.replace(agulla, substitut);  
    console.log(resultat);
})();

var ex05 = (function (){
    
    function algoritmeCaesar(missatge,desplasament,sentit) {
        // desplasament -> lletra per fer el desplaçament
        // sentit false -> Encriptar, true -> Desencriptar
        var taulaCodis="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var missatgeSecret="";
        var d,i,pos, newpos;
        missatge = missatge.toUpperCase();
        // desplaçament
        d = taulaCodis.indexOf(desplasament);
        for(i=0;i<missatge.length;i++){
            if(missatge[i]===" "){
                missatgeSecret += " ";
                continue;
            }
            pos = taulaCodis.indexOf(missatge[i]);
//            if(sentit){
//                newpos = (pos + d)%26;
//            }else{
//                newpos = (pos + 26 -d)%26;
//            }
            newpos = (pos + (sentit? d : 26-d ) )%26;
            missatgeSecret += taulaCodis[newpos];
        }
        return missatgeSecret;
    }
    
    var str, strenc, strdes, des;
    str = "La casa es blava";
    des = "F";
    strenc = algoritmeCaesar(str,des,true);
    console.log(strenc);
    strdes = algoritmeCaesar(strenc, des,false);
    console.log(strdes);
    
})();

var ex05 = (function (){
//    var x = 
})();