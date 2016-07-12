
/* global r04 */

// 
//1. Escriu una classe triangle rectangle amb les següents característiques:
// Propietats: catets a,b
// Mètodes:
// Constructor (a,b)
// hipotenusa 2 2 h  a  b
// àrea A= a*b/2
// perímetre P=a+b+h
// Sobreescriu el mètode toString per a que torni les dades del triangle.
console.log("-----------------");
console.log("1. Escriu una classe triangle rectangle amb les següents característiques:")  ;
function TrianguloRectangulo() {
        this.a = 0;
        this.b = 0;
        if (arguments.length !== 0 && arguments.length !== 2)
            throw "Numero erroneo de argumentos";
        else if (arguments.length === 2) {
            this.a = parseFloat(arguments[0]);
            if (isNaN(arguments[0]))
                throw "El primer parametro " + arguments[0] + " no es un numero";
            this.b = parseFloat(arguments[1]);
            if (isNaN(arguments[1]))
                throw "el segundo parametro " + arguments[1] +" no es un numero";
        }
        this.hipotenusa = function () {
            return Math.sqrt(this.a * this.a + this.b * this.b);
        };
        this.area = function () {
            return this.a * this.b / 2.;
        };
        this.perimetro = function () {
            return this.a + this.b + this.hipotenusa();
        };
        // reemplacem toString del prototipus
        this.toString = function () {
            return "Triangulo rectangulo: a = " + this.a + ", b = " + this.b + ", hipotenusa = " +
                    this.hipotenusa().toFixed(4) + ", area = " + this.area().toFixed(4) +
                    ", perímetro = " + this.perimetro().toFixed(4);
        };
    }
    
   try{
       var p1 = new TrianguloRectangulo(1,2);
       console.log(p1.toString());
       var p2 =new TrianguloRectangulo();
       p2.a= 2;
       p2.b= 4;
      console.log(p2.toString());
      //var p3 = new TrianguloRectangulo(1.1);
      //console.log(p3.toString());
      //var p4 = new TrianguloRectangulo(3,2,1);
      //console.log(p4.toString());
      var p5 = new TrianguloRectangulo(undefined,undefined);
      console.log(p1.toString());
      var p6 = new TrianguloRectangulo("a",1);
      console.log(p1.toString());
   }catch (e) {
        console.log(e);
    }
   
   
// 2. Escriu una classe circumferència amb les següents característiques:
// Propietats: radio
// Mètodes:
// Constructor (radio)
// diàmetre d=2*radio
// àrea A= PI * r2
// perímetre o longitud L= 2*PI*r
// Sobreescriu el mètode toString per a que torni les dades del circumferència.
console.log("-----------------");
console.log("2. Escriu una classe circumferència amb les següents característiques:")  ;
    function Circunferencia() {
        this.radi = 0;
        // inicialització de variables en funció del nombre d'arguments rebut
        if (arguments.length !== 0 && arguments.length !== 1)
            throw "Numero erroneo de argumentos";
        else if (arguments.length === 1) {
            this.radi = parseFloat(arguments[0]);
            if (isNaN(arguments[0]))
                throw "El radio no es un numero";
        }
        this.diametro = function () {
            return this.radi * 2.;
        };
        this.area = function () {
            return Math.PI * this.radi * this.radi;
        };
        this.longitud = function () {
            return 2 * Math.PI * this.radi;
        };
        // reemplacem toString del prototipus
        this.toString = function () {
            return "Circumferència: radio = " + this.radi + ", diàmetro = " +
                    this.diametro().toFixed(4) + ", area = " + this.area().toFixed(4) +
                    ", longitud = " + this.longitud().toFixed(4);
        };
    }

    try {
        var r1 = new Circunferencia();
        r1.radi = 3;
        console.log("r1 = " + r1);
        var r2 = new Circunferencia(3.7);
        console.log("r2 = " + r2);
        // Les següents línies causen errors per tenir un nombre incorrecte d'arguments
        //var r3 = new Circunferencia(3.5,7);
        //var r4 = new Circunferencia("a");
    } catch (e) {
        console.log(e);
    }


//3. Escriu una classe hexàgon amb les següents característiques:
// Propietats: costat double
// Mètodes:
// Constructor (costat)
// àrea
//√
// perímetre P=6·l
// Sobreescriu el mètode toString per a que torni les dades del hexàgon.
console.log("-----------------");
console.log("3. Escriu una classe hexàgon amb les següents característiques:")  ;
function Hexagono() {
        this.costat = 0;
        // inicialització de variables en funció del nombre d'arguments rebut
        if (arguments.length !== 0 && arguments.length !== 1)
            throw "Numero erroneo de argumentose";
        else if (arguments.length === 1) {
            this.costat = parseFloat(arguments[0]);
            if (isNaN(this.costat))
                throw "El costat no es un numero";
        }
        this.area = function () {
            return this.costat * this.costat * Math.sqrt(3) * 3 / 2;
        };
        this.perimetro = function () {
            return 6 * this.costat;
        };
        // reemplacem toString del prototipus
        this.toString = function () {
            return "Hexàgon: costat = " + this.costat +
                    ", area = " + this.area().toFixed(4) +
                    ", perimetro = " + this.perimetro().toFixed(4);
        };
    }

    try {
        var h1 = new Hexagono();
        h1.costat = 3;
        console.log("h1 = " + h1);
        var h2 = new Hexagono(3.7);
        console.log("h2 = " + h2);
        // Les següents línies causen errors per tenir un nombre incorrecte d'arguments
        //var h3 = new Hexagono(3.5,7);
        //var h4 = new Hexagono("a");
    } catch (e) {
        console.log(e);
    }
    
