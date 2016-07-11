// mesurar rendiment

function ordenacioBombolla(vector){
    var i,j,aux;
    
    for(i=1; i < vector.length ; i++){
        for(j=0; j < vector.length-i ; j++){
            if(vector[j] > vector[j+1]){
                aux = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = aux;
            }
        }
    }
};

function mySort(vector){
    vector.sort(function (a, b) {
        return a - b;
    });
};

var v1 = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
var n = 1000000;
var ti, tf, t;

ti = new Date();
for(i=0;i<n;i++){ mySort(v1); }
tf = new Date();
t = (tf.getTime()-ti.getTime()) / 1000;
console.log("Rendiment sort\n n = " + n +
        "\n t = " + t);

ti = new Date();
for(i=0;i<n;i++){ ordenacioBombolla(v1); }
tf = new Date();
t = (tf.getTime()-ti.getTime()) / 1000;
console.log("Rendiment bombolla\n n = " + n +
        "\n t = " + t);







