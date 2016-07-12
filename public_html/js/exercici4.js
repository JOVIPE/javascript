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
    var er7=/^$/;
    var tfno="616141424";
    console.log("Telefono" + tfno+ " es " + er7.test(tfno));
})();

