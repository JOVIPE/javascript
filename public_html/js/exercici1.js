// crear ambito
(function (){
// 01
var a,b,perimetro,area;
a=6; 
b=4;
area=a*b;
perimetro=2*(a+b); // 2*a + 2*b es lo mismo
// opció 1 --> mostrar resultat escrivint-ho tot de cop
console.log("01-Rectangulo: \na = " + a + 
        "\nb = " + b + 
        "\nàrea = " + area + 
        "\nperímetro = " + perimetro);
// opció 2 --> multilínia
console.log("01-Rectangulo");
console.log("a = " + a);
console.log("b = " + b);
console.log("àrea = " + area);
console.log("perímetro = " + perimetro);

// 02
var a,b,perimetro,area,diagonal;
// las otras variables ya están definidas arriba
a=6; 
b=4;
area=a*b;
diagonal = Math.sqrt(a*a+b*b);
perimetro=a+b+diagonal;
console.log("-------------------------------");
console.log("02-Triangulo rectangulo");
console.log("a = " + a);
console.log("b = " + b);
console.log("àrea = " + area);
console.log("diagonal = " + diagonal);
console.log("perímetro = " + perimetro);

// 03
var dhms, aux, dia, hora, min, seg;
dhms=1056789;
dia= parseInt(dhms/86400); // 1 dia -> 86400 s
aux= dhms%86400;
hora = parseInt(aux/3600); // 1 hora -> 3600 s
aux = aux%3600;
min = parseInt(aux/60);
seg = aux%60;
console.log("-------------------------------");
console.log("03-Calculo dia,horas.minutos y segundos, dados segundos");
console.log( dhms + " segundos equivalen a " + dia + 
        " dias, " + hora + " horas, " + min + " minutos y " + 
        seg + " segundos.");

// 04
var capital, r, t, i, cT;
capital=10000; 
r=5; // 5%
t = 180; // 180 dias
i = (capital*r*t)/(360*100); // 3.6e4-> 360*100=36000
cT=capital+i;
console.log("-------------------------------");
console.log("04-Calculo intereses");
console.log("c = " + capital + " €, r = " + r +  
        " %, t = " + t + " dias, i = " + i +  
        "€, CT = " + cT + "€");

// 05

var suma =0;
for(i=0;i<100;i++){suma+=i;
    //console.log(i);
}
console.log("-------------------------------");
console.log("05-Suma (0-99) = " + suma);

// 06
var dia, n= 2;
dia= n*30;
seg=dia*86400; //1 día = 86400 segundos
console.log("-------------------------------");
console.log("06-Calculo segundos que tienen n meses");
console.log(n + " meses equivalen a " + dia + " dias.");
console.log(n + " meses equivalen a " + seg + " segundos.");

// 07
var max,min,med;
var x= [7, 5, 3, 8, 2];
max=x[0];
min=x[0];
med=x[0];
for (i=1;i<x.length;i++) {
	if (x[i]<min) min=x[i];
	else if (x[i]>max) max=x[i];
	med += x[i];
}
med /=x.length;
console.log("-------------------------------");
console.log("07-Calculo valor minimo, maximo y mediano en un vector dado");
console.log("x = (" + x + "), max = " + max + 
        ", min = " + min + ", medio = " + med );
/*
// con funciones
max = Math.max.apply(null, x);
min = Math.min.apply(null, x);
mitja = x.reduce(function(suma, valor){return suma + valor;}) / x.length;
console.log("07. x = (" + x + "), max = " + max + 
        ", min = " + min + ", mig = " + mitja );
console.log("------------------------------------------------------------------------------------------------------------");
*/

// 08
var suma=0;
var c = 6;
var x= [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
for (i=0;i<x.length;i++) { 
	if(x[i]<c) suma += x[i];
}
console.log("-------------------------------");
console.log("08-Sumar componentes menores que 6 en un arraya daddo");
console.log("x = (" + x + "), suma = " + suma );

/*
// con funciones
suma = x.reduce(function(suma, valor){
    return suma + (valor<c? valor:0);
console.log("08. x = (" + x + "), suma = " + suma );
console.log("------------------------------------------------------------------------------------------------------------");
 */

// 09
var x= [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
var y= new Array(); // puede ser y=[]
var c=4;
for (i=0;i<x.length;i++) {
	if (x[i]<=c) {
            y[y.length]=x[i]; // añade nuevo componente al final
        }
}
console.log("-------------------------------");
console.log("9. Crea una rutina que donat un array v, copiï en un altre vector v2 les components que tinguin un valor més petit o igual que 4. Cas v = (4, 9, 6, 1, 7, 8, 5, 3, 0, 2).");
console.log("x = (" + x + "), y = (" + y + ")");

// 10
var palabra = "prueba";
var longitud=palabra.length;
console.log("-------------------------------");
console.log("10. Crea una rutina que compti el nombre de lletres que té una paraula.");
console.log("La palabra \""+ palabra + "\" tiene  "+ longitud +" caracteres.");

// 11
console.log("-------------------------------");
console.log("11. Crea una rutina que calculi el signo de l'horòscop a partir del dia i del mes de naixement.");
var dia,mes,signo;
dia=3;
mes=6;
if(mes===3 && dia>=21) {signo="Aries";}
else if(mes===4 && dia<=21) {signo="Aries";}
else if(mes===4) {signo="Tauro";}
else if(mes===5 && dia<=21) {signo="Taure¡o";}
else if(mes===5) {signo="Geminis";}
else if(mes===6 && dia<=21) {signo="Geminis";}
else if(mes===6) {signo="Cancer";}
else if(mes===7 && dia<=22) {signo="Cancer";}
else if(mes===7) {signo="Leo";}
else if(mes===8 && dia<=22) {signo="Leo";}
else if(mes===8) {signo="Virgo";}
else if(mes===9 && dia<=22) {signo="Virgo";}
else if(mes===9) {signo="Libra";}
else if(mes===10 && dia<=22) {signo="Libra";}
else if(mes===10) {signo="Escorpíon";}
else if(mes===11 && dia<=22) {signo="Escorpíon";}
else if(mes===11) {signo="Sagitario";}
else if(mes===12 && dia<=21) {signo="Sagitario";}
else if(mes===12) {signo="Capricornio";}
else if(mes===1 && dia<=20) {signo="Capricornio";}
else if(mes===1) {signo="Acuario";}
else if(mes===2 && dia<=19) {signo="Acuario";}
else if(mes===2) {signo="Piscis";}
else if(mes===3 && dia<=20) {signo="Piscis";}
else signo="Error, no se encuentra el signo";
console.log("Fecha: " + dia + "-" + mes + 
        ", horoscopo: " + signo);
/*
 // alternativa
dia=20;
mes=8;
var data = mes*100 + dia;

if(data<=120) signe="Capricornio";
else if(data<=221) signe="Acuario";
else if(data<=320) signe="Piscis";
else if(data<=421) signe="Àries";
else if(data<=521) signe="Tauro";
else if(data<=621) signe="Geminis";
else if(data<=722) signe="Cancer";
else if(data<=822) signe="Leo";
else if(data<=922) signe="Virgo";
else if(data<=1022) signe="Libra";
else if(data<=1122) signe="Escorpío";
else if(data<=1221) signe="Sagitario";
else signe="Capricornio";
 */

// 12
var minimo, posicion, pasos;
var v= [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
posicion=0; 
minimo=0;
pasos = 0;
console.log("-------------------------------");
console.log("12. Crea una rutina que donat un array v, l'ordeni de menys a més amb l'algorisme de bombolla.Cas v = (4, 9, 6, 1, 7, 8, 5, 3, 0, 2).");
console.log("Antes v = (" + v + ")");
for (i = 0; i < v.length-1; i++) {
    // recorremos el vector y buscamos la maás pequeña
    posicion=i;
    for (j = i+1; j < v.length; j++) {
        // buscamos la posición con el valor mínimo del subvector
        if(v[j]<v[posicion]) posicion=j;
        pasos++;
    }
    // intercanviamos posicions
    minimo=v[posicion];
    v[posicion]=v[i];
    v[i]=minimo;  
}
console.log("Despues v = (" + v + ")");
/*
// funció ordenació
v = [4, 9, 6, 1, 7, 8, 5, 3, 0, 2];
v.sort( function(a,b){return a-b;});
console.log("12. v = (4, 9, 6, 1, 7, 8, 5, 3, 0, 2), v_ordenat = (" + v + ")");
console.log("------------------------------------------------------------------------------------------------------------");
*/

// 13
var v1=[1,2,3,4];
var v2=new Array(4,3,2,1);
var productoescalar=0;
if (v1.length!==v2.length) {
	productoescalar="No se puede hacer el calculo, tienen longitudes distintas.";
}else {
	for (i=0; i<v1.length;i++) { productoescalar+=v1[i]*v2[i];}	
    }
console.log("-------------------------------");
console.log("13. Crea una rutina que calculi el producte escalar de dos vectors qualsevol. Nota: Si els vectors tenen longituds diferents no es pot calcular. Donats a = (a1, a2, a3, a4) i b = (b1, b2, b3, b4), llavors a · b = a1 · b1 + a2 · b2 + a3 · b3 + a4 · b4");
console.log("v1 = (" + v1 + "), v2 = ("+ v2 +"). Producto escalar = v1·v2 = " + productoescalar);

/*
try{
    var x = new Array(4,7,1,5,-5);
    var y = [-4,6,8,2,1];
    var pe = 0;
    if (x.length!==y.length) throw "Error: les longituds dels vectors no coincideixen."
    for (i=0; i<x.length;i++) { pe+=x[i]*y[i];}
    console.log("13. x = (" + x + "), y = ("+ y +"). Producte_escalar = x·y = " + pe);
}catch (e){
    console.log("13. " + e);
}
 */

// 14
var v= new Array(4, 9, 6, 5, 7, 8, 5, 3, 0, 2);
var x=5;
var posicion;
i = v.indexOf(x);
posicion =  i !== -1? "està a la posició " + i: x + " no encontrado";
console.log("-------------------------------");
console.log("14. Crea una rutina que retorni la posició de la primera aparició d'un nombre en una matriu d'enters. Cas x = 5 per al vector v = (4, 9, 6, 5, 7, 8, 5, 3, 0, 2).");
console.log("v = (" + v + "), Primera aparición del número  " + x + " " + posicion);
/*
for (i=0; i<v.length;i++) { 
	if (v[i]===x) break;
}
var posicion= i<v.length? "està a la posició " + i: x + " no se encuentra";
console.log("-------------------------------");
console.log("14. Crea una rutina que retorni la posició de la primera aparició d'un nombre en una matriu d'enters. Cas x = 5 per al vector v = (4, 9, 6, 5, 7, 8, 5, 3, 0, 2).");
console.log("v = (" + v + "), Primera aparición del número  " + x + " " + posicion); 
 */

// 15
// faig servir l'algoritme de la bombolla de l'exercici 12
var min, pos;
var v= ["e","d","u","g","t","n","q","o","h","b","v","h","w","y","x","v"];
pos=0; 
min=0;
		
for (i = 0; i < v.length; i++) {
	// Agafem la component i del vector i busquem a partir de i +1 si hi ha alguna més petita 
	pos=i;
	for (j = i+1; j < v.length; j++) {
		// buscamos la posición con el valor mínimo del subvector
		if(v[j]<v[pos]) pos=j;
	}
	// intercanviem posicions
	min=v[pos];
	v[pos]=v[i];
	v[i]=min;
}
console.log("-------------------------------");
console.log("15. Crea una rutina que ordeni per ordre alfabètic una matriu de lletres. Aplicar a e,d,u,g,t,n,q,o,h,b,v,h,w,y,x,v.");
console.log(" v = (e,d,u,g,t,n,q,o,h,b,v,h,w,y,x,v), v_ordenat = (" + v + ")");

/*
v = ["e","d","u","g","t","n","q","o","h","b","v","h","w","y","x","v"];
var v2 = v.sort(); // per defecte l'ordre és alfabètic
console.log("15. v = (" + v + "), v_ordenat = (" + v2 + ")");

*/

// 16
var palabra= "candidatura";
var palabra2="";
var caracter="a";
for (i = 0; i < palabra.length; i++) {
	if(palabra[i]===caracter) continue;
	palabra2+=palabra[i];
}
console.log("-------------------------------");
console.log("16. Crea una rutina que donat un string i un caràcter elimini totes les aparicions de la lletra a l'string. Elimineu totes les lletres 'a' de la paraula 'candidatura'.");
console.log(" palabra: " + palabra + ", caràcter: " + caracter + ", resultado: " +palabra2 );
/*
// alternativa
var str1="candidatura";
var c="a";
var str2="";

for (i=0;i<str1.length;i++) {
	if (str1[i]!=c) str2+=str1[i];
}

console.log("16. El resultat d'extreure " + c + " de " + str1 + " es " + str2);

str2 = str1.replace(c,"");
console.log("16. El resultat d'extreure " + c + " de " + str1 + " es " + str2);
*/

// 17
var fechai = "04/07/2016";
var fechaf = fechai[8] +  fechai[9] + "/" + fechai[3] +  fechai[4] + "/" +  fechai[0] +  fechai[1];

console.log("-------------------------------");
console.log("17. Crea una rutina que converteixi una data en format 'dd/mm/yyyy' en una altra en format 'yy/mm/dd' sense utilitzar funcions d'strings ni dates de javascript.");
console.log("Fecha Original = " + fechai + ", Final = " + fechaf);

// 18
var fecha,dia,mes,anio,mensage;
fecha= "04/07/2016";
try{
    dia=parseInt(fecha[0]+fecha[1]);
    if(isNaN(dia)) throw new Error(" dia fecha incorrecto ");
    mes=parseInt(fecha[3]+fecha[4]);
    if(isNaN(mes)) throw new Error(" mes fecha incorrecto ");
    anio=parseInt(fecha[6]+fecha[7]+fecha[8]+fecha[9]);
    if(isNaN(anio)) throw new Error(" año fecha incorrecto ");
    // año
    if(anio<1 || anio>9999) throw new Error(" año incorrecto. ");
    // mes
    if(mes<1 || mes>12) throw new Error("mes incorrecto.");
    // verificar los dies del mes
    if (dia<1 || dia>31) {
        throw new Error("dia incorrecto. ");
    }else if((mes===4 || mes===6 || mes===9 || mes===11) && (dia===31)) {
        throw new Error("El mes "+ mes + " no puede tener más de 30 dias.");
    }else if(!esbisiesto(anio) && dia>28 && mes===2){
        throw new Error("El mes "+ mes + " de una año no bisiesto no puede tener más de 28 dias.");
    }else if(dia>29 && mes===2){
        throw new Error("El mes "+ mes + " de un año bisiesto no puede tener más de 29 dias");
    }
   mensage = "La fecha " + fecha + " es correcta.";
   
}catch(e){
   mensage=e;
}

console.log("-------------------------------");
console.log("18. Crea una rutina que comprovi que una data en format 'dd/mm/yyyy' és correcta sense utilitzar cap funció de javascript. Només s'admeten anys entre l'1 i 9999.");
console.log(mensage);

function esbisiesto(anio){
	return ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0);
}

// 19
//19. Crear una funció que comprovi si és correcta la lletra del DNI / NIE. El procediment a seguir
//és el següent:
//a. S'elimina la lletra final.
//b. Si és un NIE i comença per X es substitueix per un 0, la Y per un 1 i així
//successivament.
//c. Es calcula la resta o mòdul de dividir el nombre resultant per 23. S'obtindrà un valor
//entre 0 i 23.
//d. La lletra s'obté consultant la llista: 0=T, 1=R, 2=W, 3=A, 4=G, 5=M, 6=Y, 7=F, 8=P,
//9=D, 10=X, 11=B, 12=N, 13=J, 14=Z, 15=S, 16=Q, 17=V, 18=H, 19=L, 20=C, 21=K,
//22=E, 23=O.
var mensage,dni,letra;
var dni="14596233L";
var letra= "TRWAGMYFPDXBNJZSQVHLCKEO";
dni= dni.toUpperCase();
try {
	if (dni.length>9) throw "Longitud del DNI/NIE incorrecta";
	// verificar caràcters
	if(isNaN(parseInt(dni[0])) && dni[0]!=="X" && dni[0]!=="Y" && dni[0]!=="Z") throw "El DNI/NIE empieza por X, Y , Z o 0-9.";
	if (!isNaN(parseInt(dni[0]))) aux = dni.substring(0,8);
	else if (dni[0]==="X")	aux = "0" + dni.substring(1,8); // empieza por X
        else if (dni[0]==="y")	aux = "1" + dni.substring(1,8); // empieza por Y
	else aux = "2" + dni.substring(1,8); // empieza por Z
	// comprobamos los caracteres de 2 a 8 sean números
	for (i=0;i<aux.length;i++) {
		if(isNaN(parseInt(aux[i]))) throw "Las cifras de la posición 2 a 8 tienen que ser numericas.";
            }
	// aux és un string --> convertir a numero entero
	aux= parseInt(aux);	
	if(dni[dni.length-1] !== letra[aux%23]) throw "La letra és incorrecta."	;	
	mensage = "El DNI/NIE " + dni + " és correcto.";
}catch (e) {
	mensage = "Formato incorecto. " + e;
}
console.log("-------------------------------");
console.log("19. Crear una funció que comprovi si és correcta la lletra del DNI / NIE. El procediment a seguir és el següent:");
console.log("DNI/NIE " + dni);
console.log(mensage);

// 20
//20. Escriu una funció segons les següents característiques
// Nom: seguirArray
// Paràmetres d'entrada: variable "a" que és un array,
// Sortida: un array amb les següents components en aquest ordre: valor màxim,
//mínim, un import total, valor mitjà i desviació estàndard calculada com:
//Curs de programació web a l’entorn client. UF2
//2
//𝑠 = √
//1
//𝑁
//Σ(𝑥𝑖 − 𝑥̅)2
//𝑁
//𝑖=1
// Si el paràmetre d'entrada no és un array retornarà un mensage d'error.
// Mostrar el resultat com un string a la consola.
// Aplicar a l'array (15, -25, 3, 48, 65, 32, -8, -14, 5, 32)

var x = [15, -25, 3, 48, 65, 32, -8, -14, 5, 32];
var resultado;
console.log("-------------------------------");
console.log("20. Escriu una funció segons les següents característiques");
try {
	resultado = seguirArray(x);
	console.log("x = (" + x + "). Resultado = (" + resultado + ") (máximo, mínimo, total, media ,desviacion estàndard)");
}catch (e) {
	console.log(" Error. " + e);
}

function seguirArray(a) {
	if(!Array.isArray(a)) throw "No es un array.";
	
	var z= new Array(
		a[0], // maximo
		a[1], // minimo
		a[2], // total 
		0, // meddia
		0 // desviacion
	);
	
	for (i=1; i<a.length;i++) {
		if (a[i]<z[1]) z[1]=a[i];
		if (a[i]>z[0]) z[0]=a[i];
		z[2] += a[i];
	}
	// media
	z[3] = z[2] / a.length; 
	// desviació
	for (i=0; i<a.length;i++) {
		z[4] += (a[i]-z[3])*(a[i]-z[3]);
	}
	z[4]= Math.sqrt(z[4]/a.length);	
	return z;
}

/*
x = [15, -25, 3, 48, 65, 32, -8, -14, 5, 32];
var resultat, resultat;
try {
    if(!Array.isArray(x)) throw "No heu passat un array.";
    var resultat= new Array(
            Math.max.apply(null, x), // max
            Math.min.apply(null, x), // min
            x.reduce(function(suma, valor){return suma + valor;}), // sum
            0, // mitjà
            0 // desviació estàndard
    );
    resultat[3] = resultat[2] / x.length;
    resultat[4] = Math.sqrt(x.reduce(function(suma, valor){
        return suma + (valor - resultat[3])*(valor - resultat[3]);
    }) / x.length);
    
	resultat = seguirArray(x);
	console.log("20. x = (" + x + "). Resultats = (" + resultat + ") màxim, mínim, suma, mitjana i desviació estàndard");
}catch (e) {
	console.log("20. Error. " + e);
}

 */

// 21
//21. Crea una funció que resolgui una equació de segon grau.
//𝑥 =
//−𝑏 ± √𝑏2 − 4𝑎𝑐
//2𝑎
//La funció torna una única variable que pot ser:
// Un array amb dos components si té 2 solucions
//i. Es compleix que a≠0 i b2-4ac≥0
//ii. x1
//𝑥1 =
//−𝑏 + √𝑏2 − 4𝑎𝑐
//2𝑎
//iii. x2
//𝑥2 =
//−𝑏 − √𝑏2 − 4𝑎𝑐
//2𝑎
// Un nombre real si en té 1
//i. Es compleix que a =0
//ii. x = –c/b.
// un mensage d'error si no té solucions reals
//i. Es compleix que b2-4ac<0

var a,b,c;
var mensage;
console.log("-------------------------------");
console.log("21. Crea una funció que resolgui una equació de segon grau.");
try {
	//a=0,b=1,c=2; //solucion -2
        a=2; b=4; c=-6;// Solución 1,-3
	//a=1; b=2; c=1; // Solución doble 1
	//a=2; b=2; c=1; // Sin soluciones reales
	mensage = ecuacion(a,b,c);
	console.log("Ecuación: a= " + a + ", b = " + b + ", c = " + c + ". Solución: " + mensage);
}catch (e) {
	console.log("Ecuación: a= " + a + ", b = " + b + ", c = " + c + ". " + e);
}
function ecuacion(a, b, c) {
    var calculo;
    if (a === 0)
        return -c / b;
    calculo = (b * b) - (4 * a * c);
    if (calculo < 0)
        throw "Ecuacion sin soluciones reales.";
    else {
        return new Array(
            (-b + Math.sqrt(calculo)) / (2 * a),
            (-b - Math.sqrt(calculo)) / (2 * a)
        );
    }

}
/*
// alternativa
var a,b,c,sol;
a=2; b=3; c=-2;
sol=ecuacion_2(a,b,c);
console.log("21. " + sol);

function ecuacion_2(a,b,c) {
    if (a == 0)
        return -c / b;
    var disc = b * b - 4 * a * c;
    if (disc < 0)
        return "L'equació no té solucions reals";
    else {
        return [
            (-b + Math.sqrt(disc)) / (2 * a),
            (-b - Math.sqrt(disc)) / (2 * a)
        ];
    }
}
*/
})();



