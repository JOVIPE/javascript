/* global cognoms */

var funcion01 = (function(){
    var x,y,z;
    
    x=suma01(2,3);
    z=suma02(2,2);
    suma02(1,1); // la funcio torna 2 pero no es guarda enlloc
    suma03(5,6);
    
    console.log(x);//5
    console.log(y);//11
    console.log(z);//4
    //console.log(c); //c no definida
    
    function suma01(a,b){
        return a+b;
    }
    function suma02(a,b){
        var c;
        return c=a+b;
    }
    function suma03(a,b){
        y=a+b;
    }
})();

var modul01=(function(){
    var x,y;
    function suma(a,b){return a+b;}
    return {
        publicX:x, // propiedad del objeto
        publicY:y, // propiedad del objeto
        publicSuma:suma,
        resta:function(a,b) {return a-b;}// metodo del objeto
    }
})();

console.log(modul01);
modul01.publicX=3;
modul01.publicY=5;
var z1=modul01.publicSuma(2,7);
var z2=modul01.resta(6,9);
var z3=modul01.resta(modul01.publicX,modul01.publicY);
console.log(modul01);
console.log(z1);
console.log(z2);
console.log(z3);

var funcion01 = (function(){
    function suma(a,b){return a+b;}

    console.log("-------------");
    console.log(suma);
    console.log(suma.length);
    console.log(suma.prototype);
})();


console.log("o b j e t o s");
var objecte01=(function(){
    // objeto
    var alumne=function(){
        var nom,cognoms;
        //var nomComplert= function(){
            //return nom + " " + cognoms;
        //}
    };
    
    var pere = new alumne();
    pere.nom="Pere";
    pere.cognoms="Riu Net";
    console.log(pere);
    pere.edat=15;
    console.log(pere);
    
    var carol= new alumne();
    carol.nom="Carol";
    carol.cognoms="Puig Bonic";
    console.log(carol);
    carol.ulls="blau";
    console.log(carol);
    
    alumne.cabell="marro";
    console.log(pere);
    console.log(carol);
    console.log(alumne);
    console.log(alumne.cabell);
    
    var pau=new alumne();
    pau.nom="Pau";
    pau.cognom="piolet";
    console.log(pau);
    
    //console.log(pere._proto_.constructor.cabell);
})();

console.log("o b j e t o s 0 2");
var objecte02=(function(){
    // objeto unico
    var pau={
        nom:"Pau",
        cognoms:"Perez",
        edat:16,
        nomSencer:function(){
            return this.nom + " " + this.cognoms;}
    };
    console.log(pau);
    console.log(pau.nomSencer());
    //var marta=new pau(); error pau is not a constructor
     console.log("-------------");
     
    // como classe
    var alumne=function(_nom,_cognoms,_edat){
        // propiedades
        this.nom=_nom;
        this.cognoms=_cognoms;
        this.edat=_edat;
        // metodos puclicos
        this.nomSencer =function(){
            return this.nom + " " + this.cognoms;
        };
        this.publicCognomsNom=function(){
            return cognomsNom.apply(this);
        };
        // metodos privados
        var cognomsNom= function(){
            return this.cognoms + " , " + this.nom;
        };
    };
    
    console.log(alumne);
    var marta=new alumne("marta","Llopis",21);
    console.log(marta);
    console.log(marta.nomSencer());
    console.log(marta.publicCognomsNom());
    
})();

var modul02=(function(parametre){
    console.log("----------------");
    console.log(parametre);
    
})(25);

var modul03=(function(parametre){
    console.log("----------------");
    console.log(parametre);
    
});
modul03(24);
modul03(29);

var funcion01 = (function(){
   console.log("----------------");
   function suma(a,b){
       console.log(suma.lenght); // numero de parametros que tienen la uncion
       console.log(arguments.lenght); // numero de parametrso pasados a la funcion
       console.log(arguments); // paratemtros
       return a+b;
   }
  
  var z; 
  z = suma(3,4);
  
})();





