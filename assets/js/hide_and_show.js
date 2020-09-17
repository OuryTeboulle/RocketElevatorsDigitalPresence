$(document).ready(function() {
    document.getElementById('residentialSelect').style.display = 'none';
    document.getElementById('commercialSelect').style.display = 'none';
    document.getElementById('corporateSelect').style.display = 'none';
    document.getElementById('hybridSelect').style.display = 'none';
    document.getElementsByClassName('alert')[0].style.display = 'none';
})
var type;
function choice() {
    type = document.getElementById('buildingType').value;
    if (type == 'residential') {
        document.getElementById('residentialSelect').style.display = 'block';
        document.getElementById('commercialSelect').style.display = 'none';
        document.getElementById('corporateSelect').style.display = 'none';
        document.getElementById('hybridSelect').style.display = 'none';
    } else if (type == 'commercial') {
        document.getElementById('commercialSelect').style.display = 'block';
        document.getElementById('residentialSelect').style.display = 'none';
        document.getElementById('corporateSelect').style.display = 'none';
        document.getElementById('hybridSelect').style.display = 'none';
    } else if (type == 'corporate') {
        document.getElementById('commercialSelect').style.display = 'none';
        document.getElementById('residentialSelect').style.display = 'none';
        document.getElementById('corporateSelect').style.display = 'block';
        document.getElementById('hybridSelect').style.display = 'none';
    } else if (type == 'hybrid') {
        document.getElementById('commercialSelect').style.display = 'none';
        document.getElementById('residentialSelect').style.display = 'none';
        document.getElementById('corporateSelect').style.display = 'none';
        document.getElementById('hybridSelect').style.display = 'block';
    } else {
        document.getElementById('residentialSelect').style.display = 'none';
        document.getElementById('commercialSelect').style.display = 'none';
        document.getElementById('corporateSelect').style.display = 'none';
        document.getElementById('hybridSelect').style.display = 'none';
    }
}


