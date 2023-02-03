var APIKey = "ee1d17369c17fb2d95eb1b5c4433c89b";

var city;

var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var searchInput = document.getElementById("search-input");

// fetch(requestUrl)
// 	.then(function (response) {
// 		console.log(response.status);
// 		return response.json();
// 	})
// 	.then(function (data) {
// 		console.log(data);
// });

function getApi(requestUrl) {
	fetch(requestUrl)
		.then(function (response) {
			console.log(response.status);
			return response.json();
		})
		.then(function (data) {
			console.log(data);
		});
}

getApi(requestUrl);

