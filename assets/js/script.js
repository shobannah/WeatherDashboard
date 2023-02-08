
var button = document.querySelector('.button');
var search = document.querySelector('.search');
// var name = document.querySelector('.name');
// var date = document.querySelector('.date');
// var temp = document.querySelector('.temp');
// var wind = document.querySelector('.wind');
// var humidity = document.querySelector('.humidity');

var APIKey = "ee1d17369c17fb2d95eb1b5c4433c89b";

var cityName = [];
var lat = [];
var lon = [];

function getAPI() {

	var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + search + "&appid=" + APIKey 

	fetch(requestUrl)
	.then(function (response) {
		console.log(response)
		return response.json();
	})
	.then(function (data) {
		console.log(data);
	})
}

button.addEventListener('click', getAPI())

// function showWeather() {

	
// 	var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey

// 	fetch(url)
// 	.then(function (response) {
// 		console.log(response)
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log(data);
// 	})
// }

// showWeather()