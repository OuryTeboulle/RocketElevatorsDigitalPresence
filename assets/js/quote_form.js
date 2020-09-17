/* QUOTE FORM JAVASCRIPT */

/* VARIABLES */

var range;
var installation;
var radio;


/* RAW COST VARIABLES */

var standardCostCommercial;
var standardInstallationCommercial;
var standardInstallationCostCommercial;
var standardTotalCostCommercial;
var premiumCostCommercial;
var premiumInstallationCommercial;
var premiumInstallationCostCommercial;
var premiumTotalCostCommercial;
var exceliumCostCommercial;
var exceliumInstallationCommercial;
var exceliumInstallationCostCommercial;
var exceliumTotalCostCommercial;

var standardCostResidential;
var standardInstallationResidential;
var standardInstallationCostResidential;
var standardTotalCostResidential;
var premiumCostResidential;
var premiumInstallationResidential;
var premiumInstallationCostResidential;
var premiumTotalCostResidential;
var exceliumCostResidential;
var exceliumInstallationResidential;
var exceliumInstallationCostResidential;
var exceliumTotalCostResidential;

var standardCostCorporate;
var standardInstallationCorporate;
var standardInstallationCostCorporate;
var standardTotalCostCorporate;
var premiumCostCorporate;
var premiumInstallationCorporate;
var premiumInstallationCostCorporate;
var premiumTotalCostCorporate;
var exceliumCostCorporate;
var exceliumInstallationCorporate;
var exceliumInstallationCostCorporate;
var exceliumTotalCostCorporate;

var standardCostHybrid;
var standardInstallationHybrid;
var standardInstallationCostHybrid;
var standardTotalCostHybrid;
var premiumCostHybrid;
var premiumInstallationHybrid;
var premiumInstallationCostHybrid;
var premiumTotalCostHybrid;
var exceliumCostHybrid;
var exceliumInstallationHybrid;
var exceliumInstallationCostHybrid;
var exceliumTotalCostHybrid;


/* NUMERAL JS COST VARIABLES */

var numeralRange

var numeralstandardCostCommercial;
var numeralstandardInstallationCommercial;
var numeralstandardInstallationCostCommercial;
var numeralstandardTotalCostCommercial;
var numeralpremiumCostCommercial;
var numeralpremiumInstallationCommercial;
var numeralpremiumInstallationCostCommercial;
var numeralpremiumTotalCostCommercial;
var numeralexceliumCostCommercial;
var numeralexceliumInstallationCommercial;
var numeralexceliumInstallationCostCommercial;
var numeralexceliumTotalCostCommercial;

var numeralstandardCostResidential;
var numeralstandardInstallationResidential;
var numeralstandardInstallationCostResidential;
var numeralstandardTotalCostResidential;
var numeralpremiumCostResidential;
var numeralpremiumInstallationResidential;
var numeralpremiumInstallationCostResidential;
var numeralpremiumTotalCostResidential;
var numeralexceliumCostResidential;
var numeralexceliumInstallationResidential;
var numeralexceliumInstallationCostResidential;
var numeralexceliumTotalCostResidential;

var numeralstandardCostCorporate;
var numeralstandardInstallationCorporate;
var numeralstandardInstallationCostCorporate;
var numeralstandardTotalCostCorporate;
var numeralpremiumCostCorporate;
var numeralpremiumInstallationCorporate;
var numeralpremiumInstallationCostCorporate;
var numeralpremiumTotalCostCorporate;
var numeralexceliumCostCorporate;
var numeralexceliumInstallationCorporate;
var numeralexceliumInstallationCostCorporate;
var numeralexceliumTotalCostCorporate;

var numeralstandardCostHybrid;
var numeralstandardInstallationHybrid;
var numeralstandardInstallationCostHybrid;
var numeralstandardTotalCostHybrid;
var numeralpremiumCostHybrid;
var numeralpremiumInstallationHybrid;
var numeralpremiumInstallationCostHybrid;
var numeralpremiumTotalCostHybrid;
var numeralexceliumCostHybrid;
var numeralexceliumInstallationHybrid;
var numeralexceliumInstallationCostHybrid;
var numeralexceliumTotalCostHybrid;



/* RADIO BUTTONS SCRIPT */

