var funcio01 = (function (){
    var x = {
        a: 3,
        b: 5,
        suma: function (){ return this.a+this.b; }
    };
    var y = {
        a: 1,
        b: 2,
        suma: function (){ 
            return this.a*this.a+this.b*this.b; 
        }
    };
    var z = {
        a: 4,
        b: 1
    };
    var w = {
        suma: function (a,b,c){ return a+b+c; }
    }
    
    console.log(x.suma());
    console.log(y.suma());
    console.log( x.suma.call(z) );
    console.log( y.suma.call(z) );
    console.log( x.suma.call(y) );
    console.log(w.suma(1,5,8));
    // posar x,y,z o null no canvia l'execució
    console.log( w.suma.apply(x,[1,5,8]));
    console.log( w.suma.apply(y,[1,5,8]));
    console.log( w.suma.apply(z,[1,5,8]));
    console.log( w.suma.apply(null,[1,5,8]));
    var v = [1,5,8];
    console.log( w.suma.apply(z,v));
    console.log( w.suma.apply(null,v));
    console.log( w.suma.apply(v,v));
    // el context no altera el valor tornat per la funció
    console.log( w.suma.call(z,1,5,8));
    console.log( w.suma.call(null,1,5,8));
    console.log( w.suma.call(v,1,5,8));
    
   
})();

