// Exercici2
// 1. Escriu una rutina que substitueixi les 'a' per 'A' en el següent string: "La figura 4a divideix un heptàgon de dues maneres diferents."
var ex201 = (function (){
var frase="La figura 4a divideix un heptàgon de dues maneres diferents.";
var patron=/[aà]/g;
var substituta= "A";
var frasenueva=frase.replace(patron,substituta);
/*
// Alternativa amb expressió regular i funció anònima
// La regexp captura totes les aparicions de la lletra amb amb totes les variants i crida cada cop 
// la funció anònima per calcular la lletra que ha de substituir l'original
// $1 --> és una variable on s'emmagatzema la captura i que podem fer servir per recuperar-la
// Si haguéssim més captures es dirien $2, $3...
// Aquesta variable només està disponible amb la funció replace.
var frasenueva = frase.replace(/([aàáäâ])/g,function ($1) {
    var origen="aàáäâ";
    var desti ="AÀÁÄÂ";
    return desti[origen.indexOf($1)];
});
*/
console.log("-------------------------------");
console.log(" 1. Escriu una rutina que substitueixi les 'a' per 'A' en el següent string: La figura 4a divideix un heptàgon de dues maneres diferents.");
console.log("Frase: " + frase + "\nletra a cambiar: " + patron + "\nSubstituta: " + substituta + 
"\nResultado: " + frasenueva);
})();

// 2. Escriu una rutina que retorni la posició de la primera aparició del número 5 en el vector v =(4,5,9,6,1,7,8,5,3,0,2).
var ex202 = (function (){
var v= new Array(4,5,9,6,1,7,8,5,3,0,2);
var x=5;
var posicion;
/*
for (i=0; i<v.length;i++) { 
	if (v[i]===x) break;
}
var posicion= i<v.length? "està a la posició " + i: x + " no se encuentra"; 
*/
i = v.indexOf(x);
posicion =  i !== -1? "està a la posició " + i: x + " no encontrado";
console.log("-------------------------------");
console.log(" 2. Escriu una rutina que retorni la posició de la primera aparició del número 5 en el vector v =(4,5,9,6,1,7,8,5,3,0,2).");
console.log("v = (" + v + "), Primera aparición del número  " + x + " " + posicion);
})();

// 3. Escriu una funció que retorni la primera paraula que comenci per a al string "Amanece, la casa es de color amarillo, verde i azul". Utilitzar funcions de strings.
var ex203=(function(){
var frase="Amanece, la casa es de color amarillo, verde i azul";
var palabra=/\b(?:[aàá][\w·]*)/i; 
console.log("-------------------------------");
console.log("3. Escriu una funció que retorni la primera paraula que comenci per a al string ");
console.log("Frase: " + frase + "\nla priemra palabra que empieza por a: " + frase.match(palabra));
/*
// Si vull totes les paraules que comencen per a
var palabra=/\b(?:[aàá][\wñç·]*)\b/gi; // \b inici paraula, (?:) no captura grups)

*/
})();

// 4. Escriu una funció que trobi la darrera aparició d'una paraula a un string. Proba a cercar “casa” a “La casa familiar estava a un poble petit. La casa era molt maca i li agradava atothom”.
var ex204=(function(){
var frase="La casa familiar estava a un poble petit. La casa era molt maca i li agradava a tothom";
var palabra="casa";
console.log("-------------------------------");
console.log("4. Escriu una funció que trobi la darrera aparició d'una paraula a un string");
console.log("Frase: " + frase + "\nPosición de la ultima aparición de " + palabra + ": " + frase.lastIndexOf(palabra));
})();

