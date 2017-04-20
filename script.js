
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
var capitalList = $("#capitals");

$('#search').click(searchCountries);
$(".point").click(showDetails); //to chba raczej źle

function searchCountries() {
  	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';

    $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  	countriesList.empty();
  	capitalList.empty();
    resp.forEach(function(item) {
        $('<li>').addClass('point').text(item.name).appendTo(countriesList);
        $('<li>').text(item.capital).appendTo(capitalList); 
});
}

function showDetails() {
	console.log("www");
	countriesList.empty();
	$("#capitals").empty();
}


// 1 - jak zrobić, aby po wpisaniu 3 liter równiez działał enter?
// 2 - czemu używa się głównie ID, a nie classy? [unikalność?]