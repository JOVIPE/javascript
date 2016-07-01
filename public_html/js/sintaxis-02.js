
//funciones y ambito

console.log("\n\Ambito (Scope)");
var x=4;
var y;
console.log(x);
x=y;
console.log(x);
console.log(y);
y=6;
console.log(y);
y=y+1;
console.log(y);

var x=4;
console.log(x);
x=z;
console.log(x);
console.log(z);
z=6;
console.log(z);
z=z+1;
console.log(z);
console.log(x);
var z;