//5. Escriu una funció que encripti/desencripti un text utilitzant l'algorisme Caesar. Aquest
//mètode consisteix a substituir cada lletra del mensaje per una altra que s'obté desplaçant
//"d" posicions segons l'alfabet. El valor de "d" ve marcat per la lletra escollida per codificar
//els mensajes.
//A=0, B=1, C=2, D=3, E=4, F=5, G=6, H=7, I=8, J=9, K=10, L=11, M=12, N=13, O=14, P=15,
//Q=16, R=17, S=18, T=19, U=20, V=21, W=22, X=23, Y=24, Z=25
//Per xifrar una lletra se utilitza xLC = (xLO + d) mod 26
//Y para desxifrar: xLO = (xLC + 26 - d) mod 26
//on:
// x posició de la lletra en la taula de 0 a 25
// d desplaçament, posició de la lletra utilitzada per a codificar
// LO  lletra original
// LC  lletra xifrada
//Desplaçament K
//LA FIGURA DIVIDE UN HEPTAGONO DE DOS MANERAS DIFERENTES
//VK PSQEBK NSFSNO EX ROZDKQYXY NO NYC WKXOBKC NSPOBOXDOC
var ex205=(function(){

console.log("-------------------------------");
console.log("5. Escriu una funció que encripti/desencripti un text utilitzant l'algorisme Caesar");
function algoritmoCaesar(mensaje,desplazamiento,sentido) {
    // sentido 0 -> Encriptado, 1 -> Desencriptado
    var tablaCodigo="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var mensajeSecreto="";
    var pos,des;
    desplazamiento = tablaCodigo.indexOf(desplazamiento);// nos da la posicion en tabla del desplazamiento, en este caso K
    for (i=0;i<mensaje.length;i++) {
        if (mensaje[i]===" ") {
            mensajeSecreto += " ";
            continue;
        }  
        pos = tablaCodigo.indexOf(mensaje[i]);
        //des = (sentido===0)? (pos+desplazamiento)%26 : (pos+26-desplazamiento)%26;
        des = sentido? (pos+26-desplazamiento)%26:(pos+desplazamiento)%26;
        /*
        des = (pos+desplazamiento)%26;
        if (sentido===1) des = (pos+26-desplazamiento)%26;
        */
        mensajeSecreto += tablaCodigo[des];
    }
    return mensajeSecreto;
}

var mensaje="LA FIGURA DIVIDE UN HEPTAGONO DE DOS MANERAS DIFERENTES";
var resultado = algoritmoCaesar(mensaje,'K',0);
console.log("Desplazamiento: " + 'K' + ", sentido: encriptado\n" + mensaje + "\n" + resultado);
resultado =  algoritmoCaesar(resultado,'K',1);
console.log("Desplazamiento: " + 'K' + ", sentido: desencriptado\n" + resultado);
})();

// 6. Escriu una rutina que faci el següent:
//a. Crea un array buit.
//b. Omple’l amb el nombre -1 (longitud de l’array 8).
//c. A cada component li sumes un valor aleatori entre 1 i 13.
//d. L’ordenes per ordre invers.
//e. Extreus el primer element.
//f. Extreus els dos darrers.
//g. Afegeix una nova component amb el valor 5.
//h. Reordena aleatòriament l’array.
//i. Cerca on es troba l’element 5 ara.
var ex206=(function(){
console.log("-------------------------------");
console.log("6. Escriu una rutina que faci el següent:"); 
// a. Crea un array buit
var z= new Array();
console.log("a. Crea un array buit"); 
console.log("Longitud de l'array = " + z.length);
console.log("Contingut de l'array = (" + z + ")"); 

// b.Omple’l amb el nombre -1 (longitud de l’array 8).
for(i=0;i<8;i++){ z[i]=-1;}
console.log("b.Omple’l amb el nombre -1 (longitud de l’array 8).");
console.log("Contenido del arrayt: ("+ z + ")");
console.log("Longitud del array = " + z.length);
// c.A cada component li sumes un valor aleatori entre 1 i 13.
for(i=0;i<z.length;i++){ 
    z[i] +=1+Math.round(12*Math.random());
}
console.log("c.A cada component li sumes un valor aleatori entre 1 i 13.");
console.log("Array con valores aleatorios: (" + z + ")");
// Alternativa amb funció forEach d'array
/*
z.forEach(
function (element, index, array) {
    return array[index]= element +  1+Math.round(12*Math.random());
});
console.log("Valor aleatoritzat" + z);
*/

// d.L’ordenes per ordre invers
z=z.sort( function (a,b) { return b - a; });
console.log("d.L’ordenes per ordre invers");
console.log("Array ordenado: (" + z + ")");

// e.Extreus el primer element.
z.shift();
console.log("e.Extreus el primer element.");
console.log("Array: (" + z + ")");

// f. Extreus els dos darrers.
z.pop();
z.pop();
console.log("f. Extreus els dos darrers.");
console.log("Array: (" + z + ")");

// g.Afegeix una nova component amb el valor 5.
z.push(5);
console.log("g.Afegeix una nova component amb el valor 5.");
console.log("Array: (" + z + ")");

// h.Reordena aleatòriament l’array.
z= z.sort(function (z1,z2) { 
    var k= -1 + Math.round(2 /*(1--1)*/ *Math.random());
    //console.log(k); 
    return k;
});
console.log("h.Reordena aleatòriament l’array.");
console.log("Array ordenat aleatòriament: (" + z + ")");

// i.Cerca on es troba l’element 5 ara.
console.log("i.Cerca on es troba l’element 5 ara.");
console.log("1a posició de 5 a l'array = " + z.indexOf(5));

})();

