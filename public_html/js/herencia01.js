// Rectangle

var herencia01 = (function(){
    
    var Rectangle = function(){
        // propietats
        
        // constructor 
        if (arguments.length === 0){
            // decisió de l'analista
            this.a = 1;
            this.b = 1;
        }else if(arguments.length === 1){
            // quadrat
            this.a = Rectangle.prototype.setArgument(arguments[0]);
            this.b = this.a;
        }else if(arguments.length === 2){
            this.a = Rectangle.prototype.setArgument(arguments[0]);
            this.b = Rectangle.prototype.setArgument(arguments[1]);
        }else{
            throw "Només es poden pasar dos paràmetres";
        };
        
        // els mètodes i propietats que s'ha d'heretar han d'anar dins una propietat especial
        // anomenada prototype que tenen tots els objectes
        // quan s'invoca un mètode, si no el troba dins la funció el cerca al prototype.
        Rectangle.prototype.setArgument = function (arg){
            var a = parseFloat(arg);
            if(isNaN(a)) throw "Introdueixi un valor numèric";
            if(a<=0) throw "Només s'admeten valor més grans que 0";
            return a;
        };

        // mètodes
        Rectangle.prototype.area = function (){ return this.a*this.b};
        Rectangle.prototype.perimetre = function (){ return 2*this.a + 2*this.b; };
        Rectangle.prototype.diagonal = function(){
            return Math.sqrt(this.a*this.a + this.b*this.b);
        };
    }
    
    try {
        console.log("---------------------------------");
        var re01 = new Rectangle();
        console.log(re01.perimetre());
        var re02 = new Rectangle(3);
        console.log(re02.perimetre());
        var re03 = new Rectangle(3,5);
        console.log(re03.perimetre());
        
    }catch(ex){
        console.log(ex);
    }
    
    // herència simple amb prototype ECMAScript5
    
    // 1. crear funció classe (ha de tenir les mateixes propietats que la classe pare)
    var Quadrat = function (){
        if (arguments.length === 0){
            // decisió de l'analista
            this.a = 1;
            this.b = 1;
        }else if(arguments.length === 1){
            // quadrat
            this.a = this.setArgument(arguments[0]);
            this.b = this.a;
        }else{
            throw "Només es pot pasar un paràmetre";
        };
    };
    // 2. Creem una referència al prototype de la classe pare i l'associem al prototipus de la filla
    Quadrat.prototype = Object.create(Rectangle.prototype);
    // 3. Es crea el constructor
    Quadrat.prototype.constructor = Quadrat;
    
    try {
        console.log("---------------------------------");
        console.log(Quadrat);
        var q01 = new Quadrat(2);
        console.log(q01.perimetre());
        
    }catch(ex){
        console.log(ex);
    }
    
    
})();