function radioFunction() {

    if (document.getElementById('standard').checked) {
        radio = document.getElementById('standard').value;
        range = 7565
        numeralRange = numeral(range).format(	'0,0[.]00 $');
        installation = 0.1
        
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralstandardCostCommercial);
            $("#installation_cost").val(numeralstandardInstallationCostCommercial);
            $("#total_cost").val(numeralstandardTotalCostCommercial);
            
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralstandardCostResidential);
            $("#installation_cost").val(numeralstandardInstallationCostResidential);
            $("#total_cost").val(numeralstandardTotalCostResidential);

        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralstandardCostCorporate);
            $("#installation_cost").val(numeralstandardInstallationCostCorporate);
            $("#total_cost").val(numeralstandardTotalCostCorporate);

        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralstandardCostHybrid);
            $("#installation_cost").val(numeralstandardInstallationCostHybrid);
            $("#total_cost").val(numeralstandardTotalCostHybrid);
        }
            
    } else if (document.getElementById('premium').checked) {
        radio = document.getElementById('premium').value;
        range = 12345
        numeralRange = numeral(range).format(	'0,0[.]00 $');
        installation = 0.13
        
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralpremiumCostCommercial);
            $("#installation_cost").val(numeralpremiumInstallationCostCommercial);
            $("#total_cost").val(numeralpremiumTotalCostCommercial);
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralpremiumCostResidential);
            $("#installation_cost").val(numeralpremiumInstallationCostResidential);
            $("#total_cost").val(numeralpremiumTotalCostResidential);
        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralpremiumCostCorporate);
            $("#installation_cost").val(numeralpremiumInstallationCostCorporate);
            $("#total_cost").val(numeralpremiumTotalCostCorporate);
        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralpremiumCostHybrid);
            $("#installation_cost").val(numeralpremiumInstallationCostHybrid);
            $("#total_cost").val(numeralpremiumTotalCostHybrid);

        }
    } else if (document.getElementById('excelium').checked) {
        radio = document.getElementById('excelium').value;
        range = 15400
        numeralRange = numeral(range).format(	'0,0[.]00 $');
        installation = 0.16
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralexceliumCostCommercial);
            $("#installation_cost").val(numeralexceliumInstallationCostCommercial);
            $("#total_cost").val(numeralexceliumTotalCostCommercial);
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralexceliumCostResidential);
            $("#installation_cost").val(numeralexceliumInstallationCostResidential);
            $("#total_cost").val(numeralexceliumTotalCostResidential);
        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralexceliumCostCorporate);
            $("#installation_cost").val(numeralexceliumInstallationCostCorporate);
            $("#total_cost").val(numeralexceliumTotalCostCorporate);
        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(numeralRange);
            $("#elevator_cost").val(numeralexceliumCostHybrid);
            $("#installation_cost").val(numeralexceliumInstallationCostHybrid);
            $("#total_cost").val(numeralexceliumTotalCostHybrid);

        }
    }
}

/* ONLY NUMERIC INPUT FUNCTION SCRIPT */

function isNumberKey(evt){ 
    var charCode = (evt.which) ? evt.which : event.keyCode 
    if (charCode > 31 && (charCode < 48 || charCode > 57)) 
        return false; 
    return true; 
} 



