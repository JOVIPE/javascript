// Exercici 01

// 1
var ex01 = (function (){
    var a, b, ar, p;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = 2*a + 2*b;
    // mostrar solucions
    console.log("1. Rectangles \na = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetre = " + p);
})();

// 2
var ex02 = (function (){
    var a, b, ar, p;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = a + b + Math.sqrt(b*b + a*a);
    // mostrar solucions
    console.log("2. Triangle rectangle \na = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetre = " + p);
})();

// 3
var ex03 = (function (){
    var ts = 1056789;
    var d,h,m,s,aux;
    d = Math.floor( ts/86400 /* segons/dia */);
    aux = ts % 86400;
    h = Math.floor( aux/3600 /* segons/hora */);
    aux = ts % 3600;
    m = Math.floor( aux/60 /* segons/minut */);
    s = ts % 60;
    console.log("3. Càlculs de temps \n Temps en segons = " + ts +
    "\n dies = " + d +
    "\n hores = " + h +
    "\n minuts = " + m + 
    "\n segons = " + s);
})();

// 4
var ex04 = (function (){
    var c, r, t, i, cf;
    c = 10000; // 10.000 €
    r = 1; // 1%
    t = 180; // 6 mesos
    i = (c * r * t) / 3.6e4; // 3.6e4-> 360*100=36000
    cf = c + i;
    console.log("4. Interès simple\n c = " + c + " €\n r = " + r +
            " %\n t = " + t + " dies\n i = " + i +
            " €\n CF = " + cf + " €");
})();

// 5
var ex05 = (function (){
    var i, n, sum;
    n = 100; 
    sum = 0;
    for(i=0; i<n; i++) sum += i;
    console.log("5. Suma n nombres naturals \n i = " + i +
    "\n n = " + n +
    "\n sum = " + sum );
})();

// 6
var ex06 = (function (){
    var dia, n = 2;
    dia = n * 30;
    console.log("6. " + n + " mesos equivalen a " + dia + " dies");
})();

// 7
var ex07a = (function (){
    var min, max, mig, i;
    var x = [7,5,3,8,2];
    min = x[0];
    max = x[0];
    mig = x[0];
    for(i=1; i<x.length; i++){
        mig += x[i]; // mig = mig + x[i];
        if(x[i]<min) min = x[i];
        else if(x[i]>max) max = x[i]; // més eficient
        //if(x[i]>max) max = x[i];
    }
    mig /= x.length; // mig = mig /x.length
    console.log("7a. Màxim, mínim, valor mig \n x = [" + x + "]" +
    "\n min = " + min +
    "\n max = " + max +
    "\n mig = " + mig );
})();

var ex07b = (function (){
    // amb funcions d'Array i Math
    var x = [7,5,3,8,2];
    var max, min, mitja;
    max = Math.max.apply(null, x);
    min = Math.min.apply(null, x);
    mitja = x.reduce(function (suma, valor) {
        return suma + valor;
    }) / x.length;
    console.log("7b. Màxim, mínim, valor mig \n x = (" + x + ")\n max = " + max +
            "\n min = " + min + "\n mig = " + mitja);
})();

// 8
var ex08 = (function (){
    var suma = 0;
    var c = 6;
    var x = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
    for (i = 0; i < x.length; i++) {
        if (x[i] < c)
            suma += x[i];
    }
    console.log("8. x = (" + x + "), suma = " + suma);
})();

// 9
var ex09 = (function (){
    var v1, v2, n, i;
    n = 4;
    v1 = [4,9,6,1,7,8,5,3,0,2]; // v2 = new Array(4,9,6,1,7,8,5,3,0,2);
    v2 = []; // v2 = new Array();
    for(i = 0; i < v1.length ;i++){
        if(v1[i]<=n){
            v2[v2.length] = v1[i];  // afegir una nova component a v2 (al final)
        }
//        console.log(i);
//        console.log(v1[i]);
//        console.log(v2);
    }
    console.log("9. Copiar array \n v1 = [" + v1 + "]" +
    "\n n = " + n +
    "\n v2 = [" + v2 + "]");
})();

// 10
var ex10 = (function (){
    var paraula = "La formiga va espantar l'elefant."
    var longitut = paraula.length;
    console.log("10. La frase \"" + paraula + "\" té " + longitut + " caràcters.");
})();

