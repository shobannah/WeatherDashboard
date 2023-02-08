
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

		requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIKey
	
		fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);

			var cityName = document.createElement('h3')
			cityName.textContent = data.city.name + ' (' + data.list[0].dt_txt + ')' 
			dataContainer.append(cityName)

			var icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png")
			dataContainer.append(icon)
			
			var temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[0].main.temp + "°F"
			dataContainer.append(temp)
			
			var wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[0].wind.speed + " mph"
			dataContainer.append(wind)
			
			var humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%"
			dataContainer.append(humidity)

			var date = document.createElement('h3')
			date.textContent = data.list[8].dt_txt
			day1.append(date)

			icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[8].weather[0].icon + "@2x.png")
			day1.append(icon)
			
			
			 temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[8].main.temp + "°F"
			day1.append(temp)
			
			 wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[8].wind.speed + " mph"
			day1.append(wind)
			
			 humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[8].main.humidity + "%"
			day1.append(humidity)

			date = document.createElement('h3')
			date.textContent = data.list[16].dt_txt
			day2.append(date)

			icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[16].weather[0].icon + "@2x.png")
			day2.append(icon)
			
			 temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[16].main.temp + "°F"
			day2.append(temp)
			
			 wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[16].wind.speed + " mph"
			day2.append(wind)
			
			 humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[16].main.humidity + "%"
			day2.append(humidity)

			date = document.createElement('h3')
			date.textContent = data.list[24].dt_txt
			day3.append(date)

			icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[24].weather[0].icon + "@2x.png")
			day3.append(icon)
			
			
			 temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[24].main.temp + "°F"
			day3.append(temp)
			
			 wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[24].wind.speed + " mph"
			day3.append(wind)
			
			 humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[24].main.humidity + "%"
			day3.append(humidity)

			date = document.createElement('h3')
			date.textContent = data.list[32].dt_txt
			day4.append(date)
			
			icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[32].weather[0].icon + "@2x.png")
			day4.append(icon)
			

			 temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[32].main.temp + "°F"
			day4.append(temp)
			
			 wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[32].wind.speed + " mph"
			day4.append(wind)
			
			 humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[32].main.humidity + "%"
			day4.append(humidity)

			date = document.createElement('h3')
			date.textContent = data.list[39].dt_txt
			day5.append(date)
			
			icon = document.createElement('img')
			icon.setAttribute('alt', 'icon')
			icon.setAttribute('src', "https://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png")
			day5.append(icon)
			

			 temp = document.createElement('p')
			temp.textContent = "Temp: " + data.list[39].main.temp + "°F"
			day5.append(temp)
			
			 wind = document.createElement('p')
			wind.textContent = "Wind: " + data.list[39].wind.speed + " mph"
			day5.append(wind)
			
			 humidity = document.createElement('p')
			humidity.textContent = "Humidity: " + data.list[39].main.humidity + "%"
			day5.append(humidity)

			
		})	
	}

)}

button.addEventListener('click', getAPI)


localStorage.setItem('city',getAPI.toString())
JSON.parse(localStorage.getItem('city'))