/* RESET FIELDS FUNCTION SCRIPT */


   /* RESET FIELDS FUNCTION SCRIPT - COSTS */
   
   $('#buildingType').change(function choice() {
        $('#elevator_unit_price').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_cost').val("");
    });
    $('#buildingType').change(function choice() {
        $('#installation_cost').val("");
    });
    $('#buildingType').change(function choice() {
        $('#total_cost').val("");
    });
    
    /* RESET FIELDS FUNCTION SCRIPT - RESIDENTIAL */
    
    $('#buildingType').change(function choice() {
        $('#apartments_residential').val("");
    });
    $('#buildingType').change(function choice() {
        $('#floors_residential').val("");
    });
    $('#buildingType').change(function choice() {
        $('#basements_residential').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_residential_need').val("");
    });
    
    /* RESET FIELDS FUNCTION SCRIPT - COMMERCIAL */
    
    $('#buildingType').change(function choice() {
        $('#businesses_commercial').val("");
    });
    $('#buildingType').change(function choice() {
        $('#floors_commercial').val("");
    });
    $('#buildingType').change(function choice() {
        $('#basements_commercial').val("");
    });
    $('#buildingType').change(function choice() {
        $('#parking_commercial').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_commercial').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_commercial_need').val("");
    });
    
    /* RESET FIELDS FUNCTION SCRIPT - CORPORATE */

    $('#buildingType').change(function choice() {
        $('#companies_corporate').val("");
    });
    $('#buildingType').change(function choice() {
        $('#floors_corporate').val("");
    });
    $('#buildingType').change(function choice() {
        $('#basements_corporate').val("");
    });
    $('#buildingType').change(function choice() {
        $('#parking_corporate').val("");
    });
    $('#buildingType').change(function choice() {
        $('#occupants_corporate').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_corporate_need').val("");
    });
    
    /* RESET FIELDS FUNCTION SCRIPT - HYBRID */
    
    $('#buildingType').change(function choice() {
        $('#businesses_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#floors_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#basements_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#parking_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#occupants_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#hours_hybrid').val("");
    });
    $('#buildingType').change(function choice() {
        $('#elevator_hybrid_need').val("");
    });

    /* RESET FIELDS FUNCTION SCRIPT */

    function closeAlert(){
    document.getElementsByClassName('alert')[0].style.display = 'none';
    }


/* COMMERCIAL BUILDING QUOTE FUNCTION */

function commercialQuote() {

    
    var commercialElevator = $("#elevator_commercial").val();
    $("#elevator_commercial_need").val(commercialElevator);

    var businessesCommercial = $("#businesses_commercial").val();
    var floorsCommercial = $("#floors_commercial").val();
    var basementsCommercial = $("#basements_commercial").val();
    var parkingCommercial = $("#parking_commercial").val();

    if (commercialElevator != "" && businessesCommercial != "" && floorsCommercial != "" && basementsCommercial != "" && parkingCommercial != "" ){
    
    /* COMMERCIAL BUILDING QUOTE - STANDARD */
    
    /* RAW COSTS */
    standardCostCommercial = commercialElevator * range;
    standardInstallationCommercial = standardCostCommercial * installation;
    standardInstallationCostCommercial = standardInstallationCommercial.toFixed(2);
    standardTotalCostCommercial = standardCostCommercial + standardInstallationCommercial;
    /* NUMERAL JS COSTS */
    numeralstandardCostCommercial = numeral(standardCostCommercial).format(	'0,0[.]00 $');
    numeralstandardInstallationCostCommercial = numeral(standardInstallationCostCommercial).format(	'0,0[.]00 $');
    numeralstandardTotalCostCommercial = numeral(standardTotalCostCommercial).format(	'0,0[.]00 $');
    
    /* COMMERCIAL BUILDING QUOTE - PREMIUM */

    /* RAW COSTS */
    premiumCostCommercial = commercialElevator * range;
    premiumInstallationCommercial = premiumCostCommercial * installation;
    premiumInstallationCostCommercial = premiumInstallationCommercial.toFixed(2);
    premiumTotalCostCommercial = premiumCostCommercial + premiumInstallationCommercial;
    /* NUMERAL JS COSTS */
    numeralpremiumCostCommercial = numeral(standardCostCommercial).format(	'0,0[.]00 $');
    numeralpremiumInstallationCostCommercial = numeral(standardInstallationCommercial).format(	'0,0[.]00 $');
    numeralpremiumTotalCostCommercial = numeral(standardTotalCostCommercial).format(	'0,0[.]00 $');
    

    /* COMMERCIAL BUILDING QUOTE - EXCELIUM */

    /* RAW COSTS */
    exceliumCostCommercial = commercialElevator * range;
    exceliumInstallationCommercial = exceliumCostCommercial * installation;
    exceliumInstallationCostCommercial = exceliumInstallationCommercial.toFixed(2);
    exceliumTotalCostCommercial = exceliumCostCommercial + exceliumInstallationCommercial;
    /* NUMERAL JS COSTS */
    numeralexceliumCostCommercial = numeral(standardCostCommercial).format(	'0,0[.]00 $');
    numeralexceliumInstallationCostCommercial = numeral(standardInstallationCommercial).format(	'0,0[.]00 $');
    numeralexceliumTotalCostCommercial = numeral(standardTotalCostCommercial).format(	'0,0[.]00 $');

    /* FILL FIELDS MESSAGE LAUNCHER - COMMERCIAL */

    } else {
            if (commercialElevator =="")
            document.getElementsByClassName('alert')[0].style.display = 'block';

            if (businessesCommercial =="")
            document.getElementsByClassName('alert')[0].style.display = 'block';
            
            if (floorsCommercial =="")
            document.getElementsByClassName('alert')[0].style.display = 'block';

            if (basementsCommercial =="")
            document.getElementsByClassName('alert')[0].style.display = 'block';

            if (parkingCommercial =="")
            document.getElementsByClassName('alert')[0].style.display = 'block';
        }
    

}

