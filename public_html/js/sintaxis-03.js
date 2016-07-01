console.log("sintaxis-03.js")
x=34;
console.log(x);
console.log(z);



// suma dels 10 primers nombres (del 0 al 9)
x= new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
i = 0;sum = 0;
while (i < 10){
sum += x[i];
i += 1;
}
console.log("while " +sum);

// suma dels 10 primers nombres(del 0 al 9)
x= new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
i = 0;
sum = 0;
do {
sum += x[i];
i += 1;
} while (i <10);
console.log("do while " +sum);

// suma dels 10 primers nombres(del 0 al 9)
x= new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
sum = 0;
for(i=0; i<10; i++){
sum += x[i];
}
console.log("for " +sum);

var i, j;
loop1:
for (i = 0; i < 3; i++) {
loop2:
for (j = 0; j < 3; j++) {if (i == 1 && j == 1) {
continue loop1;
}
console.log("i = " + i + ", j = " + j);
}
}