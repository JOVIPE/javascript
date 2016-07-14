var calculadora=(function(){
    var pantalla, botones, numerodigitos, error, memoria, operacion, nuevaoperacion; 
    
    function privateInitApp(){
        memoria = null;
        operacion = null;
        numerodigitos = 15;
        error = 'Error';
        nuevaoperacion = true;
        pantalla = document.getElementById("pantalla");
        botones =  document.getElementsByTagName("li");
        for(var i = 0; i < botones.length; i++){
            botones[i].addEventListener("click",dartecla,false);
        }
    };
    function dartecla(marcada){
        dartecla.ctrl=dartecla.ctrl || /^-?\d*.\d*\$/;
        var tecla=marcada.currentTarget.innerHTML;
        console.log(tecla);
        //pantalla.innerHTML = tecla;
        if(!tecla) return false; 
        var calculo=0;
         if(pantalla.innerHTML === error && tecla === 'C'){
            pantalla.innerHTML = "0";
            reset();
        } else if(pantalla.innerHTML === error){
            return false;
        } else if(tecla==="C"){
            pantalla.innerHTML = "0";
            reset();
        }else if(isFinite(tecla)){
            if(nuevaoperacion || pantalla.innerHTML === "0") {
                pantalla.innerHTML = tecla;
                nuevaoperacion = false;
            } else if(pantalla.innerHTML.length < numerodigitos) pantalla.innerHTML +=  tecla;
        } else if(tecla === '.'){
            if(nuevaoperacion || pantalla.innerHTML === "0"){
                pantalla.innerHTML = tecla;
                nuevaoperacion = false;
            } else if(!dartecla.ctrl.test(pantalla.innerHTML) && pantalla.innerHTML.length < numerodigitos) pantalla.innerHTML +=  tecla;
        } else if(tecla === 'CE'){
            pantalla.innerHTML = "0";
        } else if(tecla === '\u2190'){ // ←
            if(pantalla.innerHTML.length===1) pantalla.innerHTML = "0";
            else pantalla.innerHTML = pantalla.innerHTML.substring(0, pantalla.innerHTML.length-1);
        } else if(tecla === '\u00b1'){ // ±
            if(pantalla.innerHTML === "0" || pantalla.innerHTML === ".") return false;
            if(pantalla.innerHTML[0]==='-') pantalla.innerHTML = pantalla.innerHTML.substring(1);
            else pantalla.innerHTML = '-' + pantalla.innerHTML;
        } else if(tecla === '\u221a'){ // √
            calculo = parseFloat(pantalla.innerHTML);
            if(calculo<0) pantalla.innerHTML = error;
            else{
                pantalla.innerHTML = redondeo(Math.sqrt(calculo));
            }        
            nuevaoperacion = true;
        } else if(tecla === '1/x'){ // √
            calculo = parseFloat(pantalla.innerHTML);
            if(calculo===0) pantalla.innerHTML = error;
            else{
                pantalla.innerHTML = redondeo(1./calculo);
            }            
            nuevaoperacion = true;
        } else if(tecla === '+' || tecla === '-'  || tecla === '*' || tecla === '/'){
            if(operacion === null){
                memoria = parseFloat(pantalla.innerHTML);
                operacion = tecla;
            } else {
                calculo = parseFloat(pantalla.innerHTML);
                hacercalculo(calculo);
                operacion = tecla;
            }
            nuevaoperacion = true;
        } else if(tecla === '='){ 
                calculo = parseFloat(pantalla.innerHTML);
                hacercalculo(calculo);
                operacion = null;
            }
    };
    function reset(){
        operacion = null;
        memoria = null;
    }
    function hacercalculo(c){
        if( operacion === "+" || operacion === "-"){
            if(memoria === null) memoria = 0;
            memoria += (operacion==='+' ? c: -c);
            pantalla.innerHTML = redondeo(memoria);
            nuevaoperacion = true;
        } else if( operacion === "*" || operacion === "/"){
			if(c===0 && operacion==="/") pantalla.innerHTML = error;
			else{
				if(memoria === null) memoria = 1;
				memoria *= (operacion==='*' ? c: (1./c));
				pantalla.innerHTML = redondeo(memoria);				
			}
            nuevaoperacion = true;
        } 
    }
    return{
        initApp: privateInitApp
    };
    function redondeo(num){
         redondeo.ctrl = redondeo.ctrl || /^-?\d*\.(\d*)$/;
        var redondeado, numerodecimal, resto, digitos;
        digitos = num.toString().length;
        if(digitos < numerodigitos){
            redondeado = num;
        } else if(num.toString().indexOf('.') === -1){
            redondeado = error;
        } else{
            resto = digitos - numerodigitos;
            numerodecimal = num.toString().match(redondeo.ctrl)[1].length;
            redondeado = Math.round(num * Math.pow(10,numerodecimal-resto)) / Math.pow(10,numerodecimal-resto);
        }
        return redondeado; 
    }
})();

window.addEventListener("load",calculadora.initApp);


