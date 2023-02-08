
var button = document.querySelector('.button');
var search = document.querySelector('.search');
var dataContainer = document.querySelector('#dataContainer');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4');
var day5 = document.querySelector('#day5');


var APIKey = "ee1d17369c17fb2d95eb1b5c4433c89b";

function getAPI() {

	var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + search.value + "&appid=" + APIKey 

	fetch(requestUrl)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		return {lat: data[0].lat, lon: data[0].lon}
	})
	.then(function (geoData) {
		var lat = geoData.lat
		var lon = geoData.lon

		//28.5421 -81.379

		requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&cnt=6&appid=" + APIKey
	
		fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		})
		
			var cityName = document.createAttribute('h3')
			cityName.textContent = data.city.name
			dataContainer.append(cityName)
		
	})

}

button.addEventListener('click', getAPI)

console.log









