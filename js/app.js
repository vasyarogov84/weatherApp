"use strict"

searchButton.addEventListener('click', searchWeather);
 
 
function searchWeather() {
  loadingText.style.display = "block";
  weatherBox.style.display = "none";
  var cityName = searchCity.value;
  if(cityName.trim().length == 0) {
     alert("Please enter valid city name!");
  }
  var http = new XMLHttpRequest();
  var apiKey = "YOUR API KEY";
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&=" + apiKey;
  var method = "GET";

  http.open(method, url);
  http.onreadystatechange = function() {
    if(http.readyState == XMLHttpRequest.DONE && http.status === 200) {
          var data = JSON.parse(http.responseText);
          var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());
          weatherData.temperature = data.main.temp;
          updateWeather(weatherData);
    } else if (http.readyState == XMLHttpRequest.DONE) {
      alert("Something went wrong!");
    }
  };
  http.send();
}

function updateWeather(weatherData) {
  loadingText.style.display = "none";
  weatherCity.textContent = weatherData.cityName;
  weatherDescription.textContent = weatherData.description;
  weatherTemperature.textContent = weatherData.temperature;

  weatherBox.style.display = "block";
}




















































// var http = require('http');
// http.createServer(function(request,response) {
//   response.writeHead(200, {'Content-Type':'text/plain'});
//   setInterval(function() {
//     response.write(new Date() + "\n");
//   },1000);
// }).listen(3000);
// console.log("Check port:3000");




// var http  = new XMLHttpRequest();
// var url =  'http://jsonplaceholder.typicode.com/posts/1';
  

// $.ajax({
//    url: url,
//    method: 'GET'
// }).then(function(data) {
//   var i = 0;
//         for(var items in data) {
//           i++;
//  console.log("data" +  i + " " + data[items]);
//         }
  
// });
