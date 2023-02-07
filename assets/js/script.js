;
var button = document.querySelector('.button');
var search = document.querySelector('.search');
var name = document.querySelector('.name');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');

var APIKey = "ee1d17369c17fb2d95eb1b5c4433c89b";

var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q="+ search.value +"&appid=" + APIKey;

console.log(requestUrl)




button.addEventListener('click', function() {
	fetch(requestUrl)
	.then(function (response) {
		// console.log(response.data)
		return response.json();
		})
	.then(function (data) {
		console.log(data);
		});
})


