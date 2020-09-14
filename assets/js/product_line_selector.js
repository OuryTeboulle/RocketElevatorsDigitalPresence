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



function radioFunction() {

    if (document.getElementById('standard').checked) {
        radio = document.getElementById('standard').value;
        range = 7565
        installation = 0.1
        
        if (type == 'commercial') {
            console.info("commercial");
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
