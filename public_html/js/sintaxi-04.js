/* 1. A l'àmbit global */
// 1
var a, b, ar, p;
// dades del rectangle
a = 5; b = 3;
// càlculs
ar = a*b;
p = 2*a + 2*b;
// mostrar solucions
console.log("1. \a = " + a +
"\nb = " + b +
"\nárea = " + ar + 
"\nperímetro = " + p);

/* 2. àmbit local funció inmediata */
var c = 5; // definida a fora de la funció immediata (global)
(function (){
    var a, b, ar, p, x;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = 2*a + 2*b;
    // mostrar solucions
    console.log("1. \a = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetro = " + p);
    console.log("c = " + c);
    x = "abc";
})();
//console.log(x);

/* 3. espai de noms */
// guardo una funció a la variable myScope
var myScope = (function (){
    var a, b, ar, p, x;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = 2*a + 2*b;
    // mostrar solucions
    console.log("1. \a = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetro = " + p);
    console.log("c = " + c);
    x = "abc";
});
console.log("myScope = " + myScope);
// executo la funció
myScope();

// guardo el resultat de cridar una funció anònima a la variable myScope
var myScope2 = (function (){
    var a, b, ar, p, x;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = 2*a + 2*b;
    // mostrar solucions
    console.log("1. \a = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetro = " + p);
    console.log("c = " + c);
    x = "abc";
    return true; // demo es pot tornar un valor i emmagatzemar a var myScope2
})();
console.log("myScope2 = " + myScope2);

/* 4. mòdul */
var myModul = (function (){
    var a, b, ar, p, x;
    // dades del rectangle
    a = 5; b = 3;
    // càlculs
    ar = a*b;
    p = 2*a + 2*b;
    // mostrar solucions
    console.log("myModul");
    console.log("1. \a = " + a +
    "\nb = " + b +
    "\nárea = " + ar + 
    "\nperímetro = " + p);
    // variable global
    console.log("c = " + c);
    x = "abc";
    return {
        A: a,
        B: b,
        X: x
    };
})();

console.log("A = " + myModul.A);

var myObject = function (){
    var a, b;
    // càlculs
    var area = function(){ return a*b; };
    var perimetre = function(){ return 2*a + 2*b; }; 
    var imprimir = function(){
        console.log("1. \a = " + a +
        "\nb = " + b +
        "\nárea = " + area + 
        "\nperímetro = " + perimetre());        
    };
    return {
        a: a,
        b: b,
        area: area,
        perimetre: perimetre,
        imprimir: imprimir
    };
};
console.log("Objecte");
var rect = new myObject();
rect.a = 5;
rect.b = 3;
console.log("Àrea = " + rect.area());
rect.imprimir();