/* RESIDENTIAL BUILDING QUOTE FUNCTION */

function residentialQuote() {
    var x = $("#apartments_residential").val();
    var y = $("#floors_residential").val();
    var apptFloorAverage = Math.ceil(x / y);
    var ElevatorApptFloorAverage = Math.ceil(apptFloorAverage / 6);
    var column = Math.ceil(y / 20);
    var elevatorNeed = ElevatorApptFloorAverage * column;
    $("#elevator_residential_need").val(elevatorNeed);

    var basementsResidential = $("#basements_residential").val();
    var elevatorResidentialNeed = $("#elevator_residential_need").val();

    if (x != "" && y != "" && basementsResidential != "" && elevatorResidentialNeed != "" ){

    /* RESIDENTIAL BUILDING QUOTE - STANDARD */

    /* RAW COSTS */
    standardCostResidential = elevatorNeed * 7565;
    standardInstallationResidential = standardCostResidential * 0.1;
    standardInstallationCostResidential = standardInstallationResidential.toFixed(2);
    standardTotalCostResidential = standardCostResidential + standardInstallationResidential;
    /* NUMERAL JS COSTS */
    numeralstandardCostResidential = numeral(standardCostResidential).format(	'0,0[.]00 $');
    numeralstandardInstallationCostResidential = numeral(standardInstallationCostResidential).format(	'0,0[.]00 $');
    numeralstandardTotalCostResidential = numeral(standardTotalCostResidential).format(	'0,0[.]00 $');

    /* RESIDENTIAL BUILDING QUOTE - PREMIUM */

    /* RAW COSTS */
    premiumCostResidential = elevatorNeed * 12345;
    premiumInstallationResidential = Math.round(premiumCostResidential) * 0.13;
    premiumInstallationResidentialWithoutMatRound = premiumCostResidential * 0.13;
    premiumInstallationCostResidential = premiumInstallationResidential.toFixed(2);
    premiumTotalCostResidential = parseInt(premiumCostResidential + premiumInstallationResidential);
    /* NUMERAL JS COSTS */
    numeralpremiumCostResidential = numeral(premiumCostResidential).format(	'0,0[.]00 $');
    numeralpremiumInstallationCostResidential = numeral(premiumInstallationCostResidential).format(	'0,0[.]00 $');
    numeralpremiumTotalCostResidential = numeral(premiumTotalCostResidential).format('0,0[.]00 $');

    /* RESIDENTIAL BUILDING QUOTE - EXCELIUM */

    /* RAW COSTS */
    exceliumCostResidential = elevatorNeed * 15400;
    exceliumInstallationResidential = exceliumCostResidential * 0.16;
    exceliumInstallationCostResidential = exceliumInstallationResidential.toFixed(2);
    exceliumTotalCostResidential = exceliumCostResidential + exceliumInstallationResidential;
    /* NUMERAL JS COSTS */
    numeralexceliumCostResidential = numeral(exceliumCostResidential).format(	'0,0[.]00 $');
    numeralexceliumInstallationCostResidential = numeral(exceliumInstallationCostResidential).format(	'0,0[.]00 $');
    numeralexceliumTotalCostResidential = numeral(exceliumTotalCostResidential).format(	'0,0[.]00 $');

    /* FILL FIELDS MESSAGE LAUNCHER - RESIDENTIAL */

    } else {

      if (x == "")
      document.getElementsByClassName('alert')[0].style.display = 'block';

      if (y == "")
      document.getElementsByClassName('alert')[0].style.display = 'block';
      
      if (basementsResidential == "")
      document.getElementsByClassName('alert')[0].style.display = 'block';

      if (elevatorResidentialNeed == "")
      document.getElementsByClassName('alert')[0].style.display = 'block';
    }
}



