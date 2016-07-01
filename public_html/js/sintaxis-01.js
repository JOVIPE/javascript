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

