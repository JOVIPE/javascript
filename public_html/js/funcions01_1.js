var funcio01 = (function(){
    var x,y,z;
    
    x = suma01(2,3);
    z = suma02(2,2);
    suma02(1,1); // la funció torna 2 però no es guarda enlloc
    suma03(5,6);
    
    console.log(x); // 5
    console.log(y); // 11
    console.log(z); // 4
//    console.log(c); // c no definida
    
    function suma01(a,b){return a+b;}
    function suma02(a,b){
        var c;
        return c = a+b;
    }
    function suma03(a,b){
        y = a+b;
    }
    
})();

var modul01 = (function (){
    var x,y;
    var suma = function (a,b) {return a+b;};
//    function suma(a,b) {return a+b;}
    
    return {
        publicX: x,
        publicY: y,
        publicSuma: suma,
        resta: function(a,b){return a-b;}
    }
})();

console.log("--------------------");
console.log(modul01);
modul01.publicX = 3;
modul01.publicY = 5;
var z1 = modul01.publicSuma(2,7);
var z2 = modul01.resta(6,9);
console.log(modul01);
console.log(z1);
console.log(z2);

var funcio01 = (function(){
    function suma(a,b){ return a+b;}
    
    console.log("--------------------");
    console.log(suma);
    console.log(suma.length);
    console.log(suma.prototype);
    
})();

var objecte01 = (function(){
    console.log("--------------------");
    // objecte
    var alumne = function(){  //"classe"
        var nom, cognoms;
//        var nomComplert = function (){
//            return nom + " " + cognoms;
//        }
    };
    
    var pere = new alumne();
    pere.nom = "Pere";
    pere.cognoms = "Riu Net";
    console.log(pere);
    pere.edat = 15;
    console.log(pere);
 
    var carol = new alumne();
    carol.nom = "Carol";
    carol.cognoms = "Puig Bonic";
    console.log(carol);
    carol.ulls = "blaus";
    console.log(carol);
    
    alumne.cabell = "marró";
    console.log(pere);
    console.log(carol);
    console.log(alumne);
    console.log(alumne.cabell);
    
    var pau = new alumne();
    pau.nom = "Pau";
    pau.cognoms = "Piolet";
    console.log(pau);
    
    console.log(pere.__proto__.constructor.cabell);
    
})();

var objecte02 = (function(){
    console.log("--------------------");
    // objecte únic
    var pau = {
      nom: "Pau",
      cognoms: "Pérez",
      edat: 16,
      nomSencer: function(){
          return this.nom + " " + this.cognoms;
      }
    };
    console.log(pau);
    console.log(pau.nomSencer());
//    var marta = new pau(); // pau no és un constructor
    
    // com a classe
    // http://javascript.crockford.com/private.html
    var alumne = function(_nom, _cognoms, _edat){
      // propietats
      this.nom = _nom;
      this.cognoms = _cognoms;
      this.edat = _edat;
      // mètodes públics
      this.nomSencer = function(){
          return this.nom + " " + this.cognoms;
      };
      this.publicCognomsNom = function(){
          return cognomsNom.apply(this);
//          return cognomsNom();
      };
      // mètodes privats
      var cognomsNom = function (){
          return this.cognoms + ", " + this.nom;
//          return cognoms + ", " + nom;
      };
    };
    
    console.log(alumne);
    var marta = new alumne("Marta", "Llopis", 21);
    console.log(marta);
    console.log(marta.nomSencer());
    console.log(marta.publicCognomsNom());
//    console.log(marta.cognomsNom());
    var joana = new alumne();
    console.log(joana);
    joana.nom = "Joana";
    console.log(joana);
    
})();


var modul02 = (function (parametre){
    console.log("--------------------");
    console.log(parametre)    
})(25);

var modul03 = (function (parametre){
    console.log("--------------------");
    console.log(parametre)    
});

modul03(24);
modul03(29);

var funcio01 = (function(){
    console.log("--------------------");
    
    function suma(a,b){
        console.log(suma.length); // nombre de paràmetres que té la funció
        console.log(arguments.length); // nombre de paràmetres passats a la funció
        console.log(arguments);
        return a+b;
    }
    
    function suma2(){
        console.log(suma2.length); // nombre de paràmetres que té la funció
        console.log(arguments.length); // nombre de paràmetres passats a la funció
        var i, sum = 0;
        for(i=0; i<arguments.length; i++){ 
            sum += arguments[i];
        }
        return sum;
    }
    
    var z;
    z = suma(3,4);
    z = suma(3);
    z = suma();
    z = suma(3,4,5,6,7,8);
    z = suma2(3,4,5,6,7,8);
    console.log(z);
    z = suma2();
    console.log(z);
    
    // canvi context
    // ex: calcular màxim
    var x = [2,3,4,5,6,7,12,45, 65, 78];
    var max0 = Math.max(2,3,4,5,6,7,12,45, 65, 78);
//    var max1 = Math.max(x); // error
    var max = Math.max.apply(null,x);
    console.log(x);
    console.log(max);
    
    function ordenarParametres(){
        console.log(Array.sort.call(null,arguments));
    }
    
    ordenarParametres(12,45,3,5,7,11,101);
    
})();