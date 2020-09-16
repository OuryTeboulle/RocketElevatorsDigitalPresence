/* QUOTE FORM JAVASCRIPT */

/* VARIABLES */

var range;
var installation;
var radio;

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


/* RADIO BUTTONS SCRIPT */

function radioFunction() {

    if (document.getElementById('standard').checked) {
        radio = document.getElementById('standard').value;
        range = 7565
        installation = 0.1
        
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(standardCostCommercial);
            $("#installation_cost").val(standardInstallationCommercial);
            $("#total_cost").val(standardTotalCostCommercial);
            
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(standardCostResidential);
            $("#installation_cost").val(standardInstallationResidential);
            $("#total_cost").val(standardTotalCostResidential);

        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(standardCostCorporate);
            $("#installation_cost").val(standardInstallationCorporate);
            $("#total_cost").val(standardTotalCostCorporate);

        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(standardCostHybrid);
            $("#installation_cost").val(standardInstallationHybrid);
            $("#total_cost").val(standardTotalCostHybrid);
        }
            
    } else if (document.getElementById('premium').checked) {
        radio = document.getElementById('premium').value;
        range = 12345
        installation = 0.13
        
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(premiumCostCommercial);
            $("#installation_cost").val(premiumInstallationCommercial);
            $("#total_cost").val(premiumTotalCostCommercial);
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(premiumCostResidential);
            $("#installation_cost").val(premiumInstallationResidential);
            $("#total_cost").val(premiumTotalCostResidential);
        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(premiumCostCorporate);
            $("#installation_cost").val(premiumInstallationCorporate);
            $("#total_cost").val(premiumTotalCostCorporate);
        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(premiumCostHybrid);
            $("#installation_cost").val(premiumInstallationHybrid);
            $("#total_cost").val(premiumTotalCostHybrid);

        }
    } else if (document.getElementById('excelium').checked) {
        radio = document.getElementById('excelium').value;
        range = 15400
        installation = 0.16
        if (type == 'commercial') {
            commercialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(exceliumCostCommercial);
            $("#installation_cost").val(exceliumInstallationCommercial);
            $("#total_cost").val(exceliumTotalCostCommercial);
        } else if (type == 'residential') {
            residentialQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(exceliumCostResidential);
            $("#installation_cost").val(exceliumInstallationResidential);
            $("#total_cost").val(exceliumTotalCostResidential);
        } else if (type == 'corporate') {
            corporateQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(exceliumCostCorporate);
            $("#installation_cost").val(exceliumInstallationCorporate);
            $("#total_cost").val(exceliumTotalCostCorporate);
        } else if (type == 'hybrid') {
            hybridQuote();
            $("#elevator_unit_price").val(range);
            $("#elevator_cost").val(exceliumCostHybrid);
            $("#installation_cost").val(exceliumInstallationHybrid);
            $("#total_cost").val(exceliumTotalCostHybrid);

        }
    }
}


   
   
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


/* COMMERCIAL BUILDING QUOTE FUNCTION */

function commercialQuote() {
    commercialElevator = $("#elevator_commercial").val();
    $("#elevator_commercial_need").val(commercialElevator);
    
    /* COMMERCIAL BUILDING QUOTE - STANDARD */

    standardCostCommercial = commercialElevator * range;
    standardInstallationCommercial = standardCostCommercial * installation;
    standardTotalCostCommercial = standardCostCommercial + standardInstallationCommercial
    
    /* COMMERCIAL BUILDING QUOTE - PREMIUM */

    premiumCostCommercial = commercialElevator * range;
    premiumInstallationCommercial = premiumCostCommercial * installation;
    premiumTotalCostCommercial = premiumCostCommercial + premiumInstallationCommercial;

    /* COMMERCIAL BUILDING QUOTE - EXCELIUM */

    exceliumCostCommercial = commercialElevator * range;
    exceliumInstallationCommercial = exceliumCostCommercial * installation;
    exceliumTotalCostCommercial = exceliumCostCommercial + exceliumInstallationCommercial;
}

/* RESIDENTIAL BUILDING QUOTE FUNCTION */

function residentialQuote() {
    var x = $("#apartments_residential").val();
    var y = $("#floors_residential").val();
    console.log ("x vaut " + x + " et y vaut" + y);
    var apptFloorAverage = Math.ceil(x / y);
    var ElevatorApptFloorAverage = Math.ceil(apptFloorAverage / 6)
    var column = Math.ceil(y / 20);
    var elevatorNeed = ElevatorApptFloorAverage * column;
    $("#elevator_residential_need").val(elevatorNeed);

    /* RESIDENTIAL BUILDING QUOTE - STANDARD */

    standardCostResidential = elevatorNeed * 7565;
    standardInstallationResidential = standardCostResidential * 0.1;
    standardInstallationCostResidential = standardInstallationResidential.toFixed(2);
    standardTotalCostResidential = standardCostResidential + standardInstallationResidential;

    /* RESIDENTIAL BUILDING QUOTE - PREMIUM */

    premiumCostResidential = elevatorNeed * 12345;
    premiumInstallationResidential = Math.round(premiumCostResidential) * 0.13;
    premiumInstallationCostResidential = premiumInstallationResidential.toFixed(2);
    premiumTotalCostResidential = premiumCostResidential + premiumInstallationResidential;

    /* RESIDENTIAL BUILDING QUOTE - EXCELIUM */

    exceliumCostResidential = elevatorNeed * 15400;
    exceliumInstallationResidential = exceliumCostResidential * 0.16;
    exceliumInstallationCostResidential = exceliumInstallationResidential.toFixed(2);
    exceliumTotalCostResidential = exceliumCostResidential + exceliumInstallationResidential;
}



