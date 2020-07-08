// my intitialization
const searchBtn = document.getElementById('search')
const   city = document.getElementById('city')
const info = document.getElementById('info')


//  Creating a reusable function  

function fetchData(url){
    return fetch(url)
           .then(checkStatus)
           .then(response => response.json())
           .catch(error => console.log ('looks like the dog eaat your site', error))
}

    // Fetch weather
  fetch.all([
  fetchData(`https://api.openweathermap.org/data/2.5/weather?q=San Francisco&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`),
  fetchData(`https://api.openweathermap.org/data/2.5/onecall?lat=37.77&lon=-122.42&exclude=minutely,hourly&appid=7432c602e487c2cf5ba43b3f4ea7e8d6`)

  ])
  .then(data => {

    const x = data[0].message;
    const y = data[1].message;

    generateSevenDaysData(x);
    generateGeoCoords(y);
   
  

  })













