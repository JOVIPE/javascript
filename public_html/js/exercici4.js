(function(){
    // 1. Número de identificación fical NIF per a persones físicas.
    // No se calcula la letra de control
    console.log("1. Número de identificación fical NIF per a persones físicas:");
    var er1 = /^[\dKLMXYZ]\d{7}[A-HJ-NP-TV-Z]$/;
    var nif = "14596233L";
    console.log("NIF. " + nif + " es " + er1.test(nif));
    
    //2. Número d'identificació fiscal per a persones jurídiques
    // No se calcula la letra de control
    console.log("-----------------");
    console.log("2. Número de identificación fical  per a persones juridiques:");
    var er2=/^[A-HJUV]\d{8}|[NP-SW]\D{7}[A-J]$/;
    var nie="A08332322";
    console.log("NIE. " + nie + " es " + er2.test(nie));
    
    //3. Dates amb format ISO yyyy-mm-dd compreses entre l'1 de gener de 1900 i el 31 de desembre de 2050.
    console.log("-----------------");
    console.log("3. Dates amb format ISO yyyy-mm-dd compreses entre l'1 de gener de 1900 i el 31 de desembre de 2050.");
    var er3=/^(?:19\d{2}|20(?:[1-4]\d|50))-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2]\d|3[01])$/;
    var data="2016-07-12";
    console.log("Fecha. " + data + " es " + er3.test(data));
    
    //4. Hores en format hh:mm:ss amb hores entre 00 i 24:
    console.log("-----------------");
    console.log("4. Hores en format hh:mm:ss amb hores entre 00 i 24.");
    var er4=/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    var horas="23:12:12";
    console.log("Horas " + horas + " es " + er4.test(horas));
    
    //5. Hores en format hh:mm:ss AM/PM amb hores entre 00 i 12.
    console.log("-----------------");
    console.log("5. Hores en format hh:mm:ss AM/PM amb hores entre 00 i 12.");
    var er5=/^([0]\d|1[0-2]):([0-5]\d):([0-5]\d(A|P)M)$/;
    var horasAP="10:12:12PM";
    console.log("Horas " + horasAP + " es " + er5.test(horasAP));
    
    //6. Número de telèfon dels USA en format estàndard
    console.log("-----------------");
    console.log("6. Número de telèfon dels USA en format estàndard");
    var er6=/^\(\d{3}\) \d{3}-\d{4}$/;
    var telUSA="(212) 324-4152";
    console.log("Telefono USA " + telUSA + " es " + er6.test(telUSA));
    
    
    // 7. Número de telèfon d'Espanya segons la norma europea. Ha d'incloure els nombres d'emergències i especials.
    console.log("-----------------");
    console.log("7. Número de telèfon d'Espanya segons la norma europea");
    var er7=/^\+34 [6-9]\d{8}|010|011|012|016|060|061|062|080|085|088|091|092|1006|112|116000|116111|103[1-7]|103[89]\d|1040\d{2}|104[1-9]|105[0-7]|105[89]\d|1070\d{2}|107[1-7]|107[89]\d$/;
    var tfno="+34 616141424";
    console.log("Telefono " + tfno+ " es " + er7.test(tfno));
    var tfno1="016";
    console.log("Telefono " + tfno1+ " es " + er7.test(tfno1));
    
    
    //8. Nombres en notació científica de la forma 1.23e45.
    console.log("-----------------");
    console.log("8. Nombres en notació científica de la forma 1.23e45");
    var er8=/^[\+-]?(?:\d*\.?\d+|\d+\.)(?:e[\+-]?\d+)?$/;
    var anotacion="1.23e45";
    console.log("Anotacion " + anotacion + " es " + er8.test(anotacion));
    
    // 9. Nombre reals.
    // Nota: \d+\. és per incloure nombres de l'estil 3.
    console.log("-----------------");
    var re09 = /^[\+-]?(?:\d*\.?\d+|\d+\.)$/;
    nombre = "-3658.45";
    console.log("9. Test números. " + nombre + " és " + re09.test(nombre));  
    nombre = "-.56";
    console.log("9. Test números. " + nombre + " és " + re09.test(nombre));
    nombre = "-3.";
    console.log("9. Test números. " + nombre + " és " + re09.test(nombre));
    
    // 10. Nombres complexos de l'estil 1.234+34.5i.
    // Nota: |\d* és per incloure +/-[ij]
    console.log("-----------------");
    var re10 = /^([\+-]?(?:\d*\.?\d+|\d+\.))?(?:[\+-](?:\d*\.?\d+|\d+\.)|\d*)[ij]$/;
    nombre = "0.5-36.2j";
    console.log("10. Test nombres complexos. " + nombre + " és " + re10.test(nombre));  
    nombre = "-36.2j";
    console.log("10. Test nombres complexos. " + nombre + " és " + re10.test(nombre));  
    nombre = "2j";
    console.log("10. Test nombres complexos. " + nombre + " és " + re10.test(nombre));  
    nombre = "j";
    console.log("10. Test nombres complexos. " + nombre + " és " + re10.test(nombre));  
    
    // 11 Adreça IP segons la IPV4. Mirar els apunts d'UF0.
    console.log("-----------------");
    var re11 = /^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
    var ip = "255.234.10.2";
    console.log("11. Test IP. " + ip + " és " + re11.test(ip));  
    ip = "255.255.255.255";
    console.log("11. Test IP. " + ip + " és " + re11.test(ip));
    ip = "0.0.0.0";
    console.log("11. Test IP. " + ip + " és " + re11.test(ip));    
    ip = "10.169.68.36";
    console.log("11. Test IP. " + ip + " és " + re11.test(ip));
    ip = "10.169.456.36";
    console.log("11. Test IP. " + ip + " és " + re11.test(ip));
    
    // 12 Adreça de correu electrònic.
    // Nota segons https://en.wikipedia.org/wiki/Email_address Un correu està format per local-part@domain
    // local-part fins a 64 chars
    // domain fins a 256
    /* No es comproba
    1. la longitud total no pot passar de 254 
    2. A local-part el punt no pot estar al començament o al final ni 2 cops seguits
    3. algunes condicions extres com caràcters unicode, comentaris, altres caràcters especials que s'apliquen amb restriccions
    4. que al domini hi hagi com a mínim un punt
    5. que el domini sigui una IP
    6. que existeixi el compte i/o el domini
    */
    console.log("-----------------");
    var re12 =  /^[a-zA-Z\d#\-_~!$&'\(\)\*\+,;=\:\.]{1,64}@[a-zA-Z\d\.\-]{1,253}$/;
    var mail = "customers.care@acme.com";
    console.log("13. Test correu electrònic. " + mail + " és " + re12.test(mail));
    mail = "customers.care@acme"; // no vàlid -> fals true
    console.log("13. Test correu electrònic. " + mail + " és " + re12.test(mail));
    mail = "customers.care.@acme.com"; // no vàlid -> false true
    console.log("13. Test correu electrònic. " + mail + " és " + re12.test(mail));
    mail = "customers.careacme.com";
    console.log("13. Test correu electrònic. " + mail + " és " + re12.test(mail));
    
    // 13 Adreça web. (ha d'incloure l'https)
    // Nota:  Sintaxi simplificada http://domain:port/path?query_string#fragment_id
    console.log("-----------------");
    var re13 = /^https?:\/\/[a-zA-Z\d\.]+(?::\d+)?(?:\/[a-zA-Z\d\.]+)*(?:\?[a-zA-Z\d\.=&]+)?(#[a-zA-Z\d\.]+)?$/;
    var url = "http://www.gencat.cat";
    console.log("13. Test adreça web. " + url + " és " + re13.test(url));
    url = "https://gencat.cat/soc/index.html?name=lluis&cognom=ocea#s1";
    console.log("13. Test adreça web. " + url + " és " + re13.test(url));
    url = "https://gencat.cat";
    console.log("13. Test adreça web. " + url + " és " + re13.test(url));
    url = "gencat.cat";
    console.log("13. Test adreça web. " + url + " és " + re13.test(url));
    
    // 14 Adreça FTP.
    // Nota:  Sintaxi simplificada ftp://domain:port/path
    console.log("-----------------");
    var re14 = /^ftp:\/\/[a-zA-Z\d\.]+(?::\d+)?(?:\/[a-zA-Z\d\.]+)*$/;
    var url = "ftp://www.gencat.cat";
    console.log("13. Test adreça ftp. " + url + " és " + re14.test(url));
    
    // 15 Etiquetes HTML per a caixes de text i de contrasenya.
    console.log("-----------------");
    var re15 = /<input(?:\s+.+\s+|\s)+type=["'](?:text|password)["'](?:\s+.+?|\s)*\/?>/mi;
    var etiqueta = "<input type=\"text\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<inputtype=\"text\"/>";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\" type=\"text\"/>";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\" type=\"text\" class=\"input-text\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\" type=\"text\"class=\"input-text\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\"type=\"text\" class=\"input-text\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<inputid=\"int\"type=\"text\"class=\"input-text\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\" type=\"text\" class=\"input-text\"/>";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));
    var etiqueta = "<input id=\"int\" type=\"text\" class=\"input-text\" value=\"lluís\" />";
    console.log("15. Test etiqueta input HTML. " + etiqueta + " és " + re15.test(etiqueta));

    // 16 Adreça MAC.
    console.log("-----------------");
    var re16 = /^(?:[\dA-F]{2}[-:]){5}[\dA-F]{2}$/;
    var mac = "F0:E1:D2:C3:B4:A5";
    console.log("16. Test MAC. " + mac + " és " + re16.test(mac));
    var mac = "F0-E1-D2-C3-B4-A5";
    console.log("16. Test MAC. " + mac + " és " + re16.test(mac));
    
    // 17 Llicència de Windows de la forma XXXXX-XXXXX-XXXXX-XXXXX-XXXXX on X pot ser un nombre sencer o un caràcter.
    console.log("-----------------");
    var re17 = /^(?:[\d[A-Z]{5}-){4}[\d[A-Z]{5}$/;
    var llicencia = "JQ4T4-8VM63-6WFBK-KTT29-V8966";
    console.log("16. Test Windows serial. " + llicencia + " és " + re17.test(llicencia));
    
    // 18Torna a fer l'exercici 1-18 afegint la validació de l'string amb una expressió regular.
    //a. Les dates estaran compreses entre l'1 de gener de 1900 i el 31 de desembre de 2050.
    //b. El format de la data és dd/mm/yyy
    //Crea una rutina que comprovi que una data en format 'dd/mm/yyyy' és correcta sense
    //utilitzar cap funció de javascript. Només s'admeten anys entre l'1 i 9999.
    console.log("-----------------");
    function esDataValida(strData){
        // Nota: la RE no verifica els dies del mes pel messos de menys de 31 dies ni els anys de traspàs
        var re = /^(?:0[1-9]|[1-2]\d|3[01])\/(?:0[1-9]|1[0-2])\/(?:19\d{2}|20(?:[1-4]\d|50))$/;
        var dia, mes, any;
        if(!re.test(strData)) throw "El format de la data no és correcte";
        dia = parseInt(strData[0] + strData[1]);
        mes = parseInt(strData[3] + strData[4]);
        any = parseInt(strData[6] + strData[7] + strData[8] + strData[9]);
        if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && (dia === 31)) {
            throw "El mes " + mes + " no té  més de 30 dies.";
        } else if (!esAnyTraspas(any) && dia > 28 && mes === 2) {
            throw "El mes " + mes + " d'un any que no és de traspàs no té més de 28 dies.";
        } else if (dia > 29 && mes === 2) {
            throw "El mes " + mes + " d'un any de traspàs no té més de 29 dies.";
        }
        return "La data " + strData + " és correcte";
    }
    
    function esAnyTraspas(any) {
        return (any % 4 === 0 && any % 100 !== 0) || any % 400 === 0;
    }
    
    var missatge;
    try{
        //d ="29/02/1900";
        //d ="29/02/2000";
        //d ="29/02/2012";
        missatge = esDataValida("07/07/2014");
    }catch (e) {
        missatge = e;
    }
    console.log("18. " + missatge);

    // 19 Torna a fer l'exercici 1-19 afegint la validació de l'string amb una expressió regular.
    //   Crear una funció que comprovi si és correcta la lletra del DNI / NIE. El procediment a seguir
    //és el següent:
    //a. S'elimina la lletra final.
    //b. Si és un NIE i comença per X es substitueix per un 0, la Y per un 1 i així
    //successivament.
    //c. Es calcula la resta o mòdul de dividir el nombre resultant per 23. S'obtindrà un valor
    //entre 0 i 23.
    //d. La lletra s'obté consultant la llista: 0=T, 1=R, 2=W, 3=A, 4=G, 5=M, 6=Y, 7=F, 8=P,
    //9=D, 10=X, 11=B, 12=N, 13=J, 14=Z, 15=S, 16=Q, 17=V, 18=H, 19=L, 20=C, 21=K,
    //22=E, 23=O.
    console.log("-----------------");
    function esNifValid(nif){
        var re = /^[\dKLMXY]\d{7}[A-HJ-NP-TV-Z]$/;
        nif = nif.toUpperCase();
        if(!re.test(nif)) return false;
        var digitControl, resultat = false;
        if (nif[0] === "X") {
            digitControl = parseInt("0" + nif.substring(1, 8));
            resultat = getDigitControlDni(digitControl) === nif[nif.length-1];
        } else if (nif[0] === "Y"){
            digitControl = parseInt("1" + nif.substring(1, 8));
            resultat = getDigitControlDni(digitControl) === nif[nif.length-1];
        } else if (!isNaN(parseInt(nif[0]))){
            digitControl = parseInt(nif.substring(0, 8));
            resultat = getDigitControlDni(digitControl) === nif[nif.length-1];
        } else {
            digitControl = getDigitControlNIF(nif.substring(1, 8));
            if(!isNaN(parseInt(nif[nif.length-1]))){
                resultat = digitControl.digit === nif[nif.length-1];
            } else{
                resultat = digitControl.lletra === nif[nif.length-1];
            }
        }
        return resultat;
    }
    
    function getDigitControlDni(digit){
        var lletra = "TRWAGMYFPDXBNJZSQVHLCKEO";
        return lletra[digit % 23];
    }
    
    function getDigitControlNIF(digit){
        var lletra = "JABCDEFGHI";
        var suma, aux;
        suma = 0;
        for (var i = 0; i < digit.length; i++) {
            if (i % 2 !== 0)
                suma += parseInt(digit[i]);
            else {
                aux = 2 * parseInt(digit[i]);
                suma += (aux < 10 ? aux : parseInt(aux.toString()[0]) + parseInt(aux.toString()[1]));
            }
        }
        suma = suma.toString();
        suma = parseInt(suma[suma.length - 1]);
        suma = (suma === 0 ? 0: 10-suma);
        return {
            digit: suma,
            lletra: lletra[suma]
        };   
    }    
    
    var dni = "X0000001R";
    console.log("19. " + dni + " és vàlid: " + esNifValid(dni));
    dni = "M58818501";
    console.log("19. " + dni + " és vàlid: " + esNifValid(dni));
    dni = "M5881850A";
    console.log("19. " + dni + " és vàlid: " + esNifValid(dni));
    dni = "52464918D";
    console.log("19. " + dni + " és vàlid: " + esNifValid(dni));
})();