//4. Escriu una classe rellotge digital amb hores, minutos i segundos, que compti les hores de 0 a
//23:59:59 amb les següents característiques:
// Propietats:
// Hora
// Minut
// Segon
// Mètodes:
// Constructor ()
// EstablirHora (h,m,s)
// EstablirHoraString (hms) on hms te el format hh:mm:ss
// Funció incrementar 1 segundos el temps
// Funció incrementar 1 minutos el temps
// Funció incrementar 1 hora el temps; quan arribi a 24 es reinicia a 0 un altre
//cop.
// Implementar toString perquè torni un string con el formato hh:mm:ss
// Funció reiniciar el rellotge (posar-lo a 0:0:0).
console.log("-----------------");
console.log("4. Escriu una classe rellotge digital amb hores, minutos i segundos, que compti les hores de 0 a 23:59:59 amb les següents característiques:");
    var Reloj= function () {
        this.hora = 0;
        this.minutos = 0;
        this.segundos = 0;

        this.establirHora = function () {
            if (arguments.length === 3) {
                this.hora = parseInt(arguments[0]);
                if (isNaN(this.hora) || this.hora < 0 || this.hora > 23)
                    throw "El formato de hora es erroneo.";
                this.minutos = parseInt(arguments[1]);
                if (isNaN(this.minutos) || this.minutos < 0 || this.minutos > 59)
                    throw "El formato de minutos es erroneo.";
                this.segundos = parseInt(arguments[2]);
                if (isNaN(this.segundos) || this.segundos < 0 || this.segundos > 59)
                    throw "El formato de segundos es incorrecto";
            } else if (arguments.length === 1) {
                var hms = arguments[0].match(/([01]\d|2[0-3]):([0-5]\d):([0-5]\d)/);  // si queremos ademas que coja 09 o 9 sería /([01]?\d|2[0-3]):([0-5]?\d):([0-5]?\d)/
                if (hms === null)
                    throw "El formato del string con la hora(h:m:s) es erroneo";
                else {
                    this.hora = parseInt(hms[1]); // hms[0] tiene el string entero
                    this.minutos = parseInt(hms[2]);
                    this.segundos = parseInt(hms[3]);
                }
            }
        };
        this.incrementar1segundos = function () {
            this.segundos++;
            if (this.segundos === 60) {
                this.segundos = 0;
                this.incrementar1minutos();
            }
        };
        this.incrementar1minutos = function () {
            this.minutos++;
            if (this.minutos === 60) {
                this.minutos = 0;
                this.incrementar1hora();
            }
        };
        this.incrementar1hora = function () {
            this.hora++;
            if (this.hora === 60) {
                this.hora = 0;
            }
        };
        this.reinicarReloj= function () {
            this.hora = 0;
            this.minutos = 0;
            this.segundos = 0;
        };
        this.toString = function () {
            return (this.hora < 10 ? "0" + this.hora : this.hora) + ":" + (this.minutos < 10 ? "0" + this.minutos : this.minutos) + ":" + (this.segundos < 10 ? "0" + this.segundos : this.segundos);
        };
    };

    try {
        r01 = new Reloj();
        console.log("r01 " + r01);
        r02 = new Reloj();
        r02.establirHora(02, 40, 05);
        console.log("r02 " + r02);
        r03 = new Reloj();
        //r03.establirHora("09:59:59");
        r03.establirHora("23:59:59");
        console.log("r03 " + r03);
        /*	
         r04 = new Reloj();
         r04.establirHora("25:04:58");
         r05 = new Reloj();
         r05.establirHora(32,25,47);
         */
        
        r03.incrementar1segundos();
        console.log("r03 " + r03);
        r03.reinicarReloj();
        console.log("r03 " + r03);
    } catch (e) {
        console.log(e);
    }
    
 