// 11
var ex11b = (function (){
    var dia, mes, signe;
    dia = 28;
    mes = 11;

    if (mes === 3 && dia >= 21) {
        signe = "Àries";
    } else if (mes === 4 && dia <= 21) {
        signe = "Àries";
    } else if (mes === 4) {
        signe = "Taure";
    } else if (mes === 5 && dia <= 21) {
        signe = "Taure";
    } else if (mes === 5) {
        signe = "Bessons";
    } else if (mes === 6 && dia <= 21) {
        signe = "Bessons";
    } else if (mes === 6) {
        signe = "Cranc";
    } else if (mes === 7 && dia <= 22) {
        signe = "Cranc";
    } else if (mes === 7) {
        signe = "Lleó";
    } else if (mes === 8 && dia <= 22) {
        signe = "Lleó";
    } else if (mes === 8) {
        signe = "Verge";
    } else if (mes === 9 && dia <= 22) {
        signe = "Verge";
    } else if (mes === 9) {
        signe = "Balança";
    } else if (mes === 10 && dia <= 22) {
        signe = "Balança";
    } else if (mes === 10) {
        signe = "Escorpí";
    } else if (mes === 11 && dia <= 22) {
        signe = "Escorpí";
    } else if (mes === 11) {
        signe = "Sagitari";
    } else if (mes === 12 && dia <= 21) {
        signe = "Sagitari";
    } else if (mes === 12) {
        signe = "Capricorn";
    } else if (mes === 1 && dia <= 20) {
        signe = "Capricorn";
    } else if (mes === 1) {
        signe = "Aquari";
    } else if (mes === 2 && dia <= 19) {
        signe = "Aquari";
    } else if (mes === 2) {
        signe = "Peixos";
    } else if (mes === 3 && dia <= 20) {
        signe = "Peixos";
    } else
        signe = "Error en identificar l'horòscop";
    console.log("11. Data naixement: " + dia + "-" + mes +
            ", signe de l'horòscop: " + signe);
})();

var ex11b = (function (){
    // alternativa
    var signe;
    var dia=20;
    var mes=8;
    var data = mes*100 + dia;

    if(data<=120) signe="Capricorn";
    else if(data<=221) signe="Aquari";
    else if(data<=320) signe="Peixos";
    else if(data<=421) signe="Àries";
    else if(data<=521) signe="Taure";
    else if(data<=621) signe="Bessons";
    else if(data<=722) signe="Cranc";
    else if(data<=822) signe="Lleó";
    else if(data<=922) signe="Verge";
    else if(data<=1022) signe="Balança";
    else if(data<=1122) signe="Escorpí";
    else if(data<=1221) signe="Sagitari";
    else signe="Capricorn";
    console.log("11. Data naixement: " + dia + "-" + mes + 
            ", signe de l'horòscop: " + signe);
})();

// 12
var ex12a = (function (){
    var v1 = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
    var v2 = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
    var i,j,aux;
    
    for(i=1; i < v2.length ; i++){
        for(j=0; j < v2.length-i ; j++){
            if(v2[j] > v2[j+1]){
                aux = v2[j];
                v2[j] = v2[j+1];
                v2[j+1] = aux;
            }
        }
    }
    
    console.log("12a. Ordenar amb algoritme bombolla\n" +
    " v = [" + v1 + "]\n v_ordenat = [" + v2 + "]");
})();



var ex12b = (function (){
    var v1 = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
    var v2 = v1.slice(0); // copio array original
    v2.sort(function (a, b) {
        return a - b;
    });
    console.log("12b. Ordenar amb array sort\n" +
    " v = [" + v1 + "]\n v_ordenat = [" + v2 + "]");
})();

// 14
var ex14a = (function (){
    var x,v,pos,i;
    x = 1;
    v = [4, 9, 6, 5, 7, 8, 5, 3, 0, 2];
    pos = -1;
    for(i=0; i<v.length; i++){
        if(v[i]===x) {
            pos = i;
            break;
        }
    }
    console.log("14a. Cerca array \n v = [" + v + "]" +
    "\n x = " + x +
    "\n pos = " + pos);
    console.log("i = " + i);
})();

var ex14b = (function (){
    var x,v,i;
    x = 1;
    v = [4, 9, 6, 5, 7, 8, 5, 3, 0, 2];
    for(i=0; i<v.length; i++){
        if(v[i]===x) break;
    }
    console.log("14b. Cerca array \n v = [" + v + "]" +
    "\n x = " + x +
    "\n pos = " + ( i===v.length ? -1 : i) );
})();