/* CORPORATE BUILDING QUOTE - FUNCTION */

function corporateQuote() {

    var occupantsCorporate = $("#occupants_corporate").val();
    var floorsCorporate = $("#floors_corporate").val();
    var basementsCorporate = $("#basements_corporate").val();
    var companiesCorporate = $("#companies_corporate").val();
    var parkingCorporate = $("#parking_corporate").val();

    var totalFloorsCorporate = (floorsCorporate + basementsCorporate);
    var totalOccupantsCorporate = (totalFloorsCorporate * occupantsCorporate);

    var totalElevatorsCorporate = Math.ceil(totalOccupantsCorporate / 1000);
    var columnCorporate = Math.ceil(totalFloorsCorporate / 20);
    var elevatorsPerColumnAverageCorporate = Math.ceil(totalElevatorsCorporate / columnCorporate);
    var elevatorsNeededCorporate = columnCorporate * elevatorsPerColumnAverageCorporate;
    $("#elevator_corporate_need").val(elevatorsNeededCorporate);

    if (occupantsCorporate != "" && floorsCorporate != "" && basementsCorporate != "" && companiesCorporate != "" && parkingCorporate != "" ){

    /* CORPORATE BUILDING QUOTE - STANDARD */

    /* RAW COSTS */
    standardCostCorporate = elevatorsNeededCorporate * 7565;
    standardInstallationCorporate = standardCostCorporate * 0.1;
    standardInstallationCostCorporate = parseInt(standardInstallationCorporate.toFixed(2));
    standardTotalCostCorporate = standardCostCorporate + standardInstallationCostCorporate;
    /* NUMERAL JS COSTS */
    numeralstandardCostCorporate = numeral(standardCostCorporate).format(	'0,0[.]00 $');
    numeralstandardInstallationCostCorporate = numeral(standardInstallationCostCorporate).format(	'0,0[.]00 $');
    numeralstandardTotalCostCorporate = numeral(standardTotalCostCorporate).format(	'0,0[.]00 $');

    /* CORPORATE BUILDING QUOTE - PREMIUM */

    /* RAW COSTS */
    premiumCostCorporate = elevatorsNeededCorporate * 12345;
    premiumInstallationCorporate = premiumCostCorporate * 0.13;
    premiumInstallationCostCorporate  = parseInt(premiumInstallationCorporate.toFixed(2));
    premiumTotalCostCorporate = premiumCostCorporate + premiumInstallationCostCorporate;
    /* NUMERAL JS COSTS */
    numeralpremiumCostCorporate = numeral(premiumCostCorporate).format(	'0,0[.]00 $');
    numeralpremiumInstallationCostCorporate = numeral(premiumInstallationCostCorporate).format(	'0,0[.]00 $');
    numeralpremiumTotalCostCorporate = numeral(premiumTotalCostCorporate).format(	'0,0[.]00 $');

     /* CORPORATE BUILDING QUOTE - EXCELIUM */

    /* RAW COSTS */
    exceliumCostCorporate = elevatorsNeededCorporate * 15400;
    exceliumInstallationCorporate = exceliumCostCorporate * 0.16;
    exceliumInstallationCostCorporate = parseInt(exceliumInstallationCorporate.toFixed(2));
    exceliumTotalCostCorporate = exceliumCostCorporate + exceliumInstallationCostCorporate;
    /* NUMERAL JS COSTS */
    numeralexceliumCostCorporate = numeral(exceliumCostCorporate).format(	'0,0[.]00 $');
    numeralexceliumInstallationCostCorporate = numeral(exceliumInstallationCostCorporate).format(	'0,0[.]00 $');
    numeralexceliumTotalCostCorporate = numeral(exceliumTotalCostCorporate).format(	'0,0[.]00 $');

    /* FILL FIELDS MESSAGE LAUNCHER - CORPORATE */       

    } else {

    if (occupantsCorporate =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (floorsCorporate =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';
    
    if (basementsCorporate =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (companiesCorporate =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (parkingCorporate =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';
    }   
}

/* HYBRID BUILDING QUOTE - FUNCTION */

function hybridQuote() {

    var occupantsHybrid = $("#occupants_hybrid").val();
    var floorsHybrid = $("#floors_hybrid").val();
    var basementsHybrid = $("#basements_hybrid").val();
    var businessesHybrid = $("#businesses_hybrid").val();
    var parkingHybrid = $("#parking_hybrid").val();
    var hoursHybrid = $("#hours_hybrid").val();

    var totalFloorsHybrid = (floorsHybrid + basementsHybrid);
    var totalOccupantsHybrid = (totalFloorsHybrid * occupantsHybrid);

    var totalElevatorsHybrid = Math.ceil(totalOccupantsHybrid / 1000);
    var columnHybrid = Math.ceil(totalFloorsHybrid / 20);
    var elevatorsPerColumnAverageHybrid = Math.ceil(totalElevatorsHybrid / columnHybrid);
    var elevatorsNeededHybrid = columnHybrid * elevatorsPerColumnAverageHybrid;
    $("#elevator_hybrid_need").val(elevatorsNeededHybrid);

    if (occupantsHybrid != "" && floorsHybrid != "" && basementsHybrid != "" && businessesHybrid != "" && parkingHybrid != "" && hoursHybrid != ""){
    

    /* HYBRID BUILDING QUOTE - STANDARD */

    /* RAW COSTS */
    standardCostHybrid = elevatorsNeededHybrid * 7565;
    standardInstallationHybrid = standardCostHybrid * 0.1;
    standardInstallationCostHybrid = parseInt(standardInstallationHybrid.toFixed(2));
    standardTotalCostHybrid = standardCostHybrid + standardInstallationCostHybrid;
    /* NUMERAL JS COSTS */
    numeralstandardCostHybrid = numeral(standardCostHybrid).format(	'0,0[.]00 $');
    numeralstandardInstallationCostHybrid = numeral(standardInstallationCostHybrid).format(	'0,0[.]00 $');
    numeralstandardTotalCostHybrid = numeral(standardTotalCostHybrid).format(	'0,0[.]00 $');

    /* HYBRID BUILDING QUOTE - PREMIUM */

    /* RAW COSTS */
    premiumCostHybrid = elevatorsNeededHybrid * 12345;
    premiumInstallationHybrid = premiumCostHybrid * 0.13;
    premiumInstallationCostHybrid  = parseInt(premiumInstallationHybrid.toFixed(2));
    premiumTotalCostHybrid = premiumCostHybrid + premiumInstallationCostHybrid;
    /* NUMERAL JS COSTS */
    numeralpremiumCostHybrid = numeral(premiumCostHybrid).format(	'0,0[.]00 $');
    numeralpremiumInstallationCostHybrid = numeral(premiumInstallationCostHybrid).format(	'0,0[.]00 $');
    numeralpremiumTotalCostHybrid = numeral(premiumTotalCostHybrid).format(	'0,0[.]00 $');

     /* HYBRID BUILDING QUOTE - EXCELIUM */

    /* RAW COSTS */
    exceliumCostHybrid = elevatorsNeededHybrid * 15400;
    exceliumInstallationHybrid = exceliumCostHybrid * 0.16;
    exceliumInstallationCostHybrid = parseInt(exceliumInstallationHybrid.toFixed(2));
    exceliumTotalCostHybrid = exceliumCostHybrid + exceliumInstallationCostHybrid;
    /* NUMERAL JS COSTS */
    numeralexceliumCostHybrid = numeral(exceliumCostHybrid).format(	'0,0[.]00 $');
    numeralexceliumInstallationCostHybrid = numeral(exceliumInstallationCostHybrid).format(	'0,0[.]00 $');
    numeralexceliumTotalCostHybrid = numeral(exceliumTotalCostHybrid).format(	'0,0[.]00 $');

    /* FILL FIELDS MESSAGE LAUNCHER - EXCELIUM */   

    } else {
        
    if (occupantsHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (floorsHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';
    
    if (basementsHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (businessesHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (parkingHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';

    if (hoursHybrid =="")
    document.getElementsByClassName('alert')[0].style.display = 'block';
    }   
}