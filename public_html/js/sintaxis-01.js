var x,y,z;
x=1;
y=0;
z=x/y; // ! z-> infinit!!
console.log("x = " + x + "\ny = " + y + "\nz = x/y = " + z); // /n=salto de linia +=concatenar variables con texto

var a=x/z;
console.log("x = " + x + "\nz = " + z + "\na = x/z = " + a);

var b=NaN;
var a= x / b;
console.log("x = " + x + "\nb = " + b + "\na = x/b = " + a);

//escribir caracteres unicode
console.log("\u265e"); // va en hexadecimal

var str = "Hola món!";

console.log(str[0] + " " + str[6]); // solo escribe la 1 letra  y la 6 

str[6]="a"; // lo deja igual, no se puede sustituir
console.log(str[0] + " " + str[6]);

//objecte
var r={
    a:3,
    b:5,
    c:"hola"
};
console.log(r);
// acces a components de un objeto como objeto
console.log(r.a + "\n" + r.b + "\n" + r.c[3]); 
// acceso a componentes de un objeto como array
console.log(r['a'] + "\n" + r['b'] + "\n" + r['c'][3]); 


// array
var s=[3,5,"hola"];
console.log(s);
console.log(s[0]+ "\n" + s[1] + "\n" + s[2][3]);

// añadir una ppropiedad a r
r.d="que bien me lo paso";
console.log(r);

console.log("PI = " + Math.PI);

console.log(3 + undefined);
console.log(3 + null);

console.log(parseFloat("NaN")); // torna NaN

//funciones y ambito

console.log("\n\Ambito (Scope)");
var x=-4;
console.log(x);
console.log(yy);
if(x>0){
    var yy=6;
}
console.log(yy);