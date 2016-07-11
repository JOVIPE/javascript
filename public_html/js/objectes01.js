// Rectangle

var objectes01 = (function(){
    
    var Rectangle01 = function(a,b){
        // propietats
        this.a = a? Math.abs(a) : 0 ; // if(a està definit) -> a else 0
        this.b = b? Math.abs(b) : 0 ;
        // mètodes
        this.area = function (){ return this.a*this.b};
        this.perimetre = function (){ return 2*this.a + 2*this.b; };
        this.diagonal = function(){
            return Math.sqrt(this.a*this.a + this.b*this.b);
        };
    }
    
    try{
        var r01 = new Rectangle01();
        console.log(r01.perimetre());
        var r02 = new Rectangle01(3);
        console.log(r02.perimetre());
        var r03 = new Rectangle01(3,2);
        console.log(r03.perimetre());
        var r04 = new Rectangle01(-5,8);
        console.log(r04.perimetre());
        var r05 = new Rectangle01("asd","as");
        console.log(r05.perimetre());
        var r06 = new Rectangle01(undefined,undefined);
        console.log(r06.perimetre());
    }catch(ex){
        console.log(ex);
    }
    
    var Rectangle02 = function(){
        // propietats
        
        // constructor 
        if (arguments.length === 0){
            // decisió de l'analista
            this.a = 1;
            this.b = 1;
        }else if(arguments.length === 1){
            // quadrat
            this.a = setArgument(arguments[0]);
            this.b = this.a;
        }else if(arguments.length === 2){
            this.a = setArgument(arguments[0]);
            this.b = setArgument(arguments[1]);
        }else{
            throw "Només es poden pasar dos paràmetres";
        };
        
        function setArgument(arg){
            var a = parseFloat(arg);
            if(isNaN(a)) throw "Introdueixi un valor numèric";
            if(a<=0) throw "Només s'admeten valor més grans que 0";
            return a;
        };

        // mètodes
        this.area = function (){ return this.a*this.b};
        this.perimetre = function (){ return 2*this.a + 2*this.b; };
        this.diagonal = function(){
            return Math.sqrt(this.a*this.a + this.b*this.b);
        };
    }
    
    try {
        console.log("---------------------------------");
        var re01 = new Rectangle02();
        console.log(re01.perimetre());
        var re02 = new Rectangle02(3);
        console.log(re02.perimetre());
        var re03 = new Rectangle02(3,5);
        console.log(re03.perimetre());
//        var re04 = new Rectangle02(3,0);
//        console.log(re04.perimetre());
//        var re05 = new Rectangle02("asdf",3);
//        console.log(re05.perimetre());
        var re06 = new Rectangle02(3,5,6,78);
        console.log(re06.perimetre());
        
    }catch(ex){
        console.log(ex);
    }
    
    
    
})();


