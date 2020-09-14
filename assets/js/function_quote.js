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



function commercialQuote() {
    console.info("FunctionCommercial");
    commercialElevator = $("#elevator_commercial").val();
    $("#elevator_commercial_need").val(commercialElevator);
    console.info(commercialElevator);
    
    standardCostCommercial = commercialElevator * range;
    standardInstallationCommercial = standardCostCommercial * installation;
    standardTotalCostCommercial = standardCostCommercial + standardInstallationCommercial;
    

    premiumCostCommercial = commercialElevator * range;
    premiumInstallationCommercial = premiumCostCommercial * installation;
    premiumTotalCostCommercial = premiumCostCommercial + premiumInstallationCommercial;

    exceliumCostCommercial = commercialElevator * range;
    exceliumInstallationCommercial = exceliumCostCommercial * installation;
    exceliumTotalCostCommercial = exceliumCostCommercial + exceliumInstallationCommercial;
}
