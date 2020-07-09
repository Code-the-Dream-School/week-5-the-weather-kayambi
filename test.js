const api = {
    key:"7432c602e487c2cf5ba43b3f4ea7e8d6", 
    base:"https://api.openweathermap.org/data/2.5/",
    // baseforCast ="https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&"

  }
// test the eventListiner

const searchbox =document.querySelector(".search").
searchbox.addEventListener('input', myFunction);

function myFunction(e) {
    getResult(searchbox.value);
}

//   BUiling weather forcast

  function getResult(query) {
    fetch(`${api.base}weather?q=${query}&units=metrics&appid=${api.key}`)
          .then(weather => {
            return weather.json();
  
          }).then (displayResults);
  
  }
//    the function to display result to UI 
  
  function displayResults(weather){
  
    // console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name} ${weather.sys.country}`;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText =dateBuilder(now); 
    
    let temp = document.querySelector('.current .temp') 
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>•c</span>`;
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  

  }
//   set the date bulder function

  function dateBuilder(d) { 

    let months =["January","February","March","April","May",
    "June","July","August","September","October","November","December"];

    let days= ["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month =months [d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;

  }

// This will be  the process of getting Data