/* CORPORATE BUILDING QUOTE - FUNCTION */

function corporateQuote() {

    var occupantsCorporate = $("#occupants_corporate").val();
    var floorsCorporate = $("#floors_corporate").val();
    var basementsCorporate = $("#basements_corporate").val();

    var totalFloorsCorporate = (floorsCorporate + basementsCorporate);
    var totalOccupantsCorporate = (totalFloorsCorporate * occupantsCorporate);

    var totalElevatorsCorporate = Math.ceil(totalOccupantsCorporate / 1000);
    var columnCorporate = Math.ceil(totalFloorsCorporate / 20);
    var elevatorsPerColumnAverageCorporate = Math.ceil(totalElevatorsCorporate / columnCorporate);
    var elevatorsNeededCorporate = columnCorporate * elevatorsPerColumnAverageCorporate;
    $("#elevator_corporate_need").val(elevatorsNeededCorporate);
    

    /* CORPORATE BUILDING QUOTE - STANDARD */

    standardCostCorporate = elevatorsNeededCorporate * 7565;
    standardInstallationCorporate = standardCostCorporate * 0.1;
    standardInstallationCostCorporate = parseInt(standardInstallationCorporate.toFixed(2));
    standardTotalCostCorporate = standardCostCorporate + standardInstallationCostCorporate;

    /* CORPORATE BUILDING QUOTE - PREMIUM */

    premiumCostCorporate = elevatorsNeededCorporate * 12345;
    premiumInstallationCorporate = premiumCostCorporate * 0.13;
    premiumInstallationCostCorporate  = parseInt(premiumInstallationCorporate.toFixed(2));
    premiumTotalCostCorporate = premiumCostCorporate + premiumInstallationCostCorporate;

     /* CORPORATE BUILDING QUOTE - EXCELIUM */

    exceliumCostCorporate = elevatorsNeededCorporate * 15400;
    exceliumInstallationCorporate = exceliumCostCorporate * 0.16;
    exceliumInstallationCostCorporate = parseInt(exceliumInstallationCorporate.toFixed(2));
    exceliumTotalCostCorporate = exceliumCostCorporate + exceliumInstallationCostCorporate;
}

/* HYBRID BUILDING QUOTE - FUNCTION */

function hybridQuote() {

    var occupantsHybrid = $("#occupants_hybrid").val();
    var floorsHybrid = $("#floors_hybrid").val();
    var basementsHybrid = $("#basements_hybrid").val();

    var totalFloorsHybrid = (floorsHybrid + basementsHybrid);
    var totalOccupantsHybrid = (totalFloorsHybrid * occupantsHybrid);

    var totalElevatorsHybrid = Math.ceil(totalOccupantsHybrid / 1000);
    var columnHybrid = Math.ceil(totalFloorsHybrid / 20);
    var elevatorsPerColumnAverageHybrid = Math.ceil(totalElevatorsHybrid / columnHybrid);
    var elevatorsNeededHybrid = columnHybrid * elevatorsPerColumnAverageHybrid;
    $("#elevator_hybrid_need").val(elevatorsNeededHybrid);
    

    /* HYBRID BUILDING QUOTE - STANDARD */

    standardCostHybrid = elevatorsNeededHybrid * 7565;
    standardInstallationHybrid = standardCostHybrid * 0.1;
    standardInstallationCostHybrid = parseInt(standardInstallationHybrid.toFixed(2));
    standardTotalCostHybrid = standardCostHybrid + standardInstallationCostHybrid;

    /* HYBRID BUILDING QUOTE - PREMIUM */

    premiumCostHybrid = elevatorsNeededHybrid * 12345;
    premiumInstallationHybrid = premiumCostHybrid * 0.13;
    premiumInstallationCostHybrid  = parseInt(premiumInstallationHybrid.toFixed(2));
    premiumTotalCostHybrid = premiumCostHybrid + premiumInstallationCostHybrid;

     /* HYBRID BUILDING QUOTE - EXCELIUM */

    exceliumCostHybrid = elevatorsNeededHybrid * 15400;
    exceliumInstallationHybrid = exceliumCostHybrid * 0.16;
    exceliumInstallationCostHybrid = parseInt(exceliumInstallationHybrid.toFixed(2));
    exceliumTotalCostHybrid = exceliumCostHybrid + exceliumInstallationCostHybrid;
}