//7. Escriu una rutina que faci el següent:
//a. Guarda en una variable la data actual.
//b. Imprimeix per consola l’hora i els minuts.
//c. Crea una variable date amb la teva data de naixement.
//d. Resta les dues variables date anteriors.
//e. Afegeix a la data d’avui 6 dies i 2 mesos. Quina és la nova data?
var ex207=(function(){
// a.
var hoy= new Date();
console.log("-------------------------------");
console.log("7. Escriu una rutina que faci el següent:");
console.log("a. Guarda en una variable la data actual.");
console.log("Fecha actual: " + hoy);
//console.log("Fecha actual: " +hoy + "\n Data en format Unix Epoch [ms]: " + hoy.getTime());

// b.
console.log("b. Imprimeix per consola l’hora i els minuts.");
console.log("Hora: " + hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds());

// c.
var datanacimiento = new Date(1964,6,3);
console.log("c. Crea una variable date amb la teva data de naixement.");
console.log("fecha nacimiento: " +datanacimiento);

// d.
var resta= hoy-datanacimiento;
console.log("Resta les dues variables date anteriors.");
console.log("Edad en milisegons: " + resta); // ms
// diferencia en anys
/*
var edat = parseInt(resta/(1000*60*60*24*365)); // aproximació barroera
console.log("Edad en ños: " + edat); // ms
*/
// e. 
var fechanueva = new Date(hoy.getFullYear(),hoy.getMonth()+2,hoy.getDay()+6);
console.log("Afegeix a la data d’avui 6 dies i 2 mesos. Quina és la nova data?");
console.log("Fecha después de añadir 2 meses y 6 dies a la fecha de hoy:" + fechanueva);
})();

//8. Escriu una funció que torni en un array els nombres necessaris per omplir una primitiva de forma aleatòria.
    function primitiva() {
    var primitiva= new Array();
    var n=6; // cantidad de numeros
    var aleatorio;
    while(primitiva.length<n) {
        aleatorio= 1+ Math.round(48*Math.random());
        if (primitiva.indexOf(aleatorio)===-1) { 
            // no trobat --> l'afegim a la llista
            primitiva[primitiva.length]=aleatorio;
        }	
    }
    // ordena los numeros
    primitiva = primitiva.sort(function (z1,z2) { return z1-z2;});
    return primitiva;
   
};
 console.log("-------------------------------");
 console.log("8. Escriu una funció que torni en un array els nombres necessaris per omplir una primitiva de forma aleatòria."); 
 console.log("Numeros de la primitiva: " + primitiva());
 

 // 9. Escriu una funció que torni en un array els nombres necessaris per omplir una quiniela de   forma aleatòria.
function quiniela() {
    var quiniela = new Array();
    var n = 15; // numero de reusltados
    var aleatori;

    for (i = 0; i < n; i++) {
        aleatori = 1 + Math.round(2 * Math.random());
        switch (aleatori) {
            case 1:
                quiniela[i] = "1";
                break;
            case 2:
                quiniela[i] = "X";
                break;
            case 3:
                quiniela[i] = "2";
                break;
        }
    }
    return quiniela;
}
 console.log("-------------------------------");
 console.log("9. Escriu una funció que torni en un array els nombres necessaris per omplir una quiniela de   forma aleatòria."); 
 console.log("Signos de la quiniela: " + quiniela());
 
//10. Crea una funció que torni true si un nombre és primer i false en cas contrari. Un nombre és
//primer si només és divisible per ell mateix i la unitat. Simplificació: considerarem que és
//primer si no és divisible per cap nombre inferior a la seva arrel quadrada.
console.log("-------------------------------");
console.log("10. Crea una funció que torni true si un nombre és primer i false en cas contrari");
function esPrimer(n) {
    var i;
    if (n === 0)
        return false;
    for (i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
// para probarlo
var i0, i1;
i0 = 0;
i1 = 100;
console.log("Calulo de números primos: " + i0 + "-" + i1);
for (i = i0; i <= i1; i++) {
    console.log(i + ": " + esPrimer(i));
}