var ex14c = (function (){
    var x,v,i;
    x = 5;
    v = [4, 9, 6, 5, 7, 8, 5, 3, 0, 2];
    for(i=0; i<v.length && v[i]!==x; i++){}
    console.log("14c. Cerca array \n v = [" + v + "]" +
    "\n x = " + x +
    "\n pos = " + ( i===v.length ? -1 : i) );
})();

// 16
var ex16 = (function (){
    var str1,str2,c,i;
    str1 = "candidatura";
    str2 = "";
    c = "a";
    for(i=0; i < str1.length; i++){
        if(str1[i]!==c) {
            str2 = str2 + str1[i]; // str2 += str1[i];
        }
//        console.log(str2);
    }
    console.log("16. Copia paraula \n str1 = " + str1 + 
    "\n c = " + c +
    "\n str2 = " + str2);
})();

// 18
var ex18 = (function (){
    var mydate="29/02/2015"; // string
    var dia, mes, any, missatge;
    try{
        // extreure dia, mes i any i validar és un nombre sencer
        dia = parseInt(mydate[0]+mydate[1]);
        if(isNaN(dia)) throw "El dia no és un nombre";
        mes = parseInt(mydate[3]+mydate[4]);
        if(isNaN(mes)) throw "El mes no és un nombre";
        any = parseInt(mydate[6]+mydate[7]+mydate[8]+mydate[9]);
        if(isNaN(any)) throw "L'any no és un nombre";
        // validar la data
        if(any<1 || any>9999) throw "Introdueixi anys entre 1 i 9999";
        if(mes<1 || mes>12) throw "Introdueixi mesos entre 1 i 12";
        // dia
        if(dia<1 || dia>31){
            throw "Els mesos tenen entre 1 i 31 dies";
        }else if( 
            (mes===4 || mes===6 || mes===9 || mes===11) && dia===31                
                ){
            throw "Aquest mes té 30 dies";
        }else if(mes===2 && dia>29){
            throw "El més de febrer té entre 1 i 29 dies";
        }else if(
                mes===2 && dia===29 &&
                !((any % 4 == 0 && any % 100 != 0) || any % 400 == 0) //any traspàs bisiesto
                ){
            throw "El més de febrer té entre 1 i 28 dies";
        }else{
            missatge = "Data correcta";
        }
    }catch (e){
        missatge = e;
    }
    console.log("18. Validar dates \n Resultat per la data " + mydate + 
    ": " + missatge);
})();

// 19
var ex19 = (function (){
    var dni_prova01 = "89217127N";
    var dni_prova01 = "39f17127N";
    var missatge;
    if(validarDNI(dni_prova01)){
        missatge = "El DNI/NIE " + dni_prova01 + " és correcte";
    }else{
        missatge = "El DNI/NIE " + dni_prova01 + " no és correcte";
    }
    console.log(missatge);
    
    function validarDNI(dni){
        // comprovar format
        if (dni.length!==9) return false;
        dni = dni.toUpperCase(); // tot a majúscules
        var i, aux = "";
        var lletra = "TRWAGMYFPDXBNJZSQVHLCKEO";
//        // X, Y 1a letra
//        if(dni[0]==='X'){
//            dni.replace("X","0");
//        }else if(dni[0]==='Y'){
//            dni.replace("Y","1");
//        }
        // todo numeros
        for(i=0; i < dni.length-1 ; i++){
            if(!isNaN(parseInt(dni[i]))) aux += dni[i];
            else if(dni[0]==='X') aux = "0";
            else if(dni[0]==="Y") aux = "1";
            else return false;
        }
        return dni[8] === lletra[aux % 23];
    }

})();

// 21
var ex21 = (function (){
    function equacioSegonGrau(a,b,c){
        var discrimant;
        if(a===0 && b===0 && c===0) throw "Infinites solucions";
        if(a===0 && b===0 && c!==0) throw "No té solució";
        discrimant = b*b-4*a*c;
        if(discrimant<0) throw "No té solucions reals";
        if(a==0){
            return -c/b;
        }
        discrimant = Math.sqrt(discrimant);
        return [
            (-b+discrimant)/ (2.0*a),
            (-b-discrimant)/ (2.*a)
        ];        
    }
    
    try{
//        var a=2, b=3, c=-2;
        var a=0, b=2, c=3;
//        var a=4, b=3, c=2;
        var solucions = equacioSegonGrau(a,b,c);
        console.log("21\n Solucions " + solucions);
    }catch (ex){
        console.log("21.\n"+ex);
    }    
})();