//5. Crea una classe per gestionar entrades d’una agenda de telèfons
// Propietats:
// Id, únic
// Nom
// Correu
// Telèfon
// Mètodes
// Constructor(nom,correu,telefon)
//Curs de programació web a l’entorn client. UF2
//2
// toString, torna les dades en format “nom: nom, correu: correu, telèfon: telefon”
console.log("-----------------");
console.log("5. Crea una classe per gestionar entrades d’una agenda de telèfons");
var entradaAgenda = function () {
        entradaAgenda.comptador = (typeof entradaAgenda.comptador === "undefined") ? 0 : entradaAgenda.comptador + 1;
        this.id = entradaAgenda.comptador;
        this.nom = "";
        this.correu = "";
        this.telefon = "";

        if (arguments.length !== 0 && arguments.length !== 3)
            throw "El numero de argumentos es erroneo.";
        else {
            this.nom = arguments[0];
            this.correu = arguments[1];
            this.telefon = arguments[2];
        }
        this.toString = function () {
            return "id = " + this.id + ", nom = " + this.nom +
                    ", correu = " + this.correu + ", telefon = " + this.telefon;
        };
    };

    try {
        var alumno1 = new entradaAgenda();
        alumno1.nom = "Jose";
        alumno1.correu = "jose@hotmail.com";
        alumno1.telefon = "616161661";
        console.log("alumno1->" + alumno1);
        var alumno2 = new entradaAgenda("Luis", "luis@gmail.com", "911234567");
        console.log("alumno2->" + alumno2);
        var alumno3 = new entradaAgenda("Ana", "Ana@gmail.com", "999999999");
        console.log("alumno3->" + alumno3);
    } catch (e) {
        console.log(e);
    }
    
    
//6. Crea una classe per gestionar una agenda que fa servir la llista anterior
// Propietats
// Llista, array d’entrades
// Mètodes
// Constructor()
// afegirEntrada(nom, correu, telefon)
// eliminarEntrada(id)
// cercarDadesId(id), torna dades de l’usuari
// cercarTelèfonId(id)
// cercarCorreuId(id)
// cercarDadesNom(nom), torna dades de l’usuari
// cercarTelèfonNom (nom)
// cercarCorreuNom (nom)
// cercarNomTelefon(telèfon)
// toString(), torna la llista sencera
console.log("-----------------");
console.log("6. Crea una classe per gestionar una agenda que fa servir la llista anterior");
 var Agenda = function () {
        this.llista = new Array();

        this.afegirEntrada = function (nom, cognom, telefon) {
            this.llista[this.llista.length] = new entradaAgenda(nom, cognom, telefon);
        };
        // funciones auxiliares de busqueda
        this.cercarId = function (id) {
            var i;
            for (i = 0; i < this.llista.length; i++) {
                if (this.llista[i].id === id)
                    return [i, this.llista[i]]; //devuelve un array posicion valor
            }
            throw "La entrada amb id " + id + " no existeix";
        };
        this.cercarNom = function (nom) {
            var i;
            for (i = 0; i < this.llista.length; i++) {
                if (this.llista[i].nom === nom)
                    return this.llista[i];
            }
            throw "La entrada amb nom " + nom + " no existeix";
        };
        this.cercarTelefon = function (telefon) {
            var i;
            for (i = 0; i < this.llista.length; i++) {
                if (this.llista[i].telefon === telefon)
                    return this.llista[i];
            }
            throw "La entrada amb telèfon " + telefon + " no existeix";
        };

        this.eliminarEntrada = function (id) {
            this.llista[this.cercarId(id)[0]] = undefined;
        };
        this.cercarDadesId = function (id) {
            return this.cercarId(id)[1];
        };
        this.cercarTelefonId = function (id) {
            return this.cercarId(id)[1].telefon;
        };
        this.cercarCorreuId = function (id) {
            return this.cercarId(id)[1].correu;
        };
        this.cercarDadesNom = function (nom) {
            return this.cercarNom(nom);
        };
        this.cercarTelefonNom = function (nom) {
            return this.cercarNom(nom).telefon;
        };
        this.cercarCorreuNom = function (nom) {
            return this.cercarNom(nom).correu;
        };
        this.cercarNomTelefon = function (telefon) {
            return this.cercarTelefon(telefon).nom;
        };
        this.toString = function () {
            return "Agenda:\n" + this.llista + "\n";
        };
    };

    try {
        entradaAgenda.comptador = undefined; // reiniciar contador
        var NuevaAgenda = new Agenda();
        NuevaAgenda.afegirEntrada("joan", "joan.edu.cat", "939319092");
        NuevaAgenda.afegirEntrada("Luis", "luis@gmail.com", "911234567");
        NuevaAgenda.afegirEntrada("Ana", "Ana@gmail.com", "999999999");
        NuevaAgenda.afegirEntrada("Jose", "Jose@hotmail.com", "616163616");
        console.log("\n" + NuevaAgenda);
        console.log("Buscar datos nombre " + NuevaAgenda.cercarDadesNom("Jose"));
        console.log("buscar datos id " + NuevaAgenda.cercarDadesId(1));
        NuevaAgenda.eliminarEntrada(2);
        console.log("Eliminado el id 2 " + NuevaAgenda);
    } catch (e) {
        console.log(e);
    }   