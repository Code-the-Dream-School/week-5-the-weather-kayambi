// // my intitialization
// const searchBtn = document.getElementById('search');
// const   mycity = document.getElementById('city');
// const tableInfo = document.getElementById('info');
// const mycity= document.querySelector(".cityName p");
// const myCountry= document.querySelector(".countryName p ");
// const myWeather= document.querySelector(".currentWeather p");

// const sevenDayHost = "https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&";
// const weatherHost = "https://api.openweathermap.org/data/2.5/weather?q=";
// const authLock = "appid=7432c602e487c2cf5ba43b3f4ea7e8d6";

// var city = "San Francisco"; //input.value;
// var lat, lon, forecastData;

// // Build weather data url for api call to get lat and lon
// function weatherURL() {
//   return `${weatherHost}${city}&${authLock}`;
// }

// // Build forecast data url for api call to get seven forecast info
// function forecastURL() {
//   return `${sevenDayHost}&lat=${lat}&lon=${lon}&${authLock}`;
// }
// // 
// // Global fetch function that creates a promise to return data.
// async function getData(dataURL) {
//   let response = await fetch(dataURL);
//   return response.json();
// }

// // Returns seven day forecast data
// function getForecastData(url) {
//   return getData(url).then(data => {
//     // Then set the forecastData variable to the data received
//     forecastData = data;
//   });
// }

// // Returns weather data for lat and lon
// function getAllData(url) {
//   // first get lat and lon from weather api
//   getData(url)
//     .then(data => {
//       // Once data is received, update global vars {lat and lon}
//       lat = data.coord.lat;
//       lon = data.coord.lon;
//     })
//     .then(() => {
//       // Once the lat and lon have been update, Call/Invoke the function to get the seven day forecast data
//       getForecastData(forecastURL());
//     })

// //     .then(() => {

// //     searchBtn.addEventListener('click',function(){
// //         mycity.innerHTML = forecastData;

// //       })

// //     });

// // }

// // (getAllData(weatherURL()));
