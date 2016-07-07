// Objecte global
var x = 34*Math.PI;
var str = "console.log(" + x + ");";
console.log(str);
eval(str);
str = "console.log(x)";
console.log(str);
eval(str);

// Array
var paller = [1,5,4,8,0,2,1];
var pos;
var agulla = 8;

pos = paller.indexOf(agulla);
console.log(pos);
pos = paller.indexOf(agulla,4);
console.log(pos);
agulla = 1;
pos = paller.indexOf(agulla,-2);
console.log(pos);

var x = [1,5,4,8,0,2,1];
var i, suma = 0;
for(i = 0; i<x.length; i++){
    suma += x[i];
}
console.log( "x = [" + x + "]\nsuma = " + suma);

// forEach
suma = 0;
x.forEach( function (valor){
    suma += valor;
});
console.log( "x = [" + x + "]\nsuma = " + suma);

var x = [1,5,4,8,0,2,1, 12, 22, 32, 101, 9];
console.log( "x = [" + x + "]");
x.sort();
console.log( "x = [" + x + "]");

x = [1,5,4,8,0,2,1, 12, 22, 32, 101, 9];
x.sort(
    function(a,b){
        return b-a; // ordre numèric descendent
    }
);
console.log( "x = [" + x + "]");

x = [1,5,4,8,0,2,1, 12, 22, 32, 101, 9, "a"]; // cas extrany
x.sort(
    function(a,b){
//        console.log(a + ", " + b );
        return a-b;
    }
);
console.log( "x = [" + x + "]");

// comprovo si tots els elements de l'array són més grans que el valor de test
var x = [6,5,4,8,0,2,1];
var test = -5;
var resultat = x.every( function(valor, index, myarray){
        return valor>test;
    }
);
console.log( "x = [" + x + "]");
console.log(resultat);

var x = [6,5,4,8,0,2,1];
var test = 5;
var i, resultat = true;
for(i=0; i<x.length; i++){
    if(x[i]<test) {
        resultat = false;
        break;
    }
}
console.log( "x = [" + x + "]");
console.log(resultat);

var mydata01 = new Date();
console.log(mydata01);
var mydata02 = new Date("2016-02-29");
console.log(mydata02);
var mydata03 = new Date("2016-02-35"); // incorrecta
console.log(mydata03);
var mydata04 = Date.UTC(2016,8,1,12,0,0); // torna un number
console.log(mydata04);
console.log(mydata01.toString());
console.log(mydata01.toDateString());
console.log(mydata01.toLocaleDateString());
console.log(mydata01.toUTCString());
console.log(mydata01.toISOString());
console.log(mydata01.toJSON());

var d = new Date("2016-02-28T12:30:00.000Z");
console.log(d.toString());
// Afegir 3 mesos, 2 dies, 5 h
var t = 3*30*24*60*60*1000 + 2*24*60*60*1000 + 5*60*60*1000; // ms
var d1 = d.getTime() + t; // ms
var d2 = new Date(d1);
console.log(d2.toString());

// JSON
var coord = {
  lat: 35.25,
  long: 122.12
};

console.log(JSON.stringify(coord));

var z = '[1,3,4,65,"ab"]';
console.log(JSON.parse(z));
